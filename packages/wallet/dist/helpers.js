"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toQueryString = toQueryString;
const querystring_1 = __importDefault(require("querystring"));
function toQueryString(obj) {
    if (!obj)
        return '';
    const query = Object.fromEntries(Object.entries(obj).filter(([_, value]) => value !== undefined && value !== null && value !== ''));
    return querystring_1.default.stringify(query);
}
