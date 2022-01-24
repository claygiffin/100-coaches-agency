import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { useElementRect } from '../hooks/useElementRect'
import { baseGrid } from '../theme/mixins'
import { colors } from '../theme/variables'

const HomeResults = () => {
  const { home } = useStaticQuery(graphql`
    query {
      home: datoCmsHome {
        resultsHeading
        resultsSubheadingNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  const clipId = useMemo(() => uniqueId('clipPath--'), [])
  const { ref: inViewRef, inView } = useInView({
    rootMargin: '10% 0% -10%',
  })

  const [sectionRef, setSectionRef] = useState(null)
  const setRefs = useCallback(node => {
    setSectionRef(node)
  }, [])
  const { width: sectWidth, height: sectHeight } =
    useElementRect(sectionRef)

  const styles = {
    section: css`
      clip-path: url(#${clipId});
      background: #fff;
      ${baseGrid}
      z-index: 2;
      color: #555;
      margin-top: -11.5vw;
      padding: calc(11.5vw + var(--gutter-lg)) 0
        calc(7vw + var(--gutter-lg));
    `,
    textWrap: css`
      grid-column: 2 / -2;
    `,
    text: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      opacity: 0;
      transform: scale3D(1.125, 1.125, 1);
      transition-property: opacity, transform;
      transition-duration: 1000ms;
      transition-timing-function: cubic-bezier(0.25, 0.75, 0.25, 1);
      ${inView &&
      css`
        opacity: 1;
        transform: none;
      `};
    `,
    heading: css`
      font-size: var(--fs-60);
      margin: 0.333em 0;
      max-width: 25ch;
      em {
        display: inline-block;
        font-style: normal;
        color: ${colors.goldTint1};
      }
    `,
    body: css`
      font-size: var(--fs-21);
      max-width: 75ch;
    `,
  }

  return (
    <section css={styles.section} ref={setRefs}>
      <svg width="0" height="0">
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M${sectWidth},${0.105 * sectWidth} C${
                0.48 * sectWidth
              },${0.14 * sectWidth} ${0.48 * sectWidth},${
                -0.015 * sectWidth
              } 0,${
                0.003 * sectWidth
              } L0,${sectHeight} L${sectWidth},${sectHeight} L${sectWidth},${
                0.105 * sectWidth
              } Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <div css={styles.textWrap} ref={inViewRef}>
        <div css={styles.text}>
          <h2
            css={styles.heading}
            dangerouslySetInnerHTML={{ __html: home.resultsHeading }}
          />
          <div
            css={styles.body}
            dangerouslySetInnerHTML={{
              __html:
                home.resultsSubheadingNode.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default HomeResults
