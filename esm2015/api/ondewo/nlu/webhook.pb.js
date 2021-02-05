import { BinaryReader, BinaryWriter } from 'google-protobuf';
import * as ondewoNlu001 from '../../ondewo/nlu/context.pb';
import * as ondewoNlu002 from '../../ondewo/nlu/intent.pb';
import * as ondewoNlu003 from '../../ondewo/nlu/session.pb';
import * as googleProtobuf004 from '../../google/protobuf/struct.pb';
export class PingRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param PingRequest value
     */
    constructor(value) {
        value = value || {};
        this.session = value.session;
        PingRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        PingRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new PingRequest();
        PingRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.session = instance.session || '';
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.session = reader.readString();
                    break;
                default:
                    reader.skipField();
            }
        }
        PingRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.session) {
            writer.writeString(1, instance.session);
        }
    }
    get session() {
        return this._session;
    }
    set session(value) {
        this._session = value;
    }
    toObject() {
        return {
            session: this.session
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class WebhookRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param WebhookRequest value
     */
    constructor(value) {
        value = value || {};
        this.session = value.session;
        this.responseId = value.responseId;
        this.queryResult = value.queryResult
            ? new ondewoNlu003.QueryResult(value.queryResult)
            : undefined;
        this.originalDetectIntentRequest = value.originalDetectIntentRequest
            ? new OriginalDetectIntentRequest(value.originalDetectIntentRequest)
            : undefined;
        this.headers = value.headers
            ? new googleProtobuf004.Struct(value.headers)
            : undefined;
        WebhookRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        WebhookRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new WebhookRequest();
        WebhookRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.session = instance.session || '';
        instance.responseId = instance.responseId || '';
        instance.queryResult = instance.queryResult || undefined;
        instance.originalDetectIntentRequest =
            instance.originalDetectIntentRequest || undefined;
        instance.headers = instance.headers || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    instance.session = reader.readString();
                    break;
                case 1:
                    instance.responseId = reader.readString();
                    break;
                case 2:
                    instance.queryResult = new ondewoNlu003.QueryResult();
                    reader.readMessage(instance.queryResult, ondewoNlu003.QueryResult.fromBinaryReader);
                    break;
                case 3:
                    instance.originalDetectIntentRequest = new OriginalDetectIntentRequest();
                    reader.readMessage(instance.originalDetectIntentRequest, OriginalDetectIntentRequest.fromBinaryReader);
                    break;
                case 5:
                    instance.headers = new googleProtobuf004.Struct();
                    reader.readMessage(instance.headers, googleProtobuf004.Struct.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        WebhookRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.session) {
            writer.writeString(4, instance.session);
        }
        if (instance.responseId) {
            writer.writeString(1, instance.responseId);
        }
        if (instance.queryResult) {
            writer.writeMessage(2, instance.queryResult, ondewoNlu003.QueryResult.toBinaryWriter);
        }
        if (instance.originalDetectIntentRequest) {
            writer.writeMessage(3, instance.originalDetectIntentRequest, OriginalDetectIntentRequest.toBinaryWriter);
        }
        if (instance.headers) {
            writer.writeMessage(5, instance.headers, googleProtobuf004.Struct.toBinaryWriter);
        }
    }
    get session() {
        return this._session;
    }
    set session(value) {
        this._session = value;
    }
    get responseId() {
        return this._responseId;
    }
    set responseId(value) {
        this._responseId = value;
    }
    get queryResult() {
        return this._queryResult;
    }
    set queryResult(value) {
        this._queryResult = value;
    }
    get originalDetectIntentRequest() {
        return this._originalDetectIntentRequest;
    }
    set originalDetectIntentRequest(value) {
        this._originalDetectIntentRequest = value;
    }
    get headers() {
        return this._headers;
    }
    set headers(value) {
        this._headers = value;
    }
    toObject() {
        return {
            session: this.session,
            responseId: this.responseId,
            queryResult: this.queryResult ? this.queryResult.toObject() : undefined,
            originalDetectIntentRequest: this.originalDetectIntentRequest
                ? this.originalDetectIntentRequest.toObject()
                : undefined,
            headers: this.headers ? this.headers.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class WebhookResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param WebhookResponse value
     */
    constructor(value) {
        value = value || {};
        this.fulfillmentText = value.fulfillmentText;
        this.fulfillmentMessages = (value.fulfillmentMessages || []).map(m => new ondewoNlu002.Intent.Message(m));
        this.source = value.source;
        this.payload = value.payload
            ? new googleProtobuf004.Struct(value.payload)
            : undefined;
        this.outputContexts = (value.outputContexts || []).map(m => new ondewoNlu001.Context(m));
        this.followupEventInput = value.followupEventInput
            ? new ondewoNlu003.EventInput(value.followupEventInput)
            : undefined;
        WebhookResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        WebhookResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new WebhookResponse();
        WebhookResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.fulfillmentText = instance.fulfillmentText || '';
        instance.fulfillmentMessages = instance.fulfillmentMessages || [];
        instance.source = instance.source || '';
        instance.payload = instance.payload || undefined;
        instance.outputContexts = instance.outputContexts || [];
        instance.followupEventInput = instance.followupEventInput || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.fulfillmentText = reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new ondewoNlu002.Intent.Message();
                    reader.readMessage(messageInitializer2, ondewoNlu002.Intent.Message.fromBinaryReader);
                    (instance.fulfillmentMessages =
                        instance.fulfillmentMessages || []).push(messageInitializer2);
                    break;
                case 3:
                    instance.source = reader.readString();
                    break;
                case 4:
                    instance.payload = new googleProtobuf004.Struct();
                    reader.readMessage(instance.payload, googleProtobuf004.Struct.fromBinaryReader);
                    break;
                case 5:
                    const messageInitializer5 = new ondewoNlu001.Context();
                    reader.readMessage(messageInitializer5, ondewoNlu001.Context.fromBinaryReader);
                    (instance.outputContexts = instance.outputContexts || []).push(messageInitializer5);
                    break;
                case 6:
                    instance.followupEventInput = new ondewoNlu003.EventInput();
                    reader.readMessage(instance.followupEventInput, ondewoNlu003.EventInput.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        WebhookResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.fulfillmentText) {
            writer.writeString(1, instance.fulfillmentText);
        }
        if (instance.fulfillmentMessages && instance.fulfillmentMessages.length) {
            writer.writeRepeatedMessage(2, instance.fulfillmentMessages, ondewoNlu002.Intent.Message.toBinaryWriter);
        }
        if (instance.source) {
            writer.writeString(3, instance.source);
        }
        if (instance.payload) {
            writer.writeMessage(4, instance.payload, googleProtobuf004.Struct.toBinaryWriter);
        }
        if (instance.outputContexts && instance.outputContexts.length) {
            writer.writeRepeatedMessage(5, instance.outputContexts, ondewoNlu001.Context.toBinaryWriter);
        }
        if (instance.followupEventInput) {
            writer.writeMessage(6, instance.followupEventInput, ondewoNlu003.EventInput.toBinaryWriter);
        }
    }
    get fulfillmentText() {
        return this._fulfillmentText;
    }
    set fulfillmentText(value) {
        this._fulfillmentText = value;
    }
    get fulfillmentMessages() {
        return this._fulfillmentMessages;
    }
    set fulfillmentMessages(value) {
        this._fulfillmentMessages = value;
    }
    get source() {
        return this._source;
    }
    set source(value) {
        this._source = value;
    }
    get payload() {
        return this._payload;
    }
    set payload(value) {
        this._payload = value;
    }
    get outputContexts() {
        return this._outputContexts;
    }
    set outputContexts(value) {
        this._outputContexts = value;
    }
    get followupEventInput() {
        return this._followupEventInput;
    }
    set followupEventInput(value) {
        this._followupEventInput = value;
    }
    toObject() {
        return {
            fulfillmentText: this.fulfillmentText,
            fulfillmentMessages: (this.fulfillmentMessages || []).map(m => m.toObject()),
            source: this.source,
            payload: this.payload ? this.payload.toObject() : undefined,
            outputContexts: (this.outputContexts || []).map(m => m.toObject()),
            followupEventInput: this.followupEventInput
                ? this.followupEventInput.toObject()
                : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class OriginalDetectIntentRequest {
    /**
     * Creates an object and applies default Protobuf values
     * @param OriginalDetectIntentRequest value
     */
    constructor(value) {
        value = value || {};
        this.source = value.source;
        this.payload = value.payload
            ? new googleProtobuf004.Struct(value.payload)
            : undefined;
        OriginalDetectIntentRequest.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        OriginalDetectIntentRequest.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new OriginalDetectIntentRequest();
        OriginalDetectIntentRequest.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.source = instance.source || '';
        instance.payload = instance.payload || undefined;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.source = reader.readString();
                    break;
                case 3:
                    instance.payload = new googleProtobuf004.Struct();
                    reader.readMessage(instance.payload, googleProtobuf004.Struct.fromBinaryReader);
                    break;
                default:
                    reader.skipField();
            }
        }
        OriginalDetectIntentRequest.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.source) {
            writer.writeString(1, instance.source);
        }
        if (instance.payload) {
            writer.writeMessage(3, instance.payload, googleProtobuf004.Struct.toBinaryWriter);
        }
    }
    get source() {
        return this._source;
    }
    set source(value) {
        this._source = value;
    }
    get payload() {
        return this._payload;
    }
    set payload(value) {
        this._payload = value;
    }
    toObject() {
        return {
            source: this.source,
            payload: this.payload ? this.payload.toObject() : undefined
        };
    }
    toJSON() {
        return this.toObject();
    }
}
export class PingResponse {
    /**
     * Creates an object and applies default Protobuf values
     * @param PingResponse value
     */
    constructor(value) {
        value = value || {};
        this.isReachable = value.isReachable;
        PingResponse.refineValues(this);
    }
    static toBinary(instance) {
        const writer = new BinaryWriter();
        PingResponse.toBinaryWriter(instance, writer);
        return writer.getResultBuffer();
    }
    static fromBinary(bytes) {
        const instance = new PingResponse();
        PingResponse.fromBinaryReader(instance, new BinaryReader(bytes));
        return instance;
    }
    static refineValues(instance) {
        instance.isReachable = instance.isReachable || false;
    }
    static fromBinaryReader(instance, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    instance.isReachable = reader.readBool();
                    break;
                default:
                    reader.skipField();
            }
        }
        PingResponse.refineValues(instance);
    }
    static toBinaryWriter(instance, writer) {
        if (instance.isReachable) {
            writer.writeBool(1, instance.isReachable);
        }
    }
    get isReachable() {
        return this._isReachable;
    }
    set isReachable(value) {
        this._isReachable = value;
    }
    toObject() {
        return {
            isReachable: this.isReachable
        };
    }
    toJSON() {
        return this.toObject();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViaG9vay5wYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vbmx1L3dlYmhvb2sucGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RSxPQUFPLEtBQUssWUFBWSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sS0FBSyxZQUFZLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxLQUFLLFlBQVksTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEtBQUssaUJBQWlCLE1BQU0saUNBQWlDLENBQUM7QUFDckUsTUFBTSxPQUFPLFdBQVc7SUF5Q3RCOzs7T0FHRztJQUNILFlBQVksS0FBcUM7UUFDL0MsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzdCLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQWhERCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQXFCO1FBQ25DLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsT0FBTyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBaUI7UUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFB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QUFzQixFQUFFLE1BQW9CO1FBQ2xFLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3pCLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFBRSxNQUFNO1lBRS9CLFFBQVEsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUMvQixLQUFLLENBQUM7b0JBQ0osUUFBUSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3pDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCO1NBQ0Y7UUFFRCxZQUFZLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQXNCLEVBQUUsTUFBb0I7UUFDaEUsSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFhRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQTBCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxRQUFRO1FBQ04sT0FBTztZQUNMLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztTQUM5QixDQUFDO0lBQ0osQ0FBQztJQUNELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7IEdycGNNZXNzYWdlLCBSZWN1cnNpdmVQYXJ0aWFsIH0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciwgQnl0ZVNvdXJjZSB9IGZyb20gJ2dvb2dsZS1wcm90b2J1Zic7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDAgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9hbm5vdGF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDEgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9jb250ZXh0LnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwMiBmcm9tICcuLi8uLi9vbmRld28vbmx1L2ludGVudC5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDMgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9zZXNzaW9uLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA0IGZyb20gJy4uLy4uL2dvb2dsZS9wcm90b2J1Zi9zdHJ1Y3QucGInO1xuZXhwb3J0IGNsYXNzIFBpbmdSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFBpbmdSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFBpbmdSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFBpbmdSZXF1ZXN0KCk7XG4gICAgUGluZ1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFBpbmdSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2Uuc2Vzc2lvbiA9IGluc3RhbmNlLnNlc3Npb24gfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogUGluZ1JlcXVlc3QsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5zZXNzaW9uID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUGluZ1JlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogUGluZ1JlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnNlc3Npb24pIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5zZXNzaW9uKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXNzaW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gUGluZ1JlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxQaW5nUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc2Vzc2lvbiA9IHZhbHVlLnNlc3Npb247XG4gICAgUGluZ1JlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzZXNzaW9uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb247XG4gIH1cbiAgc2V0IHNlc3Npb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nlc3Npb24gPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbjogdGhpcy5zZXNzaW9uXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBQaW5nUmVxdWVzdCB7fVxuZXhwb3J0IGNsYXNzIFdlYmhvb2tSZXF1ZXN0IGltcGxlbWVudHMgR3JwY01lc3NhZ2Uge1xuICBzdGF0aWMgdG9CaW5hcnkoaW5zdGFuY2U6IFdlYmhvb2tSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFdlYmhvb2tSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyKGluc3RhbmNlLCB3cml0ZXIpO1xuICAgIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogQnl0ZVNvdXJjZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFdlYmhvb2tSZXF1ZXN0KCk7XG4gICAgV2ViaG9va1JlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFdlYmhvb2tSZXF1ZXN0KSB7XG4gICAgaW5zdGFuY2Uuc2Vzc2lvbiA9IGluc3RhbmNlLnNlc3Npb24gfHwgJyc7XG4gICAgaW5zdGFuY2UucmVzcG9uc2VJZCA9IGluc3RhbmNlLnJlc3BvbnNlSWQgfHwgJyc7XG4gICAgaW5zdGFuY2UucXVlcnlSZXN1bHQgPSBpbnN0YW5jZS5xdWVyeVJlc3VsdCB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2Uub3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0ID1cbiAgICAgIGluc3RhbmNlLm9yaWdpbmFsRGV0ZWN0SW50ZW50UmVxdWVzdCB8fCB1bmRlZmluZWQ7XG4gICAgaW5zdGFuY2UuaGVhZGVycyA9IGluc3RhbmNlLmhlYWRlcnMgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnlSZWFkZXIoaW5zdGFuY2U6IFdlYmhvb2tSZXF1ZXN0LCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2Uuc2Vzc2lvbiA9IHJlYWRlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5yZXNwb25zZUlkID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGluc3RhbmNlLnF1ZXJ5UmVzdWx0ID0gbmV3IG9uZGV3b05sdTAwMy5RdWVyeVJlc3VsdCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLnF1ZXJ5UmVzdWx0LFxuICAgICAgICAgICAgb25kZXdvTmx1MDAzLlF1ZXJ5UmVzdWx0LmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaW5zdGFuY2Uub3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0ID0gbmV3IE9yaWdpbmFsRGV0ZWN0SW50ZW50UmVxdWVzdCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIGluc3RhbmNlLm9yaWdpbmFsRGV0ZWN0SW50ZW50UmVxdWVzdCxcbiAgICAgICAgICAgIE9yaWdpbmFsRGV0ZWN0SW50ZW50UmVxdWVzdC5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGluc3RhbmNlLmhlYWRlcnMgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UuaGVhZGVycyxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDA0LlN0cnVjdC5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgV2ViaG9va1JlcXVlc3QucmVmaW5lVmFsdWVzKGluc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyB0b0JpbmFyeVdyaXRlcihpbnN0YW5jZTogV2ViaG9va1JlcXVlc3QsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLnNlc3Npb24pIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZyg0LCBpbnN0YW5jZS5zZXNzaW9uKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnJlc3BvbnNlSWQpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygxLCBpbnN0YW5jZS5yZXNwb25zZUlkKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnF1ZXJ5UmVzdWx0KSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBpbnN0YW5jZS5xdWVyeVJlc3VsdCBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAwMy5RdWVyeVJlc3VsdC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm9yaWdpbmFsRGV0ZWN0SW50ZW50UmVxdWVzdCkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgaW5zdGFuY2Uub3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0IGFzIGFueSxcbiAgICAgICAgT3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuaGVhZGVycykge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgaW5zdGFuY2UuaGVhZGVycyBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDA0LlN0cnVjdC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXNzaW9uPzogc3RyaW5nO1xuICBwcml2YXRlIF9yZXNwb25zZUlkPzogc3RyaW5nO1xuICBwcml2YXRlIF9xdWVyeVJlc3VsdD86IG9uZGV3b05sdTAwMy5RdWVyeVJlc3VsdDtcbiAgcHJpdmF0ZSBfb3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0PzogT3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0O1xuICBwcml2YXRlIF9oZWFkZXJzPzogZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gV2ViaG9va1JlcXVlc3QgdmFsdWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogUmVjdXJzaXZlUGFydGlhbDxXZWJob29rUmVxdWVzdD4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuc2Vzc2lvbiA9IHZhbHVlLnNlc3Npb247XG4gICAgdGhpcy5yZXNwb25zZUlkID0gdmFsdWUucmVzcG9uc2VJZDtcbiAgICB0aGlzLnF1ZXJ5UmVzdWx0ID0gdmFsdWUucXVlcnlSZXN1bHRcbiAgICAgID8gbmV3IG9uZGV3b05sdTAwMy5RdWVyeVJlc3VsdCh2YWx1ZS5xdWVyeVJlc3VsdClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMub3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0ID0gdmFsdWUub3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0XG4gICAgICA/IG5ldyBPcmlnaW5hbERldGVjdEludGVudFJlcXVlc3QodmFsdWUub3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWFkZXJzID0gdmFsdWUuaGVhZGVyc1xuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0KHZhbHVlLmhlYWRlcnMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBXZWJob29rUmVxdWVzdC5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IHNlc3Npb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbjtcbiAgfVxuICBzZXQgc2Vzc2lvbih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2Vzc2lvbiA9IHZhbHVlO1xuICB9XG4gIGdldCByZXNwb25zZUlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlSWQ7XG4gIH1cbiAgc2V0IHJlc3BvbnNlSWQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Jlc3BvbnNlSWQgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcXVlcnlSZXN1bHQoKTogb25kZXdvTmx1MDAzLlF1ZXJ5UmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlSZXN1bHQ7XG4gIH1cbiAgc2V0IHF1ZXJ5UmVzdWx0KHZhbHVlOiBvbmRld29ObHUwMDMuUXVlcnlSZXN1bHQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9xdWVyeVJlc3VsdCA9IHZhbHVlO1xuICB9XG4gIGdldCBvcmlnaW5hbERldGVjdEludGVudFJlcXVlc3QoKTogT3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0O1xuICB9XG4gIHNldCBvcmlnaW5hbERldGVjdEludGVudFJlcXVlc3QoXG4gICAgdmFsdWU6IE9yaWdpbmFsRGV0ZWN0SW50ZW50UmVxdWVzdCB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aGlzLl9vcmlnaW5hbERldGVjdEludGVudFJlcXVlc3QgPSB2YWx1ZTtcbiAgfVxuICBnZXQgaGVhZGVycygpOiBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJzO1xuICB9XG4gIHNldCBoZWFkZXJzKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3QgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9oZWFkZXJzID0gdmFsdWU7XG4gIH1cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlc3Npb246IHRoaXMuc2Vzc2lvbixcbiAgICAgIHJlc3BvbnNlSWQ6IHRoaXMucmVzcG9uc2VJZCxcbiAgICAgIHF1ZXJ5UmVzdWx0OiB0aGlzLnF1ZXJ5UmVzdWx0ID8gdGhpcy5xdWVyeVJlc3VsdC50b09iamVjdCgpIDogdW5kZWZpbmVkLFxuICAgICAgb3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0OiB0aGlzLm9yaWdpbmFsRGV0ZWN0SW50ZW50UmVxdWVzdFxuICAgICAgICA/IHRoaXMub3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0LnRvT2JqZWN0KClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgPyB0aGlzLmhlYWRlcnMudG9PYmplY3QoKSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvT2JqZWN0KCk7XG4gIH1cbn1cbmV4cG9ydCBtb2R1bGUgV2ViaG9va1JlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBXZWJob29rUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogV2ViaG9va1Jlc3BvbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFdlYmhvb2tSZXNwb25zZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBXZWJob29rUmVzcG9uc2UoKTtcbiAgICBXZWJob29rUmVzcG9uc2UuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFdlYmhvb2tSZXNwb25zZSkge1xuICAgIGluc3RhbmNlLmZ1bGZpbGxtZW50VGV4dCA9IGluc3RhbmNlLmZ1bGZpbGxtZW50VGV4dCB8fCAnJztcbiAgICBpbnN0YW5jZS5mdWxmaWxsbWVudE1lc3NhZ2VzID0gaW5zdGFuY2UuZnVsZmlsbG1lbnRNZXNzYWdlcyB8fCBbXTtcbiAgICBpbnN0YW5jZS5zb3VyY2UgPSBpbnN0YW5jZS5zb3VyY2UgfHwgJyc7XG4gICAgaW5zdGFuY2UucGF5bG9hZCA9IGluc3RhbmNlLnBheWxvYWQgfHwgdW5kZWZpbmVkO1xuICAgIGluc3RhbmNlLm91dHB1dENvbnRleHRzID0gaW5zdGFuY2Uub3V0cHV0Q29udGV4dHMgfHwgW107XG4gICAgaW5zdGFuY2UuZm9sbG93dXBFdmVudElucHV0ID0gaW5zdGFuY2UuZm9sbG93dXBFdmVudElucHV0IHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmluYXJ5UmVhZGVyKGluc3RhbmNlOiBXZWJob29rUmVzcG9uc2UsIHJlYWRlcjogQmluYXJ5UmVhZGVyKSB7XG4gICAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIGJyZWFrO1xuXG4gICAgICBzd2l0Y2ggKHJlYWRlci5nZXRGaWVsZE51bWJlcigpKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpbnN0YW5jZS5mdWxmaWxsbWVudFRleHQgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyMiA9IG5ldyBvbmRld29ObHUwMDIuSW50ZW50Lk1lc3NhZ2UoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlSW5pdGlhbGl6ZXIyLFxuICAgICAgICAgICAgb25kZXdvTmx1MDAyLkludGVudC5NZXNzYWdlLmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIChpbnN0YW5jZS5mdWxmaWxsbWVudE1lc3NhZ2VzID1cbiAgICAgICAgICAgIGluc3RhbmNlLmZ1bGZpbGxtZW50TWVzc2FnZXMgfHwgW10pLnB1c2gobWVzc2FnZUluaXRpYWxpemVyMik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBpbnN0YW5jZS5zb3VyY2UgPSByZWFkZXIucmVhZFN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaW5zdGFuY2UucGF5bG9hZCA9IG5ldyBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3QoKTtcbiAgICAgICAgICByZWFkZXIucmVhZE1lc3NhZ2UoXG4gICAgICAgICAgICBpbnN0YW5jZS5wYXlsb2FkLFxuICAgICAgICAgICAgZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0LmZyb21CaW5hcnlSZWFkZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgY29uc3QgbWVzc2FnZUluaXRpYWxpemVyNSA9IG5ldyBvbmRld29ObHUwMDEuQ29udGV4dCgpO1xuICAgICAgICAgIHJlYWRlci5yZWFkTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjUsXG4gICAgICAgICAgICBvbmRld29ObHUwMDEuQ29udGV4dC5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICAoaW5zdGFuY2Uub3V0cHV0Q29udGV4dHMgPSBpbnN0YW5jZS5vdXRwdXRDb250ZXh0cyB8fCBbXSkucHVzaChcbiAgICAgICAgICAgIG1lc3NhZ2VJbml0aWFsaXplcjVcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgaW5zdGFuY2UuZm9sbG93dXBFdmVudElucHV0ID0gbmV3IG9uZGV3b05sdTAwMy5FdmVudElucHV0KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UuZm9sbG93dXBFdmVudElucHV0LFxuICAgICAgICAgICAgb25kZXdvTmx1MDAzLkV2ZW50SW5wdXQuZnJvbUJpbmFyeVJlYWRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFdlYmhvb2tSZXNwb25zZS5yZWZpbmVWYWx1ZXMoaW5zdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIHRvQmluYXJ5V3JpdGVyKGluc3RhbmNlOiBXZWJob29rUmVzcG9uc2UsIHdyaXRlcjogQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKGluc3RhbmNlLmZ1bGZpbGxtZW50VGV4dCkge1xuICAgICAgd3JpdGVyLndyaXRlU3RyaW5nKDEsIGluc3RhbmNlLmZ1bGZpbGxtZW50VGV4dCk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5mdWxmaWxsbWVudE1lc3NhZ2VzICYmIGluc3RhbmNlLmZ1bGZpbGxtZW50TWVzc2FnZXMubGVuZ3RoKSB7XG4gICAgICB3cml0ZXIud3JpdGVSZXBlYXRlZE1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIGluc3RhbmNlLmZ1bGZpbGxtZW50TWVzc2FnZXMgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDIuSW50ZW50Lk1lc3NhZ2UudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZS5zb3VyY2UpIHtcbiAgICAgIHdyaXRlci53cml0ZVN0cmluZygzLCBpbnN0YW5jZS5zb3VyY2UpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UucGF5bG9hZCkge1xuICAgICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgICAgNCxcbiAgICAgICAgaW5zdGFuY2UucGF5bG9hZCBhcyBhbnksXG4gICAgICAgIGdvb2dsZVByb3RvYnVmMDA0LlN0cnVjdC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLm91dHB1dENvbnRleHRzICYmIGluc3RhbmNlLm91dHB1dENvbnRleHRzLmxlbmd0aCkge1xuICAgICAgd3JpdGVyLndyaXRlUmVwZWF0ZWRNZXNzYWdlKFxuICAgICAgICA1LFxuICAgICAgICBpbnN0YW5jZS5vdXRwdXRDb250ZXh0cyBhcyBhbnksXG4gICAgICAgIG9uZGV3b05sdTAwMS5Db250ZXh0LnRvQmluYXJ5V3JpdGVyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZm9sbG93dXBFdmVudElucHV0KSB7XG4gICAgICB3cml0ZXIud3JpdGVNZXNzYWdlKFxuICAgICAgICA2LFxuICAgICAgICBpbnN0YW5jZS5mb2xsb3d1cEV2ZW50SW5wdXQgYXMgYW55LFxuICAgICAgICBvbmRld29ObHUwMDMuRXZlbnRJbnB1dC50b0JpbmFyeVdyaXRlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9mdWxmaWxsbWVudFRleHQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2Z1bGZpbGxtZW50TWVzc2FnZXM/OiBvbmRld29ObHUwMDIuSW50ZW50Lk1lc3NhZ2VbXTtcbiAgcHJpdmF0ZSBfc291cmNlPzogc3RyaW5nO1xuICBwcml2YXRlIF9wYXlsb2FkPzogZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0O1xuICBwcml2YXRlIF9vdXRwdXRDb250ZXh0cz86IG9uZGV3b05sdTAwMS5Db250ZXh0W107XG4gIHByaXZhdGUgX2ZvbGxvd3VwRXZlbnRJbnB1dD86IG9uZGV3b05sdTAwMy5FdmVudElucHV0O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gV2ViaG9va1Jlc3BvbnNlIHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8V2ViaG9va1Jlc3BvbnNlPikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5mdWxmaWxsbWVudFRleHQgPSB2YWx1ZS5mdWxmaWxsbWVudFRleHQ7XG4gICAgdGhpcy5mdWxmaWxsbWVudE1lc3NhZ2VzID0gKHZhbHVlLmZ1bGZpbGxtZW50TWVzc2FnZXMgfHwgW10pLm1hcChcbiAgICAgIG0gPT4gbmV3IG9uZGV3b05sdTAwMi5JbnRlbnQuTWVzc2FnZShtKVxuICAgICk7XG4gICAgdGhpcy5zb3VyY2UgPSB2YWx1ZS5zb3VyY2U7XG4gICAgdGhpcy5wYXlsb2FkID0gdmFsdWUucGF5bG9hZFxuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0KHZhbHVlLnBheWxvYWQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm91dHB1dENvbnRleHRzID0gKHZhbHVlLm91dHB1dENvbnRleHRzIHx8IFtdKS5tYXAoXG4gICAgICBtID0+IG5ldyBvbmRld29ObHUwMDEuQ29udGV4dChtKVxuICAgICk7XG4gICAgdGhpcy5mb2xsb3d1cEV2ZW50SW5wdXQgPSB2YWx1ZS5mb2xsb3d1cEV2ZW50SW5wdXRcbiAgICAgID8gbmV3IG9uZGV3b05sdTAwMy5FdmVudElucHV0KHZhbHVlLmZvbGxvd3VwRXZlbnRJbnB1dClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIFdlYmhvb2tSZXNwb25zZS5yZWZpbmVWYWx1ZXModGhpcyk7XG4gIH1cbiAgZ2V0IGZ1bGZpbGxtZW50VGV4dCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mdWxmaWxsbWVudFRleHQ7XG4gIH1cbiAgc2V0IGZ1bGZpbGxtZW50VGV4dCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fZnVsZmlsbG1lbnRUZXh0ID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGZ1bGZpbGxtZW50TWVzc2FnZXMoKTogb25kZXdvTmx1MDAyLkludGVudC5NZXNzYWdlW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mdWxmaWxsbWVudE1lc3NhZ2VzO1xuICB9XG4gIHNldCBmdWxmaWxsbWVudE1lc3NhZ2VzKHZhbHVlOiBvbmRld29ObHUwMDIuSW50ZW50Lk1lc3NhZ2VbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2Z1bGZpbGxtZW50TWVzc2FnZXMgPSB2YWx1ZTtcbiAgfVxuICBnZXQgc291cmNlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZTtcbiAgfVxuICBzZXQgc291cmNlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zb3VyY2UgPSB2YWx1ZTtcbiAgfVxuICBnZXQgcGF5bG9hZCgpOiBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYXlsb2FkO1xuICB9XG4gIHNldCBwYXlsb2FkKHZhbHVlOiBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3QgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9wYXlsb2FkID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG91dHB1dENvbnRleHRzKCk6IG9uZGV3b05sdTAwMS5Db250ZXh0W10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXRDb250ZXh0cztcbiAgfVxuICBzZXQgb3V0cHV0Q29udGV4dHModmFsdWU6IG9uZGV3b05sdTAwMS5Db250ZXh0W10gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9vdXRwdXRDb250ZXh0cyA9IHZhbHVlO1xuICB9XG4gIGdldCBmb2xsb3d1cEV2ZW50SW5wdXQoKTogb25kZXdvTmx1MDAzLkV2ZW50SW5wdXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9mb2xsb3d1cEV2ZW50SW5wdXQ7XG4gIH1cbiAgc2V0IGZvbGxvd3VwRXZlbnRJbnB1dCh2YWx1ZTogb25kZXdvTmx1MDAzLkV2ZW50SW5wdXQgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9mb2xsb3d1cEV2ZW50SW5wdXQgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZnVsZmlsbG1lbnRUZXh0OiB0aGlzLmZ1bGZpbGxtZW50VGV4dCxcbiAgICAgIGZ1bGZpbGxtZW50TWVzc2FnZXM6ICh0aGlzLmZ1bGZpbGxtZW50TWVzc2FnZXMgfHwgW10pLm1hcChtID0+XG4gICAgICAgIG0udG9PYmplY3QoKVxuICAgICAgKSxcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICBwYXlsb2FkOiB0aGlzLnBheWxvYWQgPyB0aGlzLnBheWxvYWQudG9PYmplY3QoKSA6IHVuZGVmaW5lZCxcbiAgICAgIG91dHB1dENvbnRleHRzOiAodGhpcy5vdXRwdXRDb250ZXh0cyB8fCBbXSkubWFwKG0gPT4gbS50b09iamVjdCgpKSxcbiAgICAgIGZvbGxvd3VwRXZlbnRJbnB1dDogdGhpcy5mb2xsb3d1cEV2ZW50SW5wdXRcbiAgICAgICAgPyB0aGlzLmZvbGxvd3VwRXZlbnRJbnB1dC50b09iamVjdCgpXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBXZWJob29rUmVzcG9uc2Uge31cbmV4cG9ydCBjbGFzcyBPcmlnaW5hbERldGVjdEludGVudFJlcXVlc3QgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogT3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0KSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIE9yaWdpbmFsRGV0ZWN0SW50ZW50UmVxdWVzdC50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBPcmlnaW5hbERldGVjdEludGVudFJlcXVlc3QoKTtcbiAgICBPcmlnaW5hbERldGVjdEludGVudFJlcXVlc3QuZnJvbUJpbmFyeVJlYWRlcihcbiAgICAgIGluc3RhbmNlLFxuICAgICAgbmV3IEJpbmFyeVJlYWRlcihieXRlcylcbiAgICApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IE9yaWdpbmFsRGV0ZWN0SW50ZW50UmVxdWVzdCkge1xuICAgIGluc3RhbmNlLnNvdXJjZSA9IGluc3RhbmNlLnNvdXJjZSB8fCAnJztcbiAgICBpbnN0YW5jZS5wYXlsb2FkID0gaW5zdGFuY2UucGF5bG9hZCB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihcbiAgICBpbnN0YW5jZTogT3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0LFxuICAgIHJlYWRlcjogQmluYXJ5UmVhZGVyXG4gICkge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2Uuc291cmNlID0gcmVhZGVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGluc3RhbmNlLnBheWxvYWQgPSBuZXcgZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0KCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKFxuICAgICAgICAgICAgaW5zdGFuY2UucGF5bG9hZCxcbiAgICAgICAgICAgIGdvb2dsZVByb3RvYnVmMDA0LlN0cnVjdC5mcm9tQmluYXJ5UmVhZGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0LnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoXG4gICAgaW5zdGFuY2U6IE9yaWdpbmFsRGV0ZWN0SW50ZW50UmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlclxuICApIHtcbiAgICBpZiAoaW5zdGFuY2Uuc291cmNlKSB7XG4gICAgICB3cml0ZXIud3JpdGVTdHJpbmcoMSwgaW5zdGFuY2Uuc291cmNlKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnBheWxvYWQpIHtcbiAgICAgIHdyaXRlci53cml0ZU1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIGluc3RhbmNlLnBheWxvYWQgYXMgYW55LFxuICAgICAgICBnb29nbGVQcm90b2J1ZjAwNC5TdHJ1Y3QudG9CaW5hcnlXcml0ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc291cmNlPzogc3RyaW5nO1xuICBwcml2YXRlIF9wYXlsb2FkPzogZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCBhbmQgYXBwbGllcyBkZWZhdWx0IFByb3RvYnVmIHZhbHVlc1xuICAgKiBAcGFyYW0gT3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFJlY3Vyc2l2ZVBhcnRpYWw8T3JpZ2luYWxEZXRlY3RJbnRlbnRSZXF1ZXN0Pikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwge307XG4gICAgdGhpcy5zb3VyY2UgPSB2YWx1ZS5zb3VyY2U7XG4gICAgdGhpcy5wYXlsb2FkID0gdmFsdWUucGF5bG9hZFxuICAgICAgPyBuZXcgZ29vZ2xlUHJvdG9idWYwMDQuU3RydWN0KHZhbHVlLnBheWxvYWQpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBPcmlnaW5hbERldGVjdEludGVudFJlcXVlc3QucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBzb3VyY2UoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlO1xuICB9XG4gIHNldCBzb3VyY2UodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NvdXJjZSA9IHZhbHVlO1xuICB9XG4gIGdldCBwYXlsb2FkKCk6IGdvb2dsZVByb3RvYnVmMDA0LlN0cnVjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BheWxvYWQ7XG4gIH1cbiAgc2V0IHBheWxvYWQodmFsdWU6IGdvb2dsZVByb3RvYnVmMDA0LlN0cnVjdCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BheWxvYWQgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIHBheWxvYWQ6IHRoaXMucGF5bG9hZCA/IHRoaXMucGF5bG9hZC50b09iamVjdCgpIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9PYmplY3QoKTtcbiAgfVxufVxuZXhwb3J0IG1vZHVsZSBPcmlnaW5hbERldGVjdEludGVudFJlcXVlc3Qge31cbmV4cG9ydCBjbGFzcyBQaW5nUmVzcG9uc2UgaW1wbGVtZW50cyBHcnBjTWVzc2FnZSB7XG4gIHN0YXRpYyB0b0JpbmFyeShpbnN0YW5jZTogUGluZ1Jlc3BvbnNlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IEJpbmFyeVdyaXRlcigpO1xuICAgIFBpbmdSZXNwb25zZS50b0JpbmFyeVdyaXRlcihpbnN0YW5jZSwgd3JpdGVyKTtcbiAgICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IEJ5dGVTb3VyY2UpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBQaW5nUmVzcG9uc2UoKTtcbiAgICBQaW5nUmVzcG9uc2UuZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZSwgbmV3IEJpbmFyeVJlYWRlcihieXRlcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIHN0YXRpYyByZWZpbmVWYWx1ZXMoaW5zdGFuY2U6IFBpbmdSZXNwb25zZSkge1xuICAgIGluc3RhbmNlLmlzUmVhY2hhYmxlID0gaW5zdGFuY2UuaXNSZWFjaGFibGUgfHwgZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJpbmFyeVJlYWRlcihpbnN0YW5jZTogUGluZ1Jlc3BvbnNlLCByZWFkZXI6IEJpbmFyeVJlYWRlcikge1xuICAgIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSBicmVhaztcblxuICAgICAgc3dpdGNoIChyZWFkZXIuZ2V0RmllbGROdW1iZXIoKSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaW5zdGFuY2UuaXNSZWFjaGFibGUgPSByZWFkZXIucmVhZEJvb2woKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUGluZ1Jlc3BvbnNlLnJlZmluZVZhbHVlcyhpbnN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgdG9CaW5hcnlXcml0ZXIoaW5zdGFuY2U6IFBpbmdSZXNwb25zZSwgd3JpdGVyOiBCaW5hcnlXcml0ZXIpIHtcbiAgICBpZiAoaW5zdGFuY2UuaXNSZWFjaGFibGUpIHtcbiAgICAgIHdyaXRlci53cml0ZUJvb2woMSwgaW5zdGFuY2UuaXNSZWFjaGFibGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzUmVhY2hhYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgYW5kIGFwcGxpZXMgZGVmYXVsdCBQcm90b2J1ZiB2YWx1ZXNcbiAgICogQHBhcmFtIFBpbmdSZXNwb25zZSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU/OiBSZWN1cnNpdmVQYXJ0aWFsPFBpbmdSZXNwb25zZT4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHt9O1xuICAgIHRoaXMuaXNSZWFjaGFibGUgPSB2YWx1ZS5pc1JlYWNoYWJsZTtcbiAgICBQaW5nUmVzcG9uc2UucmVmaW5lVmFsdWVzKHRoaXMpO1xuICB9XG4gIGdldCBpc1JlYWNoYWJsZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5faXNSZWFjaGFibGU7XG4gIH1cbiAgc2V0IGlzUmVhY2hhYmxlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faXNSZWFjaGFibGUgPSB2YWx1ZTtcbiAgfVxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNSZWFjaGFibGU6IHRoaXMuaXNSZWFjaGFibGVcbiAgICB9O1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b09iamVjdCgpO1xuICB9XG59XG5leHBvcnQgbW9kdWxlIFBpbmdSZXNwb25zZSB7fVxuIl19