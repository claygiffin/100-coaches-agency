'use client'

import { uniqueId } from 'lodash'
import { type ComponentProps, useId, useMemo, useState } from 'react'

import { AnimateIn } from '@/features/common'
import { LogoStacked } from '@/features/logo'
import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'
import variables from '@/theme/variables.module.scss'

import styles from './HomeHero.module.scss'
import { HomeHeroImages } from './HomeHeroImages/HomeHeroImages'

type Props = ComponentProps<'section'> & {
  data: Queries.HomeHeroFragment | null | undefined
}

export const HomeHero = ({ data, ...props }: Props) => {
  const clipId = useId()
  const gradientId = useId()

  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null)
  const sectWidth = useElementWidth(sectionRef) || 0
  const sectHeight = useElementHeight(sectionRef) || 0

  return (
    <section
      className={styles.section}
      ref={node => setSectionRef(node)}
      style={{ '--clip-id': `#${clipId}` }}
      {...props}
    >
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute' }}
      >
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M0,${sectHeight - 0.01 * sectWidth} C${
                sectWidth * 0.375
              },${sectHeight - 0.2 * sectWidth} ${sectWidth * 0.375},${
                sectHeight + 0.2 * sectWidth
              } ${sectWidth},${
                sectHeight - 0.15 * sectWidth
              } L${sectWidth},0 L0,0 L0,${
                sectHeight - 0.01 * sectWidth
              } Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.background}>
        <HomeHeroImages data={data?.heroImages} />
        <svg
          viewBox="0 0 1440 415"
          className={styles.ribbons}
        >
          <defs>
            <linearGradient
              x1="100%"
              y1="45%"
              x2="0%"
              y2="55%"
              id={gradientId}
            >
              <stop
                stopColor={variables.color_gold}
                offset="0%"
              />
              <stop
                stopColor={variables.color_goldShade1}
                offset="33%"
              />
              <stop
                stopColor={variables.color_goldShade2}
                offset="67%"
              />
              <stop
                stopColor={variables.color_goldShade3}
                offset="100%"
              />
            </linearGradient>
          </defs>
          <path
            d="M1440,64 C970,446 518.5,407 0,0 L0,415 L1440,415 L1440,64 Z"
            fill="#fff"
            opacity={0.1}
          />
          <path
            d="M0,288.5 C544.5,80.5 674,765 1440,64 L1440,415 L0,415 L0,288.5 Z"
            fill={`url(#${gradientId})`}
          />
        </svg>
      </div>
      <AnimateIn
        className={styles.logoWrap}
        innerClassName={styles.logoWrapInner}
      >
        <LogoStacked className={styles.logo} />
      </AnimateIn>
      <AnimateIn
        as="h1"
        innerAs="span"
        className={styles.heading}
      >
        <span>{data?.heroHeading1}</span>{' '}
        <span>{data?.heroHeading2}</span>
      </AnimateIn>
    </section>
  )
}
