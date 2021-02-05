import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare enum NullValue {
    nullValue = 0
}
export declare class Struct implements GrpcMessage {
    static toBinary(instance: Struct): any;
    static fromBinary(bytes: ByteSource): Struct;
    static refineValues(instance: Struct): void;
    static fromBinaryReader(instance: Struct, reader: BinaryReader): void;
    static toBinaryWriter(instance: Struct, writer: BinaryWriter): void;
    private _fields?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Struct value
     */
    constructor(value?: RecursivePartial<Struct>);
    get fields(): {
        [prop: string]: Value;
    } | undefined;
    set fields(value: {
        [prop: string]: Value;
    } | undefined);
    toObject(): {
        fields: {
            [x: string]: Value;
        };
    };
    toJSON(): {
        fields: {
            [x: string]: Value;
        };
    };
}
export declare module Struct {
    class FieldsEntry implements GrpcMessage {
        static toBinary(instance: FieldsEntry): any;
        static fromBinary(bytes: ByteSource): FieldsEntry;
        static refineValues(instance: FieldsEntry): void;
        static fromBinaryReader(instance: FieldsEntry, reader: BinaryReader): void;
        static toBinaryWriter(instance: FieldsEntry, writer: BinaryWriter): void;
        private _key?;
        private _value?;
        /**
         * Creates an object and applies default Protobuf values
         * @param FieldsEntry value
         */
        constructor(value?: RecursivePartial<FieldsEntry>);
        get key(): string | undefined;
        set key(value: string | undefined);
        get value(): Value | undefined;
        set value(value: Value | undefined);
        toObject(): {
            key: string;
            value: any;
        };
        toJSON(): {
            key: string;
            value: any;
        };
    }
    module FieldsEntry { }
}
export declare class Value implements GrpcMessage {
    static toBinary(instance: Value): any;
    static fromBinary(bytes: ByteSource): Value;
    static refineValues(instance: Value): void;
    static fromBinaryReader(instance: Value, reader: BinaryReader): void;
    static toBinaryWriter(instance: Value, writer: BinaryWriter): void;
    private _nullValue?;
    private _numberValue?;
    private _stringValue?;
    private _boolValue?;
    private _structValue?;
    private _listValue?;
    private _kind;
    /**
     * Creates an object and applies default Protobuf values
     * @param Value value
     */
    constructor(value?: RecursivePartial<Value>);
    get nullValue(): NullValue | undefined;
    set nullValue(value: NullValue | undefined);
    get numberValue(): number | undefined;
    set numberValue(value: number | undefined);
    get stringValue(): string | undefined;
    set stringValue(value: string | undefined);
    get boolValue(): boolean | undefined;
    set boolValue(value: boolean | undefined);
    get structValue(): Struct | undefined;
    set structValue(value: Struct | undefined);
    get listValue(): ListValue | undefined;
    set listValue(value: ListValue | undefined);
    get kind(): Value.KindCase;
    toObject(): any;
    toJSON(): any;
}
export declare module Value {
    enum KindCase {
        none = 0,
        nullValue = 1,
        numberValue = 2,
        stringValue = 3,
        boolValue = 4,
        structValue = 5,
        listValue = 6
    }
}
export declare class ListValue implements GrpcMessage {
    static toBinary(instance: ListValue): any;
    static fromBinary(bytes: ByteSource): ListValue;
    static refineValues(instance: ListValue): void;
    static fromBinaryReader(instance: ListValue, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListValue, writer: BinaryWriter): void;
    private _values?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListValue value
     */
    constructor(value?: RecursivePartial<ListValue>);
    get values(): Value[] | undefined;
    set values(value: Value[] | undefined);
    toObject(): any;
    toJSON(): any;
}
export declare module ListValue { }
