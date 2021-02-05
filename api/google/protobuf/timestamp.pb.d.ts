import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare class Timestamp implements GrpcMessage {
    static toBinary(instance: Timestamp): any;
    static fromBinary(bytes: ByteSource): Timestamp;
    static fromDate(date: Date): Timestamp;
    static fromISOString(isoDate: string): Timestamp;
    static refineValues(instance: Timestamp): void;
    static fromBinaryReader(instance: Timestamp, reader: BinaryReader): void;
    static toBinaryWriter(instance: Timestamp, writer: BinaryWriter): void;
    private _seconds?;
    private _nanos?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Timestamp value
     */
    constructor(value?: RecursivePartial<Timestamp>);
    get seconds(): string | undefined;
    set seconds(value: string | undefined);
    get nanos(): number | undefined;
    set nanos(value: number | undefined);
    toObject(): {
        seconds: string;
        nanos: number;
    };
    toJSON(): {
        seconds: string;
        nanos: number;
    };
    fromDate(date: Date): void;
    toDate(): Date;
    fromISOString(isoDate: string): void;
    toISOString(): string;
}
export declare module Timestamp { }
