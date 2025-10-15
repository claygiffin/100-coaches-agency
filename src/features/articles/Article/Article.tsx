'use client'

import { useState } from 'react'

import { DatoImage, DatoImageFocused } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { HubspotForm } from '@/features/hubSpotForm'
import { DatoLink } from '@/features/links'
import {
  ExternalVideoPlayer,
  InternalVideoPlayer,
} from '@/features/video-player'
import { classes } from '@/utils/css'

import { ArticleCarousel } from '../ArticleCarousel/ArticleCarousel'
import styles from './Article.module.scss'

type PropTypes = {
  article:
    | Queries.ArticleFragment
    | Queries.NewsletterFragment
    | Queries.VideoFragment
    | null
    | undefined
  layout: 'MODAL' | 'PAGE'
}

const QuoteSymbol = () => {
  return (
    <svg
      width="33"
      height="29"
      viewBox="0 0 33 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8 22.92C11.8 24.92 11.2 26.4 10 27.36C8.88 28.32 7.6 28.8 6.16 28.8C4.64 28.8 3.24 28.28 1.96 27.24C0.76 26.12 0.16 24.44 0.16 22.2C0.16 19.96 0.92 17 2.44 13.32C4.04 9.55999 6.72 5.31999 10.48 0.599998L13.96 2.88C12.04 6.39999 10.76 9.12 10.12 11.04C9.48 12.96 9.16 14.4 9.16 15.36C9.16 16.24 9.36 17.04 9.76 17.76C10.24 18.4 10.68 19.12 11.08 19.92C11.56 20.72 11.8 21.72 11.8 22.92ZM30.16 22.92C30.16 24.92 29.56 26.4 28.36 27.36C27.24 28.32 25.96 28.8 24.52 28.8C23 28.8 21.6 28.28 20.32 27.24C19.04 26.12 18.4 24.44 18.4 22.2C18.4 19.96 19.2 17 20.8 13.32C22.4 9.55999 25.08 5.31999 28.84 0.599998L32.32 2.88C30.4 6.39999 29.12 9.12 28.48 11.04C27.84 12.96 27.52 14.4 27.52 15.36C27.52 16.24 27.72 17.04 28.12 17.76C28.6 18.4 29.04 19.12 29.44 19.92C29.92 20.72 30.16 21.72 30.16 22.92Z"
        fill="#D4D4D4"
      />
    </svg>
  )
}

export const Article = ({ article, layout }: PropTypes) => {
  const [selectedAccordion, setSelectedAccordion] = useState('')

  const selectAccordion = (id: string) => {
    if (id === selectedAccordion) setSelectedAccordion('')
    else setSelectedAccordion(id)
  }

  return (
    <article
      className={styles.article}
      data-layout={layout}
    >
      <div
        className={styles.articleBody}
        data-layout={layout}
      >
        <h1 className={styles.title}>{article?.title}</h1>
        {article?.subtitle && (
          <h2 className={styles.subTitle}>{article?.subtitle}</h2>
        )}
        <div className={styles.headerLine}></div>
        <div className={styles.body}>
          <DatoStructuredText
            renderBlock={({ record }) => {
              if (record.__typename === 'ImageBlockRecord') {
                return (
                  <figure className={styles.fig}>
                    <DatoImage data={record.image.responsiveImage} />
                    {record.image.title && (
                      <figcaption>{record.image.title}</figcaption>
                    )}
                  </figure>
                )
              } else if (record.__typename === 'ExternalVideoRecord') {
                return (
                  <ExternalVideoPlayer
                    data={record.video}
                    className={styles.videoContainer}
                  />
                )
              } else if (record.__typename === 'InternalVideoRecord') {
                return (
                  <InternalVideoPlayer
                    data={record.video}
                    className={styles.videoContainer}
                    style={{
                      '--aspect-ratio':
                        record.video.video.width /
                        record.video.video.height,
                    }}
                  />
                )
              } else if (record.__typename === 'HubspotFormRecord') {
                return (
                  <HubspotForm
                    portalId={record?.portalId}
                    formId={record?.formId}
                    region={record?.region}
                  />
                )
              } else if (
                record.__typename === 'ArticleButtonFieldRecord'
              ) {
                return (
                  <div className={styles.buttons}>
                    {record.buttons?.map((button, index) => {
                      return (
                        <DatoLink
                          key={index}
                          data={button}
                          className={styles.button}
                          isButton
                          borderVariant={'ROUNDED'}
                        />
                      )
                    })}
                  </div>
                )
              } else if (
                record.__typename === 'ArticleCarouselRecord'
              ) {
                return (
                  <ArticleCarousel
                    items={record?.images}
                    description={record?.description}
                  />
                )
              } else if (
                record.__typename === 'ArticleAccordionRecord'
              ) {
                return (
                  <div className={styles.accordion}>
                    <div
                      className={styles.accordionHeader}
                      onClick={() => selectAccordion(record?.id)}
                    >
                      <h4 className={styles.accordionTitle}>
                        {record?.title}
                      </h4>
                      <div
                        className={classes(
                          styles.button,
                          selectedAccordion === record?.id &&
                            styles.selected
                        )}
                      >
                        <svg viewBox="0 0 30 30">
                          <path d="M15 1V29" />
                          <path d="M1 15H29" />
                        </svg>
                      </div>
                    </div>
                    <div
                      className={classes(
                        styles.accordionBody,
                        selectedAccordion === record?.id &&
                          styles.selected
                      )}
                    >
                      <DatoStructuredText data={record?.text} />
                    </div>
                  </div>
                )
              } else if (
                record.__typename === 'ArticlePullQuoteRecord'
              ) {
                return (
                  <div className={styles.pullQuote}>
                    <DatoStructuredText data={record?.quote} />
                  </div>
                )
              } else if (
                record.__typename === 'ArticleTestimonialRecord'
              ) {
                return (
                  <div className={styles.testimonial}>
                    <div className={styles.testimonialBody}>
                      <div className={styles.text}>
                        <div className={styles.topSymbol}>
                          <QuoteSymbol />
                        </div>
                        <DatoStructuredText
                          data={record?.testimonialBody}
                        />
                        <div className={styles.bottomSymbol}>
                          <QuoteSymbol />
                        </div>
                      </div>
                      {record?.customerPhoto && (
                        <DatoImageFocused
                          className={styles.photo}
                          data={record?.customerPhoto?.responsiveImage}
                          focalPoint={record?.customerPhoto?.focalPoint}
                        />
                      )}
                    </div>
                    <div className={styles.testimonialFooter}>
                      <p>-{record?.customerName}</p>
                    </div>
                  </div>
                )
              } else return null
            }}
            data={article?.body}
          />
        </div>
      </div>
      <div>
        {article?.ctaText && (
          <div className={styles.cta}>
            <h4>{article?.ctaText}</h4>
            {article?.ctaButton && (
              <DatoLink
                data={article?.ctaButton}
                className={styles.button}
                isButton
                borderVariant={'ROUNDED'}
              />
            )}
          </div>
        )}
      </div>
    </article>
  )
}
