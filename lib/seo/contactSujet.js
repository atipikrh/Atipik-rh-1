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
 * @param {string} sujet
 * @returns {string}
 */
function mapLegacySujet(sujet) {
  const lower = sujet.toLowerCase()
  if (/\bcip\b/.test(lower)) return 'formation-cip'
  if (/\bfpa\b/.test(lower)) return 'formation-fpa'
  if (lower.includes('formation')) return 'formation-courte'
  return 'autre'
}

/**
 * @param {string} [rawSujet]
 * @returns {{ sujet: string, leftover: string }}
 */
export function resolveContactSujet(rawSujet) {
  const sujet = typeof rawSujet === 'string' ? rawSujet.trim() : ''
  if (!sujet) return { sujet: '', leftover: '' }
  if (CONTACT_SUJET_VALUES.includes(sujet)) return { sujet, leftover: '' }

  return { sujet: mapLegacySujet(sujet), leftover: sujet }
}

/**
 * Réécrit un `sujet` texte libre GSC dans les query params.
 * Conserve UTM / message existants. Utilisé par le proxy (301) et les tests.
 * @param {URLSearchParams} searchParams
 * @returns {boolean} true si le sujet a été mappé
 */
export function rewriteLegacyContactSujet(searchParams) {
  const raw = searchParams.get('sujet')
  if (!raw) return false
  const { sujet, leftover } = resolveContactSujet(raw)
  if (!leftover) return false
  searchParams.set('sujet', sujet)
  if (!searchParams.get('message')) {
    searchParams.set('message', leftover)
  } else {
    searchParams.set('message', withLeftoverMessage(searchParams.get('message'), leftover))
  }
  return true
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
