import { IGatsbyImageData } from 'gatsby-plugin-image'

export type CoachProps = {
  __typename: string
  id: string
  name: string
  photo: {
    thumbnail: IGatsbyImageData
    large: IGatsbyImageData
    small: IGatsbyImageData
    alt: string
  }
  jobTitle: string
  jobTitleExtended: string
  photoAlignment: 'Left' | 'Right'
  bio: {
    value: any
  }
  bioSummary: string
}

export type SeoProps = {
  title: string
  description: string
  image?: {
    url: string
  }
}
