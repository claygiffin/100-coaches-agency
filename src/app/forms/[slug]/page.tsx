import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import { FormModal, FormModalFragment } from '@/features/form'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

import styles from './formPage.module.scss'

// export const dynamic = 'force-static'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const {
    data: { allFormModals },
  } = await datoRequest<Queries.AllFormPagesQuery>({
    query: gql`
      query AllFormPages {
        allFormModals(first: 10000) {
          slug
        }
      }
    `,
  })
  return allFormModals.map(({ slug }) => ({
    slug,
  }))
}

const query = gql`
  query FormPage($slug: String!) {
    formModal(filter: { slug: { eq: $slug } }) {
      ...FormModal
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
  ${FormModalFragment}
`

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params
  const {
    data: { formModal },
  } = await datoRequest<Queries.FormPageQuery>({
    query,
    variables: { slug },
  })
  return generateDatoCmsMetadata(formModal?._seoMetaTags || [], {
    canonicalSlug: `forms/${slug}`,
  })
}

const FormPage: NextPage<Props> = async ({ params }) => {
  const { slug } = await params
  const {
    data: { formModal },
  } = await datoRequest<Queries.FormPageQuery>({
    query,
    variables: { slug },
  })
  return (
    <main className={styles.main}>
      <FormModal
        data={formModal}
        variant={'PAGE'}
      />
    </main>
  )
}

export default FormPage
