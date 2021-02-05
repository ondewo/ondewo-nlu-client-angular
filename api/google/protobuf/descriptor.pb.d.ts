import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export declare class FileDescriptorSet implements GrpcMessage {
    static toBinary(instance: FileDescriptorSet): any;
    static fromBinary(bytes: ByteSource): FileDescriptorSet;
    static refineValues(instance: FileDescriptorSet): void;
    static fromBinaryReader(instance: FileDescriptorSet, reader: BinaryReader): void;
    static toBinaryWriter(instance: FileDescriptorSet, writer: BinaryWriter): void;
    private _file?;
    /**
     * Creates an object and applies default Protobuf values
     * @param FileDescriptorSet value
     */
    constructor(value?: RecursivePartial<FileDescriptorSet>);
    get file(): FileDescriptorProto[] | undefined;
    set file(value: FileDescriptorProto[] | undefined);
    toObject(): {
        file: {
            name: string;
            package: string;
            dependency: string[];
            publicDependency: number[];
            weakDependency: number[];
            messageType: any[];
            enumType: {
                name: string;
                value: {
                    name: string;
                    number: number;
                    options: {
                        deprecated: boolean;
                        uninterpretedOption: {
                            name: {
                                namePart: string;
                                isExtension: boolean;
                            }[];
                            identifierValue: string;
                            positiveIntValue: string;
                            negativeIntValue: string;
                            doubleValue: number;
                            stringValue: Uint8Array;
                            aggregateValue: string;
                        }[];
                    };
                }[];
                options: {
                    allowAlias: boolean;
                    deprecated: boolean;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: Uint8Array;
                        aggregateValue: string;
                    }[];
                };
                reservedRange: {
                    start: number;
                    end: number;
                }[];
                reservedName: string[];
            }[];
            service: {
                name: string;
                method: {
                    name: string;
                    inputType: string;
                    outputType: string;
                    options: {
                        deprecated: boolean;
                        idempotencyLevel: MethodOptions.IdempotencyLevel;
                        uninterpretedOption: {
                            name: {
                                namePart: string;
                                isExtension: boolean;
                            }[];
                            identifierValue: string;
                            positiveIntValue: string;
                            negativeIntValue: string;
                            doubleValue: number;
                            stringValue: Uint8Array;
                            aggregateValue: string;
                        }[];
                    };
                    clientStreaming: boolean;
                    serverStreaming: boolean;
                }[];
                options: {
                    deprecated: boolean;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: Uint8Array;
                        aggregateValue: string;
                    }[];
                };
            }[];
            extension: {
                name: string;
                number: number;
                label: FieldDescriptorProto.Label;
                type: FieldDescriptorProto.Type;
                typeName: string;
                extendee: string;
                defaultValue: string;
                oneofIndex: number;
                jsonName: string;
                options: {
                    ctype: FieldOptions.CType;
                    packed: boolean;
                    jstype: FieldOptions.JSType;
                    lazy: boolean;
                    deprecated: boolean;
                    weak: boolean;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: Uint8Array;
                        aggregateValue: string;
                    }[];
                };
                proto3Optional: boolean;
            }[];
            options: {
                javaPackage: string;
                javaOuterClassname: string;
                javaMultipleFiles: boolean;
                javaGenerateEqualsAndHash: boolean;
                javaStringCheckUtf8: boolean;
                optimizeFor: FileOptions.OptimizeMode;
                goPackage: string;
                ccGenericServices: boolean;
                javaGenericServices: boolean;
                pyGenericServices: boolean;
                phpGenericServices: boolean;
                deprecated: boolean;
                ccEnableArenas: boolean;
                objcClassPrefix: string;
                csharpNamespace: string;
                swiftPrefix: string;
                phpClassPrefix: string;
                phpNamespace: string;
                phpMetadataNamespace: string;
                rubyPackage: string;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: Uint8Array;
                    aggregateValue: string;
                }[];
            };
            sourceCodeInfo: {
                location: {
                    path: number[];
                    span: number[];
                    leadingComments: string;
                    trailingComments: string;
                    leadingDetachedComments: string[];
                }[];
            };
            syntax: string;
        }[];
    };
    toJSON(): {
        file: {
            name: string;
            package: string;
            dependency: string[];
            publicDependency: number[];
            weakDependency: number[];
            messageType: any[];
            enumType: {
                name: string;
                value: {
                    name: string;
                    number: number;
                    options: {
                        deprecated: boolean;
                        uninterpretedOption: {
                            name: {
                                namePart: string;
                                isExtension: boolean;
                            }[];
                            identifierValue: string;
                            positiveIntValue: string;
                            negativeIntValue: string;
                            doubleValue: number;
                            stringValue: Uint8Array;
                            aggregateValue: string;
                        }[];
                    };
                }[];
                options: {
                    allowAlias: boolean;
                    deprecated: boolean;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: Uint8Array;
                        aggregateValue: string;
                    }[];
                };
                reservedRange: {
                    start: number;
                    end: number;
                }[];
                reservedName: string[];
            }[];
            service: {
                name: string;
                method: {
                    name: string;
                    inputType: string;
                    outputType: string;
                    options: {
                        deprecated: boolean;
                        idempotencyLevel: MethodOptions.IdempotencyLevel;
                        uninterpretedOption: {
                            name: {
                                namePart: string;
                                isExtension: boolean;
                            }[];
                            identifierValue: string;
                            positiveIntValue: string;
                            negativeIntValue: string;
                            doubleValue: number;
                            stringValue: Uint8Array;
                            aggregateValue: string;
                        }[];
                    };
                    clientStreaming: boolean;
                    serverStreaming: boolean;
                }[];
                options: {
                    deprecated: boolean;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: Uint8Array;
                        aggregateValue: string;
                    }[];
                };
            }[];
            extension: {
                name: string;
                number: number;
                label: FieldDescriptorProto.Label;
                type: FieldDescriptorProto.Type;
                typeName: string;
                extendee: string;
                defaultValue: string;
                oneofIndex: number;
                jsonName: string;
                options: {
                    ctype: FieldOptions.CType;
                    packed: boolean;
                    jstype: FieldOptions.JSType;
                    lazy: boolean;
                    deprecated: boolean;
                    weak: boolean;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: Uint8Array;
                        aggregateValue: string;
                    }[];
                };
                proto3Optional: boolean;
            }[];
            options: {
                javaPackage: string;
                javaOuterClassname: string;
                javaMultipleFiles: boolean;
                javaGenerateEqualsAndHash: boolean;
                javaStringCheckUtf8: boolean;
                optimizeFor: FileOptions.OptimizeMode;
                goPackage: string;
                ccGenericServices: boolean;
                javaGenericServices: boolean;
                pyGenericServices: boolean;
                phpGenericServices: boolean;
                deprecated: boolean;
                ccEnableArenas: boolean;
                objcClassPrefix: string;
                csharpNamespace: string;
                swiftPrefix: string;
                phpClassPrefix: string;
                phpNamespace: string;
                phpMetadataNamespace: string;
                rubyPackage: string;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: Uint8Array;
                    aggregateValue: string;
                }[];
            };
            sourceCodeInfo: {
                location: {
                    path: number[];
                    span: number[];
                    leadingComments: string;
                    trailingComments: string;
                    leadingDetachedComments: string[];
                }[];
            };
            syntax: string;
        }[];
    };
}
export declare module FileDescriptorSet { }
export declare class FileDescriptorProto implements GrpcMessage {
    static toBinary(instance: FileDescriptorProto): any;
    static fromBinary(bytes: ByteSource): FileDescriptorProto;
    static refineValues(instance: FileDescriptorProto): void;
    static fromBinaryReader(instance: FileDescriptorProto, reader: BinaryReader): void;
    static toBinaryWriter(instance: FileDescriptorProto, writer: BinaryWriter): void;
    private _name?;
    private _package?;
    private _dependency?;
    private _publicDependency?;
    private _weakDependency?;
    private _messageType?;
    private _enumType?;
    private _service?;
    private _extension?;
    private _options?;
    private _sourceCodeInfo?;
    private _syntax?;
    /**
     * Creates an object and applies default Protobuf values
     * @param FileDescriptorProto value
     */
    constructor(value?: RecursivePartial<FileDescriptorProto>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get package(): string | undefined;
    set package(value: string | undefined);
    get dependency(): string[] | undefined;
    set dependency(value: string[] | undefined);
    get publicDependency(): number[] | undefined;
    set publicDependency(value: number[] | undefined);
    get weakDependency(): number[] | undefined;
    set weakDependency(value: number[] | undefined);
    get messageType(): DescriptorProto[] | undefined;
    set messageType(value: DescriptorProto[] | undefined);
    get enumType(): EnumDescriptorProto[] | undefined;
    set enumType(value: EnumDescriptorProto[] | undefined);
    get service(): ServiceDescriptorProto[] | undefined;
    set service(value: ServiceDescriptorProto[] | undefined);
    get extension(): FieldDescriptorProto[] | undefined;
    set extension(value: FieldDescriptorProto[] | undefined);
    get options(): FileOptions | undefined;
    set options(value: FileOptions | undefined);
    get sourceCodeInfo(): SourceCodeInfo | undefined;
    set sourceCodeInfo(value: SourceCodeInfo | undefined);
    get syntax(): string | undefined;
    set syntax(value: string | undefined);
    toObject(): {
        name: string;
        package: string;
        dependency: string[];
        publicDependency: number[];
        weakDependency: number[];
        messageType: any[];
        enumType: {
            name: string;
            value: {
                name: string;
                number: number;
                options: {
                    deprecated: boolean;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: Uint8Array;
                        aggregateValue: string;
                    }[];
                };
            }[];
            options: {
                allowAlias: boolean;
                deprecated: boolean;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: Uint8Array;
                    aggregateValue: string;
                }[];
            };
            reservedRange: {
                start: number;
                end: number;
            }[];
            reservedName: string[];
        }[];
        service: {
            name: string;
            method: {
                name: string;
                inputType: string;
                outputType: string;
                options: {
                    deprecated: boolean;
                    idempotencyLevel: MethodOptions.IdempotencyLevel;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: Uint8Array;
                        aggregateValue: string;
                    }[];
                };
                clientStreaming: boolean;
                serverStreaming: boolean;
            }[];
            options: {
                deprecated: boolean;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: Uint8Array;
                    aggregateValue: string;
                }[];
            };
        }[];
        extension: {
            name: string;
            number: number;
            label: FieldDescriptorProto.Label;
            type: FieldDescriptorProto.Type;
            typeName: string;
            extendee: string;
            defaultValue: string;
            oneofIndex: number;
            jsonName: string;
            options: {
                ctype: FieldOptions.CType;
                packed: boolean;
                jstype: FieldOptions.JSType;
                lazy: boolean;
                deprecated: boolean;
                weak: boolean;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: Uint8Array;
                    aggregateValue: string;
                }[];
            };
            proto3Optional: boolean;
        }[];
        options: {
            javaPackage: string;
            javaOuterClassname: string;
            javaMultipleFiles: boolean;
            javaGenerateEqualsAndHash: boolean;
            javaStringCheckUtf8: boolean;
            optimizeFor: FileOptions.OptimizeMode;
            goPackage: string;
            ccGenericServices: boolean;
            javaGenericServices: boolean;
            pyGenericServices: boolean;
            phpGenericServices: boolean;
            deprecated: boolean;
            ccEnableArenas: boolean;
            objcClassPrefix: string;
            csharpNamespace: string;
            swiftPrefix: string;
            phpClassPrefix: string;
            phpNamespace: string;
            phpMetadataNamespace: string;
            rubyPackage: string;
            uninterpretedOption: {
                name: {
                    namePart: string;
                    isExtension: boolean;
                }[];
                identifierValue: string;
                positiveIntValue: string;
                negativeIntValue: string;
                doubleValue: number;
                stringValue: Uint8Array;
                aggregateValue: string;
            }[];
        };
        sourceCodeInfo: {
            location: {
                path: number[];
                span: number[];
                leadingComments: string;
                trailingComments: string;
                leadingDetachedComments: string[];
            }[];
        };
        syntax: string;
    };
    toJSON(): {
        name: string;
        package: string;
        dependency: string[];
        publicDependency: number[];
        weakDependency: number[];
        messageType: any[];
        enumType: {
            name: string;
            value: {
                name: string;
                number: number;
                options: {
                    deprecated: boolean;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: Uint8Array;
                        aggregateValue: string;
                    }[];
                };
            }[];
            options: {
                allowAlias: boolean;
                deprecated: boolean;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: Uint8Array;
                    aggregateValue: string;
                }[];
            };
            reservedRange: {
                start: number;
                end: number;
            }[];
            reservedName: string[];
        }[];
        service: {
            name: string;
            method: {
                name: string;
                inputType: string;
                outputType: string;
                options: {
                    deprecated: boolean;
                    idempotencyLevel: MethodOptions.IdempotencyLevel;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: Uint8Array;
                        aggregateValue: string;
                    }[];
                };
                clientStreaming: boolean;
                serverStreaming: boolean;
            }[];
            options: {
                deprecated: boolean;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: Uint8Array;
                    aggregateValue: string;
                }[];
            };
        }[];
        extension: {
            name: string;
            number: number;
            label: FieldDescriptorProto.Label;
            type: FieldDescriptorProto.Type;
            typeName: string;
            extendee: string;
            defaultValue: string;
            oneofIndex: number;
            jsonName: string;
            options: {
                ctype: FieldOptions.CType;
                packed: boolean;
                jstype: FieldOptions.JSType;
                lazy: boolean;
                deprecated: boolean;
                weak: boolean;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: Uint8Array;
                    aggregateValue: string;
                }[];
            };
            proto3Optional: boolean;
        }[];
        options: {
            javaPackage: string;
            javaOuterClassname: string;
            javaMultipleFiles: boolean;
            javaGenerateEqualsAndHash: boolean;
            javaStringCheckUtf8: boolean;
            optimizeFor: FileOptions.OptimizeMode;
            goPackage: string;
            ccGenericServices: boolean;
            javaGenericServices: boolean;
            pyGenericServices: boolean;
            phpGenericServices: boolean;
            deprecated: boolean;
            ccEnableArenas: boolean;
            objcClassPrefix: string;
            csharpNamespace: string;
            swiftPrefix: string;
            phpClassPrefix: string;
            phpNamespace: string;
            phpMetadataNamespace: string;
            rubyPackage: string;
            uninterpretedOption: {
                name: {
                    namePart: string;
                    isExtension: boolean;
                }[];
                identifierValue: string;
                positiveIntValue: string;
                negativeIntValue: string;
                doubleValue: number;
                stringValue: Uint8Array;
                aggregateValue: string;
            }[];
        };
        sourceCodeInfo: {
            location: {
                path: number[];
                span: number[];
                leadingComments: string;
                trailingComments: string;
                leadingDetachedComments: string[];
            }[];
        };
        syntax: string;
    };
}
export declare module FileDescriptorProto { }
export declare class DescriptorProto implements GrpcMessage {
    static toBinary(instance: DescriptorProto): any;
    static fromBinary(bytes: ByteSource): DescriptorProto;
    static refineValues(instance: DescriptorProto): void;
    static fromBinaryReader(instance: DescriptorProto, reader: BinaryReader): void;
    static toBinaryWriter(instance: DescriptorProto, writer: BinaryWriter): void;
    private _name?;
    private _field?;
    private _extension?;
    private _nestedType?;
    private _enumType?;
    private _extensionRange?;
    private _oneofDecl?;
    private _options?;
    private _reservedRange?;
    private _reservedName?;
    /**
     * Creates an object and applies default Protobuf values
     * @param DescriptorProto value
     */
    constructor(value?: RecursivePartial<DescriptorProto>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get field(): FieldDescriptorProto[] | undefined;
    set field(value: FieldDescriptorProto[] | undefined);
    get extension(): FieldDescriptorProto[] | undefined;
    set extension(value: FieldDescriptorProto[] | undefined);
    get nestedType(): DescriptorProto[] | undefined;
    set nestedType(value: DescriptorProto[] | undefined);
    get enumType(): EnumDescriptorProto[] | undefined;
    set enumType(value: EnumDescriptorProto[] | undefined);
    get extensionRange(): DescriptorProto.ExtensionRange[] | undefined;
    set extensionRange(value: DescriptorProto.ExtensionRange[] | undefined);
    get oneofDecl(): OneofDescriptorProto[] | undefined;
    set oneofDecl(value: OneofDescriptorProto[] | undefined);
    get options(): MessageOptions | undefined;
    set options(value: MessageOptions | undefined);
    get reservedRange(): DescriptorProto.ReservedRange[] | undefined;
    set reservedRange(value: DescriptorProto.ReservedRange[] | undefined);
    get reservedName(): string[] | undefined;
    set reservedName(value: string[] | undefined);
    toObject(): any;
    toJSON(): any;
}
export declare module DescriptorProto {
    class ExtensionRange implements GrpcMessage {
        static toBinary(instance: ExtensionRange): any;
        static fromBinary(bytes: ByteSource): ExtensionRange;
        static refineValues(instance: ExtensionRange): void;
        static fromBinaryReader(instance: ExtensionRange, reader: BinaryReader): void;
        static toBinaryWriter(instance: ExtensionRange, writer: BinaryWriter): void;
        private _start?;
        private _end?;
        private _options?;
        /**
         * Creates an object and applies default Protobuf values
         * @param ExtensionRange value
         */
        constructor(value?: RecursivePartial<ExtensionRange>);
        get start(): number | undefined;
        set start(value: number | undefined);
        get end(): number | undefined;
        set end(value: number | undefined);
        get options(): ExtensionRangeOptions | undefined;
        set options(value: ExtensionRangeOptions | undefined);
        toObject(): {
            start: number;
            end: number;
            options: {
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: Uint8Array;
                    aggregateValue: string;
                }[];
            };
        };
        toJSON(): {
            start: number;
            end: number;
            options: {
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: Uint8Array;
                    aggregateValue: string;
                }[];
            };
        };
    }
    module ExtensionRange { }
    class ReservedRange implements GrpcMessage {
        static toBinary(instance: ReservedRange): any;
        static fromBinary(bytes: ByteSource): ReservedRange;
        static refineValues(instance: ReservedRange): void;
        static fromBinaryReader(instance: ReservedRange, reader: BinaryReader): void;
        static toBinaryWriter(instance: ReservedRange, writer: BinaryWriter): void;
        private _start?;
        private _end?;
        /**
         * Creates an object and applies default Protobuf values
         * @param ReservedRange value
         */
        constructor(value?: RecursivePartial<ReservedRange>);
        get start(): number | undefined;
        set start(value: number | undefined);
        get end(): number | undefined;
        set end(value: number | undefined);
        toObject(): {
            start: number;
            end: number;
        };
        toJSON(): {
            start: number;
            end: number;
        };
    }
    module ReservedRange { }
}
export declare class ExtensionRangeOptions implements GrpcMessage {
    static toBinary(instance: ExtensionRangeOptions): any;
    static fromBinary(bytes: ByteSource): ExtensionRangeOptions;
    static refineValues(instance: ExtensionRangeOptions): void;
    static fromBinaryReader(instance: ExtensionRangeOptions, reader: BinaryReader): void;
    static toBinaryWriter(instance: ExtensionRangeOptions, writer: BinaryWriter): void;
    private _uninterpretedOption?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ExtensionRangeOptions value
     */
    constructor(value?: RecursivePartial<ExtensionRangeOptions>);
    get uninterpretedOption(): UninterpretedOption[] | undefined;
    set uninterpretedOption(value: UninterpretedOption[] | undefined);
    toObject(): {
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
    toJSON(): {
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
}
export declare module ExtensionRangeOptions { }
export declare class FieldDescriptorProto implements GrpcMessage {
    static toBinary(instance: FieldDescriptorProto): any;
    static fromBinary(bytes: ByteSource): FieldDescriptorProto;
    static refineValues(instance: FieldDescriptorProto): void;
    static fromBinaryReader(instance: FieldDescriptorProto, reader: BinaryReader): void;
    static toBinaryWriter(instance: FieldDescriptorProto, writer: BinaryWriter): void;
    private _name?;
    private _number?;
    private _label?;
    private _type?;
    private _typeName?;
    private _extendee?;
    private _defaultValue?;
    private _oneofIndex?;
    private _jsonName?;
    private _options?;
    private _proto3Optional?;
    /**
     * Creates an object and applies default Protobuf values
     * @param FieldDescriptorProto value
     */
    constructor(value?: RecursivePartial<FieldDescriptorProto>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get number(): number | undefined;
    set number(value: number | undefined);
    get label(): FieldDescriptorProto.Label | undefined;
    set label(value: FieldDescriptorProto.Label | undefined);
    get type(): FieldDescriptorProto.Type | undefined;
    set type(value: FieldDescriptorProto.Type | undefined);
    get typeName(): string | undefined;
    set typeName(value: string | undefined);
    get extendee(): string | undefined;
    set extendee(value: string | undefined);
    get defaultValue(): string | undefined;
    set defaultValue(value: string | undefined);
    get oneofIndex(): number | undefined;
    set oneofIndex(value: number | undefined);
    get jsonName(): string | undefined;
    set jsonName(value: string | undefined);
    get options(): FieldOptions | undefined;
    set options(value: FieldOptions | undefined);
    get proto3Optional(): boolean | undefined;
    set proto3Optional(value: boolean | undefined);
    toObject(): {
        name: string;
        number: number;
        label: FieldDescriptorProto.Label;
        type: FieldDescriptorProto.Type;
        typeName: string;
        extendee: string;
        defaultValue: string;
        oneofIndex: number;
        jsonName: string;
        options: {
            ctype: FieldOptions.CType;
            packed: boolean;
            jstype: FieldOptions.JSType;
            lazy: boolean;
            deprecated: boolean;
            weak: boolean;
            uninterpretedOption: {
                name: {
                    namePart: string;
                    isExtension: boolean;
                }[];
                identifierValue: string;
                positiveIntValue: string;
                negativeIntValue: string;
                doubleValue: number;
                stringValue: Uint8Array;
                aggregateValue: string;
            }[];
        };
        proto3Optional: boolean;
    };
    toJSON(): {
        name: string;
        number: number;
        label: FieldDescriptorProto.Label;
        type: FieldDescriptorProto.Type;
        typeName: string;
        extendee: string;
        defaultValue: string;
        oneofIndex: number;
        jsonName: string;
        options: {
            ctype: FieldOptions.CType;
            packed: boolean;
            jstype: FieldOptions.JSType;
            lazy: boolean;
            deprecated: boolean;
            weak: boolean;
            uninterpretedOption: {
                name: {
                    namePart: string;
                    isExtension: boolean;
                }[];
                identifierValue: string;
                positiveIntValue: string;
                negativeIntValue: string;
                doubleValue: number;
                stringValue: Uint8Array;
                aggregateValue: string;
            }[];
        };
        proto3Optional: boolean;
    };
}
export declare module FieldDescriptorProto {
    enum Type {
        typeDouble = 1,
        typeFloat = 2,
        typeInt64 = 3,
        typeUint64 = 4,
        typeInt32 = 5,
        typeFixed64 = 6,
        typeFixed32 = 7,
        typeBool = 8,
        typeString = 9,
        typeGroup = 10,
        typeMessage = 11,
        typeBytes = 12,
        typeUint32 = 13,
        typeEnum = 14,
        typeSfixed32 = 15,
        typeSfixed64 = 16,
        typeSint32 = 17,
        typeSint64 = 18
    }
    enum Label {
        labelOptional = 1,
        labelRequired = 2,
        labelRepeated = 3
    }
}
export declare class OneofDescriptorProto implements GrpcMessage {
    static toBinary(instance: OneofDescriptorProto): any;
    static fromBinary(bytes: ByteSource): OneofDescriptorProto;
    static refineValues(instance: OneofDescriptorProto): void;
    static fromBinaryReader(instance: OneofDescriptorProto, reader: BinaryReader): void;
    static toBinaryWriter(instance: OneofDescriptorProto, writer: BinaryWriter): void;
    private _name?;
    private _options?;
    /**
     * Creates an object and applies default Protobuf values
     * @param OneofDescriptorProto value
     */
    constructor(value?: RecursivePartial<OneofDescriptorProto>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get options(): OneofOptions | undefined;
    set options(value: OneofOptions | undefined);
    toObject(): {
        name: string;
        options: {
            uninterpretedOption: {
                name: {
                    namePart: string;
                    isExtension: boolean;
                }[];
                identifierValue: string;
                positiveIntValue: string;
                negativeIntValue: string;
                doubleValue: number;
                stringValue: Uint8Array;
                aggregateValue: string;
            }[];
        };
    };
    toJSON(): {
        name: string;
        options: {
            uninterpretedOption: {
                name: {
                    namePart: string;
                    isExtension: boolean;
                }[];
                identifierValue: string;
                positiveIntValue: string;
                negativeIntValue: string;
                doubleValue: number;
                stringValue: Uint8Array;
                aggregateValue: string;
            }[];
        };
    };
}
export declare module OneofDescriptorProto { }
export declare class EnumDescriptorProto implements GrpcMessage {
    static toBinary(instance: EnumDescriptorProto): any;
    static fromBinary(bytes: ByteSource): EnumDescriptorProto;
    static refineValues(instance: EnumDescriptorProto): void;
    static fromBinaryReader(instance: EnumDescriptorProto, reader: BinaryReader): void;
    static toBinaryWriter(instance: EnumDescriptorProto, writer: BinaryWriter): void;
    private _name?;
    private _value?;
    private _options?;
    private _reservedRange?;
    private _reservedName?;
    /**
     * Creates an object and applies default Protobuf values
     * @param EnumDescriptorProto value
     */
    constructor(value?: RecursivePartial<EnumDescriptorProto>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get value(): EnumValueDescriptorProto[] | undefined;
    set value(value: EnumValueDescriptorProto[] | undefined);
    get options(): EnumOptions | undefined;
    set options(value: EnumOptions | undefined);
    get reservedRange(): EnumDescriptorProto.EnumReservedRange[] | undefined;
    set reservedRange(value: EnumDescriptorProto.EnumReservedRange[] | undefined);
    get reservedName(): string[] | undefined;
    set reservedName(value: string[] | undefined);
    toObject(): {
        name: string;
        value: {
            name: string;
            number: number;
            options: {
                deprecated: boolean;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: Uint8Array;
                    aggregateValue: string;
                }[];
            };
        }[];
        options: {
            allowAlias: boolean;
            deprecated: boolean;
            uninterpretedOption: {
                name: {
                    namePart: string;
                    isExtension: boolean;
                }[];
                identifierValue: string;
                positiveIntValue: string;
                negativeIntValue: string;
                doubleValue: number;
                stringValue: Uint8Array;
                aggregateValue: string;
            }[];
        };
        reservedRange: {
            start: number;
            end: number;
        }[];
        reservedName: string[];
    };
    toJSON(): {
        name: string;
        value: {
            name: string;
            number: number;
            options: {
                deprecated: boolean;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: Uint8Array;
                    aggregateValue: string;
                }[];
            };
        }[];
        options: {
            allowAlias: boolean;
            deprecated: boolean;
            uninterpretedOption: {
                name: {
                    namePart: string;
                    isExtension: boolean;
                }[];
                identifierValue: string;
                positiveIntValue: string;
                negativeIntValue: string;
                doubleValue: number;
                stringValue: Uint8Array;
                aggregateValue: string;
            }[];
        };
        reservedRange: {
            start: number;
            end: number;
        }[];
        reservedName: string[];
    };
}
export declare module EnumDescriptorProto {
    class EnumReservedRange implements GrpcMessage {
        static toBinary(instance: EnumReservedRange): any;
        static fromBinary(bytes: ByteSource): EnumReservedRange;
        static refineValues(instance: EnumReservedRange): void;
        static fromBinaryReader(instance: EnumReservedRange, reader: BinaryReader): void;
        static toBinaryWriter(instance: EnumReservedRange, writer: BinaryWriter): void;
        private _start?;
        private _end?;
        /**
         * Creates an object and applies default Protobuf values
         * @param EnumReservedRange value
         */
        constructor(value?: RecursivePartial<EnumReservedRange>);
        get start(): number | undefined;
        set start(value: number | undefined);
        get end(): number | undefined;
        set end(value: number | undefined);
        toObject(): {
            start: number;
            end: number;
        };
        toJSON(): {
            start: number;
            end: number;
        };
    }
    module EnumReservedRange { }
}
export declare class EnumValueDescriptorProto implements GrpcMessage {
    static toBinary(instance: EnumValueDescriptorProto): any;
    static fromBinary(bytes: ByteSource): EnumValueDescriptorProto;
    static refineValues(instance: EnumValueDescriptorProto): void;
    static fromBinaryReader(instance: EnumValueDescriptorProto, reader: BinaryReader): void;
    static toBinaryWriter(instance: EnumValueDescriptorProto, writer: BinaryWriter): void;
    private _name?;
    private _number?;
    private _options?;
    /**
     * Creates an object and applies default Protobuf values
     * @param EnumValueDescriptorProto value
     */
    constructor(value?: RecursivePartial<EnumValueDescriptorProto>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get number(): number | undefined;
    set number(value: number | undefined);
    get options(): EnumValueOptions | undefined;
    set options(value: EnumValueOptions | undefined);
    toObject(): {
        name: string;
        number: number;
        options: {
            deprecated: boolean;
            uninterpretedOption: {
                name: {
                    namePart: string;
                    isExtension: boolean;
                }[];
                identifierValue: string;
                positiveIntValue: string;
                negativeIntValue: string;
                doubleValue: number;
                stringValue: Uint8Array;
                aggregateValue: string;
            }[];
        };
    };
    toJSON(): {
        name: string;
        number: number;
        options: {
            deprecated: boolean;
            uninterpretedOption: {
                name: {
                    namePart: string;
                    isExtension: boolean;
                }[];
                identifierValue: string;
                positiveIntValue: string;
                negativeIntValue: string;
                doubleValue: number;
                stringValue: Uint8Array;
                aggregateValue: string;
            }[];
        };
    };
}
export declare module EnumValueDescriptorProto { }
export declare class ServiceDescriptorProto implements GrpcMessage {
    static toBinary(instance: ServiceDescriptorProto): any;
    static fromBinary(bytes: ByteSource): ServiceDescriptorProto;
    static refineValues(instance: ServiceDescriptorProto): void;
    static fromBinaryReader(instance: ServiceDescriptorProto, reader: BinaryReader): void;
    static toBinaryWriter(instance: ServiceDescriptorProto, writer: BinaryWriter): void;
    private _name?;
    private _method?;
    private _options?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ServiceDescriptorProto value
     */
    constructor(value?: RecursivePartial<ServiceDescriptorProto>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get method(): MethodDescriptorProto[] | undefined;
    set method(value: MethodDescriptorProto[] | undefined);
    get options(): ServiceOptions | undefined;
    set options(value: ServiceOptions | undefined);
    toObject(): {
        name: string;
        method: {
            name: string;
            inputType: string;
            outputType: string;
            options: {
                deprecated: boolean;
                idempotencyLevel: MethodOptions.IdempotencyLevel;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: Uint8Array;
                    aggregateValue: string;
                }[];
            };
            clientStreaming: boolean;
            serverStreaming: boolean;
        }[];
        options: {
            deprecated: boolean;
            uninterpretedOption: {
                name: {
                    namePart: string;
                    isExtension: boolean;
                }[];
                identifierValue: string;
                positiveIntValue: string;
                negativeIntValue: string;
                doubleValue: number;
                stringValue: Uint8Array;
                aggregateValue: string;
            }[];
        };
    };
    toJSON(): {
        name: string;
        method: {
            name: string;
            inputType: string;
            outputType: string;
            options: {
                deprecated: boolean;
                idempotencyLevel: MethodOptions.IdempotencyLevel;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: Uint8Array;
                    aggregateValue: string;
                }[];
            };
            clientStreaming: boolean;
            serverStreaming: boolean;
        }[];
        options: {
            deprecated: boolean;
            uninterpretedOption: {
                name: {
                    namePart: string;
                    isExtension: boolean;
                }[];
                identifierValue: string;
                positiveIntValue: string;
                negativeIntValue: string;
                doubleValue: number;
                stringValue: Uint8Array;
                aggregateValue: string;
            }[];
        };
    };
}
export declare module ServiceDescriptorProto { }
export declare class MethodDescriptorProto implements GrpcMessage {
    static toBinary(instance: MethodDescriptorProto): any;
    static fromBinary(bytes: ByteSource): MethodDescriptorProto;
    static refineValues(instance: MethodDescriptorProto): void;
    static fromBinaryReader(instance: MethodDescriptorProto, reader: BinaryReader): void;
    static toBinaryWriter(instance: MethodDescriptorProto, writer: BinaryWriter): void;
    private _name?;
    private _inputType?;
    private _outputType?;
    private _options?;
    private _clientStreaming?;
    private _serverStreaming?;
    /**
     * Creates an object and applies default Protobuf values
     * @param MethodDescriptorProto value
     */
    constructor(value?: RecursivePartial<MethodDescriptorProto>);
    get name(): string | undefined;
    set name(value: string | undefined);
    get inputType(): string | undefined;
    set inputType(value: string | undefined);
    get outputType(): string | undefined;
    set outputType(value: string | undefined);
    get options(): MethodOptions | undefined;
    set options(value: MethodOptions | undefined);
    get clientStreaming(): boolean | undefined;
    set clientStreaming(value: boolean | undefined);
    get serverStreaming(): boolean | undefined;
    set serverStreaming(value: boolean | undefined);
    toObject(): {
        name: string;
        inputType: string;
        outputType: string;
        options: {
            deprecated: boolean;
            idempotencyLevel: MethodOptions.IdempotencyLevel;
            uninterpretedOption: {
                name: {
                    namePart: string;
                    isExtension: boolean;
                }[];
                identifierValue: string;
                positiveIntValue: string;
                negativeIntValue: string;
                doubleValue: number;
                stringValue: Uint8Array;
                aggregateValue: string;
            }[];
        };
        clientStreaming: boolean;
        serverStreaming: boolean;
    };
    toJSON(): {
        name: string;
        inputType: string;
        outputType: string;
        options: {
            deprecated: boolean;
            idempotencyLevel: MethodOptions.IdempotencyLevel;
            uninterpretedOption: {
                name: {
                    namePart: string;
                    isExtension: boolean;
                }[];
                identifierValue: string;
                positiveIntValue: string;
                negativeIntValue: string;
                doubleValue: number;
                stringValue: Uint8Array;
                aggregateValue: string;
            }[];
        };
        clientStreaming: boolean;
        serverStreaming: boolean;
    };
}
export declare module MethodDescriptorProto { }
export declare class FileOptions implements GrpcMessage {
    static toBinary(instance: FileOptions): any;
    static fromBinary(bytes: ByteSource): FileOptions;
    static refineValues(instance: FileOptions): void;
    static fromBinaryReader(instance: FileOptions, reader: BinaryReader): void;
    static toBinaryWriter(instance: FileOptions, writer: BinaryWriter): void;
    private _javaPackage?;
    private _javaOuterClassname?;
    private _javaMultipleFiles?;
    private _javaGenerateEqualsAndHash?;
    private _javaStringCheckUtf8?;
    private _optimizeFor?;
    private _goPackage?;
    private _ccGenericServices?;
    private _javaGenericServices?;
    private _pyGenericServices?;
    private _phpGenericServices?;
    private _deprecated?;
    private _ccEnableArenas?;
    private _objcClassPrefix?;
    private _csharpNamespace?;
    private _swiftPrefix?;
    private _phpClassPrefix?;
    private _phpNamespace?;
    private _phpMetadataNamespace?;
    private _rubyPackage?;
    private _uninterpretedOption?;
    /**
     * Creates an object and applies default Protobuf values
     * @param FileOptions value
     */
    constructor(value?: RecursivePartial<FileOptions>);
    get javaPackage(): string | undefined;
    set javaPackage(value: string | undefined);
    get javaOuterClassname(): string | undefined;
    set javaOuterClassname(value: string | undefined);
    get javaMultipleFiles(): boolean | undefined;
    set javaMultipleFiles(value: boolean | undefined);
    get javaGenerateEqualsAndHash(): boolean | undefined;
    set javaGenerateEqualsAndHash(value: boolean | undefined);
    get javaStringCheckUtf8(): boolean | undefined;
    set javaStringCheckUtf8(value: boolean | undefined);
    get optimizeFor(): FileOptions.OptimizeMode | undefined;
    set optimizeFor(value: FileOptions.OptimizeMode | undefined);
    get goPackage(): string | undefined;
    set goPackage(value: string | undefined);
    get ccGenericServices(): boolean | undefined;
    set ccGenericServices(value: boolean | undefined);
    get javaGenericServices(): boolean | undefined;
    set javaGenericServices(value: boolean | undefined);
    get pyGenericServices(): boolean | undefined;
    set pyGenericServices(value: boolean | undefined);
    get phpGenericServices(): boolean | undefined;
    set phpGenericServices(value: boolean | undefined);
    get deprecated(): boolean | undefined;
    set deprecated(value: boolean | undefined);
    get ccEnableArenas(): boolean | undefined;
    set ccEnableArenas(value: boolean | undefined);
    get objcClassPrefix(): string | undefined;
    set objcClassPrefix(value: string | undefined);
    get csharpNamespace(): string | undefined;
    set csharpNamespace(value: string | undefined);
    get swiftPrefix(): string | undefined;
    set swiftPrefix(value: string | undefined);
    get phpClassPrefix(): string | undefined;
    set phpClassPrefix(value: string | undefined);
    get phpNamespace(): string | undefined;
    set phpNamespace(value: string | undefined);
    get phpMetadataNamespace(): string | undefined;
    set phpMetadataNamespace(value: string | undefined);
    get rubyPackage(): string | undefined;
    set rubyPackage(value: string | undefined);
    get uninterpretedOption(): UninterpretedOption[] | undefined;
    set uninterpretedOption(value: UninterpretedOption[] | undefined);
    toObject(): {
        javaPackage: string;
        javaOuterClassname: string;
        javaMultipleFiles: boolean;
        javaGenerateEqualsAndHash: boolean;
        javaStringCheckUtf8: boolean;
        optimizeFor: FileOptions.OptimizeMode;
        goPackage: string;
        ccGenericServices: boolean;
        javaGenericServices: boolean;
        pyGenericServices: boolean;
        phpGenericServices: boolean;
        deprecated: boolean;
        ccEnableArenas: boolean;
        objcClassPrefix: string;
        csharpNamespace: string;
        swiftPrefix: string;
        phpClassPrefix: string;
        phpNamespace: string;
        phpMetadataNamespace: string;
        rubyPackage: string;
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
    toJSON(): {
        javaPackage: string;
        javaOuterClassname: string;
        javaMultipleFiles: boolean;
        javaGenerateEqualsAndHash: boolean;
        javaStringCheckUtf8: boolean;
        optimizeFor: FileOptions.OptimizeMode;
        goPackage: string;
        ccGenericServices: boolean;
        javaGenericServices: boolean;
        pyGenericServices: boolean;
        phpGenericServices: boolean;
        deprecated: boolean;
        ccEnableArenas: boolean;
        objcClassPrefix: string;
        csharpNamespace: string;
        swiftPrefix: string;
        phpClassPrefix: string;
        phpNamespace: string;
        phpMetadataNamespace: string;
        rubyPackage: string;
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
}
export declare module FileOptions {
    enum OptimizeMode {
        speed = 1,
        codeSize = 2,
        liteRuntime = 3
    }
}
export declare class MessageOptions implements GrpcMessage {
    static toBinary(instance: MessageOptions): any;
    static fromBinary(bytes: ByteSource): MessageOptions;
    static refineValues(instance: MessageOptions): void;
    static fromBinaryReader(instance: MessageOptions, reader: BinaryReader): void;
    static toBinaryWriter(instance: MessageOptions, writer: BinaryWriter): void;
    private _messageSetWireFormat?;
    private _noStandardDescriptorAccessor?;
    private _deprecated?;
    private _mapEntry?;
    private _uninterpretedOption?;
    /**
     * Creates an object and applies default Protobuf values
     * @param MessageOptions value
     */
    constructor(value?: RecursivePartial<MessageOptions>);
    get messageSetWireFormat(): boolean | undefined;
    set messageSetWireFormat(value: boolean | undefined);
    get noStandardDescriptorAccessor(): boolean | undefined;
    set noStandardDescriptorAccessor(value: boolean | undefined);
    get deprecated(): boolean | undefined;
    set deprecated(value: boolean | undefined);
    get mapEntry(): boolean | undefined;
    set mapEntry(value: boolean | undefined);
    get uninterpretedOption(): UninterpretedOption[] | undefined;
    set uninterpretedOption(value: UninterpretedOption[] | undefined);
    toObject(): {
        messageSetWireFormat: boolean;
        noStandardDescriptorAccessor: boolean;
        deprecated: boolean;
        mapEntry: boolean;
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
    toJSON(): {
        messageSetWireFormat: boolean;
        noStandardDescriptorAccessor: boolean;
        deprecated: boolean;
        mapEntry: boolean;
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
}
export declare module MessageOptions { }
export declare class FieldOptions implements GrpcMessage {
    static toBinary(instance: FieldOptions): any;
    static fromBinary(bytes: ByteSource): FieldOptions;
    static refineValues(instance: FieldOptions): void;
    static fromBinaryReader(instance: FieldOptions, reader: BinaryReader): void;
    static toBinaryWriter(instance: FieldOptions, writer: BinaryWriter): void;
    private _ctype?;
    private _packed?;
    private _jstype?;
    private _lazy?;
    private _deprecated?;
    private _weak?;
    private _uninterpretedOption?;
    /**
     * Creates an object and applies default Protobuf values
     * @param FieldOptions value
     */
    constructor(value?: RecursivePartial<FieldOptions>);
    get ctype(): FieldOptions.CType | undefined;
    set ctype(value: FieldOptions.CType | undefined);
    get packed(): boolean | undefined;
    set packed(value: boolean | undefined);
    get jstype(): FieldOptions.JSType | undefined;
    set jstype(value: FieldOptions.JSType | undefined);
    get lazy(): boolean | undefined;
    set lazy(value: boolean | undefined);
    get deprecated(): boolean | undefined;
    set deprecated(value: boolean | undefined);
    get weak(): boolean | undefined;
    set weak(value: boolean | undefined);
    get uninterpretedOption(): UninterpretedOption[] | undefined;
    set uninterpretedOption(value: UninterpretedOption[] | undefined);
    toObject(): {
        ctype: FieldOptions.CType;
        packed: boolean;
        jstype: FieldOptions.JSType;
        lazy: boolean;
        deprecated: boolean;
        weak: boolean;
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
    toJSON(): {
        ctype: FieldOptions.CType;
        packed: boolean;
        jstype: FieldOptions.JSType;
        lazy: boolean;
        deprecated: boolean;
        weak: boolean;
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
}
export declare module FieldOptions {
    enum CType {
        string = 0,
        cord = 1,
        stringPiece = 2
    }
    enum JSType {
        jsNormal = 0,
        jsString = 1,
        jsNumber = 2
    }
}
export declare class OneofOptions implements GrpcMessage {
    static toBinary(instance: OneofOptions): any;
    static fromBinary(bytes: ByteSource): OneofOptions;
    static refineValues(instance: OneofOptions): void;
    static fromBinaryReader(instance: OneofOptions, reader: BinaryReader): void;
    static toBinaryWriter(instance: OneofOptions, writer: BinaryWriter): void;
    private _uninterpretedOption?;
    /**
     * Creates an object and applies default Protobuf values
     * @param OneofOptions value
     */
    constructor(value?: RecursivePartial<OneofOptions>);
    get uninterpretedOption(): UninterpretedOption[] | undefined;
    set uninterpretedOption(value: UninterpretedOption[] | undefined);
    toObject(): {
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
    toJSON(): {
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
}
export declare module OneofOptions { }
export declare class EnumOptions implements GrpcMessage {
    static toBinary(instance: EnumOptions): any;
    static fromBinary(bytes: ByteSource): EnumOptions;
    static refineValues(instance: EnumOptions): void;
    static fromBinaryReader(instance: EnumOptions, reader: BinaryReader): void;
    static toBinaryWriter(instance: EnumOptions, writer: BinaryWriter): void;
    private _allowAlias?;
    private _deprecated?;
    private _uninterpretedOption?;
    /**
     * Creates an object and applies default Protobuf values
     * @param EnumOptions value
     */
    constructor(value?: RecursivePartial<EnumOptions>);
    get allowAlias(): boolean | undefined;
    set allowAlias(value: boolean | undefined);
    get deprecated(): boolean | undefined;
    set deprecated(value: boolean | undefined);
    get uninterpretedOption(): UninterpretedOption[] | undefined;
    set uninterpretedOption(value: UninterpretedOption[] | undefined);
    toObject(): {
        allowAlias: boolean;
        deprecated: boolean;
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
    toJSON(): {
        allowAlias: boolean;
        deprecated: boolean;
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
}
export declare module EnumOptions { }
export declare class EnumValueOptions implements GrpcMessage {
    static toBinary(instance: EnumValueOptions): any;
    static fromBinary(bytes: ByteSource): EnumValueOptions;
    static refineValues(instance: EnumValueOptions): void;
    static fromBinaryReader(instance: EnumValueOptions, reader: BinaryReader): void;
    static toBinaryWriter(instance: EnumValueOptions, writer: BinaryWriter): void;
    private _deprecated?;
    private _uninterpretedOption?;
    /**
     * Creates an object and applies default Protobuf values
     * @param EnumValueOptions value
     */
    constructor(value?: RecursivePartial<EnumValueOptions>);
    get deprecated(): boolean | undefined;
    set deprecated(value: boolean | undefined);
    get uninterpretedOption(): UninterpretedOption[] | undefined;
    set uninterpretedOption(value: UninterpretedOption[] | undefined);
    toObject(): {
        deprecated: boolean;
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
    toJSON(): {
        deprecated: boolean;
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
}
export declare module EnumValueOptions { }
export declare class ServiceOptions implements GrpcMessage {
    static toBinary(instance: ServiceOptions): any;
    static fromBinary(bytes: ByteSource): ServiceOptions;
    static refineValues(instance: ServiceOptions): void;
    static fromBinaryReader(instance: ServiceOptions, reader: BinaryReader): void;
    static toBinaryWriter(instance: ServiceOptions, writer: BinaryWriter): void;
    private _deprecated?;
    private _uninterpretedOption?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ServiceOptions value
     */
    constructor(value?: RecursivePartial<ServiceOptions>);
    get deprecated(): boolean | undefined;
    set deprecated(value: boolean | undefined);
    get uninterpretedOption(): UninterpretedOption[] | undefined;
    set uninterpretedOption(value: UninterpretedOption[] | undefined);
    toObject(): {
        deprecated: boolean;
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
    toJSON(): {
        deprecated: boolean;
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
}
export declare module ServiceOptions { }
export declare class MethodOptions implements GrpcMessage {
    static toBinary(instance: MethodOptions): any;
    static fromBinary(bytes: ByteSource): MethodOptions;
    static refineValues(instance: MethodOptions): void;
    static fromBinaryReader(instance: MethodOptions, reader: BinaryReader): void;
    static toBinaryWriter(instance: MethodOptions, writer: BinaryWriter): void;
    private _deprecated?;
    private _idempotencyLevel?;
    private _uninterpretedOption?;
    /**
     * Creates an object and applies default Protobuf values
     * @param MethodOptions value
     */
    constructor(value?: RecursivePartial<MethodOptions>);
    get deprecated(): boolean | undefined;
    set deprecated(value: boolean | undefined);
    get idempotencyLevel(): MethodOptions.IdempotencyLevel | undefined;
    set idempotencyLevel(value: MethodOptions.IdempotencyLevel | undefined);
    get uninterpretedOption(): UninterpretedOption[] | undefined;
    set uninterpretedOption(value: UninterpretedOption[] | undefined);
    toObject(): {
        deprecated: boolean;
        idempotencyLevel: MethodOptions.IdempotencyLevel;
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
    toJSON(): {
        deprecated: boolean;
        idempotencyLevel: MethodOptions.IdempotencyLevel;
        uninterpretedOption: {
            name: {
                namePart: string;
                isExtension: boolean;
            }[];
            identifierValue: string;
            positiveIntValue: string;
            negativeIntValue: string;
            doubleValue: number;
            stringValue: Uint8Array;
            aggregateValue: string;
        }[];
    };
}
export declare module MethodOptions {
    enum IdempotencyLevel {
        idempotencyUnknown = 0,
        noSideEffects = 1,
        idempotent = 2
    }
}
export declare class UninterpretedOption implements GrpcMessage {
    static toBinary(instance: UninterpretedOption): any;
    static fromBinary(bytes: ByteSource): UninterpretedOption;
    static refineValues(instance: UninterpretedOption): void;
    static fromBinaryReader(instance: UninterpretedOption, reader: BinaryReader): void;
    static toBinaryWriter(instance: UninterpretedOption, writer: BinaryWriter): void;
    private _name?;
    private _identifierValue?;
    private _positiveIntValue?;
    private _negativeIntValue?;
    private _doubleValue?;
    private _stringValue?;
    private _aggregateValue?;
    /**
     * Creates an object and applies default Protobuf values
     * @param UninterpretedOption value
     */
    constructor(value?: RecursivePartial<UninterpretedOption>);
    get name(): UninterpretedOption.NamePart[] | undefined;
    set name(value: UninterpretedOption.NamePart[] | undefined);
    get identifierValue(): string | undefined;
    set identifierValue(value: string | undefined);
    get positiveIntValue(): string | undefined;
    set positiveIntValue(value: string | undefined);
    get negativeIntValue(): string | undefined;
    set negativeIntValue(value: string | undefined);
    get doubleValue(): number | undefined;
    set doubleValue(value: number | undefined);
    get stringValue(): Uint8Array | undefined;
    set stringValue(value: Uint8Array | undefined);
    get aggregateValue(): string | undefined;
    set aggregateValue(value: string | undefined);
    toObject(): {
        name: {
            namePart: string;
            isExtension: boolean;
        }[];
        identifierValue: string;
        positiveIntValue: string;
        negativeIntValue: string;
        doubleValue: number;
        stringValue: Uint8Array;
        aggregateValue: string;
    };
    toJSON(): {
        name: {
            namePart: string;
            isExtension: boolean;
        }[];
        identifierValue: string;
        positiveIntValue: string;
        negativeIntValue: string;
        doubleValue: number;
        stringValue: Uint8Array;
        aggregateValue: string;
    };
}
export declare module UninterpretedOption {
    class NamePart implements GrpcMessage {
        static toBinary(instance: NamePart): any;
        static fromBinary(bytes: ByteSource): NamePart;
        static refineValues(instance: NamePart): void;
        static fromBinaryReader(instance: NamePart, reader: BinaryReader): void;
        static toBinaryWriter(instance: NamePart, writer: BinaryWriter): void;
        private _namePart?;
        private _isExtension?;
        /**
         * Creates an object and applies default Protobuf values
         * @param NamePart value
         */
        constructor(value?: RecursivePartial<NamePart>);
        get namePart(): string | undefined;
        set namePart(value: string | undefined);
        get isExtension(): boolean | undefined;
        set isExtension(value: boolean | undefined);
        toObject(): {
            namePart: string;
            isExtension: boolean;
        };
        toJSON(): {
            namePart: string;
            isExtension: boolean;
        };
    }
    module NamePart { }
}
export declare class SourceCodeInfo implements GrpcMessage {
    static toBinary(instance: SourceCodeInfo): any;
    static fromBinary(bytes: ByteSource): SourceCodeInfo;
    static refineValues(instance: SourceCodeInfo): void;
    static fromBinaryReader(instance: SourceCodeInfo, reader: BinaryReader): void;
    static toBinaryWriter(instance: SourceCodeInfo, writer: BinaryWriter): void;
    private _location?;
    /**
     * Creates an object and applies default Protobuf values
     * @param SourceCodeInfo value
     */
    constructor(value?: RecursivePartial<SourceCodeInfo>);
    get location(): SourceCodeInfo.Location[] | undefined;
    set location(value: SourceCodeInfo.Location[] | undefined);
    toObject(): {
        location: {
            path: number[];
            span: number[];
            leadingComments: string;
            trailingComments: string;
            leadingDetachedComments: string[];
        }[];
    };
    toJSON(): {
        location: {
            path: number[];
            span: number[];
            leadingComments: string;
            trailingComments: string;
            leadingDetachedComments: string[];
        }[];
    };
}
export declare module SourceCodeInfo {
    class Location implements GrpcMessage {
        static toBinary(instance: Location): any;
        static fromBinary(bytes: ByteSource): Location;
        static refineValues(instance: Location): void;
        static fromBinaryReader(instance: Location, reader: BinaryReader): void;
        static toBinaryWriter(instance: Location, writer: BinaryWriter): void;
        private _path?;
        private _span?;
        private _leadingComments?;
        private _trailingComments?;
        private _leadingDetachedComments?;
        /**
         * Creates an object and applies default Protobuf values
         * @param Location value
         */
        constructor(value?: RecursivePartial<Location>);
        get path(): number[] | undefined;
        set path(value: number[] | undefined);
        get span(): number[] | undefined;
        set span(value: number[] | undefined);
        get leadingComments(): string | undefined;
        set leadingComments(value: string | undefined);
        get trailingComments(): string | undefined;
        set trailingComments(value: string | undefined);
        get leadingDetachedComments(): string[] | undefined;
        set leadingDetachedComments(value: string[] | undefined);
        toObject(): {
            path: number[];
            span: number[];
            leadingComments: string;
            trailingComments: string;
            leadingDetachedComments: string[];
        };
        toJSON(): {
            path: number[];
            span: number[];
            leadingComments: string;
            trailingComments: string;
            leadingDetachedComments: string[];
        };
    }
    module Location { }
}
export declare class GeneratedCodeInfo implements GrpcMessage {
    static toBinary(instance: GeneratedCodeInfo): any;
    static fromBinary(bytes: ByteSource): GeneratedCodeInfo;
    static refineValues(instance: GeneratedCodeInfo): void;
    static fromBinaryReader(instance: GeneratedCodeInfo, reader: BinaryReader): void;
    static toBinaryWriter(instance: GeneratedCodeInfo, writer: BinaryWriter): void;
    private _annotation?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GeneratedCodeInfo value
     */
    constructor(value?: RecursivePartial<GeneratedCodeInfo>);
    get annotation(): GeneratedCodeInfo.Annotation[] | undefined;
    set annotation(value: GeneratedCodeInfo.Annotation[] | undefined);
    toObject(): {
        annotation: {
            path: number[];
            sourceFile: string;
            begin: number;
            end: number;
        }[];
    };
    toJSON(): {
        annotation: {
            path: number[];
            sourceFile: string;
            begin: number;
            end: number;
        }[];
    };
}
export declare module GeneratedCodeInfo {
    class Annotation implements GrpcMessage {
        static toBinary(instance: Annotation): any;
        static fromBinary(bytes: ByteSource): Annotation;
        static refineValues(instance: Annotation): void;
        static fromBinaryReader(instance: Annotation, reader: BinaryReader): void;
        static toBinaryWriter(instance: Annotation, writer: BinaryWriter): void;
        private _path?;
        private _sourceFile?;
        private _begin?;
        private _end?;
        /**
         * Creates an object and applies default Protobuf values
         * @param Annotation value
         */
        constructor(value?: RecursivePartial<Annotation>);
        get path(): number[] | undefined;
        set path(value: number[] | undefined);
        get sourceFile(): string | undefined;
        set sourceFile(value: string | undefined);
        get begin(): number | undefined;
        set begin(value: number | undefined);
        get end(): number | undefined;
        set end(value: number | undefined);
        toObject(): {
            path: number[];
            sourceFile: string;
            begin: number;
            end: number;
        };
        toJSON(): {
            path: number[];
            sourceFile: string;
            begin: number;
            end: number;
        };
    }
    module Annotation { }
}
