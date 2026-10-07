/**
 * Source unique des constantes organisation ATIPIK RH (NAP).
 * JSON-LD LocalBusiness : pages/_document.js via buildOrganizationJsonLd().
 */

export const BASE_URL = 'https://www.atipikrh.com'

export const TELEPHONE_DISPLAY = '07 83 01 99 55'
export const TELEPHONE_E164 = '+33783019955'

export const SOCIAL_URLS = {
  linkedin: 'https://www.linkedin.com/company/atipik-rh33',
  facebook: 'https://www.facebook.com/atipikrh33',
  instagram: 'https://www.instagram.com/atipikrh33',
  /** Fiche Google vérifiée le 7 octobre 2026 (CID 18362370091856397133). */
  googleMaps:
    'https://www.google.com/maps/place/ATIPIK+RH/@44.8806821,-0.514707,17z/data=!3m1!4b1!4m6!3m5!1s0xd552ffe682f1bfd:0xfed43e4f7f5b834d!8m2!3d44.8806821!4d-0.514707!16s%2Fg%2F11j07z3syz',
} as const

/** Horaires schema.org (samedi sur rendez-vous). */
export const OPENING_HOURS = ['Mo-Fr 09:00-18:00', 'Sa 09:00-12:00'] as const

/** SIRET publié (mentions légales, CGV, RGPD). */
export const SIRET = '84890745700024'

export const ORGANIZATION = {
  name: 'Atipik RH',
  legalName: 'Atipik RH',
  url: BASE_URL,
  id: `${BASE_URL}/#organization`,
  telephone: TELEPHONE_E164,
  telephoneDisplay: TELEPHONE_DISPLAY,
  email: 'contact@atipikrh.com',
  taxID: SIRET,
  sameAs: [
    SOCIAL_URLS.linkedin,
    SOCIAL_URLS.facebook,
    SOCIAL_URLS.instagram,
    SOCIAL_URLS.googleMaps,
  ],
} as const

export const ADDRESS = {
  streetAddress: '8 Rue du Courant',
  addressLocality: 'Lormont',
  postalCode: '33310',
  addressRegion: 'Nouvelle-Aquitaine',
  addressCountry: 'FR',
} as const

export const GEO = {
  '@type': 'GeoCoordinates' as const,
  latitude: 44.8806821,
  longitude: -0.514707,
}

/**
 * Aquitaine = nom encore tapé dans Google (ancienne région).
 * Le nom administratif est Nouvelle-Aquitaine.
 * Le centre est à Lormont : le présentiel CIP/FPA reste dans un rayon de 40 km.
 */
export const AQUITAINE = {
  nomUsage: 'Aquitaine',
  nomAdministratif: 'Nouvelle-Aquitaine',
  departements: ['Gironde', 'Dordogne', 'Landes', 'Lot-et-Garonne', 'Pyrénées-Atlantiques'],
  bassinPresentiel: '40 km autour de Lormont (Bordeaux Métropole, Gironde)',
} as const

export const GEO_ZONES = [
  'Lormont',
  'Bordeaux',
  'Bordeaux Métropole',
  'Gironde',
  'Aquitaine',
  'Nouvelle-Aquitaine',
] as const

export const CERTIFICATIONS = [
  'Organisme certifié Qualiopi',
  'Formations éligibles CPF',
  'Accompagnement insertion et reconversion professionnelle',
] as const

export const SERVICES_SUMMARY = [
  'Formation Conseiller en Insertion Professionnelle (CIP)',
  'Formation Formateur Professionnel pour Adultes (FPA)',
  'Bilans de compétences',
  'Formations courtes professionnalisantes',
  'VAE',
  'Accompagnement demandeurs d’emploi et publics QPV',
] as const

export function buildPostalAddressJsonLd() {
  return {
    '@type': 'PostalAddress',
    ...ADDRESS,
  }
}
