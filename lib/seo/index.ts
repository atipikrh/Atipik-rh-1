export * from './types'
export * from './site'
export * from './keywords'
export * from './serp-intent'
export * from './content-briefs'
export * from './prompts'
export * from './schema'
export * from './page-registry'
export * from './rafaelCapCip'
export * from './citations'

import type { SeoContextForAI } from './types'
import { getBriefById } from './content-briefs'
import { getClusterForBrief } from './keywords'
import { getSerpForBrief, mapProspectQuery } from './serp-intent'
import {
  buildFaqPrompt,
  buildHeadingOutlinePrompt,
  buildLinkedInPostPrompt,
  buildLocalLandingPrompt,
  buildMetaPrompt,
  buildServicePagePrompt,
} from './prompts'
import { buildRecommendedSchema } from './schema'

/**
 * Contexte SEO complet pour injection dans Cursor / agents IA.
 * @param briefId — identifiant du brief (ex. formation-cip)
 */
export function getSeoContextForAI(briefId: string): SeoContextForAI | null {
  const brief = getBriefById(briefId)
  if (!brief) return null

  return {
    brief,
    keywords: getClusterForBrief(briefId),
    serp: getSerpForBrief(briefId),
    prompts: {
      page: buildServicePagePrompt(briefId),
      meta: buildMetaPrompt(briefId),
      faq: buildFaqPrompt(briefId),
      headings: buildHeadingOutlinePrompt(briefId),
      linkedIn: buildLinkedInPostPrompt(briefId, 'tips'),
      local: buildLocalLandingPrompt(briefId),
    },
    schemaExample: buildRecommendedSchema(briefId),
  }
}

/** Recommandation SEO à partir d’une requête prospect (formulaire, chat). */
export function getSeoRecommendationFromProspectQuery(query: string) {
  const mapping = mapProspectQuery(query)
  if (!mapping) return null
  const context = getSeoContextForAI(mapping.targetBriefId)
  return { mapping, context }
}
