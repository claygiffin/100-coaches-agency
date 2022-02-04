import { SerializedStyles, css } from '@emotion/react'
import { ElementType, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

import { absoluteFill } from '../theme/mixins'

type Props = {
  children: ReactNode
  as?: ElementType
  innerAs?: ElementType
  css?: SerializedStyles
  innerCss?: SerializedStyles
  fromBack?: boolean
  transitionDuration?: number
}

const AnimateIn = ({
  children,
  as = 'div',
  innerAs = 'div',
  innerCss,
  fromBack,
  transitionDuration = 1000,
  ...props
}: Props) => {
  const Element = as
  const InnerElement = innerAs
  const { ref: inViewRef, inView } = useInView({
    rootMargin: '10% 0% -10%',
  })
  const styles = {
    outer: css`
      position: relative;
    `,
    inner: css`
      position: relative;
      display: block;
      opacity: 0;
      backface-visibility: hidden;
      transform: ${fromBack
        ? `scale3D(0.875, 0.875, 1)`
        : `scale3D(1.125, 1.125, 1)`};
      transition-property: opacity, transform;
      transition-duration: ${transitionDuration}ms;
      transition-timing-function: cubic-bezier(0.25, 0.75, 0.25, 1);
      transition-delay: 100ms;
      ${inView &&
      css`
        opacity: 1;
        transform: scale3d(1, 1, 1);
      `};
    `,
    sizer: css`
      ${absoluteFill}
      pointer-events: none;
    `,
  }
  return (
    <Element css={[styles.outer]} {...props}>
      <div css={styles.sizer} ref={inViewRef} />
      <InnerElement css={[styles.inner, innerCss]}>
        {children}
      </InnerElement>
    </Element>
  )
}

export default AnimateIn
