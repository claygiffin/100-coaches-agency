'use client'

import Link from 'next/link'
import { type ComponentProps, Fragment, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

import { useNavMenuContext } from '@/contexts/navMenuContext'
import { DatoLink } from '@/features/links'
import { LogoHorizontal } from '@/features/logo'
import { BurgerIcon } from '@/features/ui'
import { useElementHeight } from '@/hooks/useElementRect'
import { useEscKeyFunction } from '@/hooks/useEscKeyFunction'
import { classes } from '@/utils/css'

import styles from './Nav.module.scss'

type Props = ComponentProps<'div'> & {
  data: Queries.NavFragment | null | undefined
}

export const Nav = ({ data, className, ...props }: Props) => {
  const { inView: spacerInView, ref: spacerRef } = useInView()

  const navRef = useRef<HTMLElement>(null)

  const navHeight = useElementHeight(navRef) || 0
  const { navMenuIsOpen, setNavMenuIsOpen } = useNavMenuContext()
  const handleClose = () => {
    setNavMenuIsOpen(false)
  }

  useEscKeyFunction(() => setNavMenuIsOpen(false))

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--nav-height',
      navHeight + 'px'
    )
    return () => {
      document.documentElement.style.removeProperty('--nav-height')
    }
  }, [navHeight])

  return (
    <Fragment>
      <div
        data-burger-open={navMenuIsOpen}
        data-scrolled={!spacerInView}
        className={classes(styles.container, className)}
        {...props}
      >
        <nav
          className={styles.nav}
          ref={navRef}
        >
          <Link
            href="/"
            className={styles.logoWrap}
            aria-label="100 Coaches Agency"
          >
            <LogoHorizontal />
          </Link>
          <BurgerIcon
            open={navMenuIsOpen}
            toggleOpen={() => setNavMenuIsOpen(prev => !prev)}
          />
          <div className={styles.navItems}>
            {data?.links.map(link => (
              <DatoLink
                key={link.id}
                data={link}
                onClick={
                  link.__typename !== 'CoachMenuLinkRecord'
                    ? handleClose
                    : undefined
                }
                className={styles.link}
              />
            ))}
            <DatoLink
              data={data?.button}
              className={classes(styles.link, styles.button)}
              onClick={
                data?.button?.__typename !== 'CoachMenuLinkRecord'
                  ? handleClose
                  : undefined
              }
            />
          </div>
        </nav>
      </div>
      <div
        className={styles.spacer}
        ref={spacerRef}
      />
    </Fragment>
  )
}
