import * as fs from 'fs';
import * as path from 'path';
import type { Components } from '@triggyr/graphql';
import type { ComponentOpts, DeepPartial } from '../adapter/types';
import Graphql from '@triggyr/graphql';
import { loadConfig } from '../adapter/utils';

type Handler<I = any, O = any> = (input: I, opts: ComponentOpts) => Promise<O | null>;
type InitFn<I = any> = (input: I, opts: ComponentOpts) => Promise<boolean>;
type StopFn<I = any> = (input: I, opts: ComponentOpts) => Promise<boolean>;
type ValidatorFn<I = any> = (input: I) => I;

interface Module<I = any, O = any> {
   default: Handler<I, O>;
   init?: InitFn<I>;
   stop?: StopFn<I>;
   validator: ValidatorFn<I>;
}

class Component<I = any, O = any> {
   private info_cache?: DeepPartial<Components>;

   constructor(
      private module: Module<I, O>,
      private component_id: string,
   ) {}

   async run(input: I, opts: ComponentOpts): Promise<O | null> {
      return this.module.default(input, opts);
   }

   async init(input: I, opts: ComponentOpts): Promise<boolean> {
      if (!this.module.init) {
         throw new Error(
            `Component with id - "${this.component_id}" does not have an init function`,
         );
      }

      return this.module.init(input, opts);
   }

   async stop(input: I, opts: ComponentOpts): Promise<boolean> {
      if (!this.module.stop) {
         throw new Error(
            `Component with id - "${this.component_id}" does not have a stop function`,
         );
      }
      return this.module.stop(input, opts);
   }

   validator(input: I): I {
      return this.module.validator(input);
   }

   async info(): Promise<DeepPartial<Components>> {
      if (this.info_cache) return this.info_cache;

      const config = await loadConfig();
      const graphql = new Graphql({
         host: config.connection.graphqlUrl,
         log_query: false,
         debug: false,
         headers: {
            'x-hasura-admin-secret': config.connection.graphqlSecret,
         },
      });

      const response = await graphql.selectByPk('components', ['id'], {
         pkName: 'id',
         pkValue: this.component_id,
      });

      const data = response.data;
      if (!data) {
         throw new Error(
            `Could not get information for component with id - "${this.component_id}"`,
         );
      }

      return data;
   }

   hasInit(): boolean {
      return typeof this.module.init === 'function';
   }

   hasStop(): boolean {
      return typeof this.module.stop === 'function';
   }

   clear(): void {
      this.info_cache = undefined;
   }
}

export default class ComponentLoader {
   private static instance?: ComponentLoader;

   constructor(
      private componentsDir: string,
      private graphql: Graphql,
      private components: Map<string, Component> = new Map(),
   ) {}

   static async getInstance() {
      if (!ComponentLoader.instance) {
         const config = await loadConfig();
         const graphql = new Graphql({
            host: config.connection.graphqlUrl,
            log_query: false,
            debug: false,
            headers: {
               'x-hasura-admin-secret': config.connection.graphqlSecret,
            },
         });

         ComponentLoader.instance = new ComponentLoader(config.componentsDir, graphql);
         ComponentLoader.instance.load();
      }

      return ComponentLoader.instance;
   }

   private loadComponent(component_id: string, file_path: string): void {
      delete require.cache[require.resolve(file_path)]; // Clear require cache to allow hot reload

      const module = require(file_path) as Module;
      if (!module.default || typeof module.default !== 'function') {
         throw new Error(`Component ${component_id} does not export a default function`);
      }

      if (!module.validator || typeof module.validator !== 'function') {
         throw new Error(`Component ${component_id} does not export a validator function`);
      }

      this.components.set(component_id, new Component(module, component_id));
   }

   load(): void {
      this.components.clear();

      const base_dir = path.join(process.cwd(), this.componentsDir);
      const types = fs
         .readdirSync(base_dir, { withFileTypes: true })
         .filter((dirent) => dirent.isDirectory())
         .map((dirent) => dirent.name);

      for (const type of types) {
         const type_path = path.join(base_dir, type);
         if (!fs.existsSync(type_path)) continue;

         const sub_types = fs
            .readdirSync(type_path, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name);

         for (const sub_type of sub_types) {
            const subTypePath = path.join(type_path, sub_type);
            const files = fs
               .readdirSync(subTypePath)
               .filter((file) => file.endsWith('.ts') || file.endsWith('.js'));

            for (const file of files) {
               const component_id = path.basename(file, path.extname(file));
               const file_path = path.join(subTypePath, file);

               this.loadComponent(component_id, file_path);
            }
         }
      }
   }

   async reload(component_id: string): Promise<void> {
      const response = await this.graphql.selectByPk('components', ['id', 'type', 'sub_type'], {
         pkName: 'id',
         pkValue: component_id,
      });

      const component = response.data;
      if (!component) {
         throw new Error(`Component with id - "${component_id}" was not found`);
      }

      const base_dir = path.join(
         process.cwd(),
         this.componentsDir,
         component.type,
         component.sub_type,
      );

      const ts_path = path.join(base_dir, `${component_id}.ts`);
      if (fs.existsSync(ts_path)) {
         return this.loadComponent(component_id, ts_path);
      }

      const js_path = path.join(base_dir, `${component_id}.js`);
      if (fs.existsSync(js_path)) {
         return this.loadComponent(component_id, js_path);
      }

      throw new Error(`Component with id - "${component_id}" does not have an integration file`);
   }

   getComponent<I = any, O = any>(id: string): Component<I, O> {
      const component = this.components.get(id);
      if (!component) {
         throw new Error(`Component ${id} not loaded. Call load() first.`);
      }

      return component as Component<I, O>;
   }

   hasComponent(id: string): boolean {
      return this.components.has(id);
   }

   getLoadedComponentIds(): string[] {
      return Array.from(this.components.keys());
   }

   clear(): void {
      this.components.clear();
   }
}
