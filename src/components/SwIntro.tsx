import { css } from '@emotion/react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { useMemo } from 'react'

import CategoryNav from '../components/CategoryNav'
import { useWindowDimensions } from '../hooks/useWindowDimensions'
import { absoluteFill, baseGrid } from '../theme/mixins'
import { colors } from '../theme/variables'

type PropTypes = {
  category: {
    categoryName: string
    categoryNameFull?: string
    description: string
    heroImage: {
      horizontal: IGatsbyImageData
      vertical: IGatsbyImageData
      alt?: string
    }
  }
  allCategories: {
    nodes: {
      categoryName: string
      categoryNameFull?: string
    }[]
  }
}

const SwIntro = ({ category, allCategories }: PropTypes) => {
  const windowDimensions = useWindowDimensions()

  const heroImage = useMemo(() => {
    if (windowDimensions.width > windowDimensions.height) {
      return category.heroImage.horizontal
    } else {
      return category.heroImage.vertical
    }
  }, [windowDimensions, category.heroImage])

  const categoryName = (
    category.categoryNameFull || category.categoryName
  ).replace('/', '/&#8203;')
  const styles = {
    intro: css`
      ${baseGrid}
      background: #111;
      padding: var(--gutter-xlg) 0 calc(var(--gutter-xlg) + 7vw);
      h1 {
        grid-column: 2 / -2;
        max-width: 100%;
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
    heroImage: css`
      width: 100%;
      height: 100%;
    `,
  }
  return (
    <section css={styles.intro}>
      <div css={styles.background}>
        <GatsbyImage
          css={styles.heroImage}
          image={heroImage}
          alt={category.heroImage.alt || ''}
          backgroundColor="#111"
        />
      </div>
      <CategoryNav
        path="/speakers-workshops/"
        categories={allCategories}
        current={category.categoryName}
        theme="LIGHT"
      />
      <h1 dangerouslySetInnerHTML={{ __html: categoryName }} />
      <p>{category.description}</p>
    </section>
  )
}

export default SwIntro
