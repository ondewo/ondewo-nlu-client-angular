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
import * as googleApi000 from '../../google/api/annotations.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleRpc004 from '../../google/rpc/status.pb';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as ondewoNlu006 from '../../ondewo/nlu/operation-metadata.pb';
import * as googleProtobuf007 from '@ngx-grpc/well-known-types';
import * as ondewoNlu008 from '../../ondewo/nlu/operations.pb';
export enum LlmEvaluationExperimentStatus {
  LLM_EVALUATION_EXPERIMENT_STATUS_UNSPECIFIED = 0,
  LLM_EVALUATION_EXPERIMENT_STATUS_PENDING = 1,
  LLM_EVALUATION_EXPERIMENT_STATUS_RUNNING = 2,
  LLM_EVALUATION_EXPERIMENT_STATUS_SUCCEEDED = 3,
  LLM_EVALUATION_EXPERIMENT_STATUS_FAILED = 4,
  LLM_EVALUATION_EXPERIMENT_STATUS_CANCELLED = 5
}
export enum LlmEvaluationEvaluatorType {
  LLM_EVALUATION_EVALUATOR_TYPE_UNSPECIFIED = 0,
  LLM_EVALUATION_EVALUATOR_TYPE_LLM_AS_JUDGE = 1,
  LLM_EVALUATION_EVALUATOR_TYPE_HUMAN = 2,
  LLM_EVALUATION_EVALUATOR_TYPE_HEURISTIC = 3,
  LLM_EVALUATION_EVALUATOR_TYPE_CUSTOM_CODE = 4,
  LLM_EVALUATION_EVALUATOR_TYPE_PAIRWISE = 5
}
/**
 * Message implementation for ondewo.nlu.LlmEvaluationDataset
 */
export class LlmEvaluationDataset implements GrpcMessage {
  static id = 'ondewo.nlu.LlmEvaluationDataset';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LlmEvaluationDataset();
    LlmEvaluationDataset.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LlmEvaluationDataset) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.description = _instance.description || '';
    _instance.llmEvaluationExamples = _instance.llmEvaluationExamples || [];
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.tags = _instance.tags || [];
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.modifiedBy = _instance.modifiedBy || '';
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LlmEvaluationDataset,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          _instance.description = _reader.readString();
          break;
        case 4:
          const messageInitializer4 = new LlmEvaluationExample();
          _reader.readMessage(
            messageInitializer4,
            LlmEvaluationExample.deserializeBinaryFromReader
          );
          (_instance.llmEvaluationExamples =
            _instance.llmEvaluationExamples || []).push(messageInitializer4);
          break;
        case 5:
          _instance.createdAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.createdBy = _reader.readString();
          break;
        case 7:
          (_instance.tags = _instance.tags || []).push(_reader.readString());
          break;
        case 8:
          _instance.modifiedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.modifiedBy = _reader.readString();
          break;
        case 10:
          _instance.parent = _reader.readString();
          break;
        case 11:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LlmEvaluationDataset.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LlmEvaluationDataset,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (
      _instance.llmEvaluationExamples &&
      _instance.llmEvaluationExamples.length
    ) {
      _writer.writeRepeatedMessage(
        4,
        _instance.llmEvaluationExamples as any,
        LlmEvaluationExample.serializeBinaryToWriter
      );
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        5,
        _instance.createdAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(6, _instance.createdBy);
    }
    if (_instance.tags && _instance.tags.length) {
      _writer.writeRepeatedString(7, _instance.tags);
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        8,
        _instance.modifiedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedBy) {
      _writer.writeString(9, _instance.modifiedBy);
    }
    if (_instance.parent) {
      _writer.writeString(10, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(11, _instance.languageCode);
    }
  }

  private _name: string;
  private _displayName: string;
  private _description: string;
  private _llmEvaluationExamples?: LlmEvaluationExample[];
  private _createdAt?: googleProtobuf005.Timestamp;
  private _createdBy: string;
  private _tags: string[];
  private _modifiedAt?: googleProtobuf005.Timestamp;
  private _modifiedBy: string;
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LlmEvaluationDataset to deeply clone from
   */
  constructor(_value?: RecursivePartial<LlmEvaluationDataset.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.description = _value.description;
    this.llmEvaluationExamples = (_value.llmEvaluationExamples || []).map(
      m => new LlmEvaluationExample(m)
    );
    this.createdAt = _value.createdAt
      ? new googleProtobuf005.Timestamp(_value.createdAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.tags = (_value.tags || []).slice();
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf005.Timestamp(_value.modifiedAt)
      : undefined;
    this.modifiedBy = _value.modifiedBy;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    LlmEvaluationDataset.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
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
  get llmEvaluationExamples(): LlmEvaluationExample[] | undefined {
    return this._llmEvaluationExamples;
  }
  set llmEvaluationExamples(value: LlmEvaluationExample[] | undefined) {
    this._llmEvaluationExamples = value;
  }
  get createdAt(): googleProtobuf005.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf005.Timestamp | undefined) {
    this._createdAt = value;
  }
  get createdBy(): string {
    return this._createdBy;
  }
  set createdBy(value: string) {
    this._createdBy = value;
  }
  get tags(): string[] {
    return this._tags;
  }
  set tags(value: string[]) {
    this._tags = value;
  }
  get modifiedAt(): googleProtobuf005.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf005.Timestamp | undefined) {
    this._modifiedAt = value;
  }
  get modifiedBy(): string {
    return this._modifiedBy;
  }
  set modifiedBy(value: string) {
    this._modifiedBy = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LlmEvaluationDataset.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LlmEvaluationDataset.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      description: this.description,
      llmEvaluationExamples: (this.llmEvaluationExamples || []).map(m =>
        m.toObject()
      ),
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      createdBy: this.createdBy,
      tags: (this.tags || []).slice(),
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      modifiedBy: this.modifiedBy,
      parent: this.parent,
      languageCode: this.languageCode
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
  ): LlmEvaluationDataset.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      description: this.description,
      llmEvaluationExamples: (this.llmEvaluationExamples || []).map(m =>
        m.toProtobufJSON(options)
      ),
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      createdBy: this.createdBy,
      tags: (this.tags || []).slice(),
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      modifiedBy: this.modifiedBy,
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module LlmEvaluationDataset {
  /**
   * Standard JavaScript object representation for LlmEvaluationDataset
   */
  export interface AsObject {
    name: string;
    displayName: string;
    description: string;
    llmEvaluationExamples?: LlmEvaluationExample.AsObject[];
    createdAt?: googleProtobuf005.Timestamp.AsObject;
    createdBy: string;
    tags: string[];
    modifiedAt?: googleProtobuf005.Timestamp.AsObject;
    modifiedBy: string;
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for LlmEvaluationDataset
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    description: string;
    llmEvaluationExamples: LlmEvaluationExample.AsProtobufJSON[] | null;
    createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    tags: string[];
    modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    modifiedBy: string;
    parent: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.LlmEvaluationExample
 */
export class LlmEvaluationExample implements GrpcMessage {
  static id = 'ondewo.nlu.LlmEvaluationExample';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LlmEvaluationExample();
    LlmEvaluationExample.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LlmEvaluationExample) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.description = _instance.description || '';
    _instance.inputs = _instance.inputs || undefined;
    _instance.expectedOutputs = _instance.expectedOutputs || undefined;
    _instance.metadata = _instance.metadata || undefined;
    _instance.llmEvaluationDatasetName =
      _instance.llmEvaluationDatasetName || '';
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.modifiedBy = _instance.modifiedBy || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LlmEvaluationExample,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          _instance.description = _reader.readString();
          break;
        case 4:
          _instance.inputs = new googleProtobuf007.Struct();
          _reader.readMessage(
            _instance.inputs,
            googleProtobuf007.Struct.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.expectedOutputs = new googleProtobuf007.Struct();
          _reader.readMessage(
            _instance.expectedOutputs,
            googleProtobuf007.Struct.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.metadata = new googleProtobuf007.Struct();
          _reader.readMessage(
            _instance.metadata,
            googleProtobuf007.Struct.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.llmEvaluationDatasetName = _reader.readString();
          break;
        case 8:
          _instance.createdAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.createdBy = _reader.readString();
          break;
        case 10:
          _instance.parent = _reader.readString();
          break;
        case 11:
          _instance.languageCode = _reader.readString();
          break;
        case 12:
          _instance.modifiedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 13:
          _instance.modifiedBy = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LlmEvaluationExample.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LlmEvaluationExample,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (_instance.inputs) {
      _writer.writeMessage(
        4,
        _instance.inputs as any,
        googleProtobuf007.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.expectedOutputs) {
      _writer.writeMessage(
        5,
        _instance.expectedOutputs as any,
        googleProtobuf007.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.metadata) {
      _writer.writeMessage(
        6,
        _instance.metadata as any,
        googleProtobuf007.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.llmEvaluationDatasetName) {
      _writer.writeString(7, _instance.llmEvaluationDatasetName);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        8,
        _instance.createdAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(9, _instance.createdBy);
    }
    if (_instance.parent) {
      _writer.writeString(10, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(11, _instance.languageCode);
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        12,
        _instance.modifiedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedBy) {
      _writer.writeString(13, _instance.modifiedBy);
    }
  }

  private _name: string;
  private _displayName: string;
  private _description: string;
  private _inputs?: googleProtobuf007.Struct;
  private _expectedOutputs?: googleProtobuf007.Struct;
  private _metadata?: googleProtobuf007.Struct;
  private _llmEvaluationDatasetName: string;
  private _createdAt?: googleProtobuf005.Timestamp;
  private _createdBy: string;
  private _parent: string;
  private _languageCode: string;
  private _modifiedAt?: googleProtobuf005.Timestamp;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LlmEvaluationExample to deeply clone from
   */
  constructor(_value?: RecursivePartial<LlmEvaluationExample.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.description = _value.description;
    this.inputs = _value.inputs
      ? new googleProtobuf007.Struct(_value.inputs)
      : undefined;
    this.expectedOutputs = _value.expectedOutputs
      ? new googleProtobuf007.Struct(_value.expectedOutputs)
      : undefined;
    this.metadata = _value.metadata
      ? new googleProtobuf007.Struct(_value.metadata)
      : undefined;
    this.llmEvaluationDatasetName = _value.llmEvaluationDatasetName;
    this.createdAt = _value.createdAt
      ? new googleProtobuf005.Timestamp(_value.createdAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf005.Timestamp(_value.modifiedAt)
      : undefined;
    this.modifiedBy = _value.modifiedBy;
    LlmEvaluationExample.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
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
  get inputs(): googleProtobuf007.Struct | undefined {
    return this._inputs;
  }
  set inputs(value: googleProtobuf007.Struct | undefined) {
    this._inputs = value;
  }
  get expectedOutputs(): googleProtobuf007.Struct | undefined {
    return this._expectedOutputs;
  }
  set expectedOutputs(value: googleProtobuf007.Struct | undefined) {
    this._expectedOutputs = value;
  }
  get metadata(): googleProtobuf007.Struct | undefined {
    return this._metadata;
  }
  set metadata(value: googleProtobuf007.Struct | undefined) {
    this._metadata = value;
  }
  get llmEvaluationDatasetName(): string {
    return this._llmEvaluationDatasetName;
  }
  set llmEvaluationDatasetName(value: string) {
    this._llmEvaluationDatasetName = value;
  }
  get createdAt(): googleProtobuf005.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf005.Timestamp | undefined) {
    this._createdAt = value;
  }
  get createdBy(): string {
    return this._createdBy;
  }
  set createdBy(value: string) {
    this._createdBy = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get modifiedAt(): googleProtobuf005.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf005.Timestamp | undefined) {
    this._modifiedAt = value;
  }
  get modifiedBy(): string {
    return this._modifiedBy;
  }
  set modifiedBy(value: string) {
    this._modifiedBy = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LlmEvaluationExample.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LlmEvaluationExample.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      description: this.description,
      inputs: this.inputs ? this.inputs.toObject() : undefined,
      expectedOutputs: this.expectedOutputs
        ? this.expectedOutputs.toObject()
        : undefined,
      metadata: this.metadata ? this.metadata.toObject() : undefined,
      llmEvaluationDatasetName: this.llmEvaluationDatasetName,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      createdBy: this.createdBy,
      parent: this.parent,
      languageCode: this.languageCode,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      modifiedBy: this.modifiedBy
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
  ): LlmEvaluationExample.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      description: this.description,
      inputs: this.inputs ? this.inputs.toProtobufJSON(options) : null,
      expectedOutputs: this.expectedOutputs
        ? this.expectedOutputs.toProtobufJSON(options)
        : null,
      metadata: this.metadata ? this.metadata.toProtobufJSON(options) : null,
      llmEvaluationDatasetName: this.llmEvaluationDatasetName,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      createdBy: this.createdBy,
      parent: this.parent,
      languageCode: this.languageCode,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      modifiedBy: this.modifiedBy
    };
  }
}
export module LlmEvaluationExample {
  /**
   * Standard JavaScript object representation for LlmEvaluationExample
   */
  export interface AsObject {
    name: string;
    displayName: string;
    description: string;
    inputs?: googleProtobuf007.Struct.AsObject;
    expectedOutputs?: googleProtobuf007.Struct.AsObject;
    metadata?: googleProtobuf007.Struct.AsObject;
    llmEvaluationDatasetName: string;
    createdAt?: googleProtobuf005.Timestamp.AsObject;
    createdBy: string;
    parent: string;
    languageCode: string;
    modifiedAt?: googleProtobuf005.Timestamp.AsObject;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for LlmEvaluationExample
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    description: string;
    inputs: googleProtobuf007.Struct.AsProtobufJSON | null;
    expectedOutputs: googleProtobuf007.Struct.AsProtobufJSON | null;
    metadata: googleProtobuf007.Struct.AsProtobufJSON | null;
    llmEvaluationDatasetName: string;
    createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    parent: string;
    languageCode: string;
    modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    modifiedBy: string;
  }
}

/**
 * Message implementation for ondewo.nlu.LlmEvaluationExperiment
 */
export class LlmEvaluationExperiment implements GrpcMessage {
  static id = 'ondewo.nlu.LlmEvaluationExperiment';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LlmEvaluationExperiment();
    LlmEvaluationExperiment.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LlmEvaluationExperiment) {
    _instance.name = _instance.name || '';
    _instance.llmEvaluationDatasetName =
      _instance.llmEvaluationDatasetName || '';
    _instance.displayName = _instance.displayName || '';
    _instance.description = _instance.description || '';
    _instance.gitSha = _instance.gitSha || '';
    _instance.promptVersion = _instance.promptVersion || '';
    _instance.modelName = _instance.modelName || '';
    _instance.config = _instance.config || undefined;
    _instance.llmEvaluationEvaluatorRuns =
      _instance.llmEvaluationEvaluatorRuns || [];
    _instance.startedAt = _instance.startedAt || undefined;
    _instance.finishedAt = _instance.finishedAt || undefined;
    _instance.durationInS = _instance.durationInS || 0;
    _instance.nExamples = _instance.nExamples || 0;
    _instance.nPassed = _instance.nPassed || 0;
    _instance.nFailed = _instance.nFailed || 0;
    _instance.llmEvaluationBaselineExperimentName =
      _instance.llmEvaluationBaselineExperimentName || '';
    _instance.parent = _instance.parent || '';
    _instance.llmEvaluationExperimentStatus =
      _instance.llmEvaluationExperimentStatus || 0;
    _instance.createdBy = _instance.createdBy || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.ccaiServiceNames = _instance.ccaiServiceNames || [];
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.modifiedBy = _instance.modifiedBy || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LlmEvaluationExperiment,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.llmEvaluationDatasetName = _reader.readString();
          break;
        case 3:
          _instance.displayName = _reader.readString();
          break;
        case 4:
          _instance.description = _reader.readString();
          break;
        case 5:
          _instance.gitSha = _reader.readString();
          break;
        case 6:
          _instance.promptVersion = _reader.readString();
          break;
        case 7:
          _instance.modelName = _reader.readString();
          break;
        case 8:
          _instance.config = new googleProtobuf007.Struct();
          _reader.readMessage(
            _instance.config,
            googleProtobuf007.Struct.deserializeBinaryFromReader
          );
          break;
        case 9:
          const messageInitializer9 = new LlmEvaluationEvaluatorRun();
          _reader.readMessage(
            messageInitializer9,
            LlmEvaluationEvaluatorRun.deserializeBinaryFromReader
          );
          (_instance.llmEvaluationEvaluatorRuns =
            _instance.llmEvaluationEvaluatorRuns || []).push(
            messageInitializer9
          );
          break;
        case 10:
          _instance.startedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.startedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.finishedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.finishedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.durationInS = _reader.readDouble();
          break;
        case 13:
          _instance.nExamples = _reader.readInt32();
          break;
        case 14:
          _instance.nPassed = _reader.readInt32();
          break;
        case 15:
          _instance.nFailed = _reader.readInt32();
          break;
        case 16:
          _instance.llmEvaluationBaselineExperimentName = _reader.readString();
          break;
        case 17:
          _instance.parent = _reader.readString();
          break;
        case 18:
          _instance.llmEvaluationExperimentStatus = _reader.readEnum();
          break;
        case 19:
          _instance.createdBy = _reader.readString();
          break;
        case 20:
          _instance.languageCode = _reader.readString();
          break;
        case 21:
          (_instance.ccaiServiceNames = _instance.ccaiServiceNames || []).push(
            _reader.readString()
          );
          break;
        case 22:
          _instance.createdAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 23:
          _instance.modifiedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 24:
          _instance.modifiedBy = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LlmEvaluationExperiment.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LlmEvaluationExperiment,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.llmEvaluationDatasetName) {
      _writer.writeString(2, _instance.llmEvaluationDatasetName);
    }
    if (_instance.displayName) {
      _writer.writeString(3, _instance.displayName);
    }
    if (_instance.description) {
      _writer.writeString(4, _instance.description);
    }
    if (_instance.gitSha) {
      _writer.writeString(5, _instance.gitSha);
    }
    if (_instance.promptVersion) {
      _writer.writeString(6, _instance.promptVersion);
    }
    if (_instance.modelName) {
      _writer.writeString(7, _instance.modelName);
    }
    if (_instance.config) {
      _writer.writeMessage(
        8,
        _instance.config as any,
        googleProtobuf007.Struct.serializeBinaryToWriter
      );
    }
    if (
      _instance.llmEvaluationEvaluatorRuns &&
      _instance.llmEvaluationEvaluatorRuns.length
    ) {
      _writer.writeRepeatedMessage(
        9,
        _instance.llmEvaluationEvaluatorRuns as any,
        LlmEvaluationEvaluatorRun.serializeBinaryToWriter
      );
    }
    if (_instance.startedAt) {
      _writer.writeMessage(
        10,
        _instance.startedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.finishedAt) {
      _writer.writeMessage(
        11,
        _instance.finishedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.durationInS) {
      _writer.writeDouble(12, _instance.durationInS);
    }
    if (_instance.nExamples) {
      _writer.writeInt32(13, _instance.nExamples);
    }
    if (_instance.nPassed) {
      _writer.writeInt32(14, _instance.nPassed);
    }
    if (_instance.nFailed) {
      _writer.writeInt32(15, _instance.nFailed);
    }
    if (_instance.llmEvaluationBaselineExperimentName) {
      _writer.writeString(16, _instance.llmEvaluationBaselineExperimentName);
    }
    if (_instance.parent) {
      _writer.writeString(17, _instance.parent);
    }
    if (_instance.llmEvaluationExperimentStatus) {
      _writer.writeEnum(18, _instance.llmEvaluationExperimentStatus);
    }
    if (_instance.createdBy) {
      _writer.writeString(19, _instance.createdBy);
    }
    if (_instance.languageCode) {
      _writer.writeString(20, _instance.languageCode);
    }
    if (_instance.ccaiServiceNames && _instance.ccaiServiceNames.length) {
      _writer.writeRepeatedString(21, _instance.ccaiServiceNames);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        22,
        _instance.createdAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        23,
        _instance.modifiedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedBy) {
      _writer.writeString(24, _instance.modifiedBy);
    }
  }

  private _name: string;
  private _llmEvaluationDatasetName: string;
  private _displayName: string;
  private _description: string;
  private _gitSha: string;
  private _promptVersion: string;
  private _modelName: string;
  private _config?: googleProtobuf007.Struct;
  private _llmEvaluationEvaluatorRuns?: LlmEvaluationEvaluatorRun[];
  private _startedAt?: googleProtobuf005.Timestamp;
  private _finishedAt?: googleProtobuf005.Timestamp;
  private _durationInS: number;
  private _nExamples: number;
  private _nPassed: number;
  private _nFailed: number;
  private _llmEvaluationBaselineExperimentName: string;
  private _parent: string;
  private _llmEvaluationExperimentStatus: LlmEvaluationExperimentStatus;
  private _createdBy: string;
  private _languageCode: string;
  private _ccaiServiceNames: string[];
  private _createdAt?: googleProtobuf005.Timestamp;
  private _modifiedAt?: googleProtobuf005.Timestamp;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LlmEvaluationExperiment to deeply clone from
   */
  constructor(_value?: RecursivePartial<LlmEvaluationExperiment.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.llmEvaluationDatasetName = _value.llmEvaluationDatasetName;
    this.displayName = _value.displayName;
    this.description = _value.description;
    this.gitSha = _value.gitSha;
    this.promptVersion = _value.promptVersion;
    this.modelName = _value.modelName;
    this.config = _value.config
      ? new googleProtobuf007.Struct(_value.config)
      : undefined;
    this.llmEvaluationEvaluatorRuns = (
      _value.llmEvaluationEvaluatorRuns || []
    ).map(m => new LlmEvaluationEvaluatorRun(m));
    this.startedAt = _value.startedAt
      ? new googleProtobuf005.Timestamp(_value.startedAt)
      : undefined;
    this.finishedAt = _value.finishedAt
      ? new googleProtobuf005.Timestamp(_value.finishedAt)
      : undefined;
    this.durationInS = _value.durationInS;
    this.nExamples = _value.nExamples;
    this.nPassed = _value.nPassed;
    this.nFailed = _value.nFailed;
    this.llmEvaluationBaselineExperimentName =
      _value.llmEvaluationBaselineExperimentName;
    this.parent = _value.parent;
    this.llmEvaluationExperimentStatus = _value.llmEvaluationExperimentStatus;
    this.createdBy = _value.createdBy;
    this.languageCode = _value.languageCode;
    this.ccaiServiceNames = (_value.ccaiServiceNames || []).slice();
    this.createdAt = _value.createdAt
      ? new googleProtobuf005.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf005.Timestamp(_value.modifiedAt)
      : undefined;
    this.modifiedBy = _value.modifiedBy;
    LlmEvaluationExperiment.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get llmEvaluationDatasetName(): string {
    return this._llmEvaluationDatasetName;
  }
  set llmEvaluationDatasetName(value: string) {
    this._llmEvaluationDatasetName = value;
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
  get gitSha(): string {
    return this._gitSha;
  }
  set gitSha(value: string) {
    this._gitSha = value;
  }
  get promptVersion(): string {
    return this._promptVersion;
  }
  set promptVersion(value: string) {
    this._promptVersion = value;
  }
  get modelName(): string {
    return this._modelName;
  }
  set modelName(value: string) {
    this._modelName = value;
  }
  get config(): googleProtobuf007.Struct | undefined {
    return this._config;
  }
  set config(value: googleProtobuf007.Struct | undefined) {
    this._config = value;
  }
  get llmEvaluationEvaluatorRuns(): LlmEvaluationEvaluatorRun[] | undefined {
    return this._llmEvaluationEvaluatorRuns;
  }
  set llmEvaluationEvaluatorRuns(
    value: LlmEvaluationEvaluatorRun[] | undefined
  ) {
    this._llmEvaluationEvaluatorRuns = value;
  }
  get startedAt(): googleProtobuf005.Timestamp | undefined {
    return this._startedAt;
  }
  set startedAt(value: googleProtobuf005.Timestamp | undefined) {
    this._startedAt = value;
  }
  get finishedAt(): googleProtobuf005.Timestamp | undefined {
    return this._finishedAt;
  }
  set finishedAt(value: googleProtobuf005.Timestamp | undefined) {
    this._finishedAt = value;
  }
  get durationInS(): number {
    return this._durationInS;
  }
  set durationInS(value: number) {
    this._durationInS = value;
  }
  get nExamples(): number {
    return this._nExamples;
  }
  set nExamples(value: number) {
    this._nExamples = value;
  }
  get nPassed(): number {
    return this._nPassed;
  }
  set nPassed(value: number) {
    this._nPassed = value;
  }
  get nFailed(): number {
    return this._nFailed;
  }
  set nFailed(value: number) {
    this._nFailed = value;
  }
  get llmEvaluationBaselineExperimentName(): string {
    return this._llmEvaluationBaselineExperimentName;
  }
  set llmEvaluationBaselineExperimentName(value: string) {
    this._llmEvaluationBaselineExperimentName = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get llmEvaluationExperimentStatus(): LlmEvaluationExperimentStatus {
    return this._llmEvaluationExperimentStatus;
  }
  set llmEvaluationExperimentStatus(value: LlmEvaluationExperimentStatus) {
    this._llmEvaluationExperimentStatus = value;
  }
  get createdBy(): string {
    return this._createdBy;
  }
  set createdBy(value: string) {
    this._createdBy = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get ccaiServiceNames(): string[] {
    return this._ccaiServiceNames;
  }
  set ccaiServiceNames(value: string[]) {
    this._ccaiServiceNames = value;
  }
  get createdAt(): googleProtobuf005.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf005.Timestamp | undefined) {
    this._createdAt = value;
  }
  get modifiedAt(): googleProtobuf005.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf005.Timestamp | undefined) {
    this._modifiedAt = value;
  }
  get modifiedBy(): string {
    return this._modifiedBy;
  }
  set modifiedBy(value: string) {
    this._modifiedBy = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LlmEvaluationExperiment.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LlmEvaluationExperiment.AsObject {
    return {
      name: this.name,
      llmEvaluationDatasetName: this.llmEvaluationDatasetName,
      displayName: this.displayName,
      description: this.description,
      gitSha: this.gitSha,
      promptVersion: this.promptVersion,
      modelName: this.modelName,
      config: this.config ? this.config.toObject() : undefined,
      llmEvaluationEvaluatorRuns: (
        this.llmEvaluationEvaluatorRuns || []
      ).map(m => m.toObject()),
      startedAt: this.startedAt ? this.startedAt.toObject() : undefined,
      finishedAt: this.finishedAt ? this.finishedAt.toObject() : undefined,
      durationInS: this.durationInS,
      nExamples: this.nExamples,
      nPassed: this.nPassed,
      nFailed: this.nFailed,
      llmEvaluationBaselineExperimentName: this
        .llmEvaluationBaselineExperimentName,
      parent: this.parent,
      llmEvaluationExperimentStatus: this.llmEvaluationExperimentStatus,
      createdBy: this.createdBy,
      languageCode: this.languageCode,
      ccaiServiceNames: (this.ccaiServiceNames || []).slice(),
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      modifiedBy: this.modifiedBy
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
  ): LlmEvaluationExperiment.AsProtobufJSON {
    return {
      name: this.name,
      llmEvaluationDatasetName: this.llmEvaluationDatasetName,
      displayName: this.displayName,
      description: this.description,
      gitSha: this.gitSha,
      promptVersion: this.promptVersion,
      modelName: this.modelName,
      config: this.config ? this.config.toProtobufJSON(options) : null,
      llmEvaluationEvaluatorRuns: (
        this.llmEvaluationEvaluatorRuns || []
      ).map(m => m.toProtobufJSON(options)),
      startedAt: this.startedAt ? this.startedAt.toProtobufJSON(options) : null,
      finishedAt: this.finishedAt
        ? this.finishedAt.toProtobufJSON(options)
        : null,
      durationInS: this.durationInS,
      nExamples: this.nExamples,
      nPassed: this.nPassed,
      nFailed: this.nFailed,
      llmEvaluationBaselineExperimentName: this
        .llmEvaluationBaselineExperimentName,
      parent: this.parent,
      llmEvaluationExperimentStatus:
        LlmEvaluationExperimentStatus[
          this.llmEvaluationExperimentStatus === null ||
          this.llmEvaluationExperimentStatus === undefined
            ? 0
            : this.llmEvaluationExperimentStatus
        ],
      createdBy: this.createdBy,
      languageCode: this.languageCode,
      ccaiServiceNames: (this.ccaiServiceNames || []).slice(),
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      modifiedBy: this.modifiedBy
    };
  }
}
export module LlmEvaluationExperiment {
  /**
   * Standard JavaScript object representation for LlmEvaluationExperiment
   */
  export interface AsObject {
    name: string;
    llmEvaluationDatasetName: string;
    displayName: string;
    description: string;
    gitSha: string;
    promptVersion: string;
    modelName: string;
    config?: googleProtobuf007.Struct.AsObject;
    llmEvaluationEvaluatorRuns?: LlmEvaluationEvaluatorRun.AsObject[];
    startedAt?: googleProtobuf005.Timestamp.AsObject;
    finishedAt?: googleProtobuf005.Timestamp.AsObject;
    durationInS: number;
    nExamples: number;
    nPassed: number;
    nFailed: number;
    llmEvaluationBaselineExperimentName: string;
    parent: string;
    llmEvaluationExperimentStatus: LlmEvaluationExperimentStatus;
    createdBy: string;
    languageCode: string;
    ccaiServiceNames: string[];
    createdAt?: googleProtobuf005.Timestamp.AsObject;
    modifiedAt?: googleProtobuf005.Timestamp.AsObject;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for LlmEvaluationExperiment
   */
  export interface AsProtobufJSON {
    name: string;
    llmEvaluationDatasetName: string;
    displayName: string;
    description: string;
    gitSha: string;
    promptVersion: string;
    modelName: string;
    config: googleProtobuf007.Struct.AsProtobufJSON | null;
    llmEvaluationEvaluatorRuns:
      | LlmEvaluationEvaluatorRun.AsProtobufJSON[]
      | null;
    startedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    finishedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    durationInS: number;
    nExamples: number;
    nPassed: number;
    nFailed: number;
    llmEvaluationBaselineExperimentName: string;
    parent: string;
    llmEvaluationExperimentStatus: string;
    createdBy: string;
    languageCode: string;
    ccaiServiceNames: string[];
    createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    modifiedBy: string;
  }
}

/**
 * Message implementation for ondewo.nlu.LlmEvaluationEvaluatorRun
 */
export class LlmEvaluationEvaluatorRun implements GrpcMessage {
  static id = 'ondewo.nlu.LlmEvaluationEvaluatorRun';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LlmEvaluationEvaluatorRun();
    LlmEvaluationEvaluatorRun.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LlmEvaluationEvaluatorRun) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.llmEvaluationExampleName =
      _instance.llmEvaluationExampleName || '';
    _instance.llmTelemetryRunId = _instance.llmTelemetryRunId || '';
    _instance.llmEvaluationEvaluatorType =
      _instance.llmEvaluationEvaluatorType || 0;
    _instance.evaluatorName = _instance.evaluatorName || '';
    _instance.llmEvaluationFeedbacks = _instance.llmEvaluationFeedbacks || [];
    _instance.llmEvaluationExperimentName =
      _instance.llmEvaluationExperimentName || '';
    _instance.startedAt = _instance.startedAt || undefined;
    _instance.finishedAt = _instance.finishedAt || undefined;
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.modifiedBy = _instance.modifiedBy || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LlmEvaluationEvaluatorRun,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          _instance.llmEvaluationExampleName = _reader.readString();
          break;
        case 4:
          _instance.llmTelemetryRunId = _reader.readString();
          break;
        case 5:
          _instance.llmEvaluationEvaluatorType = _reader.readEnum();
          break;
        case 6:
          _instance.evaluatorName = _reader.readString();
          break;
        case 7:
          const messageInitializer7 = new LlmEvaluationFeedback();
          _reader.readMessage(
            messageInitializer7,
            LlmEvaluationFeedback.deserializeBinaryFromReader
          );
          (_instance.llmEvaluationFeedbacks =
            _instance.llmEvaluationFeedbacks || []).push(messageInitializer7);
          break;
        case 8:
          _instance.llmEvaluationExperimentName = _reader.readString();
          break;
        case 9:
          _instance.startedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.startedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.finishedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.finishedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.createdAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 12:
          _instance.modifiedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 13:
          _instance.createdBy = _reader.readString();
          break;
        case 14:
          _instance.modifiedBy = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LlmEvaluationEvaluatorRun.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LlmEvaluationEvaluatorRun,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.llmEvaluationExampleName) {
      _writer.writeString(3, _instance.llmEvaluationExampleName);
    }
    if (_instance.llmTelemetryRunId) {
      _writer.writeString(4, _instance.llmTelemetryRunId);
    }
    if (_instance.llmEvaluationEvaluatorType) {
      _writer.writeEnum(5, _instance.llmEvaluationEvaluatorType);
    }
    if (_instance.evaluatorName) {
      _writer.writeString(6, _instance.evaluatorName);
    }
    if (
      _instance.llmEvaluationFeedbacks &&
      _instance.llmEvaluationFeedbacks.length
    ) {
      _writer.writeRepeatedMessage(
        7,
        _instance.llmEvaluationFeedbacks as any,
        LlmEvaluationFeedback.serializeBinaryToWriter
      );
    }
    if (_instance.llmEvaluationExperimentName) {
      _writer.writeString(8, _instance.llmEvaluationExperimentName);
    }
    if (_instance.startedAt) {
      _writer.writeMessage(
        9,
        _instance.startedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.finishedAt) {
      _writer.writeMessage(
        10,
        _instance.finishedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        11,
        _instance.createdAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        12,
        _instance.modifiedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(13, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(14, _instance.modifiedBy);
    }
  }

  private _name: string;
  private _displayName: string;
  private _llmEvaluationExampleName: string;
  private _llmTelemetryRunId: string;
  private _llmEvaluationEvaluatorType: LlmEvaluationEvaluatorType;
  private _evaluatorName: string;
  private _llmEvaluationFeedbacks?: LlmEvaluationFeedback[];
  private _llmEvaluationExperimentName: string;
  private _startedAt?: googleProtobuf005.Timestamp;
  private _finishedAt?: googleProtobuf005.Timestamp;
  private _createdAt?: googleProtobuf005.Timestamp;
  private _modifiedAt?: googleProtobuf005.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LlmEvaluationEvaluatorRun to deeply clone from
   */
  constructor(_value?: RecursivePartial<LlmEvaluationEvaluatorRun.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.llmEvaluationExampleName = _value.llmEvaluationExampleName;
    this.llmTelemetryRunId = _value.llmTelemetryRunId;
    this.llmEvaluationEvaluatorType = _value.llmEvaluationEvaluatorType;
    this.evaluatorName = _value.evaluatorName;
    this.llmEvaluationFeedbacks = (_value.llmEvaluationFeedbacks || []).map(
      m => new LlmEvaluationFeedback(m)
    );
    this.llmEvaluationExperimentName = _value.llmEvaluationExperimentName;
    this.startedAt = _value.startedAt
      ? new googleProtobuf005.Timestamp(_value.startedAt)
      : undefined;
    this.finishedAt = _value.finishedAt
      ? new googleProtobuf005.Timestamp(_value.finishedAt)
      : undefined;
    this.createdAt = _value.createdAt
      ? new googleProtobuf005.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf005.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    LlmEvaluationEvaluatorRun.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get llmEvaluationExampleName(): string {
    return this._llmEvaluationExampleName;
  }
  set llmEvaluationExampleName(value: string) {
    this._llmEvaluationExampleName = value;
  }
  get llmTelemetryRunId(): string {
    return this._llmTelemetryRunId;
  }
  set llmTelemetryRunId(value: string) {
    this._llmTelemetryRunId = value;
  }
  get llmEvaluationEvaluatorType(): LlmEvaluationEvaluatorType {
    return this._llmEvaluationEvaluatorType;
  }
  set llmEvaluationEvaluatorType(value: LlmEvaluationEvaluatorType) {
    this._llmEvaluationEvaluatorType = value;
  }
  get evaluatorName(): string {
    return this._evaluatorName;
  }
  set evaluatorName(value: string) {
    this._evaluatorName = value;
  }
  get llmEvaluationFeedbacks(): LlmEvaluationFeedback[] | undefined {
    return this._llmEvaluationFeedbacks;
  }
  set llmEvaluationFeedbacks(value: LlmEvaluationFeedback[] | undefined) {
    this._llmEvaluationFeedbacks = value;
  }
  get llmEvaluationExperimentName(): string {
    return this._llmEvaluationExperimentName;
  }
  set llmEvaluationExperimentName(value: string) {
    this._llmEvaluationExperimentName = value;
  }
  get startedAt(): googleProtobuf005.Timestamp | undefined {
    return this._startedAt;
  }
  set startedAt(value: googleProtobuf005.Timestamp | undefined) {
    this._startedAt = value;
  }
  get finishedAt(): googleProtobuf005.Timestamp | undefined {
    return this._finishedAt;
  }
  set finishedAt(value: googleProtobuf005.Timestamp | undefined) {
    this._finishedAt = value;
  }
  get createdAt(): googleProtobuf005.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf005.Timestamp | undefined) {
    this._createdAt = value;
  }
  get modifiedAt(): googleProtobuf005.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf005.Timestamp | undefined) {
    this._modifiedAt = value;
  }
  get createdBy(): string {
    return this._createdBy;
  }
  set createdBy(value: string) {
    this._createdBy = value;
  }
  get modifiedBy(): string {
    return this._modifiedBy;
  }
  set modifiedBy(value: string) {
    this._modifiedBy = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LlmEvaluationEvaluatorRun.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LlmEvaluationEvaluatorRun.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      llmEvaluationExampleName: this.llmEvaluationExampleName,
      llmTelemetryRunId: this.llmTelemetryRunId,
      llmEvaluationEvaluatorType: this.llmEvaluationEvaluatorType,
      evaluatorName: this.evaluatorName,
      llmEvaluationFeedbacks: (this.llmEvaluationFeedbacks || []).map(m =>
        m.toObject()
      ),
      llmEvaluationExperimentName: this.llmEvaluationExperimentName,
      startedAt: this.startedAt ? this.startedAt.toObject() : undefined,
      finishedAt: this.finishedAt ? this.finishedAt.toObject() : undefined,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
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
  ): LlmEvaluationEvaluatorRun.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      llmEvaluationExampleName: this.llmEvaluationExampleName,
      llmTelemetryRunId: this.llmTelemetryRunId,
      llmEvaluationEvaluatorType:
        LlmEvaluationEvaluatorType[
          this.llmEvaluationEvaluatorType === null ||
          this.llmEvaluationEvaluatorType === undefined
            ? 0
            : this.llmEvaluationEvaluatorType
        ],
      evaluatorName: this.evaluatorName,
      llmEvaluationFeedbacks: (this.llmEvaluationFeedbacks || []).map(m =>
        m.toProtobufJSON(options)
      ),
      llmEvaluationExperimentName: this.llmEvaluationExperimentName,
      startedAt: this.startedAt ? this.startedAt.toProtobufJSON(options) : null,
      finishedAt: this.finishedAt
        ? this.finishedAt.toProtobufJSON(options)
        : null,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module LlmEvaluationEvaluatorRun {
  /**
   * Standard JavaScript object representation for LlmEvaluationEvaluatorRun
   */
  export interface AsObject {
    name: string;
    displayName: string;
    llmEvaluationExampleName: string;
    llmTelemetryRunId: string;
    llmEvaluationEvaluatorType: LlmEvaluationEvaluatorType;
    evaluatorName: string;
    llmEvaluationFeedbacks?: LlmEvaluationFeedback.AsObject[];
    llmEvaluationExperimentName: string;
    startedAt?: googleProtobuf005.Timestamp.AsObject;
    finishedAt?: googleProtobuf005.Timestamp.AsObject;
    createdAt?: googleProtobuf005.Timestamp.AsObject;
    modifiedAt?: googleProtobuf005.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for LlmEvaluationEvaluatorRun
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    llmEvaluationExampleName: string;
    llmTelemetryRunId: string;
    llmEvaluationEvaluatorType: string;
    evaluatorName: string;
    llmEvaluationFeedbacks: LlmEvaluationFeedback.AsProtobufJSON[] | null;
    llmEvaluationExperimentName: string;
    startedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    finishedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
  }
}

/**
 * Message implementation for ondewo.nlu.LlmEvaluationFeedback
 */
export class LlmEvaluationFeedback implements GrpcMessage {
  static id = 'ondewo.nlu.LlmEvaluationFeedback';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LlmEvaluationFeedback();
    LlmEvaluationFeedback.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LlmEvaluationFeedback) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.criterion = _instance.criterion || '';
    _instance.score = _instance.score || 0;
    _instance.categoricalValue = _instance.categoricalValue || '';
    _instance.comment = _instance.comment || '';
    _instance.annotatorUserId = _instance.annotatorUserId || '';
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.raw = _instance.raw || undefined;
    _instance.llmEvaluationEvaluatorRunName =
      _instance.llmEvaluationEvaluatorRunName || '';
    _instance.llmEvaluationExperimentName =
      _instance.llmEvaluationExperimentName || '';
    _instance.llmEvaluationExampleName =
      _instance.llmEvaluationExampleName || '';
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.modifiedBy = _instance.modifiedBy || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LlmEvaluationFeedback,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          _instance.criterion = _reader.readString();
          break;
        case 4:
          _instance.score = _reader.readDouble();
          break;
        case 5:
          _instance.categoricalValue = _reader.readString();
          break;
        case 6:
          _instance.comment = _reader.readString();
          break;
        case 7:
          _instance.annotatorUserId = _reader.readString();
          break;
        case 8:
          _instance.createdAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.raw = new googleProtobuf007.Struct();
          _reader.readMessage(
            _instance.raw,
            googleProtobuf007.Struct.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.llmEvaluationEvaluatorRunName = _reader.readString();
          break;
        case 11:
          _instance.llmEvaluationExperimentName = _reader.readString();
          break;
        case 12:
          _instance.llmEvaluationExampleName = _reader.readString();
          break;
        case 13:
          _instance.modifiedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 14:
          _instance.createdBy = _reader.readString();
          break;
        case 15:
          _instance.modifiedBy = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LlmEvaluationFeedback.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LlmEvaluationFeedback,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.criterion) {
      _writer.writeString(3, _instance.criterion);
    }
    if (_instance.score) {
      _writer.writeDouble(4, _instance.score);
    }
    if (_instance.categoricalValue) {
      _writer.writeString(5, _instance.categoricalValue);
    }
    if (_instance.comment) {
      _writer.writeString(6, _instance.comment);
    }
    if (_instance.annotatorUserId) {
      _writer.writeString(7, _instance.annotatorUserId);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        8,
        _instance.createdAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.raw) {
      _writer.writeMessage(
        9,
        _instance.raw as any,
        googleProtobuf007.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.llmEvaluationEvaluatorRunName) {
      _writer.writeString(10, _instance.llmEvaluationEvaluatorRunName);
    }
    if (_instance.llmEvaluationExperimentName) {
      _writer.writeString(11, _instance.llmEvaluationExperimentName);
    }
    if (_instance.llmEvaluationExampleName) {
      _writer.writeString(12, _instance.llmEvaluationExampleName);
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        13,
        _instance.modifiedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(14, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(15, _instance.modifiedBy);
    }
  }

  private _name: string;
  private _displayName: string;
  private _criterion: string;
  private _score: number;
  private _categoricalValue: string;
  private _comment: string;
  private _annotatorUserId: string;
  private _createdAt?: googleProtobuf005.Timestamp;
  private _raw?: googleProtobuf007.Struct;
  private _llmEvaluationEvaluatorRunName: string;
  private _llmEvaluationExperimentName: string;
  private _llmEvaluationExampleName: string;
  private _modifiedAt?: googleProtobuf005.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LlmEvaluationFeedback to deeply clone from
   */
  constructor(_value?: RecursivePartial<LlmEvaluationFeedback.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.criterion = _value.criterion;
    this.score = _value.score;
    this.categoricalValue = _value.categoricalValue;
    this.comment = _value.comment;
    this.annotatorUserId = _value.annotatorUserId;
    this.createdAt = _value.createdAt
      ? new googleProtobuf005.Timestamp(_value.createdAt)
      : undefined;
    this.raw = _value.raw
      ? new googleProtobuf007.Struct(_value.raw)
      : undefined;
    this.llmEvaluationEvaluatorRunName = _value.llmEvaluationEvaluatorRunName;
    this.llmEvaluationExperimentName = _value.llmEvaluationExperimentName;
    this.llmEvaluationExampleName = _value.llmEvaluationExampleName;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf005.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    LlmEvaluationFeedback.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get criterion(): string {
    return this._criterion;
  }
  set criterion(value: string) {
    this._criterion = value;
  }
  get score(): number {
    return this._score;
  }
  set score(value: number) {
    this._score = value;
  }
  get categoricalValue(): string {
    return this._categoricalValue;
  }
  set categoricalValue(value: string) {
    this._categoricalValue = value;
  }
  get comment(): string {
    return this._comment;
  }
  set comment(value: string) {
    this._comment = value;
  }
  get annotatorUserId(): string {
    return this._annotatorUserId;
  }
  set annotatorUserId(value: string) {
    this._annotatorUserId = value;
  }
  get createdAt(): googleProtobuf005.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf005.Timestamp | undefined) {
    this._createdAt = value;
  }
  get raw(): googleProtobuf007.Struct | undefined {
    return this._raw;
  }
  set raw(value: googleProtobuf007.Struct | undefined) {
    this._raw = value;
  }
  get llmEvaluationEvaluatorRunName(): string {
    return this._llmEvaluationEvaluatorRunName;
  }
  set llmEvaluationEvaluatorRunName(value: string) {
    this._llmEvaluationEvaluatorRunName = value;
  }
  get llmEvaluationExperimentName(): string {
    return this._llmEvaluationExperimentName;
  }
  set llmEvaluationExperimentName(value: string) {
    this._llmEvaluationExperimentName = value;
  }
  get llmEvaluationExampleName(): string {
    return this._llmEvaluationExampleName;
  }
  set llmEvaluationExampleName(value: string) {
    this._llmEvaluationExampleName = value;
  }
  get modifiedAt(): googleProtobuf005.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf005.Timestamp | undefined) {
    this._modifiedAt = value;
  }
  get createdBy(): string {
    return this._createdBy;
  }
  set createdBy(value: string) {
    this._createdBy = value;
  }
  get modifiedBy(): string {
    return this._modifiedBy;
  }
  set modifiedBy(value: string) {
    this._modifiedBy = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LlmEvaluationFeedback.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LlmEvaluationFeedback.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      criterion: this.criterion,
      score: this.score,
      categoricalValue: this.categoricalValue,
      comment: this.comment,
      annotatorUserId: this.annotatorUserId,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      raw: this.raw ? this.raw.toObject() : undefined,
      llmEvaluationEvaluatorRunName: this.llmEvaluationEvaluatorRunName,
      llmEvaluationExperimentName: this.llmEvaluationExperimentName,
      llmEvaluationExampleName: this.llmEvaluationExampleName,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
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
  ): LlmEvaluationFeedback.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      criterion: this.criterion,
      score: this.score,
      categoricalValue: this.categoricalValue,
      comment: this.comment,
      annotatorUserId: this.annotatorUserId,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      raw: this.raw ? this.raw.toProtobufJSON(options) : null,
      llmEvaluationEvaluatorRunName: this.llmEvaluationEvaluatorRunName,
      llmEvaluationExperimentName: this.llmEvaluationExperimentName,
      llmEvaluationExampleName: this.llmEvaluationExampleName,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module LlmEvaluationFeedback {
  /**
   * Standard JavaScript object representation for LlmEvaluationFeedback
   */
  export interface AsObject {
    name: string;
    displayName: string;
    criterion: string;
    score: number;
    categoricalValue: string;
    comment: string;
    annotatorUserId: string;
    createdAt?: googleProtobuf005.Timestamp.AsObject;
    raw?: googleProtobuf007.Struct.AsObject;
    llmEvaluationEvaluatorRunName: string;
    llmEvaluationExperimentName: string;
    llmEvaluationExampleName: string;
    modifiedAt?: googleProtobuf005.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for LlmEvaluationFeedback
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    criterion: string;
    score: number;
    categoricalValue: string;
    comment: string;
    annotatorUserId: string;
    createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    raw: googleProtobuf007.Struct.AsProtobufJSON | null;
    llmEvaluationEvaluatorRunName: string;
    llmEvaluationExperimentName: string;
    llmEvaluationExampleName: string;
    modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
  }
}

/**
 * Message implementation for ondewo.nlu.LlmEvaluationComparison
 */
export class LlmEvaluationComparison implements GrpcMessage {
  static id = 'ondewo.nlu.LlmEvaluationComparison';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LlmEvaluationComparison();
    LlmEvaluationComparison.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LlmEvaluationComparison) {
    _instance.name = _instance.name || '';
    _instance.displayName = _instance.displayName || '';
    _instance.llmEvaluationExperimentNames =
      _instance.llmEvaluationExperimentNames || [];
    _instance.llmEvaluationBaselineExperimentName =
      _instance.llmEvaluationBaselineExperimentName || '';
    _instance.llmEvaluationPairwiseResults =
      _instance.llmEvaluationPairwiseResults || [];
    _instance.aggregate = _instance.aggregate || undefined;
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.modifiedAt = _instance.modifiedAt || undefined;
    _instance.createdBy = _instance.createdBy || '';
    _instance.modifiedBy = _instance.modifiedBy || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LlmEvaluationComparison,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          (_instance.llmEvaluationExperimentNames =
            _instance.llmEvaluationExperimentNames || []).push(
            _reader.readString()
          );
          break;
        case 4:
          _instance.llmEvaluationBaselineExperimentName = _reader.readString();
          break;
        case 5:
          const messageInitializer5 = new LlmEvaluationPairwiseResult();
          _reader.readMessage(
            messageInitializer5,
            LlmEvaluationPairwiseResult.deserializeBinaryFromReader
          );
          (_instance.llmEvaluationPairwiseResults =
            _instance.llmEvaluationPairwiseResults || []).push(
            messageInitializer5
          );
          break;
        case 6:
          _instance.aggregate = new googleProtobuf007.Struct();
          _reader.readMessage(
            _instance.aggregate,
            googleProtobuf007.Struct.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.createdAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.modifiedAt = new googleProtobuf005.Timestamp();
          _reader.readMessage(
            _instance.modifiedAt,
            googleProtobuf005.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.createdBy = _reader.readString();
          break;
        case 10:
          _instance.modifiedBy = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LlmEvaluationComparison.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LlmEvaluationComparison,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (
      _instance.llmEvaluationExperimentNames &&
      _instance.llmEvaluationExperimentNames.length
    ) {
      _writer.writeRepeatedString(3, _instance.llmEvaluationExperimentNames);
    }
    if (_instance.llmEvaluationBaselineExperimentName) {
      _writer.writeString(4, _instance.llmEvaluationBaselineExperimentName);
    }
    if (
      _instance.llmEvaluationPairwiseResults &&
      _instance.llmEvaluationPairwiseResults.length
    ) {
      _writer.writeRepeatedMessage(
        5,
        _instance.llmEvaluationPairwiseResults as any,
        LlmEvaluationPairwiseResult.serializeBinaryToWriter
      );
    }
    if (_instance.aggregate) {
      _writer.writeMessage(
        6,
        _instance.aggregate as any,
        googleProtobuf007.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        7,
        _instance.createdAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.modifiedAt) {
      _writer.writeMessage(
        8,
        _instance.modifiedAt as any,
        googleProtobuf005.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdBy) {
      _writer.writeString(9, _instance.createdBy);
    }
    if (_instance.modifiedBy) {
      _writer.writeString(10, _instance.modifiedBy);
    }
  }

  private _name: string;
  private _displayName: string;
  private _llmEvaluationExperimentNames: string[];
  private _llmEvaluationBaselineExperimentName: string;
  private _llmEvaluationPairwiseResults?: LlmEvaluationPairwiseResult[];
  private _aggregate?: googleProtobuf007.Struct;
  private _createdAt?: googleProtobuf005.Timestamp;
  private _modifiedAt?: googleProtobuf005.Timestamp;
  private _createdBy: string;
  private _modifiedBy: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LlmEvaluationComparison to deeply clone from
   */
  constructor(_value?: RecursivePartial<LlmEvaluationComparison.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.displayName = _value.displayName;
    this.llmEvaluationExperimentNames = (
      _value.llmEvaluationExperimentNames || []
    ).slice();
    this.llmEvaluationBaselineExperimentName =
      _value.llmEvaluationBaselineExperimentName;
    this.llmEvaluationPairwiseResults = (
      _value.llmEvaluationPairwiseResults || []
    ).map(m => new LlmEvaluationPairwiseResult(m));
    this.aggregate = _value.aggregate
      ? new googleProtobuf007.Struct(_value.aggregate)
      : undefined;
    this.createdAt = _value.createdAt
      ? new googleProtobuf005.Timestamp(_value.createdAt)
      : undefined;
    this.modifiedAt = _value.modifiedAt
      ? new googleProtobuf005.Timestamp(_value.modifiedAt)
      : undefined;
    this.createdBy = _value.createdBy;
    this.modifiedBy = _value.modifiedBy;
    LlmEvaluationComparison.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get llmEvaluationExperimentNames(): string[] {
    return this._llmEvaluationExperimentNames;
  }
  set llmEvaluationExperimentNames(value: string[]) {
    this._llmEvaluationExperimentNames = value;
  }
  get llmEvaluationBaselineExperimentName(): string {
    return this._llmEvaluationBaselineExperimentName;
  }
  set llmEvaluationBaselineExperimentName(value: string) {
    this._llmEvaluationBaselineExperimentName = value;
  }
  get llmEvaluationPairwiseResults():
    | LlmEvaluationPairwiseResult[]
    | undefined {
    return this._llmEvaluationPairwiseResults;
  }
  set llmEvaluationPairwiseResults(
    value: LlmEvaluationPairwiseResult[] | undefined
  ) {
    this._llmEvaluationPairwiseResults = value;
  }
  get aggregate(): googleProtobuf007.Struct | undefined {
    return this._aggregate;
  }
  set aggregate(value: googleProtobuf007.Struct | undefined) {
    this._aggregate = value;
  }
  get createdAt(): googleProtobuf005.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf005.Timestamp | undefined) {
    this._createdAt = value;
  }
  get modifiedAt(): googleProtobuf005.Timestamp | undefined {
    return this._modifiedAt;
  }
  set modifiedAt(value: googleProtobuf005.Timestamp | undefined) {
    this._modifiedAt = value;
  }
  get createdBy(): string {
    return this._createdBy;
  }
  set createdBy(value: string) {
    this._createdBy = value;
  }
  get modifiedBy(): string {
    return this._modifiedBy;
  }
  set modifiedBy(value: string) {
    this._modifiedBy = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LlmEvaluationComparison.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LlmEvaluationComparison.AsObject {
    return {
      name: this.name,
      displayName: this.displayName,
      llmEvaluationExperimentNames: (
        this.llmEvaluationExperimentNames || []
      ).slice(),
      llmEvaluationBaselineExperimentName: this
        .llmEvaluationBaselineExperimentName,
      llmEvaluationPairwiseResults: (
        this.llmEvaluationPairwiseResults || []
      ).map(m => m.toObject()),
      aggregate: this.aggregate ? this.aggregate.toObject() : undefined,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      modifiedAt: this.modifiedAt ? this.modifiedAt.toObject() : undefined,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
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
  ): LlmEvaluationComparison.AsProtobufJSON {
    return {
      name: this.name,
      displayName: this.displayName,
      llmEvaluationExperimentNames: (
        this.llmEvaluationExperimentNames || []
      ).slice(),
      llmEvaluationBaselineExperimentName: this
        .llmEvaluationBaselineExperimentName,
      llmEvaluationPairwiseResults: (
        this.llmEvaluationPairwiseResults || []
      ).map(m => m.toProtobufJSON(options)),
      aggregate: this.aggregate ? this.aggregate.toProtobufJSON(options) : null,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      modifiedAt: this.modifiedAt
        ? this.modifiedAt.toProtobufJSON(options)
        : null,
      createdBy: this.createdBy,
      modifiedBy: this.modifiedBy
    };
  }
}
export module LlmEvaluationComparison {
  /**
   * Standard JavaScript object representation for LlmEvaluationComparison
   */
  export interface AsObject {
    name: string;
    displayName: string;
    llmEvaluationExperimentNames: string[];
    llmEvaluationBaselineExperimentName: string;
    llmEvaluationPairwiseResults?: LlmEvaluationPairwiseResult.AsObject[];
    aggregate?: googleProtobuf007.Struct.AsObject;
    createdAt?: googleProtobuf005.Timestamp.AsObject;
    modifiedAt?: googleProtobuf005.Timestamp.AsObject;
    createdBy: string;
    modifiedBy: string;
  }

  /**
   * Protobuf JSON representation for LlmEvaluationComparison
   */
  export interface AsProtobufJSON {
    name: string;
    displayName: string;
    llmEvaluationExperimentNames: string[];
    llmEvaluationBaselineExperimentName: string;
    llmEvaluationPairwiseResults:
      | LlmEvaluationPairwiseResult.AsProtobufJSON[]
      | null;
    aggregate: googleProtobuf007.Struct.AsProtobufJSON | null;
    createdAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    modifiedAt: googleProtobuf005.Timestamp.AsProtobufJSON | null;
    createdBy: string;
    modifiedBy: string;
  }
}

/**
 * Message implementation for ondewo.nlu.LlmEvaluationPairwiseResult
 */
export class LlmEvaluationPairwiseResult implements GrpcMessage {
  static id = 'ondewo.nlu.LlmEvaluationPairwiseResult';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LlmEvaluationPairwiseResult();
    LlmEvaluationPairwiseResult.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LlmEvaluationPairwiseResult) {
    _instance.llmEvaluationExampleName =
      _instance.llmEvaluationExampleName || '';
    _instance.llmEvaluationWinnerExperimentName =
      _instance.llmEvaluationWinnerExperimentName || '';
    _instance.scoreDelta = _instance.scoreDelta || 0;
    _instance.reason = _instance.reason || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LlmEvaluationPairwiseResult,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.llmEvaluationExampleName = _reader.readString();
          break;
        case 2:
          _instance.llmEvaluationWinnerExperimentName = _reader.readString();
          break;
        case 3:
          _instance.scoreDelta = _reader.readDouble();
          break;
        case 4:
          _instance.reason = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LlmEvaluationPairwiseResult.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LlmEvaluationPairwiseResult,
    _writer: BinaryWriter
  ) {
    if (_instance.llmEvaluationExampleName) {
      _writer.writeString(1, _instance.llmEvaluationExampleName);
    }
    if (_instance.llmEvaluationWinnerExperimentName) {
      _writer.writeString(2, _instance.llmEvaluationWinnerExperimentName);
    }
    if (_instance.scoreDelta) {
      _writer.writeDouble(3, _instance.scoreDelta);
    }
    if (_instance.reason) {
      _writer.writeString(4, _instance.reason);
    }
  }

  private _llmEvaluationExampleName: string;
  private _llmEvaluationWinnerExperimentName: string;
  private _scoreDelta: number;
  private _reason: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LlmEvaluationPairwiseResult to deeply clone from
   */
  constructor(_value?: RecursivePartial<LlmEvaluationPairwiseResult.AsObject>) {
    _value = _value || {};
    this.llmEvaluationExampleName = _value.llmEvaluationExampleName;
    this.llmEvaluationWinnerExperimentName =
      _value.llmEvaluationWinnerExperimentName;
    this.scoreDelta = _value.scoreDelta;
    this.reason = _value.reason;
    LlmEvaluationPairwiseResult.refineValues(this);
  }
  get llmEvaluationExampleName(): string {
    return this._llmEvaluationExampleName;
  }
  set llmEvaluationExampleName(value: string) {
    this._llmEvaluationExampleName = value;
  }
  get llmEvaluationWinnerExperimentName(): string {
    return this._llmEvaluationWinnerExperimentName;
  }
  set llmEvaluationWinnerExperimentName(value: string) {
    this._llmEvaluationWinnerExperimentName = value;
  }
  get scoreDelta(): number {
    return this._scoreDelta;
  }
  set scoreDelta(value: number) {
    this._scoreDelta = value;
  }
  get reason(): string {
    return this._reason;
  }
  set reason(value: string) {
    this._reason = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LlmEvaluationPairwiseResult.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LlmEvaluationPairwiseResult.AsObject {
    return {
      llmEvaluationExampleName: this.llmEvaluationExampleName,
      llmEvaluationWinnerExperimentName: this.llmEvaluationWinnerExperimentName,
      scoreDelta: this.scoreDelta,
      reason: this.reason
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
  ): LlmEvaluationPairwiseResult.AsProtobufJSON {
    return {
      llmEvaluationExampleName: this.llmEvaluationExampleName,
      llmEvaluationWinnerExperimentName: this.llmEvaluationWinnerExperimentName,
      scoreDelta: this.scoreDelta,
      reason: this.reason
    };
  }
}
export module LlmEvaluationPairwiseResult {
  /**
   * Standard JavaScript object representation for LlmEvaluationPairwiseResult
   */
  export interface AsObject {
    llmEvaluationExampleName: string;
    llmEvaluationWinnerExperimentName: string;
    scoreDelta: number;
    reason: string;
  }

  /**
   * Protobuf JSON representation for LlmEvaluationPairwiseResult
   */
  export interface AsProtobufJSON {
    llmEvaluationExampleName: string;
    llmEvaluationWinnerExperimentName: string;
    scoreDelta: number;
    reason: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CreateLlmEvaluationDatasetRequest
 */
export class CreateLlmEvaluationDatasetRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CreateLlmEvaluationDatasetRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateLlmEvaluationDatasetRequest();
    CreateLlmEvaluationDatasetRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateLlmEvaluationDatasetRequest) {
    _instance.parent = _instance.parent || '';
    _instance.displayName = _instance.displayName || '';
    _instance.description = _instance.description || '';
    _instance.llmEvaluationExamples = _instance.llmEvaluationExamples || [];
    _instance.tags = _instance.tags || [];
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateLlmEvaluationDatasetRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          _instance.description = _reader.readString();
          break;
        case 4:
          const messageInitializer4 = new LlmEvaluationExample();
          _reader.readMessage(
            messageInitializer4,
            LlmEvaluationExample.deserializeBinaryFromReader
          );
          (_instance.llmEvaluationExamples =
            _instance.llmEvaluationExamples || []).push(messageInitializer4);
          break;
        case 5:
          (_instance.tags = _instance.tags || []).push(_reader.readString());
          break;
        case 6:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateLlmEvaluationDatasetRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateLlmEvaluationDatasetRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (
      _instance.llmEvaluationExamples &&
      _instance.llmEvaluationExamples.length
    ) {
      _writer.writeRepeatedMessage(
        4,
        _instance.llmEvaluationExamples as any,
        LlmEvaluationExample.serializeBinaryToWriter
      );
    }
    if (_instance.tags && _instance.tags.length) {
      _writer.writeRepeatedString(5, _instance.tags);
    }
    if (_instance.languageCode) {
      _writer.writeString(6, _instance.languageCode);
    }
  }

  private _parent: string;
  private _displayName: string;
  private _description: string;
  private _llmEvaluationExamples?: LlmEvaluationExample[];
  private _tags: string[];
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateLlmEvaluationDatasetRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CreateLlmEvaluationDatasetRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.displayName = _value.displayName;
    this.description = _value.description;
    this.llmEvaluationExamples = (_value.llmEvaluationExamples || []).map(
      m => new LlmEvaluationExample(m)
    );
    this.tags = (_value.tags || []).slice();
    this.languageCode = _value.languageCode;
    CreateLlmEvaluationDatasetRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
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
  get llmEvaluationExamples(): LlmEvaluationExample[] | undefined {
    return this._llmEvaluationExamples;
  }
  set llmEvaluationExamples(value: LlmEvaluationExample[] | undefined) {
    this._llmEvaluationExamples = value;
  }
  get tags(): string[] {
    return this._tags;
  }
  set tags(value: string[]) {
    this._tags = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateLlmEvaluationDatasetRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateLlmEvaluationDatasetRequest.AsObject {
    return {
      parent: this.parent,
      displayName: this.displayName,
      description: this.description,
      llmEvaluationExamples: (this.llmEvaluationExamples || []).map(m =>
        m.toObject()
      ),
      tags: (this.tags || []).slice(),
      languageCode: this.languageCode
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
  ): CreateLlmEvaluationDatasetRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      displayName: this.displayName,
      description: this.description,
      llmEvaluationExamples: (this.llmEvaluationExamples || []).map(m =>
        m.toProtobufJSON(options)
      ),
      tags: (this.tags || []).slice(),
      languageCode: this.languageCode
    };
  }
}
export module CreateLlmEvaluationDatasetRequest {
  /**
   * Standard JavaScript object representation for CreateLlmEvaluationDatasetRequest
   */
  export interface AsObject {
    parent: string;
    displayName: string;
    description: string;
    llmEvaluationExamples?: LlmEvaluationExample.AsObject[];
    tags: string[];
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for CreateLlmEvaluationDatasetRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    displayName: string;
    description: string;
    llmEvaluationExamples: LlmEvaluationExample.AsProtobufJSON[] | null;
    tags: string[];
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.GetLlmEvaluationDatasetRequest
 */
export class GetLlmEvaluationDatasetRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetLlmEvaluationDatasetRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetLlmEvaluationDatasetRequest();
    GetLlmEvaluationDatasetRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetLlmEvaluationDatasetRequest) {
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetLlmEvaluationDatasetRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.parent = _reader.readString();
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetLlmEvaluationDatasetRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetLlmEvaluationDatasetRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.parent) {
      _writer.writeString(3, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
  }

  private _name: string;
  private _fieldMask?: googleProtobuf003.FieldMask;
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetLlmEvaluationDatasetRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetLlmEvaluationDatasetRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf003.FieldMask(_value.fieldMask)
      : undefined;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    GetLlmEvaluationDatasetRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get fieldMask(): googleProtobuf003.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf003.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetLlmEvaluationDatasetRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetLlmEvaluationDatasetRequest.AsObject {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      parent: this.parent,
      languageCode: this.languageCode
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
  ): GetLlmEvaluationDatasetRequest.AsProtobufJSON {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module GetLlmEvaluationDatasetRequest {
  /**
   * Standard JavaScript object representation for GetLlmEvaluationDatasetRequest
   */
  export interface AsObject {
    name: string;
    fieldMask?: googleProtobuf003.FieldMask.AsObject;
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for GetLlmEvaluationDatasetRequest
   */
  export interface AsProtobufJSON {
    name: string;
    fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
    parent: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.LlmEvaluationDatasetFilter
 */
export class LlmEvaluationDatasetFilter implements GrpcMessage {
  static id = 'ondewo.nlu.LlmEvaluationDatasetFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LlmEvaluationDatasetFilter();
    LlmEvaluationDatasetFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LlmEvaluationDatasetFilter) {
    _instance.displayName = _instance.displayName || '';
    _instance.tags = _instance.tags || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LlmEvaluationDatasetFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.displayName = _reader.readString();
          break;
        case 2:
          (_instance.tags = _instance.tags || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    LlmEvaluationDatasetFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LlmEvaluationDatasetFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.displayName) {
      _writer.writeString(1, _instance.displayName);
    }
    if (_instance.tags && _instance.tags.length) {
      _writer.writeRepeatedString(2, _instance.tags);
    }
  }

  private _displayName: string;
  private _tags: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LlmEvaluationDatasetFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<LlmEvaluationDatasetFilter.AsObject>) {
    _value = _value || {};
    this.displayName = _value.displayName;
    this.tags = (_value.tags || []).slice();
    LlmEvaluationDatasetFilter.refineValues(this);
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get tags(): string[] {
    return this._tags;
  }
  set tags(value: string[]) {
    this._tags = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LlmEvaluationDatasetFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LlmEvaluationDatasetFilter.AsObject {
    return {
      displayName: this.displayName,
      tags: (this.tags || []).slice()
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
  ): LlmEvaluationDatasetFilter.AsProtobufJSON {
    return {
      displayName: this.displayName,
      tags: (this.tags || []).slice()
    };
  }
}
export module LlmEvaluationDatasetFilter {
  /**
   * Standard JavaScript object representation for LlmEvaluationDatasetFilter
   */
  export interface AsObject {
    displayName: string;
    tags: string[];
  }

  /**
   * Protobuf JSON representation for LlmEvaluationDatasetFilter
   */
  export interface AsProtobufJSON {
    displayName: string;
    tags: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.ListLlmEvaluationDatasetsRequest
 */
export class ListLlmEvaluationDatasetsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListLlmEvaluationDatasetsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListLlmEvaluationDatasetsRequest();
    ListLlmEvaluationDatasetsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListLlmEvaluationDatasetsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.pageToken = _instance.pageToken || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.languageCode = _instance.languageCode || '';
    _instance.llmEvaluationDatasetFilter =
      _instance.llmEvaluationDatasetFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListLlmEvaluationDatasetsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.pageToken = _reader.readString();
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        case 5:
          _instance.llmEvaluationDatasetFilter = new LlmEvaluationDatasetFilter();
          _reader.readMessage(
            _instance.llmEvaluationDatasetFilter,
            LlmEvaluationDatasetFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListLlmEvaluationDatasetsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListLlmEvaluationDatasetsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.pageToken) {
      _writer.writeString(2, _instance.pageToken);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
    if (_instance.llmEvaluationDatasetFilter) {
      _writer.writeMessage(
        5,
        _instance.llmEvaluationDatasetFilter as any,
        LlmEvaluationDatasetFilter.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _pageToken: string;
  private _fieldMask?: googleProtobuf003.FieldMask;
  private _languageCode: string;
  private _llmEvaluationDatasetFilter?: LlmEvaluationDatasetFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListLlmEvaluationDatasetsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListLlmEvaluationDatasetsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.pageToken = _value.pageToken;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf003.FieldMask(_value.fieldMask)
      : undefined;
    this.languageCode = _value.languageCode;
    this.llmEvaluationDatasetFilter = _value.llmEvaluationDatasetFilter
      ? new LlmEvaluationDatasetFilter(_value.llmEvaluationDatasetFilter)
      : undefined;
    ListLlmEvaluationDatasetsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get fieldMask(): googleProtobuf003.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf003.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get llmEvaluationDatasetFilter(): LlmEvaluationDatasetFilter | undefined {
    return this._llmEvaluationDatasetFilter;
  }
  set llmEvaluationDatasetFilter(
    value: LlmEvaluationDatasetFilter | undefined
  ) {
    this._llmEvaluationDatasetFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListLlmEvaluationDatasetsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListLlmEvaluationDatasetsRequest.AsObject {
    return {
      parent: this.parent,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      languageCode: this.languageCode,
      llmEvaluationDatasetFilter: this.llmEvaluationDatasetFilter
        ? this.llmEvaluationDatasetFilter.toObject()
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
  ): ListLlmEvaluationDatasetsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      languageCode: this.languageCode,
      llmEvaluationDatasetFilter: this.llmEvaluationDatasetFilter
        ? this.llmEvaluationDatasetFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListLlmEvaluationDatasetsRequest {
  /**
   * Standard JavaScript object representation for ListLlmEvaluationDatasetsRequest
   */
  export interface AsObject {
    parent: string;
    pageToken: string;
    fieldMask?: googleProtobuf003.FieldMask.AsObject;
    languageCode: string;
    llmEvaluationDatasetFilter?: LlmEvaluationDatasetFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListLlmEvaluationDatasetsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    pageToken: string;
    fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
    languageCode: string;
    llmEvaluationDatasetFilter: LlmEvaluationDatasetFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListLlmEvaluationDatasetsResponse
 */
export class ListLlmEvaluationDatasetsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListLlmEvaluationDatasetsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListLlmEvaluationDatasetsResponse();
    ListLlmEvaluationDatasetsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListLlmEvaluationDatasetsResponse) {
    _instance.llmEvaluationDatasets = _instance.llmEvaluationDatasets || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListLlmEvaluationDatasetsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new LlmEvaluationDataset();
          _reader.readMessage(
            messageInitializer1,
            LlmEvaluationDataset.deserializeBinaryFromReader
          );
          (_instance.llmEvaluationDatasets =
            _instance.llmEvaluationDatasets || []).push(messageInitializer1);
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListLlmEvaluationDatasetsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListLlmEvaluationDatasetsResponse,
    _writer: BinaryWriter
  ) {
    if (
      _instance.llmEvaluationDatasets &&
      _instance.llmEvaluationDatasets.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.llmEvaluationDatasets as any,
        LlmEvaluationDataset.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _llmEvaluationDatasets?: LlmEvaluationDataset[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListLlmEvaluationDatasetsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListLlmEvaluationDatasetsResponse.AsObject>
  ) {
    _value = _value || {};
    this.llmEvaluationDatasets = (_value.llmEvaluationDatasets || []).map(
      m => new LlmEvaluationDataset(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListLlmEvaluationDatasetsResponse.refineValues(this);
  }
  get llmEvaluationDatasets(): LlmEvaluationDataset[] | undefined {
    return this._llmEvaluationDatasets;
  }
  set llmEvaluationDatasets(value: LlmEvaluationDataset[] | undefined) {
    this._llmEvaluationDatasets = value;
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
    ListLlmEvaluationDatasetsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListLlmEvaluationDatasetsResponse.AsObject {
    return {
      llmEvaluationDatasets: (this.llmEvaluationDatasets || []).map(m =>
        m.toObject()
      ),
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
  ): ListLlmEvaluationDatasetsResponse.AsProtobufJSON {
    return {
      llmEvaluationDatasets: (this.llmEvaluationDatasets || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListLlmEvaluationDatasetsResponse {
  /**
   * Standard JavaScript object representation for ListLlmEvaluationDatasetsResponse
   */
  export interface AsObject {
    llmEvaluationDatasets?: LlmEvaluationDataset.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListLlmEvaluationDatasetsResponse
   */
  export interface AsProtobufJSON {
    llmEvaluationDatasets: LlmEvaluationDataset.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateLlmEvaluationDatasetRequest
 */
export class UpdateLlmEvaluationDatasetRequest implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateLlmEvaluationDatasetRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateLlmEvaluationDatasetRequest();
    UpdateLlmEvaluationDatasetRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateLlmEvaluationDatasetRequest) {
    _instance.llmEvaluationDataset =
      _instance.llmEvaluationDataset || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateLlmEvaluationDatasetRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.llmEvaluationDataset = new LlmEvaluationDataset();
          _reader.readMessage(
            _instance.llmEvaluationDataset,
            LlmEvaluationDataset.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.updateMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.parent = _reader.readString();
          break;
        case 5:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateLlmEvaluationDatasetRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateLlmEvaluationDatasetRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.llmEvaluationDataset) {
      _writer.writeMessage(
        1,
        _instance.llmEvaluationDataset as any,
        LlmEvaluationDataset.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        2,
        _instance.updateMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.parent) {
      _writer.writeString(4, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(5, _instance.languageCode);
    }
  }

  private _llmEvaluationDataset?: LlmEvaluationDataset;
  private _updateMask?: googleProtobuf003.FieldMask;
  private _fieldMask?: googleProtobuf003.FieldMask;
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateLlmEvaluationDatasetRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<UpdateLlmEvaluationDatasetRequest.AsObject>
  ) {
    _value = _value || {};
    this.llmEvaluationDataset = _value.llmEvaluationDataset
      ? new LlmEvaluationDataset(_value.llmEvaluationDataset)
      : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf003.FieldMask(_value.updateMask)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf003.FieldMask(_value.fieldMask)
      : undefined;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    UpdateLlmEvaluationDatasetRequest.refineValues(this);
  }
  get llmEvaluationDataset(): LlmEvaluationDataset | undefined {
    return this._llmEvaluationDataset;
  }
  set llmEvaluationDataset(value: LlmEvaluationDataset | undefined) {
    this._llmEvaluationDataset = value;
  }
  get updateMask(): googleProtobuf003.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf003.FieldMask | undefined) {
    this._updateMask = value;
  }
  get fieldMask(): googleProtobuf003.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf003.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateLlmEvaluationDatasetRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateLlmEvaluationDatasetRequest.AsObject {
    return {
      llmEvaluationDataset: this.llmEvaluationDataset
        ? this.llmEvaluationDataset.toObject()
        : undefined,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      parent: this.parent,
      languageCode: this.languageCode
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
  ): UpdateLlmEvaluationDatasetRequest.AsProtobufJSON {
    return {
      llmEvaluationDataset: this.llmEvaluationDataset
        ? this.llmEvaluationDataset.toProtobufJSON(options)
        : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module UpdateLlmEvaluationDatasetRequest {
  /**
   * Standard JavaScript object representation for UpdateLlmEvaluationDatasetRequest
   */
  export interface AsObject {
    llmEvaluationDataset?: LlmEvaluationDataset.AsObject;
    updateMask?: googleProtobuf003.FieldMask.AsObject;
    fieldMask?: googleProtobuf003.FieldMask.AsObject;
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for UpdateLlmEvaluationDatasetRequest
   */
  export interface AsProtobufJSON {
    llmEvaluationDataset: LlmEvaluationDataset.AsProtobufJSON | null;
    updateMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
    fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
    parent: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteLlmEvaluationDatasetRequest
 */
export class DeleteLlmEvaluationDatasetRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteLlmEvaluationDatasetRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteLlmEvaluationDatasetRequest();
    DeleteLlmEvaluationDatasetRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteLlmEvaluationDatasetRequest) {
    _instance.name = _instance.name || '';
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteLlmEvaluationDatasetRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.parent = _reader.readString();
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteLlmEvaluationDatasetRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteLlmEvaluationDatasetRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.parent) {
      _writer.writeString(2, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
  }

  private _name: string;
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteLlmEvaluationDatasetRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<DeleteLlmEvaluationDatasetRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    DeleteLlmEvaluationDatasetRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteLlmEvaluationDatasetRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteLlmEvaluationDatasetRequest.AsObject {
    return {
      name: this.name,
      parent: this.parent,
      languageCode: this.languageCode
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
  ): DeleteLlmEvaluationDatasetRequest.AsProtobufJSON {
    return {
      name: this.name,
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module DeleteLlmEvaluationDatasetRequest {
  /**
   * Standard JavaScript object representation for DeleteLlmEvaluationDatasetRequest
   */
  export interface AsObject {
    name: string;
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for DeleteLlmEvaluationDatasetRequest
   */
  export interface AsProtobufJSON {
    name: string;
    parent: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.AddLlmEvaluationExampleRequest
 */
export class AddLlmEvaluationExampleRequest implements GrpcMessage {
  static id = 'ondewo.nlu.AddLlmEvaluationExampleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddLlmEvaluationExampleRequest();
    AddLlmEvaluationExampleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddLlmEvaluationExampleRequest) {
    _instance.llmEvaluationDatasetName =
      _instance.llmEvaluationDatasetName || '';
    _instance.llmEvaluationExample =
      _instance.llmEvaluationExample || undefined;
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddLlmEvaluationExampleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.llmEvaluationDatasetName = _reader.readString();
          break;
        case 2:
          _instance.llmEvaluationExample = new LlmEvaluationExample();
          _reader.readMessage(
            _instance.llmEvaluationExample,
            LlmEvaluationExample.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.parent = _reader.readString();
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AddLlmEvaluationExampleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddLlmEvaluationExampleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.llmEvaluationDatasetName) {
      _writer.writeString(1, _instance.llmEvaluationDatasetName);
    }
    if (_instance.llmEvaluationExample) {
      _writer.writeMessage(
        2,
        _instance.llmEvaluationExample as any,
        LlmEvaluationExample.serializeBinaryToWriter
      );
    }
    if (_instance.parent) {
      _writer.writeString(3, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
  }

  private _llmEvaluationDatasetName: string;
  private _llmEvaluationExample?: LlmEvaluationExample;
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddLlmEvaluationExampleRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<AddLlmEvaluationExampleRequest.AsObject>
  ) {
    _value = _value || {};
    this.llmEvaluationDatasetName = _value.llmEvaluationDatasetName;
    this.llmEvaluationExample = _value.llmEvaluationExample
      ? new LlmEvaluationExample(_value.llmEvaluationExample)
      : undefined;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    AddLlmEvaluationExampleRequest.refineValues(this);
  }
  get llmEvaluationDatasetName(): string {
    return this._llmEvaluationDatasetName;
  }
  set llmEvaluationDatasetName(value: string) {
    this._llmEvaluationDatasetName = value;
  }
  get llmEvaluationExample(): LlmEvaluationExample | undefined {
    return this._llmEvaluationExample;
  }
  set llmEvaluationExample(value: LlmEvaluationExample | undefined) {
    this._llmEvaluationExample = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddLlmEvaluationExampleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddLlmEvaluationExampleRequest.AsObject {
    return {
      llmEvaluationDatasetName: this.llmEvaluationDatasetName,
      llmEvaluationExample: this.llmEvaluationExample
        ? this.llmEvaluationExample.toObject()
        : undefined,
      parent: this.parent,
      languageCode: this.languageCode
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
  ): AddLlmEvaluationExampleRequest.AsProtobufJSON {
    return {
      llmEvaluationDatasetName: this.llmEvaluationDatasetName,
      llmEvaluationExample: this.llmEvaluationExample
        ? this.llmEvaluationExample.toProtobufJSON(options)
        : null,
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module AddLlmEvaluationExampleRequest {
  /**
   * Standard JavaScript object representation for AddLlmEvaluationExampleRequest
   */
  export interface AsObject {
    llmEvaluationDatasetName: string;
    llmEvaluationExample?: LlmEvaluationExample.AsObject;
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for AddLlmEvaluationExampleRequest
   */
  export interface AsProtobufJSON {
    llmEvaluationDatasetName: string;
    llmEvaluationExample: LlmEvaluationExample.AsProtobufJSON | null;
    parent: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.AddLlmEvaluationExamplesRequest
 */
export class AddLlmEvaluationExamplesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.AddLlmEvaluationExamplesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddLlmEvaluationExamplesRequest();
    AddLlmEvaluationExamplesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddLlmEvaluationExamplesRequest) {
    _instance.llmEvaluationDatasetName =
      _instance.llmEvaluationDatasetName || '';
    _instance.llmEvaluationExamples = _instance.llmEvaluationExamples || [];
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddLlmEvaluationExamplesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.llmEvaluationDatasetName = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new LlmEvaluationExample();
          _reader.readMessage(
            messageInitializer2,
            LlmEvaluationExample.deserializeBinaryFromReader
          );
          (_instance.llmEvaluationExamples =
            _instance.llmEvaluationExamples || []).push(messageInitializer2);
          break;
        case 3:
          _instance.parent = _reader.readString();
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AddLlmEvaluationExamplesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddLlmEvaluationExamplesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.llmEvaluationDatasetName) {
      _writer.writeString(1, _instance.llmEvaluationDatasetName);
    }
    if (
      _instance.llmEvaluationExamples &&
      _instance.llmEvaluationExamples.length
    ) {
      _writer.writeRepeatedMessage(
        2,
        _instance.llmEvaluationExamples as any,
        LlmEvaluationExample.serializeBinaryToWriter
      );
    }
    if (_instance.parent) {
      _writer.writeString(3, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
  }

  private _llmEvaluationDatasetName: string;
  private _llmEvaluationExamples?: LlmEvaluationExample[];
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddLlmEvaluationExamplesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<AddLlmEvaluationExamplesRequest.AsObject>
  ) {
    _value = _value || {};
    this.llmEvaluationDatasetName = _value.llmEvaluationDatasetName;
    this.llmEvaluationExamples = (_value.llmEvaluationExamples || []).map(
      m => new LlmEvaluationExample(m)
    );
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    AddLlmEvaluationExamplesRequest.refineValues(this);
  }
  get llmEvaluationDatasetName(): string {
    return this._llmEvaluationDatasetName;
  }
  set llmEvaluationDatasetName(value: string) {
    this._llmEvaluationDatasetName = value;
  }
  get llmEvaluationExamples(): LlmEvaluationExample[] | undefined {
    return this._llmEvaluationExamples;
  }
  set llmEvaluationExamples(value: LlmEvaluationExample[] | undefined) {
    this._llmEvaluationExamples = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddLlmEvaluationExamplesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddLlmEvaluationExamplesRequest.AsObject {
    return {
      llmEvaluationDatasetName: this.llmEvaluationDatasetName,
      llmEvaluationExamples: (this.llmEvaluationExamples || []).map(m =>
        m.toObject()
      ),
      parent: this.parent,
      languageCode: this.languageCode
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
  ): AddLlmEvaluationExamplesRequest.AsProtobufJSON {
    return {
      llmEvaluationDatasetName: this.llmEvaluationDatasetName,
      llmEvaluationExamples: (this.llmEvaluationExamples || []).map(m =>
        m.toProtobufJSON(options)
      ),
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module AddLlmEvaluationExamplesRequest {
  /**
   * Standard JavaScript object representation for AddLlmEvaluationExamplesRequest
   */
  export interface AsObject {
    llmEvaluationDatasetName: string;
    llmEvaluationExamples?: LlmEvaluationExample.AsObject[];
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for AddLlmEvaluationExamplesRequest
   */
  export interface AsProtobufJSON {
    llmEvaluationDatasetName: string;
    llmEvaluationExamples: LlmEvaluationExample.AsProtobufJSON[] | null;
    parent: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.AddLlmEvaluationExamplesResponse
 */
export class AddLlmEvaluationExamplesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.AddLlmEvaluationExamplesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddLlmEvaluationExamplesResponse();
    AddLlmEvaluationExamplesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddLlmEvaluationExamplesResponse) {
    _instance.llmEvaluationExamples = _instance.llmEvaluationExamples || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddLlmEvaluationExamplesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new LlmEvaluationExample();
          _reader.readMessage(
            messageInitializer1,
            LlmEvaluationExample.deserializeBinaryFromReader
          );
          (_instance.llmEvaluationExamples =
            _instance.llmEvaluationExamples || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    AddLlmEvaluationExamplesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddLlmEvaluationExamplesResponse,
    _writer: BinaryWriter
  ) {
    if (
      _instance.llmEvaluationExamples &&
      _instance.llmEvaluationExamples.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.llmEvaluationExamples as any,
        LlmEvaluationExample.serializeBinaryToWriter
      );
    }
  }

  private _llmEvaluationExamples?: LlmEvaluationExample[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddLlmEvaluationExamplesResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<AddLlmEvaluationExamplesResponse.AsObject>
  ) {
    _value = _value || {};
    this.llmEvaluationExamples = (_value.llmEvaluationExamples || []).map(
      m => new LlmEvaluationExample(m)
    );
    AddLlmEvaluationExamplesResponse.refineValues(this);
  }
  get llmEvaluationExamples(): LlmEvaluationExample[] | undefined {
    return this._llmEvaluationExamples;
  }
  set llmEvaluationExamples(value: LlmEvaluationExample[] | undefined) {
    this._llmEvaluationExamples = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddLlmEvaluationExamplesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddLlmEvaluationExamplesResponse.AsObject {
    return {
      llmEvaluationExamples: (this.llmEvaluationExamples || []).map(m =>
        m.toObject()
      )
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
  ): AddLlmEvaluationExamplesResponse.AsProtobufJSON {
    return {
      llmEvaluationExamples: (this.llmEvaluationExamples || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module AddLlmEvaluationExamplesResponse {
  /**
   * Standard JavaScript object representation for AddLlmEvaluationExamplesResponse
   */
  export interface AsObject {
    llmEvaluationExamples?: LlmEvaluationExample.AsObject[];
  }

  /**
   * Protobuf JSON representation for AddLlmEvaluationExamplesResponse
   */
  export interface AsProtobufJSON {
    llmEvaluationExamples: LlmEvaluationExample.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.GetLlmEvaluationExampleRequest
 */
export class GetLlmEvaluationExampleRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetLlmEvaluationExampleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetLlmEvaluationExampleRequest();
    GetLlmEvaluationExampleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetLlmEvaluationExampleRequest) {
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetLlmEvaluationExampleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.parent = _reader.readString();
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetLlmEvaluationExampleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetLlmEvaluationExampleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.parent) {
      _writer.writeString(3, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
  }

  private _name: string;
  private _fieldMask?: googleProtobuf003.FieldMask;
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetLlmEvaluationExampleRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetLlmEvaluationExampleRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf003.FieldMask(_value.fieldMask)
      : undefined;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    GetLlmEvaluationExampleRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get fieldMask(): googleProtobuf003.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf003.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetLlmEvaluationExampleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetLlmEvaluationExampleRequest.AsObject {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      parent: this.parent,
      languageCode: this.languageCode
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
  ): GetLlmEvaluationExampleRequest.AsProtobufJSON {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module GetLlmEvaluationExampleRequest {
  /**
   * Standard JavaScript object representation for GetLlmEvaluationExampleRequest
   */
  export interface AsObject {
    name: string;
    fieldMask?: googleProtobuf003.FieldMask.AsObject;
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for GetLlmEvaluationExampleRequest
   */
  export interface AsProtobufJSON {
    name: string;
    fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
    parent: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.LlmEvaluationExampleFilter
 */
export class LlmEvaluationExampleFilter implements GrpcMessage {
  static id = 'ondewo.nlu.LlmEvaluationExampleFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LlmEvaluationExampleFilter();
    LlmEvaluationExampleFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LlmEvaluationExampleFilter) {
    _instance.displayName = _instance.displayName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LlmEvaluationExampleFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.displayName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LlmEvaluationExampleFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LlmEvaluationExampleFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.displayName) {
      _writer.writeString(1, _instance.displayName);
    }
  }

  private _displayName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LlmEvaluationExampleFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<LlmEvaluationExampleFilter.AsObject>) {
    _value = _value || {};
    this.displayName = _value.displayName;
    LlmEvaluationExampleFilter.refineValues(this);
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LlmEvaluationExampleFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LlmEvaluationExampleFilter.AsObject {
    return {
      displayName: this.displayName
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
  ): LlmEvaluationExampleFilter.AsProtobufJSON {
    return {
      displayName: this.displayName
    };
  }
}
export module LlmEvaluationExampleFilter {
  /**
   * Standard JavaScript object representation for LlmEvaluationExampleFilter
   */
  export interface AsObject {
    displayName: string;
  }

  /**
   * Protobuf JSON representation for LlmEvaluationExampleFilter
   */
  export interface AsProtobufJSON {
    displayName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListLlmEvaluationExamplesRequest
 */
export class ListLlmEvaluationExamplesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListLlmEvaluationExamplesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListLlmEvaluationExamplesRequest();
    ListLlmEvaluationExamplesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListLlmEvaluationExamplesRequest) {
    _instance.llmEvaluationDatasetName =
      _instance.llmEvaluationDatasetName || '';
    _instance.pageToken = _instance.pageToken || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.llmEvaluationExampleFilter =
      _instance.llmEvaluationExampleFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListLlmEvaluationExamplesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.llmEvaluationDatasetName = _reader.readString();
          break;
        case 2:
          _instance.pageToken = _reader.readString();
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.parent = _reader.readString();
          break;
        case 5:
          _instance.languageCode = _reader.readString();
          break;
        case 6:
          _instance.llmEvaluationExampleFilter = new LlmEvaluationExampleFilter();
          _reader.readMessage(
            _instance.llmEvaluationExampleFilter,
            LlmEvaluationExampleFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListLlmEvaluationExamplesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListLlmEvaluationExamplesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.llmEvaluationDatasetName) {
      _writer.writeString(1, _instance.llmEvaluationDatasetName);
    }
    if (_instance.pageToken) {
      _writer.writeString(2, _instance.pageToken);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.parent) {
      _writer.writeString(4, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(5, _instance.languageCode);
    }
    if (_instance.llmEvaluationExampleFilter) {
      _writer.writeMessage(
        6,
        _instance.llmEvaluationExampleFilter as any,
        LlmEvaluationExampleFilter.serializeBinaryToWriter
      );
    }
  }

  private _llmEvaluationDatasetName: string;
  private _pageToken: string;
  private _fieldMask?: googleProtobuf003.FieldMask;
  private _parent: string;
  private _languageCode: string;
  private _llmEvaluationExampleFilter?: LlmEvaluationExampleFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListLlmEvaluationExamplesRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListLlmEvaluationExamplesRequest.AsObject>
  ) {
    _value = _value || {};
    this.llmEvaluationDatasetName = _value.llmEvaluationDatasetName;
    this.pageToken = _value.pageToken;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf003.FieldMask(_value.fieldMask)
      : undefined;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.llmEvaluationExampleFilter = _value.llmEvaluationExampleFilter
      ? new LlmEvaluationExampleFilter(_value.llmEvaluationExampleFilter)
      : undefined;
    ListLlmEvaluationExamplesRequest.refineValues(this);
  }
  get llmEvaluationDatasetName(): string {
    return this._llmEvaluationDatasetName;
  }
  set llmEvaluationDatasetName(value: string) {
    this._llmEvaluationDatasetName = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get fieldMask(): googleProtobuf003.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf003.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get llmEvaluationExampleFilter(): LlmEvaluationExampleFilter | undefined {
    return this._llmEvaluationExampleFilter;
  }
  set llmEvaluationExampleFilter(
    value: LlmEvaluationExampleFilter | undefined
  ) {
    this._llmEvaluationExampleFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListLlmEvaluationExamplesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListLlmEvaluationExamplesRequest.AsObject {
    return {
      llmEvaluationDatasetName: this.llmEvaluationDatasetName,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      parent: this.parent,
      languageCode: this.languageCode,
      llmEvaluationExampleFilter: this.llmEvaluationExampleFilter
        ? this.llmEvaluationExampleFilter.toObject()
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
  ): ListLlmEvaluationExamplesRequest.AsProtobufJSON {
    return {
      llmEvaluationDatasetName: this.llmEvaluationDatasetName,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      parent: this.parent,
      languageCode: this.languageCode,
      llmEvaluationExampleFilter: this.llmEvaluationExampleFilter
        ? this.llmEvaluationExampleFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListLlmEvaluationExamplesRequest {
  /**
   * Standard JavaScript object representation for ListLlmEvaluationExamplesRequest
   */
  export interface AsObject {
    llmEvaluationDatasetName: string;
    pageToken: string;
    fieldMask?: googleProtobuf003.FieldMask.AsObject;
    parent: string;
    languageCode: string;
    llmEvaluationExampleFilter?: LlmEvaluationExampleFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListLlmEvaluationExamplesRequest
   */
  export interface AsProtobufJSON {
    llmEvaluationDatasetName: string;
    pageToken: string;
    fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
    parent: string;
    languageCode: string;
    llmEvaluationExampleFilter: LlmEvaluationExampleFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListLlmEvaluationExamplesResponse
 */
export class ListLlmEvaluationExamplesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListLlmEvaluationExamplesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListLlmEvaluationExamplesResponse();
    ListLlmEvaluationExamplesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListLlmEvaluationExamplesResponse) {
    _instance.llmEvaluationExamples = _instance.llmEvaluationExamples || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListLlmEvaluationExamplesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new LlmEvaluationExample();
          _reader.readMessage(
            messageInitializer1,
            LlmEvaluationExample.deserializeBinaryFromReader
          );
          (_instance.llmEvaluationExamples =
            _instance.llmEvaluationExamples || []).push(messageInitializer1);
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListLlmEvaluationExamplesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListLlmEvaluationExamplesResponse,
    _writer: BinaryWriter
  ) {
    if (
      _instance.llmEvaluationExamples &&
      _instance.llmEvaluationExamples.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.llmEvaluationExamples as any,
        LlmEvaluationExample.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _llmEvaluationExamples?: LlmEvaluationExample[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListLlmEvaluationExamplesResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListLlmEvaluationExamplesResponse.AsObject>
  ) {
    _value = _value || {};
    this.llmEvaluationExamples = (_value.llmEvaluationExamples || []).map(
      m => new LlmEvaluationExample(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListLlmEvaluationExamplesResponse.refineValues(this);
  }
  get llmEvaluationExamples(): LlmEvaluationExample[] | undefined {
    return this._llmEvaluationExamples;
  }
  set llmEvaluationExamples(value: LlmEvaluationExample[] | undefined) {
    this._llmEvaluationExamples = value;
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
    ListLlmEvaluationExamplesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListLlmEvaluationExamplesResponse.AsObject {
    return {
      llmEvaluationExamples: (this.llmEvaluationExamples || []).map(m =>
        m.toObject()
      ),
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
  ): ListLlmEvaluationExamplesResponse.AsProtobufJSON {
    return {
      llmEvaluationExamples: (this.llmEvaluationExamples || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListLlmEvaluationExamplesResponse {
  /**
   * Standard JavaScript object representation for ListLlmEvaluationExamplesResponse
   */
  export interface AsObject {
    llmEvaluationExamples?: LlmEvaluationExample.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListLlmEvaluationExamplesResponse
   */
  export interface AsProtobufJSON {
    llmEvaluationExamples: LlmEvaluationExample.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateLlmEvaluationExampleRequest
 */
export class UpdateLlmEvaluationExampleRequest implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateLlmEvaluationExampleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateLlmEvaluationExampleRequest();
    UpdateLlmEvaluationExampleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateLlmEvaluationExampleRequest) {
    _instance.llmEvaluationExample =
      _instance.llmEvaluationExample || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateLlmEvaluationExampleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.llmEvaluationExample = new LlmEvaluationExample();
          _reader.readMessage(
            _instance.llmEvaluationExample,
            LlmEvaluationExample.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.updateMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.parent = _reader.readString();
          break;
        case 5:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateLlmEvaluationExampleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateLlmEvaluationExampleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.llmEvaluationExample) {
      _writer.writeMessage(
        1,
        _instance.llmEvaluationExample as any,
        LlmEvaluationExample.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        2,
        _instance.updateMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.parent) {
      _writer.writeString(4, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(5, _instance.languageCode);
    }
  }

  private _llmEvaluationExample?: LlmEvaluationExample;
  private _updateMask?: googleProtobuf003.FieldMask;
  private _fieldMask?: googleProtobuf003.FieldMask;
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateLlmEvaluationExampleRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<UpdateLlmEvaluationExampleRequest.AsObject>
  ) {
    _value = _value || {};
    this.llmEvaluationExample = _value.llmEvaluationExample
      ? new LlmEvaluationExample(_value.llmEvaluationExample)
      : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf003.FieldMask(_value.updateMask)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf003.FieldMask(_value.fieldMask)
      : undefined;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    UpdateLlmEvaluationExampleRequest.refineValues(this);
  }
  get llmEvaluationExample(): LlmEvaluationExample | undefined {
    return this._llmEvaluationExample;
  }
  set llmEvaluationExample(value: LlmEvaluationExample | undefined) {
    this._llmEvaluationExample = value;
  }
  get updateMask(): googleProtobuf003.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf003.FieldMask | undefined) {
    this._updateMask = value;
  }
  get fieldMask(): googleProtobuf003.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf003.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateLlmEvaluationExampleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateLlmEvaluationExampleRequest.AsObject {
    return {
      llmEvaluationExample: this.llmEvaluationExample
        ? this.llmEvaluationExample.toObject()
        : undefined,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      parent: this.parent,
      languageCode: this.languageCode
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
  ): UpdateLlmEvaluationExampleRequest.AsProtobufJSON {
    return {
      llmEvaluationExample: this.llmEvaluationExample
        ? this.llmEvaluationExample.toProtobufJSON(options)
        : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module UpdateLlmEvaluationExampleRequest {
  /**
   * Standard JavaScript object representation for UpdateLlmEvaluationExampleRequest
   */
  export interface AsObject {
    llmEvaluationExample?: LlmEvaluationExample.AsObject;
    updateMask?: googleProtobuf003.FieldMask.AsObject;
    fieldMask?: googleProtobuf003.FieldMask.AsObject;
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for UpdateLlmEvaluationExampleRequest
   */
  export interface AsProtobufJSON {
    llmEvaluationExample: LlmEvaluationExample.AsProtobufJSON | null;
    updateMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
    fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
    parent: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteLlmEvaluationExampleRequest
 */
export class DeleteLlmEvaluationExampleRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteLlmEvaluationExampleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteLlmEvaluationExampleRequest();
    DeleteLlmEvaluationExampleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteLlmEvaluationExampleRequest) {
    _instance.name = _instance.name || '';
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteLlmEvaluationExampleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.parent = _reader.readString();
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteLlmEvaluationExampleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteLlmEvaluationExampleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.parent) {
      _writer.writeString(2, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
  }

  private _name: string;
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteLlmEvaluationExampleRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<DeleteLlmEvaluationExampleRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    DeleteLlmEvaluationExampleRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteLlmEvaluationExampleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteLlmEvaluationExampleRequest.AsObject {
    return {
      name: this.name,
      parent: this.parent,
      languageCode: this.languageCode
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
  ): DeleteLlmEvaluationExampleRequest.AsProtobufJSON {
    return {
      name: this.name,
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module DeleteLlmEvaluationExampleRequest {
  /**
   * Standard JavaScript object representation for DeleteLlmEvaluationExampleRequest
   */
  export interface AsObject {
    name: string;
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for DeleteLlmEvaluationExampleRequest
   */
  export interface AsProtobufJSON {
    name: string;
    parent: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RunLlmEvaluationExperimentRequest
 */
export class RunLlmEvaluationExperimentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RunLlmEvaluationExperimentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RunLlmEvaluationExperimentRequest();
    RunLlmEvaluationExperimentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RunLlmEvaluationExperimentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.llmEvaluationDatasetName =
      _instance.llmEvaluationDatasetName || '';
    _instance.displayName = _instance.displayName || '';
    _instance.gitSha = _instance.gitSha || '';
    _instance.promptVersion = _instance.promptVersion || '';
    _instance.modelName = _instance.modelName || '';
    _instance.config = _instance.config || undefined;
    _instance.llmEvaluationEvaluatorNames =
      _instance.llmEvaluationEvaluatorNames || [];
    _instance.llmEvaluationBaselineExperimentName =
      _instance.llmEvaluationBaselineExperimentName || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.ccaiServiceNames = _instance.ccaiServiceNames || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RunLlmEvaluationExperimentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.llmEvaluationDatasetName = _reader.readString();
          break;
        case 3:
          _instance.displayName = _reader.readString();
          break;
        case 4:
          _instance.gitSha = _reader.readString();
          break;
        case 5:
          _instance.promptVersion = _reader.readString();
          break;
        case 6:
          _instance.modelName = _reader.readString();
          break;
        case 7:
          _instance.config = new googleProtobuf007.Struct();
          _reader.readMessage(
            _instance.config,
            googleProtobuf007.Struct.deserializeBinaryFromReader
          );
          break;
        case 8:
          (_instance.llmEvaluationEvaluatorNames =
            _instance.llmEvaluationEvaluatorNames || []).push(
            _reader.readString()
          );
          break;
        case 9:
          _instance.llmEvaluationBaselineExperimentName = _reader.readString();
          break;
        case 10:
          _instance.languageCode = _reader.readString();
          break;
        case 11:
          (_instance.ccaiServiceNames = _instance.ccaiServiceNames || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RunLlmEvaluationExperimentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RunLlmEvaluationExperimentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.llmEvaluationDatasetName) {
      _writer.writeString(2, _instance.llmEvaluationDatasetName);
    }
    if (_instance.displayName) {
      _writer.writeString(3, _instance.displayName);
    }
    if (_instance.gitSha) {
      _writer.writeString(4, _instance.gitSha);
    }
    if (_instance.promptVersion) {
      _writer.writeString(5, _instance.promptVersion);
    }
    if (_instance.modelName) {
      _writer.writeString(6, _instance.modelName);
    }
    if (_instance.config) {
      _writer.writeMessage(
        7,
        _instance.config as any,
        googleProtobuf007.Struct.serializeBinaryToWriter
      );
    }
    if (
      _instance.llmEvaluationEvaluatorNames &&
      _instance.llmEvaluationEvaluatorNames.length
    ) {
      _writer.writeRepeatedString(8, _instance.llmEvaluationEvaluatorNames);
    }
    if (_instance.llmEvaluationBaselineExperimentName) {
      _writer.writeString(9, _instance.llmEvaluationBaselineExperimentName);
    }
    if (_instance.languageCode) {
      _writer.writeString(10, _instance.languageCode);
    }
    if (_instance.ccaiServiceNames && _instance.ccaiServiceNames.length) {
      _writer.writeRepeatedString(11, _instance.ccaiServiceNames);
    }
  }

  private _parent: string;
  private _llmEvaluationDatasetName: string;
  private _displayName: string;
  private _gitSha: string;
  private _promptVersion: string;
  private _modelName: string;
  private _config?: googleProtobuf007.Struct;
  private _llmEvaluationEvaluatorNames: string[];
  private _llmEvaluationBaselineExperimentName: string;
  private _languageCode: string;
  private _ccaiServiceNames: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RunLlmEvaluationExperimentRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RunLlmEvaluationExperimentRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.llmEvaluationDatasetName = _value.llmEvaluationDatasetName;
    this.displayName = _value.displayName;
    this.gitSha = _value.gitSha;
    this.promptVersion = _value.promptVersion;
    this.modelName = _value.modelName;
    this.config = _value.config
      ? new googleProtobuf007.Struct(_value.config)
      : undefined;
    this.llmEvaluationEvaluatorNames = (
      _value.llmEvaluationEvaluatorNames || []
    ).slice();
    this.llmEvaluationBaselineExperimentName =
      _value.llmEvaluationBaselineExperimentName;
    this.languageCode = _value.languageCode;
    this.ccaiServiceNames = (_value.ccaiServiceNames || []).slice();
    RunLlmEvaluationExperimentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get llmEvaluationDatasetName(): string {
    return this._llmEvaluationDatasetName;
  }
  set llmEvaluationDatasetName(value: string) {
    this._llmEvaluationDatasetName = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get gitSha(): string {
    return this._gitSha;
  }
  set gitSha(value: string) {
    this._gitSha = value;
  }
  get promptVersion(): string {
    return this._promptVersion;
  }
  set promptVersion(value: string) {
    this._promptVersion = value;
  }
  get modelName(): string {
    return this._modelName;
  }
  set modelName(value: string) {
    this._modelName = value;
  }
  get config(): googleProtobuf007.Struct | undefined {
    return this._config;
  }
  set config(value: googleProtobuf007.Struct | undefined) {
    this._config = value;
  }
  get llmEvaluationEvaluatorNames(): string[] {
    return this._llmEvaluationEvaluatorNames;
  }
  set llmEvaluationEvaluatorNames(value: string[]) {
    this._llmEvaluationEvaluatorNames = value;
  }
  get llmEvaluationBaselineExperimentName(): string {
    return this._llmEvaluationBaselineExperimentName;
  }
  set llmEvaluationBaselineExperimentName(value: string) {
    this._llmEvaluationBaselineExperimentName = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get ccaiServiceNames(): string[] {
    return this._ccaiServiceNames;
  }
  set ccaiServiceNames(value: string[]) {
    this._ccaiServiceNames = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RunLlmEvaluationExperimentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RunLlmEvaluationExperimentRequest.AsObject {
    return {
      parent: this.parent,
      llmEvaluationDatasetName: this.llmEvaluationDatasetName,
      displayName: this.displayName,
      gitSha: this.gitSha,
      promptVersion: this.promptVersion,
      modelName: this.modelName,
      config: this.config ? this.config.toObject() : undefined,
      llmEvaluationEvaluatorNames: (
        this.llmEvaluationEvaluatorNames || []
      ).slice(),
      llmEvaluationBaselineExperimentName: this
        .llmEvaluationBaselineExperimentName,
      languageCode: this.languageCode,
      ccaiServiceNames: (this.ccaiServiceNames || []).slice()
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
  ): RunLlmEvaluationExperimentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      llmEvaluationDatasetName: this.llmEvaluationDatasetName,
      displayName: this.displayName,
      gitSha: this.gitSha,
      promptVersion: this.promptVersion,
      modelName: this.modelName,
      config: this.config ? this.config.toProtobufJSON(options) : null,
      llmEvaluationEvaluatorNames: (
        this.llmEvaluationEvaluatorNames || []
      ).slice(),
      llmEvaluationBaselineExperimentName: this
        .llmEvaluationBaselineExperimentName,
      languageCode: this.languageCode,
      ccaiServiceNames: (this.ccaiServiceNames || []).slice()
    };
  }
}
export module RunLlmEvaluationExperimentRequest {
  /**
   * Standard JavaScript object representation for RunLlmEvaluationExperimentRequest
   */
  export interface AsObject {
    parent: string;
    llmEvaluationDatasetName: string;
    displayName: string;
    gitSha: string;
    promptVersion: string;
    modelName: string;
    config?: googleProtobuf007.Struct.AsObject;
    llmEvaluationEvaluatorNames: string[];
    llmEvaluationBaselineExperimentName: string;
    languageCode: string;
    ccaiServiceNames: string[];
  }

  /**
   * Protobuf JSON representation for RunLlmEvaluationExperimentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    llmEvaluationDatasetName: string;
    displayName: string;
    gitSha: string;
    promptVersion: string;
    modelName: string;
    config: googleProtobuf007.Struct.AsProtobufJSON | null;
    llmEvaluationEvaluatorNames: string[];
    llmEvaluationBaselineExperimentName: string;
    languageCode: string;
    ccaiServiceNames: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.GetLlmEvaluationExperimentRequest
 */
export class GetLlmEvaluationExperimentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.GetLlmEvaluationExperimentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetLlmEvaluationExperimentRequest();
    GetLlmEvaluationExperimentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetLlmEvaluationExperimentRequest) {
    _instance.name = _instance.name || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetLlmEvaluationExperimentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.parent = _reader.readString();
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetLlmEvaluationExperimentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetLlmEvaluationExperimentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.parent) {
      _writer.writeString(3, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
  }

  private _name: string;
  private _fieldMask?: googleProtobuf003.FieldMask;
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetLlmEvaluationExperimentRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetLlmEvaluationExperimentRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf003.FieldMask(_value.fieldMask)
      : undefined;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    GetLlmEvaluationExperimentRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get fieldMask(): googleProtobuf003.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf003.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetLlmEvaluationExperimentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetLlmEvaluationExperimentRequest.AsObject {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      parent: this.parent,
      languageCode: this.languageCode
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
  ): GetLlmEvaluationExperimentRequest.AsProtobufJSON {
    return {
      name: this.name,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module GetLlmEvaluationExperimentRequest {
  /**
   * Standard JavaScript object representation for GetLlmEvaluationExperimentRequest
   */
  export interface AsObject {
    name: string;
    fieldMask?: googleProtobuf003.FieldMask.AsObject;
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for GetLlmEvaluationExperimentRequest
   */
  export interface AsProtobufJSON {
    name: string;
    fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
    parent: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.LlmEvaluationExperimentFilter
 */
export class LlmEvaluationExperimentFilter implements GrpcMessage {
  static id = 'ondewo.nlu.LlmEvaluationExperimentFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LlmEvaluationExperimentFilter();
    LlmEvaluationExperimentFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LlmEvaluationExperimentFilter) {
    _instance.displayName = _instance.displayName || '';
    _instance.llmEvaluationExperimentStatus =
      _instance.llmEvaluationExperimentStatus || 0;
    _instance.llmEvaluationDatasetName =
      _instance.llmEvaluationDatasetName || '';
    _instance.modelName = _instance.modelName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LlmEvaluationExperimentFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.displayName = _reader.readString();
          break;
        case 2:
          _instance.llmEvaluationExperimentStatus = _reader.readEnum();
          break;
        case 3:
          _instance.llmEvaluationDatasetName = _reader.readString();
          break;
        case 4:
          _instance.modelName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LlmEvaluationExperimentFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LlmEvaluationExperimentFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.displayName) {
      _writer.writeString(1, _instance.displayName);
    }
    if (_instance.llmEvaluationExperimentStatus) {
      _writer.writeEnum(2, _instance.llmEvaluationExperimentStatus);
    }
    if (_instance.llmEvaluationDatasetName) {
      _writer.writeString(3, _instance.llmEvaluationDatasetName);
    }
    if (_instance.modelName) {
      _writer.writeString(4, _instance.modelName);
    }
  }

  private _displayName: string;
  private _llmEvaluationExperimentStatus: LlmEvaluationExperimentStatus;
  private _llmEvaluationDatasetName: string;
  private _modelName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LlmEvaluationExperimentFilter to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<LlmEvaluationExperimentFilter.AsObject>
  ) {
    _value = _value || {};
    this.displayName = _value.displayName;
    this.llmEvaluationExperimentStatus = _value.llmEvaluationExperimentStatus;
    this.llmEvaluationDatasetName = _value.llmEvaluationDatasetName;
    this.modelName = _value.modelName;
    LlmEvaluationExperimentFilter.refineValues(this);
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get llmEvaluationExperimentStatus(): LlmEvaluationExperimentStatus {
    return this._llmEvaluationExperimentStatus;
  }
  set llmEvaluationExperimentStatus(value: LlmEvaluationExperimentStatus) {
    this._llmEvaluationExperimentStatus = value;
  }
  get llmEvaluationDatasetName(): string {
    return this._llmEvaluationDatasetName;
  }
  set llmEvaluationDatasetName(value: string) {
    this._llmEvaluationDatasetName = value;
  }
  get modelName(): string {
    return this._modelName;
  }
  set modelName(value: string) {
    this._modelName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LlmEvaluationExperimentFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LlmEvaluationExperimentFilter.AsObject {
    return {
      displayName: this.displayName,
      llmEvaluationExperimentStatus: this.llmEvaluationExperimentStatus,
      llmEvaluationDatasetName: this.llmEvaluationDatasetName,
      modelName: this.modelName
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
  ): LlmEvaluationExperimentFilter.AsProtobufJSON {
    return {
      displayName: this.displayName,
      llmEvaluationExperimentStatus:
        LlmEvaluationExperimentStatus[
          this.llmEvaluationExperimentStatus === null ||
          this.llmEvaluationExperimentStatus === undefined
            ? 0
            : this.llmEvaluationExperimentStatus
        ],
      llmEvaluationDatasetName: this.llmEvaluationDatasetName,
      modelName: this.modelName
    };
  }
}
export module LlmEvaluationExperimentFilter {
  /**
   * Standard JavaScript object representation for LlmEvaluationExperimentFilter
   */
  export interface AsObject {
    displayName: string;
    llmEvaluationExperimentStatus: LlmEvaluationExperimentStatus;
    llmEvaluationDatasetName: string;
    modelName: string;
  }

  /**
   * Protobuf JSON representation for LlmEvaluationExperimentFilter
   */
  export interface AsProtobufJSON {
    displayName: string;
    llmEvaluationExperimentStatus: string;
    llmEvaluationDatasetName: string;
    modelName: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListLlmEvaluationExperimentsRequest
 */
export class ListLlmEvaluationExperimentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListLlmEvaluationExperimentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListLlmEvaluationExperimentsRequest();
    ListLlmEvaluationExperimentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListLlmEvaluationExperimentsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.pageToken = _instance.pageToken || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.languageCode = _instance.languageCode || '';
    _instance.llmEvaluationExperimentFilter =
      _instance.llmEvaluationExperimentFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListLlmEvaluationExperimentsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.pageToken = _reader.readString();
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        case 5:
          _instance.llmEvaluationExperimentFilter = new LlmEvaluationExperimentFilter();
          _reader.readMessage(
            _instance.llmEvaluationExperimentFilter,
            LlmEvaluationExperimentFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListLlmEvaluationExperimentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListLlmEvaluationExperimentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.pageToken) {
      _writer.writeString(2, _instance.pageToken);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
    if (_instance.llmEvaluationExperimentFilter) {
      _writer.writeMessage(
        5,
        _instance.llmEvaluationExperimentFilter as any,
        LlmEvaluationExperimentFilter.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _pageToken: string;
  private _fieldMask?: googleProtobuf003.FieldMask;
  private _languageCode: string;
  private _llmEvaluationExperimentFilter?: LlmEvaluationExperimentFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListLlmEvaluationExperimentsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListLlmEvaluationExperimentsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.pageToken = _value.pageToken;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf003.FieldMask(_value.fieldMask)
      : undefined;
    this.languageCode = _value.languageCode;
    this.llmEvaluationExperimentFilter = _value.llmEvaluationExperimentFilter
      ? new LlmEvaluationExperimentFilter(_value.llmEvaluationExperimentFilter)
      : undefined;
    ListLlmEvaluationExperimentsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get fieldMask(): googleProtobuf003.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf003.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get llmEvaluationExperimentFilter():
    | LlmEvaluationExperimentFilter
    | undefined {
    return this._llmEvaluationExperimentFilter;
  }
  set llmEvaluationExperimentFilter(
    value: LlmEvaluationExperimentFilter | undefined
  ) {
    this._llmEvaluationExperimentFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListLlmEvaluationExperimentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListLlmEvaluationExperimentsRequest.AsObject {
    return {
      parent: this.parent,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      languageCode: this.languageCode,
      llmEvaluationExperimentFilter: this.llmEvaluationExperimentFilter
        ? this.llmEvaluationExperimentFilter.toObject()
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
  ): ListLlmEvaluationExperimentsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      languageCode: this.languageCode,
      llmEvaluationExperimentFilter: this.llmEvaluationExperimentFilter
        ? this.llmEvaluationExperimentFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListLlmEvaluationExperimentsRequest {
  /**
   * Standard JavaScript object representation for ListLlmEvaluationExperimentsRequest
   */
  export interface AsObject {
    parent: string;
    pageToken: string;
    fieldMask?: googleProtobuf003.FieldMask.AsObject;
    languageCode: string;
    llmEvaluationExperimentFilter?: LlmEvaluationExperimentFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListLlmEvaluationExperimentsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    pageToken: string;
    fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
    languageCode: string;
    llmEvaluationExperimentFilter: LlmEvaluationExperimentFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListLlmEvaluationExperimentsResponse
 */
export class ListLlmEvaluationExperimentsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListLlmEvaluationExperimentsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListLlmEvaluationExperimentsResponse();
    ListLlmEvaluationExperimentsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListLlmEvaluationExperimentsResponse) {
    _instance.llmEvaluationExperiments =
      _instance.llmEvaluationExperiments || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListLlmEvaluationExperimentsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new LlmEvaluationExperiment();
          _reader.readMessage(
            messageInitializer1,
            LlmEvaluationExperiment.deserializeBinaryFromReader
          );
          (_instance.llmEvaluationExperiments =
            _instance.llmEvaluationExperiments || []).push(messageInitializer1);
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListLlmEvaluationExperimentsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListLlmEvaluationExperimentsResponse,
    _writer: BinaryWriter
  ) {
    if (
      _instance.llmEvaluationExperiments &&
      _instance.llmEvaluationExperiments.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.llmEvaluationExperiments as any,
        LlmEvaluationExperiment.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _llmEvaluationExperiments?: LlmEvaluationExperiment[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListLlmEvaluationExperimentsResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListLlmEvaluationExperimentsResponse.AsObject>
  ) {
    _value = _value || {};
    this.llmEvaluationExperiments = (_value.llmEvaluationExperiments || []).map(
      m => new LlmEvaluationExperiment(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListLlmEvaluationExperimentsResponse.refineValues(this);
  }
  get llmEvaluationExperiments(): LlmEvaluationExperiment[] | undefined {
    return this._llmEvaluationExperiments;
  }
  set llmEvaluationExperiments(value: LlmEvaluationExperiment[] | undefined) {
    this._llmEvaluationExperiments = value;
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
    ListLlmEvaluationExperimentsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListLlmEvaluationExperimentsResponse.AsObject {
    return {
      llmEvaluationExperiments: (this.llmEvaluationExperiments || []).map(m =>
        m.toObject()
      ),
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
  ): ListLlmEvaluationExperimentsResponse.AsProtobufJSON {
    return {
      llmEvaluationExperiments: (this.llmEvaluationExperiments || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListLlmEvaluationExperimentsResponse {
  /**
   * Standard JavaScript object representation for ListLlmEvaluationExperimentsResponse
   */
  export interface AsObject {
    llmEvaluationExperiments?: LlmEvaluationExperiment.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListLlmEvaluationExperimentsResponse
   */
  export interface AsProtobufJSON {
    llmEvaluationExperiments: LlmEvaluationExperiment.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.UpdateLlmEvaluationExperimentRequest
 */
export class UpdateLlmEvaluationExperimentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.UpdateLlmEvaluationExperimentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateLlmEvaluationExperimentRequest();
    UpdateLlmEvaluationExperimentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateLlmEvaluationExperimentRequest) {
    _instance.llmEvaluationExperiment =
      _instance.llmEvaluationExperiment || undefined;
    _instance.updateMask = _instance.updateMask || undefined;
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateLlmEvaluationExperimentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.llmEvaluationExperiment = new LlmEvaluationExperiment();
          _reader.readMessage(
            _instance.llmEvaluationExperiment,
            LlmEvaluationExperiment.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.updateMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.updateMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.fieldMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.parent = _reader.readString();
          break;
        case 5:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateLlmEvaluationExperimentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateLlmEvaluationExperimentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.llmEvaluationExperiment) {
      _writer.writeMessage(
        1,
        _instance.llmEvaluationExperiment as any,
        LlmEvaluationExperiment.serializeBinaryToWriter
      );
    }
    if (_instance.updateMask) {
      _writer.writeMessage(
        2,
        _instance.updateMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        3,
        _instance.fieldMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.parent) {
      _writer.writeString(4, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(5, _instance.languageCode);
    }
  }

  private _llmEvaluationExperiment?: LlmEvaluationExperiment;
  private _updateMask?: googleProtobuf003.FieldMask;
  private _fieldMask?: googleProtobuf003.FieldMask;
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateLlmEvaluationExperimentRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<UpdateLlmEvaluationExperimentRequest.AsObject>
  ) {
    _value = _value || {};
    this.llmEvaluationExperiment = _value.llmEvaluationExperiment
      ? new LlmEvaluationExperiment(_value.llmEvaluationExperiment)
      : undefined;
    this.updateMask = _value.updateMask
      ? new googleProtobuf003.FieldMask(_value.updateMask)
      : undefined;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf003.FieldMask(_value.fieldMask)
      : undefined;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    UpdateLlmEvaluationExperimentRequest.refineValues(this);
  }
  get llmEvaluationExperiment(): LlmEvaluationExperiment | undefined {
    return this._llmEvaluationExperiment;
  }
  set llmEvaluationExperiment(value: LlmEvaluationExperiment | undefined) {
    this._llmEvaluationExperiment = value;
  }
  get updateMask(): googleProtobuf003.FieldMask | undefined {
    return this._updateMask;
  }
  set updateMask(value: googleProtobuf003.FieldMask | undefined) {
    this._updateMask = value;
  }
  get fieldMask(): googleProtobuf003.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf003.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateLlmEvaluationExperimentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateLlmEvaluationExperimentRequest.AsObject {
    return {
      llmEvaluationExperiment: this.llmEvaluationExperiment
        ? this.llmEvaluationExperiment.toObject()
        : undefined,
      updateMask: this.updateMask ? this.updateMask.toObject() : undefined,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      parent: this.parent,
      languageCode: this.languageCode
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
  ): UpdateLlmEvaluationExperimentRequest.AsProtobufJSON {
    return {
      llmEvaluationExperiment: this.llmEvaluationExperiment
        ? this.llmEvaluationExperiment.toProtobufJSON(options)
        : null,
      updateMask: this.updateMask
        ? this.updateMask.toProtobufJSON(options)
        : null,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module UpdateLlmEvaluationExperimentRequest {
  /**
   * Standard JavaScript object representation for UpdateLlmEvaluationExperimentRequest
   */
  export interface AsObject {
    llmEvaluationExperiment?: LlmEvaluationExperiment.AsObject;
    updateMask?: googleProtobuf003.FieldMask.AsObject;
    fieldMask?: googleProtobuf003.FieldMask.AsObject;
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for UpdateLlmEvaluationExperimentRequest
   */
  export interface AsProtobufJSON {
    llmEvaluationExperiment: LlmEvaluationExperiment.AsProtobufJSON | null;
    updateMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
    fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
    parent: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteLlmEvaluationExperimentRequest
 */
export class DeleteLlmEvaluationExperimentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteLlmEvaluationExperimentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteLlmEvaluationExperimentRequest();
    DeleteLlmEvaluationExperimentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteLlmEvaluationExperimentRequest) {
    _instance.name = _instance.name || '';
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteLlmEvaluationExperimentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.parent = _reader.readString();
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteLlmEvaluationExperimentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteLlmEvaluationExperimentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.parent) {
      _writer.writeString(2, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
  }

  private _name: string;
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteLlmEvaluationExperimentRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<DeleteLlmEvaluationExperimentRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    DeleteLlmEvaluationExperimentRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteLlmEvaluationExperimentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteLlmEvaluationExperimentRequest.AsObject {
    return {
      name: this.name,
      parent: this.parent,
      languageCode: this.languageCode
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
  ): DeleteLlmEvaluationExperimentRequest.AsProtobufJSON {
    return {
      name: this.name,
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module DeleteLlmEvaluationExperimentRequest {
  /**
   * Standard JavaScript object representation for DeleteLlmEvaluationExperimentRequest
   */
  export interface AsObject {
    name: string;
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for DeleteLlmEvaluationExperimentRequest
   */
  export interface AsProtobufJSON {
    name: string;
    parent: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CancelLlmEvaluationExperimentRequest
 */
export class CancelLlmEvaluationExperimentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CancelLlmEvaluationExperimentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CancelLlmEvaluationExperimentRequest();
    CancelLlmEvaluationExperimentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CancelLlmEvaluationExperimentRequest) {
    _instance.name = _instance.name || '';
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CancelLlmEvaluationExperimentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.parent = _reader.readString();
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CancelLlmEvaluationExperimentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CancelLlmEvaluationExperimentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.parent) {
      _writer.writeString(2, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
  }

  private _name: string;
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CancelLlmEvaluationExperimentRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CancelLlmEvaluationExperimentRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    CancelLlmEvaluationExperimentRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CancelLlmEvaluationExperimentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CancelLlmEvaluationExperimentRequest.AsObject {
    return {
      name: this.name,
      parent: this.parent,
      languageCode: this.languageCode
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
  ): CancelLlmEvaluationExperimentRequest.AsProtobufJSON {
    return {
      name: this.name,
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module CancelLlmEvaluationExperimentRequest {
  /**
   * Standard JavaScript object representation for CancelLlmEvaluationExperimentRequest
   */
  export interface AsObject {
    name: string;
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for CancelLlmEvaluationExperimentRequest
   */
  export interface AsProtobufJSON {
    name: string;
    parent: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.CompareLlmEvaluationExperimentsRequest
 */
export class CompareLlmEvaluationExperimentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.CompareLlmEvaluationExperimentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CompareLlmEvaluationExperimentsRequest();
    CompareLlmEvaluationExperimentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CompareLlmEvaluationExperimentsRequest) {
    _instance.llmEvaluationExperimentNames =
      _instance.llmEvaluationExperimentNames || [];
    _instance.llmEvaluationBaselineExperimentName =
      _instance.llmEvaluationBaselineExperimentName || '';
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CompareLlmEvaluationExperimentsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.llmEvaluationExperimentNames =
            _instance.llmEvaluationExperimentNames || []).push(
            _reader.readString()
          );
          break;
        case 2:
          _instance.llmEvaluationBaselineExperimentName = _reader.readString();
          break;
        case 3:
          _instance.parent = _reader.readString();
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CompareLlmEvaluationExperimentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CompareLlmEvaluationExperimentsRequest,
    _writer: BinaryWriter
  ) {
    if (
      _instance.llmEvaluationExperimentNames &&
      _instance.llmEvaluationExperimentNames.length
    ) {
      _writer.writeRepeatedString(1, _instance.llmEvaluationExperimentNames);
    }
    if (_instance.llmEvaluationBaselineExperimentName) {
      _writer.writeString(2, _instance.llmEvaluationBaselineExperimentName);
    }
    if (_instance.parent) {
      _writer.writeString(3, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
  }

  private _llmEvaluationExperimentNames: string[];
  private _llmEvaluationBaselineExperimentName: string;
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CompareLlmEvaluationExperimentsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CompareLlmEvaluationExperimentsRequest.AsObject>
  ) {
    _value = _value || {};
    this.llmEvaluationExperimentNames = (
      _value.llmEvaluationExperimentNames || []
    ).slice();
    this.llmEvaluationBaselineExperimentName =
      _value.llmEvaluationBaselineExperimentName;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    CompareLlmEvaluationExperimentsRequest.refineValues(this);
  }
  get llmEvaluationExperimentNames(): string[] {
    return this._llmEvaluationExperimentNames;
  }
  set llmEvaluationExperimentNames(value: string[]) {
    this._llmEvaluationExperimentNames = value;
  }
  get llmEvaluationBaselineExperimentName(): string {
    return this._llmEvaluationBaselineExperimentName;
  }
  set llmEvaluationBaselineExperimentName(value: string) {
    this._llmEvaluationBaselineExperimentName = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CompareLlmEvaluationExperimentsRequest.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CompareLlmEvaluationExperimentsRequest.AsObject {
    return {
      llmEvaluationExperimentNames: (
        this.llmEvaluationExperimentNames || []
      ).slice(),
      llmEvaluationBaselineExperimentName: this
        .llmEvaluationBaselineExperimentName,
      parent: this.parent,
      languageCode: this.languageCode
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
  ): CompareLlmEvaluationExperimentsRequest.AsProtobufJSON {
    return {
      llmEvaluationExperimentNames: (
        this.llmEvaluationExperimentNames || []
      ).slice(),
      llmEvaluationBaselineExperimentName: this
        .llmEvaluationBaselineExperimentName,
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module CompareLlmEvaluationExperimentsRequest {
  /**
   * Standard JavaScript object representation for CompareLlmEvaluationExperimentsRequest
   */
  export interface AsObject {
    llmEvaluationExperimentNames: string[];
    llmEvaluationBaselineExperimentName: string;
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for CompareLlmEvaluationExperimentsRequest
   */
  export interface AsProtobufJSON {
    llmEvaluationExperimentNames: string[];
    llmEvaluationBaselineExperimentName: string;
    parent: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.SubmitLlmEvaluationFeedbackRequest
 */
export class SubmitLlmEvaluationFeedbackRequest implements GrpcMessage {
  static id = 'ondewo.nlu.SubmitLlmEvaluationFeedbackRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SubmitLlmEvaluationFeedbackRequest();
    SubmitLlmEvaluationFeedbackRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SubmitLlmEvaluationFeedbackRequest) {
    _instance.llmEvaluationExperimentName =
      _instance.llmEvaluationExperimentName || '';
    _instance.llmEvaluationEvaluatorRunName =
      _instance.llmEvaluationEvaluatorRunName || '';
    _instance.llmEvaluationFeedback =
      _instance.llmEvaluationFeedback || undefined;
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SubmitLlmEvaluationFeedbackRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.llmEvaluationExperimentName = _reader.readString();
          break;
        case 2:
          _instance.llmEvaluationEvaluatorRunName = _reader.readString();
          break;
        case 3:
          _instance.llmEvaluationFeedback = new LlmEvaluationFeedback();
          _reader.readMessage(
            _instance.llmEvaluationFeedback,
            LlmEvaluationFeedback.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.parent = _reader.readString();
          break;
        case 5:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SubmitLlmEvaluationFeedbackRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SubmitLlmEvaluationFeedbackRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.llmEvaluationExperimentName) {
      _writer.writeString(1, _instance.llmEvaluationExperimentName);
    }
    if (_instance.llmEvaluationEvaluatorRunName) {
      _writer.writeString(2, _instance.llmEvaluationEvaluatorRunName);
    }
    if (_instance.llmEvaluationFeedback) {
      _writer.writeMessage(
        3,
        _instance.llmEvaluationFeedback as any,
        LlmEvaluationFeedback.serializeBinaryToWriter
      );
    }
    if (_instance.parent) {
      _writer.writeString(4, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(5, _instance.languageCode);
    }
  }

  private _llmEvaluationExperimentName: string;
  private _llmEvaluationEvaluatorRunName: string;
  private _llmEvaluationFeedback?: LlmEvaluationFeedback;
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SubmitLlmEvaluationFeedbackRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<SubmitLlmEvaluationFeedbackRequest.AsObject>
  ) {
    _value = _value || {};
    this.llmEvaluationExperimentName = _value.llmEvaluationExperimentName;
    this.llmEvaluationEvaluatorRunName = _value.llmEvaluationEvaluatorRunName;
    this.llmEvaluationFeedback = _value.llmEvaluationFeedback
      ? new LlmEvaluationFeedback(_value.llmEvaluationFeedback)
      : undefined;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    SubmitLlmEvaluationFeedbackRequest.refineValues(this);
  }
  get llmEvaluationExperimentName(): string {
    return this._llmEvaluationExperimentName;
  }
  set llmEvaluationExperimentName(value: string) {
    this._llmEvaluationExperimentName = value;
  }
  get llmEvaluationEvaluatorRunName(): string {
    return this._llmEvaluationEvaluatorRunName;
  }
  set llmEvaluationEvaluatorRunName(value: string) {
    this._llmEvaluationEvaluatorRunName = value;
  }
  get llmEvaluationFeedback(): LlmEvaluationFeedback | undefined {
    return this._llmEvaluationFeedback;
  }
  set llmEvaluationFeedback(value: LlmEvaluationFeedback | undefined) {
    this._llmEvaluationFeedback = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SubmitLlmEvaluationFeedbackRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SubmitLlmEvaluationFeedbackRequest.AsObject {
    return {
      llmEvaluationExperimentName: this.llmEvaluationExperimentName,
      llmEvaluationEvaluatorRunName: this.llmEvaluationEvaluatorRunName,
      llmEvaluationFeedback: this.llmEvaluationFeedback
        ? this.llmEvaluationFeedback.toObject()
        : undefined,
      parent: this.parent,
      languageCode: this.languageCode
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
  ): SubmitLlmEvaluationFeedbackRequest.AsProtobufJSON {
    return {
      llmEvaluationExperimentName: this.llmEvaluationExperimentName,
      llmEvaluationEvaluatorRunName: this.llmEvaluationEvaluatorRunName,
      llmEvaluationFeedback: this.llmEvaluationFeedback
        ? this.llmEvaluationFeedback.toProtobufJSON(options)
        : null,
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module SubmitLlmEvaluationFeedbackRequest {
  /**
   * Standard JavaScript object representation for SubmitLlmEvaluationFeedbackRequest
   */
  export interface AsObject {
    llmEvaluationExperimentName: string;
    llmEvaluationEvaluatorRunName: string;
    llmEvaluationFeedback?: LlmEvaluationFeedback.AsObject;
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for SubmitLlmEvaluationFeedbackRequest
   */
  export interface AsProtobufJSON {
    llmEvaluationExperimentName: string;
    llmEvaluationEvaluatorRunName: string;
    llmEvaluationFeedback: LlmEvaluationFeedback.AsProtobufJSON | null;
    parent: string;
    languageCode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.LlmEvaluationFeedbackFilter
 */
export class LlmEvaluationFeedbackFilter implements GrpcMessage {
  static id = 'ondewo.nlu.LlmEvaluationFeedbackFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LlmEvaluationFeedbackFilter();
    LlmEvaluationFeedbackFilter.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LlmEvaluationFeedbackFilter) {
    _instance.llmEvaluationExperimentName =
      _instance.llmEvaluationExperimentName || '';
    _instance.llmEvaluationExampleName =
      _instance.llmEvaluationExampleName || '';
    _instance.llmEvaluationEvaluatorRunName =
      _instance.llmEvaluationEvaluatorRunName || '';
    _instance.criterion = _instance.criterion || '';
    _instance.categoricalValue = _instance.categoricalValue || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LlmEvaluationFeedbackFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.llmEvaluationExperimentName = _reader.readString();
          break;
        case 2:
          _instance.llmEvaluationExampleName = _reader.readString();
          break;
        case 3:
          _instance.llmEvaluationEvaluatorRunName = _reader.readString();
          break;
        case 4:
          _instance.criterion = _reader.readString();
          break;
        case 5:
          _instance.categoricalValue = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LlmEvaluationFeedbackFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LlmEvaluationFeedbackFilter,
    _writer: BinaryWriter
  ) {
    if (_instance.llmEvaluationExperimentName) {
      _writer.writeString(1, _instance.llmEvaluationExperimentName);
    }
    if (_instance.llmEvaluationExampleName) {
      _writer.writeString(2, _instance.llmEvaluationExampleName);
    }
    if (_instance.llmEvaluationEvaluatorRunName) {
      _writer.writeString(3, _instance.llmEvaluationEvaluatorRunName);
    }
    if (_instance.criterion) {
      _writer.writeString(4, _instance.criterion);
    }
    if (_instance.categoricalValue) {
      _writer.writeString(5, _instance.categoricalValue);
    }
  }

  private _llmEvaluationExperimentName: string;
  private _llmEvaluationExampleName: string;
  private _llmEvaluationEvaluatorRunName: string;
  private _criterion: string;
  private _categoricalValue: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LlmEvaluationFeedbackFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<LlmEvaluationFeedbackFilter.AsObject>) {
    _value = _value || {};
    this.llmEvaluationExperimentName = _value.llmEvaluationExperimentName;
    this.llmEvaluationExampleName = _value.llmEvaluationExampleName;
    this.llmEvaluationEvaluatorRunName = _value.llmEvaluationEvaluatorRunName;
    this.criterion = _value.criterion;
    this.categoricalValue = _value.categoricalValue;
    LlmEvaluationFeedbackFilter.refineValues(this);
  }
  get llmEvaluationExperimentName(): string {
    return this._llmEvaluationExperimentName;
  }
  set llmEvaluationExperimentName(value: string) {
    this._llmEvaluationExperimentName = value;
  }
  get llmEvaluationExampleName(): string {
    return this._llmEvaluationExampleName;
  }
  set llmEvaluationExampleName(value: string) {
    this._llmEvaluationExampleName = value;
  }
  get llmEvaluationEvaluatorRunName(): string {
    return this._llmEvaluationEvaluatorRunName;
  }
  set llmEvaluationEvaluatorRunName(value: string) {
    this._llmEvaluationEvaluatorRunName = value;
  }
  get criterion(): string {
    return this._criterion;
  }
  set criterion(value: string) {
    this._criterion = value;
  }
  get categoricalValue(): string {
    return this._categoricalValue;
  }
  set categoricalValue(value: string) {
    this._categoricalValue = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LlmEvaluationFeedbackFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LlmEvaluationFeedbackFilter.AsObject {
    return {
      llmEvaluationExperimentName: this.llmEvaluationExperimentName,
      llmEvaluationExampleName: this.llmEvaluationExampleName,
      llmEvaluationEvaluatorRunName: this.llmEvaluationEvaluatorRunName,
      criterion: this.criterion,
      categoricalValue: this.categoricalValue
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
  ): LlmEvaluationFeedbackFilter.AsProtobufJSON {
    return {
      llmEvaluationExperimentName: this.llmEvaluationExperimentName,
      llmEvaluationExampleName: this.llmEvaluationExampleName,
      llmEvaluationEvaluatorRunName: this.llmEvaluationEvaluatorRunName,
      criterion: this.criterion,
      categoricalValue: this.categoricalValue
    };
  }
}
export module LlmEvaluationFeedbackFilter {
  /**
   * Standard JavaScript object representation for LlmEvaluationFeedbackFilter
   */
  export interface AsObject {
    llmEvaluationExperimentName: string;
    llmEvaluationExampleName: string;
    llmEvaluationEvaluatorRunName: string;
    criterion: string;
    categoricalValue: string;
  }

  /**
   * Protobuf JSON representation for LlmEvaluationFeedbackFilter
   */
  export interface AsProtobufJSON {
    llmEvaluationExperimentName: string;
    llmEvaluationExampleName: string;
    llmEvaluationEvaluatorRunName: string;
    criterion: string;
    categoricalValue: string;
  }
}

/**
 * Message implementation for ondewo.nlu.ListLlmEvaluationFeedbackRequest
 */
export class ListLlmEvaluationFeedbackRequest implements GrpcMessage {
  static id = 'ondewo.nlu.ListLlmEvaluationFeedbackRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListLlmEvaluationFeedbackRequest();
    ListLlmEvaluationFeedbackRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListLlmEvaluationFeedbackRequest) {
    _instance.pageToken = _instance.pageToken || '';
    _instance.fieldMask = _instance.fieldMask || undefined;
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
    _instance.llmEvaluationFeedbackFilter =
      _instance.llmEvaluationFeedbackFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListLlmEvaluationFeedbackRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pageToken = _reader.readString();
          break;
        case 2:
          _instance.fieldMask = new googleProtobuf003.FieldMask();
          _reader.readMessage(
            _instance.fieldMask,
            googleProtobuf003.FieldMask.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.parent = _reader.readString();
          break;
        case 4:
          _instance.languageCode = _reader.readString();
          break;
        case 5:
          _instance.llmEvaluationFeedbackFilter = new LlmEvaluationFeedbackFilter();
          _reader.readMessage(
            _instance.llmEvaluationFeedbackFilter,
            LlmEvaluationFeedbackFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListLlmEvaluationFeedbackRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListLlmEvaluationFeedbackRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.pageToken) {
      _writer.writeString(1, _instance.pageToken);
    }
    if (_instance.fieldMask) {
      _writer.writeMessage(
        2,
        _instance.fieldMask as any,
        googleProtobuf003.FieldMask.serializeBinaryToWriter
      );
    }
    if (_instance.parent) {
      _writer.writeString(3, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(4, _instance.languageCode);
    }
    if (_instance.llmEvaluationFeedbackFilter) {
      _writer.writeMessage(
        5,
        _instance.llmEvaluationFeedbackFilter as any,
        LlmEvaluationFeedbackFilter.serializeBinaryToWriter
      );
    }
  }

  private _pageToken: string;
  private _fieldMask?: googleProtobuf003.FieldMask;
  private _parent: string;
  private _languageCode: string;
  private _llmEvaluationFeedbackFilter?: LlmEvaluationFeedbackFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListLlmEvaluationFeedbackRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListLlmEvaluationFeedbackRequest.AsObject>
  ) {
    _value = _value || {};
    this.pageToken = _value.pageToken;
    this.fieldMask = _value.fieldMask
      ? new googleProtobuf003.FieldMask(_value.fieldMask)
      : undefined;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    this.llmEvaluationFeedbackFilter = _value.llmEvaluationFeedbackFilter
      ? new LlmEvaluationFeedbackFilter(_value.llmEvaluationFeedbackFilter)
      : undefined;
    ListLlmEvaluationFeedbackRequest.refineValues(this);
  }
  get pageToken(): string {
    return this._pageToken;
  }
  set pageToken(value: string) {
    this._pageToken = value;
  }
  get fieldMask(): googleProtobuf003.FieldMask | undefined {
    return this._fieldMask;
  }
  set fieldMask(value: googleProtobuf003.FieldMask | undefined) {
    this._fieldMask = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }
  get llmEvaluationFeedbackFilter(): LlmEvaluationFeedbackFilter | undefined {
    return this._llmEvaluationFeedbackFilter;
  }
  set llmEvaluationFeedbackFilter(
    value: LlmEvaluationFeedbackFilter | undefined
  ) {
    this._llmEvaluationFeedbackFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListLlmEvaluationFeedbackRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListLlmEvaluationFeedbackRequest.AsObject {
    return {
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
      parent: this.parent,
      languageCode: this.languageCode,
      llmEvaluationFeedbackFilter: this.llmEvaluationFeedbackFilter
        ? this.llmEvaluationFeedbackFilter.toObject()
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
  ): ListLlmEvaluationFeedbackRequest.AsProtobufJSON {
    return {
      pageToken: this.pageToken,
      fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
      parent: this.parent,
      languageCode: this.languageCode,
      llmEvaluationFeedbackFilter: this.llmEvaluationFeedbackFilter
        ? this.llmEvaluationFeedbackFilter.toProtobufJSON(options)
        : null
    };
  }
}
export module ListLlmEvaluationFeedbackRequest {
  /**
   * Standard JavaScript object representation for ListLlmEvaluationFeedbackRequest
   */
  export interface AsObject {
    pageToken: string;
    fieldMask?: googleProtobuf003.FieldMask.AsObject;
    parent: string;
    languageCode: string;
    llmEvaluationFeedbackFilter?: LlmEvaluationFeedbackFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for ListLlmEvaluationFeedbackRequest
   */
  export interface AsProtobufJSON {
    pageToken: string;
    fieldMask: googleProtobuf003.FieldMask.AsProtobufJSON | null;
    parent: string;
    languageCode: string;
    llmEvaluationFeedbackFilter: LlmEvaluationFeedbackFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.ListLlmEvaluationFeedbackResponse
 */
export class ListLlmEvaluationFeedbackResponse implements GrpcMessage {
  static id = 'ondewo.nlu.ListLlmEvaluationFeedbackResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListLlmEvaluationFeedbackResponse();
    ListLlmEvaluationFeedbackResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListLlmEvaluationFeedbackResponse) {
    _instance.llmEvaluationFeedbacks = _instance.llmEvaluationFeedbacks || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListLlmEvaluationFeedbackResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new LlmEvaluationFeedback();
          _reader.readMessage(
            messageInitializer1,
            LlmEvaluationFeedback.deserializeBinaryFromReader
          );
          (_instance.llmEvaluationFeedbacks =
            _instance.llmEvaluationFeedbacks || []).push(messageInitializer1);
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListLlmEvaluationFeedbackResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListLlmEvaluationFeedbackResponse,
    _writer: BinaryWriter
  ) {
    if (
      _instance.llmEvaluationFeedbacks &&
      _instance.llmEvaluationFeedbacks.length
    ) {
      _writer.writeRepeatedMessage(
        1,
        _instance.llmEvaluationFeedbacks as any,
        LlmEvaluationFeedback.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _llmEvaluationFeedbacks?: LlmEvaluationFeedback[];
  private _nextPageToken: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListLlmEvaluationFeedbackResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListLlmEvaluationFeedbackResponse.AsObject>
  ) {
    _value = _value || {};
    this.llmEvaluationFeedbacks = (_value.llmEvaluationFeedbacks || []).map(
      m => new LlmEvaluationFeedback(m)
    );
    this.nextPageToken = _value.nextPageToken;
    ListLlmEvaluationFeedbackResponse.refineValues(this);
  }
  get llmEvaluationFeedbacks(): LlmEvaluationFeedback[] | undefined {
    return this._llmEvaluationFeedbacks;
  }
  set llmEvaluationFeedbacks(value: LlmEvaluationFeedback[] | undefined) {
    this._llmEvaluationFeedbacks = value;
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
    ListLlmEvaluationFeedbackResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListLlmEvaluationFeedbackResponse.AsObject {
    return {
      llmEvaluationFeedbacks: (this.llmEvaluationFeedbacks || []).map(m =>
        m.toObject()
      ),
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
  ): ListLlmEvaluationFeedbackResponse.AsProtobufJSON {
    return {
      llmEvaluationFeedbacks: (this.llmEvaluationFeedbacks || []).map(m =>
        m.toProtobufJSON(options)
      ),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListLlmEvaluationFeedbackResponse {
  /**
   * Standard JavaScript object representation for ListLlmEvaluationFeedbackResponse
   */
  export interface AsObject {
    llmEvaluationFeedbacks?: LlmEvaluationFeedback.AsObject[];
    nextPageToken: string;
  }

  /**
   * Protobuf JSON representation for ListLlmEvaluationFeedbackResponse
   */
  export interface AsProtobufJSON {
    llmEvaluationFeedbacks: LlmEvaluationFeedback.AsProtobufJSON[] | null;
    nextPageToken: string;
  }
}

/**
 * Message implementation for ondewo.nlu.DeleteLlmEvaluationFeedbackRequest
 */
export class DeleteLlmEvaluationFeedbackRequest implements GrpcMessage {
  static id = 'ondewo.nlu.DeleteLlmEvaluationFeedbackRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteLlmEvaluationFeedbackRequest();
    DeleteLlmEvaluationFeedbackRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteLlmEvaluationFeedbackRequest) {
    _instance.name = _instance.name || '';
    _instance.parent = _instance.parent || '';
    _instance.languageCode = _instance.languageCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteLlmEvaluationFeedbackRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.parent = _reader.readString();
          break;
        case 3:
          _instance.languageCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteLlmEvaluationFeedbackRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteLlmEvaluationFeedbackRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.parent) {
      _writer.writeString(2, _instance.parent);
    }
    if (_instance.languageCode) {
      _writer.writeString(3, _instance.languageCode);
    }
  }

  private _name: string;
  private _parent: string;
  private _languageCode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteLlmEvaluationFeedbackRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<DeleteLlmEvaluationFeedbackRequest.AsObject>
  ) {
    _value = _value || {};
    this.name = _value.name;
    this.parent = _value.parent;
    this.languageCode = _value.languageCode;
    DeleteLlmEvaluationFeedbackRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get languageCode(): string {
    return this._languageCode;
  }
  set languageCode(value: string) {
    this._languageCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteLlmEvaluationFeedbackRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteLlmEvaluationFeedbackRequest.AsObject {
    return {
      name: this.name,
      parent: this.parent,
      languageCode: this.languageCode
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
  ): DeleteLlmEvaluationFeedbackRequest.AsProtobufJSON {
    return {
      name: this.name,
      parent: this.parent,
      languageCode: this.languageCode
    };
  }
}
export module DeleteLlmEvaluationFeedbackRequest {
  /**
   * Standard JavaScript object representation for DeleteLlmEvaluationFeedbackRequest
   */
  export interface AsObject {
    name: string;
    parent: string;
    languageCode: string;
  }

  /**
   * Protobuf JSON representation for DeleteLlmEvaluationFeedbackRequest
   */
  export interface AsProtobufJSON {
    name: string;
    parent: string;
    languageCode: string;
  }
}
