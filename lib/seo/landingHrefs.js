/**
 * Construction des liens CTA (contact, rappel, réunion) — sans dépendance TS.
 * Pas d’UTM internes : Google les crawle et le canonique /contact suffit.
 */

/**
 * @param {{ sujetContact: string, message?: string }} opts
 */
export function buildContactHref({ sujetContact, message }) {
  const params = new URLSearchParams()
  params.set('sujet', sujetContact)
  if (message) params.set('message', message)
  return `/contact?${params.toString()}`
}

/**
 * @param {string} formationKey CIP | FPA
 */
export function buildReunionHref(formationKey) {
  if (formationKey !== 'CIP' && formationKey !== 'FPA') return '/s-inscrire'
  return `/s-inscrire?formation=${formationKey}`
}
