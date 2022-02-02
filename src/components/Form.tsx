import { SerializedStyles, css, keyframes } from '@emotion/react'
import { Fragment, SyntheticEvent, useState } from 'react'

import { mq } from '../theme/mixins'
import { absoluteFill, button } from '../theme/mixins'
import { colors } from '../theme/variables'
import LoadingSpinner from './LoadingSpinner'
import MultilineTextField from './MultilineTextField'
import TextField from './TextField'

type FormProps = {
  data: {
    formName: string
    formFields: [
      {
        __typename: string
        id: string
        label: string
        fieldType: string
        required: boolean
      }
    ]
    submitButtonText: string
    successMessageNode: { childMarkdownRemark: { html: string } }
  }
  css?: SerializedStyles
}

const Form = ({ data, ...props }: FormProps) => {
  const [formData, setFormData] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const encode = (data: { [key: string]: string }) => {
      return Object.keys(data)
        .map(
          key =>
            encodeURIComponent(key) +
            '=' +
            encodeURIComponent(data[key])
        )
        .join('&')
    }
    console.log(encode({ 'form-name': data.formName, ...formData }))
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode({ 'form-name': data.formName, ...formData }),
      })
      if (response) {
        setSubmitting(false)
        console.log(response)
      }
      if (response.ok) {
        setSubmitted(true)
      } else {
        alert(
          `Sorry, there was an error submitting this form:
${response.status} ${response.statusText}`
        )
      }
    } catch (error) {
      alert(`Sorry, there was an error submitting this form: 
${error}`)
    }
  }

  const animateIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 6rem, 0)
  }
  to {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`
  const styles = {
    wrapper: css`
      position: relative;
      display: grid;
    `,
    form: css`
      grid-area: 1 / 1 / 2 / 2;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1em var(--gutter-md);
      align-items: center;
      justify-content: center;
      opacity: 1;
      transition: opacity 200ms ease-out, transform 300ms ease-out;
      ${(submitting || submitted) &&
      css`
        opacity: 0;
        transform: translate3d(0, -6rem, 0);
      `}
      ${mq().s} {
        grid-template-columns: 1fr;
      }
    `,
    button: css`
      ${button}
      border: none;
      display: block;
      position: relative;
      grid-column: 1 / -1;
      justify-self: flex-start;
      margin-top: 0.5em;
      background: linear-gradient(
        to top right,
        ${colors.goldShade3},
        ${colors.goldShade2},
        ${colors.goldShade1},
        ${colors.gold}
      );
      &:before {
        content: '';
        ${absoluteFill};
        z-index: 0;
        transition: background 300ms ease;
      }
      span {
        color: white;
        position: relative;
        transition: color 300ms ease;
      }
      input {
        ${absoluteFill}
        opacity: 0;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
      }
      &:hover,
      &:focus-within {
        span {
          color: ${colors.goldShade1};
        }
        &:before {
          background: white;
        }
      }
    `,
    multilineTextField: css`
      grid-column: 1 / -1;
    `,
    submitted: css`
      grid-area: 1 / 1 / 2 / 2;
      animation: ${animateIn} 300ms ease-out forwards;
      align-self: flex-start;
      h2 {
        font-size: var(--fs-30);
        margin-top: 0;
        margin-bottom: 0.5em;
      }
    `,
    spinner: css`
      grid-area: 1 / 1 / 2 / 2;
      width: 6rem;
      height: 6rem;
      align-self: center;
      justify-self: center;
      visibility: hidden;
      opacity: 0;
      transition: opacity 500ms ease;
      ${submitting &&
      css`
        visibility: visible;
        opacity: 1;
      `}
    `,
  }

  return (
    <div css={styles.wrapper} {...props}>
      <LoadingSpinner css={styles.spinner} color="#fff" />
      {submitted && (
        <div
          css={styles.submitted}
          dangerouslySetInnerHTML={{
            __html:
              data.successMessageNode.childMarkdownRemark.html.replace(
                /h[13456]/g,
                'h2'
              ),
          }}
        />
      )}
      <form
        name={data.formName}
        data-netlify
        netlify-honeypot="bot-field"
        method="post"
        css={styles.form}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" aria-hidden />
        <input
          type="hidden"
          name="form-name"
          value={data.formName}
          aria-hidden
        />
        {data.formFields.map((field, i) => (
          <Fragment key={i}>
            {field.__typename === 'DatoCmsTextField' && (
              <TextField
                label={field.label}
                type={field.fieldType}
                required={field.required}
                key={i}
                onChange={handleChange}
              />
            )}
            {field.__typename === 'DatoCmsMultilineTextField' && (
              <MultilineTextField
                label={field.label}
                required={field.required}
                key={i}
                onChange={handleChange}
              />
            )}
          </Fragment>
        ))}
        <div css={styles.button}>
          <span>{data.submitButtonText}</span>
          <input
            name="submit"
            type="submit"
            aria-label={data.submitButtonText}
            value=""
          />
        </div>
      </form>
    </div>
  )
}

export default Form
