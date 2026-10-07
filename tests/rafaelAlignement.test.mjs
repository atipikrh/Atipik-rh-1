import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  FPA_A_PUBLIER,
  FRAIS_VAE,
  RAFAEL_ACTIONS,
  actionsACloturer,
  actionsAGarder,
} from '../lib/seo/rafaelAlignement.js'

describe('alignement Rafael', () => {
  it('ne lie pas la FPA tant que la page publique n’existe pas', () => {
    assert.equal(FPA_A_PUBLIER.ficheUrl, '')
    assert.equal(FPA_A_PUBLIER.lienSite, false)
    assert.equal(FPA_A_PUBLIER.reference, '202609425794')
  })

  it('garde le tarif public FPA et refuse 6 500 €', () => {
    assert.equal(FPA_A_PUBLIER.tarif, '8 950 € TTC')
    assert.equal(FPA_A_PUBLIER.session.includes('en cours'), true)
    assert.equal(JSON.stringify(RAFAEL_ACTIONS).includes('6 500'), false)
    assert.equal(JSON.stringify(RAFAEL_ACTIONS).includes('patenariat'), false)
  })

  it('corrige les frais de jury et prévoit les clôtures', () => {
    const vaeFpa = actionsAGarder().find((action) => action.reference === '202609425810')
    assert.equal(vaeFpa.fraisJury, FRAIS_VAE)
    assert.match(vaeFpa.fraisJury, /frais de certification inclus/i)
    assert.equal(/hors frais de jurys/i.test(vaeFpa.fraisJury), false)
    assert.equal(vaeFpa.prerequis.includes('CIP'), false)
    assert.equal(vaeFpa.consigne.includes('autre titre'), true)
    assert.equal(RAFAEL_ACTIONS.every((action) => action.modalites !== 'Sans objet'), true)
    const closes = actionsACloturer().map((action) => action.reference)
    assert.deepEqual(closes.sort(), ['202508335386', '202607396704', '202607396707'])
  })

  it('ne publie aucun lien Rafael pour ces actions', () => {
    assert.equal(RAFAEL_ACTIONS.every((action) => action.lienSite === false), true)
    const partenariat = actionsAGarder().find((action) => action.reference === '202508335385')
    assert.equal(partenariat.titre.startsWith('Renforcer le partenariat'), true)
    assert.equal(partenariat.tarif, '1 365 € TTC')
  })

  it('reprend les dates déjà publiées sur le site', () => {
    const source = readFileSync(new URL('../lib/seo/professionnalisantesConfig.js', import.meta.url), 'utf8')
    const essentiels = actionsAGarder().find((action) => action.reference === '202609425852')
    for (const date of essentiels.sessions) {
      assert.equal(source.includes(date), true)
    }
  })
})
