import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { absoluteFill, mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import DatoLink from './DatoLink'

const AboutServices = () => {
  const { page } = useStaticQuery(graphql`
    query {
      page: datoCmsAboutPage {
        servicesHeading
        services {
          title
          descriptionNode {
            childMarkdownRemark {
              html
            }
          }
          link {
            ... on DatoCmsInternalLink {
              ...InternalLinkFragment
            }
            ... on DatoCmsCoachMenuLink {
              ...CoachMenuLinkFragment
            }
            ... on DatoCmsSWMenuLink {
              ...SWMenuLinkFragment
            }
          }
        }
      }
    }
  `)
  const clipId = useMemo(() => uniqueId('clipPath--'), [])
  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null)
  const refCallback = useCallback((node: HTMLElement | null) => {
    setSectionRef(node)
  }, [])
  const { width: sectWidth, height: sectHeight } =
    useElementRect(sectionRef)

  const styles = {
    section: css`
      position: relative;
      margin-top: -2.5vw;
      color: #fff;
      &:before {
        content: '';
        ${absoluteFill}
        background: linear-gradient(to top right, ${colors.goldShade3}, ${colors.gold});
        z-index: 0;
        clip-path: url(#${clipId});
      }
    `,
    content: css`
      position: relative;
      display: grid;
      box-sizing: border-box;
      padding: calc(var(--gutter-sm) + 7vw) var(--margin-outer)
        calc(var(--gutter-lg) + 4vw);
      /* grid-template-columns: repeat(2, 1fr); */
      grid-column-gap: var(--gutter-lg);
      > * {
        position: relative;
      }
      /* ${mq().m} {
        grid-template-columns: 1fr;
      } */
    `,
    heading: css`
      font-size: var(--fs-60);
      grid-column: 1 / -1;
      margin: 0.5em 0;
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
      margin-bottom: 1.5em;
    `,
    link: css`
      margin-bottom: 3em;
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
      <div css={styles.content}>
        <h2 css={styles.heading}>{page.servicesHeading}</h2>
        {page.services.map((service: any, i: number) => (
          <div key={i}>
            {/* <h3 css={styles.title}>{service.title}</h3> */}
            <div
              css={styles.description}
              dangerouslySetInnerHTML={{
                __html:
                  service.descriptionNode.childMarkdownRemark.html,
              }}
            />
            <DatoLink
              css={styles.link}
              link={service.link[0]}
              buttonColor="WHITE"
              buttonStyle="OUTLINE"
              arrowButton
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutServices
