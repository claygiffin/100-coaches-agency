'use client'

import { type ComponentProps, useMemo, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

import { ArticleThumbnail } from '../ArticleThumbnail/ArticleThumbnail'
import styles from './ArticlesGrid.module.scss'

type Props = ComponentProps<'section'> & {
  filters: string[]
  articles: Queries.ArticleFragment[]
  newsItems: Queries.NewsItemFragment[]
}

export const ArticlesGrid = ({
  articles,
  newsItems,
  filters,
  ...props
}: Props) => {
  const [filter, setFilter] = useState(filters[0])
  const [loadCount, setLoadCount] = useState(1)
  const loadAmount = 36
  const allArticlesNews = useMemo(() => {
    return [...articles, ...newsItems]
      .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
      .filter(item => {
        if (filter === filters[0]) {
          return true
        } else if (filter === filters[1]) {
          return item.__typename === 'ArticleRecord'
        } else if (filter === filters[2]) {
          return item.__typename === 'NewsItemRecord'
        }
      })
  }, [articles, newsItems, filter, filters])
  return (
    <section
      className={styles.section}
      {...props}
    >
      <div className={styles.filter}>
        <span>Filter: </span>
        <div>
          <span>
            {filter}
            <BiChevronDown />
          </span>
          <select
            onChange={e => setFilter(e.target.value)}
            defaultValue={filters[0]}
          >
            {filters.map(x => (
              <option
                key={x}
                value={x}
              >
                {x}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.articles}>
        {allArticlesNews
          .slice(0, loadCount * loadAmount)
          .map((article, i) => (
            <ArticleThumbnail
              key={i}
              article={article}
            />
          ))}
      </div>
      {loadCount * loadAmount < allArticlesNews.length && (
        <button
          className={styles.loadButton}
          onClick={() => setLoadCount(prev => prev + 1)}
        >
          Load More
        </button>
      )}
    </section>
  )
}
