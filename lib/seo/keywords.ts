import type { KeywordCluster } from './types'

const CLUSTERS: KeywordCluster[] = [
  {
    id: 'formation-cip-bordeaux',
    label: 'Formation CIP Bordeaux / Lormont',
    primaryKeyword: 'formation CIP Bordeaux',
    intent: 'commercial',
    modifiers: {
      geo: ['Bordeaux', 'Lormont', 'Gironde', 'Bordeaux Métropole', 'Nouvelle-Aquitaine'],
      financement: ['CPF', 'France Travail', 'OPCO', 'Pôle emploi'],
      public: ['reconversion', 'demandeur d’emploi'],
    },
    longTail: [
      'formation CIP Bordeaux financement CPF',
      'devenir conseiller insertion professionnelle Lormont',
      'titre CIP niveau 5 Nouvelle-Aquitaine',
      'formation conseiller insertion professionnelle Bordeaux métropole',
      'école CIP Gironde alternance',
      'formation CIP Lormont rive droite Bordeaux',
      'devenir CIP après reconversion professionnelle',
      'formation insertion professionnelle certifiante Bordeaux',
      'titre professionnel conseiller insertion Lormont',
      'formation CIP financement France Travail Gironde',
      'où faire formation CIP près de Bordeaux',
      'formation CIP Qualiopi Nouvelle-Aquitaine',
    ],
    secondaryKeywords: [
      'conseiller insertion professionnelle',
      'titre CIP',
      'RNCP insertion',
      'organisme formation Lormont',
    ],
  },
  {
    id: 'formation-fpa-nouvelle-aquitaine',
    label: 'Formation FPA Nouvelle-Aquitaine',
    primaryKeyword: 'formation FPA Nouvelle-Aquitaine',
    intent: 'commercial',
    modifiers: {
      geo: ['Bordeaux', 'Lormont', 'Gironde', 'Nouvelle-Aquitaine'],
      financement: ['CPF', 'France Travail'],
      public: ['reconversion', 'formateur adultes'],
    },
    longTail: [
      'formation formateur professionnel adultes Nouvelle-Aquitaine',
      'devenir formateur professionnel Bordeaux métropole',
      'formation FPA Lormont financement CPF',
      'titre formateur professionnel adultes niveau 5 Gironde',
      'formation FPA Bordeaux après reconversion',
      'devenir formateur pour adultes sans longues études',
      'formation FPA certifiante Qualiopi Lormont',
      'où faire formation FPA près Bordeaux',
      'formation formateur insertion professionnelle cumul CIP',
      'formation FPA alternance Nouvelle-Aquitaine',
      'devenir formateur OF près de Bordeaux',
      'programme formation FPA adultes Lormont',
    ],
    secondaryKeywords: [
      'formateur professionnel adultes',
      'titre FPA',
      'formation formateur',
      'OF formateur Gironde',
    ],
  },
  {
    id: 'reconversion-bordeaux',
    label: 'Reconversion professionnelle Bordeaux',
    primaryKeyword: 'reconversion professionnelle Bordeaux',
    intent: 'informational',
    modifiers: {
      geo: ['Bordeaux', 'Lormont', 'Gironde'],
      financement: ['CPF', 'aides régionales', 'France Travail'],
      public: ['après 40 ans', 'cadre', 'salarié'],
    },
    longTail: [
      'reconversion professionnelle Bordeaux après 40 ans',
      'changer de métier accompagnement Lormont',
      'projet reconversion professionnelle Gironde CPF',
      'comment réussir reconversion Bordeaux métropole',
      'reconversion vers métiers accompagnement social Bordeaux',
      'financer reconversion professionnelle 2026 Nouvelle-Aquitaine',
      'bilan compétences avant reconversion Lormont',
      'reconversion insertion professionnelle Bordeaux',
      'accompagnement reconversion demandeur emploi Gironde',
      'changer de carrière à Bordeaux centre formation',
      'reconversion professionnelle femme retour emploi',
      'étapes reconversion métropole bordelaise',
    ],
    secondaryKeywords: [
      'changement de carrière',
      'projet professionnel',
      'bilan compétences',
      'financement reconversion',
    ],
  },
  {
    id: 'organisme-insertion',
    label: 'Organisme formation insertion professionnelle',
    primaryKeyword: 'organisme de formation insertion professionnelle',
    intent: 'commercial',
    modifiers: {
      geo: ['Bordeaux', 'Lormont', 'Nouvelle-Aquitaine'],
      financement: ['Qualiopi', 'CPF'],
      public: ['structures insertion', 'associations'],
    },
    longTail: [
      'organisme formation insertion professionnelle Bordeaux',
      'centre formation insertion Lormont',
      'OF insertion socioprofessionnelle Gironde',
      'formation insertion professionnelle Qualiopi Nouvelle-Aquitaine',
      'organisme accompagnement demandeurs emploi Bordeaux',
      'centre formation CIP FPA Lormont',
      'organisme formation métiers accompagnement Bordeaux métropole',
      'formation continue insertion professionnelle rive droite',
      'organisme certifié Qualiopi insertion Lormont',
      'parcours insertion reconversion Atipik RH',
    ],
    secondaryKeywords: [
      'insertion professionnelle',
      'accompagnement socioprofessionnel',
      'formation continue',
      'OF Qualiopi',
    ],
  },
  {
    id: 'bilan-competences-lormont',
    label: 'Bilan de compétences Lormont / Bordeaux',
    primaryKeyword: 'bilan de compétences Lormont',
    intent: 'transactional',
    modifiers: {
      geo: ['Lormont', 'Bordeaux', 'Gironde'],
      financement: ['CPF', 'employeur', 'France Travail'],
      public: ['cadre', 'reconversion', '+40 ans'],
    },
    longTail: [
      'bilan de compétences Lormont prise de RDV',
      'bilan compétences Bordeaux CPF éligible',
      'bilan compétences reconversion Lormont 5 étapes',
      'cabinet bilan compétences proche Bordeaux',
      'bilan compétences financement 2026 Gironde',
      'bilan compétences cadre plus 40 ans Bordeaux',
      'externaliser bilan compétences Lormont',
      'bilan compétences vs VAE que choisir',
      'bilan compétences demandeur emploi Nouvelle-Aquitaine',
      'signes besoin bilan compétences reconversion',
      'bilan compétences Atipik RH Lormont avis',
      'durée bilan compétences Bordeaux métropole',
    ],
    secondaryKeywords: [
      'bilan de compétences',
      'projet professionnel',
      'évolution de carrière',
      'VAE',
    ],
  },
  {
    id: 'accompagnement-retour-emploi',
    label: 'Accompagnement retour à l’emploi',
    primaryKeyword: 'accompagnement retour à l’emploi',
    intent: 'informational',
    modifiers: {
      geo: ['Bordeaux', 'Lormont', 'Gironde'],
      financement: ['France Travail', 'Mission locale'],
      public: ['demandeur d’emploi', 'longue durée'],
    },
    longTail: [
      'accompagnement retour emploi Bordeaux',
      'accompagnement retour emploi Lormont',
      'reprise emploi après longue absence Gironde',
      'accompagnement insertion demandeur emploi',
      'retour emploi femme éloignée emploi Bordeaux',
      'accompagnement projet professionnel France Travail',
      'formation retour emploi quartier prioritaire',
      'coaching retour emploi Bordeaux métropole',
      'parcours retour emploi insertion professionnelle',
      'accompagnement employabilité Lormont',
    ],
    secondaryKeywords: [
      'retour à l’emploi',
      'insertion',
      'employabilité',
      'accompagnement socioprofessionnel',
    ],
  },
  {
    id: 'metiers-accompagnement-social',
    label: 'Formation métiers accompagnement social',
    primaryKeyword: 'formation métiers accompagnement social',
    intent: 'commercial',
    modifiers: {
      geo: ['Bordeaux', 'Lormont'],
      financement: ['CPF'],
      public: ['reconversion', 'bénévolat associatif'],
    },
    longTail: [
      'formation pour travailler dans l’accompagnement social',
      'devenir conseiller insertion professionnelle formation',
      'métiers accompagnement insertion Bordeaux',
      'formation accompagnement socioprofessionnel Lormont',
      'reconversion vers métier accompagnement Gironde',
      'formation CIP métiers accompagnement',
      'travailler insertion professionnelle sans expérience',
      'formation accompagnement publics fragiles Bordeaux',
      'devenir professionnel accompagnement emploi',
      'formation métiers lien social insertion',
    ],
    secondaryKeywords: [
      'accompagnement social',
      'insertion socioprofessionnelle',
      'conseiller insertion',
      'travail social formation',
    ],
  },
  {
    id: 'femmes-eloignees-emploi',
    label: 'Formation femmes éloignées de l’emploi',
    primaryKeyword: 'formation professionnelle femmes éloignées de l’emploi',
    intent: 'local',
    modifiers: {
      geo: ['Bordeaux', 'Lormont', 'Gironde'],
      financement: ['France Travail', 'région'],
      public: ['femmes', 'parentalité', 'QPV'],
    },
    longTail: [
      'formation femmes éloignées emploi Bordeaux',
      'accompagnement femme retour emploi Lormont',
      'reconversion femme après pause carrière Gironde',
      'formation insertion femmes Bordeaux métropole',
      'parcours emploi femmes quartier prioritaire',
      'bilan compétences femme reconversion Lormont',
      'formation professionnelle reprise activité femme',
      'accompagnement insertion femmes Nouvelle-Aquitaine',
      'centre formation femmes retour emploi Bordeaux',
      'formation CIP accompagnement femmes',
    ],
    secondaryKeywords: [
      'retour emploi femmes',
      'inclusion professionnelle',
      'égalité emploi',
      'accompagnement spécifique',
    ],
  },
  {
    id: 'formation-qpv-bordeaux',
    label: 'Formation insertion quartier prioritaire Bordeaux',
    primaryKeyword: 'formation insertion quartier prioritaire Bordeaux',
    intent: 'local',
    modifiers: {
      geo: ['Bordeaux', 'Lormont', 'QPV', 'Gironde'],
      financement: ['politique de la ville', 'France Travail'],
      public: ['jeunes', 'habitants QPV'],
    },
    longTail: [
      'formation insertion quartier prioritaire Bordeaux',
      'accompagnement emploi QPV Gironde',
      'formation professionnelle quartiers prioritaires Lormont',
      'insertion professionnelle politique ville Bordeaux',
      'parcours emploi jeunes QPV formation',
      'organisme formation QPV Bordeaux métropole',
      'accompagnement insertion quartiers Lormont',
      'formation métiers accompagnement QPV',
      'retour emploi quartier prioritaire Bordeaux',
      'OF insertion proximité QPV rive droite',
    ],
    secondaryKeywords: [
      'QPV',
      'quartier prioritaire',
      'insertion locale',
      'accompagnement jeunes',
    ],
  },
  {
    id: 'formations-professionnalisantes',
    label: 'Formations courtes professionnalisantes insertion',
    primaryKeyword: 'formation professionnalisante insertion professionnelle',
    intent: 'commercial',
    modifiers: {
      geo: ['Bordeaux', 'Lormont'],
      financement: ['OPCO', 'employeur'],
      public: ['professionnels insertion', 'RH'],
    },
    longTail: [
      'formation courte relation entreprise insertion',
      'formation recrutement inclusif Bordeaux',
      'formation professionnalisante CIP Lormont',
      'formation pratiques recrutement diversité Gironde',
      'formation recruter insertion entreprises',
      'formation 21h insertion professionnelle Bordeaux',
      'montée compétences conseiller insertion',
      'formation RH recrutement sans discrimination',
      'formation professionnalisante Qualiopi Lormont',
      'catalogue formations courtes insertion Bordeaux',
    ],
    secondaryKeywords: [
      'formation professionnalisante',
      'relation entreprise',
      'recrutement inclusif',
      'montée en compétences',
    ],
  },
]

export function getKeywordClusters(): KeywordCluster[] {
  return CLUSTERS
}

export function getKeywordClusterById(clusterId: string): KeywordCluster | undefined {
  return CLUSTERS.find((c) => c.id === clusterId)
}

export interface ExpandLongTailOptions {
  max?: number
  includeGeo?: boolean
  includeFinancement?: boolean
  includePublic?: boolean
}

/** Combine variantes et modificateurs ; déduplique et limite le résultat. */
export function expandLongTail(
  clusterId: string,
  options: ExpandLongTailOptions = {}
): string[] {
  const cluster = getKeywordClusterById(clusterId)
  if (!cluster) return []

  const {
    max = 30,
    includeGeo = true,
    includeFinancement = true,
    includePublic = true,
  } = options

  const base = [...cluster.longTail, cluster.primaryKeyword]
  const combos: string[] = []

  const templates = [
    '{kw} {geo}',
    '{kw} {fin}',
    'formation {kw} {geo}',
    '{kw} Atipik RH {geo}',
  ]

  for (const kw of base) {
    combos.push(kw)
    if (includeGeo) {
      for (const geo of cluster.modifiers.geo) {
        for (const tpl of templates) {
          combos.push(
            tpl.replace('{kw}', kw).replace('{geo}', geo).replace('{fin}', '')
          )
        }
      }
    }
    if (includeFinancement) {
      for (const fin of cluster.modifiers.financement) {
        combos.push(`${kw} ${fin}`)
      }
    }
    if (includePublic) {
      for (const pub of cluster.modifiers.public) {
        combos.push(`${kw} ${pub}`)
      }
    }
  }

  const seen = new Set<string>()
  const out: string[] = []
  for (const phrase of combos) {
    const normalized = phrase.replace(/\s+/g, ' ').trim().toLowerCase()
    if (!normalized || normalized.length < 8 || seen.has(normalized)) continue
    seen.add(normalized)
    out.push(phrase.replace(/\s+/g, ' ').trim())
    if (out.length >= max) break
  }
  return out
}

export function getSecondaryKeywords(clusterId: string): string[] {
  const cluster = getKeywordClusterById(clusterId)
  return cluster?.secondaryKeywords ?? []
}

/** Brief ID → cluster ID */
export const BRIEF_CLUSTER_MAP: Record<string, string> = {
  'formation-cip': 'formation-cip-bordeaux',
  'formation-fpa': 'formation-fpa-nouvelle-aquitaine',
  'formation-fpa-ccp1': 'formation-fpa-nouvelle-aquitaine',
  'formation-fpa-ccp2': 'formation-fpa-nouvelle-aquitaine',
  'formation-fpa-ccp3': 'formation-fpa-nouvelle-aquitaine',
  'formation-fpa-ccp4': 'formation-fpa-nouvelle-aquitaine',
  'formation-ccp1': 'formation-cip-bordeaux',
  'formation-ccp2': 'formation-cip-bordeaux',
  'formation-ccp3': 'formation-cip-bordeaux',
  'accueil': 'organisme-insertion',
  'formations-hub': 'organisme-insertion',
  'bilan-competences-local': 'bilan-competences-lormont',
  'reconversion-bordeaux': 'reconversion-bordeaux',
  'insertion-professionnelle-organisme': 'organisme-insertion',
  'metiers-accompagnement': 'metiers-accompagnement-social',
  'femmes-eloignees-emploi': 'femmes-eloignees-emploi',
  'formation-qpv-bordeaux': 'formation-qpv-bordeaux',
  'accompagnement-retour-emploi': 'accompagnement-retour-emploi',
  'formations-professionnalisantes-hub': 'formations-professionnalisantes',
  'vae': 'reconversion-bordeaux',
  'financement': 'reconversion-bordeaux',
  'location-salles-lormont': 'organisme-insertion',
}

export function getClusterForBrief(briefId: string): KeywordCluster | undefined {
  const clusterId = BRIEF_CLUSTER_MAP[briefId]
  return clusterId ? getKeywordClusterById(clusterId) : undefined
}
