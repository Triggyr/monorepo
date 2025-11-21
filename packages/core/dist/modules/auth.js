"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
class Auth {
    http;
    constructor(http) {
        this.http = http;
    }
    magicLink = async (payload) => {
        const response = await this.http.instance.post('/auth', lodash_1.default.pick(payload, ['email', 'redirect_to']), { headers: payload?.headers });
        return response.data.data;
    };
    verifyMagicLink = async (payload) => {
        const response = await this.http.instance.post('/auth/verify', lodash_1.default.pick(payload, ['token']), {
            headers: payload?.headers,
        });
        return response.data.data;
    };
    logout = async (payload) => {
        await this.http.instance.delete('/auth/logout', {
            headers: payload?.headers,
        });
    };
    refreshToken = async (payload) => {
        const response = await this.http.instance.post('/auth/refresh/token', undefined, {
            headers: payload?.headers,
        });
        return response.data.data;
    };
    whoami = async (payload) => {
        const response = await this.http.instance.get('/auth/whoami', {
            headers: payload?.headers,
        });
        return response.data.data;
    };
}
exports.default = Auth;
