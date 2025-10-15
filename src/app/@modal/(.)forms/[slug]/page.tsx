import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { toNextMetadata } from 'react-datocms'

import { FormModal, FormModalFragment } from '@/features/form'
import { Modal } from '@/features/modal'
import { datoRequest } from '@/lib/datocms-fetch'

// // export const dynamic = 'force-static'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const {
    data: { allFormModals },
  } = await datoRequest<Queries.AllFormModalQuery>({
    query: gql`
      query AllFormModal {
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
  query FormModal($slug: String!) {
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
  } = await datoRequest<Queries.FormModalQuery>({
    query,
    variables: { slug },
  })
  return toNextMetadata(formModal?._seoMetaTags || [])
}

const FormModalPage: NextPage<Props> = async ({ params }) => {
  const { slug } = await params
  const {
    data: { formModal },
  } = await datoRequest<Queries.FormModalQuery>({
    query,
    variables: { slug },
  })
  return (
    <Modal
      variant={'FORM'}
      metadata={toNextMetadata(formModal?._seoMetaTags || [])}
    >
      <FormModal
        data={formModal}
        variant={'MODAL'}
      />
    </Modal>
  )
}

export default FormModalPage
