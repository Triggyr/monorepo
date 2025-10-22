import { type TriggyrCLIConfig } from '../types';
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
        type: string;
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
declare class Generator {
    private ensureDirectoryExists;
    private generateZodSchema;
    private updateExistingFile;
    private generateType;
    private generateFunctionTemplate;
    private format;
    generate: (component: Component, config: TriggyrCLIConfig) => Promise<void>;
}
declare const _default: Generator;
export default _default;
