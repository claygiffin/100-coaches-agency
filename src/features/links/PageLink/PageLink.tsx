import { gql } from 'graphql-tag'
import Link from 'next/link'
import type { ComponentProps } from 'react'

import DatoLinkIcon from '../LinkIcon/LinkIcon'

export type PageLinkProps = ComponentProps<'a'> & {
  data: Queries.PageLinkFragment | null | undefined
  showIcon?: boolean
}

export const PageLink = ({
  data,
  showIcon,
  ...props
}: PageLinkProps) => {
  const getSlug = () => {
    switch (data?.page?.__typename) {
      case 'HomePageRecord':
        return '/'
      case 'CoachCategoryRecord':
        return `/coaches/${data.page.slug}/`
      default:
        return `/${data?.page?.slug}/`
    }
  }
  return (
    <Link
      href={getSlug()}
      scroll={true}
      {...props}
    >
      <span>{data?.linkText}</span>
      {showIcon && <DatoLinkIcon iconType="ARROW" />}
    </Link>
  )
}

export const PageLinkFragment = gql`
  fragment PageLink on PageLinkRecord {
    __typename
    id
    linkText
    page {
      __typename
      ... on AboutPageRecord {
        slug
      }
      ... on CoachCategoryRecord {
        slug: categorySlug
      }
    }
  }
`
