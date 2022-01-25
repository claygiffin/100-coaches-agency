import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { baseGrid } from '../theme/mixins'
import { colors } from '../theme/variables'
import HomeHeroImages from './HomeHeroImages'
import LogoStacked from './LogoStacked'

const HomeHero = () => {
  const { home } = useStaticQuery(graphql`
    query {
      home: datoCmsHome {
        heroHeading1
        heroHeading2
      }
    }
  `)
  const clipId = useMemo(() => uniqueId('clipPath--'), [])

  const [sectionRefState, setSectionRefState] = useState(null)
  const sectionRef = useCallback(node => {
    setSectionRefState(node)
  }, [])
  const { width: sectWidth, height: sectHeight } =
    useElementRect(sectionRefState)

  const styles = {
    section: css`
      ${baseGrid}
      grid-template-rows: auto auto auto 12.5vw;
      background: linear-gradient(to bottom right, #333, #111);
      color: white;
      clip-path: url(#${clipId});
      min-height: calc(101 * var(--vh, 1vh));
      z-index: 1;
      &:before {
        content: '';
        background-image: linear-gradient(
          to right,
          ${colors.goldShade3},
          ${colors.goldShade2},
          ${colors.goldShade1},
          ${colors.gold}
        );
        position: absolute;
        width: 100%;
        height: 0.5rem;
        z-index: 1;
      }
    `,
    ribbons: css`
      grid-column: 1 / -1;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    `,
    heading: css`
      display: contents;
      > span {
        font-size: var(--fs-108);
        display: inline-block;
        z-index: 3;
        max-width: 10ch;
        margin-bottom: 0.15em;
        &:nth-of-type(1) {
          grid-row: 2 / 3;
          grid-column: 2 / -2;
          align-self: flex-end;
        }
        &:nth-of-type(2) {
          grid-row: 3 / 4;
          grid-column: 5 / -2;
          align-self: flex-start;
          color: ${colors.gold};
        }
      }
    `,
    logo: css`
      font-size: var(--fs-108);
      height: 0.875em;
      width: auto;
      position: relative;
      grid-column: 2 / -2;
      justify-self: center;
      margin: 0.375em 0 0.875em;
    `,
  }
  return (
    <section css={styles.section} ref={sectionRef}>
      <svg width="0" height="0">
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
      <HomeHeroImages />
      <svg viewBox="0 0 1440 415" css={styles.ribbons}>
        <defs>
          <linearGradient
            x1="100%"
            y1="45%"
            x2="0%"
            y2="55%"
            id="goldGradient"
          >
            <stop stopColor={colors.gold} offset="0%" />
            <stop stopColor={colors.goldShade1} offset="33%" />
            <stop stopColor={colors.goldShade2} offset="67%" />
            <stop stopColor={colors.goldShade3} offset="100%" />
          </linearGradient>
        </defs>
        <path
          d="M1440,64 C970,446 518.5,407 0,0 L0,415 L1440,415 L1440,64 Z"
          fill="#fff"
          opacity={0.1}
        />
        <path
          d="M0,288.5 C544.5,80.5 674,765 1440,64 L1440,415 L0,415 L0,288.5 Z"
          fill="url(#goldGradient)"
        />
      </svg>
      <LogoStacked css={styles.logo} />
      <h1 css={styles.heading}>
        <span>{home.heroHeading1}</span>
        <span>{home.heroHeading2}</span>
      </h1>
    </section>
  )
}

export default HomeHero
