import z from 'zod';
export declare const TriggyrCLIConfig: z.ZodObject<{
    componentsDir: z.ZodString;
    connection: z.ZodObject<{
        graphqlUrl: z.ZodURL;
        graphqlSecret: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type TriggyrCLIConfig = z.infer<typeof TriggyrCLIConfig>;
export type ComponentOpts = {
    store: Map<string, any>;
    workflow: {
        id: string;
        status: 'published' | 'draft';
        metadata: null | {
            [key: string]: any;
        };
    };
    should_simulate?: boolean;
    mnemonic?: string;
    address?: {
        [key: string]: string;
    };
    request?: {
        headers: any;
        body: {
            [key: string]: any;
        };
    };
    extra?: {
        [key: string]: any;
    };
};
