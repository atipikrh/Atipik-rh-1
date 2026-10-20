import test from 'node:test'
import assert from 'node:assert/strict'
import {
  ensureBrand,
  getAuthorProfile,
  contentHasBrandHeading,
  hasExtractableSection,
  keyPointsFromExcerpt,
  formatFrenchDate,
  toIsoDate,
} from '../lib/seo/brandMeasures.js'

test('ensureBrand ajoute la marque une seule fois', () => {
  assert.equal(ensureBrand('Formation CIP à Lormont'), 'Formation CIP à Lormont chez Atipik RH')
  assert.equal(ensureBrand('Atipik RH — organisme de formation'), 'Atipik RH — organisme de formation')
  assert.equal(ensureBrand('Le centre ATIPIK RH'), 'Le centre ATIPIK RH')
  assert.equal(ensureBrand('   '), 'Atipik RH')
})

test('getAuthorProfile relie une page auteur ou l’équipe', () => {
  const vanessa = getAuthorProfile('Vanessa NOAH EWODO')
  assert.equal(vanessa.href, '/equipe/vanessa-noah-ewodo')
  assert.equal(vanessa.absoluteUrl, 'https://www.atipikrh.com/equipe/vanessa-noah-ewodo')
  const inconnu = getAuthorProfile('Liliana ALMEIDA')
  assert.equal(inconnu.href, '/notre-equipe')
  assert.equal(inconnu.name, 'Liliana ALMEIDA')
})

test('contentHasBrandHeading détecte un H2 de marque', () => {
  assert.equal(contentHasBrandHeading('<h2>Pourquoi choisir Atipik RH ?</h2>'), true)
  assert.equal(contentHasBrandHeading('<h2>Questions fréquentes</h2><p>Atipik RH</p>'), false)
})

test('hasExtractableSection reconnaît FAQ, étapes et liste numérotée', () => {
  assert.equal(hasExtractableSection('<p>Texte</p>', [{ question: 'Q' }]), true)
  assert.equal(hasExtractableSection('<h2>Questions fréquentes</h2>'), true)
  assert.equal(hasExtractableSection('<ol><li>Un</li></ol>'), true)
  assert.equal(hasExtractableSection('<p>Bloc continu</p>', []), false)
})

test('keyPointsFromExcerpt découpe les phrases', () => {
  const points = keyPointsFromExcerpt('Première phrase. Deuxième phrase. Troisième phrase. Quatrième phrase.')
  assert.equal(points.length, 3)
  assert.equal(points[0], 'Première phrase.')
  assert.deepEqual(keyPointsFromExcerpt('Une seule phrase sans point'), ['Une seule phrase sans point'])
})

test('formatFrenchDate formate une date ISO ou française', () => {
  assert.equal(toIsoDate('2026-10-19T10:00:00'), '2026-10-19')
  assert.equal(toIsoDate('12 mai 2026'), '2026-05-12')
  assert.equal(formatFrenchDate('2026-10-19'), '19 octobre 2026')
  assert.equal(formatFrenchDate('pas une date'), '')
})
