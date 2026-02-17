/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions,
  uint8ArrayToBase64
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
export enum RagPermission {
  me = 0,
  team = 1
}
export enum RagChunkMethod {
  naive = 0,
  book = 1,
  email = 2,
  laws = 3,
  manual = 4,
  one = 5,
  paper = 6,
  picture = 7,
  presentation = 8,
  qa = 9,
  table = 10,
  tag = 11
}
export enum RagDocumentStatus {
  UNSTART = 0,
  RUNNING = 1,
  CANCEL = 2,
  DONE = 3,
  FAIL = 4
}
export enum RagMessageRole {
  user = 0,
  assistant = 1,
  system = 2
}
export enum RagAgentEventType {
  message = 0,
  message_end = 1
}
/**
 * Message implementation for ondewo.nlu.RagPagination
 */
export class RagPagination implements GrpcMessage {
  static id = 'ondewo.nlu.RagPagination';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagPagination();
    RagPagination.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagPagination) {
    _instance.page = _instance.page || 0;
    _instance.pageSize = _instance.pageSize || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagPagination,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.page = _reader.readInt32();
          break;
        case 2:
          _instance.pageSize = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    RagPagination.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagPagination,
    _writer: BinaryWriter
  ) {
    if (_instance.page) {
      _writer.writeInt32(1, _instance.page);
    }
    if (_instance.pageSize) {
      _writer.writeInt32(2, _instance.pageSize);
    }
  }

  private _page: number;
  private _pageSize: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagPagination to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagPagination.AsObject>) {
    _value = _value || {};
    this.page = _value.page;
    this.pageSize = _value.pageSize;
    RagPagination.refineValues(this);
  }
  get page(): number {
    return this._page;
  }
  set page(value: number) {
    this._page = value;
  }
  get pageSize(): number {
    return this._pageSize;
  }
  set pageSize(value: number) {
    this._pageSize = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagPagination.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagPagination.AsObject {
    return {
      page: this.page,
      pageSize: this.pageSize
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
  ): RagPagination.AsProtobufJSON {
    return {
      page: this.page,
      pageSize: this.pageSize
    };
  }
}
export module RagPagination {
  /**
   * Standard JavaScript object representation for RagPagination
   */
  export interface AsObject {
    page: number;
    pageSize: number;
  }

  /**
   * Protobuf JSON representation for RagPagination
   */
  export interface AsProtobufJSON {
    page: number;
    pageSize: number;
  }
}

/**
 * Message implementation for ondewo.nlu.RagFileMetadata
 */
export class RagFileMetadata implements GrpcMessage {
  static id = 'ondewo.nlu.RagFileMetadata';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagFileMetadata();
    RagFileMetadata.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagFileMetadata) {
    _instance.fileName = _instance.fileName || '';
    _instance.contentType = _instance.contentType || '';
    _instance.size = _instance.size || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagFileMetadata,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.fileName = _reader.readString();
          break;
        case 2:
          _instance.contentType = _reader.readString();
          break;
        case 3:
          _instance.size = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    RagFileMetadata.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagFileMetadata,
    _writer: BinaryWriter
  ) {
    if (_instance.fileName) {
      _writer.writeString(1, _instance.fileName);
    }
    if (_instance.contentType) {
      _writer.writeString(2, _instance.contentType);
    }
    if (_instance.size) {
      _writer.writeInt64String(3, _instance.size);
    }
  }

  private _fileName: string;
  private _contentType: string;
  private _size: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagFileMetadata to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagFileMetadata.AsObject>) {
    _value = _value || {};
    this.fileName = _value.fileName;
    this.contentType = _value.contentType;
    this.size = _value.size;
    RagFileMetadata.refineValues(this);
  }
  get fileName(): string {
    return this._fileName;
  }
  set fileName(value: string) {
    this._fileName = value;
  }
  get contentType(): string {
    return this._contentType;
  }
  set contentType(value: string) {
    this._contentType = value;
  }
  get size(): string {
    return this._size;
  }
  set size(value: string) {
    this._size = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagFileMetadata.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagFileMetadata.AsObject {
    return {
      fileName: this.fileName,
      contentType: this.contentType,
      size: this.size
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
  ): RagFileMetadata.AsProtobufJSON {
    return {
      fileName: this.fileName,
      contentType: this.contentType,
      size: this.size
    };
  }
}
export module RagFileMetadata {
  /**
   * Standard JavaScript object representation for RagFileMetadata
   */
  export interface AsObject {
    fileName: string;
    contentType: string;
    size: string;
  }

  /**
   * Protobuf JSON representation for RagFileMetadata
   */
  export interface AsProtobufJSON {
    fileName: string;
    contentType: string;
    size: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagFileChunk
 */
export class RagFileChunk implements GrpcMessage {
  static id = 'ondewo.nlu.RagFileChunk';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagFileChunk();
    RagFileChunk.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagFileChunk) {
    _instance.data = _instance.data || new Uint8Array();
    _instance.metadata = _instance.metadata || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagFileChunk,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.data = _reader.readBytes();
          break;
        case 2:
          _instance.metadata = new RagFileMetadata();
          _reader.readMessage(
            _instance.metadata,
            RagFileMetadata.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagFileChunk.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagFileChunk,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeBytes(1, _instance.data);
    }
    if (_instance.metadata) {
      _writer.writeMessage(
        2,
        _instance.metadata as any,
        RagFileMetadata.serializeBinaryToWriter
      );
    }
  }

  private _data: Uint8Array;
  private _metadata?: RagFileMetadata;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagFileChunk to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagFileChunk.AsObject>) {
    _value = _value || {};
    this.data = _value.data;
    this.metadata = _value.metadata
      ? new RagFileMetadata(_value.metadata)
      : undefined;
    RagFileChunk.refineValues(this);
  }
  get data(): Uint8Array {
    return this._data;
  }
  set data(value: Uint8Array) {
    this._data = value;
  }
  get metadata(): RagFileMetadata | undefined {
    return this._metadata;
  }
  set metadata(value: RagFileMetadata | undefined) {
    this._metadata = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagFileChunk.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagFileChunk.AsObject {
    return {
      data: this.data ? this.data.subarray(0) : new Uint8Array(),
      metadata: this.metadata ? this.metadata.toObject() : undefined
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
  ): RagFileChunk.AsProtobufJSON {
    return {
      data: this.data ? uint8ArrayToBase64(this.data) : '',
      metadata: this.metadata ? this.metadata.toProtobufJSON(options) : null
    };
  }
}
export module RagFileChunk {
  /**
   * Standard JavaScript object representation for RagFileChunk
   */
  export interface AsObject {
    data: Uint8Array;
    metadata?: RagFileMetadata.AsObject;
  }

  /**
   * Protobuf JSON representation for RagFileChunk
   */
  export interface AsProtobufJSON {
    data: string;
    metadata: RagFileMetadata.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagUploadChunk
 */
export class RagUploadChunk implements GrpcMessage {
  static id = 'ondewo.nlu.RagUploadChunk';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagUploadChunk();
    RagUploadChunk.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagUploadChunk) {
    _instance.fileIndex = _instance.fileIndex || 0;
    _instance.data = _instance.data || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagUploadChunk,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.fileIndex = _reader.readInt32();
          break;
        case 2:
          _instance.data = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    RagUploadChunk.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagUploadChunk,
    _writer: BinaryWriter
  ) {
    if (_instance.fileIndex) {
      _writer.writeInt32(1, _instance.fileIndex);
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeBytes(2, _instance.data);
    }
  }

  private _fileIndex: number;
  private _data: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagUploadChunk to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagUploadChunk.AsObject>) {
    _value = _value || {};
    this.fileIndex = _value.fileIndex;
    this.data = _value.data;
    RagUploadChunk.refineValues(this);
  }
  get fileIndex(): number {
    return this._fileIndex;
  }
  set fileIndex(value: number) {
    this._fileIndex = value;
  }
  get data(): Uint8Array {
    return this._data;
  }
  set data(value: Uint8Array) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagUploadChunk.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagUploadChunk.AsObject {
    return {
      fileIndex: this.fileIndex,
      data: this.data ? this.data.subarray(0) : new Uint8Array()
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
  ): RagUploadChunk.AsProtobufJSON {
    return {
      fileIndex: this.fileIndex,
      data: this.data ? uint8ArrayToBase64(this.data) : ''
    };
  }
}
export module RagUploadChunk {
  /**
   * Standard JavaScript object representation for RagUploadChunk
   */
  export interface AsObject {
    fileIndex: number;
    data: Uint8Array;
  }

  /**
   * Protobuf JSON representation for RagUploadChunk
   */
  export interface AsProtobufJSON {
    fileIndex: number;
    data: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagPartialSuccess
 */
export class RagPartialSuccess implements GrpcMessage {
  static id = 'ondewo.nlu.RagPartialSuccess';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagPartialSuccess();
    RagPartialSuccess.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagPartialSuccess) {
    _instance.successCount = _instance.successCount || 0;
    _instance.errors = _instance.errors || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagPartialSuccess,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.successCount = _reader.readInt32();
          break;
        case 2:
          (_instance.errors = _instance.errors || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagPartialSuccess.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagPartialSuccess,
    _writer: BinaryWriter
  ) {
    if (_instance.successCount) {
      _writer.writeInt32(1, _instance.successCount);
    }
    if (_instance.errors && _instance.errors.length) {
      _writer.writeRepeatedString(2, _instance.errors);
    }
  }

  private _successCount: number;
  private _errors: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagPartialSuccess to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagPartialSuccess.AsObject>) {
    _value = _value || {};
    this.successCount = _value.successCount;
    this.errors = (_value.errors || []).slice();
    RagPartialSuccess.refineValues(this);
  }
  get successCount(): number {
    return this._successCount;
  }
  set successCount(value: number) {
    this._successCount = value;
  }
  get errors(): string[] {
    return this._errors;
  }
  set errors(value: string[]) {
    this._errors = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagPartialSuccess.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagPartialSuccess.AsObject {
    return {
      successCount: this.successCount,
      errors: (this.errors || []).slice()
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
  ): RagPartialSuccess.AsProtobufJSON {
    return {
      successCount: this.successCount,
      errors: (this.errors || []).slice()
    };
  }
}
export module RagPartialSuccess {
  /**
   * Standard JavaScript object representation for RagPartialSuccess
   */
  export interface AsObject {
    successCount: number;
    errors: string[];
  }

  /**
   * Protobuf JSON representation for RagPartialSuccess
   */
  export interface AsProtobufJSON {
    successCount: number;
    errors: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagDataset
 */
export class RagDataset implements GrpcMessage {
  static id = 'ondewo.nlu.RagDataset';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDataset();
    RagDataset.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDataset) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.avatar = _instance.avatar || '';
    _instance.language = _instance.language || '';
    _instance.permission = _instance.permission || 0;
    _instance.documentCount = _instance.documentCount || 0;
    _instance.chunkCount = _instance.chunkCount || 0;
    _instance.chunkMethod = _instance.chunkMethod || 0;
    _instance.parserConfig = _instance.parserConfig || undefined;
    _instance.embeddingModel = _instance.embeddingModel || '';
    _instance.createTime = _instance.createTime || '0';
    _instance.createDate = _instance.createDate || '';
    _instance.updateTime = _instance.updateTime || '0';
    _instance.updateDate = _instance.updateDate || '';
    _instance.tokenCount = _instance.tokenCount || 0;
    _instance.similarityThreshold = _instance.similarityThreshold || 0;
    _instance.vectorSimilarityWeight = _instance.vectorSimilarityWeight || 0;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDataset,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.description = _reader.readString();
          break;
        case 4:
          _instance.avatar = _reader.readString();
          break;
        case 5:
          _instance.language = _reader.readString();
          break;
        case 6:
          _instance.permission = _reader.readEnum();
          break;
        case 7:
          _instance.documentCount = _reader.readInt32();
          break;
        case 8:
          _instance.chunkCount = _reader.readInt32();
          break;
        case 9:
          _instance.chunkMethod = _reader.readEnum();
          break;
        case 10:
          _instance.parserConfig = new RagParserConfig();
          _reader.readMessage(
            _instance.parserConfig,
            RagParserConfig.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.embeddingModel = _reader.readString();
          break;
        case 12:
          _instance.createTime = _reader.readInt64String();
          break;
        case 13:
          _instance.createDate = _reader.readString();
          break;
        case 14:
          _instance.updateTime = _reader.readInt64String();
          break;
        case 15:
          _instance.updateDate = _reader.readString();
          break;
        case 16:
          _instance.tokenCount = _reader.readInt32();
          break;
        case 17:
          _instance.similarityThreshold = _reader.readFloat();
          break;
        case 18:
          _instance.vectorSimilarityWeight = _reader.readFloat();
          break;
        case 19:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagDataset.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: RagDataset, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (_instance.avatar) {
      _writer.writeString(4, _instance.avatar);
    }
    if (_instance.language) {
      _writer.writeString(5, _instance.language);
    }
    if (_instance.permission) {
      _writer.writeEnum(6, _instance.permission);
    }
    if (_instance.documentCount) {
      _writer.writeInt32(7, _instance.documentCount);
    }
    if (_instance.chunkCount) {
      _writer.writeInt32(8, _instance.chunkCount);
    }
    if (_instance.chunkMethod) {
      _writer.writeEnum(9, _instance.chunkMethod);
    }
    if (_instance.parserConfig) {
      _writer.writeMessage(
        10,
        _instance.parserConfig as any,
        RagParserConfig.serializeBinaryToWriter
      );
    }
    if (_instance.embeddingModel) {
      _writer.writeString(11, _instance.embeddingModel);
    }
    if (_instance.createTime) {
      _writer.writeInt64String(12, _instance.createTime);
    }
    if (_instance.createDate) {
      _writer.writeString(13, _instance.createDate);
    }
    if (_instance.updateTime) {
      _writer.writeInt64String(14, _instance.updateTime);
    }
    if (_instance.updateDate) {
      _writer.writeString(15, _instance.updateDate);
    }
    if (_instance.tokenCount) {
      _writer.writeInt32(16, _instance.tokenCount);
    }
    if (_instance.similarityThreshold) {
      _writer.writeFloat(17, _instance.similarityThreshold);
    }
    if (_instance.vectorSimilarityWeight) {
      _writer.writeFloat(18, _instance.vectorSimilarityWeight);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        19,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _id: string;
  private _name: string;
  private _description: string;
  private _avatar: string;
  private _language: string;
  private _permission: RagPermission;
  private _documentCount: number;
  private _chunkCount: number;
  private _chunkMethod: RagChunkMethod;
  private _parserConfig?: RagParserConfig;
  private _embeddingModel: string;
  private _createTime: string;
  private _createDate: string;
  private _updateTime: string;
  private _updateDate: string;
  private _tokenCount: number;
  private _similarityThreshold: number;
  private _vectorSimilarityWeight: number;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDataset to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDataset.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.description = _value.description;
    this.avatar = _value.avatar;
    this.language = _value.language;
    this.permission = _value.permission;
    this.documentCount = _value.documentCount;
    this.chunkCount = _value.chunkCount;
    this.chunkMethod = _value.chunkMethod;
    this.parserConfig = _value.parserConfig
      ? new RagParserConfig(_value.parserConfig)
      : undefined;
    this.embeddingModel = _value.embeddingModel;
    this.createTime = _value.createTime;
    this.createDate = _value.createDate;
    this.updateTime = _value.updateTime;
    this.updateDate = _value.updateDate;
    this.tokenCount = _value.tokenCount;
    this.similarityThreshold = _value.similarityThreshold;
    this.vectorSimilarityWeight = _value.vectorSimilarityWeight;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagDataset.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get avatar(): string {
    return this._avatar;
  }
  set avatar(value: string) {
    this._avatar = value;
  }
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }
  get permission(): RagPermission {
    return this._permission;
  }
  set permission(value: RagPermission) {
    this._permission = value;
  }
  get documentCount(): number {
    return this._documentCount;
  }
  set documentCount(value: number) {
    this._documentCount = value;
  }
  get chunkCount(): number {
    return this._chunkCount;
  }
  set chunkCount(value: number) {
    this._chunkCount = value;
  }
  get chunkMethod(): RagChunkMethod {
    return this._chunkMethod;
  }
  set chunkMethod(value: RagChunkMethod) {
    this._chunkMethod = value;
  }
  get parserConfig(): RagParserConfig | undefined {
    return this._parserConfig;
  }
  set parserConfig(value: RagParserConfig | undefined) {
    this._parserConfig = value;
  }
  get embeddingModel(): string {
    return this._embeddingModel;
  }
  set embeddingModel(value: string) {
    this._embeddingModel = value;
  }
  get createTime(): string {
    return this._createTime;
  }
  set createTime(value: string) {
    this._createTime = value;
  }
  get createDate(): string {
    return this._createDate;
  }
  set createDate(value: string) {
    this._createDate = value;
  }
  get updateTime(): string {
    return this._updateTime;
  }
  set updateTime(value: string) {
    this._updateTime = value;
  }
  get updateDate(): string {
    return this._updateDate;
  }
  set updateDate(value: string) {
    this._updateDate = value;
  }
  get tokenCount(): number {
    return this._tokenCount;
  }
  set tokenCount(value: number) {
    this._tokenCount = value;
  }
  get similarityThreshold(): number {
    return this._similarityThreshold;
  }
  set similarityThreshold(value: number) {
    this._similarityThreshold = value;
  }
  get vectorSimilarityWeight(): number {
    return this._vectorSimilarityWeight;
  }
  set vectorSimilarityWeight(value: number) {
    this._vectorSimilarityWeight = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDataset.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDataset.AsObject {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      avatar: this.avatar,
      language: this.language,
      permission: this.permission,
      documentCount: this.documentCount,
      chunkCount: this.chunkCount,
      chunkMethod: this.chunkMethod,
      parserConfig: this.parserConfig
        ? this.parserConfig.toObject()
        : undefined,
      embeddingModel: this.embeddingModel,
      createTime: this.createTime,
      createDate: this.createDate,
      updateTime: this.updateTime,
      updateDate: this.updateDate,
      tokenCount: this.tokenCount,
      similarityThreshold: this.similarityThreshold,
      vectorSimilarityWeight: this.vectorSimilarityWeight,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagDataset.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      avatar: this.avatar,
      language: this.language,
      permission:
        RagPermission[
          this.permission === null || this.permission === undefined
            ? 0
            : this.permission
        ],
      documentCount: this.documentCount,
      chunkCount: this.chunkCount,
      chunkMethod:
        RagChunkMethod[
          this.chunkMethod === null || this.chunkMethod === undefined
            ? 0
            : this.chunkMethod
        ],
      parserConfig: this.parserConfig
        ? this.parserConfig.toProtobufJSON(options)
        : null,
      embeddingModel: this.embeddingModel,
      createTime: this.createTime,
      createDate: this.createDate,
      updateTime: this.updateTime,
      updateDate: this.updateDate,
      tokenCount: this.tokenCount,
      similarityThreshold: this.similarityThreshold,
      vectorSimilarityWeight: this.vectorSimilarityWeight,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagDataset {
  /**
   * Standard JavaScript object representation for RagDataset
   */
  export interface AsObject {
    id: string;
    name: string;
    description: string;
    avatar: string;
    language: string;
    permission: RagPermission;
    documentCount: number;
    chunkCount: number;
    chunkMethod: RagChunkMethod;
    parserConfig?: RagParserConfig.AsObject;
    embeddingModel: string;
    createTime: string;
    createDate: string;
    updateTime: string;
    updateDate: string;
    tokenCount: number;
    similarityThreshold: number;
    vectorSimilarityWeight: number;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagDataset
   */
  export interface AsProtobufJSON {
    id: string;
    name: string;
    description: string;
    avatar: string;
    language: string;
    permission: string;
    documentCount: number;
    chunkCount: number;
    chunkMethod: string;
    parserConfig: RagParserConfig.AsProtobufJSON | null;
    embeddingModel: string;
    createTime: string;
    createDate: string;
    updateTime: string;
    updateDate: string;
    tokenCount: number;
    similarityThreshold: number;
    vectorSimilarityWeight: number;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCreateDatasetRequest
 */
export class RagCreateDatasetRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagCreateDatasetRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCreateDatasetRequest();
    RagCreateDatasetRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCreateDatasetRequest) {
    _instance.parent = _instance.parent || '';
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.avatar = _instance.avatar || '';
    _instance.permission = _instance.permission || 0;
    _instance.chunkMethod = _instance.chunkMethod || 0;
    _instance.parserConfig = _instance.parserConfig || undefined;
    _instance.embeddingModel = _instance.embeddingModel || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCreateDatasetRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.description = _reader.readString();
          break;
        case 4:
          _instance.avatar = _reader.readString();
          break;
        case 5:
          _instance.permission = _reader.readEnum();
          break;
        case 6:
          _instance.chunkMethod = _reader.readEnum();
          break;
        case 7:
          _instance.parserConfig = new RagParserConfig();
          _reader.readMessage(
            _instance.parserConfig,
            RagParserConfig.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.embeddingModel = _reader.readString();
          break;
        case 9:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagCreateDatasetRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCreateDatasetRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (_instance.avatar) {
      _writer.writeString(4, _instance.avatar);
    }
    if (_instance.permission) {
      _writer.writeEnum(5, _instance.permission);
    }
    if (_instance.chunkMethod) {
      _writer.writeEnum(6, _instance.chunkMethod);
    }
    if (_instance.parserConfig) {
      _writer.writeMessage(
        7,
        _instance.parserConfig as any,
        RagParserConfig.serializeBinaryToWriter
      );
    }
    if (_instance.embeddingModel) {
      _writer.writeString(8, _instance.embeddingModel);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        9,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _name: string;
  private _description: string;
  private _avatar: string;
  private _permission: RagPermission;
  private _chunkMethod: RagChunkMethod;
  private _parserConfig?: RagParserConfig;
  private _embeddingModel: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCreateDatasetRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCreateDatasetRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.name = _value.name;
    this.description = _value.description;
    this.avatar = _value.avatar;
    this.permission = _value.permission;
    this.chunkMethod = _value.chunkMethod;
    this.parserConfig = _value.parserConfig
      ? new RagParserConfig(_value.parserConfig)
      : undefined;
    this.embeddingModel = _value.embeddingModel;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagCreateDatasetRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get avatar(): string {
    return this._avatar;
  }
  set avatar(value: string) {
    this._avatar = value;
  }
  get permission(): RagPermission {
    return this._permission;
  }
  set permission(value: RagPermission) {
    this._permission = value;
  }
  get chunkMethod(): RagChunkMethod {
    return this._chunkMethod;
  }
  set chunkMethod(value: RagChunkMethod) {
    this._chunkMethod = value;
  }
  get parserConfig(): RagParserConfig | undefined {
    return this._parserConfig;
  }
  set parserConfig(value: RagParserConfig | undefined) {
    this._parserConfig = value;
  }
  get embeddingModel(): string {
    return this._embeddingModel;
  }
  set embeddingModel(value: string) {
    this._embeddingModel = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCreateDatasetRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCreateDatasetRequest.AsObject {
    return {
      parent: this.parent,
      name: this.name,
      description: this.description,
      avatar: this.avatar,
      permission: this.permission,
      chunkMethod: this.chunkMethod,
      parserConfig: this.parserConfig
        ? this.parserConfig.toObject()
        : undefined,
      embeddingModel: this.embeddingModel,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagCreateDatasetRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      name: this.name,
      description: this.description,
      avatar: this.avatar,
      permission:
        RagPermission[
          this.permission === null || this.permission === undefined
            ? 0
            : this.permission
        ],
      chunkMethod:
        RagChunkMethod[
          this.chunkMethod === null || this.chunkMethod === undefined
            ? 0
            : this.chunkMethod
        ],
      parserConfig: this.parserConfig
        ? this.parserConfig.toProtobufJSON(options)
        : null,
      embeddingModel: this.embeddingModel,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagCreateDatasetRequest {
  /**
   * Standard JavaScript object representation for RagCreateDatasetRequest
   */
  export interface AsObject {
    parent: string;
    name: string;
    description: string;
    avatar: string;
    permission: RagPermission;
    chunkMethod: RagChunkMethod;
    parserConfig?: RagParserConfig.AsObject;
    embeddingModel: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagCreateDatasetRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    name: string;
    description: string;
    avatar: string;
    permission: string;
    chunkMethod: string;
    parserConfig: RagParserConfig.AsProtobufJSON | null;
    embeddingModel: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagParserConfig
 */
export class RagParserConfig implements GrpcMessage {
  static id = 'ondewo.nlu.RagParserConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagParserConfig();
    RagParserConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagParserConfig) {
    _instance.autoKeyword = _instance.autoKeyword || 0;
    _instance.autoQuestions = _instance.autoQuestions || 0;
    _instance.chunkTokenNum = _instance.chunkTokenNum || 0;
    _instance.delimiter = _instance.delimiter || '';
    _instance.html4excel = _instance.html4excel || false;
    _instance.layoutRecognize = _instance.layoutRecognize || '';
    _instance.tagKbIds = _instance.tagKbIds || [];
    _instance.taskPageSize = _instance.taskPageSize || 0;
    _instance.raptor = _instance.raptor || undefined;
    _instance.graphrag = _instance.graphrag || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagParserConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.autoKeyword = _reader.readInt32();
          break;
        case 2:
          _instance.autoQuestions = _reader.readInt32();
          break;
        case 3:
          _instance.chunkTokenNum = _reader.readInt32();
          break;
        case 4:
          _instance.delimiter = _reader.readString();
          break;
        case 5:
          _instance.html4excel = _reader.readBool();
          break;
        case 6:
          _instance.layoutRecognize = _reader.readString();
          break;
        case 7:
          (_instance.tagKbIds = _instance.tagKbIds || []).push(
            _reader.readString()
          );
          break;
        case 8:
          _instance.taskPageSize = _reader.readInt32();
          break;
        case 9:
          _instance.raptor = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.raptor,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.graphrag = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.graphrag,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagParserConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagParserConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.autoKeyword) {
      _writer.writeInt32(1, _instance.autoKeyword);
    }
    if (_instance.autoQuestions) {
      _writer.writeInt32(2, _instance.autoQuestions);
    }
    if (_instance.chunkTokenNum) {
      _writer.writeInt32(3, _instance.chunkTokenNum);
    }
    if (_instance.delimiter) {
      _writer.writeString(4, _instance.delimiter);
    }
    if (_instance.html4excel) {
      _writer.writeBool(5, _instance.html4excel);
    }
    if (_instance.layoutRecognize) {
      _writer.writeString(6, _instance.layoutRecognize);
    }
    if (_instance.tagKbIds && _instance.tagKbIds.length) {
      _writer.writeRepeatedString(7, _instance.tagKbIds);
    }
    if (_instance.taskPageSize) {
      _writer.writeInt32(8, _instance.taskPageSize);
    }
    if (_instance.raptor) {
      _writer.writeMessage(
        9,
        _instance.raptor as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.graphrag) {
      _writer.writeMessage(
        10,
        _instance.graphrag as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _autoKeyword: number;
  private _autoQuestions: number;
  private _chunkTokenNum: number;
  private _delimiter: string;
  private _html4excel: boolean;
  private _layoutRecognize: string;
  private _tagKbIds: string[];
  private _taskPageSize: number;
  private _raptor?: googleProtobuf001.Struct;
  private _graphrag?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagParserConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagParserConfig.AsObject>) {
    _value = _value || {};
    this.autoKeyword = _value.autoKeyword;
    this.autoQuestions = _value.autoQuestions;
    this.chunkTokenNum = _value.chunkTokenNum;
    this.delimiter = _value.delimiter;
    this.html4excel = _value.html4excel;
    this.layoutRecognize = _value.layoutRecognize;
    this.tagKbIds = (_value.tagKbIds || []).slice();
    this.taskPageSize = _value.taskPageSize;
    this.raptor = _value.raptor
      ? new googleProtobuf001.Struct(_value.raptor)
      : undefined;
    this.graphrag = _value.graphrag
      ? new googleProtobuf001.Struct(_value.graphrag)
      : undefined;
    RagParserConfig.refineValues(this);
  }
  get autoKeyword(): number {
    return this._autoKeyword;
  }
  set autoKeyword(value: number) {
    this._autoKeyword = value;
  }
  get autoQuestions(): number {
    return this._autoQuestions;
  }
  set autoQuestions(value: number) {
    this._autoQuestions = value;
  }
  get chunkTokenNum(): number {
    return this._chunkTokenNum;
  }
  set chunkTokenNum(value: number) {
    this._chunkTokenNum = value;
  }
  get delimiter(): string {
    return this._delimiter;
  }
  set delimiter(value: string) {
    this._delimiter = value;
  }
  get html4excel(): boolean {
    return this._html4excel;
  }
  set html4excel(value: boolean) {
    this._html4excel = value;
  }
  get layoutRecognize(): string {
    return this._layoutRecognize;
  }
  set layoutRecognize(value: string) {
    this._layoutRecognize = value;
  }
  get tagKbIds(): string[] {
    return this._tagKbIds;
  }
  set tagKbIds(value: string[]) {
    this._tagKbIds = value;
  }
  get taskPageSize(): number {
    return this._taskPageSize;
  }
  set taskPageSize(value: number) {
    this._taskPageSize = value;
  }
  get raptor(): googleProtobuf001.Struct | undefined {
    return this._raptor;
  }
  set raptor(value: googleProtobuf001.Struct | undefined) {
    this._raptor = value;
  }
  get graphrag(): googleProtobuf001.Struct | undefined {
    return this._graphrag;
  }
  set graphrag(value: googleProtobuf001.Struct | undefined) {
    this._graphrag = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagParserConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagParserConfig.AsObject {
    return {
      autoKeyword: this.autoKeyword,
      autoQuestions: this.autoQuestions,
      chunkTokenNum: this.chunkTokenNum,
      delimiter: this.delimiter,
      html4excel: this.html4excel,
      layoutRecognize: this.layoutRecognize,
      tagKbIds: (this.tagKbIds || []).slice(),
      taskPageSize: this.taskPageSize,
      raptor: this.raptor ? this.raptor.toObject() : undefined,
      graphrag: this.graphrag ? this.graphrag.toObject() : undefined
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
  ): RagParserConfig.AsProtobufJSON {
    return {
      autoKeyword: this.autoKeyword,
      autoQuestions: this.autoQuestions,
      chunkTokenNum: this.chunkTokenNum,
      delimiter: this.delimiter,
      html4excel: this.html4excel,
      layoutRecognize: this.layoutRecognize,
      tagKbIds: (this.tagKbIds || []).slice(),
      taskPageSize: this.taskPageSize,
      raptor: this.raptor ? this.raptor.toProtobufJSON(options) : null,
      graphrag: this.graphrag ? this.graphrag.toProtobufJSON(options) : null
    };
  }
}
export module RagParserConfig {
  /**
   * Standard JavaScript object representation for RagParserConfig
   */
  export interface AsObject {
    autoKeyword: number;
    autoQuestions: number;
    chunkTokenNum: number;
    delimiter: string;
    html4excel: boolean;
    layoutRecognize: string;
    tagKbIds: string[];
    taskPageSize: number;
    raptor?: googleProtobuf001.Struct.AsObject;
    graphrag?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagParserConfig
   */
  export interface AsProtobufJSON {
    autoKeyword: number;
    autoQuestions: number;
    chunkTokenNum: number;
    delimiter: string;
    html4excel: boolean;
    layoutRecognize: string;
    tagKbIds: string[];
    taskPageSize: number;
    raptor: googleProtobuf001.Struct.AsProtobufJSON | null;
    graphrag: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagUpdateDatasetRequest
 */
export class RagUpdateDatasetRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagUpdateDatasetRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagUpdateDatasetRequest();
    RagUpdateDatasetRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagUpdateDatasetRequest) {
    _instance.parent = _instance.parent || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.avatar = _instance.avatar || '';
    _instance.permission = _instance.permission || 0;
    _instance.chunkMethod = _instance.chunkMethod || 0;
    _instance.parserConfig = _instance.parserConfig || undefined;
    _instance.embeddingModel = _instance.embeddingModel || '';
    _instance.pagerank = _instance.pagerank || 0;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagUpdateDatasetRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.datasetId = _reader.readString();
          break;
        case 3:
          _instance.name = _reader.readString();
          break;
        case 4:
          _instance.description = _reader.readString();
          break;
        case 5:
          _instance.avatar = _reader.readString();
          break;
        case 6:
          _instance.permission = _reader.readEnum();
          break;
        case 7:
          _instance.chunkMethod = _reader.readEnum();
          break;
        case 8:
          _instance.parserConfig = new RagParserConfig();
          _reader.readMessage(
            _instance.parserConfig,
            RagParserConfig.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.embeddingModel = _reader.readString();
          break;
        case 10:
          _instance.pagerank = _reader.readInt32();
          break;
        case 11:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagUpdateDatasetRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagUpdateDatasetRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.datasetId) {
      _writer.writeString(2, _instance.datasetId);
    }
    if (_instance.name) {
      _writer.writeString(3, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(4, _instance.description);
    }
    if (_instance.avatar) {
      _writer.writeString(5, _instance.avatar);
    }
    if (_instance.permission) {
      _writer.writeEnum(6, _instance.permission);
    }
    if (_instance.chunkMethod) {
      _writer.writeEnum(7, _instance.chunkMethod);
    }
    if (_instance.parserConfig) {
      _writer.writeMessage(
        8,
        _instance.parserConfig as any,
        RagParserConfig.serializeBinaryToWriter
      );
    }
    if (_instance.embeddingModel) {
      _writer.writeString(9, _instance.embeddingModel);
    }
    if (_instance.pagerank) {
      _writer.writeInt32(10, _instance.pagerank);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        11,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _datasetId: string;
  private _name: string;
  private _description: string;
  private _avatar: string;
  private _permission: RagPermission;
  private _chunkMethod: RagChunkMethod;
  private _parserConfig?: RagParserConfig;
  private _embeddingModel: string;
  private _pagerank: number;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagUpdateDatasetRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagUpdateDatasetRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.datasetId = _value.datasetId;
    this.name = _value.name;
    this.description = _value.description;
    this.avatar = _value.avatar;
    this.permission = _value.permission;
    this.chunkMethod = _value.chunkMethod;
    this.parserConfig = _value.parserConfig
      ? new RagParserConfig(_value.parserConfig)
      : undefined;
    this.embeddingModel = _value.embeddingModel;
    this.pagerank = _value.pagerank;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagUpdateDatasetRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get avatar(): string {
    return this._avatar;
  }
  set avatar(value: string) {
    this._avatar = value;
  }
  get permission(): RagPermission {
    return this._permission;
  }
  set permission(value: RagPermission) {
    this._permission = value;
  }
  get chunkMethod(): RagChunkMethod {
    return this._chunkMethod;
  }
  set chunkMethod(value: RagChunkMethod) {
    this._chunkMethod = value;
  }
  get parserConfig(): RagParserConfig | undefined {
    return this._parserConfig;
  }
  set parserConfig(value: RagParserConfig | undefined) {
    this._parserConfig = value;
  }
  get embeddingModel(): string {
    return this._embeddingModel;
  }
  set embeddingModel(value: string) {
    this._embeddingModel = value;
  }
  get pagerank(): number {
    return this._pagerank;
  }
  set pagerank(value: number) {
    this._pagerank = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagUpdateDatasetRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagUpdateDatasetRequest.AsObject {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      name: this.name,
      description: this.description,
      avatar: this.avatar,
      permission: this.permission,
      chunkMethod: this.chunkMethod,
      parserConfig: this.parserConfig
        ? this.parserConfig.toObject()
        : undefined,
      embeddingModel: this.embeddingModel,
      pagerank: this.pagerank,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagUpdateDatasetRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      name: this.name,
      description: this.description,
      avatar: this.avatar,
      permission:
        RagPermission[
          this.permission === null || this.permission === undefined
            ? 0
            : this.permission
        ],
      chunkMethod:
        RagChunkMethod[
          this.chunkMethod === null || this.chunkMethod === undefined
            ? 0
            : this.chunkMethod
        ],
      parserConfig: this.parserConfig
        ? this.parserConfig.toProtobufJSON(options)
        : null,
      embeddingModel: this.embeddingModel,
      pagerank: this.pagerank,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagUpdateDatasetRequest {
  /**
   * Standard JavaScript object representation for RagUpdateDatasetRequest
   */
  export interface AsObject {
    parent: string;
    datasetId: string;
    name: string;
    description: string;
    avatar: string;
    permission: RagPermission;
    chunkMethod: RagChunkMethod;
    parserConfig?: RagParserConfig.AsObject;
    embeddingModel: string;
    pagerank: number;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagUpdateDatasetRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    datasetId: string;
    name: string;
    description: string;
    avatar: string;
    permission: string;
    chunkMethod: string;
    parserConfig: RagParserConfig.AsProtobufJSON | null;
    embeddingModel: string;
    pagerank: number;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDeleteDatasetsRequest
 */
export class RagDeleteDatasetsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDeleteDatasetsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDeleteDatasetsRequest();
    RagDeleteDatasetsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDeleteDatasetsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.ids = _instance.ids || [];
    _instance.deleteAll = _instance.deleteAll || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDeleteDatasetsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          (_instance.ids = _instance.ids || []).push(_reader.readString());
          break;
        case 3:
          _instance.deleteAll = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDeleteDatasetsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDeleteDatasetsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.ids && _instance.ids.length) {
      _writer.writeRepeatedString(2, _instance.ids);
    }
    if (_instance.deleteAll) {
      _writer.writeBool(3, _instance.deleteAll);
    }
  }

  private _parent: string;
  private _ids: string[];
  private _deleteAll: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDeleteDatasetsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDeleteDatasetsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.ids = (_value.ids || []).slice();
    this.deleteAll = _value.deleteAll;
    RagDeleteDatasetsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get ids(): string[] {
    return this._ids;
  }
  set ids(value: string[]) {
    this._ids = value;
  }
  get deleteAll(): boolean {
    return this._deleteAll;
  }
  set deleteAll(value: boolean) {
    this._deleteAll = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDeleteDatasetsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDeleteDatasetsRequest.AsObject {
    return {
      parent: this.parent,
      ids: (this.ids || []).slice(),
      deleteAll: this.deleteAll
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
  ): RagDeleteDatasetsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      ids: (this.ids || []).slice(),
      deleteAll: this.deleteAll
    };
  }
}
export module RagDeleteDatasetsRequest {
  /**
   * Standard JavaScript object representation for RagDeleteDatasetsRequest
   */
  export interface AsObject {
    parent: string;
    ids: string[];
    deleteAll: boolean;
  }

  /**
   * Protobuf JSON representation for RagDeleteDatasetsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    ids: string[];
    deleteAll: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.RagListDatasetsRequest
 */
export class RagListDatasetsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagListDatasetsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListDatasetsRequest();
    RagListDatasetsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListDatasetsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.pagination = _instance.pagination || undefined;
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.orderby = _instance.orderby || '';
    _instance.desc = _instance.desc || false;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListDatasetsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.pagination = new RagPagination();
          _reader.readMessage(
            _instance.pagination,
            RagPagination.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.id = _reader.readString();
          break;
        case 4:
          _instance.name = _reader.readString();
          break;
        case 5:
          _instance.orderby = _reader.readString();
          break;
        case 6:
          _instance.desc = _reader.readBool();
          break;
        case 7:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagListDatasetsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListDatasetsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.pagination) {
      _writer.writeMessage(
        2,
        _instance.pagination as any,
        RagPagination.serializeBinaryToWriter
      );
    }
    if (_instance.id) {
      _writer.writeString(3, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(4, _instance.name);
    }
    if (_instance.orderby) {
      _writer.writeString(5, _instance.orderby);
    }
    if (_instance.desc) {
      _writer.writeBool(6, _instance.desc);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        7,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _pagination?: RagPagination;
  private _id: string;
  private _name: string;
  private _orderby: string;
  private _desc: boolean;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListDatasetsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListDatasetsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.pagination = _value.pagination
      ? new RagPagination(_value.pagination)
      : undefined;
    this.id = _value.id;
    this.name = _value.name;
    this.orderby = _value.orderby;
    this.desc = _value.desc;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagListDatasetsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get pagination(): RagPagination | undefined {
    return this._pagination;
  }
  set pagination(value: RagPagination | undefined) {
    this._pagination = value;
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get orderby(): string {
    return this._orderby;
  }
  set orderby(value: string) {
    this._orderby = value;
  }
  get desc(): boolean {
    return this._desc;
  }
  set desc(value: boolean) {
    this._desc = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagListDatasetsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListDatasetsRequest.AsObject {
    return {
      parent: this.parent,
      pagination: this.pagination ? this.pagination.toObject() : undefined,
      id: this.id,
      name: this.name,
      orderby: this.orderby,
      desc: this.desc,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagListDatasetsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      pagination: this.pagination
        ? this.pagination.toProtobufJSON(options)
        : null,
      id: this.id,
      name: this.name,
      orderby: this.orderby,
      desc: this.desc,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagListDatasetsRequest {
  /**
   * Standard JavaScript object representation for RagListDatasetsRequest
   */
  export interface AsObject {
    parent: string;
    pagination?: RagPagination.AsObject;
    id: string;
    name: string;
    orderby: string;
    desc: boolean;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagListDatasetsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    pagination: RagPagination.AsProtobufJSON | null;
    id: string;
    name: string;
    orderby: string;
    desc: boolean;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDatasetList
 */
export class RagDatasetList implements GrpcMessage {
  static id = 'ondewo.nlu.RagDatasetList';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDatasetList();
    RagDatasetList.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDatasetList) {
    _instance.datasets = _instance.datasets || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDatasetList,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagDataset();
          _reader.readMessage(
            messageInitializer1,
            RagDataset.deserializeBinaryFromReader
          );
          (_instance.datasets = _instance.datasets || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagDatasetList.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDatasetList,
    _writer: BinaryWriter
  ) {
    if (_instance.datasets && _instance.datasets.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.datasets as any,
        RagDataset.serializeBinaryToWriter
      );
    }
  }

  private _datasets?: RagDataset[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDatasetList to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDatasetList.AsObject>) {
    _value = _value || {};
    this.datasets = (_value.datasets || []).map(m => new RagDataset(m));
    RagDatasetList.refineValues(this);
  }
  get datasets(): RagDataset[] | undefined {
    return this._datasets;
  }
  set datasets(value: RagDataset[] | undefined) {
    this._datasets = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDatasetList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDatasetList.AsObject {
    return {
      datasets: (this.datasets || []).map(m => m.toObject())
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
  ): RagDatasetList.AsProtobufJSON {
    return {
      datasets: (this.datasets || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module RagDatasetList {
  /**
   * Standard JavaScript object representation for RagDatasetList
   */
  export interface AsObject {
    datasets?: RagDataset.AsObject[];
  }

  /**
   * Protobuf JSON representation for RagDatasetList
   */
  export interface AsProtobufJSON {
    datasets: RagDataset.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetKnowledgeGraphRequest
 */
export class RagGetKnowledgeGraphRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetKnowledgeGraphRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetKnowledgeGraphRequest();
    RagGetKnowledgeGraphRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetKnowledgeGraphRequest) {
    _instance.parent = _instance.parent || '';
    _instance.datasetId = _instance.datasetId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetKnowledgeGraphRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.datasetId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagGetKnowledgeGraphRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetKnowledgeGraphRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.datasetId) {
      _writer.writeString(2, _instance.datasetId);
    }
  }

  private _parent: string;
  private _datasetId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetKnowledgeGraphRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagGetKnowledgeGraphRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.datasetId = _value.datasetId;
    RagGetKnowledgeGraphRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagGetKnowledgeGraphRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetKnowledgeGraphRequest.AsObject {
    return {
      parent: this.parent,
      datasetId: this.datasetId
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
  ): RagGetKnowledgeGraphRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      datasetId: this.datasetId
    };
  }
}
export module RagGetKnowledgeGraphRequest {
  /**
   * Standard JavaScript object representation for RagGetKnowledgeGraphRequest
   */
  export interface AsObject {
    parent: string;
    datasetId: string;
  }

  /**
   * Protobuf JSON representation for RagGetKnowledgeGraphRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    datasetId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetKnowledgeGraphResponse
 */
export class RagGetKnowledgeGraphResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetKnowledgeGraphResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetKnowledgeGraphResponse();
    RagGetKnowledgeGraphResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetKnowledgeGraphResponse) {
    _instance.graph = _instance.graph || undefined;
    _instance.mindMap = _instance.mindMap || undefined;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetKnowledgeGraphResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.graph = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.graph,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.mindMap = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.mindMap,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagGetKnowledgeGraphResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetKnowledgeGraphResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.graph) {
      _writer.writeMessage(
        1,
        _instance.graph as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.mindMap) {
      _writer.writeMessage(
        2,
        _instance.mindMap as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        3,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _graph?: googleProtobuf001.Struct;
  private _mindMap?: googleProtobuf001.Struct;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetKnowledgeGraphResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagGetKnowledgeGraphResponse.AsObject>
  ) {
    _value = _value || {};
    this.graph = _value.graph
      ? new googleProtobuf001.Struct(_value.graph)
      : undefined;
    this.mindMap = _value.mindMap
      ? new googleProtobuf001.Struct(_value.mindMap)
      : undefined;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagGetKnowledgeGraphResponse.refineValues(this);
  }
  get graph(): googleProtobuf001.Struct | undefined {
    return this._graph;
  }
  set graph(value: googleProtobuf001.Struct | undefined) {
    this._graph = value;
  }
  get mindMap(): googleProtobuf001.Struct | undefined {
    return this._mindMap;
  }
  set mindMap(value: googleProtobuf001.Struct | undefined) {
    this._mindMap = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagGetKnowledgeGraphResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetKnowledgeGraphResponse.AsObject {
    return {
      graph: this.graph ? this.graph.toObject() : undefined,
      mindMap: this.mindMap ? this.mindMap.toObject() : undefined,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagGetKnowledgeGraphResponse.AsProtobufJSON {
    return {
      graph: this.graph ? this.graph.toProtobufJSON(options) : null,
      mindMap: this.mindMap ? this.mindMap.toProtobufJSON(options) : null,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagGetKnowledgeGraphResponse {
  /**
   * Standard JavaScript object representation for RagGetKnowledgeGraphResponse
   */
  export interface AsObject {
    graph?: googleProtobuf001.Struct.AsObject;
    mindMap?: googleProtobuf001.Struct.AsObject;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagGetKnowledgeGraphResponse
   */
  export interface AsProtobufJSON {
    graph: googleProtobuf001.Struct.AsProtobufJSON | null;
    mindMap: googleProtobuf001.Struct.AsProtobufJSON | null;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDeleteKnowledgeGraphRequest
 */
export class RagDeleteKnowledgeGraphRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDeleteKnowledgeGraphRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDeleteKnowledgeGraphRequest();
    RagDeleteKnowledgeGraphRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDeleteKnowledgeGraphRequest) {
    _instance.parent = _instance.parent || '';
    _instance.datasetId = _instance.datasetId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDeleteKnowledgeGraphRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.datasetId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDeleteKnowledgeGraphRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDeleteKnowledgeGraphRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.datasetId) {
      _writer.writeString(2, _instance.datasetId);
    }
  }

  private _parent: string;
  private _datasetId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDeleteKnowledgeGraphRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagDeleteKnowledgeGraphRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.datasetId = _value.datasetId;
    RagDeleteKnowledgeGraphRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDeleteKnowledgeGraphRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDeleteKnowledgeGraphRequest.AsObject {
    return {
      parent: this.parent,
      datasetId: this.datasetId
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
  ): RagDeleteKnowledgeGraphRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      datasetId: this.datasetId
    };
  }
}
export module RagDeleteKnowledgeGraphRequest {
  /**
   * Standard JavaScript object representation for RagDeleteKnowledgeGraphRequest
   */
  export interface AsObject {
    parent: string;
    datasetId: string;
  }

  /**
   * Protobuf JSON representation for RagDeleteKnowledgeGraphRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    datasetId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDocument
 */
export class RagDocument implements GrpcMessage {
  static id = 'ondewo.nlu.RagDocument';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDocument();
    RagDocument.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDocument) {
    _instance.id = _instance.id || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.name = _instance.name || '';
    _instance.type = _instance.type || '';
    _instance.size = _instance.size || '0';
    _instance.chunkCount = _instance.chunkCount || 0;
    _instance.tokenCount = _instance.tokenCount || 0;
    _instance.chunkMethod = _instance.chunkMethod || 0;
    _instance.parserConfig = _instance.parserConfig || undefined;
    _instance.sourceType = _instance.sourceType || '';
    _instance.run = _instance.run || 0;
    _instance.progress = _instance.progress || 0;
    _instance.progressMsg = _instance.progressMsg || '';
    _instance.processDuration = _instance.processDuration || 0;
    _instance.createTime = _instance.createTime || '0';
    _instance.createDate = _instance.createDate || '';
    _instance.updateTime = _instance.updateTime || '0';
    _instance.updateDate = _instance.updateDate || '';
    _instance.metaFields = _instance.metaFields || undefined;
    _instance.thumbnail = _instance.thumbnail || '';
    _instance.location = _instance.location || '';
    _instance.processBeginAt = _instance.processBeginAt || '';
    _instance.suffix = _instance.suffix || '';
    _instance.status = _instance.status || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDocument,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.datasetId = _reader.readString();
          break;
        case 3:
          _instance.name = _reader.readString();
          break;
        case 4:
          _instance.type = _reader.readString();
          break;
        case 5:
          _instance.size = _reader.readInt64String();
          break;
        case 6:
          _instance.chunkCount = _reader.readInt32();
          break;
        case 7:
          _instance.tokenCount = _reader.readInt32();
          break;
        case 8:
          _instance.chunkMethod = _reader.readEnum();
          break;
        case 9:
          _instance.parserConfig = new RagParserConfig();
          _reader.readMessage(
            _instance.parserConfig,
            RagParserConfig.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.sourceType = _reader.readString();
          break;
        case 11:
          _instance.run = _reader.readEnum();
          break;
        case 12:
          _instance.progress = _reader.readFloat();
          break;
        case 13:
          _instance.progressMsg = _reader.readString();
          break;
        case 14:
          _instance.processDuration = _reader.readFloat();
          break;
        case 15:
          _instance.createTime = _reader.readInt64String();
          break;
        case 16:
          _instance.createDate = _reader.readString();
          break;
        case 17:
          _instance.updateTime = _reader.readInt64String();
          break;
        case 18:
          _instance.updateDate = _reader.readString();
          break;
        case 19:
          _instance.metaFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.metaFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 20:
          _instance.thumbnail = _reader.readString();
          break;
        case 21:
          _instance.location = _reader.readString();
          break;
        case 22:
          _instance.processBeginAt = _reader.readString();
          break;
        case 23:
          _instance.suffix = _reader.readString();
          break;
        case 24:
          _instance.status = _reader.readString();
          break;
        case 25:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagDocument.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDocument,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.datasetId) {
      _writer.writeString(2, _instance.datasetId);
    }
    if (_instance.name) {
      _writer.writeString(3, _instance.name);
    }
    if (_instance.type) {
      _writer.writeString(4, _instance.type);
    }
    if (_instance.size) {
      _writer.writeInt64String(5, _instance.size);
    }
    if (_instance.chunkCount) {
      _writer.writeInt32(6, _instance.chunkCount);
    }
    if (_instance.tokenCount) {
      _writer.writeInt32(7, _instance.tokenCount);
    }
    if (_instance.chunkMethod) {
      _writer.writeEnum(8, _instance.chunkMethod);
    }
    if (_instance.parserConfig) {
      _writer.writeMessage(
        9,
        _instance.parserConfig as any,
        RagParserConfig.serializeBinaryToWriter
      );
    }
    if (_instance.sourceType) {
      _writer.writeString(10, _instance.sourceType);
    }
    if (_instance.run) {
      _writer.writeEnum(11, _instance.run);
    }
    if (_instance.progress) {
      _writer.writeFloat(12, _instance.progress);
    }
    if (_instance.progressMsg) {
      _writer.writeString(13, _instance.progressMsg);
    }
    if (_instance.processDuration) {
      _writer.writeFloat(14, _instance.processDuration);
    }
    if (_instance.createTime) {
      _writer.writeInt64String(15, _instance.createTime);
    }
    if (_instance.createDate) {
      _writer.writeString(16, _instance.createDate);
    }
    if (_instance.updateTime) {
      _writer.writeInt64String(17, _instance.updateTime);
    }
    if (_instance.updateDate) {
      _writer.writeString(18, _instance.updateDate);
    }
    if (_instance.metaFields) {
      _writer.writeMessage(
        19,
        _instance.metaFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.thumbnail) {
      _writer.writeString(20, _instance.thumbnail);
    }
    if (_instance.location) {
      _writer.writeString(21, _instance.location);
    }
    if (_instance.processBeginAt) {
      _writer.writeString(22, _instance.processBeginAt);
    }
    if (_instance.suffix) {
      _writer.writeString(23, _instance.suffix);
    }
    if (_instance.status) {
      _writer.writeString(24, _instance.status);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        25,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _id: string;
  private _datasetId: string;
  private _name: string;
  private _type: string;
  private _size: string;
  private _chunkCount: number;
  private _tokenCount: number;
  private _chunkMethod: RagChunkMethod;
  private _parserConfig?: RagParserConfig;
  private _sourceType: string;
  private _run: RagDocumentStatus;
  private _progress: number;
  private _progressMsg: string;
  private _processDuration: number;
  private _createTime: string;
  private _createDate: string;
  private _updateTime: string;
  private _updateDate: string;
  private _metaFields?: googleProtobuf001.Struct;
  private _thumbnail: string;
  private _location: string;
  private _processBeginAt: string;
  private _suffix: string;
  private _status: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDocument to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDocument.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.datasetId = _value.datasetId;
    this.name = _value.name;
    this.type = _value.type;
    this.size = _value.size;
    this.chunkCount = _value.chunkCount;
    this.tokenCount = _value.tokenCount;
    this.chunkMethod = _value.chunkMethod;
    this.parserConfig = _value.parserConfig
      ? new RagParserConfig(_value.parserConfig)
      : undefined;
    this.sourceType = _value.sourceType;
    this.run = _value.run;
    this.progress = _value.progress;
    this.progressMsg = _value.progressMsg;
    this.processDuration = _value.processDuration;
    this.createTime = _value.createTime;
    this.createDate = _value.createDate;
    this.updateTime = _value.updateTime;
    this.updateDate = _value.updateDate;
    this.metaFields = _value.metaFields
      ? new googleProtobuf001.Struct(_value.metaFields)
      : undefined;
    this.thumbnail = _value.thumbnail;
    this.location = _value.location;
    this.processBeginAt = _value.processBeginAt;
    this.suffix = _value.suffix;
    this.status = _value.status;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagDocument.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
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
  get size(): string {
    return this._size;
  }
  set size(value: string) {
    this._size = value;
  }
  get chunkCount(): number {
    return this._chunkCount;
  }
  set chunkCount(value: number) {
    this._chunkCount = value;
  }
  get tokenCount(): number {
    return this._tokenCount;
  }
  set tokenCount(value: number) {
    this._tokenCount = value;
  }
  get chunkMethod(): RagChunkMethod {
    return this._chunkMethod;
  }
  set chunkMethod(value: RagChunkMethod) {
    this._chunkMethod = value;
  }
  get parserConfig(): RagParserConfig | undefined {
    return this._parserConfig;
  }
  set parserConfig(value: RagParserConfig | undefined) {
    this._parserConfig = value;
  }
  get sourceType(): string {
    return this._sourceType;
  }
  set sourceType(value: string) {
    this._sourceType = value;
  }
  get run(): RagDocumentStatus {
    return this._run;
  }
  set run(value: RagDocumentStatus) {
    this._run = value;
  }
  get progress(): number {
    return this._progress;
  }
  set progress(value: number) {
    this._progress = value;
  }
  get progressMsg(): string {
    return this._progressMsg;
  }
  set progressMsg(value: string) {
    this._progressMsg = value;
  }
  get processDuration(): number {
    return this._processDuration;
  }
  set processDuration(value: number) {
    this._processDuration = value;
  }
  get createTime(): string {
    return this._createTime;
  }
  set createTime(value: string) {
    this._createTime = value;
  }
  get createDate(): string {
    return this._createDate;
  }
  set createDate(value: string) {
    this._createDate = value;
  }
  get updateTime(): string {
    return this._updateTime;
  }
  set updateTime(value: string) {
    this._updateTime = value;
  }
  get updateDate(): string {
    return this._updateDate;
  }
  set updateDate(value: string) {
    this._updateDate = value;
  }
  get metaFields(): googleProtobuf001.Struct | undefined {
    return this._metaFields;
  }
  set metaFields(value: googleProtobuf001.Struct | undefined) {
    this._metaFields = value;
  }
  get thumbnail(): string {
    return this._thumbnail;
  }
  set thumbnail(value: string) {
    this._thumbnail = value;
  }
  get location(): string {
    return this._location;
  }
  set location(value: string) {
    this._location = value;
  }
  get processBeginAt(): string {
    return this._processBeginAt;
  }
  set processBeginAt(value: string) {
    this._processBeginAt = value;
  }
  get suffix(): string {
    return this._suffix;
  }
  set suffix(value: string) {
    this._suffix = value;
  }
  get status(): string {
    return this._status;
  }
  set status(value: string) {
    this._status = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDocument.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDocument.AsObject {
    return {
      id: this.id,
      datasetId: this.datasetId,
      name: this.name,
      type: this.type,
      size: this.size,
      chunkCount: this.chunkCount,
      tokenCount: this.tokenCount,
      chunkMethod: this.chunkMethod,
      parserConfig: this.parserConfig
        ? this.parserConfig.toObject()
        : undefined,
      sourceType: this.sourceType,
      run: this.run,
      progress: this.progress,
      progressMsg: this.progressMsg,
      processDuration: this.processDuration,
      createTime: this.createTime,
      createDate: this.createDate,
      updateTime: this.updateTime,
      updateDate: this.updateDate,
      metaFields: this.metaFields ? this.metaFields.toObject() : undefined,
      thumbnail: this.thumbnail,
      location: this.location,
      processBeginAt: this.processBeginAt,
      suffix: this.suffix,
      status: this.status,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagDocument.AsProtobufJSON {
    return {
      id: this.id,
      datasetId: this.datasetId,
      name: this.name,
      type: this.type,
      size: this.size,
      chunkCount: this.chunkCount,
      tokenCount: this.tokenCount,
      chunkMethod:
        RagChunkMethod[
          this.chunkMethod === null || this.chunkMethod === undefined
            ? 0
            : this.chunkMethod
        ],
      parserConfig: this.parserConfig
        ? this.parserConfig.toProtobufJSON(options)
        : null,
      sourceType: this.sourceType,
      run:
        RagDocumentStatus[
          this.run === null || this.run === undefined ? 0 : this.run
        ],
      progress: this.progress,
      progressMsg: this.progressMsg,
      processDuration: this.processDuration,
      createTime: this.createTime,
      createDate: this.createDate,
      updateTime: this.updateTime,
      updateDate: this.updateDate,
      metaFields: this.metaFields
        ? this.metaFields.toProtobufJSON(options)
        : null,
      thumbnail: this.thumbnail,
      location: this.location,
      processBeginAt: this.processBeginAt,
      suffix: this.suffix,
      status: this.status,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagDocument {
  /**
   * Standard JavaScript object representation for RagDocument
   */
  export interface AsObject {
    id: string;
    datasetId: string;
    name: string;
    type: string;
    size: string;
    chunkCount: number;
    tokenCount: number;
    chunkMethod: RagChunkMethod;
    parserConfig?: RagParserConfig.AsObject;
    sourceType: string;
    run: RagDocumentStatus;
    progress: number;
    progressMsg: string;
    processDuration: number;
    createTime: string;
    createDate: string;
    updateTime: string;
    updateDate: string;
    metaFields?: googleProtobuf001.Struct.AsObject;
    thumbnail: string;
    location: string;
    processBeginAt: string;
    suffix: string;
    status: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagDocument
   */
  export interface AsProtobufJSON {
    id: string;
    datasetId: string;
    name: string;
    type: string;
    size: string;
    chunkCount: number;
    tokenCount: number;
    chunkMethod: string;
    parserConfig: RagParserConfig.AsProtobufJSON | null;
    sourceType: string;
    run: string;
    progress: number;
    progressMsg: string;
    processDuration: number;
    createTime: string;
    createDate: string;
    updateTime: string;
    updateDate: string;
    metaFields: googleProtobuf001.Struct.AsProtobufJSON | null;
    thumbnail: string;
    location: string;
    processBeginAt: string;
    suffix: string;
    status: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagUploadDocumentsRequest
 */
export class RagUploadDocumentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagUploadDocumentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagUploadDocumentsRequest();
    RagUploadDocumentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagUploadDocumentsRequest) {
    _instance.parent = _instance.parent || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagUploadDocumentsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.metadata = new RagUploadDocumentsRequest.RagMetadata();
          _reader.readMessage(
            _instance.metadata,
            RagUploadDocumentsRequest.RagMetadata.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.chunk = new RagUploadChunk();
          _reader.readMessage(
            _instance.chunk,
            RagUploadChunk.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagUploadDocumentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagUploadDocumentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.metadata) {
      _writer.writeMessage(
        2,
        _instance.metadata as any,
        RagUploadDocumentsRequest.RagMetadata.serializeBinaryToWriter
      );
    }
    if (_instance.chunk) {
      _writer.writeMessage(
        3,
        _instance.chunk as any,
        RagUploadChunk.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _metadata?: RagUploadDocumentsRequest.RagMetadata;
  private _chunk?: RagUploadChunk;

  private _payload: RagUploadDocumentsRequest.PayloadCase =
    RagUploadDocumentsRequest.PayloadCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagUploadDocumentsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagUploadDocumentsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.metadata = _value.metadata
      ? new RagUploadDocumentsRequest.RagMetadata(_value.metadata)
      : undefined;
    this.chunk = _value.chunk ? new RagUploadChunk(_value.chunk) : undefined;
    RagUploadDocumentsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get metadata(): RagUploadDocumentsRequest.RagMetadata | undefined {
    return this._metadata;
  }
  set metadata(value: RagUploadDocumentsRequest.RagMetadata | undefined) {
    if (value !== undefined && value !== null) {
      this._chunk = undefined;
      this._payload = RagUploadDocumentsRequest.PayloadCase.metadata;
    }
    this._metadata = value;
  }
  get chunk(): RagUploadChunk | undefined {
    return this._chunk;
  }
  set chunk(value: RagUploadChunk | undefined) {
    if (value !== undefined && value !== null) {
      this._metadata = undefined;
      this._payload = RagUploadDocumentsRequest.PayloadCase.chunk;
    }
    this._chunk = value;
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
    RagUploadDocumentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagUploadDocumentsRequest.AsObject {
    return {
      parent: this.parent,
      metadata: this.metadata ? this.metadata.toObject() : undefined,
      chunk: this.chunk ? this.chunk.toObject() : undefined
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
  ): RagUploadDocumentsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      metadata: this.metadata ? this.metadata.toProtobufJSON(options) : null,
      chunk: this.chunk ? this.chunk.toProtobufJSON(options) : null
    };
  }
}
export module RagUploadDocumentsRequest {
  /**
   * Standard JavaScript object representation for RagUploadDocumentsRequest
   */
  export interface AsObject {
    parent: string;
    metadata?: RagUploadDocumentsRequest.RagMetadata.AsObject;
    chunk?: RagUploadChunk.AsObject;
  }

  /**
   * Protobuf JSON representation for RagUploadDocumentsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    metadata: RagUploadDocumentsRequest.RagMetadata.AsProtobufJSON | null;
    chunk: RagUploadChunk.AsProtobufJSON | null;
  }
  export enum PayloadCase {
    none = 0,
    metadata = 1,
    chunk = 2
  }
  /**
   * Message implementation for ondewo.nlu.RagUploadDocumentsRequest.RagMetadata
   */
  export class RagMetadata implements GrpcMessage {
    static id = 'ondewo.nlu.RagUploadDocumentsRequest.RagMetadata';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new RagMetadata();
      RagMetadata.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RagMetadata) {
      _instance.datasetId = _instance.datasetId || '';
      _instance.files = _instance.files || [];
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: RagMetadata,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.datasetId = _reader.readString();
            break;
          case 2:
            const messageInitializer2 = new RagFileMetadata();
            _reader.readMessage(
              messageInitializer2,
              RagFileMetadata.deserializeBinaryFromReader
            );
            (_instance.files = _instance.files || []).push(messageInitializer2);
            break;
          default:
            _reader.skipField();
        }
      }

      RagMetadata.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: RagMetadata,
      _writer: BinaryWriter
    ) {
      if (_instance.datasetId) {
        _writer.writeString(1, _instance.datasetId);
      }
      if (_instance.files && _instance.files.length) {
        _writer.writeRepeatedMessage(
          2,
          _instance.files as any,
          RagFileMetadata.serializeBinaryToWriter
        );
      }
    }

    private _datasetId: string;
    private _files?: RagFileMetadata[];

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RagMetadata to deeply clone from
     */
    constructor(_value?: RecursivePartial<RagMetadata.AsObject>) {
      _value = _value || {};
      this.datasetId = _value.datasetId;
      this.files = (_value.files || []).map(m => new RagFileMetadata(m));
      RagMetadata.refineValues(this);
    }
    get datasetId(): string {
      return this._datasetId;
    }
    set datasetId(value: string) {
      this._datasetId = value;
    }
    get files(): RagFileMetadata[] | undefined {
      return this._files;
    }
    set files(value: RagFileMetadata[] | undefined) {
      this._files = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      RagMetadata.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RagMetadata.AsObject {
      return {
        datasetId: this.datasetId,
        files: (this.files || []).map(m => m.toObject())
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
    ): RagMetadata.AsProtobufJSON {
      return {
        datasetId: this.datasetId,
        files: (this.files || []).map(m => m.toProtobufJSON(options))
      };
    }
  }
  export module RagMetadata {
    /**
     * Standard JavaScript object representation for RagMetadata
     */
    export interface AsObject {
      datasetId: string;
      files?: RagFileMetadata.AsObject[];
    }

    /**
     * Protobuf JSON representation for RagMetadata
     */
    export interface AsProtobufJSON {
      datasetId: string;
      files: RagFileMetadata.AsProtobufJSON[] | null;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.RagDocumentList
 */
export class RagDocumentList implements GrpcMessage {
  static id = 'ondewo.nlu.RagDocumentList';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDocumentList();
    RagDocumentList.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDocumentList) {
    _instance.documents = _instance.documents || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDocumentList,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagDocument();
          _reader.readMessage(
            messageInitializer1,
            RagDocument.deserializeBinaryFromReader
          );
          (_instance.documents = _instance.documents || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagDocumentList.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDocumentList,
    _writer: BinaryWriter
  ) {
    if (_instance.documents && _instance.documents.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.documents as any,
        RagDocument.serializeBinaryToWriter
      );
    }
  }

  private _documents?: RagDocument[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDocumentList to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDocumentList.AsObject>) {
    _value = _value || {};
    this.documents = (_value.documents || []).map(m => new RagDocument(m));
    RagDocumentList.refineValues(this);
  }
  get documents(): RagDocument[] | undefined {
    return this._documents;
  }
  set documents(value: RagDocument[] | undefined) {
    this._documents = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDocumentList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDocumentList.AsObject {
    return {
      documents: (this.documents || []).map(m => m.toObject())
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
  ): RagDocumentList.AsProtobufJSON {
    return {
      documents: (this.documents || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module RagDocumentList {
  /**
   * Standard JavaScript object representation for RagDocumentList
   */
  export interface AsObject {
    documents?: RagDocument.AsObject[];
  }

  /**
   * Protobuf JSON representation for RagDocumentList
   */
  export interface AsProtobufJSON {
    documents: RagDocument.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagUpdateDocumentRequest
 */
export class RagUpdateDocumentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagUpdateDocumentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagUpdateDocumentRequest();
    RagUpdateDocumentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagUpdateDocumentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.documentId = _instance.documentId || '';
    _instance.name = _instance.name || '';
    _instance.chunkMethod = _instance.chunkMethod || 0;
    _instance.parserConfig = _instance.parserConfig || undefined;
    _instance.enabled = _instance.enabled || false;
    _instance.metaFields = _instance.metaFields || undefined;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagUpdateDocumentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.datasetId = _reader.readString();
          break;
        case 3:
          _instance.documentId = _reader.readString();
          break;
        case 4:
          _instance.name = _reader.readString();
          break;
        case 5:
          _instance.chunkMethod = _reader.readEnum();
          break;
        case 6:
          _instance.parserConfig = new RagParserConfig();
          _reader.readMessage(
            _instance.parserConfig,
            RagParserConfig.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.enabled = _reader.readBool();
          break;
        case 8:
          _instance.metaFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.metaFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagUpdateDocumentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagUpdateDocumentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.datasetId) {
      _writer.writeString(2, _instance.datasetId);
    }
    if (_instance.documentId) {
      _writer.writeString(3, _instance.documentId);
    }
    if (_instance.name) {
      _writer.writeString(4, _instance.name);
    }
    if (_instance.chunkMethod) {
      _writer.writeEnum(5, _instance.chunkMethod);
    }
    if (_instance.parserConfig) {
      _writer.writeMessage(
        6,
        _instance.parserConfig as any,
        RagParserConfig.serializeBinaryToWriter
      );
    }
    if (_instance.enabled) {
      _writer.writeBool(7, _instance.enabled);
    }
    if (_instance.metaFields) {
      _writer.writeMessage(
        8,
        _instance.metaFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        9,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _datasetId: string;
  private _documentId: string;
  private _name: string;
  private _chunkMethod: RagChunkMethod;
  private _parserConfig?: RagParserConfig;
  private _enabled: boolean;
  private _metaFields?: googleProtobuf001.Struct;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagUpdateDocumentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagUpdateDocumentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.datasetId = _value.datasetId;
    this.documentId = _value.documentId;
    this.name = _value.name;
    this.chunkMethod = _value.chunkMethod;
    this.parserConfig = _value.parserConfig
      ? new RagParserConfig(_value.parserConfig)
      : undefined;
    this.enabled = _value.enabled;
    this.metaFields = _value.metaFields
      ? new googleProtobuf001.Struct(_value.metaFields)
      : undefined;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagUpdateDocumentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get documentId(): string {
    return this._documentId;
  }
  set documentId(value: string) {
    this._documentId = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get chunkMethod(): RagChunkMethod {
    return this._chunkMethod;
  }
  set chunkMethod(value: RagChunkMethod) {
    this._chunkMethod = value;
  }
  get parserConfig(): RagParserConfig | undefined {
    return this._parserConfig;
  }
  set parserConfig(value: RagParserConfig | undefined) {
    this._parserConfig = value;
  }
  get enabled(): boolean {
    return this._enabled;
  }
  set enabled(value: boolean) {
    this._enabled = value;
  }
  get metaFields(): googleProtobuf001.Struct | undefined {
    return this._metaFields;
  }
  set metaFields(value: googleProtobuf001.Struct | undefined) {
    this._metaFields = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagUpdateDocumentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagUpdateDocumentRequest.AsObject {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      documentId: this.documentId,
      name: this.name,
      chunkMethod: this.chunkMethod,
      parserConfig: this.parserConfig
        ? this.parserConfig.toObject()
        : undefined,
      enabled: this.enabled,
      metaFields: this.metaFields ? this.metaFields.toObject() : undefined,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagUpdateDocumentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      documentId: this.documentId,
      name: this.name,
      chunkMethod:
        RagChunkMethod[
          this.chunkMethod === null || this.chunkMethod === undefined
            ? 0
            : this.chunkMethod
        ],
      parserConfig: this.parserConfig
        ? this.parserConfig.toProtobufJSON(options)
        : null,
      enabled: this.enabled,
      metaFields: this.metaFields
        ? this.metaFields.toProtobufJSON(options)
        : null,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagUpdateDocumentRequest {
  /**
   * Standard JavaScript object representation for RagUpdateDocumentRequest
   */
  export interface AsObject {
    parent: string;
    datasetId: string;
    documentId: string;
    name: string;
    chunkMethod: RagChunkMethod;
    parserConfig?: RagParserConfig.AsObject;
    enabled: boolean;
    metaFields?: googleProtobuf001.Struct.AsObject;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagUpdateDocumentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    datasetId: string;
    documentId: string;
    name: string;
    chunkMethod: string;
    parserConfig: RagParserConfig.AsProtobufJSON | null;
    enabled: boolean;
    metaFields: googleProtobuf001.Struct.AsProtobufJSON | null;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDownloadDocumentRequest
 */
export class RagDownloadDocumentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDownloadDocumentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDownloadDocumentRequest();
    RagDownloadDocumentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDownloadDocumentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.documentId = _instance.documentId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDownloadDocumentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.datasetId = _reader.readString();
          break;
        case 3:
          _instance.documentId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDownloadDocumentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDownloadDocumentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.datasetId) {
      _writer.writeString(2, _instance.datasetId);
    }
    if (_instance.documentId) {
      _writer.writeString(3, _instance.documentId);
    }
  }

  private _parent: string;
  private _datasetId: string;
  private _documentId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDownloadDocumentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDownloadDocumentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.datasetId = _value.datasetId;
    this.documentId = _value.documentId;
    RagDownloadDocumentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get documentId(): string {
    return this._documentId;
  }
  set documentId(value: string) {
    this._documentId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDownloadDocumentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDownloadDocumentRequest.AsObject {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      documentId: this.documentId
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
  ): RagDownloadDocumentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      documentId: this.documentId
    };
  }
}
export module RagDownloadDocumentRequest {
  /**
   * Standard JavaScript object representation for RagDownloadDocumentRequest
   */
  export interface AsObject {
    parent: string;
    datasetId: string;
    documentId: string;
  }

  /**
   * Protobuf JSON representation for RagDownloadDocumentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    datasetId: string;
    documentId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagListDocumentsRequest
 */
export class RagListDocumentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagListDocumentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListDocumentsRequest();
    RagListDocumentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListDocumentsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.pagination = _instance.pagination || undefined;
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.keywords = _instance.keywords || '';
    _instance.orderby = _instance.orderby || '';
    _instance.desc = _instance.desc || false;
    _instance.createTimeFrom = _instance.createTimeFrom || '0';
    _instance.createTimeTo = _instance.createTimeTo || '0';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListDocumentsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.datasetId = _reader.readString();
          break;
        case 3:
          _instance.pagination = new RagPagination();
          _reader.readMessage(
            _instance.pagination,
            RagPagination.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.id = _reader.readString();
          break;
        case 5:
          _instance.name = _reader.readString();
          break;
        case 6:
          _instance.keywords = _reader.readString();
          break;
        case 7:
          _instance.orderby = _reader.readString();
          break;
        case 8:
          _instance.desc = _reader.readBool();
          break;
        case 9:
          _instance.createTimeFrom = _reader.readInt64String();
          break;
        case 10:
          _instance.createTimeTo = _reader.readInt64String();
          break;
        case 11:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagListDocumentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListDocumentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.datasetId) {
      _writer.writeString(2, _instance.datasetId);
    }
    if (_instance.pagination) {
      _writer.writeMessage(
        3,
        _instance.pagination as any,
        RagPagination.serializeBinaryToWriter
      );
    }
    if (_instance.id) {
      _writer.writeString(4, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(5, _instance.name);
    }
    if (_instance.keywords) {
      _writer.writeString(6, _instance.keywords);
    }
    if (_instance.orderby) {
      _writer.writeString(7, _instance.orderby);
    }
    if (_instance.desc) {
      _writer.writeBool(8, _instance.desc);
    }
    if (_instance.createTimeFrom) {
      _writer.writeInt64String(9, _instance.createTimeFrom);
    }
    if (_instance.createTimeTo) {
      _writer.writeInt64String(10, _instance.createTimeTo);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        11,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _datasetId: string;
  private _pagination?: RagPagination;
  private _id: string;
  private _name: string;
  private _keywords: string;
  private _orderby: string;
  private _desc: boolean;
  private _createTimeFrom: string;
  private _createTimeTo: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListDocumentsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListDocumentsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.datasetId = _value.datasetId;
    this.pagination = _value.pagination
      ? new RagPagination(_value.pagination)
      : undefined;
    this.id = _value.id;
    this.name = _value.name;
    this.keywords = _value.keywords;
    this.orderby = _value.orderby;
    this.desc = _value.desc;
    this.createTimeFrom = _value.createTimeFrom;
    this.createTimeTo = _value.createTimeTo;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagListDocumentsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get pagination(): RagPagination | undefined {
    return this._pagination;
  }
  set pagination(value: RagPagination | undefined) {
    this._pagination = value;
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get keywords(): string {
    return this._keywords;
  }
  set keywords(value: string) {
    this._keywords = value;
  }
  get orderby(): string {
    return this._orderby;
  }
  set orderby(value: string) {
    this._orderby = value;
  }
  get desc(): boolean {
    return this._desc;
  }
  set desc(value: boolean) {
    this._desc = value;
  }
  get createTimeFrom(): string {
    return this._createTimeFrom;
  }
  set createTimeFrom(value: string) {
    this._createTimeFrom = value;
  }
  get createTimeTo(): string {
    return this._createTimeTo;
  }
  set createTimeTo(value: string) {
    this._createTimeTo = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagListDocumentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListDocumentsRequest.AsObject {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      pagination: this.pagination ? this.pagination.toObject() : undefined,
      id: this.id,
      name: this.name,
      keywords: this.keywords,
      orderby: this.orderby,
      desc: this.desc,
      createTimeFrom: this.createTimeFrom,
      createTimeTo: this.createTimeTo,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagListDocumentsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      pagination: this.pagination
        ? this.pagination.toProtobufJSON(options)
        : null,
      id: this.id,
      name: this.name,
      keywords: this.keywords,
      orderby: this.orderby,
      desc: this.desc,
      createTimeFrom: this.createTimeFrom,
      createTimeTo: this.createTimeTo,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagListDocumentsRequest {
  /**
   * Standard JavaScript object representation for RagListDocumentsRequest
   */
  export interface AsObject {
    parent: string;
    datasetId: string;
    pagination?: RagPagination.AsObject;
    id: string;
    name: string;
    keywords: string;
    orderby: string;
    desc: boolean;
    createTimeFrom: string;
    createTimeTo: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagListDocumentsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    datasetId: string;
    pagination: RagPagination.AsProtobufJSON | null;
    id: string;
    name: string;
    keywords: string;
    orderby: string;
    desc: boolean;
    createTimeFrom: string;
    createTimeTo: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagListDocumentsResponse
 */
export class RagListDocumentsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagListDocumentsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListDocumentsResponse();
    RagListDocumentsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListDocumentsResponse) {
    _instance.total = _instance.total || 0;
    _instance.docs = _instance.docs || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListDocumentsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.total = _reader.readInt32();
          break;
        case 2:
          const messageInitializer2 = new RagDocument();
          _reader.readMessage(
            messageInitializer2,
            RagDocument.deserializeBinaryFromReader
          );
          (_instance.docs = _instance.docs || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    RagListDocumentsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListDocumentsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.total) {
      _writer.writeInt32(1, _instance.total);
    }
    if (_instance.docs && _instance.docs.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.docs as any,
        RagDocument.serializeBinaryToWriter
      );
    }
  }

  private _total: number;
  private _docs?: RagDocument[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListDocumentsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListDocumentsResponse.AsObject>) {
    _value = _value || {};
    this.total = _value.total;
    this.docs = (_value.docs || []).map(m => new RagDocument(m));
    RagListDocumentsResponse.refineValues(this);
  }
  get total(): number {
    return this._total;
  }
  set total(value: number) {
    this._total = value;
  }
  get docs(): RagDocument[] | undefined {
    return this._docs;
  }
  set docs(value: RagDocument[] | undefined) {
    this._docs = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagListDocumentsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListDocumentsResponse.AsObject {
    return {
      total: this.total,
      docs: (this.docs || []).map(m => m.toObject())
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
  ): RagListDocumentsResponse.AsProtobufJSON {
    return {
      total: this.total,
      docs: (this.docs || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module RagListDocumentsResponse {
  /**
   * Standard JavaScript object representation for RagListDocumentsResponse
   */
  export interface AsObject {
    total: number;
    docs?: RagDocument.AsObject[];
  }

  /**
   * Protobuf JSON representation for RagListDocumentsResponse
   */
  export interface AsProtobufJSON {
    total: number;
    docs: RagDocument.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDeleteDocumentsRequest
 */
export class RagDeleteDocumentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDeleteDocumentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDeleteDocumentsRequest();
    RagDeleteDocumentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDeleteDocumentsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.ids = _instance.ids || [];
    _instance.deleteAll = _instance.deleteAll || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDeleteDocumentsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.datasetId = _reader.readString();
          break;
        case 3:
          (_instance.ids = _instance.ids || []).push(_reader.readString());
          break;
        case 4:
          _instance.deleteAll = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDeleteDocumentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDeleteDocumentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.datasetId) {
      _writer.writeString(2, _instance.datasetId);
    }
    if (_instance.ids && _instance.ids.length) {
      _writer.writeRepeatedString(3, _instance.ids);
    }
    if (_instance.deleteAll) {
      _writer.writeBool(4, _instance.deleteAll);
    }
  }

  private _parent: string;
  private _datasetId: string;
  private _ids: string[];
  private _deleteAll: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDeleteDocumentsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDeleteDocumentsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.datasetId = _value.datasetId;
    this.ids = (_value.ids || []).slice();
    this.deleteAll = _value.deleteAll;
    RagDeleteDocumentsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get ids(): string[] {
    return this._ids;
  }
  set ids(value: string[]) {
    this._ids = value;
  }
  get deleteAll(): boolean {
    return this._deleteAll;
  }
  set deleteAll(value: boolean) {
    this._deleteAll = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDeleteDocumentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDeleteDocumentsRequest.AsObject {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      ids: (this.ids || []).slice(),
      deleteAll: this.deleteAll
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
  ): RagDeleteDocumentsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      ids: (this.ids || []).slice(),
      deleteAll: this.deleteAll
    };
  }
}
export module RagDeleteDocumentsRequest {
  /**
   * Standard JavaScript object representation for RagDeleteDocumentsRequest
   */
  export interface AsObject {
    parent: string;
    datasetId: string;
    ids: string[];
    deleteAll: boolean;
  }

  /**
   * Protobuf JSON representation for RagDeleteDocumentsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    datasetId: string;
    ids: string[];
    deleteAll: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.RagChunk
 */
export class RagChunk implements GrpcMessage {
  static id = 'ondewo.nlu.RagChunk';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagChunk();
    RagChunk.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagChunk) {
    _instance.id = _instance.id || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.documentId = _instance.documentId || '';
    _instance.content = _instance.content || '';
    _instance.docnmKwd = _instance.docnmKwd || '';
    _instance.importantKeywords = _instance.importantKeywords || [];
    _instance.questions = _instance.questions || [];
    _instance.imageId = _instance.imageId || '';
    _instance.available = _instance.available || false;
    _instance.positions = _instance.positions || [];
    _instance.createTime = _instance.createTime || '';
    _instance.createTimestamp = _instance.createTimestamp || 0;
    _instance.documentKeyword = _instance.documentKeyword || '';
    _instance.similarity = _instance.similarity || 0;
    _instance.vector = _instance.vector || undefined;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagChunk,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.datasetId = _reader.readString();
          break;
        case 3:
          _instance.documentId = _reader.readString();
          break;
        case 4:
          _instance.content = _reader.readString();
          break;
        case 5:
          _instance.docnmKwd = _reader.readString();
          break;
        case 6:
          (_instance.importantKeywords =
            _instance.importantKeywords || []).push(_reader.readString());
          break;
        case 7:
          (_instance.questions = _instance.questions || []).push(
            _reader.readString()
          );
          break;
        case 8:
          _instance.imageId = _reader.readString();
          break;
        case 9:
          _instance.available = _reader.readBool();
          break;
        case 10:
          const messageInitializer10 = new googleProtobuf001.ListValue();
          _reader.readMessage(
            messageInitializer10,
            googleProtobuf001.ListValue.deserializeBinaryFromReader
          );
          (_instance.positions = _instance.positions || []).push(
            messageInitializer10
          );
          break;
        case 11:
          _instance.createTime = _reader.readString();
          break;
        case 12:
          _instance.createTimestamp = _reader.readFloat();
          break;
        case 13:
          _instance.documentKeyword = _reader.readString();
          break;
        case 14:
          _instance.similarity = _reader.readFloat();
          break;
        case 15:
          _instance.vector = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.vector,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 16:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagChunk.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: RagChunk, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.datasetId) {
      _writer.writeString(2, _instance.datasetId);
    }
    if (_instance.documentId) {
      _writer.writeString(3, _instance.documentId);
    }
    if (_instance.content) {
      _writer.writeString(4, _instance.content);
    }
    if (_instance.docnmKwd) {
      _writer.writeString(5, _instance.docnmKwd);
    }
    if (_instance.importantKeywords && _instance.importantKeywords.length) {
      _writer.writeRepeatedString(6, _instance.importantKeywords);
    }
    if (_instance.questions && _instance.questions.length) {
      _writer.writeRepeatedString(7, _instance.questions);
    }
    if (_instance.imageId) {
      _writer.writeString(8, _instance.imageId);
    }
    if (_instance.available) {
      _writer.writeBool(9, _instance.available);
    }
    if (_instance.positions && _instance.positions.length) {
      _writer.writeRepeatedMessage(
        10,
        _instance.positions as any,
        googleProtobuf001.ListValue.serializeBinaryToWriter
      );
    }
    if (_instance.createTime) {
      _writer.writeString(11, _instance.createTime);
    }
    if (_instance.createTimestamp) {
      _writer.writeFloat(12, _instance.createTimestamp);
    }
    if (_instance.documentKeyword) {
      _writer.writeString(13, _instance.documentKeyword);
    }
    if (_instance.similarity) {
      _writer.writeFloat(14, _instance.similarity);
    }
    if (_instance.vector) {
      _writer.writeMessage(
        15,
        _instance.vector as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        16,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _id: string;
  private _datasetId: string;
  private _documentId: string;
  private _content: string;
  private _docnmKwd: string;
  private _importantKeywords: string[];
  private _questions: string[];
  private _imageId: string;
  private _available: boolean;
  private _positions?: googleProtobuf001.ListValue[];
  private _createTime: string;
  private _createTimestamp: number;
  private _documentKeyword: string;
  private _similarity: number;
  private _vector?: googleProtobuf001.Struct;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagChunk to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagChunk.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.datasetId = _value.datasetId;
    this.documentId = _value.documentId;
    this.content = _value.content;
    this.docnmKwd = _value.docnmKwd;
    this.importantKeywords = (_value.importantKeywords || []).slice();
    this.questions = (_value.questions || []).slice();
    this.imageId = _value.imageId;
    this.available = _value.available;
    this.positions = (_value.positions || []).map(
      m => new googleProtobuf001.ListValue(m)
    );
    this.createTime = _value.createTime;
    this.createTimestamp = _value.createTimestamp;
    this.documentKeyword = _value.documentKeyword;
    this.similarity = _value.similarity;
    this.vector = _value.vector
      ? new googleProtobuf001.Struct(_value.vector)
      : undefined;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagChunk.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get documentId(): string {
    return this._documentId;
  }
  set documentId(value: string) {
    this._documentId = value;
  }
  get content(): string {
    return this._content;
  }
  set content(value: string) {
    this._content = value;
  }
  get docnmKwd(): string {
    return this._docnmKwd;
  }
  set docnmKwd(value: string) {
    this._docnmKwd = value;
  }
  get importantKeywords(): string[] {
    return this._importantKeywords;
  }
  set importantKeywords(value: string[]) {
    this._importantKeywords = value;
  }
  get questions(): string[] {
    return this._questions;
  }
  set questions(value: string[]) {
    this._questions = value;
  }
  get imageId(): string {
    return this._imageId;
  }
  set imageId(value: string) {
    this._imageId = value;
  }
  get available(): boolean {
    return this._available;
  }
  set available(value: boolean) {
    this._available = value;
  }
  get positions(): googleProtobuf001.ListValue[] | undefined {
    return this._positions;
  }
  set positions(value: googleProtobuf001.ListValue[] | undefined) {
    this._positions = value;
  }
  get createTime(): string {
    return this._createTime;
  }
  set createTime(value: string) {
    this._createTime = value;
  }
  get createTimestamp(): number {
    return this._createTimestamp;
  }
  set createTimestamp(value: number) {
    this._createTimestamp = value;
  }
  get documentKeyword(): string {
    return this._documentKeyword;
  }
  set documentKeyword(value: string) {
    this._documentKeyword = value;
  }
  get similarity(): number {
    return this._similarity;
  }
  set similarity(value: number) {
    this._similarity = value;
  }
  get vector(): googleProtobuf001.Struct | undefined {
    return this._vector;
  }
  set vector(value: googleProtobuf001.Struct | undefined) {
    this._vector = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagChunk.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagChunk.AsObject {
    return {
      id: this.id,
      datasetId: this.datasetId,
      documentId: this.documentId,
      content: this.content,
      docnmKwd: this.docnmKwd,
      importantKeywords: (this.importantKeywords || []).slice(),
      questions: (this.questions || []).slice(),
      imageId: this.imageId,
      available: this.available,
      positions: (this.positions || []).map(m => m.toObject()),
      createTime: this.createTime,
      createTimestamp: this.createTimestamp,
      documentKeyword: this.documentKeyword,
      similarity: this.similarity,
      vector: this.vector ? this.vector.toObject() : undefined,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagChunk.AsProtobufJSON {
    return {
      id: this.id,
      datasetId: this.datasetId,
      documentId: this.documentId,
      content: this.content,
      docnmKwd: this.docnmKwd,
      importantKeywords: (this.importantKeywords || []).slice(),
      questions: (this.questions || []).slice(),
      imageId: this.imageId,
      available: this.available,
      positions: (this.positions || []).map(m => m.toProtobufJSON(options)),
      createTime: this.createTime,
      createTimestamp: this.createTimestamp,
      documentKeyword: this.documentKeyword,
      similarity: this.similarity,
      vector: this.vector ? this.vector.toProtobufJSON(options) : null,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagChunk {
  /**
   * Standard JavaScript object representation for RagChunk
   */
  export interface AsObject {
    id: string;
    datasetId: string;
    documentId: string;
    content: string;
    docnmKwd: string;
    importantKeywords: string[];
    questions: string[];
    imageId: string;
    available: boolean;
    positions?: googleProtobuf001.ListValue.AsObject[];
    createTime: string;
    createTimestamp: number;
    documentKeyword: string;
    similarity: number;
    vector?: googleProtobuf001.Struct.AsObject;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagChunk
   */
  export interface AsProtobufJSON {
    id: string;
    datasetId: string;
    documentId: string;
    content: string;
    docnmKwd: string;
    importantKeywords: string[];
    questions: string[];
    imageId: string;
    available: boolean;
    positions: googleProtobuf001.ListValue.AsProtobufJSON[] | null;
    createTime: string;
    createTimestamp: number;
    documentKeyword: string;
    similarity: number;
    vector: googleProtobuf001.Struct.AsProtobufJSON | null;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagParseDocumentsRequest
 */
export class RagParseDocumentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagParseDocumentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagParseDocumentsRequest();
    RagParseDocumentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagParseDocumentsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.documentIds = _instance.documentIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagParseDocumentsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.datasetId = _reader.readString();
          break;
        case 3:
          (_instance.documentIds = _instance.documentIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagParseDocumentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagParseDocumentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.datasetId) {
      _writer.writeString(2, _instance.datasetId);
    }
    if (_instance.documentIds && _instance.documentIds.length) {
      _writer.writeRepeatedString(3, _instance.documentIds);
    }
  }

  private _parent: string;
  private _datasetId: string;
  private _documentIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagParseDocumentsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagParseDocumentsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.datasetId = _value.datasetId;
    this.documentIds = (_value.documentIds || []).slice();
    RagParseDocumentsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get documentIds(): string[] {
    return this._documentIds;
  }
  set documentIds(value: string[]) {
    this._documentIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagParseDocumentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagParseDocumentsRequest.AsObject {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      documentIds: (this.documentIds || []).slice()
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
  ): RagParseDocumentsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      documentIds: (this.documentIds || []).slice()
    };
  }
}
export module RagParseDocumentsRequest {
  /**
   * Standard JavaScript object representation for RagParseDocumentsRequest
   */
  export interface AsObject {
    parent: string;
    datasetId: string;
    documentIds: string[];
  }

  /**
   * Protobuf JSON representation for RagParseDocumentsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    datasetId: string;
    documentIds: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagStopParsingRequest
 */
export class RagStopParsingRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagStopParsingRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagStopParsingRequest();
    RagStopParsingRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagStopParsingRequest) {
    _instance.parent = _instance.parent || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.documentIds = _instance.documentIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagStopParsingRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.datasetId = _reader.readString();
          break;
        case 3:
          (_instance.documentIds = _instance.documentIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagStopParsingRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagStopParsingRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.datasetId) {
      _writer.writeString(2, _instance.datasetId);
    }
    if (_instance.documentIds && _instance.documentIds.length) {
      _writer.writeRepeatedString(3, _instance.documentIds);
    }
  }

  private _parent: string;
  private _datasetId: string;
  private _documentIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagStopParsingRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagStopParsingRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.datasetId = _value.datasetId;
    this.documentIds = (_value.documentIds || []).slice();
    RagStopParsingRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get documentIds(): string[] {
    return this._documentIds;
  }
  set documentIds(value: string[]) {
    this._documentIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagStopParsingRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagStopParsingRequest.AsObject {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      documentIds: (this.documentIds || []).slice()
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
  ): RagStopParsingRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      documentIds: (this.documentIds || []).slice()
    };
  }
}
export module RagStopParsingRequest {
  /**
   * Standard JavaScript object representation for RagStopParsingRequest
   */
  export interface AsObject {
    parent: string;
    datasetId: string;
    documentIds: string[];
  }

  /**
   * Protobuf JSON representation for RagStopParsingRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    datasetId: string;
    documentIds: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagListChunksRequest
 */
export class RagListChunksRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagListChunksRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListChunksRequest();
    RagListChunksRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListChunksRequest) {
    _instance.parent = _instance.parent || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.documentId = _instance.documentId || '';
    _instance.pagination = _instance.pagination || undefined;
    _instance.keywords = _instance.keywords || '';
    _instance.id = _instance.id || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListChunksRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.datasetId = _reader.readString();
          break;
        case 3:
          _instance.documentId = _reader.readString();
          break;
        case 4:
          _instance.pagination = new RagPagination();
          _reader.readMessage(
            _instance.pagination,
            RagPagination.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.keywords = _reader.readString();
          break;
        case 6:
          _instance.id = _reader.readString();
          break;
        case 7:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagListChunksRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListChunksRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.datasetId) {
      _writer.writeString(2, _instance.datasetId);
    }
    if (_instance.documentId) {
      _writer.writeString(3, _instance.documentId);
    }
    if (_instance.pagination) {
      _writer.writeMessage(
        4,
        _instance.pagination as any,
        RagPagination.serializeBinaryToWriter
      );
    }
    if (_instance.keywords) {
      _writer.writeString(5, _instance.keywords);
    }
    if (_instance.id) {
      _writer.writeString(6, _instance.id);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        7,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _datasetId: string;
  private _documentId: string;
  private _pagination?: RagPagination;
  private _keywords: string;
  private _id: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListChunksRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListChunksRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.datasetId = _value.datasetId;
    this.documentId = _value.documentId;
    this.pagination = _value.pagination
      ? new RagPagination(_value.pagination)
      : undefined;
    this.keywords = _value.keywords;
    this.id = _value.id;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagListChunksRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get documentId(): string {
    return this._documentId;
  }
  set documentId(value: string) {
    this._documentId = value;
  }
  get pagination(): RagPagination | undefined {
    return this._pagination;
  }
  set pagination(value: RagPagination | undefined) {
    this._pagination = value;
  }
  get keywords(): string {
    return this._keywords;
  }
  set keywords(value: string) {
    this._keywords = value;
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagListChunksRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListChunksRequest.AsObject {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      documentId: this.documentId,
      pagination: this.pagination ? this.pagination.toObject() : undefined,
      keywords: this.keywords,
      id: this.id,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagListChunksRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      documentId: this.documentId,
      pagination: this.pagination
        ? this.pagination.toProtobufJSON(options)
        : null,
      keywords: this.keywords,
      id: this.id,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagListChunksRequest {
  /**
   * Standard JavaScript object representation for RagListChunksRequest
   */
  export interface AsObject {
    parent: string;
    datasetId: string;
    documentId: string;
    pagination?: RagPagination.AsObject;
    keywords: string;
    id: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagListChunksRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    datasetId: string;
    documentId: string;
    pagination: RagPagination.AsProtobufJSON | null;
    keywords: string;
    id: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagListChunksResponse
 */
export class RagListChunksResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagListChunksResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListChunksResponse();
    RagListChunksResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListChunksResponse) {
    _instance.total = _instance.total || 0;
    _instance.chunks = _instance.chunks || [];
    _instance.doc = _instance.doc || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListChunksResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.total = _reader.readInt32();
          break;
        case 2:
          const messageInitializer2 = new RagChunk();
          _reader.readMessage(
            messageInitializer2,
            RagChunk.deserializeBinaryFromReader
          );
          (_instance.chunks = _instance.chunks || []).push(messageInitializer2);
          break;
        case 3:
          _instance.doc = new RagDocument();
          _reader.readMessage(
            _instance.doc,
            RagDocument.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagListChunksResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListChunksResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.total) {
      _writer.writeInt32(1, _instance.total);
    }
    if (_instance.chunks && _instance.chunks.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.chunks as any,
        RagChunk.serializeBinaryToWriter
      );
    }
    if (_instance.doc) {
      _writer.writeMessage(
        3,
        _instance.doc as any,
        RagDocument.serializeBinaryToWriter
      );
    }
  }

  private _total: number;
  private _chunks?: RagChunk[];
  private _doc?: RagDocument;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListChunksResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListChunksResponse.AsObject>) {
    _value = _value || {};
    this.total = _value.total;
    this.chunks = (_value.chunks || []).map(m => new RagChunk(m));
    this.doc = _value.doc ? new RagDocument(_value.doc) : undefined;
    RagListChunksResponse.refineValues(this);
  }
  get total(): number {
    return this._total;
  }
  set total(value: number) {
    this._total = value;
  }
  get chunks(): RagChunk[] | undefined {
    return this._chunks;
  }
  set chunks(value: RagChunk[] | undefined) {
    this._chunks = value;
  }
  get doc(): RagDocument | undefined {
    return this._doc;
  }
  set doc(value: RagDocument | undefined) {
    this._doc = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagListChunksResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListChunksResponse.AsObject {
    return {
      total: this.total,
      chunks: (this.chunks || []).map(m => m.toObject()),
      doc: this.doc ? this.doc.toObject() : undefined
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
  ): RagListChunksResponse.AsProtobufJSON {
    return {
      total: this.total,
      chunks: (this.chunks || []).map(m => m.toProtobufJSON(options)),
      doc: this.doc ? this.doc.toProtobufJSON(options) : null
    };
  }
}
export module RagListChunksResponse {
  /**
   * Standard JavaScript object representation for RagListChunksResponse
   */
  export interface AsObject {
    total: number;
    chunks?: RagChunk.AsObject[];
    doc?: RagDocument.AsObject;
  }

  /**
   * Protobuf JSON representation for RagListChunksResponse
   */
  export interface AsProtobufJSON {
    total: number;
    chunks: RagChunk.AsProtobufJSON[] | null;
    doc: RagDocument.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagAddChunkRequest
 */
export class RagAddChunkRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagAddChunkRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagAddChunkRequest();
    RagAddChunkRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagAddChunkRequest) {
    _instance.parent = _instance.parent || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.documentId = _instance.documentId || '';
    _instance.content = _instance.content || '';
    _instance.importantKeywords = _instance.importantKeywords || [];
    _instance.questions = _instance.questions || [];
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagAddChunkRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.datasetId = _reader.readString();
          break;
        case 3:
          _instance.documentId = _reader.readString();
          break;
        case 4:
          _instance.content = _reader.readString();
          break;
        case 5:
          (_instance.importantKeywords =
            _instance.importantKeywords || []).push(_reader.readString());
          break;
        case 6:
          (_instance.questions = _instance.questions || []).push(
            _reader.readString()
          );
          break;
        case 7:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagAddChunkRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagAddChunkRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.datasetId) {
      _writer.writeString(2, _instance.datasetId);
    }
    if (_instance.documentId) {
      _writer.writeString(3, _instance.documentId);
    }
    if (_instance.content) {
      _writer.writeString(4, _instance.content);
    }
    if (_instance.importantKeywords && _instance.importantKeywords.length) {
      _writer.writeRepeatedString(5, _instance.importantKeywords);
    }
    if (_instance.questions && _instance.questions.length) {
      _writer.writeRepeatedString(6, _instance.questions);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        7,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _datasetId: string;
  private _documentId: string;
  private _content: string;
  private _importantKeywords: string[];
  private _questions: string[];
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagAddChunkRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagAddChunkRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.datasetId = _value.datasetId;
    this.documentId = _value.documentId;
    this.content = _value.content;
    this.importantKeywords = (_value.importantKeywords || []).slice();
    this.questions = (_value.questions || []).slice();
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagAddChunkRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get documentId(): string {
    return this._documentId;
  }
  set documentId(value: string) {
    this._documentId = value;
  }
  get content(): string {
    return this._content;
  }
  set content(value: string) {
    this._content = value;
  }
  get importantKeywords(): string[] {
    return this._importantKeywords;
  }
  set importantKeywords(value: string[]) {
    this._importantKeywords = value;
  }
  get questions(): string[] {
    return this._questions;
  }
  set questions(value: string[]) {
    this._questions = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagAddChunkRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagAddChunkRequest.AsObject {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      documentId: this.documentId,
      content: this.content,
      importantKeywords: (this.importantKeywords || []).slice(),
      questions: (this.questions || []).slice(),
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagAddChunkRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      documentId: this.documentId,
      content: this.content,
      importantKeywords: (this.importantKeywords || []).slice(),
      questions: (this.questions || []).slice(),
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagAddChunkRequest {
  /**
   * Standard JavaScript object representation for RagAddChunkRequest
   */
  export interface AsObject {
    parent: string;
    datasetId: string;
    documentId: string;
    content: string;
    importantKeywords: string[];
    questions: string[];
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagAddChunkRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    datasetId: string;
    documentId: string;
    content: string;
    importantKeywords: string[];
    questions: string[];
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagAddChunkResponse
 */
export class RagAddChunkResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagAddChunkResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagAddChunkResponse();
    RagAddChunkResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagAddChunkResponse) {
    _instance.chunk = _instance.chunk || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagAddChunkResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.chunk = new RagChunk();
          _reader.readMessage(
            _instance.chunk,
            RagChunk.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagAddChunkResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagAddChunkResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.chunk) {
      _writer.writeMessage(
        1,
        _instance.chunk as any,
        RagChunk.serializeBinaryToWriter
      );
    }
  }

  private _chunk?: RagChunk;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagAddChunkResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagAddChunkResponse.AsObject>) {
    _value = _value || {};
    this.chunk = _value.chunk ? new RagChunk(_value.chunk) : undefined;
    RagAddChunkResponse.refineValues(this);
  }
  get chunk(): RagChunk | undefined {
    return this._chunk;
  }
  set chunk(value: RagChunk | undefined) {
    this._chunk = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagAddChunkResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagAddChunkResponse.AsObject {
    return {
      chunk: this.chunk ? this.chunk.toObject() : undefined
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
  ): RagAddChunkResponse.AsProtobufJSON {
    return {
      chunk: this.chunk ? this.chunk.toProtobufJSON(options) : null
    };
  }
}
export module RagAddChunkResponse {
  /**
   * Standard JavaScript object representation for RagAddChunkResponse
   */
  export interface AsObject {
    chunk?: RagChunk.AsObject;
  }

  /**
   * Protobuf JSON representation for RagAddChunkResponse
   */
  export interface AsProtobufJSON {
    chunk: RagChunk.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagRemoveChunksRequest
 */
export class RagRemoveChunksRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagRemoveChunksRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagRemoveChunksRequest();
    RagRemoveChunksRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagRemoveChunksRequest) {
    _instance.parent = _instance.parent || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.documentId = _instance.documentId || '';
    _instance.chunkIds = _instance.chunkIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagRemoveChunksRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.datasetId = _reader.readString();
          break;
        case 3:
          _instance.documentId = _reader.readString();
          break;
        case 4:
          (_instance.chunkIds = _instance.chunkIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagRemoveChunksRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagRemoveChunksRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.datasetId) {
      _writer.writeString(2, _instance.datasetId);
    }
    if (_instance.documentId) {
      _writer.writeString(3, _instance.documentId);
    }
    if (_instance.chunkIds && _instance.chunkIds.length) {
      _writer.writeRepeatedString(4, _instance.chunkIds);
    }
  }

  private _parent: string;
  private _datasetId: string;
  private _documentId: string;
  private _chunkIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagRemoveChunksRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagRemoveChunksRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.datasetId = _value.datasetId;
    this.documentId = _value.documentId;
    this.chunkIds = (_value.chunkIds || []).slice();
    RagRemoveChunksRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get documentId(): string {
    return this._documentId;
  }
  set documentId(value: string) {
    this._documentId = value;
  }
  get chunkIds(): string[] {
    return this._chunkIds;
  }
  set chunkIds(value: string[]) {
    this._chunkIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagRemoveChunksRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagRemoveChunksRequest.AsObject {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      documentId: this.documentId,
      chunkIds: (this.chunkIds || []).slice()
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
  ): RagRemoveChunksRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      documentId: this.documentId,
      chunkIds: (this.chunkIds || []).slice()
    };
  }
}
export module RagRemoveChunksRequest {
  /**
   * Standard JavaScript object representation for RagRemoveChunksRequest
   */
  export interface AsObject {
    parent: string;
    datasetId: string;
    documentId: string;
    chunkIds: string[];
  }

  /**
   * Protobuf JSON representation for RagRemoveChunksRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    datasetId: string;
    documentId: string;
    chunkIds: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagUpdateChunkRequest
 */
export class RagUpdateChunkRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagUpdateChunkRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagUpdateChunkRequest();
    RagUpdateChunkRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagUpdateChunkRequest) {
    _instance.parent = _instance.parent || '';
    _instance.datasetId = _instance.datasetId || '';
    _instance.documentId = _instance.documentId || '';
    _instance.chunkId = _instance.chunkId || '';
    _instance.content = _instance.content || '';
    _instance.importantKeywords = _instance.importantKeywords || [];
    _instance.questions = _instance.questions || [];
    _instance.available = _instance.available || false;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagUpdateChunkRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.datasetId = _reader.readString();
          break;
        case 3:
          _instance.documentId = _reader.readString();
          break;
        case 4:
          _instance.chunkId = _reader.readString();
          break;
        case 5:
          _instance.content = _reader.readString();
          break;
        case 6:
          (_instance.importantKeywords =
            _instance.importantKeywords || []).push(_reader.readString());
          break;
        case 7:
          (_instance.questions = _instance.questions || []).push(
            _reader.readString()
          );
          break;
        case 8:
          _instance.available = _reader.readBool();
          break;
        case 9:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagUpdateChunkRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagUpdateChunkRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.datasetId) {
      _writer.writeString(2, _instance.datasetId);
    }
    if (_instance.documentId) {
      _writer.writeString(3, _instance.documentId);
    }
    if (_instance.chunkId) {
      _writer.writeString(4, _instance.chunkId);
    }
    if (_instance.content) {
      _writer.writeString(5, _instance.content);
    }
    if (_instance.importantKeywords && _instance.importantKeywords.length) {
      _writer.writeRepeatedString(6, _instance.importantKeywords);
    }
    if (_instance.questions && _instance.questions.length) {
      _writer.writeRepeatedString(7, _instance.questions);
    }
    if (_instance.available) {
      _writer.writeBool(8, _instance.available);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        9,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _datasetId: string;
  private _documentId: string;
  private _chunkId: string;
  private _content: string;
  private _importantKeywords: string[];
  private _questions: string[];
  private _available: boolean;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagUpdateChunkRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagUpdateChunkRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.datasetId = _value.datasetId;
    this.documentId = _value.documentId;
    this.chunkId = _value.chunkId;
    this.content = _value.content;
    this.importantKeywords = (_value.importantKeywords || []).slice();
    this.questions = (_value.questions || []).slice();
    this.available = _value.available;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagUpdateChunkRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get datasetId(): string {
    return this._datasetId;
  }
  set datasetId(value: string) {
    this._datasetId = value;
  }
  get documentId(): string {
    return this._documentId;
  }
  set documentId(value: string) {
    this._documentId = value;
  }
  get chunkId(): string {
    return this._chunkId;
  }
  set chunkId(value: string) {
    this._chunkId = value;
  }
  get content(): string {
    return this._content;
  }
  set content(value: string) {
    this._content = value;
  }
  get importantKeywords(): string[] {
    return this._importantKeywords;
  }
  set importantKeywords(value: string[]) {
    this._importantKeywords = value;
  }
  get questions(): string[] {
    return this._questions;
  }
  set questions(value: string[]) {
    this._questions = value;
  }
  get available(): boolean {
    return this._available;
  }
  set available(value: boolean) {
    this._available = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagUpdateChunkRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagUpdateChunkRequest.AsObject {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      documentId: this.documentId,
      chunkId: this.chunkId,
      content: this.content,
      importantKeywords: (this.importantKeywords || []).slice(),
      questions: (this.questions || []).slice(),
      available: this.available,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagUpdateChunkRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      datasetId: this.datasetId,
      documentId: this.documentId,
      chunkId: this.chunkId,
      content: this.content,
      importantKeywords: (this.importantKeywords || []).slice(),
      questions: (this.questions || []).slice(),
      available: this.available,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagUpdateChunkRequest {
  /**
   * Standard JavaScript object representation for RagUpdateChunkRequest
   */
  export interface AsObject {
    parent: string;
    datasetId: string;
    documentId: string;
    chunkId: string;
    content: string;
    importantKeywords: string[];
    questions: string[];
    available: boolean;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagUpdateChunkRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    datasetId: string;
    documentId: string;
    chunkId: string;
    content: string;
    importantKeywords: string[];
    questions: string[];
    available: boolean;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagRetrievalRequest
 */
export class RagRetrievalRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagRetrievalRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagRetrievalRequest();
    RagRetrievalRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagRetrievalRequest) {
    _instance.parent = _instance.parent || '';
    _instance.pagination = _instance.pagination || undefined;
    _instance.datasetIds = _instance.datasetIds || [];
    _instance.question = _instance.question || '';
    _instance.documentIds = _instance.documentIds || [];
    _instance.similarityThreshold = _instance.similarityThreshold || 0;
    _instance.vectorSimilarityWeight = _instance.vectorSimilarityWeight || 0;
    _instance.topK = _instance.topK || 0;
    _instance.highlight = _instance.highlight || false;
    _instance.metadataCondition = _instance.metadataCondition || undefined;
    _instance.useKg = _instance.useKg || false;
    _instance.crossLanguages = _instance.crossLanguages || [];
    _instance.keyword = _instance.keyword || false;
    _instance.rerankId = _instance.rerankId || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagRetrievalRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.pagination = new RagPagination();
          _reader.readMessage(
            _instance.pagination,
            RagPagination.deserializeBinaryFromReader
          );
          break;
        case 3:
          (_instance.datasetIds = _instance.datasetIds || []).push(
            _reader.readString()
          );
          break;
        case 4:
          _instance.question = _reader.readString();
          break;
        case 5:
          (_instance.documentIds = _instance.documentIds || []).push(
            _reader.readString()
          );
          break;
        case 6:
          _instance.similarityThreshold = _reader.readFloat();
          break;
        case 7:
          _instance.vectorSimilarityWeight = _reader.readFloat();
          break;
        case 8:
          _instance.topK = _reader.readInt32();
          break;
        case 9:
          _instance.highlight = _reader.readBool();
          break;
        case 10:
          _instance.metadataCondition = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.metadataCondition,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.useKg = _reader.readBool();
          break;
        case 12:
          (_instance.crossLanguages = _instance.crossLanguages || []).push(
            _reader.readString()
          );
          break;
        case 13:
          _instance.keyword = _reader.readBool();
          break;
        case 14:
          _instance.rerankId = _reader.readString();
          break;
        case 15:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagRetrievalRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagRetrievalRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.pagination) {
      _writer.writeMessage(
        2,
        _instance.pagination as any,
        RagPagination.serializeBinaryToWriter
      );
    }
    if (_instance.datasetIds && _instance.datasetIds.length) {
      _writer.writeRepeatedString(3, _instance.datasetIds);
    }
    if (_instance.question) {
      _writer.writeString(4, _instance.question);
    }
    if (_instance.documentIds && _instance.documentIds.length) {
      _writer.writeRepeatedString(5, _instance.documentIds);
    }
    if (_instance.similarityThreshold) {
      _writer.writeFloat(6, _instance.similarityThreshold);
    }
    if (_instance.vectorSimilarityWeight) {
      _writer.writeFloat(7, _instance.vectorSimilarityWeight);
    }
    if (_instance.topK) {
      _writer.writeInt32(8, _instance.topK);
    }
    if (_instance.highlight) {
      _writer.writeBool(9, _instance.highlight);
    }
    if (_instance.metadataCondition) {
      _writer.writeMessage(
        10,
        _instance.metadataCondition as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.useKg) {
      _writer.writeBool(11, _instance.useKg);
    }
    if (_instance.crossLanguages && _instance.crossLanguages.length) {
      _writer.writeRepeatedString(12, _instance.crossLanguages);
    }
    if (_instance.keyword) {
      _writer.writeBool(13, _instance.keyword);
    }
    if (_instance.rerankId) {
      _writer.writeString(14, _instance.rerankId);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        15,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _pagination?: RagPagination;
  private _datasetIds: string[];
  private _question: string;
  private _documentIds: string[];
  private _similarityThreshold: number;
  private _vectorSimilarityWeight: number;
  private _topK: number;
  private _highlight: boolean;
  private _metadataCondition?: googleProtobuf001.Struct;
  private _useKg: boolean;
  private _crossLanguages: string[];
  private _keyword: boolean;
  private _rerankId: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagRetrievalRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagRetrievalRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.pagination = _value.pagination
      ? new RagPagination(_value.pagination)
      : undefined;
    this.datasetIds = (_value.datasetIds || []).slice();
    this.question = _value.question;
    this.documentIds = (_value.documentIds || []).slice();
    this.similarityThreshold = _value.similarityThreshold;
    this.vectorSimilarityWeight = _value.vectorSimilarityWeight;
    this.topK = _value.topK;
    this.highlight = _value.highlight;
    this.metadataCondition = _value.metadataCondition
      ? new googleProtobuf001.Struct(_value.metadataCondition)
      : undefined;
    this.useKg = _value.useKg;
    this.crossLanguages = (_value.crossLanguages || []).slice();
    this.keyword = _value.keyword;
    this.rerankId = _value.rerankId;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagRetrievalRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get pagination(): RagPagination | undefined {
    return this._pagination;
  }
  set pagination(value: RagPagination | undefined) {
    this._pagination = value;
  }
  get datasetIds(): string[] {
    return this._datasetIds;
  }
  set datasetIds(value: string[]) {
    this._datasetIds = value;
  }
  get question(): string {
    return this._question;
  }
  set question(value: string) {
    this._question = value;
  }
  get documentIds(): string[] {
    return this._documentIds;
  }
  set documentIds(value: string[]) {
    this._documentIds = value;
  }
  get similarityThreshold(): number {
    return this._similarityThreshold;
  }
  set similarityThreshold(value: number) {
    this._similarityThreshold = value;
  }
  get vectorSimilarityWeight(): number {
    return this._vectorSimilarityWeight;
  }
  set vectorSimilarityWeight(value: number) {
    this._vectorSimilarityWeight = value;
  }
  get topK(): number {
    return this._topK;
  }
  set topK(value: number) {
    this._topK = value;
  }
  get highlight(): boolean {
    return this._highlight;
  }
  set highlight(value: boolean) {
    this._highlight = value;
  }
  get metadataCondition(): googleProtobuf001.Struct | undefined {
    return this._metadataCondition;
  }
  set metadataCondition(value: googleProtobuf001.Struct | undefined) {
    this._metadataCondition = value;
  }
  get useKg(): boolean {
    return this._useKg;
  }
  set useKg(value: boolean) {
    this._useKg = value;
  }
  get crossLanguages(): string[] {
    return this._crossLanguages;
  }
  set crossLanguages(value: string[]) {
    this._crossLanguages = value;
  }
  get keyword(): boolean {
    return this._keyword;
  }
  set keyword(value: boolean) {
    this._keyword = value;
  }
  get rerankId(): string {
    return this._rerankId;
  }
  set rerankId(value: string) {
    this._rerankId = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagRetrievalRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagRetrievalRequest.AsObject {
    return {
      parent: this.parent,
      pagination: this.pagination ? this.pagination.toObject() : undefined,
      datasetIds: (this.datasetIds || []).slice(),
      question: this.question,
      documentIds: (this.documentIds || []).slice(),
      similarityThreshold: this.similarityThreshold,
      vectorSimilarityWeight: this.vectorSimilarityWeight,
      topK: this.topK,
      highlight: this.highlight,
      metadataCondition: this.metadataCondition
        ? this.metadataCondition.toObject()
        : undefined,
      useKg: this.useKg,
      crossLanguages: (this.crossLanguages || []).slice(),
      keyword: this.keyword,
      rerankId: this.rerankId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagRetrievalRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      pagination: this.pagination
        ? this.pagination.toProtobufJSON(options)
        : null,
      datasetIds: (this.datasetIds || []).slice(),
      question: this.question,
      documentIds: (this.documentIds || []).slice(),
      similarityThreshold: this.similarityThreshold,
      vectorSimilarityWeight: this.vectorSimilarityWeight,
      topK: this.topK,
      highlight: this.highlight,
      metadataCondition: this.metadataCondition
        ? this.metadataCondition.toProtobufJSON(options)
        : null,
      useKg: this.useKg,
      crossLanguages: (this.crossLanguages || []).slice(),
      keyword: this.keyword,
      rerankId: this.rerankId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagRetrievalRequest {
  /**
   * Standard JavaScript object representation for RagRetrievalRequest
   */
  export interface AsObject {
    parent: string;
    pagination?: RagPagination.AsObject;
    datasetIds: string[];
    question: string;
    documentIds: string[];
    similarityThreshold: number;
    vectorSimilarityWeight: number;
    topK: number;
    highlight: boolean;
    metadataCondition?: googleProtobuf001.Struct.AsObject;
    useKg: boolean;
    crossLanguages: string[];
    keyword: boolean;
    rerankId: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagRetrievalRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    pagination: RagPagination.AsProtobufJSON | null;
    datasetIds: string[];
    question: string;
    documentIds: string[];
    similarityThreshold: number;
    vectorSimilarityWeight: number;
    topK: number;
    highlight: boolean;
    metadataCondition: googleProtobuf001.Struct.AsProtobufJSON | null;
    useKg: boolean;
    crossLanguages: string[];
    keyword: boolean;
    rerankId: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagRetrievalResponse
 */
export class RagRetrievalResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagRetrievalResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagRetrievalResponse();
    RagRetrievalResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagRetrievalResponse) {
    _instance.chunks = _instance.chunks || [];
    _instance.docAggs = _instance.docAggs || [];
    _instance.total = _instance.total || 0;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagRetrievalResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagChunk();
          _reader.readMessage(
            messageInitializer1,
            RagChunk.deserializeBinaryFromReader
          );
          (_instance.chunks = _instance.chunks || []).push(messageInitializer1);
          break;
        case 2:
          const messageInitializer2 = new googleProtobuf001.Struct();
          _reader.readMessage(
            messageInitializer2,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          (_instance.docAggs = _instance.docAggs || []).push(
            messageInitializer2
          );
          break;
        case 3:
          _instance.total = _reader.readInt32();
          break;
        case 4:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagRetrievalResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagRetrievalResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.chunks && _instance.chunks.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.chunks as any,
        RagChunk.serializeBinaryToWriter
      );
    }
    if (_instance.docAggs && _instance.docAggs.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.docAggs as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt32(3, _instance.total);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        4,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _chunks?: RagChunk[];
  private _docAggs?: googleProtobuf001.Struct[];
  private _total: number;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagRetrievalResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagRetrievalResponse.AsObject>) {
    _value = _value || {};
    this.chunks = (_value.chunks || []).map(m => new RagChunk(m));
    this.docAggs = (_value.docAggs || []).map(
      m => new googleProtobuf001.Struct(m)
    );
    this.total = _value.total;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagRetrievalResponse.refineValues(this);
  }
  get chunks(): RagChunk[] | undefined {
    return this._chunks;
  }
  set chunks(value: RagChunk[] | undefined) {
    this._chunks = value;
  }
  get docAggs(): googleProtobuf001.Struct[] | undefined {
    return this._docAggs;
  }
  set docAggs(value: googleProtobuf001.Struct[] | undefined) {
    this._docAggs = value;
  }
  get total(): number {
    return this._total;
  }
  set total(value: number) {
    this._total = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagRetrievalResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagRetrievalResponse.AsObject {
    return {
      chunks: (this.chunks || []).map(m => m.toObject()),
      docAggs: (this.docAggs || []).map(m => m.toObject()),
      total: this.total,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagRetrievalResponse.AsProtobufJSON {
    return {
      chunks: (this.chunks || []).map(m => m.toProtobufJSON(options)),
      docAggs: (this.docAggs || []).map(m => m.toProtobufJSON(options)),
      total: this.total,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagRetrievalResponse {
  /**
   * Standard JavaScript object representation for RagRetrievalResponse
   */
  export interface AsObject {
    chunks?: RagChunk.AsObject[];
    docAggs?: googleProtobuf001.Struct.AsObject[];
    total: number;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagRetrievalResponse
   */
  export interface AsProtobufJSON {
    chunks: RagChunk.AsProtobufJSON[] | null;
    docAggs: googleProtobuf001.Struct.AsProtobufJSON[] | null;
    total: number;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagChat
 */
export class RagChat implements GrpcMessage {
  static id = 'ondewo.nlu.RagChat';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagChat();
    RagChat.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagChat) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.avatar = _instance.avatar || '';
    _instance.datasetIds = _instance.datasetIds || [];
    _instance.datasets = _instance.datasets || [];
    _instance.llm = _instance.llm || undefined;
    _instance.prompt = _instance.prompt || undefined;
    _instance.createTime = _instance.createTime || '0';
    _instance.createDate = _instance.createDate || '';
    _instance.updateTime = _instance.updateTime || '0';
    _instance.updateDate = _instance.updateDate || '';
    _instance.doRefer = _instance.doRefer || '';
    _instance.language = _instance.language || '';
    _instance.promptType = _instance.promptType || '';
    _instance.status = _instance.status || '';
    _instance.tenantId = _instance.tenantId || '';
    _instance.topK = _instance.topK || 0;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagChat,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.description = _reader.readString();
          break;
        case 4:
          _instance.avatar = _reader.readString();
          break;
        case 5:
          (_instance.datasetIds = _instance.datasetIds || []).push(
            _reader.readString()
          );
          break;
        case 6:
          const messageInitializer6 = new RagDataset();
          _reader.readMessage(
            messageInitializer6,
            RagDataset.deserializeBinaryFromReader
          );
          (_instance.datasets = _instance.datasets || []).push(
            messageInitializer6
          );
          break;
        case 7:
          _instance.llm = new RagLLMSetting();
          _reader.readMessage(
            _instance.llm,
            RagLLMSetting.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.prompt = new RagPromptConfig();
          _reader.readMessage(
            _instance.prompt,
            RagPromptConfig.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.createTime = _reader.readInt64String();
          break;
        case 10:
          _instance.createDate = _reader.readString();
          break;
        case 11:
          _instance.updateTime = _reader.readInt64String();
          break;
        case 12:
          _instance.updateDate = _reader.readString();
          break;
        case 13:
          _instance.doRefer = _reader.readString();
          break;
        case 14:
          _instance.language = _reader.readString();
          break;
        case 15:
          _instance.promptType = _reader.readString();
          break;
        case 16:
          _instance.status = _reader.readString();
          break;
        case 17:
          _instance.tenantId = _reader.readString();
          break;
        case 18:
          _instance.topK = _reader.readInt32();
          break;
        case 19:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagChat.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: RagChat, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (_instance.avatar) {
      _writer.writeString(4, _instance.avatar);
    }
    if (_instance.datasetIds && _instance.datasetIds.length) {
      _writer.writeRepeatedString(5, _instance.datasetIds);
    }
    if (_instance.datasets && _instance.datasets.length) {
      _writer.writeRepeatedMessage(
        6,
        _instance.datasets as any,
        RagDataset.serializeBinaryToWriter
      );
    }
    if (_instance.llm) {
      _writer.writeMessage(
        7,
        _instance.llm as any,
        RagLLMSetting.serializeBinaryToWriter
      );
    }
    if (_instance.prompt) {
      _writer.writeMessage(
        8,
        _instance.prompt as any,
        RagPromptConfig.serializeBinaryToWriter
      );
    }
    if (_instance.createTime) {
      _writer.writeInt64String(9, _instance.createTime);
    }
    if (_instance.createDate) {
      _writer.writeString(10, _instance.createDate);
    }
    if (_instance.updateTime) {
      _writer.writeInt64String(11, _instance.updateTime);
    }
    if (_instance.updateDate) {
      _writer.writeString(12, _instance.updateDate);
    }
    if (_instance.doRefer) {
      _writer.writeString(13, _instance.doRefer);
    }
    if (_instance.language) {
      _writer.writeString(14, _instance.language);
    }
    if (_instance.promptType) {
      _writer.writeString(15, _instance.promptType);
    }
    if (_instance.status) {
      _writer.writeString(16, _instance.status);
    }
    if (_instance.tenantId) {
      _writer.writeString(17, _instance.tenantId);
    }
    if (_instance.topK) {
      _writer.writeInt32(18, _instance.topK);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        19,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _id: string;
  private _name: string;
  private _description: string;
  private _avatar: string;
  private _datasetIds: string[];
  private _datasets?: RagDataset[];
  private _llm?: RagLLMSetting;
  private _prompt?: RagPromptConfig;
  private _createTime: string;
  private _createDate: string;
  private _updateTime: string;
  private _updateDate: string;
  private _doRefer: string;
  private _language: string;
  private _promptType: string;
  private _status: string;
  private _tenantId: string;
  private _topK: number;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagChat to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagChat.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.description = _value.description;
    this.avatar = _value.avatar;
    this.datasetIds = (_value.datasetIds || []).slice();
    this.datasets = (_value.datasets || []).map(m => new RagDataset(m));
    this.llm = _value.llm ? new RagLLMSetting(_value.llm) : undefined;
    this.prompt = _value.prompt
      ? new RagPromptConfig(_value.prompt)
      : undefined;
    this.createTime = _value.createTime;
    this.createDate = _value.createDate;
    this.updateTime = _value.updateTime;
    this.updateDate = _value.updateDate;
    this.doRefer = _value.doRefer;
    this.language = _value.language;
    this.promptType = _value.promptType;
    this.status = _value.status;
    this.tenantId = _value.tenantId;
    this.topK = _value.topK;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagChat.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get avatar(): string {
    return this._avatar;
  }
  set avatar(value: string) {
    this._avatar = value;
  }
  get datasetIds(): string[] {
    return this._datasetIds;
  }
  set datasetIds(value: string[]) {
    this._datasetIds = value;
  }
  get datasets(): RagDataset[] | undefined {
    return this._datasets;
  }
  set datasets(value: RagDataset[] | undefined) {
    this._datasets = value;
  }
  get llm(): RagLLMSetting | undefined {
    return this._llm;
  }
  set llm(value: RagLLMSetting | undefined) {
    this._llm = value;
  }
  get prompt(): RagPromptConfig | undefined {
    return this._prompt;
  }
  set prompt(value: RagPromptConfig | undefined) {
    this._prompt = value;
  }
  get createTime(): string {
    return this._createTime;
  }
  set createTime(value: string) {
    this._createTime = value;
  }
  get createDate(): string {
    return this._createDate;
  }
  set createDate(value: string) {
    this._createDate = value;
  }
  get updateTime(): string {
    return this._updateTime;
  }
  set updateTime(value: string) {
    this._updateTime = value;
  }
  get updateDate(): string {
    return this._updateDate;
  }
  set updateDate(value: string) {
    this._updateDate = value;
  }
  get doRefer(): string {
    return this._doRefer;
  }
  set doRefer(value: string) {
    this._doRefer = value;
  }
  get language(): string {
    return this._language;
  }
  set language(value: string) {
    this._language = value;
  }
  get promptType(): string {
    return this._promptType;
  }
  set promptType(value: string) {
    this._promptType = value;
  }
  get status(): string {
    return this._status;
  }
  set status(value: string) {
    this._status = value;
  }
  get tenantId(): string {
    return this._tenantId;
  }
  set tenantId(value: string) {
    this._tenantId = value;
  }
  get topK(): number {
    return this._topK;
  }
  set topK(value: number) {
    this._topK = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagChat.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagChat.AsObject {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      avatar: this.avatar,
      datasetIds: (this.datasetIds || []).slice(),
      datasets: (this.datasets || []).map(m => m.toObject()),
      llm: this.llm ? this.llm.toObject() : undefined,
      prompt: this.prompt ? this.prompt.toObject() : undefined,
      createTime: this.createTime,
      createDate: this.createDate,
      updateTime: this.updateTime,
      updateDate: this.updateDate,
      doRefer: this.doRefer,
      language: this.language,
      promptType: this.promptType,
      status: this.status,
      tenantId: this.tenantId,
      topK: this.topK,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagChat.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      avatar: this.avatar,
      datasetIds: (this.datasetIds || []).slice(),
      datasets: (this.datasets || []).map(m => m.toProtobufJSON(options)),
      llm: this.llm ? this.llm.toProtobufJSON(options) : null,
      prompt: this.prompt ? this.prompt.toProtobufJSON(options) : null,
      createTime: this.createTime,
      createDate: this.createDate,
      updateTime: this.updateTime,
      updateDate: this.updateDate,
      doRefer: this.doRefer,
      language: this.language,
      promptType: this.promptType,
      status: this.status,
      tenantId: this.tenantId,
      topK: this.topK,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagChat {
  /**
   * Standard JavaScript object representation for RagChat
   */
  export interface AsObject {
    id: string;
    name: string;
    description: string;
    avatar: string;
    datasetIds: string[];
    datasets?: RagDataset.AsObject[];
    llm?: RagLLMSetting.AsObject;
    prompt?: RagPromptConfig.AsObject;
    createTime: string;
    createDate: string;
    updateTime: string;
    updateDate: string;
    doRefer: string;
    language: string;
    promptType: string;
    status: string;
    tenantId: string;
    topK: number;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagChat
   */
  export interface AsProtobufJSON {
    id: string;
    name: string;
    description: string;
    avatar: string;
    datasetIds: string[];
    datasets: RagDataset.AsProtobufJSON[] | null;
    llm: RagLLMSetting.AsProtobufJSON | null;
    prompt: RagPromptConfig.AsProtobufJSON | null;
    createTime: string;
    createDate: string;
    updateTime: string;
    updateDate: string;
    doRefer: string;
    language: string;
    promptType: string;
    status: string;
    tenantId: string;
    topK: number;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagLLMSetting
 */
export class RagLLMSetting implements GrpcMessage {
  static id = 'ondewo.nlu.RagLLMSetting';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagLLMSetting();
    RagLLMSetting.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagLLMSetting) {
    _instance.modelName = _instance.modelName || '';
    _instance.temperature = _instance.temperature || 0;
    _instance.topP = _instance.topP || 0;
    _instance.frequencyPenalty = _instance.frequencyPenalty || 0;
    _instance.presencePenalty = _instance.presencePenalty || 0;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagLLMSetting,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.modelName = _reader.readString();
          break;
        case 2:
          _instance.temperature = _reader.readFloat();
          break;
        case 3:
          _instance.topP = _reader.readFloat();
          break;
        case 4:
          _instance.frequencyPenalty = _reader.readFloat();
          break;
        case 5:
          _instance.presencePenalty = _reader.readFloat();
          break;
        case 6:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagLLMSetting.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagLLMSetting,
    _writer: BinaryWriter
  ) {
    if (_instance.modelName) {
      _writer.writeString(1, _instance.modelName);
    }
    if (_instance.temperature) {
      _writer.writeFloat(2, _instance.temperature);
    }
    if (_instance.topP) {
      _writer.writeFloat(3, _instance.topP);
    }
    if (_instance.frequencyPenalty) {
      _writer.writeFloat(4, _instance.frequencyPenalty);
    }
    if (_instance.presencePenalty) {
      _writer.writeFloat(5, _instance.presencePenalty);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        6,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _modelName: string;
  private _temperature: number;
  private _topP: number;
  private _frequencyPenalty: number;
  private _presencePenalty: number;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagLLMSetting to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagLLMSetting.AsObject>) {
    _value = _value || {};
    this.modelName = _value.modelName;
    this.temperature = _value.temperature;
    this.topP = _value.topP;
    this.frequencyPenalty = _value.frequencyPenalty;
    this.presencePenalty = _value.presencePenalty;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagLLMSetting.refineValues(this);
  }
  get modelName(): string {
    return this._modelName;
  }
  set modelName(value: string) {
    this._modelName = value;
  }
  get temperature(): number {
    return this._temperature;
  }
  set temperature(value: number) {
    this._temperature = value;
  }
  get topP(): number {
    return this._topP;
  }
  set topP(value: number) {
    this._topP = value;
  }
  get frequencyPenalty(): number {
    return this._frequencyPenalty;
  }
  set frequencyPenalty(value: number) {
    this._frequencyPenalty = value;
  }
  get presencePenalty(): number {
    return this._presencePenalty;
  }
  set presencePenalty(value: number) {
    this._presencePenalty = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagLLMSetting.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagLLMSetting.AsObject {
    return {
      modelName: this.modelName,
      temperature: this.temperature,
      topP: this.topP,
      frequencyPenalty: this.frequencyPenalty,
      presencePenalty: this.presencePenalty,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagLLMSetting.AsProtobufJSON {
    return {
      modelName: this.modelName,
      temperature: this.temperature,
      topP: this.topP,
      frequencyPenalty: this.frequencyPenalty,
      presencePenalty: this.presencePenalty,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagLLMSetting {
  /**
   * Standard JavaScript object representation for RagLLMSetting
   */
  export interface AsObject {
    modelName: string;
    temperature: number;
    topP: number;
    frequencyPenalty: number;
    presencePenalty: number;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagLLMSetting
   */
  export interface AsProtobufJSON {
    modelName: string;
    temperature: number;
    topP: number;
    frequencyPenalty: number;
    presencePenalty: number;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagPromptConfig
 */
export class RagPromptConfig implements GrpcMessage {
  static id = 'ondewo.nlu.RagPromptConfig';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagPromptConfig();
    RagPromptConfig.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagPromptConfig) {
    _instance.prompt = _instance.prompt || '';
    _instance.variables = _instance.variables || [];
    _instance.opener = _instance.opener || '';
    _instance.showQuote = _instance.showQuote || false;
    _instance.emptyResponse = _instance.emptyResponse || '';
    _instance.tts = _instance.tts || false;
    _instance.refineMultiturn = _instance.refineMultiturn || false;
    _instance.similarityThreshold = _instance.similarityThreshold || 0;
    _instance.keywordsSimilarityWeight =
      _instance.keywordsSimilarityWeight || 0;
    _instance.topN = _instance.topN || 0;
    _instance.topK = _instance.topK || 0;
    _instance.rerankModel = _instance.rerankModel || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagPromptConfig,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.prompt = _reader.readString();
          break;
        case 2:
          const messageInitializer2 = new RagPromptVariable();
          _reader.readMessage(
            messageInitializer2,
            RagPromptVariable.deserializeBinaryFromReader
          );
          (_instance.variables = _instance.variables || []).push(
            messageInitializer2
          );
          break;
        case 3:
          _instance.opener = _reader.readString();
          break;
        case 4:
          _instance.showQuote = _reader.readBool();
          break;
        case 5:
          _instance.emptyResponse = _reader.readString();
          break;
        case 6:
          _instance.tts = _reader.readBool();
          break;
        case 7:
          _instance.refineMultiturn = _reader.readBool();
          break;
        case 8:
          _instance.similarityThreshold = _reader.readFloat();
          break;
        case 9:
          _instance.keywordsSimilarityWeight = _reader.readFloat();
          break;
        case 10:
          _instance.topN = _reader.readInt32();
          break;
        case 11:
          _instance.topK = _reader.readInt32();
          break;
        case 12:
          _instance.rerankModel = _reader.readString();
          break;
        case 13:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagPromptConfig.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagPromptConfig,
    _writer: BinaryWriter
  ) {
    if (_instance.prompt) {
      _writer.writeString(1, _instance.prompt);
    }
    if (_instance.variables && _instance.variables.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.variables as any,
        RagPromptVariable.serializeBinaryToWriter
      );
    }
    if (_instance.opener) {
      _writer.writeString(3, _instance.opener);
    }
    if (_instance.showQuote) {
      _writer.writeBool(4, _instance.showQuote);
    }
    if (_instance.emptyResponse) {
      _writer.writeString(5, _instance.emptyResponse);
    }
    if (_instance.tts) {
      _writer.writeBool(6, _instance.tts);
    }
    if (_instance.refineMultiturn) {
      _writer.writeBool(7, _instance.refineMultiturn);
    }
    if (_instance.similarityThreshold) {
      _writer.writeFloat(8, _instance.similarityThreshold);
    }
    if (_instance.keywordsSimilarityWeight) {
      _writer.writeFloat(9, _instance.keywordsSimilarityWeight);
    }
    if (_instance.topN) {
      _writer.writeInt32(10, _instance.topN);
    }
    if (_instance.topK) {
      _writer.writeInt32(11, _instance.topK);
    }
    if (_instance.rerankModel) {
      _writer.writeString(12, _instance.rerankModel);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        13,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _prompt: string;
  private _variables?: RagPromptVariable[];
  private _opener: string;
  private _showQuote: boolean;
  private _emptyResponse: string;
  private _tts: boolean;
  private _refineMultiturn: boolean;
  private _similarityThreshold: number;
  private _keywordsSimilarityWeight: number;
  private _topN: number;
  private _topK: number;
  private _rerankModel: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagPromptConfig to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagPromptConfig.AsObject>) {
    _value = _value || {};
    this.prompt = _value.prompt;
    this.variables = (_value.variables || []).map(
      m => new RagPromptVariable(m)
    );
    this.opener = _value.opener;
    this.showQuote = _value.showQuote;
    this.emptyResponse = _value.emptyResponse;
    this.tts = _value.tts;
    this.refineMultiturn = _value.refineMultiturn;
    this.similarityThreshold = _value.similarityThreshold;
    this.keywordsSimilarityWeight = _value.keywordsSimilarityWeight;
    this.topN = _value.topN;
    this.topK = _value.topK;
    this.rerankModel = _value.rerankModel;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagPromptConfig.refineValues(this);
  }
  get prompt(): string {
    return this._prompt;
  }
  set prompt(value: string) {
    this._prompt = value;
  }
  get variables(): RagPromptVariable[] | undefined {
    return this._variables;
  }
  set variables(value: RagPromptVariable[] | undefined) {
    this._variables = value;
  }
  get opener(): string {
    return this._opener;
  }
  set opener(value: string) {
    this._opener = value;
  }
  get showQuote(): boolean {
    return this._showQuote;
  }
  set showQuote(value: boolean) {
    this._showQuote = value;
  }
  get emptyResponse(): string {
    return this._emptyResponse;
  }
  set emptyResponse(value: string) {
    this._emptyResponse = value;
  }
  get tts(): boolean {
    return this._tts;
  }
  set tts(value: boolean) {
    this._tts = value;
  }
  get refineMultiturn(): boolean {
    return this._refineMultiturn;
  }
  set refineMultiturn(value: boolean) {
    this._refineMultiturn = value;
  }
  get similarityThreshold(): number {
    return this._similarityThreshold;
  }
  set similarityThreshold(value: number) {
    this._similarityThreshold = value;
  }
  get keywordsSimilarityWeight(): number {
    return this._keywordsSimilarityWeight;
  }
  set keywordsSimilarityWeight(value: number) {
    this._keywordsSimilarityWeight = value;
  }
  get topN(): number {
    return this._topN;
  }
  set topN(value: number) {
    this._topN = value;
  }
  get topK(): number {
    return this._topK;
  }
  set topK(value: number) {
    this._topK = value;
  }
  get rerankModel(): string {
    return this._rerankModel;
  }
  set rerankModel(value: string) {
    this._rerankModel = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagPromptConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagPromptConfig.AsObject {
    return {
      prompt: this.prompt,
      variables: (this.variables || []).map(m => m.toObject()),
      opener: this.opener,
      showQuote: this.showQuote,
      emptyResponse: this.emptyResponse,
      tts: this.tts,
      refineMultiturn: this.refineMultiturn,
      similarityThreshold: this.similarityThreshold,
      keywordsSimilarityWeight: this.keywordsSimilarityWeight,
      topN: this.topN,
      topK: this.topK,
      rerankModel: this.rerankModel,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagPromptConfig.AsProtobufJSON {
    return {
      prompt: this.prompt,
      variables: (this.variables || []).map(m => m.toProtobufJSON(options)),
      opener: this.opener,
      showQuote: this.showQuote,
      emptyResponse: this.emptyResponse,
      tts: this.tts,
      refineMultiturn: this.refineMultiturn,
      similarityThreshold: this.similarityThreshold,
      keywordsSimilarityWeight: this.keywordsSimilarityWeight,
      topN: this.topN,
      topK: this.topK,
      rerankModel: this.rerankModel,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagPromptConfig {
  /**
   * Standard JavaScript object representation for RagPromptConfig
   */
  export interface AsObject {
    prompt: string;
    variables?: RagPromptVariable.AsObject[];
    opener: string;
    showQuote: boolean;
    emptyResponse: string;
    tts: boolean;
    refineMultiturn: boolean;
    similarityThreshold: number;
    keywordsSimilarityWeight: number;
    topN: number;
    topK: number;
    rerankModel: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagPromptConfig
   */
  export interface AsProtobufJSON {
    prompt: string;
    variables: RagPromptVariable.AsProtobufJSON[] | null;
    opener: string;
    showQuote: boolean;
    emptyResponse: string;
    tts: boolean;
    refineMultiturn: boolean;
    similarityThreshold: number;
    keywordsSimilarityWeight: number;
    topN: number;
    topK: number;
    rerankModel: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagPromptVariable
 */
export class RagPromptVariable implements GrpcMessage {
  static id = 'ondewo.nlu.RagPromptVariable';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagPromptVariable();
    RagPromptVariable.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagPromptVariable) {
    _instance.key = _instance.key || '';
    _instance.optional = _instance.optional || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagPromptVariable,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.key = _reader.readString();
          break;
        case 2:
          _instance.optional = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    RagPromptVariable.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagPromptVariable,
    _writer: BinaryWriter
  ) {
    if (_instance.key) {
      _writer.writeString(1, _instance.key);
    }
    if (_instance.optional) {
      _writer.writeBool(2, _instance.optional);
    }
  }

  private _key: string;
  private _optional: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagPromptVariable to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagPromptVariable.AsObject>) {
    _value = _value || {};
    this.key = _value.key;
    this.optional = _value.optional;
    RagPromptVariable.refineValues(this);
  }
  get key(): string {
    return this._key;
  }
  set key(value: string) {
    this._key = value;
  }
  get optional(): boolean {
    return this._optional;
  }
  set optional(value: boolean) {
    this._optional = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagPromptVariable.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagPromptVariable.AsObject {
    return {
      key: this.key,
      optional: this.optional
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
  ): RagPromptVariable.AsProtobufJSON {
    return {
      key: this.key,
      optional: this.optional
    };
  }
}
export module RagPromptVariable {
  /**
   * Standard JavaScript object representation for RagPromptVariable
   */
  export interface AsObject {
    key: string;
    optional: boolean;
  }

  /**
   * Protobuf JSON representation for RagPromptVariable
   */
  export interface AsProtobufJSON {
    key: string;
    optional: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCreateChatRequest
 */
export class RagCreateChatRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagCreateChatRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCreateChatRequest();
    RagCreateChatRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCreateChatRequest) {
    _instance.parent = _instance.parent || '';
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.avatar = _instance.avatar || '';
    _instance.datasetIds = _instance.datasetIds || [];
    _instance.llm = _instance.llm || undefined;
    _instance.prompt = _instance.prompt || undefined;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCreateChatRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.description = _reader.readString();
          break;
        case 4:
          _instance.avatar = _reader.readString();
          break;
        case 5:
          (_instance.datasetIds = _instance.datasetIds || []).push(
            _reader.readString()
          );
          break;
        case 6:
          _instance.llm = new RagLLMSetting();
          _reader.readMessage(
            _instance.llm,
            RagLLMSetting.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.prompt = new RagPromptConfig();
          _reader.readMessage(
            _instance.prompt,
            RagPromptConfig.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagCreateChatRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCreateChatRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (_instance.avatar) {
      _writer.writeString(4, _instance.avatar);
    }
    if (_instance.datasetIds && _instance.datasetIds.length) {
      _writer.writeRepeatedString(5, _instance.datasetIds);
    }
    if (_instance.llm) {
      _writer.writeMessage(
        6,
        _instance.llm as any,
        RagLLMSetting.serializeBinaryToWriter
      );
    }
    if (_instance.prompt) {
      _writer.writeMessage(
        7,
        _instance.prompt as any,
        RagPromptConfig.serializeBinaryToWriter
      );
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        8,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _name: string;
  private _description: string;
  private _avatar: string;
  private _datasetIds: string[];
  private _llm?: RagLLMSetting;
  private _prompt?: RagPromptConfig;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCreateChatRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCreateChatRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.name = _value.name;
    this.description = _value.description;
    this.avatar = _value.avatar;
    this.datasetIds = (_value.datasetIds || []).slice();
    this.llm = _value.llm ? new RagLLMSetting(_value.llm) : undefined;
    this.prompt = _value.prompt
      ? new RagPromptConfig(_value.prompt)
      : undefined;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagCreateChatRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get avatar(): string {
    return this._avatar;
  }
  set avatar(value: string) {
    this._avatar = value;
  }
  get datasetIds(): string[] {
    return this._datasetIds;
  }
  set datasetIds(value: string[]) {
    this._datasetIds = value;
  }
  get llm(): RagLLMSetting | undefined {
    return this._llm;
  }
  set llm(value: RagLLMSetting | undefined) {
    this._llm = value;
  }
  get prompt(): RagPromptConfig | undefined {
    return this._prompt;
  }
  set prompt(value: RagPromptConfig | undefined) {
    this._prompt = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCreateChatRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCreateChatRequest.AsObject {
    return {
      parent: this.parent,
      name: this.name,
      description: this.description,
      avatar: this.avatar,
      datasetIds: (this.datasetIds || []).slice(),
      llm: this.llm ? this.llm.toObject() : undefined,
      prompt: this.prompt ? this.prompt.toObject() : undefined,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagCreateChatRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      name: this.name,
      description: this.description,
      avatar: this.avatar,
      datasetIds: (this.datasetIds || []).slice(),
      llm: this.llm ? this.llm.toProtobufJSON(options) : null,
      prompt: this.prompt ? this.prompt.toProtobufJSON(options) : null,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagCreateChatRequest {
  /**
   * Standard JavaScript object representation for RagCreateChatRequest
   */
  export interface AsObject {
    parent: string;
    name: string;
    description: string;
    avatar: string;
    datasetIds: string[];
    llm?: RagLLMSetting.AsObject;
    prompt?: RagPromptConfig.AsObject;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagCreateChatRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    name: string;
    description: string;
    avatar: string;
    datasetIds: string[];
    llm: RagLLMSetting.AsProtobufJSON | null;
    prompt: RagPromptConfig.AsProtobufJSON | null;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagUpdateChatRequest
 */
export class RagUpdateChatRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagUpdateChatRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagUpdateChatRequest();
    RagUpdateChatRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagUpdateChatRequest) {
    _instance.parent = _instance.parent || '';
    _instance.chatId = _instance.chatId || '';
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.avatar = _instance.avatar || '';
    _instance.datasetIds = _instance.datasetIds || [];
    _instance.llm = _instance.llm || undefined;
    _instance.prompt = _instance.prompt || undefined;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagUpdateChatRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.chatId = _reader.readString();
          break;
        case 3:
          _instance.name = _reader.readString();
          break;
        case 4:
          _instance.description = _reader.readString();
          break;
        case 5:
          _instance.avatar = _reader.readString();
          break;
        case 6:
          (_instance.datasetIds = _instance.datasetIds || []).push(
            _reader.readString()
          );
          break;
        case 7:
          _instance.llm = new RagLLMSetting();
          _reader.readMessage(
            _instance.llm,
            RagLLMSetting.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.prompt = new RagPromptConfig();
          _reader.readMessage(
            _instance.prompt,
            RagPromptConfig.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagUpdateChatRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagUpdateChatRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.chatId) {
      _writer.writeString(2, _instance.chatId);
    }
    if (_instance.name) {
      _writer.writeString(3, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(4, _instance.description);
    }
    if (_instance.avatar) {
      _writer.writeString(5, _instance.avatar);
    }
    if (_instance.datasetIds && _instance.datasetIds.length) {
      _writer.writeRepeatedString(6, _instance.datasetIds);
    }
    if (_instance.llm) {
      _writer.writeMessage(
        7,
        _instance.llm as any,
        RagLLMSetting.serializeBinaryToWriter
      );
    }
    if (_instance.prompt) {
      _writer.writeMessage(
        8,
        _instance.prompt as any,
        RagPromptConfig.serializeBinaryToWriter
      );
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        9,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _chatId: string;
  private _name: string;
  private _description: string;
  private _avatar: string;
  private _datasetIds: string[];
  private _llm?: RagLLMSetting;
  private _prompt?: RagPromptConfig;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagUpdateChatRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagUpdateChatRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.chatId = _value.chatId;
    this.name = _value.name;
    this.description = _value.description;
    this.avatar = _value.avatar;
    this.datasetIds = (_value.datasetIds || []).slice();
    this.llm = _value.llm ? new RagLLMSetting(_value.llm) : undefined;
    this.prompt = _value.prompt
      ? new RagPromptConfig(_value.prompt)
      : undefined;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagUpdateChatRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get chatId(): string {
    return this._chatId;
  }
  set chatId(value: string) {
    this._chatId = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get avatar(): string {
    return this._avatar;
  }
  set avatar(value: string) {
    this._avatar = value;
  }
  get datasetIds(): string[] {
    return this._datasetIds;
  }
  set datasetIds(value: string[]) {
    this._datasetIds = value;
  }
  get llm(): RagLLMSetting | undefined {
    return this._llm;
  }
  set llm(value: RagLLMSetting | undefined) {
    this._llm = value;
  }
  get prompt(): RagPromptConfig | undefined {
    return this._prompt;
  }
  set prompt(value: RagPromptConfig | undefined) {
    this._prompt = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagUpdateChatRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagUpdateChatRequest.AsObject {
    return {
      parent: this.parent,
      chatId: this.chatId,
      name: this.name,
      description: this.description,
      avatar: this.avatar,
      datasetIds: (this.datasetIds || []).slice(),
      llm: this.llm ? this.llm.toObject() : undefined,
      prompt: this.prompt ? this.prompt.toObject() : undefined,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagUpdateChatRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      chatId: this.chatId,
      name: this.name,
      description: this.description,
      avatar: this.avatar,
      datasetIds: (this.datasetIds || []).slice(),
      llm: this.llm ? this.llm.toProtobufJSON(options) : null,
      prompt: this.prompt ? this.prompt.toProtobufJSON(options) : null,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagUpdateChatRequest {
  /**
   * Standard JavaScript object representation for RagUpdateChatRequest
   */
  export interface AsObject {
    parent: string;
    chatId: string;
    name: string;
    description: string;
    avatar: string;
    datasetIds: string[];
    llm?: RagLLMSetting.AsObject;
    prompt?: RagPromptConfig.AsObject;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagUpdateChatRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    chatId: string;
    name: string;
    description: string;
    avatar: string;
    datasetIds: string[];
    llm: RagLLMSetting.AsProtobufJSON | null;
    prompt: RagPromptConfig.AsProtobufJSON | null;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDeleteChatsRequest
 */
export class RagDeleteChatsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDeleteChatsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDeleteChatsRequest();
    RagDeleteChatsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDeleteChatsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.ids = _instance.ids || [];
    _instance.deleteAll = _instance.deleteAll || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDeleteChatsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          (_instance.ids = _instance.ids || []).push(_reader.readString());
          break;
        case 3:
          _instance.deleteAll = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDeleteChatsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDeleteChatsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.ids && _instance.ids.length) {
      _writer.writeRepeatedString(2, _instance.ids);
    }
    if (_instance.deleteAll) {
      _writer.writeBool(3, _instance.deleteAll);
    }
  }

  private _parent: string;
  private _ids: string[];
  private _deleteAll: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDeleteChatsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDeleteChatsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.ids = (_value.ids || []).slice();
    this.deleteAll = _value.deleteAll;
    RagDeleteChatsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get ids(): string[] {
    return this._ids;
  }
  set ids(value: string[]) {
    this._ids = value;
  }
  get deleteAll(): boolean {
    return this._deleteAll;
  }
  set deleteAll(value: boolean) {
    this._deleteAll = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDeleteChatsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDeleteChatsRequest.AsObject {
    return {
      parent: this.parent,
      ids: (this.ids || []).slice(),
      deleteAll: this.deleteAll
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
  ): RagDeleteChatsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      ids: (this.ids || []).slice(),
      deleteAll: this.deleteAll
    };
  }
}
export module RagDeleteChatsRequest {
  /**
   * Standard JavaScript object representation for RagDeleteChatsRequest
   */
  export interface AsObject {
    parent: string;
    ids: string[];
    deleteAll: boolean;
  }

  /**
   * Protobuf JSON representation for RagDeleteChatsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    ids: string[];
    deleteAll: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.RagListChatsRequest
 */
export class RagListChatsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagListChatsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListChatsRequest();
    RagListChatsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListChatsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.pagination = _instance.pagination || undefined;
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.orderby = _instance.orderby || '';
    _instance.desc = _instance.desc || false;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListChatsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.pagination = new RagPagination();
          _reader.readMessage(
            _instance.pagination,
            RagPagination.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.id = _reader.readString();
          break;
        case 4:
          _instance.name = _reader.readString();
          break;
        case 5:
          _instance.orderby = _reader.readString();
          break;
        case 6:
          _instance.desc = _reader.readBool();
          break;
        case 7:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagListChatsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListChatsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.pagination) {
      _writer.writeMessage(
        2,
        _instance.pagination as any,
        RagPagination.serializeBinaryToWriter
      );
    }
    if (_instance.id) {
      _writer.writeString(3, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(4, _instance.name);
    }
    if (_instance.orderby) {
      _writer.writeString(5, _instance.orderby);
    }
    if (_instance.desc) {
      _writer.writeBool(6, _instance.desc);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        7,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _pagination?: RagPagination;
  private _id: string;
  private _name: string;
  private _orderby: string;
  private _desc: boolean;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListChatsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListChatsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.pagination = _value.pagination
      ? new RagPagination(_value.pagination)
      : undefined;
    this.id = _value.id;
    this.name = _value.name;
    this.orderby = _value.orderby;
    this.desc = _value.desc;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagListChatsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get pagination(): RagPagination | undefined {
    return this._pagination;
  }
  set pagination(value: RagPagination | undefined) {
    this._pagination = value;
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get orderby(): string {
    return this._orderby;
  }
  set orderby(value: string) {
    this._orderby = value;
  }
  get desc(): boolean {
    return this._desc;
  }
  set desc(value: boolean) {
    this._desc = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagListChatsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListChatsRequest.AsObject {
    return {
      parent: this.parent,
      pagination: this.pagination ? this.pagination.toObject() : undefined,
      id: this.id,
      name: this.name,
      orderby: this.orderby,
      desc: this.desc,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagListChatsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      pagination: this.pagination
        ? this.pagination.toProtobufJSON(options)
        : null,
      id: this.id,
      name: this.name,
      orderby: this.orderby,
      desc: this.desc,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagListChatsRequest {
  /**
   * Standard JavaScript object representation for RagListChatsRequest
   */
  export interface AsObject {
    parent: string;
    pagination?: RagPagination.AsObject;
    id: string;
    name: string;
    orderby: string;
    desc: boolean;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagListChatsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    pagination: RagPagination.AsProtobufJSON | null;
    id: string;
    name: string;
    orderby: string;
    desc: boolean;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagChatList
 */
export class RagChatList implements GrpcMessage {
  static id = 'ondewo.nlu.RagChatList';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagChatList();
    RagChatList.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagChatList) {
    _instance.chats = _instance.chats || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagChatList,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagChat();
          _reader.readMessage(
            messageInitializer1,
            RagChat.deserializeBinaryFromReader
          );
          (_instance.chats = _instance.chats || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    RagChatList.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagChatList,
    _writer: BinaryWriter
  ) {
    if (_instance.chats && _instance.chats.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.chats as any,
        RagChat.serializeBinaryToWriter
      );
    }
  }

  private _chats?: RagChat[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagChatList to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagChatList.AsObject>) {
    _value = _value || {};
    this.chats = (_value.chats || []).map(m => new RagChat(m));
    RagChatList.refineValues(this);
  }
  get chats(): RagChat[] | undefined {
    return this._chats;
  }
  set chats(value: RagChat[] | undefined) {
    this._chats = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagChatList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagChatList.AsObject {
    return {
      chats: (this.chats || []).map(m => m.toObject())
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
  ): RagChatList.AsProtobufJSON {
    return {
      chats: (this.chats || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module RagChatList {
  /**
   * Standard JavaScript object representation for RagChatList
   */
  export interface AsObject {
    chats?: RagChat.AsObject[];
  }

  /**
   * Protobuf JSON representation for RagChatList
   */
  export interface AsProtobufJSON {
    chats: RagChat.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagChatSession
 */
export class RagChatSession implements GrpcMessage {
  static id = 'ondewo.nlu.RagChatSession';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagChatSession();
    RagChatSession.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagChatSession) {
    _instance.id = _instance.id || '';
    _instance.chatId = _instance.chatId || '';
    _instance.name = _instance.name || '';
    _instance.messages = _instance.messages || [];
    _instance.createTime = _instance.createTime || '0';
    _instance.createDate = _instance.createDate || '';
    _instance.updateTime = _instance.updateTime || '0';
    _instance.updateDate = _instance.updateDate || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagChatSession,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.chatId = _reader.readString();
          break;
        case 3:
          _instance.name = _reader.readString();
          break;
        case 4:
          const messageInitializer4 = new RagMessage();
          _reader.readMessage(
            messageInitializer4,
            RagMessage.deserializeBinaryFromReader
          );
          (_instance.messages = _instance.messages || []).push(
            messageInitializer4
          );
          break;
        case 6:
          _instance.createTime = _reader.readInt64String();
          break;
        case 7:
          _instance.createDate = _reader.readString();
          break;
        case 8:
          _instance.updateTime = _reader.readInt64String();
          break;
        case 9:
          _instance.updateDate = _reader.readString();
          break;
        case 10:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagChatSession.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagChatSession,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.chatId) {
      _writer.writeString(2, _instance.chatId);
    }
    if (_instance.name) {
      _writer.writeString(3, _instance.name);
    }
    if (_instance.messages && _instance.messages.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.messages as any,
        RagMessage.serializeBinaryToWriter
      );
    }
    if (_instance.createTime) {
      _writer.writeInt64String(6, _instance.createTime);
    }
    if (_instance.createDate) {
      _writer.writeString(7, _instance.createDate);
    }
    if (_instance.updateTime) {
      _writer.writeInt64String(8, _instance.updateTime);
    }
    if (_instance.updateDate) {
      _writer.writeString(9, _instance.updateDate);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        10,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _id: string;
  private _chatId: string;
  private _name: string;
  private _messages?: RagMessage[];
  private _createTime: string;
  private _createDate: string;
  private _updateTime: string;
  private _updateDate: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagChatSession to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagChatSession.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.chatId = _value.chatId;
    this.name = _value.name;
    this.messages = (_value.messages || []).map(m => new RagMessage(m));
    this.createTime = _value.createTime;
    this.createDate = _value.createDate;
    this.updateTime = _value.updateTime;
    this.updateDate = _value.updateDate;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagChatSession.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get chatId(): string {
    return this._chatId;
  }
  set chatId(value: string) {
    this._chatId = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get messages(): RagMessage[] | undefined {
    return this._messages;
  }
  set messages(value: RagMessage[] | undefined) {
    this._messages = value;
  }
  get createTime(): string {
    return this._createTime;
  }
  set createTime(value: string) {
    this._createTime = value;
  }
  get createDate(): string {
    return this._createDate;
  }
  set createDate(value: string) {
    this._createDate = value;
  }
  get updateTime(): string {
    return this._updateTime;
  }
  set updateTime(value: string) {
    this._updateTime = value;
  }
  get updateDate(): string {
    return this._updateDate;
  }
  set updateDate(value: string) {
    this._updateDate = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagChatSession.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagChatSession.AsObject {
    return {
      id: this.id,
      chatId: this.chatId,
      name: this.name,
      messages: (this.messages || []).map(m => m.toObject()),
      createTime: this.createTime,
      createDate: this.createDate,
      updateTime: this.updateTime,
      updateDate: this.updateDate,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagChatSession.AsProtobufJSON {
    return {
      id: this.id,
      chatId: this.chatId,
      name: this.name,
      messages: (this.messages || []).map(m => m.toProtobufJSON(options)),
      createTime: this.createTime,
      createDate: this.createDate,
      updateTime: this.updateTime,
      updateDate: this.updateDate,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagChatSession {
  /**
   * Standard JavaScript object representation for RagChatSession
   */
  export interface AsObject {
    id: string;
    chatId: string;
    name: string;
    messages?: RagMessage.AsObject[];
    createTime: string;
    createDate: string;
    updateTime: string;
    updateDate: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagChatSession
   */
  export interface AsProtobufJSON {
    id: string;
    chatId: string;
    name: string;
    messages: RagMessage.AsProtobufJSON[] | null;
    createTime: string;
    createDate: string;
    updateTime: string;
    updateDate: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagMessage
 */
export class RagMessage implements GrpcMessage {
  static id = 'ondewo.nlu.RagMessage';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagMessage();
    RagMessage.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagMessage) {
    _instance.role = _instance.role || 0;
    _instance.content = _instance.content || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagMessage,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.role = _reader.readEnum();
          break;
        case 2:
          _instance.content = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagMessage.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: RagMessage, _writer: BinaryWriter) {
    if (_instance.role) {
      _writer.writeEnum(1, _instance.role);
    }
    if (_instance.content) {
      _writer.writeString(2, _instance.content);
    }
  }

  private _role: RagMessageRole;
  private _content: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagMessage to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagMessage.AsObject>) {
    _value = _value || {};
    this.role = _value.role;
    this.content = _value.content;
    RagMessage.refineValues(this);
  }
  get role(): RagMessageRole {
    return this._role;
  }
  set role(value: RagMessageRole) {
    this._role = value;
  }
  get content(): string {
    return this._content;
  }
  set content(value: string) {
    this._content = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagMessage.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagMessage.AsObject {
    return {
      role: this.role,
      content: this.content
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
  ): RagMessage.AsProtobufJSON {
    return {
      role:
        RagMessageRole[
          this.role === null || this.role === undefined ? 0 : this.role
        ],
      content: this.content
    };
  }
}
export module RagMessage {
  /**
   * Standard JavaScript object representation for RagMessage
   */
  export interface AsObject {
    role: RagMessageRole;
    content: string;
  }

  /**
   * Protobuf JSON representation for RagMessage
   */
  export interface AsProtobufJSON {
    role: string;
    content: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCreateChatSessionRequest
 */
export class RagCreateChatSessionRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagCreateChatSessionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCreateChatSessionRequest();
    RagCreateChatSessionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCreateChatSessionRequest) {
    _instance.parent = _instance.parent || '';
    _instance.chatId = _instance.chatId || '';
    _instance.name = _instance.name || '';
    _instance.userId = _instance.userId || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCreateChatSessionRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.chatId = _reader.readString();
          break;
        case 3:
          _instance.name = _reader.readString();
          break;
        case 4:
          _instance.userId = _reader.readString();
          break;
        case 5:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagCreateChatSessionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCreateChatSessionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.chatId) {
      _writer.writeString(2, _instance.chatId);
    }
    if (_instance.name) {
      _writer.writeString(3, _instance.name);
    }
    if (_instance.userId) {
      _writer.writeString(4, _instance.userId);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        5,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _chatId: string;
  private _name: string;
  private _userId: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCreateChatSessionRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCreateChatSessionRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.chatId = _value.chatId;
    this.name = _value.name;
    this.userId = _value.userId;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagCreateChatSessionRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get chatId(): string {
    return this._chatId;
  }
  set chatId(value: string) {
    this._chatId = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCreateChatSessionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCreateChatSessionRequest.AsObject {
    return {
      parent: this.parent,
      chatId: this.chatId,
      name: this.name,
      userId: this.userId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagCreateChatSessionRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      chatId: this.chatId,
      name: this.name,
      userId: this.userId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagCreateChatSessionRequest {
  /**
   * Standard JavaScript object representation for RagCreateChatSessionRequest
   */
  export interface AsObject {
    parent: string;
    chatId: string;
    name: string;
    userId: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagCreateChatSessionRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    chatId: string;
    name: string;
    userId: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagAgentSession
 */
export class RagAgentSession implements GrpcMessage {
  static id = 'ondewo.nlu.RagAgentSession';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagAgentSession();
    RagAgentSession.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagAgentSession) {
    _instance.id = _instance.id || '';
    _instance.agentId = _instance.agentId || '';
    _instance.userId = _instance.userId || '';
    _instance.message = _instance.message || [];
    _instance.source = _instance.source || '';
    _instance.dsl = _instance.dsl || undefined;
    _instance.createTime = _instance.createTime || '0';
    _instance.createDate = _instance.createDate || '';
    _instance.updateTime = _instance.updateTime || '0';
    _instance.updateDate = _instance.updateDate || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagAgentSession,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.agentId = _reader.readString();
          break;
        case 3:
          _instance.userId = _reader.readString();
          break;
        case 4:
          const messageInitializer4 = new RagMessage();
          _reader.readMessage(
            messageInitializer4,
            RagMessage.deserializeBinaryFromReader
          );
          (_instance.message = _instance.message || []).push(
            messageInitializer4
          );
          break;
        case 5:
          _instance.source = _reader.readString();
          break;
        case 6:
          _instance.dsl = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.dsl,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.createTime = _reader.readInt64String();
          break;
        case 8:
          _instance.createDate = _reader.readString();
          break;
        case 9:
          _instance.updateTime = _reader.readInt64String();
          break;
        case 10:
          _instance.updateDate = _reader.readString();
          break;
        case 11:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagAgentSession.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagAgentSession,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.agentId) {
      _writer.writeString(2, _instance.agentId);
    }
    if (_instance.userId) {
      _writer.writeString(3, _instance.userId);
    }
    if (_instance.message && _instance.message.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.message as any,
        RagMessage.serializeBinaryToWriter
      );
    }
    if (_instance.source) {
      _writer.writeString(5, _instance.source);
    }
    if (_instance.dsl) {
      _writer.writeMessage(
        6,
        _instance.dsl as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.createTime) {
      _writer.writeInt64String(7, _instance.createTime);
    }
    if (_instance.createDate) {
      _writer.writeString(8, _instance.createDate);
    }
    if (_instance.updateTime) {
      _writer.writeInt64String(9, _instance.updateTime);
    }
    if (_instance.updateDate) {
      _writer.writeString(10, _instance.updateDate);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        11,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _id: string;
  private _agentId: string;
  private _userId: string;
  private _message?: RagMessage[];
  private _source: string;
  private _dsl?: googleProtobuf001.Struct;
  private _createTime: string;
  private _createDate: string;
  private _updateTime: string;
  private _updateDate: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagAgentSession to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagAgentSession.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.agentId = _value.agentId;
    this.userId = _value.userId;
    this.message = (_value.message || []).map(m => new RagMessage(m));
    this.source = _value.source;
    this.dsl = _value.dsl
      ? new googleProtobuf001.Struct(_value.dsl)
      : undefined;
    this.createTime = _value.createTime;
    this.createDate = _value.createDate;
    this.updateTime = _value.updateTime;
    this.updateDate = _value.updateDate;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagAgentSession.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get agentId(): string {
    return this._agentId;
  }
  set agentId(value: string) {
    this._agentId = value;
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }
  get message(): RagMessage[] | undefined {
    return this._message;
  }
  set message(value: RagMessage[] | undefined) {
    this._message = value;
  }
  get source(): string {
    return this._source;
  }
  set source(value: string) {
    this._source = value;
  }
  get dsl(): googleProtobuf001.Struct | undefined {
    return this._dsl;
  }
  set dsl(value: googleProtobuf001.Struct | undefined) {
    this._dsl = value;
  }
  get createTime(): string {
    return this._createTime;
  }
  set createTime(value: string) {
    this._createTime = value;
  }
  get createDate(): string {
    return this._createDate;
  }
  set createDate(value: string) {
    this._createDate = value;
  }
  get updateTime(): string {
    return this._updateTime;
  }
  set updateTime(value: string) {
    this._updateTime = value;
  }
  get updateDate(): string {
    return this._updateDate;
  }
  set updateDate(value: string) {
    this._updateDate = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagAgentSession.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagAgentSession.AsObject {
    return {
      id: this.id,
      agentId: this.agentId,
      userId: this.userId,
      message: (this.message || []).map(m => m.toObject()),
      source: this.source,
      dsl: this.dsl ? this.dsl.toObject() : undefined,
      createTime: this.createTime,
      createDate: this.createDate,
      updateTime: this.updateTime,
      updateDate: this.updateDate,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagAgentSession.AsProtobufJSON {
    return {
      id: this.id,
      agentId: this.agentId,
      userId: this.userId,
      message: (this.message || []).map(m => m.toProtobufJSON(options)),
      source: this.source,
      dsl: this.dsl ? this.dsl.toProtobufJSON(options) : null,
      createTime: this.createTime,
      createDate: this.createDate,
      updateTime: this.updateTime,
      updateDate: this.updateDate,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagAgentSession {
  /**
   * Standard JavaScript object representation for RagAgentSession
   */
  export interface AsObject {
    id: string;
    agentId: string;
    userId: string;
    message?: RagMessage.AsObject[];
    source: string;
    dsl?: googleProtobuf001.Struct.AsObject;
    createTime: string;
    createDate: string;
    updateTime: string;
    updateDate: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagAgentSession
   */
  export interface AsProtobufJSON {
    id: string;
    agentId: string;
    userId: string;
    message: RagMessage.AsProtobufJSON[] | null;
    source: string;
    dsl: googleProtobuf001.Struct.AsProtobufJSON | null;
    createTime: string;
    createDate: string;
    updateTime: string;
    updateDate: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCreateAgentSessionRequest
 */
export class RagCreateAgentSessionRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagCreateAgentSessionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCreateAgentSessionRequest();
    RagCreateAgentSessionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCreateAgentSessionRequest) {
    _instance.parent = _instance.parent || '';
    _instance.agentId = _instance.agentId || '';
    _instance.userId = _instance.userId || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCreateAgentSessionRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.agentId = _reader.readString();
          break;
        case 3:
          _instance.userId = _reader.readString();
          break;
        case 4:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagCreateAgentSessionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCreateAgentSessionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.agentId) {
      _writer.writeString(2, _instance.agentId);
    }
    if (_instance.userId) {
      _writer.writeString(3, _instance.userId);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        4,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _agentId: string;
  private _userId: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCreateAgentSessionRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagCreateAgentSessionRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.agentId = _value.agentId;
    this.userId = _value.userId;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagCreateAgentSessionRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get agentId(): string {
    return this._agentId;
  }
  set agentId(value: string) {
    this._agentId = value;
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCreateAgentSessionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCreateAgentSessionRequest.AsObject {
    return {
      parent: this.parent,
      agentId: this.agentId,
      userId: this.userId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagCreateAgentSessionRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      agentId: this.agentId,
      userId: this.userId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagCreateAgentSessionRequest {
  /**
   * Standard JavaScript object representation for RagCreateAgentSessionRequest
   */
  export interface AsObject {
    parent: string;
    agentId: string;
    userId: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagCreateAgentSessionRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    agentId: string;
    userId: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagUpdateChatSessionRequest
 */
export class RagUpdateChatSessionRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagUpdateChatSessionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagUpdateChatSessionRequest();
    RagUpdateChatSessionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagUpdateChatSessionRequest) {
    _instance.parent = _instance.parent || '';
    _instance.chatId = _instance.chatId || '';
    _instance.sessionId = _instance.sessionId || '';
    _instance.name = _instance.name || '';
    _instance.userId = _instance.userId || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagUpdateChatSessionRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.chatId = _reader.readString();
          break;
        case 3:
          _instance.sessionId = _reader.readString();
          break;
        case 4:
          _instance.name = _reader.readString();
          break;
        case 5:
          _instance.userId = _reader.readString();
          break;
        case 6:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagUpdateChatSessionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagUpdateChatSessionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.chatId) {
      _writer.writeString(2, _instance.chatId);
    }
    if (_instance.sessionId) {
      _writer.writeString(3, _instance.sessionId);
    }
    if (_instance.name) {
      _writer.writeString(4, _instance.name);
    }
    if (_instance.userId) {
      _writer.writeString(5, _instance.userId);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        6,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _chatId: string;
  private _sessionId: string;
  private _name: string;
  private _userId: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagUpdateChatSessionRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagUpdateChatSessionRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.chatId = _value.chatId;
    this.sessionId = _value.sessionId;
    this.name = _value.name;
    this.userId = _value.userId;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagUpdateChatSessionRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get chatId(): string {
    return this._chatId;
  }
  set chatId(value: string) {
    this._chatId = value;
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagUpdateChatSessionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagUpdateChatSessionRequest.AsObject {
    return {
      parent: this.parent,
      chatId: this.chatId,
      sessionId: this.sessionId,
      name: this.name,
      userId: this.userId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagUpdateChatSessionRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      chatId: this.chatId,
      sessionId: this.sessionId,
      name: this.name,
      userId: this.userId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagUpdateChatSessionRequest {
  /**
   * Standard JavaScript object representation for RagUpdateChatSessionRequest
   */
  export interface AsObject {
    parent: string;
    chatId: string;
    sessionId: string;
    name: string;
    userId: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagUpdateChatSessionRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    chatId: string;
    sessionId: string;
    name: string;
    userId: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagListChatSessionsRequest
 */
export class RagListChatSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagListChatSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListChatSessionsRequest();
    RagListChatSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListChatSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.chatId = _instance.chatId || '';
    _instance.pagination = _instance.pagination || undefined;
    _instance.orderby = _instance.orderby || '';
    _instance.desc = _instance.desc || false;
    _instance.name = _instance.name || '';
    _instance.id = _instance.id || '';
    _instance.userId = _instance.userId || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListChatSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.chatId = _reader.readString();
          break;
        case 3:
          _instance.pagination = new RagPagination();
          _reader.readMessage(
            _instance.pagination,
            RagPagination.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.orderby = _reader.readString();
          break;
        case 5:
          _instance.desc = _reader.readBool();
          break;
        case 6:
          _instance.name = _reader.readString();
          break;
        case 7:
          _instance.id = _reader.readString();
          break;
        case 8:
          _instance.userId = _reader.readString();
          break;
        case 9:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagListChatSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListChatSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.chatId) {
      _writer.writeString(2, _instance.chatId);
    }
    if (_instance.pagination) {
      _writer.writeMessage(
        3,
        _instance.pagination as any,
        RagPagination.serializeBinaryToWriter
      );
    }
    if (_instance.orderby) {
      _writer.writeString(4, _instance.orderby);
    }
    if (_instance.desc) {
      _writer.writeBool(5, _instance.desc);
    }
    if (_instance.name) {
      _writer.writeString(6, _instance.name);
    }
    if (_instance.id) {
      _writer.writeString(7, _instance.id);
    }
    if (_instance.userId) {
      _writer.writeString(8, _instance.userId);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        9,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _chatId: string;
  private _pagination?: RagPagination;
  private _orderby: string;
  private _desc: boolean;
  private _name: string;
  private _id: string;
  private _userId: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListChatSessionsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListChatSessionsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.chatId = _value.chatId;
    this.pagination = _value.pagination
      ? new RagPagination(_value.pagination)
      : undefined;
    this.orderby = _value.orderby;
    this.desc = _value.desc;
    this.name = _value.name;
    this.id = _value.id;
    this.userId = _value.userId;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagListChatSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get chatId(): string {
    return this._chatId;
  }
  set chatId(value: string) {
    this._chatId = value;
  }
  get pagination(): RagPagination | undefined {
    return this._pagination;
  }
  set pagination(value: RagPagination | undefined) {
    this._pagination = value;
  }
  get orderby(): string {
    return this._orderby;
  }
  set orderby(value: string) {
    this._orderby = value;
  }
  get desc(): boolean {
    return this._desc;
  }
  set desc(value: boolean) {
    this._desc = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagListChatSessionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListChatSessionsRequest.AsObject {
    return {
      parent: this.parent,
      chatId: this.chatId,
      pagination: this.pagination ? this.pagination.toObject() : undefined,
      orderby: this.orderby,
      desc: this.desc,
      name: this.name,
      id: this.id,
      userId: this.userId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagListChatSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      chatId: this.chatId,
      pagination: this.pagination
        ? this.pagination.toProtobufJSON(options)
        : null,
      orderby: this.orderby,
      desc: this.desc,
      name: this.name,
      id: this.id,
      userId: this.userId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagListChatSessionsRequest {
  /**
   * Standard JavaScript object representation for RagListChatSessionsRequest
   */
  export interface AsObject {
    parent: string;
    chatId: string;
    pagination?: RagPagination.AsObject;
    orderby: string;
    desc: boolean;
    name: string;
    id: string;
    userId: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagListChatSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    chatId: string;
    pagination: RagPagination.AsProtobufJSON | null;
    orderby: string;
    desc: boolean;
    name: string;
    id: string;
    userId: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagChatSessionList
 */
export class RagChatSessionList implements GrpcMessage {
  static id = 'ondewo.nlu.RagChatSessionList';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagChatSessionList();
    RagChatSessionList.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagChatSessionList) {
    _instance.chatSessions = _instance.chatSessions || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagChatSessionList,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagChatSession();
          _reader.readMessage(
            messageInitializer1,
            RagChatSession.deserializeBinaryFromReader
          );
          (_instance.chatSessions = _instance.chatSessions || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagChatSessionList.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagChatSessionList,
    _writer: BinaryWriter
  ) {
    if (_instance.chatSessions && _instance.chatSessions.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.chatSessions as any,
        RagChatSession.serializeBinaryToWriter
      );
    }
  }

  private _chatSessions?: RagChatSession[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagChatSessionList to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagChatSessionList.AsObject>) {
    _value = _value || {};
    this.chatSessions = (_value.chatSessions || []).map(
      m => new RagChatSession(m)
    );
    RagChatSessionList.refineValues(this);
  }
  get chatSessions(): RagChatSession[] | undefined {
    return this._chatSessions;
  }
  set chatSessions(value: RagChatSession[] | undefined) {
    this._chatSessions = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagChatSessionList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagChatSessionList.AsObject {
    return {
      chatSessions: (this.chatSessions || []).map(m => m.toObject())
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
  ): RagChatSessionList.AsProtobufJSON {
    return {
      chatSessions: (this.chatSessions || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module RagChatSessionList {
  /**
   * Standard JavaScript object representation for RagChatSessionList
   */
  export interface AsObject {
    chatSessions?: RagChatSession.AsObject[];
  }

  /**
   * Protobuf JSON representation for RagChatSessionList
   */
  export interface AsProtobufJSON {
    chatSessions: RagChatSession.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagListAgentSessionsRequest
 */
export class RagListAgentSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagListAgentSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListAgentSessionsRequest();
    RagListAgentSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListAgentSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.agentId = _instance.agentId || '';
    _instance.pagination = _instance.pagination || undefined;
    _instance.orderby = _instance.orderby || '';
    _instance.desc = _instance.desc || false;
    _instance.id = _instance.id || '';
    _instance.userId = _instance.userId || '';
    _instance.dsl = _instance.dsl || false;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListAgentSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.agentId = _reader.readString();
          break;
        case 3:
          _instance.pagination = new RagPagination();
          _reader.readMessage(
            _instance.pagination,
            RagPagination.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.orderby = _reader.readString();
          break;
        case 5:
          _instance.desc = _reader.readBool();
          break;
        case 6:
          _instance.id = _reader.readString();
          break;
        case 7:
          _instance.userId = _reader.readString();
          break;
        case 8:
          _instance.dsl = _reader.readBool();
          break;
        case 9:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagListAgentSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListAgentSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.agentId) {
      _writer.writeString(2, _instance.agentId);
    }
    if (_instance.pagination) {
      _writer.writeMessage(
        3,
        _instance.pagination as any,
        RagPagination.serializeBinaryToWriter
      );
    }
    if (_instance.orderby) {
      _writer.writeString(4, _instance.orderby);
    }
    if (_instance.desc) {
      _writer.writeBool(5, _instance.desc);
    }
    if (_instance.id) {
      _writer.writeString(6, _instance.id);
    }
    if (_instance.userId) {
      _writer.writeString(7, _instance.userId);
    }
    if (_instance.dsl) {
      _writer.writeBool(8, _instance.dsl);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        9,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _agentId: string;
  private _pagination?: RagPagination;
  private _orderby: string;
  private _desc: boolean;
  private _id: string;
  private _userId: string;
  private _dsl: boolean;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListAgentSessionsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListAgentSessionsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.agentId = _value.agentId;
    this.pagination = _value.pagination
      ? new RagPagination(_value.pagination)
      : undefined;
    this.orderby = _value.orderby;
    this.desc = _value.desc;
    this.id = _value.id;
    this.userId = _value.userId;
    this.dsl = _value.dsl;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagListAgentSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get agentId(): string {
    return this._agentId;
  }
  set agentId(value: string) {
    this._agentId = value;
  }
  get pagination(): RagPagination | undefined {
    return this._pagination;
  }
  set pagination(value: RagPagination | undefined) {
    this._pagination = value;
  }
  get orderby(): string {
    return this._orderby;
  }
  set orderby(value: string) {
    this._orderby = value;
  }
  get desc(): boolean {
    return this._desc;
  }
  set desc(value: boolean) {
    this._desc = value;
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }
  get dsl(): boolean {
    return this._dsl;
  }
  set dsl(value: boolean) {
    this._dsl = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagListAgentSessionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListAgentSessionsRequest.AsObject {
    return {
      parent: this.parent,
      agentId: this.agentId,
      pagination: this.pagination ? this.pagination.toObject() : undefined,
      orderby: this.orderby,
      desc: this.desc,
      id: this.id,
      userId: this.userId,
      dsl: this.dsl,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagListAgentSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      agentId: this.agentId,
      pagination: this.pagination
        ? this.pagination.toProtobufJSON(options)
        : null,
      orderby: this.orderby,
      desc: this.desc,
      id: this.id,
      userId: this.userId,
      dsl: this.dsl,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagListAgentSessionsRequest {
  /**
   * Standard JavaScript object representation for RagListAgentSessionsRequest
   */
  export interface AsObject {
    parent: string;
    agentId: string;
    pagination?: RagPagination.AsObject;
    orderby: string;
    desc: boolean;
    id: string;
    userId: string;
    dsl: boolean;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagListAgentSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    agentId: string;
    pagination: RagPagination.AsProtobufJSON | null;
    orderby: string;
    desc: boolean;
    id: string;
    userId: string;
    dsl: boolean;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagAgentSessionList
 */
export class RagAgentSessionList implements GrpcMessage {
  static id = 'ondewo.nlu.RagAgentSessionList';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagAgentSessionList();
    RagAgentSessionList.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagAgentSessionList) {
    _instance.agentSessions = _instance.agentSessions || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagAgentSessionList,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagAgentSession();
          _reader.readMessage(
            messageInitializer1,
            RagAgentSession.deserializeBinaryFromReader
          );
          (_instance.agentSessions = _instance.agentSessions || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagAgentSessionList.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagAgentSessionList,
    _writer: BinaryWriter
  ) {
    if (_instance.agentSessions && _instance.agentSessions.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.agentSessions as any,
        RagAgentSession.serializeBinaryToWriter
      );
    }
  }

  private _agentSessions?: RagAgentSession[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagAgentSessionList to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagAgentSessionList.AsObject>) {
    _value = _value || {};
    this.agentSessions = (_value.agentSessions || []).map(
      m => new RagAgentSession(m)
    );
    RagAgentSessionList.refineValues(this);
  }
  get agentSessions(): RagAgentSession[] | undefined {
    return this._agentSessions;
  }
  set agentSessions(value: RagAgentSession[] | undefined) {
    this._agentSessions = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagAgentSessionList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagAgentSessionList.AsObject {
    return {
      agentSessions: (this.agentSessions || []).map(m => m.toObject())
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
  ): RagAgentSessionList.AsProtobufJSON {
    return {
      agentSessions: (this.agentSessions || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module RagAgentSessionList {
  /**
   * Standard JavaScript object representation for RagAgentSessionList
   */
  export interface AsObject {
    agentSessions?: RagAgentSession.AsObject[];
  }

  /**
   * Protobuf JSON representation for RagAgentSessionList
   */
  export interface AsProtobufJSON {
    agentSessions: RagAgentSession.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDeleteChatSessionsRequest
 */
export class RagDeleteChatSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDeleteChatSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDeleteChatSessionsRequest();
    RagDeleteChatSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDeleteChatSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.chatId = _instance.chatId || '';
    _instance.ids = _instance.ids || [];
    _instance.deleteAll = _instance.deleteAll || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDeleteChatSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.chatId = _reader.readString();
          break;
        case 3:
          (_instance.ids = _instance.ids || []).push(_reader.readString());
          break;
        case 4:
          _instance.deleteAll = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDeleteChatSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDeleteChatSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.chatId) {
      _writer.writeString(2, _instance.chatId);
    }
    if (_instance.ids && _instance.ids.length) {
      _writer.writeRepeatedString(3, _instance.ids);
    }
    if (_instance.deleteAll) {
      _writer.writeBool(4, _instance.deleteAll);
    }
  }

  private _parent: string;
  private _chatId: string;
  private _ids: string[];
  private _deleteAll: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDeleteChatSessionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagDeleteChatSessionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.chatId = _value.chatId;
    this.ids = (_value.ids || []).slice();
    this.deleteAll = _value.deleteAll;
    RagDeleteChatSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get chatId(): string {
    return this._chatId;
  }
  set chatId(value: string) {
    this._chatId = value;
  }
  get ids(): string[] {
    return this._ids;
  }
  set ids(value: string[]) {
    this._ids = value;
  }
  get deleteAll(): boolean {
    return this._deleteAll;
  }
  set deleteAll(value: boolean) {
    this._deleteAll = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDeleteChatSessionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDeleteChatSessionsRequest.AsObject {
    return {
      parent: this.parent,
      chatId: this.chatId,
      ids: (this.ids || []).slice(),
      deleteAll: this.deleteAll
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
  ): RagDeleteChatSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      chatId: this.chatId,
      ids: (this.ids || []).slice(),
      deleteAll: this.deleteAll
    };
  }
}
export module RagDeleteChatSessionsRequest {
  /**
   * Standard JavaScript object representation for RagDeleteChatSessionsRequest
   */
  export interface AsObject {
    parent: string;
    chatId: string;
    ids: string[];
    deleteAll: boolean;
  }

  /**
   * Protobuf JSON representation for RagDeleteChatSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    chatId: string;
    ids: string[];
    deleteAll: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDeleteAgentSessionsRequest
 */
export class RagDeleteAgentSessionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDeleteAgentSessionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDeleteAgentSessionsRequest();
    RagDeleteAgentSessionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDeleteAgentSessionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.agentId = _instance.agentId || '';
    _instance.ids = _instance.ids || [];
    _instance.deleteAll = _instance.deleteAll || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDeleteAgentSessionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.agentId = _reader.readString();
          break;
        case 3:
          (_instance.ids = _instance.ids || []).push(_reader.readString());
          break;
        case 4:
          _instance.deleteAll = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDeleteAgentSessionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDeleteAgentSessionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.agentId) {
      _writer.writeString(2, _instance.agentId);
    }
    if (_instance.ids && _instance.ids.length) {
      _writer.writeRepeatedString(3, _instance.ids);
    }
    if (_instance.deleteAll) {
      _writer.writeBool(4, _instance.deleteAll);
    }
  }

  private _parent: string;
  private _agentId: string;
  private _ids: string[];
  private _deleteAll: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDeleteAgentSessionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagDeleteAgentSessionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.agentId = _value.agentId;
    this.ids = (_value.ids || []).slice();
    this.deleteAll = _value.deleteAll;
    RagDeleteAgentSessionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get agentId(): string {
    return this._agentId;
  }
  set agentId(value: string) {
    this._agentId = value;
  }
  get ids(): string[] {
    return this._ids;
  }
  set ids(value: string[]) {
    this._ids = value;
  }
  get deleteAll(): boolean {
    return this._deleteAll;
  }
  set deleteAll(value: boolean) {
    this._deleteAll = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDeleteAgentSessionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDeleteAgentSessionsRequest.AsObject {
    return {
      parent: this.parent,
      agentId: this.agentId,
      ids: (this.ids || []).slice(),
      deleteAll: this.deleteAll
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
  ): RagDeleteAgentSessionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      agentId: this.agentId,
      ids: (this.ids || []).slice(),
      deleteAll: this.deleteAll
    };
  }
}
export module RagDeleteAgentSessionsRequest {
  /**
   * Standard JavaScript object representation for RagDeleteAgentSessionsRequest
   */
  export interface AsObject {
    parent: string;
    agentId: string;
    ids: string[];
    deleteAll: boolean;
  }

  /**
   * Protobuf JSON representation for RagDeleteAgentSessionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    agentId: string;
    ids: string[];
    deleteAll: boolean;
  }
}

/**
 * Message implementation for ondewo.nlu.RagChatCompletionRequest
 */
export class RagChatCompletionRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagChatCompletionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagChatCompletionRequest();
    RagChatCompletionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagChatCompletionRequest) {
    _instance.parent = _instance.parent || '';
    _instance.chatId = _instance.chatId || '';
    _instance.sessionId = _instance.sessionId || '';
    _instance.question = _instance.question || '';
    _instance.stream = _instance.stream || false;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagChatCompletionRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.chatId = _reader.readString();
          break;
        case 3:
          _instance.sessionId = _reader.readString();
          break;
        case 4:
          _instance.question = _reader.readString();
          break;
        case 5:
          _instance.stream = _reader.readBool();
          break;
        case 6:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagChatCompletionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagChatCompletionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.chatId) {
      _writer.writeString(2, _instance.chatId);
    }
    if (_instance.sessionId) {
      _writer.writeString(3, _instance.sessionId);
    }
    if (_instance.question) {
      _writer.writeString(4, _instance.question);
    }
    if (_instance.stream) {
      _writer.writeBool(5, _instance.stream);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        6,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _chatId: string;
  private _sessionId: string;
  private _question: string;
  private _stream: boolean;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagChatCompletionRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagChatCompletionRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.chatId = _value.chatId;
    this.sessionId = _value.sessionId;
    this.question = _value.question;
    this.stream = _value.stream;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagChatCompletionRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get chatId(): string {
    return this._chatId;
  }
  set chatId(value: string) {
    this._chatId = value;
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get question(): string {
    return this._question;
  }
  set question(value: string) {
    this._question = value;
  }
  get stream(): boolean {
    return this._stream;
  }
  set stream(value: boolean) {
    this._stream = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagChatCompletionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagChatCompletionRequest.AsObject {
    return {
      parent: this.parent,
      chatId: this.chatId,
      sessionId: this.sessionId,
      question: this.question,
      stream: this.stream,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagChatCompletionRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      chatId: this.chatId,
      sessionId: this.sessionId,
      question: this.question,
      stream: this.stream,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagChatCompletionRequest {
  /**
   * Standard JavaScript object representation for RagChatCompletionRequest
   */
  export interface AsObject {
    parent: string;
    chatId: string;
    sessionId: string;
    question: string;
    stream: boolean;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagChatCompletionRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    chatId: string;
    sessionId: string;
    question: string;
    stream: boolean;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagChatCompletionResponse
 */
export class RagChatCompletionResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagChatCompletionResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagChatCompletionResponse();
    RagChatCompletionResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagChatCompletionResponse) {
    _instance.answer = _instance.answer || '';
    _instance.reference = _instance.reference || undefined;
    _instance.audioBinary = _instance.audioBinary || '';
    _instance.id = _instance.id || '';
    _instance.sessionId = _instance.sessionId || '';
    _instance.prompt = _instance.prompt || '';
    _instance.createdAt = _instance.createdAt || 0;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagChatCompletionResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.answer = _reader.readString();
          break;
        case 2:
          _instance.reference = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.reference,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.audioBinary = _reader.readString();
          break;
        case 4:
          _instance.id = _reader.readString();
          break;
        case 5:
          _instance.sessionId = _reader.readString();
          break;
        case 6:
          _instance.prompt = _reader.readString();
          break;
        case 7:
          _instance.createdAt = _reader.readDouble();
          break;
        case 8:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagChatCompletionResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagChatCompletionResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.answer) {
      _writer.writeString(1, _instance.answer);
    }
    if (_instance.reference) {
      _writer.writeMessage(
        2,
        _instance.reference as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.audioBinary) {
      _writer.writeString(3, _instance.audioBinary);
    }
    if (_instance.id) {
      _writer.writeString(4, _instance.id);
    }
    if (_instance.sessionId) {
      _writer.writeString(5, _instance.sessionId);
    }
    if (_instance.prompt) {
      _writer.writeString(6, _instance.prompt);
    }
    if (_instance.createdAt) {
      _writer.writeDouble(7, _instance.createdAt);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        8,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _answer: string;
  private _reference?: googleProtobuf001.Struct;
  private _audioBinary: string;
  private _id: string;
  private _sessionId: string;
  private _prompt: string;
  private _createdAt: number;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagChatCompletionResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagChatCompletionResponse.AsObject>) {
    _value = _value || {};
    this.answer = _value.answer;
    this.reference = _value.reference
      ? new googleProtobuf001.Struct(_value.reference)
      : undefined;
    this.audioBinary = _value.audioBinary;
    this.id = _value.id;
    this.sessionId = _value.sessionId;
    this.prompt = _value.prompt;
    this.createdAt = _value.createdAt;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagChatCompletionResponse.refineValues(this);
  }
  get answer(): string {
    return this._answer;
  }
  set answer(value: string) {
    this._answer = value;
  }
  get reference(): googleProtobuf001.Struct | undefined {
    return this._reference;
  }
  set reference(value: googleProtobuf001.Struct | undefined) {
    this._reference = value;
  }
  get audioBinary(): string {
    return this._audioBinary;
  }
  set audioBinary(value: string) {
    this._audioBinary = value;
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get prompt(): string {
    return this._prompt;
  }
  set prompt(value: string) {
    this._prompt = value;
  }
  get createdAt(): number {
    return this._createdAt;
  }
  set createdAt(value: number) {
    this._createdAt = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagChatCompletionResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagChatCompletionResponse.AsObject {
    return {
      answer: this.answer,
      reference: this.reference ? this.reference.toObject() : undefined,
      audioBinary: this.audioBinary,
      id: this.id,
      sessionId: this.sessionId,
      prompt: this.prompt,
      createdAt: this.createdAt,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagChatCompletionResponse.AsProtobufJSON {
    return {
      answer: this.answer,
      reference: this.reference ? this.reference.toProtobufJSON(options) : null,
      audioBinary: this.audioBinary,
      id: this.id,
      sessionId: this.sessionId,
      prompt: this.prompt,
      createdAt: this.createdAt,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagChatCompletionResponse {
  /**
   * Standard JavaScript object representation for RagChatCompletionResponse
   */
  export interface AsObject {
    answer: string;
    reference?: googleProtobuf001.Struct.AsObject;
    audioBinary: string;
    id: string;
    sessionId: string;
    prompt: string;
    createdAt: number;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagChatCompletionResponse
   */
  export interface AsProtobufJSON {
    answer: string;
    reference: googleProtobuf001.Struct.AsProtobufJSON | null;
    audioBinary: string;
    id: string;
    sessionId: string;
    prompt: string;
    createdAt: number;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagOpenAiChatCompletionRequest
 */
export class RagOpenAiChatCompletionRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagOpenAiChatCompletionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagOpenAiChatCompletionRequest();
    RagOpenAiChatCompletionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagOpenAiChatCompletionRequest) {
    _instance.parent = _instance.parent || '';
    _instance.chatId = _instance.chatId || '';
    _instance.model = _instance.model || '';
    _instance.messages = _instance.messages || [];
    _instance.stream = _instance.stream || false;
    _instance.reference = _instance.reference || false;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagOpenAiChatCompletionRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.chatId = _reader.readString();
          break;
        case 3:
          _instance.model = _reader.readString();
          break;
        case 4:
          const messageInitializer4 = new RagMessage();
          _reader.readMessage(
            messageInitializer4,
            RagMessage.deserializeBinaryFromReader
          );
          (_instance.messages = _instance.messages || []).push(
            messageInitializer4
          );
          break;
        case 5:
          _instance.stream = _reader.readBool();
          break;
        case 6:
          _instance.reference = _reader.readBool();
          break;
        case 7:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagOpenAiChatCompletionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagOpenAiChatCompletionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.chatId) {
      _writer.writeString(2, _instance.chatId);
    }
    if (_instance.model) {
      _writer.writeString(3, _instance.model);
    }
    if (_instance.messages && _instance.messages.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.messages as any,
        RagMessage.serializeBinaryToWriter
      );
    }
    if (_instance.stream) {
      _writer.writeBool(5, _instance.stream);
    }
    if (_instance.reference) {
      _writer.writeBool(6, _instance.reference);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        7,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _chatId: string;
  private _model: string;
  private _messages?: RagMessage[];
  private _stream: boolean;
  private _reference: boolean;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagOpenAiChatCompletionRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagOpenAiChatCompletionRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.chatId = _value.chatId;
    this.model = _value.model;
    this.messages = (_value.messages || []).map(m => new RagMessage(m));
    this.stream = _value.stream;
    this.reference = _value.reference;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagOpenAiChatCompletionRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get chatId(): string {
    return this._chatId;
  }
  set chatId(value: string) {
    this._chatId = value;
  }
  get model(): string {
    return this._model;
  }
  set model(value: string) {
    this._model = value;
  }
  get messages(): RagMessage[] | undefined {
    return this._messages;
  }
  set messages(value: RagMessage[] | undefined) {
    this._messages = value;
  }
  get stream(): boolean {
    return this._stream;
  }
  set stream(value: boolean) {
    this._stream = value;
  }
  get reference(): boolean {
    return this._reference;
  }
  set reference(value: boolean) {
    this._reference = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagOpenAiChatCompletionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagOpenAiChatCompletionRequest.AsObject {
    return {
      parent: this.parent,
      chatId: this.chatId,
      model: this.model,
      messages: (this.messages || []).map(m => m.toObject()),
      stream: this.stream,
      reference: this.reference,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagOpenAiChatCompletionRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      chatId: this.chatId,
      model: this.model,
      messages: (this.messages || []).map(m => m.toProtobufJSON(options)),
      stream: this.stream,
      reference: this.reference,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagOpenAiChatCompletionRequest {
  /**
   * Standard JavaScript object representation for RagOpenAiChatCompletionRequest
   */
  export interface AsObject {
    parent: string;
    chatId: string;
    model: string;
    messages?: RagMessage.AsObject[];
    stream: boolean;
    reference: boolean;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagOpenAiChatCompletionRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    chatId: string;
    model: string;
    messages: RagMessage.AsProtobufJSON[] | null;
    stream: boolean;
    reference: boolean;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagOpenAiChatCompletionResponse
 */
export class RagOpenAiChatCompletionResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagOpenAiChatCompletionResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagOpenAiChatCompletionResponse();
    RagOpenAiChatCompletionResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagOpenAiChatCompletionResponse) {
    _instance.id = _instance.id || '';
    _instance.object = _instance.object || '';
    _instance.created = _instance.created || '0';
    _instance.model = _instance.model || '';
    _instance.systemFingerprint = _instance.systemFingerprint || '';
    _instance.choices = _instance.choices || [];
    _instance.usage = _instance.usage || undefined;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagOpenAiChatCompletionResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.object = _reader.readString();
          break;
        case 3:
          _instance.created = _reader.readInt64String();
          break;
        case 4:
          _instance.model = _reader.readString();
          break;
        case 5:
          _instance.systemFingerprint = _reader.readString();
          break;
        case 6:
          const messageInitializer6 = new RagOpenAiChatChoice();
          _reader.readMessage(
            messageInitializer6,
            RagOpenAiChatChoice.deserializeBinaryFromReader
          );
          (_instance.choices = _instance.choices || []).push(
            messageInitializer6
          );
          break;
        case 7:
          _instance.usage = new RagOpenAiChatUsage();
          _reader.readMessage(
            _instance.usage,
            RagOpenAiChatUsage.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagOpenAiChatCompletionResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagOpenAiChatCompletionResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.object) {
      _writer.writeString(2, _instance.object);
    }
    if (_instance.created) {
      _writer.writeInt64String(3, _instance.created);
    }
    if (_instance.model) {
      _writer.writeString(4, _instance.model);
    }
    if (_instance.systemFingerprint) {
      _writer.writeString(5, _instance.systemFingerprint);
    }
    if (_instance.choices && _instance.choices.length) {
      _writer.writeRepeatedMessage(
        6,
        _instance.choices as any,
        RagOpenAiChatChoice.serializeBinaryToWriter
      );
    }
    if (_instance.usage) {
      _writer.writeMessage(
        7,
        _instance.usage as any,
        RagOpenAiChatUsage.serializeBinaryToWriter
      );
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        8,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _id: string;
  private _object: string;
  private _created: string;
  private _model: string;
  private _systemFingerprint: string;
  private _choices?: RagOpenAiChatChoice[];
  private _usage?: RagOpenAiChatUsage;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagOpenAiChatCompletionResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagOpenAiChatCompletionResponse.AsObject>
  ) {
    _value = _value || {};
    this.id = _value.id;
    this.object = _value.object;
    this.created = _value.created;
    this.model = _value.model;
    this.systemFingerprint = _value.systemFingerprint;
    this.choices = (_value.choices || []).map(m => new RagOpenAiChatChoice(m));
    this.usage = _value.usage
      ? new RagOpenAiChatUsage(_value.usage)
      : undefined;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagOpenAiChatCompletionResponse.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get object(): string {
    return this._object;
  }
  set object(value: string) {
    this._object = value;
  }
  get created(): string {
    return this._created;
  }
  set created(value: string) {
    this._created = value;
  }
  get model(): string {
    return this._model;
  }
  set model(value: string) {
    this._model = value;
  }
  get systemFingerprint(): string {
    return this._systemFingerprint;
  }
  set systemFingerprint(value: string) {
    this._systemFingerprint = value;
  }
  get choices(): RagOpenAiChatChoice[] | undefined {
    return this._choices;
  }
  set choices(value: RagOpenAiChatChoice[] | undefined) {
    this._choices = value;
  }
  get usage(): RagOpenAiChatUsage | undefined {
    return this._usage;
  }
  set usage(value: RagOpenAiChatUsage | undefined) {
    this._usage = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagOpenAiChatCompletionResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagOpenAiChatCompletionResponse.AsObject {
    return {
      id: this.id,
      object: this.object,
      created: this.created,
      model: this.model,
      systemFingerprint: this.systemFingerprint,
      choices: (this.choices || []).map(m => m.toObject()),
      usage: this.usage ? this.usage.toObject() : undefined,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagOpenAiChatCompletionResponse.AsProtobufJSON {
    return {
      id: this.id,
      object: this.object,
      created: this.created,
      model: this.model,
      systemFingerprint: this.systemFingerprint,
      choices: (this.choices || []).map(m => m.toProtobufJSON(options)),
      usage: this.usage ? this.usage.toProtobufJSON(options) : null,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagOpenAiChatCompletionResponse {
  /**
   * Standard JavaScript object representation for RagOpenAiChatCompletionResponse
   */
  export interface AsObject {
    id: string;
    object: string;
    created: string;
    model: string;
    systemFingerprint: string;
    choices?: RagOpenAiChatChoice.AsObject[];
    usage?: RagOpenAiChatUsage.AsObject;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagOpenAiChatCompletionResponse
   */
  export interface AsProtobufJSON {
    id: string;
    object: string;
    created: string;
    model: string;
    systemFingerprint: string;
    choices: RagOpenAiChatChoice.AsProtobufJSON[] | null;
    usage: RagOpenAiChatUsage.AsProtobufJSON | null;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagOpenAiChatChoice
 */
export class RagOpenAiChatChoice implements GrpcMessage {
  static id = 'ondewo.nlu.RagOpenAiChatChoice';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagOpenAiChatChoice();
    RagOpenAiChatChoice.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagOpenAiChatChoice) {
    _instance.index = _instance.index || 0;

    _instance.finishReason = _instance.finishReason || '';
    _instance.logprobs = _instance.logprobs || undefined;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagOpenAiChatChoice,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.index = _reader.readInt32();
          break;
        case 2:
          _instance.message = new RagOpenAiChatContent();
          _reader.readMessage(
            _instance.message,
            RagOpenAiChatContent.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.delta = new RagOpenAiChatContent();
          _reader.readMessage(
            _instance.delta,
            RagOpenAiChatContent.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.finishReason = _reader.readString();
          break;
        case 5:
          _instance.logprobs = new googleProtobuf001.Value();
          _reader.readMessage(
            _instance.logprobs,
            googleProtobuf001.Value.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagOpenAiChatChoice.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagOpenAiChatChoice,
    _writer: BinaryWriter
  ) {
    if (_instance.index) {
      _writer.writeInt32(1, _instance.index);
    }
    if (_instance.message) {
      _writer.writeMessage(
        2,
        _instance.message as any,
        RagOpenAiChatContent.serializeBinaryToWriter
      );
    }
    if (_instance.delta) {
      _writer.writeMessage(
        3,
        _instance.delta as any,
        RagOpenAiChatContent.serializeBinaryToWriter
      );
    }
    if (_instance.finishReason) {
      _writer.writeString(4, _instance.finishReason);
    }
    if (_instance.logprobs) {
      _writer.writeMessage(
        5,
        _instance.logprobs as any,
        googleProtobuf001.Value.serializeBinaryToWriter
      );
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        6,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _index: number;
  private _message?: RagOpenAiChatContent;
  private _delta?: RagOpenAiChatContent;
  private _finishReason: string;
  private _logprobs?: googleProtobuf001.Value;
  private _additionalFields?: googleProtobuf001.Struct;

  private _content: RagOpenAiChatChoice.ContentCase =
    RagOpenAiChatChoice.ContentCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagOpenAiChatChoice to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagOpenAiChatChoice.AsObject>) {
    _value = _value || {};
    this.index = _value.index;
    this.message = _value.message
      ? new RagOpenAiChatContent(_value.message)
      : undefined;
    this.delta = _value.delta
      ? new RagOpenAiChatContent(_value.delta)
      : undefined;
    this.finishReason = _value.finishReason;
    this.logprobs = _value.logprobs
      ? new googleProtobuf001.Value(_value.logprobs)
      : undefined;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagOpenAiChatChoice.refineValues(this);
  }
  get index(): number {
    return this._index;
  }
  set index(value: number) {
    this._index = value;
  }
  get message(): RagOpenAiChatContent | undefined {
    return this._message;
  }
  set message(value: RagOpenAiChatContent | undefined) {
    if (value !== undefined && value !== null) {
      this._delta = undefined;
      this._content = RagOpenAiChatChoice.ContentCase.message;
    }
    this._message = value;
  }
  get delta(): RagOpenAiChatContent | undefined {
    return this._delta;
  }
  set delta(value: RagOpenAiChatContent | undefined) {
    if (value !== undefined && value !== null) {
      this._message = undefined;
      this._content = RagOpenAiChatChoice.ContentCase.delta;
    }
    this._delta = value;
  }
  get finishReason(): string {
    return this._finishReason;
  }
  set finishReason(value: string) {
    this._finishReason = value;
  }
  get logprobs(): googleProtobuf001.Value | undefined {
    return this._logprobs;
  }
  set logprobs(value: googleProtobuf001.Value | undefined) {
    this._logprobs = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }
  get content() {
    return this._content;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagOpenAiChatChoice.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagOpenAiChatChoice.AsObject {
    return {
      index: this.index,
      message: this.message ? this.message.toObject() : undefined,
      delta: this.delta ? this.delta.toObject() : undefined,
      finishReason: this.finishReason,
      logprobs: this.logprobs ? this.logprobs.toObject() : undefined,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagOpenAiChatChoice.AsProtobufJSON {
    return {
      index: this.index,
      message: this.message ? this.message.toProtobufJSON(options) : null,
      delta: this.delta ? this.delta.toProtobufJSON(options) : null,
      finishReason: this.finishReason,
      logprobs: this.logprobs ? this.logprobs.toProtobufJSON(options) : null,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagOpenAiChatChoice {
  /**
   * Standard JavaScript object representation for RagOpenAiChatChoice
   */
  export interface AsObject {
    index: number;
    message?: RagOpenAiChatContent.AsObject;
    delta?: RagOpenAiChatContent.AsObject;
    finishReason: string;
    logprobs?: googleProtobuf001.Value.AsObject;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagOpenAiChatChoice
   */
  export interface AsProtobufJSON {
    index: number;
    message: RagOpenAiChatContent.AsProtobufJSON | null;
    delta: RagOpenAiChatContent.AsProtobufJSON | null;
    finishReason: string;
    logprobs: googleProtobuf001.Value.AsProtobufJSON | null;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
  export enum ContentCase {
    none = 0,
    message = 1,
    delta = 2
  }
}

/**
 * Message implementation for ondewo.nlu.RagOpenAiChatContent
 */
export class RagOpenAiChatContent implements GrpcMessage {
  static id = 'ondewo.nlu.RagOpenAiChatContent';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagOpenAiChatContent();
    RagOpenAiChatContent.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagOpenAiChatContent) {
    _instance.role = _instance.role || '';
    _instance.content = _instance.content || '';
    _instance.reasoningContent = _instance.reasoningContent || '';
    _instance.functionCall = _instance.functionCall || undefined;
    _instance.toolCalls = _instance.toolCalls || undefined;
    _instance.reference = _instance.reference || undefined;
    _instance.finalContent = _instance.finalContent || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagOpenAiChatContent,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.role = _reader.readString();
          break;
        case 2:
          _instance.content = _reader.readString();
          break;
        case 3:
          _instance.reasoningContent = _reader.readString();
          break;
        case 4:
          _instance.functionCall = new googleProtobuf001.Value();
          _reader.readMessage(
            _instance.functionCall,
            googleProtobuf001.Value.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.toolCalls = new googleProtobuf001.Value();
          _reader.readMessage(
            _instance.toolCalls,
            googleProtobuf001.Value.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.reference = new googleProtobuf001.Value();
          _reader.readMessage(
            _instance.reference,
            googleProtobuf001.Value.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.finalContent = _reader.readString();
          break;
        case 8:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagOpenAiChatContent.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagOpenAiChatContent,
    _writer: BinaryWriter
  ) {
    if (_instance.role) {
      _writer.writeString(1, _instance.role);
    }
    if (_instance.content) {
      _writer.writeString(2, _instance.content);
    }
    if (_instance.reasoningContent) {
      _writer.writeString(3, _instance.reasoningContent);
    }
    if (_instance.functionCall) {
      _writer.writeMessage(
        4,
        _instance.functionCall as any,
        googleProtobuf001.Value.serializeBinaryToWriter
      );
    }
    if (_instance.toolCalls) {
      _writer.writeMessage(
        5,
        _instance.toolCalls as any,
        googleProtobuf001.Value.serializeBinaryToWriter
      );
    }
    if (_instance.reference) {
      _writer.writeMessage(
        6,
        _instance.reference as any,
        googleProtobuf001.Value.serializeBinaryToWriter
      );
    }
    if (_instance.finalContent) {
      _writer.writeString(7, _instance.finalContent);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        8,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _role: string;
  private _content: string;
  private _reasoningContent: string;
  private _functionCall?: googleProtobuf001.Value;
  private _toolCalls?: googleProtobuf001.Value;
  private _reference?: googleProtobuf001.Value;
  private _finalContent: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagOpenAiChatContent to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagOpenAiChatContent.AsObject>) {
    _value = _value || {};
    this.role = _value.role;
    this.content = _value.content;
    this.reasoningContent = _value.reasoningContent;
    this.functionCall = _value.functionCall
      ? new googleProtobuf001.Value(_value.functionCall)
      : undefined;
    this.toolCalls = _value.toolCalls
      ? new googleProtobuf001.Value(_value.toolCalls)
      : undefined;
    this.reference = _value.reference
      ? new googleProtobuf001.Value(_value.reference)
      : undefined;
    this.finalContent = _value.finalContent;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagOpenAiChatContent.refineValues(this);
  }
  get role(): string {
    return this._role;
  }
  set role(value: string) {
    this._role = value;
  }
  get content(): string {
    return this._content;
  }
  set content(value: string) {
    this._content = value;
  }
  get reasoningContent(): string {
    return this._reasoningContent;
  }
  set reasoningContent(value: string) {
    this._reasoningContent = value;
  }
  get functionCall(): googleProtobuf001.Value | undefined {
    return this._functionCall;
  }
  set functionCall(value: googleProtobuf001.Value | undefined) {
    this._functionCall = value;
  }
  get toolCalls(): googleProtobuf001.Value | undefined {
    return this._toolCalls;
  }
  set toolCalls(value: googleProtobuf001.Value | undefined) {
    this._toolCalls = value;
  }
  get reference(): googleProtobuf001.Value | undefined {
    return this._reference;
  }
  set reference(value: googleProtobuf001.Value | undefined) {
    this._reference = value;
  }
  get finalContent(): string {
    return this._finalContent;
  }
  set finalContent(value: string) {
    this._finalContent = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagOpenAiChatContent.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagOpenAiChatContent.AsObject {
    return {
      role: this.role,
      content: this.content,
      reasoningContent: this.reasoningContent,
      functionCall: this.functionCall
        ? this.functionCall.toObject()
        : undefined,
      toolCalls: this.toolCalls ? this.toolCalls.toObject() : undefined,
      reference: this.reference ? this.reference.toObject() : undefined,
      finalContent: this.finalContent,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagOpenAiChatContent.AsProtobufJSON {
    return {
      role: this.role,
      content: this.content,
      reasoningContent: this.reasoningContent,
      functionCall: this.functionCall
        ? this.functionCall.toProtobufJSON(options)
        : null,
      toolCalls: this.toolCalls ? this.toolCalls.toProtobufJSON(options) : null,
      reference: this.reference ? this.reference.toProtobufJSON(options) : null,
      finalContent: this.finalContent,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagOpenAiChatContent {
  /**
   * Standard JavaScript object representation for RagOpenAiChatContent
   */
  export interface AsObject {
    role: string;
    content: string;
    reasoningContent: string;
    functionCall?: googleProtobuf001.Value.AsObject;
    toolCalls?: googleProtobuf001.Value.AsObject;
    reference?: googleProtobuf001.Value.AsObject;
    finalContent: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagOpenAiChatContent
   */
  export interface AsProtobufJSON {
    role: string;
    content: string;
    reasoningContent: string;
    functionCall: googleProtobuf001.Value.AsProtobufJSON | null;
    toolCalls: googleProtobuf001.Value.AsProtobufJSON | null;
    reference: googleProtobuf001.Value.AsProtobufJSON | null;
    finalContent: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagOpenAiChatUsage
 */
export class RagOpenAiChatUsage implements GrpcMessage {
  static id = 'ondewo.nlu.RagOpenAiChatUsage';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagOpenAiChatUsage();
    RagOpenAiChatUsage.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagOpenAiChatUsage) {
    _instance.promptTokens = _instance.promptTokens || 0;
    _instance.completionTokens = _instance.completionTokens || 0;
    _instance.totalTokens = _instance.totalTokens || 0;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagOpenAiChatUsage,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.promptTokens = _reader.readInt32();
          break;
        case 2:
          _instance.completionTokens = _reader.readInt32();
          break;
        case 3:
          _instance.totalTokens = _reader.readInt32();
          break;
        case 8:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagOpenAiChatUsage.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagOpenAiChatUsage,
    _writer: BinaryWriter
  ) {
    if (_instance.promptTokens) {
      _writer.writeInt32(1, _instance.promptTokens);
    }
    if (_instance.completionTokens) {
      _writer.writeInt32(2, _instance.completionTokens);
    }
    if (_instance.totalTokens) {
      _writer.writeInt32(3, _instance.totalTokens);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        8,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _promptTokens: number;
  private _completionTokens: number;
  private _totalTokens: number;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagOpenAiChatUsage to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagOpenAiChatUsage.AsObject>) {
    _value = _value || {};
    this.promptTokens = _value.promptTokens;
    this.completionTokens = _value.completionTokens;
    this.totalTokens = _value.totalTokens;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagOpenAiChatUsage.refineValues(this);
  }
  get promptTokens(): number {
    return this._promptTokens;
  }
  set promptTokens(value: number) {
    this._promptTokens = value;
  }
  get completionTokens(): number {
    return this._completionTokens;
  }
  set completionTokens(value: number) {
    this._completionTokens = value;
  }
  get totalTokens(): number {
    return this._totalTokens;
  }
  set totalTokens(value: number) {
    this._totalTokens = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagOpenAiChatUsage.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagOpenAiChatUsage.AsObject {
    return {
      promptTokens: this.promptTokens,
      completionTokens: this.completionTokens,
      totalTokens: this.totalTokens,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagOpenAiChatUsage.AsProtobufJSON {
    return {
      promptTokens: this.promptTokens,
      completionTokens: this.completionTokens,
      totalTokens: this.totalTokens,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagOpenAiChatUsage {
  /**
   * Standard JavaScript object representation for RagOpenAiChatUsage
   */
  export interface AsObject {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagOpenAiChatUsage
   */
  export interface AsProtobufJSON {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagAgentCompletionRequest
 */
export class RagAgentCompletionRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagAgentCompletionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagAgentCompletionRequest();
    RagAgentCompletionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagAgentCompletionRequest) {
    _instance.parent = _instance.parent || '';
    _instance.agentId = _instance.agentId || '';
    _instance.sessionId = _instance.sessionId || '';
    _instance.question = _instance.question || '';
    _instance.stream = _instance.stream || false;
    _instance.files = _instance.files || [];
    _instance.inputs = _instance.inputs || undefined;
    _instance.userId = _instance.userId || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagAgentCompletionRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.agentId = _reader.readString();
          break;
        case 3:
          _instance.sessionId = _reader.readString();
          break;
        case 4:
          _instance.question = _reader.readString();
          break;
        case 5:
          _instance.stream = _reader.readBool();
          break;
        case 6:
          const messageInitializer6 = new RagFile();
          _reader.readMessage(
            messageInitializer6,
            RagFile.deserializeBinaryFromReader
          );
          (_instance.files = _instance.files || []).push(messageInitializer6);
          break;
        case 7:
          _instance.inputs = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.inputs,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.userId = _reader.readString();
          break;
        case 9:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagAgentCompletionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagAgentCompletionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.agentId) {
      _writer.writeString(2, _instance.agentId);
    }
    if (_instance.sessionId) {
      _writer.writeString(3, _instance.sessionId);
    }
    if (_instance.question) {
      _writer.writeString(4, _instance.question);
    }
    if (_instance.stream) {
      _writer.writeBool(5, _instance.stream);
    }
    if (_instance.files && _instance.files.length) {
      _writer.writeRepeatedMessage(
        6,
        _instance.files as any,
        RagFile.serializeBinaryToWriter
      );
    }
    if (_instance.inputs) {
      _writer.writeMessage(
        7,
        _instance.inputs as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.userId) {
      _writer.writeString(8, _instance.userId);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        9,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _agentId: string;
  private _sessionId: string;
  private _question: string;
  private _stream: boolean;
  private _files?: RagFile[];
  private _inputs?: googleProtobuf001.Struct;
  private _userId: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagAgentCompletionRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagAgentCompletionRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.agentId = _value.agentId;
    this.sessionId = _value.sessionId;
    this.question = _value.question;
    this.stream = _value.stream;
    this.files = (_value.files || []).map(m => new RagFile(m));
    this.inputs = _value.inputs
      ? new googleProtobuf001.Struct(_value.inputs)
      : undefined;
    this.userId = _value.userId;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagAgentCompletionRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get agentId(): string {
    return this._agentId;
  }
  set agentId(value: string) {
    this._agentId = value;
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get question(): string {
    return this._question;
  }
  set question(value: string) {
    this._question = value;
  }
  get stream(): boolean {
    return this._stream;
  }
  set stream(value: boolean) {
    this._stream = value;
  }
  get files(): RagFile[] | undefined {
    return this._files;
  }
  set files(value: RagFile[] | undefined) {
    this._files = value;
  }
  get inputs(): googleProtobuf001.Struct | undefined {
    return this._inputs;
  }
  set inputs(value: googleProtobuf001.Struct | undefined) {
    this._inputs = value;
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagAgentCompletionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagAgentCompletionRequest.AsObject {
    return {
      parent: this.parent,
      agentId: this.agentId,
      sessionId: this.sessionId,
      question: this.question,
      stream: this.stream,
      files: (this.files || []).map(m => m.toObject()),
      inputs: this.inputs ? this.inputs.toObject() : undefined,
      userId: this.userId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagAgentCompletionRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      agentId: this.agentId,
      sessionId: this.sessionId,
      question: this.question,
      stream: this.stream,
      files: (this.files || []).map(m => m.toProtobufJSON(options)),
      inputs: this.inputs ? this.inputs.toProtobufJSON(options) : null,
      userId: this.userId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagAgentCompletionRequest {
  /**
   * Standard JavaScript object representation for RagAgentCompletionRequest
   */
  export interface AsObject {
    parent: string;
    agentId: string;
    sessionId: string;
    question: string;
    stream: boolean;
    files?: RagFile.AsObject[];
    inputs?: googleProtobuf001.Struct.AsObject;
    userId: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagAgentCompletionRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    agentId: string;
    sessionId: string;
    question: string;
    stream: boolean;
    files: RagFile.AsProtobufJSON[] | null;
    inputs: googleProtobuf001.Struct.AsProtobufJSON | null;
    userId: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagAgentCompletionResponse
 */
export class RagAgentCompletionResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagAgentCompletionResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagAgentCompletionResponse();
    RagAgentCompletionResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagAgentCompletionResponse) {
    _instance.event = _instance.event || 0;
    _instance.messageId = _instance.messageId || '';
    _instance.createdAt = _instance.createdAt || '0';
    _instance.taskId = _instance.taskId || '';
    _instance.data = _instance.data || undefined;
    _instance.sessionId = _instance.sessionId || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagAgentCompletionResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.event = _reader.readEnum();
          break;
        case 2:
          _instance.messageId = _reader.readString();
          break;
        case 3:
          _instance.createdAt = _reader.readInt64String();
          break;
        case 4:
          _instance.taskId = _reader.readString();
          break;
        case 5:
          _instance.data = new RagAgentCompletionData();
          _reader.readMessage(
            _instance.data,
            RagAgentCompletionData.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.sessionId = _reader.readString();
          break;
        case 7:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagAgentCompletionResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagAgentCompletionResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.event) {
      _writer.writeEnum(1, _instance.event);
    }
    if (_instance.messageId) {
      _writer.writeString(2, _instance.messageId);
    }
    if (_instance.createdAt) {
      _writer.writeInt64String(3, _instance.createdAt);
    }
    if (_instance.taskId) {
      _writer.writeString(4, _instance.taskId);
    }
    if (_instance.data) {
      _writer.writeMessage(
        5,
        _instance.data as any,
        RagAgentCompletionData.serializeBinaryToWriter
      );
    }
    if (_instance.sessionId) {
      _writer.writeString(6, _instance.sessionId);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        7,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _event: RagAgentEventType;
  private _messageId: string;
  private _createdAt: string;
  private _taskId: string;
  private _data?: RagAgentCompletionData;
  private _sessionId: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagAgentCompletionResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagAgentCompletionResponse.AsObject>) {
    _value = _value || {};
    this.event = _value.event;
    this.messageId = _value.messageId;
    this.createdAt = _value.createdAt;
    this.taskId = _value.taskId;
    this.data = _value.data
      ? new RagAgentCompletionData(_value.data)
      : undefined;
    this.sessionId = _value.sessionId;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagAgentCompletionResponse.refineValues(this);
  }
  get event(): RagAgentEventType {
    return this._event;
  }
  set event(value: RagAgentEventType) {
    this._event = value;
  }
  get messageId(): string {
    return this._messageId;
  }
  set messageId(value: string) {
    this._messageId = value;
  }
  get createdAt(): string {
    return this._createdAt;
  }
  set createdAt(value: string) {
    this._createdAt = value;
  }
  get taskId(): string {
    return this._taskId;
  }
  set taskId(value: string) {
    this._taskId = value;
  }
  get data(): RagAgentCompletionData | undefined {
    return this._data;
  }
  set data(value: RagAgentCompletionData | undefined) {
    this._data = value;
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagAgentCompletionResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagAgentCompletionResponse.AsObject {
    return {
      event: this.event,
      messageId: this.messageId,
      createdAt: this.createdAt,
      taskId: this.taskId,
      data: this.data ? this.data.toObject() : undefined,
      sessionId: this.sessionId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagAgentCompletionResponse.AsProtobufJSON {
    return {
      event:
        RagAgentEventType[
          this.event === null || this.event === undefined ? 0 : this.event
        ],
      messageId: this.messageId,
      createdAt: this.createdAt,
      taskId: this.taskId,
      data: this.data ? this.data.toProtobufJSON(options) : null,
      sessionId: this.sessionId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagAgentCompletionResponse {
  /**
   * Standard JavaScript object representation for RagAgentCompletionResponse
   */
  export interface AsObject {
    event: RagAgentEventType;
    messageId: string;
    createdAt: string;
    taskId: string;
    data?: RagAgentCompletionData.AsObject;
    sessionId: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagAgentCompletionResponse
   */
  export interface AsProtobufJSON {
    event: string;
    messageId: string;
    createdAt: string;
    taskId: string;
    data: RagAgentCompletionData.AsProtobufJSON | null;
    sessionId: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagAgentCompletionData
 */
export class RagAgentCompletionData implements GrpcMessage {
  static id = 'ondewo.nlu.RagAgentCompletionData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagAgentCompletionData();
    RagAgentCompletionData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagAgentCompletionData) {
    _instance.content = _instance.content || '';
    _instance.inputs = _instance.inputs || undefined;
    _instance.outputs = _instance.outputs || undefined;
    _instance.reference = _instance.reference || undefined;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagAgentCompletionData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.content = _reader.readString();
          break;
        case 2:
          _instance.inputs = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.inputs,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.outputs = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.outputs,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.reference = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.reference,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagAgentCompletionData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagAgentCompletionData,
    _writer: BinaryWriter
  ) {
    if (_instance.content) {
      _writer.writeString(1, _instance.content);
    }
    if (_instance.inputs) {
      _writer.writeMessage(
        2,
        _instance.inputs as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.outputs) {
      _writer.writeMessage(
        3,
        _instance.outputs as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.reference) {
      _writer.writeMessage(
        4,
        _instance.reference as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        5,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _content: string;
  private _inputs?: googleProtobuf001.Struct;
  private _outputs?: googleProtobuf001.Struct;
  private _reference?: googleProtobuf001.Struct;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagAgentCompletionData to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagAgentCompletionData.AsObject>) {
    _value = _value || {};
    this.content = _value.content;
    this.inputs = _value.inputs
      ? new googleProtobuf001.Struct(_value.inputs)
      : undefined;
    this.outputs = _value.outputs
      ? new googleProtobuf001.Struct(_value.outputs)
      : undefined;
    this.reference = _value.reference
      ? new googleProtobuf001.Struct(_value.reference)
      : undefined;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagAgentCompletionData.refineValues(this);
  }
  get content(): string {
    return this._content;
  }
  set content(value: string) {
    this._content = value;
  }
  get inputs(): googleProtobuf001.Struct | undefined {
    return this._inputs;
  }
  set inputs(value: googleProtobuf001.Struct | undefined) {
    this._inputs = value;
  }
  get outputs(): googleProtobuf001.Struct | undefined {
    return this._outputs;
  }
  set outputs(value: googleProtobuf001.Struct | undefined) {
    this._outputs = value;
  }
  get reference(): googleProtobuf001.Struct | undefined {
    return this._reference;
  }
  set reference(value: googleProtobuf001.Struct | undefined) {
    this._reference = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagAgentCompletionData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagAgentCompletionData.AsObject {
    return {
      content: this.content,
      inputs: this.inputs ? this.inputs.toObject() : undefined,
      outputs: this.outputs ? this.outputs.toObject() : undefined,
      reference: this.reference ? this.reference.toObject() : undefined,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagAgentCompletionData.AsProtobufJSON {
    return {
      content: this.content,
      inputs: this.inputs ? this.inputs.toProtobufJSON(options) : null,
      outputs: this.outputs ? this.outputs.toProtobufJSON(options) : null,
      reference: this.reference ? this.reference.toProtobufJSON(options) : null,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagAgentCompletionData {
  /**
   * Standard JavaScript object representation for RagAgentCompletionData
   */
  export interface AsObject {
    content: string;
    inputs?: googleProtobuf001.Struct.AsObject;
    outputs?: googleProtobuf001.Struct.AsObject;
    reference?: googleProtobuf001.Struct.AsObject;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagAgentCompletionData
   */
  export interface AsProtobufJSON {
    content: string;
    inputs: googleProtobuf001.Struct.AsProtobufJSON | null;
    outputs: googleProtobuf001.Struct.AsProtobufJSON | null;
    reference: googleProtobuf001.Struct.AsProtobufJSON | null;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagOpenAiAgentCompletionRequest
 */
export class RagOpenAiAgentCompletionRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagOpenAiAgentCompletionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagOpenAiAgentCompletionRequest();
    RagOpenAiAgentCompletionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagOpenAiAgentCompletionRequest) {
    _instance.parent = _instance.parent || '';
    _instance.agentId = _instance.agentId || '';
    _instance.model = _instance.model || '';
    _instance.messages = _instance.messages || [];
    _instance.stream = _instance.stream || false;
    _instance.sessionId = _instance.sessionId || '';
    _instance.id = _instance.id || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagOpenAiAgentCompletionRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.agentId = _reader.readString();
          break;
        case 3:
          _instance.model = _reader.readString();
          break;
        case 4:
          const messageInitializer4 = new RagMessage();
          _reader.readMessage(
            messageInitializer4,
            RagMessage.deserializeBinaryFromReader
          );
          (_instance.messages = _instance.messages || []).push(
            messageInitializer4
          );
          break;
        case 5:
          _instance.stream = _reader.readBool();
          break;
        case 6:
          _instance.sessionId = _reader.readString();
          break;
        case 7:
          _instance.id = _reader.readString();
          break;
        case 8:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagOpenAiAgentCompletionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagOpenAiAgentCompletionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.agentId) {
      _writer.writeString(2, _instance.agentId);
    }
    if (_instance.model) {
      _writer.writeString(3, _instance.model);
    }
    if (_instance.messages && _instance.messages.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.messages as any,
        RagMessage.serializeBinaryToWriter
      );
    }
    if (_instance.stream) {
      _writer.writeBool(5, _instance.stream);
    }
    if (_instance.sessionId) {
      _writer.writeString(6, _instance.sessionId);
    }
    if (_instance.id) {
      _writer.writeString(7, _instance.id);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        8,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _agentId: string;
  private _model: string;
  private _messages?: RagMessage[];
  private _stream: boolean;
  private _sessionId: string;
  private _id: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagOpenAiAgentCompletionRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagOpenAiAgentCompletionRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.agentId = _value.agentId;
    this.model = _value.model;
    this.messages = (_value.messages || []).map(m => new RagMessage(m));
    this.stream = _value.stream;
    this.sessionId = _value.sessionId;
    this.id = _value.id;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagOpenAiAgentCompletionRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get agentId(): string {
    return this._agentId;
  }
  set agentId(value: string) {
    this._agentId = value;
  }
  get model(): string {
    return this._model;
  }
  set model(value: string) {
    this._model = value;
  }
  get messages(): RagMessage[] | undefined {
    return this._messages;
  }
  set messages(value: RagMessage[] | undefined) {
    this._messages = value;
  }
  get stream(): boolean {
    return this._stream;
  }
  set stream(value: boolean) {
    this._stream = value;
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagOpenAiAgentCompletionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagOpenAiAgentCompletionRequest.AsObject {
    return {
      parent: this.parent,
      agentId: this.agentId,
      model: this.model,
      messages: (this.messages || []).map(m => m.toObject()),
      stream: this.stream,
      sessionId: this.sessionId,
      id: this.id,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagOpenAiAgentCompletionRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      agentId: this.agentId,
      model: this.model,
      messages: (this.messages || []).map(m => m.toProtobufJSON(options)),
      stream: this.stream,
      sessionId: this.sessionId,
      id: this.id,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagOpenAiAgentCompletionRequest {
  /**
   * Standard JavaScript object representation for RagOpenAiAgentCompletionRequest
   */
  export interface AsObject {
    parent: string;
    agentId: string;
    model: string;
    messages?: RagMessage.AsObject[];
    stream: boolean;
    sessionId: string;
    id: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagOpenAiAgentCompletionRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    agentId: string;
    model: string;
    messages: RagMessage.AsProtobufJSON[] | null;
    stream: boolean;
    sessionId: string;
    id: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagAgent
 */
export class RagAgent implements GrpcMessage {
  static id = 'ondewo.nlu.RagAgent';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagAgent();
    RagAgent.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagAgent) {
    _instance.id = _instance.id || '';
    _instance.title = _instance.title || '';
    _instance.description = _instance.description || '';
    _instance.avatar = _instance.avatar || '';
    _instance.dsl = _instance.dsl || undefined;
    _instance.createTime = _instance.createTime || '0';
    _instance.createDate = _instance.createDate || '';
    _instance.updateTime = _instance.updateTime || '0';
    _instance.updateDate = _instance.updateDate || '';
    _instance.userId = _instance.userId || '';
    _instance.canvasType = _instance.canvasType || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagAgent,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.title = _reader.readString();
          break;
        case 3:
          _instance.description = _reader.readString();
          break;
        case 4:
          _instance.avatar = _reader.readString();
          break;
        case 5:
          _instance.dsl = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.dsl,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.createTime = _reader.readInt64String();
          break;
        case 7:
          _instance.createDate = _reader.readString();
          break;
        case 8:
          _instance.updateTime = _reader.readInt64String();
          break;
        case 9:
          _instance.updateDate = _reader.readString();
          break;
        case 10:
          _instance.userId = _reader.readString();
          break;
        case 11:
          _instance.canvasType = _reader.readString();
          break;
        case 12:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagAgent.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: RagAgent, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.title) {
      _writer.writeString(2, _instance.title);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (_instance.avatar) {
      _writer.writeString(4, _instance.avatar);
    }
    if (_instance.dsl) {
      _writer.writeMessage(
        5,
        _instance.dsl as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.createTime) {
      _writer.writeInt64String(6, _instance.createTime);
    }
    if (_instance.createDate) {
      _writer.writeString(7, _instance.createDate);
    }
    if (_instance.updateTime) {
      _writer.writeInt64String(8, _instance.updateTime);
    }
    if (_instance.updateDate) {
      _writer.writeString(9, _instance.updateDate);
    }
    if (_instance.userId) {
      _writer.writeString(10, _instance.userId);
    }
    if (_instance.canvasType) {
      _writer.writeString(11, _instance.canvasType);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        12,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _id: string;
  private _title: string;
  private _description: string;
  private _avatar: string;
  private _dsl?: googleProtobuf001.Struct;
  private _createTime: string;
  private _createDate: string;
  private _updateTime: string;
  private _updateDate: string;
  private _userId: string;
  private _canvasType: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagAgent to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagAgent.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.title = _value.title;
    this.description = _value.description;
    this.avatar = _value.avatar;
    this.dsl = _value.dsl
      ? new googleProtobuf001.Struct(_value.dsl)
      : undefined;
    this.createTime = _value.createTime;
    this.createDate = _value.createDate;
    this.updateTime = _value.updateTime;
    this.updateDate = _value.updateDate;
    this.userId = _value.userId;
    this.canvasType = _value.canvasType;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagAgent.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get avatar(): string {
    return this._avatar;
  }
  set avatar(value: string) {
    this._avatar = value;
  }
  get dsl(): googleProtobuf001.Struct | undefined {
    return this._dsl;
  }
  set dsl(value: googleProtobuf001.Struct | undefined) {
    this._dsl = value;
  }
  get createTime(): string {
    return this._createTime;
  }
  set createTime(value: string) {
    this._createTime = value;
  }
  get createDate(): string {
    return this._createDate;
  }
  set createDate(value: string) {
    this._createDate = value;
  }
  get updateTime(): string {
    return this._updateTime;
  }
  set updateTime(value: string) {
    this._updateTime = value;
  }
  get updateDate(): string {
    return this._updateDate;
  }
  set updateDate(value: string) {
    this._updateDate = value;
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }
  get canvasType(): string {
    return this._canvasType;
  }
  set canvasType(value: string) {
    this._canvasType = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagAgent.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagAgent.AsObject {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      avatar: this.avatar,
      dsl: this.dsl ? this.dsl.toObject() : undefined,
      createTime: this.createTime,
      createDate: this.createDate,
      updateTime: this.updateTime,
      updateDate: this.updateDate,
      userId: this.userId,
      canvasType: this.canvasType,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagAgent.AsProtobufJSON {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      avatar: this.avatar,
      dsl: this.dsl ? this.dsl.toProtobufJSON(options) : null,
      createTime: this.createTime,
      createDate: this.createDate,
      updateTime: this.updateTime,
      updateDate: this.updateDate,
      userId: this.userId,
      canvasType: this.canvasType,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagAgent {
  /**
   * Standard JavaScript object representation for RagAgent
   */
  export interface AsObject {
    id: string;
    title: string;
    description: string;
    avatar: string;
    dsl?: googleProtobuf001.Struct.AsObject;
    createTime: string;
    createDate: string;
    updateTime: string;
    updateDate: string;
    userId: string;
    canvasType: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagAgent
   */
  export interface AsProtobufJSON {
    id: string;
    title: string;
    description: string;
    avatar: string;
    dsl: googleProtobuf001.Struct.AsProtobufJSON | null;
    createTime: string;
    createDate: string;
    updateTime: string;
    updateDate: string;
    userId: string;
    canvasType: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCreateAgentRequest
 */
export class RagCreateAgentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagCreateAgentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCreateAgentRequest();
    RagCreateAgentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCreateAgentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.title = _instance.title || '';
    _instance.description = _instance.description || '';
    _instance.dsl = _instance.dsl || undefined;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCreateAgentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.title = _reader.readString();
          break;
        case 3:
          _instance.description = _reader.readString();
          break;
        case 4:
          _instance.dsl = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.dsl,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagCreateAgentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCreateAgentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.title) {
      _writer.writeString(2, _instance.title);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (_instance.dsl) {
      _writer.writeMessage(
        4,
        _instance.dsl as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        5,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _title: string;
  private _description: string;
  private _dsl?: googleProtobuf001.Struct;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCreateAgentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCreateAgentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.title = _value.title;
    this.description = _value.description;
    this.dsl = _value.dsl
      ? new googleProtobuf001.Struct(_value.dsl)
      : undefined;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagCreateAgentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get dsl(): googleProtobuf001.Struct | undefined {
    return this._dsl;
  }
  set dsl(value: googleProtobuf001.Struct | undefined) {
    this._dsl = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCreateAgentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCreateAgentRequest.AsObject {
    return {
      parent: this.parent,
      title: this.title,
      description: this.description,
      dsl: this.dsl ? this.dsl.toObject() : undefined,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagCreateAgentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      title: this.title,
      description: this.description,
      dsl: this.dsl ? this.dsl.toProtobufJSON(options) : null,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagCreateAgentRequest {
  /**
   * Standard JavaScript object representation for RagCreateAgentRequest
   */
  export interface AsObject {
    parent: string;
    title: string;
    description: string;
    dsl?: googleProtobuf001.Struct.AsObject;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagCreateAgentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    title: string;
    description: string;
    dsl: googleProtobuf001.Struct.AsProtobufJSON | null;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagUpdateAgentRequest
 */
export class RagUpdateAgentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagUpdateAgentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagUpdateAgentRequest();
    RagUpdateAgentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagUpdateAgentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.agentId = _instance.agentId || '';
    _instance.title = _instance.title || '';
    _instance.description = _instance.description || '';
    _instance.dsl = _instance.dsl || undefined;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagUpdateAgentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.agentId = _reader.readString();
          break;
        case 3:
          _instance.title = _reader.readString();
          break;
        case 4:
          _instance.description = _reader.readString();
          break;
        case 5:
          _instance.dsl = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.dsl,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagUpdateAgentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagUpdateAgentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.agentId) {
      _writer.writeString(2, _instance.agentId);
    }
    if (_instance.title) {
      _writer.writeString(3, _instance.title);
    }
    if (_instance.description) {
      _writer.writeString(4, _instance.description);
    }
    if (_instance.dsl) {
      _writer.writeMessage(
        5,
        _instance.dsl as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        6,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _agentId: string;
  private _title: string;
  private _description: string;
  private _dsl?: googleProtobuf001.Struct;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagUpdateAgentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagUpdateAgentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.agentId = _value.agentId;
    this.title = _value.title;
    this.description = _value.description;
    this.dsl = _value.dsl
      ? new googleProtobuf001.Struct(_value.dsl)
      : undefined;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagUpdateAgentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get agentId(): string {
    return this._agentId;
  }
  set agentId(value: string) {
    this._agentId = value;
  }
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get dsl(): googleProtobuf001.Struct | undefined {
    return this._dsl;
  }
  set dsl(value: googleProtobuf001.Struct | undefined) {
    this._dsl = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagUpdateAgentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagUpdateAgentRequest.AsObject {
    return {
      parent: this.parent,
      agentId: this.agentId,
      title: this.title,
      description: this.description,
      dsl: this.dsl ? this.dsl.toObject() : undefined,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagUpdateAgentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      agentId: this.agentId,
      title: this.title,
      description: this.description,
      dsl: this.dsl ? this.dsl.toProtobufJSON(options) : null,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagUpdateAgentRequest {
  /**
   * Standard JavaScript object representation for RagUpdateAgentRequest
   */
  export interface AsObject {
    parent: string;
    agentId: string;
    title: string;
    description: string;
    dsl?: googleProtobuf001.Struct.AsObject;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagUpdateAgentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    agentId: string;
    title: string;
    description: string;
    dsl: googleProtobuf001.Struct.AsProtobufJSON | null;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDeleteAgentRequest
 */
export class RagDeleteAgentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDeleteAgentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDeleteAgentRequest();
    RagDeleteAgentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDeleteAgentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.agentId = _instance.agentId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDeleteAgentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.agentId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagDeleteAgentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDeleteAgentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.agentId) {
      _writer.writeString(2, _instance.agentId);
    }
  }

  private _parent: string;
  private _agentId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDeleteAgentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDeleteAgentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.agentId = _value.agentId;
    RagDeleteAgentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get agentId(): string {
    return this._agentId;
  }
  set agentId(value: string) {
    this._agentId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDeleteAgentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDeleteAgentRequest.AsObject {
    return {
      parent: this.parent,
      agentId: this.agentId
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
  ): RagDeleteAgentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      agentId: this.agentId
    };
  }
}
export module RagDeleteAgentRequest {
  /**
   * Standard JavaScript object representation for RagDeleteAgentRequest
   */
  export interface AsObject {
    parent: string;
    agentId: string;
  }

  /**
   * Protobuf JSON representation for RagDeleteAgentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    agentId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagListAgentsRequest
 */
export class RagListAgentsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagListAgentsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListAgentsRequest();
    RagListAgentsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListAgentsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.pagination = _instance.pagination || undefined;
    _instance.title = _instance.title || '';
    _instance.orderby = _instance.orderby || '';
    _instance.desc = _instance.desc || false;
    _instance.id = _instance.id || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListAgentsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.pagination = new RagPagination();
          _reader.readMessage(
            _instance.pagination,
            RagPagination.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.title = _reader.readString();
          break;
        case 4:
          _instance.orderby = _reader.readString();
          break;
        case 5:
          _instance.desc = _reader.readBool();
          break;
        case 6:
          _instance.id = _reader.readString();
          break;
        case 7:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagListAgentsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListAgentsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.pagination) {
      _writer.writeMessage(
        2,
        _instance.pagination as any,
        RagPagination.serializeBinaryToWriter
      );
    }
    if (_instance.title) {
      _writer.writeString(3, _instance.title);
    }
    if (_instance.orderby) {
      _writer.writeString(4, _instance.orderby);
    }
    if (_instance.desc) {
      _writer.writeBool(5, _instance.desc);
    }
    if (_instance.id) {
      _writer.writeString(6, _instance.id);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        7,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _pagination?: RagPagination;
  private _title: string;
  private _orderby: string;
  private _desc: boolean;
  private _id: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListAgentsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListAgentsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.pagination = _value.pagination
      ? new RagPagination(_value.pagination)
      : undefined;
    this.title = _value.title;
    this.orderby = _value.orderby;
    this.desc = _value.desc;
    this.id = _value.id;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagListAgentsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get pagination(): RagPagination | undefined {
    return this._pagination;
  }
  set pagination(value: RagPagination | undefined) {
    this._pagination = value;
  }
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
  get orderby(): string {
    return this._orderby;
  }
  set orderby(value: string) {
    this._orderby = value;
  }
  get desc(): boolean {
    return this._desc;
  }
  set desc(value: boolean) {
    this._desc = value;
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagListAgentsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListAgentsRequest.AsObject {
    return {
      parent: this.parent,
      pagination: this.pagination ? this.pagination.toObject() : undefined,
      title: this.title,
      orderby: this.orderby,
      desc: this.desc,
      id: this.id,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagListAgentsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      pagination: this.pagination
        ? this.pagination.toProtobufJSON(options)
        : null,
      title: this.title,
      orderby: this.orderby,
      desc: this.desc,
      id: this.id,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagListAgentsRequest {
  /**
   * Standard JavaScript object representation for RagListAgentsRequest
   */
  export interface AsObject {
    parent: string;
    pagination?: RagPagination.AsObject;
    title: string;
    orderby: string;
    desc: boolean;
    id: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagListAgentsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    pagination: RagPagination.AsProtobufJSON | null;
    title: string;
    orderby: string;
    desc: boolean;
    id: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagAgentList
 */
export class RagAgentList implements GrpcMessage {
  static id = 'ondewo.nlu.RagAgentList';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagAgentList();
    RagAgentList.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagAgentList) {
    _instance.agents = _instance.agents || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagAgentList,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagAgent();
          _reader.readMessage(
            messageInitializer1,
            RagAgent.deserializeBinaryFromReader
          );
          (_instance.agents = _instance.agents || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    RagAgentList.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagAgentList,
    _writer: BinaryWriter
  ) {
    if (_instance.agents && _instance.agents.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.agents as any,
        RagAgent.serializeBinaryToWriter
      );
    }
  }

  private _agents?: RagAgent[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagAgentList to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagAgentList.AsObject>) {
    _value = _value || {};
    this.agents = (_value.agents || []).map(m => new RagAgent(m));
    RagAgentList.refineValues(this);
  }
  get agents(): RagAgent[] | undefined {
    return this._agents;
  }
  set agents(value: RagAgent[] | undefined) {
    this._agents = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagAgentList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagAgentList.AsObject {
    return {
      agents: (this.agents || []).map(m => m.toObject())
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
  ): RagAgentList.AsProtobufJSON {
    return {
      agents: (this.agents || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module RagAgentList {
  /**
   * Standard JavaScript object representation for RagAgentList
   */
  export interface AsObject {
    agents?: RagAgent.AsObject[];
  }

  /**
   * Protobuf JSON representation for RagAgentList
   */
  export interface AsProtobufJSON {
    agents: RagAgent.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagFile
 */
export class RagFile implements GrpcMessage {
  static id = 'ondewo.nlu.RagFile';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagFile();
    RagFile.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagFile) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.type = _instance.type || '';
    _instance.size = _instance.size || '0';
    _instance.parentId = _instance.parentId || '';
    _instance.createTime = _instance.createTime || '0';
    _instance.createDate = _instance.createDate || '';
    _instance.updateTime = _instance.updateTime || '0';
    _instance.updateDate = _instance.updateDate || '';
    _instance.location = _instance.location || '';
    _instance.sourceType = _instance.sourceType || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagFile,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.type = _reader.readString();
          break;
        case 4:
          _instance.size = _reader.readInt64String();
          break;
        case 5:
          _instance.parentId = _reader.readString();
          break;
        case 6:
          _instance.createTime = _reader.readInt64String();
          break;
        case 7:
          _instance.createDate = _reader.readString();
          break;
        case 8:
          _instance.updateTime = _reader.readInt64String();
          break;
        case 9:
          _instance.updateDate = _reader.readString();
          break;
        case 10:
          _instance.location = _reader.readString();
          break;
        case 11:
          _instance.sourceType = _reader.readString();
          break;
        case 12:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagFile.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: RagFile, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.type) {
      _writer.writeString(3, _instance.type);
    }
    if (_instance.size) {
      _writer.writeInt64String(4, _instance.size);
    }
    if (_instance.parentId) {
      _writer.writeString(5, _instance.parentId);
    }
    if (_instance.createTime) {
      _writer.writeInt64String(6, _instance.createTime);
    }
    if (_instance.createDate) {
      _writer.writeString(7, _instance.createDate);
    }
    if (_instance.updateTime) {
      _writer.writeInt64String(8, _instance.updateTime);
    }
    if (_instance.updateDate) {
      _writer.writeString(9, _instance.updateDate);
    }
    if (_instance.location) {
      _writer.writeString(10, _instance.location);
    }
    if (_instance.sourceType) {
      _writer.writeString(11, _instance.sourceType);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        12,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _id: string;
  private _name: string;
  private _type: string;
  private _size: string;
  private _parentId: string;
  private _createTime: string;
  private _createDate: string;
  private _updateTime: string;
  private _updateDate: string;
  private _location: string;
  private _sourceType: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagFile to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagFile.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.type = _value.type;
    this.size = _value.size;
    this.parentId = _value.parentId;
    this.createTime = _value.createTime;
    this.createDate = _value.createDate;
    this.updateTime = _value.updateTime;
    this.updateDate = _value.updateDate;
    this.location = _value.location;
    this.sourceType = _value.sourceType;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagFile.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
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
  get size(): string {
    return this._size;
  }
  set size(value: string) {
    this._size = value;
  }
  get parentId(): string {
    return this._parentId;
  }
  set parentId(value: string) {
    this._parentId = value;
  }
  get createTime(): string {
    return this._createTime;
  }
  set createTime(value: string) {
    this._createTime = value;
  }
  get createDate(): string {
    return this._createDate;
  }
  set createDate(value: string) {
    this._createDate = value;
  }
  get updateTime(): string {
    return this._updateTime;
  }
  set updateTime(value: string) {
    this._updateTime = value;
  }
  get updateDate(): string {
    return this._updateDate;
  }
  set updateDate(value: string) {
    this._updateDate = value;
  }
  get location(): string {
    return this._location;
  }
  set location(value: string) {
    this._location = value;
  }
  get sourceType(): string {
    return this._sourceType;
  }
  set sourceType(value: string) {
    this._sourceType = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagFile.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagFile.AsObject {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      size: this.size,
      parentId: this.parentId,
      createTime: this.createTime,
      createDate: this.createDate,
      updateTime: this.updateTime,
      updateDate: this.updateDate,
      location: this.location,
      sourceType: this.sourceType,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagFile.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      size: this.size,
      parentId: this.parentId,
      createTime: this.createTime,
      createDate: this.createDate,
      updateTime: this.updateTime,
      updateDate: this.updateDate,
      location: this.location,
      sourceType: this.sourceType,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagFile {
  /**
   * Standard JavaScript object representation for RagFile
   */
  export interface AsObject {
    id: string;
    name: string;
    type: string;
    size: string;
    parentId: string;
    createTime: string;
    createDate: string;
    updateTime: string;
    updateDate: string;
    location: string;
    sourceType: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagFile
   */
  export interface AsProtobufJSON {
    id: string;
    name: string;
    type: string;
    size: string;
    parentId: string;
    createTime: string;
    createDate: string;
    updateTime: string;
    updateDate: string;
    location: string;
    sourceType: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagUploadFilesRequest
 */
export class RagUploadFilesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagUploadFilesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagUploadFilesRequest();
    RagUploadFilesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagUploadFilesRequest) {
    _instance.parent = _instance.parent || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagUploadFilesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.metadata = new RagUploadFilesRequest.RagMetadata();
          _reader.readMessage(
            _instance.metadata,
            RagUploadFilesRequest.RagMetadata.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.chunk = new RagUploadChunk();
          _reader.readMessage(
            _instance.chunk,
            RagUploadChunk.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagUploadFilesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagUploadFilesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.metadata) {
      _writer.writeMessage(
        2,
        _instance.metadata as any,
        RagUploadFilesRequest.RagMetadata.serializeBinaryToWriter
      );
    }
    if (_instance.chunk) {
      _writer.writeMessage(
        3,
        _instance.chunk as any,
        RagUploadChunk.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _metadata?: RagUploadFilesRequest.RagMetadata;
  private _chunk?: RagUploadChunk;

  private _payload: RagUploadFilesRequest.PayloadCase =
    RagUploadFilesRequest.PayloadCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagUploadFilesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagUploadFilesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.metadata = _value.metadata
      ? new RagUploadFilesRequest.RagMetadata(_value.metadata)
      : undefined;
    this.chunk = _value.chunk ? new RagUploadChunk(_value.chunk) : undefined;
    RagUploadFilesRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get metadata(): RagUploadFilesRequest.RagMetadata | undefined {
    return this._metadata;
  }
  set metadata(value: RagUploadFilesRequest.RagMetadata | undefined) {
    if (value !== undefined && value !== null) {
      this._chunk = undefined;
      this._payload = RagUploadFilesRequest.PayloadCase.metadata;
    }
    this._metadata = value;
  }
  get chunk(): RagUploadChunk | undefined {
    return this._chunk;
  }
  set chunk(value: RagUploadChunk | undefined) {
    if (value !== undefined && value !== null) {
      this._metadata = undefined;
      this._payload = RagUploadFilesRequest.PayloadCase.chunk;
    }
    this._chunk = value;
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
    RagUploadFilesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagUploadFilesRequest.AsObject {
    return {
      parent: this.parent,
      metadata: this.metadata ? this.metadata.toObject() : undefined,
      chunk: this.chunk ? this.chunk.toObject() : undefined
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
  ): RagUploadFilesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      metadata: this.metadata ? this.metadata.toProtobufJSON(options) : null,
      chunk: this.chunk ? this.chunk.toProtobufJSON(options) : null
    };
  }
}
export module RagUploadFilesRequest {
  /**
   * Standard JavaScript object representation for RagUploadFilesRequest
   */
  export interface AsObject {
    parent: string;
    metadata?: RagUploadFilesRequest.RagMetadata.AsObject;
    chunk?: RagUploadChunk.AsObject;
  }

  /**
   * Protobuf JSON representation for RagUploadFilesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    metadata: RagUploadFilesRequest.RagMetadata.AsProtobufJSON | null;
    chunk: RagUploadChunk.AsProtobufJSON | null;
  }
  export enum PayloadCase {
    none = 0,
    metadata = 1,
    chunk = 2
  }
  /**
   * Message implementation for ondewo.nlu.RagUploadFilesRequest.RagMetadata
   */
  export class RagMetadata implements GrpcMessage {
    static id = 'ondewo.nlu.RagUploadFilesRequest.RagMetadata';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new RagMetadata();
      RagMetadata.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: RagMetadata) {
      _instance.parentId = _instance.parentId || '';
      _instance.files = _instance.files || [];
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: RagMetadata,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.parentId = _reader.readString();
            break;
          case 2:
            const messageInitializer2 = new RagFileMetadata();
            _reader.readMessage(
              messageInitializer2,
              RagFileMetadata.deserializeBinaryFromReader
            );
            (_instance.files = _instance.files || []).push(messageInitializer2);
            break;
          default:
            _reader.skipField();
        }
      }

      RagMetadata.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: RagMetadata,
      _writer: BinaryWriter
    ) {
      if (_instance.parentId) {
        _writer.writeString(1, _instance.parentId);
      }
      if (_instance.files && _instance.files.length) {
        _writer.writeRepeatedMessage(
          2,
          _instance.files as any,
          RagFileMetadata.serializeBinaryToWriter
        );
      }
    }

    private _parentId: string;
    private _files?: RagFileMetadata[];

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of RagMetadata to deeply clone from
     */
    constructor(_value?: RecursivePartial<RagMetadata.AsObject>) {
      _value = _value || {};
      this.parentId = _value.parentId;
      this.files = (_value.files || []).map(m => new RagFileMetadata(m));
      RagMetadata.refineValues(this);
    }
    get parentId(): string {
      return this._parentId;
    }
    set parentId(value: string) {
      this._parentId = value;
    }
    get files(): RagFileMetadata[] | undefined {
      return this._files;
    }
    set files(value: RagFileMetadata[] | undefined) {
      this._files = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      RagMetadata.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): RagMetadata.AsObject {
      return {
        parentId: this.parentId,
        files: (this.files || []).map(m => m.toObject())
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
    ): RagMetadata.AsProtobufJSON {
      return {
        parentId: this.parentId,
        files: (this.files || []).map(m => m.toProtobufJSON(options))
      };
    }
  }
  export module RagMetadata {
    /**
     * Standard JavaScript object representation for RagMetadata
     */
    export interface AsObject {
      parentId: string;
      files?: RagFileMetadata.AsObject[];
    }

    /**
     * Protobuf JSON representation for RagMetadata
     */
    export interface AsProtobufJSON {
      parentId: string;
      files: RagFileMetadata.AsProtobufJSON[] | null;
    }
  }
}

/**
 * Message implementation for ondewo.nlu.RagFileList
 */
export class RagFileList implements GrpcMessage {
  static id = 'ondewo.nlu.RagFileList';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagFileList();
    RagFileList.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagFileList) {
    _instance.files = _instance.files || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagFileList,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagFile();
          _reader.readMessage(
            messageInitializer1,
            RagFile.deserializeBinaryFromReader
          );
          (_instance.files = _instance.files || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    RagFileList.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagFileList,
    _writer: BinaryWriter
  ) {
    if (_instance.files && _instance.files.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.files as any,
        RagFile.serializeBinaryToWriter
      );
    }
  }

  private _files?: RagFile[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagFileList to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagFileList.AsObject>) {
    _value = _value || {};
    this.files = (_value.files || []).map(m => new RagFile(m));
    RagFileList.refineValues(this);
  }
  get files(): RagFile[] | undefined {
    return this._files;
  }
  set files(value: RagFile[] | undefined) {
    this._files = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagFileList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagFileList.AsObject {
    return {
      files: (this.files || []).map(m => m.toObject())
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
  ): RagFileList.AsProtobufJSON {
    return {
      files: (this.files || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module RagFileList {
  /**
   * Standard JavaScript object representation for RagFileList
   */
  export interface AsObject {
    files?: RagFile.AsObject[];
  }

  /**
   * Protobuf JSON representation for RagFileList
   */
  export interface AsProtobufJSON {
    files: RagFile.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagCreateFileRequest
 */
export class RagCreateFileRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagCreateFileRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagCreateFileRequest();
    RagCreateFileRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagCreateFileRequest) {
    _instance.parent = _instance.parent || '';
    _instance.name = _instance.name || '';
    _instance.parentId = _instance.parentId || '';
    _instance.type = _instance.type || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagCreateFileRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.parentId = _reader.readString();
          break;
        case 4:
          _instance.type = _reader.readString();
          break;
        case 5:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagCreateFileRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagCreateFileRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.parentId) {
      _writer.writeString(3, _instance.parentId);
    }
    if (_instance.type) {
      _writer.writeString(4, _instance.type);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        5,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _name: string;
  private _parentId: string;
  private _type: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagCreateFileRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagCreateFileRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.name = _value.name;
    this.parentId = _value.parentId;
    this.type = _value.type;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagCreateFileRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get parentId(): string {
    return this._parentId;
  }
  set parentId(value: string) {
    this._parentId = value;
  }
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagCreateFileRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagCreateFileRequest.AsObject {
    return {
      parent: this.parent,
      name: this.name,
      parentId: this.parentId,
      type: this.type,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagCreateFileRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      name: this.name,
      parentId: this.parentId,
      type: this.type,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagCreateFileRequest {
  /**
   * Standard JavaScript object representation for RagCreateFileRequest
   */
  export interface AsObject {
    parent: string;
    name: string;
    parentId: string;
    type: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagCreateFileRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    name: string;
    parentId: string;
    type: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagListFilesRequest
 */
export class RagListFilesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagListFilesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListFilesRequest();
    RagListFilesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListFilesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.parentId = _instance.parentId || '';
    _instance.pagination = _instance.pagination || undefined;
    _instance.keywords = _instance.keywords || '';
    _instance.orderby = _instance.orderby || '';
    _instance.desc = _instance.desc || false;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListFilesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.parentId = _reader.readString();
          break;
        case 3:
          _instance.pagination = new RagPagination();
          _reader.readMessage(
            _instance.pagination,
            RagPagination.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.keywords = _reader.readString();
          break;
        case 5:
          _instance.orderby = _reader.readString();
          break;
        case 6:
          _instance.desc = _reader.readBool();
          break;
        case 7:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagListFilesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListFilesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.parentId) {
      _writer.writeString(2, _instance.parentId);
    }
    if (_instance.pagination) {
      _writer.writeMessage(
        3,
        _instance.pagination as any,
        RagPagination.serializeBinaryToWriter
      );
    }
    if (_instance.keywords) {
      _writer.writeString(4, _instance.keywords);
    }
    if (_instance.orderby) {
      _writer.writeString(5, _instance.orderby);
    }
    if (_instance.desc) {
      _writer.writeBool(6, _instance.desc);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        7,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _parentId: string;
  private _pagination?: RagPagination;
  private _keywords: string;
  private _orderby: string;
  private _desc: boolean;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListFilesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListFilesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.parentId = _value.parentId;
    this.pagination = _value.pagination
      ? new RagPagination(_value.pagination)
      : undefined;
    this.keywords = _value.keywords;
    this.orderby = _value.orderby;
    this.desc = _value.desc;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagListFilesRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get parentId(): string {
    return this._parentId;
  }
  set parentId(value: string) {
    this._parentId = value;
  }
  get pagination(): RagPagination | undefined {
    return this._pagination;
  }
  set pagination(value: RagPagination | undefined) {
    this._pagination = value;
  }
  get keywords(): string {
    return this._keywords;
  }
  set keywords(value: string) {
    this._keywords = value;
  }
  get orderby(): string {
    return this._orderby;
  }
  set orderby(value: string) {
    this._orderby = value;
  }
  get desc(): boolean {
    return this._desc;
  }
  set desc(value: boolean) {
    this._desc = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagListFilesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListFilesRequest.AsObject {
    return {
      parent: this.parent,
      parentId: this.parentId,
      pagination: this.pagination ? this.pagination.toObject() : undefined,
      keywords: this.keywords,
      orderby: this.orderby,
      desc: this.desc,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagListFilesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      parentId: this.parentId,
      pagination: this.pagination
        ? this.pagination.toProtobufJSON(options)
        : null,
      keywords: this.keywords,
      orderby: this.orderby,
      desc: this.desc,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagListFilesRequest {
  /**
   * Standard JavaScript object representation for RagListFilesRequest
   */
  export interface AsObject {
    parent: string;
    parentId: string;
    pagination?: RagPagination.AsObject;
    keywords: string;
    orderby: string;
    desc: boolean;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagListFilesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    parentId: string;
    pagination: RagPagination.AsProtobufJSON | null;
    keywords: string;
    orderby: string;
    desc: boolean;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagListFilesResponse
 */
export class RagListFilesResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagListFilesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagListFilesResponse();
    RagListFilesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagListFilesResponse) {
    _instance.total = _instance.total || 0;
    _instance.files = _instance.files || [];
    _instance.parentFolder = _instance.parentFolder || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagListFilesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.total = _reader.readInt32();
          break;
        case 2:
          const messageInitializer2 = new RagFile();
          _reader.readMessage(
            messageInitializer2,
            RagFile.deserializeBinaryFromReader
          );
          (_instance.files = _instance.files || []).push(messageInitializer2);
          break;
        case 3:
          _instance.parentFolder = new RagFile();
          _reader.readMessage(
            _instance.parentFolder,
            RagFile.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagListFilesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagListFilesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.total) {
      _writer.writeInt32(1, _instance.total);
    }
    if (_instance.files && _instance.files.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.files as any,
        RagFile.serializeBinaryToWriter
      );
    }
    if (_instance.parentFolder) {
      _writer.writeMessage(
        3,
        _instance.parentFolder as any,
        RagFile.serializeBinaryToWriter
      );
    }
  }

  private _total: number;
  private _files?: RagFile[];
  private _parentFolder?: RagFile;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagListFilesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagListFilesResponse.AsObject>) {
    _value = _value || {};
    this.total = _value.total;
    this.files = (_value.files || []).map(m => new RagFile(m));
    this.parentFolder = _value.parentFolder
      ? new RagFile(_value.parentFolder)
      : undefined;
    RagListFilesResponse.refineValues(this);
  }
  get total(): number {
    return this._total;
  }
  set total(value: number) {
    this._total = value;
  }
  get files(): RagFile[] | undefined {
    return this._files;
  }
  set files(value: RagFile[] | undefined) {
    this._files = value;
  }
  get parentFolder(): RagFile | undefined {
    return this._parentFolder;
  }
  set parentFolder(value: RagFile | undefined) {
    this._parentFolder = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagListFilesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagListFilesResponse.AsObject {
    return {
      total: this.total,
      files: (this.files || []).map(m => m.toObject()),
      parentFolder: this.parentFolder ? this.parentFolder.toObject() : undefined
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
  ): RagListFilesResponse.AsProtobufJSON {
    return {
      total: this.total,
      files: (this.files || []).map(m => m.toProtobufJSON(options)),
      parentFolder: this.parentFolder
        ? this.parentFolder.toProtobufJSON(options)
        : null
    };
  }
}
export module RagListFilesResponse {
  /**
   * Standard JavaScript object representation for RagListFilesResponse
   */
  export interface AsObject {
    total: number;
    files?: RagFile.AsObject[];
    parentFolder?: RagFile.AsObject;
  }

  /**
   * Protobuf JSON representation for RagListFilesResponse
   */
  export interface AsProtobufJSON {
    total: number;
    files: RagFile.AsProtobufJSON[] | null;
    parentFolder: RagFile.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetRootFolderResponse
 */
export class RagGetRootFolderResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetRootFolderResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetRootFolderResponse();
    RagGetRootFolderResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetRootFolderResponse) {
    _instance.rootFolder = _instance.rootFolder || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetRootFolderResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rootFolder = new RagFile();
          _reader.readMessage(
            _instance.rootFolder,
            RagFile.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagGetRootFolderResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetRootFolderResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.rootFolder) {
      _writer.writeMessage(
        1,
        _instance.rootFolder as any,
        RagFile.serializeBinaryToWriter
      );
    }
  }

  private _rootFolder?: RagFile;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetRootFolderResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagGetRootFolderResponse.AsObject>) {
    _value = _value || {};
    this.rootFolder = _value.rootFolder
      ? new RagFile(_value.rootFolder)
      : undefined;
    RagGetRootFolderResponse.refineValues(this);
  }
  get rootFolder(): RagFile | undefined {
    return this._rootFolder;
  }
  set rootFolder(value: RagFile | undefined) {
    this._rootFolder = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagGetRootFolderResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetRootFolderResponse.AsObject {
    return {
      rootFolder: this.rootFolder ? this.rootFolder.toObject() : undefined
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
  ): RagGetRootFolderResponse.AsProtobufJSON {
    return {
      rootFolder: this.rootFolder
        ? this.rootFolder.toProtobufJSON(options)
        : null
    };
  }
}
export module RagGetRootFolderResponse {
  /**
   * Standard JavaScript object representation for RagGetRootFolderResponse
   */
  export interface AsObject {
    rootFolder?: RagFile.AsObject;
  }

  /**
   * Protobuf JSON representation for RagGetRootFolderResponse
   */
  export interface AsProtobufJSON {
    rootFolder: RagFile.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetParentFolderResponse
 */
export class RagGetParentFolderResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetParentFolderResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetParentFolderResponse();
    RagGetParentFolderResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetParentFolderResponse) {
    _instance.parentFolder = _instance.parentFolder || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetParentFolderResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parentFolder = new RagFile();
          _reader.readMessage(
            _instance.parentFolder,
            RagFile.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagGetParentFolderResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetParentFolderResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.parentFolder) {
      _writer.writeMessage(
        1,
        _instance.parentFolder as any,
        RagFile.serializeBinaryToWriter
      );
    }
  }

  private _parentFolder?: RagFile;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetParentFolderResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagGetParentFolderResponse.AsObject>) {
    _value = _value || {};
    this.parentFolder = _value.parentFolder
      ? new RagFile(_value.parentFolder)
      : undefined;
    RagGetParentFolderResponse.refineValues(this);
  }
  get parentFolder(): RagFile | undefined {
    return this._parentFolder;
  }
  set parentFolder(value: RagFile | undefined) {
    this._parentFolder = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagGetParentFolderResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetParentFolderResponse.AsObject {
    return {
      parentFolder: this.parentFolder ? this.parentFolder.toObject() : undefined
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
  ): RagGetParentFolderResponse.AsProtobufJSON {
    return {
      parentFolder: this.parentFolder
        ? this.parentFolder.toProtobufJSON(options)
        : null
    };
  }
}
export module RagGetParentFolderResponse {
  /**
   * Standard JavaScript object representation for RagGetParentFolderResponse
   */
  export interface AsObject {
    parentFolder?: RagFile.AsObject;
  }

  /**
   * Protobuf JSON representation for RagGetParentFolderResponse
   */
  export interface AsProtobufJSON {
    parentFolder: RagFile.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetAllParentFoldersResponse
 */
export class RagGetAllParentFoldersResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetAllParentFoldersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetAllParentFoldersResponse();
    RagGetAllParentFoldersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetAllParentFoldersResponse) {
    _instance.parentFolders = _instance.parentFolders || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetAllParentFoldersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagFile();
          _reader.readMessage(
            messageInitializer1,
            RagFile.deserializeBinaryFromReader
          );
          (_instance.parentFolders = _instance.parentFolders || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagGetAllParentFoldersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetAllParentFoldersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.parentFolders && _instance.parentFolders.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.parentFolders as any,
        RagFile.serializeBinaryToWriter
      );
    }
  }

  private _parentFolders?: RagFile[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetAllParentFoldersResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagGetAllParentFoldersResponse.AsObject>
  ) {
    _value = _value || {};
    this.parentFolders = (_value.parentFolders || []).map(m => new RagFile(m));
    RagGetAllParentFoldersResponse.refineValues(this);
  }
  get parentFolders(): RagFile[] | undefined {
    return this._parentFolders;
  }
  set parentFolders(value: RagFile[] | undefined) {
    this._parentFolders = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagGetAllParentFoldersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetAllParentFoldersResponse.AsObject {
    return {
      parentFolders: (this.parentFolders || []).map(m => m.toObject())
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
  ): RagGetAllParentFoldersResponse.AsProtobufJSON {
    return {
      parentFolders: (this.parentFolders || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module RagGetAllParentFoldersResponse {
  /**
   * Standard JavaScript object representation for RagGetAllParentFoldersResponse
   */
  export interface AsObject {
    parentFolders?: RagFile.AsObject[];
  }

  /**
   * Protobuf JSON representation for RagGetAllParentFoldersResponse
   */
  export interface AsProtobufJSON {
    parentFolders: RagFile.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetRootFolderRequest
 */
export class RagGetRootFolderRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetRootFolderRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetRootFolderRequest();
    RagGetRootFolderRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetRootFolderRequest) {
    _instance.parent = _instance.parent || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetRootFolderRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagGetRootFolderRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetRootFolderRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
  }

  private _parent: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetRootFolderRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagGetRootFolderRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    RagGetRootFolderRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagGetRootFolderRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetRootFolderRequest.AsObject {
    return {
      parent: this.parent
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
  ): RagGetRootFolderRequest.AsProtobufJSON {
    return {
      parent: this.parent
    };
  }
}
export module RagGetRootFolderRequest {
  /**
   * Standard JavaScript object representation for RagGetRootFolderRequest
   */
  export interface AsObject {
    parent: string;
  }

  /**
   * Protobuf JSON representation for RagGetRootFolderRequest
   */
  export interface AsProtobufJSON {
    parent: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetParentFolderRequest
 */
export class RagGetParentFolderRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetParentFolderRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetParentFolderRequest();
    RagGetParentFolderRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetParentFolderRequest) {
    _instance.parent = _instance.parent || '';
    _instance.fileId = _instance.fileId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetParentFolderRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.fileId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagGetParentFolderRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetParentFolderRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.fileId) {
      _writer.writeString(2, _instance.fileId);
    }
  }

  private _parent: string;
  private _fileId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetParentFolderRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagGetParentFolderRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.fileId = _value.fileId;
    RagGetParentFolderRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get fileId(): string {
    return this._fileId;
  }
  set fileId(value: string) {
    this._fileId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagGetParentFolderRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetParentFolderRequest.AsObject {
    return {
      parent: this.parent,
      fileId: this.fileId
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
  ): RagGetParentFolderRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      fileId: this.fileId
    };
  }
}
export module RagGetParentFolderRequest {
  /**
   * Standard JavaScript object representation for RagGetParentFolderRequest
   */
  export interface AsObject {
    parent: string;
    fileId: string;
  }

  /**
   * Protobuf JSON representation for RagGetParentFolderRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    fileId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetAllParentFoldersRequest
 */
export class RagGetAllParentFoldersRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetAllParentFoldersRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetAllParentFoldersRequest();
    RagGetAllParentFoldersRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetAllParentFoldersRequest) {
    _instance.parent = _instance.parent || '';
    _instance.fileId = _instance.fileId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetAllParentFoldersRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.fileId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagGetAllParentFoldersRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetAllParentFoldersRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.fileId) {
      _writer.writeString(2, _instance.fileId);
    }
  }

  private _parent: string;
  private _fileId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetAllParentFoldersRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagGetAllParentFoldersRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.fileId = _value.fileId;
    RagGetAllParentFoldersRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get fileId(): string {
    return this._fileId;
  }
  set fileId(value: string) {
    this._fileId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagGetAllParentFoldersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetAllParentFoldersRequest.AsObject {
    return {
      parent: this.parent,
      fileId: this.fileId
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
  ): RagGetAllParentFoldersRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      fileId: this.fileId
    };
  }
}
export module RagGetAllParentFoldersRequest {
  /**
   * Standard JavaScript object representation for RagGetAllParentFoldersRequest
   */
  export interface AsObject {
    parent: string;
    fileId: string;
  }

  /**
   * Protobuf JSON representation for RagGetAllParentFoldersRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    fileId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagGetFileRequest
 */
export class RagGetFileRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagGetFileRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagGetFileRequest();
    RagGetFileRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagGetFileRequest) {
    _instance.parent = _instance.parent || '';
    _instance.fileId = _instance.fileId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagGetFileRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.fileId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagGetFileRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagGetFileRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.fileId) {
      _writer.writeString(2, _instance.fileId);
    }
  }

  private _parent: string;
  private _fileId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagGetFileRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagGetFileRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.fileId = _value.fileId;
    RagGetFileRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get fileId(): string {
    return this._fileId;
  }
  set fileId(value: string) {
    this._fileId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagGetFileRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagGetFileRequest.AsObject {
    return {
      parent: this.parent,
      fileId: this.fileId
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
  ): RagGetFileRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      fileId: this.fileId
    };
  }
}
export module RagGetFileRequest {
  /**
   * Standard JavaScript object representation for RagGetFileRequest
   */
  export interface AsObject {
    parent: string;
    fileId: string;
  }

  /**
   * Protobuf JSON representation for RagGetFileRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    fileId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagFileID
 */
export class RagFileID implements GrpcMessage {
  static id = 'ondewo.nlu.RagFileID';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagFileID();
    RagFileID.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagFileID) {
    _instance.fileId = _instance.fileId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagFileID,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.fileId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagFileID.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: RagFileID, _writer: BinaryWriter) {
    if (_instance.fileId) {
      _writer.writeString(1, _instance.fileId);
    }
  }

  private _fileId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagFileID to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagFileID.AsObject>) {
    _value = _value || {};
    this.fileId = _value.fileId;
    RagFileID.refineValues(this);
  }
  get fileId(): string {
    return this._fileId;
  }
  set fileId(value: string) {
    this._fileId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagFileID.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagFileID.AsObject {
    return {
      fileId: this.fileId
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
  ): RagFileID.AsProtobufJSON {
    return {
      fileId: this.fileId
    };
  }
}
export module RagFileID {
  /**
   * Standard JavaScript object representation for RagFileID
   */
  export interface AsObject {
    fileId: string;
  }

  /**
   * Protobuf JSON representation for RagFileID
   */
  export interface AsProtobufJSON {
    fileId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDeleteFilesRequest
 */
export class RagDeleteFilesRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDeleteFilesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDeleteFilesRequest();
    RagDeleteFilesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDeleteFilesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.fileIds = _instance.fileIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDeleteFilesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          (_instance.fileIds = _instance.fileIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagDeleteFilesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDeleteFilesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.fileIds && _instance.fileIds.length) {
      _writer.writeRepeatedString(2, _instance.fileIds);
    }
  }

  private _parent: string;
  private _fileIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDeleteFilesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDeleteFilesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.fileIds = (_value.fileIds || []).slice();
    RagDeleteFilesRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get fileIds(): string[] {
    return this._fileIds;
  }
  set fileIds(value: string[]) {
    this._fileIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDeleteFilesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDeleteFilesRequest.AsObject {
    return {
      parent: this.parent,
      fileIds: (this.fileIds || []).slice()
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
  ): RagDeleteFilesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      fileIds: (this.fileIds || []).slice()
    };
  }
}
export module RagDeleteFilesRequest {
  /**
   * Standard JavaScript object representation for RagDeleteFilesRequest
   */
  export interface AsObject {
    parent: string;
    fileIds: string[];
  }

  /**
   * Protobuf JSON representation for RagDeleteFilesRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    fileIds: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagRenameFileRequest
 */
export class RagRenameFileRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagRenameFileRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagRenameFileRequest();
    RagRenameFileRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagRenameFileRequest) {
    _instance.parent = _instance.parent || '';
    _instance.fileId = _instance.fileId || '';
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagRenameFileRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.fileId = _reader.readString();
          break;
        case 3:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagRenameFileRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagRenameFileRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.fileId) {
      _writer.writeString(2, _instance.fileId);
    }
    if (_instance.name) {
      _writer.writeString(3, _instance.name);
    }
  }

  private _parent: string;
  private _fileId: string;
  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagRenameFileRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagRenameFileRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.fileId = _value.fileId;
    this.name = _value.name;
    RagRenameFileRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get fileId(): string {
    return this._fileId;
  }
  set fileId(value: string) {
    this._fileId = value;
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
    RagRenameFileRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagRenameFileRequest.AsObject {
    return {
      parent: this.parent,
      fileId: this.fileId,
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
  ): RagRenameFileRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      fileId: this.fileId,
      name: this.name
    };
  }
}
export module RagRenameFileRequest {
  /**
   * Standard JavaScript object representation for RagRenameFileRequest
   */
  export interface AsObject {
    parent: string;
    fileId: string;
    name: string;
  }

  /**
   * Protobuf JSON representation for RagRenameFileRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    fileId: string;
    name: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagMoveFileRequest
 */
export class RagMoveFileRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagMoveFileRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagMoveFileRequest();
    RagMoveFileRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagMoveFileRequest) {
    _instance.parent = _instance.parent || '';
    _instance.srcFileIds = _instance.srcFileIds || [];
    _instance.destFileId = _instance.destFileId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagMoveFileRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          (_instance.srcFileIds = _instance.srcFileIds || []).push(
            _reader.readString()
          );
          break;
        case 3:
          _instance.destFileId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagMoveFileRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagMoveFileRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.srcFileIds && _instance.srcFileIds.length) {
      _writer.writeRepeatedString(2, _instance.srcFileIds);
    }
    if (_instance.destFileId) {
      _writer.writeString(3, _instance.destFileId);
    }
  }

  private _parent: string;
  private _srcFileIds: string[];
  private _destFileId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagMoveFileRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagMoveFileRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.srcFileIds = (_value.srcFileIds || []).slice();
    this.destFileId = _value.destFileId;
    RagMoveFileRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get srcFileIds(): string[] {
    return this._srcFileIds;
  }
  set srcFileIds(value: string[]) {
    this._srcFileIds = value;
  }
  get destFileId(): string {
    return this._destFileId;
  }
  set destFileId(value: string) {
    this._destFileId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagMoveFileRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagMoveFileRequest.AsObject {
    return {
      parent: this.parent,
      srcFileIds: (this.srcFileIds || []).slice(),
      destFileId: this.destFileId
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
  ): RagMoveFileRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      srcFileIds: (this.srcFileIds || []).slice(),
      destFileId: this.destFileId
    };
  }
}
export module RagMoveFileRequest {
  /**
   * Standard JavaScript object representation for RagMoveFileRequest
   */
  export interface AsObject {
    parent: string;
    srcFileIds: string[];
    destFileId: string;
  }

  /**
   * Protobuf JSON representation for RagMoveFileRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    srcFileIds: string[];
    destFileId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagFileToDocumentRequest
 */
export class RagFileToDocumentRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagFileToDocumentRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagFileToDocumentRequest();
    RagFileToDocumentRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagFileToDocumentRequest) {
    _instance.parent = _instance.parent || '';
    _instance.fileIds = _instance.fileIds || [];
    _instance.kbIds = _instance.kbIds || [];
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagFileToDocumentRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          (_instance.fileIds = _instance.fileIds || []).push(
            _reader.readString()
          );
          break;
        case 3:
          (_instance.kbIds = _instance.kbIds || []).push(_reader.readString());
          break;
        case 4:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagFileToDocumentRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagFileToDocumentRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.fileIds && _instance.fileIds.length) {
      _writer.writeRepeatedString(2, _instance.fileIds);
    }
    if (_instance.kbIds && _instance.kbIds.length) {
      _writer.writeRepeatedString(3, _instance.kbIds);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        4,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _fileIds: string[];
  private _kbIds: string[];
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagFileToDocumentRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagFileToDocumentRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.fileIds = (_value.fileIds || []).slice();
    this.kbIds = (_value.kbIds || []).slice();
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagFileToDocumentRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get fileIds(): string[] {
    return this._fileIds;
  }
  set fileIds(value: string[]) {
    this._fileIds = value;
  }
  get kbIds(): string[] {
    return this._kbIds;
  }
  set kbIds(value: string[]) {
    this._kbIds = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagFileToDocumentRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagFileToDocumentRequest.AsObject {
    return {
      parent: this.parent,
      fileIds: (this.fileIds || []).slice(),
      kbIds: (this.kbIds || []).slice(),
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagFileToDocumentRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      fileIds: (this.fileIds || []).slice(),
      kbIds: (this.kbIds || []).slice(),
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagFileToDocumentRequest {
  /**
   * Standard JavaScript object representation for RagFileToDocumentRequest
   */
  export interface AsObject {
    parent: string;
    fileIds: string[];
    kbIds: string[];
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagFileToDocumentRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    fileIds: string[];
    kbIds: string[];
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagFileToDocument
 */
export class RagFileToDocument implements GrpcMessage {
  static id = 'ondewo.nlu.RagFileToDocument';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagFileToDocument();
    RagFileToDocument.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagFileToDocument) {
    _instance.id = _instance.id || '';
    _instance.fileId = _instance.fileId || '';
    _instance.documentId = _instance.documentId || '';
    _instance.createTime = _instance.createTime || '0';
    _instance.createDate = _instance.createDate || '';
    _instance.updateTime = _instance.updateTime || '0';
    _instance.updateDate = _instance.updateDate || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagFileToDocument,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.fileId = _reader.readString();
          break;
        case 3:
          _instance.documentId = _reader.readString();
          break;
        case 4:
          _instance.createTime = _reader.readInt64String();
          break;
        case 5:
          _instance.createDate = _reader.readString();
          break;
        case 6:
          _instance.updateTime = _reader.readInt64String();
          break;
        case 7:
          _instance.updateDate = _reader.readString();
          break;
        case 8:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagFileToDocument.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagFileToDocument,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.fileId) {
      _writer.writeString(2, _instance.fileId);
    }
    if (_instance.documentId) {
      _writer.writeString(3, _instance.documentId);
    }
    if (_instance.createTime) {
      _writer.writeInt64String(4, _instance.createTime);
    }
    if (_instance.createDate) {
      _writer.writeString(5, _instance.createDate);
    }
    if (_instance.updateTime) {
      _writer.writeInt64String(6, _instance.updateTime);
    }
    if (_instance.updateDate) {
      _writer.writeString(7, _instance.updateDate);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        8,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _id: string;
  private _fileId: string;
  private _documentId: string;
  private _createTime: string;
  private _createDate: string;
  private _updateTime: string;
  private _updateDate: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagFileToDocument to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagFileToDocument.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.fileId = _value.fileId;
    this.documentId = _value.documentId;
    this.createTime = _value.createTime;
    this.createDate = _value.createDate;
    this.updateTime = _value.updateTime;
    this.updateDate = _value.updateDate;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagFileToDocument.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get fileId(): string {
    return this._fileId;
  }
  set fileId(value: string) {
    this._fileId = value;
  }
  get documentId(): string {
    return this._documentId;
  }
  set documentId(value: string) {
    this._documentId = value;
  }
  get createTime(): string {
    return this._createTime;
  }
  set createTime(value: string) {
    this._createTime = value;
  }
  get createDate(): string {
    return this._createDate;
  }
  set createDate(value: string) {
    this._createDate = value;
  }
  get updateTime(): string {
    return this._updateTime;
  }
  set updateTime(value: string) {
    this._updateTime = value;
  }
  get updateDate(): string {
    return this._updateDate;
  }
  set updateDate(value: string) {
    this._updateDate = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagFileToDocument.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagFileToDocument.AsObject {
    return {
      id: this.id,
      fileId: this.fileId,
      documentId: this.documentId,
      createTime: this.createTime,
      createDate: this.createDate,
      updateTime: this.updateTime,
      updateDate: this.updateDate,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagFileToDocument.AsProtobufJSON {
    return {
      id: this.id,
      fileId: this.fileId,
      documentId: this.documentId,
      createTime: this.createTime,
      createDate: this.createDate,
      updateTime: this.updateTime,
      updateDate: this.updateDate,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagFileToDocument {
  /**
   * Standard JavaScript object representation for RagFileToDocument
   */
  export interface AsObject {
    id: string;
    fileId: string;
    documentId: string;
    createTime: string;
    createDate: string;
    updateTime: string;
    updateDate: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagFileToDocument
   */
  export interface AsProtobufJSON {
    id: string;
    fileId: string;
    documentId: string;
    createTime: string;
    createDate: string;
    updateTime: string;
    updateDate: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagFileToDocumentList
 */
export class RagFileToDocumentList implements GrpcMessage {
  static id = 'ondewo.nlu.RagFileToDocumentList';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagFileToDocumentList();
    RagFileToDocumentList.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagFileToDocumentList) {
    _instance.filesToDocuments = _instance.filesToDocuments || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagFileToDocumentList,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagFileToDocument();
          _reader.readMessage(
            messageInitializer1,
            RagFileToDocument.deserializeBinaryFromReader
          );
          (_instance.filesToDocuments = _instance.filesToDocuments || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagFileToDocumentList.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagFileToDocumentList,
    _writer: BinaryWriter
  ) {
    if (_instance.filesToDocuments && _instance.filesToDocuments.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.filesToDocuments as any,
        RagFileToDocument.serializeBinaryToWriter
      );
    }
  }

  private _filesToDocuments?: RagFileToDocument[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagFileToDocumentList to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagFileToDocumentList.AsObject>) {
    _value = _value || {};
    this.filesToDocuments = (_value.filesToDocuments || []).map(
      m => new RagFileToDocument(m)
    );
    RagFileToDocumentList.refineValues(this);
  }
  get filesToDocuments(): RagFileToDocument[] | undefined {
    return this._filesToDocuments;
  }
  set filesToDocuments(value: RagFileToDocument[] | undefined) {
    this._filesToDocuments = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagFileToDocumentList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagFileToDocumentList.AsObject {
    return {
      filesToDocuments: (this.filesToDocuments || []).map(m => m.toObject())
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
  ): RagFileToDocumentList.AsProtobufJSON {
    return {
      filesToDocuments: (this.filesToDocuments || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module RagFileToDocumentList {
  /**
   * Standard JavaScript object representation for RagFileToDocumentList
   */
  export interface AsObject {
    filesToDocuments?: RagFileToDocument.AsObject[];
  }

  /**
   * Protobuf JSON representation for RagFileToDocumentList
   */
  export interface AsProtobufJSON {
    filesToDocuments: RagFileToDocument.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDifyRetrievalRequest
 */
export class RagDifyRetrievalRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagDifyRetrievalRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDifyRetrievalRequest();
    RagDifyRetrievalRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDifyRetrievalRequest) {
    _instance.parent = _instance.parent || '';
    _instance.knowledgeId = _instance.knowledgeId || '';
    _instance.query = _instance.query || '';
    _instance.retrievalSetting = _instance.retrievalSetting || undefined;
    _instance.metadataCondition = _instance.metadataCondition || undefined;
    _instance.useKg = _instance.useKg || false;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDifyRetrievalRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.knowledgeId = _reader.readString();
          break;
        case 3:
          _instance.query = _reader.readString();
          break;
        case 4:
          _instance.retrievalSetting = new RagDifyRetrievalSetting();
          _reader.readMessage(
            _instance.retrievalSetting,
            RagDifyRetrievalSetting.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.metadataCondition = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.metadataCondition,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.useKg = _reader.readBool();
          break;
        case 7:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagDifyRetrievalRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDifyRetrievalRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.knowledgeId) {
      _writer.writeString(2, _instance.knowledgeId);
    }
    if (_instance.query) {
      _writer.writeString(3, _instance.query);
    }
    if (_instance.retrievalSetting) {
      _writer.writeMessage(
        4,
        _instance.retrievalSetting as any,
        RagDifyRetrievalSetting.serializeBinaryToWriter
      );
    }
    if (_instance.metadataCondition) {
      _writer.writeMessage(
        5,
        _instance.metadataCondition as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.useKg) {
      _writer.writeBool(6, _instance.useKg);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        7,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _knowledgeId: string;
  private _query: string;
  private _retrievalSetting?: RagDifyRetrievalSetting;
  private _metadataCondition?: googleProtobuf001.Struct;
  private _useKg: boolean;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDifyRetrievalRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDifyRetrievalRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.knowledgeId = _value.knowledgeId;
    this.query = _value.query;
    this.retrievalSetting = _value.retrievalSetting
      ? new RagDifyRetrievalSetting(_value.retrievalSetting)
      : undefined;
    this.metadataCondition = _value.metadataCondition
      ? new googleProtobuf001.Struct(_value.metadataCondition)
      : undefined;
    this.useKg = _value.useKg;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagDifyRetrievalRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get knowledgeId(): string {
    return this._knowledgeId;
  }
  set knowledgeId(value: string) {
    this._knowledgeId = value;
  }
  get query(): string {
    return this._query;
  }
  set query(value: string) {
    this._query = value;
  }
  get retrievalSetting(): RagDifyRetrievalSetting | undefined {
    return this._retrievalSetting;
  }
  set retrievalSetting(value: RagDifyRetrievalSetting | undefined) {
    this._retrievalSetting = value;
  }
  get metadataCondition(): googleProtobuf001.Struct | undefined {
    return this._metadataCondition;
  }
  set metadataCondition(value: googleProtobuf001.Struct | undefined) {
    this._metadataCondition = value;
  }
  get useKg(): boolean {
    return this._useKg;
  }
  set useKg(value: boolean) {
    this._useKg = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDifyRetrievalRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDifyRetrievalRequest.AsObject {
    return {
      parent: this.parent,
      knowledgeId: this.knowledgeId,
      query: this.query,
      retrievalSetting: this.retrievalSetting
        ? this.retrievalSetting.toObject()
        : undefined,
      metadataCondition: this.metadataCondition
        ? this.metadataCondition.toObject()
        : undefined,
      useKg: this.useKg,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagDifyRetrievalRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      knowledgeId: this.knowledgeId,
      query: this.query,
      retrievalSetting: this.retrievalSetting
        ? this.retrievalSetting.toProtobufJSON(options)
        : null,
      metadataCondition: this.metadataCondition
        ? this.metadataCondition.toProtobufJSON(options)
        : null,
      useKg: this.useKg,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagDifyRetrievalRequest {
  /**
   * Standard JavaScript object representation for RagDifyRetrievalRequest
   */
  export interface AsObject {
    parent: string;
    knowledgeId: string;
    query: string;
    retrievalSetting?: RagDifyRetrievalSetting.AsObject;
    metadataCondition?: googleProtobuf001.Struct.AsObject;
    useKg: boolean;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagDifyRetrievalRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    knowledgeId: string;
    query: string;
    retrievalSetting: RagDifyRetrievalSetting.AsProtobufJSON | null;
    metadataCondition: googleProtobuf001.Struct.AsProtobufJSON | null;
    useKg: boolean;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDifyRetrievalSetting
 */
export class RagDifyRetrievalSetting implements GrpcMessage {
  static id = 'ondewo.nlu.RagDifyRetrievalSetting';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDifyRetrievalSetting();
    RagDifyRetrievalSetting.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDifyRetrievalSetting) {
    _instance.scoreThreshold = _instance.scoreThreshold || 0;
    _instance.topK = _instance.topK || 0;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDifyRetrievalSetting,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.scoreThreshold = _reader.readFloat();
          break;
        case 2:
          _instance.topK = _reader.readInt32();
          break;
        case 3:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagDifyRetrievalSetting.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDifyRetrievalSetting,
    _writer: BinaryWriter
  ) {
    if (_instance.scoreThreshold) {
      _writer.writeFloat(1, _instance.scoreThreshold);
    }
    if (_instance.topK) {
      _writer.writeInt32(2, _instance.topK);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        3,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _scoreThreshold: number;
  private _topK: number;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDifyRetrievalSetting to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDifyRetrievalSetting.AsObject>) {
    _value = _value || {};
    this.scoreThreshold = _value.scoreThreshold;
    this.topK = _value.topK;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagDifyRetrievalSetting.refineValues(this);
  }
  get scoreThreshold(): number {
    return this._scoreThreshold;
  }
  set scoreThreshold(value: number) {
    this._scoreThreshold = value;
  }
  get topK(): number {
    return this._topK;
  }
  set topK(value: number) {
    this._topK = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDifyRetrievalSetting.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDifyRetrievalSetting.AsObject {
    return {
      scoreThreshold: this.scoreThreshold,
      topK: this.topK,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagDifyRetrievalSetting.AsProtobufJSON {
    return {
      scoreThreshold: this.scoreThreshold,
      topK: this.topK,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagDifyRetrievalSetting {
  /**
   * Standard JavaScript object representation for RagDifyRetrievalSetting
   */
  export interface AsObject {
    scoreThreshold: number;
    topK: number;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagDifyRetrievalSetting
   */
  export interface AsProtobufJSON {
    scoreThreshold: number;
    topK: number;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDifyRecordList
 */
export class RagDifyRecordList implements GrpcMessage {
  static id = 'ondewo.nlu.RagDifyRecordList';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDifyRecordList();
    RagDifyRecordList.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDifyRecordList) {
    _instance.records = _instance.records || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDifyRecordList,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagDifyRecord();
          _reader.readMessage(
            messageInitializer1,
            RagDifyRecord.deserializeBinaryFromReader
          );
          (_instance.records = _instance.records || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagDifyRecordList.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDifyRecordList,
    _writer: BinaryWriter
  ) {
    if (_instance.records && _instance.records.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.records as any,
        RagDifyRecord.serializeBinaryToWriter
      );
    }
  }

  private _records?: RagDifyRecord[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDifyRecordList to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDifyRecordList.AsObject>) {
    _value = _value || {};
    this.records = (_value.records || []).map(m => new RagDifyRecord(m));
    RagDifyRecordList.refineValues(this);
  }
  get records(): RagDifyRecord[] | undefined {
    return this._records;
  }
  set records(value: RagDifyRecord[] | undefined) {
    this._records = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDifyRecordList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDifyRecordList.AsObject {
    return {
      records: (this.records || []).map(m => m.toObject())
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
  ): RagDifyRecordList.AsProtobufJSON {
    return {
      records: (this.records || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module RagDifyRecordList {
  /**
   * Standard JavaScript object representation for RagDifyRecordList
   */
  export interface AsObject {
    records?: RagDifyRecord.AsObject[];
  }

  /**
   * Protobuf JSON representation for RagDifyRecordList
   */
  export interface AsProtobufJSON {
    records: RagDifyRecord.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagDifyRecord
 */
export class RagDifyRecord implements GrpcMessage {
  static id = 'ondewo.nlu.RagDifyRecord';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagDifyRecord();
    RagDifyRecord.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagDifyRecord) {
    _instance.content = _instance.content || '';
    _instance.score = _instance.score || 0;
    _instance.title = _instance.title || '';
    _instance.metadata = _instance.metadata || undefined;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagDifyRecord,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.content = _reader.readString();
          break;
        case 2:
          _instance.score = _reader.readFloat();
          break;
        case 3:
          _instance.title = _reader.readString();
          break;
        case 4:
          _instance.metadata = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.metadata,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagDifyRecord.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagDifyRecord,
    _writer: BinaryWriter
  ) {
    if (_instance.content) {
      _writer.writeString(1, _instance.content);
    }
    if (_instance.score) {
      _writer.writeFloat(2, _instance.score);
    }
    if (_instance.title) {
      _writer.writeString(3, _instance.title);
    }
    if (_instance.metadata) {
      _writer.writeMessage(
        4,
        _instance.metadata as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        5,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _content: string;
  private _score: number;
  private _title: string;
  private _metadata?: googleProtobuf001.Struct;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagDifyRecord to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagDifyRecord.AsObject>) {
    _value = _value || {};
    this.content = _value.content;
    this.score = _value.score;
    this.title = _value.title;
    this.metadata = _value.metadata
      ? new googleProtobuf001.Struct(_value.metadata)
      : undefined;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagDifyRecord.refineValues(this);
  }
  get content(): string {
    return this._content;
  }
  set content(value: string) {
    this._content = value;
  }
  get score(): number {
    return this._score;
  }
  set score(value: number) {
    this._score = value;
  }
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
  get metadata(): googleProtobuf001.Struct | undefined {
    return this._metadata;
  }
  set metadata(value: googleProtobuf001.Struct | undefined) {
    this._metadata = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagDifyRecord.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagDifyRecord.AsObject {
    return {
      content: this.content,
      score: this.score,
      title: this.title,
      metadata: this.metadata ? this.metadata.toObject() : undefined,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagDifyRecord.AsProtobufJSON {
    return {
      content: this.content,
      score: this.score,
      title: this.title,
      metadata: this.metadata ? this.metadata.toProtobufJSON(options) : null,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagDifyRecord {
  /**
   * Standard JavaScript object representation for RagDifyRecord
   */
  export interface AsObject {
    content: string;
    score: number;
    title: string;
    metadata?: googleProtobuf001.Struct.AsObject;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagDifyRecord
   */
  export interface AsProtobufJSON {
    content: string;
    score: number;
    title: string;
    metadata: googleProtobuf001.Struct.AsProtobufJSON | null;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagAskRequest
 */
export class RagAskRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagAskRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagAskRequest();
    RagAskRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagAskRequest) {
    _instance.parent = _instance.parent || '';
    _instance.question = _instance.question || '';
    _instance.datasetIds = _instance.datasetIds || [];
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagAskRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.question = _reader.readString();
          break;
        case 3:
          (_instance.datasetIds = _instance.datasetIds || []).push(
            _reader.readString()
          );
          break;
        case 4:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagAskRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagAskRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.question) {
      _writer.writeString(2, _instance.question);
    }
    if (_instance.datasetIds && _instance.datasetIds.length) {
      _writer.writeRepeatedString(3, _instance.datasetIds);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        4,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _question: string;
  private _datasetIds: string[];
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagAskRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagAskRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.question = _value.question;
    this.datasetIds = (_value.datasetIds || []).slice();
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagAskRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get question(): string {
    return this._question;
  }
  set question(value: string) {
    this._question = value;
  }
  get datasetIds(): string[] {
    return this._datasetIds;
  }
  set datasetIds(value: string[]) {
    this._datasetIds = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagAskRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagAskRequest.AsObject {
    return {
      parent: this.parent,
      question: this.question,
      datasetIds: (this.datasetIds || []).slice(),
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagAskRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      question: this.question,
      datasetIds: (this.datasetIds || []).slice(),
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagAskRequest {
  /**
   * Standard JavaScript object representation for RagAskRequest
   */
  export interface AsObject {
    parent: string;
    question: string;
    datasetIds: string[];
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagAskRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    question: string;
    datasetIds: string[];
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagAskResponse
 */
export class RagAskResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagAskResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagAskResponse();
    RagAskResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagAskResponse) {
    _instance.answer = _instance.answer || '';
    _instance.reference = _instance.reference || undefined;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagAskResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.answer = _reader.readString();
          break;
        case 2:
          _instance.reference = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.reference,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagAskResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagAskResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.answer) {
      _writer.writeString(1, _instance.answer);
    }
    if (_instance.reference) {
      _writer.writeMessage(
        2,
        _instance.reference as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        3,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _answer: string;
  private _reference?: googleProtobuf001.Struct;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagAskResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagAskResponse.AsObject>) {
    _value = _value || {};
    this.answer = _value.answer;
    this.reference = _value.reference
      ? new googleProtobuf001.Struct(_value.reference)
      : undefined;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagAskResponse.refineValues(this);
  }
  get answer(): string {
    return this._answer;
  }
  set answer(value: string) {
    this._answer = value;
  }
  get reference(): googleProtobuf001.Struct | undefined {
    return this._reference;
  }
  set reference(value: googleProtobuf001.Struct | undefined) {
    this._reference = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagAskResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagAskResponse.AsObject {
    return {
      answer: this.answer,
      reference: this.reference ? this.reference.toObject() : undefined,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagAskResponse.AsProtobufJSON {
    return {
      answer: this.answer,
      reference: this.reference ? this.reference.toProtobufJSON(options) : null,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagAskResponse {
  /**
   * Standard JavaScript object representation for RagAskResponse
   */
  export interface AsObject {
    answer: string;
    reference?: googleProtobuf001.Struct.AsObject;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagAskResponse
   */
  export interface AsProtobufJSON {
    answer: string;
    reference: googleProtobuf001.Struct.AsProtobufJSON | null;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagRelatedQuestionsRequest
 */
export class RagRelatedQuestionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagRelatedQuestionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagRelatedQuestionsRequest();
    RagRelatedQuestionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagRelatedQuestionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.question = _instance.question || '';
    _instance.industry = _instance.industry || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagRelatedQuestionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.question = _reader.readString();
          break;
        case 3:
          _instance.industry = _reader.readString();
          break;
        case 4:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagRelatedQuestionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagRelatedQuestionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.question) {
      _writer.writeString(2, _instance.question);
    }
    if (_instance.industry) {
      _writer.writeString(3, _instance.industry);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        4,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _question: string;
  private _industry: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagRelatedQuestionsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagRelatedQuestionsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.question = _value.question;
    this.industry = _value.industry;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagRelatedQuestionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get question(): string {
    return this._question;
  }
  set question(value: string) {
    this._question = value;
  }
  get industry(): string {
    return this._industry;
  }
  set industry(value: string) {
    this._industry = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagRelatedQuestionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagRelatedQuestionsRequest.AsObject {
    return {
      parent: this.parent,
      question: this.question,
      industry: this.industry,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagRelatedQuestionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      question: this.question,
      industry: this.industry,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagRelatedQuestionsRequest {
  /**
   * Standard JavaScript object representation for RagRelatedQuestionsRequest
   */
  export interface AsObject {
    parent: string;
    question: string;
    industry: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagRelatedQuestionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    question: string;
    industry: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagRelatedQuestionsResponse
 */
export class RagRelatedQuestionsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagRelatedQuestionsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagRelatedQuestionsResponse();
    RagRelatedQuestionsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagRelatedQuestionsResponse) {
    _instance.questions = _instance.questions || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagRelatedQuestionsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.questions = _instance.questions || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagRelatedQuestionsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagRelatedQuestionsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.questions && _instance.questions.length) {
      _writer.writeRepeatedString(1, _instance.questions);
    }
  }

  private _questions: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagRelatedQuestionsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagRelatedQuestionsResponse.AsObject>) {
    _value = _value || {};
    this.questions = (_value.questions || []).slice();
    RagRelatedQuestionsResponse.refineValues(this);
  }
  get questions(): string[] {
    return this._questions;
  }
  set questions(value: string[]) {
    this._questions = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagRelatedQuestionsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagRelatedQuestionsResponse.AsObject {
    return {
      questions: (this.questions || []).slice()
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
  ): RagRelatedQuestionsResponse.AsProtobufJSON {
    return {
      questions: (this.questions || []).slice()
    };
  }
}
export module RagRelatedQuestionsResponse {
  /**
   * Standard JavaScript object representation for RagRelatedQuestionsResponse
   */
  export interface AsObject {
    questions: string[];
  }

  /**
   * Protobuf JSON representation for RagRelatedQuestionsResponse
   */
  export interface AsProtobufJSON {
    questions: string[];
  }
}

/**
 * Message implementation for ondewo.nlu.RagChatbotCompletionRequest
 */
export class RagChatbotCompletionRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagChatbotCompletionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagChatbotCompletionRequest();
    RagChatbotCompletionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagChatbotCompletionRequest) {
    _instance.parent = _instance.parent || '';
    _instance.dialogId = _instance.dialogId || '';
    _instance.question = _instance.question || '';
    _instance.stream = _instance.stream || false;
    _instance.sessionId = _instance.sessionId || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagChatbotCompletionRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.dialogId = _reader.readString();
          break;
        case 3:
          _instance.question = _reader.readString();
          break;
        case 4:
          _instance.stream = _reader.readBool();
          break;
        case 5:
          _instance.sessionId = _reader.readString();
          break;
        case 6:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagChatbotCompletionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagChatbotCompletionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.dialogId) {
      _writer.writeString(2, _instance.dialogId);
    }
    if (_instance.question) {
      _writer.writeString(3, _instance.question);
    }
    if (_instance.stream) {
      _writer.writeBool(4, _instance.stream);
    }
    if (_instance.sessionId) {
      _writer.writeString(5, _instance.sessionId);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        6,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _dialogId: string;
  private _question: string;
  private _stream: boolean;
  private _sessionId: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagChatbotCompletionRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagChatbotCompletionRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.dialogId = _value.dialogId;
    this.question = _value.question;
    this.stream = _value.stream;
    this.sessionId = _value.sessionId;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagChatbotCompletionRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get dialogId(): string {
    return this._dialogId;
  }
  set dialogId(value: string) {
    this._dialogId = value;
  }
  get question(): string {
    return this._question;
  }
  set question(value: string) {
    this._question = value;
  }
  get stream(): boolean {
    return this._stream;
  }
  set stream(value: boolean) {
    this._stream = value;
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagChatbotCompletionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagChatbotCompletionRequest.AsObject {
    return {
      parent: this.parent,
      dialogId: this.dialogId,
      question: this.question,
      stream: this.stream,
      sessionId: this.sessionId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagChatbotCompletionRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      dialogId: this.dialogId,
      question: this.question,
      stream: this.stream,
      sessionId: this.sessionId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagChatbotCompletionRequest {
  /**
   * Standard JavaScript object representation for RagChatbotCompletionRequest
   */
  export interface AsObject {
    parent: string;
    dialogId: string;
    question: string;
    stream: boolean;
    sessionId: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagChatbotCompletionRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    dialogId: string;
    question: string;
    stream: boolean;
    sessionId: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagChatbotInfoRequest
 */
export class RagChatbotInfoRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagChatbotInfoRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagChatbotInfoRequest();
    RagChatbotInfoRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagChatbotInfoRequest) {
    _instance.parent = _instance.parent || '';
    _instance.dialogId = _instance.dialogId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagChatbotInfoRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.dialogId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagChatbotInfoRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagChatbotInfoRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.dialogId) {
      _writer.writeString(2, _instance.dialogId);
    }
  }

  private _parent: string;
  private _dialogId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagChatbotInfoRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagChatbotInfoRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.dialogId = _value.dialogId;
    RagChatbotInfoRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get dialogId(): string {
    return this._dialogId;
  }
  set dialogId(value: string) {
    this._dialogId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagChatbotInfoRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagChatbotInfoRequest.AsObject {
    return {
      parent: this.parent,
      dialogId: this.dialogId
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
  ): RagChatbotInfoRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      dialogId: this.dialogId
    };
  }
}
export module RagChatbotInfoRequest {
  /**
   * Standard JavaScript object representation for RagChatbotInfoRequest
   */
  export interface AsObject {
    parent: string;
    dialogId: string;
  }

  /**
   * Protobuf JSON representation for RagChatbotInfoRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    dialogId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagChatbotInfoResponse
 */
export class RagChatbotInfoResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagChatbotInfoResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagChatbotInfoResponse();
    RagChatbotInfoResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagChatbotInfoResponse) {
    _instance.title = _instance.title || '';
    _instance.avatar = _instance.avatar || '';
    _instance.prologue = _instance.prologue || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagChatbotInfoResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.title = _reader.readString();
          break;
        case 2:
          _instance.avatar = _reader.readString();
          break;
        case 3:
          _instance.prologue = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagChatbotInfoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagChatbotInfoResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.title) {
      _writer.writeString(1, _instance.title);
    }
    if (_instance.avatar) {
      _writer.writeString(2, _instance.avatar);
    }
    if (_instance.prologue) {
      _writer.writeString(3, _instance.prologue);
    }
  }

  private _title: string;
  private _avatar: string;
  private _prologue: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagChatbotInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagChatbotInfoResponse.AsObject>) {
    _value = _value || {};
    this.title = _value.title;
    this.avatar = _value.avatar;
    this.prologue = _value.prologue;
    RagChatbotInfoResponse.refineValues(this);
  }
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
  get avatar(): string {
    return this._avatar;
  }
  set avatar(value: string) {
    this._avatar = value;
  }
  get prologue(): string {
    return this._prologue;
  }
  set prologue(value: string) {
    this._prologue = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagChatbotInfoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagChatbotInfoResponse.AsObject {
    return {
      title: this.title,
      avatar: this.avatar,
      prologue: this.prologue
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
  ): RagChatbotInfoResponse.AsProtobufJSON {
    return {
      title: this.title,
      avatar: this.avatar,
      prologue: this.prologue
    };
  }
}
export module RagChatbotInfoResponse {
  /**
   * Standard JavaScript object representation for RagChatbotInfoResponse
   */
  export interface AsObject {
    title: string;
    avatar: string;
    prologue: string;
  }

  /**
   * Protobuf JSON representation for RagChatbotInfoResponse
   */
  export interface AsProtobufJSON {
    title: string;
    avatar: string;
    prologue: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagAgentbotCompletionRequest
 */
export class RagAgentbotCompletionRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagAgentbotCompletionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagAgentbotCompletionRequest();
    RagAgentbotCompletionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagAgentbotCompletionRequest) {
    _instance.parent = _instance.parent || '';
    _instance.agentId = _instance.agentId || '';
    _instance.question = _instance.question || '';
    _instance.stream = _instance.stream || false;
    _instance.sessionId = _instance.sessionId || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagAgentbotCompletionRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.agentId = _reader.readString();
          break;
        case 3:
          _instance.question = _reader.readString();
          break;
        case 4:
          _instance.stream = _reader.readBool();
          break;
        case 5:
          _instance.sessionId = _reader.readString();
          break;
        case 6:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagAgentbotCompletionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagAgentbotCompletionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.agentId) {
      _writer.writeString(2, _instance.agentId);
    }
    if (_instance.question) {
      _writer.writeString(3, _instance.question);
    }
    if (_instance.stream) {
      _writer.writeBool(4, _instance.stream);
    }
    if (_instance.sessionId) {
      _writer.writeString(5, _instance.sessionId);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        6,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _agentId: string;
  private _question: string;
  private _stream: boolean;
  private _sessionId: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagAgentbotCompletionRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagAgentbotCompletionRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.agentId = _value.agentId;
    this.question = _value.question;
    this.stream = _value.stream;
    this.sessionId = _value.sessionId;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagAgentbotCompletionRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get agentId(): string {
    return this._agentId;
  }
  set agentId(value: string) {
    this._agentId = value;
  }
  get question(): string {
    return this._question;
  }
  set question(value: string) {
    this._question = value;
  }
  get stream(): boolean {
    return this._stream;
  }
  set stream(value: boolean) {
    this._stream = value;
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagAgentbotCompletionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagAgentbotCompletionRequest.AsObject {
    return {
      parent: this.parent,
      agentId: this.agentId,
      question: this.question,
      stream: this.stream,
      sessionId: this.sessionId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagAgentbotCompletionRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      agentId: this.agentId,
      question: this.question,
      stream: this.stream,
      sessionId: this.sessionId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagAgentbotCompletionRequest {
  /**
   * Standard JavaScript object representation for RagAgentbotCompletionRequest
   */
  export interface AsObject {
    parent: string;
    agentId: string;
    question: string;
    stream: boolean;
    sessionId: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagAgentbotCompletionRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    agentId: string;
    question: string;
    stream: boolean;
    sessionId: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagAgentbotInputsRequest
 */
export class RagAgentbotInputsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagAgentbotInputsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagAgentbotInputsRequest();
    RagAgentbotInputsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagAgentbotInputsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.agentId = _instance.agentId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagAgentbotInputsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.agentId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagAgentbotInputsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagAgentbotInputsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.agentId) {
      _writer.writeString(2, _instance.agentId);
    }
  }

  private _parent: string;
  private _agentId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagAgentbotInputsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagAgentbotInputsRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.agentId = _value.agentId;
    RagAgentbotInputsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get agentId(): string {
    return this._agentId;
  }
  set agentId(value: string) {
    this._agentId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagAgentbotInputsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagAgentbotInputsRequest.AsObject {
    return {
      parent: this.parent,
      agentId: this.agentId
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
  ): RagAgentbotInputsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      agentId: this.agentId
    };
  }
}
export module RagAgentbotInputsRequest {
  /**
   * Standard JavaScript object representation for RagAgentbotInputsRequest
   */
  export interface AsObject {
    parent: string;
    agentId: string;
  }

  /**
   * Protobuf JSON representation for RagAgentbotInputsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    agentId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagAgentbotInputsResponse
 */
export class RagAgentbotInputsResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagAgentbotInputsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagAgentbotInputsResponse();
    RagAgentbotInputsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagAgentbotInputsResponse) {
    _instance.title = _instance.title || '';
    _instance.avatar = _instance.avatar || '';
    _instance.inputs = _instance.inputs || [];
    _instance.prologue = _instance.prologue || '';
    _instance.mode = _instance.mode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagAgentbotInputsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.title = _reader.readString();
          break;
        case 2:
          _instance.avatar = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new googleProtobuf001.Struct();
          _reader.readMessage(
            messageInitializer3,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          (_instance.inputs = _instance.inputs || []).push(messageInitializer3);
          break;
        case 4:
          _instance.prologue = _reader.readString();
          break;
        case 5:
          _instance.mode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagAgentbotInputsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagAgentbotInputsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.title) {
      _writer.writeString(1, _instance.title);
    }
    if (_instance.avatar) {
      _writer.writeString(2, _instance.avatar);
    }
    if (_instance.inputs && _instance.inputs.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.inputs as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.prologue) {
      _writer.writeString(4, _instance.prologue);
    }
    if (_instance.mode) {
      _writer.writeString(5, _instance.mode);
    }
  }

  private _title: string;
  private _avatar: string;
  private _inputs?: googleProtobuf001.Struct[];
  private _prologue: string;
  private _mode: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagAgentbotInputsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagAgentbotInputsResponse.AsObject>) {
    _value = _value || {};
    this.title = _value.title;
    this.avatar = _value.avatar;
    this.inputs = (_value.inputs || []).map(
      m => new googleProtobuf001.Struct(m)
    );
    this.prologue = _value.prologue;
    this.mode = _value.mode;
    RagAgentbotInputsResponse.refineValues(this);
  }
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
  get avatar(): string {
    return this._avatar;
  }
  set avatar(value: string) {
    this._avatar = value;
  }
  get inputs(): googleProtobuf001.Struct[] | undefined {
    return this._inputs;
  }
  set inputs(value: googleProtobuf001.Struct[] | undefined) {
    this._inputs = value;
  }
  get prologue(): string {
    return this._prologue;
  }
  set prologue(value: string) {
    this._prologue = value;
  }
  get mode(): string {
    return this._mode;
  }
  set mode(value: string) {
    this._mode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagAgentbotInputsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagAgentbotInputsResponse.AsObject {
    return {
      title: this.title,
      avatar: this.avatar,
      inputs: (this.inputs || []).map(m => m.toObject()),
      prologue: this.prologue,
      mode: this.mode
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
  ): RagAgentbotInputsResponse.AsProtobufJSON {
    return {
      title: this.title,
      avatar: this.avatar,
      inputs: (this.inputs || []).map(m => m.toProtobufJSON(options)),
      prologue: this.prologue,
      mode: this.mode
    };
  }
}
export module RagAgentbotInputsResponse {
  /**
   * Standard JavaScript object representation for RagAgentbotInputsResponse
   */
  export interface AsObject {
    title: string;
    avatar: string;
    inputs?: googleProtobuf001.Struct.AsObject[];
    prologue: string;
    mode: string;
  }

  /**
   * Protobuf JSON representation for RagAgentbotInputsResponse
   */
  export interface AsProtobufJSON {
    title: string;
    avatar: string;
    inputs: googleProtobuf001.Struct.AsProtobufJSON[] | null;
    prologue: string;
    mode: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagSearchbotAskRequest
 */
export class RagSearchbotAskRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagSearchbotAskRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagSearchbotAskRequest();
    RagSearchbotAskRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagSearchbotAskRequest) {
    _instance.parent = _instance.parent || '';
    _instance.question = _instance.question || '';
    _instance.kbIds = _instance.kbIds || [];
    _instance.searchId = _instance.searchId || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagSearchbotAskRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.question = _reader.readString();
          break;
        case 3:
          (_instance.kbIds = _instance.kbIds || []).push(_reader.readString());
          break;
        case 4:
          _instance.searchId = _reader.readString();
          break;
        case 5:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagSearchbotAskRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagSearchbotAskRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.question) {
      _writer.writeString(2, _instance.question);
    }
    if (_instance.kbIds && _instance.kbIds.length) {
      _writer.writeRepeatedString(3, _instance.kbIds);
    }
    if (_instance.searchId) {
      _writer.writeString(4, _instance.searchId);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        5,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _question: string;
  private _kbIds: string[];
  private _searchId: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagSearchbotAskRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagSearchbotAskRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.question = _value.question;
    this.kbIds = (_value.kbIds || []).slice();
    this.searchId = _value.searchId;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagSearchbotAskRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get question(): string {
    return this._question;
  }
  set question(value: string) {
    this._question = value;
  }
  get kbIds(): string[] {
    return this._kbIds;
  }
  set kbIds(value: string[]) {
    this._kbIds = value;
  }
  get searchId(): string {
    return this._searchId;
  }
  set searchId(value: string) {
    this._searchId = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagSearchbotAskRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagSearchbotAskRequest.AsObject {
    return {
      parent: this.parent,
      question: this.question,
      kbIds: (this.kbIds || []).slice(),
      searchId: this.searchId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagSearchbotAskRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      question: this.question,
      kbIds: (this.kbIds || []).slice(),
      searchId: this.searchId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagSearchbotAskRequest {
  /**
   * Standard JavaScript object representation for RagSearchbotAskRequest
   */
  export interface AsObject {
    parent: string;
    question: string;
    kbIds: string[];
    searchId: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagSearchbotAskRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    question: string;
    kbIds: string[];
    searchId: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagSearchbotRetrievalRequest
 */
export class RagSearchbotRetrievalRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagSearchbotRetrievalRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagSearchbotRetrievalRequest();
    RagSearchbotRetrievalRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagSearchbotRetrievalRequest) {
    _instance.parent = _instance.parent || '';
    _instance.kbId = _instance.kbId || [];
    _instance.question = _instance.question || '';
    _instance.page = _instance.page || 0;
    _instance.size = _instance.size || 0;
    _instance.docIds = _instance.docIds || [];
    _instance.similarityThreshold = _instance.similarityThreshold || 0;
    _instance.vectorSimilarityWeight = _instance.vectorSimilarityWeight || 0;
    _instance.useKg = _instance.useKg || false;
    _instance.topK = _instance.topK || 0;
    _instance.crossLanguages = _instance.crossLanguages || [];
    _instance.keyword = _instance.keyword || false;
    _instance.rerankId = _instance.rerankId || '';
    _instance.searchId = _instance.searchId || '';
    _instance.highlight = _instance.highlight || false;
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagSearchbotRetrievalRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          (_instance.kbId = _instance.kbId || []).push(_reader.readString());
          break;
        case 3:
          _instance.question = _reader.readString();
          break;
        case 4:
          _instance.page = _reader.readInt32();
          break;
        case 5:
          _instance.size = _reader.readInt32();
          break;
        case 6:
          (_instance.docIds = _instance.docIds || []).push(
            _reader.readString()
          );
          break;
        case 7:
          _instance.similarityThreshold = _reader.readFloat();
          break;
        case 8:
          _instance.vectorSimilarityWeight = _reader.readFloat();
          break;
        case 9:
          _instance.useKg = _reader.readBool();
          break;
        case 10:
          _instance.topK = _reader.readInt32();
          break;
        case 11:
          (_instance.crossLanguages = _instance.crossLanguages || []).push(
            _reader.readString()
          );
          break;
        case 12:
          _instance.keyword = _reader.readBool();
          break;
        case 13:
          _instance.rerankId = _reader.readString();
          break;
        case 14:
          _instance.searchId = _reader.readString();
          break;
        case 15:
          _instance.highlight = _reader.readBool();
          break;
        case 16:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagSearchbotRetrievalRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagSearchbotRetrievalRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.kbId && _instance.kbId.length) {
      _writer.writeRepeatedString(2, _instance.kbId);
    }
    if (_instance.question) {
      _writer.writeString(3, _instance.question);
    }
    if (_instance.page) {
      _writer.writeInt32(4, _instance.page);
    }
    if (_instance.size) {
      _writer.writeInt32(5, _instance.size);
    }
    if (_instance.docIds && _instance.docIds.length) {
      _writer.writeRepeatedString(6, _instance.docIds);
    }
    if (_instance.similarityThreshold) {
      _writer.writeFloat(7, _instance.similarityThreshold);
    }
    if (_instance.vectorSimilarityWeight) {
      _writer.writeFloat(8, _instance.vectorSimilarityWeight);
    }
    if (_instance.useKg) {
      _writer.writeBool(9, _instance.useKg);
    }
    if (_instance.topK) {
      _writer.writeInt32(10, _instance.topK);
    }
    if (_instance.crossLanguages && _instance.crossLanguages.length) {
      _writer.writeRepeatedString(11, _instance.crossLanguages);
    }
    if (_instance.keyword) {
      _writer.writeBool(12, _instance.keyword);
    }
    if (_instance.rerankId) {
      _writer.writeString(13, _instance.rerankId);
    }
    if (_instance.searchId) {
      _writer.writeString(14, _instance.searchId);
    }
    if (_instance.highlight) {
      _writer.writeBool(15, _instance.highlight);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        16,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _kbId: string[];
  private _question: string;
  private _page: number;
  private _size: number;
  private _docIds: string[];
  private _similarityThreshold: number;
  private _vectorSimilarityWeight: number;
  private _useKg: boolean;
  private _topK: number;
  private _crossLanguages: string[];
  private _keyword: boolean;
  private _rerankId: string;
  private _searchId: string;
  private _highlight: boolean;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagSearchbotRetrievalRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagSearchbotRetrievalRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.kbId = (_value.kbId || []).slice();
    this.question = _value.question;
    this.page = _value.page;
    this.size = _value.size;
    this.docIds = (_value.docIds || []).slice();
    this.similarityThreshold = _value.similarityThreshold;
    this.vectorSimilarityWeight = _value.vectorSimilarityWeight;
    this.useKg = _value.useKg;
    this.topK = _value.topK;
    this.crossLanguages = (_value.crossLanguages || []).slice();
    this.keyword = _value.keyword;
    this.rerankId = _value.rerankId;
    this.searchId = _value.searchId;
    this.highlight = _value.highlight;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagSearchbotRetrievalRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get kbId(): string[] {
    return this._kbId;
  }
  set kbId(value: string[]) {
    this._kbId = value;
  }
  get question(): string {
    return this._question;
  }
  set question(value: string) {
    this._question = value;
  }
  get page(): number {
    return this._page;
  }
  set page(value: number) {
    this._page = value;
  }
  get size(): number {
    return this._size;
  }
  set size(value: number) {
    this._size = value;
  }
  get docIds(): string[] {
    return this._docIds;
  }
  set docIds(value: string[]) {
    this._docIds = value;
  }
  get similarityThreshold(): number {
    return this._similarityThreshold;
  }
  set similarityThreshold(value: number) {
    this._similarityThreshold = value;
  }
  get vectorSimilarityWeight(): number {
    return this._vectorSimilarityWeight;
  }
  set vectorSimilarityWeight(value: number) {
    this._vectorSimilarityWeight = value;
  }
  get useKg(): boolean {
    return this._useKg;
  }
  set useKg(value: boolean) {
    this._useKg = value;
  }
  get topK(): number {
    return this._topK;
  }
  set topK(value: number) {
    this._topK = value;
  }
  get crossLanguages(): string[] {
    return this._crossLanguages;
  }
  set crossLanguages(value: string[]) {
    this._crossLanguages = value;
  }
  get keyword(): boolean {
    return this._keyword;
  }
  set keyword(value: boolean) {
    this._keyword = value;
  }
  get rerankId(): string {
    return this._rerankId;
  }
  set rerankId(value: string) {
    this._rerankId = value;
  }
  get searchId(): string {
    return this._searchId;
  }
  set searchId(value: string) {
    this._searchId = value;
  }
  get highlight(): boolean {
    return this._highlight;
  }
  set highlight(value: boolean) {
    this._highlight = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagSearchbotRetrievalRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagSearchbotRetrievalRequest.AsObject {
    return {
      parent: this.parent,
      kbId: (this.kbId || []).slice(),
      question: this.question,
      page: this.page,
      size: this.size,
      docIds: (this.docIds || []).slice(),
      similarityThreshold: this.similarityThreshold,
      vectorSimilarityWeight: this.vectorSimilarityWeight,
      useKg: this.useKg,
      topK: this.topK,
      crossLanguages: (this.crossLanguages || []).slice(),
      keyword: this.keyword,
      rerankId: this.rerankId,
      searchId: this.searchId,
      highlight: this.highlight,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagSearchbotRetrievalRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      kbId: (this.kbId || []).slice(),
      question: this.question,
      page: this.page,
      size: this.size,
      docIds: (this.docIds || []).slice(),
      similarityThreshold: this.similarityThreshold,
      vectorSimilarityWeight: this.vectorSimilarityWeight,
      useKg: this.useKg,
      topK: this.topK,
      crossLanguages: (this.crossLanguages || []).slice(),
      keyword: this.keyword,
      rerankId: this.rerankId,
      searchId: this.searchId,
      highlight: this.highlight,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagSearchbotRetrievalRequest {
  /**
   * Standard JavaScript object representation for RagSearchbotRetrievalRequest
   */
  export interface AsObject {
    parent: string;
    kbId: string[];
    question: string;
    page: number;
    size: number;
    docIds: string[];
    similarityThreshold: number;
    vectorSimilarityWeight: number;
    useKg: boolean;
    topK: number;
    crossLanguages: string[];
    keyword: boolean;
    rerankId: string;
    searchId: string;
    highlight: boolean;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagSearchbotRetrievalRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    kbId: string[];
    question: string;
    page: number;
    size: number;
    docIds: string[];
    similarityThreshold: number;
    vectorSimilarityWeight: number;
    useKg: boolean;
    topK: number;
    crossLanguages: string[];
    keyword: boolean;
    rerankId: string;
    searchId: string;
    highlight: boolean;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagSearchbotRetrievalResponse
 */
export class RagSearchbotRetrievalResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagSearchbotRetrievalResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagSearchbotRetrievalResponse();
    RagSearchbotRetrievalResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagSearchbotRetrievalResponse) {
    _instance.chunks = _instance.chunks || [];
    _instance.docAggs = _instance.docAggs || [];
    _instance.total = _instance.total || 0;
    _instance.labels = _instance.labels || [];
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagSearchbotRetrievalResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RagChunk();
          _reader.readMessage(
            messageInitializer1,
            RagChunk.deserializeBinaryFromReader
          );
          (_instance.chunks = _instance.chunks || []).push(messageInitializer1);
          break;
        case 2:
          const messageInitializer2 = new googleProtobuf001.Struct();
          _reader.readMessage(
            messageInitializer2,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          (_instance.docAggs = _instance.docAggs || []).push(
            messageInitializer2
          );
          break;
        case 3:
          _instance.total = _reader.readInt32();
          break;
        case 4:
          (_instance.labels = _instance.labels || []).push(
            _reader.readString()
          );
          break;
        case 5:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagSearchbotRetrievalResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagSearchbotRetrievalResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.chunks && _instance.chunks.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.chunks as any,
        RagChunk.serializeBinaryToWriter
      );
    }
    if (_instance.docAggs && _instance.docAggs.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.docAggs as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt32(3, _instance.total);
    }
    if (_instance.labels && _instance.labels.length) {
      _writer.writeRepeatedString(4, _instance.labels);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        5,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _chunks?: RagChunk[];
  private _docAggs?: googleProtobuf001.Struct[];
  private _total: number;
  private _labels: string[];
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagSearchbotRetrievalResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagSearchbotRetrievalResponse.AsObject>
  ) {
    _value = _value || {};
    this.chunks = (_value.chunks || []).map(m => new RagChunk(m));
    this.docAggs = (_value.docAggs || []).map(
      m => new googleProtobuf001.Struct(m)
    );
    this.total = _value.total;
    this.labels = (_value.labels || []).slice();
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagSearchbotRetrievalResponse.refineValues(this);
  }
  get chunks(): RagChunk[] | undefined {
    return this._chunks;
  }
  set chunks(value: RagChunk[] | undefined) {
    this._chunks = value;
  }
  get docAggs(): googleProtobuf001.Struct[] | undefined {
    return this._docAggs;
  }
  set docAggs(value: googleProtobuf001.Struct[] | undefined) {
    this._docAggs = value;
  }
  get total(): number {
    return this._total;
  }
  set total(value: number) {
    this._total = value;
  }
  get labels(): string[] {
    return this._labels;
  }
  set labels(value: string[]) {
    this._labels = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagSearchbotRetrievalResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagSearchbotRetrievalResponse.AsObject {
    return {
      chunks: (this.chunks || []).map(m => m.toObject()),
      docAggs: (this.docAggs || []).map(m => m.toObject()),
      total: this.total,
      labels: (this.labels || []).slice(),
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagSearchbotRetrievalResponse.AsProtobufJSON {
    return {
      chunks: (this.chunks || []).map(m => m.toProtobufJSON(options)),
      docAggs: (this.docAggs || []).map(m => m.toProtobufJSON(options)),
      total: this.total,
      labels: (this.labels || []).slice(),
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagSearchbotRetrievalResponse {
  /**
   * Standard JavaScript object representation for RagSearchbotRetrievalResponse
   */
  export interface AsObject {
    chunks?: RagChunk.AsObject[];
    docAggs?: googleProtobuf001.Struct.AsObject[];
    total: number;
    labels: string[];
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagSearchbotRetrievalResponse
   */
  export interface AsProtobufJSON {
    chunks: RagChunk.AsProtobufJSON[] | null;
    docAggs: googleProtobuf001.Struct.AsProtobufJSON[] | null;
    total: number;
    labels: string[];
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagSearchbotRelatedQuestionsRequest
 */
export class RagSearchbotRelatedQuestionsRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagSearchbotRelatedQuestionsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagSearchbotRelatedQuestionsRequest();
    RagSearchbotRelatedQuestionsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagSearchbotRelatedQuestionsRequest) {
    _instance.parent = _instance.parent || '';
    _instance.question = _instance.question || '';
    _instance.searchId = _instance.searchId || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagSearchbotRelatedQuestionsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.question = _reader.readString();
          break;
        case 3:
          _instance.searchId = _reader.readString();
          break;
        case 4:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagSearchbotRelatedQuestionsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagSearchbotRelatedQuestionsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.question) {
      _writer.writeString(2, _instance.question);
    }
    if (_instance.searchId) {
      _writer.writeString(3, _instance.searchId);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        4,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _question: string;
  private _searchId: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagSearchbotRelatedQuestionsRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<RagSearchbotRelatedQuestionsRequest.AsObject>
  ) {
    _value = _value || {};
    this.parent = _value.parent;
    this.question = _value.question;
    this.searchId = _value.searchId;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagSearchbotRelatedQuestionsRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get question(): string {
    return this._question;
  }
  set question(value: string) {
    this._question = value;
  }
  get searchId(): string {
    return this._searchId;
  }
  set searchId(value: string) {
    this._searchId = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagSearchbotRelatedQuestionsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagSearchbotRelatedQuestionsRequest.AsObject {
    return {
      parent: this.parent,
      question: this.question,
      searchId: this.searchId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagSearchbotRelatedQuestionsRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      question: this.question,
      searchId: this.searchId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagSearchbotRelatedQuestionsRequest {
  /**
   * Standard JavaScript object representation for RagSearchbotRelatedQuestionsRequest
   */
  export interface AsObject {
    parent: string;
    question: string;
    searchId: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagSearchbotRelatedQuestionsRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    question: string;
    searchId: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagSearchbotDetailRequest
 */
export class RagSearchbotDetailRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagSearchbotDetailRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagSearchbotDetailRequest();
    RagSearchbotDetailRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagSearchbotDetailRequest) {
    _instance.parent = _instance.parent || '';
    _instance.searchId = _instance.searchId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagSearchbotDetailRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.searchId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RagSearchbotDetailRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagSearchbotDetailRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.searchId) {
      _writer.writeString(2, _instance.searchId);
    }
  }

  private _parent: string;
  private _searchId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagSearchbotDetailRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagSearchbotDetailRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.searchId = _value.searchId;
    RagSearchbotDetailRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get searchId(): string {
    return this._searchId;
  }
  set searchId(value: string) {
    this._searchId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagSearchbotDetailRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagSearchbotDetailRequest.AsObject {
    return {
      parent: this.parent,
      searchId: this.searchId
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
  ): RagSearchbotDetailRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      searchId: this.searchId
    };
  }
}
export module RagSearchbotDetailRequest {
  /**
   * Standard JavaScript object representation for RagSearchbotDetailRequest
   */
  export interface AsObject {
    parent: string;
    searchId: string;
  }

  /**
   * Protobuf JSON representation for RagSearchbotDetailRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    searchId: string;
  }
}

/**
 * Message implementation for ondewo.nlu.RagSearchbotDetailResponse
 */
export class RagSearchbotDetailResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagSearchbotDetailResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagSearchbotDetailResponse();
    RagSearchbotDetailResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagSearchbotDetailResponse) {
    _instance.id = _instance.id || '';
    _instance.avatar = _instance.avatar || '';
    _instance.tenantId = _instance.tenantId || '';
    _instance.name = _instance.name || '';
    _instance.description = _instance.description || '';
    _instance.createBy = _instance.createBy || '';
    _instance.searchConfig = _instance.searchConfig || undefined;
    _instance.updateTime = _instance.updateTime || '0';
    _instance.nickname = _instance.nickname || '';
    _instance.tenantAvatar = _instance.tenantAvatar || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagSearchbotDetailResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.avatar = _reader.readString();
          break;
        case 3:
          _instance.tenantId = _reader.readString();
          break;
        case 4:
          _instance.name = _reader.readString();
          break;
        case 5:
          _instance.description = _reader.readString();
          break;
        case 6:
          _instance.createBy = _reader.readString();
          break;
        case 7:
          _instance.searchConfig = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.searchConfig,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.updateTime = _reader.readInt64String();
          break;
        case 9:
          _instance.nickname = _reader.readString();
          break;
        case 10:
          _instance.tenantAvatar = _reader.readString();
          break;
        case 11:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagSearchbotDetailResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagSearchbotDetailResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.avatar) {
      _writer.writeString(2, _instance.avatar);
    }
    if (_instance.tenantId) {
      _writer.writeString(3, _instance.tenantId);
    }
    if (_instance.name) {
      _writer.writeString(4, _instance.name);
    }
    if (_instance.description) {
      _writer.writeString(5, _instance.description);
    }
    if (_instance.createBy) {
      _writer.writeString(6, _instance.createBy);
    }
    if (_instance.searchConfig) {
      _writer.writeMessage(
        7,
        _instance.searchConfig as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
    if (_instance.updateTime) {
      _writer.writeInt64String(8, _instance.updateTime);
    }
    if (_instance.nickname) {
      _writer.writeString(9, _instance.nickname);
    }
    if (_instance.tenantAvatar) {
      _writer.writeString(10, _instance.tenantAvatar);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        11,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _id: string;
  private _avatar: string;
  private _tenantId: string;
  private _name: string;
  private _description: string;
  private _createBy: string;
  private _searchConfig?: googleProtobuf001.Struct;
  private _updateTime: string;
  private _nickname: string;
  private _tenantAvatar: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagSearchbotDetailResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagSearchbotDetailResponse.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.avatar = _value.avatar;
    this.tenantId = _value.tenantId;
    this.name = _value.name;
    this.description = _value.description;
    this.createBy = _value.createBy;
    this.searchConfig = _value.searchConfig
      ? new googleProtobuf001.Struct(_value.searchConfig)
      : undefined;
    this.updateTime = _value.updateTime;
    this.nickname = _value.nickname;
    this.tenantAvatar = _value.tenantAvatar;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagSearchbotDetailResponse.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get avatar(): string {
    return this._avatar;
  }
  set avatar(value: string) {
    this._avatar = value;
  }
  get tenantId(): string {
    return this._tenantId;
  }
  set tenantId(value: string) {
    this._tenantId = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  get createBy(): string {
    return this._createBy;
  }
  set createBy(value: string) {
    this._createBy = value;
  }
  get searchConfig(): googleProtobuf001.Struct | undefined {
    return this._searchConfig;
  }
  set searchConfig(value: googleProtobuf001.Struct | undefined) {
    this._searchConfig = value;
  }
  get updateTime(): string {
    return this._updateTime;
  }
  set updateTime(value: string) {
    this._updateTime = value;
  }
  get nickname(): string {
    return this._nickname;
  }
  set nickname(value: string) {
    this._nickname = value;
  }
  get tenantAvatar(): string {
    return this._tenantAvatar;
  }
  set tenantAvatar(value: string) {
    this._tenantAvatar = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagSearchbotDetailResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagSearchbotDetailResponse.AsObject {
    return {
      id: this.id,
      avatar: this.avatar,
      tenantId: this.tenantId,
      name: this.name,
      description: this.description,
      createBy: this.createBy,
      searchConfig: this.searchConfig
        ? this.searchConfig.toObject()
        : undefined,
      updateTime: this.updateTime,
      nickname: this.nickname,
      tenantAvatar: this.tenantAvatar,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagSearchbotDetailResponse.AsProtobufJSON {
    return {
      id: this.id,
      avatar: this.avatar,
      tenantId: this.tenantId,
      name: this.name,
      description: this.description,
      createBy: this.createBy,
      searchConfig: this.searchConfig
        ? this.searchConfig.toProtobufJSON(options)
        : null,
      updateTime: this.updateTime,
      nickname: this.nickname,
      tenantAvatar: this.tenantAvatar,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagSearchbotDetailResponse {
  /**
   * Standard JavaScript object representation for RagSearchbotDetailResponse
   */
  export interface AsObject {
    id: string;
    avatar: string;
    tenantId: string;
    name: string;
    description: string;
    createBy: string;
    searchConfig?: googleProtobuf001.Struct.AsObject;
    updateTime: string;
    nickname: string;
    tenantAvatar: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagSearchbotDetailResponse
   */
  export interface AsProtobufJSON {
    id: string;
    avatar: string;
    tenantId: string;
    name: string;
    description: string;
    createBy: string;
    searchConfig: googleProtobuf001.Struct.AsProtobufJSON | null;
    updateTime: string;
    nickname: string;
    tenantAvatar: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagSearchbotMindmapRequest
 */
export class RagSearchbotMindmapRequest implements GrpcMessage {
  static id = 'ondewo.nlu.RagSearchbotMindmapRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagSearchbotMindmapRequest();
    RagSearchbotMindmapRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagSearchbotMindmapRequest) {
    _instance.parent = _instance.parent || '';
    _instance.question = _instance.question || '';
    _instance.kbIds = _instance.kbIds || [];
    _instance.searchId = _instance.searchId || '';
    _instance.additionalFields = _instance.additionalFields || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagSearchbotMindmapRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.question = _reader.readString();
          break;
        case 3:
          (_instance.kbIds = _instance.kbIds || []).push(_reader.readString());
          break;
        case 4:
          _instance.searchId = _reader.readString();
          break;
        case 5:
          _instance.additionalFields = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.additionalFields,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagSearchbotMindmapRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagSearchbotMindmapRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.question) {
      _writer.writeString(2, _instance.question);
    }
    if (_instance.kbIds && _instance.kbIds.length) {
      _writer.writeRepeatedString(3, _instance.kbIds);
    }
    if (_instance.searchId) {
      _writer.writeString(4, _instance.searchId);
    }
    if (_instance.additionalFields) {
      _writer.writeMessage(
        5,
        _instance.additionalFields as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _parent: string;
  private _question: string;
  private _kbIds: string[];
  private _searchId: string;
  private _additionalFields?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagSearchbotMindmapRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagSearchbotMindmapRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.question = _value.question;
    this.kbIds = (_value.kbIds || []).slice();
    this.searchId = _value.searchId;
    this.additionalFields = _value.additionalFields
      ? new googleProtobuf001.Struct(_value.additionalFields)
      : undefined;
    RagSearchbotMindmapRequest.refineValues(this);
  }
  get parent(): string {
    return this._parent;
  }
  set parent(value: string) {
    this._parent = value;
  }
  get question(): string {
    return this._question;
  }
  set question(value: string) {
    this._question = value;
  }
  get kbIds(): string[] {
    return this._kbIds;
  }
  set kbIds(value: string[]) {
    this._kbIds = value;
  }
  get searchId(): string {
    return this._searchId;
  }
  set searchId(value: string) {
    this._searchId = value;
  }
  get additionalFields(): googleProtobuf001.Struct | undefined {
    return this._additionalFields;
  }
  set additionalFields(value: googleProtobuf001.Struct | undefined) {
    this._additionalFields = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagSearchbotMindmapRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagSearchbotMindmapRequest.AsObject {
    return {
      parent: this.parent,
      question: this.question,
      kbIds: (this.kbIds || []).slice(),
      searchId: this.searchId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toObject()
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
  ): RagSearchbotMindmapRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      question: this.question,
      kbIds: (this.kbIds || []).slice(),
      searchId: this.searchId,
      additionalFields: this.additionalFields
        ? this.additionalFields.toProtobufJSON(options)
        : null
    };
  }
}
export module RagSearchbotMindmapRequest {
  /**
   * Standard JavaScript object representation for RagSearchbotMindmapRequest
   */
  export interface AsObject {
    parent: string;
    question: string;
    kbIds: string[];
    searchId: string;
    additionalFields?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagSearchbotMindmapRequest
   */
  export interface AsProtobufJSON {
    parent: string;
    question: string;
    kbIds: string[];
    searchId: string;
    additionalFields: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.nlu.RagSearchbotMindmapResponse
 */
export class RagSearchbotMindmapResponse implements GrpcMessage {
  static id = 'ondewo.nlu.RagSearchbotMindmapResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RagSearchbotMindmapResponse();
    RagSearchbotMindmapResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RagSearchbotMindmapResponse) {
    _instance.mindmap = _instance.mindmap || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RagSearchbotMindmapResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.mindmap = new googleProtobuf001.Struct();
          _reader.readMessage(
            _instance.mindmap,
            googleProtobuf001.Struct.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RagSearchbotMindmapResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RagSearchbotMindmapResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.mindmap) {
      _writer.writeMessage(
        1,
        _instance.mindmap as any,
        googleProtobuf001.Struct.serializeBinaryToWriter
      );
    }
  }

  private _mindmap?: googleProtobuf001.Struct;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RagSearchbotMindmapResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RagSearchbotMindmapResponse.AsObject>) {
    _value = _value || {};
    this.mindmap = _value.mindmap
      ? new googleProtobuf001.Struct(_value.mindmap)
      : undefined;
    RagSearchbotMindmapResponse.refineValues(this);
  }
  get mindmap(): googleProtobuf001.Struct | undefined {
    return this._mindmap;
  }
  set mindmap(value: googleProtobuf001.Struct | undefined) {
    this._mindmap = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RagSearchbotMindmapResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RagSearchbotMindmapResponse.AsObject {
    return {
      mindmap: this.mindmap ? this.mindmap.toObject() : undefined
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
  ): RagSearchbotMindmapResponse.AsProtobufJSON {
    return {
      mindmap: this.mindmap ? this.mindmap.toProtobufJSON(options) : null
    };
  }
}
export module RagSearchbotMindmapResponse {
  /**
   * Standard JavaScript object representation for RagSearchbotMindmapResponse
   */
  export interface AsObject {
    mindmap?: googleProtobuf001.Struct.AsObject;
  }

  /**
   * Protobuf JSON representation for RagSearchbotMindmapResponse
   */
  export interface AsProtobufJSON {
    mindmap: googleProtobuf001.Struct.AsProtobufJSON | null;
  }
}
