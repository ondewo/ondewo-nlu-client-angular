import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { FieldMask } from "../../google/protobuf/field_mask";
import { Timestamp } from "../../google/protobuf/timestamp";
/**
 * statistic response
 *
 * @generated from protobuf message ondewo.nlu.StatResponse
 */
export interface StatResponse {
    /**
     * Response wrapper for the "Get<Stat>" endpoints
     *
     * @generated from protobuf field: uint32 value = 1;
     */
    value: number;
}
/**
 * Comment message
 *
 * @generated from protobuf message ondewo.nlu.Comment
 */
export interface Comment {
    /**
     * resource name of the comment
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * text of the comment
     *
     * @generated from protobuf field: string text = 2;
     */
    text: string;
    /**
     * User id as resource name
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/users/&lt;user_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string user_id = 3;
     */
    userId: string;
    /**
     * name of the resource for which the comment is about
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/&lt;resource_type&gt;/&lt;resource_uuid&gt;/.../</code></pre>
     *
     * @generated from protobuf field: string comment_about_name = 4;
     */
    commentAboutName: string;
    /**
     * The resource name of the parent comment. A parent comment is a reply to a certain comment.
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/&lt;resource_type&gt;/&lt;resource_uuid&gt;/.../</code></pre>
     *
     * @generated from protobuf field: string parent_comment_name = 5;
     */
    parentCommentName: string;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 7;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 8;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 9;
     */
    modifiedBy: string;
}
/**
 * Notification message
 *
 * @generated from protobuf message ondewo.nlu.Notification
 */
export interface Notification {
    /**
     * resource name of the notification
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * User id as resource name
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/users/&lt;user_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string user_name = 2;
     */
    userName: string;
    /**
     * User id as resource name
     * Format: <pre><code>projects/&lt;project_uuid&gt;/agent/users/&lt;user_uuid&gt;</code></pre>
     *
     * @generated from protobuf field: string title = 3;
     */
    title: string;
    /**
     * A short notification text is displayed directly with max. 50 chars which is a truncated version of the long message
     *
     * @generated from protobuf field: string description_short = 4;
     */
    descriptionShort: string;
    /**
     * A long notification text
     *
     * @generated from protobuf field: string description_long = 5;
     */
    descriptionLong: string;
    /**
     * Has a notification been flagged by a specific user
     *
     * @generated from protobuf field: ondewo.nlu.NotificationFlaggedStatus notification_flagged_status = 6;
     */
    notificationFlaggedStatus: NotificationFlaggedStatus;
    /**
     * When the user marked the notification as read
     *
     * @generated from protobuf field: google.protobuf.Timestamp notification_flagged_timestamp = 7;
     */
    notificationFlaggedTimestamp?: Timestamp;
    /**
     * Has a notification been read by a specific user
     *
     * @generated from protobuf field: ondewo.nlu.NotificationReadStatus notification_read_status = 8;
     */
    notificationReadStatus: NotificationReadStatus;
    /**
     * When the user marked the notification as read, i.e. read the notification
     *
     * @generated from protobuf field: google.protobuf.Timestamp notification_read_timestamp = 9;
     */
    notificationReadTimestamp?: Timestamp;
    /**
     * The origin of a notification
     * A Notification origin can be from a product (service), e.g. ondewo-nlu, ondewo-s2t, ondewo-t2s, etc.
     *
     * @generated from protobuf field: ondewo.nlu.NotificationOrigin notification_origin = 10;
     */
    notificationOrigin: NotificationOrigin;
    /**
     * The name of resource of where the notification originated
     *
     * @generated from protobuf field: string origin_name = 11;
     */
    originName: string;
    /**
     * language of the origin resource e.g. language of the nlu agent or language of the speech-to-text service
     *
     * @generated from protobuf field: string origin_language = 12;
     */
    originLanguage: string;
    /**
     * The type of notification
     *
     * @generated from protobuf field: ondewo.nlu.NotificationType notification_type = 13;
     */
    notificationType: NotificationType;
    /**
     * The visibility level of the notification
     *
     * @generated from protobuf field: ondewo.nlu.NotificationVisibility notification_visibility = 14;
     */
    notificationVisibility: NotificationVisibility;
    /**
     * Creation date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 15;
     */
    createdAt?: Timestamp;
    /**
     * Modification date and time. Read-only field.
     *
     * @generated from protobuf field: google.protobuf.Timestamp modified_at = 16;
     */
    modifiedAt?: Timestamp;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string created_by = 17;
     */
    createdBy: string;
    /**
     * User id in form of a valid UUID.
     *
     * @generated from protobuf field: string modified_by = 18;
     */
    modifiedBy: string;
}
/**
 * Message for adding notifications in a batch.
 *
 * @generated from protobuf message ondewo.nlu.AddNotificationsRequest
 */
export interface AddNotificationsRequest {
    /**
     * List of notifications to be added.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Notification notifications = 1;
     */
    notifications: Notification[];
}
/**
 * Message containing the response to adding notifications.
 *
 * @generated from protobuf message ondewo.nlu.AddNotificationsResponse
 */
export interface AddNotificationsResponse {
    /**
     * List of notifications that have been added.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Notification notifications = 1;
     */
    notifications: Notification[];
}
/**
 * Message for filtering notifications based on various criteria.
 *
 * @generated from protobuf message ondewo.nlu.NotificationFilter
 */
export interface NotificationFilter {
    /**
     * Language codes of the projects for which notifications are filtered.
     *
     * @generated from protobuf field: repeated string language_codes = 1;
     */
    languageCodes: string[];
    /**
     * Origins of the notifications to filter.
     *
     * @generated from protobuf field: repeated ondewo.nlu.NotificationOrigin notification_origins = 2;
     */
    notificationOrigins: NotificationOrigin[];
    /**
     * Visibilities of the notifications to filter.
     *
     * @generated from protobuf field: repeated ondewo.nlu.NotificationVisibility notification_visibilities = 3;
     */
    notificationVisibilities: NotificationVisibility[];
    /**
     * Flagged status of the notifications to filter.
     *
     * @generated from protobuf field: repeated ondewo.nlu.NotificationFlaggedStatus notification_flagged_status = 4;
     */
    notificationFlaggedStatus: NotificationFlaggedStatus[];
    /**
     * Read status of the notifications to filter.
     *
     * @generated from protobuf field: repeated ondewo.nlu.NotificationReadStatus notification_read_status = 5;
     */
    notificationReadStatus: NotificationReadStatus[];
    /**
     * Filter notifications with a time range starting from the specified earliest time.
     *
     * @generated from protobuf field: google.protobuf.Timestamp earliest = 6;
     */
    earliest?: Timestamp;
    /**
     * Filter notifications with a time range ending at the specified latest time.
     *
     * @generated from protobuf field: google.protobuf.Timestamp latest = 7;
     */
    latest?: Timestamp;
    /**
     * Resource names of users to filter notifications for.
     *
     * @generated from protobuf field: repeated string user_names = 8;
     */
    userNames: string[];
    /**
     * Resource names of the origin of the notification to filter notifications.
     *
     * @generated from protobuf field: repeated string origin_names = 9;
     */
    originNames: string[];
}
/**
 * Message for listing notifications based on certain criteria.
 *
 * @generated from protobuf message ondewo.nlu.ListNotificationsRequest
 */
export interface ListNotificationsRequest {
    /**
     * Optional filter to narrow the response down to specific notifications.
     *
     * @generated from protobuf field: ondewo.nlu.NotificationFilter notification_filter = 1;
     */
    notificationFilter?: NotificationFilter;
    /**
     * Optional. Token for pagination, obtained from a previous list request.
     * The page token to support pagination.
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
     * @generated from protobuf field: string page_token = 2;
     */
    pageToken: string;
    /**
     * Optional. Mask to control which fields will be filled with data.
     * Example: path=["notification.user_names"]
     *
     * @generated from protobuf field: google.protobuf.FieldMask field_mask = 3;
     */
    fieldMask?: FieldMask;
}
/**
 * Message containing the response to a list request for notifications.
 *
 * @generated from protobuf message ondewo.nlu.ListNotificationsResponse
 */
export interface ListNotificationsResponse {
    /**
     * List of notifications that meet the specified criteria.
     *
     * @generated from protobuf field: repeated ondewo.nlu.Notification notifications = 1;
     */
    notifications: Notification[];
}
/**
 * Message for setting the flagged status of notifications.
 *
 * @generated from protobuf message ondewo.nlu.SetNotificationsFlaggedStatusRequest
 */
export interface SetNotificationsFlaggedStatusRequest {
    /**
     * Names of notifications to set the flagged status for.
     *
     * @generated from protobuf field: repeated string notification_names = 1;
     */
    notificationNames: string[];
    /**
     * Flagged status to set for the specified notifications.
     *
     * @generated from protobuf field: repeated bool flagged = 2;
     */
    flagged: boolean[];
}
/**
 * Message for setting the read status of notifications.
 *
 * @generated from protobuf message ondewo.nlu.SetNotificationsReadStatusRequest
 */
export interface SetNotificationsReadStatusRequest {
    /**
     * Names of notifications to set the read status for.
     *
     * @generated from protobuf field: repeated string notification_names = 1;
     */
    notificationNames: string[];
    /**
     * Read status to set for the specified notifications.
     *
     * @generated from protobuf field: repeated bool flagged = 2;
     */
    flagged: boolean[];
}
/**
 * Key-Value pair message, where the value can be one of various types (int, float, double, string, etc.).
 *
 * @generated from protobuf message ondewo.nlu.KeyValuePair
 */
export interface KeyValuePair {
    /**
     * The key of the key-value pair.
     *
     * @generated from protobuf field: string key = 1;
     */
    key: string;
    /**
     * @generated from protobuf oneof: value
     */
    value: {
        oneofKind: "intValue";
        /**
         * The integer value (if applicable).
         *
         * @generated from protobuf field: int32 int_value = 2;
         */
        intValue: number;
    } | {
        oneofKind: "floatValue";
        /**
         * The float value (if applicable).
         *
         * @generated from protobuf field: float float_value = 3;
         */
        floatValue: number;
    } | {
        oneofKind: "doubleValue";
        /**
         * The double value (if applicable).
         *
         * @generated from protobuf field: double double_value = 4;
         */
        doubleValue: number;
    } | {
        oneofKind: "stringValue";
        /**
         * The string value (if applicable).
         *
         * @generated from protobuf field: string string_value = 5;
         */
        stringValue: string;
    } | {
        oneofKind: "createdAt";
        /**
         * The timestamp value (if applicable).
         *
         * @generated from protobuf field: google.protobuf.Timestamp created_at = 6;
         */
        createdAt: Timestamp;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Sorting mode
 *
 * @generated from protobuf enum ondewo.nlu.SortingMode
 */
export declare enum SortingMode {
    /**
     * ascending sorting
     *
     * @generated from protobuf enum value: ASCENDING = 0;
     */
    ASCENDING = 0,
    /**
     * descending sorting
     *
     * @generated from protobuf enum value: DESCENDING = 1;
     */
    DESCENDING = 1
}
/**
 * Enumerates the possible flagged statuses for a notification.
 *
 * @generated from protobuf enum ondewo.nlu.NotificationFlaggedStatus
 */
export declare enum NotificationFlaggedStatus {
    /**
     * Unspecified flagged status
     *
     * @generated from protobuf enum value: NOTIFICATION_FLAGGED_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Notification is flagged
     *
     * @generated from protobuf enum value: NOTIFICATION_FLAGGED_STATUS_FLAGGED = 1;
     */
    FLAGGED = 1,
    /**
     * Notification is unflagged
     *
     * @generated from protobuf enum value: NOTIFICATION_FLAGGED_STATUS_UNFLAGGED = 2;
     */
    UNFLAGGED = 2
}
/**
 * Enumerates the possible read statuses for a notification.
 *
 * @generated from protobuf enum ondewo.nlu.NotificationReadStatus
 */
export declare enum NotificationReadStatus {
    /**
     * Unspecified read status
     *
     * @generated from protobuf enum value: NOTIFICATION_READ_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Notification is marked as read
     *
     * @generated from protobuf enum value: NOTIFICATION_READ_STATUS_READ = 1;
     */
    READ = 1,
    /**
     * Notification is marked as unread
     *
     * @generated from protobuf enum value: NOTIFICATION_READ_STATUS_UNREAD = 2;
     */
    UNREAD = 2
}
/**
 * Enum for notification type
 *
 * @generated from protobuf enum ondewo.nlu.NotificationVisibility
 */
export declare enum NotificationVisibility {
    /**
     * unspecified
     *
     * @generated from protobuf enum value: NOTIFICATION_VISIBILITY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * only user sees the notification - usually a notification of the user interface
     *
     * @generated from protobuf enum value: NOTIFICATION_VISIBILITY_USER = 1;
     */
    USER = 1,
    /**
     * all members of a project see this notification
     *
     * @generated from protobuf enum value: NOTIFICATION_VISIBILITY_PROJECT = 2;
     */
    PROJECT = 2,
    /**
     * all admins of a project see this notification
     *
     * @generated from protobuf enum value: NOTIFICATION_VISIBILITY_PROJECT_OWNER = 3;
     */
    PROJECT_OWNER = 3,
    /**
     * all admins of a project see this notification
     *
     * @generated from protobuf enum value: NOTIFICATION_VISIBILITY_PROJECT_ADMIN = 4;
     */
    PROJECT_ADMIN = 4,
    /**
     * all admins of a project see this notification
     *
     * @generated from protobuf enum value: NOTIFICATION_VISIBILITY_PROJECT_DEVELOPER = 5;
     */
    PROJECT_DEVELOPER = 5,
    /**
     * all users of a project see this notification
     *
     * @generated from protobuf enum value: NOTIFICATION_VISIBILITY_PROJECT_USER = 6;
     */
    PROJECT_USER = 6,
    /**
     * all users of a project see this notification
     *
     * @generated from protobuf enum value: NOTIFICATION_VISIBILITY_PROJECT_EXECUTOR = 7;
     */
    PROJECT_EXECUTOR = 7,
    /**
     * all users of a project see this notification
     *
     * @generated from protobuf enum value: NOTIFICATION_VISIBILITY_PROJECT_INACTIVE = 8;
     */
    PROJECT_INACTIVE = 8,
    /**
     * all admins of the server
     *
     * @generated from protobuf enum value: NOTIFICATION_VISIBILITY_SERVER_ADMIN = 9;
     */
    SERVER_ADMIN = 9,
    /**
     * all admins of the server
     *
     * @generated from protobuf enum value: NOTIFICATION_VISIBILITY_SERVER_MANAGER = 10;
     */
    SERVER_MANAGER = 10,
    /**
     * all admins of the server
     *
     * @generated from protobuf enum value: NOTIFICATION_VISIBILITY_SERVER_USER = 11;
     */
    SERVER_USER = 11,
    /**
     * all admins of the server
     *
     * @generated from protobuf enum value: NOTIFICATION_VISIBILITY_SERVER_INACTIVE = 12;
     */
    SERVER_INACTIVE = 12
}
/**
 * Enumerates the possible types for a notification.
 *
 * @generated from protobuf enum ondewo.nlu.NotificationType
 */
export declare enum NotificationType {
    /**
     * Unspecified notification type
     *
     * @generated from protobuf enum value: NOTIFICATION_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Debug notification type
     *
     * @generated from protobuf enum value: NOTIFICATION_TYPE_DEBUG = 1;
     */
    DEBUG = 1,
    /**
     * Warning notification type
     *
     * @generated from protobuf enum value: NOTIFICATION_TYPE_WARNING = 2;
     */
    WARNING = 2,
    /**
     * Informational notification type
     *
     * @generated from protobuf enum value: NOTIFICATION_TYPE_INFO = 3;
     */
    INFO = 3,
    /**
     * Error notification type
     *
     * @generated from protobuf enum value: NOTIFICATION_TYPE_ERROR = 4;
     */
    ERROR = 4,
    /**
     * News notification type
     *
     * @generated from protobuf enum value: NOTIFICATION_TYPE_NEWS = 5;
     */
    NEWS = 5
}
/**
 * Enumerates the possible origins for a notification.
 *
 * @generated from protobuf enum ondewo.nlu.NotificationOrigin
 */
export declare enum NotificationOrigin {
    /**
     * unspecified
     *
     * @generated from protobuf enum value: NOTIFICATION_ORIGIN_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * ondewo-aim service
     *
     * @generated from protobuf enum value: NOTIFICATION_ORIGIN_ONDEWO_AIM = 1;
     */
    ONDEWO_AIM = 1,
    /**
     * ondewo-bpi service
     *
     * @generated from protobuf enum value: NOTIFICATION_ORIGIN_ONDEWO_BPI = 2;
     */
    ONDEWO_BPI = 2,
    /**
     * ondewo-csi service
     *
     * @generated from protobuf enum value: NOTIFICATION_ORIGIN_ONDEWO_CSI = 3;
     */
    ONDEWO_CSI = 3,
    /**
     * ondewo-nlu service
     *
     * @generated from protobuf enum value: NOTIFICATION_ORIGIN_ONDEWO_NLU = 4;
     */
    ONDEWO_NLU = 4,
    /**
     * ondewo-s2t service
     *
     * @generated from protobuf enum value: NOTIFICATION_ORIGIN_ONDEWO_S2T = 5;
     */
    ONDEWO_S2T = 5,
    /**
     * ondewo-sip service
     *
     * @generated from protobuf enum value: NOTIFICATION_ORIGIN_ONDEWO_SIP = 6;
     */
    ONDEWO_SIP = 6,
    /**
     * ondewo-t2s service
     *
     * @generated from protobuf enum value: NOTIFICATION_ORIGIN_ONDEWO_T2S = 7;
     */
    ONDEWO_T2S = 7,
    /**
     * ondewo-vtsi service
     *
     * @generated from protobuf enum value: NOTIFICATION_ORIGIN_ONDEWO_VTSI = 8;
     */
    ONDEWO_VTSI = 8,
    /**
     * ondewo-vtsi-rabbitmq service
     *
     * @generated from protobuf enum value: NOTIFICATION_ORIGIN_ONDEWO_VTSI_RABBITMQ = 9;
     */
    ONDEWO_VTSI_RABBITMQ = 9
}
declare class StatResponse$Type extends MessageType<StatResponse> {
    constructor();
    create(value?: PartialMessage<StatResponse>): StatResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StatResponse): StatResponse;
    internalBinaryWrite(message: StatResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.StatResponse
 */
export declare const StatResponse: StatResponse$Type;
declare class Comment$Type extends MessageType<Comment> {
    constructor();
    create(value?: PartialMessage<Comment>): Comment;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Comment): Comment;
    internalBinaryWrite(message: Comment, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Comment
 */
export declare const Comment: Comment$Type;
declare class Notification$Type extends MessageType<Notification> {
    constructor();
    create(value?: PartialMessage<Notification>): Notification;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Notification): Notification;
    internalBinaryWrite(message: Notification, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.Notification
 */
export declare const Notification: Notification$Type;
declare class AddNotificationsRequest$Type extends MessageType<AddNotificationsRequest> {
    constructor();
    create(value?: PartialMessage<AddNotificationsRequest>): AddNotificationsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AddNotificationsRequest): AddNotificationsRequest;
    internalBinaryWrite(message: AddNotificationsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AddNotificationsRequest
 */
export declare const AddNotificationsRequest: AddNotificationsRequest$Type;
declare class AddNotificationsResponse$Type extends MessageType<AddNotificationsResponse> {
    constructor();
    create(value?: PartialMessage<AddNotificationsResponse>): AddNotificationsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AddNotificationsResponse): AddNotificationsResponse;
    internalBinaryWrite(message: AddNotificationsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.AddNotificationsResponse
 */
export declare const AddNotificationsResponse: AddNotificationsResponse$Type;
declare class NotificationFilter$Type extends MessageType<NotificationFilter> {
    constructor();
    create(value?: PartialMessage<NotificationFilter>): NotificationFilter;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NotificationFilter): NotificationFilter;
    internalBinaryWrite(message: NotificationFilter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.NotificationFilter
 */
export declare const NotificationFilter: NotificationFilter$Type;
declare class ListNotificationsRequest$Type extends MessageType<ListNotificationsRequest> {
    constructor();
    create(value?: PartialMessage<ListNotificationsRequest>): ListNotificationsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListNotificationsRequest): ListNotificationsRequest;
    internalBinaryWrite(message: ListNotificationsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListNotificationsRequest
 */
export declare const ListNotificationsRequest: ListNotificationsRequest$Type;
declare class ListNotificationsResponse$Type extends MessageType<ListNotificationsResponse> {
    constructor();
    create(value?: PartialMessage<ListNotificationsResponse>): ListNotificationsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListNotificationsResponse): ListNotificationsResponse;
    internalBinaryWrite(message: ListNotificationsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.ListNotificationsResponse
 */
export declare const ListNotificationsResponse: ListNotificationsResponse$Type;
declare class SetNotificationsFlaggedStatusRequest$Type extends MessageType<SetNotificationsFlaggedStatusRequest> {
    constructor();
    create(value?: PartialMessage<SetNotificationsFlaggedStatusRequest>): SetNotificationsFlaggedStatusRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetNotificationsFlaggedStatusRequest): SetNotificationsFlaggedStatusRequest;
    internalBinaryWrite(message: SetNotificationsFlaggedStatusRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.SetNotificationsFlaggedStatusRequest
 */
export declare const SetNotificationsFlaggedStatusRequest: SetNotificationsFlaggedStatusRequest$Type;
declare class SetNotificationsReadStatusRequest$Type extends MessageType<SetNotificationsReadStatusRequest> {
    constructor();
    create(value?: PartialMessage<SetNotificationsReadStatusRequest>): SetNotificationsReadStatusRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetNotificationsReadStatusRequest): SetNotificationsReadStatusRequest;
    internalBinaryWrite(message: SetNotificationsReadStatusRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.SetNotificationsReadStatusRequest
 */
export declare const SetNotificationsReadStatusRequest: SetNotificationsReadStatusRequest$Type;
declare class KeyValuePair$Type extends MessageType<KeyValuePair> {
    constructor();
    create(value?: PartialMessage<KeyValuePair>): KeyValuePair;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeyValuePair): KeyValuePair;
    internalBinaryWrite(message: KeyValuePair, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ondewo.nlu.KeyValuePair
 */
export declare const KeyValuePair: KeyValuePair$Type;
export {};
