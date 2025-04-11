'use client'

import { useId, useState } from 'react'

import { CoachCategoryThumbnail } from '@/features/coaches'
import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'

import styles from './AboutTeam.module.scss'

type Props = {
  heading: Queries.AboutPageRecord['teamHeading'] | null | undefined
  team: Queries.TeamMemberFragment[] | null | undefined
}
export const AboutTeam = ({ heading, team }: Props) => {
  const clipId = useId()
  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null)
  const sectWidth = useElementWidth(sectionRef) || 0
  const sectHeight = useElementHeight(sectionRef) || 0

  return (
    <section
      className={styles.section}
      style={{ '--clip-id-url': `url(#${clipId})` }}
      ref={node => setSectionRef(node)}
    >
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute' }}
      >
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M0,${0.03 * sectWidth} C${0.5 * sectWidth},${
                0.05 * sectWidth
              } ${0.75 * sectWidth},${
                -0.045 * sectWidth
              } ${sectWidth},${
                0.03 * sectWidth
              } L${sectWidth},${sectHeight} L0,${sectHeight}
              Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.teamMembers}>
        {team?.map((teamMember, i: number) => (
          <CoachCategoryThumbnail
            coach={teamMember}
            key={i}
            index={i}
          />
        ))}
      </div>
    </section>
  )
}
