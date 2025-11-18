import { collectInputFields, collectOutputFields, isRequired, loadConfig } from '../utils';
import { supported_blockchains } from '../settings.json';
import { Command } from 'commander';
import inquirer from 'inquirer';
import Graphql from '@triggyr/graphql';
import chalk from 'chalk';
import ora from 'ora';
import generator from '../generator';

export default new Command('update')
   .description('Update an existing component')
   .option('--id <id>', 'Component ID')
   .action(async (opts) => {
      const config = await loadConfig();

      const answers1 = await inquirer.prompt([
         {
            type: 'input',
            name: 'id',
            message: 'Component ID:',
            default: opts.id,
            when: !opts.id,
            validate: isRequired,
         },
      ]);

      const id = answers1.id ?? opts.id;

      const graphql = new Graphql({
         host: config.connection.graphqlUrl,
         log_query: false,
         debug: false,
         headers: {
            'x-hasura-admin-secret': config.connection.graphqlSecret,
         },
      });

      let spinner = ora('Fetching component...').start();

      const { data: component } = await graphql.selectOne(
         'components',
         [
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
         ],
         {
            where: {
               id: {
                  _eq: id,
               },
            },
         },
      );

      if (!component) {
         spinner.fail(chalk.red('Component not found'));
         return;
      }

      spinner.stop();

      const answers = await inquirer.prompt([
         {
            type: 'input',
            name: 'name',
            message: 'Name:',
            default: component.name,
            validate: isRequired,
         },
         {
            type: 'input',
            name: 'description',
            message: 'Description:',
            default: component.description,
            validate: isRequired,
         },
         {
            type: 'checkbox',
            name: 'supported_blockchains',
            message: 'Supported blockchains (optional):',
            choices: supported_blockchains,
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
      const { updateInput } = await inquirer.prompt([
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
         console.log(chalk.cyan('\n📝 Add Input Fields'));
         const newFields = await collectInputFields();
         input = [...input, ...newFields];
      } else if (updateInput === 'replace') {
         console.log(chalk.cyan('\n📝 Configure Input Fields'));
         input = await collectInputFields();
      } else if (updateInput === 'clear') {
         input = [];
      }

      let output = component.output ?? [];
      const { updateOutput } = await inquirer.prompt([
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
         console.log(chalk.cyan('\n📝 Add Output Fields'));
         const newFields = await collectOutputFields();
         output = [...output, ...newFields];
      } else if (updateOutput === 'replace') {
         console.log(chalk.cyan('\n📝 Configure Output Fields'));
         output = await collectOutputFields();
      } else if (updateOutput === 'clear') {
         output = [];
      }

      spinner = ora('Updating component...').start();

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
         spinner.fail(chalk.red('Could not update component (GraphQL error)'));
         console.dir(response.errors, {
            depth: null,
         });

         return;
      }

      await generator.generate({ ...update, id: component.id }, config);

      spinner.succeed(chalk.green(`✅ Component updated successfully! (ID: ${component.id})`));
   });
