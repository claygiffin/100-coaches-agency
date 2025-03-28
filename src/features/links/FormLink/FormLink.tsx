import { gql } from 'graphql-tag'
import Link from 'next/link'
import type { ComponentProps } from 'react'

import DatoLinkIcon from '../LinkIcon/LinkIcon'

export type FormLinkProps = ComponentProps<'a'> & {
  data: Queries.FormLinkFragment | null | undefined
  showIcon?: boolean
}

export const FormLink = ({
  data,
  showIcon,
  ...props
}: FormLinkProps) => {
  return (
    <Link
      href={`/forms/${data?.form?.slug}`}
      scroll={false}
      {...props}
    >
      <span>{data?.linkText}</span>
      {showIcon && <DatoLinkIcon iconType="ARROW" />}
    </Link>
  )
}

export const FormLinkFragment = gql`
  fragment FormLink on FormLinkRecord {
    __typename
    id
    linkText
    form {
      __typename
      ... on FormRecord {
        slug
      }
    }
  }
`
