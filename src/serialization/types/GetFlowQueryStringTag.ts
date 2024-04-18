/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DoptApi from "../../api/index";
import * as core from "../../core";

export const GetFlowQueryStringTag: core.serialization.Schema<
    serializers.GetFlowQueryStringTag.Raw,
    DoptApi.GetFlowQueryStringTag
> = core.serialization.enum_(["uncommitted", "latest"]);

export declare namespace GetFlowQueryStringTag {
    type Raw = "uncommitted" | "latest";
}