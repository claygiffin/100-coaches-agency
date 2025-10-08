import { renderNodeRule } from 'datocms-structured-text-to-plain-text'
import { isParagraph } from 'datocms-structured-text-utils'
import { type ComponentProps } from 'react'

import { MediaCarousel } from '@/features/carousel'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { Flourish } from '@/features/decorations'
import { Accordion, Button, LinkList } from '@/features/ui'

import styles from './ContentSection.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.ContentSectionFragment
}

export const ContentSection = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      data-color-scheme={data.colorScheme}
      data-layout={data.layout}
      {...props}
    >
      <div className={styles.text}>
        <h2 className={styles.heading}>{data.heading}</h2>
        {data.subheading && (
          <h3 className={styles.subheading}>
            <DatoStructuredText
              data={data.subheading}
              customNodeRules={[
                renderNodeRule(isParagraph, ({ children, key }) => (
                  <div key={key}>{children}</div>
                )),
              ]}
            />
          </h3>
        )}
        <div className={styles.body}>
          <DatoStructuredText
            data={data.body}
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case 'AccordionRecord': {
                  return (
                    <Accordion
                      className={styles.accordion}
                      data={record}
                    />
                  )
                }
                case 'ButtonRecord': {
                  return (
                    <Button
                      className={styles.button}
                      data={record}
                    />
                  )
                }
                case 'LinkListRecord': {
                  return (
                    <LinkList
                      className={styles.linkList}
                      data={record}
                    />
                  )
                }
              }
            }}
          />
        </div>
      </div>
      {data.layout === 'TEXT_MEDIA' && data.media && (
        <div className={styles.carouselContainer}>
          <MediaCarousel
            className={styles.carousel}
            data={data.media}
            variant={'CONTENT_SECTION'}
          />
        </div>
      )}
      {data.layout === 'TEXT_QUOTE' && data.pullQuote && (
        <div className={styles.quote}>
          <Flourish flip />
          <div>
            <DatoStructuredText data={data.pullQuote} />
          </div>
          <Flourish />
        </div>
      )}
    </section>
  )
}
