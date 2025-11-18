import { type TriggyrCLIConfig } from '../types';
import { version } from '../../../package.json';
import prettier from 'prettier';
import * as path from 'path';
import * as fs from 'fs';

type Component = {
   id: string;
   name: string;
   description: string;
   type: string;
   sub_type: string;
   supported_blockchains?: string[];
   is_coming_soon: boolean;
   is_dead_end: boolean;
   input: {
      key: string;
      type: string[];
      description: string;
      hidden?: boolean;
      required: boolean;
      default?: any;
      enum?: string[];
      nullable?: boolean;
   }[];
   output: {
      key: string;
      type: string;
      description: string;
      required: boolean;
      nullable: boolean;
   }[];
};

class Generator {
   private ensureDirectoryExists = (dirPath: string) => {
      if (!fs.existsSync(dirPath)) {
         fs.mkdirSync(dirPath, {
            recursive: true,
         });
      }
   };

   private generateZodSchema = (component: Component) => {
      const fields = component.input;
      const _fieldBaseValidation = (field: Component['input'][0], type: string) => {
         let baseValidation = '';
         switch (type) {
            case 'string':
               if (field.key.toLowerCase().includes('email')) {
                  baseValidation = 'z.email()';
                  break;
               }

               if (field.key.toLowerCase().includes('url')) {
                  baseValidation = 'z.url()';
                  break;
               }

               baseValidation = 'z.string().trim()';
               if (field.required)
                  baseValidation += `.min(1, "${field.key.split('_').join(' ')} is required")`;
               break;

            case 'number':
               baseValidation = 'z.number()';
               break;

            case 'boolean':
               baseValidation = 'z.boolean()';
               break;

            case 'datetime':
               baseValidation = 'z.iso.datetime()';
               break;

            case 'object':
               baseValidation = 'z.record(z.string(), z.any())';
               break;

            case 'array':
               baseValidation = 'z.array(z.any())';
               break;

            default:
               baseValidation = 'z.any()';
         }

         if ('enum' in field && field.enum && field.enum.length > 0) {
            const values = field.enum.map((val) => `"${val}"`).join(', ');
            baseValidation = `z.enum([${values}])`;
         }

         if (field.nullable) baseValidation += '.nullable()';
         if (!field.required) baseValidation += '.optional()';

         return baseValidation;
      };

      const validations = fields.map((field) => {
         if (field.type.length === 1) {
            return `      "${field.key}": ${_fieldBaseValidation(field, field.type[0])}`;
         }

         const _validations = field.type.map((entry) => _fieldBaseValidation(field, entry));
         return `      "${field.key}": z.union([${_validations.join(', ')}])`;
      });

      return `
        const schema = z.object({
            ${validations.join(',\n')}
        });`;
   };

   private updateExistingFile = (filePath: string, component: Component) => {
      const existingContent = fs.readFileSync(filePath, 'utf-8');

      const newInputInterface = this.generateType(component.input, 'Input');
      const newOutputInterface = this.generateType(component.output, 'Output');
      const newZodSchema = this.generateZodSchema(component);

      let updatedContent = existingContent;

      // -- update Input type
      const inputTypeRegex = /type Input = \{[^}]*\}/s;
      if (inputTypeRegex.test(existingContent)) {
         const newContent = updatedContent.replace(inputTypeRegex, newInputInterface);
         if (newContent !== updatedContent) updatedContent = `\n${newContent}`;
      }

      // -- update Output type
      const outputTypeRegex = /type Output = \{[^}]*\}/s;
      if (outputTypeRegex.test(updatedContent)) {
         const newContent = updatedContent.replace(outputTypeRegex, newOutputInterface);
         if (newContent !== updatedContent) updatedContent = `\n${newContent}`;
      }

      // -- update zod schema
      const validateFunctionRegex =
         /export function validator\(input: Input\) \{[\s\S]*?return schema\.parse\(input\);\s*\}/;
      if (validateFunctionRegex.test(updatedContent)) {
         const newValidateFunction = `
            \n
            export function validator(input: Input) {
                ${newZodSchema}

                return schema.parse(input);
            }
      `;

         const newContent = updatedContent.replace(validateFunctionRegex, newValidateFunction);
         if (newContent !== updatedContent) updatedContent = newContent;
      }

      return updatedContent;
   };

   private generateType = (
      fields: Component['input'] | Component['output'],
      interfaceName: string,
   ) => {
      const _fieldType = (field: Component['input'][0] | Component['output'][0], type: string) => {
         let fieldType =
            type === 'datetime'
               ? 'string'
               : type === 'object'
                 ? 'Record<string, any>'
                 : type === 'array'
                   ? 'any[]'
                   : type;

         if ('enum' in field && field.enum && field.enum.length > 0) {
            fieldType = field.enum.map((val) => `"${val}"`).join(' | ');
         }

         return fieldType;
      };

      const fieldStrings = fields.map((field) => {
         const optional = !field.required || field.nullable ? '?' : '';
         const nullable = field.nullable ? ' | null' : '';

         const fieldType = Array.isArray(field.type)
            ? field.type.map((t) => _fieldType(field, t)).join(' | ')
            : _fieldType(field, field.type);

         const defaultLine =
            'default' in field && field.default
               ? `\n    * @default ${JSON.stringify(field.default)}`
               : '';

         return `   
            /**
            *
            * @description ${field.description}${defaultLine}
            */
            "${field.key}"${optional}: ${fieldType}${nullable};
        `;
      });

      return `type ${interfaceName} = {
                ${fieldStrings.join('\n\n')}
            };
        `;
   };

   private generateFunctionTemplate = (component: Component) => {
      const inputInterface = this.generateType(component.input, 'Input');
      const outputInterface = this.generateType(component.output, 'Output');

      const fnBody = component.is_coming_soon
         ? `throw new Error("Component is coming soon..");`
         : `return null;`;

      const triggerFns =
         component.type === 'trigger'
            ? `
               export async function init(input: Input, opts: ComponentOpts): Promise<boolean> {
                  // TODO: function to set trigger for component
                  input = validator(input);

                  return false;
               }

               export async function stop(input: Input, opts: ComponentOpts): Promise<boolean> {
                  // TODO: function to kill trigger for component
                  input = validator(input);
                  
                  return false;
               }
            `
            : ``;

      return `
        /**
        *
        * ================================
        * Triggyr CLI generator v${version}
        * ================================
        *
        * @name ${component.name} (${component.id})
        * @description ${component.description}
        */

        import { type ComponentOpts } from '@triggyr/cli';
        import z from 'zod';
        
        // DO NOT EDIT!!!!
        const component_id = '${component.id}';

        ${inputInterface}
        \n

        ${outputInterface}
        \n

        export function validator(input: Input) {
            ${this.generateZodSchema(component)}
         
            return schema.parse(input);
        }

        ${triggerFns}

        export default async function (input: Input, opts: ComponentOpts): Promise<Output | null> {
            // TODO: Implement the actual logic for ${component.name}

            const start = Date.now();
            input = validator(input);
  
            ${fnBody}
        }
    `;
   };

   private format = async (code: string) => {
      try {
         const config = await prettier.resolveConfig(process.cwd());
         return prettier.format(code, {
            ...(config || {}),
            parser: 'typescript',
         });
      } catch {
         return code;
      }
   };

   generate = async (component: Component, config: TriggyrCLIConfig) => {
      const outputDir = path.join(
         process.cwd(),
         config.componentsDir,
         component.type,
         component.sub_type,
      );

      this.ensureDirectoryExists(outputDir);

      const filename = `${component.id}.ts`;
      const filePath = path.join(outputDir, filename);

      let code;

      if (fs.existsSync(filePath)) {
         code = this.updateExistingFile(filePath, component);
      } else {
         code = this.generateFunctionTemplate(component);
      }

      if (code) {
         fs.writeFileSync(filePath, await this.format(code));
      }
   };
}

export default new Generator();
