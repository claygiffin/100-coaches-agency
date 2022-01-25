import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { baseGrid } from '../theme/mixins'
import { colors } from '../theme/variables'
import Form from './Form'

const HomeContact = () => {
  const { home } = useStaticQuery(graphql`
    query {
      home: datoCmsHome {
        contactHeading
        contactBodyNode {
          childMarkdownRemark {
            html
          }
        }
        contactForm {
          ...FormFragment
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
      clip-path: url(#${clipId});
      background: linear-gradient(to bottom right, #555, #000);
      color: #fff;
      ${baseGrid}
      z-index: 3;
      margin-top: -7vw;
      padding: calc(7vw + var(--gutter-lg)) 0
        calc(5vw + var(--gutter-xlg) + var(--gutter-mlg));
    `,
    heading: css`
      font-size: var(--fs-60);
      grid-column: 2 / -2;
      margin: 0.333em 0;
      em {
        display: inline-block;
        font-style: normal;
        color: ${colors.goldTint1};
      }
    `,
    body: css`
      grid-column: 2 / span 7;
      font-size: var(--fs-21);
      padding-right: var(--gutter-md);
      em {
        display: inline-block;
        font-style: normal;
        font-weight: 400;
        color: ${colors.goldTint1};
      }
    `,
    form: css`
      grid-column: span 5 / -2;
      margin-top: 2.5rem;
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
      <h2
        css={styles.heading}
        dangerouslySetInnerHTML={{ __html: home.contactHeading }}
      />
      <div
        css={styles.body}
        dangerouslySetInnerHTML={{
          __html: home.contactBodyNode.childMarkdownRemark.html,
        }}
      />
      <Form data={home.contactForm[0]} css={styles.form} />
    </section>
  )
}

export default HomeContact
