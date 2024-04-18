/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DoptApi from "../../api/index";
import * as core from "../../core";

export const GetBlockRequestParams: core.serialization.ObjectSchema<
    serializers.GetBlockRequestParams.Raw,
    DoptApi.GetBlockRequestParams
> = core.serialization.object({
    uid: core.serialization.string(),
});

export declare namespace GetBlockRequestParams {
    interface Raw {
        uid: string;
    }
}