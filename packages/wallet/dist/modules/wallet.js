"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("@turnkey/crypto");
const lodash_1 = __importDefault(require("lodash"));
class Wallet {
    http;
    constructor(http) {
        this.http = http;
    }
    get = async (payload) => {
        const response = await this.http.instance.get('/wallet', {
            headers: payload?.headers,
        });
        return response.data.data;
    };
    create = async (payload) => {
        await this.http.instance.post('/wallet', undefined, {
            headers: payload?.headers,
        });
    };
    createAccount = async (payload) => {
        await this.http.instance.post('/wallet/account', undefined, {
            headers: payload?.headers,
        });
    };
    signTransaction = async (payload) => {
        const response = await this.http.instance.post('/wallet/sign/transaction', lodash_1.default.pick(payload, ['blockchain', 'type', 'token', 'unsignedTransaction']), { headers: payload.headers });
        return response.data.data;
    };
    signRawPayloads = async (payload) => {
        const response = await this.http.instance.post('/wallet/sign/payloads', lodash_1.default.pick(payload, ['blockchain', 'payloads', 'token', 'encoding', 'hashFunction']), { headers: payload.headers });
        return response.data.data;
    };
    generateKeyPair = () => {
        const keypair = (0, crypto_1.generateP256KeyPair)();
        return {
            privateKey: keypair.privateKey,
            publicKey: keypair.publicKey,
            /**
             *
             * @note pass this to the `export` method
             */
            publicKeyUncompressed: keypair.publicKeyUncompressed,
        };
    };
    export = async (payload) => {
        const response = await this.http.instance.post('/wallet/export', lodash_1.default.pick(payload, ['targetPublicKey', 'token']), { headers: payload?.headers });
        return response.data.data;
    };
    decryptMnemonic = async (payload) => {
        const decrypted = await (0, crypto_1.decryptExportBundle)({
            embeddedKey: payload.private_key,
            exportBundle: payload.export_bundle,
            organizationId: payload.organization_id,
            returnMnemonic: true,
        });
        return decrypted;
    };
    settings = async (payload) => {
        const response = await this.http.instance.post('/wallet/settings', lodash_1.default.omit(payload, ['enable2FA']), { headers: payload?.headers });
        return response.data.data;
    };
}
exports.default = Wallet;
