import Link from 'next/link'
import { useId } from 'react'

import { DatoImage } from '@/features/dato-image'
import variables from '@/theme/variables.module.scss'

import styles from './CoachCategoryThumbnail.module.scss'

type PropTypes = {
  coach: Queries.CoachProfileFragment | Queries.TeamMemberFragment
  index: number
}

export const CoachCategoryThumbnail = ({ coach, index }: PropTypes) => {
  const gradientId = useId()
  const getSlug = () => {
    switch (coach.__typename) {
      case 'CoachRecord': {
        return `/coaches/profiles/${coach.slug}`
      }
      case 'TeamMemberRecord': {
        return `/team/${coach.slug}`
      }
    }
  }
  return (
    <Link
      href={getSlug()}
      className={styles.container}
      scroll={false}
    >
      <div className={styles.imageWrap}>
        <svg
          viewBox="0 0 329 144"
          className={styles.background}
        >
          <defs>
            <linearGradient
              x1="0%"
              y1="55%"
              x2="100%"
              y2="45%"
              id={gradientId}
            >
              <stop
                stopColor={variables.color_goldShade3}
                offset="0%"
              />
              <stop
                stopColor={variables.color_goldShade2}
                offset="30%"
              />
              <stop
                stopColor={variables.color_goldShade1}
                offset="60%"
              />
              <stop
                stopColor={variables.color_gold}
                offset="100%"
              />
            </linearGradient>
          </defs>
          {index % 2 === 0 ? (
            <path
              fill={`url(#${gradientId})`}
              d="M0,25 C82.25,-4.75 246.75,-4.75 329,25 L329,144 L0,144 L0,25 Z"
            />
          ) : (
            <path
              fill={`url(#${gradientId})`}
              d="M0,28 C82.25,57.75 246.75,57.75 329,28 L329,144 L0,144 L0,28 Z"
            />
          )}
        </svg>
        <DatoImage
          className={styles.image}
          data={coach.photo.responsiveImage}
          alt={
            coach.photo.responsiveImage?.alt ||
            `${coach.name} — ${coach.jobTitle}`
          }
          sizes={`(max-width: ${variables.breakpoint_ms}px) 45vw, (max-width: ${variables.breakpoint_ml}px) 30vw, 20vw`}
        />
      </div>
      <div className={styles.text}>
        <h2>{coach.name}</h2>
        <h3>{coach.jobTitle}</h3>
      </div>
    </Link>
  )
}
