import { type ComponentProps, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { DatoStructuredText } from '@/features/dato-structured-text'

import styles from './MatchcraftStep.module.scss'

type Props = ComponentProps<'li'> & {
  data?: Queries.MatchcraftStepFragment
  index: number
  onChangeInView: (index: number, inView: boolean) => void
}

export const MatchcraftStep = ({
  data,
  onChangeInView,
  index,
  ...props
}: Props) => {
  const { inView, ref } = useInView({
    rootMargin: '-25% 0% -25%',
  })
  useEffect(() => {
    onChangeInView(index, inView)
  }, [inView, onChangeInView])

  return (
    <li
      className={styles.step}
      ref={ref}
      data-in-view={inView}
      {...props}
    >
      {data && (
        <>
          <div className={styles.number}>{index + 1}.</div>
          <h3 className={styles.title}>{data.title}</h3>
          <div className={styles.description}>
            <DatoStructuredText data={data.description} />
          </div>
        </>
      )}
    </li>
  )
}
