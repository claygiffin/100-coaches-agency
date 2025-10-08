import { type ComponentProps } from 'react'

import { DatoImageFocused } from '@/features/dato-image'
import { Flourish } from '@/features/decorations'

import styles from './PageHero.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.PageHeroFragment
}

export const PageHero = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      {...props}
    >
      <div className={styles.imageContainer}>
        <DatoImageFocused
          className={styles.image}
          data={data.backgroundImage.responsiveImage}
          focalPoint={data.backgroundImage.focalPoint}
          aspectRatio={4}
        />
      </div>
      <h1 className={styles.heading}>
        <Flourish className={styles.flourish} />
        <span>{data.heading}</span>
        <Flourish
          className={styles.flourish}
          flip
        />
      </h1>
    </section>
  )
}
