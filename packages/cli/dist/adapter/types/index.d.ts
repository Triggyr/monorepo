import type { Workflows } from '@triggyr/graphql';
import z from 'zod';
export declare const TriggyrCLIConfig: z.ZodObject<{
    componentsDir: z.ZodString;
    connection: z.ZodObject<{
        graphqlUrl: z.ZodURL;
        graphqlSecret: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type TriggyrCLIConfig = z.infer<typeof TriggyrCLIConfig>;
export type DeepPartial<T> = T extends object ? T extends Array<infer U> ? Array<DeepPartial<U>> : T extends Function ? T : {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export type ComponentOpts = {
    store: Map<string, any>;
    workflow: DeepPartial<Workflows>;
    should_simulate?: boolean;
    request?: {
        body?: Record<string, any>;
        headers?: Record<string, any>;
    };
    [key: string]: any;
};
