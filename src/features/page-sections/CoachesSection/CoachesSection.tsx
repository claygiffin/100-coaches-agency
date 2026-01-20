import { isEmptyDocument } from 'datocms-structured-text-utils'
import { type ComponentProps } from 'react'

import { Carousel } from '@/features/carousel'
import { CoachCategoryThumbnail } from '@/features/coaches'
import {
  DatoStructuredText,
  noEmptyParagraphsRule,
} from '@/features/dato-structured-text'
import { Button } from '@/features/ui'

import styles from './CoachesSection.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.CoachesSectionFragment
}

export const CoachesSection = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      data-color-scheme={data.colorScheme}
      {...props}
    >
      {data._heading && (
        <h2 className={styles.heading}>{data._heading}</h2>
      )}
      {!isEmptyDocument(data._body) && (
        <div className={styles.body}>
          <DatoStructuredText
            data={data._body}
            customNodeRules={[noEmptyParagraphsRule]}
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case 'ButtonRecord': {
                  return (
                    <Button
                      className={styles.button}
                      data={record}
                    />
                  )
                }
              }
            }}
          />
        </div>
      )}
      {data.layout === 'CAROUSEL' && (
        <Carousel
          className={styles.carousel}
          navClass={styles.carouselNav}
          contentClass={styles.carouselContent}
          scrollAreaClass={styles.scrollArea}
          navVariant={'OVERLAY'}
          slideCount={data.coaches.length}
          snap
        >
          {data.coaches.map((coach, i) => (
            <CoachCategoryThumbnail
              className={styles.thumbnail}
              coach={coach}
              key={coach.id}
              index={i}
            />
          ))}
        </Carousel>
      )}
      {data.layout === 'GRID' && (
        <div className={styles.grid}>
          {data.coaches.map((coach, i) => (
            <CoachCategoryThumbnail
              className={styles.thumbnail}
              coach={coach}
              key={coach.id}
              index={i}
            />
          ))}
        </div>
      )}
    </section>
  )
}
