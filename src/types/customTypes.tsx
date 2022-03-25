import { IGatsbyImageData } from 'gatsby-plugin-image'

export type CoachProps = {
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
  bioSummary?: string
  seo: SeoProps
}

export type TeamMemberProps = {
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

export type SeoProps = {
  title: string
  description: string
  image?: {
    url: string
  }
}
