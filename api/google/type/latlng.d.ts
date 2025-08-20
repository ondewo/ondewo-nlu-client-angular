import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * An object representing a latitude/longitude pair. This is expressed as a pair
 * of doubles representing degrees latitude and degrees longitude. Unless
 * specified otherwise, this must conform to the
 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
 * standard</a>. Values must be within normalized ranges.
 *
 * Example of normalization code in Python:
 *
 *     def NormalizeLongitude(longitude):
 *       """Wraps decimal degrees longitude to [-180.0, 180.0]."""
 *       q, r = divmod(longitude, 360.0)
 *       if r > 180.0 or (r == 180.0 and q <= -1.0):
 *         return r - 360.0
 *       return r
 *
 *     def NormalizeLatLng(latitude, longitude):
 *       """Wraps decimal degrees latitude and longitude to
 *       [-90.0, 90.0] and [-180.0, 180.0], respectively."""
 *       r = latitude % 360.0
 *       if r <= 90.0:
 *         return r, NormalizeLongitude(longitude)
 *       elif r >= 270.0:
 *         return r - 360, NormalizeLongitude(longitude)
 *       else:
 *         return 180 - r, NormalizeLongitude(longitude + 180.0)
 *
 *     assert 180.0 == NormalizeLongitude(180.0)
 *     assert -180.0 == NormalizeLongitude(-180.0)
 *     assert -179.0 == NormalizeLongitude(181.0)
 *     assert (0.0, 0.0) == NormalizeLatLng(360.0, 0.0)
 *     assert (0.0, 0.0) == NormalizeLatLng(-360.0, 0.0)
 *     assert (85.0, 180.0) == NormalizeLatLng(95.0, 0.0)
 *     assert (-85.0, -170.0) == NormalizeLatLng(-95.0, 10.0)
 *     assert (90.0, 10.0) == NormalizeLatLng(90.0, 10.0)
 *     assert (-90.0, -10.0) == NormalizeLatLng(-90.0, -10.0)
 *     assert (0.0, -170.0) == NormalizeLatLng(-180.0, 10.0)
 *     assert (0.0, -170.0) == NormalizeLatLng(180.0, 10.0)
 *     assert (-90.0, 10.0) == NormalizeLatLng(270.0, 10.0)
 *     assert (90.0, 10.0) == NormalizeLatLng(-270.0, 10.0)
 *
 * @generated from protobuf message google.type.LatLng
 */
export interface LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     *
     * @generated from protobuf field: double latitude = 1;
     */
    latitude: number;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     *
     * @generated from protobuf field: double longitude = 2;
     */
    longitude: number;
}
declare class LatLng$Type extends MessageType<LatLng> {
    constructor();
    create(value?: PartialMessage<LatLng>): LatLng;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LatLng): LatLng;
    internalBinaryWrite(message: LatLng, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.type.LatLng
 */
export declare const LatLng: LatLng$Type;
export {};
