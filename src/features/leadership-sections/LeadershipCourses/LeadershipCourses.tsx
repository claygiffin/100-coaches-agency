'use client'

import Image from 'next/image'
import { type ComponentProps } from 'react'

import { DatoImage, DatoImageFocused } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'

import styles from './LeadershipCourses.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.LeadershipCoursesFragment | null | undefined
}

export const LeadershipCourses = ({ data, ...props }: Props) => {
  const getImage = () => {
    switch (data?.coursesImage.format) {
      case 'svg': {
        return (
          <Image
            src={data.coursesImage.url}
            alt={data.coursesImage.responsiveImage?.alt || ''}
            width={data.coursesImage.width || 0}
            height={data.coursesImage.height || 0}
            data-svg
          />
        )
      }
      default: {
        return <DatoImage data={data?.coursesImage?.responsiveImage} />
      }
    }
  }
  return (
    <section
      id="courses"
      className={styles.section}
      {...props}
    >
      <div className={styles.header}>
        <h2 className={styles.heading}>{data?.coursesHeading}</h2>
        <span className={styles.headerLine}></span>
      </div>
      <div
        className={styles.headingImage}
        data-format={data?.coursesImage.format}
      >
        {getImage()}
      </div>
      <div className={styles.body}>
        <div className={styles.bodyText}>
          <DatoStructuredText data={data?.coursesDescription} />
        </div>
        <DatoLink
          className={styles.button}
          data={data?.coursesButton}
          isButton
          borderVariant={'ROUNDED'}
        />
      </div>
      <div className={styles.coaches}>
        {Array.isArray(data?.coursesCoaches) &&
          data?.coursesCoaches.map((coach, index) => {
            return (
              <div
                key={index}
                className={styles.coach}
              >
                <div className={styles.coachImage}>
                  <DatoImageFocused
                    data={coach?.image?.responsiveImage}
                    focalPoint={coach?.image?.focalPoint}
                  />
                </div>
                <div className={styles.coachInfo}>
                  <h2 className={styles.coachName}>{coach?.name}</h2>
                  <div className={styles.coachInfoLine}></div>
                  <span className={styles.coachTitle}>
                    {coach?.title}
                  </span>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}
