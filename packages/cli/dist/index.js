#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const package_json_1 = require("../package.json");
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
const boxen_1 = __importDefault(require("boxen"));
const add_1 = __importDefault(require("./adapter/commands/add"));
const remove_1 = __importDefault(require("./adapter/commands/remove"));
const update_1 = __importDefault(require("./adapter/commands/update"));
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
