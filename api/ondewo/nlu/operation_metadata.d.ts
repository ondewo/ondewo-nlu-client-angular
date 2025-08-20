import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../../google/protobuf/timestamp";
/**
 * Represents the metadata of the long-running operation that can be a parent operation for sub-operations or
 * can be a sub-operation itself
 *
 * @generated from protobuf message ondewo.nlu.OperationMetadata
 */
export interface OperationMetadata {
    /**
     * long-running operation status code
     *
     * @generated from protobuf field: ondewo.nlu.OperationMetadata.Status status = 1;
     */
    status: OperationMetadata_Status;
    /**
     * parent operation name
     *
     * @generated from protobuf field: string parent_operation_name = 2;
     */
    parentOperationName: string;
    /**
     * list of the sub-operations' names of the operation
     *
     * @generated from protobuf field: repeated string sub_operation_names = 3;
     */
    subOperationNames: string[];
    /**
     * the time the operation was submitted.
     *
     * @generated from protobuf field: google.protobuf.Timestamp create_time = 4;
     */
    createTime?: Timestamp;
    /**
     * the time operation processing started.
     *
     * @generated from protobuf field: google.protobuf.Timestamp start_time = 5;
     */
    startTime?: Timestamp;
    /**
     * the time operation processing completed.
     *
     * @generated from protobuf field: google.protobuf.Timestamp end_time = 6;
     */
    endTime?: Timestamp;
    /**
     * indicates whether a request to cancel this operation has been made.
     *
     * @generated from protobuf field: bool is_cancellation_requested = 7;
     */
    isCancellationRequested: boolean;
    /**
     * command executed at cancel operation
     *
     * @generated from protobuf field: string cancel_command = 8;
     */
    cancelCommand: string;
    /**
     * id of the user who created the operation
     *
     * @generated from protobuf field: string user_id_created = 9;
     */
    userIdCreated: string;
    /**
     * id of the user who cancelled the operation
     *
     * @generated from protobuf field: string user_id_cancelled = 10;
     */
    userIdCancelled: string;
    /**
     * project parent name, e.g. "projects/pepper/agent"
     *
     * @generated from protobuf field: string project_parent = 11;
     */
    projectParent: string;
    /**
     * operation type
     *
     * @generated from protobuf field: ondewo.nlu.OperationMetadata.OperationType operation_type = 12;
     */
    operationType: OperationMetadata_OperationType;
    /**
     * name of the host where the operation was executed
     *
     * @generated from protobuf field: string host_name = 13;
     */
    hostName: string;
    /**
     * number of times the operation was re-run
     *
     * @generated from protobuf field: int32 num_reruns = 14;
     */
    numReruns: number;
    /**
     * maximum number of re-runs in case the operation fails
     *
     * @generated from protobuf field: int32 max_num_reruns = 15;
     */
    maxNumReruns: number;
    /**
     * description, normally needed for sub operations when type is OPERATION_TYPE_UNSPECIFIED
     *
     * @generated from protobuf field: string description = 16;
     */
    description: string;
    /**
     * The log output of an operation
     *
     * @generated from protobuf field: repeated string log = 17;
     */
    log: string[];
    /**
     * The log output of an operation limited to the last x log entries
     *
     * @generated from protobuf field: int32 log_limit = 18;
     */
    logLimit: number;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 19;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 20;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 21;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 22;
     */
    modifiedBy: string;
}
/**
 * Structure to set status of operation. An operation may not be started if NOT_STARTED is set, in
 * progress if IN_PROGRESS, finished if DONE, interrupted if CANCELED or failed if FAILED.
 *
 * @generated from protobuf enum ondewo.nlu.OperationMetadata.Status
 */
export declare enum OperationMetadata_Status {
    /**
     * unspecified status code
     *
     * @generated from protobuf enum value: STATUS_UNSPECIFIED = 0;
     */
    STATUS_UNSPECIFIED = 0,
    /**
     * operation haven't started yet
     *
     * @generated from protobuf enum value: NOT_STARTED = 1;
     */
    NOT_STARTED = 1,
    /**
     * operation currently in progress
     *
     * @generated from protobuf enum value: IN_PROGRESS = 2;
     */
    IN_PROGRESS = 2,
    /**
     * operation has completed without any error
     *
     * @generated from protobuf enum value: DONE = 3;
     */
    DONE = 3,
    /**
     * operation has completed with cancellation by user
     *
     * @generated from protobuf enum value: CANCELLED = 4;
     */
    CANCELLED = 4,
    /**
     * operation has completed with errors
     *
     * @generated from protobuf enum value: FAILED = 5;
     */
    FAILED = 5
}
/**
 * Type of operation. It can be creating, importing, exporting, deleting, restoring, building cache,
 * training or exporting benchmark an agent
 *
 * @generated from protobuf enum ondewo.nlu.OperationMetadata.OperationType
 */
export declare enum OperationMetadata_OperationType {
    /**
     * unspecified operation type
     *
     * @generated from protobuf enum value: OPERATION_TYPE_UNSPECIFIED = 0;
     */
    OPERATION_TYPE_UNSPECIFIED = 0,
    /**
     * create a new agent with specified configuration
     *
     * @generated from protobuf enum value: CREATE_AGENT = 1;
     */
    CREATE_AGENT = 1,
    /**
     * import agent from a zip file
     *
     * @generated from protobuf enum value: IMPORT_AGENT = 2;
     */
    IMPORT_AGENT = 2,
    /**
     * export agent to a zip file
     *
     * @generated from protobuf enum value: EXPORT_AGENT = 3;
     */
    EXPORT_AGENT = 3,
    /**
     * delete agent
     *
     * @generated from protobuf enum value: DELETE_AGENT = 4;
     */
    DELETE_AGENT = 4,
    /**
     * restore agent
     *
     * @generated from protobuf enum value: RESTORE_AGENT = 5;
     */
    RESTORE_AGENT = 5,
    /**
     * build agent cache
     *
     * @generated from protobuf enum value: BUILD_AGENT_CACHE = 6;
     */
    BUILD_AGENT_CACHE = 6,
    /**
     * train agent
     *
     * @generated from protobuf enum value: TRAIN_AGENT = 7;
     */
    TRAIN_AGENT = 7,
    /**
     * export benchmark agent to a zip file
     *
     * @generated from protobuf enum value: EXPORT_BENCHMARK_AGENT = 8;
     */
    EXPORT_BENCHMARK_AGENT = 8,
    /**
     * force loading agent data for full text search
     *
     * @generated from protobuf enum value: INDEX_AGENT = 9;
     */
    INDEX_AGENT = 9
}
declare class OperationMetadata$Type extends MessageType<OperationMetadata> {
    constructor();
    create(value?: PartialMessage<OperationMetadata>): OperationMetadata;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OperationMetadata): OperationMetadata;
    internalBinaryWrite(message: OperationMetadata, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.OperationMetadata
 */
export declare const OperationMetadata: OperationMetadata$Type;
export {};
