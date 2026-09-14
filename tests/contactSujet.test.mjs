import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { resolveContactSujet, withLeftoverMessage } from '../lib/seo/contactSujet.js'

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
  })

  it('mappe les anciens sujets texte libre formation vers formation-courte', () => {
    const raw =
      'Demande formation — Développer la relation entreprise en insertion professionnelle'
    assert.deepEqual(resolveContactSujet(raw), {
      sujet: 'formation-courte',
      leftover: raw,
    })
  })

  it('mappe un sujet inconnu vers autre', () => {
    assert.deepEqual(resolveContactSujet('Partenariat entreprise'), {
      sujet: 'autre',
      leftover: 'Partenariat entreprise',
    })
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
