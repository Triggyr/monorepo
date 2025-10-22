import { collectInputFields, collectOutputFields, isRequired, loadConfig } from '../utils';
import { supported_blockchains, component_sub_types, component_types } from '../settings.json';
import { Command } from 'commander';
import inquirer from 'inquirer';
import ora from 'ora';
import chalk from 'chalk';
import Graphql from '@triggyr/graphql';
import generator from '../generator';

export default new Command('add')
   .description('Add a new workflow component')
   .option('--name <name>', 'Component name')
   .action(async (opts) => {
      const config = await loadConfig();

      console.log(chalk.bold('\n🎨 Create a new workflow component\n'));

      const answers = await inquirer.prompt([
         {
            type: 'input',
            name: 'name',
            message: 'Name:',
            default: opts.name,
            when: !opts.name,
            validate: isRequired,
         },
         {
            type: 'input',
            name: 'description',
            message: 'Description:',
            validate: isRequired,
         },
         {
            type: 'list',
            name: 'type',
            message: 'Component Type:',
            choices: component_types,
         },
         {
            type: 'list',
            name: 'sub_type',
            message: 'Component Sub-type:',
            choices: component_sub_types,
         },
         {
            type: 'checkbox',
            name: 'supported_blockchains',
            message: 'Supported blockchains (optional):',
            choices: supported_blockchains,
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

      console.log(chalk.cyan('\n📝 Configure Input Fields'));
      const input = await collectInputFields();

      console.log(chalk.cyan('\n📝 Configure Output Fields'));
      const output = await collectOutputFields();

      const spinner = ora('Creating component...').start();

      const graphql = new Graphql({
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
         console.log(chalk.red('Could not add component'));
         console.dir(response.errors, {
            depth: null,
         });

         return;
      }

      await generator.generate({ ...component, id: response.data?.id }, config);

      spinner.succeed(chalk.green(`✅ Component created successfully! (ID: ${response.data?.id})`));
   });
