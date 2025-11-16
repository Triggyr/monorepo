"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const graphql_1 = __importDefault(require("@triggyr/graphql"));
const utils_1 = require("../adapter/utils");
class Component {
    module;
    component_id;
    info_cache;
    constructor(module, component_id) {
        this.module = module;
        this.component_id = component_id;
    }
    async run(input, opts) {
        return this.module.default(input, opts);
    }
    async init(input, opts) {
        if (!this.module.init) {
            throw new Error(`Component with id - "${this.component_id}" does not have an init function`);
        }
        return this.module.init(input, opts);
    }
    async stop(input, opts) {
        if (!this.module.stop) {
            throw new Error(`Component with id - "${this.component_id}" does not have a stop function`);
        }
        return this.module.stop(input, opts);
    }
    validator(input) {
        return this.module.validator(input);
    }
    async info() {
        if (this.info_cache)
            return this.info_cache;
        const config = await (0, utils_1.loadConfig)();
        const graphql = new graphql_1.default({
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
            throw new Error(`Could not get information for component with id - "${this.component_id}"`);
        }
        return data;
    }
    hasInit() {
        return typeof this.module.init === 'function';
    }
    hasStop() {
        return typeof this.module.stop === 'function';
    }
    clear() {
        this.info_cache = undefined;
    }
}
class ComponentLoader {
    componentsDir;
    graphql;
    components;
    static instance;
    constructor(componentsDir, graphql, components = new Map()) {
        this.componentsDir = componentsDir;
        this.graphql = graphql;
        this.components = components;
    }
    static async getInstance() {
        if (!ComponentLoader.instance) {
            const config = await (0, utils_1.loadConfig)();
            const graphql = new graphql_1.default({
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
    loadComponent(component_id, file_path) {
        delete require.cache[require.resolve(file_path)]; // Clear require cache to allow hot reload
        const module = require(file_path);
        if (!module.default || typeof module.default !== 'function') {
            throw new Error(`Component ${component_id} does not export a default function`);
        }
        if (!module.validator || typeof module.validator !== 'function') {
            throw new Error(`Component ${component_id} does not export a validator function`);
        }
        this.components.set(component_id, new Component(module, component_id));
    }
    load() {
        this.components.clear();
        const base_dir = path.join(process.cwd(), this.componentsDir);
        const types = fs
            .readdirSync(base_dir, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name);
        for (const type of types) {
            const type_path = path.join(this.componentsDir, type);
            if (!fs.existsSync(type_path))
                continue;
            const sub_types = fs
                .readdirSync(type_path, { withFileTypes: true })
                .filter((dirent) => dirent.isDirectory())
                .map((dirent) => dirent.name);
            for (const subType of sub_types) {
                const subTypePath = path.join(type_path, subType);
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
    async reload(component_id) {
        const response = await this.graphql.selectByPk('components', ['id', 'type', 'sub_type'], {
            pkName: 'id',
            pkValue: component_id,
        });
        const component = response.data;
        if (!component) {
            throw new Error(`Component with id - "${component_id}" was not found`);
        }
        const base_dir = path.join(process.cwd(), this.componentsDir, component.type, component.sub_type);
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
    getComponent(id) {
        const component = this.components.get(id);
        if (!component) {
            throw new Error(`Component ${id} not loaded. Call load() first.`);
        }
        return component;
    }
    hasComponent(id) {
        return this.components.has(id);
    }
    getLoadedComponentIds() {
        return Array.from(this.components.keys());
    }
    clear() {
        this.components.clear();
    }
}
exports.default = ComponentLoader;
