import {
  type SeoOrFaviconTag,
  type TitleMetaLinkTag,
  toNextMetadata,
} from 'react-datocms/seo'

export const generateDatoCmsMetadata = (
  data: TitleMetaLinkTag[] | SeoOrFaviconTag[],
  { canonicalSlug }: { canonicalSlug?: string | null | undefined } = {}
) => {
  const canonicalUrl = 'https://www.100coaches.com'
  return {
    ...toNextMetadata(data),
    alternates: {
      canonical: canonicalSlug
        ? `${canonicalUrl}/${canonicalSlug}`
        : undefined,
    },
  }
}
