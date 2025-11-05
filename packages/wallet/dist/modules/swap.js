"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
class Swap {
    http;
    constructor(http) {
        this.http = http;
    }
    quote = async (payload) => {
        const response = await this.http.instance.post(`/swap/${payload.blockchain}/quote`, lodash_1.default.pick(payload, [
            'blockchain',
            'amount',
            'input_token',
            'output_token',
            'recipient',
            'slippage',
        ]), { headers: payload?.headers });
        return response.data.data;
    };
    execute = async (payload) => {
        const response = await this.http.instance.post(`/swap/${payload.blockchain}/execute`, lodash_1.default.pick(payload, [
            'blockchain',
            'amount',
            'input_token',
            'output_token',
            'recipient',
            'slippage',
        ]), { headers: payload?.headers });
        return response.data.data;
    };
    tokens = async (payload) => {
        const response = await this.http.instance.get(`/swap/${payload.blockchain}/tokens`, {
            headers: payload?.headers,
        });
        return response.data.data;
    };
    searchByAddress = async (payload) => {
        const response = await this.http.instance.get(`/swap/${payload.blockchain}/token/search?address=${payload.address}`, { headers: payload?.headers });
        return response.data.data;
    };
}
exports.default = Swap;
