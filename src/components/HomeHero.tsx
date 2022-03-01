import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { absoluteFill, baseGrid, mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import AnimateIn from './AnimateIn'
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
  const gradientId = useMemo(() => uniqueId('gradient--'), [])

  const [sectionRefState, setSectionRefState] = useState(null)
  const sectionRef = useCallback(node => {
    setSectionRefState(node)
  }, [])
  const { width: sectWidth, height: sectHeight } =
    useElementRect(sectionRefState)

  const styles = {
    section: css`
      ${baseGrid}
      grid-template-rows: var(--nav-height) auto auto 18vw;
      min-height: calc(101 * var(--vh, 1vh));
      color: white;
      font-size: var(--fs-84);
      z-index: 2;
    `,
    background: css`
      clip-path: url(#${clipId});
      background: linear-gradient(to bottom right, #333, #111);
      ${absoluteFill}
      z-index: 1;
    `,
    ribbons: css`
      grid-column: 1 / -1;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    `,
    logoWrap: css`
      position: relative;
      z-index: 2;
      grid-column: 2 / -2;
      grid-row: 2 / 3;
      justify-self: center;
      align-self: flex-end;
      width: 100%;
      height: 100%;
      max-height: 1.667em;
      display: flex;
      justify-content: center;
      margin: 0.75em 0 0.25em;
    `,
    logoWrapInner: css`
      width: 100%;
    `,
    logo: css`
      display: block;
      height: 100%;
      width: 100%;
    `,
    heading: css`
      font-size: inherit;
      align-self: flex-start;
      grid-column: 2 / -2;
      grid-row: 3 / 4;
      margin-top: 0.75em;
      margin-bottom: 0;
      z-index: 2;
      ${mq().ls} {
        text-align: center;
      }
      > span > span {
        font-size: inherit;
        display: inline-block;
        z-index: 2;
        width: 100%;
        ${mq().ls} {
          display: inline;
        }
        &:nth-of-type(1) {
          margin-bottom: 0.125em;
        }
        &:nth-of-type(2) {
          text-align: right;
          color: ${colors.gold};
        }
      }
    `,
  }
  return (
    <section css={styles.section} ref={sectionRef}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
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
      <div css={styles.background}>
        <HomeHeroImages />
        <svg viewBox="0 0 1440 415" css={styles.ribbons}>
          <defs>
            <linearGradient
              x1="100%"
              y1="45%"
              x2="0%"
              y2="55%"
              id={gradientId}
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
            fill={`url(#${gradientId})`}
          />
        </svg>
      </div>
      <AnimateIn css={styles.logoWrap} innerCss={styles.logoWrapInner}>
        <LogoStacked css={styles.logo} />
      </AnimateIn>
      <AnimateIn as="h1" innerAs="span" css={styles.heading}>
        <span>{home.heroHeading1}</span>{' '}
        <span>{home.heroHeading2}</span>
      </AnimateIn>
    </section>
  )
}

export default HomeHero
