/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as DoptApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Blocks {
    interface Options {
        environment?: core.Supplier<environments.DoptApiEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Blocks {
    constructor(protected readonly _options: Blocks.Options) {}

    /**
     * @throws {@link DoptApi.BadRequestError}
     * @throws {@link DoptApi.UnauthorizedError}
     * @throws {@link DoptApi.NotFoundError}
     * @throws {@link DoptApi.InternalServerError}
     *
     * @example
     *     await doptApi.blocks.getBlock("uid", {
     *         userIdentifier: "userIdentifier",
     *         version: 1.1
     *     })
     *
     * @example
     *     await doptApi.blocks.getBlock("string", {
     *         userIdentifier: "string",
     *         groupIdentifier: "string",
     *         version: 1.1
     *     })
     */
    public async getBlock(
        uid: string,
        request: DoptApi.GetBlockRequest,
        requestOptions?: Blocks.RequestOptions
    ): Promise<DoptApi.GetBlockResponse> {
        const { userIdentifier, groupIdentifier, version } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["userIdentifier"] = userIdentifier;
        if (groupIdentifier != null) {
            _queryParams["groupIdentifier"] = groupIdentifier;
        }

        _queryParams["version"] = version.toString();
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.DoptApiEnvironment.Default,
                `v2/block/${uid}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.1.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.GetBlockResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DoptApi.BadRequestError(_response.error.body);
                case 401:
                    throw new DoptApi.UnauthorizedError(_response.error.body);
                case 404:
                    throw new DoptApi.NotFoundError(_response.error.body);
                case 500:
                    throw new DoptApi.InternalServerError(_response.error.body);
                default:
                    throw new errors.DoptApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DoptApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DoptApiTimeoutError();
            case "unknown":
                throw new errors.DoptApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link DoptApi.BadRequestError}
     * @throws {@link DoptApi.UnauthorizedError}
     * @throws {@link DoptApi.NotFoundError}
     * @throws {@link DoptApi.InternalServerError}
     *
     * @example
     *     await doptApi.blocks.transition("string", {
     *         transitions: "string",
     *         userIdentifier: "string",
     *         groupIdentifier: "string",
     *         version: 1.1
     *     })
     */
    public async transition(
        uid: string,
        request: DoptApi.TransitionRequest,
        requestOptions?: Blocks.RequestOptions
    ): Promise<void> {
        const { transitions, userIdentifier, groupIdentifier, version, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (transitions != null) {
            if (Array.isArray(transitions)) {
                _queryParams["transitions"] = transitions.map((item) => item);
            } else {
                _queryParams["transitions"] = transitions;
            }
        }

        _queryParams["userIdentifier"] = userIdentifier;
        if (groupIdentifier != null) {
            _queryParams["groupIdentifier"] = groupIdentifier;
        }

        _queryParams["version"] = version.toString();
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.DoptApiEnvironment.Default,
                `v2/block/${uid}/transition`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.1.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.TransitionRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DoptApi.BadRequestError(_response.error.body);
                case 401:
                    throw new DoptApi.UnauthorizedError(_response.error.body);
                case 404:
                    throw new DoptApi.NotFoundError(_response.error.body);
                case 500:
                    throw new DoptApi.InternalServerError(_response.error.body);
                default:
                    throw new errors.DoptApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DoptApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DoptApiTimeoutError();
            case "unknown":
                throw new errors.DoptApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "x-api-key": apiKeyValue };
    }
}
