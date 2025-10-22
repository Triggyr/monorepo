"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const settings_json_1 = require("../settings.json");
const commander_1 = require("commander");
const inquirer_1 = __importDefault(require("inquirer"));
const graphql_1 = __importDefault(require("@triggyr/graphql"));
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const generator_1 = __importDefault(require("../generator"));
exports.default = new commander_1.Command('update')
    .description('Update an existing component')
    .option('--id <id>', 'Component ID')
    .action(async (opts) => {
    const config = await (0, utils_1.loadConfig)();
    const { id } = await inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Component ID:',
            default: opts.id,
            when: !opts.id,
            validate: utils_1.isRequired,
        },
    ]);
    const graphql = new graphql_1.default({
        host: config.connection.graphqlUrl,
        log_query: false,
        debug: false,
        headers: {
            'x-hasura-admin-secret': config.connection.graphqlSecret,
        },
    });
    let spinner = (0, ora_1.default)('Fetching component...').start();
    const { data: component } = await graphql.selectOne('components', [
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
        where: {
            id: {
                _eq: id,
            },
        },
    });
    if (!component) {
        spinner.fail(chalk_1.default.red('Component not found'));
        return;
    }
    spinner.stop();
    const answers = await inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name:',
            default: component.name,
            validate: utils_1.isRequired,
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description:',
            default: component.description,
            validate: utils_1.isRequired,
        },
        {
            type: 'checkbox',
            name: 'supported_blockchains',
            message: 'Supported blockchains (optional):',
            choices: settings_json_1.supported_blockchains,
            default: component.supported_blockchains ?? [],
        },
        {
            type: 'confirm',
            name: 'is_coming_soon',
            message: 'Is this component coming soon?',
            default: !!component.is_coming_soon,
        },
        {
            type: 'confirm',
            name: 'is_dead_end',
            message: 'Is this a dead end component?',
            default: !!component.is_dead_end,
        },
    ]);
    let input = component.input ?? [];
    const { updateInput } = await inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'updateInput',
            message: `Current input fields: (${input.length}). What would you like to do?`,
            choices: [
                {
                    name: 'Keep existing fields',
                    value: 'keep',
                },
                {
                    name: 'Add new fields (keep existing)',
                    value: 'add',
                },
                {
                    name: 'Replace all fields',
                    value: 'replace',
                },
                {
                    name: 'Clear all fields',
                    value: 'clear',
                },
            ],
        },
    ]);
    if (updateInput === 'add') {
        console.log(chalk_1.default.cyan('\n📝 Add Input Fields'));
        const newFields = await (0, utils_1.collectInputFields)();
        input = [...input, ...newFields];
    }
    else if (updateInput === 'replace') {
        console.log(chalk_1.default.cyan('\n📝 Configure Input Fields'));
        input = await (0, utils_1.collectInputFields)();
    }
    else if (updateInput === 'clear') {
        input = [];
    }
    let output = component.output ?? [];
    const { updateOutput } = await inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'updateOutput',
            message: `Current output fields: (${output.length}). What would you like to do?`,
            choices: [
                {
                    name: 'Keep existing fields',
                    value: 'keep',
                },
                {
                    name: 'Add new fields (keep existing)',
                    value: 'add',
                },
                {
                    name: 'Replace all fields',
                    value: 'replace',
                },
                {
                    name: 'Clear all fields',
                    value: 'clear',
                },
            ],
        },
    ]);
    if (updateOutput === 'add') {
        console.log(chalk_1.default.cyan('\n📝 Add Output Fields'));
        const newFields = await (0, utils_1.collectOutputFields)();
        output = [...output, ...newFields];
    }
    else if (updateOutput === 'replace') {
        console.log(chalk_1.default.cyan('\n📝 Configure Output Fields'));
        output = await (0, utils_1.collectOutputFields)();
    }
    else if (updateOutput === 'clear') {
        output = [];
    }
    spinner = (0, ora_1.default)('Updating component...').start();
    const update = {
        ...answers,
        type: component.type,
        sub_type: component.sub_type,
        input,
        output,
    };
    const response = await graphql.update('components', update, ['_affected_rows'], {
        where: {
            id: {
                _eq: component.id,
            },
        },
    });
    if (response.errors) {
        spinner.fail(chalk_1.default.red('Could not update component (GraphQL error)'));
        console.dir(response.errors, {
            depth: null,
        });
        return;
    }
    await generator_1.default.generate({ ...update, id: component.id }, config);
    spinner.succeed(chalk_1.default.green(`✅ Component updated successfully! (ID: ${component.id})`));
});
