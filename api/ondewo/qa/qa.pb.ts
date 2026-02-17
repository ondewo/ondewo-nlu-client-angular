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
import * as googleApi002 from '../../google/api/annotations.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import * as googleProtobuf006 from '@ngx-grpc/well-known-types';
import * as googleRpc007 from '../../google/rpc/status.pb';
import * as googleType008 from '../../google/type/latlng.pb';
import * as ondewoNlu009 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu010 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu011 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu012 from '../../ondewo/nlu/entity-type.pb';
import * as ondewoNlu013 from '../../ondewo/nlu/session.pb';
/**
 * Message implementation for ondewo.qa.GetAnswerRequest
 */
export class GetAnswerRequest implements GrpcMessage {
  static id = 'ondewo.qa.GetAnswerRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAnswerRequest();
    GetAnswerRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAnswerRequest) {
    _instance.sessionId = _instance.sessionId || '';
    _instance.text = _instance.text || undefined;
    _instance.maxNumAnswers = _instance.maxNumAnswers || 0;
    _instance.thresholdReader = _instance.thresholdReader || 0;
    _instance.thresholdRetriever = _instance.thresholdRetriever || 0;
    _instance.thresholdOverall = _instance.thresholdOverall || 0;
    _instance.readerModelName = _instance.readerModelName || '';
    _instance.urlFilter = _instance.urlFilter || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAnswerRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sessionId = _reader.readString();
          break;
        case 2:
          _instance.text = new ondewoNlu013.TextInput();
          _reader.readMessage(
            _instance.text,
            ondewoNlu013.TextInput.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.maxNumAnswers = _reader.readInt32();
          break;
        case 4:
          _instance.thresholdReader = _reader.readFloat();
          break;
        case 5:
          _instance.thresholdRetriever = _reader.readFloat();
          break;
        case 6:
          _instance.thresholdOverall = _reader.readFloat();
          break;
        case 7:
          _instance.readerModelName = _reader.readString();
          break;
        case 8:
          _instance.urlFilter = new UrlFilter();
          _reader.readMessage(
            _instance.urlFilter,
            UrlFilter.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetAnswerRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAnswerRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sessionId) {
      _writer.writeString(1, _instance.sessionId);
    }
    if (_instance.text) {
      _writer.writeMessage(
        2,
        _instance.text as any,
        ondewoNlu013.TextInput.serializeBinaryToWriter
      );
    }
    if (_instance.maxNumAnswers) {
      _writer.writeInt32(3, _instance.maxNumAnswers);
    }
    if (_instance.thresholdReader) {
      _writer.writeFloat(4, _instance.thresholdReader);
    }
    if (_instance.thresholdRetriever) {
      _writer.writeFloat(5, _instance.thresholdRetriever);
    }
    if (_instance.thresholdOverall) {
      _writer.writeFloat(6, _instance.thresholdOverall);
    }
    if (_instance.readerModelName) {
      _writer.writeString(7, _instance.readerModelName);
    }
    if (_instance.urlFilter) {
      _writer.writeMessage(
        8,
        _instance.urlFilter as any,
        UrlFilter.serializeBinaryToWriter
      );
    }
  }

  private _sessionId: string;
  private _text?: ondewoNlu013.TextInput;
  private _maxNumAnswers: number;
  private _thresholdReader: number;
  private _thresholdRetriever: number;
  private _thresholdOverall: number;
  private _readerModelName: string;
  private _urlFilter?: UrlFilter;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAnswerRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetAnswerRequest.AsObject>) {
    _value = _value || {};
    this.sessionId = _value.sessionId;
    this.text = _value.text
      ? new ondewoNlu013.TextInput(_value.text)
      : undefined;
    this.maxNumAnswers = _value.maxNumAnswers;
    this.thresholdReader = _value.thresholdReader;
    this.thresholdRetriever = _value.thresholdRetriever;
    this.thresholdOverall = _value.thresholdOverall;
    this.readerModelName = _value.readerModelName;
    this.urlFilter = _value.urlFilter
      ? new UrlFilter(_value.urlFilter)
      : undefined;
    GetAnswerRequest.refineValues(this);
  }
  get sessionId(): string {
    return this._sessionId;
  }
  set sessionId(value: string) {
    this._sessionId = value;
  }
  get text(): ondewoNlu013.TextInput | undefined {
    return this._text;
  }
  set text(value: ondewoNlu013.TextInput | undefined) {
    this._text = value;
  }
  get maxNumAnswers(): number {
    return this._maxNumAnswers;
  }
  set maxNumAnswers(value: number) {
    this._maxNumAnswers = value;
  }
  get thresholdReader(): number {
    return this._thresholdReader;
  }
  set thresholdReader(value: number) {
    this._thresholdReader = value;
  }
  get thresholdRetriever(): number {
    return this._thresholdRetriever;
  }
  set thresholdRetriever(value: number) {
    this._thresholdRetriever = value;
  }
  get thresholdOverall(): number {
    return this._thresholdOverall;
  }
  set thresholdOverall(value: number) {
    this._thresholdOverall = value;
  }
  get readerModelName(): string {
    return this._readerModelName;
  }
  set readerModelName(value: string) {
    this._readerModelName = value;
  }
  get urlFilter(): UrlFilter | undefined {
    return this._urlFilter;
  }
  set urlFilter(value: UrlFilter | undefined) {
    this._urlFilter = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetAnswerRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAnswerRequest.AsObject {
    return {
      sessionId: this.sessionId,
      text: this.text ? this.text.toObject() : undefined,
      maxNumAnswers: this.maxNumAnswers,
      thresholdReader: this.thresholdReader,
      thresholdRetriever: this.thresholdRetriever,
      thresholdOverall: this.thresholdOverall,
      readerModelName: this.readerModelName,
      urlFilter: this.urlFilter ? this.urlFilter.toObject() : undefined
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
  ): GetAnswerRequest.AsProtobufJSON {
    return {
      sessionId: this.sessionId,
      text: this.text ? this.text.toProtobufJSON(options) : null,
      maxNumAnswers: this.maxNumAnswers,
      thresholdReader: this.thresholdReader,
      thresholdRetriever: this.thresholdRetriever,
      thresholdOverall: this.thresholdOverall,
      readerModelName: this.readerModelName,
      urlFilter: this.urlFilter ? this.urlFilter.toProtobufJSON(options) : null
    };
  }
}
export module GetAnswerRequest {
  /**
   * Standard JavaScript object representation for GetAnswerRequest
   */
  export interface AsObject {
    sessionId: string;
    text?: ondewoNlu013.TextInput.AsObject;
    maxNumAnswers: number;
    thresholdReader: number;
    thresholdRetriever: number;
    thresholdOverall: number;
    readerModelName: string;
    urlFilter?: UrlFilter.AsObject;
  }

  /**
   * Protobuf JSON representation for GetAnswerRequest
   */
  export interface AsProtobufJSON {
    sessionId: string;
    text: ondewoNlu013.TextInput.AsProtobufJSON | null;
    maxNumAnswers: number;
    thresholdReader: number;
    thresholdRetriever: number;
    thresholdOverall: number;
    readerModelName: string;
    urlFilter: UrlFilter.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.qa.GetAnswerResponse
 */
export class GetAnswerResponse implements GrpcMessage {
  static id = 'ondewo.qa.GetAnswerResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAnswerResponse();
    GetAnswerResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAnswerResponse) {
    _instance.queryResult = _instance.queryResult || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAnswerResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 2:
          _instance.queryResult = new ondewoNlu013.DetectIntentResponse();
          _reader.readMessage(
            _instance.queryResult,
            ondewoNlu013.DetectIntentResponse.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetAnswerResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAnswerResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.queryResult) {
      _writer.writeMessage(
        2,
        _instance.queryResult as any,
        ondewoNlu013.DetectIntentResponse.serializeBinaryToWriter
      );
    }
  }

  private _queryResult?: ondewoNlu013.DetectIntentResponse;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAnswerResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetAnswerResponse.AsObject>) {
    _value = _value || {};
    this.queryResult = _value.queryResult
      ? new ondewoNlu013.DetectIntentResponse(_value.queryResult)
      : undefined;
    GetAnswerResponse.refineValues(this);
  }
  get queryResult(): ondewoNlu013.DetectIntentResponse | undefined {
    return this._queryResult;
  }
  set queryResult(value: ondewoNlu013.DetectIntentResponse | undefined) {
    this._queryResult = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetAnswerResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAnswerResponse.AsObject {
    return {
      queryResult: this.queryResult ? this.queryResult.toObject() : undefined
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
  ): GetAnswerResponse.AsProtobufJSON {
    return {
      queryResult: this.queryResult
        ? this.queryResult.toProtobufJSON(options)
        : null
    };
  }
}
export module GetAnswerResponse {
  /**
   * Standard JavaScript object representation for GetAnswerResponse
   */
  export interface AsObject {
    queryResult?: ondewoNlu013.DetectIntentResponse.AsObject;
  }

  /**
   * Protobuf JSON representation for GetAnswerResponse
   */
  export interface AsProtobufJSON {
    queryResult: ondewoNlu013.DetectIntentResponse.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for ondewo.qa.RunScraperRequest
 */
export class RunScraperRequest implements GrpcMessage {
  static id = 'ondewo.qa.RunScraperRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RunScraperRequest();
    RunScraperRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RunScraperRequest) {
    _instance.projectIds = _instance.projectIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RunScraperRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.projectIds = _instance.projectIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RunScraperRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RunScraperRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.projectIds && _instance.projectIds.length) {
      _writer.writeRepeatedString(1, _instance.projectIds);
    }
  }

  private _projectIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RunScraperRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RunScraperRequest.AsObject>) {
    _value = _value || {};
    this.projectIds = (_value.projectIds || []).slice();
    RunScraperRequest.refineValues(this);
  }
  get projectIds(): string[] {
    return this._projectIds;
  }
  set projectIds(value: string[]) {
    this._projectIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RunScraperRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RunScraperRequest.AsObject {
    return {
      projectIds: (this.projectIds || []).slice()
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
  ): RunScraperRequest.AsProtobufJSON {
    return {
      projectIds: (this.projectIds || []).slice()
    };
  }
}
export module RunScraperRequest {
  /**
   * Standard JavaScript object representation for RunScraperRequest
   */
  export interface AsObject {
    projectIds: string[];
  }

  /**
   * Protobuf JSON representation for RunScraperRequest
   */
  export interface AsProtobufJSON {
    projectIds: string[];
  }
}

/**
 * Message implementation for ondewo.qa.RunScraperResponse
 */
export class RunScraperResponse implements GrpcMessage {
  static id = 'ondewo.qa.RunScraperResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RunScraperResponse();
    RunScraperResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RunScraperResponse) {
    _instance.scraperContainers = _instance.scraperContainers || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RunScraperResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RunScraperResponse.ScraperContainer();
          _reader.readMessage(
            messageInitializer1,
            RunScraperResponse.ScraperContainer.deserializeBinaryFromReader
          );
          (_instance.scraperContainers =
            _instance.scraperContainers || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    RunScraperResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RunScraperResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.scraperContainers && _instance.scraperContainers.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.scraperContainers as any,
        RunScraperResponse.ScraperContainer.serializeBinaryToWriter
      );
    }
  }

  private _scraperContainers?: RunScraperResponse.ScraperContainer[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RunScraperResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RunScraperResponse.AsObject>) {
    _value = _value || {};
    this.scraperContainers = (_value.scraperContainers || []).map(
      m => new RunScraperResponse.ScraperContainer(m)
    );
    RunScraperResponse.refineValues(this);
  }
  get scraperContainers(): RunScraperResponse.ScraperContainer[] | undefined {
    return this._scraperContainers;
  }
  set scraperContainers(
    value: RunScraperResponse.ScraperContainer[] | undefined
  ) {
    this._scraperContainers = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RunScraperResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RunScraperResponse.AsObject {
    return {
      scraperContainers: (this.scraperContainers || []).map(m => m.toObject())
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
  ): RunScraperResponse.AsProtobufJSON {
    return {
      scraperContainers: (this.scraperContainers || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module RunScraperResponse {
  /**
   * Standard JavaScript object representation for RunScraperResponse
   */
  export interface AsObject {
    scraperContainers?: RunScraperResponse.ScraperContainer.AsObject[];
  }

  /**
   * Protobuf JSON representation for RunScraperResponse
   */
  export interface AsProtobufJSON {
    scraperContainers:
      | RunScraperResponse.ScraperContainer.AsProtobufJSON[]
      | null;
  }

  /**
   * Message implementation for ondewo.qa.RunScraperResponse.ScraperContainer
   */
  export class ScraperContainer implements GrpcMessage {
    static id = 'ondewo.qa.RunScraperResponse.ScraperContainer';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new ScraperContainer();
      ScraperContainer.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: ScraperContainer) {
      _instance.containerName = _instance.containerName || '';
      _instance.containerId = _instance.containerId || '';
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: ScraperContainer,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.containerName = _reader.readString();
            break;
          case 2:
            _instance.containerId = _reader.readString();
            break;
          default:
            _reader.skipField();
        }
      }

      ScraperContainer.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: ScraperContainer,
      _writer: BinaryWriter
    ) {
      if (_instance.containerName) {
        _writer.writeString(1, _instance.containerName);
      }
      if (_instance.containerId) {
        _writer.writeString(2, _instance.containerId);
      }
    }

    private _containerName: string;
    private _containerId: string;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of ScraperContainer to deeply clone from
     */
    constructor(_value?: RecursivePartial<ScraperContainer.AsObject>) {
      _value = _value || {};
      this.containerName = _value.containerName;
      this.containerId = _value.containerId;
      ScraperContainer.refineValues(this);
    }
    get containerName(): string {
      return this._containerName;
    }
    set containerName(value: string) {
      this._containerName = value;
    }
    get containerId(): string {
      return this._containerId;
    }
    set containerId(value: string) {
      this._containerId = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      ScraperContainer.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): ScraperContainer.AsObject {
      return {
        containerName: this.containerName,
        containerId: this.containerId
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
    ): ScraperContainer.AsProtobufJSON {
      return {
        containerName: this.containerName,
        containerId: this.containerId
      };
    }
  }
  export module ScraperContainer {
    /**
     * Standard JavaScript object representation for ScraperContainer
     */
    export interface AsObject {
      containerName: string;
      containerId: string;
    }

    /**
     * Protobuf JSON representation for ScraperContainer
     */
    export interface AsProtobufJSON {
      containerName: string;
      containerId: string;
    }
  }
}

/**
 * Message implementation for ondewo.qa.RunTrainingResponse
 */
export class RunTrainingResponse implements GrpcMessage {
  static id = 'ondewo.qa.RunTrainingResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RunTrainingResponse();
    RunTrainingResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RunTrainingResponse) {
    _instance.f1 = _instance.f1 || 0;
    _instance.accuracy = _instance.accuracy || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RunTrainingResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.f1 = _reader.readFloat();
          break;
        case 2:
          _instance.accuracy = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    RunTrainingResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RunTrainingResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.f1) {
      _writer.writeFloat(1, _instance.f1);
    }
    if (_instance.accuracy) {
      _writer.writeFloat(2, _instance.accuracy);
    }
  }

  private _f1: number;
  private _accuracy: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RunTrainingResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RunTrainingResponse.AsObject>) {
    _value = _value || {};
    this.f1 = _value.f1;
    this.accuracy = _value.accuracy;
    RunTrainingResponse.refineValues(this);
  }
  get f1(): number {
    return this._f1;
  }
  set f1(value: number) {
    this._f1 = value;
  }
  get accuracy(): number {
    return this._accuracy;
  }
  set accuracy(value: number) {
    this._accuracy = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RunTrainingResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RunTrainingResponse.AsObject {
    return {
      f1: this.f1,
      accuracy: this.accuracy
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
  ): RunTrainingResponse.AsProtobufJSON {
    return {
      f1: this.f1,
      accuracy: this.accuracy
    };
  }
}
export module RunTrainingResponse {
  /**
   * Standard JavaScript object representation for RunTrainingResponse
   */
  export interface AsObject {
    f1: number;
    accuracy: number;
  }

  /**
   * Protobuf JSON representation for RunTrainingResponse
   */
  export interface AsProtobufJSON {
    f1: number;
    accuracy: number;
  }
}

/**
 * Message implementation for ondewo.qa.UrlFilter
 */
export class UrlFilter implements GrpcMessage {
  static id = 'ondewo.qa.UrlFilter';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UrlFilter();
    UrlFilter.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UrlFilter) {
    _instance.allowedValues = _instance.allowedValues || [];
    _instance.regexFilterInclude = _instance.regexFilterInclude || '';
    _instance.regexFilterExclude = _instance.regexFilterExclude || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UrlFilter,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.allowedValues = _instance.allowedValues || []).push(
            _reader.readString()
          );
          break;
        case 2:
          _instance.regexFilterInclude = _reader.readString();
          break;
        case 3:
          _instance.regexFilterExclude = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UrlFilter.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: UrlFilter, _writer: BinaryWriter) {
    if (_instance.allowedValues && _instance.allowedValues.length) {
      _writer.writeRepeatedString(1, _instance.allowedValues);
    }
    if (_instance.regexFilterInclude) {
      _writer.writeString(2, _instance.regexFilterInclude);
    }
    if (_instance.regexFilterExclude) {
      _writer.writeString(3, _instance.regexFilterExclude);
    }
  }

  private _allowedValues: string[];
  private _regexFilterInclude: string;
  private _regexFilterExclude: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UrlFilter to deeply clone from
   */
  constructor(_value?: RecursivePartial<UrlFilter.AsObject>) {
    _value = _value || {};
    this.allowedValues = (_value.allowedValues || []).slice();
    this.regexFilterInclude = _value.regexFilterInclude;
    this.regexFilterExclude = _value.regexFilterExclude;
    UrlFilter.refineValues(this);
  }
  get allowedValues(): string[] {
    return this._allowedValues;
  }
  set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  get regexFilterInclude(): string {
    return this._regexFilterInclude;
  }
  set regexFilterInclude(value: string) {
    this._regexFilterInclude = value;
  }
  get regexFilterExclude(): string {
    return this._regexFilterExclude;
  }
  set regexFilterExclude(value: string) {
    this._regexFilterExclude = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UrlFilter.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UrlFilter.AsObject {
    return {
      allowedValues: (this.allowedValues || []).slice(),
      regexFilterInclude: this.regexFilterInclude,
      regexFilterExclude: this.regexFilterExclude
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
  ): UrlFilter.AsProtobufJSON {
    return {
      allowedValues: (this.allowedValues || []).slice(),
      regexFilterInclude: this.regexFilterInclude,
      regexFilterExclude: this.regexFilterExclude
    };
  }
}
export module UrlFilter {
  /**
   * Standard JavaScript object representation for UrlFilter
   */
  export interface AsObject {
    allowedValues: string[];
    regexFilterInclude: string;
    regexFilterExclude: string;
  }

  /**
   * Protobuf JSON representation for UrlFilter
   */
  export interface AsProtobufJSON {
    allowedValues: string[];
    regexFilterInclude: string;
    regexFilterExclude: string;
  }
}

/**
 * Message implementation for ondewo.qa.GetServerStateResponse
 */
export class GetServerStateResponse implements GrpcMessage {
  static id = 'ondewo.qa.GetServerStateResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetServerStateResponse();
    GetServerStateResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetServerStateResponse) {
    _instance.serverIsReady = _instance.serverIsReady || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetServerStateResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.serverIsReady = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    GetServerStateResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetServerStateResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.serverIsReady) {
      _writer.writeBool(1, _instance.serverIsReady);
    }
  }

  private _serverIsReady: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetServerStateResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetServerStateResponse.AsObject>) {
    _value = _value || {};
    this.serverIsReady = _value.serverIsReady;
    GetServerStateResponse.refineValues(this);
  }
  get serverIsReady(): boolean {
    return this._serverIsReady;
  }
  set serverIsReady(value: boolean) {
    this._serverIsReady = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetServerStateResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetServerStateResponse.AsObject {
    return {
      serverIsReady: this.serverIsReady
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
  ): GetServerStateResponse.AsProtobufJSON {
    return {
      serverIsReady: this.serverIsReady
    };
  }
}
export module GetServerStateResponse {
  /**
   * Standard JavaScript object representation for GetServerStateResponse
   */
  export interface AsObject {
    serverIsReady: boolean;
  }

  /**
   * Protobuf JSON representation for GetServerStateResponse
   */
  export interface AsProtobufJSON {
    serverIsReady: boolean;
  }
}

/**
 * Message implementation for ondewo.qa.ListProjectIdsResponse
 */
export class ListProjectIdsResponse implements GrpcMessage {
  static id = 'ondewo.qa.ListProjectIdsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListProjectIdsResponse();
    ListProjectIdsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListProjectIdsResponse) {
    _instance.projectIds = _instance.projectIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListProjectIdsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.projectIds = _instance.projectIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListProjectIdsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListProjectIdsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.projectIds && _instance.projectIds.length) {
      _writer.writeRepeatedString(1, _instance.projectIds);
    }
  }

  private _projectIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListProjectIdsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListProjectIdsResponse.AsObject>) {
    _value = _value || {};
    this.projectIds = (_value.projectIds || []).slice();
    ListProjectIdsResponse.refineValues(this);
  }
  get projectIds(): string[] {
    return this._projectIds;
  }
  set projectIds(value: string[]) {
    this._projectIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListProjectIdsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListProjectIdsResponse.AsObject {
    return {
      projectIds: (this.projectIds || []).slice()
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
  ): ListProjectIdsResponse.AsProtobufJSON {
    return {
      projectIds: (this.projectIds || []).slice()
    };
  }
}
export module ListProjectIdsResponse {
  /**
   * Standard JavaScript object representation for ListProjectIdsResponse
   */
  export interface AsObject {
    projectIds: string[];
  }

  /**
   * Protobuf JSON representation for ListProjectIdsResponse
   */
  export interface AsProtobufJSON {
    projectIds: string[];
  }
}

/**
 * Message implementation for ondewo.qa.GetProjectConfigRequest
 */
export class GetProjectConfigRequest implements GrpcMessage {
  static id = 'ondewo.qa.GetProjectConfigRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetProjectConfigRequest();
    GetProjectConfigRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetProjectConfigRequest) {
    _instance.projectId = _instance.projectId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetProjectConfigRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.projectId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetProjectConfigRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetProjectConfigRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.projectId) {
      _writer.writeString(1, _instance.projectId);
    }
  }

  private _projectId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetProjectConfigRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetProjectConfigRequest.AsObject>) {
    _value = _value || {};
    this.projectId = _value.projectId;
    GetProjectConfigRequest.refineValues(this);
  }
  get projectId(): string {
    return this._projectId;
  }
  set projectId(value: string) {
    this._projectId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetProjectConfigRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetProjectConfigRequest.AsObject {
    return {
      projectId: this.projectId
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
  ): GetProjectConfigRequest.AsProtobufJSON {
    return {
      projectId: this.projectId
    };
  }
}
export module GetProjectConfigRequest {
  /**
   * Standard JavaScript object representation for GetProjectConfigRequest
   */
  export interface AsObject {
    projectId: string;
  }

  /**
   * Protobuf JSON representation for GetProjectConfigRequest
   */
  export interface AsProtobufJSON {
    projectId: string;
  }
}

/**
 * Message implementation for ondewo.qa.GetProjectConfigResponse
 */
export class GetProjectConfigResponse implements GrpcMessage {
  static id = 'ondewo.qa.GetProjectConfigResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetProjectConfigResponse();
    GetProjectConfigResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetProjectConfigResponse) {
    _instance.configSerialized = _instance.configSerialized || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetProjectConfigResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.configSerialized = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetProjectConfigResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetProjectConfigResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.configSerialized) {
      _writer.writeString(1, _instance.configSerialized);
    }
  }

  private _configSerialized: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetProjectConfigResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetProjectConfigResponse.AsObject>) {
    _value = _value || {};
    this.configSerialized = _value.configSerialized;
    GetProjectConfigResponse.refineValues(this);
  }
  get configSerialized(): string {
    return this._configSerialized;
  }
  set configSerialized(value: string) {
    this._configSerialized = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetProjectConfigResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetProjectConfigResponse.AsObject {
    return {
      configSerialized: this.configSerialized
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
  ): GetProjectConfigResponse.AsProtobufJSON {
    return {
      configSerialized: this.configSerialized
    };
  }
}
export module GetProjectConfigResponse {
  /**
   * Standard JavaScript object representation for GetProjectConfigResponse
   */
  export interface AsObject {
    configSerialized: string;
  }

  /**
   * Protobuf JSON representation for GetProjectConfigResponse
   */
  export interface AsProtobufJSON {
    configSerialized: string;
  }
}

/**
 * Message implementation for ondewo.qa.UpdateDatabaseRequest
 */
export class UpdateDatabaseRequest implements GrpcMessage {
  static id = 'ondewo.qa.UpdateDatabaseRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateDatabaseRequest();
    UpdateDatabaseRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateDatabaseRequest) {
    _instance.projectIds = _instance.projectIds || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateDatabaseRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.projectIds = _instance.projectIds || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateDatabaseRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateDatabaseRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.projectIds && _instance.projectIds.length) {
      _writer.writeRepeatedString(1, _instance.projectIds);
    }
  }

  private _projectIds: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateDatabaseRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateDatabaseRequest.AsObject>) {
    _value = _value || {};
    this.projectIds = (_value.projectIds || []).slice();
    UpdateDatabaseRequest.refineValues(this);
  }
  get projectIds(): string[] {
    return this._projectIds;
  }
  set projectIds(value: string[]) {
    this._projectIds = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateDatabaseRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateDatabaseRequest.AsObject {
    return {
      projectIds: (this.projectIds || []).slice()
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
  ): UpdateDatabaseRequest.AsProtobufJSON {
    return {
      projectIds: (this.projectIds || []).slice()
    };
  }
}
export module UpdateDatabaseRequest {
  /**
   * Standard JavaScript object representation for UpdateDatabaseRequest
   */
  export interface AsObject {
    projectIds: string[];
  }

  /**
   * Protobuf JSON representation for UpdateDatabaseRequest
   */
  export interface AsProtobufJSON {
    projectIds: string[];
  }
}

/**
 * Message implementation for ondewo.qa.UpdateDatabaseResponse
 */
export class UpdateDatabaseResponse implements GrpcMessage {
  static id = 'ondewo.qa.UpdateDatabaseResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateDatabaseResponse();
    UpdateDatabaseResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateDatabaseResponse) {
    _instance.errorMessages = _instance.errorMessages || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateDatabaseResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.errorMessages = _instance.errorMessages || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateDatabaseResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateDatabaseResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.errorMessages && _instance.errorMessages.length) {
      _writer.writeRepeatedString(1, _instance.errorMessages);
    }
  }

  private _errorMessages: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateDatabaseResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateDatabaseResponse.AsObject>) {
    _value = _value || {};
    this.errorMessages = (_value.errorMessages || []).slice();
    UpdateDatabaseResponse.refineValues(this);
  }
  get errorMessages(): string[] {
    return this._errorMessages;
  }
  set errorMessages(value: string[]) {
    this._errorMessages = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateDatabaseResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateDatabaseResponse.AsObject {
    return {
      errorMessages: (this.errorMessages || []).slice()
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
  ): UpdateDatabaseResponse.AsProtobufJSON {
    return {
      errorMessages: (this.errorMessages || []).slice()
    };
  }
}
export module UpdateDatabaseResponse {
  /**
   * Standard JavaScript object representation for UpdateDatabaseResponse
   */
  export interface AsObject {
    errorMessages: string[];
  }

  /**
   * Protobuf JSON representation for UpdateDatabaseResponse
   */
  export interface AsProtobufJSON {
    errorMessages: string[];
  }
}
