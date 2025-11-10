'use client'

import { useId, useRef } from 'react'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'
import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'

import styles from './AboutServices.module.scss'

type Props = {
  data: Queries.AboutServicesFragment | null | undefined
}

export const AboutServices = ({ data }: Props) => {
  const clipId = useId()
  const sectionRef = useRef<HTMLElement>(null)
  const sectWidth = useElementWidth(sectionRef) || 0
  const sectHeight = useElementHeight(sectionRef) || 0

  return (
    <section
      className={styles.section}
      style={{ '--clip-id-url': `url(#${clipId})` }}
      ref={sectionRef}
    >
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute' }}
      >
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M${sectWidth},${0.047 * sectWidth} C${
                0.68 * sectWidth
              },${0.14 * sectWidth} ${0.333 * sectWidth},${
                -0.105 * sectWidth
              } 0,${
                0.06 * sectWidth
              } L0,${sectHeight} L${sectWidth},${sectHeight} L${sectWidth},${
                0.047 * sectWidth
              } Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.content}>
        <h2 className={styles.heading}>{data?.servicesHeading}</h2>
        {data?.services.map((service, i) => (
          <div key={i}>
            {service.title && (
              <h3 className={styles.title}>{service.title}</h3>
            )}
            <div className={styles.description}>
              <DatoStructuredText data={service.description} />
            </div>
            <DatoLink
              className={styles.link}
              data={service.link[0]}
              isButton
              borderVariant={'ROUNDED'}
              iconType={'ARROW_RIGHT'}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
