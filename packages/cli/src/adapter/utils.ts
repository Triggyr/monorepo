import { field_types, config_filename } from './settings.json';
import { TriggyrCLIConfig } from './types';
import { pathToFileURL } from 'url';
import { existsSync } from 'fs';
import { join } from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';

export async function loadConfig() {
   const configPath = join(process.cwd(), config_filename);
   if (!existsSync(configPath)) {
      throw new Error(`${config_filename} is yet to be setup`);
   }

   const fileUrl = pathToFileURL(configPath).href;
   const module = await import(fileUrl);
   return TriggyrCLIConfig.parse(module.default);
}

export function isRequired(input: string) {
   return input.trim() !== '' || 'You must provide a value';
}

function stringToArrayOrUndefined(str?: string | null) {
   str = (str || '').trim();
   if (!str || str == '') return undefined;
   return str.split(',').map((s) => s.trim());
}

function getDefault(type: string, data: string) {
   data = data.trim();
   if (!data || data == '') return undefined;
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
      } catch {
         if (type === 'object') {
            return {};
         }

         return [];
      }
   }

   return data;
}

export async function collectInputFields() {
   const fields = [];
   let addMore = true;

   while (addMore) {
      console.log(chalk.bold(`\n📥 Input Field ${fields.length + 1}\n`));

      const answer = await inquirer.prompt([
         {
            type: 'input',
            name: 'key',
            message: 'Field key:',
            validate: isRequired,
         },
         {
            type: 'list',
            name: 'type',
            message: 'Type:',
            choices: field_types,
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
         default: getDefault(answer.type, answer.default),
         enum: stringToArrayOrUndefined(answer.enum),
      };

      fields.push(field);

      const { continueAdding } = await inquirer.prompt([
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

export async function collectOutputFields() {
   const fields = [];
   let addMore = true;

   while (addMore) {
      console.log(chalk.bold(`\n📤 Output Field ${fields.length + 1}\n`));

      const answer = await inquirer.prompt([
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
            choices: field_types,
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

      const { continueAdding } = await inquirer.prompt([
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
