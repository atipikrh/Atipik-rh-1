/**
 * Données SEO / GEO des formations certifiantes (source unique durées, lieux, CTA).
 * Aligné sur le contenu affiché dans pages/formations/*.js
 */

import { RAFAEL_CAP_CIP } from './rafaelCapCip'
import { buildContactHref, buildReunionHref } from './landingHrefs'

export const PDF_CIP_PROGRAMME = '/documents/plaquettes/Formation-CIP-Plaquette.pdf'
export const PDF_CIP_CANDIDATURE = '/documents/dossier-candidature/dossier-candidature-CIP.pdf'
export const PDF_FPA_PROGRAMME = '/documents/plaquettes/plaquette-fpa.pdf'
export const PDF_FPA_CANDIDATURE = '/documents/dossier-candidature/dossier-candidature-FPA.pdf'

const CIP_PREREQUIS = [
  'Un projet de formation validé par au minimum deux enquêtes métiers et/ou une immersion',
  'Des connaissances rédactionnelles',
]

const FPA_PREREQUIS = [
  'Une expertise technique dans un domaine spécifique',
  'Un projet de formation validé par au minimum deux enquêtes métiers et/ou une immersion',
  'Une connaissance des outils informatiques et des techniques rédactionnelles',
]

const CIP_SESSIONS =
  'Du 22 mars 2027 au 22 oct. 2027 (candidatures dès le 3 oct. 2026)'

const FPA_SESSIONS = 'Prochaine session avril 2027 — ouverture des candidatures septembre 2026'

export const CERTIFIANTES_GEO_BY_BRIEF = {
  'formation-cip': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont (Bordeaux Métropole, rive droite)',
    quoi: 'Titre professionnel Conseiller en Insertion Professionnelle (niveau 5, RNCP 37274)',
    duree: '948 h — 563 h en centre — 385 h de stage',
    financement: 'CPF, France Travail (AIF), transition pro, employeur, OPCO — selon profil',
    formationKey: 'CIP',
    sujetContact: 'formation-cip',
    sujetLabel: 'la formation CIP',
    prochaineEtape: { label: "Réunion d'information gratuite", href: '/s-inscrire?formation=CIP' },
    contactCampaign: 'formation_cip',
    rafaelCap: {
      label: 'Fiche Rafael Cap Métiers (Nouvelle-Aquitaine)',
      ficheUrl: RAFAEL_CAP_CIP.ficheUrl,
      reference: RAFAEL_CAP_CIP.reference,
    },
    landing: {
      public:
        "Personnes avec un goût prononcé pour l'accompagnement, l'échange et un sens de l'écoute développé.",
      prerequis: CIP_PREREQUIS,
      certification: 'Titre professionnel CIP niveau 5 — RNCP 37274 (3 CCP capitalisables)',
      debouches:
        "Conseiller en insertion (structures d'insertion, France Travail, missions locales, entreprises, ESS)",
      tarifPublic: '9 100 € TTC',
      sessions: CIP_SESSIONS,
      pdfProgramme: PDF_CIP_PROGRAMME,
      pdfCandidature: PDF_CIP_CANDIDATURE,
    },
  },
  'formation-fpa': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont (Gironde, Nouvelle-Aquitaine)',
    quoi: 'Titre professionnel Formateur Professionnel pour Adultes (niveau 5, RNCP 37275)',
    duree: '7 mois — 934 h de formation',
    financement: 'CPF, employeur, France Travail — selon votre profil',
    formationKey: 'FPA',
    sujetContact: 'formation-fpa',
    sujetLabel: 'la formation FPA',
    prochaineEtape: { label: "Réunion d'information gratuite", href: '/s-inscrire?formation=FPA' },
    contactCampaign: 'formation_fpa',
    landing: {
      public:
        "Personnes souhaitant exercer le métier de formateur d'adultes (organismes, entreprises, associations, institutions).",
      prerequis: FPA_PREREQUIS,
      certification: 'Titre professionnel FPA niveau 5 — RNCP 37275 (4 CCP capitalisables)',
      debouches:
        "Formateur professionnel d'adultes en organisme de formation, entreprise, association ou institution",
      tarifPublic: '8 950 € TTC',
      sessions: FPA_SESSIONS,
      pdfProgramme: PDF_FPA_PROGRAMME,
      pdfCandidature: PDF_FPA_CANDIDATURE,
    },
  },
  'formation-fpa-ccp1': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont',
    quoi: 'Module certifiant CCP1 FPA — Concevoir et Préparer une Formation (titre FPA niveau 5, RNCP37275BC01)',
    duree: '350 h — 245 h centre + 105 h stage',
    financement: 'CPF et dispositifs selon profil — page financement',
    formationKey: 'FPA',
    sujetContact: 'formation-fpa',
    sujetLabel: 'le CCP1 FPA',
    prochaineEtape: { label: 'Comparer avec le parcours FPA complet', href: '/formations/fpa' },
    contactCampaign: 'formation_fpa_ccp1',
    landing: {
      public: "Professionnels qui visent le bloc « concevoir et préparer une formation » du titre FPA.",
      prerequis: FPA_PREREQUIS,
      certification: 'CCP1 du titre FPA — RNCP37275BC01 (capitalisable vers le titre complet)',
      debouches: 'Concevoir des parcours multimodaux et des scénarios pédagogiques pour adultes',
      tarifPublic: '3 560 € TTC',
      sessions: FPA_SESSIONS,
      pdfProgramme: PDF_FPA_PROGRAMME,
      pdfCandidature: PDF_FPA_CANDIDATURE,
    },
  },
  'formation-fpa-ccp2': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont',
    quoi: 'Module certifiant CCP2 FPA — Animer une Formation et Évaluer les Acquis (titre FPA niveau 5, RNCP37275BC02)',
    duree: '280 h — 175 h centre + 105 h stage',
    financement: 'CPF et dispositifs selon profil — page financement',
    formationKey: 'FPA',
    sujetContact: 'formation-fpa',
    sujetLabel: 'le CCP2 FPA',
    prochaineEtape: { label: 'Comparer avec le parcours FPA complet', href: '/formations/fpa' },
    contactCampaign: 'formation_fpa_ccp2',
    landing: {
      public: "Professionnels qui visent le bloc « animer et évaluer » du titre FPA.",
      prerequis: FPA_PREREQUIS,
      certification: 'CCP2 du titre FPA — RNCP37275BC02 (capitalisable vers le titre complet)',
      debouches: 'Animer des sessions et mesurer les acquis des apprenants adultes',
      tarifPublic: '2 545 € TTC',
      sessions: FPA_SESSIONS,
      pdfProgramme: PDF_FPA_PROGRAMME,
      pdfCandidature: PDF_FPA_CANDIDATURE,
    },
  },
  'formation-fpa-ccp3': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont',
    quoi: 'Module certifiant CCP3 FPA — Accompagner les Apprenants en Formation (titre FPA niveau 5, RNCP37275BC03)',
    duree: '210 h — 105 h centre + 105 h stage',
    financement: 'CPF et dispositifs selon profil — page financement',
    formationKey: 'FPA',
    sujetContact: 'formation-fpa',
    sujetLabel: 'le CCP3 FPA',
    prochaineEtape: { label: 'Comparer avec le parcours FPA complet', href: '/formations/fpa' },
    contactCampaign: 'formation_fpa_ccp3',
    landing: {
      public: "Professionnels qui visent le bloc « accompagner les apprenants » du titre FPA.",
      prerequis: FPA_PREREQUIS,
      certification: 'CCP3 du titre FPA — RNCP37275BC03 (capitalisable vers le titre complet)',
      debouches: 'Accueillir, tutorer et accompagner le développement professionnel des apprenants',
      tarifPublic: '2 228 € TTC',
      sessions: FPA_SESSIONS,
      pdfProgramme: PDF_FPA_PROGRAMME,
      pdfCandidature: PDF_FPA_CANDIDATURE,
    },
  },
  'formation-fpa-ccp4': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont',
    quoi: 'Module certifiant CCP4 FPA — Qualité, Réglementation et RSE en Formation (titre FPA niveau 5, RNCP37275BC04)',
    duree: '161 h — 91 h centre + 70 h stage',
    financement: 'CPF et dispositifs selon profil — page financement',
    formationKey: 'FPA',
    sujetContact: 'formation-fpa',
    sujetLabel: 'le CCP4 FPA',
    prochaineEtape: { label: 'Comparer avec le parcours FPA complet', href: '/formations/fpa' },
    contactCampaign: 'formation_fpa_ccp4',
    landing: {
      public: "Professionnels qui visent le bloc « qualité, réglementation et RSE » du titre FPA.",
      prerequis: FPA_PREREQUIS,
      certification: 'CCP4 du titre FPA — RNCP37275BC04 (capitalisable vers le titre complet)',
      debouches: 'Inscrire sa pratique de formateur dans une démarche qualité et RSE',
      tarifPublic: '1 931 € TTC',
      sessions: FPA_SESSIONS,
      pdfProgramme: PDF_FPA_PROGRAMME,
      pdfCandidature: PDF_FPA_CANDIDATURE,
    },
  },
  'formation-ccp1': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont',
    quoi: 'Module certifiant CCP1 — accueil et diagnostic partagé (titre CIP niveau 5)',
    duree: '220 h — 150 h centre + 70 h stage',
    financement: 'CPF et dispositifs selon profil — page financement',
    formationKey: 'CIP',
    sujetContact: 'formation-cip',
    sujetLabel: 'le CCP1 CIP',
    prochaineEtape: { label: 'Comparer avec le parcours CIP complet', href: '/formations/cip' },
    contactCampaign: 'formation_ccp1',
    landing: {
      public: "Personnes qui visent le bloc « accueil et diagnostic partagé » du titre CIP.",
      prerequis: CIP_PREREQUIS,
      certification: 'CCP1 du titre CIP niveau 5 — RNCP 37274 (capitalisable vers le titre complet)',
      debouches: "Accueillir et réaliser un diagnostic partagé avec les personnes accompagnées",
      tarifPublic: 'Sur devis — selon profil et financement',
      sessions: CIP_SESSIONS,
      pdfProgramme: PDF_CIP_PROGRAMME,
      pdfCandidature: PDF_CIP_CANDIDATURE,
    },
  },
  'formation-ccp2': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont',
    quoi: 'Module certifiant CCP2 — accompagnement de parcours (titre CIP niveau 5)',
    duree: '435 h — 175 h centre + 260 h stage',
    financement: 'CPF et dispositifs selon profil — page financement',
    formationKey: 'CIP',
    sujetContact: 'formation-cip',
    sujetLabel: 'le CCP2 CIP',
    prochaineEtape: { label: 'Comparer avec le parcours CIP complet', href: '/formations/cip' },
    contactCampaign: 'formation_ccp2',
    landing: {
      public: "Personnes qui visent le bloc « accompagnement de parcours » du titre CIP.",
      prerequis: CIP_PREREQUIS,
      certification: 'CCP2 du titre CIP niveau 5 — RNCP 37274 (capitalisable vers le titre complet)',
      debouches: "Contractualiser, suivre et animer l'accompagnement vers l'emploi",
      tarifPublic: 'Sur devis — selon profil et financement',
      sessions: CIP_SESSIONS,
      pdfProgramme: PDF_CIP_PROGRAMME,
      pdfCandidature: PDF_CIP_CANDIDATURE,
    },
  },
  'formation-ccp3': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont',
    quoi: 'Module certifiant CCP3 — relation entreprise et recrutement (titre CIP niveau 5)',
    duree: '371 h — parcours orienté employeurs et médiation',
    financement: 'CPF et dispositifs selon profil — page financement',
    formationKey: 'CIP',
    sujetContact: 'formation-cip',
    sujetLabel: 'le CCP3 CIP',
    prochaineEtape: { label: 'Comparer avec le parcours CIP complet', href: '/formations/cip' },
    contactCampaign: 'formation_ccp3',
    landing: {
      public: "Personnes qui visent le bloc « relation entreprise et recrutement » du titre CIP.",
      prerequis: CIP_PREREQUIS,
      certification: 'CCP3 du titre CIP niveau 5 — RNCP 37274 (capitalisable vers le titre complet)',
      debouches: 'Déployer une offre de services auprès des employeurs du territoire',
      tarifPublic: '3 075 € TTC',
      sessions: CIP_SESSIONS,
      pdfProgramme: PDF_CIP_PROGRAMME,
      pdfCandidature: PDF_CIP_CANDIDATURE,
    },
  },
}

/**
 * @param {string} briefId
 */
export function getCertifianteGeoByBrief(briefId) {
  return CERTIFIANTES_GEO_BY_BRIEF[briefId] ?? null
}

export function getCertifianteContactHref(briefId) {
  const geo = getCertifianteGeoByBrief(briefId)
  if (!geo) return '/contact'
  return buildContactHref({
    sujetContact: geo.sujetContact,
    contactCampaign: geo.contactCampaign,
  })
}

/**
 * Lien contact « être rappelé » (sujet + message préremplis).
 * @param {string} briefId
 */
export function getCertifianteRappelHref(briefId) {
  const geo = getCertifianteGeoByBrief(briefId)
  if (!geo) {
    return buildContactHref({
      sujetContact: 'information',
      contactCampaign: 'formation_page',
      message: 'Je souhaite être rappelé',
    })
  }
  return buildContactHref({
    sujetContact: geo.sujetContact,
    contactCampaign: geo.contactCampaign,
    message: `Je souhaite être rappelé au sujet de ${geo.sujetLabel}.`,
  })
}

/**
 * Lien réunion d'information avec formation préremplie.
 * @param {string} briefId
 */
export function getCertifianteReunionHref(briefId) {
  const geo = getCertifianteGeoByBrief(briefId)
  return buildReunionHref(geo?.formationKey)
}
