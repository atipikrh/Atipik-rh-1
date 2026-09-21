/**
 * Source unique pour les formations courtes professionnalisantes (SEO, cartes, CTA).
 * Aligné avec pages/_document.js (LocalBusiness) : même origine et coordonnées Lormont.
 */

export const BASE_URL = 'https://www.atipikrh.com'

/** Coordonnées du centre (identiques au JSON-LD LocalBusiness global). */
const SITE_GEO = {
  '@type': 'GeoCoordinates',
  latitude: 44.8764,
  longitude: -0.5212,
}

/** Suffixe tarif public des formations inter-entreprises (affichage FormationTarifSection). */
export const PROFESSIONNALISANTE_PRICE_SUFFIX = '/ stagiaire'

/** Réponse SEO / bloc « Quelles dates ? » des fiches courtes. */
export const COURTE_DATES_FAQ = 'Sessions inter-entreprises'

const LIEU_COURS = {
  '@type': 'Place',
  name: 'Atipik RH',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8 Rue du Courant',
    addressLocality: 'Lormont',
    postalCode: '33310',
    addressRegion: 'Nouvelle-Aquitaine',
    addressCountry: 'FR',
  },
}

/** Sessions inter-entreprises — essentiels du numérique. */
const SESSIONS_ESSENTIELS_NUMERIQUE = [
  { titre: 'Session 1 de septembre', dates: '07 et 08 septembre 2026', startIso: '2026-09-07', endIso: '2026-09-08' },
  { titre: 'Session 2 de septembre', dates: '14 et 15 septembre 2026', startIso: '2026-09-14', endIso: '2026-09-15' },
  { titre: "Session 1 d'octobre", dates: '12 et 13 octobre 2026', startIso: '2026-10-12', endIso: '2026-10-13' },
  { titre: "Session 2 d'octobre", dates: '28 et 29 octobre 2026', startIso: '2026-10-28', endIso: '2026-10-29' },
  { titre: 'Session 1 de décembre', dates: '03 et 04 décembre 2026', startIso: '2026-12-03', endIso: '2026-12-04' },
  { titre: 'Session 1 de janvier 2027', dates: '25 et 26 janvier 2027', startIso: '2027-01-25', endIso: '2027-01-26' },
  { titre: 'Session 1 de février 2027', dates: '07 et 08 février 2027', startIso: '2027-02-07', endIso: '2027-02-08' },
]

/** Sessions inter-entreprises — IA au service de l'accompagnement. */
const SESSIONS_IA_ACCOMPAGNEMENT = [
  { titre: 'Session 1 de septembre', dates: '21 et 22 septembre 2026', startIso: '2026-09-21', endIso: '2026-09-22' },
  { titre: 'Session 2 de septembre', dates: '28 et 29 septembre 2026', startIso: '2026-09-28', endIso: '2026-09-29' },
  { titre: "Session 1 d'octobre", dates: '26 et 27 octobre 2026', startIso: '2026-10-26', endIso: '2026-10-27' },
  { titre: 'Session 1 de novembre', dates: '09 et 10 novembre 2026', startIso: '2026-11-09', endIso: '2026-11-10' },
  { titre: 'Session 1 de janvier 2027', dates: '21 et 22 janvier 2027', startIso: '2027-01-21', endIso: '2027-01-22' },
  { titre: 'Session 2 de janvier 2027', dates: '28 et 29 janvier 2027', startIso: '2027-01-28', endIso: '2027-01-29' },
  { titre: 'Session 2 de février 2027', dates: '15 et 16 février 2027', startIso: '2027-02-15', endIso: '2027-02-16' },
]

export const PROFESSIONNALISANTES_SLUGS = [
  'developper-relation-entreprise',
  'renforcer-relation-entreprise',
  'recruter-insertion-entreprises',
  'renforcer-pratique-recrutement-inclusif',
  'renforcer-pratique-recrutement-diversite',
  'essentiels-du-numerique',
  'intelligence-artificielle-accompagnement',
]

/** Valeur du <select> de pages/contact.js pour les formations courtes. */
export const CONTACT_SUJET_COURTE = 'formation-courte'

export const professionnalisantesBySlug = {
  'developper-relation-entreprise': {
    slug: 'developper-relation-entreprise',
    path: '/formations/professionnalisantes/developper-relation-entreprise',
    titreAffichage: 'Développer la relation entreprise en insertion professionnelle',
    titreCarte: 'DÉVELOPPER LA RELATION ENTREPRISE EN INSERTION PROFESSIONNELLE',
    titreMenu: 'Développer la relation entreprise en insertion professionnelle',
    sousTitreCarte: "De l'accompagnement à la relation entreprise",
    metaTitle:
      'Formation relation entreprise en insertion professionnelle | Atipik RH Lormont',
    description:
      "Formation professionnalisante (21 h) pour développer la relation entreprise en insertion : accompagnement, prospection et coopération avec les employeurs. Bordeaux métropole, Lormont.",
    keywords:
      'formation relation entreprise, insertion professionnelle, conseiller insertion, CIP, accompagnement employeur, Bordeaux, Lormont, Atipik RH',
    twitterTitle: 'Relation entreprise & insertion professionnelle | Atipik RH',
    courseCode: 'REL-ENT-INS-PRO',
    timeRequired: 'PT21H',
    price: '1365',
    jsonLdDescription:
      "Formation professionnalisante pour développer la relation entreprise en insertion professionnelle. 21 heures, Bordeaux - Lormont.",
    sujetContact: CONTACT_SUJET_COURTE,
  },
  'renforcer-relation-entreprise': {
    slug: 'renforcer-relation-entreprise',
    path: '/formations/professionnalisantes/renforcer-relation-entreprise',
    titreAffichage: 'Renforcer le partenariat avec les entreprises',
    titreCarte: 'RENFORCER LE PARTENARIAT AVEC LES ENTREPRISES',
    titreMenu: 'Renforcer le partenariat avec les entreprises',
    sousTitreCarte: 'De la prospection à la valorisation de votre offre',
    metaTitle:
      'Formation partenariat avec les entreprises | Atipik RH Lormont',
    description:
      "Formation professionnalisante (21 h) : structurer l'offre, prospection et valorisation auprès des entreprises. Bordeaux - Lormont.",
    keywords:
      'formation relation entreprise, partenariat entreprise, prospection insertion, valorisation offre, CIP, Bordeaux, Lormont, Atipik RH',
    twitterTitle: 'Partenariat avec les entreprises | Atipik RH',
    courseCode: 'PART-ENT-INS',
    timeRequired: 'PT21H',
    price: '1365',
    jsonLdDescription:
      "Formation pour renforcer le partenariat avec les entreprises : prospection et valorisation de l'offre. 21 heures.",
    sujetContact: CONTACT_SUJET_COURTE,
  },
  'recruter-insertion-entreprises': {
    slug: 'recruter-insertion-entreprises',
    path: '/formations/professionnalisantes/recruter-insertion-entreprises',
    titreAffichage:
      'Recruter en insertion avec les entreprises : méthodes et outils',
    titreCarte:
      'RECRUTER EN INSERTION AVEC LES ENTREPRISES : méthodes et outils',
    titreMenu:
      'Recruter en insertion avec les entreprises : méthodes et outils',
    sousTitreCarte: "De la co-construction à l'accompagnement stratégique RH",
    metaTitle:
      'Formation recruter en insertion avec les entreprises | Atipik RH Lormont',
    description:
      "Formation professionnalisante (21 h) : recrutement en insertion avec les entreprises, co-construction avec les employeurs et accompagnement RH stratégique. Bordeaux - Lormont.",
    keywords:
      'formation recrutement insertion, méthodes recrutement, entreprises, accompagnement RH, CIP, Bordeaux, Lormont, Atipik RH',
    twitterTitle: 'Recruter en insertion avec les entreprises | Atipik RH',
    courseCode: 'REC-INS-ENT',
    timeRequired: 'PT21H',
    price: '1365',
    jsonLdDescription:
      "Formation pour recruter en insertion avec les entreprises : méthodes, outils et accompagnement stratégique RH. 21 heures.",
    sujetContact: CONTACT_SUJET_COURTE,
  },
  'renforcer-pratique-recrutement-inclusif': {
    slug: 'renforcer-pratique-recrutement-inclusif',
    path: '/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif',
    titreAffichage:
      'Prévenir les discriminations dans le recrutement',
    titreCarte:
      'PRÉVENIR LES DISCRIMINATIONS DANS LE RECRUTEMENT',
    titreMenu:
      'Prévenir les discriminations dans le recrutement',
    sousTitreCarte: 'Du cadre légal aux pratiques professionnelles responsables',
    carteBadge: 'Formation obligatoire',
    metaTitle:
      'Formation prévenir discriminations au recrutement (obligatoire) | Atipik RH',
    description:
      "Formation professionnelle obligatoire (11 h) : cadre légal, biais cognitifs et recrutement objectif. Mixed learning, Bordeaux - Lormont.",
    keywords:
      'formation discriminations recrutement, formation obligatoire RH, non-discrimination, recrutement équitable, Bordeaux, Lormont, Atipik RH',
    twitterTitle: 'Prévenir les discriminations au recrutement | Atipik RH',
    courseCode: 'PREC-DISC-REC',
    timeRequired: 'PT11H',
    price: '990',
    jsonLdDescription:
      "Formation pour prévenir les discriminations dans le recrutement. 11 heures en mixed learning.",
    sujetContact: CONTACT_SUJET_COURTE,
  },
  'renforcer-pratique-recrutement-diversite': {
    slug: 'renforcer-pratique-recrutement-diversite',
    path: '/formations/professionnalisantes/renforcer-pratique-recrutement-diversite',
    titreAffichage: 'Renforcer ses pratiques de recrutement',
    titreCarte: 'RENFORCER SES PRATIQUES DE RECRUTEMENT',
    titreMenu: 'Renforcer ses pratiques de recrutement',
    sousTitreCarte: 'De la diversité à la performance RH',
    metaTitle:
      'Formation renforcer ses pratiques de recrutement — insertion & RH | Atipik RH',
    description:
      "Formation professionnalisante (11 h) : renforcer ses pratiques de recrutement, inclusion et performance RH en mixed learning. Bordeaux - Lormont.",
    keywords:
      'formation recrutement, pratique recrutements, insertion professionnelle, diversité RH, recrutement inclusif, Bordeaux, Lormont, Atipik RH',
    twitterTitle: 'Renforcer ses pratiques de recrutement | Atipik RH',
    courseCode: 'RECRUT-DIVERSITE',
    timeRequired: 'PT11H',
    price: '715',
    jsonLdDescription:
      'Formation pour renforcer ses pratiques de recrutement : diversité et performance RH. 11 h en mixed learning.',
    sujetContact: CONTACT_SUJET_COURTE,
  },
  'essentiels-du-numerique': {
    slug: 'essentiels-du-numerique',
    path: '/formations/professionnalisantes/essentiels-du-numerique',
    titreAffichage: 'Les essentiels du numérique',
    titreCarte: 'LES ESSENTIELS DU NUMÉRIQUE',
    titreMenu: 'Les essentiels du numérique',
    sousTitreCarte: 'Structurer son environnement numérique professionnel',
    groupeSection: 'numerique',
    metaTitle:
      'Formation essentiels du numérique professionnel | Atipik RH Lormont',
    description:
      "Formation professionnalisante (14 h) : structurer son environnement numérique professionnel, outils collaboratifs et bonnes pratiques. Présentiel, Bordeaux - Lormont.",
    keywords:
      'formation numérique professionnel, outils collaboratifs, environnement numérique, accompagnement professionnel, CIP, Bordeaux, Lormont, Atipik RH',
    twitterTitle: 'Les essentiels du numérique | Atipik RH',
    courseCode: 'ESS-NUM-PRO',
    timeRequired: 'PT14H',
    price: '970',
    jsonLdDescription:
      "Formation pour structurer son environnement numérique professionnel. 14 heures en présentiel.",
    sujetContact: CONTACT_SUJET_COURTE,
    datesFaq: COURTE_DATES_FAQ,
    sessions: SESSIONS_ESSENTIELS_NUMERIQUE,
  },
  'intelligence-artificielle-accompagnement': {
    slug: 'intelligence-artificielle-accompagnement',
    path: '/formations/professionnalisantes/intelligence-artificielle-accompagnement',
    titreAffichage:
      "L'intelligence artificielle au service de l'accompagnement",
    titreCarte:
      "L'INTELLIGENCE ARTIFICIELLE AU SERVICE DE L'ACCOMPAGNEMENT",
    titreMenu:
      "L'intelligence artificielle au service de l'accompagnement",
    sousTitreCarte: "Intégrer l'IA dans sa pratique d'accompagnement",
    groupeSection: 'numerique',
    metaTitle:
      "Formation IA et accompagnement professionnel | Atipik RH Lormont",
    description:
      "Formation professionnalisante (14 h) : intégrer l'intelligence artificielle dans sa pratique d'accompagnement, usages responsables et outils concrets. Présentiel, Bordeaux - Lormont.",
    keywords:
      'formation intelligence artificielle, IA accompagnement, outils IA professionnels, insertion professionnelle, CIP, Bordeaux, Lormont, Atipik RH',
    twitterTitle: "L'IA au service de l'accompagnement | Atipik RH",
    courseCode: 'IA-ACCOMP-PRO',
    timeRequired: 'PT14H',
    price: '1090',
    jsonLdDescription:
      "Formation pour intégrer l'intelligence artificielle dans sa pratique d'accompagnement. 14 heures en présentiel.",
    sujetContact: CONTACT_SUJET_COURTE,
    datesFaq: COURTE_DATES_FAQ,
    sessions: SESSIONS_IA_ACCOMPAGNEMENT,
  },
}

/**
 * @param {string} slug
 */
export function getProfessionnelleConfigBySlug(slug) {
  return professionnalisantesBySlug[slug] ?? null
}

/**
 * Lien contact avec sujet du select + intitulé de la fiche dans le message.
 * @param {string} slug
 */
export function getFormationContactHref(slug) {
  const c = professionnalisantesBySlug[slug]
  if (!c) return `/contact?sujet=${CONTACT_SUJET_COURTE}`
  const params = new URLSearchParams()
  params.set('sujet', CONTACT_SUJET_COURTE)
  params.set('message', `Demande d'information : ${c.titreAffichage}`)
  return `/contact?${params.toString()}`
}

/**
 * Lien « être rappelé » pour une fiche courte.
 * @param {string} [slug]
 */
export function getCourteRappelHref(slug) {
  const c = slug ? professionnalisantesBySlug[slug] : null
  const params = new URLSearchParams()
  params.set('sujet', CONTACT_SUJET_COURTE)
  params.set(
    'message',
    c
      ? `Je souhaite être rappelé au sujet de la formation « ${c.titreAffichage} ».`
      : 'Je souhaite être rappelé au sujet des formations courtes professionnalisantes.'
  )
  return `/contact?${params.toString()}`
}

/**
 * Lien contact du hub formations courtes.
 */
export function getCourteHubContactHref() {
  const params = new URLSearchParams()
  params.set('sujet', CONTACT_SUJET_COURTE)
  return `/contact?${params.toString()}`
}

function buildCourseInstances(c) {
  if (!c.sessions?.length) return undefined
  return c.sessions.map((session) => ({
    '@type': 'CourseInstance',
    name: session.titre,
    courseMode: 'Onsite',
    startDate: session.startIso,
    endDate: session.endIso,
    location: LIEU_COURS,
  }))
}

/** Objet JSON-LD Course pour schema.org */
export function buildJsonLdCourse(c) {
  const url = `${BASE_URL}${c.path}`
  const hasCourseInstance = buildCourseInstances(c)
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: c.titreAffichage,
    description: c.jsonLdDescription,
    provider: {
      '@type': 'Organization',
      name: 'Atipik RH',
      url: BASE_URL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '8 Rue du Courant',
        addressLocality: 'Lormont',
        postalCode: '33310',
        addressRegion: 'Nouvelle-Aquitaine',
        addressCountry: 'FR',
      },
      geo: SITE_GEO,
    },
    courseCode: c.courseCode,
    educationalLevel: 'Formation continue',
    timeRequired: c.timeRequired,
    offers: {
      '@type': 'Offer',
      price: Number(c.price).toFixed(2),
      priceCurrency: 'EUR',
      description: 'Tarif Inter TTC / stagiaire',
      availability: 'https://schema.org/InStock',
    },
    url,
    ...(hasCourseInstance ? { hasCourseInstance } : {}),
  }
}

export const FORMATION_PRO_LIST = PROFESSIONNALISANTES_SLUGS.map((slug) => ({
  slug,
  ...professionnalisantesBySlug[slug],
}))

/**
 * Mots-clés agrégés pour la page hub (évite les doublons grossiers).
 */
export function buildFormationProHubKeywords() {
  const seen = new Set()
  const out = []
  for (const slug of PROFESSIONNALISANTES_SLUGS) {
    const raw = professionnalisantesBySlug[slug].keywords || ''
    for (const part of raw.split(',')) {
      const k = part.trim().toLowerCase()
      if (!k || seen.has(k)) continue
      seen.add(k)
      out.push(part.trim())
    }
  }
  return out.join(', ')
}

/**
 * JSON-LD hub : CollectionPage + ItemList pointant vers les fiches (cohérent géo / organisme).
 * @param {{ title: string, description: string }} pageMeta
 */
export function buildJsonLdFormationProHub(pageMeta) {
  const hubPath = '/formations/courtes-professionnalisantes'
  const pageUrl = `${BASE_URL}${hubPath}`
  const itemListElement = PROFESSIONNALISANTES_SLUGS.map((slug, index) => {
    const c = professionnalisantesBySlug[slug]
    return {
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Course',
        name: c.titreAffichage,
        url: `${BASE_URL}${c.path}`,
        description: c.jsonLdDescription || c.description,
      },
    }
  })

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageMeta.title,
        description: pageMeta.description,
        inLanguage: 'fr-FR',
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${BASE_URL}/#website`,
          name: 'Atipik RH',
          url: BASE_URL,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Atipik RH',
          url: BASE_URL,
          address: {
            '@type': 'PostalAddress',
            streetAddress: '8 Rue du Courant',
            addressLocality: 'Lormont',
            postalCode: '33310',
            addressRegion: 'Nouvelle-Aquitaine',
            addressCountry: 'FR',
          },
          geo: SITE_GEO,
        },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: itemListElement.length,
          itemListElement,
        },
      },
    ],
  }
}
