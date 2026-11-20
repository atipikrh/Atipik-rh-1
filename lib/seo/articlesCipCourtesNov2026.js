/**
 * 15 articles planifiés (mardi / jeudi 6 h Paris) — CIP cluster + formations courtes.
 * L'article session CIP existant n'est pas dans cette liste.
 */

import { buildContactHref, buildReunionHref } from './landingHrefs.js'
import { CONTACT_SUJET_COURTE, getFormationContactHref } from './professionnalisantesConfig.js'

const IMG_HUB = '/images/blog/formations-courtes-professionnalisantes-bordeaux-lormont.png'
const IMG_GOOGLE = '/images/blog/formations-courtes-catalogue-google.jpg'
const IMG_EQUIPE = '/images/blog/quelle-formation-courte-equipe-banniere.jpg'

function contactCourte(message) {
  return buildContactHref({ sujetContact: CONTACT_SUJET_COURTE, message })
}

function contactCip(message) {
  return buildContactHref({ sujetContact: 'formation-cip', message })
}

export const ARTICLES_CIP_COURTES_NOV = [
  {
    id: 73,
    slug: 'formations-courtes-professionnalisantes-bordeaux-lormont',
    isoDate: '2026-11-24',
    date: '24 novembre 2026',
    title: 'Formations courtes professionnalisantes à Bordeaux : 7 parcours pour renforcer les compétences de vos équipes',
    excerpt:
      'Sept formations de 11 à 21 heures à Lormont : relation entreprise, recrutement, numérique et IA. Inter ou intra, tarifs publics de 715 € à 1 365 € TTC.',
    metaTitle: 'Formations courtes professionnalisantes à Bordeaux | ATIPIK RH',
    metaDescription:
      "Formations courtes professionnalisantes à Bordeaux et Lormont : 7 parcours de 11 à 21 h pour l'insertion, le recrutement, le numérique et l'IA.",
    keywords:
      'formations courtes professionnalisantes Bordeaux, formation courte Lormont, catalogue formations courtes Atipik RH',
    image: IMG_HUB,
    imageAlt: 'Sept formations courtes ATIPIK RH à Lormont : insertion, RH, recrutement, numérique, IA',
    formationHref: '/formations/courtes-professionnalisantes',
    formationLabel: 'Catalogue des formations courtes',
    contactHref: contactCourte('Demande d\'information : catalogue des formations courtes professionnalisantes.'),
    reunionHref: '/formations/courtes-professionnalisantes',
    relatedHref: '/blog/quelle-formation-courte-choisir-equipe',
    relatedLabel: 'Quelle formation courte choisir pour son équipe',
    ctaLabel: 'Demander un devis pour votre équipe',
  },
  {
    id: 72,
    slug: 'reunion-information-formation-cip-lormont',
    isoDate: '2026-11-26',
    date: '26 novembre 2026',
    title: 'Réunion d\'information CIP à Lormont : comprendre le métier avant de candidater',
    excerpt:
      'Dates, présentiel ou distanciel, et questions à poser avant de déposer un dossier pour la session CIP du 22 mars 2027.',
    metaTitle: 'Réunion d\'information formation CIP Lormont | ATIPIK RH',
    metaDescription:
      'Réunions d\'information CIP à Lormont et en visio : dates, contenu et inscription avant la session du 22 mars 2027.',
    keywords: 'réunion information CIP, formation CIP Lormont, inscription réunion Atipik RH',
    image: '/images/blog/reunion-information-formation-cip-lormont.png',
    imageAlt: 'Formation CIP à Lormont : candidatures ouvertes, réunion d\'information ATIPIK RH',
    formationHref: '/formations/cip',
    formationLabel: 'Fiche formation CIP',
    contactHref: contactCip('Je souhaite des informations sur les réunions d\'information CIP.'),
    reunionHref: buildReunionHref('CIP'),
    relatedHref: '/blog/formation-cip-bordeaux-session-septembre-2026',
    relatedLabel: 'Session CIP mars 2027 à Lormont',
    ctaLabel: 'S\'inscrire à une réunion d\'information',
  },
  {
    id: 71,
    slug: 'financer-formation-cip-bordeaux-2027',
    isoDate: '2026-12-01',
    date: '1er décembre 2026',
    title: 'Financer sa formation CIP à Bordeaux : CPF, AIF, Transition Pro et étude de dossier',
    excerpt:
      'Tarif public 9 100 € TTC pour le titre CIP RNCP37274. CPF, AIF, Transition Pro, OPCO : chaque dossier dépend des règles du financeur.',
    metaTitle: 'Financer sa formation CIP à Bordeaux | ATIPIK RH',
    metaDescription:
      'Formation CIP à Lormont : 9 100 € TTC. CPF, France Travail, OPCO ou Transitions Pro. Session du 22 mars au 22 octobre 2027.',
    keywords: 'financer formation CIP, CPF formation CIP Bordeaux, AIF CIP, tarif formation CIP 9100',
    image: '/images/blog/formation-cip-bordeaux-session-mars-2027.jpg',
    imageAlt: 'Formation CIP à Bordeaux, session mars 2027 à Lormont — financement et candidatures',
    formationHref: '/formations/cip',
    formationLabel: 'Fiche formation CIP',
    contactHref: contactCip('Je souhaite une étude de financement pour la formation CIP.'),
    reunionHref: buildReunionHref('CIP'),
    relatedHref: '/financement',
    relatedLabel: 'Page financement ATIPIK RH',
    ctaLabel: 'Demander une étude de financement',
  },
  {
    id: 70,
    slug: 'session-prevenir-discriminations-recrutement-decembre-2026',
    isoDate: '2026-12-03',
    date: '3 décembre 2026',
    title: 'Prévenir les discriminations au recrutement : session de décembre 2026 à Lormont',
    excerpt:
      'Formation obligatoire de 11 heures : 3 décembre en présentiel, 10 décembre à distance. Tarif public 990 € TTC par stagiaire.',
    metaTitle: 'Formation non-discrimination recrutement, session décembre | ATIPIK RH',
    metaDescription:
      'Session décembre 2026 : prévenir les discriminations dans le recrutement, 11 h à Lormont. Présentiel le 3, distanciel le 10. Devis intra possible.',
    keywords: 'formation non-discrimination recrutement, obligation recruteurs, session décembre Lormont',
    image: IMG_GOOGLE,
    imageAlt: 'Formations courtes professionnalisantes ATIPIK RH à Lormont, Bordeaux Métropole',
    formationHref: '/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif',
    formationLabel: 'Prévenir les discriminations dans le recrutement',
    contactHref: getFormationContactHref('renforcer-pratique-recrutement-inclusif'),
    reunionHref: '/formations/courtes-professionnalisantes',
    relatedHref: '/blog/recrutement-inclusif-7-erreurs-perdre-candidats',
    relatedLabel: 'Sept erreurs qui font perdre de bons candidats',
    ctaLabel: 'Demander un devis pour votre équipe',
  },
  {
    id: 69,
    slug: 'session-developper-relation-entreprise-decembre-2026',
    isoDate: '2026-12-08',
    date: '8 décembre 2026',
    title: 'Développer la relation entreprise en insertion : session de décembre 2026',
    excerpt:
      '21 heures : 7 et 8 décembre en présentiel, 14 décembre à distance. Tarif public 1 365 € TTC. Contacter les employeurs et proposer des candidats.',
    metaTitle: 'Formation relation entreprise insertion, décembre 2026 | ATIPIK RH',
    metaDescription:
      'Session 7, 8 et 14 décembre 2026 à Lormont : développer la relation entreprise en insertion, 21 h, 1 365 € TTC.',
    keywords: 'formation relation entreprise insertion, session décembre CIP, prospection employeurs Lormont',
    image: IMG_GOOGLE,
    imageAlt: 'Formation relation entreprise à Lormont — ATIPIK RH Bordeaux Métropole',
    formationHref: '/formations/professionnalisantes/developper-relation-entreprise',
    formationLabel: 'Développer la relation entreprise',
    contactHref: getFormationContactHref('developper-relation-entreprise'),
    reunionHref: '/formations/courtes-professionnalisantes',
    relatedHref: '/blog/relation-entreprise-insertion-partenariat-durable',
    relatedLabel: 'Du contact ponctuel au partenariat durable',
    ctaLabel: 'Organiser une formation pour son équipe',
  },
  {
    id: 68,
    slug: 'session-renforcer-pratiques-recrutement-decembre-2026',
    isoDate: '2026-12-10',
    date: '10 décembre 2026',
    title: 'Renforcer ses pratiques de recrutement : session de décembre 2026 à Lormont',
    excerpt:
      '11 heures en mixed learning. Session de décembre : 3 décembre en présentiel et 10 décembre à distance. Tarif public 715 € TTC.',
    metaTitle: 'Formation pratiques de recrutement, session décembre | ATIPIK RH',
    metaDescription:
      'Renforcer ses pratiques de recrutement, 11 h, 715 € TTC. Session décembre 2026 à Lormont. Intra sur étude.',
    keywords: 'formation pratiques recrutement, diversité RH, session décembre Atipik RH',
    image: IMG_EQUIPE,
    imageAlt: 'Quelle formation courte pour votre équipe RH — ATIPIK RH Lormont',
    formationHref: '/formations/professionnalisantes/renforcer-pratique-recrutement-diversite',
    formationLabel: 'Renforcer ses pratiques de recrutement',
    contactHref: getFormationContactHref('renforcer-pratique-recrutement-diversite'),
    reunionHref: '/formations/courtes-professionnalisantes',
    relatedHref: '/blog/former-recruteurs-diversite-plan-action',
    relatedLabel: 'Former ses recruteurs à la diversité',
    ctaLabel: 'Demander un devis intra',
  },
  {
    id: 67,
    slug: 'session-recruter-insertion-entreprises-decembre-2026',
    isoDate: '2026-12-15',
    date: '15 décembre 2026',
    title: 'Recruter en insertion avec les entreprises : session de décembre 2026',
    excerpt:
      '21 heures : 7 et 8 décembre en présentiel, 14 décembre en visio. Tarif public 1 365 € TTC. Intra possible pour une équipe.',
    metaTitle: 'Formation recruter en insertion, session décembre | ATIPIK RH',
    metaDescription:
      'Session décembre 2026 à Lormont : recruter en insertion avec les entreprises, 21 h, 1 365 € TTC par stagiaire.',
    keywords: 'formation recrutement insertion, session décembre, entretien tripartite Lormont',
    image: IMG_GOOGLE,
    imageAlt: 'Formations courtes ATIPIK RH Lormont : recruter en insertion, 11 à 21 heures',
    formationHref: '/formations/professionnalisantes/recruter-insertion-entreprises',
    formationLabel: 'Recruter en insertion avec les entreprises',
    contactHref: getFormationContactHref('recruter-insertion-entreprises'),
    reunionHref: '/formations/courtes-professionnalisantes',
    relatedHref: '/blog/recruter-en-insertion-parcours-entreprise-candidat',
    relatedLabel: 'Construire un parcours d\'insertion qui tient',
    ctaLabel: 'Demander un devis pour une équipe',
  },
  {
    id: 66,
    slug: 'conditions-inscription-formation-cip-lormont',
    isoDate: '2026-12-17',
    date: '17 décembre 2026',
    title: 'Conditions d\'inscription à la formation CIP : enquêtes métiers, dossier et test rédactionnel',
    excerpt:
      'Deux enquêtes ou une immersion, connaissances rédactionnelles, entretien et test. Comment constituer un dossier pour la session de mars 2027.',
    metaTitle: 'Conditions d\'inscription formation CIP Lormont | ATIPIK RH',
    metaDescription:
      'Candidater à la formation CIP : enquêtes métiers, immersion, test rédactionnel et dossier. Session du 22 mars 2027 à Lormont.',
    keywords: 'conditions inscription CIP, enquêtes métiers formation CIP, dossier candidature CIP',
    image: '/images/blog/conditions-inscription-formation-cip-lormont.jpg',
    imageAlt: 'Formation CIP, candidatures ouvertes — 22 mars au 22 octobre 2027, Lormont',
    formationHref: '/formations/cip/conditions-inscription',
    formationLabel: 'Conditions d\'inscription CIP',
    contactHref: contactCip('Je souhaite des précisions sur les conditions d\'entrée de la formation CIP.'),
    reunionHref: buildReunionHref('CIP'),
    relatedHref: '/blog/formation-cip-bordeaux-session-septembre-2026',
    relatedLabel: 'Session CIP mars 2027',
    ctaLabel: 'Être rappelé pour étudier mon dossier',
  },
  {
    id: 65,
    slug: 'session-renforcer-partenariat-entreprises-decembre-2026',
    isoDate: '2026-12-22',
    date: '22 décembre 2026',
    title: 'Renforcer le partenariat avec les entreprises : session de décembre 2026',
    excerpt:
      '21 heures : 7 et 8 décembre en présentiel, 14 décembre à distance. Clarifier l\'offre et valoriser le partenariat. 1 365 € TTC.',
    metaTitle: 'Formation partenariat entreprises insertion, décembre | ATIPIK RH',
    metaDescription:
      'Session décembre 2026 : renforcer le partenariat avec les entreprises, 21 h à Lormont, 1 365 € TTC.',
    keywords: 'formation partenariat entreprises, valoriser offre insertion, session décembre Lormont',
    image: IMG_GOOGLE,
    imageAlt: 'Formations courtes professionnalisantes à Lormont — partenariat entreprises',
    formationHref: '/formations/professionnalisantes/renforcer-relation-entreprise',
    formationLabel: 'Renforcer le partenariat avec les entreprises',
    contactHref: getFormationContactHref('renforcer-relation-entreprise'),
    reunionHref: '/formations/courtes-professionnalisantes',
    relatedHref: '/blog/relation-entreprise-insertion-partenariat-durable',
    relatedLabel: 'Passer du contact au partenariat durable',
    ctaLabel: 'Organiser une formation pour son équipe',
  },
  {
    id: 64,
    slug: 'pedagogie-au-plus-pres-du-reel-formation-cip',
    isoDate: '2026-12-24',
    date: '24 décembre 2026',
    title: '« Au plus près du réel » : comment se forme-t-on CIP chez ATIPIK RH ?',
    excerpt:
      'Formation-action, mises en situation, théâtre, stage de 385 heures et groupe restreint à Lormont, pour le titre RNCP37274.',
    metaTitle: 'Pédagogie formation CIP Lormont : au plus près du réel | ATIPIK RH',
    metaDescription:
      'Pédagogie CIP à Lormont : formation-action, stage 385 h, mises en situation et groupe de 8 à 15. Session mars 2027.',
    keywords: 'pédagogie formation CIP, au plus près du réel, stage CIP 385 heures, Atipik RH Lormont',
    image: '/images/blog/pedagogie-au-plus-pres-du-reel-formation-cip.jpg',
    imageAlt: 'Groupe en formation CIP au centre ATIPIK RH de Lormont',
    formationHref: '/formations/cip',
    formationLabel: 'Fiche formation CIP',
    contactHref: contactCip('Je souhaite en savoir plus sur la pédagogie de la formation CIP.'),
    reunionHref: buildReunionHref('CIP'),
    relatedHref: '/blog/formation-cip-bordeaux-session-septembre-2026',
    relatedLabel: 'Session CIP du 22 mars 2027',
    ctaLabel: 'S\'inscrire à une réunion d\'information',
  },
  {
    id: 63,
    slug: 'session-essentiels-numerique-janvier-2027',
    isoDate: '2026-12-29',
    date: '29 décembre 2026',
    title: 'Les essentiels du numérique : sessions de janvier et février 2027 à Lormont',
    excerpt:
      '14 heures en présentiel. Prochaines sessions : 25-26 janvier et 7-8 février 2027. Tarif public 970 € TTC par stagiaire.',
    metaTitle: 'Formation essentiels du numérique, sessions 2027 | ATIPIK RH',
    metaDescription:
      'Essentiels du numérique à Lormont : 14 h, 970 € TTC. Sessions 25-26 janvier et 7-8 février 2027.',
    keywords: 'formation numérique accompagnement, essentiels du numérique Lormont, session janvier 2027',
    image: IMG_EQUIPE,
    imageAlt: 'Formation courte outils numériques pour une équipe — ATIPIK RH',
    formationHref: '/formations/professionnalisantes/essentiels-du-numerique',
    formationLabel: 'Les essentiels du numérique',
    contactHref: getFormationContactHref('essentiels-du-numerique'),
    reunionHref: '/formations/courtes-professionnalisantes',
    relatedHref: '/blog/essentiels-numerique-professionnels-accompagnement',
    relatedLabel: 'Les essentiels du numérique pour l\'accompagnement',
    ctaLabel: 'Recevoir le programme et les tarifs',
  },
  {
    id: 62,
    slug: 'session-ia-accompagnement-janvier-2027',
    isoDate: '2026-12-31',
    date: '31 décembre 2026',
    title: 'L\'IA au service de l\'accompagnement : sessions de janvier et février 2027',
    excerpt:
      '14 heures en présentiel à Lormont. Sessions 21-22 janvier, 28-29 janvier et 15-16 février 2027. Tarif public 1 090 € TTC.',
    metaTitle: 'Formation IA accompagnement, sessions 2027 | ATIPIK RH',
    metaDescription:
      'Formation IA et accompagnement à Lormont : 14 h, 1 090 € TTC. Sessions janvier et février 2027.',
    keywords: 'formation IA accompagnement, session janvier 2027, IA insertion Lormont',
    image: IMG_EQUIPE,
    imageAlt: 'Quelle formation courte IA pour votre équipe — ATIPIK RH Lormont',
    formationHref: '/formations/professionnalisantes/intelligence-artificielle-accompagnement',
    formationLabel: 'L\'IA au service de l\'accompagnement',
    contactHref: getFormationContactHref('intelligence-artificielle-accompagnement'),
    reunionHref: '/formations/courtes-professionnalisantes',
    relatedHref: '/blog/ia-accompagnement-usages-sans-perdre-humain',
    relatedLabel: 'Usages de l\'IA sans perdre l\'humain',
    ctaLabel: 'Organiser une formation IA pour son équipe',
  },
  {
    id: 61,
    slug: 'formation-courte-intra-ou-inter-equipe',
    isoDate: '2027-01-05',
    date: '5 janvier 2027',
    title: 'Formation courte intra ou inter : quel format pour votre équipe ?',
    excerpt:
      'Inter : tarif public par stagiaire. Intra : programme adapté, devis selon l\'effectif. Comment choisir à Lormont.',
    metaTitle: 'Formation courte intra ou inter entreprise | ATIPIK RH',
    metaDescription:
      'Intra ou inter pour une formation courte à Lormont : tarifs publics de 715 € à 1 365 € TTC, intra sur étude.',
    keywords: 'formation intra entreprise Bordeaux, formation inter stagiaire, devis formation équipe RH',
    image: IMG_EQUIPE,
    imageAlt: 'Quelle formation courte pour votre équipe — intra ou inter, ATIPIK RH',
    formationHref: '/formations/courtes-professionnalisantes',
    formationLabel: 'Catalogue des formations courtes',
    contactHref: contactCourte('Je souhaite comparer un format inter et un format intra pour mon équipe.'),
    reunionHref: '/formations/courtes-professionnalisantes',
    relatedHref: '/blog/quelle-formation-courte-choisir-equipe',
    relatedLabel: 'Quelle formation courte choisir',
    ctaLabel: 'Demander un devis intra',
  },
  {
    id: 60,
    slug: 'financer-formation-courte-opco-employeur',
    isoDate: '2027-01-07',
    date: '7 janvier 2027',
    title: 'Financer une formation courte : OPCO, employeur, FAF ou autofinancement',
    excerpt:
      'Les formations courtes d\'ATIPIK RH se chiffrent de 715 € à 1 365 € TTC en inter. La prise en charge n\'est jamais automatique.',
    metaTitle: 'Financer une formation courte professionnelle | ATIPIK RH',
    metaDescription:
      'OPCO, plan de développement des compétences, FAF ou autofinancement pour une formation courte à Lormont. Étude de dossier.',
    keywords: 'financer formation courte, OPCO formation RH, tarif formation courte 715 1365',
    image: IMG_GOOGLE,
    imageAlt: 'Formations courtes ATIPIK RH : tarifs à partir de 715 € TTC, Lormont',
    formationHref: '/formations/courtes-professionnalisantes',
    formationLabel: 'Catalogue des formations courtes',
    contactHref: contactCourte('Je souhaite une étude de financement pour une formation courte.'),
    reunionHref: '/formations/courtes-professionnalisantes',
    relatedHref: '/financement',
    relatedLabel: 'Page financement',
    ctaLabel: 'Demander une étude de financement',
  },
  {
    id: 59,
    slug: 'formations-courtes-missions-locales-siae',
    isoDate: '2027-01-12',
    date: '12 janvier 2027',
    title: 'Formations courtes pour missions locales et SIAE : relation entreprise et recrutement',
    excerpt:
      'Trois modules de 21 heures pour les équipes d\'insertion : prospecter, structurer le partenariat, recruter avec les employeurs.',
    metaTitle: 'Formations courtes missions locales et SIAE | ATIPIK RH',
    metaDescription:
      'Relation entreprise, partenariat et recrutement en insertion : formations courtes de 21 h à Lormont pour missions locales et SIAE.',
    keywords: 'formation mission locale, formation SIAE, relation entreprise insertion, CIP équipe',
    image: IMG_HUB,
    imageAlt: 'Sept formations courtes pour l\'insertion et le recrutement — ATIPIK RH',
    formationHref: '/formations/courtes-professionnalisantes',
    formationLabel: 'Catalogue des formations courtes',
    contactHref: contactCourte('Je représente une mission locale ou une SIAE et je souhaite former une équipe.'),
    reunionHref: '/formations/courtes-professionnalisantes',
    relatedHref: '/blog/formations-courtes-professionnalisantes-bordeaux-lormont',
    relatedLabel: 'Les 7 formations courtes à Lormont',
    ctaLabel: 'Demander un devis pour votre équipe',
  },
]

export const SLUGS_CIP_COURTES_NOV = ARTICLES_CIP_COURTES_NOV.map((a) => a.slug)

export function toListingNov(article) {
  return {
    id: article.id,
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    image: article.image,
    imageAlt: article.imageAlt,
    date: article.date,
    isoDate: article.isoDate,
    readTime: '9 min',
    author: 'Vanessa NOAH EWODO',
    category: 'Formations',
    keywords: article.keywords,
    seo: {
      metaTitle: article.metaTitle,
      metaDescription: article.metaDescription,
      canonicalPath: `/blog/${article.slug}`,
      secondaryKeywords: [article.keywords.split(', ')[0]],
    },
  }
}

const REASSURANCE_NOV =
  'Échange sans engagement. Nous étudions votre besoin et revenons vers vous.'

function isArticleCip(article) {
  return article.slug.includes('cip') || article.slug.includes('pedagogie-au-plus-pres')
}

export function reunionLabelNov(article) {
  return isArticleCip(article) ? 'Réunion d\'information' : 'Catalogue des formations courtes'
}

export function toConversionNov(article) {
  const cip = isArticleCip(article)
  return {
    promise:
      article.promise ||
      (cip
        ? 'Échangez sur la formation CIP à Lormont : session, conditions et financement.'
        : 'Demandez un devis pour une formation courte, en inter ou en intra.'),
    ctaLabel: article.ctaLabel,
    formationHref: article.formationHref,
    formationLabel: article.formationLabel,
    contactHref: article.contactHref,
    reunionHref: article.reunionHref,
    relatedHref: article.relatedHref,
    relatedLabel: article.relatedLabel,
    message: `Demande via l'article : ${article.title}`,
    reassurance: REASSURANCE_NOV,
    reunionLabel: reunionLabelNov(article),
  }
}

export function toInternalLinksNov(article) {
  return [
    { label: article.formationLabel, href: article.formationHref, type: 'formation' },
    { label: article.ctaLabel, href: article.contactHref, type: 'contact' },
    { label: reunionLabelNov(article), href: article.reunionHref, type: 'contact' },
    { label: article.relatedLabel, href: article.relatedHref, type: article.relatedHref.startsWith('/blog/') ? 'article' : 'related' },
  ]
}

export const articlesCipCourtesNovListing = ARTICLES_CIP_COURTES_NOV.map(toListingNov)
