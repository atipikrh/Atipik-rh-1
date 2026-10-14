import Head from 'next/head'
import { DEFAULT_OG_IMAGE } from '../lib/seo/site'
import {
  BASE_URL,
  getProfessionnelleConfigBySlug,
  buildJsonLdCourse,
} from '../lib/seo/professionnalisantesConfig'

/**
 * Métadonnées SEO + Open Graph + Twitter + JSON-LD Course pour une formation professionnalisante.
 * @param {{ slug: string }} props
 */
export default function FormationProfessionnelleSeoHead({ slug }) {
  const c = getProfessionnelleConfigBySlug(slug)
  if (!c) return null

  const canonical = `${BASE_URL}${c.path}`
  const jsonLd = buildJsonLdCourse(c)

  return (
    <Head>
      <title key="title">{c.metaTitle}</title>
      <meta key="description" name="description" content={c.description} />
      <meta name="keywords" content={c.keywords} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={c.metaTitle} />
      <meta property="og:description" content={c.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Atipik RH" />
      <meta property="og:locale" content="fr_FR" />
      <meta key="og:image" property="og:image" content={DEFAULT_OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={c.twitterTitle} />
      <meta name="twitter:description" content={c.description} />
      <meta key="twitter:image" name="twitter:image" content={DEFAULT_OG_IMAGE} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </Head>
  )
}
