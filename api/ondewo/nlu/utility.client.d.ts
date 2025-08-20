import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { AddTrainingPhrasesFromCSVRequest } from "./utility";
import type { AddTrainingPhrasesResponse } from "./utility";
import type { AddTrainingPhrasesRequest } from "./utility";
import type { CleanEntityTypeResponse } from "./utility";
import type { CleanEntityTypeRequest } from "./utility";
import type { CleanAllEntityTypesResponse } from "./utility";
import type { CleanAllEntityTypesRequest } from "./utility";
import type { CleanIntentResponse } from "./utility";
import type { CleanIntentRequest } from "./utility";
import type { CleanAllIntentsResponse } from "./utility";
import type { CleanAllIntentsRequest } from "./utility";
import type { ValidateEmbeddedRegexResponse } from "./utility";
import type { ValidateEmbeddedRegexRequest } from "./utility";
import type { ValidateRegexResponse } from "./utility";
import type { ValidateRegexRequest } from "./utility";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * This is collection of utility endpoints, intended to language-independent operations,
 * such as code checks, regex checks, etc.
 * Holds a collection of utility functions
 *
 * @generated from protobuf service ondewo.nlu.Utilities
 */
export interface IUtilitiesClient {
    /**
     * Validates the validity of python regexes
     *
     * @generated from protobuf rpc: ValidateRegex(ondewo.nlu.ValidateRegexRequest) returns (ondewo.nlu.ValidateRegexResponse);
     */
    validateRegex(input: ValidateRegexRequest, options?: RpcOptions): UnaryCall<ValidateRegexRequest, ValidateRegexResponse>;
    /**
     * Validate that entity types with group references have synonyms with
     * capturing groups.
     *
     * @generated from protobuf rpc: ValidateEmbeddedRegex(ondewo.nlu.ValidateEmbeddedRegexRequest) returns (ondewo.nlu.ValidateEmbeddedRegexResponse);
     */
    validateEmbeddedRegex(input: ValidateEmbeddedRegexRequest, options?: RpcOptions): UnaryCall<ValidateEmbeddedRegexRequest, ValidateEmbeddedRegexResponse>;
    /**
     * Cleans all intent training phrases and entity annotations of parent
     *
     * @generated from protobuf rpc: CleanAllIntents(ondewo.nlu.CleanAllIntentsRequest) returns (ondewo.nlu.CleanAllIntentsResponse);
     */
    cleanAllIntents(input: CleanAllIntentsRequest, options?: RpcOptions): UnaryCall<CleanAllIntentsRequest, CleanAllIntentsResponse>;
    /**
     * Cleans single intent training phrases and entity annotations
     *
     * @generated from protobuf rpc: CleanIntent(ondewo.nlu.CleanIntentRequest) returns (ondewo.nlu.CleanIntentResponse);
     */
    cleanIntent(input: CleanIntentRequest, options?: RpcOptions): UnaryCall<CleanIntentRequest, CleanIntentResponse>;
    /**
     * Cleans all entity types of parent
     *
     * @generated from protobuf rpc: CleanAllEntityTypes(ondewo.nlu.CleanAllEntityTypesRequest) returns (ondewo.nlu.CleanAllEntityTypesResponse);
     */
    cleanAllEntityTypes(input: CleanAllEntityTypesRequest, options?: RpcOptions): UnaryCall<CleanAllEntityTypesRequest, CleanAllEntityTypesResponse>;
    /**
     * Cleans entity type
     *
     * @generated from protobuf rpc: CleanEntityType(ondewo.nlu.CleanEntityTypeRequest) returns (ondewo.nlu.CleanEntityTypeResponse);
     */
    cleanEntityType(input: CleanEntityTypeRequest, options?: RpcOptions): UnaryCall<CleanEntityTypeRequest, CleanEntityTypeResponse>;
    /**
     * Creates new training phrases corresponding to intent specified by its intent display name
     *
     * @generated from protobuf rpc: AddTrainingPhrases(ondewo.nlu.AddTrainingPhrasesRequest) returns (ondewo.nlu.AddTrainingPhrasesResponse);
     */
    addTrainingPhrases(input: AddTrainingPhrasesRequest, options?: RpcOptions): UnaryCall<AddTrainingPhrasesRequest, AddTrainingPhrasesResponse>;
    /**
     * Creates new training phrases corresponding to intent specified by its intent display name from csv file
     *
     * @generated from protobuf rpc: AddTrainingPhrasesFromCSV(ondewo.nlu.AddTrainingPhrasesFromCSVRequest) returns (ondewo.nlu.AddTrainingPhrasesResponse);
     */
    addTrainingPhrasesFromCSV(input: AddTrainingPhrasesFromCSVRequest, options?: RpcOptions): UnaryCall<AddTrainingPhrasesFromCSVRequest, AddTrainingPhrasesResponse>;
}
/**
 * This is collection of utility endpoints, intended to language-independent operations,
 * such as code checks, regex checks, etc.
 * Holds a collection of utility functions
 *
 * @generated from protobuf service ondewo.nlu.Utilities
 */
export declare class UtilitiesClient implements IUtilitiesClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Validates the validity of python regexes
     *
     * @generated from protobuf rpc: ValidateRegex(ondewo.nlu.ValidateRegexRequest) returns (ondewo.nlu.ValidateRegexResponse);
     */
    validateRegex(input: ValidateRegexRequest, options?: RpcOptions): UnaryCall<ValidateRegexRequest, ValidateRegexResponse>;
    /**
     * Validate that entity types with group references have synonyms with
     * capturing groups.
     *
     * @generated from protobuf rpc: ValidateEmbeddedRegex(ondewo.nlu.ValidateEmbeddedRegexRequest) returns (ondewo.nlu.ValidateEmbeddedRegexResponse);
     */
    validateEmbeddedRegex(input: ValidateEmbeddedRegexRequest, options?: RpcOptions): UnaryCall<ValidateEmbeddedRegexRequest, ValidateEmbeddedRegexResponse>;
    /**
     * Cleans all intent training phrases and entity annotations of parent
     *
     * @generated from protobuf rpc: CleanAllIntents(ondewo.nlu.CleanAllIntentsRequest) returns (ondewo.nlu.CleanAllIntentsResponse);
     */
    cleanAllIntents(input: CleanAllIntentsRequest, options?: RpcOptions): UnaryCall<CleanAllIntentsRequest, CleanAllIntentsResponse>;
    /**
     * Cleans single intent training phrases and entity annotations
     *
     * @generated from protobuf rpc: CleanIntent(ondewo.nlu.CleanIntentRequest) returns (ondewo.nlu.CleanIntentResponse);
     */
    cleanIntent(input: CleanIntentRequest, options?: RpcOptions): UnaryCall<CleanIntentRequest, CleanIntentResponse>;
    /**
     * Cleans all entity types of parent
     *
     * @generated from protobuf rpc: CleanAllEntityTypes(ondewo.nlu.CleanAllEntityTypesRequest) returns (ondewo.nlu.CleanAllEntityTypesResponse);
     */
    cleanAllEntityTypes(input: CleanAllEntityTypesRequest, options?: RpcOptions): UnaryCall<CleanAllEntityTypesRequest, CleanAllEntityTypesResponse>;
    /**
     * Cleans entity type
     *
     * @generated from protobuf rpc: CleanEntityType(ondewo.nlu.CleanEntityTypeRequest) returns (ondewo.nlu.CleanEntityTypeResponse);
     */
    cleanEntityType(input: CleanEntityTypeRequest, options?: RpcOptions): UnaryCall<CleanEntityTypeRequest, CleanEntityTypeResponse>;
    /**
     * Creates new training phrases corresponding to intent specified by its intent display name
     *
     * @generated from protobuf rpc: AddTrainingPhrases(ondewo.nlu.AddTrainingPhrasesRequest) returns (ondewo.nlu.AddTrainingPhrasesResponse);
     */
    addTrainingPhrases(input: AddTrainingPhrasesRequest, options?: RpcOptions): UnaryCall<AddTrainingPhrasesRequest, AddTrainingPhrasesResponse>;
    /**
     * Creates new training phrases corresponding to intent specified by its intent display name from csv file
     *
     * @generated from protobuf rpc: AddTrainingPhrasesFromCSV(ondewo.nlu.AddTrainingPhrasesFromCSVRequest) returns (ondewo.nlu.AddTrainingPhrasesResponse);
     */
    addTrainingPhrasesFromCSV(input: AddTrainingPhrasesFromCSVRequest, options?: RpcOptions): UnaryCall<AddTrainingPhrasesFromCSVRequest, AddTrainingPhrasesResponse>;
}
