'use client'

import Link from 'next/link'
import { useId, useMemo, useState } from 'react'

import { LogoStacked } from '@/features/logo'
import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'
import variables from '@/theme/variables.module.scss'

import styles from './Footer.module.scss'

export const Footer = () => {
  const clipId = useId()
  const gradientId = useId()
  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null)
  const sectWidth = useElementWidth(sectionRef) || 0
  const sectHeight = useElementHeight(sectionRef) || 0

  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer
      className={styles.footer}
      ref={node => setSectionRef(node)}
      style={{ '--clip-id-url': `url(#${clipId})` }}
    >
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute' }}
      >
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M${sectWidth},${0.021 * sectWidth} C${
                0.48 * sectWidth
              },${-0.06 * sectWidth} ${0.35 * sectWidth},${
                0.13 * sectWidth
              } 0,${
                0.001 * sectWidth
              } L0,${sectHeight} L${sectWidth},${sectHeight} L${sectWidth},${
                0.021 * sectWidth
              } Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1440 200"
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
          d="M1440,187 C1029,-26.5 576,34.5 0,187 L0,0 L1440,0 L1440,187 Z"
          fill="#fff"
          opacity={0.1}
        />
        <path
          d="M0,107.5 C526,168.5 736.5,-97 1440,89.5 L1440,0 L0,0 L0,107.5 Z"
          fill={`url(#${gradientId})`}
        />
      </svg>
      <div className={styles.content}>
        <Link
          href="/"
          className={styles.logo}
          aria-label="100 Coaches Agency"
        >
          <LogoStacked />
        </Link>
        <Link
          className={styles.link}
          href="/contact"
        >
          Find a Coach
        </Link>
        <div className={styles.rights}>
          <span>100 Coaches Agency.</span>{' '}
          <span>All rights reserved.</span> <span>© {year}</span>
        </div>
      </div>
    </footer>
  )
}
