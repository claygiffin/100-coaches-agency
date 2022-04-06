import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { absoluteFill } from '../theme/mixins'
import { colors } from '../theme/variables'
import ArrowButton from './ArrowButton'
import ContactLightbox from './ContactLightbox'

const AboutHow = () => {
  type QueryProps = {
    page: {
      howHeading: string
      howBodyNode: { childMarkdownRemark: { html: string } }
      howDetails: Array<{
        title: string
        descriptionNode: { childMarkdownRemark: { html: string } }
      }>
      howLinkText: string
    }
  }
  const { page }: QueryProps = useStaticQuery(graphql`
    query {
      page: datoCmsAboutPage {
        howHeading
        howBodyNode {
          childMarkdownRemark {
            html
          }
        }
        howDetails {
          ...TitleDescriptionFragment
        }
        howLinkText
      }
    }
  `)
  const clipId = useMemo(() => uniqueId('clipPath--'), [])
  const [sectionRef, setSectionRef] = useState(null)
  const refCallback = useCallback(node => {
    setSectionRef(node)
  }, [])
  const { width: sectWidth, height: sectHeight } =
    useElementRect(sectionRef)

  const styles = {
    section: css`
      color: #fff;
      position: relative;
      margin-top: -4vw;
      &:before {
        content: '';
        ${absoluteFill}
        background: linear-gradient(to top right, #222, #555);
        z-index: 0;
        clip-path: url(#${clipId});
      }
    `,
    content: css`
      position: relative;
      display: grid;
      width: 100%;
      box-sizing: border-box;
      padding: calc(var(--gutter-lg) + 4vw) var(--margin-outer);
      > * {
        position: relative;
      }
    `,
    heading: css`
      font-size: var(--fs-60);
      margin: 0.5em 0 0;
      color: ${colors.goldTint1};
    `,
    body: css`
      font-size: var(--fs-21);
      margin-bottom: 2em;
      max-width: 72ch;
    `,
    title: css`
      font-size: var(--fs-21);
      text-transform: uppercase;
      font-weight: 500;
      margin: 0.75em 0;
      letter-spacing: 0.05em;
      color: ${colors.goldTint1};
    `,
    description: css`
      font-size: var(--fs-18);
      font-weight: 600;
      max-width: 80ch;
      margin-bottom: 2em;
    `,
    button: css`
      font-size: var(--fs-16);
    `,
  }
  return (
    <section css={styles.section} ref={refCallback}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M0,${0.03 * sectWidth} C${0.5 * sectWidth},${
                -0.05 * sectWidth
              } ${0.7 * sectWidth},${0.06 * sectWidth} ${sectWidth},${
                0.03 * sectWidth
              } L${sectWidth},${sectHeight} L0,${sectHeight}
              Z`}
            />
          </clipPath>
        </defs>
      </svg>
      <div css={styles.content}>
        <h2 css={styles.heading}>{page.howHeading}</h2>
        <div
          css={styles.body}
          dangerouslySetInnerHTML={{
            __html: page.howBodyNode.childMarkdownRemark.html,
          }}
        />
        {page.howDetails.map((detail, i: number) => (
          <div key={i}>
            <h3 css={styles.title}>{detail.title}</h3>
            <div
              css={styles.description}
              dangerouslySetInnerHTML={{
                __html: detail.descriptionNode.childMarkdownRemark.html,
              }}
            />
          </div>
        ))}
        <ArrowButton
          text={page.howLinkText}
          style="OUTLINE"
          color="GOLD_LIGHT"
          css={styles.button}
        >
          <ContactLightbox />
        </ArrowButton>
      </div>
    </section>
  )
}

export default AboutHow
