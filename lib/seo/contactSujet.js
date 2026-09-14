/**
 * Valeurs du <select> contact et mapping des anciens liens (texte libre GSC).
 */

export const CONTACT_SUJET_VALUES = [
  'bilan-competences',
  'vae',
  'formation-cip',
  'formation-fpa',
  'formation-courte',
  'location-salle',
  'information',
  'autre',
]

/**
 * @param {string} [rawSujet]
 * @returns {{ sujet: string, leftover: string }}
 */
export function resolveContactSujet(rawSujet) {
  const sujet = typeof rawSujet === 'string' ? rawSujet.trim() : ''
  if (!sujet) return { sujet: '', leftover: '' }
  if (CONTACT_SUJET_VALUES.includes(sujet)) return { sujet, leftover: '' }

  const lower = sujet.toLowerCase()
  if (lower.includes('formation') || lower.includes('cip') || lower.includes('fpa')) {
    return { sujet: 'formation-courte', leftover: sujet }
  }
  return { sujet: 'autre', leftover: sujet }
}

/**
 * Préfixe le message avec l’ancien libellé de sujet (liens GSC / campagnes).
 * @param {string} [existingMessage]
 * @param {string} [leftover]
 */
export function withLeftoverMessage(existingMessage, leftover) {
  if (!leftover) return existingMessage || ''
  if (!existingMessage) return leftover
  if (existingMessage.includes(leftover)) return existingMessage
  return `${leftover}\n\n${existingMessage}`
}
