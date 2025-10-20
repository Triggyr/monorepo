"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_1 = __importDefault(require("./http.client"));
class Http extends http_client_1.default {
    interceptors;
    constructor(baseURL, options) {
        super({
            baseURL,
            headers: options?.baseHeaders
                ? options.baseHeaders
                : { 'Content-Type': 'application/json', Accept: 'application/json' },
        });
        this.interceptors = options?.interceptors;
    }
    _handleResponse(response) {
        if (this.interceptors?.onSuccess) {
            return this.interceptors.onSuccess(response);
        }
        return {
            isOk: true,
            data: response.data ?? null,
            headers: response.headers.toJSON(),
            statusCode: response.status,
        };
    }
    _handleError(error) {
        if (this.interceptors?.onError) {
            return this.interceptors.onError(error);
        }
        return {
            isOk: false,
            data: error.response?.data ?? null,
            headers: (error.response?.headers).toJSON(),
            statusCode: error.response?.status,
        };
    }
}
exports.default = Http;
