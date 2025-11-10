'use client'

import Link from 'next/link'
import { Fragment, useRef, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import {
  useElementHeight,
  useElementWidth,
} from '@/hooks/useElementRect'
import { classes } from '@/utils/css'

import styles from './CategoryNav.module.scss'

type PropTypes = {
  current: string | null | undefined
  categories: Queries.CoachCategoryMenuFragment[] | null | undefined
  path: string
  allLink?: boolean
  theme?: 'DARK' | 'LIGHT'
}

export const CategoryNav = ({
  current = '',
  categories,
  path,
  allLink,
  theme = 'DARK',
}: PropTypes) => {
  const navRef = useRef<HTMLDivElement>(null)

  const navWidth = useElementWidth(navRef)

  const widthRef = useRef<HTMLDivElement>(null)

  const containerWidth = useElementWidth(widthRef)

  const collapsedContainerRef = useRef<HTMLDivElement>(null)

  const collapsedContainerHeight =
    useElementHeight(collapsedContainerRef) || 0

  const collapsed =
    navWidth && containerWidth ? navWidth >= containerWidth : false

  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(prev => !prev)
  }

  return (
    <Fragment>
      <div
        className={styles.widthCheck}
        ref={widthRef}
      />
      <nav
        className={styles.nav}
        data-collapsed={collapsed}
        data-open={open}
        data-theme={theme}
        style={{
          '--container-width': containerWidth + 'px',
          '--nav-width': navWidth + 'px',
          '--collapsed-container-height':
            collapsedContainerHeight + 'px',
        }}
      >
        <div
          className={styles.navItems}
          ref={navRef}
        >
          {categories?.map((category: any, i: number) => (
            <Link
              href={`${('/' + path + '/').replace(/\/\//g, '/')}${
                category.categorySlug
              }/`}
              className={classes(
                styles.link,
                category.categoryName === current && styles.active
              )}
              key={i}
            >
              {category.categoryName}
            </Link>
          ))}
          {allLink && (
            <Link
              href={`${('/' + path + '/').replace(/\/\//g, '/')}all/`}
              className={classes(
                styles.link,
                current === 'All' && styles.active
              )}
            >
              All
            </Link>
          )}
        </div>
        {collapsed && (
          <Fragment>
            <button
              className={classes(styles.link, styles.button)}
              onClick={toggleOpen}
            >
              {current}
              <FiChevronDown />
            </button>
            <div className={styles.navItemsCollapsed}>
              <div ref={collapsedContainerRef}>
                {categories?.map((category: any, i: number) => {
                  if (category.categoryName !== current) {
                    return (
                      <Link
                        href={`${('/' + path + '/').replace(
                          /\/\//g,
                          '/'
                        )}${category.categorySlug}/`}
                        className={styles.link}
                        key={i}
                      >
                        {category.categoryName}
                      </Link>
                    )
                  }
                })}
                {allLink && (
                  <Link
                    href={`${('/' + path + '/').replace(
                      /\/\//g,
                      '/'
                    )}all/`}
                    className={styles.link}
                  >
                    All
                  </Link>
                )}
              </div>
            </div>
          </Fragment>
        )}
      </nav>
    </Fragment>
  )
}
