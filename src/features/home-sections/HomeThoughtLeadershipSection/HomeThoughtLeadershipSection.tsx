'use client'

import { type ComponentProps, Fragment, useId, useState } from 'react'

import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'

import styles from './HomeThoughtLeadershipSection.module.scss'
import { ThoughtLeadershipItem } from './ThoughtLeadershipItem/ThoughtLeadershipItem'

type Props = ComponentProps<'section'> & {
  data: Queries.ThoughtLeadershipItemFragment[] | null | undefined
}

export const HomeThoughtLeadershipSection = ({
  data,
  ...props
}: Props) => {
  const clipId = useId()
  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null)
  const sectWidth = useElementWidth(sectionRef) || 0
  const sectHeight = useElementHeight(sectionRef) || 0
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const handleBack = () => {
    setActiveSlideIndex(prev => {
      if (prev === 0) {
        return (data?.length || 0) - 1
      } else {
        return prev - 1
      }
    })
  }
  const handleForward = () => {
    setActiveSlideIndex(prev => {
      if (prev === (data?.length || 0) - 1) {
        return 0
      } else {
        return prev + 1
      }
    })
  }
  const Nav = () => {
    if (data?.length && data.length > 1) {
      return (
        <nav className={styles.nav}>
          <button
            className={styles.button}
            data-back
            onClick={handleBack}
          >
            <svg viewBox="0 0 12 20">
              <path d="M11 19L2 10L11 1" />
            </svg>
          </button>
          <button
            className={styles.button}
            data-forward
            onClick={handleForward}
          >
            <svg viewBox="0 0 12 20">
              <path d="M1 19L10 10L1 1" />
            </svg>
          </button>
        </nav>
      )
    }
    return <Fragment />
  }
  return (
    <section
      className={styles.section}
      ref={node => setSectionRef(node)}
      style={{
        '--clip-id-url': `url(#${clipId})`,
      }}
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
              d={`
                M0,0
                L${sectWidth},0
                L${sectWidth},${sectHeight - 0.05 * sectWidth}
                C${0.67 * sectWidth},${sectHeight + 0.08 * sectWidth}
                ${0.32 * sectWidth},${sectHeight - 0.11 * sectWidth}
                0,${sectHeight - 0.04 * sectWidth}
                L0,0               
                Z
                `}
            />
          </clipPath>
        </defs>
      </svg>

      {data?.map((item, i) => {
        return (
          <ThoughtLeadershipItem
            data={item}
            nav={Nav}
            isActive={i === activeSlideIndex}
            key={item.id}
          />
        )
      })}
    </section>
  )
}
