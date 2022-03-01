import { css } from '@emotion/react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Fragment, useCallback, useMemo, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import {
  useElementHeight,
  useElementWidth,
} from '../hooks/useElementRect'
import { colors } from '../theme/variables'
import { toSlug } from '../utils/helpers'

const CoachCategoryNav = ({ current = '' }) => {
  const { categories } = useStaticQuery(graphql`
    query {
      categories: allDatoCmsCoachCategory(
        sort: { fields: position, order: ASC }
      ) {
        nodes {
          categoryName
        }
      }
    }
  `)
  const [navRef, setNavRef] = useState(null)
  const navRefCallback = useCallback(node => {
    setNavRef(node)
  }, [])
  const navWidth = useElementWidth(navRef)

  const [widthRef, setWidthRef] = useState(null)
  const widthRefCallback = useCallback(node => {
    setWidthRef(node)
  }, [])
  const containerWidth = useElementWidth(widthRef)

  const [collapsedContainerRef, setCollapsedContainerRef] =
    useState(null)
  const collapsedContainerCallback = useCallback(node => {
    setCollapsedContainerRef(node)
  }, [])
  const collapsedContainerHeight = useElementHeight(
    collapsedContainerRef
  )

  const collapsed = useMemo(() => {
    if (navWidth >= containerWidth) {
      return true
    } else {
      return false
    }
  }, [navWidth, containerWidth])

  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(prev => !prev)
  }

  const styles = {
    nav: css`
      position: relative;
      grid-column: 2 / -2;
      margin-bottom: 3em;
      justify-self: flex-start;
      overflow: hidden;
      &:before {
        content: '';
        display: block;
        position: absolute;
        background: #aaa;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 2px;
        ${collapsed &&
        css`
          display: none;
        `}
      }
    `,
    navItems: css`
      display: flex;
      ${collapsed &&
      css`
        position: absolute;
        left: 0;
        top: 0;
        visibility: hidden;
      `}
    `,
    navItemsCollapsed: css`
      height: 0;
      transition: height 300ms ease;
      ${open &&
      css`
        height: ${collapsedContainerHeight}px;
      `}
    `,
    collapsedContainer: css``,

    link: css`
      font-size: var(--fs-18);
      display: block;
      line-height: 1.125;
      padding: 0.5em 0;
      font-weight: 400;
      color: #666;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      border-bottom: 3px solid transparent;
      box-sizing: content-box;
      z-index: 1;
      margin-right: 1.5em;
      white-space: nowrap;
      justify-self: flex-start;
      &:last-of-type {
        margin-right: 0;
      }
    `,
    active: css`
      color: ${colors.goldShade1};
      border-color: ${colors.goldShade1};
    `,
    button: css`
      color: ${colors.goldShade1};
      border-color: ${colors.goldShade1};
      border-width: 1px;
      padding: 0.25em 0;
      margin-bottom: 0.5em;
      @media (hover: hover) {
        &:hover {
          color: ${colors.goldShade3};
        }
      }
      svg {
        display: inline-block;
        font-size: 100%;
        margin-left: 0.1em;
        transform: translateY(10%);
        transition: transform 200ms ease;
        ${open &&
        css`
          transform: translateY(15%) rotate(-180deg);
        `}
      }
    `,
    widthCheck: css`
      grid-column: 2 / -2;
      height: 0;
    `,
  }
  return (
    <Fragment>
      <div css={styles.widthCheck} ref={widthRefCallback} />
      <nav css={styles.nav}>
        <div css={styles.navItems} ref={navRefCallback}>
          {categories.nodes.map((category: any, i: number) => (
            <Link
              to={`/coaches/${toSlug(category.categoryName)}/`}
              css={[
                styles.link,
                category.categoryName === current && styles.active,
              ]}
              key={i}
            >
              {category.categoryName}
            </Link>
          ))}
        </div>
        {collapsed && (
          <Fragment>
            <button
              css={[styles.link, styles.button]}
              onClick={toggleOpen}
            >
              {current}
              <FiChevronDown />
            </button>
            <div css={styles.navItemsCollapsed}>
              <div
                css={styles.collapsedContainer}
                ref={collapsedContainerCallback}
              >
                {categories.nodes.map((category: any, i: number) => {
                  if (category.categoryName !== current) {
                    return (
                      <Link
                        to={`/coaches/${toSlug(
                          category.categoryName
                        )}/`}
                        css={styles.link}
                        key={i}
                      >
                        {category.categoryName}
                      </Link>
                    )
                  }
                })}
              </div>
            </div>
          </Fragment>
        )}
      </nav>
    </Fragment>
  )
}

export default CoachCategoryNav
