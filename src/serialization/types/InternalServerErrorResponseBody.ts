/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DoptApi from "../../api/index";
import * as core from "../../core";

export const InternalServerErrorResponseBody: core.serialization.ObjectSchema<
    serializers.InternalServerErrorResponseBody.Raw,
    DoptApi.InternalServerErrorResponseBody
> = core.serialization.object({
    code: core.serialization.stringLiteral("internal_server_error"),
    details: core.serialization.string(),
});

export declare namespace InternalServerErrorResponseBody {
    interface Raw {
        code: "internal_server_error";
        details: string;
    }
}
