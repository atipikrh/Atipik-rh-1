/**
 * Articles d'octobre 2026 et campagnes SEO / SEA des formations courtes.
 * Les UTM ne servent que les URL finales des annonces, jamais les liens internes.
 */

import { buildContactHref } from './landingHrefs.js'
import { CONTACT_SUJET_COURTE } from './professionnalisantesConfig.js'
import { seaFormationUrl } from './reglagesSea.js'

const REUNION_HREF = '/s-inscrire'

export const REASSURANCE_ECHANGE =
  'Échange sans engagement. Nous étudions votre besoin et revenons vers vous.'

function contactHref(message) {
  return buildContactHref({ sujetContact: CONTACT_SUJET_COURTE, message })
}

const RAW = [
  {
    id: 58,
    slug: 'quelle-formation-courte-choisir-equipe',
    isoDate: '2026-10-29',
    date: '29 octobre 2026',
    readTime: '9 min',
    title:
      'Quelle formation courte choisir pour faire progresser son équipe d\'insertion ou ses recruteurs ?',
    excerpt:
      'Sept modules courts, de 11 à 21 heures, pour un besoin précis. Diagnostic, parcours de deux modules ou session intra : le format se décide avec votre équipe.',
    promise:
      'Identifiez la formation courte qui fait progresser votre équipe, puis étudiez un format intra adapté à vos situations réelles.',
    ctaLabel: 'Prendre rendez-vous pour une étude de besoin',
    keyword: 'formation courte professionnelle équipe',
    metaTitle: 'Formation courte : quel module pour votre équipe ?',
    metaDescription:
      'Sept formations courtes, de 715 € à 1 365 € TTC. Étude de besoin, parcours de deux modules ou session intra sur mesure.',
    formationHref: '/formations/courtes-professionnalisantes',
    formationLabel: 'Catalogue des formations courtes',
    relatedHref: '/blog/comment-ameliorer-pratiques-recrutement-rh-2026',
    relatedLabel: 'Améliorer ses pratiques de recrutement',
    image: '/images/blog/quelle-formation-courte-choisir-equipe.jpg',
    imageAlt:
      'Équipe en formation autour d\'une table : choisir une formation courte professionnelle — ATIPIK RH Lormont',
    message:
      'Je souhaite un rendez-vous pour une étude de besoin sur les formations courtes de mon équipe. Article : Quelle formation courte choisir. Échange sans engagement.',
    keywords:
      'formation courte professionnelle équipe, formation intra entreprise, formations courtes insertion, devis formation RH, Atipik RH Lormont',
    secondaryKeywords: [
      'formation courte équipe insertion',
      'formation intra Bordeaux',
      'parcours formations courtes',
      'devis formation professionnelle',
    ],
  },
  {
    id: 57,
    slug: 'ia-accompagnement-usages-sans-perdre-humain',
    isoDate: '2026-10-27',
    date: '27 octobre 2026',
    readTime: '9 min',
    title:
      'Intelligence artificielle et accompagnement : quels usages professionnels sans perdre l\'humain ?',
    excerpt:
      'Préparer un entretien, reformuler un document, personnaliser un parcours : l\'IA fait gagner du temps si le jugement professionnel reste au centre.',
    promise:
      'Gagnez du temps avec l\'IA sans remplacer l\'écoute, la relation ni la responsabilité du professionnel.',
    ctaLabel: 'Organiser une formation IA pour son équipe',
    keyword: 'formation IA accompagnement',
    metaTitle: 'Formation IA et accompagnement : garder le jugement humain',
    metaDescription:
      'Usages professionnels de l\'IA (entretien, documents, parcours) sans remplacer l\'écoute ni la responsabilité. Devis intra.',
    formationHref: '/formations/professionnalisantes/intelligence-artificielle-accompagnement',
    formationLabel: 'L\'IA au service de l\'accompagnement',
    relatedHref: '/blog/formation-ia-ethique-professionnels-accompagnement',
    relatedLabel: 'IA et éthique de l\'accompagnement',
    image: '/images/blog/ia-accompagnement-usages-sans-perdre-humain.jpg',
    imageAlt:
      'Deux professionnelles en entretien : usages de l\'IA dans l\'accompagnement sans perdre la relation — ATIPIK RH',
    message:
      'Je souhaite organiser une formation IA pour mon équipe d\'accompagnement. Article : Intelligence artificielle et accompagnement. Échange sans engagement.',
    keywords:
      'formation IA accompagnement, intelligence artificielle insertion, IA travail social, formation IA organisme de formation, Atipik RH',
    secondaryKeywords: [
      'formation IA insertion',
      'IA travail social',
      'usages responsables IA accompagnement',
      'formation intelligence artificielle Bordeaux',
    ],
  },
  {
    id: 56,
    slug: 'essentiels-numerique-professionnels-accompagnement',
    isoDate: '2026-10-22',
    date: '22 octobre 2026',
    readTime: '8 min',
    title: 'Les essentiels du numérique pour les professionnels de l\'accompagnement',
    excerpt:
      'Documents, rendez-vous à distance, outils collaboratifs et données confidentielles : une méthode commune évite la surcharge sans bloquer l\'équipe plusieurs semaines.',
    promise:
      'Harmonisez les outils numériques de vos accompagnants sans immobiliser l\'équipe plusieurs semaines.',
    ctaLabel: 'Recevoir le programme et les tarifs',
    keyword: 'formation numérique accompagnement',
    metaTitle: 'Formation numérique pour les professionnels de l\'accompagnement',
    metaDescription:
      'Organiser ses outils, sécuriser les données et gagner du temps. Programme, tarif et prochaine session des essentiels du numérique.',
    formationHref: '/formations/professionnalisantes/essentiels-du-numerique',
    formationLabel: 'Les essentiels du numérique',
    relatedHref: '/blog/formation-essentiels-numerique-professionnels-accompagnement-bordeaux-2026',
    relatedLabel: 'Session des essentiels du numérique à Lormont',
    image: '/images/blog/essentiels-numerique-professionnels-accompagnement.jpg',
    imageAlt:
      'Deux professionnelles en entretien : usages numériques dans l\'accompagnement — ATIPIK RH',
    message:
      'Je souhaite recevoir le programme et les tarifs de la formation Les essentiels du numérique pour mon équipe. Échange sans engagement.',
    keywords:
      'formation numérique accompagnement, essentiels du numérique, outils collaboratifs insertion, données confidentielles accompagnement, Atipik RH',
    secondaryKeywords: [
      'formation numérique professionnels accompagnement',
      'outils collaboratifs insertion',
      'sécuriser données accompagnement',
      'formation numérique Lormont',
    ],
  },
  {
    id: 55,
    slug: 'recruter-par-les-competences-securiser-embauches',
    isoDate: '2026-10-20',
    date: '20 octobre 2026',
    readTime: '10 min',
    title: 'Recruter par les compétences : la méthode concrète pour sécuriser ses embauches',
    excerpt:
      'Partez des tâches du poste, distinguez l\'indispensable de l\'acquérable, et suivez les premiers mois. Une même méthode pour les recruteurs et les managers.',
    promise:
      'Recrutez sur des compétences observables et sécurisez l\'intégration, en inter ou en intra pour toute l\'équipe.',
    ctaLabel: 'Demander un devis pour une équipe',
    keyword: 'recruter par les compétences',
    metaTitle: 'Recruter par les compétences pour sécuriser ses embauches',
    metaDescription:
      'Tâches du poste, critères observables, grille et intégration. Formez recruteurs et managers, en inter ou en intra.',
    formationHref: '/formations/professionnalisantes/recruter-insertion-entreprises',
    formationLabel: 'Recruter en insertion avec les entreprises',
    relatedHref: '/blog/recruter-par-les-competences-penurie-talents',
    relatedLabel: 'Recruter par les compétences face à la pénurie',
    image: '/images/blog/recruter-par-les-competences-securiser-embauches.jpg',
    imageAlt:
      'Équipe en atelier de travail : recruter par les compétences et sécuriser l\'embauche — ATIPIK RH',
    message:
      'Je souhaite un devis pour former une équipe au recrutement par les compétences. Article : Recruter par les compétences. Échange sans engagement.',
    keywords:
      'recruter par les compétences, formation recrutement insertion, grille d\'entretien, intégration embauche, devis intra recrutement',
    secondaryKeywords: [
      'recrutement par les compétences',
      'sécuriser les embauches',
      'grille d\'entretien compétences',
      'formation intra recrutement',
    ],
  },
  {
    id: 54,
    slug: 'former-recruteurs-diversite-plan-action',
    isoDate: '2026-10-15',
    date: '15 octobre 2026',
    readTime: '9 min',
    title: 'Former ses recruteurs à la diversité : obligation, méthode et plan d\'action',
    excerpt:
      'L\'obligation de non-discrimination et la méthode d\'équipe ne sont pas le même module. L\'un sécurise le cadre, l\'autre produit une charte et un plan d\'action.',
    promise:
      'Harmonisez les pratiques de votre équipe : critères objectifs, entretiens sécurisés, plan d\'action mesurable.',
    ctaLabel: 'Demander un devis intra',
    keyword: 'formation recrutement diversité',
    metaTitle: 'Formation recrutement et diversité : obligation et plan d\'action',
    metaDescription:
      'Distinguez l\'obligation de non-discrimination et la méthode d\'équipe. Harmonisez les pratiques et demandez un devis intra.',
    formationHref: '/formations/professionnalisantes/renforcer-pratique-recrutement-diversite',
    formationLabel: 'Renforcer ses pratiques de recrutement',
    relatedHref: '/blog/obligation-formation-non-discrimination-recrutement-entreprise',
    relatedLabel: 'Obligation de formation à la non-discrimination',
    image: '/images/blog/former-recruteurs-diversite-plan-action.jpg',
    imageAlt:
      'Réunion d\'équipe autour d\'une table : former les recruteurs et construire un plan d\'action — ATIPIK RH',
    message:
      'Je souhaite un devis intra pour former mes recruteurs à la diversité et au plan d\'action. Échange sans engagement.',
    keywords:
      'formation recrutement diversité, former ses recruteurs, plan d\'action recrutement, inclusion RH, devis intra',
    secondaryKeywords: [
      'formation diversité recrutement',
      'obligation formation recruteurs',
      'charte recrutement',
      'plan d\'action RH',
    ],
  },
  {
    id: 53,
    slug: 'relation-entreprise-insertion-partenariat-durable',
    isoDate: '2026-10-13',
    date: '13 octobre 2026',
    readTime: '9 min',
    title:
      'Relation entreprise en insertion : comment passer du contact ponctuel au partenariat durable ?',
    excerpt:
      'Moins de contacts dispersés, plus de partenariats lisibles. Cinq étapes pour comprendre le besoin employeur, présenter les compétences et suivre l\'intégration.',
    promise:
      'Passez du contact ponctuel à un partenariat employeur structuré, utile aux parcours et à l\'emploi.',
    ctaLabel: 'Organiser une formation pour son équipe',
    keyword: 'relation entreprise insertion',
    metaTitle: 'Relation entreprise en insertion : du contact au partenariat',
    metaDescription:
      'Cinq étapes pour structurer la relation employeur, valoriser les compétences et sécuriser les parcours. Formation pour votre équipe.',
    formationHref: '/formations/professionnalisantes/renforcer-relation-entreprise',
    formationLabel: 'Renforcer le partenariat avec les entreprises',
    relatedHref: '/blog/difficultes-recrutement-pratiques-marche',
    relatedLabel: 'Difficultés de recrutement : revoir ses pratiques',
    image: '/images/blog/relation-entreprise-insertion-partenariat-durable.jpg',
    imageAlt:
      'Échange professionnel entre deux personnes : partenariat entreprise et insertion — ATIPIK RH',
    message:
      'Je souhaite organiser une formation relation entreprise pour mon équipe. Article : du contact ponctuel au partenariat durable. Échange sans engagement.',
    keywords:
      'relation entreprise insertion, partenariat entreprises, prospection employeurs, chargé de relation entreprise, formation insertion',
    secondaryKeywords: [
      'partenariat entreprises insertion',
      'développer la relation entreprise',
      'chargé de relations entreprises',
      'formation relation employeur',
    ],
  },
  {
    id: 52,
    slug: 'recrutement-inclusif-7-erreurs-perdre-candidats',
    isoDate: '2026-10-08',
    date: '8 octobre 2026',
    readTime: '9 min',
    title: 'Recrutement inclusif : 7 erreurs qui font perdre de bons candidats',
    excerpt:
      'Le profil idéal, les critères flous et le ressenti écartent des personnes qui tiendraient le poste. Sept erreurs fréquentes, et la formation qui les transforme en pratiques.',
    promise:
      'Sept erreurs concrètes font perdre de bons candidats : une formation courte les transforme en pratiques transférables.',
    ctaLabel: 'Demander une formation pour son équipe',
    keyword: 'recrutement inclusif',
    metaTitle: 'Recrutement inclusif : 7 erreurs qui font perdre des candidats',
    metaDescription:
      'Profil idéal, critères flous, ressenti : ces 7 erreurs écartent de bons candidats. Formez votre équipe à prévenir les discriminations.',
    formationHref: '/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif',
    formationLabel: 'Prévenir les discriminations dans le recrutement',
    relatedHref: '/blog/recrutement-sans-discrimination-points-controle',
    relatedLabel: 'Recrutement sans discrimination : 7 points de contrôle',
    image: '/images/blog/recrutement-inclusif-7-erreurs-perdre-candidats.jpg',
    imageAlt:
      'Entretien de recrutement entre deux personnes : éviter les erreurs qui font perdre de bons candidats — ATIPIK RH',
    message:
      'Je souhaite une formation pour mon équipe sur le recrutement inclusif et la prévention des discriminations. Échange sans engagement.',
    keywords:
      'recrutement inclusif, erreurs recrutement, prévenir les discriminations, biais entretien, formation non-discrimination',
    secondaryKeywords: [
      'formation non-discrimination recrutement',
      'erreurs entretien recrutement',
      'perdre de bons candidats',
      'recrutement inclusif entreprise',
    ],
  },
  {
    id: 51,
    slug: 'recruter-en-insertion-parcours-entreprise-candidat',
    isoDate: '2026-10-07',
    date: '7 octobre 2026',
    readTime: '10 min',
    title:
      'Recruter en insertion : comment construire un parcours qui fonctionne pour l\'entreprise et le candidat ?',
    excerpt:
      'Le manque de candidats n\'explique pas tout. Un besoin flou, un entretien peu observable ou une intégration trop courte fragilisent l\'embauche en insertion.',
    promise:
      'Sécurisez vos recrutements en insertion avec une méthode commune à l\'entreprise, au candidat et au prescripteur.',
    ctaLabel: 'Demander un devis intra',
    keyword: 'recrutement en insertion',
    metaTitle: 'Recrutement en insertion : le parcours qui sécurise l\'embauche',
    metaDescription:
      'Besoin mal défini, entretien flou, intégration courte : construisez un parcours d\'insertion utile à l\'entreprise et au candidat. Devis intra.',
    formationHref: '/formations/professionnalisantes/recruter-insertion-entreprises',
    formationLabel: 'Recruter en insertion avec les entreprises',
    relatedHref: '/blog/recrutement-inclusif-objectiver-criteres',
    relatedLabel: 'Objectiver les critères de recrutement',
    image: '/images/blog/recruter-en-insertion-parcours-entreprise-candidat.jpg',
    imageAlt:
      'Professionnelle en entretien de recrutement : parcours d\'insertion pour l\'entreprise et le candidat — ATIPIK RH',
    message:
      'Je souhaite un devis intra pour la formation Recruter en insertion avec les entreprises. Échange sans engagement.',
    keywords:
      'recrutement en insertion, parcours d\'intégration, entretien tripartite, formation recrutement insertion, devis intra',
    secondaryKeywords: [
      'formation recrutement insertion',
      'parcours intégration insertion',
      'entretien tripartite',
      'recruter en insertion entreprise',
    ],
  },
]

function withLinks(article) {
  return {
    ...article,
    reunionHref: REUNION_HREF,
    contactHref: contactHref(article.message),
    reassurance: REASSURANCE_ECHANGE,
    author: 'Vanessa NOAH EWODO',
    category: 'Formations',
  }
}

export const ARTICLES_CA_OCTOBRE = RAW.map(withLinks)

export const SLUGS_CA_OCTOBRE_2026 = ARTICLES_CA_OCTOBRE.map((article) => article.slug)

export function articleCaBySlug(slug) {
  return ARTICLES_CA_OCTOBRE.find((article) => article.slug === slug) || null
}

export function toListing(article) {
  return {
    id: article.id,
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    image: article.image,
    imageAlt: article.imageAlt,
    date: article.date,
    isoDate: article.isoDate,
    readTime: article.readTime,
    author: article.author,
    category: article.category,
    keywords: article.keywords,
    seo: {
      metaTitle: article.metaTitle,
      metaDescription: article.metaDescription,
      canonicalPath: `/blog/${article.slug}`,
      secondaryKeywords: article.secondaryKeywords,
    },
  }
}

export function toConversion(article) {
  return {
    promise: article.promise,
    ctaLabel: article.ctaLabel,
    formationHref: article.formationHref,
    formationLabel: article.formationLabel,
    contactHref: article.contactHref,
    reunionHref: article.reunionHref,
    relatedHref: article.relatedHref,
    relatedLabel: article.relatedLabel,
    message: article.message,
    reassurance: article.reassurance,
  }
}

export function toInternalLinks(article) {
  return [
    { label: article.formationLabel, href: article.formationHref, type: 'formation' },
    { label: article.ctaLabel, href: article.contactHref, type: 'contact' },
    { label: 'Réunion d\'information', href: article.reunionHref, type: 'contact' },
    { label: article.relatedLabel, href: article.relatedHref, type: 'article' },
  ]
}

export const articlesCaOctobreListing = ARTICLES_CA_OCTOBRE.map(toListing)

export const EFFORT_EDITORIAL_OCTOBRE_2026 = [
  { theme: 'Recrutement en insertion et recrutement par les compétences', part: 0.5 },
  { theme: 'Prévention des discriminations et diversité', part: 0.25 },
  { theme: 'Formations IA et numérique', part: 0.15 },
  { theme: 'Relation entreprise et partenariats', part: 0.1 },
]

export const CAMPAGNES_SEA_OCTOBRE_2026 = [
  {
    id: 'recrutement-insertion',
    nom: 'Recrutement en insertion',
    actifAuLancement: false,
    slugDestination: 'recruter-en-insertion-parcours-entreprise-candidat',
    slugLie: 'recruter-par-les-competences-securiser-embauches',
    motsCles: [
      'formation recrutement insertion',
      'recrutement inclusif entreprise',
      'recruter par les compétences',
      'formation recrutement Bordeaux',
    ],
    urlFinale: seaFormationUrl(
      '/formations/professionnalisantes/recruter-insertion-entreprises',
      'recrutement-insertion',
      'recruter-insertion-entreprises'
    ),
  },
  {
    id: 'prevention-discriminations',
    nom: 'Prévention des discriminations',
    actifAuLancement: false,
    slugDestination: 'recrutement-inclusif-7-erreurs-perdre-candidats',
    slugLie: 'former-recruteurs-diversite-plan-action',
    motsCles: [
      'formation non-discrimination recrutement',
      'formation diversité recrutement',
      'obligation formation recruteurs',
      'formation recrutement inclusif',
    ],
    urlFinale: seaFormationUrl(
      '/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif',
      'prevention-discriminations',
      'renforcer-pratique-recrutement-inclusif'
    ),
  },
  {
    id: 'ia-accompagnement',
    nom: 'IA pour l\'accompagnement',
    actifAuLancement: false,
    slugDestination: 'ia-accompagnement-usages-sans-perdre-humain',
    motsCles: [
      'formation IA insertion',
      'formation intelligence artificielle accompagnement',
      'IA travail social',
      'formation IA organisme de formation',
    ],
    urlFinale: seaFormationUrl(
      '/formations/professionnalisantes/intelligence-artificielle-accompagnement',
      'ia-accompagnement',
      'intelligence-artificielle-accompagnement'
    ),
  },
  {
    id: 'offre-intra',
    nom: 'Offre intra',
    actifAuLancement: false,
    slugDestination: 'quelle-formation-courte-choisir-equipe',
    motsCles: [
      'formation intra entreprise Bordeaux',
      'formation équipe insertion',
      'formation équipe RH',
      'formation professionnelle sur mesure',
    ],
    urlFinale: seaFormationUrl(
      '/formations/courtes-professionnalisantes',
      'offre-intra',
      'hub-courtes'
    ),
  },
]
