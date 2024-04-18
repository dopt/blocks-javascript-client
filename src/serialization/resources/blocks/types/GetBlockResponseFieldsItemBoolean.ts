/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as DoptApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetBlockResponseFieldsItemBoolean: core.serialization.ObjectSchema<
    serializers.GetBlockResponseFieldsItemBoolean.Raw,
    DoptApi.GetBlockResponseFieldsItemBoolean
> = core.serialization.object({
    sid: core.serialization.string(),
    value: core.serialization.boolean().optional(),
});

export declare namespace GetBlockResponseFieldsItemBoolean {
    interface Raw {
        sid: string;
        value?: boolean | null;
    }
}