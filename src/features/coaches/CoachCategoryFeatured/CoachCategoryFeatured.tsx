import Link from 'next/link'

import { DatoImage } from '@/features/dato-image'
import { ArrowButton } from '@/features/ui'

import styles from './CoachCategoryFeatured.module.scss'

type PropTypes = {
  featuredCoach: Queries.CoachProfileFragment | null | undefined
}

export const CoachCategoryFeatured = ({
  featuredCoach,
  ...props
}: PropTypes) => {
  return (
    <section
      className={styles.section}
      {...props}
      data-photo-alignment={featuredCoach?.photoAlignment}
    >
      <div className={styles.background}>
        <svg
          viewBox="0 0 1440 111"
          className={styles.topCurve}
        >
          <path
            fill="#f2f2f2"
            d="M0,97.67294 C478,-143.32706 978.5,215.17294 1440,78.17294 L1440,0 L0,0 L0,97.67294 Z"
          />
          <path
            fill="#fff"
            d="M0,69.4461582 C511,-107.726782 856.5,118.273218 1440,49.9461582 L1440,-1.42108547e-14 L0,-1.42108547e-14 L0,69.4461582 Z"
          />
        </svg>
      </div>
      <div className={styles.text}>
        <span>Coach Spotlight</span>
        <h2>{featuredCoach?.name}</h2>
        <h3>
          {featuredCoach?.jobTitleExtended || featuredCoach?.jobTitle}
        </h3>
        <p>{featuredCoach?.bioSummary}</p>
        <ArrowButton
          as={Link}
          href={`/coaches/profiles/${featuredCoach?.slug}`}
          text="Read more"
          className={styles.button}
          scroll={false}
        />
      </div>
      <div className={styles.photo}>
        <DatoImage
          data={featuredCoach?.photo.responsiveImage}
          alt={
            featuredCoach?.photo.responsiveImage?.alt ||
            `${featuredCoach?.name} — ${featuredCoach?.jobTitle}`
          }
          objectPosition={
            featuredCoach?.photoAlignment === 'Right'
              ? '0% 0%'
              : '100% 0%'
          }
          sizes={`45vw`}
        />
      </div>
      <svg
        className={styles.bottomCurve}
        viewBox="0 0 1440 34"
      >
        <path
          fill="#fff"
          d="M0,34 L1440,34 L1440,23.2663845 C954,60.6352155 443.5,-44.3209746 0,23.2663845 L0,34 Z"
        />
      </svg>
    </section>
  )
}
