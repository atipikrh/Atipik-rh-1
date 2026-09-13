/**
 * @typedef {Object} BlogArticle
 * @property {number} id
 * @property {string} slug
 * @property {string} title
 * @property {string} excerpt
 * @property {string} content
 * @property {string} image
 * @property {string} date
 * @property {string} readTime
 * @property {string} author
 * @property {string} category
 * @property {string} keywords
 * @property {{metaTitle: string, metaDescription: string, canonicalPath: string, secondaryKeywords: string[]}} seo
 * @property {{question: string, answer: string}[]} faqItems
 * @property {{label: string, href: string, type: string}[]} internalLinks
 */

import { getBlogCanonicalPath } from './canonicalOverrides.js';
import { isBlogArticleLive } from './publicationSchedule.js';
import {
  filterLiveInternalLinks,
  rewriteUnpublishedBlogAnchors,
} from './liveInternalLinks.js';

const LEGACY_FAQ_BY_SLUG = {
  "vae-ou-bilan-competences-que-choisir-selon-parcours": [
    {
      question: "Ai-je un objectif professionnel clair ?",
      answer:
        "Oui, je sais exactement ce que je veux : la VAE est pertinente. Si vous hésitez encore, le bilan de compétences est souvent la première étape.",
    },
    {
      question: "Mon expérience correspond-elle à un diplôme précis ?",
      answer: "Si oui, la VAE est adaptée. Sinon, le bilan de compétences aide à clarifier la suite.",
    },
    {
      question: "Validation ou réflexion : que choisir ?",
      answer: "La VAE valide l'expérience. Le bilan de compétences sert à construire un projet.",
    },
  ],
  "financer-reconversion-professionnelle-2026-cpf-aides-regionales": [
    {
      question: "Peut-on financer une reconversion après 40 ans avec le CPF ?",
      answer:
        "Oui, à condition que la formation soit certifiante et éligible. Le CPF peut être complété par d'autres dispositifs.",
    },
    {
      question: "Comment éviter un reste à charge en 2026 ?",
      answer: "En combinant CPF, aides régionales, employeur et France Travail selon votre situation.",
    },
    {
      question: "Quelle solution pour financer un bilan de compétences ?",
      answer: "Le financement dépend du statut : salarié, indépendant ou demandeur d'emploi.",
    },
  ],
  "location-salle-formation-lormont-proche-bordeaux": [
    {
      question: "Proposez-vous la location de salle à Lormont ?",
      answer: "Oui, Atipik RH propose des salles de formation équipées à Lormont, proche Bordeaux.",
    },
    {
      question: "Quels équipements sont inclus ?",
      answer: "Ecran/vidéoprojecteur, Wi-Fi haut débit, paperboards et mobilier adapté.",
    },
    {
      question: "Quel délai pour un devis ?",
      answer: "Un devis personnalisé est transmis sous 24h.",
    },
  ],
  "recrutement-competences-methode-complete-rh-2026": [
    {
      question: "Qu'est-ce que le recrutement par les compétences ?",
      answer: "Une méthode d'évaluation objective basée sur des compétences observables.",
    },
    {
      question: "Quels KPI suivre ?",
      answer: "Période d'essai validée, turnover, délai de recrutement et satisfaction manager.",
    },
    {
      question: "Comment évaluer les soft skills ?",
      answer: "Avec des comportements observables, mises en situation et grille commune.",
    },
  ],
  "comment-ameliorer-pratiques-recrutement-rh-2026": [
    {
      question: "Comment mener un entretien structuré ?",
      answer: "Questions communes, critères définis à l'avance et notation sur scorecard.",
    },
    {
      question: "Quelles étapes d'un recrutement efficace ?",
      answer: "Clarification du besoin, sourcing, tri objectif, entretien structuré et décision tracée.",
    },
    {
      question: "Comment réduire les erreurs de recrutement ?",
      answer: "Former les recruteurs, standardiser les évaluations et piloter avec des indicateurs.",
    },
  ],
  "recrutement-sans-discrimination": [
    {
      question: "Qu'est-ce qu'un recrutement sans discrimination ?",
      answer: "Une décision fondée sur des critères objectifs, comparables et traçables.",
    },
    {
      question: "Comment réduire les biais en recrutement ?",
      answer: "Entretien structuré, grille de scoring et formation des recruteurs.",
    },
    {
      question: "Pourquoi la traçabilité est-elle importante ?",
      answer: "Elle sécurise juridiquement les décisions et améliore le pilotage RH.",
    },
  ],
  "prevenir-discriminations-recrutement-methodes-obligations-outils-rh": [
    {
      question: "Quelles obligations pour le recruteur en non-discrimination ?",
      answer: "Le recruteur doit fonder ses décisions sur des critères objectifs liés au poste.",
    },
    {
      question: "Quels éléments de preuve conserver ?",
      answer: "Définition du besoin, critères, trame d'entretien, scorecards et justification finale.",
    },
    {
      question: "Quels risques en cas de discrimination ?",
      answer: "Risques juridiques, réputationnels et organisationnels.",
    },
  ],
};

const sanitizeFaqItems = (faqItems = []) =>
  faqItems
    .filter((item) => item?.question && item?.answer)
    .map((item) => ({
      question: String(item.question).trim(),
      answer: String(item.answer).trim(),
    }));

const sanitizeInternalLinks = (internalLinks = []) =>
  internalLinks
    .filter((item) => item?.label && item?.href)
    .map((item) => ({
      label: String(item.label).trim(),
      href: String(item.href).trim(),
      type: String(item.type || "related").trim(),
    }));

const withCmsFields = (article) => {
  const metaTitle = article?.seo?.metaTitle || `${article.title} | Blog Atipik RH`;
  const metaDescription = article?.seo?.metaDescription || article.excerpt;
  const canonicalPath = getBlogCanonicalPath(article.slug) !== `/blog/${article.slug}`
    ? getBlogCanonicalPath(article.slug)
    : article?.seo?.canonicalPath || `/blog/${article.slug}`;
  const secondaryKeywords = Array.isArray(article?.seo?.secondaryKeywords)
    ? article.seo.secondaryKeywords
    : [];
  const faqItems = sanitizeFaqItems(article?.faqItems || LEGACY_FAQ_BY_SLUG[article.slug] || []);
  const internalLinks = filterLiveInternalLinks(
    sanitizeInternalLinks(article?.internalLinks || [])
  );

  return {
    ...article,
    content: rewriteUnpublishedBlogAnchors(article?.content || ''),
    seo: { metaTitle, metaDescription, canonicalPath, secondaryKeywords },
    faqItems,
    internalLinks,
  };
};

const validateArticle = (article) => {
  if (!article?.slug) throw new Error("BlogArticle invalide: slug obligatoire.");
  if (!article?.seo?.metaTitle) throw new Error(`BlogArticle invalide (${article.slug}): metaTitle obligatoire.`);
  if (!article?.seo?.metaDescription)
    throw new Error(`BlogArticle invalide (${article.slug}): metaDescription obligatoire.`);
  return article;
};

export function getAllArticles(rawArticles) {
  const seen = new Set();
  return (rawArticles || [])
    .map(withCmsFields)
    .map(validateArticle)
    .filter((article) => {
      if (seen.has(article.slug)) return false;
      seen.add(article.slug);
      return isBlogArticleLive(article);
    });
}

export function getArticleBySlug(rawArticles, slug) {
  if (!slug) return null;
  const articles = getAllArticles(rawArticles);
  return articles.find((article) => article.slug === slug) || null;
}
