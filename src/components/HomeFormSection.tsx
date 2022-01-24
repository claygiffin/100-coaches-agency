import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { absoluteFill, baseGrid } from '../theme/mixins'
import { colors } from '../theme/variables'

const HomeFormSection = () => {
  const clipId = useMemo(() => uniqueId('clipPath--'), [])

  const [sectionRef, setSectionRef] = useState(null)
  const setRefs = useCallback(node => {
    setSectionRef(node)
  }, [])
  const { width: sectWidth, height: sectHeight } =
    useElementRect(sectionRef)

  const styles = {
    section: css`
      clip-path: url(#${clipId});
      background: linear-gradient(to bottom right, #555, #000);
      height: 100vh;
      ${baseGrid}
      z-index: 3;
      margin-top: -7vw;
    `,
  }
  return (
    <section css={styles.section} ref={setRefs}>
      <svg width="0" height="0">
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M${sectWidth},${0.008 * sectWidth} C${
                0.59 * sectWidth
              },${0.1375 * sectWidth} ${0.333 * sectWidth},${
                -0.112 * sectWidth
              } 0,${
                0.07 * sectWidth
              } L0,${sectHeight} L${sectWidth},${sectHeight} L${sectWidth},${
                0.008 * sectWidth
              } Z`}
            />
          </clipPath>
        </defs>
      </svg>
    </section>
  )
}

export default HomeFormSection
