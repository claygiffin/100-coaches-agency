import { type ComponentProps } from 'react'

import { classes } from '@/utils/css'

import { AnchorLink } from '../AnchorLink/AnchorLink'
import { ArticleLink } from '../ArticleLink/ArticleLink'
import { CoachMenuLink } from '../CoachMenuLink/CoachMenuLink'
import { DocumentLink } from '../DocumentLink/DocumentLink'
import { ExternalLink } from '../ExternalLink/ExternalLink'
import { FormLink } from '../FormLink/FormLink'
import { PageLink } from '../PageLink/PageLink'
import styles from './DatoLink.module.scss'

import type { IconType } from '../LinkIcon/LinkIcon'

type Props = ComponentProps<'a' | 'button'> & {
  iconType?: IconType
  isButton?: boolean
  borderVariant?: 'SQUARE' | 'ROUNDED'
  data:
    | Queries.PageLinkFragment
    | Queries.FormLinkFragment
    | Queries.ArticleLinkFragment
    | Queries.DocumentLinkFragment
    | Queries.CoachMenuLinkFragment
    | Queries.ExternalLinkFragment
    | Queries.AnchorLinkFragment
    | null
    | undefined
}

export const DatoLink = ({
  data,
  iconType,
  isButton,
  borderVariant,
  className,
  ...props
}: Props) => {
  const linkProps = {
    iconType,
    'data-border-style': borderVariant,
    'data-direction':
      iconType === 'ARROW_LEFT' ? 'LEFT' : iconType && 'RIGHT',
    className: classes(
      isButton && styles.button,
      styles.link,
      className
    ),
    ...props,
  }
  switch (data?.__typename) {
    case 'PageLinkRecord': {
      return (
        <PageLink
          data={data}
          {...(linkProps as ComponentProps<'a'>)}
        />
      )
    }
    case 'FormLinkRecord': {
      return (
        <FormLink
          data={data}
          {...(linkProps as ComponentProps<'a'>)}
        />
      )
    }
    case 'CoachMenuLinkRecord': {
      return (
        <CoachMenuLink
          data={data}
          {...(linkProps as ComponentProps<'button'>)}
        />
      )
    }
    case 'AnchorLinkRecord': {
      return (
        <AnchorLink
          data={data}
          {...(linkProps as ComponentProps<'a'>)}
        />
      )
    }
    case 'ArticleLinkRecord': {
      return (
        <ArticleLink
          data={data}
          {...(linkProps as ComponentProps<'a'>)}
        />
      )
    }
    case 'DocumentLinkRecord': {
      return (
        <DocumentLink
          data={data}
          {...(linkProps as ComponentProps<'a'>)}
        />
      )
    }
    case 'ExternalLinkRecord': {
      return (
        <ExternalLink
          data={data}
          {...(linkProps as ComponentProps<'a'>)}
        />
      )
    }
  }
}
