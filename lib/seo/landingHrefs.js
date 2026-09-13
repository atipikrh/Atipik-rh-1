/**
 * Construction des liens CTA (contact, rappel, réunion) — sans dépendance TS.
 */

/**
 * @param {{ sujetContact: string, contactCampaign: string, message?: string }} opts
 */
export function buildContactHref({ sujetContact, contactCampaign, message }) {
  const params = new URLSearchParams()
  params.set('sujet', sujetContact)
  if (message) params.set('message', message)
  params.set('utm_source', 'site')
  params.set('utm_medium', 'formation_page')
  params.set('utm_campaign', contactCampaign)
  return `/contact?${params.toString()}`
}

/**
 * @param {string} formationKey CIP | FPA
 */
export function buildReunionHref(formationKey) {
  if (formationKey !== 'CIP' && formationKey !== 'FPA') return '/s-inscrire'
  return `/s-inscrire?formation=${formationKey}`
}
