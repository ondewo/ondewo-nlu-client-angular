import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '../../google/protobuf/any.pb';
export declare class Status implements GrpcMessage {
    static toBinary(instance: Status): any;
    static fromBinary(bytes: ByteSource): Status;
    static refineValues(instance: Status): void;
    static fromBinaryReader(instance: Status, reader: BinaryReader): void;
    static toBinaryWriter(instance: Status, writer: BinaryWriter): void;
    private _code?;
    private _message?;
    private _details?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Status value
     */
    constructor(value?: RecursivePartial<Status>);
    get code(): number | undefined;
    set code(value: number | undefined);
    get message(): string | undefined;
    set message(value: string | undefined);
    get details(): googleProtobuf000.Any[] | undefined;
    set details(value: googleProtobuf000.Any[] | undefined);
    toObject(): {
        code: number;
        message: string;
        details: {
            typeUrl: string;
            value: Uint8Array;
        }[];
    };
    toJSON(): {
        code: number;
        message: string;
        details: {
            typeUrl: string;
            value: Uint8Array;
        }[];
    };
}
export declare module Status { }
