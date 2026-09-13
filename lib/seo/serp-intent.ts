import type { ProspectMapping, SerpSnapshot } from './types'
import { getKeywordClusterById } from './keywords'

/** Snapshots SERP — veille concurrentielle (mise à jour manuelle). */
const SERP_ANALYZED_AT = '2026-05-23'

const SERP_SNAPSHOTS: SerpSnapshot[] = [
  {
    id: 'serp-formation-cip-bordeaux',
    keyword: 'formation CIP Bordeaux',
    clusterId: 'formation-cip-bordeaux',
    analyzedAt: SERP_ANALYZED_AT,
    intent: 'commercial',
    competition: 'high',
    competitors: [
      {
        name: 'IFPA Formation',
        url: 'https://www.ifpa.pro/reconversion/conseiller-en-insertion-professionnelle',
        title: 'Conseiller en Insertion Professionnelle | IFPA Bordeaux',
        metaDescription:
          'Formation certifiante CIP niveau 5 (Bac+2), RNCP. CPF, France Travail. Entretien et dossier accompagnés.',
      },
      {
        name: 'CD+ Formation (Pessac)',
        url: 'https://organisme-formation-pessac.fr/formation-au-titre-professionnel-de-conseiller-en-insertion-professionnelle-cip/',
        title: 'Formation CIP — Conseiller en insertion professionnelle | CD+ Formation',
        metaDescription:
          'Titre professionnel niveau 5, 3 CCP. Sites Bordeaux et Pessac. Parcours insertion et reconversion.',
      },
      {
        name: 'TBC Formation',
        url: 'https://tbcformation.com/formation-cip/conseillere-en-insertion-professionnelle/',
        title: 'Formation CONSEILLER(E) EN INSERTION Professionnelle | TBCF Bordeaux',
        metaDescription:
          'Titre professionnel CIP niveau 5, 6 mois dont stage. 6 quai de Paludate, Bordeaux. CPF et financements.',
      },
      {
        name: 'France Travail',
        url: 'https://candidat.francetravail.fr/formations/recherche',
        title: 'Formations Conseiller en insertion professionnelle | France Travail',
        metaDescription:
          'Recherche de formations certifiantes et financements par territoire (Bordeaux, Gironde).',
      },
    ],
    peopleAlsoAsk: [
      'Quelle formation pour devenir conseiller en insertion professionnelle ?',
      'Combien de temps dure une formation CIP ?',
      'La formation CIP est-elle finançable avec le CPF ?',
      'Quel salaire pour un conseiller en insertion professionnelle ?',
      'Quelle différence entre CIP et CCP3 ?',
      'Où faire une formation CIP en Gironde ?',
    ],
    editorialAngles: [
      'Différenciation rive droite : Lormont, parking, proximité Bordeaux sans saturation centre-ville',
      'Parcours CIP + formations professionnalisantes 21h (montée en compétences)',
      'Réunions d’information et accompagnement dossier (s-inscrire)',
      'Articulation reconversion / demandeur d’emploi / +40 ans',
      'Ne pas confondre CIP (insertion) et CIPP phytosanitaire (viticulture)',
    ],
    contentOpportunities: [
      'Renforcer page /formations/cip vs concurrents centrés Bordeaux intra-muros',
      'Article blog CIP Bordeaux déjà en ligne — maillage vers fiche formation',
      'Tableau comparatif durée / modalités / financement (données vérifiées uniquement)',
      'CTA réunion info distanciel + présentiel Lormont',
    ],
    secondaryKeywords: [
      'titre CIP niveau 5 RNCP',
      'formation insertion Bordeaux Métropole',
      'devenir conseiller insertion Lormont',
      'formation CIP financement CPF',
    ],
  },
  {
    id: 'serp-bilan-lormont',
    keyword: 'bilan de compétences Lormont',
    clusterId: 'bilan-competences-lormont',
    analyzedAt: SERP_ANALYZED_AT,
    intent: 'transactional',
    competition: 'high',
    competitors: [
      {
        name: 'Université Bordeaux Montaigne',
        url: 'https://www.u-bordeaux-montaigne.fr/fr/formations/formation_continue/bilan_de_competences.html',
        title: 'Bilan de compétences | Université Bordeaux Montaigne',
        metaDescription:
          'Prestation 24h max, document de synthèse confidentiel. Financement CPF ou entreprise. Accueil Bordeaux.',
      },
      {
        name: 'O-RH (Cenon)',
        url: 'https://www.o-rh.fr/orientation-bilan-de-competences/',
        title: 'Orientation Bilan de Compétences | Coaching à Bordeaux',
        metaDescription:
          'Bilan sur 4 mois max, présentiel Cenon ou distanciel. Séances 1h30–2h. Tarifs sur devis.',
      },
      {
        name: 'MaFormation.fr — annuaire',
        url: 'https://www.maformation.fr/bilan_de_competences/ville_lormont-33310.html',
        title: 'Centres de bilan de compétences à Lormont 33310',
        metaDescription:
          'Comparateur multi-offres : présentiel, distanciel, mixte, éligibilité CPF.',
      },
      {
        name: 'Pierre & Nico — guide local',
        url: 'https://www.pierreetnico.fr/ou-faire-un-bilan-de-competences-a-bordeaux/',
        title: 'Où faire un bilan de compétences à Bordeaux',
        metaDescription:
          'Panorama des structures et financements CPF en Nouvelle-Aquitaine et métropole bordelaise.',
      },
    ],
    peopleAlsoAsk: [
      'Combien coûte un bilan de compétences ?',
      'Quelle durée pour un bilan de compétences ?',
      'Bilan de compétences CPF : comment ça marche ?',
      'Bilan de compétences ou VAE : que choisir ?',
      'Où faire un bilan de compétences à Lormont ?',
      'Bilan de compétences reconversion après 40 ans ?',
    ],
    editorialAngles: [
      'OF formation + bilan : continuité vers CIP/FPA après le bilan',
      'Quiz bilan existant (/bilan-de-competences/quiz) comme entonnoir',
      '24h réglementaires, Qualiopi, confidentialité du document de synthèse',
      'Lormont 4,8 km centre Bordeaux — argument mobilité rive droite',
    ],
    contentOpportunities: [
      'Snippet « bilan Lormont » avec adresse 8 Rue du Courant',
      'Articles blog bilan + financement 2026 déjà publiés — renforcer maillage',
      'Page pilier reconversion (à créer) → lien bilan',
    ],
    secondaryKeywords: [
      'bilan compétences Bordeaux CPF',
      'cabinet bilan Lormont',
      'bilan compétences reconversion Gironde',
    ],
  },
  {
    id: 'serp-reconversion-bordeaux',
    keyword: 'reconversion professionnelle Bordeaux',
    clusterId: 'reconversion-bordeaux',
    analyzedAt: SERP_ANALYZED_AT,
    intent: 'informational',
    competition: 'high',
    competitors: [
      {
        name: 'Service-Public.fr',
        url: 'https://www.service-public.fr',
        title: 'Reconversion professionnelle : démarches et aides',
        metaDescription:
          'CPF, projet de transition professionnelle, bilan de compétences — cadre légal et démarches.',
      },
      {
        name: 'IFPA — page reconversion CIP',
        url: 'https://www.ifpa.pro/reconversion/conseiller-en-insertion-professionnelle',
        title: 'Conseiller en Insertion Professionnelle | Reconversion IFPA',
        metaDescription:
          'Formation certifiante pour reconversion vers l’accompagnement et l’insertion professionnelle.',
      },
      {
        name: 'Bordeaux Gazette',
        url: 'https://www.bordeaux-gazette.com/en-gironde-changer-de-metier-n-est-plus-un-accident-de-parcours.html',
        title: "En Gironde, changer de métier n'est plus un accident de parcours",
        metaDescription:
          'Reconversion en métropole bordelaise : CPF, CEP, PTP, enjeux territoriaux Gironde.',
      },
      {
        name: 'Blog Atipik RH',
        url: 'https://www.atipikrh.com/blog/financer-reconversion-professionnelle-2026-cpf-aides-regionales',
        title: 'Financer sa reconversion professionnelle en 2026 | Atipik RH',
        metaDescription:
          'CPF, aides régionales, France Travail — article déjà positionné sur la requête financement.',
      },
    ],
    peopleAlsoAsk: [
      'Comment financer une reconversion professionnelle ?',
      'À quel âge se reconvertir ?',
      'Quelles formations pour une reconversion vers l’accompagnement ?',
      'Combien de temps dure une reconversion ?',
      'Reconversion et CPF : comment utiliser ses droits ?',
      'Bilan de compétences avant reconversion : obligatoire ?',
    ],
    editorialAngles: [
      'Parcours local : bilan → formation certifiante (CIP/FPA) à Lormont',
      'Spécificités territoire : rive droite, QPV, mobilité Gironde',
      'Lien articles blog existants (financement, parcours atypique, +40 ans)',
      'Transitions Pro / CEP : orientation sans promesse de financement non vérifiée',
    ],
    contentOpportunities: [
      'Créer pilier /reconversion-professionnelle-bordeaux (brief prêt)',
      'Encart « métiers de l’insertion » vers formation CIP',
      'FAQ financement croisée avec /financement',
    ],
    secondaryKeywords: [
      'changer de métier Bordeaux',
      'reconversion professionnelle Gironde',
      'projet reconversion accompagnement',
    ],
  },
  {
    id: 'serp-organisme-insertion',
    keyword: 'organisme formation insertion professionnelle',
    clusterId: 'organisme-insertion',
    analyzedAt: SERP_ANALYZED_AT,
    intent: 'commercial',
    competition: 'medium',
    competitors: [
      {
        name: 'Annuaire Qualiopi (data.gouv)',
        url: 'https://www.data.gouv.fr',
        title: 'Liste publique des organismes certifiés Qualiopi',
        metaDescription:
          'Référentiel national — critère de confiance pour financeurs et entreprises.',
      },
      {
        name: 'Blog Atipik RH — centre Lormont',
        url: 'https://www.atipikrh.com/blog/centre-formation-lormont-rive-droite-bordeaux',
        title: 'Centre de formation à Lormont, rive droite de Bordeaux | Atipik RH',
        metaDescription:
          'Positionnement local insertion, reconversion, bilans — contenu propriétaire à renforcer.',
      },
      {
        name: 'IRIPS — CIP',
        url: 'https://irips.fr/formations/titre-professionnel-conseiller-en-insertion-professionnelle/',
        title: 'Titre professionnel Conseiller en Insertion Professionnelle | IRIPS',
        metaDescription:
          'Parcours 3 CCP, stages en structure. Concurrent régional hors Bordeaux métropole.',
      },
    ],
    peopleAlsoAsk: [
      'Comment choisir un organisme de formation ?',
      'Qu’est-ce que la certification Qualiopi ?',
      'Quelles formations pour travailler en insertion ?',
    ],
    editorialAngles: [
      'Positionnement Atipik RH : insertion, reconversion, proximité terrain',
      'Certifications et équipe pluridisciplinaire',
      'Offre CIP + FPA + professionnalisantes',
    ],
    contentOpportunities: [
      'Page institutionnelle organisme (à créer)',
      'Renforcer notre-histoire et certification',
    ],
    secondaryKeywords: ['OF insertion Bordeaux', 'centre formation Lormont'],
  },
  {
    id: 'serp-fpa-na',
    keyword: 'formation FPA Nouvelle-Aquitaine',
    clusterId: 'formation-fpa-nouvelle-aquitaine',
    analyzedAt: SERP_ANALYZED_AT,
    intent: 'commercial',
    competition: 'medium',
    competitors: [
      {
        name: 'Envol Formation — Libourne',
        url: 'https://envol-formation.fr/formation-formateur-professionnel-adultes-tp-fpa-libourne',
        title: 'Formation Formateur professionnel d’adultes (TP FPA) | Envol Libourne',
        metaDescription:
          'TP FPA niveau 5 RNCP 37275. 560h présentiel + 343h stage. Gironde / Nouvelle-Aquitaine.',
      },
      {
        name: 'France Travail — K2111 Gironde',
        url: 'https://candidat.francetravail.fr/formations/recherche?ou=DEPARTEMENT-33&quoi=K2111',
        title: 'Formations Formateur professionnel d’adultes — Gironde (33)',
        metaDescription:
          'Annuaire formations FPA dont sessions Mérignac / département 33.',
      },
      {
        name: 'Blog Atipik RH — FPA Bordeaux',
        url: 'https://www.atipikrh.com/blog/formation-fpa-bordeaux-formateur-professionnel-adultes',
        title: 'Devenir formateur professionnel d’adultes à Bordeaux | Atipik RH',
        metaDescription:
          'Article propriétaire FPA Lormont — à croiser avec /formations/fpa.',
      },
      {
        name: 'France Compétences — RNCP 37275',
        url: 'https://www.francecompetences.fr',
        title: 'Formateur professionnel d’adultes — Fiche RNCP',
        metaDescription: 'Référentiel officiel du titre FPA niveau 5.',
      },
    ],
    peopleAlsoAsk: [
      'Comment devenir formateur pour adultes ?',
      'FPA ou BAFA pour former des adultes ?',
      'Durée de la formation FPA ?',
    ],
    editorialAngles: [
      'Programme 7 mois et débouchés en OF / entreprise',
      'Articulation FPA + expérience métier',
      'Sessions info et financement',
    ],
    contentOpportunities: [
      'Renforcer page /formations/fpa et article blog FPA',
    ],
    secondaryKeywords: ['formateur adultes Bordeaux', 'titre FPA'],
  },
  {
    id: 'serp-accompagnement-social',
    keyword: 'formation pour travailler dans l’accompagnement',
    clusterId: 'metiers-accompagnement-social',
    analyzedAt: SERP_ANALYZED_AT,
    intent: 'informational',
    competition: 'medium',
    competitors: [
      {
        name: 'Onisep — fiche métier CIP',
        url: 'https://www.onisep.fr',
        title: 'Conseiller / Conseillère en insertion professionnelle | Onisep',
        metaDescription:
          'Missions, compétences, formations — référence institutionnelle pour l’intention découverte métier.',
      },
      {
        name: 'Atipik RH — article CIP Lormont',
        url: 'https://www.atipikrh.com/blog/formation-cip-bordeaux-conseiller-insertion-professionnelle',
        title: 'Formation conseiller insertion professionnelle à Lormont | Blog Atipik RH',
        metaDescription:
          'Contenu existant à lier depuis la future page métiers accompagnement.',
      },
    ],
    peopleAlsoAsk: [
      'Quels métiers dans l’accompagnement social ?',
      'Faut-il un diplôme pour être conseiller en insertion ?',
      'Comment se reconvertir dans l’accompagnement ?',
    ],
    editorialAngles: [
      'Panorama métiers : CIP, travailleur social, médiateur',
      'Formation CIP comme passerelle',
    ],
    contentOpportunities: ['Cluster métiers accompagnement (page à créer)'],
    secondaryKeywords: ['métiers accompagnement', 'formation CIP'],
  },
  {
    id: 'serp-femmes-emploi',
    keyword: 'formation femmes éloignées de l’emploi',
    clusterId: 'femmes-eloignees-emploi',
    analyzedAt: SERP_ANALYZED_AT,
    intent: 'local',
    competition: 'medium',
    competitors: [
      {
        name: 'France Travail — accompagnement',
        url: 'https://www.francetravail.fr',
        title: 'Accompagnement des demandeurs d’emploi | France Travail',
        metaDescription:
          'Dispositifs publics — complémentarité avec formation certifiante Atipik RH.',
      },
      {
        name: 'Blog Atipik RH — cadres +40',
        url: 'https://www.atipikrh.com/blog/bilan-competences-cadres-plus-40-ans-reconversion',
        title: 'Bilan de compétences pour cadres de plus de 40 ans | Atipik RH',
        metaDescription:
          'Angle reconversion / retour emploi pertinent pour femmes en pause carrière.',
      },
    ],
    peopleAlsoAsk: [
      'Quels dispositifs pour le retour à l’emploi des femmes ?',
      'Existe-t-il des formations dédiées ?',
    ],
    editorialAngles: [
      'Accompagnement personnalisé et bilans',
      'Lien avec structures locales et France Travail',
    ],
    contentOpportunities: ['Page dédiée public femmes (à créer)'],
    secondaryKeywords: ['retour emploi femme', 'accompagnement insertion'],
  },
  {
    id: 'serp-qpv-bordeaux',
    keyword: 'formation insertion quartier prioritaire Bordeaux',
    clusterId: 'formation-qpv-bordeaux',
    analyzedAt: SERP_ANALYZED_AT,
    intent: 'local',
    competition: 'medium',
    competitors: [
      {
        name: 'Politique de la ville — État',
        url: 'https://www.ville.gouv.fr',
        title: 'Quartiers prioritaires de la politique de la ville',
        metaDescription:
          'Cadre QPV — contenu institutionnel pour crédibilité E-E-A-T des pages locales.',
      },
      {
        name: 'Atipik RH — partenariats locaux',
        url: 'https://www.atipikrh.com/partenariat',
        title: 'Partenariat | ATIPIK RH — Réseau entreprises engagées',
        metaDescription:
          'Preuve d’ancrage territorial — à citer sur la future landing QPV.',
      },
    ],
    peopleAlsoAsk: [
      'Qu’est-ce qu’un quartier prioritaire ?',
      'Quelles aides pour les habitants QPV ?',
    ],
    editorialAngles: [
      'Proximité territoires et partenariats locaux',
      'Parcours jeunes et demandeurs d’emploi',
    ],
    contentOpportunities: ['Landing QPV Bordeaux (à créer)'],
    secondaryKeywords: ['QPV Bordeaux', 'insertion quartiers'],
  },
  {
    id: 'serp-retour-emploi',
    keyword: 'accompagnement retour à l’emploi',
    clusterId: 'accompagnement-retour-emploi',
    analyzedAt: SERP_ANALYZED_AT,
    intent: 'informational',
    competition: 'medium',
    competitors: [
      {
        name: 'France Travail',
        url: 'https://www.francetravail.fr',
        title: 'Accompagnement vers l’emploi | France Travail',
        metaDescription:
          'Suivi demandeur d’emploi — positionner Atipik RH en complément formation certifiante.',
      },
      {
        name: 'Mission locale / structures insertion',
        url: 'https://www.franceemploi.dreets.gouv.fr',
        title: 'Dispositifs d’insertion professionnelle',
        metaDescription:
          'Écosystème public — opportunité de contenu « parcours coordonné » vers CIP.',
      },
    ],
    peopleAlsoAsk: [
      'Comment retrouver un emploi après une longue pause ?',
      'Quel accompagnement avec France Travail ?',
    ],
    editorialAngles: [
      'Complémentarité France Travail / formation certifiante',
      'Formations CIP et professionnalisantes',
    ],
    contentOpportunities: ['Page accompagnement retour emploi Lormont (à créer)'],
    secondaryKeywords: ['retour emploi Bordeaux', 'insertion Lormont'],
  },
  {
    id: 'serp-professionnalisantes',
    keyword: 'formation professionnalisante insertion professionnelle',
    clusterId: 'formations-professionnalisantes',
    analyzedAt: SERP_ANALYZED_AT,
    intent: 'commercial',
    competition: 'low',
    competitors: [
      {
        name: 'Atipik RH — hub professionnalisantes',
        url: 'https://www.atipikrh.com/formations/courtes-professionnalisantes',
        title: 'Formations courtes professionnalisantes | Atipik RH Lormont',
        metaDescription:
          'Catalogue 21h : relation entreprise, recrutement inclusif, diversité — page à optimiser vs requêtes RH.',
      },
      {
        name: 'Blog Atipik RH — recrutement RH',
        url: 'https://www.atipikrh.com/blog/comment-ameliorer-pratiques-recrutement-rh-2026',
        title: 'Comment améliorer ses pratiques de recrutement RH en 2026',
        metaDescription:
          'Contenu B2B RH — maillage vers fiches professionnalisantes recrutement.',
      },
    ],
    peopleAlsoAsk: [
      'Qu’est-ce qu’une formation professionnalisante ?',
      'Durée des formations courtes insertion ?',
    ],
    editorialAngles: [
      'Catalogue 21h par thématique RH / insertion',
      'Public : professionnels déjà en poste',
    ],
    contentOpportunities: ['Hub courtes professionnalisantes déjà en ligne'],
    secondaryKeywords: ['formation courte Bordeaux', 'montée compétences CIP'],
  },
]

const BRIEF_SERP_MAP: Record<string, string> = {
  'formation-cip': 'serp-formation-cip-bordeaux',
  'formation-fpa': 'serp-fpa-na',
  'formation-fpa-ccp1': 'serp-fpa-na',
  'formation-fpa-ccp2': 'serp-fpa-na',
  'formation-fpa-ccp3': 'serp-fpa-na',
  'formation-fpa-ccp4': 'serp-fpa-na',
  'formation-ccp1': 'serp-formation-cip-bordeaux',
  'formation-ccp2': 'serp-formation-cip-bordeaux',
  'formation-ccp3': 'serp-formation-cip-bordeaux',
  accueil: 'serp-organisme-insertion',
  'formations-hub': 'serp-organisme-insertion',
  'bilan-competences-local': 'serp-bilan-lormont',
  'reconversion-bordeaux': 'serp-reconversion-bordeaux',
  'insertion-professionnelle-organisme': 'serp-organisme-insertion',
  'metiers-accompagnement': 'serp-accompagnement-social',
  'femmes-eloignees-emploi': 'serp-femmes-emploi',
  'formation-qpv-bordeaux': 'serp-qpv-bordeaux',
  'accompagnement-retour-emploi': 'serp-retour-emploi',
  'formations-professionnalisantes-hub': 'serp-professionnalisantes',
  vae: 'serp-reconversion-bordeaux',
  financement: 'serp-reconversion-bordeaux',
}

/** Règles prospect → brief (patterns normalisés). */
const PROSPECT_RULES: {
  patterns: RegExp[]
  briefId: string
  slug: string
  priority: ProspectMapping['priority']
  rationale: string
}[] = [
  {
    patterns: [/devenir\s+conseiller/, /conseiller\s+insertion/, /formation\s+cip/, /cip\s+bordeaux/, /cip\s+lormont/],
    briefId: 'formation-cip',
    slug: '/formations/cip',
    priority: 'high',
    rationale: 'Intention formation certifiante CIP.',
  },
  {
    patterns: [/formateur\s+adulte/, /\bfpa\b/, /devenir\s+formateur/],
    briefId: 'formation-fpa',
    slug: '/formations/fpa',
    priority: 'high',
    rationale: 'Intention formation FPA.',
  },
  {
    patterns: [/accompagnement\s+social/, /metiers?\s+accompagnement/, /travailler\s+dans\s+l.?accompagnement/],
    briefId: 'metiers-accompagnement',
    slug: '/formation-metiers-accompagnement-social',
    priority: 'high',
    rationale: 'Recherche métiers de l’accompagnement → cluster dédié.',
  },
  {
    patterns: [/changer\s+de\s+metier/, /reconversion/, /nouveau\s+metier/],
    briefId: 'reconversion-bordeaux',
    slug: '/reconversion-professionnelle-bordeaux',
    priority: 'high',
    rationale: 'Intention reconversion locale.',
  },
  {
    patterns: [/bilan\s+competence/, /bilan\s+de\s+competence/],
    briefId: 'bilan-competences-local',
    slug: '/bilan-de-competences',
    priority: 'high',
    rationale: 'Intention bilan de compétences.',
  },
  {
    patterns: [/\bvae\b/, /validation\s+experience/],
    briefId: 'vae',
    slug: '/vae',
    priority: 'medium',
    rationale: 'Intention VAE.',
  },
  {
    patterns: [/financement/, /cpf/, /aide\s+regionale/, /france\s+travail/],
    briefId: 'financement',
    slug: '/financement',
    priority: 'medium',
    rationale: 'Intention financement formation.',
  },
  {
    patterns: [/femme/, /eloignee?\s+emploi/, /retour\s+emploi\s+femme/],
    briefId: 'femmes-eloignees-emploi',
    slug: '/accompagnement-femmes-eloignees-emploi',
    priority: 'medium',
    rationale: 'Public femmes éloignées de l’emploi.',
  },
  {
    patterns: [/qpv/, /quartier\s+prioritaire/],
    briefId: 'formation-qpv-bordeaux',
    slug: '/formation-insertion-quartier-prioritaire-bordeaux',
    priority: 'medium',
    rationale: 'SEO local quartiers prioritaires.',
  },
  {
    patterns: [/retour\s+a\s+l.?emploi/, /retrouver\s+un\s+emploi/, /demandeur\s+d.?emploi/],
    briefId: 'accompagnement-retour-emploi',
    slug: '/accompagnement-retour-emploi-lormont',
    priority: 'medium',
    rationale: 'Accompagnement retour à l’emploi.',
  },
  {
    patterns: [/organisme\s+formation/, /centre\s+formation/, /insertion\s+professionnelle/],
    briefId: 'insertion-professionnelle-organisme',
    slug: '/organisme-formation-insertion-professionnelle',
    priority: 'medium',
    rationale: 'Recherche organisme de formation insertion.',
  },
  {
    patterns: [/formation\s+courte/, /professionnalisante/, /recrutement\s+inclusif/],
    briefId: 'formations-professionnalisantes-hub',
    slug: '/formations/courtes-professionnalisantes',
    priority: 'medium',
    rationale: 'Formations courtes professionnalisantes.',
  },
  {
    patterns: [/salle\s+formation/, /louer\s+salle/],
    briefId: 'location-salles-lormont',
    slug: '/location-salles-lormont',
    priority: 'low',
    rationale: 'Location de salles.',
  },
  {
    patterns: [/inscription/, /reunion\s+info/, /session/],
    briefId: 'formations-hub',
    slug: '/s-inscrire',
    priority: 'high',
    rationale: 'Intention inscription / réunion d’information.',
  },
]

export function normalizeProspectQuery(query: string): string {
  return query
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function getSerpSnapshots(): SerpSnapshot[] {
  return SERP_SNAPSHOTS
}

export function getSerpByKeyword(keyword: string): SerpSnapshot | undefined {
  const norm = normalizeProspectQuery(keyword)
  return SERP_SNAPSHOTS.find(
    (s) => normalizeProspectQuery(s.keyword) === norm
  )
}

export function getSerpForCluster(clusterId: string): SerpSnapshot | undefined {
  return SERP_SNAPSHOTS.find((s) => s.clusterId === clusterId)
}

export function getSerpForBrief(briefId: string): SerpSnapshot | undefined {
  const serpId = BRIEF_SERP_MAP[briefId]
  return serpId ? SERP_SNAPSHOTS.find((s) => s.id === serpId) : undefined
}

export function mapProspectQuery(query: string): ProspectMapping | null {
  const normalized = normalizeProspectQuery(query)
  if (!normalized) return null

  for (const rule of PROSPECT_RULES) {
    if (rule.patterns.some((p) => p.test(normalized))) {
      return {
        targetBriefId: rule.briefId,
        suggestedSlug: rule.slug,
        priority: rule.priority,
        rationale: rule.rationale,
      }
    }
  }

  // Fallback : recherche par mot-clé cluster
  for (const snapshot of SERP_SNAPSHOTS) {
    const kw = normalizeProspectQuery(snapshot.keyword)
    if (normalized.includes(kw) || kw.includes(normalized)) {
      const cluster = getKeywordClusterById(snapshot.clusterId)
      const briefId =
        Object.entries(BRIEF_SERP_MAP).find(([, sid]) => sid === snapshot.id)?.[0] ??
        'formations-hub'
      return {
        targetBriefId: briefId,
        suggestedSlug: cluster ? `/${cluster.id}` : '/formations',
        priority: 'low',
        rationale: `Correspondance partielle avec la requête SERP « ${snapshot.keyword} ».`,
      }
    }
  }

  return null
}
