<h1 align="center">Triggyr: @triggyr/cli</h1>

## Installation

Install the latest version with `pnpm`:

```sh
pnpm add 'https://gitpkg.vercel.app/Triggyr/monorepo/packages/cli?main'
```

## Usage

In the root of your project, create a `triggyr.config.js` file with the following contents

```js
import { TriggyrCLIConfig } from '@triggyr/cli';

/**
 *
 * @type TriggyrCLIConfig
 */
const config = {
   componentsDir: 'components',
   connection: {
      graphqlUrl: 'https://hasura.triggyr.xyz/v1/graphql',
      graphqlSecret: 'secret',
   },
};

export default config;
```

- **componentsDir**: directory where components implementation files should be kept
- **connection.graphqlUrl**: hasura graphql endpoint
- **connection.graphqlSecret**: hasura graphql admin secret
