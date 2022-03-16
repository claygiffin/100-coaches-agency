import { css } from '@emotion/react'
import { uniqueId } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

import { useElementRect } from '../hooks/useElementRect'
import { absoluteFill, baseGrid } from '../theme/mixins'
import { colors } from '../theme/variables'
import { CoachProps } from '../types/customTypes'

type PropTypes = {
  topics: {
    title: string
    description: string
    coaches: CoachProps[]
  }[]
}

const SwTopics = ({ topics }: PropTypes) => {
  const clipId = useMemo(() => uniqueId('clipPath--'), [])
  const [sectionRef, setSectionRef] = useState(null)
  const refCallback = useCallback(node => {
    setSectionRef(node)
  }, [])
  const { width: sectWidth, height: sectHeight } =
    useElementRect(sectionRef)

  const styles = {
    section: css`
      ${baseGrid};
      position: relative;
      grid-gap: var(--gutter-sm);
      padding: calc(var(--gutter-md) + 7vw) 0 var(--gutter-xlg);
      margin-top: -7vw;
      &:before {
        content: '';
        ${absoluteFill}
        background: #fff;
        z-index: 0;
        clip-path: url(#${clipId});
      }
    `,
    topic: css`
      position: relative;
      grid-column: 2 / -2;
      border-bottom: 1px solid #ccc;
      &:last-of-type {
        border: none;
        margin-bottom: 3rem;
      }
    `,
    heading: css`
      font-size: var(--fs-36);
      font-weight: 325;
      color: ${colors.goldShade1};
      margin: 1em 0 0.5em;
    `,
    body: css`
      font-size: var(--fs-18);
      color: #555;
      max-width: 80ch;
      margin-bottom: 3em;
    `,
  }
  return (
    <section css={styles.section} ref={refCallback}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id={clipId}>
            <path
              d={`M${sectWidth},${0.047 * sectWidth} C${
                0.68 * sectWidth
              },${0.14 * sectWidth} ${0.333 * sectWidth},${
                -0.105 * sectWidth
              } 0,${
                0.06 * sectWidth
              } L0,${sectHeight} L${sectWidth},${sectHeight} L${sectWidth},${
                0.047 * sectWidth
              } Z`}
            />
          </clipPath>
        </defs>
      </svg>
      {topics.map((topic, i: number) => (
        <div key={i} css={styles.topic}>
          <h2 css={styles.heading}>{topic.title}</h2>
          <div
            css={styles.body}
            dangerouslySetInnerHTML={{
              __html:
                '<p>' +
                topic.description.replace(/\n+/g, '</p><p>') +
                '</p>',
            }}
          />
        </div>
      ))}
    </section>
  )
}

export default SwTopics
