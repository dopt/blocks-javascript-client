/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as DoptApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetBlockResponseState: core.serialization.ObjectSchema<
    serializers.GetBlockResponseState.Raw,
    DoptApi.GetBlockResponseState
> = core.serialization.object({
    active: core.serialization.boolean(),
    entered: core.serialization.boolean(),
    exited: core.serialization.boolean(),
});

export declare namespace GetBlockResponseState {
    interface Raw {
        active: boolean;
        entered: boolean;
        exited: boolean;
    }
}
