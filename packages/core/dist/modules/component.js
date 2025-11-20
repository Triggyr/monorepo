"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
class Component {
    http;
    constructor(http) {
        this.http = http;
    }
    validateInput = async (payload) => {
        const response = await this.http.instance.post(`/component/${payload.id}/validate`, lodash_1.default.pick(payload, ['input']), { headers: payload?.headers });
        return response.data.data;
    };
    reloadComponent = async (payload) => {
        await this.http.instance.post(`/component/${payload.id}/reload`, undefined, {
            headers: payload?.headers,
        });
    };
    reload = async (payload) => {
        await this.http.instance.post('/component/reload', undefined, {
            headers: payload?.headers,
        });
    };
}
exports.default = Component;
