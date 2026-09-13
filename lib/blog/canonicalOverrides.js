/**
 * Articles publiés dont l’URL canonique n’est pas leur propre slug.
 * Exclus du sitemap ; le HTML conserve un rel=canonical vers le pilier.
 */
export const BLOG_CANONICAL_OVERRIDES = {
  'formation-conseiller-insertion-professionnelle-lormont':
    '/blog/formation-cip-bordeaux-conseiller-insertion-professionnelle',
  'comment-reduire-couts-recrutement-30-pourcent-formation-rh':
    '/blog/reduire-couts-recrutement-formation-rh',
}

export function getBlogCanonicalPath(slug) {
  return BLOG_CANONICAL_OVERRIDES[slug] || `/blog/${slug}`
}

export function isBlogSlugInSitemap(slug) {
  return !BLOG_CANONICAL_OVERRIDES[slug]
}
