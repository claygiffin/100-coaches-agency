import type { ComponentProps, ReactNode } from 'react'

import { classes } from '@/utils/css'

import styles from './CarouselNav.module.scss'

export type NavVariantOptions = 'OVERLAY' | 'ABOVE'

interface Props extends ComponentProps<'div'> {
  navLink?: ReactNode
  onClickBack: () => void
  backDisabled: boolean
  onClickForward: () => void
  forwardDisabled: boolean
  navVariant?: NavVariantOptions
}

export const CarouselNav = ({
  navLink,
  onClickBack,
  backDisabled,
  onClickForward,
  forwardDisabled,
  navVariant,
  className,
  ...props
}: Props) => {
  return (
    <nav
      className={classes(styles.nav, className)}
      data-variant={navVariant}
      {...props}
    >
      {navLink && <div className={styles.link}>{navLink}</div>}
      <div
        className={styles.buttonWrapper}
        data-back
      >
        <button
          className={styles.scrollButton}
          onClick={onClickBack}
          aria-label="scroll back"
          data-back
          disabled={backDisabled}
        >
          <svg viewBox="0 0 16 32">
            <path d="M15 30L1 16L15 2" />
          </svg>
        </button>
      </div>
      <div
        className={styles.buttonWrapper}
        data-forward
      >
        <button
          className={styles.scrollButton}
          onClick={onClickForward}
          aria-label="scroll forward"
          data-forward
          disabled={forwardDisabled}
        >
          <svg viewBox="0 0 16 32">
            <path d="M1 30L15 16L1 2" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
