import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as ondewoNlu001 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu003 from '../../ondewo/nlu/entity-type.pb';
export declare class GetIntentCountRequest implements GrpcMessage {
    static toBinary(instance: GetIntentCountRequest): any;
    static fromBinary(bytes: ByteSource): GetIntentCountRequest;
    static refineValues(instance: GetIntentCountRequest): void;
    static fromBinaryReader(instance: GetIntentCountRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetIntentCountRequest, writer: BinaryWriter): void;
    private _parent?;
    private _filterByCategory?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetIntentCountRequest value
     */
    constructor(value?: RecursivePartial<GetIntentCountRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get filterByCategory(): ondewoNlu001.IntentCategory | undefined;
    set filterByCategory(value: ondewoNlu001.IntentCategory | undefined);
    toObject(): {
        parent: string;
        filterByCategory: ondewoNlu001.IntentCategory;
    };
    toJSON(): {
        parent: string;
        filterByCategory: ondewoNlu001.IntentCategory;
    };
}
export declare module GetIntentCountRequest { }
export declare class GetEntityTypeCountRequest implements GrpcMessage {
    static toBinary(instance: GetEntityTypeCountRequest): any;
    static fromBinary(bytes: ByteSource): GetEntityTypeCountRequest;
    static refineValues(instance: GetEntityTypeCountRequest): void;
    static fromBinaryReader(instance: GetEntityTypeCountRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetEntityTypeCountRequest, writer: BinaryWriter): void;
    private _parent?;
    private _filterByCategory?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetEntityTypeCountRequest value
     */
    constructor(value?: RecursivePartial<GetEntityTypeCountRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get filterByCategory(): ondewoNlu003.EntityTypeCategory | undefined;
    set filterByCategory(value: ondewoNlu003.EntityTypeCategory | undefined);
    toObject(): {
        parent: string;
        filterByCategory: ondewoNlu003.EntityTypeCategory;
    };
    toJSON(): {
        parent: string;
        filterByCategory: ondewoNlu003.EntityTypeCategory;
    };
}
export declare module GetEntityTypeCountRequest { }
export declare class GetProjectStatRequest implements GrpcMessage {
    static toBinary(instance: GetProjectStatRequest): any;
    static fromBinary(bytes: ByteSource): GetProjectStatRequest;
    static refineValues(instance: GetProjectStatRequest): void;
    static fromBinaryReader(instance: GetProjectStatRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetProjectStatRequest, writer: BinaryWriter): void;
    private _parent?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetProjectStatRequest value
     */
    constructor(value?: RecursivePartial<GetProjectStatRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    toObject(): {
        parent: string;
    };
    toJSON(): {
        parent: string;
    };
}
export declare module GetProjectStatRequest { }
export declare class GetProjectElementStatRequest implements GrpcMessage {
    static toBinary(instance: GetProjectElementStatRequest): any;
    static fromBinary(bytes: ByteSource): GetProjectElementStatRequest;
    static refineValues(instance: GetProjectElementStatRequest): void;
    static fromBinaryReader(instance: GetProjectElementStatRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetProjectElementStatRequest, writer: BinaryWriter): void;
    private _name?;
    private _languageCode?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetProjectElementStatRequest value
     */
    constructor(value?: RecursivePartial<GetProjectElementStatRequest>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    toObject(): {
        name: string;
        languageCode: string;
    };
    toJSON(): {
        name: string;
        languageCode: string;
    };
}
export declare module GetProjectElementStatRequest { }
