'use client'

import { type ComponentProps } from 'react'
import { StructuredText } from 'react-datocms/structured-text'

import { DatoLink } from '@/features/links'
import { AnimateIn } from '@/features/ui'

import styles from './LeaderShipHero.module.scss'
import { LeaderShipHeroImage } from './LeaderShipHeroImage/LeaderShipHeroImage'

type Props = ComponentProps<'section'> & {
  data: Queries.LeaderShipHeroFragment | null | undefined
}

export const LeaderShipHero = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      {...props}
    >
      <div className={styles.background}>
        <LeaderShipHeroImage data={data?.heroImage} />
      </div>
      <AnimateIn
        as="h1"
        innerAs="span"
        className={styles.heading}
      >
        <span>{data?.heroHeadingLine1}</span>{' '}
        <span>{data?.heroHeadingLine2}</span>
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
        <span className={styles.linksLabel}>
          {data?.heroLinksLabel}
        </span>
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
