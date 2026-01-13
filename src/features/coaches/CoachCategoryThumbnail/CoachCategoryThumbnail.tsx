'use client'

import Link from 'next/link'
import { useId } from 'react'

import { DatoImage } from '@/features/dato-image'
import { useVariables } from '@/hooks'
import { classes } from '@/utils'

import styles from './CoachCategoryThumbnail.module.scss'

type PropTypes = {
  coach: Queries.CoachProfileFragment | Queries.TeamMemberFragment
  index: number
  className?: string
}

export const CoachCategoryThumbnail = ({
  coach,
  index,
  className,
}: PropTypes) => {
  const { getBreakpoint, getColor } = useVariables()

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
      className={classes(styles.container, className)}
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
                stopColor={getColor('goldShade3')}
                offset="0%"
              />
              <stop
                stopColor={getColor('goldShade2')}
                offset="30%"
              />
              <stop
                stopColor={getColor('goldShade1')}
                offset="60%"
              />
              <stop
                stopColor={getColor('gold')}
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
          sizes={`(max-width: ${getBreakpoint('ms')}px) 45vw, (max-width: ${getBreakpoint('ml')}px) 30vw, 20vw`}
        />
      </div>
      <div className={styles.text}>
        <h2>{coach.name}</h2>
        <h3>{coach.jobTitle}</h3>
      </div>
    </Link>
  )
}
