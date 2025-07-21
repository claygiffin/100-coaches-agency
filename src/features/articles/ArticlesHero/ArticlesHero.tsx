'use client'

import { type ComponentProps } from 'react'
import { StructuredText } from 'react-datocms/structured-text'

import { DatoLink } from '@/features/links'
import { AnimateIn } from '@/features/ui'

import styles from './ArticlesHero.module.scss'
import { ArticlesHeroImage } from './ArticlesHeroImage/ArticlesHeroImage'

type Props = ComponentProps<'section'> & {
  data: Queries.ArticlesHeroFragment | null | undefined
}

export const ArticlesHero = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      {...props}
    >
      <div className={styles.background}>
        <ArticlesHeroImage data={data?.heroImage} />
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
        {data?.heroLinks.map((link, index) => {
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
