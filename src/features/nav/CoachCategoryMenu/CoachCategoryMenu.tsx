import { gql } from 'graphql-tag'
import type { ComponentProps } from 'react'

import { CategoryMenu } from '../CategoryMenu/CategoryMenu'

type Props = ComponentProps<'nav'> & {
  coachCategories:
    | Queries.CoachCategoryMenuFragment[]
    | null
    | undefined
  backArrow?: boolean
}
export const CoachCategoryMenu = ({
  backArrow,
  coachCategories,
}: Props) => {
  return (
    <CategoryMenu
      path="/coaches/"
      categories={coachCategories}
      heading="Coaches dedicated to finding the right solutions to your business challenges."
      backArrow={backArrow}
      allLink
    />
  )
}

export const CoachCategoryMenuFragment = gql`
  fragment CoachCategoryMenu on CoachCategoryRecord {
    __typename
    id
    categoryName
    categoryNameFull
    description
    categorySlug
  }
`
