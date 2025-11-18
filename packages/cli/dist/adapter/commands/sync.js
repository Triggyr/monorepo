"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const commander_1 = require("commander");
const inquirer_1 = __importDefault(require("inquirer"));
const ora_1 = __importDefault(require("ora"));
const chalk_1 = __importDefault(require("chalk"));
const graphql_1 = __importDefault(require("@triggyr/graphql"));
const generator_1 = __importDefault(require("../generator"));
exports.default = new commander_1.Command('sync')
    .description('Sync a working workflow file template for component')
    .option('--id <id>', 'Component id')
    .action(async (opts) => {
    const config = await (0, utils_1.loadConfig)();
    const answers = await inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Component ID:',
            default: opts.id,
            when: !opts.id,
            validate: utils_1.isRequired,
        },
    ]);
    const spinner = (0, ora_1.default)('Fetching component metadata...').start();
    const graphql = new graphql_1.default({
        host: config.connection.graphqlUrl,
        log_query: false,
        debug: false,
        headers: {
            'x-hasura-admin-secret': config.connection.graphqlSecret,
        },
    });
    const response = await graphql.selectByPk('components', [
        'id',
        'name',
        'description',
        'type',
        'sub_type',
        'supported_blockchains',
        'is_coming_soon',
        'is_dead_end',
        'input',
        'output',
    ], {
        pkName: 'id',
        pkValue: answers.id ?? opts.id,
    });
    const component = response.data;
    if (!component) {
        console.log(chalk_1.default.red('Could not get component metadata'));
        return;
    }
    await generator_1.default.generate(component, config);
    spinner.succeed(chalk_1.default.green(`✅ Component sync completed! (ID: ${component.id})`));
});
