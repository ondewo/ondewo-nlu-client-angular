import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare class Any implements GrpcMessage {
    static toBinary(instance: Any): any;
    static fromBinary(bytes: ByteSource): Any;
    static refineValues(instance: Any): void;
    static fromBinaryReader(instance: Any, reader: BinaryReader): void;
    static toBinaryWriter(instance: Any, writer: BinaryWriter): void;
    private _typeUrl?;
    private _value?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Any value
     */
    constructor(value?: RecursivePartial<Any>);
    get typeUrl(): string | undefined;
    set typeUrl(value: string | undefined);
    get value(): Uint8Array | undefined;
    set value(value: Uint8Array | undefined);
    toObject(): {
        typeUrl: string;
        value: Uint8Array;
    };
    toJSON(): {
        typeUrl: string;
        value: Uint8Array;
    };
}
export declare module Any { }
