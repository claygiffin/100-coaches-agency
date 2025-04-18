import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier/recommended'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const pluginsToPatch = ['@next/next', 'react-hooks']

const compatConfig = [...compat.extends('next/core-web-vitals')]

const patchedConfig = compatConfig.map(entry => {
  const plugins = entry.plugins
  for (const key in plugins) {
    if (plugins.hasOwnProperty(key) && pluginsToPatch.includes(key)) {
      plugins[key] = fixupPluginRules(plugins[key])
    }
  }
  return entry
})

export default tseslint.config(
  {
    ignores: [
      '**/archive/*.ts',
      '**/archive/*.tsx',
      '.next',
      'node_modules',
      'public',
      '.cache',
    ],
  },
  ...patchedConfig,
  ...tseslint.configs.recommended,
  prettier,
  {
    // extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-type-imports': 'warn',
      'no-restricted-imports': [
        'error',
        {
          patterns: ['@/features/*/*'],
        },
      ],
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  }
)
