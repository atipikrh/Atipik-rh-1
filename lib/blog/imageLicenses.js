/**
 * Registre des droits d’usage des visuels liés au blog (vignettes, contenus).
 *
 * Rôle : traçabilité (source, type de licence, articles concernés).
 * Ne remplace pas une preuve juridique : conserver factures / captures hors dépôt si besoin.
 *
 * Fichiers sources des listes d’articles : pages/blog.js, pages/blog/[slug].js
 */

/** Licence générale Unsplash (toutes les URLs images.unsplash.com du site). */
export const unsplashLicense = {
  nom: 'Unsplash License',
  url: 'https://unsplash.com/license',
  note:
    'Usage du site conforme à la licence Unsplash au moment du téléchargement. Créditer le photographe reste une bonne pratique (fiche de chaque photo sur unsplash.com).',
};

/**
 * Photos Unsplash référencées par le blog (segment = partie après /photo- dans l’URL CDN).
 * retrouverLaFiche : rechercher le segment sur unsplash.com pour photographe et lien canonique.
 */
export const unsplashPhotosBlog = [
  {
    segment: '1524178232363-1fb2b075b655',
    slugsArticles: [
      'location-salle-formation-lormont-proche-bordeaux',
      'devenir-formateur-adultes-sans-etudes-longues-reconversion',
    ],
  },
  {
    segment: '1522202176988-66273c2fd55f',
    slugsArticles: [
      'financer-reconversion-professionnelle-2026-cpf-aides-regionales',
      'financer-bilan-competences-2026-cpf-france-travail-employeur',
    ],
  },
  {
    segment: '1454165804606-c3d57bc86b40',
    slugsArticles: ['valoriser-competences-cv-parcours-atypique'],
    remarque:
      'Même fichier utilisé en vignette et dans le corps HTML (balise img) pour cet article.',
  },
  {
    segment: '1544723795-3fb6469f5b39',
    slugsArticles: ['bilan-competences-cadres-plus-40-ans-reconversion'],
  },
  {
    segment: '1521737604893-d14cc237f11d',
    slugsArticles: ['atipik-rh-espace-emploi-projets-partenariat-mem-wejob-lormont'],
  },
  {
    segment: '1600880292203-757bb62b4baf',
    slugsArticles: ['discrimination-embauche-obligations-legales-risques-solutions-entreprises'],
    remarque:
      'Fichier local dérivé de la photo Unsplash (collaboration professionnelle / poignée de main). Crédit photographe : fiche unsplash.com/photos/1600880292203-757bb62b4baf',
  },
  {
    segment: '1573496359142-b8d87734a5a2',
    slugsArticles: ['obligation-formation-non-discrimination-recrutement-entreprise'],
    remarque:
      'Fichier local dérivé de la photo Unsplash (entretien professionnel). Crédit photographe : fiche unsplash.com/photos/1573496359142-b8d87734a5a2',
  },
];

/**
 * Fichiers servis depuis public/ — documenter l’origine (création interne, achat, banque avec licence).
 * statutDocumentaire : "complet" lorsqu’une preuve est archivée hors dépôt ou contrat interne clair.
 */
export const imagesLocalesBlog = [
  {
    chemin: '/images/hero/formations.jpg',
    slugsArticles: [
      'comment-ameliorer-pratiques-recrutement-rh-2026',
      'prevenir-discriminations-recrutement-methodes-obligations-outils-rh',
      'recrutement-competences-methode-complete-rh-2026',
      'financer-bilan-vae-formation-atipik-rh',
      'difficultes-recrutement-pratiques-marche',
      'formation-conseiller-insertion-professionnelle-lormont',
      'centre-formation-lormont-rive-droite-bordeaux',
    ],
    statutDocumentaire: 'a_completer',
    dossierPublic: 'public/images/hero/',
  },
  {
    chemin: '/images/hero/bilan-competences.jpg',
    slugsArticles: [
      'pourquoi-externaliser-bilan-competences-lormont-cabinet-specialise',
      'vae-ou-bilan-competences-que-choisir-selon-parcours',
      'portefeuille-competences-insertion-reconversion-employabilite',
      'bilan-competences-lormont-5-etapes-reconversion',
      'soft-skills-competences-difference',
      'reconversion-professionnelle-comment-reussir-changement-carriere',
    ],
    statutDocumentaire: 'a_completer',
    dossierPublic: 'public/images/hero/',
  },
  {
    chemin: '/images/hero/vae.jpg',
    slugsArticles: ['vae-valoriser-experience-obtenir-diplome', 'preparer-entretien-embauche-conseils-experts'],
    statutDocumentaire: 'a_completer',
    dossierPublic: 'public/images/hero/',
  },
  {
    chemin: '/images/blog/bilan-competences-signaux-2026.jpg',
    slugsArticles: ['5-signes-temps-faire-bilan-competences'],
    statutDocumentaire: 'a_completer',
    dossierPublic: 'public/images/blog/',
  },
  {
    chemin: '/images/blog/formateur-fpa-cta.jpg',
    slugsArticles: ['devenir-formateur-adultes-sans-etudes-longues-reconversion'],
    usage: 'Image inline dans le contenu HTML (CTA formation FPA), pas seulement vignette.',
    statutDocumentaire: 'a_completer',
    dossierPublic: 'public/images/blog/',
  },
  {
    chemin: '/images/blog/prevenir-discriminations-recrutement-methodes-obligations-outils-rh.png',
    slugsArticles: ['prevenir-discriminations-recrutement-methodes-obligations-outils-rh'],
    statutDocumentaire: 'a_completer',
    dossierPublic: 'public/images/blog/',
  },
  {
    chemin: '/images/blog/reconversion-professionnelle-juin-2026-financement-cpf.jpg',
    slugsArticles: ['reconversion-professionnelle-juin-2026-financement-cpf'],
    statutDocumentaire: 'creation_ia_placeholder',
    dossierPublic: 'public/images/blog/',
    note:
      'Visuel hero généré par IA (placeholder) en attendant export Canva ATIPIK_RH_Blog_Reconversion_Juin2026 (1200×630). Remplacer par la version Canva définitive si disponible.',
  },
  {
    chemin: '/images/blog/formation-cip-bordeaux-session-septembre-2026.png',
    slugsArticles: ['formation-cip-bordeaux-session-septembre-2026'],
    statutDocumentaire: 'complet',
    dossierPublic: 'public/images/blog/',
    note:
      'Visuel brand ATIPIK RH — Formation CIP, session septembre 2026 (Lormont, 14 places, démarrage 21/09/2026). Création interne / charte graphique.',
  },
  {
    chemin: '/images/blog/formation-essentiels-numerique-bordeaux-septembre-2026.png',
    slugsArticles: ['formation-essentiels-numerique-professionnels-accompagnement-bordeaux-2026'],
    usage: 'Vignette hero et bannière inline dans le contenu HTML.',
    statutDocumentaire: 'complet',
    dossierPublic: 'public/images/blog/',
    note:
      'Visuel brand ATIPIK RH — Campagne formation Les Essentiels du Numérique, sessions septembre 2026. Création interne / charte graphique.',
  },
  {
    chemin: '/images/blog/formation-ia-accompagnement-bordeaux-septembre-2026.png',
    slugsArticles: [
      'formation-ia-accompagnement-professionnels-bordeaux-2026',
      'formation-ia-ethique-professionnels-accompagnement',
    ],
    usage: 'Vignette hero et bannière inline dans le contenu HTML.',
    statutDocumentaire: 'complet',
    dossierPublic: 'public/images/blog/',
    note:
      'Visuel brand ATIPIK RH — Campagne formation IA au service de l\'Accompagnement, sessions septembre 2026. Réutilisé pour l\'article éthique (8 sept. 2026). Création interne / charte graphique.',
  },
  {
    chemin: '/images/blog/10-usages-ia-cip-accompagnement.png',
    slugsArticles: ['10-usages-ia-cip-accompagnement'],
    usage: 'Vignette hero et bannière inline dans le contenu HTML.',
    statutDocumentaire: 'complet',
    dossierPublic: 'public/images/blog/',
    note:
      'Visuel généré pour l\'article 10 usages IA CIP (publication 10 sept. 2026). Charte ATIPIK RH (navy #013F63, accent orange).',
  },
  {
    chemin: '/images/blog/obligation-formation-non-discrimination-recrutement-entreprise.jpg',
    slugsArticles: ['obligation-formation-non-discrimination-recrutement-entreprise'],
    statutDocumentaire: 'a_completer',
    dossierPublic: 'public/images/blog/',
    note:
      'Téléchargement local depuis Unsplash (licence Unsplash) — photo id 1573496359142-b8d87734a5a2 ; conserver attribution sur la fiche Unsplash si publication externe.',
  },
  {
    chemin: '/images/blog/discrimination-embauche-obligations-legales-risques-solutions.jpg',
    slugsArticles: ['discrimination-embauche-obligations-legales-risques-solutions-entreprises'],
    statutDocumentaire: 'a_completer',
    dossierPublic: 'public/images/blog/',
    note:
      'Téléchargement local depuis Unsplash (licence Unsplash) — photo d’id 1600880292203-757bb62b4baf ; conserver attribution sur la fiche Unsplash si publication externe.',
  },
  {
    chemin: '/images/decorations/3 lignes orange.svg',
    slugsArticles: [],
    usage: 'Décoration liste des articles (pages/blog.js), pas vignette article.',
    statutDocumentaire: 'a_completer',
    dossierPublic: 'public/images/decorations/',
  },
];

/**
 * Candidats analysés hors dépôt (copies Cursor / brouillons) — ne pas publier sans provenance.
 * Décisions issues de l’audit qualitatif (style, risque typique de banque payante).
 */
export const candidatsWorkspaceNonValides = [
  {
    id: 'vector-equipe-engrenage-reseau',
    description: 'Illustration vectorielle type icône (équipe, engrenage, nœuds).',
    risque: 'Banques type Flaticon / Freepik : licence par ressource (abonnement ou attribution).',
    decision: 'Ne pas intégrer sans lien source + licence. Remplacer par Unsplash Illustrations, Pexels, ou création interne.',
  },
  {
    id: 'seminaire-tableau-infographies',
    description: 'Scène séminaire / tableau de bord, illustration très « stock premium ».',
    risque: 'Profil Getty / Adobe Stock / Freepik premium si origine inconnue.',
    decision: 'Ne pas utiliser sans achat ou licence traçable. Préférer équivalent librement licencié.',
  },
  {
    id: 'photo-addie-tableau',
    description: 'Photo bureau avec schéma ADDIE au tableau blanc.',
    risque: 'Photo corporate banque d’images sans preuve d’achat.',
    decision: 'Remplacer par photo Unsplash/Pexels avec même thème ou photo interne.',
  },
  {
    id: 'mains-carnet-stylo',
    description: 'Gros plan mains / écriture sur carnet.',
    risque: 'Doublons possibles entre sites libres et banques payantes — recherche inverse nécessaire.',
    decision: 'Ne retenir qu’après confirmation sur la page source (licence explicite).',
  },
  {
    id: 'deux-femmes-entretien-wocintech',
    description: 'Deux femmes en entretien (souvent série #WOCinTech).',
    risque: 'Creative Commons souvent CC BY : attribution obligatoire (ex. wocintechchat.com selon la fiche).',
    decision:
      'Réutiliser uniquement la version officielle (Unsplash/Flickr) et appliquer le texte d’attribution indiqué sur la fiche.',
  },
];

/** Réexport pratique pour outils ou tests futurs. */
export const blogImageRegistryVersion = '1.0.0';

const blogImageRegistry = {
  version: blogImageRegistryVersion,
  unsplashLicense,
  unsplashPhotosBlog,
  imagesLocalesBlog,
  candidatsWorkspaceNonValides,
};

export default blogImageRegistry;
