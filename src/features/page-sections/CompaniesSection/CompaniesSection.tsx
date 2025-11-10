'use client'

import { type ComponentProps, useId, useRef } from 'react'

import { MarkdownHeading } from '@/features/ui'
import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'

import styles from './CompaniesSection.module.scss'
import { Company } from './Company/Company'

type Props = ComponentProps<'section'> & {
  data: Queries.CompaniesSectionFragment | null | undefined
  variant?: 'DEFAULT' | 'ALT1'
}

export const CompaniesSection = ({
  data,
  variant = 'DEFAULT',
  ...props
}: Props) => {
  const clipId = useId()
  const sectionRef = useRef<HTMLElement>(null)
  const sectWidth = useElementWidth(sectionRef) || 0
  const sectHeight = useElementHeight(sectionRef) || 0

  return (
    <section
      className={styles.section}
      ref={sectionRef}
      style={{
        '--clip-id-url': `url(#${clipId})`,
        '--count': data?.companies.length,
      }}
      data-variant={variant}
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
              d={`M0,${0.02 * sectWidth} 
              C${0.17 * sectWidth},${-0.04 * sectWidth} 
              ${0.62 * sectWidth},${0.07 * sectWidth} 
              ${sectWidth},${0.01 * sectWidth} 
              L${sectWidth},${sectHeight} 
              L0,${sectHeight}
              Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.background} />

      <MarkdownHeading
        className={styles.heading}
        as="h2"
      >
        {data?.heading || ''}
      </MarkdownHeading>
      <div className={styles.companies}>
        <div>
          {data?.companies.map(icon => {
            return (
              <Company
                data={icon}
                key={icon.id}
              />
            )
          })}

          {data?.companies.map(icon => {
            // Map again to create infinite loop
            return (
              <Company
                data={icon}
                key={icon.id}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
