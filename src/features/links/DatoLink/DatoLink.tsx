import { type ComponentProps } from 'react'

import { FormLink } from '../FormLink/FormLink'
import { PageLink } from '../PageLink/PageLink'

type Props = ComponentProps<'a'> & {
  data:
    | Queries.PageLinkFragment
    | Queries.FormLinkFragment
    | null
    | undefined
  showIcon?: boolean
}

export const DatoLink = ({ data, showIcon, ...props }: Props) => {
  switch (data?.__typename) {
    case 'PageLinkRecord': {
      return (
        <PageLink
          data={data}
          showIcon={showIcon}
          {...props}
        />
      )
    }
    case 'FormLinkRecord': {
      return (
        <FormLink
          data={data}
          showIcon={showIcon}
          {...props}
        />
      )
    }
  }
}
