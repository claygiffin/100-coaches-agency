import { css, keyframes } from '@emotion/react'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'

type ShapeProps = {
  shape?: string
  brighten?: null | number
  position?: (arg: { top: number; left: number }) => void
}

const Shape = ({
  shape = 'square',
  brighten,
  position,
  ...props
}: ShapeProps) => {
  const animationDelay = useMemo(() => Math.random() * -4000, [])
  const triangleRotation = useMemo(
    () => Math.floor(Math.random() * 4) * 90,
    []
  )
  const [shapeRef, setShapeRef] = useState<HTMLDivElement | null>(null)
  const setRefs = useCallback(node => {
    setShapeRef(node)
  }, [])
  const size = useElementRect(shapeRef)
  useEffect(() => {
    if (brighten && shapeRef && position) {
      position({
        top: shapeRef.offsetTop + size.height / 2,
        left: shapeRef.offsetLeft + size.width / 2,
      })
    }
  }, [shapeRef, size, brighten, position])

  const animation = keyframes`
    0% {
      opacity: 0.067;
    }
    25% {
      opacity: 0.15;
    }
    100% {
      opacity: 0.067;
    }
  `
  const styles = {
    shape: css`
      width: 100%;
      animation-name: ${!brighten && animation};
      animation-duration: 4000ms;
      animation-fill-mode: forwards;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
      animation-delay: ${animationDelay}ms;
      transition: opacity 100ms ease;
      rect,
      circle,
      polygon {
        fill: #fff;
      }
      polygon {
        transform: rotate(${triangleRotation}deg);
        transform-origin: 50%;
      }
    `,
  }

  return (
    <div ref={setRefs} css={{ display: 'flex' }}>
      <svg
        css={styles.shape}
        style={brighten ? { opacity: brighten } : {}}
        viewBox="0 0 180 180"
        {...props}
      >
        {shape === 'square' && (
          <rect x="0" y="0" width="180" height="180" />
        )}
        {shape === 'circle' && <circle cx="90" cy="90" r="90" />}
        {shape === 'triangle' && (
          <polygon points="90 0 180 180 0 180" />
        )}
      </svg>
    </div>
  )
}

export default Shape
