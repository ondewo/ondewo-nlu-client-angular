import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '../../google/protobuf/timestamp.pb';
export declare class OperationMetadata implements GrpcMessage {
    static toBinary(instance: OperationMetadata): any;
    static fromBinary(bytes: ByteSource): OperationMetadata;
    static refineValues(instance: OperationMetadata): void;
    static fromBinaryReader(instance: OperationMetadata, reader: BinaryReader): void;
    static toBinaryWriter(instance: OperationMetadata, writer: BinaryWriter): void;
    private _status?;
    private _parentOperationName?;
    private _subOperationNames?;
    private _createTime?;
    private _startTime?;
    private _endTime?;
    private _isCancellationRequested?;
    private _cancelCommand?;
    private _userIdCreated?;
    private _userIdCancelled?;
    private _projectParent?;
    private _operationType?;
    private _hostName?;
    private _numReruns?;
    private _maxNumReruns?;
    /**
     * Creates an object and applies default Protobuf values
     * @param OperationMetadata value
     */
    constructor(value?: RecursivePartial<OperationMetadata>);
    get status(): OperationMetadata.Status | undefined;
    set status(value: OperationMetadata.Status | undefined);
    get parentOperationName(): string | undefined;
    set parentOperationName(value: string | undefined);
    get subOperationNames(): string[] | undefined;
    set subOperationNames(value: string[] | undefined);
    get createTime(): googleProtobuf000.Timestamp | undefined;
    set createTime(value: googleProtobuf000.Timestamp | undefined);
    get startTime(): googleProtobuf000.Timestamp | undefined;
    set startTime(value: googleProtobuf000.Timestamp | undefined);
    get endTime(): googleProtobuf000.Timestamp | undefined;
    set endTime(value: googleProtobuf000.Timestamp | undefined);
    get isCancellationRequested(): boolean | undefined;
    set isCancellationRequested(value: boolean | undefined);
    get cancelCommand(): string | undefined;
    set cancelCommand(value: string | undefined);
    get userIdCreated(): string | undefined;
    set userIdCreated(value: string | undefined);
    get userIdCancelled(): string | undefined;
    set userIdCancelled(value: string | undefined);
    get projectParent(): string | undefined;
    set projectParent(value: string | undefined);
    get operationType(): OperationMetadata.OperationType | undefined;
    set operationType(value: OperationMetadata.OperationType | undefined);
    get hostName(): string | undefined;
    set hostName(value: string | undefined);
    get numReruns(): number | undefined;
    set numReruns(value: number | undefined);
    get maxNumReruns(): number | undefined;
    set maxNumReruns(value: number | undefined);
    toObject(): {
        status: OperationMetadata.Status;
        parentOperationName: string;
        subOperationNames: string[];
        createTime: {
            seconds: string;
            nanos: number;
        };
        startTime: {
            seconds: string;
            nanos: number;
        };
        endTime: {
            seconds: string;
            nanos: number;
        };
        isCancellationRequested: boolean;
        cancelCommand: string;
        userIdCreated: string;
        userIdCancelled: string;
        projectParent: string;
        operationType: OperationMetadata.OperationType;
        hostName: string;
        numReruns: number;
        maxNumReruns: number;
    };
    toJSON(): {
        status: OperationMetadata.Status;
        parentOperationName: string;
        subOperationNames: string[];
        createTime: {
            seconds: string;
            nanos: number;
        };
        startTime: {
            seconds: string;
            nanos: number;
        };
        endTime: {
            seconds: string;
            nanos: number;
        };
        isCancellationRequested: boolean;
        cancelCommand: string;
        userIdCreated: string;
        userIdCancelled: string;
        projectParent: string;
        operationType: OperationMetadata.OperationType;
        hostName: string;
        numReruns: number;
        maxNumReruns: number;
    };
}
export declare module OperationMetadata {
    enum Status {
        statusUnspecified = 0,
        notStarted = 1,
        inProgress = 2,
        done = 3,
        cancelled = 4,
        failed = 5
    }
    enum OperationType {
        operationTypeUnspecified = 0,
        createAgent = 1,
        importAgent = 2,
        exportAgent = 3,
        deleteAgent = 4,
        restoreAgent = 5,
        buildAgentCache = 6,
        trainAgent = 7
    }
}
