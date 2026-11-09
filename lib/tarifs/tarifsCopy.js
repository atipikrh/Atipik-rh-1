/**
 * Textes canoniques tarifs et financement ATIPIK RH (source unique).
 */

export const TARIF_SELON_PROFIL_COMPLET =
  "Tarif selon profil : salariés, demandeurs d'emploi, travailleurs indépendants, employeurs : se rapprocher du centre ATIPIK RH pour une étude personnalisée."

export const TARIF_SELON_PROFIL_COURT =
  'Tarif selon profil : se rapprocher du centre ATIPIK RH pour une étude personnalisée.'

export const TARIF_INTER_LABEL = 'Tarif Inter'
export const TARIF_INTRA_LABEL = 'Tarif Intra'
export const TARIF_INTRA_TEXTE =
  "Se rapprocher du centre ATIPIK RH pour une étude personnalisée."

export const FINANCEMENT_DISCLAIMER =
  "L'obtention d'un financement public ou mutualisé pour une action de formation professionnelle répond à des règles et conditions spécifiques qui vous engagent. Pour plus d'informations, contactez ATIPIK RH."

/** Les frais de certification VAE sont inclus dans le prix affiché. */
export const MENTION_FRAIS_CERTIFICATION_INCLUS =
  'Frais de certification inclus.'

/** Forme courte, sous le prix ou dans une FAQ. */
export const MENTION_FRAIS_CERTIFICATION_INCLUS_COURTE =
  'frais de certification inclus'

/**
 * Formate un montant numérique ou chaîne en libellé tarif public.
 * @param {string|number} montant - ex. 8950, "8950", "8 950", "8950.20"
 * @param {{ suffix?: string }} [options] - ex. { suffix: '/ stagiaire' }
 * @returns {string}
 */
export function formatTarifPublic(montant, options = {}) {
  const { suffix = '' } = options
  const raw = String(montant).replace(/\s/g, '').replace(/€/g, '').replace(/,/g, '.')
  const num = Number.parseFloat(raw)
  if (Number.isNaN(num)) {
    const base = String(montant)
    return suffix ? `${base} ${suffix}` : base
  }

  const hasCents = !Number.isInteger(num)
  const formatted = new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(num)

  const base = `${formatted} € TTC`
  return suffix ? `${base} ${suffix}` : base
}

/**
 * Libellé court pour affichage dans les cartes (montant seul + TTC).
 * @param {string|number} montant
 * @param {{ suffix?: string }} [options]
 */
export function formatTarifPublicDisplay(montant, options = {}) {
  const { suffix = '' } = options
  const raw = String(montant).replace(/\s/g, '').replace(/€/g, '').replace(/,/g, '.')
  const num = Number.parseFloat(raw)
  if (Number.isNaN(num)) {
    return { amount: String(montant), suffix }
  }

  const hasCents = !Number.isInteger(num)
  const formatted = new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(num)

  return { amount: formatted, suffix }
}
