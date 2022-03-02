import { css, keyframes } from '@emotion/react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { BsChevronRight } from 'react-icons/bs'

import { absoluteFill, mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import { toSlug } from '../utils/helpers'
import ScrollToggle from './ScrollToggle'

const CoachCategoryMenu = () => {
  type QueryTypes = {
    coachCategories: {
      nodes: Array<{
        categoryName: string
        categoryNameSuffix: string
        description: string
      }>
    }
  }
  const { coachCategories }: QueryTypes = useStaticQuery(graphql`
    query {
      coachCategories: allDatoCmsCoachCategory(
        sort: { fields: position }
      ) {
        nodes {
          categoryName
          categoryNameSuffix
          description
        }
      }
    }
  `)
  const isBrowser = typeof window !== `undefined`

  const portalTarget =
    isBrowser && document.getElementById('lightbox-container')

  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)

  const timer: { current: NodeJS.Timeout | null } = useRef(null)

  const handleClose = useCallback(() => {
    setClosing(true)
    timer.current = setTimeout(() => {
      setClosing(false)
      setOpen(false)
    }, 300)
  }, [])

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [])

  const escFunction = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        handleClose()
      }
    },
    [handleClose]
  )

  useEffect(() => {
    open && document.addEventListener('keydown', escFunction, false)
    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [open, escFunction])

  const animations = {
    animateIn: keyframes`
      to {
        opacity: 1;
        transform: translate3d(0,0,0);
      }
    `,
    linksOut: keyframes`
      to {
        opacity: 0;
        transform: translate3d(12rem,0,0);
      }`,
    introOut: keyframes`
      to {
        opacity: 0;
        transform: translate3d(-9rem,0,0);
      }`,
  }
  const styles = {
    button: css`
      ${absoluteFill}
    `,
    nav: css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: calc(100 * var(--vh, 1vh));
      color: #fff;
      display: grid;
      grid-template-columns: 1fr 2fr;
      z-index: 10;
      ${mq().ms} {
        grid-template-columns: 1fr;
        overflow: auto;
      }
    `,
    intro: css`
      background: linear-gradient(to top right, #333, #222);
      padding: var(--gutter-xlg) var(--gutter-sm) var(--gutter-md)
        var(--gutter-mlg);
      opacity: 0;
      transform: translate3d(-9rem, 0, 0);
      animation-name: ${animations.animateIn};
      animation-duration: 300ms;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      ${closing &&
      css`
        opacity: 1;
        transform: translate3d(0, 0, 0);
        animation-name: ${animations.introOut};
      `}
      h2 {
        font-size: var(--fs-60);
        margin: 0;
        em {
          color: ${colors.gold};
          font-style: normal;
        }
      }
      ${mq().ms} {
        padding: var(--gutter-xlg) var(--margin-outer) var(--gutter-lg);
      }
    `,
    linksOuter: css`
      background: linear-gradient(to top right, #444, #222);
      padding: var(--gutter-xlg) var(--gutter-mlg) var(--gutter-md)
        var(--gutter-md);
      overflow: auto;
      opacity: 0;
      transform: translate3d(12rem, 0, 0);
      animation-name: ${animations.animateIn};
      animation-duration: 300ms;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      ${closing &&
      css`
        opacity: 1;
        transform: translate3d(0, 0, 0);
        animation-name: ${animations.linksOut};
      `}
      ${mq().ms} {
        grid-template-columns: 1fr;
        overflow: visible;
        padding: var(--gutter-md) var(--margin-outer);
      }
    `,
    linksInner: css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: var(--gutter-md);
      grid-row-gap: max(calc(2 * var(--gutter-md)), 3rem);
      margin-top: 1em;
      ${mq().ms} {
        grid-template-columns: 1fr;
      }
    `,
    link: css`
      color: #fff;
      text-decoration: none;
      position: relative;
      &:after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #ffffff33;
        position: absolute;
        top: min(calc(-1 * var(--gutter-md)), -1.5rem);
        left: 0;
        pointer-events: none;
      }
      &:nth-of-type(-n + 2):after {
        display: none;
      }
      ${mq().ms} {
        &:nth-of-type(2):after {
          display: block;
        }
      }
      &:before {
        content: '';
        display: block;
        position: absolute;
        width: calc(100% + var(--gutter-sm));
        height: calc(100% + 2 * var(--gutter-md));
        top: calc(-1 * var(--gutter-md));
        left: calc(-0.5 * var(--gutter-sm));
        transition: background-color 500ms ease;
      }
      h3 {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        color: ${colors.gold};
        font-family: var(--serif);
        font-weight: 310;
        font-size: var(--fs-36);
        margin: 0;
        transition: color 300ms ease;
        svg {
          flex: none;
          margin-top: 0.0875em;
          color: #ffffff33;
          transition: color 300ms ease;
        }
      }
      h4 {
        transition: color 200ms ease;
        margin: 0.5em 0 0.5em;
        font-weight: 300;
        font-size: var(--fs-16);
        line-height: 1.5;
        color: #ddd;
        position: relative;
        ${mq().ms} {
          font-size: var(--fs-14);
        }
      }
      @media (hover: hover) {
        &:hover {
          h3 {
            color: ${colors.goldTint2};
            svg {
              color: ${colors.goldTint2};
            }
          }
          h4 {
            color: #fff;
          }
          &:before {
            background-color: #00000011;
          }
        }
      }
    `,
    closeButton: css`
      position: absolute;
      top: var(--gutter-sm);
      right: var(--gutter-sm);
      width: 1.5em;
      height: 1.5em;
      padding: 0.5em;
      cursor: pointer;
      color: #666;
      transition: color 200ms ease;
      line {
        stroke: currentColor;
      }
      @media (hover: hover) {
        &:hover {
          color: ${colors.gold};
        }
      }
    `,
  }
  return (
    <Fragment>
      <span
        css={styles.button}
        onClick={() => setOpen(true)}
        onKeyPress={() => setOpen(true)}
        role="button"
        tabIndex={0}
      />
      {open &&
        portalTarget &&
        createPortal(
          <nav css={styles.nav}>
            <div css={styles.intro}>
              <h2>
                Lorem ipsum <em>coaches</em> ent dolor emet consec taur.
              </h2>
            </div>
            <div css={styles.linksOuter}>
              <div css={styles.linksInner}>
                {coachCategories.nodes.map((category, i) => (
                  <Link
                    to={`/coaches/${toSlug(category.categoryName)}/`}
                    key={i}
                    onClick={handleClose}
                    onKeyPress={handleClose}
                    css={styles.link}
                  >
                    <h3>
                      <span>
                        {category.categoryName}{' '}
                        {category.categoryNameSuffix}
                      </span>
                      <BsChevronRight />
                    </h3>
                    <h4>{category.description}</h4>
                  </Link>
                ))}
              </div>
            </div>
            <svg
              css={styles.closeButton}
              aria-label="Close Lightbox"
              onClick={handleClose}
              onKeyPress={handleClose}
              tabIndex={0}
              viewBox="0 0 15 15"
            >
              <line
                x1="0.535714286"
                y1="0.535714286"
                x2="14.4642857"
                y2="14.4642857"
              />
              <line
                x1="14.4642857"
                y1="0.535714286"
                x2="0.535714286"
                y2="14.4642857"
              />
            </svg>
            <ScrollToggle />
          </nav>,
          portalTarget
        )}
    </Fragment>
  )
}

export default CoachCategoryMenu
