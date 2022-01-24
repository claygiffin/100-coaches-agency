import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { baseGrid } from '../theme/mixins'
import { colors } from '../theme/variables'
import HomePromiseBackground from './HomePromiseBackground'

const HomePromise = () => {
  const { home } = useStaticQuery(graphql`
    query {
      home: datoCmsHome {
        promiseHeading
        promiseBodyNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  const clipId = useMemo(() => uniqueId('clipPath--'), [])

  const [sectionRef, setSectionRef] = useState(null)
  const setRefs = useCallback(node => {
    setSectionRef(node)
  }, [])
  const { width: sectWidth, height: sectHeight } =
    useElementRect(sectionRef)

  const styles = {
    section: css`
      ${baseGrid}
      z-index: 2;
      background: linear-gradient(
        to top right,
        ${colors.goldShade3},
        ${colors.goldShade2},
        ${colors.goldShade1},
        ${colors.gold}
      );
      clip-path: url(#${clipId});
      color: white;
      margin-top: -10.5vw;
      padding: calc(10.5vw + var(--gutter-xlg)) 0
        calc(10.5vw + var(--gutter-xlg));
    `,
    heading: css`
      grid-column: 2 / span 7;
      font-size: var(--fs-60);
      margin-bottom: 0.333em;
      text-shadow: 0 0 3px ${colors.goldShade3};
    `,
    body: css`
      grid-column: 2 / span 8;
      font-size: var(--fs-21);
      text-shadow: 0 0 3px ${colors.goldShade3};
    `,
  }

  return (
    <section css={styles.section} ref={setRefs}>
      <svg width="0" height="0">
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M${sectWidth},${0.02 * sectWidth} C${
                0.75 * sectWidth
              },${-0.0625 * sectWidth} ${0.435 * sectWidth},${
                0.16 * sectWidth
              } 0,${
                0.0875 * sectWidth
              } L0,${sectHeight} L${sectWidth},${sectHeight} L${sectWidth},${
                0.02 * sectWidth
              } Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <HomePromiseBackground />
      <h2 css={styles.heading}>{home.promiseHeading}</h2>
      <div
        css={styles.body}
        dangerouslySetInnerHTML={{
          __html: home.promiseBodyNode.childMarkdownRemark.html,
        }}
      />
    </section>
  )
}

export default HomePromise
