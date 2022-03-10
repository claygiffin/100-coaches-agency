import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { absoluteFill, baseGrid, mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import AnimateIn from './AnimateIn'
import ArrowButton from './ArrowButton'

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

  const styles = {
    section: css`
      z-index: 2;
      position: relative;
      margin-top: -11.5vw;
      &:before {
        content: '';
        ${absoluteFill}
        clip-path: url(#${clipId});
        background: #fff;
      }
    `,
    content: css`
      ${baseGrid}
      padding: calc(11.5vw + var(--gutter-lg)) 0
      calc(7vw + var(--gutter-lg));
      color: #555;
    `,
    text: css`
      grid-column: 2 / -2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    `,
    heading: css`
      font-size: var(--fs-60);
      margin: 0.333em 0;
      max-width: 25ch;
      em {
        display: inline-block;
        font-style: normal;
        color: ${colors.goldShade1};
        ${mq().s} {
          display: inline;
        }
      }
    `,
    body: css`
      font-size: var(--fs-21);
      max-width: 75ch;
      p {
        line-height: 1.667;
      }
    `,
    button: css`
      font-size: var(--fs-16);
      display: inline-block;
      margin-top: 1.25em;
    `,
  }

  return (
    <section css={styles.section} ref={setRefs}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
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
      <div css={styles.content}>
        <AnimateIn css={styles.text}>
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
          <ArrowButton
            css={styles.button}
            color="GOLD_DARK"
            as={Link}
            style="OUTLINE"
            text="Explore our workshops"
            to="/speakers-and-workshops/"
          />
        </AnimateIn>
      </div>
    </section>
  )
}

export default HomeResults
