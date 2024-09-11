import { Global, css } from '@emotion/react'
import { Link } from 'gatsby'
import { uniqueId } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { absoluteFill, mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import BurgerIcon from './BurgerIcon'
import CoachCategoryMenu from './CoachCategoryMenu'
import ContactLightbox from './ContactLightbox'
import LogoHorizontal from './LogoHorizontal'
import SwCategoryMenu from './SwCategoryMenu'

type NavProps = {
  homeNav?: boolean
}

const Nav = ({ homeNav }: NavProps) => {
  const gradientId = useMemo(() => uniqueId('gradient--'), [])

  const [navRefState, setNavRefState] = useState<HTMLElement | null>(
    null
  )
  const navRef = useCallback((node: HTMLElement | null) => {
    setNavRefState(node)
  }, [])
  const { width: navWidth, height: navHeight } =
    useElementRect(navRefState)

  const [burgerOpen, setBurgerOpen] = useState(false)
  const handleClose = () => {
    setBurgerOpen(false)
  }
  const escFunction = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        setBurgerOpen(false)
      }
    },
    [setBurgerOpen]
  )
  useEffect(() => {
    burgerOpen &&
      document.addEventListener('keydown', escFunction, false)
    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [burgerOpen, escFunction])

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
      z-index: 10;
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
        display: block;
        font-size: var(--fs-24);
        height: 1em;
        width: auto;
        ${mq().ms} {
          height: 0.875em;
        }
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
      margin: 0 var(--gutter-md);
      z-index: 1;
      font-size: var(--fs-15);
      ${mq().ls} {
        position: absolute;
        top: 0;
        right: 0;
        background: linear-gradient(to top right, #000, #333);
        padding: 0 1.5em;
        margin: 0;
        flex-direction: column;
        justify-content: center;
        height: calc(100 * var(--vh, 1vh));
        width: 100vw;
        overflow: auto;
        font-size: var(--fs-24);
        box-sizing: border-box;
        transform: translate3d(0, -100%, 0);
        opacity: 0;
        transition: opacity 200ms ease, transform 300ms ease;
        ${burgerOpen &&
        css`
          transform: translate3d(0, 0, 0);
          opacity: 1;
        `}
        ${mq().ms} {
          font-size: var(--fs-21);
        }
      }
    `,
    link: css`
      color: #fff;
      text-decoration: none;
      font-size: inherit;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      display: block;
      padding: 1em;
      position: relative;
      cursor: pointer;
      transition: color 200ms ease;
      text-align: center;
      @media (hover: hover) {
        &:hover {
          color: ${colors.goldTint2};
        }
      }
      ${mq().ls} {
        margin: 0.25em 0;
        font-weight: 300;
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
      ${mq().ls} {
        margin: 1em 0 1.5em;
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
      <BurgerIcon
        open={burgerOpen}
        toggleOpen={() => setBurgerOpen(prev => !prev)}
      />
      <div css={styles.navItems}>
        <Link
          css={styles.link}
          to="/about/"
          onClick={() =>
            window.location.pathname === '/about/' && handleClose()
          }
        >
          How We Work
        </Link>
        <span css={styles.link}>
          Coaches
          <CoachCategoryMenu backArrow={burgerOpen} />
        </span>
        {/* <span css={styles.link}>
          Speakers & Workshops
          <SwCategoryMenu backArrow={burgerOpen} />
        </span> */}
        <a
          href={`https://becomingcoachable.com/`}
          target="_blank"
          rel="noreferrer"
          css={styles.link}
          onClick={handleClose}
        >
          Our Book
        </a>
        <a
          href={`https://community.100coaches.com/`}
          target="_blank"
          rel="noreferrer"
          css={styles.link}
          onClick={handleClose}
        >
          Our Community
        </a>
        <Link
          css={styles.link}
          to="/articles/"
          onClick={() =>
            window.location.pathname === '/articles/' && handleClose()
          }
        >
          Articles
        </Link>
        <div css={[styles.link, styles.button]}>
          Find a Coach
          <ContactLightbox />
        </div>
      </div>
    </nav>
  )
}

export default Nav
