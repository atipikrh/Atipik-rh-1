import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  BLOG_CANONICAL_OVERRIDES,
  getBlogCanonicalPath,
  isBlogSlugInSitemap,
} from '../lib/blog/canonicalOverrides.js'

describe('canonicalOverrides', () => {
  it('pointe CIP Lormont vers l’article Bordeaux', () => {
    assert.equal(
      getBlogCanonicalPath('formation-conseiller-insertion-professionnelle-lormont'),
      '/blog/formation-cip-bordeaux-conseiller-insertion-professionnelle'
    )
    assert.equal(isBlogSlugInSitemap('formation-conseiller-insertion-professionnelle-lormont'), false)
  })

  it('pointe l’article coûts 30% vers le pilier formation RH', () => {
    assert.equal(
      getBlogCanonicalPath('comment-reduire-couts-recrutement-30-pourcent-formation-rh'),
      '/blog/reduire-couts-recrutement-formation-rh'
    )
    assert.equal(
      isBlogSlugInSitemap('comment-reduire-couts-recrutement-30-pourcent-formation-rh'),
      false
    )
  })

  it('laisse les piliers dans le sitemap', () => {
    assert.equal(isBlogSlugInSitemap('formation-cip-bordeaux-conseiller-insertion-professionnelle'), true)
    assert.equal(isBlogSlugInSitemap('reduire-couts-recrutement-formation-rh'), true)
    assert.equal(
      getBlogCanonicalPath('reduire-couts-recrutement-formation-rh'),
      '/blog/reduire-couts-recrutement-formation-rh'
    )
  })

  it('n’exporte que des cibles différentes du slug source', () => {
    for (const [slug, path] of Object.entries(BLOG_CANONICAL_OVERRIDES)) {
      assert.notEqual(path, `/blog/${slug}`)
    }
  })
})
