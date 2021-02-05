import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare class Http implements GrpcMessage {
    static toBinary(instance: Http): any;
    static fromBinary(bytes: ByteSource): Http;
    static refineValues(instance: Http): void;
    static fromBinaryReader(instance: Http, reader: BinaryReader): void;
    static toBinaryWriter(instance: Http, writer: BinaryWriter): void;
    private _rules?;
    private _fullyDecodeReservedExpansion?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Http value
     */
    constructor(value?: RecursivePartial<Http>);
    get rules(): HttpRule[] | undefined;
    set rules(value: HttpRule[] | undefined);
    get fullyDecodeReservedExpansion(): boolean | undefined;
    set fullyDecodeReservedExpansion(value: boolean | undefined);
    toObject(): {
        rules: any[];
        fullyDecodeReservedExpansion: boolean;
    };
    toJSON(): {
        rules: any[];
        fullyDecodeReservedExpansion: boolean;
    };
}
export declare module Http { }
export declare class HttpRule implements GrpcMessage {
    static toBinary(instance: HttpRule): any;
    static fromBinary(bytes: ByteSource): HttpRule;
    static refineValues(instance: HttpRule): void;
    static fromBinaryReader(instance: HttpRule, reader: BinaryReader): void;
    static toBinaryWriter(instance: HttpRule, writer: BinaryWriter): void;
    private _selector?;
    private _get?;
    private _put?;
    private _post?;
    private _delete?;
    private _patch?;
    private _custom?;
    private _body?;
    private _responseBody?;
    private _additionalBindings?;
    private _pattern;
    /**
     * Creates an object and applies default Protobuf values
     * @param HttpRule value
     */
    constructor(value?: RecursivePartial<HttpRule>);
    get selector(): string | undefined;
    set selector(value: string | undefined);
    get get(): string | undefined;
    set get(value: string | undefined);
    get put(): string | undefined;
    set put(value: string | undefined);
    get post(): string | undefined;
    set post(value: string | undefined);
    get delete(): string | undefined;
    set delete(value: string | undefined);
    get patch(): string | undefined;
    set patch(value: string | undefined);
    get custom(): CustomHttpPattern | undefined;
    set custom(value: CustomHttpPattern | undefined);
    get body(): string | undefined;
    set body(value: string | undefined);
    get responseBody(): string | undefined;
    set responseBody(value: string | undefined);
    get additionalBindings(): HttpRule[] | undefined;
    set additionalBindings(value: HttpRule[] | undefined);
    get pattern(): HttpRule.PatternCase;
    toObject(): any;
    toJSON(): any;
}
export declare module HttpRule {
    enum PatternCase {
        none = 0,
        get = 1,
        put = 2,
        post = 3,
        delete = 4,
        patch = 5,
        custom = 6
    }
}
export declare class CustomHttpPattern implements GrpcMessage {
    static toBinary(instance: CustomHttpPattern): any;
    static fromBinary(bytes: ByteSource): CustomHttpPattern;
    static refineValues(instance: CustomHttpPattern): void;
    static fromBinaryReader(instance: CustomHttpPattern, reader: BinaryReader): void;
    static toBinaryWriter(instance: CustomHttpPattern, writer: BinaryWriter): void;
    private _kind?;
    private _path?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CustomHttpPattern value
     */
    constructor(value?: RecursivePartial<CustomHttpPattern>);
    get kind(): string | undefined;
    set kind(value: string | undefined);
    get path(): string | undefined;
    set path(value: string | undefined);
    toObject(): {
        kind: string;
        path: string;
    };
    toJSON(): {
        kind: string;
        path: string;
    };
}
export declare module CustomHttpPattern { }
