/**
 * Calendrier de mise en ligne des articles blog (fuseau Europe/Paris).
 * Un slug absent de cette carte est considéré déjà publié.
 */

export const BLOG_PUBLISH_ISO_BY_SLUG = {
  'recrutement-sans-discrimination-points-controle': '2026-09-15',
  'recrutement-inclusif-objectiver-criteres': '2026-09-17',
  'salarie-demotive-bilan-de-competences': '2026-09-22',
  'experience-professionnelle-non-reconnue-vae': '2026-09-24',
  'formation-cip-ou-fpa-quelle-certification-choisir': '2026-09-29',
  'neurodiversite-inclusion-recrutement': '2026-10-01',
}

export function parisCalendarIso(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now)
}

export function isBlogArticleLive(article, now = new Date()) {
  const iso = article?.isoDate || BLOG_PUBLISH_ISO_BY_SLUG[article?.slug]
  if (!iso) return true
  return iso <= parisCalendarIso(now)
}

export function isScheduledBlogSlugLive(slug, now = new Date()) {
  const iso = BLOG_PUBLISH_ISO_BY_SLUG[slug]
  if (!iso) return true
  return iso <= parisCalendarIso(now)
}
