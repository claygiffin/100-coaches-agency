'use client'

import {
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import type { ComponentProps } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

import { DatoLink } from '@/features/links'
import { MarkdownHeading } from '@/features/ui'

import { Card } from '../Card/Card'
import styles from './ArchiveGrid.module.scss'

const categories = [
  'All Content',
  'Articles',
  'Videos',
  'Newsletters',
  'Books',
]

type Props = ComponentProps<'section'> & {
  initialCategory: string
  pageData: Queries.ArchivePageQuery
}

export const ArchiveGrid = ({ initialCategory, pageData }: Props) => {
  const [selectedCategory, setSelectedCategory] =
    useState(initialCategory)
  // const [allItems, setAllItems] = useState<
  //   Array<{
  //     type: string
  //     description: string
  //     date: string
  //     slug: string
  //     thumbnail: any
  //   }>
  // >([])

  const filteredItems = useMemo(() => {
    if (!pageData) return
    const allItems = [
      ...(pageData?.allArticles || []),
      ...(pageData?.allBooks || []),
      ...(pageData?.allNewsletters || []),
      ...(pageData?.allVideos || []),
    ]

    const getType = (item: any) => {
      switch (item.__typename) {
        default:
        case 'ArticleRecord':
          return 'Articles'
        case 'BookRecord':
          return 'Books'
        case 'NewsletterRecord':
          return 'Newsletters'
        case 'VideoRecord':
          return 'Videos'
      }
    }

    const items = allItems.map(item => ({
      type: getType(item),
      description: item?.title || '',
      date: item?.createdAt || '',
      slug: item?.slug || '',
      thumbnail: item?.thumbnail,
    }))

    // Sort by date descending (newest first)
    items.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    if (selectedCategory === 'All Content') {
      return items
    }
    return items?.filter(
      item => item.type.toLowerCase() === selectedCategory.toLowerCase()
    )
  }, [pageData, selectedCategory])

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    const currentParamCategory = searchParams.get('category')
    if (currentParamCategory !== selectedCategory) {
      const newParams = new URLSearchParams()
      newParams.set('category', selectedCategory)
      router.push(pathname + '?' + newParams)
    }
  }, [selectedCategory, pathname, router, searchParams])

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
        {filteredItems?.map((item, index) => (
          <Card
            key={index}
            {...item}
          />
        ))}
      </div>
    </main>
  )
}
