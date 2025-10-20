import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
   {
      ignores: ['dist', 'node_modules'],
   },
   {
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
      languageOptions: {
         parser: tsparser,
         parserOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
         },
         globals: {
            console: 'readonly',
            process: 'readonly',
            __dirname: 'readonly',
            __filename: 'readonly',
            Buffer: 'readonly',
            setImmediate: 'readonly',
            setInterval: 'readonly',
            setTimeout: 'readonly',
            clearImmediate: 'readonly',
            clearInterval: 'readonly',
            clearTimeout: 'readonly',
         },
      },
      plugins: {
         '@typescript-eslint': tseslint,
      },
      rules: {
         ...tseslint.configs.recommended.rules,
         '@typescript-eslint/no-unused-vars': ['warn'],
         '@typescript-eslint/explicit-function-return-type': 'off',
      },
   },
   eslintConfigPrettier,
];
