/**
 * Phrases citables et faits vérifiables pour assistants IA.
 * Aligné sur le contenu visible (EntityCitationBlock) et le JSON-LD.
 */

import { RAFAEL_CAP_CIP } from './rafaelCapCip'
import { getCertifianteGeoByBrief } from './certifiantesConfig.js'
import {
  ADDRESS,
  CERTIFICATIONS,
  ORGANIZATION,
  SIRET,
  TELEPHONE_DISPLAY,
} from './site'

export const ENTITY_LEAD =
  'Atipik RH est un organisme de formation certifié Qualiopi situé à Lormont, près de Bordeaux.'

export const ENTITY_OFFER =
  'Il propose notamment les titres professionnels CIP et FPA, des bilans de compétences, un accompagnement VAE et des formations courtes pour les professionnels de l’insertion et des RH.'

export const ENTITY_CITATION = `${ENTITY_LEAD} ${ENTITY_OFFER}`

export const NAP_LINE = `${ADDRESS.streetAddress}, ${ADDRESS.postalCode} ${ADDRESS.addressLocality} — ${TELEPHONE_DISPLAY} — ${ORGANIZATION.email} — SIRET ${SIRET}`

export const QUALIOPI_CATEGORIES = [
  'Actions de formation',
  'Bilans de compétences',
  'Actions permettant de valider les acquis de l’expérience (VAE)',
] as const

export const OFFICIAL_SOURCES = {
  rncpCip: {
    label: 'France Compétences — RNCP 37274 (CIP)',
    href: 'https://www.francecompetences.fr/recherche/rncp/37274/',
  },
  rncpFpa: {
    label: 'France Compétences — RNCP 37275 (FPA)',
    href: 'https://www.francecompetences.fr/recherche/rncp/37275/',
  },
  monCompteFormation: {
    label: 'Mon Compte Formation',
    href: 'https://www.moncompteformation.gouv.fr',
  },
  qualiopiPdf: {
    label: 'Certificat Qualiopi (PDF)',
    href: '/documents/certifications/certificat-qualiopi.pdf',
  },
  rafaelCapCip: {
    label: 'Fiche Rafael Cap Métiers (CIP)',
    href: RAFAEL_CAP_CIP.ficheUrl,
  },
  franceVae: {
    label: 'France VAE',
    href: 'https://www.francevae.fr',
  },
} as const

export interface CitationFact {
  label: string
  value: string
}

export interface CitationSource {
  label: string
  href: string
}

export interface PageCitation {
  definition: string
  facts: CitationFact[]
  sources: CitationSource[]
  includeLead: boolean
}

function napFacts(): CitationFact[] {
  return [
    { label: 'Organisme', value: ORGANIZATION.name },
    {
      label: 'Lieu',
      value: `${ADDRESS.streetAddress}, ${ADDRESS.postalCode} ${ADDRESS.addressLocality} (Bordeaux Métropole)`,
    },
    { label: 'Certification', value: CERTIFICATIONS[0] },
    { label: 'Contact', value: `${TELEPHONE_DISPLAY} — ${ORGANIZATION.email}` },
    { label: 'SIRET', value: SIRET },
  ]
}

function geoFacts(briefId: string): CitationFact[] {
  const geo = getCertifianteGeoByBrief(briefId)
  if (!geo?.landing) return napFacts()
  return [
    { label: 'Organisme', value: ORGANIZATION.name },
    { label: 'Lieu', value: geo.ou },
    { label: 'Certification', value: CERTIFICATIONS[0] },
    { label: 'Dates', value: geo.landing.sessions },
    { label: 'Tarif public', value: geo.landing.tarifPublic },
    { label: 'Contact', value: `${TELEPHONE_DISPLAY} — ${ORGANIZATION.email}` },
  ]
}

const PAGE_CITATIONS: Record<string, PageCitation> = {
  accueil: {
    includeLead: true,
    definition: ENTITY_OFFER,
    facts: napFacts(),
    sources: [
      OFFICIAL_SOURCES.qualiopiPdf,
      OFFICIAL_SOURCES.rncpCip,
      OFFICIAL_SOURCES.rncpFpa,
      OFFICIAL_SOURCES.monCompteFormation,
    ],
  },
  'formation-cip': {
    includeLead: true,
    definition:
      'Le titre professionnel Conseiller en Insertion Professionnelle (CIP, niveau 5, RNCP 37274) se prépare chez Atipik RH à Lormont, près de Bordeaux. Le parcours dure 8 mois (948 h en centre, 11 semaines de stage). Tarif public : 9 100 € TTC. Prochaine session du 21 septembre 2026 au 23 avril 2027 (candidatures dès le 3 février 2026).',
    facts: geoFacts('formation-cip'),
    sources: [
      OFFICIAL_SOURCES.rncpCip,
      OFFICIAL_SOURCES.rafaelCapCip,
      OFFICIAL_SOURCES.monCompteFormation,
      OFFICIAL_SOURCES.qualiopiPdf,
    ],
  },
  'formation-fpa': {
    includeLead: true,
    definition:
      'Le titre professionnel Formateur Professionnel pour Adultes (FPA, niveau 5, RNCP 37275) se prépare chez Atipik RH à Lormont, près de Bordeaux. Le parcours dure 7 mois (934 h). Tarif public : 8 950 € TTC. Prochaine session : avril 2027 — ouverture des candidatures en septembre 2026.',
    facts: geoFacts('formation-fpa'),
    sources: [
      OFFICIAL_SOURCES.rncpFpa,
      OFFICIAL_SOURCES.monCompteFormation,
      OFFICIAL_SOURCES.qualiopiPdf,
    ],
  },
  'bilan-competences-local': {
    includeLead: true,
    definition:
      'Le bilan de compétences est un accompagnement personnalisé pour faire le point sur son parcours, ses compétences et son projet professionnel. Atipik RH, organisme certifié Qualiopi, le propose à Lormont (Bordeaux Métropole). Formule Essentiel : 1 600 € TTC (16 h) ; formule Horizon : 1 900 € TTC (20 h). Finançable via le CPF selon éligibilité.',
    facts: [
      ...napFacts(),
      { label: 'Tarifs', value: 'Essentiel 1 600 € TTC (16 h) · Horizon 1 900 € TTC (20 h)' },
    ],
    sources: [OFFICIAL_SOURCES.monCompteFormation, OFFICIAL_SOURCES.qualiopiPdf],
  },
  vae: {
    includeLead: true,
    definition:
      'La VAE (Validation des Acquis de l’Expérience) permet d’obtenir une certification reconnue à partir de son expérience professionnelle. Atipik RH accompagne les démarches VAE à Lormont, près de Bordeaux. Formules d’accompagnement : 2 650 € TTC et 2 750 € TTC. Financement CPF, congé VAE ou employeur selon le profil — vérification préalable obligatoire.',
    facts: [
      ...napFacts(),
      { label: 'Tarifs', value: '2 650 € TTC et 2 750 € TTC selon la formule' },
    ],
    sources: [
      OFFICIAL_SOURCES.franceVae,
      OFFICIAL_SOURCES.monCompteFormation,
      OFFICIAL_SOURCES.qualiopiPdf,
    ],
  },
  financement: {
    includeLead: true,
    definition:
      'Atipik RH accompagne le financement des formations CIP et FPA, des bilans de compétences et de la VAE. Dispositifs possibles selon le statut : CPF (Mon Compte Formation), France Travail (AIF), employeur, OPCO et aides régionales en Nouvelle-Aquitaine. Aucune prise en charge n’est garantie sans étude du dossier.',
    facts: napFacts(),
    sources: [OFFICIAL_SOURCES.monCompteFormation, OFFICIAL_SOURCES.qualiopiPdf],
  },
  'formations-professionnalisantes-hub': {
    includeLead: true,
    definition:
      'Les formations courtes professionnalisantes d’Atipik RH s’adressent aux professionnels de l’insertion et des RH. Modules de 11 h à 21 h à Lormont (Bordeaux Métropole) : relation entreprise, recrutement inclusif, numérique et IA.',
    facts: napFacts(),
    sources: [OFFICIAL_SOURCES.qualiopiPdf],
  },
  'formations-hub': {
    includeLead: true,
    definition:
      'Atipik RH propose à Lormont, près de Bordeaux, les titres professionnels CIP (RNCP 37274) et FPA (RNCP 37275), des modules CCP, des bilans de compétences, un accompagnement VAE et des formations courtes professionnalisantes.',
    facts: napFacts(),
    sources: [
      OFFICIAL_SOURCES.rncpCip,
      OFFICIAL_SOURCES.rncpFpa,
      OFFICIAL_SOURCES.qualiopiPdf,
      OFFICIAL_SOURCES.monCompteFormation,
    ],
  },
  'insertion-professionnelle-organisme': {
    includeLead: true,
    definition:
      'Atipik RH est un organisme de formation spécialisé dans l’insertion professionnelle et la reconversion, basé à Lormont en Bordeaux Métropole. Publics accompagnés : demandeurs d’emploi, personnes en reconversion, professionnels de l’insertion et des RH.',
    facts: napFacts(),
    sources: [OFFICIAL_SOURCES.qualiopiPdf, OFFICIAL_SOURCES.rncpCip],
  },
  'reconversion-bordeaux': {
    includeLead: true,
    definition:
      'Atipik RH accompagne les reconversions professionnelles à Bordeaux et Lormont : bilan de compétences, titres CIP et FPA, VAE et formations courtes.',
    facts: napFacts(),
    sources: [OFFICIAL_SOURCES.qualiopiPdf, OFFICIAL_SOURCES.monCompteFormation],
  },
  certification: {
    includeLead: true,
    definition:
      'Atipik RH est certifié Qualiopi pour les actions de formation, les bilans de compétences et les actions permettant de valider les acquis de l’expérience (VAE). Le certificat Qualiopi est consultable en PDF.',
    facts: [
      ...napFacts(),
      { label: 'Catégories Qualiopi', value: QUALIOPI_CATEGORIES.join(' · ') },
    ],
    sources: [OFFICIAL_SOURCES.qualiopiPdf],
  },
  contact: {
    includeLead: true,
    definition:
      'Contactez Atipik RH pour un projet CIP, FPA, bilan de compétences, VAE ou formation courte. Accueil au 8 Rue du Courant, 33310 Lormont, près de Bordeaux.',
    facts: napFacts(),
    sources: [OFFICIAL_SOURCES.qualiopiPdf],
  },
}

export function getCitationByPage(pageId: string): PageCitation | null {
  return PAGE_CITATIONS[pageId] ?? null
}
