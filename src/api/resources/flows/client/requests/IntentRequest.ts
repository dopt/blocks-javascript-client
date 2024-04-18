/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DoptApi from "../../../../index";

/**
 * @example
 *     {
 *         userIdentifier: "userIdentifier"
 *     }
 *
 * @example
 *     {
 *         userIdentifier: "string",
 *         groupIdentifier: "string",
 *         version: 1.1,
 *         tag: DoptApi.IntentRequestTag.Uncommitted,
 *         force: true
 *     }
 *
 * @example
 *     {
 *         userIdentifier: "string",
 *         groupIdentifier: "string",
 *         version: 1.1,
 *         tag: DoptApi.IntentRequestTag.Uncommitted,
 *         force: true
 *     }
 *
 * @example
 *     {
 *         userIdentifier: "string",
 *         groupIdentifier: "string",
 *         version: 1.1,
 *         tag: DoptApi.IntentRequestTag.Uncommitted,
 *         force: true
 *     }
 *
 * @example
 *     {
 *         userIdentifier: "string",
 *         groupIdentifier: "string",
 *         version: 1.1,
 *         tag: DoptApi.IntentRequestTag.Uncommitted,
 *         force: true
 *     }
 *
 * @example
 *     {
 *         userIdentifier: "string",
 *         groupIdentifier: "string",
 *         version: 1.1,
 *         tag: DoptApi.IntentRequestTag.Uncommitted,
 *         force: true
 *     }
 */
export interface IntentRequest {
    userIdentifier: string;
    groupIdentifier?: string;
    version?: number;
    tag?: DoptApi.IntentRequestTag;
    force?: boolean;
}
