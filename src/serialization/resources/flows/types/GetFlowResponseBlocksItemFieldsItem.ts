/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as DoptApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetFlowResponseBlocksItemFieldsItemString } from "./GetFlowResponseBlocksItemFieldsItemString";
import { GetFlowResponseBlocksItemFieldsItemNumber } from "./GetFlowResponseBlocksItemFieldsItemNumber";
import { GetFlowResponseBlocksItemFieldsItemBoolean } from "./GetFlowResponseBlocksItemFieldsItemBoolean";
import { GetFlowResponseBlocksItemFieldsItemRichText } from "./GetFlowResponseBlocksItemFieldsItemRichText";

export const GetFlowResponseBlocksItemFieldsItem: core.serialization.Schema<
    serializers.GetFlowResponseBlocksItemFieldsItem.Raw,
    DoptApi.GetFlowResponseBlocksItemFieldsItem
> = core.serialization
    .union("type", {
        string: GetFlowResponseBlocksItemFieldsItemString,
        number: GetFlowResponseBlocksItemFieldsItemNumber,
        boolean: GetFlowResponseBlocksItemFieldsItemBoolean,
        richText: GetFlowResponseBlocksItemFieldsItemRichText,
    })
    .transform<DoptApi.GetFlowResponseBlocksItemFieldsItem>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace GetFlowResponseBlocksItemFieldsItem {
    type Raw =
        | GetFlowResponseBlocksItemFieldsItem.String
        | GetFlowResponseBlocksItemFieldsItem.Number
        | GetFlowResponseBlocksItemFieldsItem.Boolean
        | GetFlowResponseBlocksItemFieldsItem.RichText;

    interface String extends GetFlowResponseBlocksItemFieldsItemString.Raw {
        type: "string";
    }

    interface Number extends GetFlowResponseBlocksItemFieldsItemNumber.Raw {
        type: "number";
    }

    interface Boolean extends GetFlowResponseBlocksItemFieldsItemBoolean.Raw {
        type: "boolean";
    }

    interface RichText extends GetFlowResponseBlocksItemFieldsItemRichText.Raw {
        type: "richText";
    }
}
