import type { ComponentProps, ElementType, ReactNode } from 'react'
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc'

import { classes } from '@/utils/css'

import styles from './ArrowButton.module.scss'

interface OwnProps<E extends ElementType = ElementType> {
  as?: E
  text: string | null | undefined
  children?: ReactNode
  direction?: 'RIGHT' | 'LEFT'
  styleVariant?: 'INLINE' | 'OUTLINE' | 'FILL'
  borderVariant?: 'SQUARE' | 'ROUNDED'
  colorVariant?: 'GOLD_LIGHT' | 'GOLD_DARK' | 'WHITE'
}
type PropTypes<E extends ElementType> = OwnProps<E> &
  Omit<ComponentProps<E>, keyof OwnProps>

export const ArrowButton = <E extends ElementType>({
  text,
  children,
  direction = 'RIGHT',
  styleVariant = 'INLINE',
  colorVariant = 'GOLD_LIGHT',
  borderVariant = 'SQUARE',
  as,
  className,
  ...props
}: PropTypes<E>) => {
  const Element = as || 'button'

  return (
    <Element
      className={classes(styles.button, className)}
      data-color={colorVariant}
      data-direction={direction}
      data-style={styleVariant}
      data-border={borderVariant}
      {...props}
    >
      {direction === 'LEFT' && <VscArrowLeft />}
      <span>{text}</span>
      {direction === 'RIGHT' && <VscArrowRight />}
      {children}
    </Element>
  )
}
