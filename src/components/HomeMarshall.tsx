import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { baseGrid } from '../theme/mixins'
import { colors } from '../theme/variables'
import AnimateIn from './AnimateIn'

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

  const styles = {
    section: css`
      position: relative;
      z-index: 2;
      clip-path: url(#${clipId});
      background: linear-gradient(to bottom right, #555, #000);
      color: #fff;
      margin-top: -7vw;
    `,
    content: css`
      padding: calc(7vw + var(--gutter-xlg)) 0
        calc(11.5vw + var(--gutter-lg));
      ${baseGrid}
    `,
    contentInner: css``,
    heading: css`
      grid-column: -8 / span 6;
      font-size: var(--fs-60);
      align-self: flex-end;
      justify-self: flex-start;
      max-width: 16ch;
      h2 {
        font-size: inherit;
        margin-bottom: 0.333em;
      }
      em {
        font-style: normal;
        color: ${colors.goldTint1};
      }
    `,
    body: css`
      grid-column: -7 / span 5;
      font-size: var(--fs-21);
    `,
    imageWrap: css`
      position: fixed;
      bottom: 0;
      left: 0;
      width: 50vw;
      height: 100vh;
      filter: drop-shadow(-4rem 2rem 6rem rgba(0, 0, 0, 0.5));
    `,
    image: css`
      width: 100%;
      height: 100%;
    `,
  }
  return (
    <section css={styles.section} ref={setRefs}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
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
      <div css={styles.imageWrap}>
        <GatsbyImage
          css={styles.image}
          image={home.marshallImage.gatsbyImageData}
          alt={home.marshallImage.alt || ''}
          objectPosition="100% 15%"
        />
      </div>
      <div css={styles.content}>
        <AnimateIn fromBack css={styles.heading}>
          <h2
            dangerouslySetInnerHTML={{ __html: home.marshallHeading }}
          />
        </AnimateIn>
        <AnimateIn fromBack css={styles.body}>
          <div
            dangerouslySetInnerHTML={{
              __html: home.marshallBodyNode.childMarkdownRemark.html,
            }}
          />
        </AnimateIn>
      </div>
    </section>
  )
}

export default HomeMarshall
