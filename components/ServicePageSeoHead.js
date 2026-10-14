import Head from 'next/head'
import { BASE_URL, DEFAULT_OG_IMAGE } from '../lib/seo/site'
import { getBriefById } from '../lib/seo/content-briefs'
import { buildRecommendedSchema } from '../lib/seo/schema'

/**
 * Métadonnées SEO + Open Graph + JSON-LD à partir d’un brief (formations certifiantes, bilan, landings).
 * @param {{ briefId: string, keywords?: string }} props
 */
export default function ServicePageSeoHead({ briefId, keywords }) {
  const brief = getBriefById(briefId)
  if (!brief) return null

  const path = brief.existingPagePath ?? brief.recommendedSlug
  const canonical = path.startsWith('http') ? path : `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`
  const schema = buildRecommendedSchema(briefId)
  const schemaScripts = Array.isArray(schema) ? schema : [schema]

  const keywordContent =
    keywords ||
    [...brief.primaryKeywords, ...(brief.longTailKeywords?.slice(0, 8) ?? [])].join(', ')

  return (
    <Head>
      <title key="title">{brief.metaTitle}</title>
      <meta key="description" name="description" content={brief.metaDescription} />
      {keywordContent ? <meta name="keywords" content={keywordContent} /> : null}
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={brief.metaTitle} />
      <meta property="og:description" content={brief.metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Atipik RH" />
      <meta property="og:locale" content="fr_FR" />
      <meta key="og:image" property="og:image" content={DEFAULT_OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={brief.metaTitle} />
      <meta name="twitter:description" content={brief.metaDescription} />
      <meta key="twitter:image" name="twitter:image" content={DEFAULT_OG_IMAGE} />

      {schemaScripts.map((ld, index) => (
        <script
          key={`schema-${briefId}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
    </Head>
  )
}
