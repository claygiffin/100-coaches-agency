import { css } from '@emotion/react'
import { clamp } from 'lodash'
import { useCallback, useEffect, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import Shape from './HomePromiseShape'

type ShapeProps = {
  brightCircle?: boolean
  brightenPosition?: (arg: { top: number; left: number }) => void
  columnPosition?: (arg: number) => void
  startingIndex?: number
  offset?: number
  rows?: number
}

const ShapeColumn = ({
  brightCircle = false,
  brightenPosition,
  columnPosition,
  startingIndex = 0,
  offset = 0,
  rows = 0,
  ...props
}: ShapeProps) => {
  const columnStyle = css`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: calc(2.5rem + 4vw);
    @media (prefers-reduced-motion) {
      transform: none !important;
    }
  `

  const [colRef, setColRef] = useState<HTMLDivElement | null>(null)
  const setRefs = useCallback(
    node => {
      if (columnPosition) {
        setColRef(node)
      }
    },
    [columnPosition]
  )
  const size = useElementRect(colRef)
  useEffect(() => {
    if (columnPosition && colRef) {
      columnPosition(colRef.offsetLeft)
    }
  }, [colRef, size, columnPosition])

  return (
    <div
      css={columnStyle}
      style={{
        transform: `translate3d(0, calc(${
          offset - 1
        }px * var(--translate-factor, 100)), 0)`,
      }}
      ref={setRefs}
      {...props}
    >
      {[...Array(rows)].map((_, i) => {
        const shapeIndex = i + startingIndex
        return (
          <Shape
            position={brightenPosition}
            key={i}
            shape={
              shapeIndex % 3 === 0
                ? 'square'
                : shapeIndex % 3 === 1
                ? 'triangle'
                : 'circle'
            }
            brighten={
              (brightCircle &&
                i === 2 &&
                clamp((offset - 0.25) * -5, 0.067, 1)) ||
              null
            }
          />
        )
      })}
    </div>
  )
}

export default ShapeColumn
