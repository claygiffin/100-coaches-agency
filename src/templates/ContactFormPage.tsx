import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'

import Form from '../components/Form'
import Layout from '../components/Layout'
import { colors } from '../theme/variables'

const ContactFormPage = () => {
  const { contactForm } = useStaticQuery(graphql`
    query {
      contactForm: datoCmsContactForm {
        form {
          ...FormFragment
        }
        lightboxHeading
        lightboxBodyNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)
  const styles = {
    main: css`
      background: linear-gradient(to top right, #222, #555);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: var(--gutter-lg) var(--margin-outer);
    `,
    formContainer: css`
      pointer-events: all;
      box-sizing: border-box;
      width: calc(100% - 1.5rem);
      max-width: 60ch;
      color: white;
      margin: 0 0.75rem;
    `,
    heading: css`
      font-size: var(--fs-48);
      font-weight: 325;
      margin: 0.5em 0 0;
      em {
        font-style: normal;
        color: ${colors.goldTint1};
      }
    `,
    body: css`
      font-size: var(--fs-16);
      margin-bottom: 2em;
    `,
    form: css`
      margin-bottom: 2.5rem;
    `,
  }
  return (
    <Layout mainCss={styles.main}>
      <div css={styles.formContainer}>
        <h2
          css={styles.heading}
          dangerouslySetInnerHTML={{
            __html: contactForm.lightboxHeading,
          }}
        />
        <div
          css={styles.body}
          dangerouslySetInnerHTML={{
            __html:
              contactForm.lightboxBodyNode.childMarkdownRemark.html,
          }}
        />
        <Form css={styles.form} data={contactForm.form[0]} />
      </div>
    </Layout>
  )
}

export default ContactFormPage
