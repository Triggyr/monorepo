"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    http;
    constructor(http) {
        this.http = http;
    }
    getJob = async (payload) => {
        const response = await this.http.instance.get(`/job/${payload.id}`, {
            headers: payload?.headers,
        });
        return response.data.data;
    };
    cancelJob = async (payload) => {
        await this.http.instance.delete(`/job/${payload.id}/cancel`, {
            headers: payload?.headers,
        });
    };
}
exports.default = Job;
