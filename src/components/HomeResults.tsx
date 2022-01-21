import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

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

  const [sectionRef, setSectionRef] = useState(null)
  const setRefs = useCallback(node => {
    setSectionRef(node)
  }, [])
  const { width: sectWidth, height: sectHeight } =
    useElementRect(sectionRef)

  const sectionStyle = css`
    clip-path: url(#${clipId});
    background: #fff;
    ${baseGrid}
    z-index: 2;
    color: #555;
    margin-top: -11.5vw;
    padding: calc(11.5vw + var(--gutter-lg)) 0
      calc(7vw + var(--gutter-lg));
  `
  const headingStyle = css`
    grid-column: 2 / -2;
    font-size: var(--fs-60);
    margin-bottom: 0.333em;
    align-self: flex-end;
    justify-self: center;
    max-width: 25ch;
    text-align: center;
    em {
      display: inline-block;
      font-style: normal;
      color: ${colors.goldTint1};
    }
  `
  const bodyStyle = css`
    grid-column: 2 / -2;
    font-size: var(--fs-21);
    text-align: center;
    justify-self: center;
    max-width: 75ch;
  `
  return (
    <section css={sectionStyle} ref={setRefs}>
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
      <h2
        css={headingStyle}
        dangerouslySetInnerHTML={{ __html: home.resultsHeading }}
      />
      <div
        css={bodyStyle}
        dangerouslySetInnerHTML={{
          __html: home.resultsSubheadingNode.childMarkdownRemark.html,
        }}
      />
    </section>
  )
}

export default HomeResults
