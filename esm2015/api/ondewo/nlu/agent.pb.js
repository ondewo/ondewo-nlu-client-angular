import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as googleProtobuf002 from '../../google/protobuf/field-mask.pb';
import * as googleProtobuf004 from '../../google/protobuf/struct.pb';
import * as ondewoNlu006 from '../../ondewo/nlu/user.pb';
import * as ondewoNlu007 from '../../ondewo/nlu/project-role.pb';
export var AgentView;
(function (AgentView) {
    AgentView[AgentView["agentViewUnspecified"] = 0] = "agentViewUnspecified";
    AgentView[AgentView["agentViewFull"] = 1] = "agentViewFull";
    AgentView[AgentView["agentViewShallow"] = 2] = "agentViewShallow";
})(AgentView || (AgentView = {}));
export var ReportType;
(function (ReportType) {
    ReportType[ReportType["all"] = 0] = "all";
    ReportType[ReportType["intentPerLanguage"] = 1] = "intentPerLanguage";
    ReportType[ReportType["entityPerLanguage"] = 2] = "entityPerLanguage";
    ReportType[ReportType["entityCollision"] = 3] = "entityCollision";
    ReportType[ReportType["intentGeneral"] = 4] = "intentGeneral";
})(ReportType || (ReportType = {}));
export var ReportFormat;
(function (ReportFormat) {
    ReportFormat[ReportFormat["csv"] = 0] = "csv";
    ReportFormat[ReportFormat["html"] = 1] = "html";
    ReportFormat[ReportFormat["json"] = 2] = "json";
})(ReportFormat || (ReportFormat = {}));
export var AgentStatus;
(function (AgentStatus) {
    AgentStatus[AgentStatus["active"] = 0] = "active";
    AgentStatus[AgentStatus["inactive"] = 1] = "inactive";
})(AgentStatus || (AgentStatus = {}));
export class Agent {
    /**
     * Creates an object and applies default Protobuf values
     * @param Agent value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.displayName = value.displayName;
        this.defaultLanguageCode = value.defaultLanguageCode;
        this.supportedLanguageCodes = (value.supportedLanguageCodes || []).slice();
        this.timeZone = value.timeZone;
        this.nluPlatform = value.nluPlatform;
        this.configs = value.configs
            ? new googleProtobuf004.Struct(value.configs)
            : undefined;
        this.ownerId = value.ownerId;
        this.status = value.status;
        this.description = value.description;
        Agent.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        Agent.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new Agent();
        Agent.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.displayName = instance.displayName || '';
        instance.defaultLanguageCode = instance.defaultLanguageCode || '';
        instance.supportedLanguageCodes = instance.supportedLanguageCodes || [];
        instance.timeZone = instance.timeZone || '';
        instance.nluPlatform = instance.nluPlatform || '';
        instance.configs = instance.configs || undefined;
        instance.ownerId = instance.ownerId || '';
        instance.status = instance.status || 0;
        instance.description = instance.description || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.displayName = reader.readString();
                    break;
                case 3:
                    instance.defaultLanguageCode = reader.readString();
                    break;
                case 4:
                    (instance.supportedLanguageCodes =
                        instance.supportedLanguageCodes || []).push(reader.readString());
                    break;
                case 5:
                    instance.timeZone = reader.readString();
                    break;
                case 6:
                    instance.nluPlatform = reader.readString();
                    break;
                case 7:
                    instance.configs = new googleProtobuf004.Struct();
                    reader.readMessage(instance.configs, googleProtobuf004.Struct.fromBinaryReader);
                    break;
                case 8:
                    instance.ownerId = reader.readString();
                    break;
                case 9:
                    instance.status = reader.readEnum();
                    break;
                case 10:
                    instance.description = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        Agent.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.displayName) {
            writer.writeString(2, instance.displayName);
        }
        if (instance.defaultLanguageCode) {
            writer.writeString(3, instance.defaultLanguageCode);
        }
        if (instance.supportedLanguageCodes &&
            instance.supportedLanguageCodes.length) {
            writer.writeRepeatedString(4, instance.supportedLanguageCodes);
        }
        if (instance.timeZone) {
            writer.writeString(5, instance.timeZone);
        }
        if (instance.nluPlatform) {
            writer.writeString(6, instance.nluPlatform);
        }
        if (instance.configs) {
            writer.writeMessage(7, instance.configs, googleProtobuf004.Struct.toBinaryWriter);
        }
        if (instance.ownerId) {
            writer.writeString(8, instance.ownerId);
        }
        if (instance.status) {
            writer.writeEnum(9, instance.status);
        }
        if (instance.description) {
            writer.writeString(10, instance.description);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get displayName() {
        return this._displayName;
    }
    set displayName(value) {
        this._displayName = value;
    }
    get defaultLanguageCode() {
        return this._defaultLanguageCode;
    }
    set defaultLanguageCode(value) {
        this._defaultLanguageCode = value;
    }
    get supportedLanguageCodes() {
        return this._supportedLanguageCodes;
    }
    set supportedLanguageCodes(value) {
        this._supportedLanguageCodes = value;
    }
    get timeZone() {
        return this._timeZone;
    }
    set timeZone(value) {
        this._timeZone = value;
    }
    get nluPlatform() {
        return this._nluPlatform;
    }
    set nluPlatform(value) {
        this._nluPlatform = value;
    }
    get configs() {
        return this._configs;
    }
    set configs(value) {
        this._configs = value;
    }
    get ownerId() {
        return this._ownerId;
    }
    set ownerId(value) {
        this._ownerId = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    toObject() {
        return {
            parent: this.parent,
            displayName: this.displayName,
            defaultLanguageCode: this.defaultLanguageCode,
            supportedLanguageCodes: (this.supportedLanguageCodes || []).slice(),
            timeZone: this.timeZone,
            nluPlatform: this.nluPlatform,
            configs: this.configs ? this.configs.toObject() : undefined,
            ownerId: this.ownerId,
            status: this.status,
            description: this.description
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class AgentWithOwner {
    /**
     * Creates an object and applies default Protobuf values
     * @param AgentWithOwner value
     */
    constructor(value) {
        value = value || {};
        this.agent = value.agent ? new Agent(value.agent) : undefined;
        this.owner = value.owner ? new ondewoNlu006.User(value.owner) : undefined;
        AgentWithOwner.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AgentWithOwner.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AgentWithOwner();
        AgentWithOwner.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.agent = instance.agent || undefined;
        instance.owner = instance.owner || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.agent = new Agent();
                    reader.readMessage(instance.agent, Agent.fromBinaryReader);
                    break;
                case 2:
                    instance.owner = new ondewoNlu006.User();
                    reader.readMessage(instance.owner, ondewoNlu006.User.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        AgentWithOwner.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.agent) {
            writer.writeMessage(1, instance.agent, Agent.toBinaryWriter);
        }
        if (instance.owner) {
            writer.writeMessage(2, instance.owner, ondewoNlu006.User.toBinaryWriter);
        }
    }
    get agent() {
        return this._agent;
    }
    set agent(value) {
        this._agent = value;
    }
    get owner() {
        return this._owner;
    }
    set owner(value) {
        this._owner = value;
    }
    toObject() {
        return {
            agent: this.agent ? this.agent.toObject() : undefined,
            owner: this.owner ? this.owner.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class AgentOfUserWithOwner {
    /**
     * Creates an object and applies default Protobuf values
     * @param AgentOfUserWithOwner value
     */
    constructor(value) {
        value = value || {};
        this.agentWithOwner = value.agentWithOwner
            ? new AgentWithOwner(value.agentWithOwner)
            : undefined;
        this.projectRole = value.projectRole
            ? new ondewoNlu007.ProjectRole(value.projectRole)
            : undefined;
        AgentOfUserWithOwner.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AgentOfUserWithOwner.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AgentOfUserWithOwner();
        AgentOfUserWithOwner.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.agentWithOwner = instance.agentWithOwner || undefined;
        instance.projectRole = instance.projectRole || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.agentWithOwner = new AgentWithOwner();
                    reader.readMessage(instance.agentWithOwner, AgentWithOwner.fromBinaryReader);
                    break;
                case 2:
                    instance.projectRole = new ondewoNlu007.ProjectRole();
                    reader.readMessage(instance.projectRole, ondewoNlu007.ProjectRole.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        AgentOfUserWithOwner.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.agentWithOwner) {
            writer.writeMessage(1, instance.agentWithOwner, AgentWithOwner.toBinaryWriter);
        }
        if (instance.projectRole) {
            writer.writeMessage(2, instance.projectRole, ondewoNlu007.ProjectRole.toBinaryWriter);
        }
    }
    get agentWithOwner() {
        return this._agentWithOwner;
    }
    set agentWithOwner(value) {
        this._agentWithOwner = value;
    }
    get projectRole() {
        return this._projectRole;
    }
    set projectRole(value) {
        this._projectRole = value;
    }
    toObject() {
        return {
            agentWithOwner: this.agentWithOwner
                ? this.agentWithOwner.toObject()
                : undefined,
            projectRole: this.projectRole ? this.projectRole.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class CreateAgentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param CreateAgentRequest value
     */
    constructor(value) {
        value = value || {};
        this.agent = value.agent ? new Agent(value.agent) : undefined;
        this.agentView = value.agentView;
        CreateAgentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        CreateAgentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new CreateAgentRequest();
        CreateAgentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.agent = instance.agent || undefined;
        instance.agentView = instance.agentView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.agent = new Agent();
                    reader.readMessage(instance.agent, Agent.fromBinaryReader);
                    break;
                case 2:
                    instance.agentView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        CreateAgentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.agent) {
            writer.writeMessage(1, instance.agent, Agent.toBinaryWriter);
        }
        if (instance.agentView) {
            writer.writeEnum(2, instance.agentView);
        }
    }
    get agent() {
        return this._agent;
    }
    set agent(value) {
        this._agent = value;
    }
    get agentView() {
        return this._agentView;
    }
    set agentView(value) {
        this._agentView = value;
    }
    toObject() {
        return {
            agent: this.agent ? this.agent.toObject() : undefined,
            agentView: this.agentView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class UpdateAgentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param UpdateAgentRequest value
     */
    constructor(value) {
        value = value || {};
        this.agent = value.agent ? new Agent(value.agent) : undefined;
        this.agentView = value.agentView;
        this.updateMask = value.updateMask
            ? new googleProtobuf002.FieldMask(value.updateMask)
            : undefined;
        UpdateAgentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UpdateAgentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UpdateAgentRequest();
        UpdateAgentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.agent = instance.agent || undefined;
        instance.agentView = instance.agentView || 0;
        instance.updateMask = instance.updateMask || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.agent = new Agent();
                    reader.readMessage(instance.agent, Agent.fromBinaryReader);
                    break;
                case 2:
                    instance.agentView = reader.readEnum();
                    break;
                case 3:
                    instance.updateMask = new googleProtobuf002.FieldMask();
                    reader.readMessage(instance.updateMask, googleProtobuf002.FieldMask.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        UpdateAgentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.agent) {
            writer.writeMessage(1, instance.agent, Agent.toBinaryWriter);
        }
        if (instance.agentView) {
            writer.writeEnum(2, instance.agentView);
        }
        if (instance.updateMask) {
            writer.writeMessage(3, instance.updateMask, googleProtobuf002.FieldMask.toBinaryWriter);
        }
    }
    get agent() {
        return this._agent;
    }
    set agent(value) {
        this._agent = value;
    }
    get agentView() {
        return this._agentView;
    }
    set agentView(value) {
        this._agentView = value;
    }
    get updateMask() {
        return this._updateMask;
    }
    set updateMask(value) {
        this._updateMask = value;
    }
    toObject() {
        return {
            agent: this.agent ? this.agent.toObject() : undefined,
            agentView: this.agentView,
            updateMask: this.updateMask ? this.updateMask.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class DeleteAgentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteAgentRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        DeleteAgentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteAgentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteAgentRequest();
        DeleteAgentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteAgentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    toObject() {
        return {
            parent: this.parent
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GetAgentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAgentRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.agentView = value.agentView;
        GetAgentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetAgentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetAgentRequest();
        GetAgentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.agentView = instance.agentView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.agentView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetAgentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.agentView) {
            writer.writeEnum(2, instance.agentView);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get agentView() {
        return this._agentView;
    }
    set agentView(value) {
        this._agentView = value;
    }
    toObject() {
        return {
            parent: this.parent,
            agentView: this.agentView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListAgentsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListAgentsRequest value
     */
    constructor(value) {
        value = value || {};
        this.agentView = value.agentView;
        this.pageToken = value.pageToken;
        this.sortByField = value.sortByField
            ? new AgentSorting(value.sortByField)
            : undefined;
        ListAgentsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListAgentsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListAgentsRequest();
        ListAgentsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.agentView = instance.agentView || 0;
        instance.pageToken = instance.pageToken || '';
        instance.sortByField = instance.sortByField || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.agentView = reader.readEnum();
                    break;
                case 2:
                    instance.pageToken = reader.readString();
                    break;
                case 3:
                    instance.sortByField = new AgentSorting();
                    reader.readMessage(instance.sortByField, AgentSorting.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        ListAgentsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.agentView) {
            writer.writeEnum(1, instance.agentView);
        }
        if (instance.pageToken) {
            writer.writeString(2, instance.pageToken);
        }
        if (instance.sortByField) {
            writer.writeMessage(3, instance.sortByField, AgentSorting.toBinaryWriter);
        }
    }
    get agentView() {
        return this._agentView;
    }
    set agentView(value) {
        this._agentView = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    get sortByField() {
        return this._sortByField;
    }
    set sortByField(value) {
        this._sortByField = value;
    }
    toObject() {
        return {
            agentView: this.agentView,
            pageToken: this.pageToken,
            sortByField: this.sortByField ? this.sortByField.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListAgentsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListAgentsResponse value
     */
    constructor(value) {
        value = value || {};
        this.agentsWithOwners = (value.agentsWithOwners || []).map(m => new AgentWithOwner(m));
        this.nextPageToken = value.nextPageToken;
        ListAgentsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListAgentsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListAgentsResponse();
        ListAgentsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.agentsWithOwners = instance.agentsWithOwners || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new AgentWithOwner();
                    reader.readMessage(messageInitializer1, AgentWithOwner.fromBinaryReader);
                    (instance.agentsWithOwners = instance.agentsWithOwners || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListAgentsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.agentsWithOwners && instance.agentsWithOwners.length) {
            writer.writeRepeatedMessage(1, instance.agentsWithOwners, AgentWithOwner.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get agentsWithOwners() {
        return this._agentsWithOwners;
    }
    set agentsWithOwners(value) {
        this._agentsWithOwners = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            agentsWithOwners: (this.agentsWithOwners || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListAgentsOfUserResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListAgentsOfUserResponse value
     */
    constructor(value) {
        value = value || {};
        this.agentsOfUserWithOwners = (value.agentsOfUserWithOwners || []).map(m => new AgentOfUserWithOwner(m));
        this.nextPageToken = value.nextPageToken;
        ListAgentsOfUserResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListAgentsOfUserResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListAgentsOfUserResponse();
        ListAgentsOfUserResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.agentsOfUserWithOwners = instance.agentsOfUserWithOwners || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new AgentOfUserWithOwner();
                    reader.readMessage(messageInitializer1, AgentOfUserWithOwner.fromBinaryReader);
                    (instance.agentsOfUserWithOwners =
                        instance.agentsOfUserWithOwners || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListAgentsOfUserResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.agentsOfUserWithOwners &&
            instance.agentsOfUserWithOwners.length) {
            writer.writeRepeatedMessage(1, instance.agentsOfUserWithOwners, AgentOfUserWithOwner.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get agentsOfUserWithOwners() {
        return this._agentsOfUserWithOwners;
    }
    set agentsOfUserWithOwners(value) {
        this._agentsOfUserWithOwners = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            agentsOfUserWithOwners: (this.agentsOfUserWithOwners || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class TrainAgentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param TrainAgentRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.branch = value.branch;
        TrainAgentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        TrainAgentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new TrainAgentRequest();
        TrainAgentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.branch = instance.branch || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.branch = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        TrainAgentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.branch) {
            writer.writeString(2, instance.branch);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get branch() {
        return this._branch;
    }
    set branch(value) {
        this._branch = value;
    }
    toObject() {
        return {
            parent: this.parent,
            branch: this.branch
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class BuildCacheRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param BuildCacheRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.branch = value.branch;
        BuildCacheRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        BuildCacheRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new BuildCacheRequest();
        BuildCacheRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.branch = instance.branch || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.branch = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        BuildCacheRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.branch) {
            writer.writeString(2, instance.branch);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get branch() {
        return this._branch;
    }
    set branch(value) {
        this._branch = value;
    }
    toObject() {
        return {
            parent: this.parent,
            branch: this.branch
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ExportAgentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ExportAgentRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.agentUri = value.agentUri;
        ExportAgentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ExportAgentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ExportAgentRequest();
        ExportAgentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.agentUri = instance.agentUri || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.agentUri = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ExportAgentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.agentUri) {
            writer.writeString(2, instance.agentUri);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get agentUri() {
        return this._agentUri;
    }
    set agentUri(value) {
        this._agentUri = value;
    }
    toObject() {
        return {
            parent: this.parent,
            agentUri: this.agentUri
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ExportAgentResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ExportAgentResponse value
     */
    constructor(value) {
        this._agent = ExportAgentResponse.AgentCase.none;
        value = value || {};
        this.agentUri = value.agentUri;
        this.agentContent = value.agentContent;
        ExportAgentResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ExportAgentResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ExportAgentResponse();
        ExportAgentResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) { }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.agentUri = reader.readString();
                    break;
                case 2:
                    instance.agentContent = reader.readBytes();
                    break;
                default:
                    reader.skipField();
            }
        }
        ExportAgentResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.agentUri || instance.agentUri === '') {
            writer.writeString(1, instance.agentUri);
        }
        if (instance.agentContent && instance.agentContent.length) {
            writer.writeBytes(2, instance.agentContent);
        }
    }
    get agentUri() {
        return this._agentUri;
    }
    set agentUri(value) {
        if (value !== undefined && value !== null) {
            this._agentContent = undefined;
            this._agent = ExportAgentResponse.AgentCase.agentUri;
        }
        this._agentUri = value;
    }
    get agentContent() {
        return this._agentContent;
    }
    set agentContent(value) {
        if (value !== undefined && value !== null) {
            this._agentUri = undefined;
            this._agent = ExportAgentResponse.AgentCase.agentContent;
        }
        this._agentContent = value;
    }
    get agent() {
        return this._agent;
    }
    toObject() {
        return {
            agentUri: this.agentUri,
            agentContent: this.agentContent
                ? this.agentContent.subarray(0)
                : new Uint8Array()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (ExportAgentResponse) {
    let AgentCase;
    (function (AgentCase) {
        AgentCase[AgentCase["none"] = 0] = "none";
        AgentCase[AgentCase["agentUri"] = 1] = "agentUri";
        AgentCase[AgentCase["agentContent"] = 2] = "agentContent";
    })(AgentCase = ExportAgentResponse.AgentCase || (ExportAgentResponse.AgentCase = {}));
})(ExportAgentResponse || (ExportAgentResponse = {}));
export class OptimizeRankingMatchRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param OptimizeRankingMatchRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.languageCodes = (value.languageCodes || []).slice();
        this.optimizationConfigs = (value.optimizationConfigs || []).map(m => new RankingMatchOptimizationConfig(m));
        this.inPlace = value.inPlace;
        OptimizeRankingMatchRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        OptimizeRankingMatchRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new OptimizeRankingMatchRequest();
        OptimizeRankingMatchRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.languageCodes = instance.languageCodes || [];
        instance.optimizationConfigs = instance.optimizationConfigs || [];
        instance.inPlace = instance.inPlace || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    (instance.languageCodes = instance.languageCodes || []).push(reader.readString());
                    break;
                case 3:
                    const messageInitializer3 = new RankingMatchOptimizationConfig();
                    reader.readMessage(messageInitializer3, RankingMatchOptimizationConfig.fromBinaryReader);
                    (instance.optimizationConfigs =
                        instance.optimizationConfigs || []).push(messageInitializer3);
                    break;
                case 4:
                    instance.inPlace = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        OptimizeRankingMatchRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.languageCodes && instance.languageCodes.length) {
            writer.writeRepeatedString(2, instance.languageCodes);
        }
        if (instance.optimizationConfigs && instance.optimizationConfigs.length) {
            writer.writeRepeatedMessage(3, instance.optimizationConfigs, RankingMatchOptimizationConfig.toBinaryWriter);
        }
        if (instance.inPlace) {
            writer.writeBool(4, instance.inPlace);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get languageCodes() {
        return this._languageCodes;
    }
    set languageCodes(value) {
        this._languageCodes = value;
    }
    get optimizationConfigs() {
        return this._optimizationConfigs;
    }
    set optimizationConfigs(value) {
        this._optimizationConfigs = value;
    }
    get inPlace() {
        return this._inPlace;
    }
    set inPlace(value) {
        this._inPlace = value;
    }
    toObject() {
        return {
            parent: this.parent,
            languageCodes: (this.languageCodes || []).slice(),
            optimizationConfigs: (this.optimizationConfigs || []).map(m => m.toObject()),
            inPlace: this.inPlace
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class RankingMatchOptimizationConfig {
    /**
     * Creates an object and applies default Protobuf values
     * @param RankingMatchOptimizationConfig value
     */
    constructor(value) {
        value = value || {};
        this.languageCode = value.languageCode;
        this.nSplits = value.nSplits;
        this.randomSeed = value.randomSeed;
        this.initialThresholds = value.initialThresholds
            ? new googleProtobuf004.Struct(value.initialThresholds)
            : undefined;
        RankingMatchOptimizationConfig.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        RankingMatchOptimizationConfig.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new RankingMatchOptimizationConfig();
        RankingMatchOptimizationConfig.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.languageCode = instance.languageCode || '';
        instance.nSplits = instance.nSplits || 0;
        instance.randomSeed = instance.randomSeed || 0;
        instance.initialThresholds = instance.initialThresholds || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.languageCode = reader.readString();
                    break;
                case 2:
                    instance.nSplits = reader.readInt32();
                    break;
                case 3:
                    instance.randomSeed = reader.readInt32();
                    break;
                case 4:
                    instance.initialThresholds = new googleProtobuf004.Struct();
                    reader.readMessage(instance.initialThresholds, googleProtobuf004.Struct.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        RankingMatchOptimizationConfig.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.languageCode) {
            writer.writeString(1, instance.languageCode);
        }
        if (instance.nSplits) {
            writer.writeInt32(2, instance.nSplits);
        }
        if (instance.randomSeed) {
            writer.writeInt32(3, instance.randomSeed);
        }
        if (instance.initialThresholds) {
            writer.writeMessage(4, instance.initialThresholds, googleProtobuf004.Struct.toBinaryWriter);
        }
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get nSplits() {
        return this._nSplits;
    }
    set nSplits(value) {
        this._nSplits = value;
    }
    get randomSeed() {
        return this._randomSeed;
    }
    set randomSeed(value) {
        this._randomSeed = value;
    }
    get initialThresholds() {
        return this._initialThresholds;
    }
    set initialThresholds(value) {
        this._initialThresholds = value;
    }
    toObject() {
        return {
            languageCode: this.languageCode,
            nSplits: this.nSplits,
            randomSeed: this.randomSeed,
            initialThresholds: this.initialThresholds
                ? this.initialThresholds.toObject()
                : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class OptimizeRankingMatchResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param OptimizeRankingMatchResponse value
     */
    constructor(value) {
        value = value || {};
        this.optimizationInfo = value.optimizationInfo
            ? new googleProtobuf004.Struct(value.optimizationInfo)
            : undefined;
        this.optimizedOndewoConfig = value.optimizedOndewoConfig
            ? new googleProtobuf004.Struct(value.optimizedOndewoConfig)
            : undefined;
        OptimizeRankingMatchResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        OptimizeRankingMatchResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new OptimizeRankingMatchResponse();
        OptimizeRankingMatchResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.optimizationInfo = instance.optimizationInfo || undefined;
        instance.optimizedOndewoConfig =
            instance.optimizedOndewoConfig || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.optimizationInfo = new googleProtobuf004.Struct();
                    reader.readMessage(instance.optimizationInfo, googleProtobuf004.Struct.fromBinaryReader);
                    break;
                case 3:
                    instance.optimizedOndewoConfig = new googleProtobuf004.Struct();
                    reader.readMessage(instance.optimizedOndewoConfig, googleProtobuf004.Struct.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        OptimizeRankingMatchResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.optimizationInfo) {
            writer.writeMessage(1, instance.optimizationInfo, googleProtobuf004.Struct.toBinaryWriter);
        }
        if (instance.optimizedOndewoConfig) {
            writer.writeMessage(3, instance.optimizedOndewoConfig, googleProtobuf004.Struct.toBinaryWriter);
        }
    }
    get optimizationInfo() {
        return this._optimizationInfo;
    }
    set optimizationInfo(value) {
        this._optimizationInfo = value;
    }
    get optimizedOndewoConfig() {
        return this._optimizedOndewoConfig;
    }
    set optimizedOndewoConfig(value) {
        this._optimizedOndewoConfig = value;
    }
    toObject() {
        return {
            optimizationInfo: this.optimizationInfo
                ? this.optimizationInfo.toObject()
                : undefined,
            optimizedOndewoConfig: this.optimizedOndewoConfig
                ? this.optimizedOndewoConfig.toObject()
                : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ImportAgentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ImportAgentRequest value
     */
    constructor(value) {
        this._agent = ImportAgentRequest.AgentCase.none;
        value = value || {};
        this.parent = value.parent;
        this.agentUri = value.agentUri;
        this.agentContent = value.agentContent;
        ImportAgentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ImportAgentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ImportAgentRequest();
        ImportAgentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.agentUri = reader.readString();
                    break;
                case 3:
                    instance.agentContent = reader.readBytes();
                    break;
                default:
                    reader.skipField();
            }
        }
        ImportAgentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.agentUri || instance.agentUri === '') {
            writer.writeString(2, instance.agentUri);
        }
        if (instance.agentContent && instance.agentContent.length) {
            writer.writeBytes(3, instance.agentContent);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get agentUri() {
        return this._agentUri;
    }
    set agentUri(value) {
        if (value !== undefined && value !== null) {
            this._agentContent = undefined;
            this._agent = ImportAgentRequest.AgentCase.agentUri;
        }
        this._agentUri = value;
    }
    get agentContent() {
        return this._agentContent;
    }
    set agentContent(value) {
        if (value !== undefined && value !== null) {
            this._agentUri = undefined;
            this._agent = ImportAgentRequest.AgentCase.agentContent;
        }
        this._agentContent = value;
    }
    get agent() {
        return this._agent;
    }
    toObject() {
        return {
            parent: this.parent,
            agentUri: this.agentUri,
            agentContent: this.agentContent
                ? this.agentContent.subarray(0)
                : new Uint8Array()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (ImportAgentRequest) {
    let AgentCase;
    (function (AgentCase) {
        AgentCase[AgentCase["none"] = 0] = "none";
        AgentCase[AgentCase["agentUri"] = 1] = "agentUri";
        AgentCase[AgentCase["agentContent"] = 2] = "agentContent";
    })(AgentCase = ImportAgentRequest.AgentCase || (ImportAgentRequest.AgentCase = {}));
})(ImportAgentRequest || (ImportAgentRequest = {}));
export class RestoreAgentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param RestoreAgentRequest value
     */
    constructor(value) {
        this._agent = RestoreAgentRequest.AgentCase.none;
        value = value || {};
        this.parent = value.parent;
        this.agentUri = value.agentUri;
        this.agentContent = value.agentContent;
        RestoreAgentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        RestoreAgentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new RestoreAgentRequest();
        RestoreAgentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.agentUri = reader.readString();
                    break;
                case 3:
                    instance.agentContent = reader.readBytes();
                    break;
                default:
                    reader.skipField();
            }
        }
        RestoreAgentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.agentUri || instance.agentUri === '') {
            writer.writeString(2, instance.agentUri);
        }
        if (instance.agentContent && instance.agentContent.length) {
            writer.writeBytes(3, instance.agentContent);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get agentUri() {
        return this._agentUri;
    }
    set agentUri(value) {
        if (value !== undefined && value !== null) {
            this._agentContent = undefined;
            this._agent = RestoreAgentRequest.AgentCase.agentUri;
        }
        this._agentUri = value;
    }
    get agentContent() {
        return this._agentContent;
    }
    set agentContent(value) {
        if (value !== undefined && value !== null) {
            this._agentUri = undefined;
            this._agent = RestoreAgentRequest.AgentCase.agentContent;
        }
        this._agentContent = value;
    }
    get agent() {
        return this._agent;
    }
    toObject() {
        return {
            parent: this.parent,
            agentUri: this.agentUri,
            agentContent: this.agentContent
                ? this.agentContent.subarray(0)
                : new Uint8Array()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (RestoreAgentRequest) {
    let AgentCase;
    (function (AgentCase) {
        AgentCase[AgentCase["none"] = 0] = "none";
        AgentCase[AgentCase["agentUri"] = 1] = "agentUri";
        AgentCase[AgentCase["agentContent"] = 2] = "agentContent";
    })(AgentCase = RestoreAgentRequest.AgentCase || (RestoreAgentRequest.AgentCase = {}));
})(RestoreAgentRequest || (RestoreAgentRequest = {}));
export class GetAgentStatisticsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAgentStatisticsRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.format = value.format;
        this.languageCode = value.languageCode;
        this.type = value.type;
        GetAgentStatisticsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetAgentStatisticsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetAgentStatisticsRequest();
        GetAgentStatisticsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.format = instance.format || 0;
        instance.languageCode = instance.languageCode || '';
        instance.type = instance.type || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.format = reader.readEnum();
                    break;
                case 3:
                    instance.languageCode = reader.readString();
                    break;
                case 4:
                    instance.type = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetAgentStatisticsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.format) {
            writer.writeEnum(2, instance.format);
        }
        if (instance.languageCode) {
            writer.writeString(3, instance.languageCode);
        }
        if (instance.type) {
            writer.writeEnum(4, instance.type);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get format() {
        return this._format;
    }
    set format(value) {
        this._format = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    toObject() {
        return {
            parent: this.parent,
            format: this.format,
            languageCode: this.languageCode,
            type: this.type
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GetAgentStatisticsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetAgentStatisticsResponse value
     */
    constructor(value) {
        value = value || {};
        this.reports = value.reports;
        this.format = value.format;
        this.type = value.type;
        GetAgentStatisticsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetAgentStatisticsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetAgentStatisticsResponse();
        GetAgentStatisticsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.reports = instance.reports || new Uint8Array();
        instance.format = instance.format || 0;
        instance.type = instance.type || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.reports = reader.readBytes();
                    break;
                case 2:
                    instance.format = reader.readEnum();
                    break;
                case 3:
                    instance.type = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetAgentStatisticsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.reports && instance.reports.length) {
            writer.writeBytes(1, instance.reports);
        }
        if (instance.format) {
            writer.writeEnum(2, instance.format);
        }
        if (instance.type) {
            writer.writeEnum(3, instance.type);
        }
    }
    get reports() {
        return this._reports;
    }
    set reports(value) {
        this._reports = value;
    }
    get format() {
        return this._format;
    }
    set format(value) {
        this._format = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    toObject() {
        return {
            reports: this.reports ? this.reports.subarray(0) : new Uint8Array(),
            format: this.format,
            type: this.type
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class AddUserToProjectRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param AddUserToProjectRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.userId = value.userId;
        this.projectRoleId = value.projectRoleId;
        AddUserToProjectRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AddUserToProjectRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AddUserToProjectRequest();
        AddUserToProjectRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.userId = instance.userId || '';
        instance.projectRoleId = instance.projectRoleId || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.userId = reader.readString();
                    break;
                case 4:
                    instance.projectRoleId = reader.readUint32();
                    break;
                default:
                    reader.skipField();
            }
        }
        AddUserToProjectRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.userId) {
            writer.writeString(2, instance.userId);
        }
        if (instance.projectRoleId) {
            writer.writeUint32(4, instance.projectRoleId);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    get projectRoleId() {
        return this._projectRoleId;
    }
    set projectRoleId(value) {
        this._projectRoleId = value;
    }
    toObject() {
        return {
            parent: this.parent,
            userId: this.userId,
            projectRoleId: this.projectRoleId
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class RemoveUserFromProjectRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param RemoveUserFromProjectRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.userId = value.userId;
        RemoveUserFromProjectRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        RemoveUserFromProjectRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new RemoveUserFromProjectRequest();
        RemoveUserFromProjectRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.userId = instance.userId || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.userId = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        RemoveUserFromProjectRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.userId) {
            writer.writeString(2, instance.userId);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    toObject() {
        return {
            parent: this.parent,
            userId: this.userId
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListUsersInProjectRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListUsersInProjectRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.pageToken = value.pageToken;
        ListUsersInProjectRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListUsersInProjectRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListUsersInProjectRequest();
        ListUsersInProjectRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListUsersInProjectRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.pageToken) {
            writer.writeString(2, instance.pageToken);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            parent: this.parent,
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class UserInProject {
    /**
     * Creates an object and applies default Protobuf values
     * @param UserInProject value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.user = value.user ? new ondewoNlu006.User(value.user) : undefined;
        this.roleId = value.roleId;
        UserInProject.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        UserInProject.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new UserInProject();
        UserInProject.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.user = instance.user || undefined;
        instance.roleId = instance.roleId || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.user = new ondewoNlu006.User();
                    reader.readMessage(instance.user, ondewoNlu006.User.fromBinaryReader);
                    break;
                case 3:
                    instance.roleId = reader.readUint32();
                    break;
                default:
                    reader.skipField();
            }
        }
        UserInProject.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.user) {
            writer.writeMessage(2, instance.user, ondewoNlu006.User.toBinaryWriter);
        }
        if (instance.roleId) {
            writer.writeUint32(3, instance.roleId);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get roleId() {
        return this._roleId;
    }
    set roleId(value) {
        this._roleId = value;
    }
    toObject() {
        return {
            parent: this.parent,
            user: this.user ? this.user.toObject() : undefined,
            roleId: this.roleId
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListUsersInProjectResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListUsersInProjectResponse value
     */
    constructor(value) {
        value = value || {};
        this.users = (value.users || []).map(m => new UserInProject(m));
        this.nextPageToken = value.nextPageToken;
        ListUsersInProjectResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListUsersInProjectResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListUsersInProjectResponse();
        ListUsersInProjectResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.users = instance.users || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new UserInProject();
                    reader.readMessage(messageInitializer1, UserInProject.fromBinaryReader);
                    (instance.users = instance.users || []).push(messageInitializer1);
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListUsersInProjectResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.users && instance.users.length) {
            writer.writeRepeatedMessage(1, instance.users, UserInProject.toBinaryWriter);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get users() {
        return this._users;
    }
    set users(value) {
        this._users = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            users: (this.users || []).map(m => m.toObject()),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class GetPlatformInfoResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param GetPlatformInfoResponse value
     */
    constructor(value) {
        value = value || {};
        this.version = value.version;
        this.commitHash = value.commitHash;
        GetPlatformInfoResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        GetPlatformInfoResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new GetPlatformInfoResponse();
        GetPlatformInfoResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.version = instance.version || '';
        instance.commitHash = instance.commitHash || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.version = reader.readString();
                    break;
                case 2:
                    instance.commitHash = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        GetPlatformInfoResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.version) {
            writer.writeString(1, instance.version);
        }
        if (instance.commitHash) {
            writer.writeString(2, instance.commitHash);
        }
    }
    get version() {
        return this._version;
    }
    set version(value) {
        this._version = value;
    }
    get commitHash() {
        return this._commitHash;
    }
    set commitHash(value) {
        this._commitHash = value;
    }
    toObject() {
        return {
            version: this.version,
            commitHash: this.commitHash
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListProjectPermissionsRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListProjectPermissionsRequest value
     */
    constructor(value) {
        value = value || {};
        this.pageToken = value.pageToken;
        ListProjectPermissionsRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListProjectPermissionsRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListProjectPermissionsRequest();
        ListProjectPermissionsRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.pageToken = instance.pageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.pageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListProjectPermissionsRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.pageToken) {
            writer.writeString(1, instance.pageToken);
        }
    }
    get pageToken() {
        return this._pageToken;
    }
    set pageToken(value) {
        this._pageToken = value;
    }
    toObject() {
        return {
            pageToken: this.pageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ListProjectPermissionsResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ListProjectPermissionsResponse value
     */
    constructor(value) {
        value = value || {};
        this.permissions = (value.permissions || []).slice();
        this.nextPageToken = value.nextPageToken;
        ListProjectPermissionsResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ListProjectPermissionsResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ListProjectPermissionsResponse();
        ListProjectPermissionsResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.permissions = instance.permissions || [];
        instance.nextPageToken = instance.nextPageToken || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    (instance.permissions = instance.permissions || []).push(reader.readString());
                    break;
                case 2:
                    instance.nextPageToken = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ListProjectPermissionsResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.permissions && instance.permissions.length) {
            writer.writeRepeatedString(1, instance.permissions);
        }
        if (instance.nextPageToken) {
            writer.writeString(2, instance.nextPageToken);
        }
    }
    get permissions() {
        return this._permissions;
    }
    set permissions(value) {
        this._permissions = value;
    }
    get nextPageToken() {
        return this._nextPageToken;
    }
    set nextPageToken(value) {
        this._nextPageToken = value;
    }
    toObject() {
        return {
            permissions: (this.permissions || []).slice(),
            nextPageToken: this.nextPageToken
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class SetAgentStatusRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param SetAgentStatusRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.status = value.status;
        this.agentView = value.agentView;
        SetAgentStatusRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SetAgentStatusRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SetAgentStatusRequest();
        SetAgentStatusRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.status = instance.status || 0;
        instance.agentView = instance.agentView || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.status = reader.readEnum();
                    break;
                case 3:
                    instance.agentView = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        SetAgentStatusRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.status) {
            writer.writeEnum(2, instance.status);
        }
        if (instance.agentView) {
            writer.writeEnum(3, instance.agentView);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get agentView() {
        return this._agentView;
    }
    set agentView(value) {
        this._agentView = value;
    }
    toObject() {
        return {
            parent: this.parent,
            status: this.status,
            agentView: this.agentView
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class AgentSorting {
    /**
     * Creates an object and applies default Protobuf values
     * @param AgentSorting value
     */
    constructor(value) {
        value = value || {};
        this.sortingField = value.sortingField;
        this.sortingMode = value.sortingMode;
        AgentSorting.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        AgentSorting.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new AgentSorting();
        AgentSorting.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.sortingField = instance.sortingField || 0;
        instance.sortingMode = instance.sortingMode || 0;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.sortingField = reader.readEnum();
                    break;
                case 2:
                    instance.sortingMode = reader.readEnum();
                    break;
                default:
                    reader.skipField();
            }
        }
        AgentSorting.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.sortingField) {
            writer.writeEnum(1, instance.sortingField);
        }
        if (instance.sortingMode) {
            writer.writeEnum(2, instance.sortingMode);
        }
    }
    get sortingField() {
        return this._sortingField;
    }
    set sortingField(value) {
        this._sortingField = value;
    }
    get sortingMode() {
        return this._sortingMode;
    }
    set sortingMode(value) {
        this._sortingMode = value;
    }
    toObject() {
        return {
            sortingField: this.sortingField,
            sortingMode: this.sortingMode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
(function (AgentSorting) {
    let AgentSortingField;
    (function (AgentSortingField) {
        AgentSortingField[AgentSortingField["noAgentSorting"] = 0] = "noAgentSorting";
        AgentSortingField[AgentSortingField["sortAgentByName"] = 1] = "sortAgentByName";
        AgentSortingField[AgentSortingField["sortAgentByCreationDate"] = 2] = "sortAgentByCreationDate";
        AgentSortingField[AgentSortingField["sortAgentByLastUpdated"] = 3] = "sortAgentByLastUpdated";
        AgentSortingField[AgentSortingField["sortAgentByOwnerName"] = 4] = "sortAgentByOwnerName";
    })(AgentSortingField = AgentSorting.AgentSortingField || (AgentSorting.AgentSortingField = {}));
})(AgentSorting || (AgentSorting = {}));
export class SetResourcesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param SetResourcesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.name = value.name;
        this.type = value.type;
        this.resourceFile = value.resourceFile;
        this.languageCode = value.languageCode;
        SetResourcesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        SetResourcesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new SetResourcesRequest();
        SetResourcesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.name = instance.name || '';
        instance.type = instance.type || '';
        instance.resourceFile = instance.resourceFile || new Uint8Array();
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.name = reader.readString();
                    break;
                case 3:
                    instance.type = reader.readString();
                    break;
                case 4:
                    instance.resourceFile = reader.readBytes();
                    break;
                case 5:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        SetResourcesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.name) {
            writer.writeString(2, instance.name);
        }
        if (instance.type) {
            writer.writeString(3, instance.type);
        }
        if (instance.resourceFile && instance.resourceFile.length) {
            writer.writeBytes(4, instance.resourceFile);
        }
        if (instance.languageCode) {
            writer.writeString(5, instance.languageCode);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get resourceFile() {
        return this._resourceFile;
    }
    set resourceFile(value) {
        this._resourceFile = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    toObject() {
        return {
            parent: this.parent,
            name: this.name,
            type: this.type,
            resourceFile: this.resourceFile
                ? this.resourceFile.subarray(0)
                : new Uint8Array(),
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class DeleteResourcesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param DeleteResourcesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.name = value.name;
        this.type = value.type;
        this.languageCode = value.languageCode;
        DeleteResourcesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        DeleteResourcesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new DeleteResourcesRequest();
        DeleteResourcesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.name = instance.name || '';
        instance.type = instance.type || '';
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.name = reader.readString();
                    break;
                case 3:
                    instance.type = reader.readString();
                    break;
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        DeleteResourcesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.name) {
            writer.writeString(2, instance.name);
        }
        if (instance.type) {
            writer.writeString(3, instance.type);
        }
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    toObject() {
        return {
            parent: this.parent,
            name: this.name,
            type: this.type,
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ExportResourcesRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param ExportResourcesRequest value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.name = value.name;
        this.type = value.type;
        this.languageCode = value.languageCode;
        ExportResourcesRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ExportResourcesRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ExportResourcesRequest();
        ExportResourcesRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.name = instance.name || '';
        instance.type = instance.type || '';
        instance.languageCode = instance.languageCode || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.name = reader.readString();
                    break;
                case 3:
                    instance.type = reader.readString();
                    break;
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        ExportResourcesRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.name) {
            writer.writeString(2, instance.name);
        }
        if (instance.type) {
            writer.writeString(3, instance.type);
        }
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    toObject() {
        return {
            parent: this.parent,
            name: this.name,
            type: this.type,
            languageCode: this.languageCode
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class ExportResourcesResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param ExportResourcesResponse value
     */
    constructor(value) {
        value = value || {};
        this.parent = value.parent;
        this.name = value.name;
        this.type = value.type;
        this.languageCode = value.languageCode;
        this.resourceFile = value.resourceFile;
        ExportResourcesResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        ExportResourcesResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new ExportResourcesResponse();
        ExportResourcesResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.parent = instance.parent || '';
        instance.name = instance.name || '';
        instance.type = instance.type || '';
        instance.languageCode = instance.languageCode || '';
        instance.resourceFile = instance.resourceFile || new Uint8Array();
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.parent = reader.readString();
                    break;
                case 2:
                    instance.name = reader.readString();
                    break;
                case 3:
                    instance.type = reader.readString();
                    break;
                case 4:
                    instance.languageCode = reader.readString();
                    break;
                case 5:
                    instance.resourceFile = reader.readBytes();
                    break;
                default:
                    reader.skipField();
            }
        }
        ExportResourcesResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.parent) {
            writer.writeString(1, instance.parent);
        }
        if (instance.name) {
            writer.writeString(2, instance.name);
        }
        if (instance.type) {
            writer.writeString(3, instance.type);
        }
        if (instance.languageCode) {
            writer.writeString(4, instance.languageCode);
        }
        if (instance.resourceFile && instance.resourceFile.length) {
            writer.writeBytes(5, instance.resourceFile);
        }
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get languageCode() {
        return this._languageCode;
    }
    set languageCode(value) {
        this._languageCode = value;
    }
    get resourceFile() {
        return this._resourceFile;
    }
    set resourceFile(value) {
        this._resourceFile = value;
    }
    toObject() {
        return {
            parent: this.parent,
            name: this.name,
            type: this.type,
            languageCode: this.languageCode,
            resourceFile: this.resourceFile
                ? this.resourceFile.subarray(0)
                : new Uint8Array()
        };
    }
    toJSON() {
        return this.toObject();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbnQucGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvb25kZXdvL25sdS9hZ2VudC5wYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBYyxNQUFNLGlCQUFpQixDQUFDO0FBR3pFLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSxxQ0FBcUMsQ0FBQztBQUV6RSxPQUFPLEtBQUssaUJBQWlCLE1BQU0saUNBQWlDLENBQUM7QUFFckUsT0FBTyxLQUFLLFlBQVksTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE1BQU0sQ0FBTixJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDbkIseUVBQXdCLENBQUE7SUFDeEIsMkRBQWlCLENBQUE7SUFDakIsaUVBQW9CLENBQUE7QUFDdEIsQ0FBQyxFQUpXLFNBQVMsS0FBVCxTQUFTLFFBSXBCO0FBQ0QsTUFBTSxDQUFOLElBQVksVUFNWDtBQU5ELFdBQVksVUFBVTtJQUNwQix5Q0FBTyxDQUFBO0lBQ1AscUVBQXFCLENBQUE7SUFDckIscUVBQXFCLENBQUE7SUFDckIsaUVBQW1CLENBQUE7SUFDbkIsNkRBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQU5XLFVBQVUsS0FBVixVQUFVLFFBTXJCO0FBQ0QsTUFBTSxDQUFOLElBQVksWUFJWDtBQUpELFdBQVksWUFBWTtJQUN0Qiw2Q0FBTyxDQUFBO0lBQ1AsK0NBQVEsQ0FBQTtJQUNSLCtDQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsWUFBWSxLQUFaLFlBQVksUUFJdkI7QUFDRCxNQUFNLENBQU4sSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3JCLGlEQUFVLENBQUE7SUFDVixxREFBWSxDQUFBO0FBQ2QsQ0FBQyxFQUhXLFdBQVcsS0FBWCxXQUFXLFFBR3RCO0FBQ0QsTUFBTSxPQUFPLEtBQUs7SUE2SGhCOzs7T0FH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QUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBeUI7UUFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBNkI7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRTtTQUNyQixDQUFDO0lBQ0osQ0FBQztJQUNELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7IEdycGNNZXNzYWdlLCBSZWN1cnNpdmVQYXJ0aWFsIH0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDAgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9hbm5vdGF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVMb25ncnVubmluZzAwMSBmcm9tICcuLi8uLi9nb29nbGUvbG9uZ3J1bm5pbmcvb3BlcmF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMiBmcm9tICcuLi8uLi9nb29nbGUvcHJvdG9idWYvZmllbGQtbWFzay5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwMyBmcm9tICcuLi8uLi9nb29nbGUvcHJvdG9idWYvZW1wdHkucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDQgZnJvbSAnLi4vLi4vZ29vZ2xlL3Byb3RvYnVmL3N0cnVjdC5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDUgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9jb21tb24ucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDA2IGZyb20gJy4uLy4uL29uZGV3by9ubHUvdXNlci5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDcgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9wcm9qZWN0LXJvbGUucGInO1xuZXhwb3J0IGVudW0gQWdlbnRWaWV3IHtcbiAgYWdlbnRWaWV3VW5zcGVjaWZpZWQgPSAwLFxuICBhZ2VudFZpZXdGdWxsID0gMSxcbiAgYWdlbnRWaWV3U2hhbGxvdyA9IDJcbn1cbmV4cG9ydCBlbnVtIFJlcG9ydFR5cGUge1xuICBhbGwgPSAwLFxuICBpbnRlbnRQZXJMYW5ndWFnZSA9IDEsXG4gIGVudGl0eVBlckxhbmd1YWdlID0gMixcbiAgZW50aXR5Q29sbGlzaW9uID0gMyxcbiAgaW50ZW50R2VuZXJhbCA9IDRcbn1cbmV4cG9ydCBlbnVtIFJlcG9ydEZvcm1hdCB7XG4gIGNzdiA9IDAsXG4gIGh0bWwgPSAxLFxuICBqc29uID0gMlxufVxuZXhwb3J0IGVudW0gQWdlbnRTdGF0dXMge1xuICBhY3RpdmUgPSAwLFxuICBpbmFjdGl2ZSA9IDFcbn1cbmV4cG9ydCBjbGFzcyBBZ2VudCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBBZ2VudCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBBZ2VudC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBZ2VudCgpO1xuICAgIEFnZW50LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBBZ2VudCkge1xuICAgIGluc3RhbmNlLnBhcmVudCA9IGluc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBpbnN0YW5jZS5kaXNwbGF5TmFtZSA9IGluc3RhbmNlLmRpc3BsYXlOYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLmRlZmF1bHRMYW5ndWFnZUNvZGUgPSBpbnN0YW5jZS5kZWZhdWx0TGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICAgIGluc3RhbmNlLnN1cHBvcnRlZExhbmd1YWdlQ29kZXMgPSBpbnN0YW5jZS5zdXBwb3J0ZWRMYW5ndWFnZUNvZGVzIHx8IFtdO1xuICAgIGluc3RhbmNlLnRpbWVab25lID0gaW5zdGFuY2UudGltZVpvbmUgfHwgJyc7XG4gICAgaW5zdGFuY2Uubmx1UGxhdGZvcm0gPSBpbnN0YW5jZS5ubHVQbGF0Zm9ybSB8fCAnJztcbiAgICBpbnN0YW5jZS5jb25maWdzID0gaW5zdGFuY2UuY29uZmlncyB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2Uub3duZXJJZCA9IGluc3RhbmNlLm93bmVySWQgfHwgJyc7XG4gICAgaW5zdGFuY2Uuc3RhdHVzID0gaW5zdGFuY2Uuc3RhdHVzIHx8IDA7XG4gICAgaW5zdGFuY2UuZGVzY3JpcHRpb24gPSBpbnN0YW5jZS5kZXNjcmlwdGlvbiB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBBZ2VudCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5kaXNwbGF5TmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5kZWZhdWx0TGFuZ3VhZ2VDb2RlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIChpbnN0YW5jZS5zdXBwb3J0ZWRMYW5ndWFnZUNvZGVzID1cbiAgICAgICAgICAgIGluc3RhbmNlLnN1cHBvcnRlZExhbmd1YWdlQ29kZXMgfHwgW10pLnB1c2gocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS50aW1lWm9uZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBpbnN0YW5jZS5ubHVQbGF0Zm9ybSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBpbnN0YW5jZS5jb25maWdzID0gbmV3IGdvb2dsZVByb3RvYnVmMDA0LlN0cnVjdCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLmNvbmZpZ3MsXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3QuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICBpbnN0YW5jZS5vd25lcklkID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgIGluc3RhbmNlLnN0YXR1cyA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIGluc3RhbmNlLmRlc2NyaXB0aW9uID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWdlbnQucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogQWdlbnQsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5kaXNwbGF5TmFtZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLmRpc3BsYXlOYW1lKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRlZmF1bHRMYW5ndWFnZUNvZGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS5kZWZhdWx0TGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2Uuc3VwcG9ydGVkTGFuZ3VhZ2VDb2RlcyAmJlxuICAgICAgaW5zdGFuY2Uuc3VwcG9ydGVkTGFuZ3VhZ2VDb2Rlcy5sZW5ndGhcbiAgICApIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkU3RyaW5nKDQsIGluc3RhbmNlLnN1cHBvcnRlZExhbmd1YWdlQ29kZXMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudGltZVpvbmUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg1LCBpbnN0YW5jZS50aW1lWm9uZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5ubHVQbGF0Zm9ybSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDYsIGluc3RhbmNlLm5sdVBsYXRmb3JtKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmNvbmZpZ3MpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDcsXG4gICAgICAgIGluc3RhbmNlLmNvbmZpZ3MgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3QudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5vd25lcklkKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoOCwgaW5zdGFuY2Uub3duZXJJZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zdGF0dXMpIHtcbiAgICAgIHdyaXRlci53cml0ZUVudW0oOSwgaW5zdGFuY2Uuc3RhdHVzKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRlc2NyaXB0aW9uKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMTAsIGluc3RhbmNlLmRlc2NyaXB0aW9uKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rpc3BsYXlOYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF9kZWZhdWx0TGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICBwcml2YXRlIF9zdXBwb3J0ZWRMYW5ndWFnZUNvZGVzPzogc3RyaW5nW107XG4gIHByaXZhdGUgX3RpbWVab25lPzogc3RyaW5nO1xuICBwcml2YXRlIF9ubHVQbGF0Zm9ybT86IHN0cmluZztcbiAgcHJpdmF0ZSBfY29uZmlncz86IGdvb2dsZVByb3RvYnVmMDA0LlN0cnVjdDtcbiAgcHJpdmF0ZSBfb3duZXJJZD86IHN0cmluZztcbiAgcHJpdmF0ZSBfc3RhdHVzPzogQWdlbnRTdGF0dXM7XG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQWdlbnQgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxBZ2VudD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gdmFsdWUucGFyZW50O1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSB2YWx1ZS5kaXNwbGF5TmFtZTtcbiAgICB0aGlzLmRlZmF1bHRMYW5ndWFnZUNvZGUgPSB2YWx1ZS5kZWZhdWx0TGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VDb2RlcyA9ICh2YWx1ZS5zdXBwb3J0ZWRMYW5ndWFnZUNvZGVzIHx8IFtdKS5zbGljZSgpO1xuICAgIHRoaXMudGltZVpvbmUgPSB2YWx1ZS50aW1lWm9uZTtcbiAgICB0aGlzLm5sdVBsYXRmb3JtID0gdmFsdWUubmx1UGxhdGZvcm07XG4gICAgdGhpcy5jb25maWdzID0gdmFsdWUuY29uZmlnc1xuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0KHZhbHVlLmNvbmZpZ3MpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm93bmVySWQgPSB2YWx1ZS5vd25lcklkO1xuICAgIHRoaXMuc3RhdHVzID0gdmFsdWUuc3RhdHVzO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZS5kZXNjcmlwdGlvbjtcbiAgICBBZ2VudC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRpc3BsYXlOYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlOYW1lO1xuICB9XG4gIHNldCBkaXNwbGF5TmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGlzcGxheU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGVmYXVsdExhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBkZWZhdWx0TGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZWZhdWx0TGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHN1cHBvcnRlZExhbmd1YWdlQ29kZXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0ZWRMYW5ndWFnZUNvZGVzO1xuICB9XG4gIHNldCBzdXBwb3J0ZWRMYW5ndWFnZUNvZGVzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N1cHBvcnRlZExhbmd1YWdlQ29kZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGltZVpvbmUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZVpvbmU7XG4gIH1cbiAgc2V0IHRpbWVab25lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90aW1lWm9uZSA9IHZhbHVlO1xuICB9XG4gIGdldCBubHVQbGF0Zm9ybSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ubHVQbGF0Zm9ybTtcbiAgfVxuICBzZXQgbmx1UGxhdGZvcm0odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25sdVBsYXRmb3JtID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNvbmZpZ3MoKTogZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlncztcbiAgfVxuICBzZXQgY29uZmlncyh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fY29uZmlncyA9IHZhbHVlO1xuICB9XG4gIGdldCBvd25lcklkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX293bmVySWQ7XG4gIH1cbiAgc2V0IG93bmVySWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX293bmVySWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RhdHVzKCk6IEFnZW50U3RhdHVzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG4gIHNldCBzdGF0dXModmFsdWU6IEFnZW50U3RhdHVzIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGRpc3BsYXlOYW1lOiB0aGlzLmRpc3BsYXlOYW1lLFxuICAgICAgZGVmYXVsdExhbmd1YWdlQ29kZTogdGhpcy5kZWZhdWx0TGFuZ3VhZ2VDb2RlLFxuICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VDb2RlczogKHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VDb2RlcyB8fCBbXSkuc2xpY2UoKSxcbiAgICAgIHRpbWVab25lOiB0aGlzLnRpbWVab25lLFxuICAgICAgbmx1UGxhdGZvcm06IHRoaXMubmx1UGxhdGZvcm0sXG4gICAgICBjb25maWdzOiB0aGlzLmNvbmZpZ3MgPyB0aGlzLmNvbmZpZ3MudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIG93bmVySWQ6IHRoaXMub3duZXJJZCxcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvblxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQWdlbnQge31cbmV4cG9ydCBjbGFzcyBBZ2VudFdpdGhPd25lciBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBBZ2VudFdpdGhPd25lcikge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBBZ2VudFdpdGhPd25lci50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBBZ2VudFdpdGhPd25lcigpO1xuICAgIEFnZW50V2l0aE93bmVyLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBBZ2VudFdpdGhPd25lcikge1xuICAgIGluc3RhbmNlLmFnZW50ID0gaW5zdGFuY2UuYWdlbnQgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLm93bmVyID0gaW5zdGFuY2Uub3duZXIgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEFnZW50V2l0aE93bmVyLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuYWdlbnQgPSBuZXcgQWdlbnQoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoaW5zdGFuY2UuYWdlbnQsIEFnZW50LmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2Uub3duZXIgPSBuZXcgb25kZXdvTmx1MDA2LlVzZXIoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5vd25lcixcbiAgICAgICAgICAgIG9uZGV3b05sdTAwNi5Vc2VyLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBZ2VudFdpdGhPd25lci5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBBZ2VudFdpdGhPd25lciwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuYWdlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoMSwgaW5zdGFuY2UuYWdlbnQgYXMgYW55LCBBZ2VudC50b0JpbmFyeVdyaXRlcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5vd25lcikge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2Uub3duZXIgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDYuVXNlci50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hZ2VudD86IEFnZW50O1xuICBwcml2YXRlIF9vd25lcj86IG9uZGV3b05sdTAwNi5Vc2VyO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQWdlbnRXaXRoT3duZXIgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxBZ2VudFdpdGhPd25lcj4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYWdlbnQgPSB2YWx1ZS5hZ2VudCA/IG5ldyBBZ2VudCh2YWx1ZS5hZ2VudCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5vd25lciA9IHZhbHVlLm93bmVyID8gbmV3IG9uZGV3b05sdTAwNi5Vc2VyKHZhbHVlLm93bmVyKSA6IHVuZGVmaW5lZDtcbiAgICBBZ2VudFdpdGhPd25lci5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGFnZW50KCk6IEFnZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWdlbnQ7XG4gIH1cbiAgc2V0IGFnZW50KHZhbHVlOiBBZ2VudCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FnZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG93bmVyKCk6IG9uZGV3b05sdTAwNi5Vc2VyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb3duZXI7XG4gIH1cbiAgc2V0IG93bmVyKHZhbHVlOiBvbmRld29ObHUwMDYuVXNlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX293bmVyID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFnZW50OiB0aGlzLmFnZW50ID8gdGhpcy5hZ2VudC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgb3duZXI6IHRoaXMub3duZXIgPyB0aGlzLm93bmVyLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEFnZW50V2l0aE93bmVyIHt9XG5leHBvcnQgY2xhc3MgQWdlbnRPZlVzZXJXaXRoT3duZXIgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogQWdlbnRPZlVzZXJXaXRoT3duZXIpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgQWdlbnRPZlVzZXJXaXRoT3duZXIudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQWdlbnRPZlVzZXJXaXRoT3duZXIoKTtcbiAgICBBZ2VudE9mVXNlcldpdGhPd25lci5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogQWdlbnRPZlVzZXJXaXRoT3duZXIpIHtcbiAgICBpbnN0YW5jZS5hZ2VudFdpdGhPd25lciA9IGluc3RhbmNlLmFnZW50V2l0aE93bmVyIHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5wcm9qZWN0Um9sZSA9IGluc3RhbmNlLnByb2plY3RSb2xlIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBBZ2VudE9mVXNlcldpdGhPd25lcixcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLmFnZW50V2l0aE93bmVyID0gbmV3IEFnZW50V2l0aE93bmVyKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UuYWdlbnRXaXRoT3duZXIsXG4gICAgICAgICAgICBBZ2VudFdpdGhPd25lci5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnByb2plY3RSb2xlID0gbmV3IG9uZGV3b05sdTAwNy5Qcm9qZWN0Um9sZSgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnByb2plY3RSb2xlLFxuICAgICAgICAgICAgb25kZXdvTmx1MDA3LlByb2plY3RSb2xlLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBZ2VudE9mVXNlcldpdGhPd25lci5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBBZ2VudE9mVXNlcldpdGhPd25lciwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuYWdlbnRXaXRoT3duZXIpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIGluc3RhbmNlLmFnZW50V2l0aE93bmVyIGFzIGFueSxcbiAgICAgICAgQWdlbnRXaXRoT3duZXIudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5wcm9qZWN0Um9sZSkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgaW5zdGFuY2UucHJvamVjdFJvbGUgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDcuUHJvamVjdFJvbGUudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWdlbnRXaXRoT3duZXI/OiBBZ2VudFdpdGhPd25lcjtcbiAgcHJpdmF0ZSBfcHJvamVjdFJvbGU/OiBvbmRld29ObHUwMDcuUHJvamVjdFJvbGU7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBBZ2VudE9mVXNlcldpdGhPd25lciB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEFnZW50T2ZVc2VyV2l0aE93bmVyPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5hZ2VudFdpdGhPd25lciA9IHZhbHVlLmFnZW50V2l0aE93bmVyXG4gICAgICA/IG5ldyBBZ2VudFdpdGhPd25lcih2YWx1ZS5hZ2VudFdpdGhPd25lcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucHJvamVjdFJvbGUgPSB2YWx1ZS5wcm9qZWN0Um9sZVxuICAgICAgPyBuZXcgb25kZXdvTmx1MDA3LlByb2plY3RSb2xlKHZhbHVlLnByb2plY3RSb2xlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgQWdlbnRPZlVzZXJXaXRoT3duZXIucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBhZ2VudFdpdGhPd25lcigpOiBBZ2VudFdpdGhPd25lciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FnZW50V2l0aE93bmVyO1xuICB9XG4gIHNldCBhZ2VudFdpdGhPd25lcih2YWx1ZTogQWdlbnRXaXRoT3duZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hZ2VudFdpdGhPd25lciA9IHZhbHVlO1xuICB9XG4gIGdldCBwcm9qZWN0Um9sZSgpOiBvbmRld29ObHUwMDcuUHJvamVjdFJvbGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0Um9sZTtcbiAgfVxuICBzZXQgcHJvamVjdFJvbGUodmFsdWU6IG9uZGV3b05sdTAwNy5Qcm9qZWN0Um9sZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Byb2plY3RSb2xlID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFnZW50V2l0aE93bmVyOiB0aGlzLmFnZW50V2l0aE93bmVyXG4gICAgICAgID8gdGhpcy5hZ2VudFdpdGhPd25lci50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgcHJvamVjdFJvbGU6IHRoaXMucHJvamVjdFJvbGUgPyB0aGlzLnByb2plY3RSb2xlLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEFnZW50T2ZVc2VyV2l0aE93bmVyIHt9XG5leHBvcnQgY2xhc3MgQ3JlYXRlQWdlbnRSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IENyZWF0ZUFnZW50UmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBDcmVhdGVBZ2VudFJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ3JlYXRlQWdlbnRSZXF1ZXN0KCk7XG4gICAgQ3JlYXRlQWdlbnRSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBDcmVhdGVBZ2VudFJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5hZ2VudCA9IGluc3RhbmNlLmFnZW50IHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5hZ2VudFZpZXcgPSBpbnN0YW5jZS5hZ2VudFZpZXcgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBDcmVhdGVBZ2VudFJlcXVlc3QsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5hZ2VudCA9IG5ldyBBZ2VudCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShpbnN0YW5jZS5hZ2VudCwgQWdlbnQuZnJvbUJpbmFyeVJlYWRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5hZ2VudFZpZXcgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ3JlYXRlQWdlbnRSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IENyZWF0ZUFnZW50UmVxdWVzdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuYWdlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoMSwgaW5zdGFuY2UuYWdlbnQgYXMgYW55LCBBZ2VudC50b0JpbmFyeVdyaXRlcik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5hZ2VudFZpZXcpIHtcbiAgICAgIHdyaXRlci53cml0ZUVudW0oMiwgaW5zdGFuY2UuYWdlbnRWaWV3KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hZ2VudD86IEFnZW50O1xuICBwcml2YXRlIF9hZ2VudFZpZXc/OiBBZ2VudFZpZXc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBDcmVhdGVBZ2VudFJlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxDcmVhdGVBZ2VudFJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmFnZW50ID0gdmFsdWUuYWdlbnQgPyBuZXcgQWdlbnQodmFsdWUuYWdlbnQpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuYWdlbnRWaWV3ID0gdmFsdWUuYWdlbnRWaWV3O1xuICAgIENyZWF0ZUFnZW50UmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGFnZW50KCk6IEFnZW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWdlbnQ7XG4gIH1cbiAgc2V0IGFnZW50KHZhbHVlOiBBZ2VudCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FnZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFnZW50VmlldygpOiBBZ2VudFZpZXcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hZ2VudFZpZXc7XG4gIH1cbiAgc2V0IGFnZW50Vmlldyh2YWx1ZTogQWdlbnRWaWV3IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYWdlbnRWaWV3ID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFnZW50OiB0aGlzLmFnZW50ID8gdGhpcy5hZ2VudC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgYWdlbnRWaWV3OiB0aGlzLmFnZW50Vmlld1xuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgQ3JlYXRlQWdlbnRSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgVXBkYXRlQWdlbnRSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFVwZGF0ZUFnZW50UmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBVcGRhdGVBZ2VudFJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVXBkYXRlQWdlbnRSZXF1ZXN0KCk7XG4gICAgVXBkYXRlQWdlbnRSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBVcGRhdGVBZ2VudFJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5hZ2VudCA9IGluc3RhbmNlLmFnZW50IHx8IHVuZGVmaW5lZDtcbiAgICBpbnN0YW5jZS5hZ2VudFZpZXcgPSBpbnN0YW5jZS5hZ2VudFZpZXcgfHwgMDtcbiAgICBpbnN0YW5jZS51cGRhdGVNYXNrID0gaW5zdGFuY2UudXBkYXRlTWFzayB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogVXBkYXRlQWdlbnRSZXF1ZXN0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuYWdlbnQgPSBuZXcgQWdlbnQoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoaW5zdGFuY2UuYWdlbnQsIEFnZW50LmZyb21CaW5hcnlSZWFkZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuYWdlbnRWaWV3ID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS51cGRhdGVNYXNrID0gbmV3IGdvb2dsZVByb3RvYnVmMDAyLkZpZWxkTWFzaygpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnVwZGF0ZU1hc2ssXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwMi5GaWVsZE1hc2suZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFVwZGF0ZUFnZW50UmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBVcGRhdGVBZ2VudFJlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmFnZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKDEsIGluc3RhbmNlLmFnZW50IGFzIGFueSwgQWdlbnQudG9CaW5hcnlXcml0ZXIpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYWdlbnRWaWV3KSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDIsIGluc3RhbmNlLmFnZW50Vmlldyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS51cGRhdGVNYXNrKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBpbnN0YW5jZS51cGRhdGVNYXNrIGFzIGFueSxcbiAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDIuRmllbGRNYXNrLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FnZW50PzogQWdlbnQ7XG4gIHByaXZhdGUgX2FnZW50Vmlldz86IEFnZW50VmlldztcbiAgcHJpdmF0ZSBfdXBkYXRlTWFzaz86IGdvb2dsZVByb3RvYnVmMDAyLkZpZWxkTWFzaztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFVwZGF0ZUFnZW50UmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFVwZGF0ZUFnZW50UmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuYWdlbnQgPSB2YWx1ZS5hZ2VudCA/IG5ldyBBZ2VudCh2YWx1ZS5hZ2VudCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5hZ2VudFZpZXcgPSB2YWx1ZS5hZ2VudFZpZXc7XG4gICAgdGhpcy51cGRhdGVNYXNrID0gdmFsdWUudXBkYXRlTWFza1xuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDIuRmllbGRNYXNrKHZhbHVlLnVwZGF0ZU1hc2spXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBVcGRhdGVBZ2VudFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBhZ2VudCgpOiBBZ2VudCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FnZW50O1xuICB9XG4gIHNldCBhZ2VudCh2YWx1ZTogQWdlbnQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hZ2VudCA9IHZhbHVlO1xuICB9XG4gIGdldCBhZ2VudFZpZXcoKTogQWdlbnRWaWV3IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWdlbnRWaWV3O1xuICB9XG4gIHNldCBhZ2VudFZpZXcodmFsdWU6IEFnZW50VmlldyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FnZW50VmlldyA9IHZhbHVlO1xuICB9XG4gIGdldCB1cGRhdGVNYXNrKCk6IGdvb2dsZVByb3RvYnVmMDAyLkZpZWxkTWFzayB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZU1hc2s7XG4gIH1cbiAgc2V0IHVwZGF0ZU1hc2sodmFsdWU6IGdvb2dsZVByb3RvYnVmMDAyLkZpZWxkTWFzayB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VwZGF0ZU1hc2sgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWdlbnQ6IHRoaXMuYWdlbnQgPyB0aGlzLmFnZW50LnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICBhZ2VudFZpZXc6IHRoaXMuYWdlbnRWaWV3LFxuICAgICAgdXBkYXRlTWFzazogdGhpcy51cGRhdGVNYXNrID8gdGhpcy51cGRhdGVNYXNrLnRvT2JqZWN0KCkgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFVwZGF0ZUFnZW50UmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIERlbGV0ZUFnZW50UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBEZWxldGVBZ2VudFJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgRGVsZXRlQWdlbnRSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IERlbGV0ZUFnZW50UmVxdWVzdCgpO1xuICAgIERlbGV0ZUFnZW50UmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogRGVsZXRlQWdlbnRSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UucGFyZW50ID0gaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IERlbGV0ZUFnZW50UmVxdWVzdCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERlbGV0ZUFnZW50UmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBEZWxldGVBZ2VudFJlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gRGVsZXRlQWdlbnRSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RGVsZXRlQWdlbnRSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgRGVsZXRlQWdlbnRSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRGVsZXRlQWdlbnRSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgR2V0QWdlbnRSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEdldEFnZW50UmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZXRBZ2VudFJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgR2V0QWdlbnRSZXF1ZXN0KCk7XG4gICAgR2V0QWdlbnRSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBHZXRBZ2VudFJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UuYWdlbnRWaWV3ID0gaW5zdGFuY2UuYWdlbnRWaWV3IHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogR2V0QWdlbnRSZXF1ZXN0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UucGFyZW50ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmFnZW50VmlldyA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBHZXRBZ2VudFJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogR2V0QWdlbnRSZXF1ZXN0LCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYWdlbnRWaWV3KSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDIsIGluc3RhbmNlLmFnZW50Vmlldyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9hZ2VudFZpZXc/OiBBZ2VudFZpZXc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBHZXRBZ2VudFJlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZXRBZ2VudFJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IHZhbHVlLnBhcmVudDtcbiAgICB0aGlzLmFnZW50VmlldyA9IHZhbHVlLmFnZW50VmlldztcbiAgICBHZXRBZ2VudFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBhZ2VudFZpZXcoKTogQWdlbnRWaWV3IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWdlbnRWaWV3O1xuICB9XG4gIHNldCBhZ2VudFZpZXcodmFsdWU6IEFnZW50VmlldyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FnZW50VmlldyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgYWdlbnRWaWV3OiB0aGlzLmFnZW50Vmlld1xuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2V0QWdlbnRSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgTGlzdEFnZW50c1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTGlzdEFnZW50c1JlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdEFnZW50c1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdEFnZW50c1JlcXVlc3QoKTtcbiAgICBMaXN0QWdlbnRzUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTGlzdEFnZW50c1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5hZ2VudFZpZXcgPSBpbnN0YW5jZS5hZ2VudFZpZXcgfHwgMDtcbiAgICBpbnN0YW5jZS5wYWdlVG9rZW4gPSBpbnN0YW5jZS5wYWdlVG9rZW4gfHwgJyc7XG4gICAgaW5zdGFuY2Uuc29ydEJ5RmllbGQgPSBpbnN0YW5jZS5zb3J0QnlGaWVsZCB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogTGlzdEFnZW50c1JlcXVlc3QsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5hZ2VudFZpZXcgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnBhZ2VUb2tlbiA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5zb3J0QnlGaWVsZCA9IG5ldyBBZ2VudFNvcnRpbmcoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5zb3J0QnlGaWVsZCxcbiAgICAgICAgICAgIEFnZW50U29ydGluZy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdEFnZW50c1JlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogTGlzdEFnZW50c1JlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmFnZW50Vmlldykge1xuICAgICAgd3JpdGVyLndyaXRlRW51bSgxLCBpbnN0YW5jZS5hZ2VudFZpZXcpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGFnZVRva2VuKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UucGFnZVRva2VuKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNvcnRCeUZpZWxkKSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAzLFxuICAgICAgICBpbnN0YW5jZS5zb3J0QnlGaWVsZCBhcyBhbnksXG4gICAgICAgIEFnZW50U29ydGluZy50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hZ2VudFZpZXc/OiBBZ2VudFZpZXc7XG4gIHByaXZhdGUgX3BhZ2VUb2tlbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfc29ydEJ5RmllbGQ/OiBBZ2VudFNvcnRpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBMaXN0QWdlbnRzUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RBZ2VudHNSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5hZ2VudFZpZXcgPSB2YWx1ZS5hZ2VudFZpZXc7XG4gICAgdGhpcy5wYWdlVG9rZW4gPSB2YWx1ZS5wYWdlVG9rZW47XG4gICAgdGhpcy5zb3J0QnlGaWVsZCA9IHZhbHVlLnNvcnRCeUZpZWxkXG4gICAgICA/IG5ldyBBZ2VudFNvcnRpbmcodmFsdWUuc29ydEJ5RmllbGQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBMaXN0QWdlbnRzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGFnZW50VmlldygpOiBBZ2VudFZpZXcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hZ2VudFZpZXc7XG4gIH1cbiAgc2V0IGFnZW50Vmlldyh2YWx1ZTogQWdlbnRWaWV3IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYWdlbnRWaWV3ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhZ2VUb2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWdlVG9rZW47XG4gIH1cbiAgc2V0IHBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFnZVRva2VuID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNvcnRCeUZpZWxkKCk6IEFnZW50U29ydGluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRCeUZpZWxkO1xuICB9XG4gIHNldCBzb3J0QnlGaWVsZCh2YWx1ZTogQWdlbnRTb3J0aW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc29ydEJ5RmllbGQgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWdlbnRWaWV3OiB0aGlzLmFnZW50VmlldyxcbiAgICAgIHBhZ2VUb2tlbjogdGhpcy5wYWdlVG9rZW4sXG4gICAgICBzb3J0QnlGaWVsZDogdGhpcy5zb3J0QnlGaWVsZCA/IHRoaXMuc29ydEJ5RmllbGQudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgTGlzdEFnZW50c1JlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBMaXN0QWdlbnRzUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTGlzdEFnZW50c1Jlc3BvbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RBZ2VudHNSZXNwb25zZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0QWdlbnRzUmVzcG9uc2UoKTtcbiAgICBMaXN0QWdlbnRzUmVzcG9uc2UuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RBZ2VudHNSZXNwb25zZSkge1xuICAgIGluc3RhbmNlLmFnZW50c1dpdGhPd25lcnMgPSBpbnN0YW5jZS5hZ2VudHNXaXRoT3duZXJzIHx8IFtdO1xuICAgIGluc3RhbmNlLm5leHRQYWdlVG9rZW4gPSBpbnN0YW5jZS5uZXh0UGFnZVRva2VuIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IExpc3RBZ2VudHNSZXNwb25zZSwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjEgPSBuZXcgQWdlbnRXaXRoT3duZXIoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIxLFxuICAgICAgICAgICAgQWdlbnRXaXRoT3duZXIuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLmFnZW50c1dpdGhPd25lcnMgPSBpbnN0YW5jZS5hZ2VudHNXaXRoT3duZXJzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdEFnZW50c1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IExpc3RBZ2VudHNSZXNwb25zZSwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuYWdlbnRzV2l0aE93bmVycyAmJiBpbnN0YW5jZS5hZ2VudHNXaXRoT3duZXJzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS5hZ2VudHNXaXRoT3duZXJzIGFzIGFueSxcbiAgICAgICAgQWdlbnRXaXRoT3duZXIudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5uZXh0UGFnZVRva2VuKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWdlbnRzV2l0aE93bmVycz86IEFnZW50V2l0aE93bmVyW107XG4gIHByaXZhdGUgX25leHRQYWdlVG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBMaXN0QWdlbnRzUmVzcG9uc2UgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0QWdlbnRzUmVzcG9uc2U+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLmFnZW50c1dpdGhPd25lcnMgPSAodmFsdWUuYWdlbnRzV2l0aE93bmVycyB8fCBbXSkubWFwKFxuICAgICAgbSA9PiBuZXcgQWdlbnRXaXRoT3duZXIobSlcbiAgICApO1xuICAgIHRoaXMubmV4dFBhZ2VUb2tlbiA9IHZhbHVlLm5leHRQYWdlVG9rZW47XG4gICAgTGlzdEFnZW50c1Jlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgYWdlbnRzV2l0aE93bmVycygpOiBBZ2VudFdpdGhPd25lcltdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWdlbnRzV2l0aE93bmVycztcbiAgfVxuICBzZXQgYWdlbnRzV2l0aE93bmVycyh2YWx1ZTogQWdlbnRXaXRoT3duZXJbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FnZW50c1dpdGhPd25lcnMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmV4dFBhZ2VUb2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uZXh0UGFnZVRva2VuO1xuICB9XG4gIHNldCBuZXh0UGFnZVRva2VuKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uZXh0UGFnZVRva2VuID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFnZW50c1dpdGhPd25lcnM6ICh0aGlzLmFnZW50c1dpdGhPd25lcnMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBuZXh0UGFnZVRva2VuOiB0aGlzLm5leHRQYWdlVG9rZW5cbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RBZ2VudHNSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIExpc3RBZ2VudHNPZlVzZXJSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMaXN0QWdlbnRzT2ZVc2VyUmVzcG9uc2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdEFnZW50c09mVXNlclJlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IExpc3RBZ2VudHNPZlVzZXJSZXNwb25zZSgpO1xuICAgIExpc3RBZ2VudHNPZlVzZXJSZXNwb25zZS5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTGlzdEFnZW50c09mVXNlclJlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2UuYWdlbnRzT2ZVc2VyV2l0aE93bmVycyA9IGluc3RhbmNlLmFnZW50c09mVXNlcldpdGhPd25lcnMgfHwgW107XG4gICAgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiA9IGluc3RhbmNlLm5leHRQYWdlVG9rZW4gfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogTGlzdEFnZW50c09mVXNlclJlc3BvbnNlLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBBZ2VudE9mVXNlcldpdGhPd25lcigpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjEsXG4gICAgICAgICAgICBBZ2VudE9mVXNlcldpdGhPd25lci5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2UuYWdlbnRzT2ZVc2VyV2l0aE93bmVycyA9XG4gICAgICAgICAgICBpbnN0YW5jZS5hZ2VudHNPZlVzZXJXaXRoT3duZXJzIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbiA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RBZ2VudHNPZlVzZXJSZXNwb25zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBMaXN0QWdlbnRzT2ZVc2VyUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2UuYWdlbnRzT2ZVc2VyV2l0aE93bmVycyAmJlxuICAgICAgaW5zdGFuY2UuYWdlbnRzT2ZVc2VyV2l0aE93bmVycy5sZW5ndGhcbiAgICApIHtcbiAgICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgaW5zdGFuY2UuYWdlbnRzT2ZVc2VyV2l0aE93bmVycyBhcyBhbnksXG4gICAgICAgIEFnZW50T2ZVc2VyV2l0aE93bmVyLnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubmV4dFBhZ2VUb2tlbikge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLm5leHRQYWdlVG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FnZW50c09mVXNlcldpdGhPd25lcnM/OiBBZ2VudE9mVXNlcldpdGhPd25lcltdO1xuICBwcml2YXRlIF9uZXh0UGFnZVRva2VuPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gTGlzdEFnZW50c09mVXNlclJlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdEFnZW50c09mVXNlclJlc3BvbnNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5hZ2VudHNPZlVzZXJXaXRoT3duZXJzID0gKHZhbHVlLmFnZW50c09mVXNlcldpdGhPd25lcnMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IEFnZW50T2ZVc2VyV2l0aE93bmVyKG0pXG4gICAgKTtcbiAgICB0aGlzLm5leHRQYWdlVG9rZW4gPSB2YWx1ZS5uZXh0UGFnZVRva2VuO1xuICAgIExpc3RBZ2VudHNPZlVzZXJSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGFnZW50c09mVXNlcldpdGhPd25lcnMoKTogQWdlbnRPZlVzZXJXaXRoT3duZXJbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FnZW50c09mVXNlcldpdGhPd25lcnM7XG4gIH1cbiAgc2V0IGFnZW50c09mVXNlcldpdGhPd25lcnModmFsdWU6IEFnZW50T2ZVc2VyV2l0aE93bmVyW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9hZ2VudHNPZlVzZXJXaXRoT3duZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5leHRQYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmV4dFBhZ2VUb2tlbjtcbiAgfVxuICBzZXQgbmV4dFBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmV4dFBhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZ2VudHNPZlVzZXJXaXRoT3duZXJzOiAodGhpcy5hZ2VudHNPZlVzZXJXaXRoT3duZXJzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvT2JqZWN0KClcbiAgICAgICksXG4gICAgICBuZXh0UGFnZVRva2VuOiB0aGlzLm5leHRQYWdlVG9rZW5cbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RBZ2VudHNPZlVzZXJSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIFRyYWluQWdlbnRSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFRyYWluQWdlbnRSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFRyYWluQWdlbnRSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRyYWluQWdlbnRSZXF1ZXN0KCk7XG4gICAgVHJhaW5BZ2VudFJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFRyYWluQWdlbnRSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UucGFyZW50ID0gaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICAgIGluc3RhbmNlLmJyYW5jaCA9IGluc3RhbmNlLmJyYW5jaCB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBUcmFpbkFnZW50UmVxdWVzdCwgcmVhZGVyOiBCaW5hcnlSZWFkZXIpIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5icmFuY2ggPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBUcmFpbkFnZW50UmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBUcmFpbkFnZW50UmVxdWVzdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmJyYW5jaCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLmJyYW5jaCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9icmFuY2g/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBUcmFpbkFnZW50UmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFRyYWluQWdlbnRSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5icmFuY2ggPSB2YWx1ZS5icmFuY2g7XG4gICAgVHJhaW5BZ2VudFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBicmFuY2goKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYnJhbmNoO1xuICB9XG4gIHNldCBicmFuY2godmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2JyYW5jaCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgYnJhbmNoOiB0aGlzLmJyYW5jaFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgVHJhaW5BZ2VudFJlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBCdWlsZENhY2hlUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBCdWlsZENhY2hlUmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBCdWlsZENhY2hlUmVxdWVzdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBCdWlsZENhY2hlUmVxdWVzdCgpO1xuICAgIEJ1aWxkQ2FjaGVSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBCdWlsZENhY2hlUmVxdWVzdCkge1xuICAgIGluc3RhbmNlLnBhcmVudCA9IGluc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBpbnN0YW5jZS5icmFuY2ggPSBpbnN0YW5jZS5icmFuY2ggfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogQnVpbGRDYWNoZVJlcXVlc3QsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuYnJhbmNoID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQnVpbGRDYWNoZVJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogQnVpbGRDYWNoZVJlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5icmFuY2gpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5icmFuY2gpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBfYnJhbmNoPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQnVpbGRDYWNoZVJlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxCdWlsZENhY2hlUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gdmFsdWUucGFyZW50O1xuICAgIHRoaXMuYnJhbmNoID0gdmFsdWUuYnJhbmNoO1xuICAgIEJ1aWxkQ2FjaGVSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYnJhbmNoKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JyYW5jaDtcbiAgfVxuICBzZXQgYnJhbmNoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9icmFuY2ggPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGJyYW5jaDogdGhpcy5icmFuY2hcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEJ1aWxkQ2FjaGVSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgRXhwb3J0QWdlbnRSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEV4cG9ydEFnZW50UmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBFeHBvcnRBZ2VudFJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRXhwb3J0QWdlbnRSZXF1ZXN0KCk7XG4gICAgRXhwb3J0QWdlbnRSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBFeHBvcnRBZ2VudFJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UuYWdlbnRVcmkgPSBpbnN0YW5jZS5hZ2VudFVyaSB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBFeHBvcnRBZ2VudFJlcXVlc3QsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuYWdlbnRVcmkgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFeHBvcnRBZ2VudFJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogRXhwb3J0QWdlbnRSZXF1ZXN0LCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYWdlbnRVcmkpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5hZ2VudFVyaSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9hZ2VudFVyaT86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEV4cG9ydEFnZW50UmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEV4cG9ydEFnZW50UmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gdmFsdWUucGFyZW50O1xuICAgIHRoaXMuYWdlbnRVcmkgPSB2YWx1ZS5hZ2VudFVyaTtcbiAgICBFeHBvcnRBZ2VudFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBhZ2VudFVyaSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hZ2VudFVyaTtcbiAgfVxuICBzZXQgYWdlbnRVcmkodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2FnZW50VXJpID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBhZ2VudFVyaTogdGhpcy5hZ2VudFVyaVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRXhwb3J0QWdlbnRSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgRXhwb3J0QWdlbnRSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBFeHBvcnRBZ2VudFJlc3BvbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEV4cG9ydEFnZW50UmVzcG9uc2UudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRXhwb3J0QWdlbnRSZXNwb25zZSgpO1xuICAgIEV4cG9ydEFnZW50UmVzcG9uc2UuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEV4cG9ydEFnZW50UmVzcG9uc2UpIHt9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IEV4cG9ydEFnZW50UmVzcG9uc2UsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5hZ2VudFVyaSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5hZ2VudENvbnRlbnQgPSByZWFkZXIucmVhZEJ5dGVzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEV4cG9ydEFnZW50UmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogRXhwb3J0QWdlbnRSZXNwb25zZSwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuYWdlbnRVcmkgfHwgaW5zdGFuY2UuYWdlbnRVcmkgPT09ICcnKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UuYWdlbnRVcmkpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYWdlbnRDb250ZW50ICYmIGluc3RhbmNlLmFnZW50Q29udGVudC5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZUJ5dGVzKDIsIGluc3RhbmNlLmFnZW50Q29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWdlbnRVcmk/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2FnZW50Q29udGVudD86IFVpbnQ4QXJyYXk7XG5cbiAgcHJpdmF0ZSBfYWdlbnQ6IEV4cG9ydEFnZW50UmVzcG9uc2UuQWdlbnRDYXNlID1cbiAgICBFeHBvcnRBZ2VudFJlc3BvbnNlLkFnZW50Q2FzZS5ub25lO1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEV4cG9ydEFnZW50UmVzcG9uc2UgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxFeHBvcnRBZ2VudFJlc3BvbnNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5hZ2VudFVyaSA9IHZhbHVlLmFnZW50VXJpO1xuICAgIHRoaXMuYWdlbnRDb250ZW50ID0gdmFsdWUuYWdlbnRDb250ZW50O1xuICAgIEV4cG9ydEFnZW50UmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBhZ2VudFVyaSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hZ2VudFVyaTtcbiAgfVxuICBzZXQgYWdlbnRVcmkodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9hZ2VudENvbnRlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hZ2VudCA9IEV4cG9ydEFnZW50UmVzcG9uc2UuQWdlbnRDYXNlLmFnZW50VXJpO1xuICAgIH1cbiAgICB0aGlzLl9hZ2VudFVyaSA9IHZhbHVlO1xuICB9XG4gIGdldCBhZ2VudENvbnRlbnQoKTogVWludDhBcnJheSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FnZW50Q29udGVudDtcbiAgfVxuICBzZXQgYWdlbnRDb250ZW50KHZhbHVlOiBVaW50OEFycmF5IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2FnZW50VXJpID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWdlbnQgPSBFeHBvcnRBZ2VudFJlc3BvbnNlLkFnZW50Q2FzZS5hZ2VudENvbnRlbnQ7XG4gICAgfVxuICAgIHRoaXMuX2FnZW50Q29udGVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBhZ2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWdlbnQ7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFnZW50VXJpOiB0aGlzLmFnZW50VXJpLFxuICAgICAgYWdlbnRDb250ZW50OiB0aGlzLmFnZW50Q29udGVudFxuICAgICAgICA/IHRoaXMuYWdlbnRDb250ZW50LnN1YmFycmF5KDApXG4gICAgICAgIDogbmV3IFVpbnQ4QXJyYXkoKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRXhwb3J0QWdlbnRSZXNwb25zZSB7XG4gIGV4cG9ydCBlbnVtIEFnZW50Q2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgYWdlbnRVcmkgPSAxLFxuICAgIGFnZW50Q29udGVudCA9IDJcbiAgfVxufVxuZXhwb3J0IGNsYXNzIE9wdGltaXplUmFua2luZ01hdGNoUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBPcHRpbWl6ZVJhbmtpbmdNYXRjaFJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgT3B0aW1pemVSYW5raW5nTWF0Y2hSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE9wdGltaXplUmFua2luZ01hdGNoUmVxdWVzdCgpO1xuICAgIE9wdGltaXplUmFua2luZ01hdGNoUmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogT3B0aW1pemVSYW5raW5nTWF0Y2hSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UucGFyZW50ID0gaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZXMgPSBpbnN0YW5jZS5sYW5ndWFnZUNvZGVzIHx8IFtdO1xuICAgIGluc3RhbmNlLm9wdGltaXphdGlvbkNvbmZpZ3MgPSBpbnN0YW5jZS5vcHRpbWl6YXRpb25Db25maWdzIHx8IFtdO1xuICAgIGluc3RhbmNlLmluUGxhY2UgPSBpbnN0YW5jZS5pblBsYWNlIHx8IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IE9wdGltaXplUmFua2luZ01hdGNoUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhcmVudCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlcyA9IGluc3RhbmNlLmxhbmd1YWdlQ29kZXMgfHwgW10pLnB1c2goXG4gICAgICAgICAgICByZWFkZXIucmVhZFN0cmluZygpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJbml0aWFsaXplcjMgPSBuZXcgUmFua2luZ01hdGNoT3B0aW1pemF0aW9uQ29uZmlnKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMyxcbiAgICAgICAgICAgIFJhbmtpbmdNYXRjaE9wdGltaXphdGlvbkNvbmZpZy5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2Uub3B0aW1pemF0aW9uQ29uZmlncyA9XG4gICAgICAgICAgICBpbnN0YW5jZS5vcHRpbWl6YXRpb25Db25maWdzIHx8IFtdKS5wdXNoKG1lc3NhZ2VJbml0aWFsaXplcjMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2UuaW5QbGFjZSA9IHJlYWRlci5yZWFkQm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPcHRpbWl6ZVJhbmtpbmdNYXRjaFJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogT3B0aW1pemVSYW5raW5nTWF0Y2hSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlcyAmJiBpbnN0YW5jZS5sYW5ndWFnZUNvZGVzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRTdHJpbmcoMiwgaW5zdGFuY2UubGFuZ3VhZ2VDb2Rlcyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5vcHRpbWl6YXRpb25Db25maWdzICYmIGluc3RhbmNlLm9wdGltaXphdGlvbkNvbmZpZ3MubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIGluc3RhbmNlLm9wdGltaXphdGlvbkNvbmZpZ3MgYXMgYW55LFxuICAgICAgICBSYW5raW5nTWF0Y2hPcHRpbWl6YXRpb25Db25maWcudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5pblBsYWNlKSB7XG4gICAgICB3cml0ZXIud3JpdGVCb29sKDQsIGluc3RhbmNlLmluUGxhY2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2Rlcz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF9vcHRpbWl6YXRpb25Db25maWdzPzogUmFua2luZ01hdGNoT3B0aW1pemF0aW9uQ29uZmlnW107XG4gIHByaXZhdGUgX2luUGxhY2U/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gT3B0aW1pemVSYW5raW5nTWF0Y2hSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8T3B0aW1pemVSYW5raW5nTWF0Y2hSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGVzID0gKHZhbHVlLmxhbmd1YWdlQ29kZXMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5vcHRpbWl6YXRpb25Db25maWdzID0gKHZhbHVlLm9wdGltaXphdGlvbkNvbmZpZ3MgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IFJhbmtpbmdNYXRjaE9wdGltaXphdGlvbkNvbmZpZyhtKVxuICAgICk7XG4gICAgdGhpcy5pblBsYWNlID0gdmFsdWUuaW5QbGFjZTtcbiAgICBPcHRpbWl6ZVJhbmtpbmdNYXRjaFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGVzKCk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlcztcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2Rlcyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9wdGltaXphdGlvbkNvbmZpZ3MoKTogUmFua2luZ01hdGNoT3B0aW1pemF0aW9uQ29uZmlnW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vcHRpbWl6YXRpb25Db25maWdzO1xuICB9XG4gIHNldCBvcHRpbWl6YXRpb25Db25maWdzKHZhbHVlOiBSYW5raW5nTWF0Y2hPcHRpbWl6YXRpb25Db25maWdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX29wdGltaXphdGlvbkNvbmZpZ3MgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaW5QbGFjZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW5QbGFjZTtcbiAgfVxuICBzZXQgaW5QbGFjZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2luUGxhY2UgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGxhbmd1YWdlQ29kZXM6ICh0aGlzLmxhbmd1YWdlQ29kZXMgfHwgW10pLnNsaWNlKCksXG4gICAgICBvcHRpbWl6YXRpb25Db25maWdzOiAodGhpcy5vcHRpbWl6YXRpb25Db25maWdzIHx8IFtdKS5tYXAobSA9PlxuICAgICAgICBtLnRvT2JqZWN0KClcbiAgICAgICksXG4gICAgICBpblBsYWNlOiB0aGlzLmluUGxhY2VcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE9wdGltaXplUmFua2luZ01hdGNoUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIFJhbmtpbmdNYXRjaE9wdGltaXphdGlvbkNvbmZpZyBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBSYW5raW5nTWF0Y2hPcHRpbWl6YXRpb25Db25maWcpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUmFua2luZ01hdGNoT3B0aW1pemF0aW9uQ29uZmlnLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFJhbmtpbmdNYXRjaE9wdGltaXphdGlvbkNvbmZpZygpO1xuICAgIFJhbmtpbmdNYXRjaE9wdGltaXphdGlvbkNvbmZpZy5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogUmFua2luZ01hdGNoT3B0aW1pemF0aW9uQ29uZmlnKSB7XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICAgIGluc3RhbmNlLm5TcGxpdHMgPSBpbnN0YW5jZS5uU3BsaXRzIHx8IDA7XG4gICAgaW5zdGFuY2UucmFuZG9tU2VlZCA9IGluc3RhbmNlLnJhbmRvbVNlZWQgfHwgMDtcbiAgICBpbnN0YW5jZS5pbml0aWFsVGhyZXNob2xkcyA9IGluc3RhbmNlLmluaXRpYWxUaHJlc2hvbGRzIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBSYW5raW5nTWF0Y2hPcHRpbWl6YXRpb25Db25maWcsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UublNwbGl0cyA9IHJlYWRlci5yZWFkSW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLnJhbmRvbVNlZWQgPSByZWFkZXIucmVhZEludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5pbml0aWFsVGhyZXNob2xkcyA9IG5ldyBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3QoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5pbml0aWFsVGhyZXNob2xkcyxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDA0LlN0cnVjdC5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUmFua2luZ01hdGNoT3B0aW1pemF0aW9uQ29uZmlnLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IFJhbmtpbmdNYXRjaE9wdGltaXphdGlvbkNvbmZpZyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm5TcGxpdHMpIHtcbiAgICAgIHdyaXRlci53cml0ZUludDMyKDIsIGluc3RhbmNlLm5TcGxpdHMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucmFuZG9tU2VlZCkge1xuICAgICAgd3JpdGVyLndyaXRlSW50MzIoMywgaW5zdGFuY2UucmFuZG9tU2VlZCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5pbml0aWFsVGhyZXNob2xkcykge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgaW5zdGFuY2UuaW5pdGlhbFRocmVzaG9sZHMgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3QudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICBwcml2YXRlIF9uU3BsaXRzPzogbnVtYmVyO1xuICBwcml2YXRlIF9yYW5kb21TZWVkPzogbnVtYmVyO1xuICBwcml2YXRlIF9pbml0aWFsVGhyZXNob2xkcz86IGdvb2dsZVByb3RvYnVmMDA0LlN0cnVjdDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFJhbmtpbmdNYXRjaE9wdGltaXphdGlvbkNvbmZpZyB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFJhbmtpbmdNYXRjaE9wdGltaXphdGlvbkNvbmZpZz4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIHRoaXMublNwbGl0cyA9IHZhbHVlLm5TcGxpdHM7XG4gICAgdGhpcy5yYW5kb21TZWVkID0gdmFsdWUucmFuZG9tU2VlZDtcbiAgICB0aGlzLmluaXRpYWxUaHJlc2hvbGRzID0gdmFsdWUuaW5pdGlhbFRocmVzaG9sZHNcbiAgICAgID8gbmV3IGdvb2dsZVByb3RvYnVmMDA0LlN0cnVjdCh2YWx1ZS5pbml0aWFsVGhyZXNob2xkcylcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIFJhbmtpbmdNYXRjaE9wdGltaXphdGlvbkNvbmZpZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlQ29kZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZUNvZGU7XG4gIH1cbiAgc2V0IGxhbmd1YWdlQ29kZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGFuZ3VhZ2VDb2RlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5TcGxpdHMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fblNwbGl0cztcbiAgfVxuICBzZXQgblNwbGl0cyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fblNwbGl0cyA9IHZhbHVlO1xuICB9XG4gIGdldCByYW5kb21TZWVkKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmRvbVNlZWQ7XG4gIH1cbiAgc2V0IHJhbmRvbVNlZWQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3JhbmRvbVNlZWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaW5pdGlhbFRocmVzaG9sZHMoKTogZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faW5pdGlhbFRocmVzaG9sZHM7XG4gIH1cbiAgc2V0IGluaXRpYWxUaHJlc2hvbGRzKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3QgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9pbml0aWFsVGhyZXNob2xkcyA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlLFxuICAgICAgblNwbGl0czogdGhpcy5uU3BsaXRzLFxuICAgICAgcmFuZG9tU2VlZDogdGhpcy5yYW5kb21TZWVkLFxuICAgICAgaW5pdGlhbFRocmVzaG9sZHM6IHRoaXMuaW5pdGlhbFRocmVzaG9sZHNcbiAgICAgICAgPyB0aGlzLmluaXRpYWxUaHJlc2hvbGRzLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFJhbmtpbmdNYXRjaE9wdGltaXphdGlvbkNvbmZpZyB7fVxuZXhwb3J0IGNsYXNzIE9wdGltaXplUmFua2luZ01hdGNoUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogT3B0aW1pemVSYW5raW5nTWF0Y2hSZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBPcHRpbWl6ZVJhbmtpbmdNYXRjaFJlc3BvbnNlLnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IE9wdGltaXplUmFua2luZ01hdGNoUmVzcG9uc2UoKTtcbiAgICBPcHRpbWl6ZVJhbmtpbmdNYXRjaFJlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBPcHRpbWl6ZVJhbmtpbmdNYXRjaFJlc3BvbnNlKSB7XG4gICAgaW5zdGFuY2Uub3B0aW1pemF0aW9uSW5mbyA9IGluc3RhbmNlLm9wdGltaXphdGlvbkluZm8gfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLm9wdGltaXplZE9uZGV3b0NvbmZpZyA9XG4gICAgICBpbnN0YW5jZS5vcHRpbWl6ZWRPbmRld29Db25maWcgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IE9wdGltaXplUmFua2luZ01hdGNoUmVzcG9uc2UsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5vcHRpbWl6YXRpb25JbmZvID0gbmV3IGdvb2dsZVByb3RvYnVmMDA0LlN0cnVjdCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLm9wdGltaXphdGlvbkluZm8sXG4gICAgICAgICAgICBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3QuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5vcHRpbWl6ZWRPbmRld29Db25maWcgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2Uub3B0aW1pemVkT25kZXdvQ29uZmlnLFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0LmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPcHRpbWl6ZVJhbmtpbmdNYXRjaFJlc3BvbnNlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IE9wdGltaXplUmFua2luZ01hdGNoUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLm9wdGltaXphdGlvbkluZm8pIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIGluc3RhbmNlLm9wdGltaXphdGlvbkluZm8gYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3QudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5vcHRpbWl6ZWRPbmRld29Db25maWcpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIGluc3RhbmNlLm9wdGltaXplZE9uZGV3b0NvbmZpZyBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDA0LlN0cnVjdC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vcHRpbWl6YXRpb25JbmZvPzogZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0O1xuICBwcml2YXRlIF9vcHRpbWl6ZWRPbmRld29Db25maWc/OiBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3Q7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBPcHRpbWl6ZVJhbmtpbmdNYXRjaFJlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8T3B0aW1pemVSYW5raW5nTWF0Y2hSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMub3B0aW1pemF0aW9uSW5mbyA9IHZhbHVlLm9wdGltaXphdGlvbkluZm9cbiAgICAgID8gbmV3IGdvb2dsZVByb3RvYnVmMDA0LlN0cnVjdCh2YWx1ZS5vcHRpbWl6YXRpb25JbmZvKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5vcHRpbWl6ZWRPbmRld29Db25maWcgPSB2YWx1ZS5vcHRpbWl6ZWRPbmRld29Db25maWdcbiAgICAgID8gbmV3IGdvb2dsZVByb3RvYnVmMDA0LlN0cnVjdCh2YWx1ZS5vcHRpbWl6ZWRPbmRld29Db25maWcpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBPcHRpbWl6ZVJhbmtpbmdNYXRjaFJlc3BvbnNlLnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgb3B0aW1pemF0aW9uSW5mbygpOiBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vcHRpbWl6YXRpb25JbmZvO1xuICB9XG4gIHNldCBvcHRpbWl6YXRpb25JbmZvKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3QgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9vcHRpbWl6YXRpb25JbmZvID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG9wdGltaXplZE9uZGV3b0NvbmZpZygpOiBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vcHRpbWl6ZWRPbmRld29Db25maWc7XG4gIH1cbiAgc2V0IG9wdGltaXplZE9uZGV3b0NvbmZpZyh2YWx1ZTogZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fb3B0aW1pemVkT25kZXdvQ29uZmlnID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wdGltaXphdGlvbkluZm86IHRoaXMub3B0aW1pemF0aW9uSW5mb1xuICAgICAgICA/IHRoaXMub3B0aW1pemF0aW9uSW5mby50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgb3B0aW1pemVkT25kZXdvQ29uZmlnOiB0aGlzLm9wdGltaXplZE9uZGV3b0NvbmZpZ1xuICAgICAgICA/IHRoaXMub3B0aW1pemVkT25kZXdvQ29uZmlnLnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIE9wdGltaXplUmFua2luZ01hdGNoUmVzcG9uc2Uge31cbmV4cG9ydCBjbGFzcyBJbXBvcnRBZ2VudFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogSW1wb3J0QWdlbnRSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEltcG9ydEFnZW50UmVxdWVzdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBJbXBvcnRBZ2VudFJlcXVlc3QoKTtcbiAgICBJbXBvcnRBZ2VudFJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEltcG9ydEFnZW50UmVxdWVzdCkge1xuICAgIGluc3RhbmNlLnBhcmVudCA9IGluc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBJbXBvcnRBZ2VudFJlcXVlc3QsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuYWdlbnRVcmkgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UuYWdlbnRDb250ZW50ID0gcmVhZGVyLnJlYWRCeXRlcygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBJbXBvcnRBZ2VudFJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogSW1wb3J0QWdlbnRSZXF1ZXN0LCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYWdlbnRVcmkgfHwgaW5zdGFuY2UuYWdlbnRVcmkgPT09ICcnKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UuYWdlbnRVcmkpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYWdlbnRDb250ZW50ICYmIGluc3RhbmNlLmFnZW50Q29udGVudC5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZUJ5dGVzKDMsIGluc3RhbmNlLmFnZW50Q29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9hZ2VudFVyaT86IHN0cmluZztcbiAgcHJpdmF0ZSBfYWdlbnRDb250ZW50PzogVWludDhBcnJheTtcblxuICBwcml2YXRlIF9hZ2VudDogSW1wb3J0QWdlbnRSZXF1ZXN0LkFnZW50Q2FzZSA9XG4gICAgSW1wb3J0QWdlbnRSZXF1ZXN0LkFnZW50Q2FzZS5ub25lO1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEltcG9ydEFnZW50UmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEltcG9ydEFnZW50UmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gdmFsdWUucGFyZW50O1xuICAgIHRoaXMuYWdlbnRVcmkgPSB2YWx1ZS5hZ2VudFVyaTtcbiAgICB0aGlzLmFnZW50Q29udGVudCA9IHZhbHVlLmFnZW50Q29udGVudDtcbiAgICBJbXBvcnRBZ2VudFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBhZ2VudFVyaSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hZ2VudFVyaTtcbiAgfVxuICBzZXQgYWdlbnRVcmkodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9hZ2VudENvbnRlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hZ2VudCA9IEltcG9ydEFnZW50UmVxdWVzdC5BZ2VudENhc2UuYWdlbnRVcmk7XG4gICAgfVxuICAgIHRoaXMuX2FnZW50VXJpID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFnZW50Q29udGVudCgpOiBVaW50OEFycmF5IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWdlbnRDb250ZW50O1xuICB9XG4gIHNldCBhZ2VudENvbnRlbnQodmFsdWU6IFVpbnQ4QXJyYXkgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fYWdlbnRVcmkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hZ2VudCA9IEltcG9ydEFnZW50UmVxdWVzdC5BZ2VudENhc2UuYWdlbnRDb250ZW50O1xuICAgIH1cbiAgICB0aGlzLl9hZ2VudENvbnRlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYWdlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FnZW50O1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgYWdlbnRVcmk6IHRoaXMuYWdlbnRVcmksXG4gICAgICBhZ2VudENvbnRlbnQ6IHRoaXMuYWdlbnRDb250ZW50XG4gICAgICAgID8gdGhpcy5hZ2VudENvbnRlbnQuc3ViYXJyYXkoMClcbiAgICAgICAgOiBuZXcgVWludDhBcnJheSgpXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBJbXBvcnRBZ2VudFJlcXVlc3Qge1xuICBleHBvcnQgZW51bSBBZ2VudENhc2Uge1xuICAgIG5vbmUgPSAwLFxuICAgIGFnZW50VXJpID0gMSxcbiAgICBhZ2VudENvbnRlbnQgPSAyXG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBSZXN0b3JlQWdlbnRSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFJlc3RvcmVBZ2VudFJlcXVlc3QpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgUmVzdG9yZUFnZW50UmVxdWVzdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBSZXN0b3JlQWdlbnRSZXF1ZXN0KCk7XG4gICAgUmVzdG9yZUFnZW50UmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogUmVzdG9yZUFnZW50UmVxdWVzdCkge1xuICAgIGluc3RhbmNlLnBhcmVudCA9IGluc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBSZXN0b3JlQWdlbnRSZXF1ZXN0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UucGFyZW50ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLmFnZW50VXJpID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLmFnZW50Q29udGVudCA9IHJlYWRlci5yZWFkQnl0ZXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUmVzdG9yZUFnZW50UmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBSZXN0b3JlQWdlbnRSZXF1ZXN0LCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYWdlbnRVcmkgfHwgaW5zdGFuY2UuYWdlbnRVcmkgPT09ICcnKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UuYWdlbnRVcmkpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYWdlbnRDb250ZW50ICYmIGluc3RhbmNlLmFnZW50Q29udGVudC5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZUJ5dGVzKDMsIGluc3RhbmNlLmFnZW50Q29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9hZ2VudFVyaT86IHN0cmluZztcbiAgcHJpdmF0ZSBfYWdlbnRDb250ZW50PzogVWludDhBcnJheTtcblxuICBwcml2YXRlIF9hZ2VudDogUmVzdG9yZUFnZW50UmVxdWVzdC5BZ2VudENhc2UgPVxuICAgIFJlc3RvcmVBZ2VudFJlcXVlc3QuQWdlbnRDYXNlLm5vbmU7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gUmVzdG9yZUFnZW50UmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFJlc3RvcmVBZ2VudFJlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IHZhbHVlLnBhcmVudDtcbiAgICB0aGlzLmFnZW50VXJpID0gdmFsdWUuYWdlbnRVcmk7XG4gICAgdGhpcy5hZ2VudENvbnRlbnQgPSB2YWx1ZS5hZ2VudENvbnRlbnQ7XG4gICAgUmVzdG9yZUFnZW50UmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFnZW50VXJpKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2FnZW50VXJpO1xuICB9XG4gIHNldCBhZ2VudFVyaSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2FnZW50Q29udGVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FnZW50ID0gUmVzdG9yZUFnZW50UmVxdWVzdC5BZ2VudENhc2UuYWdlbnRVcmk7XG4gICAgfVxuICAgIHRoaXMuX2FnZW50VXJpID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFnZW50Q29udGVudCgpOiBVaW50OEFycmF5IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fYWdlbnRDb250ZW50O1xuICB9XG4gIHNldCBhZ2VudENvbnRlbnQodmFsdWU6IFVpbnQ4QXJyYXkgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fYWdlbnRVcmkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hZ2VudCA9IFJlc3RvcmVBZ2VudFJlcXVlc3QuQWdlbnRDYXNlLmFnZW50Q29udGVudDtcbiAgICB9XG4gICAgdGhpcy5fYWdlbnRDb250ZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFnZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9hZ2VudDtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGFnZW50VXJpOiB0aGlzLmFnZW50VXJpLFxuICAgICAgYWdlbnRDb250ZW50OiB0aGlzLmFnZW50Q29udGVudFxuICAgICAgICA/IHRoaXMuYWdlbnRDb250ZW50LnN1YmFycmF5KDApXG4gICAgICAgIDogbmV3IFVpbnQ4QXJyYXkoKVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgUmVzdG9yZUFnZW50UmVxdWVzdCB7XG4gIGV4cG9ydCBlbnVtIEFnZW50Q2FzZSB7XG4gICAgbm9uZSA9IDAsXG4gICAgYWdlbnRVcmkgPSAxLFxuICAgIGFnZW50Q29udGVudCA9IDJcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEdldEFnZW50U3RhdGlzdGljc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogR2V0QWdlbnRTdGF0aXN0aWNzUmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZXRBZ2VudFN0YXRpc3RpY3NSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEdldEFnZW50U3RhdGlzdGljc1JlcXVlc3QoKTtcbiAgICBHZXRBZ2VudFN0YXRpc3RpY3NSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBHZXRBZ2VudFN0YXRpc3RpY3NSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UucGFyZW50ID0gaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICAgIGluc3RhbmNlLmZvcm1hdCA9IGluc3RhbmNlLmZvcm1hdCB8fCAwO1xuICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IGluc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgICBpbnN0YW5jZS50eXBlID0gaW5zdGFuY2UudHlwZSB8fCAwO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IEdldEFnZW50U3RhdGlzdGljc1JlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuZm9ybWF0ID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2UudHlwZSA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBHZXRBZ2VudFN0YXRpc3RpY3NSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IEdldEFnZW50U3RhdGlzdGljc1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5mb3JtYXQpIHtcbiAgICAgIHdyaXRlci53cml0ZUVudW0oMiwgaW5zdGFuY2UuZm9ybWF0KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDMsIGluc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS50eXBlKSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDQsIGluc3RhbmNlLnR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBfZm9ybWF0PzogUmVwb3J0Rm9ybWF0O1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3R5cGU/OiBSZXBvcnRUeXBlO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gR2V0QWdlbnRTdGF0aXN0aWNzUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEdldEFnZW50U3RhdGlzdGljc1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IHZhbHVlLnBhcmVudDtcbiAgICB0aGlzLmZvcm1hdCA9IHZhbHVlLmZvcm1hdDtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IHZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnR5cGUgPSB2YWx1ZS50eXBlO1xuICAgIEdldEFnZW50U3RhdGlzdGljc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBmb3JtYXQoKTogUmVwb3J0Rm9ybWF0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICB9XG4gIHNldCBmb3JtYXQodmFsdWU6IFJlcG9ydEZvcm1hdCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Zvcm1hdCA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIGdldCB0eXBlKCk6IFJlcG9ydFR5cGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHNldCB0eXBlKHZhbHVlOiBSZXBvcnRUeXBlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgZm9ybWF0OiB0aGlzLmZvcm1hdCxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGUsXG4gICAgICB0eXBlOiB0aGlzLnR5cGVcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEdldEFnZW50U3RhdGlzdGljc1JlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBHZXRBZ2VudFN0YXRpc3RpY3NSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBHZXRBZ2VudFN0YXRpc3RpY3NSZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBHZXRBZ2VudFN0YXRpc3RpY3NSZXNwb25zZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBHZXRBZ2VudFN0YXRpc3RpY3NSZXNwb25zZSgpO1xuICAgIEdldEFnZW50U3RhdGlzdGljc1Jlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBHZXRBZ2VudFN0YXRpc3RpY3NSZXNwb25zZSkge1xuICAgIGluc3RhbmNlLnJlcG9ydHMgPSBpbnN0YW5jZS5yZXBvcnRzIHx8IG5ldyBVaW50OEFycmF5KCk7XG4gICAgaW5zdGFuY2UuZm9ybWF0ID0gaW5zdGFuY2UuZm9ybWF0IHx8IDA7XG4gICAgaW5zdGFuY2UudHlwZSA9IGluc3RhbmNlLnR5cGUgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBHZXRBZ2VudFN0YXRpc3RpY3NSZXNwb25zZSxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnJlcG9ydHMgPSByZWFkZXIucmVhZEJ5dGVzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5mb3JtYXQgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLnR5cGUgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgR2V0QWdlbnRTdGF0aXN0aWNzUmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogR2V0QWdlbnRTdGF0aXN0aWNzUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnJlcG9ydHMgJiYgaW5zdGFuY2UucmVwb3J0cy5sZW5ndGgpIHtcbiAgICAgIHdyaXRlci53cml0ZUJ5dGVzKDEsIGluc3RhbmNlLnJlcG9ydHMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZm9ybWF0KSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDIsIGluc3RhbmNlLmZvcm1hdCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS50eXBlKSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDMsIGluc3RhbmNlLnR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JlcG9ydHM/OiBVaW50OEFycmF5O1xuICBwcml2YXRlIF9mb3JtYXQ/OiBSZXBvcnRGb3JtYXQ7XG4gIHByaXZhdGUgX3R5cGU/OiBSZXBvcnRUeXBlO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gR2V0QWdlbnRTdGF0aXN0aWNzUmVzcG9uc2UgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxHZXRBZ2VudFN0YXRpc3RpY3NSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucmVwb3J0cyA9IHZhbHVlLnJlcG9ydHM7XG4gICAgdGhpcy5mb3JtYXQgPSB2YWx1ZS5mb3JtYXQ7XG4gICAgdGhpcy50eXBlID0gdmFsdWUudHlwZTtcbiAgICBHZXRBZ2VudFN0YXRpc3RpY3NSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHJlcG9ydHMoKTogVWludDhBcnJheSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcG9ydHM7XG4gIH1cbiAgc2V0IHJlcG9ydHModmFsdWU6IFVpbnQ4QXJyYXkgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZXBvcnRzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZvcm1hdCgpOiBSZXBvcnRGb3JtYXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXQ7XG4gIH1cbiAgc2V0IGZvcm1hdCh2YWx1ZTogUmVwb3J0Rm9ybWF0IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZm9ybWF0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR5cGUoKTogUmVwb3J0VHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgc2V0IHR5cGUodmFsdWU6IFJlcG9ydFR5cGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcG9ydHM6IHRoaXMucmVwb3J0cyA/IHRoaXMucmVwb3J0cy5zdWJhcnJheSgwKSA6IG5ldyBVaW50OEFycmF5KCksXG4gICAgICBmb3JtYXQ6IHRoaXMuZm9ybWF0LFxuICAgICAgdHlwZTogdGhpcy50eXBlXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBHZXRBZ2VudFN0YXRpc3RpY3NSZXNwb25zZSB7fVxuZXhwb3J0IGNsYXNzIEFkZFVzZXJUb1Byb2plY3RSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEFkZFVzZXJUb1Byb2plY3RSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIEFkZFVzZXJUb1Byb2plY3RSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEFkZFVzZXJUb1Byb2plY3RSZXF1ZXN0KCk7XG4gICAgQWRkVXNlclRvUHJvamVjdFJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IEFkZFVzZXJUb1Byb2plY3RSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UucGFyZW50ID0gaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICAgIGluc3RhbmNlLnVzZXJJZCA9IGluc3RhbmNlLnVzZXJJZCB8fCAnJztcbiAgICBpbnN0YW5jZS5wcm9qZWN0Um9sZUlkID0gaW5zdGFuY2UucHJvamVjdFJvbGVJZCB8fCAwO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IEFkZFVzZXJUb1Byb2plY3RSZXF1ZXN0LFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UucGFyZW50ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnVzZXJJZCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5wcm9qZWN0Um9sZUlkID0gcmVhZGVyLnJlYWRVaW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWRkVXNlclRvUHJvamVjdFJlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogQWRkVXNlclRvUHJvamVjdFJlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS51c2VySWQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS51c2VySWQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucHJvamVjdFJvbGVJZCkge1xuICAgICAgd3JpdGVyLndyaXRlVWludDMyKDQsIGluc3RhbmNlLnByb2plY3RSb2xlSWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBfdXNlcklkPzogc3RyaW5nO1xuICBwcml2YXRlIF9wcm9qZWN0Um9sZUlkPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQWRkVXNlclRvUHJvamVjdFJlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxBZGRVc2VyVG9Qcm9qZWN0UmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gdmFsdWUucGFyZW50O1xuICAgIHRoaXMudXNlcklkID0gdmFsdWUudXNlcklkO1xuICAgIHRoaXMucHJvamVjdFJvbGVJZCA9IHZhbHVlLnByb2plY3RSb2xlSWQ7XG4gICAgQWRkVXNlclRvUHJvamVjdFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCB1c2VySWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcklkO1xuICB9XG4gIHNldCB1c2VySWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VzZXJJZCA9IHZhbHVlO1xuICB9XG4gIGdldCBwcm9qZWN0Um9sZUlkKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3RSb2xlSWQ7XG4gIH1cbiAgc2V0IHByb2plY3RSb2xlSWQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Byb2plY3RSb2xlSWQgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICBwcm9qZWN0Um9sZUlkOiB0aGlzLnByb2plY3RSb2xlSWRcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEFkZFVzZXJUb1Byb2plY3RSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgUmVtb3ZlVXNlckZyb21Qcm9qZWN0UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBSZW1vdmVVc2VyRnJvbVByb2plY3RSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFJlbW92ZVVzZXJGcm9tUHJvamVjdFJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUmVtb3ZlVXNlckZyb21Qcm9qZWN0UmVxdWVzdCgpO1xuICAgIFJlbW92ZVVzZXJGcm9tUHJvamVjdFJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFJlbW92ZVVzZXJGcm9tUHJvamVjdFJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UudXNlcklkID0gaW5zdGFuY2UudXNlcklkIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IFJlbW92ZVVzZXJGcm9tUHJvamVjdFJlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UudXNlcklkID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUmVtb3ZlVXNlckZyb21Qcm9qZWN0UmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBSZW1vdmVVc2VyRnJvbVByb2plY3RSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudXNlcklkKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UudXNlcklkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3VzZXJJZD86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFJlbW92ZVVzZXJGcm9tUHJvamVjdFJlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxSZW1vdmVVc2VyRnJvbVByb2plY3RSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy51c2VySWQgPSB2YWx1ZS51c2VySWQ7XG4gICAgUmVtb3ZlVXNlckZyb21Qcm9qZWN0UmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHVzZXJJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91c2VySWQ7XG4gIH1cbiAgc2V0IHVzZXJJZCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdXNlcklkID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICB1c2VySWQ6IHRoaXMudXNlcklkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBSZW1vdmVVc2VyRnJvbVByb2plY3RSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgTGlzdFVzZXJzSW5Qcm9qZWN0UmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMaXN0VXNlcnNJblByb2plY3RSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIExpc3RVc2Vyc0luUHJvamVjdFJlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFVzZXJzSW5Qcm9qZWN0UmVxdWVzdCgpO1xuICAgIExpc3RVc2Vyc0luUHJvamVjdFJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IExpc3RVc2Vyc0luUHJvamVjdFJlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UucGFnZVRva2VuID0gaW5zdGFuY2UucGFnZVRva2VuIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IExpc3RVc2Vyc0luUHJvamVjdFJlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UucGFnZVRva2VuID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFVzZXJzSW5Qcm9qZWN0UmVxdWVzdC5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKFxuICAgIGluc3RhbmNlOiBMaXN0VXNlcnNJblByb2plY3RSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGFnZVRva2VuKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UucGFnZVRva2VuKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhZ2VUb2tlbj86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIExpc3RVc2Vyc0luUHJvamVjdFJlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxMaXN0VXNlcnNJblByb2plY3RSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5wYWdlVG9rZW4gPSB2YWx1ZS5wYWdlVG9rZW47XG4gICAgTGlzdFVzZXJzSW5Qcm9qZWN0UmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHBhZ2VUb2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWdlVG9rZW47XG4gIH1cbiAgc2V0IHBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFnZVRva2VuID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBwYWdlVG9rZW46IHRoaXMucGFnZVRva2VuXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0VXNlcnNJblByb2plY3RSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgVXNlckluUHJvamVjdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBVc2VySW5Qcm9qZWN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFVzZXJJblByb2plY3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVXNlckluUHJvamVjdCgpO1xuICAgIFVzZXJJblByb2plY3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFVzZXJJblByb2plY3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UudXNlciA9IGluc3RhbmNlLnVzZXIgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLnJvbGVJZCA9IGluc3RhbmNlLnJvbGVJZCB8fCAwO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFVzZXJJblByb2plY3QsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UudXNlciA9IG5ldyBvbmRld29ObHUwMDYuVXNlcigpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShpbnN0YW5jZS51c2VyLCBvbmRld29ObHUwMDYuVXNlci5mcm9tQmluYXJ5UmVhZGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLnJvbGVJZCA9IHJlYWRlci5yZWFkVWludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFVzZXJJblByb2plY3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogVXNlckluUHJvamVjdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnVzZXIpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIGluc3RhbmNlLnVzZXIgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDYuVXNlci50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnJvbGVJZCkge1xuICAgICAgd3JpdGVyLndyaXRlVWludDMyKDMsIGluc3RhbmNlLnJvbGVJZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF91c2VyPzogb25kZXdvTmx1MDA2LlVzZXI7XG4gIHByaXZhdGUgX3JvbGVJZD86IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFVzZXJJblByb2plY3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxVc2VySW5Qcm9qZWN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy51c2VyID0gdmFsdWUudXNlciA/IG5ldyBvbmRld29ObHUwMDYuVXNlcih2YWx1ZS51c2VyKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJvbGVJZCA9IHZhbHVlLnJvbGVJZDtcbiAgICBVc2VySW5Qcm9qZWN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdXNlcigpOiBvbmRld29ObHUwMDYuVXNlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXI7XG4gIH1cbiAgc2V0IHVzZXIodmFsdWU6IG9uZGV3b05sdTAwNi5Vc2VyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdXNlciA9IHZhbHVlO1xuICB9XG4gIGdldCByb2xlSWQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZUlkO1xuICB9XG4gIHNldCByb2xlSWQodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3JvbGVJZCA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgdXNlcjogdGhpcy51c2VyID8gdGhpcy51c2VyLnRvT2JqZWN0KCkgOiB1bmRlZmluZWQsXG4gICAgICByb2xlSWQ6IHRoaXMucm9sZUlkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBVc2VySW5Qcm9qZWN0IHt9XG5leHBvcnQgY2xhc3MgTGlzdFVzZXJzSW5Qcm9qZWN0UmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogTGlzdFVzZXJzSW5Qcm9qZWN0UmVzcG9uc2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgTGlzdFVzZXJzSW5Qcm9qZWN0UmVzcG9uc2UudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFVzZXJzSW5Qcm9qZWN0UmVzcG9uc2UoKTtcbiAgICBMaXN0VXNlcnNJblByb2plY3RSZXNwb25zZS5mcm9tQmluYXJ5UmVhZGVyKFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKVxuICAgICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogTGlzdFVzZXJzSW5Qcm9qZWN0UmVzcG9uc2UpIHtcbiAgICBpbnN0YW5jZS51c2VycyA9IGluc3RhbmNlLnVzZXJzIHx8IFtdO1xuICAgIGluc3RhbmNlLm5leHRQYWdlVG9rZW4gPSBpbnN0YW5jZS5uZXh0UGFnZVRva2VuIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IExpc3RVc2Vyc0luUHJvamVjdFJlc3BvbnNlLFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMSA9IG5ldyBVc2VySW5Qcm9qZWN0KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZUluaXRpYWxpemVyMSxcbiAgICAgICAgICAgIFVzZXJJblByb2plY3QuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgKGluc3RhbmNlLnVzZXJzID0gaW5zdGFuY2UudXNlcnMgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFVzZXJzSW5Qcm9qZWN0UmVzcG9uc2UucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogTGlzdFVzZXJzSW5Qcm9qZWN0UmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnVzZXJzICYmIGluc3RhbmNlLnVzZXJzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBpbnN0YW5jZS51c2VycyBhcyBhbnksXG4gICAgICAgIFVzZXJJblByb2plY3QudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5uZXh0UGFnZVRva2VuKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXNlcnM/OiBVc2VySW5Qcm9qZWN0W107XG4gIHByaXZhdGUgX25leHRQYWdlVG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBMaXN0VXNlcnNJblByb2plY3RSZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RVc2Vyc0luUHJvamVjdFJlc3BvbnNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy51c2VycyA9ICh2YWx1ZS51c2VycyB8fCBbXSkubWFwKG0gPT4gbmV3IFVzZXJJblByb2plY3QobSkpO1xuICAgIHRoaXMubmV4dFBhZ2VUb2tlbiA9IHZhbHVlLm5leHRQYWdlVG9rZW47XG4gICAgTGlzdFVzZXJzSW5Qcm9qZWN0UmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB1c2VycygpOiBVc2VySW5Qcm9qZWN0W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl91c2VycztcbiAgfVxuICBzZXQgdXNlcnModmFsdWU6IFVzZXJJblByb2plY3RbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3VzZXJzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5leHRQYWdlVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmV4dFBhZ2VUb2tlbjtcbiAgfVxuICBzZXQgbmV4dFBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmV4dFBhZ2VUb2tlbiA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyczogKHRoaXMudXNlcnMgfHwgW10pLm1hcChtID0+IG0udG9PYmplY3QoKSksXG4gICAgICBuZXh0UGFnZVRva2VuOiB0aGlzLm5leHRQYWdlVG9rZW5cbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RVc2Vyc0luUHJvamVjdFJlc3BvbnNlIHt9XG5leHBvcnQgY2xhc3MgR2V0UGxhdGZvcm1JbmZvUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogR2V0UGxhdGZvcm1JbmZvUmVzcG9uc2UpIHtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQmluYXJ5V3JpdGVyKCk7XG4gICAgR2V0UGxhdGZvcm1JbmZvUmVzcG9uc2UudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgR2V0UGxhdGZvcm1JbmZvUmVzcG9uc2UoKTtcbiAgICBHZXRQbGF0Zm9ybUluZm9SZXNwb25zZS5mcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlLCBuZXcgQmluYXJ5UmVhZGVyKGJ5dGVzKSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgc3RhdGljIHJlZmluZVZhbHVlcyhpbnN0YW5jZTogR2V0UGxhdGZvcm1JbmZvUmVzcG9uc2UpIHtcbiAgICBpbnN0YW5jZS52ZXJzaW9uID0gaW5zdGFuY2UudmVyc2lvbiB8fCAnJztcbiAgICBpbnN0YW5jZS5jb21taXRIYXNoID0gaW5zdGFuY2UuY29tbWl0SGFzaCB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBHZXRQbGF0Zm9ybUluZm9SZXNwb25zZSxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnZlcnNpb24gPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UuY29tbWl0SGFzaCA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdldFBsYXRmb3JtSW5mb1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IEdldFBsYXRmb3JtSW5mb1Jlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS52ZXJzaW9uKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UudmVyc2lvbik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5jb21taXRIYXNoKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UuY29tbWl0SGFzaCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdmVyc2lvbj86IHN0cmluZztcbiAgcHJpdmF0ZSBfY29tbWl0SGFzaD86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIEdldFBsYXRmb3JtSW5mb1Jlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8R2V0UGxhdGZvcm1JbmZvUmVzcG9uc2U+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnZlcnNpb24gPSB2YWx1ZS52ZXJzaW9uO1xuICAgIHRoaXMuY29tbWl0SGFzaCA9IHZhbHVlLmNvbW1pdEhhc2g7XG4gICAgR2V0UGxhdGZvcm1JbmZvUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCB2ZXJzaW9uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XG4gIH1cbiAgc2V0IHZlcnNpb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3ZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXQgY29tbWl0SGFzaCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb21taXRIYXNoO1xuICB9XG4gIHNldCBjb21taXRIYXNoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jb21taXRIYXNoID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcnNpb246IHRoaXMudmVyc2lvbixcbiAgICAgIGNvbW1pdEhhc2g6IHRoaXMuY29tbWl0SGFzaFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgR2V0UGxhdGZvcm1JbmZvUmVzcG9uc2Uge31cbmV4cG9ydCBjbGFzcyBMaXN0UHJvamVjdFBlcm1pc3Npb25zUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBMaXN0UHJvamVjdFBlcm1pc3Npb25zUmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0UHJvamVjdFBlcm1pc3Npb25zUmVxdWVzdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBMaXN0UHJvamVjdFBlcm1pc3Npb25zUmVxdWVzdCgpO1xuICAgIExpc3RQcm9qZWN0UGVybWlzc2lvbnNSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBMaXN0UHJvamVjdFBlcm1pc3Npb25zUmVxdWVzdCkge1xuICAgIGluc3RhbmNlLnBhZ2VUb2tlbiA9IGluc3RhbmNlLnBhZ2VUb2tlbiB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBMaXN0UHJvamVjdFBlcm1pc3Npb25zUmVxdWVzdCxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGluc3RhbmNlLnBhZ2VUb2tlbiA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIExpc3RQcm9qZWN0UGVybWlzc2lvbnNSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IExpc3RQcm9qZWN0UGVybWlzc2lvbnNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5wYWdlVG9rZW4pIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5wYWdlVG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhZ2VUb2tlbj86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIExpc3RQcm9qZWN0UGVybWlzc2lvbnNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8TGlzdFByb2plY3RQZXJtaXNzaW9uc1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhZ2VUb2tlbiA9IHZhbHVlLnBhZ2VUb2tlbjtcbiAgICBMaXN0UHJvamVjdFBlcm1pc3Npb25zUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhZ2VUb2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWdlVG9rZW47XG4gIH1cbiAgc2V0IHBhZ2VUb2tlbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFnZVRva2VuID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2VUb2tlbjogdGhpcy5wYWdlVG9rZW5cbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIExpc3RQcm9qZWN0UGVybWlzc2lvbnNSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgTGlzdFByb2plY3RQZXJtaXNzaW9uc1Jlc3BvbnNlIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IExpc3RQcm9qZWN0UGVybWlzc2lvbnNSZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBMaXN0UHJvamVjdFBlcm1pc3Npb25zUmVzcG9uc2UudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTGlzdFByb2plY3RQZXJtaXNzaW9uc1Jlc3BvbnNlKCk7XG4gICAgTGlzdFByb2plY3RQZXJtaXNzaW9uc1Jlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpXG4gICAgKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBMaXN0UHJvamVjdFBlcm1pc3Npb25zUmVzcG9uc2UpIHtcbiAgICBpbnN0YW5jZS5wZXJtaXNzaW9ucyA9IGluc3RhbmNlLnBlcm1pc3Npb25zIHx8IFtdO1xuICAgIGluc3RhbmNlLm5leHRQYWdlVG9rZW4gPSBpbnN0YW5jZS5uZXh0UGFnZVRva2VuIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IExpc3RQcm9qZWN0UGVybWlzc2lvbnNSZXNwb25zZSxcbiAgICByZWFkZXI6IEJpbmFyeVJlYWRlclxuICApIHtcbiAgICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkgYnJlYWs7XG5cbiAgICAgIHN3aXRjaCAocmVhZGVyLmdldEZpZWxkTnVtYmVyKCkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIChpbnN0YW5jZS5wZXJtaXNzaW9ucyA9IGluc3RhbmNlLnBlcm1pc3Npb25zIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgcmVhZGVyLnJlYWRTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5uZXh0UGFnZVRva2VuID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGlzdFByb2plY3RQZXJtaXNzaW9uc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IExpc3RQcm9qZWN0UGVybWlzc2lvbnNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UucGVybWlzc2lvbnMgJiYgaW5zdGFuY2UucGVybWlzc2lvbnMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZFN0cmluZygxLCBpbnN0YW5jZS5wZXJtaXNzaW9ucyk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5uZXh0UGFnZVRva2VuKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UubmV4dFBhZ2VUb2tlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGVybWlzc2lvbnM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfbmV4dFBhZ2VUb2tlbj86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIExpc3RQcm9qZWN0UGVybWlzc2lvbnNSZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPExpc3RQcm9qZWN0UGVybWlzc2lvbnNSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGVybWlzc2lvbnMgPSAodmFsdWUucGVybWlzc2lvbnMgfHwgW10pLnNsaWNlKCk7XG4gICAgdGhpcy5uZXh0UGFnZVRva2VuID0gdmFsdWUubmV4dFBhZ2VUb2tlbjtcbiAgICBMaXN0UHJvamVjdFBlcm1pc3Npb25zUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwZXJtaXNzaW9ucygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zO1xuICB9XG4gIHNldCBwZXJtaXNzaW9ucyh2YWx1ZTogc3RyaW5nW10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHZhbHVlO1xuICB9XG4gIGdldCBuZXh0UGFnZVRva2VuKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25leHRQYWdlVG9rZW47XG4gIH1cbiAgc2V0IG5leHRQYWdlVG9rZW4odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25leHRQYWdlVG9rZW4gPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGVybWlzc2lvbnM6ICh0aGlzLnBlcm1pc3Npb25zIHx8IFtdKS5zbGljZSgpLFxuICAgICAgbmV4dFBhZ2VUb2tlbjogdGhpcy5uZXh0UGFnZVRva2VuXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBMaXN0UHJvamVjdFBlcm1pc3Npb25zUmVzcG9uc2Uge31cbmV4cG9ydCBjbGFzcyBTZXRBZ2VudFN0YXR1c1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogU2V0QWdlbnRTdGF0dXNSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFNldEFnZW50U3RhdHVzUmVxdWVzdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTZXRBZ2VudFN0YXR1c1JlcXVlc3QoKTtcbiAgICBTZXRBZ2VudFN0YXR1c1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFNldEFnZW50U3RhdHVzUmVxdWVzdCkge1xuICAgIGluc3RhbmNlLnBhcmVudCA9IGluc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBpbnN0YW5jZS5zdGF0dXMgPSBpbnN0YW5jZS5zdGF0dXMgfHwgMDtcbiAgICBpbnN0YW5jZS5hZ2VudFZpZXcgPSBpbnN0YW5jZS5hZ2VudFZpZXcgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBTZXRBZ2VudFN0YXR1c1JlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2Uuc3RhdHVzID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5hZ2VudFZpZXcgPSByZWFkZXIucmVhZEVudW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2V0QWdlbnRTdGF0dXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFNldEFnZW50U3RhdHVzUmVxdWVzdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnN0YXR1cykge1xuICAgICAgd3JpdGVyLndyaXRlRW51bSgyLCBpbnN0YW5jZS5zdGF0dXMpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYWdlbnRWaWV3KSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDMsIGluc3RhbmNlLmFnZW50Vmlldyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9zdGF0dXM/OiBBZ2VudFN0YXR1cztcbiAgcHJpdmF0ZSBfYWdlbnRWaWV3PzogQWdlbnRWaWV3O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gU2V0QWdlbnRTdGF0dXNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8U2V0QWdlbnRTdGF0dXNSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5zdGF0dXMgPSB2YWx1ZS5zdGF0dXM7XG4gICAgdGhpcy5hZ2VudFZpZXcgPSB2YWx1ZS5hZ2VudFZpZXc7XG4gICAgU2V0QWdlbnRTdGF0dXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc3RhdHVzKCk6IEFnZW50U3RhdHVzIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG4gIHNldCBzdGF0dXModmFsdWU6IEFnZW50U3RhdHVzIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGFnZW50VmlldygpOiBBZ2VudFZpZXcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9hZ2VudFZpZXc7XG4gIH1cbiAgc2V0IGFnZW50Vmlldyh2YWx1ZTogQWdlbnRWaWV3IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYWdlbnRWaWV3ID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgYWdlbnRWaWV3OiB0aGlzLmFnZW50Vmlld1xuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgU2V0QWdlbnRTdGF0dXNSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgQWdlbnRTb3J0aW5nIGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IEFnZW50U29ydGluZykge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBBZ2VudFNvcnRpbmcudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQWdlbnRTb3J0aW5nKCk7XG4gICAgQWdlbnRTb3J0aW5nLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBBZ2VudFNvcnRpbmcpIHtcbiAgICBpbnN0YW5jZS5zb3J0aW5nRmllbGQgPSBpbnN0YW5jZS5zb3J0aW5nRmllbGQgfHwgMDtcbiAgICBpbnN0YW5jZS5zb3J0aW5nTW9kZSA9IGluc3RhbmNlLnNvcnRpbmdNb2RlIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogQWdlbnRTb3J0aW5nLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2Uuc29ydGluZ0ZpZWxkID0gcmVhZGVyLnJlYWRFbnVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpbnN0YW5jZS5zb3J0aW5nTW9kZSA9IHJlYWRlci5yZWFkRW51bSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBBZ2VudFNvcnRpbmcucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogQWdlbnRTb3J0aW5nLCB3cml0ZXI6IEJpbmFyeVdyaXRlcikge1xuICAgIGlmIChpbnN0YW5jZS5zb3J0aW5nRmllbGQpIHtcbiAgICAgIHdyaXRlci53cml0ZUVudW0oMSwgaW5zdGFuY2Uuc29ydGluZ0ZpZWxkKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNvcnRpbmdNb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVFbnVtKDIsIGluc3RhbmNlLnNvcnRpbmdNb2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zb3J0aW5nRmllbGQ/OiBBZ2VudFNvcnRpbmcuQWdlbnRTb3J0aW5nRmllbGQ7XG4gIHByaXZhdGUgX3NvcnRpbmdNb2RlPzogb25kZXdvTmx1MDA1LlNvcnRpbmdNb2RlO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gQWdlbnRTb3J0aW5nIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8QWdlbnRTb3J0aW5nPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zb3J0aW5nRmllbGQgPSB2YWx1ZS5zb3J0aW5nRmllbGQ7XG4gICAgdGhpcy5zb3J0aW5nTW9kZSA9IHZhbHVlLnNvcnRpbmdNb2RlO1xuICAgIEFnZW50U29ydGluZy5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNvcnRpbmdGaWVsZCgpOiBBZ2VudFNvcnRpbmcuQWdlbnRTb3J0aW5nRmllbGQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zb3J0aW5nRmllbGQ7XG4gIH1cbiAgc2V0IHNvcnRpbmdGaWVsZCh2YWx1ZTogQWdlbnRTb3J0aW5nLkFnZW50U29ydGluZ0ZpZWxkIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc29ydGluZ0ZpZWxkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHNvcnRpbmdNb2RlKCk6IG9uZGV3b05sdTAwNS5Tb3J0aW5nTW9kZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRpbmdNb2RlO1xuICB9XG4gIHNldCBzb3J0aW5nTW9kZSh2YWx1ZTogb25kZXdvTmx1MDA1LlNvcnRpbmdNb2RlIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc29ydGluZ01vZGUgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc29ydGluZ0ZpZWxkOiB0aGlzLnNvcnRpbmdGaWVsZCxcbiAgICAgIHNvcnRpbmdNb2RlOiB0aGlzLnNvcnRpbmdNb2RlXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBBZ2VudFNvcnRpbmcge1xuICBleHBvcnQgZW51bSBBZ2VudFNvcnRpbmdGaWVsZCB7XG4gICAgbm9BZ2VudFNvcnRpbmcgPSAwLFxuICAgIHNvcnRBZ2VudEJ5TmFtZSA9IDEsXG4gICAgc29ydEFnZW50QnlDcmVhdGlvbkRhdGUgPSAyLFxuICAgIHNvcnRBZ2VudEJ5TGFzdFVwZGF0ZWQgPSAzLFxuICAgIHNvcnRBZ2VudEJ5T3duZXJOYW1lID0gNFxuICB9XG59XG5leHBvcnQgY2xhc3MgU2V0UmVzb3VyY2VzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBTZXRSZXNvdXJjZXNSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFNldFJlc291cmNlc1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2V0UmVzb3VyY2VzUmVxdWVzdCgpO1xuICAgIFNldFJlc291cmNlc1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFNldFJlc291cmNlc1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UubmFtZSA9IGluc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgaW5zdGFuY2UudHlwZSA9IGluc3RhbmNlLnR5cGUgfHwgJyc7XG4gICAgaW5zdGFuY2UucmVzb3VyY2VGaWxlID0gaW5zdGFuY2UucmVzb3VyY2VGaWxlIHx8IG5ldyBVaW50OEFycmF5KCk7XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFNldFJlc291cmNlc1JlcXVlc3QsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UubmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS50eXBlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLnJlc291cmNlRmlsZSA9IHJlYWRlci5yZWFkQnl0ZXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFNldFJlc291cmNlc1JlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogU2V0UmVzb3VyY2VzUmVxdWVzdCwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm5hbWUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnR5cGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS50eXBlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnJlc291cmNlRmlsZSAmJiBpbnN0YW5jZS5yZXNvdXJjZUZpbGUubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVCeXRlcyg0LCBpbnN0YW5jZS5yZXNvdXJjZUZpbGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNSwgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wYXJlbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Jlc291cmNlRmlsZT86IFVpbnQ4QXJyYXk7XG4gIHByaXZhdGUgX2xhbmd1YWdlQ29kZT86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFNldFJlc291cmNlc1JlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxTZXRSZXNvdXJjZXNSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5wYXJlbnQgPSB2YWx1ZS5wYXJlbnQ7XG4gICAgdGhpcy5uYW1lID0gdmFsdWUubmFtZTtcbiAgICB0aGlzLnR5cGUgPSB2YWx1ZS50eXBlO1xuICAgIHRoaXMucmVzb3VyY2VGaWxlID0gdmFsdWUucmVzb3VyY2VGaWxlO1xuICAgIHRoaXMubGFuZ3VhZ2VDb2RlID0gdmFsdWUubGFuZ3VhZ2VDb2RlO1xuICAgIFNldFJlc291cmNlc1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBwYXJlbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG4gIHNldCBwYXJlbnQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xuICB9XG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHlwZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHJlc291cmNlRmlsZSgpOiBVaW50OEFycmF5IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VGaWxlO1xuICB9XG4gIHNldCByZXNvdXJjZUZpbGUodmFsdWU6IFVpbnQ4QXJyYXkgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUZpbGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIHJlc291cmNlRmlsZTogdGhpcy5yZXNvdXJjZUZpbGVcbiAgICAgICAgPyB0aGlzLnJlc291cmNlRmlsZS5zdWJhcnJheSgwKVxuICAgICAgICA6IG5ldyBVaW50OEFycmF5KCksXG4gICAgICBsYW5ndWFnZUNvZGU6IHRoaXMubGFuZ3VhZ2VDb2RlXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBTZXRSZXNvdXJjZXNSZXF1ZXN0IHt9XG5leHBvcnQgY2xhc3MgRGVsZXRlUmVzb3VyY2VzUmVxdWVzdCBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBEZWxldGVSZXNvdXJjZXNSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIERlbGV0ZVJlc291cmNlc1JlcXVlc3QudG9CaW5hcnlXcml0ZXIoaW5zdGFuY2UsIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBCeXRlU291cmNlKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRGVsZXRlUmVzb3VyY2VzUmVxdWVzdCgpO1xuICAgIERlbGV0ZVJlc291cmNlc1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IERlbGV0ZVJlc291cmNlc1JlcXVlc3QpIHtcbiAgICBpbnN0YW5jZS5wYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQgfHwgJyc7XG4gICAgaW5zdGFuY2UubmFtZSA9IGluc3RhbmNlLm5hbWUgfHwgJyc7XG4gICAgaW5zdGFuY2UudHlwZSA9IGluc3RhbmNlLnR5cGUgfHwgJyc7XG4gICAgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlID0gaW5zdGFuY2UubGFuZ3VhZ2VDb2RlIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoXG4gICAgaW5zdGFuY2U6IERlbGV0ZVJlc291cmNlc1JlcXVlc3QsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UubmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS50eXBlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERlbGV0ZVJlc291cmNlc1JlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihcbiAgICBpbnN0YW5jZTogRGVsZXRlUmVzb3VyY2VzUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2UucGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm5hbWUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygyLCBpbnN0YW5jZS5uYW1lKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnR5cGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS50eXBlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmxhbmd1YWdlQ29kZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDQsIGluc3RhbmNlLmxhbmd1YWdlQ29kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50Pzogc3RyaW5nO1xuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwcml2YXRlIF90eXBlPzogc3RyaW5nO1xuICBwcml2YXRlIF9sYW5ndWFnZUNvZGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IGFuZCBhcHBsaWVzIGRlZmF1bHQgUHJvdG9idWYgdmFsdWVzXG4gICAqIEBwYXJhbSBEZWxldGVSZXNvdXJjZXNSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8RGVsZXRlUmVzb3VyY2VzUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gdmFsdWUucGFyZW50O1xuICAgIHRoaXMubmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgdGhpcy50eXBlID0gdmFsdWUudHlwZTtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IHZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICBEZWxldGVSZXNvdXJjZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyh0aGlzKTtcbiAgfVxuICBnZXQgcGFyZW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgfVxuICBzZXQgcGFyZW50KHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbmFtZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIGdldCBsYW5ndWFnZUNvZGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2VDb2RlO1xuICB9XG4gIHNldCBsYW5ndWFnZUNvZGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2xhbmd1YWdlQ29kZSA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZVxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgRGVsZXRlUmVzb3VyY2VzUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIEV4cG9ydFJlc291cmNlc1JlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogRXhwb3J0UmVzb3VyY2VzUmVxdWVzdCkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBFeHBvcnRSZXNvdXJjZXNSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEV4cG9ydFJlc291cmNlc1JlcXVlc3QoKTtcbiAgICBFeHBvcnRSZXNvdXJjZXNSZXF1ZXN0LmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBFeHBvcnRSZXNvdXJjZXNSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2UucGFyZW50ID0gaW5zdGFuY2UucGFyZW50IHx8ICcnO1xuICAgIGluc3RhbmNlLm5hbWUgPSBpbnN0YW5jZS5uYW1lIHx8ICcnO1xuICAgIGluc3RhbmNlLnR5cGUgPSBpbnN0YW5jZS50eXBlIHx8ICcnO1xuICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IGluc3RhbmNlLmxhbmd1YWdlQ29kZSB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKFxuICAgIGluc3RhbmNlOiBFeHBvcnRSZXNvdXJjZXNSZXF1ZXN0LFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UucGFyZW50ID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLm5hbWUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2UudHlwZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFeHBvcnRSZXNvdXJjZXNSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IEV4cG9ydFJlc291cmNlc1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXJcbiAgKSB7XG4gICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLnBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5uYW1lKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMiwgaW5zdGFuY2UubmFtZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS50eXBlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMywgaW5zdGFuY2UudHlwZSk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg0LCBpbnN0YW5jZS5sYW5ndWFnZUNvZGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfdHlwZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gRXhwb3J0UmVzb3VyY2VzUmVxdWVzdCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPEV4cG9ydFJlc291cmNlc1JlcXVlc3Q+KSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB7fTtcbiAgICB0aGlzLnBhcmVudCA9IHZhbHVlLnBhcmVudDtcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZS5uYW1lO1xuICAgIHRoaXMudHlwZSA9IHZhbHVlLnR5cGU7XG4gICAgdGhpcy5sYW5ndWFnZUNvZGUgPSB2YWx1ZS5sYW5ndWFnZUNvZGU7XG4gICAgRXhwb3J0UmVzb3VyY2VzUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCB0eXBlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIGxhbmd1YWdlQ29kZTogdGhpcy5sYW5ndWFnZUNvZGVcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEV4cG9ydFJlc291cmNlc1JlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBFeHBvcnRSZXNvdXJjZXNSZXNwb25zZSBpbXBsZW1lbnRzIEdycGNNZXNzYWdlIHtcbiAgc3RhdGljIHRvQmluYXJ5KGluc3RhbmNlOiBFeHBvcnRSZXNvdXJjZXNSZXNwb25zZSkge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCaW5hcnlXcml0ZXIoKTtcbiAgICBFeHBvcnRSZXNvdXJjZXNSZXNwb25zZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBFeHBvcnRSZXNvdXJjZXNSZXNwb25zZSgpO1xuICAgIEV4cG9ydFJlc291cmNlc1Jlc3BvbnNlLmZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2UsIG5ldyBCaW5hcnlSZWFkZXIoYnl0ZXMpKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgcmVmaW5lVmFsdWVzKGluc3RhbmNlOiBFeHBvcnRSZXNvdXJjZXNSZXNwb25zZSkge1xuICAgIGluc3RhbmNlLnBhcmVudCA9IGluc3RhbmNlLnBhcmVudCB8fCAnJztcbiAgICBpbnN0YW5jZS5uYW1lID0gaW5zdGFuY2UubmFtZSB8fCAnJztcbiAgICBpbnN0YW5jZS50eXBlID0gaW5zdGFuY2UudHlwZSB8fCAnJztcbiAgICBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgPSBpbnN0YW5jZS5sYW5ndWFnZUNvZGUgfHwgJyc7XG4gICAgaW5zdGFuY2UucmVzb3VyY2VGaWxlID0gaW5zdGFuY2UucmVzb3VyY2VGaWxlIHx8IG5ldyBVaW50OEFycmF5KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogRXhwb3J0UmVzb3VyY2VzUmVzcG9uc2UsXG4gICAgcmVhZGVyOiBCaW5hcnlSZWFkZXJcbiAgKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaW5zdGFuY2UubmFtZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS50eXBlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGluc3RhbmNlLmxhbmd1YWdlQ29kZSA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBpbnN0YW5jZS5yZXNvdXJjZUZpbGUgPSByZWFkZXIucmVhZEJ5dGVzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEV4cG9ydFJlc291cmNlc1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IEV4cG9ydFJlc291cmNlc1Jlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyXG4gICkge1xuICAgIGlmIChpbnN0YW5jZS5wYXJlbnQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5wYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubmFtZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDIsIGluc3RhbmNlLm5hbWUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UudHlwZSkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDMsIGluc3RhbmNlLnR5cGUpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoNCwgaW5zdGFuY2UubGFuZ3VhZ2VDb2RlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnJlc291cmNlRmlsZSAmJiBpbnN0YW5jZS5yZXNvdXJjZUZpbGUubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVCeXRlcyg1LCBpbnN0YW5jZS5yZXNvdXJjZUZpbGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BhcmVudD86IHN0cmluZztcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfdHlwZT86IHN0cmluZztcbiAgcHJpdmF0ZSBfbGFuZ3VhZ2VDb2RlPzogc3RyaW5nO1xuICBwcml2YXRlIF9yZXNvdXJjZUZpbGU/OiBVaW50OEFycmF5O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gRXhwb3J0UmVzb3VyY2VzUmVzcG9uc2UgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxFeHBvcnRSZXNvdXJjZXNSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMucGFyZW50ID0gdmFsdWUucGFyZW50O1xuICAgIHRoaXMubmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgdGhpcy50eXBlID0gdmFsdWUudHlwZTtcbiAgICB0aGlzLmxhbmd1YWdlQ29kZSA9IHZhbHVlLmxhbmd1YWdlQ29kZTtcbiAgICB0aGlzLnJlc291cmNlRmlsZSA9IHZhbHVlLnJlc291cmNlRmlsZTtcbiAgICBFeHBvcnRSZXNvdXJjZXNSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHBhcmVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cbiAgc2V0IHBhcmVudCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIGdldCB0eXBlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbGFuZ3VhZ2VDb2RlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlQ29kZTtcbiAgfVxuICBzZXQgbGFuZ3VhZ2VDb2RlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9sYW5ndWFnZUNvZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcmVzb3VyY2VGaWxlKCk6IFVpbnQ4QXJyYXkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZUZpbGU7XG4gIH1cbiAgc2V0IHJlc291cmNlRmlsZSh2YWx1ZTogVWludDhBcnJheSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Jlc291cmNlRmlsZSA9IHZhbHVlO1xuICB9XG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbGFuZ3VhZ2VDb2RlOiB0aGlzLmxhbmd1YWdlQ29kZSxcbiAgICAgIHJlc291cmNlRmlsZTogdGhpcy5yZXNvdXJjZUZpbGVcbiAgICAgICAgPyB0aGlzLnJlc291cmNlRmlsZS5zdWJhcnJheSgwKVxuICAgICAgICA6IG5ldyBVaW50OEFycmF5KClcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIEV4cG9ydFJlc291cmNlc1Jlc3BvbnNlIHt9XG4iXX0=