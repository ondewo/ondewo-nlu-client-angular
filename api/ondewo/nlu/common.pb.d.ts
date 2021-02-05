import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare enum SortingMode {
    ascending = 0,
    descending = 1
}
export declare class StatResponse implements GrpcMessage {
    static toBinary(instance: StatResponse): any;
    static fromBinary(bytes: ByteSource): StatResponse;
    static refineValues(instance: StatResponse): void;
    static fromBinaryReader(instance: StatResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: StatResponse, writer: BinaryWriter): void;
    private _value?;
    /**
     * Creates an object and applies default Protobuf values
     * @param StatResponse value
     */
    constructor(value?: RecursivePartial<StatResponse>);
    get value(): number | undefined;
    set value(value: number | undefined);
    toObject(): {
        value: number;
    };
    toJSON(): {
        value: number;
    };
}
export declare module StatResponse { }
