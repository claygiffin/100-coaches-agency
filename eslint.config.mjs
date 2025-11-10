import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import unusedImports from 'eslint-plugin-unused-imports'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Next.js recommended rules (Core Web Vitals) + TypeScript rules
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    // Defaults from eslint-config-next (keep these unless you need different):
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    // Your custom ignores:
    '**/archive/*.ts',
    '**/archive/*.tsx',
    'node_modules',
    'public',
    '**/generated-types.d.ts',
  ]),

  {
    plugins: {
      'unused-imports': unusedImports,
    },
  },
  {
    rules: {
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/refs': 'warn',
      'react-hooks/purity': 'warn',
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
  },
  // Put the Prettier “recommended” last so it can disable conflicting stylistic rules
  eslintPluginPrettierRecommended,
])
