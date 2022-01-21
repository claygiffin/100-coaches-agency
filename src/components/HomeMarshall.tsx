import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { baseGrid } from '../theme/mixins'
import { colors } from '../theme/variables'

const HomeMarshall = () => {
  const { home } = useStaticQuery(graphql`
    query {
      home: datoCmsHome {
        marshallHeading
        marshallBodyNode {
          childMarkdownRemark {
            html
          }
        }
        marshallImage {
          gatsbyImageData(width: 720, imgixParams: { q: 75 })
          alt
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
    background: linear-gradient(to bottom right, #555, #000);
    ${baseGrid}
    z-index: 2;
    color: #fff;
    margin-top: -7vw;
    padding: calc(7vw + var(--gutter-xlg)) 0
      calc(11.5vw + var(--gutter-lg));
  `
  const headingStyle = css`
    grid-column: -8 / span 6;
    font-size: var(--fs-60);
    margin-bottom: 0.333em;
    align-self: flex-end;
    justify-self: flex-start;
    max-width: 16ch;
    em {
      font-style: normal;
      color: ${colors.goldTint1};
    }
  `
  const bodyStyle = css`
    grid-column: -7 / span 5;
    font-size: var(--fs-21);
  `
  const imageWrapStyle = css`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 50vw;
    height: 95vh;
    filter: drop-shadow(-4rem 2rem 6rem rgba(0, 0, 0, 0.5));
  `
  const imageStyle = css`
    width: 100%;
    height: 100%;
  `
  return (
    <section css={sectionStyle} ref={setRefs}>
      <svg width="0" height="0">
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M${sectWidth},${0.047 * sectWidth} C${
                0.68 * sectWidth
              },${0.14 * sectWidth} ${0.333 * sectWidth},${
                -0.105 * sectWidth
              } 0,${
                0.06 * sectWidth
              } L0,${sectHeight} L${sectWidth},${sectHeight} L${sectWidth},${
                0.047 * sectWidth
              } Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <div css={imageWrapStyle}>
        <GatsbyImage
          css={imageStyle}
          image={home.marshallImage.gatsbyImageData}
          alt={home.marshallImage.alt || ''}
          objectPosition="100% 0%"
        />
      </div>
      <h2
        css={headingStyle}
        dangerouslySetInnerHTML={{ __html: home.marshallHeading }}
      />
      <div
        css={bodyStyle}
        dangerouslySetInnerHTML={{
          __html: home.marshallBodyNode.childMarkdownRemark.html,
        }}
      />
    </section>
  )
}

export default HomeMarshall
