"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_factory_1 = __importDefault(require("./error.factory"));
const http_1 = __importDefault(require("@triggyr/http"));
const lodash_1 = __importDefault(require("lodash"));
const nft_1 = __importDefault(require("./modules/nft"));
const address_1 = __importDefault(require("./modules/address"));
const wallet_1 = __importDefault(require("./modules/wallet"));
const twoFa_1 = __importDefault(require("./modules/twoFa"));
const swap_1 = __importDefault(require("./modules/swap"));
const token_1 = __importDefault(require("./modules/token"));
class TriggyrWallet {
    http;
    address;
    nft;
    swap;
    token;
    twoFa;
    wallet;
    constructor(options) {
        this.http = new http_1.default(options.apiUrl, {
            logger: options.logger,
            baseHeaders: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                ...options.baseHeaders,
            },
            interceptors: {
                onError(error) {
                    const response = error.response;
                    if (response && response.data) {
                        let message = response.data.message;
                        if (message.startsWith('params.') ||
                            message.startsWith('body.') ||
                            message.startsWith('query.')) {
                            const split = message.split(': ');
                            lodash_1.default.remove(split, (v, idx) => idx === 0);
                            //
                            message = split.join(': ');
                        }
                        throw new error_factory_1.default(message, response.status, response.data.error.code);
                    }
                    throw new error_factory_1.default(error.message, 500, 'UNKNWON');
                },
            },
        });
        this.address = new address_1.default(this.http);
        this.nft = new nft_1.default(this.http);
        this.swap = new swap_1.default(this.http);
        this.token = new token_1.default(this.http);
        this.twoFa = new twoFa_1.default(this.http);
        this.wallet = new wallet_1.default(this.http);
    }
    healthcheck = async (payload) => {
        const response = await this.http.instance.get('/healthz', {
            headers: payload?.headers,
        });
        return response.data.data;
    };
    blockchains = async (payload) => {
        const response = await this.http.instance.get('/supported-blockchains', {
            headers: payload?.headers,
        });
        return response.data.data;
    };
}
exports.default = TriggyrWallet;
