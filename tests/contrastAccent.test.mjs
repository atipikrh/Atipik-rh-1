import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const config = require('../tailwind.config.js')

function canal(hex, index) {
  return parseInt(hex.slice(1 + index * 2, 3 + index * 2), 16)
}

function luminance(hex) {
  const lineaire = [0, 1, 2].map((index) => {
    const valeur = canal(hex, index) / 255
    return valeur <= 0.04045 ? valeur / 12.92 : ((valeur + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * lineaire[0] + 0.7152 * lineaire[1] + 0.0722 * lineaire[2]
}

function contraste(premier, second) {
  const clair = Math.max(luminance(premier), luminance(second))
  const sombre = Math.min(luminance(premier), luminance(second))
  return (clair + 0.05) / (sombre + 0.05)
}

describe('orange accessible', () => {
  it('garde un texte ou un fond blanc au-dessus de 4,5:1', () => {
    const { 700: encre, 800: survol } = config.theme.extend.colors.accent
    assert.ok(contraste(encre, '#FFFFFF') >= 4.5)
    assert.ok(contraste(survol, '#FFFFFF') >= 4.5)
  })
})
