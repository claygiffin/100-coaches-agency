import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'
import { toNextMetadata } from 'react-datocms'

import { Article } from '@/features/articles'
import { VideoFragment } from '@/features/leadership-sections'
import { Modal } from '@/features/modal'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

// // export const dynamic = 'force-static'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const {
    data: { allVideos },
  } = await datoRequest<Queries.AllVideoModalQuery>({
    query: gql`
      query AllVideoModal {
        allVideos(first: 999) {
          slug
        }
      }
    `,
  })
  return allVideos.map(({ slug }) => ({
    slug,
  }))
}

const query = gql`
  query VideoModal($slug: String!) {
    video(filter: { slug: { eq: $slug } }) {
      ...Video
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
  ${VideoFragment}
`

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params
  const {
    data: { video },
  } = await datoRequest<Queries.VideoModalQuery>({
    query,
    variables: { slug },
  })
  return generateDatoCmsMetadata(video?._seoMetaTags || [], {
    canonicalSlug: slug,
  })
}

const VideoModal: NextPage<Props> = async ({ params }) => {
  const { slug } = await params
  const {
    data: { video },
  } = await datoRequest<Queries.VideoModalQuery>({
    query,
    variables: { slug },
  })
  return (
    <Modal metadata={toNextMetadata(video?._seoMetaTags || [])}>
      <Article
        article={video}
        layout="MODAL"
      />
    </Modal>
  )
}

export default VideoModal
