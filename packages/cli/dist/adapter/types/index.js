"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggyrCLIConfig = void 0;
const zod_1 = __importDefault(require("zod"));
exports.TriggyrCLIConfig = zod_1.default.object({
    componentsDir: zod_1.default.string(),
    connection: zod_1.default.object({
        graphqlUrl: zod_1.default.url(),
        graphqlSecret: zod_1.default.string(),
    }),
});
