import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { articlesCipCourtesNov2026 } from '../lib/blog/articlesCipCourtesNov2026.js'
import { SLUGS_CIP_COURTES_NOV } from '../lib/seo/articlesCipCourtesNov2026.js'
import { CONTENTS_NOV, faqNov } from '../lib/blog/cipCourtesNov2026Content.js'
import { BLOG_PUBLISH_ISO_BY_SLUG } from '../lib/blog/publicationSchedule.js'
import {
  formationCipBordeauxSessionSeptembre2026Content,
  formationCipBordeauxSessionSeptembre2026FaqItems,
} from '../lib/blog/formationCipBordeauxSessionSeptembre2026Content.js'
import { FINANCEMENT_DISCLAIMER } from '../lib/tarifs/tarifsCopy.js'
import { DATES_CIP } from '../lib/reunions/dates.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

describe('articles CIP et formations courtes nov. 2026', () => {
  it('compte quinze articles planifiés, distincts de l’URL CIP déjà en ligne', () => {
    assert.equal(articlesCipCourtesNov2026.length, 15)
    assert.equal(SLUGS_CIP_COURTES_NOV.length, 15)
    assert.equal(
      SLUGS_CIP_COURTES_NOV.includes('formation-cip-bordeaux-session-septembre-2026'),
      false
    )
    for (const article of articlesCipCourtesNov2026) {
      assert.ok(CONTENTS_NOV[article.slug])
      assert.ok(faqNov(article.slug).length >= 2)
      assert.equal(article.internalLinks.length, 4)
      assert.ok(article.conversion.promise)
      assert.ok(article.conversion.reassurance.includes('sans engagement'))
      assert.ok(article.content.includes(article.conversion.formationHref))
      assert.ok(article.content.includes('#s1') || article.content.includes('Sommaire'))
      assert.ok(article.content.includes(FINANCEMENT_DISCLAIMER))
      const schedule = BLOG_PUBLISH_ISO_BY_SLUG[article.slug]
      assert.equal(schedule.iso, article.isoDate)
      assert.equal(schedule.time, '06:00')
    }
  })

  it('réécrit la session CIP sans changer le slug, au tarif 9 100 €', () => {
    const html = formationCipBordeauxSessionSeptembre2026Content
    assert.ok(html.includes('22 mars'))
    assert.ok(html.includes('22 octobre 2027'))
    assert.match(html, /9[\s\u00a0\u202f]100/)
    assert.equal(html.includes('session septembre 2026'), false)
    assert.ok(html.includes('n\'annonçons pas de « dernières places »'))
    assert.equal(html.includes('6 500'), false)
    assert.ok(html.includes('/formations/cip'))
    assert.ok(html.includes('/formations/cip/conditions-inscription'))
    assert.ok(html.includes('/s-inscrire?formation=CIP'))
    assert.ok(html.includes('/contact'))
    assert.ok(html.includes(FINANCEMENT_DISCLAIMER))
    assert.ok(
      formationCipBordeauxSessionSeptembre2026FaqItems.some((item) =>
        /9[\s\u00a0\u202f]100/.test(item.answer)
      )
    )
    assert.equal(BLOG_PUBLISH_ISO_BY_SLUG['formation-cip-bordeaux-session-septembre-2026'], undefined)
  })

  it('rappelle les réunions CIP du calendrier officiel', () => {
    const reunion = articlesCipCourtesNov2026.find(
      (item) => item.slug === 'reunion-information-formation-cip-lormont'
    )
    assert.ok(reunion.content.includes('26 Novembre 2026') || reunion.content.includes('26 novembre'))
    for (const iso of ['2026-11-26', '2026-12-05', '2026-12-17', '2027-01-09']) {
      assert.ok(DATES_CIP.some((d) => d.date === iso))
    }
  })

  it('écrit le calendrier de décembre pour recruter en insertion', () => {
    const article = articlesCipCourtesNov2026.find(
      (item) => item.slug === 'session-recruter-insertion-entreprises-decembre-2026'
    )
    assert.ok(article.content.includes('7 et 8 décembre 2026'))
    assert.ok(article.content.includes('14 décembre'))
  })

  it('ne recopie pas les titres des articles d’octobre', () => {
    const corpus = articlesCipCourtesNov2026.map((item) => item.content).join('\n')
    assert.equal(corpus.includes('7 erreurs qui font perdre de bons candidats : la check-list'), false)
    assert.equal(corpus.includes('10 usages'), false)
  })

  it('documente les visuels internes copiés dans public/images/blog', () => {
    const files = [
      'formation-cip-bordeaux-session-mars-2027.jpg',
      'reunion-information-formation-cip-lormont.png',
      'conditions-inscription-formation-cip-lormont.jpg',
      'pedagogie-au-plus-pres-du-reel-formation-cip.jpg',
      'pedagogie-cip-groupe-lormont.jpg',
      'formations-courtes-professionnalisantes-bordeaux-lormont.png',
      'formations-courtes-catalogue-google.jpg',
      'quelle-formation-courte-equipe-banniere.jpg',
    ]
    for (const file of files) {
      assert.equal(existsSync(join(root, 'public', 'images', 'blog', file)), true, file)
    }
  })
})
