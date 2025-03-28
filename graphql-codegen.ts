import type { CodegenConfig } from '@graphql-codegen/cli'

import graphqlConfig from './graphql.config'

const config: CodegenConfig = {
  ...graphqlConfig,
  ignoreNoDocuments: true, // for better experience with the watcher
  // watch: true, // Leave off, set in CLI
  generates: {
    './src/types/generated-types.d.ts': {
      // preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        {
          add: {
            content: ['declare namespace Queries {'],
          },
        },
        {
          add: {
            placement: 'append',
            content: '}',
          },
        },
      ],
      config: {
        namingConvention: 'keep',
        noExport: true,
        enumAsTypes: true,
        dedupeFragments: true,
        strictScalars: true,
        scalars: {
          BooleanType: 'boolean',
          CustomData: 'Record<string, unknown>',
          Date: 'string',
          DateTime: 'string',
          FloatType: 'number',
          IntType: 'number',
          ItemId: 'string',
          JsonField: 'unknown',
          MetaTagAttributes: 'Record<string, string>',
          UploadId: 'string',
        },
      },
    },
  },
}

export default config
