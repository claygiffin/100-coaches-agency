import { css } from '@emotion/react'
import { graphql } from 'gatsby'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import ArrowButton from '../components/ArrowButton'
import CategoryNav from '../components/CategoryNav'
import CoachCategoryFeatured from '../components/CoachCategoryFeatured'
import CoachCategoryThumbnail from '../components/CoachCategoryThumbnail'
import ContactLightbox from '../components/ContactLightbox'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { useElementRect } from '../hooks/useElementRect'
import { absoluteFill, baseGrid, mq } from '../theme/mixins'
import { colors } from '../theme/variables'
import { CoachProps, SeoProps } from '../types/customTypes'

export const data = graphql`
  query ($categoryName: String!) {
    categories: allDatoCmsCoachCategory(
      sort: { fields: position, order: ASC }
    ) {
      nodes {
        categoryName
      }
    }
    category: datoCmsCoachCategory(
      categoryName: { eq: $categoryName }
    ) {
      categoryName
      categoryNameFull
      description
      featuredCoach {
        ...CoachFragment
        photo {
          large: gatsbyImageData(
            width: 720
            imgixParams: { q: 75, sat: -100 }
          )
        }
      }
      featuredCoaches {
        ...CoachFragment
      }
      seo {
        title
        description
      }
    }
    page: datoCmsCoachCategoryPage {
      ctaHeading
      ctaBody
      ctaLinkText
    }
  }
`

type PropTypes = {
  data: {
    categories: {
      nodes: {
        categoryName: string
      }[]
    }
    category: {
      categoryName: string
      categoryNameFull: string
      description: string
      featuredCoach: CoachProps
      featuredCoaches: CoachProps[]
      seo: SeoProps
    }
    page: {
      ctaHeading: string
      ctaBody: string
      ctaLinkText: string
    }
  }
}

const CoachCategoryPage = ({ data }: PropTypes) => {
  const { categories, category, page } = data
  const clipId = useMemo(() => uniqueId('clipPath--'), [])
  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null)
  const refCallback = useCallback((node: HTMLElement | null) => {
    setSectionRef(node)
  }, [])
  const { width: sectWidth, height: sectHeight } =
    useElementRect(sectionRef)
  const styles = {
    intro: css`
      ${baseGrid}
      background: #fff;
      padding: var(--gutter-xlg) 0;
      h1 {
        grid-column: 2 / -2;
        font-size: var(--fs-84);
        color: ${colors.goldShade1};
        margin: 0;
      }
      p {
        grid-column: 2 / -2;
        max-width: 72ch;
        color: #555;
        font-size: var(--fs-21);
      }
    `,
    coaches: css`
      background: white;
      display: grid;
      position: relative;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: var(--gutter-sm);
      padding: var(--gutter-md);
      ${mq().ml} {
        grid-template-columns: repeat(3, 1fr);
      }
      ${mq().ms} {
        grid-template-columns: repeat(2, 1fr);
      }
    `,
    coachesHeading: css`
      display: block;
      position: relative;
      font-size: var(--fs-36);
      font-weight: 325;
      font-family: var(--serif);
      grid-column: 1 / -1;
      justify-self: center;
      text-align: center;
      margin-top: 0.25em;
      margin-bottom: 1em;
      padding-bottom: 0.5em;
      color: #333;
      background-image: linear-gradient(${colors.gold}, ${colors.gold});
      background-size: 1.5em 3px;
      background-repeat: no-repeat;
      background-position: 50% 100%;
    `,
    conclusion: css`
      display: flex;
      position: relative;
      flex-direction: column;
      grid-column: 1 / -1;
      text-align: center;
      align-items: center;
      padding-bottom: calc(var(--gutter-lg) + 5vw);
      margin-top: 2.5vw;
      padding-top: 2.5vw;
      p {
        position: relative;
        max-width: 70ch;
        line-height: 1.5;
      }
      &:before {
        content: '';
        ${absoluteFill}
        background: linear-gradient(to top right, #efefef, #f8f8f8);
        z-index: 0;
        clip-path: url(#${clipId});
      }
    `,
    conclusionHeading: css`
      margin-top: 2.5em;
      margin-bottom: 0;
    `,
    button: css`
      font-size: var(--fs-16);
      margin-top: 0.75em;
    `,
  }
  return (
    <Layout>
      <Seo
        title={
          category.seo?.title ||
          category.categoryNameFull ||
          category.categoryName
        }
        description={category.seo?.description || category.description}
      />
      <section css={styles.intro}>
        <CategoryNav
          categories={categories}
          current={category.categoryName}
          path="/coaches/"
          allLink
        />
        <h1>{category.categoryNameFull || category.categoryName}</h1>
        <p>{category.description}</p>
      </section>
      <CoachCategoryFeatured featuredCoach={category.featuredCoach} />
      <section css={styles.coaches}>
        <span css={styles.coachesHeading}>
          Featured {category.categoryNameFull || category.categoryName}
        </span>
        {category.featuredCoaches.map((coach, i: number) => (
          <CoachCategoryThumbnail coach={coach} key={i} index={i} />
        ))}
      </section>
      <section css={styles.conclusion} ref={refCallback}>
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <clipPath id={clipId}>
              <path
                d={`M0,${0.03 * sectWidth} C${0.3 * sectWidth},${
                  0.06 * sectWidth
                } ${0.5 * sectWidth},${
                  -0.05 * sectWidth
                } ${sectWidth},${
                  0.03 * sectWidth
                } L${sectWidth},${sectHeight} L0,${sectHeight}
              Z`}
              />
            </clipPath>
          </defs>
        </svg>
        <h2 css={[styles.coachesHeading, styles.conclusionHeading]}>
          {page.ctaHeading}
        </h2>
        <p>{page.ctaBody}</p>
        <ArrowButton
          text={page.ctaLinkText}
          style="OUTLINE"
          color="GOLD_DARK"
          css={styles.button}
        >
          <ContactLightbox />
        </ArrowButton>
      </section>
    </Layout>
  )
}

export default CoachCategoryPage
