import { FlatCompat } from '@eslint/eslintrc'

import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ),
  ...compat.plugins(
    'react',
    '@typescript-eslint',
    'import',
    'unused-imports',
    'babun4ek-fsd-plugin',
    'prettier',
  ),
  ...compat.config({
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
      '@typescript-eslint',
      'import',
      'unused-imports',
      'babun4ek-fsd-plugin',
      'prettier',
    ],
    rules: {
      'no-console': 'warn',
      '@next/next/no-img-element': 'off',
      'no-unused-vars': 'off',
      'react/prop-types': 'off',
      'no-useless-escape': 'off',
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'babun4ek-fsd-plugin/path-checker': ['error', { alias: '@' }],
      'babun4ek-fsd-plugin/public-api-imports': [
        'error',
        {
          alias: '@',
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'babun4ek-fsd-plugin/layer-imports-checker': [
        'error',
        {
          alias: '@',
          ignoreImportsPatters: ['**/StoreProvider'],
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'external',
            'builtin',
            'internal',
            'parent',
            'sibling',
            'object',
            'type',
            'index',
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'builtin',
            },
            {
              pattern: '@**',
              group: 'external',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },

    overrides: [
      {
        files: ['*.js'],
        rules: {
          '@typescript-eslint/no-require-imports': 'off',
        },
      },
    ],
  }),
]

export default eslintConfig
