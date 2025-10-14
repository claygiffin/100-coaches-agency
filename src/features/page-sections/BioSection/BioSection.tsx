import { type ComponentProps } from 'react'

import { DatoImage } from '@/features/dato-image'
import {
  DatoStructuredText,
  noEmptyParagraphsRule,
} from '@/features/dato-structured-text'
import { Accordion, Button, LinkList } from '@/features/ui'

import styles from './BioSection.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.BioSectionFragment
}

export const BioSection = ({ data, ...props }: Props) => {
  return (
    <section
      className={styles.section}
      data-color-scheme={data.colorScheme}
      data-layout={data.layout}
      {...props}
    >
      <div className={styles.text}>
        <h2 className={styles.heading}>{data.heading}</h2>
        {data.title && <h3 className={styles.title}>{data.title}</h3>}
        <div className={styles.body}>
          <DatoStructuredText
            data={data.body}
            customNodeRules={[noEmptyParagraphsRule]}
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
      <div className={styles.headshotContainer}>
        <DatoImage
          className={styles.headshot}
          data={data.headshot.responsiveImage}
        />
      </div>
    </section>
  )
}
