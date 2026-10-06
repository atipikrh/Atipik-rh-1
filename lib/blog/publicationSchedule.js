/**
 * Calendrier de mise en ligne des articles blog (fuseau Europe/Paris).
 * Une chaîne = publication à partir de minuit le jour indiqué.
 * Un objet { iso, time } = publication à partir de cette heure, le jour indiqué.
 * Un slug absent de cette carte est considéré déjà publié.
 */

export const BLOG_PUBLISH_ISO_BY_SLUG = {
  'recrutement-sans-discrimination-points-controle': '2026-09-15',
  'recrutement-inclusif-objectiver-criteres': '2026-09-17',
  'salarie-demotive-bilan-de-competences': '2026-09-22',
  'experience-professionnelle-non-reconnue-vae': '2026-09-24',
  'formation-cip-ou-fpa-quelle-certification-choisir': '2026-09-29',
  'neurodiversite-inclusion-recrutement': '2026-10-01',
  'recruter-en-insertion-parcours-entreprise-candidat': { iso: '2026-10-07', time: '08:00' },
  'recrutement-inclusif-7-erreurs-perdre-candidats': { iso: '2026-10-08', time: '08:00' },
  'relation-entreprise-insertion-partenariat-durable': { iso: '2026-10-13', time: '08:00' },
  'former-recruteurs-diversite-plan-action': { iso: '2026-10-15', time: '08:00' },
  'recruter-par-les-competences-securiser-embauches': { iso: '2026-10-20', time: '08:00' },
  'essentiels-numerique-professionnels-accompagnement': { iso: '2026-10-22', time: '08:00' },
  'ia-accompagnement-usages-sans-perdre-humain': { iso: '2026-10-27', time: '08:00' },
  'quelle-formation-courte-choisir-equipe': { iso: '2026-10-29', time: '08:00' },
}

export function parisCalendarIso(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now)
}

/** Heure HH:mm à Paris, toujours sur deux chiffres. */
export function parisTimeHm(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Paris',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now)
  const pick = (type) => parts.find((part) => part.type === type)?.value || '00'
  const hour = String(parseInt(pick('hour'), 10) % 24).padStart(2, '0')
  const minute = String(parseInt(pick('minute'), 10) || 0).padStart(2, '0')
  return `${hour}:${minute}`
}

function resolveSchedule(slug) {
  const raw = BLOG_PUBLISH_ISO_BY_SLUG[slug]
  if (!raw) return null
  if (typeof raw === 'string') return { iso: raw, time: null }
  return { iso: raw.iso, time: raw.time || null }
}

function minutesOfDay(hm) {
  const [hour, minute] = hm.split(':').map((value) => parseInt(value, 10))
  return hour * 60 + minute
}

function isPublishSlotReached(iso, time, now) {
  const today = parisCalendarIso(now)
  if (today > iso) return true
  if (today < iso) return false
  if (!time) return true
  return minutesOfDay(parisTimeHm(now)) >= minutesOfDay(time)
}

export function isBlogArticleLive(article, now = new Date()) {
  const scheduled = resolveSchedule(article?.slug)
  const iso = scheduled?.iso || article?.isoDate
  if (!iso) return true
  return isPublishSlotReached(iso, scheduled?.time || null, now)
}

export function isScheduledBlogSlugLive(slug, now = new Date()) {
  const scheduled = resolveSchedule(slug)
  if (!scheduled) return true
  return isPublishSlotReached(scheduled.iso, scheduled.time, now)
}
