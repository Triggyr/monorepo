"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const settings_json_1 = require("../settings.json");
const commander_1 = require("commander");
const inquirer_1 = __importDefault(require("inquirer"));
const ora_1 = __importDefault(require("ora"));
const chalk_1 = __importDefault(require("chalk"));
const graphql_1 = __importDefault(require("@triggyr/graphql"));
const generator_1 = __importDefault(require("../generator"));
exports.default = new commander_1.Command('add')
    .description('Add a new workflow component')
    .option('--name <name>', 'Component name')
    .action(async (opts) => {
    const config = await (0, utils_1.loadConfig)();
    console.log(chalk_1.default.bold('\n🎨 Create a new workflow component\n'));
    const answers = await inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name:',
            default: opts.name,
            when: !opts.name,
            validate: utils_1.isRequired,
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description:',
            validate: utils_1.isRequired,
        },
        {
            type: 'list',
            name: 'type',
            message: 'Component Type:',
            choices: settings_json_1.component_types,
        },
        {
            type: 'list',
            name: 'sub_type',
            message: 'Component Sub-type:',
            choices: settings_json_1.component_sub_types,
        },
        {
            type: 'checkbox',
            name: 'supported_blockchains',
            message: 'Supported blockchains (optional):',
            choices: settings_json_1.supported_blockchains,
        },
        {
            type: 'confirm',
            name: 'is_coming_soon',
            message: 'Is this component coming soon?',
            default: false,
        },
        {
            type: 'confirm',
            name: 'is_dead_end',
            message: 'Is this a dead end component?',
            default: false,
        },
    ]);
    console.log(chalk_1.default.cyan('\n📝 Configure Input Fields'));
    const input = await (0, utils_1.collectInputFields)();
    console.log(chalk_1.default.cyan('\n📝 Configure Output Fields'));
    const output = await (0, utils_1.collectOutputFields)();
    const spinner = (0, ora_1.default)('Creating component...').start();
    const graphql = new graphql_1.default({
        host: config.connection.graphqlUrl,
        log_query: false,
        debug: false,
        headers: {
            'x-hasura-admin-secret': config.connection.graphqlSecret,
        },
    });
    const component = {
        ...answers,
        input,
        output,
    };
    const response = await graphql.insertOne('components', component, ['id']);
    if (response.errors) {
        console.log(chalk_1.default.red('Could not add component'));
        console.dir(response.errors, {
            depth: null,
        });
        return;
    }
    await generator_1.default.generate({ ...component, id: response.data?.id }, config);
    spinner.succeed(chalk_1.default.green(`✅ Component created successfully! (ID: ${response.data?.id})`));
});
