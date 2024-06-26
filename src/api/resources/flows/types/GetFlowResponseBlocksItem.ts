/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DoptApi from "../../../index";

export interface GetFlowResponseBlocksItem {
    kind: "block";
    uid: string;
    sid: string;
    version: number;
    state: DoptApi.GetFlowResponseBlocksItemState;
    containerUid?: string;
    transitioned: Record<string, boolean>;
    type: DoptApi.GetFlowResponseBlocksItemType;
    fields: DoptApi.GetFlowResponseBlocksItemFieldsItem[];
}
