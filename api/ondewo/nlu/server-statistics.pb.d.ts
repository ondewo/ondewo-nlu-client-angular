import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare class GetUserProjectCountRequest implements GrpcMessage {
    static toBinary(instance: GetUserProjectCountRequest): any;
    static fromBinary(bytes: ByteSource): GetUserProjectCountRequest;
    static refineValues(instance: GetUserProjectCountRequest): void;
    static fromBinaryReader(instance: GetUserProjectCountRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetUserProjectCountRequest, writer: BinaryWriter): void;
    private _userId?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetUserProjectCountRequest value
     */
    constructor(value?: RecursivePartial<GetUserProjectCountRequest>);
    get userId(): string | undefined;
    set userId(value: string | undefined);
    toObject(): {
        userId: string;
    };
    toJSON(): {
        userId: string;
    };
}
export declare module GetUserProjectCountRequest { }
