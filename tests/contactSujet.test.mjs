import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  resolveContactSujet,
  rewriteLegacyContactSujet,
  withLeftoverMessage,
} from '../lib/seo/contactSujet.js'

const GSC_SUJETS = [
  ['Demande formation — CIP', 'formation-cip'],
  ['Demande formation — FPA', 'formation-fpa'],
  [
    'Demande formation — Recruter en insertion avec les entreprises : méthodes et outils',
    'formation-courte',
  ],
  ['Demande formation — Renforcer le partenariat avec les entreprises', 'formation-courte'],
  [
    'Demande formation — Prévenir les discriminations dans le recrutement',
    'formation-courte',
  ],
  ['Demande formation — Renforcer ses pratiques de recrutement', 'formation-courte'],
]

describe('resolveContactSujet', () => {
  it('conserve les valeurs du select', () => {
    assert.deepEqual(resolveContactSujet('formation-courte'), {
      sujet: 'formation-courte',
      leftover: '',
    })
    assert.deepEqual(resolveContactSujet('formation-cip'), {
      sujet: 'formation-cip',
      leftover: '',
    })
    assert.deepEqual(resolveContactSujet('formation-fpa'), {
      sujet: 'formation-fpa',
      leftover: '',
    })
  })

  it('mappe les 6 sujets GSC vers le select', () => {
    for (const [raw, expected] of GSC_SUJETS) {
      assert.deepEqual(
        resolveContactSujet(raw),
        { sujet: expected, leftover: raw },
        raw
      )
    }
  })

  it('mappe un sujet inconnu vers autre', () => {
    assert.deepEqual(resolveContactSujet('Partenariat entreprise'), {
      sujet: 'autre',
      leftover: 'Partenariat entreprise',
    })
  })
})

describe('rewriteLegacyContactSujet', () => {
  it('ne touche pas un sujet du select ni les UTM seuls', () => {
    const select = new URLSearchParams('sujet=formation-cip')
    assert.equal(rewriteLegacyContactSujet(select), false)
    const utmOnly = new URLSearchParams('utm_source=google&utm_medium=cpc')
    assert.equal(rewriteLegacyContactSujet(utmOnly), false)
  })

  it('réécrit CIP et conserve les UTM FPA', () => {
    const cip = new URLSearchParams()
    cip.set('sujet', 'Demande formation — CIP')
    assert.equal(rewriteLegacyContactSujet(cip), true)
    assert.equal(cip.get('sujet'), 'formation-cip')
    assert.equal(cip.get('message'), 'Demande formation — CIP')

    const fpa = new URLSearchParams(
      'sujet=Demande+formation+—+FPA&utm_source=site&utm_medium=formation_page&utm_campaign=formation_fpa'
    )
    assert.equal(rewriteLegacyContactSujet(fpa), true)
    assert.equal(fpa.get('sujet'), 'formation-fpa')
    assert.equal(fpa.get('utm_source'), 'site')
    assert.equal(fpa.get('utm_medium'), 'formation_page')
    assert.equal(fpa.get('utm_campaign'), 'formation_fpa')
    assert.equal(fpa.get('message'), 'Demande formation — FPA')
  })
})

describe('withLeftoverMessage', () => {
  it('préfixe le message avec l’ancien sujet', () => {
    assert.equal(
      withLeftoverMessage('Bonjour', 'Demande formation — CIP'),
      'Demande formation — CIP\n\nBonjour'
    )
  })
})
