import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf001 from '../../google/protobuf/any.pb';
import * as googleRpc003 from '../../google/rpc/status.pb';
export declare class Operation implements GrpcMessage {
    static toBinary(instance: Operation): any;
    static fromBinary(bytes: ByteSource): Operation;
    static refineValues(instance: Operation): void;
    static fromBinaryReader(instance: Operation, reader: BinaryReader): void;
    static toBinaryWriter(instance: Operation, writer: BinaryWriter): void;
    private _name?;
    private _metadata?;
    private _done?;
    private _error?;
    private _response?;
    private _result;
    /**
     * Creates an object and applies default Protobuf values
     * @param Operation value
     */
    constructor(value?: RecursivePartial<Operation>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get metadata(): googleProtobuf001.Any | undefined;
    set metadata(value: googleProtobuf001.Any | undefined);
    get done(): boolean | undefined;
    set done(value: boolean | undefined);
    get error(): googleRpc003.Status | undefined;
    set error(value: googleRpc003.Status | undefined);
    get response(): googleProtobuf001.Any | undefined;
    set response(value: googleProtobuf001.Any | undefined);
    get result(): Operation.ResultCase;
    toObject(): {
        name: string;
        metadata: {
            typeUrl: string;
            value: Uint8Array;
        };
        done: boolean;
        error: {
            code: number;
            message: string;
            details: {
                typeUrl: string;
                value: Uint8Array;
            }[];
        };
        response: {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    toJSON(): {
        name: string;
        metadata: {
            typeUrl: string;
            value: Uint8Array;
        };
        done: boolean;
        error: {
            code: number;
            message: string;
            details: {
                typeUrl: string;
                value: Uint8Array;
            }[];
        };
        response: {
            typeUrl: string;
            value: Uint8Array;
        };
    };
}
export declare module Operation {
    enum ResultCase {
        none = 0,
        error = 1,
        response = 2
    }
}
export declare class GetOperationRequest implements GrpcMessage {
    static toBinary(instance: GetOperationRequest): any;
    static fromBinary(bytes: ByteSource): GetOperationRequest;
    static refineValues(instance: GetOperationRequest): void;
    static fromBinaryReader(instance: GetOperationRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetOperationRequest, writer: BinaryWriter): void;
    private _name?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetOperationRequest value
     */
    constructor(value?: RecursivePartial<GetOperationRequest>);
    get name(): string | undefined;
    set name(value: string | undefined);
    toObject(): {
        name: string;
    };
    toJSON(): {
        name: string;
    };
}
export declare module GetOperationRequest { }
export declare class ListOperationsRequest implements GrpcMessage {
    static toBinary(instance: ListOperationsRequest): any;
    static fromBinary(bytes: ByteSource): ListOperationsRequest;
    static refineValues(instance: ListOperationsRequest): void;
    static fromBinaryReader(instance: ListOperationsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListOperationsRequest, writer: BinaryWriter): void;
    private _name?;
    private _filter?;
    private _pageSize?;
    private _pageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListOperationsRequest value
     */
    constructor(value?: RecursivePartial<ListOperationsRequest>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get filter(): string | undefined;
    set filter(value: string | undefined);
    get pageSize(): number | undefined;
    set pageSize(value: number | undefined);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    toObject(): {
        name: string;
        filter: string;
        pageSize: number;
        pageToken: string;
    };
    toJSON(): {
        name: string;
        filter: string;
        pageSize: number;
        pageToken: string;
    };
}
export declare module ListOperationsRequest { }
export declare class ListOperationsResponse implements GrpcMessage {
    static toBinary(instance: ListOperationsResponse): any;
    static fromBinary(bytes: ByteSource): ListOperationsResponse;
    static refineValues(instance: ListOperationsResponse): void;
    static fromBinaryReader(instance: ListOperationsResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListOperationsResponse, writer: BinaryWriter): void;
    private _operations?;
    private _nextPageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListOperationsResponse value
     */
    constructor(value?: RecursivePartial<ListOperationsResponse>);
    get operations(): Operation[] | undefined;
    set operations(value: Operation[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    toObject(): {
        operations: {
            name: string;
            metadata: {
                typeUrl: string;
                value: Uint8Array;
            };
            done: boolean;
            error: {
                code: number;
                message: string;
                details: {
                    typeUrl: string;
                    value: Uint8Array;
                }[];
            };
            response: {
                typeUrl: string;
                value: Uint8Array;
            };
        }[];
        nextPageToken: string;
    };
    toJSON(): {
        operations: {
            name: string;
            metadata: {
                typeUrl: string;
                value: Uint8Array;
            };
            done: boolean;
            error: {
                code: number;
                message: string;
                details: {
                    typeUrl: string;
                    value: Uint8Array;
                }[];
            };
            response: {
                typeUrl: string;
                value: Uint8Array;
            };
        }[];
        nextPageToken: string;
    };
}
export declare module ListOperationsResponse { }
export declare class CancelOperationRequest implements GrpcMessage {
    static toBinary(instance: CancelOperationRequest): any;
    static fromBinary(bytes: ByteSource): CancelOperationRequest;
    static refineValues(instance: CancelOperationRequest): void;
    static fromBinaryReader(instance: CancelOperationRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: CancelOperationRequest, writer: BinaryWriter): void;
    private _name?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CancelOperationRequest value
     */
    constructor(value?: RecursivePartial<CancelOperationRequest>);
    get name(): string | undefined;
    set name(value: string | undefined);
    toObject(): {
        name: string;
    };
    toJSON(): {
        name: string;
    };
}
export declare module CancelOperationRequest { }
export declare class DeleteOperationRequest implements GrpcMessage {
    static toBinary(instance: DeleteOperationRequest): any;
    static fromBinary(bytes: ByteSource): DeleteOperationRequest;
    static refineValues(instance: DeleteOperationRequest): void;
    static fromBinaryReader(instance: DeleteOperationRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: DeleteOperationRequest, writer: BinaryWriter): void;
    private _name?;
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteOperationRequest value
     */
    constructor(value?: RecursivePartial<DeleteOperationRequest>);
    get name(): string | undefined;
    set name(value: string | undefined);
    toObject(): {
        name: string;
    };
    toJSON(): {
        name: string;
    };
}
export declare module DeleteOperationRequest { }
