import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare class FieldMask implements GrpcMessage {
    static toBinary(instance: FieldMask): any;
    static fromBinary(bytes: ByteSource): FieldMask;
    static refineValues(instance: FieldMask): void;
    static fromBinaryReader(instance: FieldMask, reader: BinaryReader): void;
    static toBinaryWriter(instance: FieldMask, writer: BinaryWriter): void;
    private _paths?;
    /**
     * Creates an object and applies default Protobuf values
     * @param FieldMask value
     */
    constructor(value?: RecursivePartial<FieldMask>);
    get paths(): string[] | undefined;
    set paths(value: string[] | undefined);
    toObject(): {
        paths: string[];
    };
    toJSON(): {
        paths: string[];
    };
}
export declare module FieldMask { }
