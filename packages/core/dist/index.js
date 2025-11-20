"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_factory_1 = __importDefault(require("./error.factory"));
const http_1 = __importDefault(require("@triggyr/http"));
const lodash_1 = __importDefault(require("lodash"));
const component_1 = __importDefault(require("./modules/component"));
const workflow_1 = __importDefault(require("./modules/workflow"));
const auth_1 = __importDefault(require("./modules/auth"));
const job_1 = __importDefault(require("./modules/job"));
class TriggyrCore {
    http;
    component;
    workflow;
    auth;
    job;
    constructor(options) {
        this.http = new http_1.default(options.apiUrl, {
            logger: options.logger,
            baseHeaders: {
                withCredentials: true,
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
        this.component = new component_1.default(this.http);
        this.workflow = new workflow_1.default(this.http);
        this.auth = new auth_1.default(this.http);
        this.job = new job_1.default(this.http);
    }
    healthcheck = async (payload) => {
        const response = await this.http.instance.get('/healthz', {
            headers: payload?.headers,
        });
        return response.data.data;
    };
}
exports.default = TriggyrCore;
