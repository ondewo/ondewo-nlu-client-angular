import { BinaryReader, BinaryWriter } from 'google-protobuf';
export class FileDescriptorSet {
    /**
     * Creates an object and applies default Protobuf values
     * @param FileDescriptorSet value
     */
    constructor(value) {
        value = value || {};
        this.file = (value.file || []).map(m => new FileDescriptorProto(m));
        FileDescriptorSet.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        FileDescriptorSet.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new FileDescriptorSet();
        FileDescriptorSet.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.file = instance.file || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new FileDescriptorProto();
                    reader.readMessage(messageInitializer1, FileDescriptorProto.fromBinaryReader);
                    (instance.file = instance.file || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        FileDescriptorSet.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.file && instance.file.length) {
            writer.writeRepeatedMessage(1, instance.file, FileDescriptorProto.toBinaryWriter);
        }
    }
    get file() {
        return this._file;
    }
    set file(value) {
        this._file = value;
    }
    toObject() {
        return {
            file: (this.file || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class FileDescriptorProto {
    /**
     * Creates an object and applies default Protobuf values
     * @param FileDescriptorProto value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.package = value.package;
        this.dependency = (value.dependency || []).slice();
        this.publicDependency = (value.publicDependency || []).slice();
        this.weakDependency = (value.weakDependency || []).slice();
        this.messageType = (value.messageType || []).map(m => new DescriptorProto(m));
        this.enumType = (value.enumType || []).map(m => new EnumDescriptorProto(m));
        this.service = (value.service || []).map(m => new ServiceDescriptorProto(m));
        this.extension = (value.extension || []).map(m => new FieldDescriptorProto(m));
        this.options = value.options ? new FileOptions(value.options) : undefined;
        this.sourceCodeInfo = value.sourceCodeInfo
            ? new SourceCodeInfo(value.sourceCodeInfo)
            : undefined;
        this.syntax = value.syntax;
        FileDescriptorProto.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        FileDescriptorProto.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new FileDescriptorProto();
        FileDescriptorProto.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.package = instance.package || '';
        instance.dependency = instance.dependency || [];
        instance.publicDependency = instance.publicDependency || [];
        instance.weakDependency = instance.weakDependency || [];
        instance.messageType = instance.messageType || [];
        instance.enumType = instance.enumType || [];
        instance.service = instance.service || [];
        instance.extension = instance.extension || [];
        instance.options = instance.options || undefined;
        instance.sourceCodeInfo = instance.sourceCodeInfo || undefined;
        instance.syntax = instance.syntax || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.package = reader.readString();
                    break;
                case 3:
                    (instance.dependency = instance.dependency || []).push(reader.readString());
                    break;
                case 10:
                    (instance.publicDependency = instance.publicDependency || []).push(reader.readInt32());
                    break;
                case 11:
                    (instance.weakDependency = instance.weakDependency || []).push(reader.readInt32());
                    break;
                case 4:
                    const messageInitializer4 = new DescriptorProto();
                    reader.readMessage(messageInitializer4, DescriptorProto.fromBinaryReader);
                    (instance.messageType = instance.messageType || []).push(messageInitializer4);
                    break;
                case 5:
                    const messageInitializer5 = new EnumDescriptorProto();
                    reader.readMessage(messageInitializer5, EnumDescriptorProto.fromBinaryReader);
                    (instance.enumType = instance.enumType || []).push(messageInitializer5);
                    break;
                case 6:
                    const messageInitializer6 = new ServiceDescriptorProto();
                    reader.readMessage(messageInitializer6, ServiceDescriptorProto.fromBinaryReader);
                    (instance.service = instance.service || []).push(messageInitializer6);
                    break;
                case 7:
                    const messageInitializer7 = new FieldDescriptorProto();
                    reader.readMessage(messageInitializer7, FieldDescriptorProto.fromBinaryReader);
                    (instance.extension = instance.extension || []).push(messageInitializer7);
                    break;
                case 8:
                    instance.options = new FileOptions();
                    reader.readMessage(instance.options, FileOptions.fromBinaryReader);
                    break;
                case 9:
                    instance.sourceCodeInfo = new SourceCodeInfo();
                    reader.readMessage(instance.sourceCodeInfo, SourceCodeInfo.fromBinaryReader);
                    break;
                case 12:
                    instance.syntax = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        FileDescriptorProto.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.package) {
            writer.writeString(2, instance.package);
        }
        if (instance.dependency && instance.dependency.length) {
            writer.writeRepeatedString(3, instance.dependency);
        }
        if (instance.publicDependency && instance.publicDependency.length) {
            writer.writeRepeatedInt32(10, instance.publicDependency);
        }
        if (instance.weakDependency && instance.weakDependency.length) {
            writer.writeRepeatedInt32(11, instance.weakDependency);
        }
        if (instance.messageType && instance.messageType.length) {
            writer.writeRepeatedMessage(4, instance.messageType, DescriptorProto.toBinaryWriter);
        }
        if (instance.enumType && instance.enumType.length) {
            writer.writeRepeatedMessage(5, instance.enumType, EnumDescriptorProto.toBinaryWriter);
        }
        if (instance.service && instance.service.length) {
            writer.writeRepeatedMessage(6, instance.service, ServiceDescriptorProto.toBinaryWriter);
        }
        if (instance.extension && instance.extension.length) {
            writer.writeRepeatedMessage(7, instance.extension, FieldDescriptorProto.toBinaryWriter);
        }
        if (instance.options) {
            writer.writeMessage(8, instance.options, FileOptions.toBinaryWriter);
        }
        if (instance.sourceCodeInfo) {
            writer.writeMessage(9, instance.sourceCodeInfo, SourceCodeInfo.toBinaryWriter);
        }
        if (instance.syntax) {
            writer.writeString(12, instance.syntax);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get package() {
        return this._package;
    }
    set package(value) {
        this._package = value;
    }
    get dependency() {
        return this._dependency;
    }
    set dependency(value) {
        this._dependency = value;
    }
    get publicDependency() {
        return this._publicDependency;
    }
    set publicDependency(value) {
        this._publicDependency = value;
    }
    get weakDependency() {
        return this._weakDependency;
    }
    set weakDependency(value) {
        this._weakDependency = value;
    }
    get messageType() {
        return this._messageType;
    }
    set messageType(value) {
        this._messageType = value;
    }
    get enumType() {
        return this._enumType;
    }
    set enumType(value) {
        this._enumType = value;
    }
    get service() {
        return this._service;
    }
    set service(value) {
        this._service = value;
    }
    get extension() {
        return this._extension;
    }
    set extension(value) {
        this._extension = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    get sourceCodeInfo() {
        return this._sourceCodeInfo;
    }
    set sourceCodeInfo(value) {
        this._sourceCodeInfo = value;
    }
    get syntax() {
        return this._syntax;
    }
    set syntax(value) {
        this._syntax = value;
    }
    toObject() {
        return {
            name: this.name,
            package: this.package,
            dependency: (this.dependency || []).slice(),
            publicDependency: (this.publicDependency || []).slice(),
            weakDependency: (this.weakDependency || []).slice(),
            messageType: (this.messageType || []).map(m => m.toObject()),
            enumType: (this.enumType || []).map(m => m.toObject()),
            service: (this.service || []).map(m => m.toObject()),
            extension: (this.extension || []).map(m => m.toObject()),
            options: this.options ? this.options.toObject() : undefined,
            sourceCodeInfo: this.sourceCodeInfo
                ? this.sourceCodeInfo.toObject()
                : undefined,
            syntax: this.syntax
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class DescriptorProto {
    /**
     * Creates an object and applies default Protobuf values
     * @param DescriptorProto value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.field = (value.field || []).map(m => new FieldDescriptorProto(m));
        this.extension = (value.extension || []).map(m => new FieldDescriptorProto(m));
        this.nestedType = (value.nestedType || []).map(m => new DescriptorProto(m));
        this.enumType = (value.enumType || []).map(m => new EnumDescriptorProto(m));
        this.extensionRange = (value.extensionRange || []).map(m => new DescriptorProto.ExtensionRange(m));
        this.oneofDecl = (value.oneofDecl || []).map(m => new OneofDescriptorProto(m));
        this.options = value.options
            ? new MessageOptions(value.options)
            : undefined;
        this.reservedRange = (value.reservedRange || []).map(m => new DescriptorProto.ReservedRange(m));
        this.reservedName = (value.reservedName || []).slice();
        DescriptorProto.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DescriptorProto.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DescriptorProto();
        DescriptorProto.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.field = instance.field || [];
        instance.extension = instance.extension || [];
        instance.nestedType = instance.nestedType || [];
        instance.enumType = instance.enumType || [];
        instance.extensionRange = instance.extensionRange || [];
        instance.oneofDecl = instance.oneofDecl || [];
        instance.options = instance.options || undefined;
        instance.reservedRange = instance.reservedRange || [];
        instance.reservedName = instance.reservedName || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new FieldDescriptorProto();
                    reader.readMessage(messageInitializer2, FieldDescriptorProto.fromBinaryReader);
                    (instance.field = instance.field || []).push(messageInitializer2);
                    break;
                case 6:
                    const messageInitializer6 = new FieldDescriptorProto();
                    reader.readMessage(messageInitializer6, FieldDescriptorProto.fromBinaryReader);
                    (instance.extension = instance.extension || []).push(messageInitializer6);
                    break;
                case 3:
                    const messageInitializer3 = new DescriptorProto();
                    reader.readMessage(messageInitializer3, DescriptorProto.fromBinaryReader);
                    (instance.nestedType = instance.nestedType || []).push(messageInitializer3);
                    break;
                case 4:
                    const messageInitializer4 = new EnumDescriptorProto();
                    reader.readMessage(messageInitializer4, EnumDescriptorProto.fromBinaryReader);
                    (instance.enumType = instance.enumType || []).push(messageInitializer4);
                    break;
                case 5:
                    const messageInitializer5 = new DescriptorProto.ExtensionRange();
                    reader.readMessage(messageInitializer5, DescriptorProto.ExtensionRange.fromBinaryReader);
                    (instance.extensionRange = instance.extensionRange || []).push(messageInitializer5);
                    break;
                case 8:
                    const messageInitializer8 = new OneofDescriptorProto();
                    reader.readMessage(messageInitializer8, OneofDescriptorProto.fromBinaryReader);
                    (instance.oneofDecl = instance.oneofDecl || []).push(messageInitializer8);
                    break;
                case 7:
                    instance.options = new MessageOptions();
                    reader.readMessage(instance.options, MessageOptions.fromBinaryReader);
                    break;
                case 9:
                    const messageInitializer9 = new DescriptorProto.ReservedRange();
                    reader.readMessage(messageInitializer9, DescriptorProto.ReservedRange.fromBinaryReader);
                    (instance.reservedRange = instance.reservedRange || []).push(messageInitializer9);
                    break;
                case 10:
                    (instance.reservedName = instance.reservedName || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        DescriptorProto.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.field && instance.field.length) {
            writer.writeRepeatedMessage(2, instance.field, FieldDescriptorProto.toBinaryWriter);
        }
        if (instance.extension && instance.extension.length) {
            writer.writeRepeatedMessage(6, instance.extension, FieldDescriptorProto.toBinaryWriter);
        }
        if (instance.nestedType && instance.nestedType.length) {
            writer.writeRepeatedMessage(3, instance.nestedType, DescriptorProto.toBinaryWriter);
        }
        if (instance.enumType && instance.enumType.length) {
            writer.writeRepeatedMessage(4, instance.enumType, EnumDescriptorProto.toBinaryWriter);
        }
        if (instance.extensionRange && instance.extensionRange.length) {
            writer.writeRepeatedMessage(5, instance.extensionRange, DescriptorProto.ExtensionRange.toBinaryWriter);
        }
        if (instance.oneofDecl && instance.oneofDecl.length) {
            writer.writeRepeatedMessage(8, instance.oneofDecl, OneofDescriptorProto.toBinaryWriter);
        }
        if (instance.options) {
            writer.writeMessage(7, instance.options, MessageOptions.toBinaryWriter);
        }
        if (instance.reservedRange && instance.reservedRange.length) {
            writer.writeRepeatedMessage(9, instance.reservedRange, DescriptorProto.ReservedRange.toBinaryWriter);
        }
        if (instance.reservedName && instance.reservedName.length) {
            writer.writeRepeatedString(10, instance.reservedName);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get field() {
        return this._field;
    }
    set field(value) {
        this._field = value;
    }
    get extension() {
        return this._extension;
    }
    set extension(value) {
        this._extension = value;
    }
    get nestedType() {
        return this._nestedType;
    }
    set nestedType(value) {
        this._nestedType = value;
    }
    get enumType() {
        return this._enumType;
    }
    set enumType(value) {
        this._enumType = value;
    }
    get extensionRange() {
        return this._extensionRange;
    }
    set extensionRange(value) {
        this._extensionRange = value;
    }
    get oneofDecl() {
        return this._oneofDecl;
    }
    set oneofDecl(value) {
        this._oneofDecl = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    get reservedRange() {
        return this._reservedRange;
    }
    set reservedRange(value) {
        this._reservedRange = value;
    }
    get reservedName() {
        return this._reservedName;
    }
    set reservedName(value) {
        this._reservedName = value;
    }
    toObject() {
        return {
            name: this.name,
            field: (this.field || []).map(m => m.toObject()),
            extension: (this.extension || []).map(m => m.toObject()),
            nestedType: (this.nestedType || []).map(m => m.toObject()),
            enumType: (this.enumType || []).map(m => m.toObject()),
            extensionRange: (this.extensionRange || []).map(m => m.toObject()),
            oneofDecl: (this.oneofDecl || []).map(m => m.toObject()),
            options: this.options ? this.options.toObject() : undefined,
            reservedRange: (this.reservedRange || []).map(m => m.toObject()),
            reservedName: (this.reservedName || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (DescriptorProto) {
    class ExtensionRange {
        /**
         * Creates an object and applies default Protobuf values
         * @param ExtensionRange value
         */
        constructor(value) {
            value = value || {};
            this.start = value.start;
            this.end = value.end;
            this.options = value.options
                ? new ExtensionRangeOptions(value.options)
                : undefined;
            ExtensionRange.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            ExtensionRange.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new ExtensionRange();
            ExtensionRange.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.start = instance.start || 0;
            instance.end = instance.end || 0;
            instance.options = instance.options || undefined;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.start = reader.readInt32();
                        break;
                    case 2:
                        instance.end = reader.readInt32();
                        break;
                    case 3:
                        instance.options = new ExtensionRangeOptions();
                        reader.readMessage(instance.options, ExtensionRangeOptions.fromBinaryReader);
                        break;
                    default:
                        reader.skipField();
                }
            }
            ExtensionRange.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.start) {
                writer.writeInt32(1, instance.start);
            }
            if (instance.end) {
                writer.writeInt32(2, instance.end);
            }
            if (instance.options) {
                writer.writeMessage(3, instance.options, ExtensionRangeOptions.toBinaryWriter);
            }
        }
        get start() {
            return this._start;
        }
        set start(value) {
            this._start = value;
        }
        get end() {
            return this._end;
        }
        set end(value) {
            this._end = value;
        }
        get options() {
            return this._options;
        }
        set options(value) {
            this._options = value;
        }
        toObject() {
            return {
                start: this.start,
                end: this.end,
                options: this.options ? this.options.toObject() : undefined
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    DescriptorProto.ExtensionRange = ExtensionRange;
    class ReservedRange {
        /**
         * Creates an object and applies default Protobuf values
         * @param ReservedRange value
         */
        constructor(value) {
            value = value || {};
            this.start = value.start;
            this.end = value.end;
            ReservedRange.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            ReservedRange.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new ReservedRange();
            ReservedRange.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.start = instance.start || 0;
            instance.end = instance.end || 0;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.start = reader.readInt32();
                        break;
                    case 2:
                        instance.end = reader.readInt32();
                        break;
                    default:
                        reader.skipField();
                }
            }
            ReservedRange.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.start) {
                writer.writeInt32(1, instance.start);
            }
            if (instance.end) {
                writer.writeInt32(2, instance.end);
            }
        }
        get start() {
            return this._start;
        }
        set start(value) {
            this._start = value;
        }
        get end() {
            return this._end;
        }
        set end(value) {
            this._end = value;
        }
        toObject() {
            return {
                start: this.start,
                end: this.end
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    DescriptorProto.ReservedRange = ReservedRange;
})(DescriptorProto || (DescriptorProto = {}));
export class ExtensionRangeOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param ExtensionRangeOptions value
     */
    constructor(value) {
        value = value || {};
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        ExtensionRangeOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ExtensionRangeOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ExtensionRangeOptions();
        ExtensionRangeOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        ExtensionRangeOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class FieldDescriptorProto {
    /**
     * Creates an object and applies default Protobuf values
     * @param FieldDescriptorProto value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.number = value.number;
        this.label = value.label;
        this.type = value.type;
        this.typeName = value.typeName;
        this.extendee = value.extendee;
        this.defaultValue = value.defaultValue;
        this.oneofIndex = value.oneofIndex;
        this.jsonName = value.jsonName;
        this.options = value.options ? new FieldOptions(value.options) : undefined;
        this.proto3Optional = value.proto3Optional;
        FieldDescriptorProto.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        FieldDescriptorProto.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new FieldDescriptorProto();
        FieldDescriptorProto.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.number = instance.number || 0;
        instance.label = instance.label || 0;
        instance.type = instance.type || 0;
        instance.typeName = instance.typeName || '';
        instance.extendee = instance.extendee || '';
        instance.defaultValue = instance.defaultValue || '';
        instance.oneofIndex = instance.oneofIndex || 0;
        instance.jsonName = instance.jsonName || '';
        instance.options = instance.options || undefined;
        instance.proto3Optional = instance.proto3Optional || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 3:
                    instance.number = reader.readInt32();
                    break;
                case 4:
                    instance.label = reader.readEnum();
                    break;
                case 5:
                    instance.type = reader.readEnum();
                    break;
                case 6:
                    instance.typeName = reader.readString();
                    break;
                case 2:
                    instance.extendee = reader.readString();
                    break;
                case 7:
                    instance.defaultValue = reader.readString();
                    break;
                case 9:
                    instance.oneofIndex = reader.readInt32();
                    break;
                case 10:
                    instance.jsonName = reader.readString();
                    break;
                case 8:
                    instance.options = new FieldOptions();
                    reader.readMessage(instance.options, FieldOptions.fromBinaryReader);
                    break;
                case 17:
                    instance.proto3Optional = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        FieldDescriptorProto.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.number) {
            writer.writeInt32(3, instance.number);
        }
        if (instance.label) {
            writer.writeEnum(4, instance.label);
        }
        if (instance.type) {
            writer.writeEnum(5, instance.type);
        }
        if (instance.typeName) {
            writer.writeString(6, instance.typeName);
        }
        if (instance.extendee) {
            writer.writeString(2, instance.extendee);
        }
        if (instance.defaultValue) {
            writer.writeString(7, instance.defaultValue);
        }
        if (instance.oneofIndex) {
            writer.writeInt32(9, instance.oneofIndex);
        }
        if (instance.jsonName) {
            writer.writeString(10, instance.jsonName);
        }
        if (instance.options) {
            writer.writeMessage(8, instance.options, FieldOptions.toBinaryWriter);
        }
        if (instance.proto3Optional) {
            writer.writeBool(17, instance.proto3Optional);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get number() {
        return this._number;
    }
    set number(value) {
        this._number = value;
    }
    get label() {
        return this._label;
    }
    set label(value) {
        this._label = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get typeName() {
        return this._typeName;
    }
    set typeName(value) {
        this._typeName = value;
    }
    get extendee() {
        return this._extendee;
    }
    set extendee(value) {
        this._extendee = value;
    }
    get defaultValue() {
        return this._defaultValue;
    }
    set defaultValue(value) {
        this._defaultValue = value;
    }
    get oneofIndex() {
        return this._oneofIndex;
    }
    set oneofIndex(value) {
        this._oneofIndex = value;
    }
    get jsonName() {
        return this._jsonName;
    }
    set jsonName(value) {
        this._jsonName = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    get proto3Optional() {
        return this._proto3Optional;
    }
    set proto3Optional(value) {
        this._proto3Optional = value;
    }
    toObject() {
        return {
            name: this.name,
            number: this.number,
            label: this.label,
            type: this.type,
            typeName: this.typeName,
            extendee: this.extendee,
            defaultValue: this.defaultValue,
            oneofIndex: this.oneofIndex,
            jsonName: this.jsonName,
            options: this.options ? this.options.toObject() : undefined,
            proto3Optional: this.proto3Optional
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (FieldDescriptorProto) {
    let Type;
    (function (Type) {
        Type[Type["typeDouble"] = 1] = "typeDouble";
        Type[Type["typeFloat"] = 2] = "typeFloat";
        Type[Type["typeInt64"] = 3] = "typeInt64";
        Type[Type["typeUint64"] = 4] = "typeUint64";
        Type[Type["typeInt32"] = 5] = "typeInt32";
        Type[Type["typeFixed64"] = 6] = "typeFixed64";
        Type[Type["typeFixed32"] = 7] = "typeFixed32";
        Type[Type["typeBool"] = 8] = "typeBool";
        Type[Type["typeString"] = 9] = "typeString";
        Type[Type["typeGroup"] = 10] = "typeGroup";
        Type[Type["typeMessage"] = 11] = "typeMessage";
        Type[Type["typeBytes"] = 12] = "typeBytes";
        Type[Type["typeUint32"] = 13] = "typeUint32";
        Type[Type["typeEnum"] = 14] = "typeEnum";
        Type[Type["typeSfixed32"] = 15] = "typeSfixed32";
        Type[Type["typeSfixed64"] = 16] = "typeSfixed64";
        Type[Type["typeSint32"] = 17] = "typeSint32";
        Type[Type["typeSint64"] = 18] = "typeSint64";
    })(Type = FieldDescriptorProto.Type || (FieldDescriptorProto.Type = {}));
    let Label;
    (function (Label) {
        Label[Label["labelOptional"] = 1] = "labelOptional";
        Label[Label["labelRequired"] = 2] = "labelRequired";
        Label[Label["labelRepeated"] = 3] = "labelRepeated";
    })(Label = FieldDescriptorProto.Label || (FieldDescriptorProto.Label = {}));
})(FieldDescriptorProto || (FieldDescriptorProto = {}));
export class OneofDescriptorProto {
    /**
     * Creates an object and applies default Protobuf values
     * @param OneofDescriptorProto value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.options = value.options ? new OneofOptions(value.options) : undefined;
        OneofDescriptorProto.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        OneofDescriptorProto.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new OneofDescriptorProto();
        OneofDescriptorProto.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.options = instance.options || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.options = new OneofOptions();
                    reader.readMessage(instance.options, OneofOptions.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        OneofDescriptorProto.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.options) {
            writer.writeMessage(2, instance.options, OneofOptions.toBinaryWriter);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    toObject() {
        return {
            name: this.name,
            options: this.options ? this.options.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class EnumDescriptorProto {
    /**
     * Creates an object and applies default Protobuf values
     * @param EnumDescriptorProto value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.value = (value.value || []).map(m => new EnumValueDescriptorProto(m));
        this.options = value.options ? new EnumOptions(value.options) : undefined;
        this.reservedRange = (value.reservedRange || []).map(m => new EnumDescriptorProto.EnumReservedRange(m));
        this.reservedName = (value.reservedName || []).slice();
        EnumDescriptorProto.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EnumDescriptorProto.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EnumDescriptorProto();
        EnumDescriptorProto.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.value = instance.value || [];
        instance.options = instance.options || undefined;
        instance.reservedRange = instance.reservedRange || [];
        instance.reservedName = instance.reservedName || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new EnumValueDescriptorProto();
                    reader.readMessage(messageInitializer2, EnumValueDescriptorProto.fromBinaryReader);
                    (instance.value = instance.value || []).push(messageInitializer2);
                    break;
                case 3:
                    instance.options = new EnumOptions();
                    reader.readMessage(instance.options, EnumOptions.fromBinaryReader);
                    break;
                case 4:
                    const messageInitializer4 = new EnumDescriptorProto.EnumReservedRange();
                    reader.readMessage(messageInitializer4, EnumDescriptorProto.EnumReservedRange.fromBinaryReader);
                    (instance.reservedRange = instance.reservedRange || []).push(messageInitializer4);
                    break;
                case 5:
                    (instance.reservedName = instance.reservedName || []).push(reader.readString());
                    break;
                default:
                    reader.skipField();
            }
        }
        EnumDescriptorProto.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.value && instance.value.length) {
            writer.writeRepeatedMessage(2, instance.value, EnumValueDescriptorProto.toBinaryWriter);
        }
        if (instance.options) {
            writer.writeMessage(3, instance.options, EnumOptions.toBinaryWriter);
        }
        if (instance.reservedRange && instance.reservedRange.length) {
            writer.writeRepeatedMessage(4, instance.reservedRange, EnumDescriptorProto.EnumReservedRange.toBinaryWriter);
        }
        if (instance.reservedName && instance.reservedName.length) {
            writer.writeRepeatedString(5, instance.reservedName);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    get reservedRange() {
        return this._reservedRange;
    }
    set reservedRange(value) {
        this._reservedRange = value;
    }
    get reservedName() {
        return this._reservedName;
    }
    set reservedName(value) {
        this._reservedName = value;
    }
    toObject() {
        return {
            name: this.name,
            value: (this.value || []).map(m => m.toObject()),
            options: this.options ? this.options.toObject() : undefined,
            reservedRange: (this.reservedRange || []).map(m => m.toObject()),
            reservedName: (this.reservedName || []).slice()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (EnumDescriptorProto) {
    class EnumReservedRange {
        /**
         * Creates an object and applies default Protobuf values
         * @param EnumReservedRange value
         */
        constructor(value) {
            value = value || {};
            this.start = value.start;
            this.end = value.end;
            EnumReservedRange.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            EnumReservedRange.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new EnumReservedRange();
            EnumReservedRange.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.start = instance.start || 0;
            instance.end = instance.end || 0;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.start = reader.readInt32();
                        break;
                    case 2:
                        instance.end = reader.readInt32();
                        break;
                    default:
                        reader.skipField();
                }
            }
            EnumReservedRange.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.start) {
                writer.writeInt32(1, instance.start);
            }
            if (instance.end) {
                writer.writeInt32(2, instance.end);
            }
        }
        get start() {
            return this._start;
        }
        set start(value) {
            this._start = value;
        }
        get end() {
            return this._end;
        }
        set end(value) {
            this._end = value;
        }
        toObject() {
            return {
                start: this.start,
                end: this.end
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    EnumDescriptorProto.EnumReservedRange = EnumReservedRange;
})(EnumDescriptorProto || (EnumDescriptorProto = {}));
export class EnumValueDescriptorProto {
    /**
     * Creates an object and applies default Protobuf values
     * @param EnumValueDescriptorProto value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.number = value.number;
        this.options = value.options
            ? new EnumValueOptions(value.options)
            : undefined;
        EnumValueDescriptorProto.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EnumValueDescriptorProto.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EnumValueDescriptorProto();
        EnumValueDescriptorProto.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.number = instance.number || 0;
        instance.options = instance.options || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.number = reader.readInt32();
                    break;
                case 3:
                    instance.options = new EnumValueOptions();
                    reader.readMessage(instance.options, EnumValueOptions.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        EnumValueDescriptorProto.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.number) {
            writer.writeInt32(2, instance.number);
        }
        if (instance.options) {
            writer.writeMessage(3, instance.options, EnumValueOptions.toBinaryWriter);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get number() {
        return this._number;
    }
    set number(value) {
        this._number = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    toObject() {
        return {
            name: this.name,
            number: this.number,
            options: this.options ? this.options.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ServiceDescriptorProto {
    /**
     * Creates an object and applies default Protobuf values
     * @param ServiceDescriptorProto value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.method = (value.method || []).map(m => new MethodDescriptorProto(m));
        this.options = value.options
            ? new ServiceOptions(value.options)
            : undefined;
        ServiceDescriptorProto.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ServiceDescriptorProto.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ServiceDescriptorProto();
        ServiceDescriptorProto.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.method = instance.method || [];
        instance.options = instance.options || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new MethodDescriptorProto();
                    reader.readMessage(messageInitializer2, MethodDescriptorProto.fromBinaryReader);
                    (instance.method = instance.method || []).push(messageInitializer2);
                    break;
                case 3:
                    instance.options = new ServiceOptions();
                    reader.readMessage(instance.options, ServiceOptions.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        ServiceDescriptorProto.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.method && instance.method.length) {
            writer.writeRepeatedMessage(2, instance.method, MethodDescriptorProto.toBinaryWriter);
        }
        if (instance.options) {
            writer.writeMessage(3, instance.options, ServiceOptions.toBinaryWriter);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get method() {
        return this._method;
    }
    set method(value) {
        this._method = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    toObject() {
        return {
            name: this.name,
            method: (this.method || []).map(m => m.toObject()),
            options: this.options ? this.options.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class MethodDescriptorProto {
    /**
     * Creates an object and applies default Protobuf values
     * @param MethodDescriptorProto value
     */
    constructor(value) {
        value = value || {};
        this.name = value.name;
        this.inputType = value.inputType;
        this.outputType = value.outputType;
        this.options = value.options ? new MethodOptions(value.options) : undefined;
        this.clientStreaming = value.clientStreaming;
        this.serverStreaming = value.serverStreaming;
        MethodDescriptorProto.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        MethodDescriptorProto.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new MethodDescriptorProto();
        MethodDescriptorProto.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || '';
        instance.inputType = instance.inputType || '';
        instance.outputType = instance.outputType || '';
        instance.options = instance.options || undefined;
        instance.clientStreaming = instance.clientStreaming || false;
        instance.serverStreaming = instance.serverStreaming || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.name = reader.readString();
                    break;
                case 2:
                    instance.inputType = reader.readString();
                    break;
                case 3:
                    instance.outputType = reader.readString();
                    break;
                case 4:
                    instance.options = new MethodOptions();
                    reader.readMessage(instance.options, MethodOptions.fromBinaryReader);
                    break;
                case 5:
                    instance.clientStreaming = reader.readBool();
                    break;
                case 6:
                    instance.serverStreaming = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        MethodDescriptorProto.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name) {
            writer.writeString(1, instance.name);
        }
        if (instance.inputType) {
            writer.writeString(2, instance.inputType);
        }
        if (instance.outputType) {
            writer.writeString(3, instance.outputType);
        }
        if (instance.options) {
            writer.writeMessage(4, instance.options, MethodOptions.toBinaryWriter);
        }
        if (instance.clientStreaming) {
            writer.writeBool(5, instance.clientStreaming);
        }
        if (instance.serverStreaming) {
            writer.writeBool(6, instance.serverStreaming);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get inputType() {
        return this._inputType;
    }
    set inputType(value) {
        this._inputType = value;
    }
    get outputType() {
        return this._outputType;
    }
    set outputType(value) {
        this._outputType = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    get clientStreaming() {
        return this._clientStreaming;
    }
    set clientStreaming(value) {
        this._clientStreaming = value;
    }
    get serverStreaming() {
        return this._serverStreaming;
    }
    set serverStreaming(value) {
        this._serverStreaming = value;
    }
    toObject() {
        return {
            name: this.name,
            inputType: this.inputType,
            outputType: this.outputType,
            options: this.options ? this.options.toObject() : undefined,
            clientStreaming: this.clientStreaming,
            serverStreaming: this.serverStreaming
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class FileOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param FileOptions value
     */
    constructor(value) {
        value = value || {};
        this.javaPackage = value.javaPackage;
        this.javaOuterClassname = value.javaOuterClassname;
        this.javaMultipleFiles = value.javaMultipleFiles;
        this.javaGenerateEqualsAndHash = value.javaGenerateEqualsAndHash;
        this.javaStringCheckUtf8 = value.javaStringCheckUtf8;
        this.optimizeFor = value.optimizeFor;
        this.goPackage = value.goPackage;
        this.ccGenericServices = value.ccGenericServices;
        this.javaGenericServices = value.javaGenericServices;
        this.pyGenericServices = value.pyGenericServices;
        this.phpGenericServices = value.phpGenericServices;
        this.deprecated = value.deprecated;
        this.ccEnableArenas = value.ccEnableArenas;
        this.objcClassPrefix = value.objcClassPrefix;
        this.csharpNamespace = value.csharpNamespace;
        this.swiftPrefix = value.swiftPrefix;
        this.phpClassPrefix = value.phpClassPrefix;
        this.phpNamespace = value.phpNamespace;
        this.phpMetadataNamespace = value.phpMetadataNamespace;
        this.rubyPackage = value.rubyPackage;
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        FileOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        FileOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new FileOptions();
        FileOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.javaPackage = instance.javaPackage || '';
        instance.javaOuterClassname = instance.javaOuterClassname || '';
        instance.javaMultipleFiles = instance.javaMultipleFiles || false;
        instance.javaGenerateEqualsAndHash =
            instance.javaGenerateEqualsAndHash || false;
        instance.javaStringCheckUtf8 = instance.javaStringCheckUtf8 || false;
        instance.optimizeFor = instance.optimizeFor || 0;
        instance.goPackage = instance.goPackage || '';
        instance.ccGenericServices = instance.ccGenericServices || false;
        instance.javaGenericServices = instance.javaGenericServices || false;
        instance.pyGenericServices = instance.pyGenericServices || false;
        instance.phpGenericServices = instance.phpGenericServices || false;
        instance.deprecated = instance.deprecated || false;
        instance.ccEnableArenas = instance.ccEnableArenas || false;
        instance.objcClassPrefix = instance.objcClassPrefix || '';
        instance.csharpNamespace = instance.csharpNamespace || '';
        instance.swiftPrefix = instance.swiftPrefix || '';
        instance.phpClassPrefix = instance.phpClassPrefix || '';
        instance.phpNamespace = instance.phpNamespace || '';
        instance.phpMetadataNamespace = instance.phpMetadataNamespace || '';
        instance.rubyPackage = instance.rubyPackage || '';
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.javaPackage = reader.readString();
                    break;
                case 8:
                    instance.javaOuterClassname = reader.readString();
                    break;
                case 10:
                    instance.javaMultipleFiles = reader.readBool();
                    break;
                case 20:
                    instance.javaGenerateEqualsAndHash = reader.readBool();
                    break;
                case 27:
                    instance.javaStringCheckUtf8 = reader.readBool();
                    break;
                case 9:
                    instance.optimizeFor = reader.readEnum();
                    break;
                case 11:
                    instance.goPackage = reader.readString();
                    break;
                case 16:
                    instance.ccGenericServices = reader.readBool();
                    break;
                case 17:
                    instance.javaGenericServices = reader.readBool();
                    break;
                case 18:
                    instance.pyGenericServices = reader.readBool();
                    break;
                case 42:
                    instance.phpGenericServices = reader.readBool();
                    break;
                case 23:
                    instance.deprecated = reader.readBool();
                    break;
                case 31:
                    instance.ccEnableArenas = reader.readBool();
                    break;
                case 36:
                    instance.objcClassPrefix = reader.readString();
                    break;
                case 37:
                    instance.csharpNamespace = reader.readString();
                    break;
                case 39:
                    instance.swiftPrefix = reader.readString();
                    break;
                case 40:
                    instance.phpClassPrefix = reader.readString();
                    break;
                case 41:
                    instance.phpNamespace = reader.readString();
                    break;
                case 44:
                    instance.phpMetadataNamespace = reader.readString();
                    break;
                case 45:
                    instance.rubyPackage = reader.readString();
                    break;
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        FileOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.javaPackage) {
            writer.writeString(1, instance.javaPackage);
        }
        if (instance.javaOuterClassname) {
            writer.writeString(8, instance.javaOuterClassname);
        }
        if (instance.javaMultipleFiles) {
            writer.writeBool(10, instance.javaMultipleFiles);
        }
        if (instance.javaGenerateEqualsAndHash) {
            writer.writeBool(20, instance.javaGenerateEqualsAndHash);
        }
        if (instance.javaStringCheckUtf8) {
            writer.writeBool(27, instance.javaStringCheckUtf8);
        }
        if (instance.optimizeFor) {
            writer.writeEnum(9, instance.optimizeFor);
        }
        if (instance.goPackage) {
            writer.writeString(11, instance.goPackage);
        }
        if (instance.ccGenericServices) {
            writer.writeBool(16, instance.ccGenericServices);
        }
        if (instance.javaGenericServices) {
            writer.writeBool(17, instance.javaGenericServices);
        }
        if (instance.pyGenericServices) {
            writer.writeBool(18, instance.pyGenericServices);
        }
        if (instance.phpGenericServices) {
            writer.writeBool(42, instance.phpGenericServices);
        }
        if (instance.deprecated) {
            writer.writeBool(23, instance.deprecated);
        }
        if (instance.ccEnableArenas) {
            writer.writeBool(31, instance.ccEnableArenas);
        }
        if (instance.objcClassPrefix) {
            writer.writeString(36, instance.objcClassPrefix);
        }
        if (instance.csharpNamespace) {
            writer.writeString(37, instance.csharpNamespace);
        }
        if (instance.swiftPrefix) {
            writer.writeString(39, instance.swiftPrefix);
        }
        if (instance.phpClassPrefix) {
            writer.writeString(40, instance.phpClassPrefix);
        }
        if (instance.phpNamespace) {
            writer.writeString(41, instance.phpNamespace);
        }
        if (instance.phpMetadataNamespace) {
            writer.writeString(44, instance.phpMetadataNamespace);
        }
        if (instance.rubyPackage) {
            writer.writeString(45, instance.rubyPackage);
        }
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get javaPackage() {
        return this._javaPackage;
    }
    set javaPackage(value) {
        this._javaPackage = value;
    }
    get javaOuterClassname() {
        return this._javaOuterClassname;
    }
    set javaOuterClassname(value) {
        this._javaOuterClassname = value;
    }
    get javaMultipleFiles() {
        return this._javaMultipleFiles;
    }
    set javaMultipleFiles(value) {
        this._javaMultipleFiles = value;
    }
    get javaGenerateEqualsAndHash() {
        return this._javaGenerateEqualsAndHash;
    }
    set javaGenerateEqualsAndHash(value) {
        this._javaGenerateEqualsAndHash = value;
    }
    get javaStringCheckUtf8() {
        return this._javaStringCheckUtf8;
    }
    set javaStringCheckUtf8(value) {
        this._javaStringCheckUtf8 = value;
    }
    get optimizeFor() {
        return this._optimizeFor;
    }
    set optimizeFor(value) {
        this._optimizeFor = value;
    }
    get goPackage() {
        return this._goPackage;
    }
    set goPackage(value) {
        this._goPackage = value;
    }
    get ccGenericServices() {
        return this._ccGenericServices;
    }
    set ccGenericServices(value) {
        this._ccGenericServices = value;
    }
    get javaGenericServices() {
        return this._javaGenericServices;
    }
    set javaGenericServices(value) {
        this._javaGenericServices = value;
    }
    get pyGenericServices() {
        return this._pyGenericServices;
    }
    set pyGenericServices(value) {
        this._pyGenericServices = value;
    }
    get phpGenericServices() {
        return this._phpGenericServices;
    }
    set phpGenericServices(value) {
        this._phpGenericServices = value;
    }
    get deprecated() {
        return this._deprecated;
    }
    set deprecated(value) {
        this._deprecated = value;
    }
    get ccEnableArenas() {
        return this._ccEnableArenas;
    }
    set ccEnableArenas(value) {
        this._ccEnableArenas = value;
    }
    get objcClassPrefix() {
        return this._objcClassPrefix;
    }
    set objcClassPrefix(value) {
        this._objcClassPrefix = value;
    }
    get csharpNamespace() {
        return this._csharpNamespace;
    }
    set csharpNamespace(value) {
        this._csharpNamespace = value;
    }
    get swiftPrefix() {
        return this._swiftPrefix;
    }
    set swiftPrefix(value) {
        this._swiftPrefix = value;
    }
    get phpClassPrefix() {
        return this._phpClassPrefix;
    }
    set phpClassPrefix(value) {
        this._phpClassPrefix = value;
    }
    get phpNamespace() {
        return this._phpNamespace;
    }
    set phpNamespace(value) {
        this._phpNamespace = value;
    }
    get phpMetadataNamespace() {
        return this._phpMetadataNamespace;
    }
    set phpMetadataNamespace(value) {
        this._phpMetadataNamespace = value;
    }
    get rubyPackage() {
        return this._rubyPackage;
    }
    set rubyPackage(value) {
        this._rubyPackage = value;
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            javaPackage: this.javaPackage,
            javaOuterClassname: this.javaOuterClassname,
            javaMultipleFiles: this.javaMultipleFiles,
            javaGenerateEqualsAndHash: this.javaGenerateEqualsAndHash,
            javaStringCheckUtf8: this.javaStringCheckUtf8,
            optimizeFor: this.optimizeFor,
            goPackage: this.goPackage,
            ccGenericServices: this.ccGenericServices,
            javaGenericServices: this.javaGenericServices,
            pyGenericServices: this.pyGenericServices,
            phpGenericServices: this.phpGenericServices,
            deprecated: this.deprecated,
            ccEnableArenas: this.ccEnableArenas,
            objcClassPrefix: this.objcClassPrefix,
            csharpNamespace: this.csharpNamespace,
            swiftPrefix: this.swiftPrefix,
            phpClassPrefix: this.phpClassPrefix,
            phpNamespace: this.phpNamespace,
            phpMetadataNamespace: this.phpMetadataNamespace,
            rubyPackage: this.rubyPackage,
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (FileOptions) {
    let OptimizeMode;
    (function (OptimizeMode) {
        OptimizeMode[OptimizeMode["speed"] = 1] = "speed";
        OptimizeMode[OptimizeMode["codeSize"] = 2] = "codeSize";
        OptimizeMode[OptimizeMode["liteRuntime"] = 3] = "liteRuntime";
    })(OptimizeMode = FileOptions.OptimizeMode || (FileOptions.OptimizeMode = {}));
})(FileOptions || (FileOptions = {}));
export class MessageOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param MessageOptions value
     */
    constructor(value) {
        value = value || {};
        this.messageSetWireFormat = value.messageSetWireFormat;
        this.noStandardDescriptorAccessor = value.noStandardDescriptorAccessor;
        this.deprecated = value.deprecated;
        this.mapEntry = value.mapEntry;
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        MessageOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        MessageOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new MessageOptions();
        MessageOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.messageSetWireFormat = instance.messageSetWireFormat || false;
        instance.noStandardDescriptorAccessor =
            instance.noStandardDescriptorAccessor || false;
        instance.deprecated = instance.deprecated || false;
        instance.mapEntry = instance.mapEntry || false;
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.messageSetWireFormat = reader.readBool();
                    break;
                case 2:
                    instance.noStandardDescriptorAccessor = reader.readBool();
                    break;
                case 3:
                    instance.deprecated = reader.readBool();
                    break;
                case 7:
                    instance.mapEntry = reader.readBool();
                    break;
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        MessageOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.messageSetWireFormat) {
            writer.writeBool(1, instance.messageSetWireFormat);
        }
        if (instance.noStandardDescriptorAccessor) {
            writer.writeBool(2, instance.noStandardDescriptorAccessor);
        }
        if (instance.deprecated) {
            writer.writeBool(3, instance.deprecated);
        }
        if (instance.mapEntry) {
            writer.writeBool(7, instance.mapEntry);
        }
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get messageSetWireFormat() {
        return this._messageSetWireFormat;
    }
    set messageSetWireFormat(value) {
        this._messageSetWireFormat = value;
    }
    get noStandardDescriptorAccessor() {
        return this._noStandardDescriptorAccessor;
    }
    set noStandardDescriptorAccessor(value) {
        this._noStandardDescriptorAccessor = value;
    }
    get deprecated() {
        return this._deprecated;
    }
    set deprecated(value) {
        this._deprecated = value;
    }
    get mapEntry() {
        return this._mapEntry;
    }
    set mapEntry(value) {
        this._mapEntry = value;
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            messageSetWireFormat: this.messageSetWireFormat,
            noStandardDescriptorAccessor: this.noStandardDescriptorAccessor,
            deprecated: this.deprecated,
            mapEntry: this.mapEntry,
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class FieldOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param FieldOptions value
     */
    constructor(value) {
        value = value || {};
        this.ctype = value.ctype;
        this.packed = value.packed;
        this.jstype = value.jstype;
        this.lazy = value.lazy;
        this.deprecated = value.deprecated;
        this.weak = value.weak;
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        FieldOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        FieldOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new FieldOptions();
        FieldOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.ctype = instance.ctype || 0;
        instance.packed = instance.packed || false;
        instance.jstype = instance.jstype || 0;
        instance.lazy = instance.lazy || false;
        instance.deprecated = instance.deprecated || false;
        instance.weak = instance.weak || false;
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.ctype = reader.readEnum();
                    break;
                case 2:
                    instance.packed = reader.readBool();
                    break;
                case 6:
                    instance.jstype = reader.readEnum();
                    break;
                case 5:
                    instance.lazy = reader.readBool();
                    break;
                case 3:
                    instance.deprecated = reader.readBool();
                    break;
                case 10:
                    instance.weak = reader.readBool();
                    break;
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        FieldOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.ctype) {
            writer.writeEnum(1, instance.ctype);
        }
        if (instance.packed) {
            writer.writeBool(2, instance.packed);
        }
        if (instance.jstype) {
            writer.writeEnum(6, instance.jstype);
        }
        if (instance.lazy) {
            writer.writeBool(5, instance.lazy);
        }
        if (instance.deprecated) {
            writer.writeBool(3, instance.deprecated);
        }
        if (instance.weak) {
            writer.writeBool(10, instance.weak);
        }
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get ctype() {
        return this._ctype;
    }
    set ctype(value) {
        this._ctype = value;
    }
    get packed() {
        return this._packed;
    }
    set packed(value) {
        this._packed = value;
    }
    get jstype() {
        return this._jstype;
    }
    set jstype(value) {
        this._jstype = value;
    }
    get lazy() {
        return this._lazy;
    }
    set lazy(value) {
        this._lazy = value;
    }
    get deprecated() {
        return this._deprecated;
    }
    set deprecated(value) {
        this._deprecated = value;
    }
    get weak() {
        return this._weak;
    }
    set weak(value) {
        this._weak = value;
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            ctype: this.ctype,
            packed: this.packed,
            jstype: this.jstype,
            lazy: this.lazy,
            deprecated: this.deprecated,
            weak: this.weak,
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (FieldOptions) {
    let CType;
    (function (CType) {
        CType[CType["string"] = 0] = "string";
        CType[CType["cord"] = 1] = "cord";
        CType[CType["stringPiece"] = 2] = "stringPiece";
    })(CType = FieldOptions.CType || (FieldOptions.CType = {}));
    let JSType;
    (function (JSType) {
        JSType[JSType["jsNormal"] = 0] = "jsNormal";
        JSType[JSType["jsString"] = 1] = "jsString";
        JSType[JSType["jsNumber"] = 2] = "jsNumber";
    })(JSType = FieldOptions.JSType || (FieldOptions.JSType = {}));
})(FieldOptions || (FieldOptions = {}));
export class OneofOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param OneofOptions value
     */
    constructor(value) {
        value = value || {};
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        OneofOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        OneofOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new OneofOptions();
        OneofOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        OneofOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class EnumOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param EnumOptions value
     */
    constructor(value) {
        value = value || {};
        this.allowAlias = value.allowAlias;
        this.deprecated = value.deprecated;
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        EnumOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EnumOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EnumOptions();
        EnumOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.allowAlias = instance.allowAlias || false;
        instance.deprecated = instance.deprecated || false;
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    instance.allowAlias = reader.readBool();
                    break;
                case 3:
                    instance.deprecated = reader.readBool();
                    break;
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        EnumOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.allowAlias) {
            writer.writeBool(2, instance.allowAlias);
        }
        if (instance.deprecated) {
            writer.writeBool(3, instance.deprecated);
        }
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get allowAlias() {
        return this._allowAlias;
    }
    set allowAlias(value) {
        this._allowAlias = value;
    }
    get deprecated() {
        return this._deprecated;
    }
    set deprecated(value) {
        this._deprecated = value;
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            allowAlias: this.allowAlias,
            deprecated: this.deprecated,
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class EnumValueOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param EnumValueOptions value
     */
    constructor(value) {
        value = value || {};
        this.deprecated = value.deprecated;
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        EnumValueOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        EnumValueOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new EnumValueOptions();
        EnumValueOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.deprecated = instance.deprecated || false;
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.deprecated = reader.readBool();
                    break;
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        EnumValueOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.deprecated) {
            writer.writeBool(1, instance.deprecated);
        }
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get deprecated() {
        return this._deprecated;
    }
    set deprecated(value) {
        this._deprecated = value;
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            deprecated: this.deprecated,
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ServiceOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param ServiceOptions value
     */
    constructor(value) {
        value = value || {};
        this.deprecated = value.deprecated;
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        ServiceOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ServiceOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ServiceOptions();
        ServiceOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.deprecated = instance.deprecated || false;
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 33:
                    instance.deprecated = reader.readBool();
                    break;
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        ServiceOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.deprecated) {
            writer.writeBool(33, instance.deprecated);
        }
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get deprecated() {
        return this._deprecated;
    }
    set deprecated(value) {
        this._deprecated = value;
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            deprecated: this.deprecated,
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class MethodOptions {
    /**
     * Creates an object and applies default Protobuf values
     * @param MethodOptions value
     */
    constructor(value) {
        value = value || {};
        this.deprecated = value.deprecated;
        this.idempotencyLevel = value.idempotencyLevel;
        this.uninterpretedOption = (value.uninterpretedOption || []).map(m => new UninterpretedOption(m));
        MethodOptions.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        MethodOptions.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new MethodOptions();
        MethodOptions.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.deprecated = instance.deprecated || false;
        instance.idempotencyLevel = instance.idempotencyLevel || 0;
        instance.uninterpretedOption = instance.uninterpretedOption || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 33:
                    instance.deprecated = reader.readBool();
                    break;
                case 34:
                    instance.idempotencyLevel = reader.readEnum();
                    break;
                case 999:
                    const messageInitializer999 = new UninterpretedOption();
                    reader.readMessage(messageInitializer999, UninterpretedOption.fromBinaryReader);
                    (instance.uninterpretedOption =
                        instance.uninterpretedOption || []).push(messageInitializer999);
                    break;
                default:
                    reader.skipField();
            }
        }
        MethodOptions.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.deprecated) {
            writer.writeBool(33, instance.deprecated);
        }
        if (instance.idempotencyLevel) {
            writer.writeEnum(34, instance.idempotencyLevel);
        }
        if (instance.uninterpretedOption && instance.uninterpretedOption.length) {
            writer.writeRepeatedMessage(999, instance.uninterpretedOption, UninterpretedOption.toBinaryWriter);
        }
    }
    get deprecated() {
        return this._deprecated;
    }
    set deprecated(value) {
        this._deprecated = value;
    }
    get idempotencyLevel() {
        return this._idempotencyLevel;
    }
    set idempotencyLevel(value) {
        this._idempotencyLevel = value;
    }
    get uninterpretedOption() {
        return this._uninterpretedOption;
    }
    set uninterpretedOption(value) {
        this._uninterpretedOption = value;
    }
    toObject() {
        return {
            deprecated: this.deprecated,
            idempotencyLevel: this.idempotencyLevel,
            uninterpretedOption: (this.uninterpretedOption || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (MethodOptions) {
    let IdempotencyLevel;
    (function (IdempotencyLevel) {
        IdempotencyLevel[IdempotencyLevel["idempotencyUnknown"] = 0] = "idempotencyUnknown";
        IdempotencyLevel[IdempotencyLevel["noSideEffects"] = 1] = "noSideEffects";
        IdempotencyLevel[IdempotencyLevel["idempotent"] = 2] = "idempotent";
    })(IdempotencyLevel = MethodOptions.IdempotencyLevel || (MethodOptions.IdempotencyLevel = {}));
})(MethodOptions || (MethodOptions = {}));
export class UninterpretedOption {
    /**
     * Creates an object and applies default Protobuf values
     * @param UninterpretedOption value
     */
    constructor(value) {
        value = value || {};
        this.name = (value.name || []).map(m => new UninterpretedOption.NamePart(m));
        this.identifierValue = value.identifierValue;
        this.positiveIntValue = value.positiveIntValue;
        this.negativeIntValue = value.negativeIntValue;
        this.doubleValue = value.doubleValue;
        this.stringValue = value.stringValue;
        this.aggregateValue = value.aggregateValue;
        UninterpretedOption.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UninterpretedOption.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UninterpretedOption();
        UninterpretedOption.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.name = instance.name || [];
        instance.identifierValue = instance.identifierValue || '';
        instance.positiveIntValue = instance.positiveIntValue || '0';
        instance.negativeIntValue = instance.negativeIntValue || '0';
        instance.doubleValue = instance.doubleValue || 0;
        instance.stringValue = instance.stringValue || new Uint8Array();
        instance.aggregateValue = instance.aggregateValue || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    const messageInitializer2 = new UninterpretedOption.NamePart();
                    reader.readMessage(messageInitializer2, UninterpretedOption.NamePart.fromBinaryReader);
                    (instance.name = instance.name || []).push(messageInitializer2);
                    break;
                case 3:
                    instance.identifierValue = reader.readString();
                    break;
                case 4:
                    instance.positiveIntValue = reader.readUint64String();
                    break;
                case 5:
                    instance.negativeIntValue = reader.readInt64String();
                    break;
                case 6:
                    instance.doubleValue = reader.readDouble();
                    break;
                case 7:
                    instance.stringValue = reader.readBytes();
                    break;
                case 8:
                    instance.aggregateValue = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        UninterpretedOption.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.name && instance.name.length) {
            writer.writeRepeatedMessage(2, instance.name, UninterpretedOption.NamePart.toBinaryWriter);
        }
        if (instance.identifierValue) {
            writer.writeString(3, instance.identifierValue);
        }
        if (instance.positiveIntValue) {
            writer.writeUint64String(4, instance.positiveIntValue);
        }
        if (instance.negativeIntValue) {
            writer.writeInt64String(5, instance.negativeIntValue);
        }
        if (instance.doubleValue) {
            writer.writeDouble(6, instance.doubleValue);
        }
        if (instance.stringValue && instance.stringValue.length) {
            writer.writeBytes(7, instance.stringValue);
        }
        if (instance.aggregateValue) {
            writer.writeString(8, instance.aggregateValue);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get identifierValue() {
        return this._identifierValue;
    }
    set identifierValue(value) {
        this._identifierValue = value;
    }
    get positiveIntValue() {
        return this._positiveIntValue;
    }
    set positiveIntValue(value) {
        this._positiveIntValue = value;
    }
    get negativeIntValue() {
        return this._negativeIntValue;
    }
    set negativeIntValue(value) {
        this._negativeIntValue = value;
    }
    get doubleValue() {
        return this._doubleValue;
    }
    set doubleValue(value) {
        this._doubleValue = value;
    }
    get stringValue() {
        return this._stringValue;
    }
    set stringValue(value) {
        this._stringValue = value;
    }
    get aggregateValue() {
        return this._aggregateValue;
    }
    set aggregateValue(value) {
        this._aggregateValue = value;
    }
    toObject() {
        return {
            name: (this.name || []).map(m => m.toObject()),
            identifierValue: this.identifierValue,
            positiveIntValue: this.positiveIntValue,
            negativeIntValue: this.negativeIntValue,
            doubleValue: this.doubleValue,
            stringValue: this.stringValue
                ? this.stringValue.subarray(0)
                : new Uint8Array(),
            aggregateValue: this.aggregateValue
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (UninterpretedOption) {
    class NamePart {
        /**
         * Creates an object and applies default Protobuf values
         * @param NamePart value
         */
        constructor(value) {
            value = value || {};
            this.namePart = value.namePart;
            this.isExtension = value.isExtension;
            NamePart.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            NamePart.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new NamePart();
            NamePart.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.namePart = instance.namePart || '';
            instance.isExtension = instance.isExtension || false;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        instance.namePart = reader.readString();
                        break;
                    case 2:
                        instance.isExtension = reader.readBool();
                        break;
                    default:
                        reader.skipField();
                }
            }
            NamePart.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.namePart) {
                writer.writeString(1, instance.namePart);
            }
            if (instance.isExtension) {
                writer.writeBool(2, instance.isExtension);
            }
        }
        get namePart() {
            return this._namePart;
        }
        set namePart(value) {
            this._namePart = value;
        }
        get isExtension() {
            return this._isExtension;
        }
        set isExtension(value) {
            this._isExtension = value;
        }
        toObject() {
            return {
                namePart: this.namePart,
                isExtension: this.isExtension
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    UninterpretedOption.NamePart = NamePart;
})(UninterpretedOption || (UninterpretedOption = {}));
export class SourceCodeInfo {
    /**
     * Creates an object and applies default Protobuf values
     * @param SourceCodeInfo value
     */
    constructor(value) {
        value = value || {};
        this.location = (value.location || []).map(m => new SourceCodeInfo.Location(m));
        SourceCodeInfo.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SourceCodeInfo.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SourceCodeInfo();
        SourceCodeInfo.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.location = instance.location || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new SourceCodeInfo.Location();
                    reader.readMessage(messageInitializer1, SourceCodeInfo.Location.fromBinaryReader);
                    (instance.location = instance.location || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        SourceCodeInfo.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.location && instance.location.length) {
            writer.writeRepeatedMessage(1, instance.location, SourceCodeInfo.Location.toBinaryWriter);
        }
    }
    get location() {
        return this._location;
    }
    set location(value) {
        this._location = value;
    }
    toObject() {
        return {
            location: (this.location || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (SourceCodeInfo) {
    class Location {
        /**
         * Creates an object and applies default Protobuf values
         * @param Location value
         */
        constructor(value) {
            value = value || {};
            this.path = (value.path || []).slice();
            this.span = (value.span || []).slice();
            this.leadingComments = value.leadingComments;
            this.trailingComments = value.trailingComments;
            this.leadingDetachedComments = (value.leadingDetachedComments || []).slice();
            Location.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            Location.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new Location();
            Location.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.path = instance.path || [];
            instance.span = instance.span || [];
            instance.leadingComments = instance.leadingComments || '';
            instance.trailingComments = instance.trailingComments || '';
            instance.leadingDetachedComments = instance.leadingDetachedComments || [];
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        (instance.path = instance.path || []).push(reader.readInt32());
                        break;
                    case 2:
                        (instance.span = instance.span || []).push(reader.readInt32());
                        break;
                    case 3:
                        instance.leadingComments = reader.readString();
                        break;
                    case 4:
                        instance.trailingComments = reader.readString();
                        break;
                    case 6:
                        (instance.leadingDetachedComments =
                            instance.leadingDetachedComments || []).push(reader.readString());
                        break;
                    default:
                        reader.skipField();
                }
            }
            Location.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.path && instance.path.length) {
                writer.writeRepeatedInt32(1, instance.path);
            }
            if (instance.span && instance.span.length) {
                writer.writeRepeatedInt32(2, instance.span);
            }
            if (instance.leadingComments) {
                writer.writeString(3, instance.leadingComments);
            }
            if (instance.trailingComments) {
                writer.writeString(4, instance.trailingComments);
            }
            if (instance.leadingDetachedComments &&
                instance.leadingDetachedComments.length) {
                writer.writeRepeatedString(6, instance.leadingDetachedComments);
            }
        }
        get path() {
            return this._path;
        }
        set path(value) {
            this._path = value;
        }
        get span() {
            return this._span;
        }
        set span(value) {
            this._span = value;
        }
        get leadingComments() {
            return this._leadingComments;
        }
        set leadingComments(value) {
            this._leadingComments = value;
        }
        get trailingComments() {
            return this._trailingComments;
        }
        set trailingComments(value) {
            this._trailingComments = value;
        }
        get leadingDetachedComments() {
            return this._leadingDetachedComments;
        }
        set leadingDetachedComments(value) {
            this._leadingDetachedComments = value;
        }
        toObject() {
            return {
                path: (this.path || []).slice(),
                span: (this.span || []).slice(),
                leadingComments: this.leadingComments,
                trailingComments: this.trailingComments,
                leadingDetachedComments: (this.leadingDetachedComments || []).slice()
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    SourceCodeInfo.Location = Location;
})(SourceCodeInfo || (SourceCodeInfo = {}));
export class GeneratedCodeInfo {
    /**
     * Creates an object and applies default Protobuf values
     * @param GeneratedCodeInfo value
     */
    constructor(value) {
        value = value || {};
        this.annotation = (value.annotation || []).map(m => new GeneratedCodeInfo.Annotation(m));
        GeneratedCodeInfo.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GeneratedCodeInfo.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GeneratedCodeInfo();
        GeneratedCodeInfo.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.annotation = instance.annotation || [];
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new GeneratedCodeInfo.Annotation();
                    reader.readMessage(messageInitializer1, GeneratedCodeInfo.Annotation.fromBinaryReader);
                    (instance.annotation = instance.annotation || []).push(messageInitializer1);
                    break;
                default:
                    reader.skipField();
            }
        }
        GeneratedCodeInfo.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.annotation && instance.annotation.length) {
            writer.writeRepeatedMessage(1, instance.annotation, GeneratedCodeInfo.Annotation.toBinaryWriter);
        }
    }
    get annotation() {
        return this._annotation;
    }
    set annotation(value) {
        this._annotation = value;
    }
    toObject() {
        return {
            annotation: (this.annotation || []).map(m => m.toObject())
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (GeneratedCodeInfo) {
    class Annotation {
        /**
         * Creates an object and applies default Protobuf values
         * @param Annotation value
         */
        constructor(value) {
            value = value || {};
            this.path = (value.path || []).slice();
            this.sourceFile = value.sourceFile;
            this.begin = value.begin;
            this.end = value.end;
            Annotation.refineValues(this);
        }
        static toBinary(instance) {
            const writer = new BinaryWriter();
            Annotation.toBinaryWriter(instance, writer);
            return writer.getResultBuffer();
        }
        static fromBinary(bytes) {
            const instance = new Annotation();
            Annotation.fromBinaryReader(instance, new BinaryReader(bytes));
            return instance;
        }
        static refineValues(instance) {
            instance.path = instance.path || [];
            instance.sourceFile = instance.sourceFile || '';
            instance.begin = instance.begin || 0;
            instance.end = instance.end || 0;
        }
        static fromBinaryReader(instance, reader) {
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        (instance.path = instance.path || []).push(reader.readInt32());
                        break;
                    case 2:
                        instance.sourceFile = reader.readString();
                        break;
                    case 3:
                        instance.begin = reader.readInt32();
                        break;
                    case 4:
                        instance.end = reader.readInt32();
                        break;
                    default:
                        reader.skipField();
                }
            }
            Annotation.refineValues(instance);
        }
        static toBinaryWriter(instance, writer) {
            if (instance.path && instance.path.length) {
                writer.writeRepeatedInt32(1, instance.path);
            }
            if (instance.sourceFile) {
                writer.writeString(2, instance.sourceFile);
            }
            if (instance.begin) {
                writer.writeInt32(3, instance.begin);
            }
            if (instance.end) {
                writer.writeInt32(4, instance.end);
            }
        }
        get path() {
            return this._path;
        }
        set path(value) {
            this._path = value;
        }
        get sourceFile() {
            return this._sourceFile;
        }
        set sourceFile(value) {
            this._sourceFile = value;
        }
        get begin() {
            return this._begin;
        }
        set begin(value) {
            this._begin = value;
        }
        get end() {
            return this._end;
        }
        set end(value) {
            this._end = value;
        }
        toObject() {
            return {
                path: (this.path || []).slice(),
                sourceFile: this.sourceFile,
                begin: this.begin,
                end: this.end
            };
        }
        toJSON() {
            return this.toObject();
        }
    }
    GeneratedCodeInfo.Annotation = Annotation;
})(GeneratedCodeInfo || (GeneratedCodeInfo = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzY3JpcHRvci5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9nb29nbGUvcHJvdG9idWYvZGVzY3JpcHRvci5wYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBYyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pFLE1BQU0sT0FBTyxpQkFBaUI7SUFrRDVCOzs7T0FHRztJQUNILFlBQVksS0FBMkM7UUFDckQsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBekRELE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBMkI7UUFDekMsTUFBTSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWlCO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUN6QyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUEyQjtRQUM3QyxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLElB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LE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBNkM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBNEM7UUFDbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBeUI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBeUI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBeUI7UUFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsS0FBeUI7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBeUI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxD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QUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRzthQUNkLENBQUM7UUFDSixDQUFDO1FBQ0QsTUFBTTtZQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7S0FDRjtJQWhIWSw0QkFBVSxhQWdIdEIsQ0FBQTtBQUVILENBQUMsRUFuSGEsaUJBQWlCLEtBQWpCLGlCQUFpQixRQW1IOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7IEdycGNNZXNzYWdlLCBSZWN1cnNpdmVQYXJ0aWFsIH0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5leHBvcnQgY2xhc3MgRmlsZURlc2NyaXB0b3JTZXQgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogRmlsZURlc2NyaXB0b3JTZXQpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRmlsZURlc2NyaXB0b3JTZXQudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRmlsZURlc2NyaXB0b3JTZXQoKTtcbiAgICBGaWxlRGVzY3JpcHRvclNldC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogRmlsZURlc2NyaXB0b3JTZXQpIHtcbiAgICBpbnN0YW5jZS5maWxlID0gaW5zdGFuY2UuZmlsZSB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBGaWxlRGVzY3JpcHRvclNldCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgRmlsZURlc2NyaXB0b3JQcm90bygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBGaWxlRGVzY3JpcHRvclByb3RvLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS5maWxlID0gaW5zdGFuY2UuZmlsZSB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRmlsZURlc2NyaXB0b3JTZXQucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogRmlsZURlc2NyaXB0b3JTZXQsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmZpbGUgJiYgaW5zdGFuY2UuZmlsZS5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgaW5zdGFuY2UuZmlsZSBhcyBhbnksXG4gICAgICAgIEZpbGVEZXNjcmlwdG9yUHJvdG8udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmlsZT86IEZpbGVEZXNjcmlwdG9yUHJvdG9bXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEZpbGVEZXNjcmlwdG9yU2V0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RmlsZURlc2NyaXB0b3JTZXQ+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmZpbGUgPSAodmFsdWUuZmlsZSB8fCBbXSkubWFwKG0gPT4gbmV3IEZpbGVEZXNjcmlwdG9yUHJvdG8obSkpO1xuICAgIEZpbGVEZXNjcmlwdG9yU2V0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZmlsZSgpOiBGaWxlRGVzY3JpcHRvclByb3RvW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9maWxlO1xuICB9XG4gIHNldCBmaWxlKHZhbHVlOiBGaWxlRGVzY3JpcHRvclByb3RvW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9maWxlID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGU6ICh0aGlzLmZpbGUgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEZpbGVEZXNjcmlwdG9yU2V0IHt9XG5leHBvcnQgY2xhc3MgRmlsZURlc2NyaXB0b3JQcm90byBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBGaWxlRGVzY3JpcHRvclByb3RvKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEZpbGVEZXNjcmlwdG9yUHJvdG8udG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRmlsZURlc2NyaXB0b3JQcm90bygpO1xuICAgIEZpbGVEZXNjcmlwdG9yUHJvdG8uZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEZpbGVEZXNjcmlwdG9yUHJvdG8pIHtcbiAgICBpbnN0YW5jZS5uYW1lID0gaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgICBpbnN0YW5jZS5wYWNrYWdlID0gaW5zdGFuY2UucGFja2FnZSB8fCAnJztcbiAgICBpbnN0YW5jZS5kZXBlbmRlbmN5ID0gaW5zdGFuY2UuZGVwZW5kZW5jeSB8fCBbXTtcbiAgICBpbnN0YW5jZS5wdWJsaWNEZXBlbmRlbmN5ID0gaW5zdGFuY2UucHVibGljRGVwZW5kZW5jeSB8fCBbXTtcbiAgICBpbnN0YW5jZS53ZWFrRGVwZW5kZW5jeSA9IGluc3RhbmNlLndlYWtEZXBlbmRlbmN5IHx8IFtdO1xuICAgIGluc3RhbmNlLm1lc3NhZ2VUeXBlID0gaW5zdGFuY2UubWVzc2FnZVR5cGUgfHwgW107XG4gICAgaW5zdGFuY2UuZW51bVR5cGUgPSBpbnN0YW5jZS5lbnVtVHlwZSB8fCBbXTtcbiAgICBpbnN0YW5jZS5zZXJ2aWNlID0gaW5zdGFuY2Uuc2VydmljZSB8fCBbXTtcbiAgICBpbnN0YW5jZS5leHRlbnNpb24gPSBpbnN0YW5jZS5leHRlbnNpb24gfHwgW107XG4gICAgaW5zdGFuY2Uub3B0aW9ucyA9IGluc3RhbmNlLm9wdGlvbnMgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLnNvdXJjZUNvZGVJbmZvID0gaW5zdGFuY2Uuc291cmNlQ29kZUluZm8gfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLnN5bnRheCA9IGluc3RhbmNlLnN5bnRheCB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBGaWxlRGVzY3JpcHRvclByb3RvLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UubmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5wYWNrYWdlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIChpbnN0YW5jZS5kZXBlbmRlbmN5ID0gaW5zdGFuY2UuZGVwZW5kZW5jeSB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIHJlYWRlci5yZWFkU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIChpbnN0YW5jZS5wdWJsaWNEZXBlbmRlbmN5ID0gaW5zdGFuY2UucHVibGljRGVwZW5kZW5jeSB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIHJlYWRlci5yZWFkSW50MzIoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgKGluc3RhbmNlLndlYWtEZXBlbmRlbmN5ID0gaW5zdGFuY2Uud2Vha0RlcGVuZGVuY3kgfHwgW10pLnB1c2goXG4gICAgICAgICAgICByZWFkZXIucmVhZEludDMyKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyNCA9IG5ldyBEZXNjcmlwdG9yUHJvdG8oKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI0LFxuICAgICAgICAgICAgRGVzY3JpcHRvclByb3RvLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS5tZXNzYWdlVHlwZSA9IGluc3RhbmNlLm1lc3NhZ2VUeXBlIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyNFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXI1ID0gbmV3IEVudW1EZXNjcmlwdG9yUHJvdG8oKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI1LFxuICAgICAgICAgICAgRW51bURlc2NyaXB0b3JQcm90by5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UuZW51bVR5cGUgPSBpbnN0YW5jZS5lbnVtVHlwZSB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjVcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyNiA9IG5ldyBTZXJ2aWNlRGVzY3JpcHRvclByb3RvKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyNixcbiAgICAgICAgICAgIFNlcnZpY2VEZXNjcmlwdG9yUHJvdG8uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLnNlcnZpY2UgPSBpbnN0YW5jZS5zZXJ2aWNlIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyNyA9IG5ldyBGaWVsZERlc2NyaXB0b3JQcm90bygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjcsXG4gICAgICAgICAgICBGaWVsZERlc2NyaXB0b3JQcm90by5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UuZXh0ZW5zaW9uID0gaW5zdGFuY2UuZXh0ZW5zaW9uIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyN1xuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBpbnN0YW5jZS5vcHRpb25zID0gbmV3IEZpbGVPcHRpb25zKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKGluc3RhbmNlLm9wdGlvbnMsIEZpbGVPcHRpb25zLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgaW5zdGFuY2Uuc291cmNlQ29kZUluZm8gPSBuZXcgU291cmNlQ29kZUluZm8oKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5zb3VyY2VDb2RlSW5mbyxcbiAgICAgICAgICAgIFNvdXJjZUNvZGVJbmZvLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgIGluc3RhbmNlLnN5bnRheCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEZpbGVEZXNjcmlwdG9yUHJvdG8ucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogRmlsZURlc2NyaXB0b3JQcm90bywgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UubmFtZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGFja2FnZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLnBhY2thZ2UpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZGVwZW5kZW5jeSAmJiBpbnN0YW5jZS5kZXBlbmRlbmN5Lmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMywgaW5zdGFuY2UuZGVwZW5kZW5jeSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wdWJsaWNEZXBlbmRlbmN5ICYmIGluc3RhbmNlLnB1YmxpY0RlcGVuZGVuY3kubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZEludDMyKDEwLCBpbnN0YW5jZS5wdWJsaWNEZXBlbmRlbmN5KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLndlYWtEZXBlbmRlbmN5ICYmIGluc3RhbmNlLndlYWtEZXBlbmRlbmN5Lmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRJbnQzMigxMSwgaW5zdGFuY2Uud2Vha0RlcGVuZGVuY3kpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubWVzc2FnZVR5cGUgJiYgaW5zdGFuY2UubWVzc2FnZVR5cGUubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIGluc3RhbmNlLm1lc3NhZ2VUeXBlIGFzIGFueSxcbiAgICAgICAgRGVzY3JpcHRvclByb3RvLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZW51bVR5cGUgJiYgaW5zdGFuY2UuZW51bVR5cGUubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIGluc3RhbmNlLmVudW1UeXBlIGFzIGFueSxcbiAgICAgICAgRW51bURlc2NyaXB0b3JQcm90by50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNlcnZpY2UgJiYgaW5zdGFuY2Uuc2VydmljZS5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgaW5zdGFuY2Uuc2VydmljZSBhcyBhbnksXG4gICAgICAgIFNlcnZpY2VEZXNjcmlwdG9yUHJvdG8udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5leHRlbnNpb24gJiYgaW5zdGFuY2UuZXh0ZW5zaW9uLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICA3LFxuICAgICAgICBpbnN0YW5jZS5leHRlbnNpb24gYXMgYW55LFxuICAgICAgICBGaWVsZERlc2NyaXB0b3JQcm90by50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm9wdGlvbnMpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDgsXG4gICAgICAgIGluc3RhbmNlLm9wdGlvbnMgYXMgYW55LFxuICAgICAgICBGaWxlT3B0aW9ucy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNvdXJjZUNvZGVJbmZvKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA5LFxuICAgICAgICBpbnN0YW5jZS5zb3VyY2VDb2RlSW5mbyBhcyBhbnksXG4gICAgICAgIFNvdXJjZUNvZGVJbmZvLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc3ludGF4KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMTIsIGluc3RhbmNlLnN5bnRheCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFja2FnZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfZGVwZW5kZW5jeT86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9wdWJsaWNEZXBlbmRlbmN5PzogbnVtYmVyW107XG4gIHByaXZhdGUgX3dlYWtEZXBlbmRlbmN5PzogbnVtYmVyW107XG4gIHByaXZhdGUgX21lc3NhZ2VUeXBlPzogRGVzY3JpcHRvclByb3RvW107XG4gIHByaXZhdGUgX2VudW1UeXBlPzogRW51bURlc2NyaXB0b3JQcm90b1tdO1xuICBwcml2YXRlIF9zZXJ2aWNlPzogU2VydmljZURlc2NyaXB0b3JQcm90b1tdO1xuICBwcml2YXRlIF9leHRlbnNpb24/OiBGaWVsZERlc2NyaXB0b3JQcm90b1tdO1xuICBwcml2YXRlIF9vcHRpb25zPzogRmlsZU9wdGlvbnM7XG4gIHByaXZhdGUgX3NvdXJjZUNvZGVJbmZvPzogU291cmNlQ29kZUluZm87XG4gIHByaXZhdGUgX3N5bnRheD86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEZpbGVEZXNjcmlwdG9yUHJvdG8gdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxGaWxlRGVzY3JpcHRvclByb3RvPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5uYW1lID0gdmFsdWUubmFtZTtcbiAgICB0aGlzLnBhY2thZ2UgPSB2YWx1ZS5wYWNrYWdlO1xuICAgIHRoaXMuZGVwZW5kZW5jeSA9ICh2YWx1ZS5kZXBlbmRlbmN5IHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMucHVibGljRGVwZW5kZW5jeSA9ICh2YWx1ZS5wdWJsaWNEZXBlbmRlbmN5IHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMud2Vha0RlcGVuZGVuY3kgPSAodmFsdWUud2Vha0RlcGVuZGVuY3kgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5tZXNzYWdlVHlwZSA9ICh2YWx1ZS5tZXNzYWdlVHlwZSB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgRGVzY3JpcHRvclByb3RvKG0pXG4gICAgKTtcbiAgICB0aGlzLmVudW1UeXBlID0gKHZhbHVlLmVudW1UeXBlIHx8IFtdKS5tYXAobSA9PiBuZXcgRW51bURlc2NyaXB0b3JQcm90byhtKSk7XG4gICAgdGhpcy5zZXJ2aWNlID0gKHZhbHVlLnNlcnZpY2UgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IFNlcnZpY2VEZXNjcmlwdG9yUHJvdG8obSlcbiAgICApO1xuICAgIHRoaXMuZXh0ZW5zaW9uID0gKHZhbHVlLmV4dGVuc2lvbiB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgRmllbGREZXNjcmlwdG9yUHJvdG8obSlcbiAgICApO1xuICAgIHRoaXMub3B0aW9ucyA9IHZhbHVlLm9wdGlvbnMgPyBuZXcgRmlsZU9wdGlvbnModmFsdWUub3B0aW9ucykgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zb3VyY2VDb2RlSW5mbyA9IHZhbHVlLnNvdXJjZUNvZGVJbmZvXG4gICAgICA/IG5ldyBTb3VyY2VDb2RlSW5mbyh2YWx1ZS5zb3VyY2VDb2RlSW5mbylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc3ludGF4ID0gdmFsdWUuc3ludGF4O1xuICAgIEZpbGVEZXNjcmlwdG9yUHJvdG8ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGFja2FnZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWNrYWdlO1xuICB9XG4gIHNldCBwYWNrYWdlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYWNrYWdlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlcGVuZGVuY3koKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kZXBlbmRlbmN5O1xuICB9XG4gIHNldCBkZXBlbmRlbmN5KHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RlcGVuZGVuY3kgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcHVibGljRGVwZW5kZW5jeSgpOiBudW1iZXJbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3B1YmxpY0RlcGVuZGVuY3k7XG4gIH1cbiAgc2V0IHB1YmxpY0RlcGVuZGVuY3kodmFsdWU6IG51bWJlcltdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcHVibGljRGVwZW5kZW5jeSA9IHZhbHVlO1xuICB9XG4gIGdldCB3ZWFrRGVwZW5kZW5jeSgpOiBudW1iZXJbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYWtEZXBlbmRlbmN5O1xuICB9XG4gIHNldCB3ZWFrRGVwZW5kZW5jeSh2YWx1ZTogbnVtYmVyW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl93ZWFrRGVwZW5kZW5jeSA9IHZhbHVlO1xuICB9XG4gIGdldCBtZXNzYWdlVHlwZSgpOiBEZXNjcmlwdG9yUHJvdG9bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VUeXBlO1xuICB9XG4gIHNldCBtZXNzYWdlVHlwZSh2YWx1ZTogRGVzY3JpcHRvclByb3RvW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tZXNzYWdlVHlwZSA9IHZhbHVlO1xuICB9XG4gIGdldCBlbnVtVHlwZSgpOiBFbnVtRGVzY3JpcHRvclByb3RvW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9lbnVtVHlwZTtcbiAgfVxuICBzZXQgZW51bVR5cGUodmFsdWU6IEVudW1EZXNjcmlwdG9yUHJvdG9bXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2VudW1UeXBlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNlcnZpY2UoKTogU2VydmljZURlc2NyaXB0b3JQcm90b1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZTtcbiAgfVxuICBzZXQgc2VydmljZSh2YWx1ZTogU2VydmljZURlc2NyaXB0b3JQcm90b1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2VydmljZSA9IHZhbHVlO1xuICB9XG4gIGdldCBleHRlbnNpb24oKTogRmllbGREZXNjcmlwdG9yUHJvdG9bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuc2lvbjtcbiAgfVxuICBzZXQgZXh0ZW5zaW9uKHZhbHVlOiBGaWVsZERlc2NyaXB0b3JQcm90b1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZXh0ZW5zaW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9wdGlvbnMoKTogRmlsZU9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG4gIHNldCBvcHRpb25zKHZhbHVlOiBGaWxlT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX29wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc291cmNlQ29kZUluZm8oKTogU291cmNlQ29kZUluZm8gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VDb2RlSW5mbztcbiAgfVxuICBzZXQgc291cmNlQ29kZUluZm8odmFsdWU6IFNvdXJjZUNvZGVJbmZvIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc291cmNlQ29kZUluZm8gPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3ludGF4KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3N5bnRheDtcbiAgfVxuICBzZXQgc3ludGF4KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zeW50YXggPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgcGFja2FnZTogdGhpcy5wYWNrYWdlLFxuICAgICAgZGVwZW5kZW5jeTogKHRoaXMuZGVwZW5kZW5jeSB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHB1YmxpY0RlcGVuZGVuY3k6ICh0aGlzLnB1YmxpY0RlcGVuZGVuY3kgfHwgW10pLnNsaWNlKCksXG4gICAgICB3ZWFrRGVwZW5kZW5jeTogKHRoaXMud2Vha0RlcGVuZGVuY3kgfHwgW10pLnNsaWNlKCksXG4gICAgICBtZXNzYWdlVHlwZTogKHRoaXMubWVzc2FnZVR5cGUgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBlbnVtVHlwZTogKHRoaXMuZW51bVR5cGUgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBzZXJ2aWNlOiAodGhpcy5zZXJ2aWNlIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgZXh0ZW5zaW9uOiAodGhpcy5leHRlbnNpb24gfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMgPyB0aGlzLm9wdGlvbnMudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIHNvdXJjZUNvZGVJbmZvOiB0aGlzLnNvdXJjZUNvZGVJbmZvXG4gICAgICAgID8gdGhpcy5zb3VyY2VDb2RlSW5mby50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgc3ludGF4OiB0aGlzLnN5bnRheFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRmlsZURlc2NyaXB0b3JQcm90byB7fVxuZXhwb3J0IGNsYXNzIERlc2NyaXB0b3JQcm90byBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBEZXNjcmlwdG9yUHJvdG8pIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRGVzY3JpcHRvclByb3RvLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IERlc2NyaXB0b3JQcm90bygpO1xuICAgIERlc2NyaXB0b3JQcm90by5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogRGVzY3JpcHRvclByb3RvKSB7XG4gICAgaW5zdGFuY2UubmFtZSA9IGluc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgaW5zdGFuY2UuZmllbGQgPSBpbnN0YW5jZS5maWVsZCB8fCBbXTtcbiAgICBpbnN0YW5jZS5leHRlbnNpb24gPSBpbnN0YW5jZS5leHRlbnNpb24gfHwgW107XG4gICAgaW5zdGFuY2UubmVzdGVkVHlwZSA9IGluc3RhbmNlLm5lc3RlZFR5cGUgfHwgW107XG4gICAgaW5zdGFuY2UuZW51bVR5cGUgPSBpbnN0YW5jZS5lbnVtVHlwZSB8fCBbXTtcbiAgICBpbnN0YW5jZS5leHRlbnNpb25SYW5nZSA9IGluc3RhbmNlLmV4dGVuc2lvblJhbmdlIHx8IFtdO1xuICAgIGluc3RhbmNlLm9uZW9mRGVjbCA9IGluc3RhbmNlLm9uZW9mRGVjbCB8fCBbXTtcbiAgICBpbnN0YW5jZS5vcHRpb25zID0gaW5zdGFuY2Uub3B0aW9ucyB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UucmVzZXJ2ZWRSYW5nZSA9IGluc3RhbmNlLnJlc2VydmVkUmFuZ2UgfHwgW107XG4gICAgaW5zdGFuY2UucmVzZXJ2ZWROYW1lID0gaW5zdGFuY2UucmVzZXJ2ZWROYW1lIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IERlc2NyaXB0b3JQcm90bywgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBGaWVsZERlc2NyaXB0b3JQcm90bygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjIsXG4gICAgICAgICAgICBGaWVsZERlc2NyaXB0b3JQcm90by5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UuZmllbGQgPSBpbnN0YW5jZS5maWVsZCB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjYgPSBuZXcgRmllbGREZXNjcmlwdG9yUHJvdG8oKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI2LFxuICAgICAgICAgICAgRmllbGREZXNjcmlwdG9yUHJvdG8uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLmV4dGVuc2lvbiA9IGluc3RhbmNlLmV4dGVuc2lvbiB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjZcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMyA9IG5ldyBEZXNjcmlwdG9yUHJvdG8oKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIzLFxuICAgICAgICAgICAgRGVzY3JpcHRvclByb3RvLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS5uZXN0ZWRUeXBlID0gaW5zdGFuY2UubmVzdGVkVHlwZSB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjNcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyNCA9IG5ldyBFbnVtRGVzY3JpcHRvclByb3RvKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyNCxcbiAgICAgICAgICAgIEVudW1EZXNjcmlwdG9yUHJvdG8uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLmVudW1UeXBlID0gaW5zdGFuY2UuZW51bVR5cGUgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI0XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjUgPSBuZXcgRGVzY3JpcHRvclByb3RvLkV4dGVuc2lvblJhbmdlKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyNSxcbiAgICAgICAgICAgIERlc2NyaXB0b3JQcm90by5FeHRlbnNpb25SYW5nZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UuZXh0ZW5zaW9uUmFuZ2UgPSBpbnN0YW5jZS5leHRlbnNpb25SYW5nZSB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjVcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyOCA9IG5ldyBPbmVvZkRlc2NyaXB0b3JQcm90bygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjgsXG4gICAgICAgICAgICBPbmVvZkRlc2NyaXB0b3JQcm90by5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2Uub25lb2ZEZWNsID0gaW5zdGFuY2Uub25lb2ZEZWNsIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyOFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBpbnN0YW5jZS5vcHRpb25zID0gbmV3IE1lc3NhZ2VPcHRpb25zKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKGluc3RhbmNlLm9wdGlvbnMsIE1lc3NhZ2VPcHRpb25zLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyOSA9IG5ldyBEZXNjcmlwdG9yUHJvdG8uUmVzZXJ2ZWRSYW5nZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjksXG4gICAgICAgICAgICBEZXNjcmlwdG9yUHJvdG8uUmVzZXJ2ZWRSYW5nZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UucmVzZXJ2ZWRSYW5nZSA9IGluc3RhbmNlLnJlc2VydmVkUmFuZ2UgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI5XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAoaW5zdGFuY2UucmVzZXJ2ZWROYW1lID0gaW5zdGFuY2UucmVzZXJ2ZWROYW1lIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERlc2NyaXB0b3JQcm90by5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBEZXNjcmlwdG9yUHJvdG8sIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLm5hbWUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmZpZWxkICYmIGluc3RhbmNlLmZpZWxkLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBpbnN0YW5jZS5maWVsZCBhcyBhbnksXG4gICAgICAgIEZpZWxkRGVzY3JpcHRvclByb3RvLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZXh0ZW5zaW9uICYmIGluc3RhbmNlLmV4dGVuc2lvbi5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgaW5zdGFuY2UuZXh0ZW5zaW9uIGFzIGFueSxcbiAgICAgICAgRmllbGREZXNjcmlwdG9yUHJvdG8udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5uZXN0ZWRUeXBlICYmIGluc3RhbmNlLm5lc3RlZFR5cGUubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIGluc3RhbmNlLm5lc3RlZFR5cGUgYXMgYW55LFxuICAgICAgICBEZXNjcmlwdG9yUHJvdG8udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5lbnVtVHlwZSAmJiBpbnN0YW5jZS5lbnVtVHlwZS5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgaW5zdGFuY2UuZW51bVR5cGUgYXMgYW55LFxuICAgICAgICBFbnVtRGVzY3JpcHRvclByb3RvLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZXh0ZW5zaW9uUmFuZ2UgJiYgaW5zdGFuY2UuZXh0ZW5zaW9uUmFuZ2UubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIGluc3RhbmNlLmV4dGVuc2lvblJhbmdlIGFzIGFueSxcbiAgICAgICAgRGVzY3JpcHRvclByb3RvLkV4dGVuc2lvblJhbmdlLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uub25lb2ZEZWNsICYmIGluc3RhbmNlLm9uZW9mRGVjbC5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgOCxcbiAgICAgICAgaW5zdGFuY2Uub25lb2ZEZWNsIGFzIGFueSxcbiAgICAgICAgT25lb2ZEZXNjcmlwdG9yUHJvdG8udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5vcHRpb25zKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA3LFxuICAgICAgICBpbnN0YW5jZS5vcHRpb25zIGFzIGFueSxcbiAgICAgICAgTWVzc2FnZU9wdGlvbnMudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5yZXNlcnZlZFJhbmdlICYmIGluc3RhbmNlLnJlc2VydmVkUmFuZ2UubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDksXG4gICAgICAgIGluc3RhbmNlLnJlc2VydmVkUmFuZ2UgYXMgYW55LFxuICAgICAgICBEZXNjcmlwdG9yUHJvdG8uUmVzZXJ2ZWRSYW5nZS50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnJlc2VydmVkTmFtZSAmJiBpbnN0YW5jZS5yZXNlcnZlZE5hbWUubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxMCwgaW5zdGFuY2UucmVzZXJ2ZWROYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9maWVsZD86IEZpZWxkRGVzY3JpcHRvclByb3RvW107XG4gIHByaXZhdGUgX2V4dGVuc2lvbj86IEZpZWxkRGVzY3JpcHRvclByb3RvW107XG4gIHByaXZhdGUgX25lc3RlZFR5cGU/OiBEZXNjcmlwdG9yUHJvdG9bXTtcbiAgcHJpdmF0ZSBfZW51bVR5cGU/OiBFbnVtRGVzY3JpcHRvclByb3RvW107XG4gIHByaXZhdGUgX2V4dGVuc2lvblJhbmdlPzogRGVzY3JpcHRvclByb3RvLkV4dGVuc2lvblJhbmdlW107XG4gIHByaXZhdGUgX29uZW9mRGVjbD86IE9uZW9mRGVzY3JpcHRvclByb3RvW107XG4gIHByaXZhdGUgX29wdGlvbnM/OiBNZXNzYWdlT3B0aW9ucztcbiAgcHJpdmF0ZSBfcmVzZXJ2ZWRSYW5nZT86IERlc2NyaXB0b3JQcm90by5SZXNlcnZlZFJhbmdlW107XG4gIHByaXZhdGUgX3Jlc2VydmVkTmFtZT86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gRGVzY3JpcHRvclByb3RvIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RGVzY3JpcHRvclByb3RvPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5uYW1lID0gdmFsdWUubmFtZTtcbiAgICB0aGlzLmZpZWxkID0gKHZhbHVlLmZpZWxkIHx8IFtdKS5tYXAobSA9PiBuZXcgRmllbGREZXNjcmlwdG9yUHJvdG8obSkpO1xuICAgIHRoaXMuZXh0ZW5zaW9uID0gKHZhbHVlLmV4dGVuc2lvbiB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgRmllbGREZXNjcmlwdG9yUHJvdG8obSlcbiAgICApO1xuICAgIHRoaXMubmVzdGVkVHlwZSA9ICh2YWx1ZS5uZXN0ZWRUeXBlIHx8IFtdKS5tYXAobSA9PiBuZXcgRGVzY3JpcHRvclByb3RvKG0pKTtcbiAgICB0aGlzLmVudW1UeXBlID0gKHZhbHVlLmVudW1UeXBlIHx8IFtdKS5tYXAobSA9PiBuZXcgRW51bURlc2NyaXB0b3JQcm90byhtKSk7XG4gICAgdGhpcy5leHRlbnNpb25SYW5nZSA9ICh2YWx1ZS5leHRlbnNpb25SYW5nZSB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgRGVzY3JpcHRvclByb3RvLkV4dGVuc2lvblJhbmdlKG0pXG4gICAgKTtcbiAgICB0aGlzLm9uZW9mRGVjbCA9ICh2YWx1ZS5vbmVvZkRlY2wgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IE9uZW9mRGVzY3JpcHRvclByb3RvKG0pXG4gICAgKTtcbiAgICB0aGlzLm9wdGlvbnMgPSB2YWx1ZS5vcHRpb25zXG4gICAgICA/IG5ldyBNZXNzYWdlT3B0aW9ucyh2YWx1ZS5vcHRpb25zKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZXNlcnZlZFJhbmdlID0gKHZhbHVlLnJlc2VydmVkUmFuZ2UgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IERlc2NyaXB0b3JQcm90by5SZXNlcnZlZFJhbmdlKG0pXG4gICAgKTtcbiAgICB0aGlzLnJlc2VydmVkTmFtZSA9ICh2YWx1ZS5yZXNlcnZlZE5hbWUgfHwgW10pLnNsaWNlKCk7XG4gICAgRGVzY3JpcHRvclByb3RvLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZpZWxkKCk6IEZpZWxkRGVzY3JpcHRvclByb3RvW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9maWVsZDtcbiAgfVxuICBzZXQgZmllbGQodmFsdWU6IEZpZWxkRGVzY3JpcHRvclByb3RvW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9maWVsZCA9IHZhbHVlO1xuICB9XG4gIGdldCBleHRlbnNpb24oKTogRmllbGREZXNjcmlwdG9yUHJvdG9bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuc2lvbjtcbiAgfVxuICBzZXQgZXh0ZW5zaW9uKHZhbHVlOiBGaWVsZERlc2NyaXB0b3JQcm90b1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZXh0ZW5zaW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5lc3RlZFR5cGUoKTogRGVzY3JpcHRvclByb3RvW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uZXN0ZWRUeXBlO1xuICB9XG4gIHNldCBuZXN0ZWRUeXBlKHZhbHVlOiBEZXNjcmlwdG9yUHJvdG9bXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25lc3RlZFR5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZW51bVR5cGUoKTogRW51bURlc2NyaXB0b3JQcm90b1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW51bVR5cGU7XG4gIH1cbiAgc2V0IGVudW1UeXBlKHZhbHVlOiBFbnVtRGVzY3JpcHRvclByb3RvW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9lbnVtVHlwZSA9IHZhbHVlO1xuICB9XG4gIGdldCBleHRlbnNpb25SYW5nZSgpOiBEZXNjcmlwdG9yUHJvdG8uRXh0ZW5zaW9uUmFuZ2VbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuc2lvblJhbmdlO1xuICB9XG4gIHNldCBleHRlbnNpb25SYW5nZSh2YWx1ZTogRGVzY3JpcHRvclByb3RvLkV4dGVuc2lvblJhbmdlW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9leHRlbnNpb25SYW5nZSA9IHZhbHVlO1xuICB9XG4gIGdldCBvbmVvZkRlY2woKTogT25lb2ZEZXNjcmlwdG9yUHJvdG9bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29uZW9mRGVjbDtcbiAgfVxuICBzZXQgb25lb2ZEZWNsKHZhbHVlOiBPbmVvZkRlc2NyaXB0b3JQcm90b1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fb25lb2ZEZWNsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9wdGlvbnMoKTogTWVzc2FnZU9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG4gIHNldCBvcHRpb25zKHZhbHVlOiBNZXNzYWdlT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX29wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVzZXJ2ZWRSYW5nZSgpOiBEZXNjcmlwdG9yUHJvdG8uUmVzZXJ2ZWRSYW5nZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzZXJ2ZWRSYW5nZTtcbiAgfVxuICBzZXQgcmVzZXJ2ZWRSYW5nZSh2YWx1ZTogRGVzY3JpcHRvclByb3RvLlJlc2VydmVkUmFuZ2VbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Jlc2VydmVkUmFuZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVzZXJ2ZWROYW1lKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzZXJ2ZWROYW1lO1xuICB9XG4gIHNldCByZXNlcnZlZE5hbWUodmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcmVzZXJ2ZWROYW1lID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGZpZWxkOiAodGhpcy5maWVsZCB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIGV4dGVuc2lvbjogKHRoaXMuZXh0ZW5zaW9uIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgbmVzdGVkVHlwZTogKHRoaXMubmVzdGVkVHlwZSB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIGVudW1UeXBlOiAodGhpcy5lbnVtVHlwZSB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIGV4dGVuc2lvblJhbmdlOiAodGhpcy5leHRlbnNpb25SYW5nZSB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIG9uZW9mRGVjbDogKHRoaXMub25lb2ZEZWNsIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zID8gdGhpcy5vcHRpb25zLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICByZXNlcnZlZFJhbmdlOiAodGhpcy5yZXNlcnZlZFJhbmdlIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgcmVzZXJ2ZWROYW1lOiAodGhpcy5yZXNlcnZlZE5hbWUgfHwgW10pLnNsaWNlKClcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIERlc2NyaXB0b3JQcm90byB7XG4gIGV4cG9ydCBjbGFzcyBFeHRlbnNpb25SYW5nZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEV4dGVuc2lvblJhbmdlKSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBFeHRlbnNpb25SYW5nZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEV4dGVuc2lvblJhbmdlKCk7XG4gICAgICBFeHRlbnNpb25SYW5nZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogRXh0ZW5zaW9uUmFuZ2UpIHtcbiAgICAgIGluc3RhbmNlLnN0YXJ0ID0gaW5zdGFuY2Uuc3RhcnQgfHwgMDtcbiAgICAgIGluc3RhbmNlLmVuZCA9IGluc3RhbmNlLmVuZCB8fCAwO1xuICAgICAgaW5zdGFuY2Uub3B0aW9ucyA9IGluc3RhbmNlLm9wdGlvbnMgfHwgdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBFeHRlbnNpb25SYW5nZSwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBpbnN0YW5jZS5zdGFydCA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGluc3RhbmNlLmVuZCA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGluc3RhbmNlLm9wdGlvbnMgPSBuZXcgRXh0ZW5zaW9uUmFuZ2VPcHRpb25zKCk7XG4gICAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICAgIGluc3RhbmNlLm9wdGlvbnMsXG4gICAgICAgICAgICAgIEV4dGVuc2lvblJhbmdlT3B0aW9ucy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBFeHRlbnNpb25SYW5nZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogRXh0ZW5zaW9uUmFuZ2UsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICBpZiAoaW5zdGFuY2Uuc3RhcnQpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlSW50MzIoMSwgaW5zdGFuY2Uuc3RhcnQpO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLmVuZCkge1xuICAgICAgICB3cml0ZXIud3JpdGVJbnQzMigyLCBpbnN0YW5jZS5lbmQpO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLm9wdGlvbnMpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgICAzLFxuICAgICAgICAgIGluc3RhbmNlLm9wdGlvbnMgYXMgYW55LFxuICAgICAgICAgIEV4dGVuc2lvblJhbmdlT3B0aW9ucy50b0JpbmFyeVdyaXRlclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3N0YXJ0PzogbnVtYmVyO1xuICAgIHByaXZhdGUgX2VuZD86IG51bWJlcjtcbiAgICBwcml2YXRlIF9vcHRpb25zPzogRXh0ZW5zaW9uUmFuZ2VPcHRpb25zO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICAgKiBAcGFyYW0gRXh0ZW5zaW9uUmFuZ2UgdmFsdWVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RXh0ZW5zaW9uUmFuZ2U+KSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgICAgdGhpcy5zdGFydCA9IHZhbHVlLnN0YXJ0O1xuICAgICAgdGhpcy5lbmQgPSB2YWx1ZS5lbmQ7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB2YWx1ZS5vcHRpb25zXG4gICAgICAgID8gbmV3IEV4dGVuc2lvblJhbmdlT3B0aW9ucyh2YWx1ZS5vcHRpb25zKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIEV4dGVuc2lvblJhbmdlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IHN0YXJ0KCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhcnQ7XG4gICAgfVxuICAgIHNldCBzdGFydCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9zdGFydCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZW5kKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fZW5kO1xuICAgIH1cbiAgICBzZXQgZW5kKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2VuZCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgb3B0aW9ucygpOiBFeHRlbnNpb25SYW5nZU9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gICAgfVxuICAgIHNldCBvcHRpb25zKHZhbHVlOiBFeHRlbnNpb25SYW5nZU9wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB2YWx1ZTtcbiAgICB9XG4gICAgdG9PYmplY3QoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogdGhpcy5zdGFydCxcbiAgICAgICAgZW5kOiB0aGlzLmVuZCxcbiAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zID8gdGhpcy5vcHRpb25zLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgRXh0ZW5zaW9uUmFuZ2Uge31cbiAgZXhwb3J0IGNsYXNzIFJlc2VydmVkUmFuZ2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBSZXNlcnZlZFJhbmdlKSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBSZXNlcnZlZFJhbmdlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUmVzZXJ2ZWRSYW5nZSgpO1xuICAgICAgUmVzZXJ2ZWRSYW5nZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogUmVzZXJ2ZWRSYW5nZSkge1xuICAgICAgaW5zdGFuY2Uuc3RhcnQgPSBpbnN0YW5jZS5zdGFydCB8fCAwO1xuICAgICAgaW5zdGFuY2UuZW5kID0gaW5zdGFuY2UuZW5kIHx8IDA7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFJlc2VydmVkUmFuZ2UsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgaW5zdGFuY2Uuc3RhcnQgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBpbnN0YW5jZS5lbmQgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJlc2VydmVkUmFuZ2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFJlc2VydmVkUmFuZ2UsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICBpZiAoaW5zdGFuY2Uuc3RhcnQpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlSW50MzIoMSwgaW5zdGFuY2Uuc3RhcnQpO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLmVuZCkge1xuICAgICAgICB3cml0ZXIud3JpdGVJbnQzMigyLCBpbnN0YW5jZS5lbmQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3N0YXJ0PzogbnVtYmVyO1xuICAgIHByaXZhdGUgX2VuZD86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAgICogQHBhcmFtIFJlc2VydmVkUmFuZ2UgdmFsdWVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8UmVzZXJ2ZWRSYW5nZT4pIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgICB0aGlzLnN0YXJ0ID0gdmFsdWUuc3RhcnQ7XG4gICAgICB0aGlzLmVuZCA9IHZhbHVlLmVuZDtcbiAgICAgIFJlc2VydmVkUmFuZ2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgc3RhcnQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydDtcbiAgICB9XG4gICAgc2V0IHN0YXJ0KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3N0YXJ0ID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBlbmQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbmQ7XG4gICAgfVxuICAgIHNldCBlbmQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZW5kID0gdmFsdWU7XG4gICAgfVxuICAgIHRvT2JqZWN0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IHRoaXMuc3RhcnQsXG4gICAgICAgIGVuZDogdGhpcy5lbmRcbiAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgUmVzZXJ2ZWRSYW5nZSB7fVxufVxuZXhwb3J0IGNsYXNzIEV4dGVuc2lvblJhbmdlT3B0aW9ucyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBFeHRlbnNpb25SYW5nZU9wdGlvbnMpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRXh0ZW5zaW9uUmFuZ2VPcHRpb25zLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEV4dGVuc2lvblJhbmdlT3B0aW9ucygpO1xuICAgIEV4dGVuc2lvblJhbmdlT3B0aW9ucy5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogRXh0ZW5zaW9uUmFuZ2VPcHRpb25zKSB7XG4gICAgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiA9IGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogRXh0ZW5zaW9uUmFuZ2VPcHRpb25zLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDk5OTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXI5OTkgPSBuZXcgVW5pbnRlcnByZXRlZE9wdGlvbigpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjk5OSxcbiAgICAgICAgICAgIFVuaW50ZXJwcmV0ZWRPcHRpb24uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gPVxuICAgICAgICAgICAgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXI5OTkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFeHRlbnNpb25SYW5nZU9wdGlvbnMucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogRXh0ZW5zaW9uUmFuZ2VPcHRpb25zLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS51bmludGVycHJldGVkT3B0aW9uICYmIGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24ubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDk5OSxcbiAgICAgICAgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiBhcyBhbnksXG4gICAgICAgIFVuaW50ZXJwcmV0ZWRPcHRpb24udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdW5pbnRlcnByZXRlZE9wdGlvbj86IFVuaW50ZXJwcmV0ZWRPcHRpb25bXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEV4dGVuc2lvblJhbmdlT3B0aW9ucyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEV4dGVuc2lvblJhbmdlT3B0aW9ucz4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMudW5pbnRlcnByZXRlZE9wdGlvbiA9ICh2YWx1ZS51bmludGVycHJldGVkT3B0aW9uIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBVbmludGVycHJldGVkT3B0aW9uKG0pXG4gICAgKTtcbiAgICBFeHRlbnNpb25SYW5nZU9wdGlvbnMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB1bmludGVycHJldGVkT3B0aW9uKCk6IFVuaW50ZXJwcmV0ZWRPcHRpb25bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaW50ZXJwcmV0ZWRPcHRpb247XG4gIH1cbiAgc2V0IHVuaW50ZXJwcmV0ZWRPcHRpb24odmFsdWU6IFVuaW50ZXJwcmV0ZWRPcHRpb25bXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VuaW50ZXJwcmV0ZWRPcHRpb24gPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdW5pbnRlcnByZXRlZE9wdGlvbjogKHRoaXMudW5pbnRlcnByZXRlZE9wdGlvbiB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b09iamVjdCgpXG4gICAgICApXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBFeHRlbnNpb25SYW5nZU9wdGlvbnMge31cbmV4cG9ydCBjbGFzcyBGaWVsZERlc2NyaXB0b3JQcm90byBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBGaWVsZERlc2NyaXB0b3JQcm90bykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBGaWVsZERlc2NyaXB0b3JQcm90by50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBGaWVsZERlc2NyaXB0b3JQcm90bygpO1xuICAgIEZpZWxkRGVzY3JpcHRvclByb3RvLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBGaWVsZERlc2NyaXB0b3JQcm90bykge1xuICAgIGluc3RhbmNlLm5hbWUgPSBpbnN0YW5jZS5uYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLm51bWJlciA9IGluc3RhbmNlLm51bWJlciB8fCAwO1xuICAgIGluc3RhbmNlLmxhYmVsID0gaW5zdGFuY2UubGFiZWwgfHwgMDtcbiAgICBpbnN0YW5jZS50eXBlID0gaW5zdGFuY2UudHlwZSB8fCAwO1xuICAgIGluc3RhbmNlLnR5cGVOYW1lID0gaW5zdGFuY2UudHlwZU5hbWUgfHwgJyc7XG4gICAgaW5zdGFuY2UuZXh0ZW5kZWUgPSBpbnN0YW5jZS5leHRlbmRlZSB8fCAnJztcbiAgICBpbnN0YW5jZS5kZWZhdWx0VmFsdWUgPSBpbnN0YW5jZS5kZWZhdWx0VmFsdWUgfHwgJyc7XG4gICAgaW5zdGFuY2Uub25lb2ZJbmRleCA9IGluc3RhbmNlLm9uZW9mSW5kZXggfHwgMDtcbiAgICBpbnN0YW5jZS5qc29uTmFtZSA9IGluc3RhbmNlLmpzb25OYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLm9wdGlvbnMgPSBpbnN0YW5jZS5vcHRpb25zIHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5wcm90bzNPcHRpb25hbCA9IGluc3RhbmNlLnByb3RvM09wdGlvbmFsIHx8IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IEZpZWxkRGVzY3JpcHRvclByb3RvLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UubmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5udW1iZXIgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5sYWJlbCA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaW5zdGFuY2UudHlwZSA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgaW5zdGFuY2UudHlwZU5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuZXh0ZW5kZWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgaW5zdGFuY2UuZGVmYXVsdFZhbHVlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIGluc3RhbmNlLm9uZW9mSW5kZXggPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgaW5zdGFuY2UuanNvbk5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgaW5zdGFuY2Uub3B0aW9ucyA9IG5ldyBGaWVsZE9wdGlvbnMoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoaW5zdGFuY2Uub3B0aW9ucywgRmllbGRPcHRpb25zLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgIGluc3RhbmNlLnByb3RvM09wdGlvbmFsID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEZpZWxkRGVzY3JpcHRvclByb3RvLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IEZpZWxkRGVzY3JpcHRvclByb3RvLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5uYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UubmFtZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5udW1iZXIpIHtcbiAgICAgIHdyaXRlci53cml0ZUludDMyKDMsIGluc3RhbmNlLm51bWJlcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYWJlbCkge1xuICAgICAgd3JpdGVyLndyaXRlRW51bSg0LCBpbnN0YW5jZS5sYWJlbCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS50eXBlKSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDUsIGluc3RhbmNlLnR5cGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudHlwZU5hbWUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg2LCBpbnN0YW5jZS50eXBlTmFtZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5leHRlbmRlZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLmV4dGVuZGVlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDcsIGluc3RhbmNlLmRlZmF1bHRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5vbmVvZkluZGV4KSB7XG4gICAgICB3cml0ZXIud3JpdGVJbnQzMig5LCBpbnN0YW5jZS5vbmVvZkluZGV4KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmpzb25OYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMTAsIGluc3RhbmNlLmpzb25OYW1lKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm9wdGlvbnMpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDgsXG4gICAgICAgIGluc3RhbmNlLm9wdGlvbnMgYXMgYW55LFxuICAgICAgICBGaWVsZE9wdGlvbnMudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wcm90bzNPcHRpb25hbCkge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgxNywgaW5zdGFuY2UucHJvdG8zT3B0aW9uYWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX251bWJlcj86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbGFiZWw/OiBGaWVsZERlc2NyaXB0b3JQcm90by5MYWJlbDtcbiAgcHJpdmF0ZSBfdHlwZT86IEZpZWxkRGVzY3JpcHRvclByb3RvLlR5cGU7XG4gIHByaXZhdGUgX3R5cGVOYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9leHRlbmRlZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xuICBwcml2YXRlIF9vbmVvZkluZGV4PzogbnVtYmVyO1xuICBwcml2YXRlIF9qc29uTmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfb3B0aW9ucz86IEZpZWxkT3B0aW9ucztcbiAgcHJpdmF0ZSBfcHJvdG8zT3B0aW9uYWw/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gRmllbGREZXNjcmlwdG9yUHJvdG8gdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxGaWVsZERlc2NyaXB0b3JQcm90bz4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMubmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgdGhpcy5udW1iZXIgPSB2YWx1ZS5udW1iZXI7XG4gICAgdGhpcy5sYWJlbCA9IHZhbHVlLmxhYmVsO1xuICAgIHRoaXMudHlwZSA9IHZhbHVlLnR5cGU7XG4gICAgdGhpcy50eXBlTmFtZSA9IHZhbHVlLnR5cGVOYW1lO1xuICAgIHRoaXMuZXh0ZW5kZWUgPSB2YWx1ZS5leHRlbmRlZTtcbiAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHZhbHVlLmRlZmF1bHRWYWx1ZTtcbiAgICB0aGlzLm9uZW9mSW5kZXggPSB2YWx1ZS5vbmVvZkluZGV4O1xuICAgIHRoaXMuanNvbk5hbWUgPSB2YWx1ZS5qc29uTmFtZTtcbiAgICB0aGlzLm9wdGlvbnMgPSB2YWx1ZS5vcHRpb25zID8gbmV3IEZpZWxkT3B0aW9ucyh2YWx1ZS5vcHRpb25zKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnByb3RvM09wdGlvbmFsID0gdmFsdWUucHJvdG8zT3B0aW9uYWw7XG4gICAgRmllbGREZXNjcmlwdG9yUHJvdG8ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbnVtYmVyKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlcjtcbiAgfVxuICBzZXQgbnVtYmVyKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9udW1iZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFiZWwoKTogRmllbGREZXNjcmlwdG9yUHJvdG8uTGFiZWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgfVxuICBzZXQgbGFiZWwodmFsdWU6IEZpZWxkRGVzY3JpcHRvclByb3RvLkxhYmVsIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHlwZSgpOiBGaWVsZERlc2NyaXB0b3JQcm90by5UeXBlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuICBzZXQgdHlwZSh2YWx1ZTogRmllbGREZXNjcmlwdG9yUHJvdG8uVHlwZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHlwZU5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZU5hbWU7XG4gIH1cbiAgc2V0IHR5cGVOYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90eXBlTmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBleHRlbmRlZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9leHRlbmRlZTtcbiAgfVxuICBzZXQgZXh0ZW5kZWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2V4dGVuZGVlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlZmF1bHRWYWx1ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VmFsdWU7XG4gIH1cbiAgc2V0IGRlZmF1bHRWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGVmYXVsdFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9uZW9mSW5kZXgoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb25lb2ZJbmRleDtcbiAgfVxuICBzZXQgb25lb2ZJbmRleCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fb25lb2ZJbmRleCA9IHZhbHVlO1xuICB9XG4gIGdldCBqc29uTmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9qc29uTmFtZTtcbiAgfVxuICBzZXQganNvbk5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2pzb25OYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9wdGlvbnMoKTogRmllbGRPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuICBzZXQgb3B0aW9ucyh2YWx1ZTogRmllbGRPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCBwcm90bzNPcHRpb25hbCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdG8zT3B0aW9uYWw7XG4gIH1cbiAgc2V0IHByb3RvM09wdGlvbmFsKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcHJvdG8zT3B0aW9uYWwgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgdHlwZU5hbWU6IHRoaXMudHlwZU5hbWUsXG4gICAgICBleHRlbmRlZTogdGhpcy5leHRlbmRlZSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsXG4gICAgICBvbmVvZkluZGV4OiB0aGlzLm9uZW9mSW5kZXgsXG4gICAgICBqc29uTmFtZTogdGhpcy5qc29uTmFtZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyA/IHRoaXMub3B0aW9ucy50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcHJvdG8zT3B0aW9uYWw6IHRoaXMucHJvdG8zT3B0aW9uYWxcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEZpZWxkRGVzY3JpcHRvclByb3RvIHtcbiAgZXhwb3J0IGVudW0gVHlwZSB7XG4gICAgdHlwZURvdWJsZSA9IDEsXG4gICAgdHlwZUZsb2F0ID0gMixcbiAgICB0eXBlSW50NjQgPSAzLFxuICAgIHR5cGVVaW50NjQgPSA0LFxuICAgIHR5cGVJbnQzMiA9IDUsXG4gICAgdHlwZUZpeGVkNjQgPSA2LFxuICAgIHR5cGVGaXhlZDMyID0gNyxcbiAgICB0eXBlQm9vbCA9IDgsXG4gICAgdHlwZVN0cmluZyA9IDksXG4gICAgdHlwZUdyb3VwID0gMTAsXG4gICAgdHlwZU1lc3NhZ2UgPSAxMSxcbiAgICB0eXBlQnl0ZXMgPSAxMixcbiAgICB0eXBlVWludDMyID0gMTMsXG4gICAgdHlwZUVudW0gPSAxNCxcbiAgICB0eXBlU2ZpeGVkMzIgPSAxNSxcbiAgICB0eXBlU2ZpeGVkNjQgPSAxNixcbiAgICB0eXBlU2ludDMyID0gMTcsXG4gICAgdHlwZVNpbnQ2NCA9IDE4XG4gIH1cbiAgZXhwb3J0IGVudW0gTGFiZWwge1xuICAgIGxhYmVsT3B0aW9uYWwgPSAxLFxuICAgIGxhYmVsUmVxdWlyZWQgPSAyLFxuICAgIGxhYmVsUmVwZWF0ZWQgPSAzXG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBPbmVvZkRlc2NyaXB0b3JQcm90byBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBPbmVvZkRlc2NyaXB0b3JQcm90bykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBPbmVvZkRlc2NyaXB0b3JQcm90by50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBPbmVvZkRlc2NyaXB0b3JQcm90bygpO1xuICAgIE9uZW9mRGVzY3JpcHRvclByb3RvLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBPbmVvZkRlc2NyaXB0b3JQcm90bykge1xuICAgIGluc3RhbmNlLm5hbWUgPSBpbnN0YW5jZS5uYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLm9wdGlvbnMgPSBpbnN0YW5jZS5vcHRpb25zIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBPbmVvZkRlc2NyaXB0b3JQcm90byxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2Uub3B0aW9ucyA9IG5ldyBPbmVvZk9wdGlvbnMoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoaW5zdGFuY2Uub3B0aW9ucywgT25lb2ZPcHRpb25zLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPbmVvZkRlc2NyaXB0b3JQcm90by5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBPbmVvZkRlc2NyaXB0b3JQcm90bywgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UubmFtZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uub3B0aW9ucykge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2Uub3B0aW9ucyBhcyBhbnksXG4gICAgICAgIE9uZW9mT3B0aW9ucy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9vcHRpb25zPzogT25lb2ZPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gT25lb2ZEZXNjcmlwdG9yUHJvdG8gdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxPbmVvZkRlc2NyaXB0b3JQcm90bz4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMubmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgdGhpcy5vcHRpb25zID0gdmFsdWUub3B0aW9ucyA/IG5ldyBPbmVvZk9wdGlvbnModmFsdWUub3B0aW9ucykgOiB1bmRlZmluZWQ7XG4gICAgT25lb2ZEZXNjcmlwdG9yUHJvdG8ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgb3B0aW9ucygpOiBPbmVvZk9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG4gIHNldCBvcHRpb25zKHZhbHVlOiBPbmVvZk9wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyA/IHRoaXMub3B0aW9ucy50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBPbmVvZkRlc2NyaXB0b3JQcm90byB7fVxuZXhwb3J0IGNsYXNzIEVudW1EZXNjcmlwdG9yUHJvdG8gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogRW51bURlc2NyaXB0b3JQcm90bykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBFbnVtRGVzY3JpcHRvclByb3RvLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEVudW1EZXNjcmlwdG9yUHJvdG8oKTtcbiAgICBFbnVtRGVzY3JpcHRvclByb3RvLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBFbnVtRGVzY3JpcHRvclByb3RvKSB7XG4gICAgaW5zdGFuY2UubmFtZSA9IGluc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgaW5zdGFuY2UudmFsdWUgPSBpbnN0YW5jZS52YWx1ZSB8fCBbXTtcbiAgICBpbnN0YW5jZS5vcHRpb25zID0gaW5zdGFuY2Uub3B0aW9ucyB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UucmVzZXJ2ZWRSYW5nZSA9IGluc3RhbmNlLnJlc2VydmVkUmFuZ2UgfHwgW107XG4gICAgaW5zdGFuY2UucmVzZXJ2ZWROYW1lID0gaW5zdGFuY2UucmVzZXJ2ZWROYW1lIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEVudW1EZXNjcmlwdG9yUHJvdG8sIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5uYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjIgPSBuZXcgRW51bVZhbHVlRGVzY3JpcHRvclByb3RvKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMixcbiAgICAgICAgICAgIEVudW1WYWx1ZURlc2NyaXB0b3JQcm90by5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UudmFsdWUgPSBpbnN0YW5jZS52YWx1ZSB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXIyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLm9wdGlvbnMgPSBuZXcgRW51bU9wdGlvbnMoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoaW5zdGFuY2Uub3B0aW9ucywgRW51bU9wdGlvbnMuZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXI0ID0gbmV3IEVudW1EZXNjcmlwdG9yUHJvdG8uRW51bVJlc2VydmVkUmFuZ2UoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI0LFxuICAgICAgICAgICAgRW51bURlc2NyaXB0b3JQcm90by5FbnVtUmVzZXJ2ZWRSYW5nZS5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UucmVzZXJ2ZWRSYW5nZSA9IGluc3RhbmNlLnJlc2VydmVkUmFuZ2UgfHwgW10pLnB1c2goXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI0XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIChpbnN0YW5jZS5yZXNlcnZlZE5hbWUgPSBpbnN0YW5jZS5yZXNlcnZlZE5hbWUgfHwgW10pLnB1c2goXG4gICAgICAgICAgICByZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRW51bURlc2NyaXB0b3JQcm90by5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBFbnVtRGVzY3JpcHRvclByb3RvLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5uYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UubmFtZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS52YWx1ZSAmJiBpbnN0YW5jZS52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2UudmFsdWUgYXMgYW55LFxuICAgICAgICBFbnVtVmFsdWVEZXNjcmlwdG9yUHJvdG8udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5vcHRpb25zKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBpbnN0YW5jZS5vcHRpb25zIGFzIGFueSxcbiAgICAgICAgRW51bU9wdGlvbnMudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5yZXNlcnZlZFJhbmdlICYmIGluc3RhbmNlLnJlc2VydmVkUmFuZ2UubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIGluc3RhbmNlLnJlc2VydmVkUmFuZ2UgYXMgYW55LFxuICAgICAgICBFbnVtRGVzY3JpcHRvclByb3RvLkVudW1SZXNlcnZlZFJhbmdlLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucmVzZXJ2ZWROYW1lICYmIGluc3RhbmNlLnJlc2VydmVkTmFtZS5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDUsIGluc3RhbmNlLnJlc2VydmVkTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfdmFsdWU/OiBFbnVtVmFsdWVEZXNjcmlwdG9yUHJvdG9bXTtcbiAgcHJpdmF0ZSBfb3B0aW9ucz86IEVudW1PcHRpb25zO1xuICBwcml2YXRlIF9yZXNlcnZlZFJhbmdlPzogRW51bURlc2NyaXB0b3JQcm90by5FbnVtUmVzZXJ2ZWRSYW5nZVtdO1xuICBwcml2YXRlIF9yZXNlcnZlZE5hbWU/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEVudW1EZXNjcmlwdG9yUHJvdG8gdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxFbnVtRGVzY3JpcHRvclByb3RvPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5uYW1lID0gdmFsdWUubmFtZTtcbiAgICB0aGlzLnZhbHVlID0gKHZhbHVlLnZhbHVlIHx8IFtdKS5tYXAobSA9PiBuZXcgRW51bVZhbHVlRGVzY3JpcHRvclByb3RvKG0pKTtcbiAgICB0aGlzLm9wdGlvbnMgPSB2YWx1ZS5vcHRpb25zID8gbmV3IEVudW1PcHRpb25zKHZhbHVlLm9wdGlvbnMpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucmVzZXJ2ZWRSYW5nZSA9ICh2YWx1ZS5yZXNlcnZlZFJhbmdlIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBFbnVtRGVzY3JpcHRvclByb3RvLkVudW1SZXNlcnZlZFJhbmdlKG0pXG4gICAgKTtcbiAgICB0aGlzLnJlc2VydmVkTmFtZSA9ICh2YWx1ZS5yZXNlcnZlZE5hbWUgfHwgW10pLnNsaWNlKCk7XG4gICAgRW51bURlc2NyaXB0b3JQcm90by5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCB2YWx1ZSgpOiBFbnVtVmFsdWVEZXNjcmlwdG9yUHJvdG9bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZTogRW51bVZhbHVlRGVzY3JpcHRvclByb3RvW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBvcHRpb25zKCk6IEVudW1PcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuICBzZXQgb3B0aW9ucyh2YWx1ZTogRW51bU9wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJlc2VydmVkUmFuZ2UoKTogRW51bURlc2NyaXB0b3JQcm90by5FbnVtUmVzZXJ2ZWRSYW5nZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzZXJ2ZWRSYW5nZTtcbiAgfVxuICBzZXQgcmVzZXJ2ZWRSYW5nZShcbiAgICB2YWx1ZTogRW51bURlc2NyaXB0b3JQcm90by5FbnVtUmVzZXJ2ZWRSYW5nZVtdIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX3Jlc2VydmVkUmFuZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVzZXJ2ZWROYW1lKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzZXJ2ZWROYW1lO1xuICB9XG4gIHNldCByZXNlcnZlZE5hbWUodmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcmVzZXJ2ZWROYW1lID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHZhbHVlOiAodGhpcy52YWx1ZSB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyA/IHRoaXMub3B0aW9ucy50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgcmVzZXJ2ZWRSYW5nZTogKHRoaXMucmVzZXJ2ZWRSYW5nZSB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIHJlc2VydmVkTmFtZTogKHRoaXMucmVzZXJ2ZWROYW1lIHx8IFtdKS5zbGljZSgpXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBFbnVtRGVzY3JpcHRvclByb3RvIHtcbiAgZXhwb3J0IGNsYXNzIEVudW1SZXNlcnZlZFJhbmdlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogRW51bVJlc2VydmVkUmFuZ2UpIHtcbiAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgIEVudW1SZXNlcnZlZFJhbmdlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRW51bVJlc2VydmVkUmFuZ2UoKTtcbiAgICAgIEVudW1SZXNlcnZlZFJhbmdlLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBFbnVtUmVzZXJ2ZWRSYW5nZSkge1xuICAgICAgaW5zdGFuY2Uuc3RhcnQgPSBpbnN0YW5jZS5zdGFydCB8fCAwO1xuICAgICAgaW5zdGFuY2UuZW5kID0gaW5zdGFuY2UuZW5kIHx8IDA7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEVudW1SZXNlcnZlZFJhbmdlLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGluc3RhbmNlLnN0YXJ0ID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaW5zdGFuY2UuZW5kID0gcmVhZGVyLnJlYWRJbnQzMigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBFbnVtUmVzZXJ2ZWRSYW5nZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogRW51bVJlc2VydmVkUmFuZ2UsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgICBpZiAoaW5zdGFuY2Uuc3RhcnQpIHtcbiAgICAgICAgd3JpdGVyLndyaXRlSW50MzIoMSwgaW5zdGFuY2Uuc3RhcnQpO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLmVuZCkge1xuICAgICAgICB3cml0ZXIud3JpdGVJbnQzMigyLCBpbnN0YW5jZS5lbmQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3N0YXJ0PzogbnVtYmVyO1xuICAgIHByaXZhdGUgX2VuZD86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAgICogQHBhcmFtIEVudW1SZXNlcnZlZFJhbmdlIHZhbHVlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEVudW1SZXNlcnZlZFJhbmdlPikge1xuICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMuc3RhcnQgPSB2YWx1ZS5zdGFydDtcbiAgICAgIHRoaXMuZW5kID0gdmFsdWUuZW5kO1xuICAgICAgRW51bVJlc2VydmVkUmFuZ2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgc3RhcnQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydDtcbiAgICB9XG4gICAgc2V0IHN0YXJ0KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3N0YXJ0ID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBlbmQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbmQ7XG4gICAgfVxuICAgIHNldCBlbmQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZW5kID0gdmFsdWU7XG4gICAgfVxuICAgIHRvT2JqZWN0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IHRoaXMuc3RhcnQsXG4gICAgICAgIGVuZDogdGhpcy5lbmRcbiAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgRW51bVJlc2VydmVkUmFuZ2Uge31cbn1cbmV4cG9ydCBjbGFzcyBFbnVtVmFsdWVEZXNjcmlwdG9yUHJvdG8gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogRW51bVZhbHVlRGVzY3JpcHRvclByb3RvKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEVudW1WYWx1ZURlc2NyaXB0b3JQcm90by50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBFbnVtVmFsdWVEZXNjcmlwdG9yUHJvdG8oKTtcbiAgICBFbnVtVmFsdWVEZXNjcmlwdG9yUHJvdG8uZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEVudW1WYWx1ZURlc2NyaXB0b3JQcm90bykge1xuICAgIGluc3RhbmNlLm5hbWUgPSBpbnN0YW5jZS5uYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLm51bWJlciA9IGluc3RhbmNlLm51bWJlciB8fCAwO1xuICAgIGluc3RhbmNlLm9wdGlvbnMgPSBpbnN0YW5jZS5vcHRpb25zIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBFbnVtVmFsdWVEZXNjcmlwdG9yUHJvdG8sXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5uYW1lID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLm51bWJlciA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLm9wdGlvbnMgPSBuZXcgRW51bVZhbHVlT3B0aW9ucygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLm9wdGlvbnMsXG4gICAgICAgICAgICBFbnVtVmFsdWVPcHRpb25zLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFbnVtVmFsdWVEZXNjcmlwdG9yUHJvdG8ucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogRW51bVZhbHVlRGVzY3JpcHRvclByb3RvLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5uYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UubmFtZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5udW1iZXIpIHtcbiAgICAgIHdyaXRlci53cml0ZUludDMyKDIsIGluc3RhbmNlLm51bWJlcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5vcHRpb25zKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBpbnN0YW5jZS5vcHRpb25zIGFzIGFueSxcbiAgICAgICAgRW51bVZhbHVlT3B0aW9ucy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9udW1iZXI/OiBudW1iZXI7XG4gIHByaXZhdGUgX29wdGlvbnM/OiBFbnVtVmFsdWVPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gRW51bVZhbHVlRGVzY3JpcHRvclByb3RvIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RW51bVZhbHVlRGVzY3JpcHRvclByb3RvPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5uYW1lID0gdmFsdWUubmFtZTtcbiAgICB0aGlzLm51bWJlciA9IHZhbHVlLm51bWJlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSB2YWx1ZS5vcHRpb25zXG4gICAgICA/IG5ldyBFbnVtVmFsdWVPcHRpb25zKHZhbHVlLm9wdGlvbnMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBFbnVtVmFsdWVEZXNjcmlwdG9yUHJvdG8ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbnVtYmVyKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlcjtcbiAgfVxuICBzZXQgbnVtYmVyKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9udW1iZXIgPSB2YWx1ZTtcbiAgfVxuICBnZXQgb3B0aW9ucygpOiBFbnVtVmFsdWVPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuICBzZXQgb3B0aW9ucyh2YWx1ZTogRW51bVZhbHVlT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX29wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyA/IHRoaXMub3B0aW9ucy50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBFbnVtVmFsdWVEZXNjcmlwdG9yUHJvdG8ge31cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlRGVzY3JpcHRvclByb3RvIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFNlcnZpY2VEZXNjcmlwdG9yUHJvdG8pIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgU2VydmljZURlc2NyaXB0b3JQcm90by50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTZXJ2aWNlRGVzY3JpcHRvclByb3RvKCk7XG4gICAgU2VydmljZURlc2NyaXB0b3JQcm90by5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogU2VydmljZURlc2NyaXB0b3JQcm90bykge1xuICAgIGluc3RhbmNlLm5hbWUgPSBpbnN0YW5jZS5uYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLm1ldGhvZCA9IGluc3RhbmNlLm1ldGhvZCB8fCBbXTtcbiAgICBpbnN0YW5jZS5vcHRpb25zID0gaW5zdGFuY2Uub3B0aW9ucyB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogU2VydmljZURlc2NyaXB0b3JQcm90byxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBNZXRob2REZXNjcmlwdG9yUHJvdG8oKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgTWV0aG9kRGVzY3JpcHRvclByb3RvLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS5tZXRob2QgPSBpbnN0YW5jZS5tZXRob2QgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5vcHRpb25zID0gbmV3IFNlcnZpY2VPcHRpb25zKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKGluc3RhbmNlLm9wdGlvbnMsIFNlcnZpY2VPcHRpb25zLmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTZXJ2aWNlRGVzY3JpcHRvclByb3RvLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IFNlcnZpY2VEZXNjcmlwdG9yUHJvdG8sXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLm5hbWUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm1ldGhvZCAmJiBpbnN0YW5jZS5tZXRob2QubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIGluc3RhbmNlLm1ldGhvZCBhcyBhbnksXG4gICAgICAgIE1ldGhvZERlc2NyaXB0b3JQcm90by50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm9wdGlvbnMpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIGluc3RhbmNlLm9wdGlvbnMgYXMgYW55LFxuICAgICAgICBTZXJ2aWNlT3B0aW9ucy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9tZXRob2Q/OiBNZXRob2REZXNjcmlwdG9yUHJvdG9bXTtcbiAgcHJpdmF0ZSBfb3B0aW9ucz86IFNlcnZpY2VPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gU2VydmljZURlc2NyaXB0b3JQcm90byB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNlcnZpY2VEZXNjcmlwdG9yUHJvdG8+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZS5uYW1lO1xuICAgIHRoaXMubWV0aG9kID0gKHZhbHVlLm1ldGhvZCB8fCBbXSkubWFwKG0gPT4gbmV3IE1ldGhvZERlc2NyaXB0b3JQcm90byhtKSk7XG4gICAgdGhpcy5vcHRpb25zID0gdmFsdWUub3B0aW9uc1xuICAgICAgPyBuZXcgU2VydmljZU9wdGlvbnModmFsdWUub3B0aW9ucylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIFNlcnZpY2VEZXNjcmlwdG9yUHJvdG8ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbWV0aG9kKCk6IE1ldGhvZERlc2NyaXB0b3JQcm90b1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0aG9kO1xuICB9XG4gIHNldCBtZXRob2QodmFsdWU6IE1ldGhvZERlc2NyaXB0b3JQcm90b1tdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbWV0aG9kID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9wdGlvbnMoKTogU2VydmljZU9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG4gIHNldCBvcHRpb25zKHZhbHVlOiBTZXJ2aWNlT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX29wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgbWV0aG9kOiAodGhpcy5tZXRob2QgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMgPyB0aGlzLm9wdGlvbnMudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU2VydmljZURlc2NyaXB0b3JQcm90byB7fVxuZXhwb3J0IGNsYXNzIE1ldGhvZERlc2NyaXB0b3JQcm90byBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBNZXRob2REZXNjcmlwdG9yUHJvdG8pIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTWV0aG9kRGVzY3JpcHRvclByb3RvLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE1ldGhvZERlc2NyaXB0b3JQcm90bygpO1xuICAgIE1ldGhvZERlc2NyaXB0b3JQcm90by5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTWV0aG9kRGVzY3JpcHRvclByb3RvKSB7XG4gICAgaW5zdGFuY2UubmFtZSA9IGluc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgaW5zdGFuY2UuaW5wdXRUeXBlID0gaW5zdGFuY2UuaW5wdXRUeXBlIHx8ICcnO1xuICAgIGluc3RhbmNlLm91dHB1dFR5cGUgPSBpbnN0YW5jZS5vdXRwdXRUeXBlIHx8ICcnO1xuICAgIGluc3RhbmNlLm9wdGlvbnMgPSBpbnN0YW5jZS5vcHRpb25zIHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5jbGllbnRTdHJlYW1pbmcgPSBpbnN0YW5jZS5jbGllbnRTdHJlYW1pbmcgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2Uuc2VydmVyU3RyZWFtaW5nID0gaW5zdGFuY2Uuc2VydmVyU3RyZWFtaW5nIHx8IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IE1ldGhvZERlc2NyaXB0b3JQcm90byxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuaW5wdXRUeXBlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLm91dHB1dFR5cGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2Uub3B0aW9ucyA9IG5ldyBNZXRob2RPcHRpb25zKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKGluc3RhbmNlLm9wdGlvbnMsIE1ldGhvZE9wdGlvbnMuZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS5jbGllbnRTdHJlYW1pbmcgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGluc3RhbmNlLnNlcnZlclN0cmVhbWluZyA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBNZXRob2REZXNjcmlwdG9yUHJvdG8ucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogTWV0aG9kRGVzY3JpcHRvclByb3RvLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5uYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UubmFtZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5pbnB1dFR5cGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5pbnB1dFR5cGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uub3V0cHV0VHlwZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDMsIGluc3RhbmNlLm91dHB1dFR5cGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uub3B0aW9ucykge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgaW5zdGFuY2Uub3B0aW9ucyBhcyBhbnksXG4gICAgICAgIE1ldGhvZE9wdGlvbnMudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5jbGllbnRTdHJlYW1pbmcpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woNSwgaW5zdGFuY2UuY2xpZW50U3RyZWFtaW5nKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNlcnZlclN0cmVhbWluZykge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCg2LCBpbnN0YW5jZS5zZXJ2ZXJTdHJlYW1pbmcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2lucHV0VHlwZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfb3V0cHV0VHlwZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfb3B0aW9ucz86IE1ldGhvZE9wdGlvbnM7XG4gIHByaXZhdGUgX2NsaWVudFN0cmVhbWluZz86IGJvb2xlYW47XG4gIHByaXZhdGUgX3NlcnZlclN0cmVhbWluZz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBNZXRob2REZXNjcmlwdG9yUHJvdG8gdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxNZXRob2REZXNjcmlwdG9yUHJvdG8+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZS5uYW1lO1xuICAgIHRoaXMuaW5wdXRUeXBlID0gdmFsdWUuaW5wdXRUeXBlO1xuICAgIHRoaXMub3V0cHV0VHlwZSA9IHZhbHVlLm91dHB1dFR5cGU7XG4gICAgdGhpcy5vcHRpb25zID0gdmFsdWUub3B0aW9ucyA/IG5ldyBNZXRob2RPcHRpb25zKHZhbHVlLm9wdGlvbnMpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY2xpZW50U3RyZWFtaW5nID0gdmFsdWUuY2xpZW50U3RyZWFtaW5nO1xuICAgIHRoaXMuc2VydmVyU3RyZWFtaW5nID0gdmFsdWUuc2VydmVyU3RyZWFtaW5nO1xuICAgIE1ldGhvZERlc2NyaXB0b3JQcm90by5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCBpbnB1dFR5cGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRUeXBlO1xuICB9XG4gIHNldCBpbnB1dFR5cGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2lucHV0VHlwZSA9IHZhbHVlO1xuICB9XG4gIGdldCBvdXRwdXRUeXBlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dFR5cGU7XG4gIH1cbiAgc2V0IG91dHB1dFR5cGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX291dHB1dFR5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgb3B0aW9ucygpOiBNZXRob2RPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuICBzZXQgb3B0aW9ucyh2YWx1ZTogTWV0aG9kT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX29wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2xpZW50U3RyZWFtaW5nKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRTdHJlYW1pbmc7XG4gIH1cbiAgc2V0IGNsaWVudFN0cmVhbWluZyh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NsaWVudFN0cmVhbWluZyA9IHZhbHVlO1xuICB9XG4gIGdldCBzZXJ2ZXJTdHJlYW1pbmcoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZlclN0cmVhbWluZztcbiAgfVxuICBzZXQgc2VydmVyU3RyZWFtaW5nKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2VydmVyU3RyZWFtaW5nID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGlucHV0VHlwZTogdGhpcy5pbnB1dFR5cGUsXG4gICAgICBvdXRwdXRUeXBlOiB0aGlzLm91dHB1dFR5cGUsXG4gICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMgPyB0aGlzLm9wdGlvbnMudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGNsaWVudFN0cmVhbWluZzogdGhpcy5jbGllbnRTdHJlYW1pbmcsXG4gICAgICBzZXJ2ZXJTdHJlYW1pbmc6IHRoaXMuc2VydmVyU3RyZWFtaW5nXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBNZXRob2REZXNjcmlwdG9yUHJvdG8ge31cbmV4cG9ydCBjbGFzcyBGaWxlT3B0aW9ucyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBGaWxlT3B0aW9ucykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBGaWxlT3B0aW9ucy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBGaWxlT3B0aW9ucygpO1xuICAgIEZpbGVPcHRpb25zLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBGaWxlT3B0aW9ucykge1xuICAgIGluc3RhbmNlLmphdmFQYWNrYWdlID0gaW5zdGFuY2UuamF2YVBhY2thZ2UgfHwgJyc7XG4gICAgaW5zdGFuY2UuamF2YU91dGVyQ2xhc3NuYW1lID0gaW5zdGFuY2UuamF2YU91dGVyQ2xhc3NuYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLmphdmFNdWx0aXBsZUZpbGVzID0gaW5zdGFuY2UuamF2YU11bHRpcGxlRmlsZXMgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UuamF2YUdlbmVyYXRlRXF1YWxzQW5kSGFzaCA9XG4gICAgICBpbnN0YW5jZS5qYXZhR2VuZXJhdGVFcXVhbHNBbmRIYXNoIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLmphdmFTdHJpbmdDaGVja1V0ZjggPSBpbnN0YW5jZS5qYXZhU3RyaW5nQ2hlY2tVdGY4IHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLm9wdGltaXplRm9yID0gaW5zdGFuY2Uub3B0aW1pemVGb3IgfHwgMDtcbiAgICBpbnN0YW5jZS5nb1BhY2thZ2UgPSBpbnN0YW5jZS5nb1BhY2thZ2UgfHwgJyc7XG4gICAgaW5zdGFuY2UuY2NHZW5lcmljU2VydmljZXMgPSBpbnN0YW5jZS5jY0dlbmVyaWNTZXJ2aWNlcyB8fCBmYWxzZTtcbiAgICBpbnN0YW5jZS5qYXZhR2VuZXJpY1NlcnZpY2VzID0gaW5zdGFuY2UuamF2YUdlbmVyaWNTZXJ2aWNlcyB8fCBmYWxzZTtcbiAgICBpbnN0YW5jZS5weUdlbmVyaWNTZXJ2aWNlcyA9IGluc3RhbmNlLnB5R2VuZXJpY1NlcnZpY2VzIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLnBocEdlbmVyaWNTZXJ2aWNlcyA9IGluc3RhbmNlLnBocEdlbmVyaWNTZXJ2aWNlcyB8fCBmYWxzZTtcbiAgICBpbnN0YW5jZS5kZXByZWNhdGVkID0gaW5zdGFuY2UuZGVwcmVjYXRlZCB8fCBmYWxzZTtcbiAgICBpbnN0YW5jZS5jY0VuYWJsZUFyZW5hcyA9IGluc3RhbmNlLmNjRW5hYmxlQXJlbmFzIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLm9iamNDbGFzc1ByZWZpeCA9IGluc3RhbmNlLm9iamNDbGFzc1ByZWZpeCB8fCAnJztcbiAgICBpbnN0YW5jZS5jc2hhcnBOYW1lc3BhY2UgPSBpbnN0YW5jZS5jc2hhcnBOYW1lc3BhY2UgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc3dpZnRQcmVmaXggPSBpbnN0YW5jZS5zd2lmdFByZWZpeCB8fCAnJztcbiAgICBpbnN0YW5jZS5waHBDbGFzc1ByZWZpeCA9IGluc3RhbmNlLnBocENsYXNzUHJlZml4IHx8ICcnO1xuICAgIGluc3RhbmNlLnBocE5hbWVzcGFjZSA9IGluc3RhbmNlLnBocE5hbWVzcGFjZSB8fCAnJztcbiAgICBpbnN0YW5jZS5waHBNZXRhZGF0YU5hbWVzcGFjZSA9IGluc3RhbmNlLnBocE1ldGFkYXRhTmFtZXNwYWNlIHx8ICcnO1xuICAgIGluc3RhbmNlLnJ1YnlQYWNrYWdlID0gaW5zdGFuY2UucnVieVBhY2thZ2UgfHwgJyc7XG4gICAgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiA9IGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogRmlsZU9wdGlvbnMsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5qYXZhUGFja2FnZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBpbnN0YW5jZS5qYXZhT3V0ZXJDbGFzc25hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIGluc3RhbmNlLmphdmFNdWx0aXBsZUZpbGVzID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgaW5zdGFuY2UuamF2YUdlbmVyYXRlRXF1YWxzQW5kSGFzaCA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgIGluc3RhbmNlLmphdmFTdHJpbmdDaGVja1V0ZjggPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIGluc3RhbmNlLm9wdGltaXplRm9yID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgaW5zdGFuY2UuZ29QYWNrYWdlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICBpbnN0YW5jZS5jY0dlbmVyaWNTZXJ2aWNlcyA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgIGluc3RhbmNlLmphdmFHZW5lcmljU2VydmljZXMgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICBpbnN0YW5jZS5weUdlbmVyaWNTZXJ2aWNlcyA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgIGluc3RhbmNlLnBocEdlbmVyaWNTZXJ2aWNlcyA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgIGluc3RhbmNlLmRlcHJlY2F0ZWQgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICBpbnN0YW5jZS5jY0VuYWJsZUFyZW5hcyA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgIGluc3RhbmNlLm9iamNDbGFzc1ByZWZpeCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgaW5zdGFuY2UuY3NoYXJwTmFtZXNwYWNlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICBpbnN0YW5jZS5zd2lmdFByZWZpeCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgaW5zdGFuY2UucGhwQ2xhc3NQcmVmaXggPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgIGluc3RhbmNlLnBocE5hbWVzcGFjZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgaW5zdGFuY2UucGhwTWV0YWRhdGFOYW1lc3BhY2UgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgIGluc3RhbmNlLnJ1YnlQYWNrYWdlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OTk6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyOTk5ID0gbmV3IFVuaW50ZXJwcmV0ZWRPcHRpb24oKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI5OTksXG4gICAgICAgICAgICBVbmludGVycHJldGVkT3B0aW9uLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS51bmludGVycHJldGVkT3B0aW9uID1cbiAgICAgICAgICAgIGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyOTk5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRmlsZU9wdGlvbnMucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogRmlsZU9wdGlvbnMsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmphdmFQYWNrYWdlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UuamF2YVBhY2thZ2UpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuamF2YU91dGVyQ2xhc3NuYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoOCwgaW5zdGFuY2UuamF2YU91dGVyQ2xhc3NuYW1lKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmphdmFNdWx0aXBsZUZpbGVzKSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDEwLCBpbnN0YW5jZS5qYXZhTXVsdGlwbGVGaWxlcyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5qYXZhR2VuZXJhdGVFcXVhbHNBbmRIYXNoKSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDIwLCBpbnN0YW5jZS5qYXZhR2VuZXJhdGVFcXVhbHNBbmRIYXNoKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmphdmFTdHJpbmdDaGVja1V0ZjgpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMjcsIGluc3RhbmNlLmphdmFTdHJpbmdDaGVja1V0ZjgpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uub3B0aW1pemVGb3IpIHtcbiAgICAgIHdyaXRlci53cml0ZUVudW0oOSwgaW5zdGFuY2Uub3B0aW1pemVGb3IpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZ29QYWNrYWdlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMTEsIGluc3RhbmNlLmdvUGFja2FnZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5jY0dlbmVyaWNTZXJ2aWNlcykge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgxNiwgaW5zdGFuY2UuY2NHZW5lcmljU2VydmljZXMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuamF2YUdlbmVyaWNTZXJ2aWNlcykge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgxNywgaW5zdGFuY2UuamF2YUdlbmVyaWNTZXJ2aWNlcyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5weUdlbmVyaWNTZXJ2aWNlcykge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgxOCwgaW5zdGFuY2UucHlHZW5lcmljU2VydmljZXMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGhwR2VuZXJpY1NlcnZpY2VzKSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDQyLCBpbnN0YW5jZS5waHBHZW5lcmljU2VydmljZXMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZGVwcmVjYXRlZCkge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgyMywgaW5zdGFuY2UuZGVwcmVjYXRlZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5jY0VuYWJsZUFyZW5hcykge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgzMSwgaW5zdGFuY2UuY2NFbmFibGVBcmVuYXMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uub2JqY0NsYXNzUHJlZml4KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMzYsIGluc3RhbmNlLm9iamNDbGFzc1ByZWZpeCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5jc2hhcnBOYW1lc3BhY2UpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygzNywgaW5zdGFuY2UuY3NoYXJwTmFtZXNwYWNlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnN3aWZ0UHJlZml4KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMzksIGluc3RhbmNlLnN3aWZ0UHJlZml4KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBocENsYXNzUHJlZml4KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNDAsIGluc3RhbmNlLnBocENsYXNzUHJlZml4KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBocE5hbWVzcGFjZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDQxLCBpbnN0YW5jZS5waHBOYW1lc3BhY2UpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGhwTWV0YWRhdGFOYW1lc3BhY2UpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg0NCwgaW5zdGFuY2UucGhwTWV0YWRhdGFOYW1lc3BhY2UpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucnVieVBhY2thZ2UpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg0NSwgaW5zdGFuY2UucnVieVBhY2thZ2UpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiAmJiBpbnN0YW5jZS51bmludGVycHJldGVkT3B0aW9uLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICA5OTksXG4gICAgICAgIGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gYXMgYW55LFxuICAgICAgICBVbmludGVycHJldGVkT3B0aW9uLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2phdmFQYWNrYWdlPzogc3RyaW5nO1xuICBwcml2YXRlIF9qYXZhT3V0ZXJDbGFzc25hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2phdmFNdWx0aXBsZUZpbGVzPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfamF2YUdlbmVyYXRlRXF1YWxzQW5kSGFzaD86IGJvb2xlYW47XG4gIHByaXZhdGUgX2phdmFTdHJpbmdDaGVja1V0Zjg/OiBib29sZWFuO1xuICBwcml2YXRlIF9vcHRpbWl6ZUZvcj86IEZpbGVPcHRpb25zLk9wdGltaXplTW9kZTtcbiAgcHJpdmF0ZSBfZ29QYWNrYWdlPzogc3RyaW5nO1xuICBwcml2YXRlIF9jY0dlbmVyaWNTZXJ2aWNlcz86IGJvb2xlYW47XG4gIHByaXZhdGUgX2phdmFHZW5lcmljU2VydmljZXM/OiBib29sZWFuO1xuICBwcml2YXRlIF9weUdlbmVyaWNTZXJ2aWNlcz86IGJvb2xlYW47XG4gIHByaXZhdGUgX3BocEdlbmVyaWNTZXJ2aWNlcz86IGJvb2xlYW47XG4gIHByaXZhdGUgX2RlcHJlY2F0ZWQ/OiBib29sZWFuO1xuICBwcml2YXRlIF9jY0VuYWJsZUFyZW5hcz86IGJvb2xlYW47XG4gIHByaXZhdGUgX29iamNDbGFzc1ByZWZpeD86IHN0cmluZztcbiAgcHJpdmF0ZSBfY3NoYXJwTmFtZXNwYWNlPzogc3RyaW5nO1xuICBwcml2YXRlIF9zd2lmdFByZWZpeD86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGhwQ2xhc3NQcmVmaXg/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3BocE5hbWVzcGFjZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfcGhwTWV0YWRhdGFOYW1lc3BhY2U/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3J1YnlQYWNrYWdlPzogc3RyaW5nO1xuICBwcml2YXRlIF91bmludGVycHJldGVkT3B0aW9uPzogVW5pbnRlcnByZXRlZE9wdGlvbltdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gRmlsZU9wdGlvbnMgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxGaWxlT3B0aW9ucz4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuamF2YVBhY2thZ2UgPSB2YWx1ZS5qYXZhUGFja2FnZTtcbiAgICB0aGlzLmphdmFPdXRlckNsYXNzbmFtZSA9IHZhbHVlLmphdmFPdXRlckNsYXNzbmFtZTtcbiAgICB0aGlzLmphdmFNdWx0aXBsZUZpbGVzID0gdmFsdWUuamF2YU11bHRpcGxlRmlsZXM7XG4gICAgdGhpcy5qYXZhR2VuZXJhdGVFcXVhbHNBbmRIYXNoID0gdmFsdWUuamF2YUdlbmVyYXRlRXF1YWxzQW5kSGFzaDtcbiAgICB0aGlzLmphdmFTdHJpbmdDaGVja1V0ZjggPSB2YWx1ZS5qYXZhU3RyaW5nQ2hlY2tVdGY4O1xuICAgIHRoaXMub3B0aW1pemVGb3IgPSB2YWx1ZS5vcHRpbWl6ZUZvcjtcbiAgICB0aGlzLmdvUGFja2FnZSA9IHZhbHVlLmdvUGFja2FnZTtcbiAgICB0aGlzLmNjR2VuZXJpY1NlcnZpY2VzID0gdmFsdWUuY2NHZW5lcmljU2VydmljZXM7XG4gICAgdGhpcy5qYXZhR2VuZXJpY1NlcnZpY2VzID0gdmFsdWUuamF2YUdlbmVyaWNTZXJ2aWNlcztcbiAgICB0aGlzLnB5R2VuZXJpY1NlcnZpY2VzID0gdmFsdWUucHlHZW5lcmljU2VydmljZXM7XG4gICAgdGhpcy5waHBHZW5lcmljU2VydmljZXMgPSB2YWx1ZS5waHBHZW5lcmljU2VydmljZXM7XG4gICAgdGhpcy5kZXByZWNhdGVkID0gdmFsdWUuZGVwcmVjYXRlZDtcbiAgICB0aGlzLmNjRW5hYmxlQXJlbmFzID0gdmFsdWUuY2NFbmFibGVBcmVuYXM7XG4gICAgdGhpcy5vYmpjQ2xhc3NQcmVmaXggPSB2YWx1ZS5vYmpjQ2xhc3NQcmVmaXg7XG4gICAgdGhpcy5jc2hhcnBOYW1lc3BhY2UgPSB2YWx1ZS5jc2hhcnBOYW1lc3BhY2U7XG4gICAgdGhpcy5zd2lmdFByZWZpeCA9IHZhbHVlLnN3aWZ0UHJlZml4O1xuICAgIHRoaXMucGhwQ2xhc3NQcmVmaXggPSB2YWx1ZS5waHBDbGFzc1ByZWZpeDtcbiAgICB0aGlzLnBocE5hbWVzcGFjZSA9IHZhbHVlLnBocE5hbWVzcGFjZTtcbiAgICB0aGlzLnBocE1ldGFkYXRhTmFtZXNwYWNlID0gdmFsdWUucGhwTWV0YWRhdGFOYW1lc3BhY2U7XG4gICAgdGhpcy5ydWJ5UGFja2FnZSA9IHZhbHVlLnJ1YnlQYWNrYWdlO1xuICAgIHRoaXMudW5pbnRlcnByZXRlZE9wdGlvbiA9ICh2YWx1ZS51bmludGVycHJldGVkT3B0aW9uIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBVbmludGVycHJldGVkT3B0aW9uKG0pXG4gICAgKTtcbiAgICBGaWxlT3B0aW9ucy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGphdmFQYWNrYWdlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2phdmFQYWNrYWdlO1xuICB9XG4gIHNldCBqYXZhUGFja2FnZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5famF2YVBhY2thZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgamF2YU91dGVyQ2xhc3NuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2phdmFPdXRlckNsYXNzbmFtZTtcbiAgfVxuICBzZXQgamF2YU91dGVyQ2xhc3NuYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9qYXZhT3V0ZXJDbGFzc25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgamF2YU11bHRpcGxlRmlsZXMoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2phdmFNdWx0aXBsZUZpbGVzO1xuICB9XG4gIHNldCBqYXZhTXVsdGlwbGVGaWxlcyh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2phdmFNdWx0aXBsZUZpbGVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGphdmFHZW5lcmF0ZUVxdWFsc0FuZEhhc2goKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2phdmFHZW5lcmF0ZUVxdWFsc0FuZEhhc2g7XG4gIH1cbiAgc2V0IGphdmFHZW5lcmF0ZUVxdWFsc0FuZEhhc2godmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9qYXZhR2VuZXJhdGVFcXVhbHNBbmRIYXNoID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGphdmFTdHJpbmdDaGVja1V0ZjgoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2phdmFTdHJpbmdDaGVja1V0Zjg7XG4gIH1cbiAgc2V0IGphdmFTdHJpbmdDaGVja1V0ZjgodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9qYXZhU3RyaW5nQ2hlY2tVdGY4ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9wdGltaXplRm9yKCk6IEZpbGVPcHRpb25zLk9wdGltaXplTW9kZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGltaXplRm9yO1xuICB9XG4gIHNldCBvcHRpbWl6ZUZvcih2YWx1ZTogRmlsZU9wdGlvbnMuT3B0aW1pemVNb2RlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fb3B0aW1pemVGb3IgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZ29QYWNrYWdlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2dvUGFja2FnZTtcbiAgfVxuICBzZXQgZ29QYWNrYWdlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9nb1BhY2thZ2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgY2NHZW5lcmljU2VydmljZXMoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NjR2VuZXJpY1NlcnZpY2VzO1xuICB9XG4gIHNldCBjY0dlbmVyaWNTZXJ2aWNlcyh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NjR2VuZXJpY1NlcnZpY2VzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGphdmFHZW5lcmljU2VydmljZXMoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2phdmFHZW5lcmljU2VydmljZXM7XG4gIH1cbiAgc2V0IGphdmFHZW5lcmljU2VydmljZXModmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9qYXZhR2VuZXJpY1NlcnZpY2VzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHB5R2VuZXJpY1NlcnZpY2VzKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9weUdlbmVyaWNTZXJ2aWNlcztcbiAgfVxuICBzZXQgcHlHZW5lcmljU2VydmljZXModmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9weUdlbmVyaWNTZXJ2aWNlcyA9IHZhbHVlO1xuICB9XG4gIGdldCBwaHBHZW5lcmljU2VydmljZXMoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BocEdlbmVyaWNTZXJ2aWNlcztcbiAgfVxuICBzZXQgcGhwR2VuZXJpY1NlcnZpY2VzKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGhwR2VuZXJpY1NlcnZpY2VzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlcHJlY2F0ZWQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RlcHJlY2F0ZWQ7XG4gIH1cbiAgc2V0IGRlcHJlY2F0ZWQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZXByZWNhdGVkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNjRW5hYmxlQXJlbmFzKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jY0VuYWJsZUFyZW5hcztcbiAgfVxuICBzZXQgY2NFbmFibGVBcmVuYXModmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jY0VuYWJsZUFyZW5hcyA9IHZhbHVlO1xuICB9XG4gIGdldCBvYmpjQ2xhc3NQcmVmaXgoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqY0NsYXNzUHJlZml4O1xuICB9XG4gIHNldCBvYmpjQ2xhc3NQcmVmaXgodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX29iamNDbGFzc1ByZWZpeCA9IHZhbHVlO1xuICB9XG4gIGdldCBjc2hhcnBOYW1lc3BhY2UoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY3NoYXJwTmFtZXNwYWNlO1xuICB9XG4gIHNldCBjc2hhcnBOYW1lc3BhY2UodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NzaGFycE5hbWVzcGFjZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzd2lmdFByZWZpeCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zd2lmdFByZWZpeDtcbiAgfVxuICBzZXQgc3dpZnRQcmVmaXgodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N3aWZ0UHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBocENsYXNzUHJlZml4KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BocENsYXNzUHJlZml4O1xuICB9XG4gIHNldCBwaHBDbGFzc1ByZWZpeCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGhwQ2xhc3NQcmVmaXggPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGhwTmFtZXNwYWNlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BocE5hbWVzcGFjZTtcbiAgfVxuICBzZXQgcGhwTmFtZXNwYWNlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waHBOYW1lc3BhY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGhwTWV0YWRhdGFOYW1lc3BhY2UoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGhwTWV0YWRhdGFOYW1lc3BhY2U7XG4gIH1cbiAgc2V0IHBocE1ldGFkYXRhTmFtZXNwYWNlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9waHBNZXRhZGF0YU5hbWVzcGFjZSA9IHZhbHVlO1xuICB9XG4gIGdldCBydWJ5UGFja2FnZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ydWJ5UGFja2FnZTtcbiAgfVxuICBzZXQgcnVieVBhY2thZ2UodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3J1YnlQYWNrYWdlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVuaW50ZXJwcmV0ZWRPcHRpb24oKTogVW5pbnRlcnByZXRlZE9wdGlvbltdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pbnRlcnByZXRlZE9wdGlvbjtcbiAgfVxuICBzZXQgdW5pbnRlcnByZXRlZE9wdGlvbih2YWx1ZTogVW5pbnRlcnByZXRlZE9wdGlvbltdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdW5pbnRlcnByZXRlZE9wdGlvbiA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBqYXZhUGFja2FnZTogdGhpcy5qYXZhUGFja2FnZSxcbiAgICAgIGphdmFPdXRlckNsYXNzbmFtZTogdGhpcy5qYXZhT3V0ZXJDbGFzc25hbWUsXG4gICAgICBqYXZhTXVsdGlwbGVGaWxlczogdGhpcy5qYXZhTXVsdGlwbGVGaWxlcyxcbiAgICAgIGphdmFHZW5lcmF0ZUVxdWFsc0FuZEhhc2g6IHRoaXMuamF2YUdlbmVyYXRlRXF1YWxzQW5kSGFzaCxcbiAgICAgIGphdmFTdHJpbmdDaGVja1V0Zjg6IHRoaXMuamF2YVN0cmluZ0NoZWNrVXRmOCxcbiAgICAgIG9wdGltaXplRm9yOiB0aGlzLm9wdGltaXplRm9yLFxuICAgICAgZ29QYWNrYWdlOiB0aGlzLmdvUGFja2FnZSxcbiAgICAgIGNjR2VuZXJpY1NlcnZpY2VzOiB0aGlzLmNjR2VuZXJpY1NlcnZpY2VzLFxuICAgICAgamF2YUdlbmVyaWNTZXJ2aWNlczogdGhpcy5qYXZhR2VuZXJpY1NlcnZpY2VzLFxuICAgICAgcHlHZW5lcmljU2VydmljZXM6IHRoaXMucHlHZW5lcmljU2VydmljZXMsXG4gICAgICBwaHBHZW5lcmljU2VydmljZXM6IHRoaXMucGhwR2VuZXJpY1NlcnZpY2VzLFxuICAgICAgZGVwcmVjYXRlZDogdGhpcy5kZXByZWNhdGVkLFxuICAgICAgY2NFbmFibGVBcmVuYXM6IHRoaXMuY2NFbmFibGVBcmVuYXMsXG4gICAgICBvYmpjQ2xhc3NQcmVmaXg6IHRoaXMub2JqY0NsYXNzUHJlZml4LFxuICAgICAgY3NoYXJwTmFtZXNwYWNlOiB0aGlzLmNzaGFycE5hbWVzcGFjZSxcbiAgICAgIHN3aWZ0UHJlZml4OiB0aGlzLnN3aWZ0UHJlZml4LFxuICAgICAgcGhwQ2xhc3NQcmVmaXg6IHRoaXMucGhwQ2xhc3NQcmVmaXgsXG4gICAgICBwaHBOYW1lc3BhY2U6IHRoaXMucGhwTmFtZXNwYWNlLFxuICAgICAgcGhwTWV0YWRhdGFOYW1lc3BhY2U6IHRoaXMucGhwTWV0YWRhdGFOYW1lc3BhY2UsXG4gICAgICBydWJ5UGFja2FnZTogdGhpcy5ydWJ5UGFja2FnZSxcbiAgICAgIHVuaW50ZXJwcmV0ZWRPcHRpb246ICh0aGlzLnVuaW50ZXJwcmV0ZWRPcHRpb24gfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9PYmplY3QoKVxuICAgICAgKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRmlsZU9wdGlvbnMge1xuICBleHBvcnQgZW51bSBPcHRpbWl6ZU1vZGUge1xuICAgIHNwZWVkID0gMSxcbiAgICBjb2RlU2l6ZSA9IDIsXG4gICAgbGl0ZVJ1bnRpbWUgPSAzXG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXNzYWdlT3B0aW9ucyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBNZXNzYWdlT3B0aW9ucykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBNZXNzYWdlT3B0aW9ucy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBNZXNzYWdlT3B0aW9ucygpO1xuICAgIE1lc3NhZ2VPcHRpb25zLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBNZXNzYWdlT3B0aW9ucykge1xuICAgIGluc3RhbmNlLm1lc3NhZ2VTZXRXaXJlRm9ybWF0ID0gaW5zdGFuY2UubWVzc2FnZVNldFdpcmVGb3JtYXQgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2Uubm9TdGFuZGFyZERlc2NyaXB0b3JBY2Nlc3NvciA9XG4gICAgICBpbnN0YW5jZS5ub1N0YW5kYXJkRGVzY3JpcHRvckFjY2Vzc29yIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLmRlcHJlY2F0ZWQgPSBpbnN0YW5jZS5kZXByZWNhdGVkIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLm1hcEVudHJ5ID0gaW5zdGFuY2UubWFwRW50cnkgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiA9IGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogTWVzc2FnZU9wdGlvbnMsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5tZXNzYWdlU2V0V2lyZUZvcm1hdCA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2Uubm9TdGFuZGFyZERlc2NyaXB0b3JBY2Nlc3NvciA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuZGVwcmVjYXRlZCA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgaW5zdGFuY2UubWFwRW50cnkgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OTk6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyOTk5ID0gbmV3IFVuaW50ZXJwcmV0ZWRPcHRpb24oKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI5OTksXG4gICAgICAgICAgICBVbmludGVycHJldGVkT3B0aW9uLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS51bmludGVycHJldGVkT3B0aW9uID1cbiAgICAgICAgICAgIGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyOTk5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTWVzc2FnZU9wdGlvbnMucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogTWVzc2FnZU9wdGlvbnMsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLm1lc3NhZ2VTZXRXaXJlRm9ybWF0KSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDEsIGluc3RhbmNlLm1lc3NhZ2VTZXRXaXJlRm9ybWF0KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm5vU3RhbmRhcmREZXNjcmlwdG9yQWNjZXNzb3IpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMiwgaW5zdGFuY2Uubm9TdGFuZGFyZERlc2NyaXB0b3JBY2Nlc3Nvcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5kZXByZWNhdGVkKSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDMsIGluc3RhbmNlLmRlcHJlY2F0ZWQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubWFwRW50cnkpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woNywgaW5zdGFuY2UubWFwRW50cnkpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiAmJiBpbnN0YW5jZS51bmludGVycHJldGVkT3B0aW9uLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICA5OTksXG4gICAgICAgIGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gYXMgYW55LFxuICAgICAgICBVbmludGVycHJldGVkT3B0aW9uLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21lc3NhZ2VTZXRXaXJlRm9ybWF0PzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbm9TdGFuZGFyZERlc2NyaXB0b3JBY2Nlc3Nvcj86IGJvb2xlYW47XG4gIHByaXZhdGUgX2RlcHJlY2F0ZWQ/OiBib29sZWFuO1xuICBwcml2YXRlIF9tYXBFbnRyeT86IGJvb2xlYW47XG4gIHByaXZhdGUgX3VuaW50ZXJwcmV0ZWRPcHRpb24/OiBVbmludGVycHJldGVkT3B0aW9uW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBNZXNzYWdlT3B0aW9ucyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE1lc3NhZ2VPcHRpb25zPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5tZXNzYWdlU2V0V2lyZUZvcm1hdCA9IHZhbHVlLm1lc3NhZ2VTZXRXaXJlRm9ybWF0O1xuICAgIHRoaXMubm9TdGFuZGFyZERlc2NyaXB0b3JBY2Nlc3NvciA9IHZhbHVlLm5vU3RhbmRhcmREZXNjcmlwdG9yQWNjZXNzb3I7XG4gICAgdGhpcy5kZXByZWNhdGVkID0gdmFsdWUuZGVwcmVjYXRlZDtcbiAgICB0aGlzLm1hcEVudHJ5ID0gdmFsdWUubWFwRW50cnk7XG4gICAgdGhpcy51bmludGVycHJldGVkT3B0aW9uID0gKHZhbHVlLnVuaW50ZXJwcmV0ZWRPcHRpb24gfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IFVuaW50ZXJwcmV0ZWRPcHRpb24obSlcbiAgICApO1xuICAgIE1lc3NhZ2VPcHRpb25zLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbWVzc2FnZVNldFdpcmVGb3JtYXQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VTZXRXaXJlRm9ybWF0O1xuICB9XG4gIHNldCBtZXNzYWdlU2V0V2lyZUZvcm1hdCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX21lc3NhZ2VTZXRXaXJlRm9ybWF0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5vU3RhbmRhcmREZXNjcmlwdG9yQWNjZXNzb3IoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vU3RhbmRhcmREZXNjcmlwdG9yQWNjZXNzb3I7XG4gIH1cbiAgc2V0IG5vU3RhbmRhcmREZXNjcmlwdG9yQWNjZXNzb3IodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9ub1N0YW5kYXJkRGVzY3JpcHRvckFjY2Vzc29yID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlcHJlY2F0ZWQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2RlcHJlY2F0ZWQ7XG4gIH1cbiAgc2V0IGRlcHJlY2F0ZWQodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZXByZWNhdGVkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG1hcEVudHJ5KCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tYXBFbnRyeTtcbiAgfVxuICBzZXQgbWFwRW50cnkodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9tYXBFbnRyeSA9IHZhbHVlO1xuICB9XG4gIGdldCB1bmludGVycHJldGVkT3B0aW9uKCk6IFVuaW50ZXJwcmV0ZWRPcHRpb25bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaW50ZXJwcmV0ZWRPcHRpb247XG4gIH1cbiAgc2V0IHVuaW50ZXJwcmV0ZWRPcHRpb24odmFsdWU6IFVuaW50ZXJwcmV0ZWRPcHRpb25bXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VuaW50ZXJwcmV0ZWRPcHRpb24gPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZVNldFdpcmVGb3JtYXQ6IHRoaXMubWVzc2FnZVNldFdpcmVGb3JtYXQsXG4gICAgICBub1N0YW5kYXJkRGVzY3JpcHRvckFjY2Vzc29yOiB0aGlzLm5vU3RhbmRhcmREZXNjcmlwdG9yQWNjZXNzb3IsXG4gICAgICBkZXByZWNhdGVkOiB0aGlzLmRlcHJlY2F0ZWQsXG4gICAgICBtYXBFbnRyeTogdGhpcy5tYXBFbnRyeSxcbiAgICAgIHVuaW50ZXJwcmV0ZWRPcHRpb246ICh0aGlzLnVuaW50ZXJwcmV0ZWRPcHRpb24gfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9PYmplY3QoKVxuICAgICAgKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTWVzc2FnZU9wdGlvbnMge31cbmV4cG9ydCBjbGFzcyBGaWVsZE9wdGlvbnMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogRmllbGRPcHRpb25zKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEZpZWxkT3B0aW9ucy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBGaWVsZE9wdGlvbnMoKTtcbiAgICBGaWVsZE9wdGlvbnMuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEZpZWxkT3B0aW9ucykge1xuICAgIGluc3RhbmNlLmN0eXBlID0gaW5zdGFuY2UuY3R5cGUgfHwgMDtcbiAgICBpbnN0YW5jZS5wYWNrZWQgPSBpbnN0YW5jZS5wYWNrZWQgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UuanN0eXBlID0gaW5zdGFuY2UuanN0eXBlIHx8IDA7XG4gICAgaW5zdGFuY2UubGF6eSA9IGluc3RhbmNlLmxhenkgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UuZGVwcmVjYXRlZCA9IGluc3RhbmNlLmRlcHJlY2F0ZWQgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2Uud2VhayA9IGluc3RhbmNlLndlYWsgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiA9IGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogRmllbGRPcHRpb25zLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuY3R5cGUgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnBhY2tlZCA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgaW5zdGFuY2UuanN0eXBlID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS5sYXp5ID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5kZXByZWNhdGVkID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgaW5zdGFuY2Uud2VhayA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk5OTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXI5OTkgPSBuZXcgVW5pbnRlcnByZXRlZE9wdGlvbigpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjk5OSxcbiAgICAgICAgICAgIFVuaW50ZXJwcmV0ZWRPcHRpb24uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gPVxuICAgICAgICAgICAgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXI5OTkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBGaWVsZE9wdGlvbnMucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogRmllbGRPcHRpb25zLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5jdHlwZSkge1xuICAgICAgd3JpdGVyLndyaXRlRW51bSgxLCBpbnN0YW5jZS5jdHlwZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wYWNrZWQpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMiwgaW5zdGFuY2UucGFja2VkKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmpzdHlwZSkge1xuICAgICAgd3JpdGVyLndyaXRlRW51bSg2LCBpbnN0YW5jZS5qc3R5cGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGF6eSkge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCg1LCBpbnN0YW5jZS5sYXp5KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRlcHJlY2F0ZWQpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMywgaW5zdGFuY2UuZGVwcmVjYXRlZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS53ZWFrKSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDEwLCBpbnN0YW5jZS53ZWFrKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gJiYgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbi5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgOTk5LFxuICAgICAgICBpbnN0YW5jZS51bmludGVycHJldGVkT3B0aW9uIGFzIGFueSxcbiAgICAgICAgVW5pbnRlcnByZXRlZE9wdGlvbi50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jdHlwZT86IEZpZWxkT3B0aW9ucy5DVHlwZTtcbiAgcHJpdmF0ZSBfcGFja2VkPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfanN0eXBlPzogRmllbGRPcHRpb25zLkpTVHlwZTtcbiAgcHJpdmF0ZSBfbGF6eT86IGJvb2xlYW47XG4gIHByaXZhdGUgX2RlcHJlY2F0ZWQ/OiBib29sZWFuO1xuICBwcml2YXRlIF93ZWFrPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdW5pbnRlcnByZXRlZE9wdGlvbj86IFVuaW50ZXJwcmV0ZWRPcHRpb25bXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEZpZWxkT3B0aW9ucyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEZpZWxkT3B0aW9ucz4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuY3R5cGUgPSB2YWx1ZS5jdHlwZTtcbiAgICB0aGlzLnBhY2tlZCA9IHZhbHVlLnBhY2tlZDtcbiAgICB0aGlzLmpzdHlwZSA9IHZhbHVlLmpzdHlwZTtcbiAgICB0aGlzLmxhenkgPSB2YWx1ZS5sYXp5O1xuICAgIHRoaXMuZGVwcmVjYXRlZCA9IHZhbHVlLmRlcHJlY2F0ZWQ7XG4gICAgdGhpcy53ZWFrID0gdmFsdWUud2VhaztcbiAgICB0aGlzLnVuaW50ZXJwcmV0ZWRPcHRpb24gPSAodmFsdWUudW5pbnRlcnByZXRlZE9wdGlvbiB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgVW5pbnRlcnByZXRlZE9wdGlvbihtKVxuICAgICk7XG4gICAgRmllbGRPcHRpb25zLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgY3R5cGUoKTogRmllbGRPcHRpb25zLkNUeXBlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY3R5cGU7XG4gIH1cbiAgc2V0IGN0eXBlKHZhbHVlOiBGaWVsZE9wdGlvbnMuQ1R5cGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jdHlwZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwYWNrZWQoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhY2tlZDtcbiAgfVxuICBzZXQgcGFja2VkKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFja2VkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGpzdHlwZSgpOiBGaWVsZE9wdGlvbnMuSlNUeXBlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fanN0eXBlO1xuICB9XG4gIHNldCBqc3R5cGUodmFsdWU6IEZpZWxkT3B0aW9ucy5KU1R5cGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9qc3R5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGF6eSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGF6eTtcbiAgfVxuICBzZXQgbGF6eSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhenkgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVwcmVjYXRlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGVwcmVjYXRlZDtcbiAgfVxuICBzZXQgZGVwcmVjYXRlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RlcHJlY2F0ZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgd2VhaygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd2VhaztcbiAgfVxuICBzZXQgd2Vhayh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3dlYWsgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdW5pbnRlcnByZXRlZE9wdGlvbigpOiBVbmludGVycHJldGVkT3B0aW9uW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91bmludGVycHJldGVkT3B0aW9uO1xuICB9XG4gIHNldCB1bmludGVycHJldGVkT3B0aW9uKHZhbHVlOiBVbmludGVycHJldGVkT3B0aW9uW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91bmludGVycHJldGVkT3B0aW9uID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN0eXBlOiB0aGlzLmN0eXBlLFxuICAgICAgcGFja2VkOiB0aGlzLnBhY2tlZCxcbiAgICAgIGpzdHlwZTogdGhpcy5qc3R5cGUsXG4gICAgICBsYXp5OiB0aGlzLmxhenksXG4gICAgICBkZXByZWNhdGVkOiB0aGlzLmRlcHJlY2F0ZWQsXG4gICAgICB3ZWFrOiB0aGlzLndlYWssXG4gICAgICB1bmludGVycHJldGVkT3B0aW9uOiAodGhpcy51bmludGVycHJldGVkT3B0aW9uIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvT2JqZWN0KClcbiAgICAgIClcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEZpZWxkT3B0aW9ucyB7XG4gIGV4cG9ydCBlbnVtIENUeXBlIHtcbiAgICBzdHJpbmcgPSAwLFxuICAgIGNvcmQgPSAxLFxuICAgIHN0cmluZ1BpZWNlID0gMlxuICB9XG4gIGV4cG9ydCBlbnVtIEpTVHlwZSB7XG4gICAganNOb3JtYWwgPSAwLFxuICAgIGpzU3RyaW5nID0gMSxcbiAgICBqc051bWJlciA9IDJcbiAgfVxufVxuZXhwb3J0IGNsYXNzIE9uZW9mT3B0aW9ucyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBPbmVvZk9wdGlvbnMpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgT25lb2ZPcHRpb25zLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE9uZW9mT3B0aW9ucygpO1xuICAgIE9uZW9mT3B0aW9ucy5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogT25lb2ZPcHRpb25zKSB7XG4gICAgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiA9IGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogT25lb2ZPcHRpb25zLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDk5OTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXI5OTkgPSBuZXcgVW5pbnRlcnByZXRlZE9wdGlvbigpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjk5OSxcbiAgICAgICAgICAgIFVuaW50ZXJwcmV0ZWRPcHRpb24uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gPVxuICAgICAgICAgICAgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXI5OTkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPbmVvZk9wdGlvbnMucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogT25lb2ZPcHRpb25zLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS51bmludGVycHJldGVkT3B0aW9uICYmIGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24ubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDk5OSxcbiAgICAgICAgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiBhcyBhbnksXG4gICAgICAgIFVuaW50ZXJwcmV0ZWRPcHRpb24udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdW5pbnRlcnByZXRlZE9wdGlvbj86IFVuaW50ZXJwcmV0ZWRPcHRpb25bXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIE9uZW9mT3B0aW9ucyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE9uZW9mT3B0aW9ucz4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMudW5pbnRlcnByZXRlZE9wdGlvbiA9ICh2YWx1ZS51bmludGVycHJldGVkT3B0aW9uIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBVbmludGVycHJldGVkT3B0aW9uKG0pXG4gICAgKTtcbiAgICBPbmVvZk9wdGlvbnMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB1bmludGVycHJldGVkT3B0aW9uKCk6IFVuaW50ZXJwcmV0ZWRPcHRpb25bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaW50ZXJwcmV0ZWRPcHRpb247XG4gIH1cbiAgc2V0IHVuaW50ZXJwcmV0ZWRPcHRpb24odmFsdWU6IFVuaW50ZXJwcmV0ZWRPcHRpb25bXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VuaW50ZXJwcmV0ZWRPcHRpb24gPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdW5pbnRlcnByZXRlZE9wdGlvbjogKHRoaXMudW5pbnRlcnByZXRlZE9wdGlvbiB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b09iamVjdCgpXG4gICAgICApXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBPbmVvZk9wdGlvbnMge31cbmV4cG9ydCBjbGFzcyBFbnVtT3B0aW9ucyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBFbnVtT3B0aW9ucykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBFbnVtT3B0aW9ucy50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBFbnVtT3B0aW9ucygpO1xuICAgIEVudW1PcHRpb25zLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBFbnVtT3B0aW9ucykge1xuICAgIGluc3RhbmNlLmFsbG93QWxpYXMgPSBpbnN0YW5jZS5hbGxvd0FsaWFzIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLmRlcHJlY2F0ZWQgPSBpbnN0YW5jZS5kZXByZWNhdGVkIHx8IGZhbHNlO1xuICAgIGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gPSBpbnN0YW5jZS51bmludGVycHJldGVkT3B0aW9uIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEVudW1PcHRpb25zLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuYWxsb3dBbGlhcyA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuZGVwcmVjYXRlZCA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk5OTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXI5OTkgPSBuZXcgVW5pbnRlcnByZXRlZE9wdGlvbigpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjk5OSxcbiAgICAgICAgICAgIFVuaW50ZXJwcmV0ZWRPcHRpb24uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gPVxuICAgICAgICAgICAgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXI5OTkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFbnVtT3B0aW9ucy5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBFbnVtT3B0aW9ucywgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuYWxsb3dBbGlhcykge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgyLCBpbnN0YW5jZS5hbGxvd0FsaWFzKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRlcHJlY2F0ZWQpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMywgaW5zdGFuY2UuZGVwcmVjYXRlZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS51bmludGVycHJldGVkT3B0aW9uICYmIGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24ubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDk5OSxcbiAgICAgICAgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiBhcyBhbnksXG4gICAgICAgIFVuaW50ZXJwcmV0ZWRPcHRpb24udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWxsb3dBbGlhcz86IGJvb2xlYW47XG4gIHByaXZhdGUgX2RlcHJlY2F0ZWQ/OiBib29sZWFuO1xuICBwcml2YXRlIF91bmludGVycHJldGVkT3B0aW9uPzogVW5pbnRlcnByZXRlZE9wdGlvbltdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gRW51bU9wdGlvbnMgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxFbnVtT3B0aW9ucz4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYWxsb3dBbGlhcyA9IHZhbHVlLmFsbG93QWxpYXM7XG4gICAgdGhpcy5kZXByZWNhdGVkID0gdmFsdWUuZGVwcmVjYXRlZDtcbiAgICB0aGlzLnVuaW50ZXJwcmV0ZWRPcHRpb24gPSAodmFsdWUudW5pbnRlcnByZXRlZE9wdGlvbiB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgVW5pbnRlcnByZXRlZE9wdGlvbihtKVxuICAgICk7XG4gICAgRW51bU9wdGlvbnMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBhbGxvd0FsaWFzKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0FsaWFzO1xuICB9XG4gIHNldCBhbGxvd0FsaWFzKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYWxsb3dBbGlhcyA9IHZhbHVlO1xuICB9XG4gIGdldCBkZXByZWNhdGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kZXByZWNhdGVkO1xuICB9XG4gIHNldCBkZXByZWNhdGVkKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGVwcmVjYXRlZCA9IHZhbHVlO1xuICB9XG4gIGdldCB1bmludGVycHJldGVkT3B0aW9uKCk6IFVuaW50ZXJwcmV0ZWRPcHRpb25bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaW50ZXJwcmV0ZWRPcHRpb247XG4gIH1cbiAgc2V0IHVuaW50ZXJwcmV0ZWRPcHRpb24odmFsdWU6IFVuaW50ZXJwcmV0ZWRPcHRpb25bXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VuaW50ZXJwcmV0ZWRPcHRpb24gPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxsb3dBbGlhczogdGhpcy5hbGxvd0FsaWFzLFxuICAgICAgZGVwcmVjYXRlZDogdGhpcy5kZXByZWNhdGVkLFxuICAgICAgdW5pbnRlcnByZXRlZE9wdGlvbjogKHRoaXMudW5pbnRlcnByZXRlZE9wdGlvbiB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b09iamVjdCgpXG4gICAgICApXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBFbnVtT3B0aW9ucyB7fVxuZXhwb3J0IGNsYXNzIEVudW1WYWx1ZU9wdGlvbnMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogRW51bVZhbHVlT3B0aW9ucykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBFbnVtVmFsdWVPcHRpb25zLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEVudW1WYWx1ZU9wdGlvbnMoKTtcbiAgICBFbnVtVmFsdWVPcHRpb25zLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBFbnVtVmFsdWVPcHRpb25zKSB7XG4gICAgaW5zdGFuY2UuZGVwcmVjYXRlZCA9IGluc3RhbmNlLmRlcHJlY2F0ZWQgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiA9IGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogRW51bVZhbHVlT3B0aW9ucywgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmRlcHJlY2F0ZWQgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OTk6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyOTk5ID0gbmV3IFVuaW50ZXJwcmV0ZWRPcHRpb24oKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXI5OTksXG4gICAgICAgICAgICBVbmludGVycHJldGVkT3B0aW9uLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS51bmludGVycHJldGVkT3B0aW9uID1cbiAgICAgICAgICAgIGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyOTk5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRW51bVZhbHVlT3B0aW9ucy5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBFbnVtVmFsdWVPcHRpb25zLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5kZXByZWNhdGVkKSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDEsIGluc3RhbmNlLmRlcHJlY2F0ZWQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiAmJiBpbnN0YW5jZS51bmludGVycHJldGVkT3B0aW9uLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICA5OTksXG4gICAgICAgIGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gYXMgYW55LFxuICAgICAgICBVbmludGVycHJldGVkT3B0aW9uLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RlcHJlY2F0ZWQ/OiBib29sZWFuO1xuICBwcml2YXRlIF91bmludGVycHJldGVkT3B0aW9uPzogVW5pbnRlcnByZXRlZE9wdGlvbltdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gRW51bVZhbHVlT3B0aW9ucyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEVudW1WYWx1ZU9wdGlvbnM+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmRlcHJlY2F0ZWQgPSB2YWx1ZS5kZXByZWNhdGVkO1xuICAgIHRoaXMudW5pbnRlcnByZXRlZE9wdGlvbiA9ICh2YWx1ZS51bmludGVycHJldGVkT3B0aW9uIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBVbmludGVycHJldGVkT3B0aW9uKG0pXG4gICAgKTtcbiAgICBFbnVtVmFsdWVPcHRpb25zLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZGVwcmVjYXRlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGVwcmVjYXRlZDtcbiAgfVxuICBzZXQgZGVwcmVjYXRlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RlcHJlY2F0ZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdW5pbnRlcnByZXRlZE9wdGlvbigpOiBVbmludGVycHJldGVkT3B0aW9uW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91bmludGVycHJldGVkT3B0aW9uO1xuICB9XG4gIHNldCB1bmludGVycHJldGVkT3B0aW9uKHZhbHVlOiBVbmludGVycHJldGVkT3B0aW9uW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl91bmludGVycHJldGVkT3B0aW9uID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlcHJlY2F0ZWQ6IHRoaXMuZGVwcmVjYXRlZCxcbiAgICAgIHVuaW50ZXJwcmV0ZWRPcHRpb246ICh0aGlzLnVuaW50ZXJwcmV0ZWRPcHRpb24gfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9PYmplY3QoKVxuICAgICAgKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRW51bVZhbHVlT3B0aW9ucyB7fVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VPcHRpb25zIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFNlcnZpY2VPcHRpb25zKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFNlcnZpY2VPcHRpb25zLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNlcnZpY2VPcHRpb25zKCk7XG4gICAgU2VydmljZU9wdGlvbnMuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFNlcnZpY2VPcHRpb25zKSB7XG4gICAgaW5zdGFuY2UuZGVwcmVjYXRlZCA9IGluc3RhbmNlLmRlcHJlY2F0ZWQgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiA9IGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogU2VydmljZU9wdGlvbnMsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgaW5zdGFuY2UuZGVwcmVjYXRlZCA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk5OTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXI5OTkgPSBuZXcgVW5pbnRlcnByZXRlZE9wdGlvbigpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjk5OSxcbiAgICAgICAgICAgIFVuaW50ZXJwcmV0ZWRPcHRpb24uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gPVxuICAgICAgICAgICAgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiB8fCBbXSkucHVzaChtZXNzYWdlSW5pdGlhbGl6ZXI5OTkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTZXJ2aWNlT3B0aW9ucy5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBTZXJ2aWNlT3B0aW9ucywgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuZGVwcmVjYXRlZCkge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgzMywgaW5zdGFuY2UuZGVwcmVjYXRlZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS51bmludGVycHJldGVkT3B0aW9uICYmIGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24ubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDk5OSxcbiAgICAgICAgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiBhcyBhbnksXG4gICAgICAgIFVuaW50ZXJwcmV0ZWRPcHRpb24udG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZGVwcmVjYXRlZD86IGJvb2xlYW47XG4gIHByaXZhdGUgX3VuaW50ZXJwcmV0ZWRPcHRpb24/OiBVbmludGVycHJldGVkT3B0aW9uW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBTZXJ2aWNlT3B0aW9ucyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNlcnZpY2VPcHRpb25zPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5kZXByZWNhdGVkID0gdmFsdWUuZGVwcmVjYXRlZDtcbiAgICB0aGlzLnVuaW50ZXJwcmV0ZWRPcHRpb24gPSAodmFsdWUudW5pbnRlcnByZXRlZE9wdGlvbiB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgVW5pbnRlcnByZXRlZE9wdGlvbihtKVxuICAgICk7XG4gICAgU2VydmljZU9wdGlvbnMucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBkZXByZWNhdGVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kZXByZWNhdGVkO1xuICB9XG4gIHNldCBkZXByZWNhdGVkKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGVwcmVjYXRlZCA9IHZhbHVlO1xuICB9XG4gIGdldCB1bmludGVycHJldGVkT3B0aW9uKCk6IFVuaW50ZXJwcmV0ZWRPcHRpb25bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaW50ZXJwcmV0ZWRPcHRpb247XG4gIH1cbiAgc2V0IHVuaW50ZXJwcmV0ZWRPcHRpb24odmFsdWU6IFVuaW50ZXJwcmV0ZWRPcHRpb25bXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VuaW50ZXJwcmV0ZWRPcHRpb24gPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVwcmVjYXRlZDogdGhpcy5kZXByZWNhdGVkLFxuICAgICAgdW5pbnRlcnByZXRlZE9wdGlvbjogKHRoaXMudW5pbnRlcnByZXRlZE9wdGlvbiB8fCBbXSkubWFwKG0gPT5cbiAgICAgICAgbS50b09iamVjdCgpXG4gICAgICApXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTZXJ2aWNlT3B0aW9ucyB7fVxuZXhwb3J0IGNsYXNzIE1ldGhvZE9wdGlvbnMgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTWV0aG9kT3B0aW9ucykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBNZXRob2RPcHRpb25zLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE1ldGhvZE9wdGlvbnMoKTtcbiAgICBNZXRob2RPcHRpb25zLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBNZXRob2RPcHRpb25zKSB7XG4gICAgaW5zdGFuY2UuZGVwcmVjYXRlZCA9IGluc3RhbmNlLmRlcHJlY2F0ZWQgfHwgZmFsc2U7XG4gICAgaW5zdGFuY2UuaWRlbXBvdGVuY3lMZXZlbCA9IGluc3RhbmNlLmlkZW1wb3RlbmN5TGV2ZWwgfHwgMDtcbiAgICBpbnN0YW5jZS51bmludGVycHJldGVkT3B0aW9uID0gaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBNZXRob2RPcHRpb25zLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgIGluc3RhbmNlLmRlcHJlY2F0ZWQgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICBpbnN0YW5jZS5pZGVtcG90ZW5jeUxldmVsID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgOTk5OlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjk5OSA9IG5ldyBVbmludGVycHJldGVkT3B0aW9uKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyOTk5LFxuICAgICAgICAgICAgVW5pbnRlcnByZXRlZE9wdGlvbi5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbiA9XG4gICAgICAgICAgICBpbnN0YW5jZS51bmludGVycHJldGVkT3B0aW9uIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjk5OSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIE1ldGhvZE9wdGlvbnMucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogTWV0aG9kT3B0aW9ucywgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuZGVwcmVjYXRlZCkge1xuICAgICAgd3JpdGVyLndyaXRlQm9vbCgzMywgaW5zdGFuY2UuZGVwcmVjYXRlZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5pZGVtcG90ZW5jeUxldmVsKSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDM0LCBpbnN0YW5jZS5pZGVtcG90ZW5jeUxldmVsKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnVuaW50ZXJwcmV0ZWRPcHRpb24gJiYgaW5zdGFuY2UudW5pbnRlcnByZXRlZE9wdGlvbi5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgOTk5LFxuICAgICAgICBpbnN0YW5jZS51bmludGVycHJldGVkT3B0aW9uIGFzIGFueSxcbiAgICAgICAgVW5pbnRlcnByZXRlZE9wdGlvbi50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZXByZWNhdGVkPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaWRlbXBvdGVuY3lMZXZlbD86IE1ldGhvZE9wdGlvbnMuSWRlbXBvdGVuY3lMZXZlbDtcbiAgcHJpdmF0ZSBfdW5pbnRlcnByZXRlZE9wdGlvbj86IFVuaW50ZXJwcmV0ZWRPcHRpb25bXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIE1ldGhvZE9wdGlvbnMgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxNZXRob2RPcHRpb25zPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5kZXByZWNhdGVkID0gdmFsdWUuZGVwcmVjYXRlZDtcbiAgICB0aGlzLmlkZW1wb3RlbmN5TGV2ZWwgPSB2YWx1ZS5pZGVtcG90ZW5jeUxldmVsO1xuICAgIHRoaXMudW5pbnRlcnByZXRlZE9wdGlvbiA9ICh2YWx1ZS51bmludGVycHJldGVkT3B0aW9uIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBVbmludGVycHJldGVkT3B0aW9uKG0pXG4gICAgKTtcbiAgICBNZXRob2RPcHRpb25zLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgZGVwcmVjYXRlZCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGVwcmVjYXRlZDtcbiAgfVxuICBzZXQgZGVwcmVjYXRlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2RlcHJlY2F0ZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaWRlbXBvdGVuY3lMZXZlbCgpOiBNZXRob2RPcHRpb25zLklkZW1wb3RlbmN5TGV2ZWwgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pZGVtcG90ZW5jeUxldmVsO1xuICB9XG4gIHNldCBpZGVtcG90ZW5jeUxldmVsKHZhbHVlOiBNZXRob2RPcHRpb25zLklkZW1wb3RlbmN5TGV2ZWwgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pZGVtcG90ZW5jeUxldmVsID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVuaW50ZXJwcmV0ZWRPcHRpb24oKTogVW5pbnRlcnByZXRlZE9wdGlvbltdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pbnRlcnByZXRlZE9wdGlvbjtcbiAgfVxuICBzZXQgdW5pbnRlcnByZXRlZE9wdGlvbih2YWx1ZTogVW5pbnRlcnByZXRlZE9wdGlvbltdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdW5pbnRlcnByZXRlZE9wdGlvbiA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZXByZWNhdGVkOiB0aGlzLmRlcHJlY2F0ZWQsXG4gICAgICBpZGVtcG90ZW5jeUxldmVsOiB0aGlzLmlkZW1wb3RlbmN5TGV2ZWwsXG4gICAgICB1bmludGVycHJldGVkT3B0aW9uOiAodGhpcy51bmludGVycHJldGVkT3B0aW9uIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvT2JqZWN0KClcbiAgICAgIClcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE1ldGhvZE9wdGlvbnMge1xuICBleHBvcnQgZW51bSBJZGVtcG90ZW5jeUxldmVsIHtcbiAgICBpZGVtcG90ZW5jeVVua25vd24gPSAwLFxuICAgIG5vU2lkZUVmZmVjdHMgPSAxLFxuICAgIGlkZW1wb3RlbnQgPSAyXG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBVbmludGVycHJldGVkT3B0aW9uIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFVuaW50ZXJwcmV0ZWRPcHRpb24pIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgVW5pbnRlcnByZXRlZE9wdGlvbi50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBVbmludGVycHJldGVkT3B0aW9uKCk7XG4gICAgVW5pbnRlcnByZXRlZE9wdGlvbi5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogVW5pbnRlcnByZXRlZE9wdGlvbikge1xuICAgIGluc3RhbmNlLm5hbWUgPSBpbnN0YW5jZS5uYW1lIHx8IFtdO1xuICAgIGluc3RhbmNlLmlkZW50aWZpZXJWYWx1ZSA9IGluc3RhbmNlLmlkZW50aWZpZXJWYWx1ZSB8fCAnJztcbiAgICBpbnN0YW5jZS5wb3NpdGl2ZUludFZhbHVlID0gaW5zdGFuY2UucG9zaXRpdmVJbnRWYWx1ZSB8fCAnMCc7XG4gICAgaW5zdGFuY2UubmVnYXRpdmVJbnRWYWx1ZSA9IGluc3RhbmNlLm5lZ2F0aXZlSW50VmFsdWUgfHwgJzAnO1xuICAgIGluc3RhbmNlLmRvdWJsZVZhbHVlID0gaW5zdGFuY2UuZG91YmxlVmFsdWUgfHwgMDtcbiAgICBpbnN0YW5jZS5zdHJpbmdWYWx1ZSA9IGluc3RhbmNlLnN0cmluZ1ZhbHVlIHx8IG5ldyBVaW50OEFycmF5KCk7XG4gICAgaW5zdGFuY2UuYWdncmVnYXRlVmFsdWUgPSBpbnN0YW5jZS5hZ2dyZWdhdGVWYWx1ZSB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBVbmludGVycHJldGVkT3B0aW9uLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBVbmludGVycHJldGVkT3B0aW9uLk5hbWVQYXJ0KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMixcbiAgICAgICAgICAgIFVuaW50ZXJwcmV0ZWRPcHRpb24uTmFtZVBhcnQuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLm5hbWUgPSBpbnN0YW5jZS5uYW1lIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuaWRlbnRpZmllclZhbHVlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLnBvc2l0aXZlSW50VmFsdWUgPSByZWFkZXIucmVhZFVpbnQ2NFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaW5zdGFuY2UubmVnYXRpdmVJbnRWYWx1ZSA9IHJlYWRlci5yZWFkSW50NjRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIGluc3RhbmNlLmRvdWJsZVZhbHVlID0gcmVhZGVyLnJlYWREb3VibGUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIGluc3RhbmNlLnN0cmluZ1ZhbHVlID0gcmVhZGVyLnJlYWRCeXRlcygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgaW5zdGFuY2UuYWdncmVnYXRlVmFsdWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBVbmludGVycHJldGVkT3B0aW9uLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFVuaW50ZXJwcmV0ZWRPcHRpb24sIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLm5hbWUgJiYgaW5zdGFuY2UubmFtZS5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2UubmFtZSBhcyBhbnksXG4gICAgICAgIFVuaW50ZXJwcmV0ZWRPcHRpb24uTmFtZVBhcnQudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5pZGVudGlmaWVyVmFsdWUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS5pZGVudGlmaWVyVmFsdWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucG9zaXRpdmVJbnRWYWx1ZSkge1xuICAgICAgd3JpdGVyLndyaXRlVWludDY0U3RyaW5nKDQsIGluc3RhbmNlLnBvc2l0aXZlSW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubmVnYXRpdmVJbnRWYWx1ZSkge1xuICAgICAgd3JpdGVyLndyaXRlSW50NjRTdHJpbmcoNSwgaW5zdGFuY2UubmVnYXRpdmVJbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5kb3VibGVWYWx1ZSkge1xuICAgICAgd3JpdGVyLndyaXRlRG91YmxlKDYsIGluc3RhbmNlLmRvdWJsZVZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnN0cmluZ1ZhbHVlICYmIGluc3RhbmNlLnN0cmluZ1ZhbHVlLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlQnl0ZXMoNywgaW5zdGFuY2Uuc3RyaW5nVmFsdWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYWdncmVnYXRlVmFsdWUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg4LCBpbnN0YW5jZS5hZ2dyZWdhdGVWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbmFtZT86IFVuaW50ZXJwcmV0ZWRPcHRpb24uTmFtZVBhcnRbXTtcbiAgcHJpdmF0ZSBfaWRlbnRpZmllclZhbHVlPzogc3RyaW5nO1xuICBwcml2YXRlIF9wb3NpdGl2ZUludFZhbHVlPzogc3RyaW5nO1xuICBwcml2YXRlIF9uZWdhdGl2ZUludFZhbHVlPzogc3RyaW5nO1xuICBwcml2YXRlIF9kb3VibGVWYWx1ZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfc3RyaW5nVmFsdWU/OiBVaW50OEFycmF5O1xuICBwcml2YXRlIF9hZ2dyZWdhdGVWYWx1ZT86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFVuaW50ZXJwcmV0ZWRPcHRpb24gdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxVbmludGVycHJldGVkT3B0aW9uPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5uYW1lID0gKHZhbHVlLm5hbWUgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IFVuaW50ZXJwcmV0ZWRPcHRpb24uTmFtZVBhcnQobSlcbiAgICApO1xuICAgIHRoaXMuaWRlbnRpZmllclZhbHVlID0gdmFsdWUuaWRlbnRpZmllclZhbHVlO1xuICAgIHRoaXMucG9zaXRpdmVJbnRWYWx1ZSA9IHZhbHVlLnBvc2l0aXZlSW50VmFsdWU7XG4gICAgdGhpcy5uZWdhdGl2ZUludFZhbHVlID0gdmFsdWUubmVnYXRpdmVJbnRWYWx1ZTtcbiAgICB0aGlzLmRvdWJsZVZhbHVlID0gdmFsdWUuZG91YmxlVmFsdWU7XG4gICAgdGhpcy5zdHJpbmdWYWx1ZSA9IHZhbHVlLnN0cmluZ1ZhbHVlO1xuICAgIHRoaXMuYWdncmVnYXRlVmFsdWUgPSB2YWx1ZS5hZ2dyZWdhdGVWYWx1ZTtcbiAgICBVbmludGVycHJldGVkT3B0aW9uLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbmFtZSgpOiBVbmludGVycHJldGVkT3B0aW9uLk5hbWVQYXJ0W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbHVlOiBVbmludGVycHJldGVkT3B0aW9uLk5hbWVQYXJ0W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGlkZW50aWZpZXJWYWx1ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pZGVudGlmaWVyVmFsdWU7XG4gIH1cbiAgc2V0IGlkZW50aWZpZXJWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faWRlbnRpZmllclZhbHVlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBvc2l0aXZlSW50VmFsdWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpdmVJbnRWYWx1ZTtcbiAgfVxuICBzZXQgcG9zaXRpdmVJbnRWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcG9zaXRpdmVJbnRWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBuZWdhdGl2ZUludFZhbHVlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25lZ2F0aXZlSW50VmFsdWU7XG4gIH1cbiAgc2V0IG5lZ2F0aXZlSW50VmFsdWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25lZ2F0aXZlSW50VmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZG91YmxlVmFsdWUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZG91YmxlVmFsdWU7XG4gIH1cbiAgc2V0IGRvdWJsZVZhbHVlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kb3VibGVWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIGdldCBzdHJpbmdWYWx1ZSgpOiBVaW50OEFycmF5IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyaW5nVmFsdWU7XG4gIH1cbiAgc2V0IHN0cmluZ1ZhbHVlKHZhbHVlOiBVaW50OEFycmF5IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3RyaW5nVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYWdncmVnYXRlVmFsdWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWdncmVnYXRlVmFsdWU7XG4gIH1cbiAgc2V0IGFnZ3JlZ2F0ZVZhbHVlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hZ2dyZWdhdGVWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAodGhpcy5uYW1lIHx8IFtdKS5tYXAobSA9PiBtLnRvT2JqZWN0KCkpLFxuICAgICAgaWRlbnRpZmllclZhbHVlOiB0aGlzLmlkZW50aWZpZXJWYWx1ZSxcbiAgICAgIHBvc2l0aXZlSW50VmFsdWU6IHRoaXMucG9zaXRpdmVJbnRWYWx1ZSxcbiAgICAgIG5lZ2F0aXZlSW50VmFsdWU6IHRoaXMubmVnYXRpdmVJbnRWYWx1ZSxcbiAgICAgIGRvdWJsZVZhbHVlOiB0aGlzLmRvdWJsZVZhbHVlLFxuICAgICAgc3RyaW5nVmFsdWU6IHRoaXMuc3RyaW5nVmFsdWVcbiAgICAgICAgPyB0aGlzLnN0cmluZ1ZhbHVlLnN1YmFycmF5KDApXG4gICAgICAgIDogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgICAgIGFnZ3JlZ2F0ZVZhbHVlOiB0aGlzLmFnZ3JlZ2F0ZVZhbHVlXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBVbmludGVycHJldGVkT3B0aW9uIHtcbiAgZXhwb3J0IGNsYXNzIE5hbWVQYXJ0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICAgIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTmFtZVBhcnQpIHtcbiAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICAgIE5hbWVQYXJ0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTmFtZVBhcnQoKTtcbiAgICAgIE5hbWVQYXJ0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBOYW1lUGFydCkge1xuICAgICAgaW5zdGFuY2UubmFtZVBhcnQgPSBpbnN0YW5jZS5uYW1lUGFydCB8fCAnJztcbiAgICAgIGluc3RhbmNlLmlzRXh0ZW5zaW9uID0gaW5zdGFuY2UuaXNFeHRlbnNpb24gfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IE5hbWVQYXJ0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGluc3RhbmNlLm5hbWVQYXJ0ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGluc3RhbmNlLmlzRXh0ZW5zaW9uID0gcmVhZGVyLnJlYWRCb29sKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIE5hbWVQYXJ0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBOYW1lUGFydCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5uYW1lUGFydCkge1xuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UubmFtZVBhcnQpO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLmlzRXh0ZW5zaW9uKSB7XG4gICAgICAgIHdyaXRlci53cml0ZUJvb2woMiwgaW5zdGFuY2UuaXNFeHRlbnNpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX25hbWVQYXJ0Pzogc3RyaW5nO1xuICAgIHByaXZhdGUgX2lzRXh0ZW5zaW9uPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAgICogQHBhcmFtIE5hbWVQYXJ0IHZhbHVlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPE5hbWVQYXJ0Pikge1xuICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMubmFtZVBhcnQgPSB2YWx1ZS5uYW1lUGFydDtcbiAgICAgIHRoaXMuaXNFeHRlbnNpb24gPSB2YWx1ZS5pc0V4dGVuc2lvbjtcbiAgICAgIE5hbWVQYXJ0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IG5hbWVQYXJ0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fbmFtZVBhcnQ7XG4gICAgfVxuICAgIHNldCBuYW1lUGFydCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9uYW1lUGFydCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgaXNFeHRlbnNpb24oKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5faXNFeHRlbnNpb247XG4gICAgfVxuICAgIHNldCBpc0V4dGVuc2lvbih2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5faXNFeHRlbnNpb24gPSB2YWx1ZTtcbiAgICB9XG4gICAgdG9PYmplY3QoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lUGFydDogdGhpcy5uYW1lUGFydCxcbiAgICAgICAgaXNFeHRlbnNpb246IHRoaXMuaXNFeHRlbnNpb25cbiAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgTmFtZVBhcnQge31cbn1cbmV4cG9ydCBjbGFzcyBTb3VyY2VDb2RlSW5mbyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBTb3VyY2VDb2RlSW5mbykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBTb3VyY2VDb2RlSW5mby50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTb3VyY2VDb2RlSW5mbygpO1xuICAgIFNvdXJjZUNvZGVJbmZvLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBTb3VyY2VDb2RlSW5mbykge1xuICAgIGluc3RhbmNlLmxvY2F0aW9uID0gaW5zdGFuY2UubG9jYXRpb24gfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogU291cmNlQ29kZUluZm8sIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb25zdCBtZXNzYWdlSW5pdGlhbGl6ZXIxID0gbmV3IFNvdXJjZUNvZGVJbmZvLkxvY2F0aW9uKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIFNvdXJjZUNvZGVJbmZvLkxvY2F0aW9uLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS5sb2NhdGlvbiA9IGluc3RhbmNlLmxvY2F0aW9uIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFNvdXJjZUNvZGVJbmZvLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFNvdXJjZUNvZGVJbmZvLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5sb2NhdGlvbiAmJiBpbnN0YW5jZS5sb2NhdGlvbi5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgaW5zdGFuY2UubG9jYXRpb24gYXMgYW55LFxuICAgICAgICBTb3VyY2VDb2RlSW5mby5Mb2NhdGlvbi50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sb2NhdGlvbj86IFNvdXJjZUNvZGVJbmZvLkxvY2F0aW9uW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBTb3VyY2VDb2RlSW5mbyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFNvdXJjZUNvZGVJbmZvPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5sb2NhdGlvbiA9ICh2YWx1ZS5sb2NhdGlvbiB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgU291cmNlQ29kZUluZm8uTG9jYXRpb24obSlcbiAgICApO1xuICAgIFNvdXJjZUNvZGVJbmZvLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgbG9jYXRpb24oKTogU291cmNlQ29kZUluZm8uTG9jYXRpb25bXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uO1xuICB9XG4gIHNldCBsb2NhdGlvbih2YWx1ZTogU291cmNlQ29kZUluZm8uTG9jYXRpb25bXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xvY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2F0aW9uOiAodGhpcy5sb2NhdGlvbiB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU291cmNlQ29kZUluZm8ge1xuICBleHBvcnQgY2xhc3MgTG9jYXRpb24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMb2NhdGlvbikge1xuICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgICAgTG9jYXRpb24udG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMb2NhdGlvbigpO1xuICAgICAgTG9jYXRpb24uZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExvY2F0aW9uKSB7XG4gICAgICBpbnN0YW5jZS5wYXRoID0gaW5zdGFuY2UucGF0aCB8fCBbXTtcbiAgICAgIGluc3RhbmNlLnNwYW4gPSBpbnN0YW5jZS5zcGFuIHx8IFtdO1xuICAgICAgaW5zdGFuY2UubGVhZGluZ0NvbW1lbnRzID0gaW5zdGFuY2UubGVhZGluZ0NvbW1lbnRzIHx8ICcnO1xuICAgICAgaW5zdGFuY2UudHJhaWxpbmdDb21tZW50cyA9IGluc3RhbmNlLnRyYWlsaW5nQ29tbWVudHMgfHwgJyc7XG4gICAgICBpbnN0YW5jZS5sZWFkaW5nRGV0YWNoZWRDb21tZW50cyA9IGluc3RhbmNlLmxlYWRpbmdEZXRhY2hlZENvbW1lbnRzIHx8IFtdO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBMb2NhdGlvbiwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAoaW5zdGFuY2UucGF0aCA9IGluc3RhbmNlLnBhdGggfHwgW10pLnB1c2gocmVhZGVyLnJlYWRJbnQzMigpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIChpbnN0YW5jZS5zcGFuID0gaW5zdGFuY2Uuc3BhbiB8fCBbXSkucHVzaChyZWFkZXIucmVhZEludDMyKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgaW5zdGFuY2UubGVhZGluZ0NvbW1lbnRzID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGluc3RhbmNlLnRyYWlsaW5nQ29tbWVudHMgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgKGluc3RhbmNlLmxlYWRpbmdEZXRhY2hlZENvbW1lbnRzID1cbiAgICAgICAgICAgICAgaW5zdGFuY2UubGVhZGluZ0RldGFjaGVkQ29tbWVudHMgfHwgW10pLnB1c2gocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIExvY2F0aW9uLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBMb2NhdGlvbiwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5wYXRoICYmIGluc3RhbmNlLnBhdGgubGVuZ3RoKSB7XG4gICAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkSW50MzIoMSwgaW5zdGFuY2UucGF0aCk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2Uuc3BhbiAmJiBpbnN0YW5jZS5zcGFuLmxlbmd0aCkge1xuICAgICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZEludDMyKDIsIGluc3RhbmNlLnNwYW4pO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLmxlYWRpbmdDb21tZW50cykge1xuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UubGVhZGluZ0NvbW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnN0YW5jZS50cmFpbGluZ0NvbW1lbnRzKSB7XG4gICAgICAgIHdyaXRlci53cml0ZVN0cmluZyg0LCBpbnN0YW5jZS50cmFpbGluZ0NvbW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgaW5zdGFuY2UubGVhZGluZ0RldGFjaGVkQ29tbWVudHMgJiZcbiAgICAgICAgaW5zdGFuY2UubGVhZGluZ0RldGFjaGVkQ29tbWVudHMubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoNiwgaW5zdGFuY2UubGVhZGluZ0RldGFjaGVkQ29tbWVudHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3BhdGg/OiBudW1iZXJbXTtcbiAgICBwcml2YXRlIF9zcGFuPzogbnVtYmVyW107XG4gICAgcHJpdmF0ZSBfbGVhZGluZ0NvbW1lbnRzPzogc3RyaW5nO1xuICAgIHByaXZhdGUgX3RyYWlsaW5nQ29tbWVudHM/OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbGVhZGluZ0RldGFjaGVkQ29tbWVudHM/OiBzdHJpbmdbXTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAgICogQHBhcmFtIExvY2F0aW9uIHZhbHVlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExvY2F0aW9uPikge1xuICAgICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICAgIHRoaXMucGF0aCA9ICh2YWx1ZS5wYXRoIHx8IFtdKS5zbGljZSgpO1xuICAgICAgdGhpcy5zcGFuID0gKHZhbHVlLnNwYW4gfHwgW10pLnNsaWNlKCk7XG4gICAgICB0aGlzLmxlYWRpbmdDb21tZW50cyA9IHZhbHVlLmxlYWRpbmdDb21tZW50cztcbiAgICAgIHRoaXMudHJhaWxpbmdDb21tZW50cyA9IHZhbHVlLnRyYWlsaW5nQ29tbWVudHM7XG4gICAgICB0aGlzLmxlYWRpbmdEZXRhY2hlZENvbW1lbnRzID0gKFxuICAgICAgICB2YWx1ZS5sZWFkaW5nRGV0YWNoZWRDb21tZW50cyB8fCBbXVxuICAgICAgKS5zbGljZSgpO1xuICAgICAgTG9jYXRpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgcGF0aCgpOiBudW1iZXJbXSB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgICB9XG4gICAgc2V0IHBhdGgodmFsdWU6IG51bWJlcltdIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9wYXRoID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBzcGFuKCk6IG51bWJlcltdIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9zcGFuO1xuICAgIH1cbiAgICBzZXQgc3Bhbih2YWx1ZTogbnVtYmVyW10gfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3NwYW4gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGxlYWRpbmdDb21tZW50cygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgcmV0dXJuIHRoaXMuX2xlYWRpbmdDb21tZW50cztcbiAgICB9XG4gICAgc2V0IGxlYWRpbmdDb21tZW50cyh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9sZWFkaW5nQ29tbWVudHMgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHRyYWlsaW5nQ29tbWVudHMoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl90cmFpbGluZ0NvbW1lbnRzO1xuICAgIH1cbiAgICBzZXQgdHJhaWxpbmdDb21tZW50cyh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl90cmFpbGluZ0NvbW1lbnRzID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBsZWFkaW5nRGV0YWNoZWRDb21tZW50cygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fbGVhZGluZ0RldGFjaGVkQ29tbWVudHM7XG4gICAgfVxuICAgIHNldCBsZWFkaW5nRGV0YWNoZWRDb21tZW50cyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2xlYWRpbmdEZXRhY2hlZENvbW1lbnRzID0gdmFsdWU7XG4gICAgfVxuICAgIHRvT2JqZWN0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aDogKHRoaXMucGF0aCB8fCBbXSkuc2xpY2UoKSxcbiAgICAgICAgc3BhbjogKHRoaXMuc3BhbiB8fCBbXSkuc2xpY2UoKSxcbiAgICAgICAgbGVhZGluZ0NvbW1lbnRzOiB0aGlzLmxlYWRpbmdDb21tZW50cyxcbiAgICAgICAgdHJhaWxpbmdDb21tZW50czogdGhpcy50cmFpbGluZ0NvbW1lbnRzLFxuICAgICAgICBsZWFkaW5nRGV0YWNoZWRDb21tZW50czogKHRoaXMubGVhZGluZ0RldGFjaGVkQ29tbWVudHMgfHwgW10pLnNsaWNlKClcbiAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gICAgfVxuICB9XG4gIGV4cG9ydCBtb2R1bGUgTG9jYXRpb24ge31cbn1cbmV4cG9ydCBjbGFzcyBHZW5lcmF0ZWRDb2RlSW5mbyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBHZW5lcmF0ZWRDb2RlSW5mbykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZW5lcmF0ZWRDb2RlSW5mby50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZW5lcmF0ZWRDb2RlSW5mbygpO1xuICAgIEdlbmVyYXRlZENvZGVJbmZvLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBHZW5lcmF0ZWRDb2RlSW5mbykge1xuICAgIGluc3RhbmNlLmFubm90YXRpb24gPSBpbnN0YW5jZS5hbm5vdGF0aW9uIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEdlbmVyYXRlZENvZGVJbmZvLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBHZW5lcmF0ZWRDb2RlSW5mby5Bbm5vdGF0aW9uKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIEdlbmVyYXRlZENvZGVJbmZvLkFubm90YXRpb24uZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLmFubm90YXRpb24gPSBpbnN0YW5jZS5hbm5vdGF0aW9uIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdlbmVyYXRlZENvZGVJbmZvLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IEdlbmVyYXRlZENvZGVJbmZvLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5hbm5vdGF0aW9uICYmIGluc3RhbmNlLmFubm90YXRpb24ubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIGluc3RhbmNlLmFubm90YXRpb24gYXMgYW55LFxuICAgICAgICBHZW5lcmF0ZWRDb2RlSW5mby5Bbm5vdGF0aW9uLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Fubm90YXRpb24/OiBHZW5lcmF0ZWRDb2RlSW5mby5Bbm5vdGF0aW9uW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBHZW5lcmF0ZWRDb2RlSW5mbyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdlbmVyYXRlZENvZGVJbmZvPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5hbm5vdGF0aW9uID0gKHZhbHVlLmFubm90YXRpb24gfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IEdlbmVyYXRlZENvZGVJbmZvLkFubm90YXRpb24obSlcbiAgICApO1xuICAgIEdlbmVyYXRlZENvZGVJbmZvLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgYW5ub3RhdGlvbigpOiBHZW5lcmF0ZWRDb2RlSW5mby5Bbm5vdGF0aW9uW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hbm5vdGF0aW9uO1xuICB9XG4gIHNldCBhbm5vdGF0aW9uKHZhbHVlOiBHZW5lcmF0ZWRDb2RlSW5mby5Bbm5vdGF0aW9uW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hbm5vdGF0aW9uID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFubm90YXRpb246ICh0aGlzLmFubm90YXRpb24gfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSlcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdlbmVyYXRlZENvZGVJbmZvIHtcbiAgZXhwb3J0IGNsYXNzIEFubm90YXRpb24gaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gICAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBBbm5vdGF0aW9uKSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgICBBbm5vdGF0aW9uLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQW5ub3RhdGlvbigpO1xuICAgICAgQW5ub3RhdGlvbi5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQW5ub3RhdGlvbikge1xuICAgICAgaW5zdGFuY2UucGF0aCA9IGluc3RhbmNlLnBhdGggfHwgW107XG4gICAgICBpbnN0YW5jZS5zb3VyY2VGaWxlID0gaW5zdGFuY2Uuc291cmNlRmlsZSB8fCAnJztcbiAgICAgIGluc3RhbmNlLmJlZ2luID0gaW5zdGFuY2UuYmVnaW4gfHwgMDtcbiAgICAgIGluc3RhbmNlLmVuZCA9IGluc3RhbmNlLmVuZCB8fCAwO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBBbm5vdGF0aW9uLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIChpbnN0YW5jZS5wYXRoID0gaW5zdGFuY2UucGF0aCB8fCBbXSkucHVzaChyZWFkZXIucmVhZEludDMyKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaW5zdGFuY2Uuc291cmNlRmlsZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBpbnN0YW5jZS5iZWdpbiA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGluc3RhbmNlLmVuZCA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQW5ub3RhdGlvbi5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogQW5ub3RhdGlvbiwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5wYXRoICYmIGluc3RhbmNlLnBhdGgubGVuZ3RoKSB7XG4gICAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkSW50MzIoMSwgaW5zdGFuY2UucGF0aCk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2Uuc291cmNlRmlsZSkge1xuICAgICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2Uuc291cmNlRmlsZSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UuYmVnaW4pIHtcbiAgICAgICAgd3JpdGVyLndyaXRlSW50MzIoMywgaW5zdGFuY2UuYmVnaW4pO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLmVuZCkge1xuICAgICAgICB3cml0ZXIud3JpdGVJbnQzMig0LCBpbnN0YW5jZS5lbmQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3BhdGg/OiBudW1iZXJbXTtcbiAgICBwcml2YXRlIF9zb3VyY2VGaWxlPzogc3RyaW5nO1xuICAgIHByaXZhdGUgX2JlZ2luPzogbnVtYmVyO1xuICAgIHByaXZhdGUgX2VuZD86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAgICogQHBhcmFtIEFubm90YXRpb24gdmFsdWVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QW5ub3RhdGlvbj4pIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgICB0aGlzLnBhdGggPSAodmFsdWUucGF0aCB8fCBbXSkuc2xpY2UoKTtcbiAgICAgIHRoaXMuc291cmNlRmlsZSA9IHZhbHVlLnNvdXJjZUZpbGU7XG4gICAgICB0aGlzLmJlZ2luID0gdmFsdWUuYmVnaW47XG4gICAgICB0aGlzLmVuZCA9IHZhbHVlLmVuZDtcbiAgICAgIEFubm90YXRpb24ucmVmaW5lVmFsdWVzKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgcGF0aCgpOiBudW1iZXJbXSB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgICB9XG4gICAgc2V0IHBhdGgodmFsdWU6IG51bWJlcltdIHwgdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9wYXRoID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBzb3VyY2VGaWxlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5fc291cmNlRmlsZTtcbiAgICB9XG4gICAgc2V0IHNvdXJjZUZpbGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fc291cmNlRmlsZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgYmVnaW4oKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9iZWdpbjtcbiAgICB9XG4gICAgc2V0IGJlZ2luKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2JlZ2luID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBlbmQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbmQ7XG4gICAgfVxuICAgIHNldCBlbmQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZW5kID0gdmFsdWU7XG4gICAgfVxuICAgIHRvT2JqZWN0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aDogKHRoaXMucGF0aCB8fCBbXSkuc2xpY2UoKSxcbiAgICAgICAgc291cmNlRmlsZTogdGhpcy5zb3VyY2VGaWxlLFxuICAgICAgICBiZWdpbjogdGhpcy5iZWdpbixcbiAgICAgICAgZW5kOiB0aGlzLmVuZFxuICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgICB9XG4gIH1cbiAgZXhwb3J0IG1vZHVsZSBBbm5vdGF0aW9uIHt9XG59XG4iXX0=