import type { Components } from '@triggyr/graphql';
import type { ComponentOpts, DeepPartial } from '../adapter/types';
import Graphql from '@triggyr/graphql';
type Handler<I = any, O = any> = (input: I, opts: ComponentOpts) => Promise<O>;
type InitFn<I = any> = (input: I, opts: ComponentOpts) => Promise<boolean>;
type StopFn<I = any> = (input: I, opts: ComponentOpts) => Promise<boolean>;
type ValidatorFn<I = any> = (input: I) => I;
interface Module<I = any, O = any> {
    default: Handler<I, O>;
    init?: InitFn<I>;
    stop?: StopFn<I>;
    validator: ValidatorFn<I>;
}
declare class Component<I = any, O = any> {
    private module;
    private component_id;
    private info_cache?;
    constructor(module: Module<I, O>, component_id: string);
    run(input: I, opts: ComponentOpts): Promise<O>;
    init(input: I, opts: ComponentOpts): Promise<boolean>;
    stop(input: I, opts: ComponentOpts): Promise<boolean>;
    validator(input: I): I;
    info(): Promise<DeepPartial<Components>>;
    hasInit(): boolean;
    hasStop(): boolean;
    clear(): void;
}
export default class ComponentLoader {
    private componentsDir;
    private graphql;
    private components;
    private static instance?;
    constructor(componentsDir: string, graphql: Graphql, components?: Map<string, Component>);
    static getInstance(): Promise<ComponentLoader>;
    private loadComponent;
    load(): void;
    reload(component_id: string): Promise<void>;
    getComponent<I = any, O = any>(id: string): Component<I, O>;
    hasComponent(id: string): boolean;
    getLoadedComponentIds(): string[];
    clear(): void;
}
export {};
