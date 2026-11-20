/**
 * Assemblage des 15 articles CIP / formations courtes (nov. 2026 – janv. 2027).
 */

import {
  ARTICLES_CIP_COURTES_NOV,
  toConversionNov,
  toInternalLinksNov,
  toListingNov,
} from '../seo/articlesCipCourtesNov2026.js'
import { CONTENTS_NOV, faqNov } from './cipCourtesNov2026Content.js'

export const articlesCipCourtesNov2026 = ARTICLES_CIP_COURTES_NOV.map((article) => ({
  ...toListingNov(article),
  faqItems: faqNov(article.slug),
  internalLinks: toInternalLinksNov(article),
  content: CONTENTS_NOV[article.slug],
  conversion: toConversionNov(article),
}))
