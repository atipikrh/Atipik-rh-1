import { CERTIFICATIONS, GEO_ZONES, ORGANIZATION, SERVICES_SUMMARY } from './site'
import { getBriefById } from './content-briefs'
import { getClusterForBrief } from './keywords'
import { getSerpForBrief } from './serp-intent'

const RULES_REFERENCE = 'cursor_seo_rules_vfinal.md (v3, sans vidéo)'

const GUARDRAILS = `
CONTRAINTES OBLIGATOIRES :
- Ne pas inventer de dates de session, tarifs, taux de réussite ou chiffres non fournis dans le brief.
- Si une donnée manque, renvoyer vers /contact ou /s-inscrire sans la fabriquer.
- Ton professionnel, chaleureux, orienté insertion et reconversion — jamais générique « centre de formation ».
- Ancrage local : Lormont, Bordeaux Métropole, Gironde. Aquitaine = nom de recherche ; Nouvelle-Aquitaine = nom administratif. Ne pas inventer d’antenne à Pau, Bayonne ou Agen.
- Pas de keyword stuffing ; titres et meta uniques.
- Images : WebP/AVIF, alt descriptif, pas de vidéo.
- Revue humaine obligatoire avant publication.
`.trim()

function briefBlock(briefId: string): string {
  const brief = getBriefById(briefId)
  if (!brief) return `Brief introuvable : ${briefId}`

  const cluster = getClusterForBrief(briefId)
  const serp = getSerpForBrief(briefId)

  return `
ORGANISME : ${ORGANIZATION.name} — ${ORGANIZATION.url}
ZONES : ${GEO_ZONES.join(', ')}
CERTIFICATIONS : ${CERTIFICATIONS.join(' ; ')}
SERVICES : ${SERVICES_SUMMARY.join(' ; ')}

BRIEF ID : ${brief.id}
TYPE PAGE : ${brief.pageType}
H1 : ${brief.h1}
META TITLE (≤60 car.) : ${brief.metaTitle}
META DESCRIPTION (≤155 car.) : ${brief.metaDescription}
SLUG RECOMMANDÉ : ${brief.recommendedSlug}
PAGE EXISTANTE : ${brief.existingPagePath ?? 'à créer'}
INTENTION : ${brief.intent}
PERSONAS : ${brief.personas.join(', ')}

MOTS-CLÉS PRINCIPAUX : ${brief.primaryKeywords.join(', ')}
LONGUE TRAÎNE : ${brief.longTailKeywords.slice(0, 10).join(' | ')}

${cluster ? `CLUSTER : ${cluster.label} — ${cluster.primaryKeyword}` : ''}

${serp ? `ANGLES SERP : ${serp.editorialAngles.join(' ; ')}
PAA : ${serp.peopleAlsoAsk.join(' | ')}` : ''}

FAQ SEED :
${brief.faq.map((f) => `- Q: ${f.question}\n  R: ${f.answer}`).join('\n')}

MAILLAGE INTERNE :
${brief.internalLinks.map((l) => `- [${l.label}](${l.href}) — ${l.anchorIntent}`).join('\n')}

E-E-A-T : ${brief.eeatSignals.join(' ; ')}
SCHEMA RECOMMANDÉ : ${brief.schemaTypes.join(', ')}
`.trim()
}

export function buildServicePagePrompt(briefId: string): string {
  const block = briefBlock(briefId)
  const brief = getBriefById(briefId)
  const wordTarget = brief?.pageType === 'pilier' ? '≥ 2500 mots' : '800–1200 mots'

  return `
Tu rédiges une page de service pour ATIPIK RH (organisme de formation insertion & reconversion, Lormont / Bordeaux).

Référence règles : ${RULES_REFERENCE}
${GUARDRAILS}

${block}

LIVRABLE :
- Structure H1 unique + H2/H3 sémantiques
- ${wordTarget}
- Section FAQ ≥ 4 questions (réutiliser ou enrichir la FAQ seed sans contredire les faits)
- CTA « Prendre RDV » / lien vers /contact et /s-inscrire
- 4–6 liens internes naturels (voir maillage)
- Paragraphe local SEO (accessibilité Lormont, Bordeaux Métropole)
- Pas de contenu générique applicable à tout OF
`.trim()
}

export function buildBlogArticlePrompt(briefId: string, angle?: string): string {
  const block = briefBlock(briefId)
  const editorialAngle = angle ?? 'guide pratique avec retour d’expérience terrain'

  return `
Tu rédiges un article de blog expert pour ATIPIK RH.

${GUARDRAILS}
${block}

ANGLE ÉDITORIAL : ${editorialAngle}

LIVRABLE :
- 1200–1800 mots
- Introduction avec promesse claire
- Exemples concrets insertion / reconversion / Gironde
- Encadré « Chez Atipik RH à Lormont » avec lien vers la page service liée
- FAQ 3–5 questions
- Meta title et meta description uniques en fin de livrable
`.trim()
}

export function buildFaqPrompt(briefId: string): string {
  const block = briefBlock(briefId)
  return `
Génère une section FAQ SEO pour ATIPIK RH.

${GUARDRAILS}
${block}

Format : questions en langage naturel (comme People Also Ask), réponses 2–4 phrases, factuelles.
Minimum 5 questions dont au moins 2 avec ancrage local (Lormont, Bordeaux, Gironde).
`.trim()
}

export function buildHeadingOutlinePrompt(briefId: string): string {
  const block = briefBlock(briefId)
  return `
Propose un plan H1–H3 pour la page ATIPIK RH suivante.

${block}

Contraintes : un seul H1 ; H2 = intentions de recherche ; H3 = détails / preuves / processus.
Inclure : financement, déroulement, public concerné, zone géographique, FAQ.
`.trim()
}

export function buildMetaPrompt(briefId: string): string {
  const brief = getBriefById(briefId)
  if (!brief) return `Brief introuvable : ${briefId}`

  return `
Génère 3 variantes de meta title (≤60 caractères) et 3 meta descriptions (≤155 caractères) pour :

H1 : ${brief.h1}
Mots-clés : ${brief.primaryKeywords.join(', ')}
Marque : Atipik RH
Local : Lormont / Bordeaux

${GUARDRAILS}

Chaque variante doit être unique et orientée clic (intention ${brief.intent}).
`.trim()
}

export type LinkedInFormat = 'story' | 'tips' | 'event'

export function buildLinkedInPostPrompt(
  briefId: string,
  format: LinkedInFormat = 'tips'
): string {
  const block = briefBlock(briefId)
  const formatGuide = {
    story: 'récit court d’un parcours stagiaire (fictif mais réaliste, sans nom réel)',
    tips: '5 conseils actionnables numérotés',
    event: 'annonce réunion d’information — sans date inventée, renvoyer à /s-inscrire',
  }[format]

  return `
Rédige un post LinkedIn pour la page entreprise Atipik RH.

${block}

FORMAT : ${formatGuide}
Longueur : 1200–1800 caractères max.
Hashtags : 3–5 (#InsertionProfessionnelle #Bordeaux #Formation etc.)
${GUARDRAILS}
`.trim()
}

export function buildLocalLandingPrompt(briefId: string): string {
  const block = briefBlock(briefId)
  return `
Rédige une landing page SEO LOCAL pour ATIPIK RH.

${block}
${GUARDRAILS}

Sections obligatoires :
- Héros avec H1 local (Lormont / Bordeaux / Nouvelle-Aquitaine)
- Pourquoi choisir Atipik RH sur la rive droite
- Accès et transports depuis Bordeaux Métropole
- Offre liée au brief
- FAQ locale (4 questions)
- CTA contact + s-inscrire
`.trim()
}
