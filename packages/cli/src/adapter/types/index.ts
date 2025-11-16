import type { Workflows } from '@triggyr/graphql';
import z from 'zod';

export const TriggyrCLIConfig = z.object({
   componentsDir: z.string(),
   connection: z.object({
      graphqlUrl: z.url(),
      graphqlSecret: z.string(),
   }),
});

export type TriggyrCLIConfig = z.infer<typeof TriggyrCLIConfig>;

export type DeepPartial<T> = T extends object
   ? T extends Array<infer U>
      ? Array<DeepPartial<U>>
      : T extends Function
        ? T
        : { [P in keyof T]?: DeepPartial<T[P]> }
   : T;

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
