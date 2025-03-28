import { gql } from 'graphql-tag'
import type { ComponentProps } from 'react'

import { AnimateIn, ArrowButton } from '@/features/common'
import { CoachCategoryMenu } from '@/features/nav'

import styles from './HomePromise.module.scss'
import { HomePromiseBackground } from './HomePromiseBackground/HomePromiseBackground'

type Props = ComponentProps<'section'> & {
  data: Queries.HomePromiseFragment | null | undefined
  allCoachCategories:
    | Queries.CoachCategoryMenuFragment[]
    | null
    | undefined
}

export const HomePromise = ({
  data,
  allCoachCategories,
  ...props
}: Props) => {
  return (
    <section
      className={styles.section}
      {...props}
    >
      <HomePromiseBackground />
      <div className={styles.content}>
        <AnimateIn className={styles.heading}>
          <h2>{data?.promiseHeading}</h2>
        </AnimateIn>
        <AnimateIn className={styles.body}>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.promiseBody || '',
            }}
          />
          <ArrowButton
            text="See our coaches"
            style="OUTLINE"
            color="WHITE"
            className={styles.button}
          >
            <CoachCategoryMenu coachCategories={allCoachCategories} />
          </ArrowButton>
        </AnimateIn>
      </div>
    </section>
  )
}

export const HomePromiseFragment = gql`
  fragment HomePromise on HomePageRecord {
    promiseHeading
    promiseBody(markdown: true)
    # promiseBodyNode {
    #   childMarkdownRemark {
    #     html
    #   }
    # }
  }
`
