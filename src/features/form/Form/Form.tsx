'use client'

import {
  type ComponentPropsWithoutRef,
  type FormEventHandler,
  Fragment,
  useRef,
  useState,
} from 'react'

import { LoadingSpinner } from '@/features/common'
import { DatoStructuredText } from '@/features/dato-structured-text'
import { useElementRect } from '@/hooks/useElementRect'

import { FormSelectField } from '../FormFields/FormSelectField'
import { FormTextArea } from '../FormFields/FormTextArea'
import { FormTextField } from '../FormFields/FormTextField'
import styles from './Form.module.scss'
import { submitForm } from './actions'

type Props = ComponentPropsWithoutRef<'section'> & {
  data:
    | Queries.FormFragment
    | Queries.EmbeddedFormFragment
    | null
    | undefined
  variant: 'PAGE' | 'MODAL' | 'EMBED'
}

export const Form = ({ data, variant, ...props }: Props) => {
  const [formRef, setFormRef] = useState<HTMLFormElement | null>(null)
  const [successRef, setSuccessRef] = useState<HTMLElement | null>(null)

  const { height: formHeight } = useElementRect(formRef)
  const { height: successHeight } = useElementRect(successRef)

  const formData = useRef<{ [key: string]: string }>({})

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (name: string | undefined, value: string) => {
    if (name) {
      formData.current[name] = value
    }
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    setSubmitting(true)
    const botField = e.currentTarget[
      'feed_after_midnight'
    ] as HTMLInputElement
    try {
      const response = await submitForm({
        siteName: 'C-Suite Strategies',
        formName: data?.formName || '',
        data: formData.current,
        recipients: data?.recipients || '',
        botField: botField.checked,
      })
      if (response?.statusCode === 200) {
        setSubmitting(false)
        setSubmitted(true)
      } else {
        setSubmitting(false)
        alert(
          `There was a problem with your submission. Please try again.`
        )
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <section
      className={styles.section}
      data-variant={variant}
      {...props}
    >
      {data?.__typename === 'FormRecord' && (
        <Fragment>
          <h1 className={styles.heading}>{data?.heading}</h1>
          <div className={styles.intro}>
            <DatoStructuredText data={data?.intro} />
          </div>
        </Fragment>
      )}
      <div
        className={styles.wrapper}
        style={{
          '--success-height': successHeight + 'px',
          '--form-height': formHeight + 'px',
        }}
        data-submitted={
          submitted ? true : submitting ? 'submitting' : false
        }
      >
        <LoadingSpinner className={styles.spinner} />

        <div
          ref={node => setSuccessRef(node)}
          className={styles.successMessage}
        >
          <DatoStructuredText data={data?.successMessage} />
        </div>

        <form
          className={styles.form}
          ref={node => setFormRef(node)}
          name={data?.formName || undefined}
          method="post"
          onSubmit={handleSubmit}
        >
          {data?.formFields?.map(field => {
            switch (field?.__typename) {
              case 'FormTextFieldRecord':
                return (
                  <FormTextField
                    data={field}
                    onChange={handleChange}
                    key={field.id}
                  />
                )
              case 'FormTextAreaRecord':
                return (
                  <FormTextArea
                    data={field}
                    onChange={handleChange}
                    key={field.id}
                  />
                )
              case 'FormSelectFieldRecord':
                return (
                  <FormSelectField
                    data={field}
                    onChange={handleChange}
                    key={field.id}
                  />
                )
            }
          })}
          <div className={styles.buttonWrap}>
            <div className={styles.button}>
              {/* Honeypot */}
              <input
                type="checkbox"
                id="feed_after_midnight"
                name="feed_after_midnight"
                tabIndex={-1}
                autoComplete={'off'}
                className={styles.feedAfterMidnight}
              />
              <span>{data?.submitButtonText}</span>
              <input
                name="submit"
                type="submit"
                aria-label={data?.submitButtonText || 'Submit'}
                value=""
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
