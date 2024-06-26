/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DoptApi from "../../api/index";
import * as core from "../../core";

export const BlockTransitionQueryString: core.serialization.ObjectSchema<
    serializers.BlockTransitionQueryString.Raw,
    DoptApi.BlockTransitionQueryString
> = core.serialization.object({
    transitions: core.serialization.list(core.serialization.string()),
    userIdentifier: core.serialization.string(),
    groupIdentifier: core.serialization.string().optional(),
    version: core.serialization.number(),
});

export declare namespace BlockTransitionQueryString {
    interface Raw {
        transitions: string[];
        userIdentifier: string;
        groupIdentifier?: string | null;
        version: number;
    }
}
