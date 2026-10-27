import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { articlesCaOctobre2026 } from '../lib/blog/articlesCaOctobre2026.js'
import { CAMPAGNES_SEA_OCTOBRE_2026 } from '../lib/seo/campagnesCaOctobre2026.js'
import {
  CAMPAGNE_SEA_CIP,
  CAMPAGNES_SEA_SUIVANTES,
  REGLAGES_SEA,
  peutActiverCampagneCip,
  peutActiverCampagneSuivante,
} from '../lib/seo/reglagesSea.js'

describe('articles formations courtes octobre 2026', () => {
  it('compte huit pages de conversion avec le maillage minimum', () => {
    assert.equal(articlesCaOctobre2026.length, 8)
    for (const article of articlesCaOctobre2026) {
      assert.ok(article.conversion.promise)
      assert.ok(article.conversion.ctaLabel)
      assert.equal(article.conversion.reassurance.includes('sans engagement'), true)
      assert.equal(article.internalLinks.length, 4)
      assert.ok(article.content.includes(article.conversion.formationHref))
      assert.ok(article.content.includes('/contact?'))
      assert.ok(article.content.includes('/s-inscrire'))
      assert.ok(article.content.includes(article.conversion.relatedHref))
      assert.ok(article.content.includes('#devis-equipe'))
      assert.equal(article.seo.metaTitle.length > 10, true)
    }
  })

  it('prépare quatre URL finales SEA avec UTM, sans les mettre dans le corps', () => {
    assert.equal(CAMPAGNES_SEA_OCTOBRE_2026.length, 4)
    for (const campagne of CAMPAGNES_SEA_OCTOBRE_2026) {
      assert.ok(campagne.urlFinale.includes('utm_medium=cpc'))
      assert.ok(campagne.urlFinale.includes('utm_content='))
      assert.equal(campagne.urlFinale.includes('/blog/'), false)
      assert.equal(campagne.actifAuLancement, false)
      const article = articlesCaOctobre2026.find((item) => item.slug === campagne.slugDestination)
      assert.ok(article)
      assert.equal(article.content.includes('utm_'), false)
    }
  })

  it('prépare la campagne CIP vers la fiche, avec les exclusions homonymes', () => {
    assert.equal(CAMPAGNE_SEA_CIP.actifAuLancement, true)
    assert.ok(CAMPAGNE_SEA_CIP.urlFinale.includes('/formations/cip'))
    assert.equal(CAMPAGNE_SEA_CIP.urlFinale.includes('/blog/'), false)
    assert.ok(REGLAGES_SEA.exclusions.includes('vélo'))
    assert.ok(REGLAGES_SEA.exclusions.includes('nettoyage'))
    assert.ok(REGLAGES_SEA.exclusions.includes('greta'))
    assert.ok(REGLAGES_SEA.exclusions.includes('Jadhe'))
    assert.ok(REGLAGES_SEA.exclusions.includes('Diversidées'))
    assert.equal(REGLAGES_SEA.partenairesRecherche, false)
    assert.equal(REGLAGES_SEA.cibleGeo, 'presence')
    assert.equal(REGLAGES_SEA.exclureIpCentre, true)
    assert.equal(REGLAGES_SEA.diffusionPayante, false)
    assert.equal(REGLAGES_SEA.exclusions.includes('recrutement'), false)
    assert.equal(CAMPAGNES_SEA_SUIVANTES.length, 2)
    for (const campagne of CAMPAGNES_SEA_SUIVANTES) {
      assert.equal(campagne.actifAuLancement, false)
      assert.equal(campagne.urlFinale.includes('/blog/'), false)
    }
  })

  it('réserve la campagne CIP au Search, 40 km, après les titres, hors Search Console', () => {
    assert.equal(REGLAGES_SEA.reseau, 'search')
    assert.equal(REGLAGES_SEA.display, false)
    assert.equal(REGLAGES_SEA.rayonKmAutourLormont, 40)
    assert.equal(REGLAGES_SEA.aquitaineZoneEnchere, false)
    assert.equal(REGLAGES_SEA.clicsComptentSearchConsole, false)
    assert.equal(REGLAGES_SEA.diffusionPayante, false)
    assert.equal(CAMPAGNE_SEA_CIP.horsObjectifOrganique, true)
    assert.equal(new URL(CAMPAGNE_SEA_CIP.urlFinale).pathname, '/formations/cip')
    assert.deepEqual(CAMPAGNE_SEA_CIP.titresRequis, [
      '/',
      '/bilan-de-competences',
      '/formations/cip',
    ])
    assert.equal(peutActiverCampagneCip(undefined), false)
    assert.equal(peutActiverCampagneCip(['/']), false)
    assert.equal(peutActiverCampagneCip(CAMPAGNE_SEA_CIP.titresRequis), true)
    assert.equal(peutActiverCampagneSuivante(CAMPAGNE_SEA_CIP, true), false)
    for (const campagne of CAMPAGNES_SEA_SUIVANTES) {
      assert.equal(campagne.conditionActivation, 'lead-cip')
      assert.equal(peutActiverCampagneSuivante(campagne, false), false)
      assert.equal(peutActiverCampagneSuivante(campagne, true), true)
      const pathname = new URL(campagne.urlFinale).pathname
      assert.equal(['/formations/fpa', '/vae'].includes(pathname), true)
    }
  })
})
