import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { absoluteFill, mq } from '../theme/mixins'
import { colors } from '../theme/variables'

const AboutServices = () => {
  const { page } = useStaticQuery(graphql`
    query {
      page: datoCmsAboutPage {
        servicesHeading
        services {
          ...TitleDescriptionFragment
        }
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
      position: relative;
      display: grid;
      padding: calc(var(--gutter-md) + 7vw) var(--margin-outer)
        calc(var(--gutter-lg) + 4vw);
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: var(--gutter-lg);
      color: #fff;
      ${mq().ml}{
        grid-template-columns: repeat(2, 1fr);
      }
      ${mq().m}{
        grid-template-columns: 1fr;
      }
      &:before {
        content: '';
        ${absoluteFill}
        background: linear-gradient(to top right, ${colors.goldShade3}, ${colors.gold});
        z-index: 0;
        clip-path: url(#${clipId});
      }
      > * {
        position: relative;
      }
    `,
    heading: css`
      font-size: var(--fs-60);
      grid-column: 1 / -1;
      margin: 0 0 0.5em;
    `,
    title: css`
      font-size: var(--fs-21);
      text-transform: uppercase;
      font-weight: 500;
      margin: 0.75em 0;
      letter-spacing: 0.05em;
    `,
    description: css`
      font-size: var(--fs-18);
      font-weight: 600;
      max-width: 80ch;
      margin-bottom: 2em;
    `,
  }
  return (
    <section css={styles.section} ref={refCallback}>
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
      <h2 css={styles.heading}>{page.servicesHeading}</h2>
      {page.services.map((service: any, i: number) => (
        <div key={i}>
          <h3 css={styles.title}>{service.title}</h3>
          <div
            css={styles.description}
            dangerouslySetInnerHTML={{
              __html: service.descriptionNode.childMarkdownRemark.html,
            }}
          />
        </div>
      ))}
    </section>
  )
}

export default AboutServices
