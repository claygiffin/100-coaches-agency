import { type ComponentProps } from 'react'

import { MediaCarousel } from '@/features/carousel'

import styles from './MediaSection.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.MediaSectionFragment
}

export const MediaSection = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      data-color-scheme={data.colorScheme}
      {...props}
    >
      <MediaCarousel
        className={styles.carousel}
        data={data.mediaCarousel}
      />
    </section>
  )
}
