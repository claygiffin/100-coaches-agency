import { css } from '@emotion/react'

import { baseGrid } from '../theme/mixins'
import { colors } from '../theme/variables'

type PropTypes = {
  heading: string
  bodyNode: {
    childMarkdownRemark: {
      html: string
    }
  }
}

const PageIntro = ({ heading, bodyNode }: PropTypes) => {
  const styles = {
    section: css`
      ${baseGrid}
      padding: var(--gutter-xlg) 0;
    `,
    heading: css`
      grid-column: 2 / -2;
      color: ${colors.goldShade1};
      font-size: var(--fs-84);
      margin: 0.25em 0 0;
    `,
    body: css`
      grid-column: 2 / -2;
      max-width: 72ch;
      color: #555;
      font-size: var(--fs-21);
    `,
  }
  return (
    <section css={styles.section}>
      <h1 css={styles.heading}>{heading}</h1>
      <div
        css={styles.body}
        dangerouslySetInnerHTML={{
          __html: bodyNode.childMarkdownRemark.html,
        }}
      />
    </section>
  )
}

export default PageIntro
