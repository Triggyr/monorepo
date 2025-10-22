import z from 'zod';

export const TriggyrCLIConfig = z.object({
   componentsDir: z.string(),
   connection: z.object({
      graphqlUrl: z.url(),
      graphqlSecret: z.string(),
   }),
});

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
