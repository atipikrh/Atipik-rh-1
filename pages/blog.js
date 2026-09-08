import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Clock, ArrowRight, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { getAllArticles } from '../lib/blog/articleRepository';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

    // Articles exemples - pourront être remplacés par une base de données ou CMS plus tard
  const articles = [
    {
      id: 44,
      slug: "10-usages-ia-cip-accompagnement",
      title: "10 usages concrets de l'IA pour les Conseillers en Insertion Professionnelle",
      excerpt: "Préparer un entretien, analyser un CV, créer un atelier : découvrez 10 usages concrets de l'IA pour les CIP et les professionnels de l'accompagnement.",
      image: "/images/blog/10-usages-ia-cip-accompagnement.png",
      imageAlt: "10 usages concrets de l'IA pour les CIP et l'insertion professionnelle — ATIPIK RH Lormont Bordeaux",
      date: "10 septembre 2026",
      readTime: "14 min",
      author: "Vanessa NOAH EWODO",
      category: "Conseils",
      keywords: "usages IA CIP, IA conseiller en insertion professionnelle, intelligence artificielle insertion, outils IA accompagnement, formation ChatGPT CIP, gagner du temps avec l'IA, IA recherche d'emploi",
      seo: {
        metaTitle: "10 usages concrets de l'IA pour les CIP et l'insertion | Atipik RH",
        metaDescription:
          "Préparer un entretien, analyser un CV, créer un atelier : découvrez 10 usages concrets de l'IA pour les CIP et les professionnels de l'accompagnement.",
        canonicalPath: "/blog/10-usages-ia-cip-accompagnement",
        secondaryKeywords: [
          "IA conseiller en insertion professionnelle",
          "intelligence artificielle insertion",
          "outils IA accompagnement",
          "formation ChatGPT CIP",
          "gagner du temps avec l'IA",
          "IA recherche d'emploi",
        ],
      },
      faqItems: [
        {
          question: "Peut-on transmettre des données personnelles d'un bénéficiaire à une IA ?",
          answer:
            "Non, sans cadre autorisé. Il faut anonymiser les informations, ne transmettre que le nécessaire, et toujours faire relire la production par le professionnel avant usage.",
        },
        {
          question: "Quelles sont les dates de la formation IA au service de l'Accompagnement en septembre 2026 ?",
          answer:
            "Deux sessions sont programmées à Lormont : les 21 et 22 septembre 2026, et les 28 et 29 septembre 2026.",
        },
        {
          question: "Quel est le tarif de la formation IA pour les CIP ?",
          answer:
            "Le tarif inter-entreprises est de 1 090 € TTC par participant. Le tarif intra-entreprise est disponible sur devis.",
        },
      ],
      internalLinks: [
        { label: "Formation IA au service de l'Accompagnement", href: "/formations/professionnalisantes/intelligence-artificielle-accompagnement", type: "formation" },
        { label: "Article — Formation IA Bordeaux septembre 2026", href: "/blog/formation-ia-accompagnement-professionnels-bordeaux-2026", type: "article" },
        { label: "Formation IA éthique — accompagner sans perdre l'humain", href: "/blog/formation-ia-ethique-professionnels-accompagnement", type: "article" },
        { label: "Financement 2026", href: "/financement", type: "financement" },
        { label: "Page contact", href: "/contact", type: "contact" },
      ],
    },
    {
      id: 43,
      slug: "formation-ia-ethique-professionnels-accompagnement",
      title: "Formation IA : accompagner mieux, sans perdre l'humain",
      excerpt:
        "Comment intégrer l'IA dans l'accompagnement professionnel avec méthode, éthique et esprit critique ? Les conseils d'ATIPIK RH et sa formation à Lormont.",
      image: "/images/blog/formation-ia-accompagnement-bordeaux-septembre-2026.png",
      imageAlt:
        "Formation IA éthique pour professionnels de l'accompagnement — ATIPIK RH Lormont Bordeaux",
      date: "8 septembre 2026",
      readTime: "11 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords:
        "formation IA professionnels de l'accompagnement, IA accompagnement professionnel, intelligence artificielle CIP, formation IA Bordeaux, IA insertion professionnelle, utiliser ChatGPT au travail, IA éthique RGPD",
      seo: {
        metaTitle: "Formation IA : accompagner mieux, sans perdre l'humain | ATIPIK RH",
        metaDescription:
          "Comment intégrer l'IA dans l'accompagnement avec méthode, éthique et esprit critique ? Formation 14 h à Lormont par ATIPIK RH, organisme Qualiopi.",
        canonicalPath: "/blog/formation-ia-ethique-professionnels-accompagnement",
        secondaryKeywords: [
          "IA accompagnement professionnel",
          "intelligence artificielle CIP",
          "formation IA Bordeaux",
          "IA insertion professionnelle",
          "utiliser ChatGPT au travail",
          "IA éthique RGPD",
        ],
      },
      faqItems: [
        {
          question: "Puis-je saisir des données personnelles d'un bénéficiaire dans un outil d'IA ?",
          answer:
            "En règle générale, non sans précaution. Vérifiez les règles de votre structure, anonymisez ou utilisez un profil fictif pédagogique.",
        },
        {
          question: "L'IA peut-elle décider à la place du conseiller ?",
          answer:
            "Non. L'IA est un copilote : elle propose ou accélère. La décision reste du côté du professionnel.",
        },
        {
          question: "Quel est le tarif de la formation IA d'ATIPIK RH ?",
          answer: "Le tarif inter-entreprises est de 1 090 € TTC par stagiaire pour 14 heures en présentiel à Lormont.",
        },
      ],
      internalLinks: [
        {
          label: "Formation L'intelligence artificielle au service de l'accompagnement",
          href: "/formations/professionnalisantes/intelligence-artificielle-accompagnement",
          type: "formation",
        },
        {
          label: "Article campagne IA — sessions septembre 2026",
          href: "/blog/formation-ia-accompagnement-professionnels-bordeaux-2026",
          type: "article",
        },
        { label: "Financement", href: "/financement", type: "financement" },
        { label: "Page contact", href: "/contact", type: "contact" },
      ],
    },
    {
      id: 42,
      slug: "formation-ia-accompagnement-professionnels-bordeaux-2026",
      title: "L'IA au service de l'Accompagnement : intégrer l'intelligence artificielle avec responsabilité — Sessions septembre 2026 à Bordeaux",
      excerpt: "Intégrez l'IA dans votre pratique d'accompagnement en 2 jours (14h) à Lormont. Sessions 21-22 et 28-29 sept. 2026. 1 090 € TTC. Financement OPCO. Organisme Qualiopi.",
      image: "/images/blog/formation-ia-accompagnement-bordeaux-septembre-2026.png",
      imageAlt: "Formation IA au service de l'Accompagnement — Campagne septembre 2026 — ATIPIK RH Lormont Bordeaux",
      date: "20 juillet 2026",
      readTime: "12 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "formation IA insertion professionnelle, intelligence artificielle accompagnement emploi, formation courte présentiel Bordeaux, financement OPCO formation numérique, ATIPIK RH Lormont",
      seo: {
        metaTitle: "Formation IA pour professionnels de l'accompagnement à Bordeaux | ATIPIK RH",
        metaDescription:
          "Intégrez l'IA dans votre pratique d'accompagnement en 2 jours (14h) à Lormont. Sessions 21-22 et 28-29 sept. 2026. 1 090 € TTC. Financement OPCO.",
        canonicalPath: "/blog/formation-ia-accompagnement-professionnels-bordeaux-2026",
        secondaryKeywords: [
          "formation IA insertion professionnelle",
          "intelligence artificielle accompagnement emploi",
          "formation courte présentiel Bordeaux",
          "financement OPCO formation numérique",
          "ATIPIK RH Lormont",
        ],
      },
      faqItems: [
        {
          question: "Quel est le tarif de la formation IA au service de l'Accompagnement ?",
          answer: "Le tarif inter-entreprises est de 1 090 € TTC par stagiaire. Le tarif intra-entreprise est disponible sur devis.",
        },
        {
          question: "Quelles sont les dates des sessions IA de septembre 2026 ?",
          answer: "Deux sessions sont programmées : du 21 au 22 septembre 2026 et du 28 au 29 septembre 2026, à Lormont.",
        },
        {
          question: "Faut-il des prérequis techniques pour suivre la formation IA ?",
          answer: "Non. La formation est conçue pour des professionnels de terrain sans compétences IT avancées.",
        },
      ],
      internalLinks: [
        { label: "Formation IA au service de l'Accompagnement", href: "/formations/professionnalisantes/intelligence-artificielle-accompagnement", type: "formation" },
        { label: "Formation IA éthique — accompagner sans perdre l'humain", href: "/blog/formation-ia-ethique-professionnels-accompagnement", type: "article" },
        { label: "Formation Les Essentiels du Numérique", href: "/blog/formation-essentiels-numerique-professionnels-accompagnement-bordeaux-2026", type: "article" },
        { label: "Financement 2026", href: "/financement", type: "financement" },
        { label: "Page contact", href: "/contact", type: "contact" },
      ],
    },
    {
      id: 41,
      slug: "formation-essentiels-numerique-professionnels-accompagnement-bordeaux-2026",
      title: "Les Essentiels du Numérique : structurer votre pratique d'accompagnement — Sessions septembre 2026 à Bordeaux",
      excerpt: "Structurez votre environnement numérique en 2 jours (14h) à Lormont. Sessions 7-8 et 14-15 sept. 2026. 970 € TTC. Financement OPCO. Organisme Qualiopi.",
      image: "/images/blog/formation-essentiels-numerique-bordeaux-septembre-2026.png",
      imageAlt: "Formation Les Essentiels du Numérique — Campagne septembre 2026 — ATIPIK RH Lormont Bordeaux",
      date: "16 juillet 2026",
      readTime: "12 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "formation numérique professionnels accompagnement Bordeaux, outils numériques CIP FPA, ATIPIK RH Lormont, essentiels du numérique professionnel, formation courte présentiel Bordeaux, financement OPCO formation numérique",
      seo: {
        metaTitle: "Formation numérique pour professionnels de l'accompagnement à Bordeaux | ATIPIK RH",
        metaDescription:
          "Structurez votre environnement numérique en 2 jours (14h) à Lormont. Sessions 7-8 et 14-15 sept. 2026. 970 € TTC. Financement OPCO. Organisme Qualiopi.",
        canonicalPath: "/blog/formation-essentiels-numerique-professionnels-accompagnement-bordeaux-2026",
        secondaryKeywords: [
          "formation numérique professionnels accompagnement Bordeaux",
          "outils numériques CIP FPA",
          "ATIPIK RH Lormont",
          "essentiels du numérique professionnel",
        ],
      },
      faqItems: [
        {
          question: "Quelle est la durée de la formation Les Essentiels du Numérique chez ATIPIK RH ?",
          answer: "La formation dure 14 heures en présentiel, soit 2 jours, au centre ATIPIK RH à Lormont (33310).",
        },
        {
          question: "Quel est le tarif de la formation Les Essentiels du Numérique ?",
          answer: "Le tarif inter-entreprises est de 970 € TTC par stagiaire. Le tarif intra-entreprise est disponible sur devis.",
        },
        {
          question: "Quelles sont les dates des sessions de septembre 2026 ?",
          answer: "Deux sessions sont programmées : du 7 au 8 septembre 2026 et du 14 au 15 septembre 2026, à Lormont.",
        },
      ],
      internalLinks: [
        { label: "Formation Les Essentiels du Numérique", href: "/formations/professionnalisantes/essentiels-du-numerique", type: "formation" },
        { label: "Formation IA au service de l'Accompagnement", href: "/blog/formation-ia-accompagnement-professionnels-bordeaux-2026", type: "article" },
        { label: "Financement 2026", href: "/financement", type: "financement" },
        { label: "Page contact", href: "/contact", type: "contact" },
      ],
    },
    {
      id: 40,
      slug: "formation-cip-bordeaux-session-septembre-2026",
      title: "Devenir Conseiller en Insertion Professionnelle à Bordeaux : tout savoir sur la session CIP d'Atipik RH (septembre 2026)",
      excerpt: "Rejoignez la formation CIP niveau 5 (RNCP37274) chez Atipik RH à Lormont. Session du 21 sept. 2026 au 23 avr. 2027 — 14 places disponibles. Finançable CPF, AIF, Transition Pro.",
      image: "/images/blog/formation-cip-bordeaux-session-septembre-2026.png",
      imageAlt: "Formation CIP Bordeaux session septembre 2026 — Conseiller en Insertion Professionnelle RNCP37274 — ATIPIK RH Lormont",
      date: "10 juillet 2026",
      readTime: "14 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "formation CIP Bordeaux, formation CIP Lormont, session CIP septembre 2026, conseiller insertion professionnelle Bordeaux, RNCP37274, formation CIP financement CPF, devenir CIP reconversion, formation CIP niveau 5 Gironde",
      seo: {
        metaTitle: "Devenir Conseiller en Insertion Professionnelle à Bordeaux — Formation CIP Atipik RH, session septembre 2026",
        metaDescription:
          "Rejoignez la formation CIP niveau 5 (RNCP37274) chez Atipik RH à Lormont. Session du 21 sept. 2026 au 23 avr. 2027 — 14 places disponibles. Finançable CPF, AIF, Transition Pro.",
        canonicalPath: "/blog/formation-cip-bordeaux-session-septembre-2026",
        secondaryKeywords: [
          "formation CIP Bordeaux",
          "formation CIP Lormont",
          "session CIP septembre 2026",
          "conseiller insertion professionnelle Bordeaux",
          "RNCP37274",
          "formation CIP financement CPF",
        ],
      },
      faqItems: [
        {
          question: "Quand démarre la session CIP septembre 2026 chez Atipik RH ?",
          answer:
            "La session démarre le 21 septembre 2026 et se termine le 23 avril 2027, à Lormont (Bordeaux Métropole), en présentiel.",
        },
        {
          question: "Combien de places sont disponibles pour la formation CIP ?",
          answer:
            "14 places sont ouvertes aux candidatures. Les candidats sont sélectionnés sur dossier et entretien individuel.",
        },
        {
          question: "Quel est le tarif de la formation CIP chez Atipik RH ?",
          answer:
            "Le tarif public est de 9 100 € TTC. Le tarif demandeur d'emploi est de 6 500 € TTC.",
        },
      ],
      internalLinks: [
        { label: "Formation CIP", href: "/formations/cip", type: "formation" },
        { label: "Réunion d'information", href: "/s-inscrire", type: "contact" },
        { label: "Financement 2026", href: "/financement", type: "financement" },
        { label: "Page contact", href: "/contact", type: "contact" },
        {
          label: "Devenir conseiller en insertion professionnelle à Bordeaux",
          href: "/blog/formation-cip-bordeaux-conseiller-insertion-professionnelle",
          type: "article",
        },
      ],
    },
    {
      id: 39,
      slug: "reconversion-professionnelle-juin-2026-financement-cpf",
      title: "Reconversion professionnelle en juin 2026 : pourquoi c'est le meilleur moment pour agir (et comment financer)",
      excerpt: "Reconversion professionnelle en 2026 : pourquoi juin est le bon moment pour agir et comment financer via CPF, France Travail ou l'employeur. Guide ATIPIK RH à Lormont.",
      image: "/images/blog/reconversion-professionnelle-juin-2026-financement-cpf.jpg",
      imageAlt: "Reconversion professionnelle juin 2026 — Guide financement CPF France Travail — ATIPIK RH Lormont Bordeaux",
      date: "16 juin 2026",
      readTime: "13 min",
      author: "Vanessa NOAH EWODO",
      category: "Reconversion",
      keywords: "reconversion professionnelle juin 2026, financement reconversion CPF, bilan de compétences Lormont, formation CIP septembre 2026, reconversion professionnelle Bordeaux, CPF bilan de compétences 2026, France Travail reconversion, reconversion rentrée 2026",
      seo: {
        metaTitle: "Reconversion professionnelle en juin 2026 | ATIPIK RH",
        metaDescription:
          "Reconversion professionnelle en 2026 : pourquoi juin est le bon moment et comment financer via CPF, France Travail ou l'employeur. Guide ATIPIK RH.",
        canonicalPath: "/blog/reconversion-professionnelle-juin-2026-financement-cpf",
        secondaryKeywords: [
          "reconversion professionnelle juin 2026",
          "financement reconversion CPF",
          "bilan de compétences Lormont",
          "formation CIP septembre 2026",
          "reconversion professionnelle Bordeaux",
          "CPF bilan de compétences 2026",
        ],
      },
      faqItems: [
        {
          question: "Pourquoi juin 2026 est-il un bon moment pour une reconversion ?",
          answer:
            "Juin permet de faire le point avant l'été, de candidater aux formations certifiantes de la rentrée de septembre 2026 et de monter les dossiers de financement avec 2 à 6 semaines de marge administrative.",
        },
      ],
      internalLinks: [
        { label: "Bilan de compétences", href: "/bilan-de-competences", type: "service" },
        { label: "Formation CIP", href: "/formations/cip", type: "formation" },
        { label: "Formation FPA", href: "/formations/fpa", type: "formation" },
        { label: "Financement 2026", href: "/financement", type: "financement" },
        { label: "Page contact", href: "/contact", type: "contact" },
      ],
    },
    {
      id: 38,
      slug: "obligation-formation-non-discrimination-recrutement-entreprise",
      title: "Discrimination à l'embauche : ce que la loi impose à votre entreprise (et comment former vos équipes)",
      excerpt: "La loi n°2017-86 oblige les entreprises de +300 salariés à former leurs recruteurs. Obligations, risques et formation en 11h à Lormont.",
      image: "/images/blog/obligation-formation-non-discrimination-recrutement-entreprise.jpg",
      date: "10 juin 2026",
      readTime: "10 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "formation non-discrimination recrutement, formation obligation recruteurs, prévenir discriminations embauche Bordeaux, loi anti-discrimination recrutement entreprise 2026, loi 2017-86 formation recrutement, article L1131-2 Code du travail",
      seo: {
        metaTitle: "Discrimination à l'embauche : obligation de formation recruteurs | Atipik RH",
        metaDescription:
          "La loi n°2017-86 oblige les entreprises de +300 salariés à former leurs recruteurs à la non-discrimination. Obligations, risques et formation ATIPIK RH en 11h à Lormont.",
        canonicalPath: "/blog/obligation-formation-non-discrimination-recrutement-entreprise",
        secondaryKeywords: [
          "formation non-discrimination recrutement",
          "formation obligation recruteurs",
          "prévenir discriminations embauche Bordeaux",
          "loi anti-discrimination recrutement entreprise 2026",
          "loi 2017-86 formation recrutement",
          "article L1131-2 Code du travail",
        ],
      },
      faqItems: [
        {
          question: "Qui est concerné par l'obligation de formation anti-discrimination ?",
          answer:
            "Les entreprises de 300 salariés et plus, ainsi que les acteurs du recrutement, doivent former les personnes impliquées dans le processus de recrutement à la non-discrimination à l'embauche.",
        },
      ],
      internalLinks: [
        { label: "Formation Prévenir les discriminations dans le recrutement", href: "/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif", type: "formation" },
        { label: "Recrutement sans discrimination", href: "/blog/recrutement-sans-discrimination", type: "article" },
        { label: "Page contact", href: "/contact", type: "contact" },
      ],
    },
    {
      id: 37,
      slug: "recruter-par-les-competences-penurie-talents",
      title: "Pénurie de talents : pourquoi les entreprises qui recrutent par les compétences prennent une longueur d'avance",
      excerpt: "En 2026, recruter par les compétences devient un levier prioritaire pour élargir les viviers, réduire les tensions de recrutement et sécuriser les embauches.",
      image: "/images/blog/recrutement-competences-methode-complete-rh-2026.png",
      date: "2 juin 2026",
      readTime: "12 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "recruter par les compétences, recrutement par les compétences, compétences transférables, recrutement sans CV, soft skills recrutement, pénurie de talents, méthode de recrutement, recrutement inclusif, évaluation des compétences",
      seo: {
        metaTitle: "Recruter par les compétences : méthode RH 2026 | Atipik RH",
        metaDescription:
          "Méthode RH concrète : recruter par les compétences, grille d'évaluation, entretiens structurés. Élargissez le vivier et réduisez le turnover.",
        canonicalPath: "/blog/recruter-par-les-competences-penurie-talents",
        secondaryKeywords: [
          "recrutement par les compétences",
          "compétences transférables",
          "recrutement sans CV",
          "soft skills recrutement",
          "évaluation des compétences",
        ],
      },
      faqItems: [
        {
          question: "Quelle différence entre recrutement classique et recrutement par les compétences ?",
          answer: "Le recrutement classique filtre d'abord sur le CV. L'approche compétences part des exigences réelles du poste et évalue des preuves concrètes via une grille structurée.",
        },
      ],
      internalLinks: [
        { label: "Formation Recruter par les compétences", href: "/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif", type: "formation" },
        { label: "Page contact", href: "/contact", type: "contact" },
      ],
    },
    {
      id: 36,
      slug: "formation-fpa-bordeaux-formateur-professionnel-adultes",
      title: "Devenir formateur professionnel d'adultes à Bordeaux : formation FPA, certification et débouchés",
      excerpt: "Devenez formateur professionnel d'adultes à Bordeaux. Formation FPA niveau 5 en 7 mois chez Atipik RH à Lormont : programme, financement CPF, débouchés et prochaines sessions.",
      image: "/images/blog/formation-fpa-bordeaux-formateur-professionnel-adultes.svg",
      date: "17 mai 2026",
      readTime: "14 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "formation formateur professionnel adultes Bordeaux, formation FPA Lormont, devenir formateur reconversion, formation FPA financement CPF, titre professionnel FPA niveau 5 Gironde, formation FPA Bordeaux financement CPF, devenir formateur professionnel adultes reconversion, formation FPA Lormont Gironde, titre professionnel FPA niveau 5 Bordeaux, débouchés formateur professionnel adultes Gironde, où faire formation FPA Bordeaux Métropole, formation FPA CIP Bordeaux cumul certifications",
      seo: {
        metaTitle: "Formation FPA à Bordeaux : certification, débouchés & financement | Atipik RH",
        metaDescription:
          "Devenez formateur professionnel d'adultes à Bordeaux. Formation FPA niveau 5 en 7 mois chez Atipik RH à Lormont : programme, financement CPF, débouchés et prochaines sessions.",
        canonicalPath: "/blog/formation-fpa-bordeaux-formateur-professionnel-adultes",
        secondaryKeywords: [
          "formation formateur professionnel adultes Bordeaux",
          "formation FPA Lormont",
          "devenir formateur reconversion",
          "formation FPA financement CPF",
          "titre professionnel FPA niveau 5 Gironde",
        ],
      },
      faqItems: [
        {
          question: "Où faire une formation FPA à Bordeaux ?",
          answer: "Atipik RH propose une formation FPA à Lormont, dans Bordeaux Métropole, accessible depuis toute la Gironde.",
        },
      ],
      internalLinks: [
        { label: "Page formation FPA", href: "/formations/fpa", type: "formation" },
        { label: "Page formation CIP", href: "/formations/cip", type: "formation" },
        { label: "Page financement", href: "/financement", type: "financement" },
        { label: "Page contact", href: "/contact", type: "contact" },
      ],
    },
    {
      id: 35,
      slug: "bilan-de-competences-lormont-bordeaux",
      title: "Bilan de compétences à Lormont : tout savoir pour faire le point sur votre carrière et financer votre démarche",
      excerpt: "Faites le point sur votre carrière avec un bilan de compétences à Lormont (Bordeaux Métropole). Accompagnement personnalisé, financement CPF, Qualiopi. Atipik RH.",
      image: "/images/blog/bilan-competences-signaux-2026.jpg",
      date: "18 mai 2026",
      readTime: "14 min",
      author: "Vanessa NOAH EWODO",
      category: "Bilan de compétences",
      keywords: "bilan de compétences Bordeaux, bilan de compétences financement CPF, bilan de compétences reconversion Bordeaux, bilan de compétences Gironde, organisme bilan de compétences Qualiopi Lormont, bilan de compétences Lormont financement CPF, bilan de compétences Bordeaux organisme Qualiopi, comment financer bilan de compétences 2026, bilan de compétences reconversion professionnelle Gironde, bilan de compétences salarié CDI confidentiel, où faire bilan de compétences Bordeaux Métropole",
      seo: {
        metaTitle: "Bilan de compétences à Lormont : financement CPF & accompagnement | Atipik RH",
        metaDescription:
          "Faites le point sur votre carrière avec un bilan de compétences à Lormont (Bordeaux Métropole). Accompagnement personnalisé, financement CPF, Qualiopi. Atipik RH.",
        canonicalPath: "/blog/bilan-de-competences-lormont-bordeaux",
        secondaryKeywords: [
          "bilan de compétences Bordeaux",
          "bilan de compétences financement CPF",
          "bilan de compétences reconversion Bordeaux",
          "bilan de compétences Gironde",
          "organisme bilan de compétences Qualiopi Lormont",
        ],
      },
      faqItems: [
        {
          question: "Où faire un bilan de compétences à Lormont ou Bordeaux ?",
          answer: "Atipik RH propose des bilans de compétences à Lormont, au cœur de Bordeaux Métropole, accessibles depuis Bordeaux, Cenon, Mérignac, Pessac et Libourne.",
        },
      ],
      internalLinks: [
        { label: "Page bilan de compétences", href: "/bilan-de-competences", type: "service" },
        { label: "Page formation CIP", href: "/formations/cip", type: "formation" },
        { label: "Page financement", href: "/financement", type: "financement" },
        { label: "Page contact", href: "/contact", type: "contact" },
      ],
    },
    {
      id: 34,
      slug: "formation-cip-bordeaux-conseiller-insertion-professionnelle",
      title: "Devenir conseiller en insertion professionnelle à Bordeaux : formation CIP, débouchés et financement",
      excerpt: "Devenez conseiller en insertion professionnelle à Bordeaux. Formation CIP niveau 5 en 8 mois chez Atipik RH à Lormont : programme, financement CPF, débouchés et prochaines sessions.",
      image: "/images/hero/formations.jpg",
      date: "12 mai 2026",
      readTime: "12 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "formation CIP Lormont, devenir CIP reconversion, formation CIP financement CPF, conseiller insertion professionnelle débouchés, formation CIP niveau 5 Gironde",
      seo: {
        metaTitle: "Formation CIP à Bordeaux : parcours, débouchés & financement | Atipik RH",
        metaDescription:
          "Devenez conseiller en insertion professionnelle à Bordeaux. Formation CIP niveau 5 en 8 mois chez Atipik RH à Lormont : programme, financement CPF, débouchés et prochaines sessions.",
        canonicalPath: "/blog/formation-cip-bordeaux-conseiller-insertion-professionnelle",
        secondaryKeywords: [
          "formation CIP Lormont",
          "devenir CIP reconversion",
          "formation CIP financement CPF",
          "conseiller insertion professionnelle débouchés",
          "formation CIP niveau 5 Gironde",
        ],
      },
      faqItems: [
        {
          question: "Où faire une formation CIP à Bordeaux ?",
          answer: "Atipik RH propose une formation CIP à Lormont, dans Bordeaux Métropole, accessible depuis toute la Gironde.",
        },
      ],
      internalLinks: [
        { label: "Page formation CIP", href: "/formations/cip", type: "formation" },
        { label: "Page bilan de compétences", href: "/bilan-de-competences", type: "service" },
        { label: "Page financement", href: "/financement", type: "financement" },
        { label: "Page contact", href: "/contact", type: "contact" },
      ],
    },
    {
      id: 33,
      slug: "biais-cognitifs-recrutement-methode-bordeaux",
      title: "Biais cognitifs dans le recrutement : comment neutraliser les erreurs de jugement qui vous coûtent cher",
      excerpt: "Les biais cognitifs faussent vos recrutements et exposent votre entreprise à des risques juridiques. Découvrez la méthode pour recruter objectivement à Bordeaux.",
      image: "/images/hero/formations.jpg",
      date: "6 mai 2026",
      readTime: "12 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "biais cognitifs recrutement, recrutement objectif compétences, formation recrutement sans discrimination, grille évaluation recrutement, formation prévention discrimination Bordeaux",
      seo: {
        metaTitle: "Biais cognitifs et recrutement : la méthode | Atipik RH",
        metaDescription:
          "Les biais cognitifs faussent vos recrutements et exposent votre entreprise à des risques juridiques. Découvrez la méthode pour recruter objectivement à Bordeaux.",
        canonicalPath: "/blog/biais-cognitifs-recrutement-methode-bordeaux",
        secondaryKeywords: [
          "biais cognitifs recrutement comment les éviter",
          "formation recrutement objectif compétences Bordeaux",
          "grille évaluation entretien embauche",
          "recrutement non discriminant méthode pratique",
          "formation prévention discrimination recrutement OPCO",
        ],
      },
    },
    {
      id: 32,
      slug: "discrimination-embauche-obligations-legales-risques-solutions-entreprises",
      title: "Discrimination à l'embauche : obligations légales, risques et solutions pour les entreprises",
      excerpt: "Loi 2017-86, 25 critères prohibés, sanctions pénales : tout ce que vos recruteurs doivent maîtriser pour recruter en conformité. Formation disponible à Lormont.",
      image: "/images/blog/discrimination-embauche-obligations-legales-risques-solutions.jpg",
      date: "14 avril 2026",
      readTime: "3 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "discrimination recrutement loi, obligation formation non-discrimination, risque juridique recrutement"
    },
    {
      id: 31,
      slug: "reduire-couts-recrutement-formation-rh",
      title: "Réduire ses coûts de recrutement grâce à la formation",
      excerpt: "Méthode simple pour optimiser le coût par embauche, structurer l'évaluation et améliorer la performance RH grâce à la formation des recruteurs.",
      image: "/images/blog/reduire-couts-recrutement-formation-rh.png",
      date: "18 avril 2026",
      readTime: "9 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "réduire coût recrutement, optimisation recrutement RH, recrutement efficace, stratégie RH performance, formation recruteurs"
    },
    {
      id: 30,
      slug: "comment-reduire-couts-recrutement-30-pourcent-formation-rh",
      title: "Comment réduire vos coûts de recrutement de 30% grâce à la formation RH ?",
      excerpt: "Découvrez comment réduire le coût par embauche, limiter le turnover et accélérer vos recrutements avec une formation RH courte orientée performance et ROI.",
      image: "/images/blog/comment-reduire-couts-recrutement-30-pourcent-formation-rh.png",
      date: "12 avril 2026",
      readTime: "12 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "réduire coût recrutement, cout par embauche, recrutement efficace, performance RH, ROI formation RH, recrutement par les compétences, réduire turnover recrutement, time-to-hire"
    },
    {
      id: 29,
      slug: "recrutement-sans-discrimination",
      title: "Recrutement sans discrimination : sécurisez vos pratiques et améliorez vos performances RH",
      excerpt: "Méthode concrète en 4 étapes pour structurer vos recrutements, réduire les biais, sécuriser vos décisions et améliorer durablement vos résultats RH.",
      image: "/images/hero/formations.jpg",
      date: "8 avril 2026",
      readTime: "10 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "recrutement sans discrimination, biais recrutement, recrutement inclusif, non-discrimination RH, entretien structure, grille de scoring, traçabilité recrutement"
    },
    {
      id: 27,
      slug: "comment-ameliorer-pratiques-recrutement-rh-2026",
      title: "Comment améliorer ses pratiques de recrutement ?",
      excerpt: "Améliorer ses pratiques de recrutement : méthodes, outils et formation RH pour équipes RH et managers recruteurs. Processus, scorecards, KPI et professionnalisation — avec Atipik RH à Lormont (proche Bordeaux).",
      image: "/images/blog/comment-ameliorer-pratiques-recrutement-rh-2026.png",
      date: "15 avril 2026",
      readTime: "14 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "formation recrutement RH, formation techniques recrutement, améliorer recrutement entreprise, comment mener un entretien structuré, étapes processus recrutement efficace, réduire erreurs de recrutement, améliorer qualité embauche, optimiser recrutement entreprise, techniques entretien recrutement, structurer processus recrutement, outils recrutement efficaces, grille entretien recrutement, formation recruteur RH, Atipik RH"
    },
    {
      id: 28,
      slug: "prevenir-discriminations-recrutement-methodes-obligations-outils-rh",
      title: "Prévenir les discriminations à l'embauche : cadre légal, risques et conformité RH",
      excerpt: "Guide conformité pour RH et managers : obligations légales, biais, risques, traçabilité et actions concrètes pour sécuriser vos pratiques de recrutement.",
      image: "/images/blog/prevenir-discriminations-recrutement-methodes-obligations-outils-rh.png",
      date: "10 avril 2026",
      readTime: "12 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "prévenir discriminations embauche, discrimination à l'embauche loi, obligations recruteur discrimination, conformité recrutement RH, risque juridique recrutement, traçabilité recrutement, biais inconscients recrutement, Atipik RH Bordeaux Lormont"
    },
    {
      id: 26,
      slug: "recrutement-competences-methode-complete-rh-2026",
      title: "Recrutement par les compétences : méthode complète pour RH en 2026",
      excerpt: "Méthode opérationnelle en 5 étapes, KPI, erreurs à éviter et mise en œuvre concrète : guide pour les équipes RH et recruteurs qui veulent fiabiliser leurs décisions et renforcer l'inclusion.",
      image: "/images/blog/recrutement-competences-methode-complete-rh-2026.png",
      date: "3 avril 2026",
      readTime: "13 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "recrutement par les compétences, méthode recrutement compétences, soft skills recrutement, recrutement sans CV, recrutement inclusif entreprise, KPI recrutement RH, optimiser recrutement, grille d'entretien compétences, référentiel compétences, formation recruteurs Bordeaux, Atipik RH"
    },
    {
      id: 25,
      slug: "5-signes-temps-faire-bilan-competences",
      title: "5 signes qu'il est temps de faire un bilan de compétences en 2026",
      excerpt: "Manque de motivation, envie de changer, stagnation : découvrez les 5 signes pour savoir quand faire un bilan de compétences à Lormont, finançable CPF en Gironde.",
      image: "/images/blog/bilan-competences-signaux-2026.jpg",
      date: "31 mars 2026",
      readTime: "8 min",
      author: "Vanessa NOAH EWODO",
      category: "Bilan de compétences",
      keywords: "quand faire un bilan de compétences, bilan de compétences Lormont, signes reconversion professionnelle, évolution de carrière 2026, bilan de compétences CPF Gironde, comment savoir si je dois faire un bilan de compétences, signes qu'il faut changer de travail, bilan de compétences quand le faire, reconversion professionnelle quand se lancer"
    },
    {
      id: 24,
      slug: "pourquoi-externaliser-bilan-competences-lormont-cabinet-specialise",
      title: "Pourquoi externaliser son bilan de compétences à Lormont | Atipik RH",
      excerpt: "Découvrez pourquoi faire appel à un cabinet spécialisé comme Atipik RH pour votre bilan de compétences à Lormont. Accompagnement personnalisé et financement CPF.",
      image: "/images/hero/bilan-competences.jpg",
      date: "24 mars 2026",
      readTime: "9 min",
      author: "Vanessa NOAH EWODO",
      category: "Bilan de compétences",
      keywords: "bilan de compétences Lormont, cabinet bilan de compétences, accompagnement reconversion, financement CPF bilan de compétences, bilan de compétences personnalisé"
    },
    {
      id: 23,
      slug: "location-salle-formation-lormont-proche-bordeaux",
      title: "Louer une salle de formation à Lormont (proche Bordeaux)",
      excerpt: "Louez une salle de formation à Lormont, proche Bordeaux : espaces modernes et équipés, réservation simple et flexible. Devis personnalisé sous 24 h. Atipik RH vous accompagne.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop&q=80",
      date: "23 mars 2026",
      readTime: "7 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "location salle de formation Lormont, salle formation Lormont, louer salle Lormont, salle formation Bordeaux rive droite, location salle formation proche Bordeaux, location salle professionnelle Gironde, centre formation Lormont, réserver salle formation rive droite Bordeaux, Atipik RH"
    },
    {
      id: 22,
      slug: "financer-reconversion-professionnelle-2026-cpf-aides-regionales",
      title: "Financer sa reconversion en 2026 : CPF, aides régionales et parcours après 40 ans",
      excerpt: "Salarié en reconversion, demandeur d'emploi ou professionnel de plus de 40 ans : découvrez comment financer une reconversion professionnelle en 2026 grâce au CPF, aux aides régionales et aux autres dispositifs, sans reste à charge.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&q=80",
      date: "24 février 2026",
      readTime: "14 min",
      author: "Vanessa NOAH EWODO",
      category: "Financement",
      keywords: "financement formation 2026, utiliser son CPF 2026, aides régionales formation, financer une reconversion, financement bilan de compétences, reconversion professionnelle après 40 ans financement, changer de métier à 45 ans financement, formation adulte en reconversion financement, comment utiliser son CPF sans reste à charge, formation éligible CPF 2026, CPF pour reconversion professionnelle, cumul CPF et aides régionales, CPF abondement employeur comment faire, aide régionale pour formation adulte, financement formation demandeur d'emploi 2026, aides reconversion professionnelle région, dispositif régional métiers en tension"
    },
    {
      id: 21,
      slug: "vae-ou-bilan-competences-que-choisir-selon-parcours",
      title: "VAE ou bilan de compétences : que choisir selon son parcours ?",
      excerpt: "VAE ou bilan de compétences : découvrez les différences, les avantages et les critères pour choisir le dispositif le plus adapté à votre parcours professionnel.",
      image: "/images/hero/bilan-competences.jpg",
      date: "9 février 2026",
      readTime: "8 min",
      author: "Vanessa NOAH EWODO",
      category: "Bilan de compétences",
      keywords: "VAE, bilan de compétences, reconversion professionnelle, CPF, validation des acquis"
    },
    {
      id: 20,
      slug: "valoriser-competences-cv-parcours-atypique",
      title: "Comment valoriser ses compétences sur un CV quand on a un parcours atypique",
      excerpt: "Parcours atypique ? Apprenez à transformer vos expériences variées en atout sur votre CV. Conseils concrets pour convaincre les recruteurs.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&q=80",
      date: "6 février 2026",
      readTime: "10 min",
      author: "Vanessa NOAH EWODO",
      category: "Conseils",
      keywords: "CV parcours atypique, valoriser compétences CV, CV par compétences, parcours professionnel atypique, CV reconversion, compétences transférables, rédaction CV, conseils CV, recherche emploi parcours atypique, bilan de compétences"
    },
    {
      id: 19,
      slug: "bilan-competences-cadres-plus-40-ans-reconversion",
      title: "Bilan de compétences pour cadres de plus de 40 ans : sécurisez votre reconversion",
      excerpt: "Cadre de plus de 40 ans ? Clarifiez votre projet professionnel grâce à un bilan de compétences pensé pour les profils expérimentés, afin de sécuriser votre reconversion sans repartir de zéro.",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=1200&h=800&fit=crop&q=80",
      date: "27 janvier 2026",
      readTime: "5 min",
      author: "Vanessa NOAH EWODO",
      category: "Bilan de compétences",
      keywords: "bilan de compétences cadre, bilan compétences cadres 40 ans, reconversion cadres expérimentés, bilan compétences senior, accompagnement cadres Atipik RH, bilan de compétences Lyon, bilan de compétences à distance"
    },
    {
      id: 17,
      slug: "devenir-formateur-adultes-sans-etudes-longues-reconversion",
      title: "Devenir formateur pour adultes sans reprendre des études longues : est-ce vraiment possible ?",
      excerpt: "Changer de métier sans repartir sur les bancs de l'université est aujourd'hui une aspiration forte. Parmi les reconversions qui attirent de plus en plus de professionnels expérimentés, le métier de formateur pour adultes occupe une place à part.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop&q=80",
      date: "20 janvier 2026",
      readTime: "15 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "formateur adultes, formation FPA, reconversion formateur, devenir formateur sans diplôme, formation courte formateur, pédagogie adultes, formateur professionnel adultes, reconversion professionnelle formateur"
    },
    {
      id: 16,
      slug: "financer-bilan-competences-2026-cpf-france-travail-employeur",
      title: "Comment financer un bilan de compétences en 2026 ? (CPF, France Travail, employeur)",
      excerpt: "Guide complet pour financer votre bilan de compétences en 2026 : CPF, financement employeur, France Travail, FAF pour indépendants. Toutes les solutions pour lever le frein financier et investir sereinement dans votre avenir professionnel.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&q=80",
      date: "13 janvier 2026",
      readTime: "12 min",
      author: "Vanessa NOAH EWODO",
      category: "Bilan de compétences",
      keywords: "financement bilan compétences, bilan compétences CPF, financer bilan compétences 2026, France Travail bilan compétences, employeur finance bilan compétences, Aide Individuelle Formation, Fonds Assurance Formation indépendant"
    },
    {
      id: 15,
      slug: "portefeuille-competences-insertion-reconversion-employabilite",
      title: "Portefeuille de compétences : un outil stratégique pour l'insertion professionnelle et la reconversion",
      excerpt: "Dans un contexte de mutations du marché du travail, l'insertion professionnelle, la reconversion professionnelle et le bilan de compétences sont devenus des leviers essentiels pour renforcer l'employabilité et sécuriser les parcours.",
      image: "/images/hero/bilan-competences.jpg",
      date: "7 janvier 2026",
      readTime: "5 min",
      author: "Vanessa NOAH EWODO",
      category: "Bilan de compétences",
      keywords: "portefeuille compétences, insertion professionnelle, reconversion professionnelle, employabilité, compétences transférables, CIP, bilan compétences, ATIPIK RH"
    },
    {
      id: 14,
      slug: "difficultes-recrutement-pratiques-marche",
      title: "Et si vos difficultés de recrutement venaient de vos pratiques, pas seulement du marché ?",
      excerpt: "Les candidatures tardent à arriver, les profils ne correspondent pas et la pénurie de talents semble devenir la seule explication. Et si la solution se trouvait aussi dans vos pratiques de recrutement ?",
      image: "/images/hero/formations.jpg",
      date: "23 octobre 2025",
      readTime: "9 min",
      author: "Liliana ALMEIDA",
      category: "Tous",
      keywords: "recrutement inclusif, pratiques de recrutement, pénurie de talents, diversité, inclusion, vivier de candidats"
    },
    {
      id: 18,
      slug: "atipik-rh-espace-emploi-projets-partenariat-mem-wejob-lormont",
      title: "ATIPIK RH, un espace au service de l'emploi et de vos projets - Partenariat MEM we.job",
      excerpt: "Découvrez notre partenariat avec le programme MEM – Métier et Emploi porté par we.job. ATIPIK RH met à disposition ses locaux professionnels à Lormont pour l'accompagnement vers l'emploi, la reconversion et la réflexion professionnelle.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop&q=80",
      date: "25 janvier 2026",
      readTime: "4 min",
      author: "Vanessa NOAH EWODO",
      category: "Partenariat",
      keywords: "location de salle Lormont, espace professionnel Lormont, accompagnement emploi, insertion professionnelle, partenariat we.job, MEM Métier Emploi, centre formation Lormont, salles équipées formation, ateliers professionnels, événements professionnels Bordeaux"
    },
    {
      id: 8,
      slug: "reconversion-professionnelle-comment-reussir-changement-carriere",
      title: "Reconversion professionnelle : comment réussir son changement de carrière ?",
      excerpt: "La reconversion professionnelle concerne de plus en plus de Français. Découvrez les étapes clés, les dispositifs d'accompagnement et les conseils pratiques pour mener à bien votre projet de changement de carrière.",
      image: "/images/hero/bilan-competences.jpg",
      date: "22 janvier 2025",
      readTime: "10 min",
      author: "Vanessa NOAH EWODO",
      category: "Reconversion",
      keywords: "reconversion professionnelle, changement carrière, bilan compétences, formation adulte, projet professionnel, transition professionnelle"
    },
    {
      id: 2,
      slug: "financer-bilan-vae-formation-atipik-rh",
      title: "Financer votre formation professionnelle avec Atipik RH",
      excerpt: "Découvrez tous les dispositifs de financement pour vos projets de formation : CPF, France Travail, OPCO, Transitions Pro. La majorité de nos accompagnements sont finançables à 100% grâce à différents dispositifs.",
      image: "/images/hero/formations.jpg",
      date: "20 janvier 2025",
      readTime: "8 min",
      author: "Vanessa NOAH EWODO",
      category: "Financement",
      keywords: "financement formation, CPF, bilan compétences, VAE, France Travail, OPCO, Transitions Pro, AGEFIPH"
    },
    {
      id: 1,
      slug: "formation-conseiller-insertion-professionnelle-lormont",
      title: "Formation de Conseiller en Insertion Professionnelle à Lormont : débouchés et programme",
      excerpt: "Découvrez notre formation CIP complète, les débouchés professionnels et pourquoi choisir la Gironde pour développer cette expertise.",
      image: "/images/hero/formations.jpg",
      date: "15 janvier 2025",
      readTime: "12 min",
      author: "Brunilda RAFAEL",
      category: "Formations",
      keywords: "formation CIP, conseiller insertion professionnelle, Lormont, débouchés emploi, programme formation"
    },
    {
      id: 9,
      slug: "centre-formation-lormont-rive-droite-bordeaux",
      title: "Centre de formation professionnelle à Lormont : pourquoi choisir la rive droite de Bordeaux ?",
      excerpt: "Découvrez pourquoi notre centre de formation à Lormont offre tous les avantages d'une proximité avec Bordeaux, tout en bénéficiant des atouts spécifiques de la rive droite.",
      image: "/images/hero/formations.jpg",
      date: "10 janvier 2025",
      readTime: "10 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "centre formation Lormont, rive droite Bordeaux, formation professionnelle, avantages géographiques, accessibilité"
    },
    {
      id: 10,
      slug: "vae-valoriser-experience-obtenir-diplome",
      title: "VAE : valoriser son expérience pour obtenir un diplôme",
      excerpt: "La Validation des Acquis de l'Expérience peut vous permettre d'obtenir une certification reconnue.",
      image: "/images/hero/vae.jpg",
      date: "5 janvier 2025",
      readTime: "6 min",
      author: "Stéphanie BRETON",
      category: "VAE",
      keywords: "VAE, validation acquis expérience, diplôme expérience, certification professionnelle"
    },
    {
      id: 11,
      slug: "bilan-competences-lormont-5-etapes-reconversion",
      title: "Bilan de compétences à Lormont : 5 étapes pour réussir sa reconversion professionnelle",
      excerpt: "Découvrez notre méthode en 5 étapes pour construire sereinement votre projet de reconversion grâce au bilan de compétences à Lormont.",
      image: "/images/hero/bilan-competences.jpg",
      date: "28 décembre 2024",
      readTime: "8 min",
      author: "Vanessa NOAH EWODO",
      category: "Bilan de compétences",
      keywords: "bilan compétences Lormont, reconversion professionnelle, 5 étapes, accompagnement carrière"
    },
    {
      id: 13,
      slug: "preparer-entretien-embauche-conseils-experts",
      title: "Préparer son entretien d'embauche : nos conseils d'experts",
      excerpt: "Les techniques et astuces pour réussir ses entretiens et convaincre les recruteurs.",
      image: "/images/hero/vae.jpg",
      date: "15 décembre 2024",
      readTime: "8 min",
      author: "Brunilda RAFAEL",
      category: "Recherche d'emploi",
      keywords: "entretien embauche, conseils recrutement, préparation entretien, techniques recruteurs"
    },
    {
      id: 12,
      slug: "soft-skills-competences-difference",
      title: "Les soft skills : ces compétences qui font la différence",
      excerpt: "Découvrez pourquoi les soft skills — communication, adaptabilité, intelligence émotionnelle — deviennent essentielles pour booster votre carrière en 2025 et comment les développer.",
      image: "/images/hero/bilan-competences.jpg",
      date: "10 juillet 2024",
      readTime: "8 min",
      author: "Brunilda RAFAEL",
      category: "Conseils",
      keywords: "soft skills, compétences comportementales, compétences transversales, évolution professionnelle"
    }
  ];

  const monthMap = {
    janvier: 0,
    fevrier: 1,
    mars: 2,
    avril: 3,
    mai: 4,
    juin: 5,
    juillet: 6,
    aout: 7,
    septembre: 8,
    octobre: 9,
    novembre: 10,
    decembre: 11
  };

  const normalizeMonth = (month) =>
    month
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split(' ');
    const monthIndex = monthMap[normalizeMonth(month)] ?? 0;

    return new Date(Number(year), monthIndex, Number(day));
  };

  const normalizedArticles = getAllArticles(articles);
  const sortedArticles = [...normalizedArticles].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  const categories = ["Tous", "Formations", "Reconversion", "Financement", "VAE", "Bilan de compétences", "Conseils", "Recherche d'emploi", "Partenariat"];

  // Filtrer les articles selon la catégorie sélectionnée
  const filteredArticles = selectedCategory === "Tous" 
    ? sortedArticles 
    : sortedArticles.filter(article => article.category === selectedCategory);

  // Calculs pour la pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Réinitialiser la page lors du changement de catégorie
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Navigation pagination
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Head>
        <title>Blog | Atipik RH - Conseils et actualités formation</title>
        <meta name="description" content="Découvrez nos articles sur la formation professionnelle, la reconversion, le CPF, la VAE et l'accompagnement carrière." />
        <meta name="keywords" content="blog formation, conseils reconversion, CPF, VAE, bilan compétences, Atipik RH" />
        <link rel="canonical" href="https://www.atipikrh.com/blog" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-20"></div>

        {/* Header avec style amélioré */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
          
          {/* Background animé */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="relative inline-block mb-6">
                <h1 className="text-5xl lg:text-7xl font-black text-[#013F63] drop-shadow-sm tracking-tighter">
                  BLOG
                </h1>
                <Image 
                  src="/images/decorations/3 lignes orange.svg" 
                  alt="Élément décoratif"
                  width={45}
                  height={35}
                  className="absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-16"
                />
              </div>
              <p className="text-xl text-[#013F63] font-medium">
                Conseils, actualités et témoignages pour réussir votre parcours professionnel
              </p>
            </div>
          </div>
          {/* Ligne orange à la séparation */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-orange-500 rounded-full z-10"></div>
        </section>

                 {/* Filtres par catégorie */}
         <section className="py-12 bg-white">
           <div className="container mx-auto px-4">
             <div className="max-w-6xl mx-auto">
               <div className="flex flex-wrap justify-center gap-4">
                 {categories.map((category, index) => (
                   <button
                     key={index}
                     onClick={() => handleCategoryChange(category)}
                     className={`px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 shadow-sm hover:shadow-md ${
                       selectedCategory === category
                         ? 'bg-[#013F63] text-white shadow-lg hover:bg-[#012a4a]' 
                         : 'bg-white text-[#013F63] border border-[#013F63] hover:bg-blue-50 hover:border-[#012a4a]'
                     }`}
                   >
                     {category}
                   </button>
                 ))}
               </div>
             </div>
           </div>
         </section>

        {/* Articles du blog */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                  {currentArticles.length > 0 ? (
                   currentArticles.map((article) => (
                     <article key={article.id} className="group h-full">
                       <Link 
                         href={`/blog/${article.slug}`}
                         className="block h-full"
                       >
                         <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col cursor-pointer">
                           {/* Image */}
                           <div className="relative h-48 overflow-hidden flex-shrink-0">
                             <Image
                               src={article.image}
                               alt={article.title}
                               width={400}
                               height={300}
                               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                             />
                             <div className="absolute top-4 left-4">
                               <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                 {article.category}
                               </span>
                             </div>
                           </div>
 
                           {/* Contenu */}
                           <div className="p-6 flex flex-col flex-grow">
                             {/* Métadonnées */}
                             <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 flex-shrink-0">
                               <div className="flex items-center gap-1">
                                 <Calendar className="w-4 h-4" />
                                 <span>{article.date}</span>
                               </div>
                               <div className="flex items-center gap-1">
                                 <Clock className="w-4 h-4" />
                                 <span>{article.readTime}</span>
                               </div>
                             </div>
 
                             {/* Titre */}
                            <h2 className="text-xl font-bold text-[#013F63] mb-3 leading-tight group-hover:text-[#013F63] transition-colors flex-shrink-0 line-clamp-2">
                               {article.title}
                             </h2>
 
                             {/* Extrait */}
                             <p className="text-gray-600 mb-4 leading-relaxed flex-grow line-clamp-3">
                               {article.excerpt}
                             </p>
 
                             {/* Auteur et lien */}
                             <div className="flex items-center justify-between flex-shrink-0 mt-auto">
                               <div className="flex items-center gap-2 text-sm text-gray-500">
                                 <User className="w-4 h-4" />
                                 <span>{article.author}</span>
                               </div>
                               <div className="inline-flex items-center gap-1 text-orange-500 group-hover:text-[#013F63] font-medium text-sm transition-colors">
                                 Lire la suite
                                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                               </div>
                             </div>
                           </div>
                         </div>
                       </Link>
                     </article>
                   ))
                 ) : (
                   <div className="col-span-full text-center py-12">
                     <p className="text-gray-500 text-lg">
                       Aucun article trouvé pour la catégorie "{selectedCategory}".
                     </p>
                   </div>
                 )}
               </div>

              {/* Pagination */}
              {filteredArticles.length > articlesPerPage && (
                <div className="mt-16 flex flex-col items-center gap-6">
                  {/* Informations pagination */}
                  <div className="text-center">
                    <p className="text-gray-600">
                      Affichage de {startIndex + 1} à {Math.min(endIndex, filteredArticles.length)} sur {filteredArticles.length} articles
                    </p>
                  </div>

                  {/* Contrôles navigation */}
                  <div className="flex items-center gap-4">
                    {/* Bouton précédent */}
                    <button
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        currentPage === 1
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-[#013F63] border border-[#013F63] hover:bg-blue-50 hover:shadow-md'
                      }`}
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Précédent
                    </button>

                    {/* Indicateur page */}
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">Page</span>
                      <span className="bg-[#013F63] text-white px-4 py-2 rounded-lg font-semibold">
                        {currentPage}
                      </span>
                      <span className="text-gray-600">sur {totalPages}</span>
                    </div>

                    {/* Bouton suivant */}
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        currentPage === totalPages
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-[#013F63] border border-[#013F63] hover:bg-blue-50 hover:shadow-md'
                      }`}
                    >
                      Suivant
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">
                Besoin d'un accompagnement <span className="text-orange-500 font-brittany">personnalisé</span> ?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Notre équipe d'experts vous accompagne dans votre projet professionnel
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition hover:scale-105"
                >
                  Nous contacter
                </Link>
                <Link 
                  href="/bilan-de-competences" 
                  className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition"
                >
                  Découvrir nos services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
} 