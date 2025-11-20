"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TriggyrError extends Error {
    statusCode;
    code;
    constructor(message, statusCode, code) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.name = 'TriggyrError';
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = TriggyrError;
