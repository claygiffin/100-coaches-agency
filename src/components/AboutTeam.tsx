import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import CoachCategoryThumbnail from '../components/CoachCategoryThumbnail'
import { useElementRect } from '../hooks/useElementRect'
import { absoluteFill, baseGrid, mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import { CoachProps } from '../types/customTypes'

const AboutTeam = () => {
  const { page, team } = useStaticQuery(graphql`
    query {
      page: datoCmsAboutPage {
        teamHeading
      }
      team: allDatoCmsTeamMember(sort: { position: ASC }) {
        nodes {
          ...TeamMemberFragment
        }
      }
    }
  `)
  const clipId = useMemo(() => uniqueId('clipPath--'), [])
  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null)
  const refCallback = useCallback((node: HTMLElement | null) => {
    setSectionRef(node)
  }, [])
  const { width: sectWidth, height: sectHeight } =
    useElementRect(sectionRef)

  const styles = {
    section: css`
      ${baseGrid}
      padding: calc(var(--gutter-lg) + 3.5vw) 0 calc(var(--gutter-xlg) + 5vw);
      margin-top: -3.5vw;
      &:before {
        content: '';
        ${absoluteFill}
        background: #fff;
        z-index: 0;
        clip-path: url(#${clipId});
      }
    `,
    heading: css`
      grid-column: 2 / -2;
      color: ${colors.goldShade1};
      font-size: var(--fs-60);
      margin: 0.5em 0;
      position: relative;
    `,
    teamMembers: css`
      grid-column: 2 / -2;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: var(--gutter-sm);
      ${mq().ml} {
        grid-template-columns: repeat(3, 1fr);
      }
      ${mq().ms} {
        grid-template-columns: repeat(2, 1fr);
      }
    `,
  }
  return (
    <section css={styles.section} ref={refCallback}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
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
      <h2 css={styles.heading}>{page.teamHeading}</h2>
      <div css={styles.teamMembers}>
        {team.nodes.map((teamMember: CoachProps, i: number) => (
          <CoachCategoryThumbnail
            coach={teamMember}
            key={i}
            index={i}
            directory="team"
          />
        ))}
      </div>
    </section>
  )
}

export default AboutTeam
