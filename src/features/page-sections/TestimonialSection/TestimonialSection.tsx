import { type ComponentProps } from 'react'

import { TestimonialCarousel } from '../AboutPartner/TestimonialCarousel/TestimonialCarousel'
import styles from './TestimonialSection.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.TestimonialSectionFragment
}

export const TestimonialSection = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      data-color-scheme={data.colorScheme}
      {...props}
    >
      <TestimonialCarousel
        data={data.testimonials}
        variant={'V2'}
      />
    </section>
  )
}
