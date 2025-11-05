"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Nft {
    http;
    constructor(http) {
        this.http = http;
    }
    collection = async (payload) => {
        const response = await this.http.instance.get(`/nft/${payload.blockchain}/${payload.contract}`, { headers: payload?.headers });
        return response.data.data ?? null;
    };
    item = async (payload) => {
        const response = await this.http.instance.get(`/nft/${payload.blockchain}/${payload.contract}/${payload.token_identifier}`, { headers: payload?.headers });
        return response.data.data ?? null;
    };
}
exports.default = Nft;
