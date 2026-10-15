import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { buildSitemapXml, fallbackSitemapXml } from '../lib/seo/sitemapXml.js'

describe('sitemapXml', () => {
  it('écrit une URL absolue par entrée valide', () => {
    const xml = buildSitemapXml([
      { path: '/', changeFrequency: 'weekly', priority: 1 },
      {
        path: '/formations/cip',
        changeFrequency: 'monthly',
        priority: 0.9,
        lastModified: '2026-10-13',
      },
    ])
    assert.match(xml, /<loc>https:\/\/www\.atipikrh\.com\/<\/loc>/)
    assert.match(xml, /<loc>https:\/\/www\.atipikrh\.com\/formations\/cip<\/loc>/)
    assert.match(xml, /<lastmod>2026-10-13T00:00:00\.000Z<\/lastmod>/)
    assert.equal(xml.match(/<loc>/g).length, 2)
  })

  it('échappe les caractères XML et ignore une entrée sans chemin', () => {
    const xml = buildSitemapXml([
      { path: '/contact?sujet=a&b=1', priority: 0.5, changeFrequency: 'monthly' },
      { path: 'relatif' },
      null,
    ])
    assert.match(xml, /<loc>https:\/\/www\.atipikrh\.com\/contact\?sujet=a&amp;b=1<\/loc>/)
    assert.equal(xml.match(/<loc>/g).length, 1)
  })

  it('omet une date invalide et une priorité hors bornes', () => {
    const xml = buildSitemapXml([
      { path: '/vae', lastModified: 'pas-une-date', priority: 2, changeFrequency: 'monthly' },
    ])
    assert.doesNotMatch(xml, /<lastmod>/)
    assert.doesNotMatch(xml, /<priority>/)
    assert.match(xml, /<changefreq>monthly<\/changefreq>/)
  })

  it('le repli ne contient que l’accueil', () => {
    const xml = fallbackSitemapXml()
    assert.equal(xml.match(/<loc>/g).length, 1)
    assert.match(xml, /<loc>https:\/\/www\.atipikrh\.com\/<\/loc>/)
  })
})
