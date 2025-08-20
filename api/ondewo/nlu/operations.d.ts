import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../../google/protobuf/timestamp";
import { OperationMetadata_OperationType } from "./operation_metadata";
import { OperationMetadata_Status } from "./operation_metadata";
import { Any } from "../../google/protobuf/any";
import { Status } from "../../google/rpc/status";
import { OperationMetadata } from "./operation_metadata";
/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 *
 * @generated from protobuf message ondewo.nlu.Operation
 */
export interface Operation {
    /**
     * The server-assigned name, which is only unique within the same service that
     * originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `operations/some/unique/name`.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     *
     * @generated from protobuf field: ondewo.nlu.OperationMetadata metadata = 2;
     */
    metadata?: OperationMetadata;
    /**
     * If the value is `false`, it means the operation is still in progress.
     * If true, the operation is completed, and either `error` or `response` is
     * available.
     *
     * @generated from protobuf field: bool done = 3;
     */
    done: boolean;
    /**
     * @generated from protobuf oneof: result
     */
    result: {
        oneofKind: "error";
        /**
         * The error result of the operation in case of failure or cancellation.
         *
         * @generated from protobuf field: google.rpc.Status error = 4;
         */
        error: Status;
    } | {
        oneofKind: "response";
        /**
         * The normal response of the operation in case of success.  If the original
         * method returns no data on success, such as `Delete`, the response is
         * `google.protobuf.Empty`.  If the original method is standard
         * `Get`/`Create`/`Update`, the response should be the resource.  For other
         * methods, the response should have the type `XxxResponse`, where `Xxx`
         * is the original method name.  For example, if the original method name
         * is `TakeSnapshot()`, the inferred response type is
         * `TakeSnapshotResponse`.
         *
         * @generated from protobuf field: google.protobuf.Any response = 5;
         */
        response: Any;
    } | {
        oneofKind: undefined;
    };
}
/**
 * The request message for [Operations.GetOperation][ondewo.nlu.Operations.GetOperation].
 *
 * @generated from protobuf message ondewo.nlu.GetOperationRequest
 */
export interface GetOperationRequest {
    /**
     * The name of the operation resource.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * The request message for [Operations.ListOperations][ondewo.nlu.Operations.ListOperations].
 *
 * @generated from protobuf message ondewo.nlu.ListOperationsRequest
 */
export interface ListOperationsRequest {
    /**
     * The name of the operation collection.
     *
     * @generated from protobuf field: string name = 4;
     */
    name: string;
    /**
     * The standard list filter.
     *
     * @generated from protobuf field: string filter = 1;
     */
    filter: string;
    /**
     * The standard list page size.
     *
     * @generated from protobuf field: int32 page_size = 2;
     */
    pageSize: number;
    /**
     * Optional: The page token to support pagination.
     * Pagination allows you to retrieve a large result set in smaller, more manageable portions.
     * The page token is a string representing the current index and page size.
     *
     * Valid page token strings:
     * * "" (empty string) - Retrieves the first page.
     * * "current_index-0--page_size-20" - Retrieves the first page with a page size of 20.
     * * "current_index-1--page_size-20" - Retrieves the second page with a page size of 20.
     *
     * Index starts at 0.
     *
     * Examples of valid page token strings:
     * * ""
     * * "current_index-0--page_size-20"
     * * "current_index-1--page_size-20"
     * * "current_index-10--page_size-20"
     *
     * Examples of invalid page token strings:
     * * "1"
     * * "current_index-0--page_size-20"
     * * "current_index--1--page_size-20"
     * * "current_index1--page_size-20"
     * * "current_index-1--page_size--20"
     *
     * @generated from protobuf field: string page_token = 3;
     */
    pageToken: string;
    /**
     * Optional. A filter to narrow the response down to operations of interest.
     *
     * @generated from protobuf field: ondewo.nlu.OperationFilter operation_filter = 5;
     */
    operationFilter?: OperationFilter;
}
/**
 * This message contains an operation filter
 *
 * @generated from protobuf message ondewo.nlu.OperationFilter
 */
export interface OperationFilter {
    /**
     * An operationFilter can be used in some requests to return only operations matching certain filter conditions.
     *
     * All fields below are  optional. Multiple fields specified at the same time are chained via OR.
     * Match operations with any of the following project parents.
     *
     * @generated from protobuf field: repeated string project_parents = 1;
     */
    projectParents: string[];
    /**
     * Match operation which had any of the following operation statuses.
     *
     * @generated from protobuf field: repeated ondewo.nlu.OperationMetadata.Status statuses = 2;
     */
    statuses: OperationMetadata_Status[];
    /**
     * Match operation which had any of the following operation types.
     *
     * @generated from protobuf field: repeated ondewo.nlu.OperationMetadata.OperationType types = 3;
     */
    types: OperationMetadata_OperationType[];
    /**
     * @generated from protobuf oneof: start_time_oneof
     */
    startTimeOneof: {
        oneofKind: "startTime";
        /**
         * The time operation processing started.
         *
         * @generated from protobuf field: google.protobuf.Timestamp start_time = 4;
         */
        startTime: Timestamp;
    } | {
        oneofKind: undefined;
    };
    /**
     * @generated from protobuf oneof: end_time_oneof
     */
    endTimeOneof: {
        oneofKind: "endTime";
        /**
         * The time operation processing completed.
         *
         * @generated from protobuf field: google.protobuf.Timestamp end_time = 5;
         */
        endTime: Timestamp;
    } | {
        oneofKind: undefined;
    };
    /**
     * Match operation which had any of the following user_ids.
     *
     * @generated from protobuf field: repeated string user_ids = 6;
     */
    userIds: string[];
}
/**
 * The response message for [Operations.ListOperations][ondewo.nlu.Operations.ListOperations].
 *
 * @generated from protobuf message ondewo.nlu.ListOperationsResponse
 */
export interface ListOperationsResponse {
    /**
     * A list of operations that matches the specified filter in the request.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Operation operations = 1;
     */
    operations: Operation[];
    /**
     * The next_page_token is used to retrieve the next page of a returned result,
     * e.g. next_page_token is current_index-2
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * The request message for [Operations.CancelOperation][ondewo.nlu.Operations.CancelOperation].
 *
 * @generated from protobuf message ondewo.nlu.CancelOperationRequest
 */
export interface CancelOperationRequest {
    /**
     * The name of the operation resource to be cancelled.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * The request message for [Operations.DeleteOperation][ondewo.nlu.Operations.DeleteOperation].
 *
 * @generated from protobuf message ondewo.nlu.DeleteOperationRequest
 */
export interface DeleteOperationRequest {
    /**
     * The name of the operation resource to be deleted.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
declare class Operation$Type extends MessageType<Operation> {
    constructor();
    create(value?: PartialMessage<Operation>): Operation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Operation): Operation;
    internalBinaryWrite(message: Operation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Operation
 */
export declare const Operation: Operation$Type;
declare class GetOperationRequest$Type extends MessageType<GetOperationRequest> {
    constructor();
    create(value?: PartialMessage<GetOperationRequest>): GetOperationRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetOperationRequest): GetOperationRequest;
    internalBinaryWrite(message: GetOperationRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetOperationRequest
 */
export declare const GetOperationRequest: GetOperationRequest$Type;
declare class ListOperationsRequest$Type extends MessageType<ListOperationsRequest> {
    constructor();
    create(value?: PartialMessage<ListOperationsRequest>): ListOperationsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListOperationsRequest): ListOperationsRequest;
    internalBinaryWrite(message: ListOperationsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListOperationsRequest
 */
export declare const ListOperationsRequest: ListOperationsRequest$Type;
declare class OperationFilter$Type extends MessageType<OperationFilter> {
    constructor();
    create(value?: PartialMessage<OperationFilter>): OperationFilter;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OperationFilter): OperationFilter;
    internalBinaryWrite(message: OperationFilter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.OperationFilter
 */
export declare const OperationFilter: OperationFilter$Type;
declare class ListOperationsResponse$Type extends MessageType<ListOperationsResponse> {
    constructor();
    create(value?: PartialMessage<ListOperationsResponse>): ListOperationsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListOperationsResponse): ListOperationsResponse;
    internalBinaryWrite(message: ListOperationsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListOperationsResponse
 */
export declare const ListOperationsResponse: ListOperationsResponse$Type;
declare class CancelOperationRequest$Type extends MessageType<CancelOperationRequest> {
    constructor();
    create(value?: PartialMessage<CancelOperationRequest>): CancelOperationRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CancelOperationRequest): CancelOperationRequest;
    internalBinaryWrite(message: CancelOperationRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.CancelOperationRequest
 */
export declare const CancelOperationRequest: CancelOperationRequest$Type;
declare class DeleteOperationRequest$Type extends MessageType<DeleteOperationRequest> {
    constructor();
    create(value?: PartialMessage<DeleteOperationRequest>): DeleteOperationRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteOperationRequest): DeleteOperationRequest;
    internalBinaryWrite(message: DeleteOperationRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.DeleteOperationRequest
 */
export declare const DeleteOperationRequest: DeleteOperationRequest$Type;
/**
 * @generated ServiceType for protobuf service ondewo.nlu.Operations
 */
export declare const Operations: ServiceType;
export {};
