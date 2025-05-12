'use client'

import { kebabCase } from 'lodash'
import {
  type ChangeEvent,
  Fragment,
  useCallback,
  useEffect,
  useId,
  useState,
} from 'react'

import { useElementHeight } from '@/hooks/useElementRect'
import { classes } from '@/utils/css'

import styles from './FormFields.module.scss'

type Props = {
  data: Queries.FormTextAreaFragment | null
  onChangeAction: (name: string | undefined, value: string) => void
}

export const FormTextArea = ({ data, onChangeAction }: Props) => {
  const name = data?.label ? kebabCase(data?.label) : undefined

  const [shrink, setShrink] = useState(false)
  const [value, setValue] = useState('')
  const handleFocus = () => {
    if (!shrink) {
      setShrink(true)
    }
  }
  const handleBlur = () => {
    if (value.length > 0) {
      setShrink(true)
    } else {
      setShrink(false)
    }
  }
  useEffect(() => {
    if (value.length > 0) {
      setShrink(true)
    }
  }, [value])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value)
      onChangeAction(name, e.target.value)
    },
    [name, onChangeAction]
  )

  const uniqueId = useId()

  const [labelRef, setLabelRef] = useState<HTMLElement | null>(null)
  const labelHeight = useElementHeight(labelRef)

  return (
    <div
      className={styles.container}
      style={{
        '--label-height': labelHeight ? labelHeight + 'px' : undefined,
      }}
    >
      <label
        htmlFor={name + uniqueId}
        className={styles.label}
        ref={node => setLabelRef(node)}
        data-shrink={shrink}
        data-required={data?.required}
      >
        {data?.label}
      </label>
      <div className={styles.inputBase}>
        <span className={classes(styles.input, styles.sizer)}>
          {value.split(/\n/g).map((text, i) => (
            <Fragment key={i}>
              {text}
              <br />
            </Fragment>
          ))}
        </span>
        <textarea
          className={classes(styles.input, styles.textArea)}
          name={name}
          id={name + uniqueId}
          required={data?.required || undefined}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  )
}
