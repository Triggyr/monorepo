import { isRequired, loadConfig } from '../utils';
import { Command } from 'commander';
import inquirer from 'inquirer';
import ora from 'ora';
import chalk from 'chalk';
import Graphql from '@triggyr/graphql';
import generator from '../generator';

export default new Command('sync')
   .description('Sync a working workflow file template for component')
   .option('--id <id>', 'Component id')
   .action(async (opts) => {
      const config = await loadConfig();

      const answers = await inquirer.prompt([
         {
            type: 'input',
            name: 'id',
            message: 'Component ID:',
            default: opts.id,
            when: !opts.id,
            validate: isRequired,
         },
      ]);

      const spinner = ora('Fetching component metadata...').start();

      const graphql = new Graphql({
         host: config.connection.graphqlUrl,
         log_query: false,
         debug: false,
         headers: {
            'x-hasura-admin-secret': config.connection.graphqlSecret,
         },
      });

      const response = await graphql.selectByPk(
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
            pkName: 'id',
            pkValue: answers.id ?? opts.id,
         },
      );

      const component = response.data;
      if (!component) {
         console.log(chalk.red('Could not get component metadata'));
         return;
      }

      await generator.generate(component, config);

      spinner.succeed(chalk.green(`✅ Component sync completed! (ID: ${component.id})`));
   });
