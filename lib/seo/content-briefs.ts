import { expandLongTail, getClusterForBrief } from './keywords'
import { FINANCEMENT_DISCLAIMER } from '../tarifs/tarifsCopy'
import type { ContentBrief } from './types'

/** Ajoute la mention légale financement aux réponses FAQ concernées. */
function faqFinancement(answer: string): string {
  return `${answer} ${FINANCEMENT_DISCLAIMER}`
}

const SHARED_EEAT = [
  'Organisme certifié Qualiopi',
  'Équipe experte insertion et formation d’adultes',
  'Centre à Lormont, 8 Rue du Courant — accessible depuis Bordeaux Métropole',
  'Accompagnement personnalisé demandeurs d’emploi et reconversions',
]

const BRIEFS: ContentBrief[] = [
  {
    id: 'formation-cip',
    clusterId: 'formation-cip-bordeaux',
    serpSnapshotId: 'serp-formation-cip-bordeaux',
    pageType: 'pilier',
    h1: 'Formation CIP à Lormont — Conseiller en Insertion Professionnelle',
    metaTitle: 'Formation CIP Bordeaux & Lormont | Titre niveau 5 | Atipik RH',
    metaDescription:
      'Devenez conseiller en insertion à Lormont (Bordeaux) : titre CIP RNCP 37274, 8 mois, 948 h. CPF, AIF France Travail, OPCO. Centre Qualiopi, Atipik RH.',
    recommendedSlug: '/formations/cip',
    primaryKeywords: ['formation CIP Bordeaux', 'formation CIP Lormont', 'conseiller insertion professionnelle'],
    longTailKeywords: [],
    intent: 'commercial',
    personas: ['demandeur-emploi', 'reconversion-40plus', 'professionnel-insertion'],
    faq: [
      {
        question: 'Où suivre une formation CIP près de Bordeaux ?',
        answer:
          'Atipik RH propose la formation CIP à Lormont (33310), sur la rive droite de Bordeaux Métropole, en présentiel et distanciel selon les modules.',
      },
      {
        question: 'La formation CIP est-elle finançable avec le CPF ?',
        answer: faqFinancement(
          'Oui, sous réserve d’éligibilité du titre et de votre solde CPF. Un conseiller peut vous orienter vers les autres dispositifs (France Travail, employeur).',
        ),
      },
      {
        question: 'Quelle durée pour devenir conseiller en insertion professionnelle ?',
        answer:
          'Le parcours CIP chez Atipik RH dure 8 mois, soit 948 heures en centre, en présentiel et distanciel. Les détails du référentiel sont présentés en réunion d’information.',
      },
      {
        question: 'Quels débouchés après le titre CIP ?',
        answer:
          'France Travail, Missions Locales, Cap Emploi, SIAE, associations, collectivités, organismes de formation — en Gironde et Nouvelle-Aquitaine.',
      },
      {
        question: 'La formation est-elle référencée sur Rafael Cap Métiers ?',
        answer:
          'Oui. La fiche officielle Nouvelle-Aquitaine (CMaFormation) référence ATIPIK RH à Lormont, avec sessions éligibles CPF. Voir le lien « Fiche Rafael Cap » sur cette page.',
      },
      {
        question: 'Les prescripteurs (France Travail, Mission Locale) peuvent-ils orienter un candidat ?',
        answer:
          'Oui. Réunion d’information recommandée ; ATIPIK RH accompagne la constitution du dossier (enquêtes métiers, immersion, entretien). Financement AIF possible pour les demandeurs d’emploi.',
      },
    ],
    internalLinks: [
      { label: 'Financement des formations', href: '/financement', anchorIntent: 'financement CIP' },
      { label: 'Bilan de compétences', href: '/bilan-de-competences', anchorIntent: 'clarifier projet avant CIP' },
      { label: 'S’inscrire à une réunion d’information', href: '/s-inscrire', anchorIntent: 'conversion' },
      { label: 'Formation FPA', href: '/formations/fpa', anchorIntent: 'cross-formation' },
    ],
    schemaTypes: ['Course', 'FAQPage', 'LocalBusiness'],
    eeatSignals: [...SHARED_EEAT, 'Titre professionnel reconnu — niveau 5'],
    existingPagePath: '/formations/cip',
  },
  {
    id: 'formation-fpa',
    clusterId: 'formation-fpa-nouvelle-aquitaine',
    serpSnapshotId: 'serp-fpa-na',
    pageType: 'pilier',
    h1: 'Formation FPA — Formateur Professionnel pour Adultes',
    metaTitle: 'Formation FPA Nouvelle-Aquitaine | Atipik RH Lormont',
    metaDescription:
      'Formation FPA à Lormont, Nouvelle-Aquitaine : titre niveau 5, 7 mois (934 h). Formateur d’adultes, financement CPF. Atipik RH, Bordeaux Métropole.',
    recommendedSlug: '/formations/fpa',
    primaryKeywords: ['formation FPA Nouvelle-Aquitaine', 'formateur professionnel adultes Bordeaux'],
    longTailKeywords: [],
    intent: 'commercial',
    personas: ['reconversion-40plus', 'professionnel-insertion'],
    faq: [
      {
        question: 'Où faire une formation FPA en Nouvelle-Aquitaine ?',
        answer: 'Atipik RH à Lormont, accessible depuis Bordeaux, Libourne et l’ensemble de la Gironde.',
      },
      {
        question: 'Peut-on cumuler FPA et une autre certification ?',
        answer:
          'Des parcours combinant expertise métier et FPA existent — échangez en réunion d’information selon votre profil.',
      },
      {
        question: 'Quels prérequis pour la formation FPA ?',
        answer: 'Un niveau d’études et une expérience professionnelle sont requis — vérifiez votre éligibilité avec notre équipe.',
      },
      {
        question: 'Comment financer la formation FPA ?',
        answer: faqFinancement('CPF, employeur, France Travail selon situation — voir la page financement.'),
      },
    ],
    internalLinks: [
      { label: 'Formation CIP', href: '/formations/cip', anchorIntent: 'double compétence insertion' },
      { label: 'Financement', href: '/financement', anchorIntent: 'financement FPA' },
      { label: 'Blog — Devenir formateur adultes', href: '/blog/formation-fpa-bordeaux-formateur-professionnel-adultes', anchorIntent: 'contenu expert' },
      { label: 'Contact', href: '/contact', anchorIntent: 'prise de contact' },
    ],
    schemaTypes: ['Course', 'FAQPage', 'LocalBusiness'],
    eeatSignals: [...SHARED_EEAT, 'Formatrices expertes terrain'],
    existingPagePath: '/formations/fpa',
  },
  {
    id: 'formation-fpa-ccp1',
    clusterId: 'formation-fpa-nouvelle-aquitaine',
    serpSnapshotId: 'serp-fpa-na',
    pageType: 'cluster',
    h1: 'Formation FPA CCP1 — Concevoir et Préparer une Formation',
    metaTitle: 'Formation FPA CCP1 — concevoir une formation | Atipik RH Lormont',
    metaDescription:
      'Module certifiant CCP1 FPA (350 h : 245 h centre + 105 h stage) — concevoir et préparer une formation. Tarif 3 560 € TTC. Titre FPA niveau 5 (RNCP37275BC01). Atipik RH Lormont.',
    recommendedSlug: '/formations/fpa/ccp1',
    primaryKeywords: ['formation FPA CCP1', 'formateur adultes certifiant Nouvelle-Aquitaine'],
    longTailKeywords: [],
    intent: 'commercial',
    personas: ['reconversion-40plus', 'professionnel-insertion'],
    faq: [
      {
        question: 'Quelle différence entre le CCP1 FPA et le parcours FPA complet ?',
        answer:
          'Le CCP1 FPA dure 350 h (245 h centre + 105 h stage) et porte sur la conception et la préparation de formation. Le parcours FPA complet (934 h, 7 mois) couvre les quatre blocs CCP. Notre équipe vous oriente selon votre profil en réunion d’information.',
      },
      {
        question: 'Quel est le tarif du CCP1 FPA ?',
        answer: 'Le tarif public est de 3 560 € TTC. Des tarifs selon profil (salariés, demandeurs d’emploi, etc.) sont possibles — contactez Atipik RH.',
      },
      {
        question: 'Où se déroule la formation ?',
        answer: 'Au centre Atipik RH, 8 Rue du Courant, Lormont (Bordeaux Métropole).',
      },
      {
        question: 'Comment financer le CCP1 FPA ?',
        answer: faqFinancement('CPF et dispositifs selon profil — voir la page financement.'),
      },
    ],
    internalLinks: [
      { label: 'Parcours FPA complet', href: '/formations/fpa', anchorIntent: 'parcours alternatif' },
      { label: 'CCP2 FPA', href: '/formations/fpa/ccp2', anchorIntent: 'module voisin' },
      { label: 'CCP3 FPA', href: '/formations/fpa/ccp3', anchorIntent: 'module voisin' },
      { label: 'CCP4 FPA', href: '/formations/fpa/ccp4', anchorIntent: 'module voisin' },
      { label: 'Financement', href: '/financement', anchorIntent: 'financement' },
    ],
    schemaTypes: ['Course', 'FAQPage'],
    eeatSignals: SHARED_EEAT,
    existingPagePath: '/formations/fpa/ccp1',
  },
  {
    id: 'formation-fpa-ccp2',
    clusterId: 'formation-fpa-nouvelle-aquitaine',
    serpSnapshotId: 'serp-fpa-na',
    pageType: 'cluster',
    h1: 'Formation FPA CCP2 — Animer une Formation et Évaluer les Acquis',
    metaTitle: 'Formation FPA CCP2 — animer et évaluer | Atipik RH Lormont',
    metaDescription:
      'Module certifiant CCP2 FPA (280 h : 175 h centre + 105 h stage) — animer une formation et évaluer les acquis. Tarif 2 545 € TTC. Titre FPA niveau 5 (RNCP37275BC02). Atipik RH Lormont.',
    recommendedSlug: '/formations/fpa/ccp2',
    primaryKeywords: ['formation FPA CCP2', 'formateur adultes certifiant Nouvelle-Aquitaine'],
    longTailKeywords: [],
    intent: 'commercial',
    personas: ['reconversion-40plus', 'professionnel-insertion'],
    faq: [
      {
        question: 'Quelle différence entre le CCP2 FPA et le parcours FPA complet ?',
        answer:
          'Le CCP2 FPA dure 280 h (175 h centre + 105 h stage) et porte sur l’animation et l’évaluation des acquis. Le parcours FPA complet (934 h, 7 mois) couvre les quatre blocs CCP. Notre équipe vous oriente selon votre profil en réunion d’information.',
      },
      {
        question: 'Quel est le tarif du CCP2 FPA ?',
        answer: 'Le tarif public est de 2 545 € TTC. Des tarifs selon profil sont possibles — contactez Atipik RH.',
      },
      {
        question: 'Où se déroule la formation ?',
        answer: 'Au centre Atipik RH, 8 Rue du Courant, Lormont (Bordeaux Métropole).',
      },
      {
        question: 'Comment financer le CCP2 FPA ?',
        answer: faqFinancement('CPF et dispositifs selon profil — voir la page financement.'),
      },
    ],
    internalLinks: [
      { label: 'Parcours FPA complet', href: '/formations/fpa', anchorIntent: 'parcours alternatif' },
      { label: 'CCP1 FPA', href: '/formations/fpa/ccp1', anchorIntent: 'module voisin' },
      { label: 'CCP3 FPA', href: '/formations/fpa/ccp3', anchorIntent: 'module voisin' },
      { label: 'CCP4 FPA', href: '/formations/fpa/ccp4', anchorIntent: 'module voisin' },
      { label: 'Financement', href: '/financement', anchorIntent: 'financement' },
    ],
    schemaTypes: ['Course', 'FAQPage'],
    eeatSignals: SHARED_EEAT,
    existingPagePath: '/formations/fpa/ccp2',
  },
  {
    id: 'formation-fpa-ccp3',
    clusterId: 'formation-fpa-nouvelle-aquitaine',
    serpSnapshotId: 'serp-fpa-na',
    pageType: 'cluster',
    h1: 'Formation FPA CCP3 — Accompagner les Apprenants en Formation',
    metaTitle: 'Formation FPA CCP3 — accompagner les apprenants | Atipik RH Lormont',
    metaDescription:
      'Module certifiant CCP3 FPA (210 h : 105 h centre + 105 h stage) — accompagner les apprenants en formation. Tarif 2 228 € TTC. Titre FPA niveau 5 (RNCP37275BC03). Atipik RH Lormont.',
    recommendedSlug: '/formations/fpa/ccp3',
    primaryKeywords: ['formation FPA CCP3', 'formateur adultes certifiant Nouvelle-Aquitaine'],
    longTailKeywords: [],
    intent: 'commercial',
    personas: ['reconversion-40plus', 'professionnel-insertion'],
    faq: [
      {
        question: 'Quelle différence entre le CCP3 FPA et le parcours FPA complet ?',
        answer:
          'Le CCP3 FPA dure 210 h (105 h centre + 105 h stage) et porte sur l’accompagnement des apprenants. Le parcours FPA complet (934 h, 7 mois) couvre les quatre blocs CCP. Notre équipe vous oriente selon votre profil en réunion d’information.',
      },
      {
        question: 'Quel est le tarif du CCP3 FPA ?',
        answer: 'Le tarif public est de 2 228 € TTC. Des tarifs selon profil sont possibles — contactez Atipik RH.',
      },
      {
        question: 'Où se déroule la formation ?',
        answer: 'Au centre Atipik RH, 8 Rue du Courant, Lormont (Bordeaux Métropole).',
      },
      {
        question: 'Comment financer le CCP3 FPA ?',
        answer: faqFinancement('CPF et dispositifs selon profil — voir la page financement.'),
      },
    ],
    internalLinks: [
      { label: 'Parcours FPA complet', href: '/formations/fpa', anchorIntent: 'parcours alternatif' },
      { label: 'CCP1 FPA', href: '/formations/fpa/ccp1', anchorIntent: 'module voisin' },
      { label: 'CCP2 FPA', href: '/formations/fpa/ccp2', anchorIntent: 'module voisin' },
      { label: 'CCP4 FPA', href: '/formations/fpa/ccp4', anchorIntent: 'module voisin' },
      { label: 'Financement', href: '/financement', anchorIntent: 'financement' },
    ],
    schemaTypes: ['Course', 'FAQPage'],
    eeatSignals: SHARED_EEAT,
    existingPagePath: '/formations/fpa/ccp3',
  },
  {
    id: 'formation-fpa-ccp4',
    clusterId: 'formation-fpa-nouvelle-aquitaine',
    serpSnapshotId: 'serp-fpa-na',
    pageType: 'cluster',
    h1: 'Formation FPA CCP4 — Qualité, Réglementation et RSE en Formation',
    metaTitle: 'Formation FPA CCP4 — qualité et RSE | Atipik RH Lormont',
    metaDescription:
      'Module certifiant CCP4 FPA (161 h : 91 h centre + 70 h stage) — qualité, réglementation et RSE. Tarif 1 931 € TTC. Titre FPA niveau 5 (RNCP37275BC04). Atipik RH Lormont.',
    recommendedSlug: '/formations/fpa/ccp4',
    primaryKeywords: ['formation FPA CCP4', 'formateur adultes certifiant Nouvelle-Aquitaine'],
    longTailKeywords: [],
    intent: 'commercial',
    personas: ['reconversion-40plus', 'professionnel-insertion'],
    faq: [
      {
        question: 'Quelle différence entre le CCP4 FPA et le parcours FPA complet ?',
        answer:
          'Le CCP4 FPA dure 161 h (91 h centre + 70 h stage) et porte sur la qualité, la réglementation et la RSE. Le parcours FPA complet (934 h, 7 mois) couvre les quatre blocs CCP. Notre équipe vous oriente selon votre profil en réunion d’information.',
      },
      {
        question: 'Quel est le tarif du CCP4 FPA ?',
        answer: 'Le tarif public est de 1 931 € TTC. Des tarifs selon profil sont possibles — contactez Atipik RH.',
      },
      {
        question: 'Où se déroule la formation ?',
        answer: 'Au centre Atipik RH, 8 Rue du Courant, Lormont (Bordeaux Métropole).',
      },
      {
        question: 'Comment financer le CCP4 FPA ?',
        answer: faqFinancement('CPF et dispositifs selon profil — voir la page financement.'),
      },
    ],
    internalLinks: [
      { label: 'Parcours FPA complet', href: '/formations/fpa', anchorIntent: 'parcours alternatif' },
      { label: 'CCP1 FPA', href: '/formations/fpa/ccp1', anchorIntent: 'module voisin' },
      { label: 'CCP2 FPA', href: '/formations/fpa/ccp2', anchorIntent: 'module voisin' },
      { label: 'CCP3 FPA', href: '/formations/fpa/ccp3', anchorIntent: 'module voisin' },
      { label: 'Financement', href: '/financement', anchorIntent: 'financement' },
    ],
    schemaTypes: ['Course', 'FAQPage'],
    eeatSignals: SHARED_EEAT,
    existingPagePath: '/formations/fpa/ccp4',
  },
  {
    id: 'formation-ccp1',
    clusterId: 'formation-cip-bordeaux',
    serpSnapshotId: 'serp-formation-cip-bordeaux',
    pageType: 'cluster',
    h1: 'Formation CCP1 — Conseiller en Insertion Professionnelle',
    metaTitle: 'Formation CCP1 — accueil et diagnostic CIP | Atipik RH Lormont',
    metaDescription:
      'Module certifiant CCP1 (220 h) : accueil, analyse de la demande et diagnostic partagé, titre CIP niveau 5. Atipik RH à Lormont. Financement CPF possible.',
    recommendedSlug: '/formations/ccp1',
    primaryKeywords: ['formation CCP1', 'conseiller insertion professionnelle certifiant'],
    longTailKeywords: [],
    intent: 'commercial',
    personas: ['professionnel-insertion', 'demandeur-emploi'],
    faq: [
      {
        question: 'Quelle différence entre CCP1 et le parcours CIP complet ?',
        answer:
          'Le CCP1 est un module de 220 h (150 h centre + 70 h stage) orienté accueil et diagnostic partagé. Le parcours CIP complet (948 h, 8 mois) couvre l’ensemble des blocs du titre. Notre équipe vous oriente selon votre profil en réunion d’information.',
      },
      {
        question: 'La formation inclut-elle du temps en structure ?',
        answer: 'Oui, le parcours prévoit 70 heures de stage en entreprise ou en structure d’accueil.',
      },
      {
        question: 'Où se déroule la formation ?',
        answer: 'Au centre Atipik RH, 8 Rue du Courant, Lormont.',
      },
      {
        question: 'Comment candidater ?',
        answer: 'Via la page contact ou les réunions d’information sur s-inscrire.',
      },
    ],
    internalLinks: [
      { label: 'Formation CIP', href: '/formations/cip', anchorIntent: 'parcours alternatif' },
      { label: 'CCP2', href: '/formations/ccp2', anchorIntent: 'module voisin' },
      { label: 'CCP3', href: '/formations/ccp3', anchorIntent: 'module voisin' },
      { label: 'Financement', href: '/financement', anchorIntent: 'financement' },
    ],
    schemaTypes: ['Course', 'FAQPage'],
    eeatSignals: SHARED_EEAT,
    existingPagePath: '/formations/ccp1',
  },
  {
    id: 'formation-ccp2',
    clusterId: 'formation-cip-bordeaux',
    serpSnapshotId: 'serp-formation-cip-bordeaux',
    pageType: 'cluster',
    h1: 'Formation CCP2 — Conseiller en Insertion Professionnelle',
    metaTitle: 'Formation CCP2 — accompagnement de parcours CIP | Atipik RH Lormont',
    metaDescription:
      'Module certifiant CCP2 (435 h) : accompagnement des parcours d’insertion, ateliers et analyse de pratique, titre CIP niveau 5. Atipik RH à Lormont.',
    recommendedSlug: '/formations/ccp2',
    primaryKeywords: ['formation CCP2', 'conseiller insertion professionnelle certifiant'],
    longTailKeywords: [],
    intent: 'commercial',
    personas: ['professionnel-insertion', 'demandeur-emploi'],
    faq: [
      {
        question: 'Quelle différence entre CCP2 et le parcours CIP complet ?',
        answer:
          'Le CCP2 est un module de 435 h (175 h centre + 260 h stage) orienté accompagnement de parcours. Le parcours CIP complet (948 h, 8 mois) couvre l’ensemble des blocs du titre. Notre équipe vous oriente selon votre profil en réunion d’information.',
      },
      {
        question: 'La formation inclut-elle du temps en structure ?',
        answer: 'Oui, le parcours prévoit 260 heures de stage en entreprise ou en structure d’accueil.',
      },
      {
        question: 'Où se déroule la formation ?',
        answer: 'Au centre Atipik RH, 8 Rue du Courant, Lormont.',
      },
      {
        question: 'Comment candidater ?',
        answer: 'Via la page contact ou les réunions d’information sur s-inscrire.',
      },
    ],
    internalLinks: [
      { label: 'Formation CIP', href: '/formations/cip', anchorIntent: 'parcours alternatif' },
      { label: 'CCP1', href: '/formations/ccp1', anchorIntent: 'module voisin' },
      { label: 'CCP3', href: '/formations/ccp3', anchorIntent: 'module voisin' },
      { label: 'Financement', href: '/financement', anchorIntent: 'financement' },
    ],
    schemaTypes: ['Course', 'FAQPage'],
    eeatSignals: SHARED_EEAT,
    existingPagePath: '/formations/ccp2',
  },
  {
    id: 'formation-ccp3',
    clusterId: 'formation-cip-bordeaux',
    serpSnapshotId: 'serp-formation-cip-bordeaux',
    pageType: 'cluster',
    h1: 'Formation CCP3 — Conseiller en Insertion Professionnelle',
    metaTitle: 'Formation CCP3 — module employeurs CIP | Atipik RH Lormont',
    metaDescription:
      'Module certifiant CCP3 (371 h) : relation entreprise et recrutement, titre CIP niveau 5. Atipik RH à Lormont, près de Bordeaux. Financement CPF possible.',
    recommendedSlug: '/formations/ccp3',
    primaryKeywords: ['formation CCP3', 'conseiller insertion professionnelle certifiant'],
    longTailKeywords: [],
    intent: 'commercial',
    personas: ['professionnel-insertion', 'demandeur-emploi'],
    faq: [
      {
        question: 'Quelle différence entre CCP3 et le parcours CIP complet ?',
        answer:
          'Le CCP3 est un module de 371 h orienté relation entreprise et recrutement. Le parcours CIP complet (948 h, 8 mois) couvre l’ensemble des blocs du titre. Notre équipe vous oriente selon votre profil en réunion d’information.',
      },
      {
        question: 'La formation inclut-elle du temps en structure ?',
        answer: 'Oui, le parcours prévoit des périodes en entreprise ou en structure d’accueil selon le référentiel en vigueur.',
      },
      {
        question: 'Où se déroule la formation ?',
        answer: 'Au centre Atipik RH, 8 Rue du Courant, Lormont.',
      },
      {
        question: 'Comment candidater ?',
        answer: 'Via la page contact ou les réunions d’information sur s-inscrire.',
      },
    ],
    internalLinks: [
      { label: 'Formation CIP', href: '/formations/cip', anchorIntent: 'parcours alternatif' },
      { label: 'CCP1', href: '/formations/ccp1', anchorIntent: 'module voisin' },
      { label: 'CCP2', href: '/formations/ccp2', anchorIntent: 'module voisin' },
      { label: 'Financement', href: '/financement', anchorIntent: 'financement' },
    ],
    schemaTypes: ['Course', 'FAQPage'],
    eeatSignals: SHARED_EEAT,
    existingPagePath: '/formations/ccp3',
  },
  {
    id: 'formations-hub',
    clusterId: 'organisme-insertion',
    serpSnapshotId: 'serp-organisme-insertion',
    pageType: 'pilier',
    h1: 'Formations professionnelles à Bordeaux et Lormont',
    metaTitle: 'Formations certifiantes & professionnalisantes | Atipik RH',
    metaDescription:
      'CIP, FPA, CCP1, CCP2, CCP3 et formations professionnalisantes à Lormont, près de Bordeaux. Titres certifiants CPF ; cours selon financeur. Qualiopi.',
    recommendedSlug: '/formations',
    primaryKeywords: ['formations professionnelles Bordeaux', 'organisme formation Lormont'],
    longTailKeywords: [],
    intent: 'commercial',
    personas: ['demandeur-emploi', 'rh-entreprise', 'reconversion-40plus'],
    faq: [
      {
        question: 'Quelles formations certifiantes propose Atipik RH ?',
        answer: 'CIP, FPA, CCP1, CCP2, CCP3 et bilans de compétences — voir chaque fiche dédiée.',
      },
      {
        question: 'Où est situé le centre de formation ?',
        answer: '8 Rue du Courant, 33310 Lormont, Bordeaux Métropole.',
      },
      {
        question: 'Les formations sont-elles finançables ?',
        answer: faqFinancement('CPF, OPCO, employeur, France Travail selon dispositifs — page financement.'),
      },
      {
        question: 'Comment assister à une réunion d’information ?',
        answer: 'Inscription en ligne sur la page S’inscrire.',
      },
    ],
    internalLinks: [
      { label: 'Formation CIP', href: '/formations/cip', anchorIntent: 'pilier CIP' },
      { label: 'Formation FPA', href: '/formations/fpa', anchorIntent: 'pilier FPA' },
      { label: 'Formations professionnalisantes', href: '/formations/courtes-professionnalisantes', anchorIntent: 'catalogue court' },
      { label: 'Reconversion Bordeaux', href: '/reconversion-professionnelle-bordeaux', anchorIntent: 'pilier reconversion' },
      { label: 'OF insertion', href: '/organisme-formation-insertion-professionnelle', anchorIntent: 'organisme' },
    ],
    schemaTypes: ['LocalBusiness', 'FAQPage'],
    eeatSignals: SHARED_EEAT,
    existingPagePath: '/formations',
  },
  {
    id: 'bilan-competences-local',
    clusterId: 'bilan-competences-lormont',
    serpSnapshotId: 'serp-bilan-lormont',
    pageType: 'local',
    h1: 'Bilan de compétences à Lormont, proche de Bordeaux',
    metaTitle: 'Bilan de compétences Lormont & Bordeaux | Atipik RH',
    metaDescription:
      'Réalisez votre bilan de compétences à Lormont avec Atipik RH. Accompagnement personnalisé, financement CPF, reconversion et évolution professionnelle.',
    recommendedSlug: '/bilan-de-competences',
    primaryKeywords: ['bilan de compétences Lormont', 'bilan compétences Bordeaux'],
    longTailKeywords: [],
    intent: 'transactional',
    personas: ['reconversion-40plus', 'salarie-evolution', 'demandeur-emploi'],
    faq: [
      {
        question: 'Combien de temps dure un bilan de compétences ?',
        answer: 'Environ 24 heures d’accompagnement réparties sur plusieurs semaines — le rythme est adapté à votre disponibilité.',
      },
      {
        question: 'Peut-on financer un bilan avec le CPF ?',
        answer: faqFinancement('Oui pour les bilans certifiés éligibles — vérifiez votre solde et votre projet avec notre équipe.'),
      },
      {
        question: 'Bilan de compétences ou VAE ?',
        answer: 'Le bilan clarifie votre projet ; la VAE valide une expérience vers un diplôme — nous vous orientons selon votre objectif.',
      },
      {
        question: 'Où se déroulent les entretiens ?',
        answer: 'À Lormont ou en visio selon votre choix et le dispositif retenu.',
      },
    ],
    internalLinks: [
      { label: 'Quiz bilan de compétences', href: '/bilan-de-competences/quiz', anchorIntent: 'engagement' },
      { label: 'VAE', href: '/vae', anchorIntent: 'alternative VAE' },
      { label: 'Financement', href: '/financement', anchorIntent: 'financement bilan' },
      { label: 'Reconversion professionnelle', href: '/reconversion-professionnelle-bordeaux', anchorIntent: 'pilier reconversion' },
    ],
    schemaTypes: ['LocalBusiness', 'FAQPage'],
    eeatSignals: [...SHARED_EEAT, 'Consultants certifiés bilan de compétences'],
    existingPagePath: '/bilan-de-competences',
  },
  {
    id: 'reconversion-bordeaux',
    clusterId: 'reconversion-bordeaux',
    serpSnapshotId: 'serp-reconversion-bordeaux',
    pageType: 'pilier',
    h1: 'Reconversion professionnelle à Bordeaux et Lormont',
    metaTitle: 'Reconversion professionnelle Bordeaux | Atipik RH',
    metaDescription:
      'Réussissez votre reconversion à Bordeaux Métropole : bilan, formations CIP/FPA et accompagnement Atipik RH à Lormont. Financement et projet personnalisé.',
    recommendedSlug: '/reconversion-professionnelle-bordeaux',
    primaryKeywords: ['reconversion professionnelle Bordeaux', 'changer de métier Bordeaux'],
    longTailKeywords: [],
    intent: 'informational',
    personas: ['reconversion-40plus', 'demandeur-emploi', 'salarie-evolution'],
    faq: [
      {
        question: 'Par où commencer une reconversion à Bordeaux ?',
        answer: 'Un bilan de compétences ou un échange en réunion d’information permet de clarifier votre projet avant de choisir une formation certifiante.',
      },
      {
        question: 'Quelles formations pour une reconversion vers l’insertion ?',
        answer: 'Le titre CIP et les formations professionnalisantes Atipik RH sont des passerelles reconnues vers les métiers d’accompagnement.',
      },
      {
        question: 'Comment financer sa reconversion en 2026 ?',
        answer: faqFinancement('CPF, aides régionales, France Travail, employeur — consultez notre page financement et articles blog dédiés.'),
      },
      {
        question: 'Atipik RH accompagne-t-il les plus de 40 ans ?',
        answer: 'Oui, de nombreux stagiaires en reconversion sont des profils expérimentés souhaitant évoluer vers l’accompagnement ou la formation.',
      },
    ],
    internalLinks: [
      { label: 'Bilan de compétences', href: '/bilan-de-competences', anchorIntent: 'étape 1' },
      { label: 'Formation CIP', href: '/formations/cip', anchorIntent: 'métier cible' },
      { label: 'Blog financement reconversion', href: '/blog/financer-reconversion-professionnelle-2026-cpf-aides-regionales', anchorIntent: 'financement' },
      { label: 'Contact', href: '/contact', anchorIntent: 'RDV' },
    ],
    schemaTypes: ['FAQPage', 'LocalBusiness'],
    eeatSignals: SHARED_EEAT,
    existingPagePath: '/reconversion-professionnelle-bordeaux',
  },
  {
    id: 'insertion-professionnelle-organisme',
    clusterId: 'organisme-insertion',
    serpSnapshotId: 'serp-organisme-insertion',
    pageType: 'pilier',
    h1: 'Organisme de formation en insertion professionnelle',
    metaTitle: 'OF insertion professionnelle Bordeaux | Atipik RH',
    metaDescription:
      'Atipik RH, organisme de formation spécialisé insertion et reconversion à Lormont. CIP, FPA, bilans, accompagnement demandeurs d’emploi et QPV.',
    recommendedSlug: '/organisme-formation-insertion-professionnelle',
    primaryKeywords: ['organisme formation insertion professionnelle', 'centre formation insertion Bordeaux'],
    longTailKeywords: [],
    intent: 'commercial',
    personas: ['professionnel-insertion', 'rh-entreprise', 'demandeur-emploi'],
    faq: [
      {
        question: 'Atipik RH est-il certifié Qualiopi ?',
        answer: 'Oui — la certification Qualiopi atteste de la qualité des processus de formation.',
      },
      {
        question: 'Quels publics sont accompagnés ?',
        answer: 'Demandeurs d’emploi, personnes en reconversion, femmes éloignées de l’emploi, jeunes des QPV, professionnels en poste.',
      },
      {
        question: 'Quelle est la zone d’intervention ?',
        answer: 'Bordeaux Métropole, Gironde et Nouvelle-Aquitaine.',
      },
      {
        question: 'Comment visiter le centre ?',
        answer: 'Sur rendez-vous via la page contact ou lors des réunions d’information.',
      },
    ],
    internalLinks: [
      { label: 'Notre histoire', href: '/notre-histoire', anchorIntent: 'E-E-A-T' },
      { label: 'Certification', href: '/certification', anchorIntent: 'Qualiopi' },
      { label: 'Notre équipe', href: '/notre-equipe', anchorIntent: 'experts' },
      { label: 'Formations', href: '/formations', anchorIntent: 'offre' },
    ],
    schemaTypes: ['LocalBusiness', 'FAQPage'],
    eeatSignals: [...SHARED_EEAT, 'Spécialisation insertion et reconversion'],
    existingPagePath: '/organisme-formation-insertion-professionnelle',
  },
  {
    id: 'metiers-accompagnement',
    clusterId: 'metiers-accompagnement-social',
    serpSnapshotId: 'serp-accompagnement-social',
    pageType: 'cluster',
    h1: 'Formation et métiers de l’accompagnement social',
    metaTitle: 'Métiers accompagnement social & formation CIP | Atipik RH',
    metaDescription:
      'Découvrez les métiers de l’accompagnement social et la formation CIP à Lormont pour travailler en insertion professionnelle près de Bordeaux.',
    recommendedSlug: '/formation-metiers-accompagnement-social',
    primaryKeywords: ['formation métiers accompagnement social', 'travailler accompagnement insertion'],
    longTailKeywords: [],
    intent: 'informational',
    personas: ['reconversion-40plus', 'demandeur-emploi'],
    faq: [
      {
        question: 'Quelle formation pour travailler dans l’accompagnement ?',
        answer: 'Le titre de Conseiller en Insertion Professionnelle (CIP) est la référence pour les structures d’insertion et d’emploi.',
      },
      {
        question: 'Peut-on se reconvertir sans diplôme initial dans le social ?',
        answer: 'Oui, sous réserve de prérequis et d’un projet validé — échangez en réunion d’information.',
      },
      {
        question: 'Quels employeurs recrutent des CIP ?',
        answer: 'Associations, missions locales, structures d’insertion, collectivités, entreprises d’insertion.',
      },
      {
        question: 'Où se former près de Bordeaux ?',
        answer: 'Atipik RH à Lormont propose le parcours certifiant CIP.',
      },
    ],
    internalLinks: [
      { label: 'Formation CIP', href: '/formations/cip', anchorIntent: 'conversion' },
      { label: 'Blog CIP Lormont', href: '/blog/formation-conseiller-insertion-professionnelle-lormont', anchorIntent: 'preuve' },
    ],
    schemaTypes: ['FAQPage', 'Course'],
    eeatSignals: SHARED_EEAT,
  },
  {
    id: 'femmes-eloignees-emploi',
    clusterId: 'femmes-eloignees-emploi',
    serpSnapshotId: 'serp-femmes-emploi',
    pageType: 'cluster',
    h1: 'Accompagnement et formation pour femmes éloignées de l’emploi',
    metaTitle: 'Formation femmes éloignées emploi Bordeaux | Atipik RH',
    metaDescription:
      'Parcours d’insertion et formations adaptées aux femmes éloignées de l’emploi à Lormont. Bilan, CIP, accompagnement personnalisé Bordeaux Métropole.',
    recommendedSlug: '/accompagnement-femmes-eloignees-emploi',
    primaryKeywords: ['formation femmes éloignées emploi', 'retour emploi femme Bordeaux'],
    longTailKeywords: [],
    intent: 'local',
    personas: ['femme-eloignee-emploi', 'demandeur-emploi'],
    faq: [
      {
        question: 'Quel accompagnement pour une reprise d’emploi après une pause longue ?',
        answer: 'Bilan de compétences, formation certifiante ou professionnalisante selon votre projet et votre éligibilité aux financements.',
      },
      {
        question: 'Existe-t-il des financements spécifiques ?',
        answer: faqFinancement('France Travail et dispositifs régionaux peuvent compléter le CPF — notre équipe vous oriente.'),
      },
      {
        question: 'Les formations sont-elles compatibles avec la parentalité ?',
        answer: 'Des modalités présentiel et distanciel existent — abordez vos contraintes en réunion d’information.',
      },
      {
        question: 'Où se situe le centre ?',
        answer: 'Lormont, 8 Rue du Courant, accessible en transport depuis Bordeaux.',
      },
    ],
    internalLinks: [
      { label: 'Bilan de compétences', href: '/bilan-de-competences', anchorIntent: 'projet' },
      { label: 'Blog reconversion femmes', href: '/blog/bilan-competences-cadres-plus-40-ans-reconversion', anchorIntent: 'contenu lié' },
      { label: 'Contact', href: '/contact', anchorIntent: 'échange' },
    ],
    schemaTypes: ['FAQPage', 'LocalBusiness'],
    eeatSignals: SHARED_EEAT,
  },
  {
    id: 'formation-qpv-bordeaux',
    clusterId: 'formation-qpv-bordeaux',
    serpSnapshotId: 'serp-qpv-bordeaux',
    pageType: 'local',
    h1: 'Formation et insertion en quartier prioritaire à Bordeaux',
    metaTitle: 'Formation insertion QPV Bordeaux | Atipik RH Lormont',
    metaDescription:
      'Accompagnement et formations pour habitants des quartiers prioritaires de Bordeaux Métropole. Insertion professionnelle depuis Lormont.',
    recommendedSlug: '/formation-insertion-quartier-prioritaire-bordeaux',
    primaryKeywords: ['formation insertion quartier prioritaire Bordeaux', 'accompagnement QPV Gironde'],
    longTailKeywords: [],
    intent: 'local',
    personas: ['jeune-qpv', 'demandeur-emploi'],
    faq: [
      {
        question: 'Atipik RH accompagne-t-il les résidents de QPV ?',
        answer: 'Oui, via des parcours d’insertion, formations et partenariats locaux sur Bordeaux Métropole.',
      },
      {
        question: 'Quelles formations pour les jeunes des quartiers prioritaires ?',
        answer: 'CIP, professionnalisantes et bilans selon l’âge et le projet — orientation en réunion d’information.',
      },
      {
        question: 'Comment financer sa formation en QPV ?',
        answer: faqFinancement('Dispositifs France Travail, ville, région selon éligibilité — page financement.'),
      },
      {
        question: 'Le centre est-il accessible depuis les QPV bordelais ?',
        answer: 'Lormont est relié à Bordeaux par les transports — contactez-nous pour les accès.',
      },
    ],
    internalLinks: [
      { label: 'Formation CIP', href: '/formations/cip', anchorIntent: 'formation certifiante' },
      { label: 'Accompagnement retour emploi', href: '/accompagnement-retour-emploi-lormont', anchorIntent: 'cluster lié' },
    ],
    schemaTypes: ['LocalBusiness', 'FAQPage'],
    eeatSignals: [...SHARED_EEAT, 'Ancrage territorial Bordeaux Métropole'],
  },
  {
    id: 'accompagnement-retour-emploi',
    clusterId: 'accompagnement-retour-emploi',
    serpSnapshotId: 'serp-retour-emploi',
    pageType: 'local',
    h1: 'Accompagnement retour à l’emploi à Lormont',
    metaTitle: 'Accompagnement retour emploi Lormont | Atipik RH',
    metaDescription:
      'Retrouvez un emploi avec un accompagnement personnalisé à Lormont : bilan, formations insertion et reconversion près de Bordeaux.',
    recommendedSlug: '/accompagnement-retour-emploi-lormont',
    primaryKeywords: ['accompagnement retour à l’emploi', 'retour emploi Lormont Bordeaux'],
    longTailKeywords: [],
    intent: 'transactional',
    personas: ['demandeur-emploi', 'femme-eloignee-emploi'],
    faq: [
      {
        question: 'Comment Atipik RH aide-t-il au retour à l’emploi ?',
        answer: 'Diagnostic de compétences, formation certifiante (CIP, FPA) et montée en compétences via formations professionnalisantes.',
      },
      {
        question: 'Faut-il être inscrit à France Travail ?',
        answer: 'Selon le dispositif, l’inscription peut être requise — notre équipe vous précise les démarches.',
      },
      {
        question: 'Proposez-vous un premier rendez-vous ?',
        answer: 'Oui, via contact ou réunion d’information collective.',
      },
      {
        question: 'Quels délais pour démarrer ?',
        answer: 'Selon calendrier des sessions et financements — consultez s-inscrire.',
      },
    ],
    internalLinks: [
      { label: 'Formations', href: '/formations', anchorIntent: 'offre' },
      { label: 'Financement', href: '/financement', anchorIntent: 'dispositifs' },
      { label: 'S’inscrire', href: '/s-inscrire', anchorIntent: 'conversion' },
    ],
    schemaTypes: ['FAQPage', 'LocalBusiness'],
    eeatSignals: SHARED_EEAT,
  },
  {
    id: 'formations-professionnalisantes-hub',
    clusterId: 'formations-professionnalisantes',
    serpSnapshotId: 'serp-professionnalisantes',
    pageType: 'pilier',
    h1: 'Formations courtes professionnalisantes en insertion',
    metaTitle: 'Formations professionnalisantes insertion | Atipik RH',
    metaDescription:
      'Formations courtes (21h) pour professionnels de l’insertion et RH : relation entreprise, recrutement inclusif. Lormont, Bordeaux Métropole.',
    recommendedSlug: '/formations/courtes-professionnalisantes',
    primaryKeywords: ['formation professionnalisante insertion', 'formation courte Bordeaux insertion'],
    longTailKeywords: [],
    intent: 'commercial',
    personas: ['professionnel-insertion', 'rh-entreprise'],
    faq: [
      {
        question: 'À qui s’adressent les formations professionnalisantes ?',
        answer: 'Aux conseillers en insertion, travailleurs sociaux, chargés de relation entreprise et RH en poste.',
      },
      {
        question: 'Quelle durée pour chaque module ?',
        answer: '21 heures par formation — voir le détail sur chaque fiche.',
      },
      {
        question: 'Comment financer une formation professionnalisante ?',
        answer: faqFinancement('OPCO, employeur ou fonds propres — renseignez-vous auprès de votre structure.'),
      },
      {
        question: 'Où ont lieu les sessions ?',
        answer: 'À Lormont ou selon modalités précisées sur la fiche formation.',
      },
    ],
    internalLinks: [
      { label: 'Développer la relation entreprise', href: '/formations/professionnalisantes/developper-relation-entreprise', anchorIntent: 'fiche' },
      { label: 'Recrutement inclusif', href: '/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif', anchorIntent: 'fiche' },
    ],
    schemaTypes: ['Course', 'FAQPage'],
    eeatSignals: SHARED_EEAT,
    existingPagePath: '/formations/courtes-professionnalisantes',
  },
  {
    id: 'vae',
    clusterId: 'reconversion-bordeaux',
    serpSnapshotId: 'serp-reconversion-bordeaux',
    pageType: 'cluster',
    h1: 'VAE — Valoriser son expérience professionnelle',
    metaTitle: 'VAE à Lormont & Bordeaux | Atipik RH',
    metaDescription:
      'Accompagnement VAE à Lormont pour obtenir une certification à partir de votre expérience. Atipik RH, Bordeaux Métropole.',
    recommendedSlug: '/vae',
    primaryKeywords: ['VAE Lormont', 'validation acquis expérience Bordeaux'],
    longTailKeywords: [],
    intent: 'commercial',
    personas: ['reconversion-40plus', 'salarie-evolution'],
    faq: [
      {
        question: 'Qu’est-ce que la VAE ?',
        answer: 'Dispositif pour faire reconnaître son expérience par un diplôme ou titre professionnel.',
      },
      {
        question: 'VAE ou bilan de compétences ?',
        answer: 'Le bilan aide à définir le projet ; la VAE vise l’obtention d’une certification — voir notre article blog comparatif.',
      },
      {
        question: 'Atipik RH accompagne-t-il la VAE ?',
        answer: 'Oui — renseignez-vous sur les certifications concernées et le calendrier.',
      },
      {
        question: 'Comment financer la VAE ?',
        answer: faqFinancement('CPF, congé VAE, financement de droit commun ou abondement éventuel, selon le profil, la certification et les règles en vigueur. Vérification préalable obligatoire.'),
      },
    ],
    internalLinks: [
      { label: 'Bilan de compétences', href: '/bilan-de-competences', anchorIntent: 'complément' },
      { label: 'Blog VAE ou bilan', href: '/blog/vae-ou-bilan-competences-que-choisir-selon-parcours', anchorIntent: 'information' },
    ],
    schemaTypes: ['FAQPage', 'LocalBusiness'],
    eeatSignals: SHARED_EEAT,
    existingPagePath: '/vae',
  },
  {
    id: 'financement',
    clusterId: 'reconversion-bordeaux',
    serpSnapshotId: 'serp-reconversion-bordeaux',
    pageType: 'cluster',
    h1: 'Financer sa formation ou son bilan de compétences',
    metaTitle: 'Financement formation & bilan | Atipik RH',
    metaDescription:
      'CPF, France Travail, employeur, OPCO : financez votre formation CIP, FPA ou bilan à Atipik RH Lormont. Accompagnement des démarches.',
    recommendedSlug: '/financement',
    primaryKeywords: ['financement formation CPF', 'financer bilan compétences'],
    longTailKeywords: [],
    intent: 'informational',
    personas: ['demandeur-emploi', 'salarie-evolution', 'reconversion-40plus'],
    faq: [
      {
        question: 'Puis-je utiliser mon CPF pour une formation Atipik RH ?',
        answer: faqFinancement('Oui pour les formations éligibles — vérifiez le reste à charge éventuel.'),
      },
      {
        question: 'France Travail peut-il financer ma formation ?',
        answer: faqFinancement('Selon votre projet et l’AIF — notre équipe vous guide dans les démarches.'),
      },
      {
        question: 'Mon employeur peut-il prendre en charge un bilan ?',
        answer: faqFinancement('Oui dans le cadre du plan de développement des compétences.'),
      },
      {
        question: 'Existe-t-il des aides régionales en Nouvelle-Aquitaine ?',
        answer: faqFinancement('Des dispositifs ponctuels existent — consultez nos articles blog actualisés.'),
      },
    ],
    internalLinks: [
      { label: 'Formations', href: '/formations', anchorIntent: 'choix formation' },
      { label: 'Blog financement reconversion 2026', href: '/blog/financer-reconversion-professionnelle-2026-cpf-aides-regionales', anchorIntent: 'détail' },
    ],
    schemaTypes: ['FAQPage'],
    eeatSignals: SHARED_EEAT,
    existingPagePath: '/financement',
  },
  {
    id: 'location-salles-lormont',
    clusterId: 'organisme-insertion',
    serpSnapshotId: 'serp-organisme-insertion',
    pageType: 'local',
    h1: 'Location de salles de formation à Lormont',
    metaTitle: 'Location salle formation Lormont | Atipik RH',
    metaDescription:
      'Louez une salle de formation équipée à Lormont, proche Bordeaux. Wi-Fi, vidéoprojecteur, capacité 10 à 20 personnes.',
    recommendedSlug: '/location-salles-lormont',
    primaryKeywords: ['location salle formation Lormont', 'salle séminaire Bordeaux rive droite'],
    longTailKeywords: [],
    intent: 'transactional',
    personas: ['rh-entreprise'],
    faq: [
      {
        question: 'Quelle capacité pour les salles ?',
        answer: 'De 10 à 20 personnes selon la salle — détail sur la page location.',
      },
      {
        question: 'Quels équipements sont inclus ?',
        answer: 'Vidéoprojecteur, Wi-Fi, paperboard, mobilier modulable.',
      },
      {
        question: 'Comment réserver ?',
        answer: 'Via le formulaire contact ou la page dédiée.',
      },
      {
        question: 'Y a-t-il un parking ?',
        answer: 'Oui, parking gratuit sur place.',
      },
    ],
    internalLinks: [{ label: 'Contact', href: '/contact', anchorIntent: 'devis' }],
    schemaTypes: ['LocalBusiness'],
    eeatSignals: SHARED_EEAT,
    existingPagePath: '/location-salles-lormont',
  },
]

/** Enrichit longTailKeywords depuis le cluster si vide. */
function enrichBrief(brief: ContentBrief): ContentBrief {
  if (brief.longTailKeywords.length > 0) return brief
  const expanded = expandLongTail(brief.clusterId, { max: 12 })
  return { ...brief, longTailKeywords: expanded.length ? expanded : getClusterForBrief(brief.id)?.longTail.slice(0, 12) ?? [] }
}

const ENRICHED_BRIEFS = BRIEFS.map(enrichBrief)

export function getAllBriefs(): ContentBrief[] {
  return ENRICHED_BRIEFS
}

export function getBriefById(briefId: string): ContentBrief | undefined {
  return ENRICHED_BRIEFS.find((b) => b.id === briefId)
}

export function getBriefIds(): string[] {
  return ENRICHED_BRIEFS.map((b) => b.id)
}
