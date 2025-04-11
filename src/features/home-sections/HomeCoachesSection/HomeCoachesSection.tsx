import { type ComponentProps } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'
import { MarkdownHeading } from '@/features/ui'
import { AnimateIn } from '@/features/ui'

import styles from './HomeCoachesSection.module.scss'
import { HomeCoachesSectionBackground } from './HomeCoachesSectionBackground/HomeCoachesSectionBackground'

type Props = ComponentProps<'section'> & {
  data: Queries.HomeCoachesSectionFragment | null | undefined
}

export const HomeCoachesSection = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      {...props}
    >
      <HomeCoachesSectionBackground data={data?.backgroundImages} />
      <div className={styles.text}>
        <AnimateIn>
          <MarkdownHeading
            className={styles.heading}
            as="h2"
          >
            {data?.heading || ''}
          </MarkdownHeading>
        </AnimateIn>
        <AnimateIn className={styles.body}>
          <DatoStructuredText data={data?.body} />
          <DatoLink
            className={styles.cta}
            data={data?.cta}
            isButton
            borderVariant={'ROUNDED'}
          />
        </AnimateIn>
      </div>
    </section>
  )
}
