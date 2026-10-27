/**
 * Réglages Search à recopier dans Google Ads avant d’activer une campagne.
 * Les URL finales portent les UTM ; les liens internes du site n’en ont pas.
 * Un clic Google Ads n’entre pas dans la Search Console ni dans l’objectif 250.
 */

const SITE = 'https://www.atipikrh.com'

export function seaFormationUrl(pathname, campaign, content) {
  const url = new URL(pathname, SITE)
  url.searchParams.set('utm_source', 'google')
  url.searchParams.set('utm_medium', 'cpc')
  url.searchParams.set('utm_campaign', campaign)
  if (content) url.searchParams.set('utm_content', content)
  return url.toString()
}

export const REGLAGES_SEA = {
  reseau: 'search',
  partenairesRecherche: false,
  display: false,
  langue: 'fr',
  cibleGeo: 'presence',
  /**
   * Présentiel CIP et FPA : personnes situées à 40 km de Lormont (Gironde).
   * Ne pas élargir les annonces à Pau, Bayonne ou Agen : le trajet quotidien n’est pas réaliste.
   * « Aquitaine » est un mot-clé, pas une zone d’enchère.
   */
  rayonKmAutourLormont: 40,
  regionRecherche: 'Aquitaine',
  /** Mot-clé sur les pages existantes. Pas une zone d’enchère. */
  aquitaineZoneEnchere: false,
  regionAdministrative: 'Nouvelle-Aquitaine',
  horairesAnnonces: 'lun-dim 7h-22h',
  horairesAppel: 'lun-ven 9h-18h, sam 9h-12h',
  enchereSoir: 0.5,
  /** Exclusion d’adresse IP du centre, à saisir dans Google Ads (pas d’IP dans le dépôt). */
  exclureIpCentre: true,
  /** Mesure gratuite (GA4). Aucune campagne payante n’est lancée depuis le dépôt. */
  diffusionPayante: false,
  /** Les clics Ads servent les inscriptions. Ils ne comptent pas dans la Search Console. */
  clicsComptentSearchConsole: false,
  exclusions: [
    'gratuit',
    'gratuite',
    'sans frais',
    'offre d’emploi',
    'stage',
    'salaire',
    'fiche métier',
    'débouchés',
    'définition',
    'c’est quoi',
    'pdf',
    'référentiel',
    'programme pdf',
    'annales',
    'concours',
    'afpa',
    'greta',
    'cnam',
    'inscription France Travail',
    'mon compte formation connexion',
    'nettoyage',
    'hygiène',
    'clean in place',
    'industrie',
    'NEP',
    'vélo',
    'électrique',
    'trottinette',
    'batterie',
    'football',
    'fédération',
    'IFPA',
    'TBC',
    'ADREC',
    'ECP',
    'EDUCSUP',
    'EVOCIME',
    'NextGen',
    'IMI',
    'Jadhe',
    'Diversidées',
    'INSUP',
  ],
}

/** FPA et VAE : pages déjà en ligne, seulement après un lead CIP. Pas au lancement. */
export const CAMPAGNES_SEA_SUIVANTES = [
  {
    id: 'fpa',
    nom: 'Formation FPA',
    urlFinale: seaFormationUrl('/formations/fpa', 'formation-fpa', 'fiche-fpa'),
    motsCles: ['formation FPA Bordeaux', 'formation FPA Aquitaine', 'devenir formateur adultes Gironde'],
    conditionActivation: 'lead-cip',
    actifAuLancement: false,
  },
  {
    id: 'vae',
    nom: 'VAE titres CIP et FPA',
    urlFinale: seaFormationUrl('/vae', 'vae-cip-fpa', 'fiche-vae'),
    urlsSatellites: [
      seaFormationUrl('/vae/titre-cip', 'vae-cip-fpa', 'titre-cip'),
      seaFormationUrl('/vae/titre-fpa', 'vae-cip-fpa', 'titre-fpa'),
    ],
    motsCles: ['VAE CIP', 'VAE formateur adultes Bordeaux'],
    conditionActivation: 'lead-cip',
    actifAuLancement: false,
  },
]

/**
 * Extension de lien de la campagne CIP, à recopier dans Google Ads.
 * L’URL Facebook de la vidéo n’est pas une URL finale d’annonce.
 * Ce n’est pas une campagne vidéo : Google Ads vidéo exige YouTube.
 */
export const LIEN_EXTENSION_VISITE_CENTRE = {
  texte: 'Visite du centre',
  urlFinale: seaFormationUrl(
    '/blog/centre-formation-lormont-rive-droite-bordeaux',
    'formation-cip',
    'visite-centre'
  ),
}

/**
 * Seule campagne Search, rayon 40 km (REGLAGES_SEA).
 * À recopier dans Google Ads seulement après les titres de titresRequis.
 * Hors objectif 250 : un clic Ads ne compte pas dans la Search Console.
 */
export const CAMPAGNE_SEA_CIP = {
  id: 'cip',
  nom: 'Formation CIP',
  urlFinale: seaFormationUrl('/formations/cip', 'formation-cip', 'fiche-cip'),
  lienExtension: LIEN_EXTENSION_VISITE_CENTRE,
  motsCles: [
    'formation CIP Bordeaux',
    'formation CIP Aquitaine',
    'formation conseiller insertion professionnelle Lormont',
    'titre CIP CPF',
  ],
  /** Seule campagne du lancement. FPA, VAE et formations courtes restent éteintes. */
  actifAuLancement: true,
  titresRequis: ['/', '/bilan-de-competences', '/formations/cip'],
  horsObjectifOrganique: true,
}

/**
 * La campagne CIP ne s’active qu’une fois les trois titres en production.
 * @param {string[]} titresEnLigne chemins dont le titre répond déjà sur le site
 */
export function peutActiverCampagneCip(titresEnLigne) {
  const requis = CAMPAGNE_SEA_CIP.titresRequis
  if (!Array.isArray(titresEnLigne) || !Array.isArray(requis)) return false
  return requis.every((path) => titresEnLigne.includes(path))
}

/**
 * FPA ou VAE : seulement après un lead issu de la campagne CIP.
 * @param {{ id?: string, conditionActivation?: string }} campagne
 * @param {boolean} leadCip
 */
export function peutActiverCampagneSuivante(campagne, leadCip) {
  if (!campagne || campagne.id === CAMPAGNE_SEA_CIP.id) return false
  if (campagne.conditionActivation !== 'lead-cip') return false
  return leadCip === true
}
