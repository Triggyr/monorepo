"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfig = loadConfig;
exports.isRequired = isRequired;
exports.collectInputFields = collectInputFields;
exports.collectOutputFields = collectOutputFields;
const settings_json_1 = require("./settings.json");
const types_1 = require("./types");
const url_1 = require("url");
const fs_1 = require("fs");
const path_1 = require("path");
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
async function loadConfig() {
    const configPath = (0, path_1.join)(process.cwd(), settings_json_1.config_filename);
    if (!(0, fs_1.existsSync)(configPath)) {
        throw new Error(`${settings_json_1.config_filename} is yet to be setup`);
    }
    const fileUrl = (0, url_1.pathToFileURL)(configPath).href;
    const module = await import(fileUrl);
    return types_1.TriggyrCLIConfig.parse(module.default);
}
function isRequired(input) {
    return input.trim() !== '' || 'You must provide a value';
}
function stringToArrayOrUndefined(str) {
    str = (str || '').trim();
    if (!str || str == '')
        return undefined;
    return str.split(',').map((s) => s.trim());
}
function getDefault(type, data) {
    data = data.trim();
    if (!data || data == '')
        return undefined;
    if (type === 'number') {
        const val = Number(data);
        if (isNaN(val)) {
            throw new Error(`${data} is not a valid number`);
        }
        return val;
    }
    if (type === 'object' || type === 'array') {
        try {
            return JSON.parse(data);
        }
        catch {
            if (type === 'object') {
                return {};
            }
            return [];
        }
    }
    return data;
}
async function collectInputFields() {
    const fields = [];
    let addMore = true;
    while (addMore) {
        console.log(chalk_1.default.bold(`\n📥 Input Field ${fields.length + 1}\n`));
        const answer = await inquirer_1.default.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Field key:',
                validate: isRequired,
            },
            {
                type: 'checkbox',
                required: true,
                name: 'type',
                message: 'Type:',
                choices: settings_json_1.field_types,
            },
            {
                type: 'input',
                name: 'description',
                message: 'Description:',
                validate: isRequired,
            },
            {
                type: 'confirm',
                name: 'required',
                message: 'Is this field required?',
                default: true,
            },
            {
                type: 'confirm',
                name: 'nullable',
                message: 'Is this field nullable?',
                default: false,
            },
            {
                type: 'confirm',
                name: 'hidden',
                message: 'Is this field an hidden field?',
                default: false,
            },
            {
                type: 'input',
                name: 'default',
                message: 'Default value (optional):',
            },
            {
                type: 'input',
                name: 'enum',
                message: 'Enum values (comma-separated, optional):',
                default: undefined,
                required: false,
            },
        ]);
        const field = {
            ...answer,
            type: answer.type.length === 1 ? answer.type[0] : answer.type,
            default: getDefault(answer.type, answer.default),
            enum: stringToArrayOrUndefined(answer.enum),
        };
        fields.push(field);
        const { continueAdding } = await inquirer_1.default.prompt([
            {
                type: 'confirm',
                name: 'continueAdding',
                message: 'Add another input field?',
                default: false,
            },
        ]);
        addMore = continueAdding;
    }
    return fields;
}
async function collectOutputFields() {
    const fields = [];
    let addMore = true;
    while (addMore) {
        console.log(chalk_1.default.bold(`\n📤 Output Field ${fields.length + 1}\n`));
        const answer = await inquirer_1.default.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Field key:',
                validate: isRequired,
            },
            {
                type: 'list',
                name: 'type',
                message: 'Field type:',
                choices: settings_json_1.field_types,
            },
            {
                type: 'input',
                name: 'description',
                message: 'Description:',
                validate: isRequired,
            },
            {
                type: 'confirm',
                name: 'required',
                message: 'Is this field required?',
                default: true,
            },
            {
                type: 'confirm',
                name: 'nullable',
                message: 'Is this field nullable?',
                default: false,
            },
        ]);
        fields.push(answer);
        const { continueAdding } = await inquirer_1.default.prompt([
            {
                type: 'confirm',
                name: 'continueAdding',
                message: 'Add another output field?',
                default: false,
            },
        ]);
        addMore = continueAdding;
    }
    return fields;
}
