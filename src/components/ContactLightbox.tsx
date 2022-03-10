import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'

import { colors } from '../theme/variables'
import Form from './Form'
import Lightbox from './Lightbox'

const ContactLightbox = () => {
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
    formContainer: css`
      pointer-events: all;
      background: linear-gradient(to top right, #222, #555);
      padding: var(--gutter-md);
      box-sizing: border-box;
      width: 100vw;
      max-width: 48ch;
      color: white;
    `,
    heading: css`
      font-size: var(--fs-48);
      font-weight: 325;
      margin: 0;
      em {
        font-style: normal;
        color: ${colors.goldTint1};
      }
    `,
    body: css`
      font-size: var(--fs-16);
      margin-bottom: 2em;
    `,
  }
  return (
    <Lightbox slug="/contact">
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
        <Form data={contactForm.form[0]} />
      </div>
    </Lightbox>
  )
}

export default ContactLightbox
