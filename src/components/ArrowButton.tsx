import { SerializedStyles, css } from '@emotion/react'
import { ComponentProps, ElementType, ReactNode } from 'react'
import { VscArrowRight } from 'react-icons/vsc'

import { colors } from '../theme/variables'

interface OwnProps<E extends ElementType = ElementType> {
  as?: E
  text: string
  children?: ReactNode
  style?: 'INLINE' | 'OUTLINE' | 'FILL'
  color?: 'GOLD_LIGHT' | 'GOLD_DARK' | 'WHITE'
  css?: SerializedStyles
}
type PropTypes<E extends ElementType> = OwnProps<E> &
  Omit<ComponentProps<E>, keyof OwnProps>

const ArrowButton = <E extends ElementType>({
  text,
  children,
  style = 'INLINE',
  color = 'GOLD_LIGHT',
  as,
  ...props
}: PropTypes<E>) => {
  const Element = as || 'div'
  const styles = {
    button: css`
      display: block;
      width: fit-content;
      font-size: var(--fs-14);
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.1em;
      line-height: 1.25;
      font-weight: 500;
      padding: 0.5em 0.5em 0.75em;
      margin-left: -0.5em;
      position: relative;
      transition: color 300ms ease;
      color: ${color === 'GOLD_LIGHT'
        ? colors.gold
        : color === 'GOLD_DARK'
        ? colors.goldShade1
        : '#fff'};
      @media (hover: hover) {
        &:hover {
          color: ${color === 'GOLD_LIGHT'
            ? colors.goldTint2
            : color === 'GOLD_DARK'
            ? colors.goldShade2
            : '#ffffffcc'};
        }
      }
      ${style === 'OUTLINE' &&
      css`
        margin-left: 0;
        outline: 1px solid currentColor;
        padding: 0.5em 0.75em 0.75em 1em;
      `}
      ${style === 'FILL' &&
      css`
        color: ${color === 'WHITE' ? colors.goldShade1 : '#fff'};
        background: ${color === 'WHITE' ? '#fff' : colors.goldShade1};
        padding: 0.5em 0.75em 0.75em 1em;
        transition: color 300ms ease, background-color 300ms ease;
        @media (hover: hover) {
          &:hover {
            background: ${color === 'WHITE'
              ? '#ffffffcc'
              : colors.goldShade2};
            color: ${color === 'WHITE' ? colors.goldShade1 : '#fff'};
          }
        }
      `}
      svg {
        margin-left: 0.25em;
        font-size: 125%;
        transform: translate3D(0, 15%, 0);
        transition: transform 250ms ease-in-out;
      }
      @media (hover: hover) {
        &:hover {
          svg {
            transform: translate3d(20%, 15%, 0);
          }
        }
      }
    `,
  }
  return (
    <Element css={styles.button} {...props}>
      <span>{text}</span>
      <VscArrowRight />
      {children}
    </Element>
  )
}

export default ArrowButton
