import { css } from '@emotion/react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import { colors } from '../theme/variables'
import { toSlug } from '../utils/helpers'

const CoachCategoryNav = ({ current = '' }) => {
  const { categories } = useStaticQuery(graphql`
    query {
      categories: allDatoCmsCoachCategory(
        sort: { fields: position, order: ASC }
      ) {
        nodes {
          categoryName
        }
      }
    }
  `)
  const styles = {
    nav: css`
      position: relative;
      grid-column: 2 / -2;
      margin-bottom: 3em;
      justify-self: flex-start;
      display: flex;
      &:before {
        content: '';
        display: block;
        position: absolute;
        background: #aaa;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 2px;
      }
    `,
    link: css`
      font-size: var(--fs-18);
      display: block;
      line-height: 1.125;
      padding: 0.5em 0;
      font-weight: 400;
      color: #666;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      border-bottom: 3px solid transparent;
      box-sizing: content-box;
      z-index: 1;
      margin-right: 1.5em;
      &:last-of-type {
        margin-right: 0;
      }
    `,
    active: css`
      color: ${colors.goldShade1};
      border-color: ${colors.goldShade1};
    `,
  }
  return (
    <nav css={styles.nav}>
      {categories.nodes.map((category: any, i: number) => (
        <Link
          to={`/coaches/${toSlug(category.categoryName)}/`}
          css={[
            styles.link,
            category.categoryName === current && styles.active,
          ]}
          key={i}
        >
          {category.categoryName}
        </Link>
      ))}
    </nav>
  )
}

export default CoachCategoryNav
