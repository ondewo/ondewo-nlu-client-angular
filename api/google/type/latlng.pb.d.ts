import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare class LatLng implements GrpcMessage {
    static toBinary(instance: LatLng): any;
    static fromBinary(bytes: ByteSource): LatLng;
    static refineValues(instance: LatLng): void;
    static fromBinaryReader(instance: LatLng, reader: BinaryReader): void;
    static toBinaryWriter(instance: LatLng, writer: BinaryWriter): void;
    private _latitude?;
    private _longitude?;
    /**
     * Creates an object and applies default Protobuf values
     * @param LatLng value
     */
    constructor(value?: RecursivePartial<LatLng>);
    get latitude(): number | undefined;
    set latitude(value: number | undefined);
    get longitude(): number | undefined;
    set longitude(value: number | undefined);
    toObject(): {
        latitude: number;
        longitude: number;
    };
    toJSON(): {
        latitude: number;
        longitude: number;
    };
}
export declare module LatLng { }
