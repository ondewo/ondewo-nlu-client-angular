import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { ListLlmModelsResponse } from "./aiservices";
import type { ListLlmModelsRequest } from "./aiservices";
import type { StreamingLlmGenerateResponse } from "./aiservices";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { LlmGenerateResponse } from "./aiservices";
import type { LlmGenerateRequest } from "./aiservices";
import type { ExtractEntitiesFuzzyRequest } from "./aiservices";
import type { ClassifyIntentsResponse } from "./aiservices";
import type { ClassifyIntentsRequest } from "./aiservices";
import type { GetSynonymsResponse } from "./aiservices";
import type { GetSynonymsRequest } from "./aiservices";
import type { GetAlternativeTrainingPhrasesResponse } from "./aiservices";
import type { GetAlternativeTrainingPhrasesRequest } from "./aiservices";
import type { GetAlternativeSentencesResponse } from "./aiservices";
import type { GetAlternativeSentencesRequest } from "./aiservices";
import type { GenerateResponsesResponse } from "./aiservices";
import type { GenerateResponsesRequest } from "./aiservices";
import type { GenerateUserSaysResponse } from "./aiservices";
import type { GenerateUserSaysRequest } from "./aiservices";
import type { ExtractEntitiesResponse } from "./aiservices";
import type { ExtractEntitiesRequest } from "./aiservices";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * The Central class defining the ondewo ai services
 *
 * @generated from protobuf service ondewo.nlu.AiServices
 */
export interface IAiServicesClient {
    /**
     * Processes a natural language query and returns detected entities
     *
     * @generated from protobuf rpc: ExtractEntities(ondewo.nlu.ExtractEntitiesRequest) returns (ondewo.nlu.ExtractEntitiesResponse);
     */
    extractEntities(input: ExtractEntitiesRequest, options?: RpcOptions): UnaryCall<ExtractEntitiesRequest, ExtractEntitiesResponse>;
    /**
     * Generates a list of training phrases
     *
     * @generated from protobuf rpc: GenerateUserSays(ondewo.nlu.GenerateUserSaysRequest) returns (ondewo.nlu.GenerateUserSaysResponse);
     */
    generateUserSays(input: GenerateUserSaysRequest, options?: RpcOptions): UnaryCall<GenerateUserSaysRequest, GenerateUserSaysResponse>;
    /**
     * Generate responses from all intents using synonyms
     *
     * @generated from protobuf rpc: GenerateResponses(ondewo.nlu.GenerateResponsesRequest) returns (ondewo.nlu.GenerateResponsesResponse);
     */
    generateResponses(input: GenerateResponsesRequest, options?: RpcOptions): UnaryCall<GenerateResponsesRequest, GenerateResponsesResponse>;
    /**
     * Generates alternative phrase based on original phrase
     *
     * @generated from protobuf rpc: GetAlternativeSentences(ondewo.nlu.GetAlternativeSentencesRequest) returns (ondewo.nlu.GetAlternativeSentencesResponse);
     */
    getAlternativeSentences(input: GetAlternativeSentencesRequest, options?: RpcOptions): UnaryCall<GetAlternativeSentencesRequest, GetAlternativeSentencesResponse>;
    /**
     * Generates alternative training phrase based on original training phrase
     *
     * @generated from protobuf rpc: GetAlternativeTrainingPhrases(ondewo.nlu.GetAlternativeTrainingPhrasesRequest) returns (ondewo.nlu.GetAlternativeTrainingPhrasesResponse);
     */
    getAlternativeTrainingPhrases(input: GetAlternativeTrainingPhrasesRequest, options?: RpcOptions): UnaryCall<GetAlternativeTrainingPhrasesRequest, GetAlternativeTrainingPhrasesResponse>;
    /**
     * Generates synonyms for a certain word
     *
     * @generated from protobuf rpc: GetSynonyms(ondewo.nlu.GetSynonymsRequest) returns (ondewo.nlu.GetSynonymsResponse);
     */
    getSynonyms(input: GetSynonymsRequest, options?: RpcOptions): UnaryCall<GetSynonymsRequest, GetSynonymsResponse>;
    /**
     * Preprocess text and detects intents in a sentence
     *
     * @generated from protobuf rpc: ClassifyIntents(ondewo.nlu.ClassifyIntentsRequest) returns (ondewo.nlu.ClassifyIntentsResponse);
     */
    classifyIntents(input: ClassifyIntentsRequest, options?: RpcOptions): UnaryCall<ClassifyIntentsRequest, ClassifyIntentsResponse>;
    /**
     * Processes a natural language query and returns detected entities
     *
     * @generated from protobuf rpc: ExtractEntitiesFuzzy(ondewo.nlu.ExtractEntitiesFuzzyRequest) returns (ondewo.nlu.ExtractEntitiesResponse);
     */
    extractEntitiesFuzzy(input: ExtractEntitiesFuzzyRequest, options?: RpcOptions): UnaryCall<ExtractEntitiesFuzzyRequest, ExtractEntitiesResponse>;
    /**
     * Generates a single response from a Large Language Model (LLM).
     * This RPC method allows a client to make a request to the LLM and receive
     * a single complete response based on the input parameters provided.
     *
     * @generated from protobuf rpc: LlmGenerate(ondewo.nlu.LlmGenerateRequest) returns (ondewo.nlu.LlmGenerateResponse);
     */
    llmGenerate(input: LlmGenerateRequest, options?: RpcOptions): UnaryCall<LlmGenerateRequest, LlmGenerateResponse>;
    /**
     * Generates a response from the LLM in a streaming format.
     * This RPC allows continuous streaming of responses from the model,
     * which is useful for real-time applications or large outputs.
     *
     * @generated from protobuf rpc: StreamingLlmGenerate(ondewo.nlu.LlmGenerateRequest) returns (stream ondewo.nlu.StreamingLlmGenerateResponse);
     */
    streamingLlmGenerate(input: LlmGenerateRequest, options?: RpcOptions): ServerStreamingCall<LlmGenerateRequest, StreamingLlmGenerateResponse>;
    /**
     * Lists available Large Language Models (LLMs) for a specified CCAI service.
     * This RPC method allows clients to retrieve metadata about all LLM models associated
     * with a particular service within a project, including model names, descriptions, and providers.
     *
     * @generated from protobuf rpc: ListLlmModels(ondewo.nlu.ListLlmModelsRequest) returns (ondewo.nlu.ListLlmModelsResponse);
     */
    listLlmModels(input: ListLlmModelsRequest, options?: RpcOptions): UnaryCall<ListLlmModelsRequest, ListLlmModelsResponse>;
}
/**
 * The Central class defining the ondewo ai services
 *
 * @generated from protobuf service ondewo.nlu.AiServices
 */
export declare class AiServicesClient implements IAiServicesClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * Processes a natural language query and returns detected entities
     *
     * @generated from protobuf rpc: ExtractEntities(ondewo.nlu.ExtractEntitiesRequest) returns (ondewo.nlu.ExtractEntitiesResponse);
     */
    extractEntities(input: ExtractEntitiesRequest, options?: RpcOptions): UnaryCall<ExtractEntitiesRequest, ExtractEntitiesResponse>;
    /**
     * Generates a list of training phrases
     *
     * @generated from protobuf rpc: GenerateUserSays(ondewo.nlu.GenerateUserSaysRequest) returns (ondewo.nlu.GenerateUserSaysResponse);
     */
    generateUserSays(input: GenerateUserSaysRequest, options?: RpcOptions): UnaryCall<GenerateUserSaysRequest, GenerateUserSaysResponse>;
    /**
     * Generate responses from all intents using synonyms
     *
     * @generated from protobuf rpc: GenerateResponses(ondewo.nlu.GenerateResponsesRequest) returns (ondewo.nlu.GenerateResponsesResponse);
     */
    generateResponses(input: GenerateResponsesRequest, options?: RpcOptions): UnaryCall<GenerateResponsesRequest, GenerateResponsesResponse>;
    /**
     * Generates alternative phrase based on original phrase
     *
     * @generated from protobuf rpc: GetAlternativeSentences(ondewo.nlu.GetAlternativeSentencesRequest) returns (ondewo.nlu.GetAlternativeSentencesResponse);
     */
    getAlternativeSentences(input: GetAlternativeSentencesRequest, options?: RpcOptions): UnaryCall<GetAlternativeSentencesRequest, GetAlternativeSentencesResponse>;
    /**
     * Generates alternative training phrase based on original training phrase
     *
     * @generated from protobuf rpc: GetAlternativeTrainingPhrases(ondewo.nlu.GetAlternativeTrainingPhrasesRequest) returns (ondewo.nlu.GetAlternativeTrainingPhrasesResponse);
     */
    getAlternativeTrainingPhrases(input: GetAlternativeTrainingPhrasesRequest, options?: RpcOptions): UnaryCall<GetAlternativeTrainingPhrasesRequest, GetAlternativeTrainingPhrasesResponse>;
    /**
     * Generates synonyms for a certain word
     *
     * @generated from protobuf rpc: GetSynonyms(ondewo.nlu.GetSynonymsRequest) returns (ondewo.nlu.GetSynonymsResponse);
     */
    getSynonyms(input: GetSynonymsRequest, options?: RpcOptions): UnaryCall<GetSynonymsRequest, GetSynonymsResponse>;
    /**
     * Preprocess text and detects intents in a sentence
     *
     * @generated from protobuf rpc: ClassifyIntents(ondewo.nlu.ClassifyIntentsRequest) returns (ondewo.nlu.ClassifyIntentsResponse);
     */
    classifyIntents(input: ClassifyIntentsRequest, options?: RpcOptions): UnaryCall<ClassifyIntentsRequest, ClassifyIntentsResponse>;
    /**
     * Processes a natural language query and returns detected entities
     *
     * @generated from protobuf rpc: ExtractEntitiesFuzzy(ondewo.nlu.ExtractEntitiesFuzzyRequest) returns (ondewo.nlu.ExtractEntitiesResponse);
     */
    extractEntitiesFuzzy(input: ExtractEntitiesFuzzyRequest, options?: RpcOptions): UnaryCall<ExtractEntitiesFuzzyRequest, ExtractEntitiesResponse>;
    /**
     * Generates a single response from a Large Language Model (LLM).
     * This RPC method allows a client to make a request to the LLM and receive
     * a single complete response based on the input parameters provided.
     *
     * @generated from protobuf rpc: LlmGenerate(ondewo.nlu.LlmGenerateRequest) returns (ondewo.nlu.LlmGenerateResponse);
     */
    llmGenerate(input: LlmGenerateRequest, options?: RpcOptions): UnaryCall<LlmGenerateRequest, LlmGenerateResponse>;
    /**
     * Generates a response from the LLM in a streaming format.
     * This RPC allows continuous streaming of responses from the model,
     * which is useful for real-time applications or large outputs.
     *
     * @generated from protobuf rpc: StreamingLlmGenerate(ondewo.nlu.LlmGenerateRequest) returns (stream ondewo.nlu.StreamingLlmGenerateResponse);
     */
    streamingLlmGenerate(input: LlmGenerateRequest, options?: RpcOptions): ServerStreamingCall<LlmGenerateRequest, StreamingLlmGenerateResponse>;
    /**
     * Lists available Large Language Models (LLMs) for a specified CCAI service.
     * This RPC method allows clients to retrieve metadata about all LLM models associated
     * with a particular service within a project, including model names, descriptions, and providers.
     *
     * @generated from protobuf rpc: ListLlmModels(ondewo.nlu.ListLlmModelsRequest) returns (ondewo.nlu.ListLlmModelsResponse);
     */
    listLlmModels(input: ListLlmModelsRequest, options?: RpcOptions): UnaryCall<ListLlmModelsRequest, ListLlmModelsResponse>;
}
