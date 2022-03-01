import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'

import { baseGrid, mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import AnimateIn from './AnimateIn'
import ArrowButton from './ArrowButton'
import CoachCategoryMenu from './CoachCategoryMenu'
import HomePromiseBackground from './HomePromiseBackground'

const HomePromise = () => {
  const { home } = useStaticQuery(graphql`
    query {
      home: datoCmsHome {
        promiseHeading
        promiseBodyNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  const styles = {
    section: css`
      position: relative;
      z-index: 2;
      margin-top: -10.5vw;
    `,
    content: css`
      ${baseGrid}
      padding: calc(10.5vw + var(--gutter-xlg)) 0
      calc(10.5vw + var(--gutter-xlg));
      color: white;
    `,
    heading: css`
      grid-column: 2 / span 7;
      font-size: var(--fs-60);
      margin-top: 0.75em;
      ${mq().ms} {
        grid-column-end: -2;
      }
      h2 {
        font-size: inherit;
        margin: 0 0 0.333em;
        text-shadow: 0 0 3px ${colors.goldShade3};
      }
    `,
    button: css`
      font-size: var(--fs-16);
      margin-top: 2.25em;
    `,
    body: css`
      grid-column: 2 / span 8;
      font-size: var(--fs-21);
      text-shadow: 0 0 3px ${colors.goldShade3};
      ${mq().ms} {
        grid-column-end: -2;
      }
    `,
  }

  return (
    <section css={styles.section}>
      <HomePromiseBackground />
      <div css={styles.content}>
        <AnimateIn css={styles.heading}>
          <h2>{home.promiseHeading}</h2>
        </AnimateIn>
        <AnimateIn css={styles.body}>
          <div
            dangerouslySetInnerHTML={{
              __html: home.promiseBodyNode.childMarkdownRemark.html,
            }}
          />
          <ArrowButton
            text="See our coaches"
            style="OUTLINE"
            color="WHITE"
            css={styles.button}
          >
            <CoachCategoryMenu />
          </ArrowButton>
        </AnimateIn>
      </div>
    </section>
  )
}

export default HomePromise
