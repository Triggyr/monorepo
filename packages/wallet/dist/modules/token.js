"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Token {
    http;
    constructor(http) {
        this.http = http;
    }
    information = async (payload) => {
        const response = await this.http.instance.get(`/token/${payload.blockchain}/${payload.contract}`, { headers: payload?.headers });
        return response.data.data;
    };
    price = async (payload) => {
        const response = await this.http.instance.get(`/token/${payload.blockchain}/${payload.contract}/price`, { headers: payload?.headers });
        return response.data.data;
    };
    shield = async (payload) => {
        const response = await this.http.instance.get(`/token/${payload.blockchain}/${payload.contract}/shield`, { headers: payload?.headers });
        return response.data.data;
    };
    balanceOf = async (payload) => {
        const response = await this.http.instance.get(`/token/${payload.blockchain}/${payload.contract}/balanceOf/${payload.address}`, { headers: payload?.headers });
        return response.data.data;
    };
}
exports.default = Token;
