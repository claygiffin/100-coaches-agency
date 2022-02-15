import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

type SeoProps = {
  title?: string
  description?: string
  lang?: string
  image?: {
    url: string
  }
  noSuffix?: boolean
}

const Seo = ({
  title = ``,
  description = ``,
  lang = `en`,
  image,
  noSuffix = false,
}: SeoProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site: datoCmsSite {
          globalSeo {
            siteName
            titleSuffix
            twitterAccount
            facebookPageUrl
            fallbackSeo {
              title
              description
              image {
                url(imgixParams: { q: 65, maxW: 1080 })
              }
              twitterCard
            }
          }
        }
      }
    `
  )

  const metaDescription =
    description || site.globalSeo.fallbackSeo.description
  const metaTitle = title || site.globalSeo.fallbackSeo.title
  const titleSuffix = noSuffix ? '' : site.globalSeo.titleSuffix || ''

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s${titleSuffix}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: `${metaTitle}${titleSuffix}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.globalSeo.twitterAccount || ``,
        },
        {
          name: `twitter:title`,
          content: metaTitle + titleSuffix,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `image`,
          property: `og:image`,
          content:
            image?.url || site.globalSeo.fallbackSeo.image?.url || null,
        },
      ]}
    />
  )
}

export default Seo
