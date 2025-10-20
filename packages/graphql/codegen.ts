import type { CodegenConfig } from '@graphql-codegen/cli';
import z from 'zod';
import dotenv from 'dotenv';
dotenv.config();

const schema = z.object({
   HASURA_GRAPHQL_URL: z.url(),
   HASURA_GRAPHQL_SECRET: z.string(),
});

const env = schema.parse(process.env);

const config: CodegenConfig = {
   schema: [
      {
         [env.HASURA_GRAPHQL_URL]: {
            headers: {
               'x-hasura-admin-secret': env.HASURA_GRAPHQL_SECRET,
            },
         },
      },
   ],
   generates: {
      './src/generated/graphql.ts': {
         plugins: ['typescript'],
         config: {
            skipTypename: true,
            enumsAsTypes: true,
         },
      },
   },
};

export default config;
