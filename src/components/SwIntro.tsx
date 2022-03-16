import { css } from '@emotion/react'

import CategoryNav from '../components/CategoryNav'
import { absoluteFill, baseGrid } from '../theme/mixins'
import { colors } from '../theme/variables'

type PropTypes = {
  category: {
    categoryName: string
    categoryNameFull?: string
    description: string
  }
  allCategories: {
    nodes: {
      categoryName: string
      categoryNameFull?: string
    }[]
  }
}

const SwIntro = ({ category, allCategories }: PropTypes) => {
  const styles = {
    intro: css`
      ${baseGrid}
      background: #111;
      padding: var(--gutter-xlg) 0 calc(var(--gutter-xlg) + 7vw);
      h1 {
        grid-column: 2 / -2;
        font-size: var(--fs-84);
        color: ${colors.goldTint1};
        margin: 0;
        position: relative;
      }
      p {
        grid-column: 2 / -2;
        max-width: 72ch;
        color: #fff;
        font-size: var(--fs-21);
        position: relative;
      }
    `,
    background: css`
      ${absoluteFill}
      z-index: 0;
    `,
  }
  return (
    <section css={styles.intro}>
      <div css={styles.background} />
      <CategoryNav
        path="/speakers-workshops/"
        categories={allCategories}
        current={category.categoryName}
        theme="LIGHT"
      />
      <h1>{category.categoryNameFull || category.categoryName}</h1>
      <p>{category.description}</p>
    </section>
  )
}

export default SwIntro
