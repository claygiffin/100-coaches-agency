'use client'

import type { ElementType, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

import { classes } from '@/utils/css'
import type { PolymorphicComponentProps } from '@/utils/helpers'

import styles from './AnimateIn.module.scss'

type Props = {
  children: ReactNode
  innerAs?: ElementType
  innerClassName?: string
  fromBack?: boolean
  transitionDuration?: number
}

export const AnimateIn = <T extends ElementType = 'div'>({
  children,
  as,
  innerAs = 'div',
  innerClassName,
  fromBack,
  transitionDuration = 1000,
  className,
  ...props
}: PolymorphicComponentProps<T, Props>) => {
  const Element = as || 'div'
  const InnerElement = innerAs
  const { ref: inViewRef, inView } = useInView({
    rootMargin: '10% 0% -10%',
  })
  return (
    <Element
      className={classes(styles.outer, className)}
      data-in-view={inView}
      data-from-back={fromBack}
      style={{
        '--transition-duration': transitionDuration + 'ms',
      }}
      {...props}
    >
      <div
        className={styles.sizer}
        ref={inViewRef}
      />
      <InnerElement className={classes(styles.inner, innerClassName)}>
        {children}
      </InnerElement>
    </Element>
  )
}
