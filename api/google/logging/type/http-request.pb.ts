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
import * as googleApi002 from '../../../google/api/annotations.pb';
import * as googleProtobuf003 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for google.logging.type.HttpRequest
 */
export class HttpRequest implements GrpcMessage {
  static id = 'google.logging.type.HttpRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new HttpRequest();
    HttpRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: HttpRequest) {
    _instance.requestMethod = _instance.requestMethod || '';
    _instance.requestUrl = _instance.requestUrl || '';
    _instance.requestSize = _instance.requestSize || '0';
    _instance.status = _instance.status || 0;
    _instance.responseSize = _instance.responseSize || '0';
    _instance.userAgent = _instance.userAgent || '';
    _instance.remoteIp = _instance.remoteIp || '';
    _instance.serverIp = _instance.serverIp || '';
    _instance.referer = _instance.referer || '';
    _instance.latency = _instance.latency || undefined;
    _instance.cacheLookup = _instance.cacheLookup || false;
    _instance.cacheHit = _instance.cacheHit || false;
    _instance.cacheValidatedWithOriginServer =
      _instance.cacheValidatedWithOriginServer || false;
    _instance.cacheFillBytes = _instance.cacheFillBytes || '0';
    _instance.protocol = _instance.protocol || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: HttpRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.requestMethod = _reader.readString();
          break;
        case 2:
          _instance.requestUrl = _reader.readString();
          break;
        case 3:
          _instance.requestSize = _reader.readInt64String();
          break;
        case 4:
          _instance.status = _reader.readInt32();
          break;
        case 5:
          _instance.responseSize = _reader.readInt64String();
          break;
        case 6:
          _instance.userAgent = _reader.readString();
          break;
        case 7:
          _instance.remoteIp = _reader.readString();
          break;
        case 13:
          _instance.serverIp = _reader.readString();
          break;
        case 8:
          _instance.referer = _reader.readString();
          break;
        case 14:
          _instance.latency = new googleProtobuf003.Duration();
          _reader.readMessage(
            _instance.latency,
            googleProtobuf003.Duration.deserializeBinaryFromReader
          );
          break;
        case 11:
          _instance.cacheLookup = _reader.readBool();
          break;
        case 9:
          _instance.cacheHit = _reader.readBool();
          break;
        case 10:
          _instance.cacheValidatedWithOriginServer = _reader.readBool();
          break;
        case 12:
          _instance.cacheFillBytes = _reader.readInt64String();
          break;
        case 15:
          _instance.protocol = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    HttpRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: HttpRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.requestMethod) {
      _writer.writeString(1, _instance.requestMethod);
    }
    if (_instance.requestUrl) {
      _writer.writeString(2, _instance.requestUrl);
    }
    if (_instance.requestSize) {
      _writer.writeInt64String(3, _instance.requestSize);
    }
    if (_instance.status) {
      _writer.writeInt32(4, _instance.status);
    }
    if (_instance.responseSize) {
      _writer.writeInt64String(5, _instance.responseSize);
    }
    if (_instance.userAgent) {
      _writer.writeString(6, _instance.userAgent);
    }
    if (_instance.remoteIp) {
      _writer.writeString(7, _instance.remoteIp);
    }
    if (_instance.serverIp) {
      _writer.writeString(13, _instance.serverIp);
    }
    if (_instance.referer) {
      _writer.writeString(8, _instance.referer);
    }
    if (_instance.latency) {
      _writer.writeMessage(
        14,
        _instance.latency as any,
        googleProtobuf003.Duration.serializeBinaryToWriter
      );
    }
    if (_instance.cacheLookup) {
      _writer.writeBool(11, _instance.cacheLookup);
    }
    if (_instance.cacheHit) {
      _writer.writeBool(9, _instance.cacheHit);
    }
    if (_instance.cacheValidatedWithOriginServer) {
      _writer.writeBool(10, _instance.cacheValidatedWithOriginServer);
    }
    if (_instance.cacheFillBytes) {
      _writer.writeInt64String(12, _instance.cacheFillBytes);
    }
    if (_instance.protocol) {
      _writer.writeString(15, _instance.protocol);
    }
  }

  private _requestMethod: string;
  private _requestUrl: string;
  private _requestSize: string;
  private _status: number;
  private _responseSize: string;
  private _userAgent: string;
  private _remoteIp: string;
  private _serverIp: string;
  private _referer: string;
  private _latency?: googleProtobuf003.Duration;
  private _cacheLookup: boolean;
  private _cacheHit: boolean;
  private _cacheValidatedWithOriginServer: boolean;
  private _cacheFillBytes: string;
  private _protocol: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of HttpRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<HttpRequest.AsObject>) {
    _value = _value || {};
    this.requestMethod = _value.requestMethod;
    this.requestUrl = _value.requestUrl;
    this.requestSize = _value.requestSize;
    this.status = _value.status;
    this.responseSize = _value.responseSize;
    this.userAgent = _value.userAgent;
    this.remoteIp = _value.remoteIp;
    this.serverIp = _value.serverIp;
    this.referer = _value.referer;
    this.latency = _value.latency
      ? new googleProtobuf003.Duration(_value.latency)
      : undefined;
    this.cacheLookup = _value.cacheLookup;
    this.cacheHit = _value.cacheHit;
    this.cacheValidatedWithOriginServer = _value.cacheValidatedWithOriginServer;
    this.cacheFillBytes = _value.cacheFillBytes;
    this.protocol = _value.protocol;
    HttpRequest.refineValues(this);
  }
  get requestMethod(): string {
    return this._requestMethod;
  }
  set requestMethod(value: string) {
    this._requestMethod = value;
  }
  get requestUrl(): string {
    return this._requestUrl;
  }
  set requestUrl(value: string) {
    this._requestUrl = value;
  }
  get requestSize(): string {
    return this._requestSize;
  }
  set requestSize(value: string) {
    this._requestSize = value;
  }
  get status(): number {
    return this._status;
  }
  set status(value: number) {
    this._status = value;
  }
  get responseSize(): string {
    return this._responseSize;
  }
  set responseSize(value: string) {
    this._responseSize = value;
  }
  get userAgent(): string {
    return this._userAgent;
  }
  set userAgent(value: string) {
    this._userAgent = value;
  }
  get remoteIp(): string {
    return this._remoteIp;
  }
  set remoteIp(value: string) {
    this._remoteIp = value;
  }
  get serverIp(): string {
    return this._serverIp;
  }
  set serverIp(value: string) {
    this._serverIp = value;
  }
  get referer(): string {
    return this._referer;
  }
  set referer(value: string) {
    this._referer = value;
  }
  get latency(): googleProtobuf003.Duration | undefined {
    return this._latency;
  }
  set latency(value: googleProtobuf003.Duration | undefined) {
    this._latency = value;
  }
  get cacheLookup(): boolean {
    return this._cacheLookup;
  }
  set cacheLookup(value: boolean) {
    this._cacheLookup = value;
  }
  get cacheHit(): boolean {
    return this._cacheHit;
  }
  set cacheHit(value: boolean) {
    this._cacheHit = value;
  }
  get cacheValidatedWithOriginServer(): boolean {
    return this._cacheValidatedWithOriginServer;
  }
  set cacheValidatedWithOriginServer(value: boolean) {
    this._cacheValidatedWithOriginServer = value;
  }
  get cacheFillBytes(): string {
    return this._cacheFillBytes;
  }
  set cacheFillBytes(value: string) {
    this._cacheFillBytes = value;
  }
  get protocol(): string {
    return this._protocol;
  }
  set protocol(value: string) {
    this._protocol = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    HttpRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): HttpRequest.AsObject {
    return {
      requestMethod: this.requestMethod,
      requestUrl: this.requestUrl,
      requestSize: this.requestSize,
      status: this.status,
      responseSize: this.responseSize,
      userAgent: this.userAgent,
      remoteIp: this.remoteIp,
      serverIp: this.serverIp,
      referer: this.referer,
      latency: this.latency ? this.latency.toObject() : undefined,
      cacheLookup: this.cacheLookup,
      cacheHit: this.cacheHit,
      cacheValidatedWithOriginServer: this.cacheValidatedWithOriginServer,
      cacheFillBytes: this.cacheFillBytes,
      protocol: this.protocol
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
  ): HttpRequest.AsProtobufJSON {
    return {
      requestMethod: this.requestMethod,
      requestUrl: this.requestUrl,
      requestSize: this.requestSize,
      status: this.status,
      responseSize: this.responseSize,
      userAgent: this.userAgent,
      remoteIp: this.remoteIp,
      serverIp: this.serverIp,
      referer: this.referer,
      latency: this.latency ? this.latency.toProtobufJSON(options) : null,
      cacheLookup: this.cacheLookup,
      cacheHit: this.cacheHit,
      cacheValidatedWithOriginServer: this.cacheValidatedWithOriginServer,
      cacheFillBytes: this.cacheFillBytes,
      protocol: this.protocol
    };
  }
}
export module HttpRequest {
  /**
   * Standard JavaScript object representation for HttpRequest
   */
  export interface AsObject {
    requestMethod: string;
    requestUrl: string;
    requestSize: string;
    status: number;
    responseSize: string;
    userAgent: string;
    remoteIp: string;
    serverIp: string;
    referer: string;
    latency?: googleProtobuf003.Duration.AsObject;
    cacheLookup: boolean;
    cacheHit: boolean;
    cacheValidatedWithOriginServer: boolean;
    cacheFillBytes: string;
    protocol: string;
  }

  /**
   * Protobuf JSON representation for HttpRequest
   */
  export interface AsProtobufJSON {
    requestMethod: string;
    requestUrl: string;
    requestSize: string;
    status: number;
    responseSize: string;
    userAgent: string;
    remoteIp: string;
    serverIp: string;
    referer: string;
    latency: googleProtobuf003.Duration.AsProtobufJSON | null;
    cacheLookup: boolean;
    cacheHit: boolean;
    cacheValidatedWithOriginServer: boolean;
    cacheFillBytes: string;
    protocol: string;
  }
}
