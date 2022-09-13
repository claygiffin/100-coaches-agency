import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { baseGrid } from '../theme/mixins'
import { colors } from '../theme/variables'
import ContactLightbox from './ContactLightbox'
import LogoStacked from './LogoStacked'

const Footer = () => {
  const clipId = useMemo(() => uniqueId('clipPath--'), [])
  const gradientId = useMemo(() => uniqueId('gradient--'), [])

  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null)
  const setRefs = useCallback((node: HTMLElement | null) => {
    setSectionRef(node)
  }, [])
  const { width: sectWidth, height: sectHeight } =
    useElementRect(sectionRef)

  const year = useMemo(() => new Date().getFullYear(), [])

  const styles = {
    footer: css`
      clip-path: url(#${clipId});
      background-color: #000;
      position: relative;
      z-index: 4;
      margin-top: -5vw;
      overflow: hidden;
    `,
    ribbons: css`
      grid-column: 1 / -1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    `,
    content: css`
      ${baseGrid}
      padding: 5vw 0 0;
    `,
    logo: css`
      grid-column: 2 / -2;
      justify-self: center;
      font-size: var(--fs-60);
      height: 1em;
      margin: 0.75em 0;
      svg {
        height: 100%;
        width: auto;
      }
    `,
    link: css`
      position: relative;
      grid-column: 2 / -2;
      font-size: var(--fs-15);
      justify-self: center;
      color: ${colors.goldTint1};
      text-transform: uppercase;
      display: block;
      padding: 0.6em 1em;
      margin-bottom: 1.5em;
      line-height: 1.1;
      cursor: pointer;
      text-align: center;
      border: 1px solid currentColor;
      border-radius: 1.25em;
      transition-property: color, border-color, background-color;
      transition-duration: 200ms;
      transition-timing-function: ease;
      @media (hover: hover) {
        &:hover {
          background: ${colors.goldShade1};
          border-color: ${colors.goldShade1};
          color: #fff;
        }
      }
    `,
    rights: css`
      grid-column: 2 / -2;
      font-size: var(--fs-13);
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #ffffff88;
      margin-bottom: 1.5em;
      span {
        display: inline-block;
      }
    `,
  }
  return (
    <footer css={styles.footer} ref={setRefs}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
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
      <svg viewBox="0 0 1440 200" css={styles.ribbons}>
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
          d="M1440,187 C1029,-26.5 576,34.5 0,187 L0,0 L1440,0 L1440,187 Z"
          fill="#fff"
          opacity={0.1}
        />
        <path
          d="M0,107.5 C526,168.5 736.5,-97 1440,89.5 L1440,0 L0,0 L0,107.5 Z"
          fill={`url(#${gradientId})`}
        />
      </svg>
      <div css={styles.content}>
        <Link to="/" css={styles.logo} aria-label="100 Coaches Agency">
          <LogoStacked />
        </Link>
        <div css={styles.link}>
          Find a Coach
          <ContactLightbox />
        </div>
        <div css={styles.rights}>
          <span>100 Coaches Agency.</span>{' '}
          <span>All rights reserved.</span> <span>© {year}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
