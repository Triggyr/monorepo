"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class HttpClient {
    instance;
    instanceWithoutAuth;
    constructor(option) {
        this.instance = axios_1.default.create(option);
        this.instanceWithoutAuth = axios_1.default.create({ baseURL: option.baseURL });
        this._initializeResponseInterceptor();
    }
    _initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(this._handleResponse.bind(this), this._handleError.bind(this));
        this.instanceWithoutAuth.interceptors.response.use(this._handleResponse.bind(this), this._handleError.bind(this));
    };
}
exports.default = HttpClient;
