import { type ComponentProps, type ComponentType } from 'react'

import { DatoImageFocused } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'
import { MarkdownHeading } from '@/features/ui'
import { useVariables } from '@/hooks/useVariables'

import styles from './ThoughtLeadershipItem.module.scss'

type Props = ComponentProps<'article'> & {
  data: Queries.ThoughtLeadershipItemFragment | null | undefined
  nav: ComponentType
  isActive: boolean
}

export const ThoughtLeadershipItem = ({
  data,
  nav: Nav,
  isActive,
  ...props
}: Props) => {
  const { getBreakpoint } = useVariables()

  return (
    <article
      className={styles.article}
      data-is-active={isActive}
      {...props}
    >
      <div className={styles.image}>
        <DatoImageFocused
          data={data?.image?.responsiveImage}
          focalPoint={data?.image?.focalPoint}
          sizes={`(max-width: ${getBreakpoint('ml')}px) 90vw, 50vw`}
        />
      </div>
      <div className={styles.content}>
        <Nav />
        <div className={styles.contentInner}>
          <MarkdownHeading
            className={styles.heading}
            as="h2"
          >
            {data?.heading || ''}
          </MarkdownHeading>
          <div className={styles.body}>
            <DatoStructuredText data={data?.body} />
            <DatoLink
              className={styles.link}
              data={data?.link}
              isButton
              borderVariant={'ROUNDED'}
            />
          </div>
        </div>
      </div>
    </article>
  )
}
