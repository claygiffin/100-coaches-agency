'use client'

import Link from 'next/link'
import { useId, useState } from 'react'
import { StructuredText } from 'react-datocms'

import { DatoImage } from '@/features/dato-image'
import { ArrowButton } from '@/features/ui'
import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'
import variables from '@/theme/variables.module.scss'

import styles from './CoachProfile.module.scss'

type CoachProfileProps = {
  data:
    | Queries.CoachProfileFragment
    | Queries.TeamMemberFragment
    | null
    | undefined
}

export const CoachProfile = ({ data }: CoachProfileProps) => {
  const [headerBgRef, setHeaderBgRef] = useState<HTMLDivElement | null>(
    null
  )

  const bgWidth = useElementWidth(headerBgRef) || 0
  const bgHeight = useElementHeight(headerBgRef) || 0

  const clipId = useId()
  const gradientId = useId()

  return (
    <article
      className={styles.article}
      data-photo-alignment={data?.photoAlignment}
      style={{
        '--clip-id-url': `url(#${clipId})`,
      }}
    >
      <section className={styles.header}>
        <div
          className={styles.headerBg}
          ref={node => setHeaderBgRef(node)}
        >
          <svg viewBox="0 0 948 58">
            <defs>
              <linearGradient
                x1={data?.photoAlignment === 'Right' ? '100%' : '0%'}
                x2={data?.photoAlignment === 'Right' ? '0%' : '100%'}
                y1="50%"
                y2="50%"
                id={gradientId}
              >
                <stop
                  stopColor={variables.color_gold}
                  offset="0%"
                />
                <stop
                  stopColor={variables.color_goldShade1}
                  offset="40%"
                />
                <stop
                  stopColor={variables.color_goldShade2}
                  offset="80%"
                />
                <stop
                  stopColor={variables.color_goldShade3}
                  offset="100%"
                />
              </linearGradient>
              <clipPath id={clipId}>
                <path
                  d={`M0,${bgWidth * 0.042} C${bgWidth * 0.355},${
                    bgWidth * -0.065
                  } ${bgWidth * 0.6},${bgWidth * 0.072} ${bgWidth},${
                    bgWidth * 0.03
                  } L${bgWidth},${bgHeight} L0,${bgHeight} Z`}
                />
              </clipPath>
            </defs>
            <path
              fill={`url(#${gradientId})`}
              d="M0,55.8631487 C362.278107,-79.5 610.497041,95.5 948,49.5 L948,-5.32907052e-14 L0,-5.32907052e-14 L0,55.8631487 Z"
            />
          </svg>
        </div>
        <div className={styles.headerText}>
          <h1>{data?.name}</h1>
          <h2>{data?.jobTitleExtended || data?.jobTitle}</h2>
          <ArrowButton
            as={Link}
            href="/contact"
            styleVariant="INLINE"
            text="Work With Us"
          />
        </div>
        <div className={styles.photoWrap}>
          <DatoImage
            data={data?.photo.responsiveImage}
            alt={
              data?.photo.responsiveImage?.alt ||
              `${data?.name} — ${data?.jobTitle}`
            }
            objectPosition="0% 0%"
            sizes={`(max-width: ${variables.breakpoint_ms}px) 50vw, (max-width: ${variables.breakpoint_ml}px) 33vw, 25vw`}
          />
        </div>
      </section>
      <section className={styles.body}>
        <StructuredText data={data?.bio} />
      </section>
    </article>
  )
}
