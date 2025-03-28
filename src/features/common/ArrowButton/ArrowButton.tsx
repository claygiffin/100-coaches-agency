import { ComponentProps, ElementType, ReactNode } from 'react'
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc'

import styles from './ArrowButton.module.scss'

interface OwnProps<E extends ElementType = ElementType> {
  as?: E
  text: string
  children?: ReactNode
  direction?: 'RIGHT' | 'LEFT'
  style?: 'INLINE' | 'OUTLINE' | 'FILL'
  color?: 'GOLD_LIGHT' | 'GOLD_DARK' | 'WHITE'
}
type PropTypes<E extends ElementType> = OwnProps<E> &
  Omit<ComponentProps<E>, keyof OwnProps>

export const ArrowButton = <E extends ElementType>({
  text,
  children,
  direction = 'RIGHT',
  style = 'INLINE',
  color = 'GOLD_LIGHT',
  as,
  ...props
}: PropTypes<E>) => {
  const Element = as || 'div'

  return (
    <Element
      className={styles.button}
      data-color={color}
      data-direction={direction}
      data-style={style}
      {...props}
    >
      {direction === 'LEFT' && <VscArrowLeft />}
      <span>{text}</span>
      {direction === 'RIGHT' && <VscArrowRight />}
      {children}
    </Element>
  )
}
