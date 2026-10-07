/**
 * Articles repris des publications publiques du compte Instagram @atipikrh33.
 * Les vignettes sont des copies locales (droits Atipik RH). Le lien source reste la publication.
 */

export const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/atipikrh33/'

function fiche(article) {
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
    author: 'ATIPIK RH',
    category: 'Instagram',
    keywords: article.keywords,
    instagramUrl: article.permalink,
    seo: {
      metaTitle: article.metaTitle,
      metaDescription: article.metaDescription,
      canonicalPath: `/blog/${article.slug}`,
      secondaryKeywords: article.secondaryKeywords,
    },
    faqItems: article.faqItems || [],
    internalLinks: article.internalLinks,
    content: article.content,
  }
}

const ARTICLES = [
  fiche({
    id: 111,
    slug: 'recrutement-inclusif-sessions-juin-septembre-2026',
    title: 'Recrutement inclusif : neutraliser les biais et évaluer les compétences',
    excerpt:
      'Deux formations courtes pour sécuriser le cadre légal du recrutement et évaluer le savoir-faire comme le savoir-être avec des grilles objectives.',
    image: '/images/blog/instagram/recrutement-inclusif-sessions.jpg',
    imageAlt: 'Parcours recrutement inclusif et recrutement par les compétences — publication Instagram ATIPIK RH',
    date: '22 mai 2026',
    isoDate: '2026-05-22',
    readTime: '4 min',
    permalink: 'https://www.instagram.com/atipikrh33/p/DYpMWPfjGdW/',
    keywords: 'recrutement inclusif, prévenir les discriminations, recrutement par les compétences, formation RH Bordeaux',
    metaTitle: 'Recrutement inclusif : deux formations courtes ATIPIK RH',
    metaDescription:
      'Prévenir les discriminations et recruter par les compétences : le parcours proposé par ATIPIK RH aux équipes RH, à Lormont.',
    secondaryKeywords: ['formation non-discrimination recrutement', 'marque employeur', 'grilles d\'évaluation'],
    internalLinks: [
      { label: 'Prévenir les discriminations dans le recrutement', href: '/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif', type: 'formation' },
      { label: 'Renforcer ses pratiques de recrutement', href: '/formations/professionnalisantes/renforcer-pratique-recrutement-diversite', type: 'formation' },
      { label: 'Catalogue des formations courtes', href: '/formations/courtes-professionnalisantes', type: 'formation' },
    ],
    content: `
      <p>Le recrutement inclusif est à la fois une <strong>obligation légale</strong> et un levier de performance. La question opérationnelle reste la même : comment limiter les biais inconscients au moment de choisir ?</p>
      <p>ATIPIK RH propose un parcours en deux temps, en présentiel à Lormont puis en distanciel.</p>
      <h2>1. Prévenir les discriminations</h2>
      <p>Ce premier module pose le cadre légal et les pratiques équitables. Il concerne notamment les entreprises de 300 salariés et plus, les cabinets de recrutement et les agences d’intérim.</p>
      <p><a href="/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif"><strong>Voir la formation Prévenir les discriminations</strong></a>.</p>
      <h2>2. Recruter par les compétences</h2>
      <p>Le second module donne des outils pour évaluer le savoir-faire et le savoir-être sur des critères observables : grilles communes, décisions traçables, marque employeur plus lisible.</p>
      <p><a href="/formations/professionnalisantes/renforcer-pratique-recrutement-diversite"><strong>Voir la formation Recrutement par les compétences</strong></a>.</p>
      <p>Les sessions annoncées au printemps et à l’automne 2026 (juin et septembre) sont passées. Les prochaines dates se consultent sur les fiches formation, ou en écrivant à l’équipe via la <a href="/contact">page contact</a>.</p>
    `,
  }),
  fiche({
    id: 110,
    slug: 'journee-immersion-cip-au-plus-pres-du-reel',
    title: 'Journée d’immersion CIP : au plus près du réel',
    excerpt:
      'Les stagiaires Conseillers en insertion professionnelle sont sortis du centre pour intervenir face à un public, avec les partenaires du territoire.',
    image: '/images/blog/instagram/immersion-cip-terrain.jpg',
    imageAlt: 'Journée d’immersion des stagiaires CIP sur le terrain — publication Instagram ATIPIK RH',
    date: '13 mai 2026',
    isoDate: '2026-05-13',
    readTime: '3 min',
    permalink: 'https://www.instagram.com/atipikrh33/p/DYRZLGMDNyW/',
    keywords: 'formation CIP, immersion, insertion professionnelle, partenariat Bordeaux',
    metaTitle: 'Immersion CIP : les stagiaires face au public',
    metaDescription:
      'Retour sur la journée d’immersion des Conseillers en insertion professionnelle formés par ATIPIK RH, avec les partenaires du territoire.',
    secondaryKeywords: ['mise en situation CIP', 'Singa Bordeaux', 'mission locale'],
    internalLinks: [
      { label: 'Formation CIP', href: '/formations/cip', type: 'formation' },
      { label: 'Partenariats', href: '/partenariat', type: 'service' },
    ],
    content: `
      <p>Chez ATIPIK RH, la formation de <strong>Conseiller en insertion professionnelle</strong> ne reste pas entre les murs du centre. Des journées d’immersion envoient les stagiaires intervenir directement face à un public.</p>
      <p>Ce temps de mise en situation a été rendu possible avec Singa Bordeaux, AIM Actions Inter Médiation, la Mission locale, We Job Aquitaine et l’Espace textile rive droite.</p>
      <p>Les apprenants y travaillent la relation au public, la posture professionnelle et le partenariat de territoire — des compétences du métier CIP, pas un exercice hors sol.</p>
      <p>Pour le programme, les sessions et le financement : <a href="/formations/cip"><strong>fiche formation CIP</strong></a>. Pour rejoindre le réseau de structures d’accueil : <a href="/partenariat">page partenariats</a>.</p>
    `,
  }),
  fiche({
    id: 109,
    slug: 'soiree-recrutement-inclusif-darwin-bordeaux',
    title: 'Soirée recrutement inclusif au Darwin Écosystème, à Bordeaux',
    excerpt:
      'Table ronde, témoignage d’une RH et échanges entre professionnels : une soirée pour recruter autrement sur le territoire bordelais.',
    image: '/images/blog/instagram/soiree-recrutement-inclusif-darwin.jpg',
    imageAlt: 'Soirée recrutement inclusif au Darwin Écosystème — publication Instagram ATIPIK RH',
    date: '26 mars 2026',
    isoDate: '2026-03-26',
    readTime: '3 min',
    permalink: 'https://www.instagram.com/atipikrh33/p/DWWF1uHjNMx/',
    keywords: 'recrutement inclusif Bordeaux, Darwin écosystème, soirée RH, collectif entreprises',
    metaTitle: 'Soirée recrutement inclusif à Bordeaux | ATIPIK RH',
    metaDescription:
      'Retour sur la soirée du 5 mai 2026 au Darwin Écosystème : table ronde et témoignage RH pour un recrutement plus inclusif.',
    secondaryKeywords: ['networking RH Bordeaux', 'recrutement autrement'],
    internalLinks: [
      { label: 'Recruter en insertion', href: '/formations/professionnalisantes/recruter-insertion-entreprises', type: 'formation' },
      { label: 'Nous contacter', href: '/contact', type: 'contact' },
    ],
    content: `
      <p>Le <strong>mardi 5 mai 2026</strong>, de 18 h 30 à 21 h, ATIPIK RH a réuni des professionnels au Darwin Écosystème, à Bordeaux, autour du recrutement inclusif.</p>
      <p>Au programme : une table ronde, le témoignage d’une responsable RH d’une entreprise engagée, puis un temps d’échanges. L’objectif était de lancer une dynamique locale et un collectif d’entreprises sur le territoire bordelais.</p>
      <p>Pour outiller ensuite les équipes au quotidien : <a href="/formations/professionnalisantes/recruter-insertion-entreprises"><strong>Recruter en insertion</strong></a> et les modules de recrutement inclusif du <a href="/formations/courtes-professionnalisantes">catalogue des formations courtes</a>.</p>
    `,
  }),
  fiche({
    id: 108,
    slug: 'atipik-rh-fete-ses-7-ans',
    title: 'ATIPIK RH fête ses 7 ans',
    excerpt:
      'Du bilan de compétences en 2019 à Qualiopi, aux promotions CIP, à la démarche handi-accueillante, puis à la première session FPA.',
    image: '/images/blog/instagram/atipik-rh-7-ans.jpg',
    imageAlt: 'ATIPIK RH souffle ses 7 bougies — publication Instagram',
    date: '12 mars 2026',
    isoDate: '2026-03-12',
    readTime: '4 min',
    permalink: 'https://www.instagram.com/atipikrh33/p/DVyvaLFDGBP/',
    keywords: 'ATIPIK RH, 7 ans, Qualiopi, bilan de compétences, formation CIP, formation FPA',
    metaTitle: 'ATIPIK RH a 7 ans : les étapes depuis 2019',
    metaDescription:
      'Bilan de compétences, certification Qualiopi, CIP, démarche handi-accueillante et première session FPA : les 7 ans d’ATIPIK RH.',
    secondaryKeywords: ['histoire Atipik RH', 'centre formation Lormont'],
    internalLinks: [
      { label: 'Notre histoire', href: '/notre-histoire', type: 'service' },
      { label: 'Bilan de compétences', href: '/bilan-de-competences', type: 'service' },
      { label: 'Formation FPA', href: '/formations/fpa', type: 'formation' },
    ],
    content: `
      <p>En 2019, Vanessa Noah Ewodo crée ATIPIK RH avec une idée simple : faire du <strong>bilan de compétences</strong> un accompagnement de proximité, tourné vers l’inclusion.</p>
      <ul>
        <li><strong>2021 :</strong> certification Qualiopi.</li>
        <li><strong>2023 :</strong> première promotion de Conseillers en insertion professionnelle.</li>
        <li>Puis une démarche <strong>handi-accueillante</strong>, pour un accueil accessible.</li>
        <li><strong>2026 :</strong> première session Formateur professionnel d’adultes, aux côtés des formations courtes.</li>
      </ul>
      <p>Le récit complet est sur <a href="/notre-histoire"><strong>Notre histoire</strong></a>. Les parcours actuels : <a href="/bilan-de-competences">bilan de compétences</a>, <a href="/formations/cip">CIP</a>, <a href="/formations/fpa">FPA</a> et <a href="/vae">VAE</a>.</p>
    `,
  }),
  fiche({
    id: 107,
    slug: 'rentree-formation-cip-fevrier-2026',
    title: 'Rentrée de la formation CIP : une nouvelle promotion à Lormont',
    excerpt:
      'Le 9 février 2026, une nouvelle promotion de Conseillers en insertion professionnelle a démarré son parcours à ATIPIK RH.',
    image: '/images/blog/instagram/rentree-formation-cip.jpg',
    imageAlt: 'Rentrée de la formation CIP chez ATIPIK RH — publication Instagram',
    date: '25 février 2026',
    isoDate: '2026-02-25',
    readTime: '3 min',
    permalink: 'https://www.instagram.com/atipikrh33/p/DVLhOZDDFtY/',
    keywords: 'rentrée formation CIP, conseiller insertion professionnelle Lormont, février 2026',
    metaTitle: 'Rentrée CIP de février 2026 à Lormont',
    metaDescription:
      'Nouvelle promotion CIP accueillie le 9 février 2026 chez ATIPIK RH : accompagnement des publics et relation avec les entreprises.',
    secondaryKeywords: ['formation insertion professionnelle', 'promotion CIP'],
    internalLinks: [
      { label: 'Formation CIP', href: '/formations/cip', type: 'formation' },
      { label: 'Réunion d’information', href: '/s-inscrire', type: 'contact' },
    ],
    content: `
      <p>Le <strong>9 février 2026</strong>, ATIPIK RH a accueilli une nouvelle promotion de la formation <strong>Conseiller en insertion professionnelle</strong>.</p>
      <p>Le parcours mêle apports et mises en pratique : accompagnement des publics, insertion, relation avec les entreprises et les acteurs du territoire.</p>
      <p>Les prochaines sessions et les modalités de financement sont sur la <a href="/formations/cip"><strong>fiche CIP</strong></a>. Une question sur le métier avant de vous engager : <a href="/s-inscrire">réunion d’information</a>.</p>
    `,
  }),
  fiche({
    id: 106,
    slug: 'formations-courtes-recrutement-inclusif-competences',
    title: 'Deux formations courtes pour les équipes RH',
    excerpt:
      'Prévenir les discriminations et fiabiliser les décisions de recrutement : deux formats courts, en intra ou en inter, à Lormont.',
    image: '/images/blog/instagram/formations-courtes-recrutement.jpg',
    imageAlt: 'Formations courtes recrutement inclusif et compétences — publication Instagram ATIPIK RH',
    date: '24 février 2026',
    isoDate: '2026-02-24',
    readTime: '3 min',
    permalink: 'https://www.instagram.com/atipikrh33/p/DVItJcVDDSq/',
    keywords: 'formation courte RH, recrutement inclusif, recrutement par les compétences, Lormont',
    metaTitle: 'Formations courtes RH : discrimination et compétences',
    metaDescription:
      'Deux formations courtes ATIPIK RH à Lormont : prévenir les discriminations et recruter sur les compétences. Intra ou inter.',
    secondaryKeywords: ['formation intra entreprise', 'marque employeur Bordeaux'],
    internalLinks: [
      { label: 'Prévenir les discriminations', href: '/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif', type: 'formation' },
      { label: 'Recrutement par les compétences', href: '/formations/professionnalisantes/renforcer-pratique-recrutement-diversite', type: 'formation' },
      { label: 'Contact', href: '/contact', type: 'contact' },
    ],
    content: `
      <p>ATIPIK RH propose deux <strong>formations courtes</strong> aux entreprises et aux professionnel·les RH.</p>
      <ul>
        <li><a href="/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif"><strong>Prévenir les discriminations dans le recrutement</strong></a> — cadre légal et pratiques objectives.</li>
        <li><a href="/formations/professionnalisantes/renforcer-pratique-recrutement-diversite"><strong>Renforcer sa pratique de recrutement sur les compétences</strong></a> — décisions plus fiables et marque employeur plus claire.</li>
      </ul>
      <p>Les formats sont courts, applicables tout de suite, en intra ou en inter. Le centre est au 8 rue du Courant, 33310 Lormont.</p>
      <p>Pour un devis ou une date : <a href="/contact"><strong>contact@atipikrh.com</strong></a> ou 07 83 01 99 55.</p>
    `,
  }),
  fiche({
    id: 105,
    slug: 'reunion-information-formation-fpa',
    title: 'Devenir formateur d’adultes : la formation FPA à Lormont',
    excerpt:
      'Programme, débouchés, témoignages et financements : ce que couvre une réunion d’information avant d’entrer en formation FPA.',
    image: '/images/blog/instagram/reunion-information-fpa.jpg',
    imageAlt: 'Réunion d’information formation FPA — publication Instagram ATIPIK RH',
    date: '20 février 2026',
    isoDate: '2026-02-20',
    readTime: '3 min',
    permalink: 'https://www.instagram.com/atipikrh33/p/DU-yhdejL0O/',
    keywords: 'formation FPA, formateur professionnel d’adultes, réunion d’information, Lormont',
    metaTitle: 'Formation FPA : réunion d’information ATIPIK RH',
    metaDescription:
      'La formation Formateur professionnel d’adultes à Lormont : programme, débouchés et financements. Inscrivez-vous à une réunion.',
    secondaryKeywords: ['titre professionnel FPA', 'devenir formateur Bordeaux'],
    internalLinks: [
      { label: 'Formation FPA', href: '/formations/fpa', type: 'formation' },
      { label: 'S’inscrire à une réunion', href: '/s-inscrire', type: 'contact' },
    ],
    content: `
      <p>La formation <strong>Formateur professionnel d’adultes</strong> s’adresse aux personnes qui veulent transmettre leur expertise et accompagner des apprenants.</p>
      <p>Une réunion d’information présente le programme, les débouchés, des témoignages d’anciens stagiaires et les financements possibles. La session évoquée sur Instagram démarrait le 13 avril 2026 ; la réunion du 5 mars 2026 est close.</p>
      <p>Les prochaines dates sont sur la <a href="/formations/fpa"><strong>fiche FPA</strong></a> et via <a href="/s-inscrire">l’inscription aux réunions</a>.</p>
    `,
  }),
  fiche({
    id: 104,
    slug: 'temoignages-apprenants-formation-cip',
    title: 'Ils en parlent mieux que nous : témoignages de la formation CIP',
    excerpt:
      'Parcours, ressentis et ce que la formation de Conseiller en insertion professionnelle a changé pour les apprenants.',
    image: '/images/blog/instagram/temoignages-apprenants-cip.jpg',
    imageAlt: 'Témoignages d’apprenants de la formation CIP — publication Instagram ATIPIK RH',
    date: '30 juillet 2025',
    isoDate: '2025-07-30',
    readTime: '2 min',
    permalink: 'https://www.instagram.com/atipikrh33/reel/DMucf_9oy6I/',
    keywords: 'témoignage formation CIP, conseiller insertion professionnelle, retour d’expérience',
    metaTitle: 'Témoignages d’apprenants de la formation CIP',
    metaDescription:
      'Retours d’expérience des apprenants CIP d’ATIPIK RH : ce que la formation change, au-delà du référentiel.',
    secondaryKeywords: ['avis formation CIP Bordeaux', 'insertion professionnelle'],
    internalLinks: [
      { label: 'Formation CIP', href: '/formations/cip', type: 'formation' },
      { label: 'Voir le témoignage sur Instagram', href: 'https://www.instagram.com/atipikrh33/reel/DMucf_9oy6I/', type: 'related' },
    ],
    content: `
      <p>Les apprenants de la formation <strong>Conseiller en insertion professionnelle</strong> racontent ce que le parcours leur a apporté : compétences, posture, et parfois un virage personnel.</p>
      <p>La vidéo est publiée sur Instagram. Elle complète la <a href="/formations/cip"><strong>fiche formation CIP</strong></a>, qui détaille le programme, les prérequis et le financement.</p>
      <p><a href="https://www.instagram.com/atipikrh33/reel/DMucf_9oy6I/" target="_blank" rel="noopener noreferrer"><strong>Voir le témoignage sur Instagram</strong></a>.</p>
    `,
  }),
  fiche({
    id: 103,
    slug: 'espaces-de-travail-centre-lormont',
    title: 'Travailler, se réunir ou se former au centre de Lormont',
    excerpt:
      'Des salles lumineuses au 8 rue du Courant, accessibles par l’A10, la N89, le tram A et le bus 66.',
    image: '/images/blog/instagram/espaces-travail-lormont.jpg',
    imageAlt: 'Espaces du centre ATIPIK RH à Lormont — publication Instagram',
    date: '18 juin 2025',
    isoDate: '2025-06-18',
    readTime: '2 min',
    permalink: 'https://www.instagram.com/atipikrh33/p/DLDM7ZzIcHo/',
    keywords: 'location salle Lormont, espace de travail, réunion, formation, 8 rue du Courant',
    metaTitle: 'Salles et espaces de travail à Lormont | ATIPIK RH',
    metaDescription:
      'Journée de travail, réunion ou formation au 8 rue du Courant à Lormont. Accès A10, N89, tram A et bus 66.',
    secondaryKeywords: ['location salle formation Bordeaux rive droite'],
    internalLinks: [
      { label: 'Location de salles', href: '/location-salles-lormont', type: 'service' },
      { label: 'Contact', href: '/contact', type: 'contact' },
    ],
    content: `
      <p>Le centre ATIPIK RH n’est pas une société de domiciliation. Les salles sont d’abord celles de la formation. Lorsqu’elles sont libres, elles peuvent accueillir une journée de travail, une réunion ou une session avec une équipe.</p>
      <p>Adresse : <strong>8 rue du Courant, 33310 Lormont</strong>. Accès A10, N89, tram A et bus 66 (arrêt Lauriers).</p>
      <p>Les espaces et les tarifs : <a href="/location-salles-lormont"><strong>location de salles à Lormont</strong></a>. Renseignements : 07 83 01 99 55 ou <a href="/contact">contact@atipikrh.com</a>.</p>
    `,
  }),
  fiche({
    id: 102,
    slug: 'reussite-promotion-cip-100-pour-100',
    title: 'Promotion CIP : 100 % de réussite',
    excerpt:
      'Neuf conseillers formés, titulaires et opérationnels. Le métier répond à un besoin de terrain, pas à une case à cocher.',
    image: '/images/blog/instagram/reussite-promo-cip.jpg',
    imageAlt: 'Réussite de la promotion CIP — publication Instagram ATIPIK RH',
    date: '5 juin 2025',
    isoDate: '2025-06-05',
    readTime: '3 min',
    permalink: 'https://www.instagram.com/atipikrh33/p/DKg7Fa2IuWV/',
    keywords: 'réussite formation CIP, taux de réussite, conseiller insertion professionnelle',
    metaTitle: 'Promotion CIP : 100 % de réussite | ATIPIK RH',
    metaDescription:
      'La promotion CIP d’ATIPIK RH a obtenu 100 % de réussite. Neuf conseillers formés pour les besoins du terrain.',
    secondaryKeywords: ['devenir CIP', 'formation insertion Lormont'],
    internalLinks: [
      { label: 'Formation CIP', href: '/formations/cip', type: 'formation' },
      { label: 'Réunion d’information', href: '/s-inscrire', type: 'contact' },
    ],
    content: `
      <p>La promotion CIP concernée a obtenu <strong>100 % de réussite</strong>. Neuf personnes formées au conseil, à l’accompagnement et à l’action, pas seulement titulaires d’un titre.</p>
      <p>Le message du terrain, côté ATIPIK RH : les structures ont besoin de professionnels capables d’accompagner vers l’emploi. Former des CIP répond à ce besoin.</p>
      <p>La session de février 2026, annoncée dans cette publication, a depuis fait sa rentrée. Pour la suite du calendrier : <a href="/formations/cip"><strong>fiche formation CIP</strong></a> et <a href="/s-inscrire">réunions d’information</a>.</p>
    `,
  }),
  fiche({
    id: 101,
    slug: 'atipik-rh-parcours-projets-realite',
    title: 'ATIPIK RH : faire d’un parcours une force',
    excerpt:
      'Centre de formation Qualiopi et handi-accueillant à Lormont : bilan, formation, VAE, avec des plans concrets et une lecture positive des compétences.',
    image: '/images/blog/instagram/presentation-atipik-rh.jpg',
    imageAlt: 'Présentation d’ATIPIK RH — publication Instagram',
    date: '19 novembre 2024',
    isoDate: '2024-11-19',
    readTime: '3 min',
    permalink: 'https://www.instagram.com/atipikrh33/p/DCjgR-MIToc/',
    keywords: 'ATIPIK RH Lormont, Qualiopi, handi-accueillant, bilan de compétences, reconversion',
    metaTitle: 'ATIPIK RH à Lormont : accompagnement et formation',
    metaDescription:
      'Centre Qualiopi et handi-accueillant à Lormont : bilan de compétences, formations et VAE, à partir de ce que vous savez déjà faire.',
    secondaryKeywords: ['reconversion Bordeaux', 'accompagnement professionnel'],
    internalLinks: [
      { label: 'Bilan de compétences', href: '/bilan-de-competences', type: 'service' },
      { label: 'Nos formations', href: '/formations', type: 'formation' },
      { label: 'Contact', href: '/contact', type: 'contact' },
    ],
    content: `
      <p>ATIPIK RH est un <strong>centre de formation</strong> à Lormont, certifié Qualiopi et handi-accueillant. L’équipe écoute un projet avant de proposer un plan : reconversion, formation, validation de l’expérience.</p>
      <p>Deux repères reviennent dans l’accompagnement.</p>
      <ul>
        <li><strong>Pragmatique :</strong> une feuille de route et les aides adaptées au statut.</li>
        <li><strong>Positif :</strong> les compétences viennent de la vie professionnelle, personnelle ou associative. On ne part pas d’une page blanche.</li>
      </ul>
      <p>Pour avancer : <a href="/bilan-de-competences">bilan de compétences</a>, <a href="/formations">formations</a>, <a href="/vae">VAE</a>, ou la <a href="/contact">page contact</a>.</p>
    `,
  }),
]

export const instagramArticles = ARTICLES

export const INSTAGRAM_ARTICLE_SLUGS = ARTICLES.map((article) => article.slug)

export const instagramArticlesListing = ARTICLES.map((article) => {
  const card = { ...article }
  delete card.content
  delete card.faqItems
  delete card.internalLinks
  return card
})
