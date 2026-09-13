import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  EXPECTED_GA_ID,
  extractCanonical,
  extractGtagId,
  isForbiddenCanonical,
} from '../scripts/validate-digiforma-catalogue.mjs'

const LIVE_BROKEN_HEAD = `
  <link href="https://www.atipikrh.com/" rel="canonical">
  <script async src="https://www.googletagmanager.com/gtag/js?id=ATIPIK RH UA-223055534-1 "></script>
  <script>
    gtag('config', 'ATIPIK RH UA-223055534-1 ');
  </script>
`

describe('extractGtagId', () => {
  it('extrait un ID mal formé (nom de propriété + UA)', () => {
    assert.equal(extractGtagId(LIVE_BROKEN_HEAD), 'ATIPIK RH UA-223055534-1')
  })

  it('accepte l’ID GA4 attendu', () => {
    const html = `gtag('config', '${EXPECTED_GA_ID}');`
    assert.equal(extractGtagId(html), EXPECTED_GA_ID)
  })
})

describe('extractCanonical / isForbiddenCanonical', () => {
  it('détecte un canonical vers la home du site vitrine', () => {
    const href = extractCanonical(LIVE_BROKEN_HEAD)
    assert.equal(href, 'https://www.atipikrh.com/')
    assert.equal(isForbiddenCanonical(href), true)
  })

  it('détecte un canonical Digiforma préfixé sur une fiche catalogue', () => {
    const href = 'https://www.atipikrh.com/2/action-de-formation'
    assert.equal(isForbiddenCanonical(href), true)
  })

  it('accepte l’absence de canonical (champ Digiforma vide)', () => {
    assert.equal(extractCanonical('<title>Catalogue</title>'), null)
    assert.equal(isForbiddenCanonical(null), false)
  })

  it('accepte un canonical sur le domaine du catalogue Digiforma', () => {
    assert.equal(
      isForbiddenCanonical('https://atipikrh.catalogueformpro.com/2/action-de-formation'),
      false
    )
  })
})
