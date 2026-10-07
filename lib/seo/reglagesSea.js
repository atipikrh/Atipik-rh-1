/**
 * Réglages Search à recopier dans Google Ads avant d’activer une campagne.
 * Les URL finales portent les UTM ; les liens internes du site n’en ont pas.
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
  regionAdministrative: 'Nouvelle-Aquitaine',
  horairesAnnonces: 'lun-dim 7h-22h',
  horairesAppel: 'lun-ven 9h-18h, sam 9h-12h',
  enchereSoir: 0.5,
  /** Exclusion d’adresse IP du centre, à saisir dans Google Ads (pas d’IP dans le dépôt). */
  exclureIpCentre: true,
  /** Mesure gratuite (GA4). Aucune campagne payante n’est lancée depuis le dépôt. */
  diffusionPayante: false,
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

/** Campagnes prêtes, à n’activer qu’après deux semaines de CIP avec au moins un lead. */
export const CAMPAGNES_SEA_SUIVANTES = [
  {
    id: 'fpa',
    nom: 'Formation FPA',
    urlFinale: seaFormationUrl('/formations/fpa', 'formation-fpa', 'fiche-fpa'),
    motsCles: ['formation FPA Bordeaux', 'formation FPA Aquitaine', 'devenir formateur adultes Gironde'],
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

/** Première campagne à activer. FPA, VAE et intra viennent après deux semaines de CIP. */
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
  actifAuLancement: true,
}
