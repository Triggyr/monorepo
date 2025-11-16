#!/usr/bin/env node
import { version, description } from '../package.json';
import { Command } from 'commander';
import chalk from 'chalk';
import boxen from 'boxen';
import add from './adapter/commands/add';
import remove from './adapter/commands/remove';
import update from './adapter/commands/update';

export * as ComponentLoader from './loader';
export type { ComponentOpts, TriggyrCLIConfig } from './adapter/types';

console.log(
   boxen(chalk.cyan.bold('Triggyr internal workflow component CLI'), {
      padding: 1,
      margin: {
         top: 1,
         bottom: 1,
      },
      borderStyle: 'round',
      borderColor: 'cyan',
   }),
);

const program = new Command();

program.name('triggyr').description(description).version(version);

program.addCommand(add);
program.addCommand(update);
program.addCommand(remove);

program.parse();
