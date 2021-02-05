import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf002 from '../../google/protobuf/field-mask.pb';
import * as googleProtobuf004 from '../../google/protobuf/struct.pb';
import * as ondewoNlu005 from '../../ondewo/nlu/common.pb';
import * as ondewoNlu006 from '../../ondewo/nlu/user.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/project-role.pb';
export declare enum AgentView {
    agentViewUnspecified = 0,
    agentViewFull = 1,
    agentViewShallow = 2
}
export declare enum ReportType {
    all = 0,
    intentPerLanguage = 1,
    entityPerLanguage = 2,
    entityCollision = 3,
    intentGeneral = 4
}
export declare enum ReportFormat {
    csv = 0,
    html = 1,
    json = 2
}
export declare enum AgentStatus {
    active = 0,
    inactive = 1
}
export declare class Agent implements GrpcMessage {
    static toBinary(instance: Agent): any;
    static fromBinary(bytes: ByteSource): Agent;
    static refineValues(instance: Agent): void;
    static fromBinaryReader(instance: Agent, reader: BinaryReader): void;
    static toBinaryWriter(instance: Agent, writer: BinaryWriter): void;
    private _parent?;
    private _displayName?;
    private _defaultLanguageCode?;
    private _supportedLanguageCodes?;
    private _timeZone?;
    private _nluPlatform?;
    private _configs?;
    private _ownerId?;
    private _status?;
    private _description?;
    /**
     * Creates an object and applies default Protobuf values
     * @param Agent value
     */
    constructor(value?: RecursivePartial<Agent>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get displayName(): string | undefined;
    set displayName(value: string | undefined);
    get defaultLanguageCode(): string | undefined;
    set defaultLanguageCode(value: string | undefined);
    get supportedLanguageCodes(): string[] | undefined;
    set supportedLanguageCodes(value: string[] | undefined);
    get timeZone(): string | undefined;
    set timeZone(value: string | undefined);
    get nluPlatform(): string | undefined;
    set nluPlatform(value: string | undefined);
    get configs(): googleProtobuf004.Struct | undefined;
    set configs(value: googleProtobuf004.Struct | undefined);
    get ownerId(): string | undefined;
    set ownerId(value: string | undefined);
    get status(): AgentStatus | undefined;
    set status(value: AgentStatus | undefined);
    get description(): string | undefined;
    set description(value: string | undefined);
    toObject(): {
        parent: string;
        displayName: string;
        defaultLanguageCode: string;
        supportedLanguageCodes: string[];
        timeZone: string;
        nluPlatform: string;
        configs: {
            fields: {
                [x: string]: googleProtobuf004.Value;
            };
        };
        ownerId: string;
        status: AgentStatus;
        description: string;
    };
    toJSON(): {
        parent: string;
        displayName: string;
        defaultLanguageCode: string;
        supportedLanguageCodes: string[];
        timeZone: string;
        nluPlatform: string;
        configs: {
            fields: {
                [x: string]: googleProtobuf004.Value;
            };
        };
        ownerId: string;
        status: AgentStatus;
        description: string;
    };
}
export declare module Agent { }
export declare class AgentWithOwner implements GrpcMessage {
    static toBinary(instance: AgentWithOwner): any;
    static fromBinary(bytes: ByteSource): AgentWithOwner;
    static refineValues(instance: AgentWithOwner): void;
    static fromBinaryReader(instance: AgentWithOwner, reader: BinaryReader): void;
    static toBinaryWriter(instance: AgentWithOwner, writer: BinaryWriter): void;
    private _agent?;
    private _owner?;
    /**
     * Creates an object and applies default Protobuf values
     * @param AgentWithOwner value
     */
    constructor(value?: RecursivePartial<AgentWithOwner>);
    get agent(): Agent | undefined;
    set agent(value: Agent | undefined);
    get owner(): ondewoNlu006.User | undefined;
    set owner(value: ondewoNlu006.User | undefined);
    toObject(): {
        agent: {
            parent: string;
            displayName: string;
            defaultLanguageCode: string;
            supportedLanguageCodes: string[];
            timeZone: string;
            nluPlatform: string;
            configs: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
            ownerId: string;
            status: AgentStatus;
            description: string;
        };
        owner: {
            userId: string;
            displayName: string;
            serverRoleId: number;
            userEmail: string;
        };
    };
    toJSON(): {
        agent: {
            parent: string;
            displayName: string;
            defaultLanguageCode: string;
            supportedLanguageCodes: string[];
            timeZone: string;
            nluPlatform: string;
            configs: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
            ownerId: string;
            status: AgentStatus;
            description: string;
        };
        owner: {
            userId: string;
            displayName: string;
            serverRoleId: number;
            userEmail: string;
        };
    };
}
export declare module AgentWithOwner { }
export declare class AgentOfUserWithOwner implements GrpcMessage {
    static toBinary(instance: AgentOfUserWithOwner): any;
    static fromBinary(bytes: ByteSource): AgentOfUserWithOwner;
    static refineValues(instance: AgentOfUserWithOwner): void;
    static fromBinaryReader(instance: AgentOfUserWithOwner, reader: BinaryReader): void;
    static toBinaryWriter(instance: AgentOfUserWithOwner, writer: BinaryWriter): void;
    private _agentWithOwner?;
    private _projectRole?;
    /**
     * Creates an object and applies default Protobuf values
     * @param AgentOfUserWithOwner value
     */
    constructor(value?: RecursivePartial<AgentOfUserWithOwner>);
    get agentWithOwner(): AgentWithOwner | undefined;
    set agentWithOwner(value: AgentWithOwner | undefined);
    get projectRole(): ondewoNlu007.ProjectRole | undefined;
    set projectRole(value: ondewoNlu007.ProjectRole | undefined);
    toObject(): {
        agentWithOwner: {
            agent: {
                parent: string;
                displayName: string;
                defaultLanguageCode: string;
                supportedLanguageCodes: string[];
                timeZone: string;
                nluPlatform: string;
                configs: {
                    fields: {
                        [x: string]: googleProtobuf004.Value;
                    };
                };
                ownerId: string;
                status: AgentStatus;
                description: string;
            };
            owner: {
                userId: string;
                displayName: string;
                serverRoleId: number;
                userEmail: string;
            };
        };
        projectRole: {
            roleId: number;
            name: string;
            permissions: string[];
        };
    };
    toJSON(): {
        agentWithOwner: {
            agent: {
                parent: string;
                displayName: string;
                defaultLanguageCode: string;
                supportedLanguageCodes: string[];
                timeZone: string;
                nluPlatform: string;
                configs: {
                    fields: {
                        [x: string]: googleProtobuf004.Value;
                    };
                };
                ownerId: string;
                status: AgentStatus;
                description: string;
            };
            owner: {
                userId: string;
                displayName: string;
                serverRoleId: number;
                userEmail: string;
            };
        };
        projectRole: {
            roleId: number;
            name: string;
            permissions: string[];
        };
    };
}
export declare module AgentOfUserWithOwner { }
export declare class CreateAgentRequest implements GrpcMessage {
    static toBinary(instance: CreateAgentRequest): any;
    static fromBinary(bytes: ByteSource): CreateAgentRequest;
    static refineValues(instance: CreateAgentRequest): void;
    static fromBinaryReader(instance: CreateAgentRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: CreateAgentRequest, writer: BinaryWriter): void;
    private _agent?;
    private _agentView?;
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateAgentRequest value
     */
    constructor(value?: RecursivePartial<CreateAgentRequest>);
    get agent(): Agent | undefined;
    set agent(value: Agent | undefined);
    get agentView(): AgentView | undefined;
    set agentView(value: AgentView | undefined);
    toObject(): {
        agent: {
            parent: string;
            displayName: string;
            defaultLanguageCode: string;
            supportedLanguageCodes: string[];
            timeZone: string;
            nluPlatform: string;
            configs: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
            ownerId: string;
            status: AgentStatus;
            description: string;
        };
        agentView: AgentView;
    };
    toJSON(): {
        agent: {
            parent: string;
            displayName: string;
            defaultLanguageCode: string;
            supportedLanguageCodes: string[];
            timeZone: string;
            nluPlatform: string;
            configs: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
            ownerId: string;
            status: AgentStatus;
            description: string;
        };
        agentView: AgentView;
    };
}
export declare module CreateAgentRequest { }
export declare class UpdateAgentRequest implements GrpcMessage {
    static toBinary(instance: UpdateAgentRequest): any;
    static fromBinary(bytes: ByteSource): UpdateAgentRequest;
    static refineValues(instance: UpdateAgentRequest): void;
    static fromBinaryReader(instance: UpdateAgentRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: UpdateAgentRequest, writer: BinaryWriter): void;
    private _agent?;
    private _agentView?;
    private _updateMask?;
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateAgentRequest value
     */
    constructor(value?: RecursivePartial<UpdateAgentRequest>);
    get agent(): Agent | undefined;
    set agent(value: Agent | undefined);
    get agentView(): AgentView | undefined;
    set agentView(value: AgentView | undefined);
    get updateMask(): googleProtobuf002.FieldMask | undefined;
    set updateMask(value: googleProtobuf002.FieldMask | undefined);
    toObject(): {
        agent: {
            parent: string;
            displayName: string;
            defaultLanguageCode: string;
            supportedLanguageCodes: string[];
            timeZone: string;
            nluPlatform: string;
            configs: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
            ownerId: string;
            status: AgentStatus;
            description: string;
        };
        agentView: AgentView;
        updateMask: {
            paths: string[];
        };
    };
    toJSON(): {
        agent: {
            parent: string;
            displayName: string;
            defaultLanguageCode: string;
            supportedLanguageCodes: string[];
            timeZone: string;
            nluPlatform: string;
            configs: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
            ownerId: string;
            status: AgentStatus;
            description: string;
        };
        agentView: AgentView;
        updateMask: {
            paths: string[];
        };
    };
}
export declare module UpdateAgentRequest { }
export declare class DeleteAgentRequest implements GrpcMessage {
    static toBinary(instance: DeleteAgentRequest): any;
    static fromBinary(bytes: ByteSource): DeleteAgentRequest;
    static refineValues(instance: DeleteAgentRequest): void;
    static fromBinaryReader(instance: DeleteAgentRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: DeleteAgentRequest, writer: BinaryWriter): void;
    private _parent?;
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteAgentRequest value
     */
    constructor(value?: RecursivePartial<DeleteAgentRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    toObject(): {
        parent: string;
    };
    toJSON(): {
        parent: string;
    };
}
export declare module DeleteAgentRequest { }
export declare class GetAgentRequest implements GrpcMessage {
    static toBinary(instance: GetAgentRequest): any;
    static fromBinary(bytes: ByteSource): GetAgentRequest;
    static refineValues(instance: GetAgentRequest): void;
    static fromBinaryReader(instance: GetAgentRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetAgentRequest, writer: BinaryWriter): void;
    private _parent?;
    private _agentView?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAgentRequest value
     */
    constructor(value?: RecursivePartial<GetAgentRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get agentView(): AgentView | undefined;
    set agentView(value: AgentView | undefined);
    toObject(): {
        parent: string;
        agentView: AgentView;
    };
    toJSON(): {
        parent: string;
        agentView: AgentView;
    };
}
export declare module GetAgentRequest { }
export declare class ListAgentsRequest implements GrpcMessage {
    static toBinary(instance: ListAgentsRequest): any;
    static fromBinary(bytes: ByteSource): ListAgentsRequest;
    static refineValues(instance: ListAgentsRequest): void;
    static fromBinaryReader(instance: ListAgentsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListAgentsRequest, writer: BinaryWriter): void;
    private _agentView?;
    private _pageToken?;
    private _sortByField?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListAgentsRequest value
     */
    constructor(value?: RecursivePartial<ListAgentsRequest>);
    get agentView(): AgentView | undefined;
    set agentView(value: AgentView | undefined);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    get sortByField(): AgentSorting | undefined;
    set sortByField(value: AgentSorting | undefined);
    toObject(): {
        agentView: AgentView;
        pageToken: string;
        sortByField: {
            sortingField: AgentSorting.AgentSortingField;
            sortingMode: ondewoNlu005.SortingMode;
        };
    };
    toJSON(): {
        agentView: AgentView;
        pageToken: string;
        sortByField: {
            sortingField: AgentSorting.AgentSortingField;
            sortingMode: ondewoNlu005.SortingMode;
        };
    };
}
export declare module ListAgentsRequest { }
export declare class ListAgentsResponse implements GrpcMessage {
    static toBinary(instance: ListAgentsResponse): any;
    static fromBinary(bytes: ByteSource): ListAgentsResponse;
    static refineValues(instance: ListAgentsResponse): void;
    static fromBinaryReader(instance: ListAgentsResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListAgentsResponse, writer: BinaryWriter): void;
    private _agentsWithOwners?;
    private _nextPageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListAgentsResponse value
     */
    constructor(value?: RecursivePartial<ListAgentsResponse>);
    get agentsWithOwners(): AgentWithOwner[] | undefined;
    set agentsWithOwners(value: AgentWithOwner[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    toObject(): {
        agentsWithOwners: {
            agent: {
                parent: string;
                displayName: string;
                defaultLanguageCode: string;
                supportedLanguageCodes: string[];
                timeZone: string;
                nluPlatform: string;
                configs: {
                    fields: {
                        [x: string]: googleProtobuf004.Value;
                    };
                };
                ownerId: string;
                status: AgentStatus;
                description: string;
            };
            owner: {
                userId: string;
                displayName: string;
                serverRoleId: number;
                userEmail: string;
            };
        }[];
        nextPageToken: string;
    };
    toJSON(): {
        agentsWithOwners: {
            agent: {
                parent: string;
                displayName: string;
                defaultLanguageCode: string;
                supportedLanguageCodes: string[];
                timeZone: string;
                nluPlatform: string;
                configs: {
                    fields: {
                        [x: string]: googleProtobuf004.Value;
                    };
                };
                ownerId: string;
                status: AgentStatus;
                description: string;
            };
            owner: {
                userId: string;
                displayName: string;
                serverRoleId: number;
                userEmail: string;
            };
        }[];
        nextPageToken: string;
    };
}
export declare module ListAgentsResponse { }
export declare class ListAgentsOfUserResponse implements GrpcMessage {
    static toBinary(instance: ListAgentsOfUserResponse): any;
    static fromBinary(bytes: ByteSource): ListAgentsOfUserResponse;
    static refineValues(instance: ListAgentsOfUserResponse): void;
    static fromBinaryReader(instance: ListAgentsOfUserResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListAgentsOfUserResponse, writer: BinaryWriter): void;
    private _agentsOfUserWithOwners?;
    private _nextPageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListAgentsOfUserResponse value
     */
    constructor(value?: RecursivePartial<ListAgentsOfUserResponse>);
    get agentsOfUserWithOwners(): AgentOfUserWithOwner[] | undefined;
    set agentsOfUserWithOwners(value: AgentOfUserWithOwner[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    toObject(): {
        agentsOfUserWithOwners: {
            agentWithOwner: {
                agent: {
                    parent: string;
                    displayName: string;
                    defaultLanguageCode: string;
                    supportedLanguageCodes: string[];
                    timeZone: string;
                    nluPlatform: string;
                    configs: {
                        fields: {
                            [x: string]: googleProtobuf004.Value;
                        };
                    };
                    ownerId: string;
                    status: AgentStatus;
                    description: string;
                };
                owner: {
                    userId: string;
                    displayName: string;
                    serverRoleId: number;
                    userEmail: string;
                };
            };
            projectRole: {
                roleId: number;
                name: string;
                permissions: string[];
            };
        }[];
        nextPageToken: string;
    };
    toJSON(): {
        agentsOfUserWithOwners: {
            agentWithOwner: {
                agent: {
                    parent: string;
                    displayName: string;
                    defaultLanguageCode: string;
                    supportedLanguageCodes: string[];
                    timeZone: string;
                    nluPlatform: string;
                    configs: {
                        fields: {
                            [x: string]: googleProtobuf004.Value;
                        };
                    };
                    ownerId: string;
                    status: AgentStatus;
                    description: string;
                };
                owner: {
                    userId: string;
                    displayName: string;
                    serverRoleId: number;
                    userEmail: string;
                };
            };
            projectRole: {
                roleId: number;
                name: string;
                permissions: string[];
            };
        }[];
        nextPageToken: string;
    };
}
export declare module ListAgentsOfUserResponse { }
export declare class TrainAgentRequest implements GrpcMessage {
    static toBinary(instance: TrainAgentRequest): any;
    static fromBinary(bytes: ByteSource): TrainAgentRequest;
    static refineValues(instance: TrainAgentRequest): void;
    static fromBinaryReader(instance: TrainAgentRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: TrainAgentRequest, writer: BinaryWriter): void;
    private _parent?;
    private _branch?;
    /**
     * Creates an object and applies default Protobuf values
     * @param TrainAgentRequest value
     */
    constructor(value?: RecursivePartial<TrainAgentRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get branch(): string | undefined;
    set branch(value: string | undefined);
    toObject(): {
        parent: string;
        branch: string;
    };
    toJSON(): {
        parent: string;
        branch: string;
    };
}
export declare module TrainAgentRequest { }
export declare class BuildCacheRequest implements GrpcMessage {
    static toBinary(instance: BuildCacheRequest): any;
    static fromBinary(bytes: ByteSource): BuildCacheRequest;
    static refineValues(instance: BuildCacheRequest): void;
    static fromBinaryReader(instance: BuildCacheRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: BuildCacheRequest, writer: BinaryWriter): void;
    private _parent?;
    private _branch?;
    /**
     * Creates an object and applies default Protobuf values
     * @param BuildCacheRequest value
     */
    constructor(value?: RecursivePartial<BuildCacheRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get branch(): string | undefined;
    set branch(value: string | undefined);
    toObject(): {
        parent: string;
        branch: string;
    };
    toJSON(): {
        parent: string;
        branch: string;
    };
}
export declare module BuildCacheRequest { }
export declare class ExportAgentRequest implements GrpcMessage {
    static toBinary(instance: ExportAgentRequest): any;
    static fromBinary(bytes: ByteSource): ExportAgentRequest;
    static refineValues(instance: ExportAgentRequest): void;
    static fromBinaryReader(instance: ExportAgentRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ExportAgentRequest, writer: BinaryWriter): void;
    private _parent?;
    private _agentUri?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ExportAgentRequest value
     */
    constructor(value?: RecursivePartial<ExportAgentRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get agentUri(): string | undefined;
    set agentUri(value: string | undefined);
    toObject(): {
        parent: string;
        agentUri: string;
    };
    toJSON(): {
        parent: string;
        agentUri: string;
    };
}
export declare module ExportAgentRequest { }
export declare class ExportAgentResponse implements GrpcMessage {
    static toBinary(instance: ExportAgentResponse): any;
    static fromBinary(bytes: ByteSource): ExportAgentResponse;
    static refineValues(instance: ExportAgentResponse): void;
    static fromBinaryReader(instance: ExportAgentResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ExportAgentResponse, writer: BinaryWriter): void;
    private _agentUri?;
    private _agentContent?;
    private _agent;
    /**
     * Creates an object and applies default Protobuf values
     * @param ExportAgentResponse value
     */
    constructor(value?: RecursivePartial<ExportAgentResponse>);
    get agentUri(): string | undefined;
    set agentUri(value: string | undefined);
    get agentContent(): Uint8Array | undefined;
    set agentContent(value: Uint8Array | undefined);
    get agent(): ExportAgentResponse.AgentCase;
    toObject(): {
        agentUri: string;
        agentContent: Uint8Array;
    };
    toJSON(): {
        agentUri: string;
        agentContent: Uint8Array;
    };
}
export declare module ExportAgentResponse {
    enum AgentCase {
        none = 0,
        agentUri = 1,
        agentContent = 2
    }
}
export declare class OptimizeRankingMatchRequest implements GrpcMessage {
    static toBinary(instance: OptimizeRankingMatchRequest): any;
    static fromBinary(bytes: ByteSource): OptimizeRankingMatchRequest;
    static refineValues(instance: OptimizeRankingMatchRequest): void;
    static fromBinaryReader(instance: OptimizeRankingMatchRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: OptimizeRankingMatchRequest, writer: BinaryWriter): void;
    private _parent?;
    private _languageCodes?;
    private _optimizationConfigs?;
    private _inPlace?;
    /**
     * Creates an object and applies default Protobuf values
     * @param OptimizeRankingMatchRequest value
     */
    constructor(value?: RecursivePartial<OptimizeRankingMatchRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get languageCodes(): string[] | undefined;
    set languageCodes(value: string[] | undefined);
    get optimizationConfigs(): RankingMatchOptimizationConfig[] | undefined;
    set optimizationConfigs(value: RankingMatchOptimizationConfig[] | undefined);
    get inPlace(): boolean | undefined;
    set inPlace(value: boolean | undefined);
    toObject(): {
        parent: string;
        languageCodes: string[];
        optimizationConfigs: {
            languageCode: string;
            nSplits: number;
            randomSeed: number;
            initialThresholds: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
        }[];
        inPlace: boolean;
    };
    toJSON(): {
        parent: string;
        languageCodes: string[];
        optimizationConfigs: {
            languageCode: string;
            nSplits: number;
            randomSeed: number;
            initialThresholds: {
                fields: {
                    [x: string]: googleProtobuf004.Value;
                };
            };
        }[];
        inPlace: boolean;
    };
}
export declare module OptimizeRankingMatchRequest { }
export declare class RankingMatchOptimizationConfig implements GrpcMessage {
    static toBinary(instance: RankingMatchOptimizationConfig): any;
    static fromBinary(bytes: ByteSource): RankingMatchOptimizationConfig;
    static refineValues(instance: RankingMatchOptimizationConfig): void;
    static fromBinaryReader(instance: RankingMatchOptimizationConfig, reader: BinaryReader): void;
    static toBinaryWriter(instance: RankingMatchOptimizationConfig, writer: BinaryWriter): void;
    private _languageCode?;
    private _nSplits?;
    private _randomSeed?;
    private _initialThresholds?;
    /**
     * Creates an object and applies default Protobuf values
     * @param RankingMatchOptimizationConfig value
     */
    constructor(value?: RecursivePartial<RankingMatchOptimizationConfig>);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get nSplits(): number | undefined;
    set nSplits(value: number | undefined);
    get randomSeed(): number | undefined;
    set randomSeed(value: number | undefined);
    get initialThresholds(): googleProtobuf004.Struct | undefined;
    set initialThresholds(value: googleProtobuf004.Struct | undefined);
    toObject(): {
        languageCode: string;
        nSplits: number;
        randomSeed: number;
        initialThresholds: {
            fields: {
                [x: string]: googleProtobuf004.Value;
            };
        };
    };
    toJSON(): {
        languageCode: string;
        nSplits: number;
        randomSeed: number;
        initialThresholds: {
            fields: {
                [x: string]: googleProtobuf004.Value;
            };
        };
    };
}
export declare module RankingMatchOptimizationConfig { }
export declare class OptimizeRankingMatchResponse implements GrpcMessage {
    static toBinary(instance: OptimizeRankingMatchResponse): any;
    static fromBinary(bytes: ByteSource): OptimizeRankingMatchResponse;
    static refineValues(instance: OptimizeRankingMatchResponse): void;
    static fromBinaryReader(instance: OptimizeRankingMatchResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: OptimizeRankingMatchResponse, writer: BinaryWriter): void;
    private _optimizationInfo?;
    private _optimizedOndewoConfig?;
    /**
     * Creates an object and applies default Protobuf values
     * @param OptimizeRankingMatchResponse value
     */
    constructor(value?: RecursivePartial<OptimizeRankingMatchResponse>);
    get optimizationInfo(): googleProtobuf004.Struct | undefined;
    set optimizationInfo(value: googleProtobuf004.Struct | undefined);
    get optimizedOndewoConfig(): googleProtobuf004.Struct | undefined;
    set optimizedOndewoConfig(value: googleProtobuf004.Struct | undefined);
    toObject(): {
        optimizationInfo: {
            fields: {
                [x: string]: googleProtobuf004.Value;
            };
        };
        optimizedOndewoConfig: {
            fields: {
                [x: string]: googleProtobuf004.Value;
            };
        };
    };
    toJSON(): {
        optimizationInfo: {
            fields: {
                [x: string]: googleProtobuf004.Value;
            };
        };
        optimizedOndewoConfig: {
            fields: {
                [x: string]: googleProtobuf004.Value;
            };
        };
    };
}
export declare module OptimizeRankingMatchResponse { }
export declare class ImportAgentRequest implements GrpcMessage {
    static toBinary(instance: ImportAgentRequest): any;
    static fromBinary(bytes: ByteSource): ImportAgentRequest;
    static refineValues(instance: ImportAgentRequest): void;
    static fromBinaryReader(instance: ImportAgentRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ImportAgentRequest, writer: BinaryWriter): void;
    private _parent?;
    private _agentUri?;
    private _agentContent?;
    private _agent;
    /**
     * Creates an object and applies default Protobuf values
     * @param ImportAgentRequest value
     */
    constructor(value?: RecursivePartial<ImportAgentRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get agentUri(): string | undefined;
    set agentUri(value: string | undefined);
    get agentContent(): Uint8Array | undefined;
    set agentContent(value: Uint8Array | undefined);
    get agent(): ImportAgentRequest.AgentCase;
    toObject(): {
        parent: string;
        agentUri: string;
        agentContent: Uint8Array;
    };
    toJSON(): {
        parent: string;
        agentUri: string;
        agentContent: Uint8Array;
    };
}
export declare module ImportAgentRequest {
    enum AgentCase {
        none = 0,
        agentUri = 1,
        agentContent = 2
    }
}
export declare class RestoreAgentRequest implements GrpcMessage {
    static toBinary(instance: RestoreAgentRequest): any;
    static fromBinary(bytes: ByteSource): RestoreAgentRequest;
    static refineValues(instance: RestoreAgentRequest): void;
    static fromBinaryReader(instance: RestoreAgentRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: RestoreAgentRequest, writer: BinaryWriter): void;
    private _parent?;
    private _agentUri?;
    private _agentContent?;
    private _agent;
    /**
     * Creates an object and applies default Protobuf values
     * @param RestoreAgentRequest value
     */
    constructor(value?: RecursivePartial<RestoreAgentRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get agentUri(): string | undefined;
    set agentUri(value: string | undefined);
    get agentContent(): Uint8Array | undefined;
    set agentContent(value: Uint8Array | undefined);
    get agent(): RestoreAgentRequest.AgentCase;
    toObject(): {
        parent: string;
        agentUri: string;
        agentContent: Uint8Array;
    };
    toJSON(): {
        parent: string;
        agentUri: string;
        agentContent: Uint8Array;
    };
}
export declare module RestoreAgentRequest {
    enum AgentCase {
        none = 0,
        agentUri = 1,
        agentContent = 2
    }
}
export declare class GetAgentStatisticsRequest implements GrpcMessage {
    static toBinary(instance: GetAgentStatisticsRequest): any;
    static fromBinary(bytes: ByteSource): GetAgentStatisticsRequest;
    static refineValues(instance: GetAgentStatisticsRequest): void;
    static fromBinaryReader(instance: GetAgentStatisticsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetAgentStatisticsRequest, writer: BinaryWriter): void;
    private _parent?;
    private _format?;
    private _languageCode?;
    private _type?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAgentStatisticsRequest value
     */
    constructor(value?: RecursivePartial<GetAgentStatisticsRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get format(): ReportFormat | undefined;
    set format(value: ReportFormat | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get type(): ReportType | undefined;
    set type(value: ReportType | undefined);
    toObject(): {
        parent: string;
        format: ReportFormat;
        languageCode: string;
        type: ReportType;
    };
    toJSON(): {
        parent: string;
        format: ReportFormat;
        languageCode: string;
        type: ReportType;
    };
}
export declare module GetAgentStatisticsRequest { }
export declare class GetAgentStatisticsResponse implements GrpcMessage {
    static toBinary(instance: GetAgentStatisticsResponse): any;
    static fromBinary(bytes: ByteSource): GetAgentStatisticsResponse;
    static refineValues(instance: GetAgentStatisticsResponse): void;
    static fromBinaryReader(instance: GetAgentStatisticsResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetAgentStatisticsResponse, writer: BinaryWriter): void;
    private _reports?;
    private _format?;
    private _type?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAgentStatisticsResponse value
     */
    constructor(value?: RecursivePartial<GetAgentStatisticsResponse>);
    get reports(): Uint8Array | undefined;
    set reports(value: Uint8Array | undefined);
    get format(): ReportFormat | undefined;
    set format(value: ReportFormat | undefined);
    get type(): ReportType | undefined;
    set type(value: ReportType | undefined);
    toObject(): {
        reports: Uint8Array;
        format: ReportFormat;
        type: ReportType;
    };
    toJSON(): {
        reports: Uint8Array;
        format: ReportFormat;
        type: ReportType;
    };
}
export declare module GetAgentStatisticsResponse { }
export declare class AddUserToProjectRequest implements GrpcMessage {
    static toBinary(instance: AddUserToProjectRequest): any;
    static fromBinary(bytes: ByteSource): AddUserToProjectRequest;
    static refineValues(instance: AddUserToProjectRequest): void;
    static fromBinaryReader(instance: AddUserToProjectRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: AddUserToProjectRequest, writer: BinaryWriter): void;
    private _parent?;
    private _userId?;
    private _projectRoleId?;
    /**
     * Creates an object and applies default Protobuf values
     * @param AddUserToProjectRequest value
     */
    constructor(value?: RecursivePartial<AddUserToProjectRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get userId(): string | undefined;
    set userId(value: string | undefined);
    get projectRoleId(): number | undefined;
    set projectRoleId(value: number | undefined);
    toObject(): {
        parent: string;
        userId: string;
        projectRoleId: number;
    };
    toJSON(): {
        parent: string;
        userId: string;
        projectRoleId: number;
    };
}
export declare module AddUserToProjectRequest { }
export declare class RemoveUserFromProjectRequest implements GrpcMessage {
    static toBinary(instance: RemoveUserFromProjectRequest): any;
    static fromBinary(bytes: ByteSource): RemoveUserFromProjectRequest;
    static refineValues(instance: RemoveUserFromProjectRequest): void;
    static fromBinaryReader(instance: RemoveUserFromProjectRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: RemoveUserFromProjectRequest, writer: BinaryWriter): void;
    private _parent?;
    private _userId?;
    /**
     * Creates an object and applies default Protobuf values
     * @param RemoveUserFromProjectRequest value
     */
    constructor(value?: RecursivePartial<RemoveUserFromProjectRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get userId(): string | undefined;
    set userId(value: string | undefined);
    toObject(): {
        parent: string;
        userId: string;
    };
    toJSON(): {
        parent: string;
        userId: string;
    };
}
export declare module RemoveUserFromProjectRequest { }
export declare class ListUsersInProjectRequest implements GrpcMessage {
    static toBinary(instance: ListUsersInProjectRequest): any;
    static fromBinary(bytes: ByteSource): ListUsersInProjectRequest;
    static refineValues(instance: ListUsersInProjectRequest): void;
    static fromBinaryReader(instance: ListUsersInProjectRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListUsersInProjectRequest, writer: BinaryWriter): void;
    private _parent?;
    private _pageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListUsersInProjectRequest value
     */
    constructor(value?: RecursivePartial<ListUsersInProjectRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    toObject(): {
        parent: string;
        pageToken: string;
    };
    toJSON(): {
        parent: string;
        pageToken: string;
    };
}
export declare module ListUsersInProjectRequest { }
export declare class UserInProject implements GrpcMessage {
    static toBinary(instance: UserInProject): any;
    static fromBinary(bytes: ByteSource): UserInProject;
    static refineValues(instance: UserInProject): void;
    static fromBinaryReader(instance: UserInProject, reader: BinaryReader): void;
    static toBinaryWriter(instance: UserInProject, writer: BinaryWriter): void;
    private _parent?;
    private _user?;
    private _roleId?;
    /**
     * Creates an object and applies default Protobuf values
     * @param UserInProject value
     */
    constructor(value?: RecursivePartial<UserInProject>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get user(): ondewoNlu006.User | undefined;
    set user(value: ondewoNlu006.User | undefined);
    get roleId(): number | undefined;
    set roleId(value: number | undefined);
    toObject(): {
        parent: string;
        user: {
            userId: string;
            displayName: string;
            serverRoleId: number;
            userEmail: string;
        };
        roleId: number;
    };
    toJSON(): {
        parent: string;
        user: {
            userId: string;
            displayName: string;
            serverRoleId: number;
            userEmail: string;
        };
        roleId: number;
    };
}
export declare module UserInProject { }
export declare class ListUsersInProjectResponse implements GrpcMessage {
    static toBinary(instance: ListUsersInProjectResponse): any;
    static fromBinary(bytes: ByteSource): ListUsersInProjectResponse;
    static refineValues(instance: ListUsersInProjectResponse): void;
    static fromBinaryReader(instance: ListUsersInProjectResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListUsersInProjectResponse, writer: BinaryWriter): void;
    private _users?;
    private _nextPageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListUsersInProjectResponse value
     */
    constructor(value?: RecursivePartial<ListUsersInProjectResponse>);
    get users(): UserInProject[] | undefined;
    set users(value: UserInProject[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    toObject(): {
        users: {
            parent: string;
            user: {
                userId: string;
                displayName: string;
                serverRoleId: number;
                userEmail: string;
            };
            roleId: number;
        }[];
        nextPageToken: string;
    };
    toJSON(): {
        users: {
            parent: string;
            user: {
                userId: string;
                displayName: string;
                serverRoleId: number;
                userEmail: string;
            };
            roleId: number;
        }[];
        nextPageToken: string;
    };
}
export declare module ListUsersInProjectResponse { }
export declare class GetPlatformInfoResponse implements GrpcMessage {
    static toBinary(instance: GetPlatformInfoResponse): any;
    static fromBinary(bytes: ByteSource): GetPlatformInfoResponse;
    static refineValues(instance: GetPlatformInfoResponse): void;
    static fromBinaryReader(instance: GetPlatformInfoResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: GetPlatformInfoResponse, writer: BinaryWriter): void;
    private _version?;
    private _commitHash?;
    /**
     * Creates an object and applies default Protobuf values
     * @param GetPlatformInfoResponse value
     */
    constructor(value?: RecursivePartial<GetPlatformInfoResponse>);
    get version(): string | undefined;
    set version(value: string | undefined);
    get commitHash(): string | undefined;
    set commitHash(value: string | undefined);
    toObject(): {
        version: string;
        commitHash: string;
    };
    toJSON(): {
        version: string;
        commitHash: string;
    };
}
export declare module GetPlatformInfoResponse { }
export declare class ListProjectPermissionsRequest implements GrpcMessage {
    static toBinary(instance: ListProjectPermissionsRequest): any;
    static fromBinary(bytes: ByteSource): ListProjectPermissionsRequest;
    static refineValues(instance: ListProjectPermissionsRequest): void;
    static fromBinaryReader(instance: ListProjectPermissionsRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListProjectPermissionsRequest, writer: BinaryWriter): void;
    private _pageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListProjectPermissionsRequest value
     */
    constructor(value?: RecursivePartial<ListProjectPermissionsRequest>);
    get pageToken(): string | undefined;
    set pageToken(value: string | undefined);
    toObject(): {
        pageToken: string;
    };
    toJSON(): {
        pageToken: string;
    };
}
export declare module ListProjectPermissionsRequest { }
export declare class ListProjectPermissionsResponse implements GrpcMessage {
    static toBinary(instance: ListProjectPermissionsResponse): any;
    static fromBinary(bytes: ByteSource): ListProjectPermissionsResponse;
    static refineValues(instance: ListProjectPermissionsResponse): void;
    static fromBinaryReader(instance: ListProjectPermissionsResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ListProjectPermissionsResponse, writer: BinaryWriter): void;
    private _permissions?;
    private _nextPageToken?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ListProjectPermissionsResponse value
     */
    constructor(value?: RecursivePartial<ListProjectPermissionsResponse>);
    get permissions(): string[] | undefined;
    set permissions(value: string[] | undefined);
    get nextPageToken(): string | undefined;
    set nextPageToken(value: string | undefined);
    toObject(): {
        permissions: string[];
        nextPageToken: string;
    };
    toJSON(): {
        permissions: string[];
        nextPageToken: string;
    };
}
export declare module ListProjectPermissionsResponse { }
export declare class SetAgentStatusRequest implements GrpcMessage {
    static toBinary(instance: SetAgentStatusRequest): any;
    static fromBinary(bytes: ByteSource): SetAgentStatusRequest;
    static refineValues(instance: SetAgentStatusRequest): void;
    static fromBinaryReader(instance: SetAgentStatusRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: SetAgentStatusRequest, writer: BinaryWriter): void;
    private _parent?;
    private _status?;
    private _agentView?;
    /**
     * Creates an object and applies default Protobuf values
     * @param SetAgentStatusRequest value
     */
    constructor(value?: RecursivePartial<SetAgentStatusRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get status(): AgentStatus | undefined;
    set status(value: AgentStatus | undefined);
    get agentView(): AgentView | undefined;
    set agentView(value: AgentView | undefined);
    toObject(): {
        parent: string;
        status: AgentStatus;
        agentView: AgentView;
    };
    toJSON(): {
        parent: string;
        status: AgentStatus;
        agentView: AgentView;
    };
}
export declare module SetAgentStatusRequest { }
export declare class AgentSorting implements GrpcMessage {
    static toBinary(instance: AgentSorting): any;
    static fromBinary(bytes: ByteSource): AgentSorting;
    static refineValues(instance: AgentSorting): void;
    static fromBinaryReader(instance: AgentSorting, reader: BinaryReader): void;
    static toBinaryWriter(instance: AgentSorting, writer: BinaryWriter): void;
    private _sortingField?;
    private _sortingMode?;
    /**
     * Creates an object and applies default Protobuf values
     * @param AgentSorting value
     */
    constructor(value?: RecursivePartial<AgentSorting>);
    get sortingField(): AgentSorting.AgentSortingField | undefined;
    set sortingField(value: AgentSorting.AgentSortingField | undefined);
    get sortingMode(): ondewoNlu005.SortingMode | undefined;
    set sortingMode(value: ondewoNlu005.SortingMode | undefined);
    toObject(): {
        sortingField: AgentSorting.AgentSortingField;
        sortingMode: ondewoNlu005.SortingMode;
    };
    toJSON(): {
        sortingField: AgentSorting.AgentSortingField;
        sortingMode: ondewoNlu005.SortingMode;
    };
}
export declare module AgentSorting {
    enum AgentSortingField {
        noAgentSorting = 0,
        sortAgentByName = 1,
        sortAgentByCreationDate = 2,
        sortAgentByLastUpdated = 3,
        sortAgentByOwnerName = 4
    }
}
export declare class SetResourcesRequest implements GrpcMessage {
    static toBinary(instance: SetResourcesRequest): any;
    static fromBinary(bytes: ByteSource): SetResourcesRequest;
    static refineValues(instance: SetResourcesRequest): void;
    static fromBinaryReader(instance: SetResourcesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: SetResourcesRequest, writer: BinaryWriter): void;
    private _parent?;
    private _name?;
    private _type?;
    private _resourceFile?;
    private _languageCode?;
    /**
     * Creates an object and applies default Protobuf values
     * @param SetResourcesRequest value
     */
    constructor(value?: RecursivePartial<SetResourcesRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get name(): string | undefined;
    set name(value: string | undefined);
    get type(): string | undefined;
    set type(value: string | undefined);
    get resourceFile(): Uint8Array | undefined;
    set resourceFile(value: Uint8Array | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    toObject(): {
        parent: string;
        name: string;
        type: string;
        resourceFile: Uint8Array;
        languageCode: string;
    };
    toJSON(): {
        parent: string;
        name: string;
        type: string;
        resourceFile: Uint8Array;
        languageCode: string;
    };
}
export declare module SetResourcesRequest { }
export declare class DeleteResourcesRequest implements GrpcMessage {
    static toBinary(instance: DeleteResourcesRequest): any;
    static fromBinary(bytes: ByteSource): DeleteResourcesRequest;
    static refineValues(instance: DeleteResourcesRequest): void;
    static fromBinaryReader(instance: DeleteResourcesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: DeleteResourcesRequest, writer: BinaryWriter): void;
    private _parent?;
    private _name?;
    private _type?;
    private _languageCode?;
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteResourcesRequest value
     */
    constructor(value?: RecursivePartial<DeleteResourcesRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get name(): string | undefined;
    set name(value: string | undefined);
    get type(): string | undefined;
    set type(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    toObject(): {
        parent: string;
        name: string;
        type: string;
        languageCode: string;
    };
    toJSON(): {
        parent: string;
        name: string;
        type: string;
        languageCode: string;
    };
}
export declare module DeleteResourcesRequest { }
export declare class ExportResourcesRequest implements GrpcMessage {
    static toBinary(instance: ExportResourcesRequest): any;
    static fromBinary(bytes: ByteSource): ExportResourcesRequest;
    static refineValues(instance: ExportResourcesRequest): void;
    static fromBinaryReader(instance: ExportResourcesRequest, reader: BinaryReader): void;
    static toBinaryWriter(instance: ExportResourcesRequest, writer: BinaryWriter): void;
    private _parent?;
    private _name?;
    private _type?;
    private _languageCode?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ExportResourcesRequest value
     */
    constructor(value?: RecursivePartial<ExportResourcesRequest>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get name(): string | undefined;
    set name(value: string | undefined);
    get type(): string | undefined;
    set type(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    toObject(): {
        parent: string;
        name: string;
        type: string;
        languageCode: string;
    };
    toJSON(): {
        parent: string;
        name: string;
        type: string;
        languageCode: string;
    };
}
export declare module ExportResourcesRequest { }
export declare class ExportResourcesResponse implements GrpcMessage {
    static toBinary(instance: ExportResourcesResponse): any;
    static fromBinary(bytes: ByteSource): ExportResourcesResponse;
    static refineValues(instance: ExportResourcesResponse): void;
    static fromBinaryReader(instance: ExportResourcesResponse, reader: BinaryReader): void;
    static toBinaryWriter(instance: ExportResourcesResponse, writer: BinaryWriter): void;
    private _parent?;
    private _name?;
    private _type?;
    private _languageCode?;
    private _resourceFile?;
    /**
     * Creates an object and applies default Protobuf values
     * @param ExportResourcesResponse value
     */
    constructor(value?: RecursivePartial<ExportResourcesResponse>);
    get parent(): string | undefined;
    set parent(value: string | undefined);
    get name(): string | undefined;
    set name(value: string | undefined);
    get type(): string | undefined;
    set type(value: string | undefined);
    get languageCode(): string | undefined;
    set languageCode(value: string | undefined);
    get resourceFile(): Uint8Array | undefined;
    set resourceFile(value: Uint8Array | undefined);
    toObject(): {
        parent: string;
        name: string;
        type: string;
        languageCode: string;
        resourceFile: Uint8Array;
    };
    toJSON(): {
        parent: string;
        name: string;
        type: string;
        languageCode: string;
        resourceFile: Uint8Array;
    };
}
export declare module ExportResourcesResponse { }
