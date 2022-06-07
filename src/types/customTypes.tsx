import { StructuredText as IStructuredText } from 'datocms-structured-text-utils'
import { IGatsbyImageData } from 'gatsby-plugin-image'

export type { StructuredText as IStructuredText } from 'datocms-structured-text-utils'

interface Person {
  __typename: string
  id: string
  name: string
  photo: {
    thumbnail: IGatsbyImageData
    large: IGatsbyImageData
    small: IGatsbyImageData
    thumbnailUrl: string
    alt: string
  }
  jobTitle: string
  jobTitleExtended: string
  photoAlignment: 'Left' | 'Right'
  bio: {
    value: any
  }
  seo: SeoProps
}

export interface CoachProps extends Person {
  __typename: 'DatoCmsCoach'
  bioSummary?: string
}

export interface TeamMemberProps extends Person {
  __typename: 'DatoCmsTeamMember'
}

export type SeoProps = {
  title: string
  description: string
  image?: {
    url: string
  }
}

export type ArticleProps = {
  __typename: 'DatoCmsArticle'
  id: string
  title: string
  author: CoachProps | TeamMemberProps
  body: IStructuredText
  meta: { publishedAt: string }
}
