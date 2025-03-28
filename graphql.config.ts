import dotenv from 'dotenv'

dotenv.config()

const config = {
  schema: {
    'https://graphql.datocms.com': {
      headers: {
        Authorization: process.env.DATOCMS_API_TOKEN || '',
        'X-Exclude-Invalid': 'true',
        ...(process.env.DATOCMS_DRAFT_MODE === 'true' && {
          'X-Include-Drafts': 'true',
        }),
        ...(process.env.DATOCMS_ENVIRONMENT && {
          'X-Environment': process.env.DATOCMS_ENVIRONMENT,
        }),
      },
    },
  },
  documents: ['src/**/*.{graphql,gql,js,ts,jsx,tsx}'],
}

export default config
