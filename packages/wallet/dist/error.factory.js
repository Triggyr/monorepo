"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TriggyrWalletError extends Error {
    statusCode;
    code;
    constructor(message, statusCode, code) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.name = 'TriggyrWalletError';
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = TriggyrWalletError;
