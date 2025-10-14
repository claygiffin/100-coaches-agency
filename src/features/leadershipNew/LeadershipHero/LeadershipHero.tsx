'use client'

import { type ComponentProps } from 'react'
import { StructuredText } from 'react-datocms/structured-text'

import { DatoLink } from '@/features/links'
import { AnimateIn } from '@/features/ui'

import styles from './LeadershipHero.module.scss'
import { LeadershipHeroImage } from './LeadershipHeroImage/LeadershipHeroImage'

type Props = ComponentProps<'section'> & {
  data: Queries.LeadershipHeroFragment | null | undefined
}

export const LeadershipHero = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      {...props}
    >
      <div className={styles.background}>
        <LeadershipHeroImage data={data?.heroImage} />
      </div>
      <AnimateIn
        as="h1"
        innerAs="span"
        className={styles.heading}
      >
        <span>{data?.heroHeadingLine}</span>{' '}
      </AnimateIn>
      <AnimateIn
        as="div"
        innerAs="span"
        className={styles.body}
      >
        <div className={styles.body}>
          <StructuredText data={data?.heroText} />
        </div>
      </AnimateIn>
      <div className={styles.links}>
        {data?.heroLinksLabel && (
          <span className={styles.linksLabel}>
            {data.heroLinksLabel}
          </span>
        )}
        {data?.heroLinks.map(link => {
          return (
            <DatoLink
              key={link.id}
              data={link}
              className={styles.link}
            />
          )
        })}
      </div>
    </section>
  )
}
