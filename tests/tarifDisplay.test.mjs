import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { formatTarifPublic, formatTarifPublicDisplay } from '../lib/tarifs/tarifsCopy.js'

describe('Tarif public formatting', () => {
  it('affiche les décimales en français pour les montants TTC', () => {
    assert.equal(formatTarifPublic('2950.20'), '2 950,20 € TTC')
    assert.equal(formatTarifPublic('2449.56'), '2 449,56 € TTC')
    assert.equal(formatTarifPublic('3701.16'), '3 701,16 € TTC')
  })

  it('préserve les décimales dans le libellé court', () => {
    assert.deepEqual(formatTarifPublicDisplay('2950.20'), { amount: '2 950,20', suffix: '' })
    assert.deepEqual(formatTarifPublicDisplay('2449.56'), { amount: '2 449,56', suffix: '' })
    assert.deepEqual(formatTarifPublicDisplay('3701.16'), { amount: '3 701,16', suffix: '' })
  })
})
