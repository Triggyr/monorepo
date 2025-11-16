#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentLoader = void 0;
const package_json_1 = require("../package.json");
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
const boxen_1 = __importDefault(require("boxen"));
const add_1 = __importDefault(require("./adapter/commands/add"));
const remove_1 = __importDefault(require("./adapter/commands/remove"));
const update_1 = __importDefault(require("./adapter/commands/update"));
exports.ComponentLoader = __importStar(require("./loader"));
console.log((0, boxen_1.default)(chalk_1.default.cyan.bold('Triggyr internal workflow component CLI'), {
    padding: 1,
    margin: {
        top: 1,
        bottom: 1,
    },
    borderStyle: 'round',
    borderColor: 'cyan',
}));
const program = new commander_1.Command();
program.name('triggyr').description(package_json_1.description).version(package_json_1.version);
program.addCommand(add_1.default);
program.addCommand(update_1.default);
program.addCommand(remove_1.default);
program.parse();
