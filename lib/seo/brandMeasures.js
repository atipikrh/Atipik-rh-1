/**
 * Signaux de marque pour les réponses des moteurs d’IA.
 * Dates et URLs d’auteur réelles uniquement. Pas de profil LinkedIn personnel inventé.
 */

/** Aligné sur SOCIAL_URLS.linkedin dans site.ts */
export const COMPANY_LINKEDIN = 'https://www.linkedin.com/company/atipik-rh33'

/** Aligné sur BASE_URL dans site.ts */
export const BASE_URL = 'https://www.atipikrh.com'

/** Date de revue des pages sans date de publication connue. */
export const REVIEW_DATE = '2026-10-19'

/** Date réelle du registre pour les formations courtes. */
export const COURTES_PUBLISHED = '2026-05-13'

const BRAND_RE = /atipik\s*rh/i

const MONTHS = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre',
]

const AUTHORS = {
  'vanessa noah ewodo': { name: 'Vanessa NOAH EWODO', href: '/equipe/vanessa-noah-ewodo' },
  'brunilda rafael': { name: 'Brunilda RAFAEL', href: '/equipe/brunilda-rafael' },
  'stéphanie breton': { name: 'Stéphanie BRETON', href: '/equipe/stephanie-breton' },
  'stephanie breton': { name: 'Stéphanie BRETON', href: '/equipe/stephanie-breton' },
  'liliana almeida': { name: 'Liliana ALMEIDA', href: '/notre-equipe' },
  'atipik rh': { name: 'Atipik RH', href: '/notre-equipe' },
}

export const TEAM_PROFILES = {
  'vanessa-noah-ewodo': {
    name: 'Vanessa NOAH EWODO',
    role: 'Directrice',
    domain: 'Direction d’Atipik RH à Lormont',
    offerHref: '/formations',
    offerLabel: 'Voir les formations',
  },
  'brunilda-rafael': {
    name: 'Brunilda RAFAEL',
    role: 'Chargée de Formation',
    domain: 'Organisation des parcours de formation',
    offerHref: '/formations',
    offerLabel: 'Voir les formations',
  },
  'stephanie-breton': {
    name: 'Stéphanie BRETON',
    role: 'Formatrice',
    domain: 'Formation professionnelle pour adultes',
    offerHref: '/formations',
    offerLabel: 'Voir les formations',
  },
  'nathalie-biotti': {
    name: 'Nathalie BIOTTI',
    role: 'Formatrice et intervenante en analyse des pratiques professionnelles',
    domain: 'Analyse des pratiques professionnelles',
    offerHref: '/formations',
    offerLabel: 'Voir les formations',
  },
  'mouna-mniai': {
    name: 'Mouna MNIAI',
    role: 'Consultante en insertion socioprofessionnelle',
    domain: 'Insertion socioprofessionnelle',
    offerHref: '/formations/cip',
    offerLabel: 'Voir la formation CIP',
  },
  'mathilde-bastian': {
    name: 'Mathilde BASTIAN',
    role: 'Assistante Administrative',
    domain: 'Accueil et suivi administratif du centre',
    offerHref: '/contact',
    offerLabel: 'Contacter l’équipe',
  },
  'martine-baudon': {
    name: 'Martine BAUDON',
    role: 'Formatrice',
    domain: 'Formation professionnelle pour adultes',
    offerHref: '/formations',
    offerLabel: 'Voir les formations',
  },
  'corinne-bienvenu': {
    name: 'Corinne BIENVENU',
    role: 'Formatrice',
    domain: 'Formation professionnelle pour adultes',
    offerHref: '/formations',
    offerLabel: 'Voir les formations',
  },
  'coraline-abadie': {
    name: 'Coraline ABADIE',
    role: 'Formatrice par le théâtre et l’impro',
    domain: 'Pédagogie par le théâtre et l’improvisation',
    offerHref: '/formations',
    offerLabel: 'Voir les formations',
  },
  'cecile-bernat': {
    name: 'Cécile BERNAT',
    role: 'Consultante et Formatrice Richesses Humaines',
    domain: 'Accompagnement RH et formation',
    offerHref: '/bilan-de-competences',
    offerLabel: 'Voir le bilan de compétences',
  },
  'anne-lise-coatrine': {
    name: 'Anne-Lise COATRINÉ',
    role: 'Formatrice',
    domain: 'Formation professionnelle pour adultes',
    offerHref: '/formations',
    offerLabel: 'Voir les formations',
  },
  'windy-telga': {
    name: 'Windy TELGA',
    role: 'Formatrice',
    domain: 'Formation professionnelle pour adultes',
    offerHref: '/formations',
    offerLabel: 'Voir les formations',
  },
}

export const LEGAL_KEY_POINTS = {
  mentions: [
    'Éditeur : ATIPIK RH, SARL, 8 Rue du Courant, 33310 Lormont.',
    'SIRET 84890745700024, RCS Bordeaux.',
    'Responsable de publication : Vanessa NOAH EWODO.',
  ],
  cgv: [
    'Les CGV couvrent les formations professionnelles d’ATIPIK RH.',
    'Siège : 8 Rue du Courant, 33310 Lormont — SIRET 84890745700024.',
    'La vente se fait hors ligne, par convention ou devis signé.',
  ],
  rgpd: [
    'Responsable de traitement : ATIPIK RH, 8 Rue du Courant, 33310 Lormont.',
    'Les traitements suivent le RGPD (UE 2016/679) et la loi française.',
    'Les données viennent des formulaires du site ou de la navigation technique.',
  ],
  confidentialite: [
    'Atipik RH décrit ici la collecte et la protection des données personnelles.',
    'Les formulaires peuvent demander nom, e-mail et téléphone.',
    'Le détail des droits des personnes est dans cette politique.',
  ],
}

/**
 * Ajoute la marque au H1 seulement si elle est absente.
 * @param {string} title
 */
export function ensureBrand(title) {
  const text = String(title ?? '').replace(/\s+/g, ' ').trim()
  if (!text) return 'Atipik RH'
  if (BRAND_RE.test(text)) return text
  return `${text} chez Atipik RH`
}

/**
 * @param {string} authorName
 */
export function getAuthorProfile(authorName) {
  const raw = String(authorName || 'Atipik RH').trim() || 'Atipik RH'
  const known = AUTHORS[raw.toLocaleLowerCase('fr-FR')]
  const name = known?.name || raw
  const href = known?.href || '/notre-equipe'
  return {
    name,
    href,
    absoluteUrl: `${BASE_URL}${href}`,
  }
}

/**
 * @param {string} slug
 */
export function teamKeyPoints(slug) {
  const profile = TEAM_PROFILES[slug]
  if (!profile) return []
  return [
    profile.role,
    profile.domain,
    { text: profile.offerLabel, href: profile.offerHref },
  ]
}

/**
 * @param {string} iso
 */
export function toIsoDate(value) {
  const text = String(value || '').trim()
  const iso = text.match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`
  const french = text.match(/^(\d{1,2})\s+([a-zéû]+)\s+(\d{4})$/i)
  if (!french) return ''
  const month = MONTHS.findIndex(
    (name) => name.toLocaleLowerCase('fr-FR') === french[2].toLocaleLowerCase('fr-FR')
  )
  if (month < 0) return ''
  return `${french[3]}-${String(month + 1).padStart(2, '0')}-${String(french[1]).padStart(2, '0')}`
}

/**
 * @param {string} iso
 */
export function formatFrenchDate(iso) {
  const safe = toIsoDate(iso)
  if (!safe) return ''
  const [, year, month, day] = safe.match(/^(\d{4})-(\d{2})-(\d{2})/)
  const label = MONTHS[Number(month) - 1]
  if (!label) return ''
  return `${Number(day)} ${label} ${year}`
}

/**
 * @param {string} html
 */
export function contentHasBrandHeading(html) {
  const headings = String(html || '').match(/<h2\b[^>]*>[\s\S]*?<\/h2>/gi) || []
  return headings.some((heading) => BRAND_RE.test(heading.replace(/<[^>]+>/g, ' ')))
}

/**
 * @param {string} html
 * @param {{question: string}[] | undefined} faqItems
 */
export function hasExtractableSection(html, faqItems) {
  if (Array.isArray(faqItems) && faqItems.length > 0) return true
  const source = String(html || '')
  if (/<ol\b/i.test(source)) return true
  return /<h2\b[^>]*>[^<]*(faq|questions fr[eé]quentes|[eé]tapes|mode d'emploi)/i.test(source)
}

/**
 * @param {string} excerpt
 */
export function keyPointsFromExcerpt(excerpt) {
  const clean = String(excerpt || '').replace(/\s+/g, ' ').trim()
  if (!clean) return []
  const parts = clean.split(/(?<=[.!?])\s+/).map((part) => part.trim()).filter(Boolean)
  if (parts.length >= 2) return parts.slice(0, 3)
  return [clean]
}
