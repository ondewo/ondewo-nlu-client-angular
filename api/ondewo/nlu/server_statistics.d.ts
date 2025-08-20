import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * Request to get user project count
 *
 * @generated from protobuf message ondewo.nlu.GetUserProjectCountRequest
 */
export interface GetUserProjectCountRequest {
    /**
     * Required. The ID of the User to count the projects from
     *
     * @generated from protobuf field: string user_id = 1;
     */
    userId: string;
}
declare class GetUserProjectCountRequest$Type extends MessageType<GetUserProjectCountRequest> {
    constructor();
    create(value?: PartialMessage<GetUserProjectCountRequest>): GetUserProjectCountRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserProjectCountRequest): GetUserProjectCountRequest;
    internalBinaryWrite(message: GetUserProjectCountRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.GetUserProjectCountRequest
 */
export declare const GetUserProjectCountRequest: GetUserProjectCountRequest$Type;
/**
 * @generated ServiceType for protobuf service ondewo.nlu.ServerStatistics
 */
export declare const ServerStatistics: ServiceType;
export {};
