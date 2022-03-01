import { Global, css } from '@emotion/react'
import { Link } from 'gatsby'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { absoluteFill, mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import CoachCategoryMenu from './CoachCategoryMenu'
import LogoHorizontal from './LogoHorizontal'

type NavProps = {
  homeNav?: boolean
}

const Nav = ({ homeNav }: NavProps) => {
  const gradientId = useMemo(() => uniqueId('gradient--'), [])

  const [navRefState, setNavRefState] = useState(null)
  const navRef = useCallback(node => {
    setNavRefState(node)
  }, [])
  const { width: navWidth, height: navHeight } =
    useElementRect(navRefState)

  const styles = {
    nav: css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: auto;
      position: relative;
      margin-bottom: -1.4vw;
      padding-bottom: 1.4vw;
      padding-top: 3px;
      z-index: 3;
      &:before {
        content: '';
        display: block;
        background-image: linear-gradient(
          to right,
          ${colors.goldShade3},
          ${colors.goldShade2},
          ${colors.goldShade1},
          ${colors.gold}
        );
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        z-index: 2;
      }
      ${homeNav &&
      css`
        position: absolute;
      `}
    `,
    background: css`
      ${absoluteFill}
      z-index: 0;
      svg {
        ${absoluteFill}
        ${homeNav &&
        css`
          display: none;
        `}
      }
    `,
    logoWrap: css`
      align-self: center;
      z-index: 1;
      margin: 1.5em 0 1.5em var(--margin-outer);
      svg {
        font-size: var(--fs-24);
        height: 1em;
        width: auto;
      }
      ${homeNav &&
      css`
        visibility: hidden;
      `}
    `,
    navItems: css`
      display: flex;
      justify-self: flex-end;
      align-items: center;
      margin-right: var(--gutter-md);
      z-index: 1;
      ${mq().ml} {
        position: absolute;
        top: 0;
        right: 0;
      }
    `,
    link: css`
      color: #fff;
      text-decoration: none;
      font-size: var(--fs-15);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      display: block;
      padding: 1em;
      position: relative;
      cursor: pointer;
      transition: color 200ms ease;
      @media (hover: hover) {
        &:hover {
          color: ${colors.goldTint2};
        }
      }
    `,
    button: css`
      appearance: none;
      background: transparent;
      padding: 0.6em 1em;
      margin-left: 1em;
      line-height: 1.1;
      border-radius: 1.25em;
      color: ${colors.goldTint1};
      border: 1px solid currentColor;
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
  }
  return (
    <nav css={styles.nav}>
      <Global
        styles={css`
          :root {
            --nav-height: ${navHeight}px;
          }
        `}
      />
      <div css={styles.background} ref={navRef}>
        <svg>
          <defs>
            <linearGradient
              x1="0%"
              y1="49%"
              x2="100%"
              y2="51%"
              id={gradientId}
            >
              <stop stopColor="#111" offset="0%" />
              <stop stopColor="#555" offset="100%" />
            </linearGradient>
          </defs>
          <path
            d={`M0,${navHeight - 0.007 * navWidth} C${
              navWidth * 0.413
            },${navHeight - 0.03 * navWidth} ${navWidth * 0.663},${
              navHeight + 0.0184 * navWidth
            } ${navWidth},${
              navHeight - 0.007 * navWidth
            } L${navWidth},0 L0,0 L0,${navHeight - 0.03 * navWidth} Z`}
            fill={`url(#${gradientId})`}
          />
        </svg>
      </div>
      <Link
        to="/"
        css={styles.logoWrap}
        aria-label="100 Coaches Agency"
      >
        <LogoHorizontal />
      </Link>
      <div css={styles.navItems}>
        <span css={styles.link}>
          Coaches
          <CoachCategoryMenu />
        </span>
        <Link css={styles.link} to="/">
          Our Story
        </Link>
        <Link css={styles.link} to="/">
          Lorem Ipsum
        </Link>
        <button css={[styles.link, styles.button]}>Work With Us</button>
      </div>
    </nav>
  )
}

export default Nav
