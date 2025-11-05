"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const lodash_1 = __importDefault(require("lodash"));
class Address {
    http;
    constructor(http) {
        this.http = http;
    }
    tokens = async (payload) => {
        const query = (0, helpers_1.toQueryString)(lodash_1.default.pick(payload, ['cursor', 'limit']));
        const response = await this.http.instance.get(`/address/${payload.blockchain}/${payload.address}/tokens?${query}`, { headers: payload?.headers });
        return response.data.data;
    };
    nfts = async (payload) => {
        const query = (0, helpers_1.toQueryString)(lodash_1.default.pick(payload, ['cursor', 'limit']));
        const response = await this.http.instance.get(`/address/${payload.blockchain}/${payload.address}/nfts?${query}`, { headers: payload?.headers });
        return response.data.data;
    };
    transactions = async (payload) => {
        const query = (0, helpers_1.toQueryString)(lodash_1.default.pick(payload, ['cursor', 'limit']));
        const response = await this.http.instance.get(`/address/${payload.blockchain}/${payload.address}/transactions?${query}`, { headers: payload?.headers });
        return response.data.data;
    };
    swaps = async (payload) => {
        const query = (0, helpers_1.toQueryString)(lodash_1.default.pick(payload, ['cursor', 'limit']));
        const response = await this.http.instance.get(`/address/${payload.blockchain}/${payload.address}/swaps?${query}`, { headers: payload?.headers });
        return response.data.data;
    };
}
exports.default = Address;
