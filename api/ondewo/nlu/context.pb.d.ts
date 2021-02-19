import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf002 from '../../google/protobuf/field-mask.pb';
export declare class Context implements GrpcMessage {
    static toBinary(instance: Context): any;
    static fromBinary(bytes: ByteSource): Context;
    static refineValues(instance: Context): void;
    static fromBinaryReader(instance: Context, reader: BinaryReader): void;
    static toBinaryWriter(instance: Context, writer: BinaryWriter): void;
    private _name?;
    private _lifespanCount?;
    private _parameters?;
    private _lifespanTime?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Context value
     */
    constructor(value?: RecursivePartial<Context>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get lifespanCount(): number | undefined;
    set lifespanCount(value: number | undefined);
    get parameters(): {
        [prop: string]: Context.Parameter;
    } | undefined;
    set parameters(value: {
        [prop: string]: Context.Parameter;
    } | undefined);
    get lifespanTime(): number | undefined;
    set lifespanTime(value: number | undefined);
    toObject(): {
        name: string;
        lifespanCount: number;
        parameters: {
            [x: string]: Context.Parameter;
        };
        lifespanTime: number;
    };
    toJSON(): {
        name: string;
        lifespanCount: number;
        parameters: {
            [x: string]: Context.Parameter;
        };
        lifespanTime: number;
    };
}
export declare module Context {
    class Parameter implements GrpcMessage {
        static toBinary(instance: Parameter): any;
        static fromBinary(bytes: ByteSource): Parameter;
        static refineValues(instance: Parameter): void;
        static fromBinaryReader(instance: Parameter, reader: BinaryReader): void;
        static toBinaryWriter(instance: Parameter, writer: BinaryWriter): void;
        private _name?;
        private _displayName?;
        private _value?;
        private _valueOriginal?;
        /**
         * Creates an object and applies default Protobuf values
         * @param Parameter value
         */
        constructor(value?: RecursivePartial<Parameter>);
        get name(): string | undefined;
        set name(value: string | undefined);
        get displayName(): string | undefined;
        set displayName(value: string | undefined);
        get value(): string | undefined;
        set value(value: string | undefined);
        get valueOriginal(): string | undefined;
        set valueOriginal(value: string | undefined);
        toObject(): {
            name: string;
            displayName: string;
            value: string;
            valueOriginal: string;
        };
        toJSON(): {
            name: string;
            displayName: string;
            value: string;
            valueOriginal: string;
        };
    }
    module Parameter { }
    class ParametersEntry implements GrpcMessage {
        static toBinary(instance: ParametersEntry): any;
        static fromBinary(bytes: ByteSource): ParametersEntry;
        static refineValues(instance: ParametersEntry): void;
        static fromBinaryReader(instance: ParametersEntry, reader: BinaryReader): void;
        static toBinaryWriter(instance: ParametersEntry, writer: BinaryWriter): void;
        private _key?;
        private _value?;
        /**
         * Creates an object and applies default Protobuf values
         * @param ParametersEntry value
         */
        constructor(value?: RecursivePartial<ParametersEntry>);
        get key(): string | undefined;
        set key(value: string | undefined);
        get value(): Context.Parameter | undefined;
        set value(value: Context.Parameter | undefined);
        toObject(): {
            key: string;
            value: {
                name: string;
                displayName: string;
                value: string;
                valueOriginal: string;
            };
        };
        toJSON(): {
            key: string;
            value: {
                name: string;
                displayName: string;
                value: string;
                valueOriginal: string;
            };
        };
    }
    module ParametersEntry { }
}
export declare class ListContextsRequest implements GrpcMessage {
    static toBinary(instance: ListContextsRequest): any;
    static fromBinary(bytes: ByteSource): ListContextsRequest;
    static refineValues(instance: ListContextsRequest): void;
    static fromBinaryReader(instance: ListContextsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListContextsRequest, writer: BinaryWriter): void;
    private _parent?;
    private _pageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListContextsRequest value
     */
    constructor(value?: RecursivePartial<ListContextsRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    toObject(): {
        parent: string;
        pageToken: string;
    };
    toJSON(): {
        parent: string;
        pageToken: string;
    };
}
export declare module ListContextsRequest { }
export declare class ListContextsResponse implements GrpcMessage {
    static toBinary(instance: ListContextsResponse): any;
    static fromBinary(bytes: ByteSource): ListContextsResponse;
    static refineValues(instance: ListContextsResponse): void;
    static fromBinaryReader(instance: ListContextsResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListContextsResponse, writer: BinaryWriter): void;
    private _contexts?;
    private _nextPageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListContextsResponse value
     */
    constructor(value?: RecursivePartial<ListContextsResponse>);
    get contexts(): Context[] | undefined;
    set contexts(value: Context[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    toObject(): {
        contexts: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: Context.Parameter;
            };
            lifespanTime: number;
        }[];
        nextPageToken: string;
    };
    toJSON(): {
        contexts: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: Context.Parameter;
            };
            lifespanTime: number;
        }[];
        nextPageToken: string;
    };
}
export declare module ListContextsResponse { }
export declare class GetContextRequest implements GrpcMessage {
    static toBinary(instance: GetContextRequest): any;
    static fromBinary(bytes: ByteSource): GetContextRequest;
    static refineValues(instance: GetContextRequest): void;
    static fromBinaryReader(instance: GetContextRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetContextRequest, writer: BinaryWriter): void;
    private _name?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetContextRequest value
     */
    constructor(value?: RecursivePartial<GetContextRequest>);
    get name(): string | undefined;
    set name(value: string | undefined);
    toObject(): {
        name: string;
    };
    toJSON(): {
        name: string;
    };
}
export declare module GetContextRequest { }
export declare class CreateContextRequest implements GrpcMessage {
    static toBinary(instance: CreateContextRequest): any;
    static fromBinary(bytes: ByteSource): CreateContextRequest;
    static refineValues(instance: CreateContextRequest): void;
    static fromBinaryReader(instance: CreateContextRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: CreateContextRequest, writer: BinaryWriter): void;
    private _parent?;
    private _context?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateContextRequest value
     */
    constructor(value?: RecursivePartial<CreateContextRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get context(): Context | undefined;
    set context(value: Context | undefined);
    toObject(): {
        parent: string;
        context: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: Context.Parameter;
            };
            lifespanTime: number;
        };
    };
    toJSON(): {
        parent: string;
        context: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: Context.Parameter;
            };
            lifespanTime: number;
        };
    };
}
export declare module CreateContextRequest { }
export declare class UpdateContextRequest implements GrpcMessage {
    static toBinary(instance: UpdateContextRequest): any;
    static fromBinary(bytes: ByteSource): UpdateContextRequest;
    static refineValues(instance: UpdateContextRequest): void;
    static fromBinaryReader(instance: UpdateContextRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: UpdateContextRequest, writer: BinaryWriter): void;
    private _context?;
    private _updateMask?;
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateContextRequest value
     */
    constructor(value?: RecursivePartial<UpdateContextRequest>);
    get context(): Context | undefined;
    set context(value: Context | undefined);
    get updateMask(): googleProtobuf002.FieldMask | undefined;
    set updateMask(value: googleProtobuf002.FieldMask | undefined);
    toObject(): {
        context: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: Context.Parameter;
            };
            lifespanTime: number;
        };
        updateMask: {
            paths: string[];
        };
    };
    toJSON(): {
        context: {
            name: string;
            lifespanCount: number;
            parameters: {
                [x: string]: Context.Parameter;
            };
            lifespanTime: number;
        };
        updateMask: {
            paths: string[];
        };
    };
}
export declare module UpdateContextRequest { }
export declare class DeleteContextRequest implements GrpcMessage {
    static toBinary(instance: DeleteContextRequest): any;
    static fromBinary(bytes: ByteSource): DeleteContextRequest;
    static refineValues(instance: DeleteContextRequest): void;
    static fromBinaryReader(instance: DeleteContextRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: DeleteContextRequest, writer: BinaryWriter): void;
    private _name?;
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteContextRequest value
     */
    constructor(value?: RecursivePartial<DeleteContextRequest>);
    get name(): string | undefined;
    set name(value: string | undefined);
    toObject(): {
        name: string;
    };
    toJSON(): {
        name: string;
    };
}
export declare module DeleteContextRequest { }
export declare class DeleteAllContextsRequest implements GrpcMessage {
    static toBinary(instance: DeleteAllContextsRequest): any;
    static fromBinary(bytes: ByteSource): DeleteAllContextsRequest;
    static refineValues(instance: DeleteAllContextsRequest): void;
    static fromBinaryReader(instance: DeleteAllContextsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: DeleteAllContextsRequest, writer: BinaryWriter): void;
    private _parent?;
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteAllContextsRequest value
     */
    constructor(value?: RecursivePartial<DeleteAllContextsRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    toObject(): {
        parent: string;
    };
    toJSON(): {
        parent: string;
    };
}
export declare module DeleteAllContextsRequest { }
