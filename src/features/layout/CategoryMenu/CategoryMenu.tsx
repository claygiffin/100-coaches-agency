'use client'

import Link from 'next/link'
import {
  type ComponentProps,
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { BsChevronRight } from 'react-icons/bs'

import { useNavMenuContext } from '@/contexts/navMenuContext'
import { ScrollToggle } from '@/features/ui'
import { useEscKeyFunction } from '@/hooks/useEscKeyFunction'
import { classes } from '@/utils/css'

import styles from './CategoryMenu.module.scss'

type Props = ComponentProps<'nav'> & {
  categories: Queries.CoachCategoryMenuFragment[] | null | undefined
  heading: string
  path: string
  allLink?: boolean
  backArrow?: boolean
  open: boolean
  setOpen(state: boolean): void
}

export const CategoryMenu = ({
  categories,
  heading,
  path,
  allLink,
  backArrow,
  open,
  setOpen,
}: Props) => {
  const isBrowser = typeof window !== `undefined`

  const portalTarget =
    isBrowser && document.getElementById('lightbox-container')

  const [closing, setClosing] = useState(false)

  const timer: { current: NodeJS.Timeout | null } = useRef(null)
  const { setNavMenuIsOpen } = useNavMenuContext()

  const handleClose = useCallback(() => {
    setClosing(true)
    timer.current = setTimeout(() => {
      setClosing(false)
      setOpen(false)
    }, 300)
  }, [setOpen])

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [])

  useEscKeyFunction(handleClose)

  return (
    <Fragment>
      {open &&
        portalTarget &&
        createPortal(
          <nav
            className={styles.nav}
            data-closing={closing}
          >
            <div className={styles.intro}>
              <h2 dangerouslySetInnerHTML={{ __html: heading }} />
            </div>
            <div className={styles.linksOuter}>
              <div className={styles.linksInner}>
                {categories?.map((category, i) => {
                  return (
                    <Link
                      href={`/coaches/${category.categorySlug}`}
                      key={i}
                      onClick={() => {
                        handleClose()
                        setNavMenuIsOpen(false)
                      }}
                      className={styles.link}
                    >
                      <h3>
                        <span>
                          {category.categoryNameFull ||
                            category.categoryName}
                        </span>
                        <BsChevronRight />
                      </h3>
                      <h4>{category.description}</h4>
                    </Link>
                  )
                })}
                {allLink && (
                  <Link
                    href={`${('/' + path + '/').replace(
                      /\/\//g,
                      '/'
                    )}all/`}
                    onClick={() => {
                      handleClose()
                      setNavMenuIsOpen(false)
                    }}
                    className={classes(styles.link, styles.allLink)}
                  >
                    View All
                  </Link>
                )}
              </div>
            </div>
            <svg
              className={styles.closeButton}
              aria-label="Close Lightbox"
              onClick={handleClose}
              tabIndex={0}
              viewBox="0 0 24 24"
              vectorEffect="non-scaling-stroke"
            >
              {backArrow ? (
                <Fragment>
                  <line
                    x1="2.59882061"
                    y1="11.5"
                    x2="24"
                    y2="11.5"
                  />
                  <polyline points="11.6153846 2.26923077 2.38461538 11.5 11.6153846 20.7307692" />
                </Fragment>
              ) : (
                <Fragment>
                  <line
                    x1="3.51471863"
                    y1="3.51471863"
                    x2="20.4852814"
                    y2="20.4852814"
                  />
                  <line
                    x1="3.51471863"
                    y1="20.4852814"
                    x2="20.4852814"
                    y2="3.51471863"
                  />
                </Fragment>
              )}
            </svg>
            <ScrollToggle />
          </nav>,
          portalTarget
        )}
    </Fragment>
  )
}
