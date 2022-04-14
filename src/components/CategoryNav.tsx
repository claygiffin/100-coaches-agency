import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { Fragment, useCallback, useMemo, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import {
  useElementHeight,
  useElementWidth,
} from '../hooks/useElementRect'
import { colors } from '../theme/variables'
import { toSlug } from '../utils/helpers'

type PropTypes = {
  current: string
  categories: {
    nodes: Array<{
      categoryName: string
    }>
  }
  path: string
  theme?: 'DARK' | 'LIGHT'
}

const CategoryNav = ({
  current = '',
  categories,
  path,
  theme = 'DARK',
}: PropTypes) => {
  const [navRef, setNavRef] = useState<HTMLElement | null>(null)
  const navRefCallback = useCallback((node: HTMLElement | null) => {
    setNavRef(node)
  }, [])
  const navWidth = useElementWidth(navRef)

  const [widthRef, setWidthRef] = useState<HTMLElement | null>(null)
  const widthRefCallback = useCallback((node: HTMLElement | null) => {
    setWidthRef(node)
  }, [])
  const containerWidth = useElementWidth(widthRef)

  const [collapsedContainerRef, setCollapsedContainerRef] =
    useState<HTMLElement | null>(null)
  const collapsedContainerCallback = useCallback(
    (node: HTMLElement | null) => {
      setCollapsedContainerRef(node)
    },
    []
  )
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
      ${collapsed &&
      css`
        margin-bottom: 1.5em;
      `}
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
    link: css`
      font-size: var(--fs-18);
      display: block;
      line-height: 1.125;
      padding: 0.5em 0;
      font-weight: 400;
      color: ${theme === 'DARK' ? '#666' : '#ddd'};
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
      color: ${theme === 'DARK' ? colors.goldShade1 : colors.goldTint1};
      border-color: currentColor;
    `,
    button: css`
      color: ${theme === 'DARK' ? colors.goldShade1 : colors.goldTint1};
      border-color: ${theme === 'DARK'
        ? colors.goldShade1
        : colors.goldTint1};
      border-width: 1px;
      padding: 0.25em 0;
      margin-bottom: 0.5em;
      @media (hover: hover) {
        &:hover {
          color: ${theme === 'DARK'
            ? colors.goldShade3
            : colors.goldTint2};
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
              to={`${('/' + path + '/').replace(/\/\//g, '/')}${toSlug(
                category.categoryName
              )}/`}
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
              <div ref={collapsedContainerCallback}>
                {categories.nodes.map((category: any, i: number) => {
                  if (category.categoryName !== current) {
                    return (
                      <Link
                        to={`${('/' + path + '/').replace(
                          /\/\//g,
                          '/'
                        )}${toSlug(category.categoryName)}/`}
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

export default CategoryNav
