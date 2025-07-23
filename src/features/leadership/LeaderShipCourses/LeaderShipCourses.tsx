'use client'

import { type ComponentProps } from 'react'

import { DatoImageFocused } from '@/features/dato-image'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { DatoLink } from '@/features/links'

import styles from './LeaderShipCourses.module.scss'

type Props = ComponentProps<'section'> & {
  data: Queries.LeaderShipCoursesFragment | null | undefined
}

export const LeaderShipCourses = ({ data, ...props }: Props) => {
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
      <div className={styles.body}>
        <div className={styles.bodyLeft}>
          <div className={styles.bodyImage}>
            <DatoImageFocused
              data={data?.coursesImage?.responsiveImage}
              focalPoint={data?.coursesImage?.focalPoint}
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
                      <h2 className={styles.coachName}>
                        {coach?.name}
                      </h2>
                      <div className={styles.coachInfoLine}></div>
                      <span className={styles.coachTitle}>
                        {coach?.title}
                      </span>
                    </div>
                  </div>
                )
              })}
          </div>
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
        <div className={styles.bodyRight}>
          {Array.isArray(data?.coursesCoaches) &&
            data?.coursesCoaches.map((coach, index) => {
              return (
                <div
                  key={index}
                  className={styles.coach}
                >
                  <DatoImageFocused
                    data={coach?.image?.responsiveImage}
                    focalPoint={coach?.image?.focalPoint}
                    className={styles.coachImage}
                  />
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
      </div>
    </section>
  )
}
