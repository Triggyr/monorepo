"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
class Workflow {
    http;
    constructor(http) {
        this.http = http;
    }
    createWorkflow = async (payload) => {
        const response = await this.http.instance.post('/workflow', payload ? lodash_1.default.pick(payload, ['name', 'description']) : undefined, { headers: payload?.headers });
        return response.data.data;
    };
    upsertTrigger = async (payload) => {
        await this.http.instance.patch(`/workflow/${payload.id}`, lodash_1.default.pick(payload, ['component_id', 'input', 'label', 'description']), { headers: payload?.headers });
    };
    trigger = async (payload) => {
        const response = await this.http.instance.post(`/workflow/${payload.id}?simulate=${payload.simulate}`, lodash_1.default.pick(payload, ['body']), { headers: payload?.headers });
        return response.data.data;
    };
}
exports.default = Workflow;
