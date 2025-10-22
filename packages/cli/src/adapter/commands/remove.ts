import { isRequired, loadConfig } from '../utils';
import { Command } from 'commander';
import { join } from 'path';
import inquirer from 'inquirer';
import ora from 'ora';
import fs from 'fs';
import chalk from 'chalk';
import Graphql from '@triggyr/graphql';

export default new Command('remove')
   .description('Remove a workflow component')
   .option('--id <id>', 'Component ID')
   .action(async (opts) => {
      const config = await loadConfig();

      const answer = await inquirer.prompt([
         {
            type: 'input',
            name: 'id',
            message: 'Component ID:',
            default: opts.id,
            when: !opts.id,
            validate: isRequired,
         },
         {
            type: 'confirm',
            name: 'confirm',
            message: chalk.red(`Are you sure you want to remove component ${opts.id}?`),
            default: false,
         },
      ]);

      if (!answer.confirm) return;

      const spinner = ora('Removing component...').start();

      const graphql = new Graphql({
         host: config.connection.graphqlUrl,
         log_query: false,
         debug: false,
         headers: {
            'x-hasura-admin-secret': config.connection.graphqlSecret,
         },
      });

      const response = await graphql.update(
         'components',
         { deleted_at: new Date().toISOString() },
         ['id', 'type', 'sub_type'],
         {
            where: {
               id: {
                  _eq: answer.id,
               },
            },
         },
      );

      if (response.errors) {
         spinner.fail(chalk.red('Could not remove component (GraphQL error)'));
         console.dir(response.errors, {
            depth: null,
         });

         return;
      }

      const component = response.data[0];
      if (!component) {
         spinner.fail(chalk.red('Component not found'));
         return;
      }

      const filePath = join(
         process.cwd(),
         config.componentsDir,
         component.type,
         component.sub_type,
         `${component.id}.ts`,
      );

      fs.unlink(filePath, (err) => {
         if (err) {
            spinner.fail(
               chalk.red(
                  `Could not complete file deletion but component was marked as deleted from db!`,
               ),
            );

            console.log(chalk.red(`\nReason: ${err.message}`));
            return;
         }

         spinner.succeed(chalk.green('✅ Component removed successfully!'));
      });
   });
