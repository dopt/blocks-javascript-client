/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as DoptApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetFlowRequestTag: core.serialization.Schema<
    serializers.GetFlowRequestTag.Raw,
    DoptApi.GetFlowRequestTag
> = core.serialization.enum_(["uncommitted", "latest"]);

export declare namespace GetFlowRequestTag {
    type Raw = "uncommitted" | "latest";
}
