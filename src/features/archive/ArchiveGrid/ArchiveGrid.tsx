'use client'

import type { ComponentProps } from 'react'
import { useEffect, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

import { DatoLink } from '@/features/links'
import { MarkdownHeading } from '@/features/ui'

import { Card } from '../Card/Card'
import styles from './ArchiveGrid.module.scss'

const categories = [
  'all content',
  'article',
  'video',
  'newsletter',
  'book',
]

type Props = ComponentProps<'section'> & {
  category: string
  pageData: Queries.ArchivePageQuery
}

export const ArchiveGrid = ({ category, pageData }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(category)
  const [allItems, setAllItems] = useState<
    Array<{
      type: string
      description: string
      date: string
      slug: string
      thumbnail: any
      videoLink: string
    }>
  >([])

  useEffect(() => {
    if (!pageData) return

    const items = [
      ...(pageData?.allArticles || []),
      ...(pageData?.allBooks || []),
      ...(pageData?.allNewsletters || []),
    ].map(item => ({
      type:
        item?.__typename === 'ArticleRecord'
          ? 'Article'
          : item?.__typename === 'BookRecord'
            ? 'Book'
            : 'Newsletter',
      description: item?.title || '',
      date: item?.createdAt || '',
      slug: item?.slug || '',
      thumbnail: item?.thumbnail,
      videoLink: '',
    }))

    const videoItems = (pageData?.allVideos || []).map(item => ({
      type: 'Video',
      description: item?.description || '',
      date: item?.createdAt || '',
      slug: '',
      thumbnail: item?.file?.thumbnailUrl,
      videoLink: item?.file?.url,
    }))

    const combinedItems = [...items, ...videoItems]

    // Sort by date descending (newest first)
    combinedItems.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    setAllItems(combinedItems)
  }, [pageData])

  // Optional: Filtered items based on selected category
  const filteredItems =
    selectedCategory === 'all content'
      ? allItems
      : allItems.filter(
          item =>
            item.type.toLowerCase() === selectedCategory.toLowerCase()
        )

  return (
    <main className={styles.main}>
      <DatoLink
        data={pageData?.archivePage?.archiveBackLink}
        className={styles.backButton}
        iconType={'ARROW_LEFT'}
      />
      <div className={styles.headerContainer}>
        <MarkdownHeading
          className={styles.title}
          as="h2"
        >
          {pageData?.archivePage?.archiveHeading}
        </MarkdownHeading>
        <div className={styles.selectbox}>
          <span>SHOW: </span>
          <div>
            <span className={styles.category}>
              {selectedCategory}
              <BiChevronDown />
            </span>
            <select
              id="category-selector"
              onChange={e => setSelectedCategory(e.target.value)}
              defaultValue={selectedCategory}
            >
              {categories.map(category => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className={styles.cardLayout}>
        {filteredItems.map((item, index) => (
          <Card
            key={index}
            {...item}
          />
        ))}
      </div>
    </main>
  )
}
