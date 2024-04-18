/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as DoptApi from "../../../../api/index";
import * as core from "../../../../core";

export const IntentRequestTag: core.serialization.Schema<serializers.IntentRequestTag.Raw, DoptApi.IntentRequestTag> =
    core.serialization.enum_(["uncommitted", "latest"]);

export declare namespace IntentRequestTag {
    type Raw = "uncommitted" | "latest";
}
