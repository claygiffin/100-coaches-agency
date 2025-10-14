import { gql } from 'graphql-tag'
import type { Metadata, NextPage } from 'next'

import { Article } from '@/features/articles'
import { VideoFragment } from '@/features/leadership-sections'
import { generateDatoCmsMetadata } from '@/features/seo'
import { datoRequest } from '@/lib/datocms-fetch'

// export const dynamic = 'force-static'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const {
    data: { allVideos },
  } = await datoRequest<Queries.AllVideoPageQuery>({
    query: gql`
      query AllVideoPage {
        allVideos(first: 10000) {
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
  query VideoPage($slug: String!) {
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
  } = await datoRequest<Queries.VideoPageQuery>({
    query,
    variables: { slug },
  })
  return generateDatoCmsMetadata(video?._seoMetaTags || [], {
    canonicalSlug: slug,
  })
}

const VideoPage: NextPage<Props> = async ({ params }) => {
  const { slug } = await params
  const {
    data: { video },
  } = await datoRequest<Queries.VideoPageQuery>({
    query,
    variables: { slug },
  })
  return (
    <main>
      <Article
        article={video}
        layout="MODAL"
      />
    </main>
  )
}

export default VideoPage
