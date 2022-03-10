import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { absoluteFill, baseGrid, mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import AnimateIn from './AnimateIn'
import Form from './Form'

const HomeContact = () => {
  const { home, contactForm } = useStaticQuery(graphql`
    query {
      home: datoCmsHome {
        contactHeading
        contactBodyNode {
          childMarkdownRemark {
            html
          }
        }
      }
      contactForm: datoCmsContactForm {
        form {
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
      position: relative;
      z-index: 2;
      margin-top: -7vw;
      &:before {
        content: '';
        ${absoluteFill}
        clip-path: url(#${clipId});
        background: linear-gradient(to bottom right, #555, #000);
      }
    `,
    content: css`
      ${baseGrid}
      padding: calc(7vw + var(--gutter-lg)) 0
      calc(5vw + var(--gutter-xlg) + var(--gutter-mlg));
      color: #fff;
    `,
    heading: css`
      font-size: var(--fs-60);
      grid-column: 2 / -2;
      h2 {
        font-size: inherit;
        margin: 0.5em 0;
      }
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
      ${mq().m} {
        grid-column: 2 / span 6;
      }
      ${mq().ms} {
        grid-column: 2 / -2;
      }
    `,
    form: css`
      grid-column: span 5 / -2;
      margin-top: 2.5rem;
      ${mq().m} {
        grid-column: span 6 / -2;
      }
      ${mq().ms} {
        grid-column: 2 / -2;
      }
    `,
  }
  return (
    <section css={styles.section} ref={setRefs} id="work-with-us">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
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
      <div css={styles.content}>
        <AnimateIn css={styles.heading} fromBack>
          <h2
            dangerouslySetInnerHTML={{ __html: home.contactHeading }}
          />
        </AnimateIn>
        <AnimateIn css={styles.body} fromBack>
          <div
            dangerouslySetInnerHTML={{
              __html: home.contactBodyNode.childMarkdownRemark.html,
            }}
          />
        </AnimateIn>
        <AnimateIn css={styles.form} fromBack>
          <Form data={contactForm.form[0]} />
        </AnimateIn>
      </div>
    </section>
  )
}

export default HomeContact
