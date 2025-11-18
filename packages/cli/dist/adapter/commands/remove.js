"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const commander_1 = require("commander");
const path_1 = require("path");
const inquirer_1 = __importDefault(require("inquirer"));
const ora_1 = __importDefault(require("ora"));
const fs_1 = __importDefault(require("fs"));
const chalk_1 = __importDefault(require("chalk"));
const graphql_1 = __importDefault(require("@triggyr/graphql"));
exports.default = new commander_1.Command('remove')
    .description('Remove a workflow component')
    .option('--id <id>', 'Component ID')
    .action(async (opts) => {
    const config = await (0, utils_1.loadConfig)();
    const answer = await inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Component ID:',
            default: opts.id,
            when: !opts.id,
            validate: utils_1.isRequired,
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: chalk_1.default.red(`Are you sure you want to remove component ${opts.id}?`),
            default: false,
        },
    ]);
    if (!answer.confirm)
        return;
    const spinner = (0, ora_1.default)('Removing component...').start();
    const graphql = new graphql_1.default({
        host: config.connection.graphqlUrl,
        log_query: false,
        debug: false,
        headers: {
            'x-hasura-admin-secret': config.connection.graphqlSecret,
        },
    });
    const response = await graphql.update('components', { deleted_at: new Date().toISOString() }, ['id', 'type', 'sub_type'], {
        where: {
            id: {
                _eq: answer.id ?? opts.id,
            },
        },
    });
    if (response.errors) {
        spinner.fail(chalk_1.default.red('Could not remove component (GraphQL error)'));
        console.dir(response.errors, {
            depth: null,
        });
        return;
    }
    const component = response.data[0];
    if (!component) {
        spinner.fail(chalk_1.default.red('Component not found'));
        return;
    }
    const filePath = (0, path_1.join)(process.cwd(), config.componentsDir, component.type, component.sub_type, `${component.id}.ts`);
    fs_1.default.unlink(filePath, (err) => {
        if (err) {
            spinner.fail(chalk_1.default.red(`Could not complete file deletion but component was marked as deleted from db!`));
            console.log(chalk_1.default.red(`\nReason: ${err.message}`));
            return;
        }
        spinner.succeed(chalk_1.default.green('✅ Component removed successfully!'));
    });
});
