"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
class TwoFa {
    http;
    constructor(http) {
        this.http = http;
    }
    setup = async (payload) => {
        const response = await this.http.instance.post('/2fa/init', undefined, {
            headers: payload?.headers,
        });
        return response.data.data;
    };
    verify = async (payload) => {
        await this.http.instance.post('/2fa/verify', lodash_1.default.pick(payload, ['token']), {
            headers: payload.headers,
        });
    };
}
exports.default = TwoFa;
