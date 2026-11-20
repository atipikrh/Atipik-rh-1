/**
 * Calendrier de mise en ligne des articles blog (fuseau Europe/Paris).
 * Une chaîne = publication à partir de minuit le jour indiqué.
 * Un objet { iso, time } = publication à partir de cette heure, le jour indiqué.
 * Un slug absent de cette carte est considéré déjà publié.
 */

export const BLOG_PUBLISH_ISO_BY_SLUG = {
  'atipik-rh-parcours-projets-realite': '2024-11-19',
  'reussite-promotion-cip-100-pour-100': '2025-06-05',
  'espaces-de-travail-centre-lormont': '2025-06-18',
  'temoignages-apprenants-formation-cip': '2025-07-30',
  'reunion-information-formation-fpa': '2026-02-20',
  'formations-courtes-recrutement-inclusif-competences': '2026-02-24',
  'rentree-formation-cip-fevrier-2026': '2026-02-25',
  'atipik-rh-fete-ses-7-ans': '2026-03-12',
  'soiree-recrutement-inclusif-darwin-bordeaux': '2026-03-26',
  'journee-immersion-cip-au-plus-pres-du-reel': '2026-05-13',
  'recrutement-inclusif-sessions-juin-septembre-2026': '2026-05-22',
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
  'formations-courtes-professionnalisantes-bordeaux-lormont': { iso: '2026-11-24', time: '06:00' },
  'reunion-information-formation-cip-lormont': { iso: '2026-11-26', time: '06:00' },
  'financer-formation-cip-bordeaux-2027': { iso: '2026-12-01', time: '06:00' },
  'session-prevenir-discriminations-recrutement-decembre-2026': { iso: '2026-12-03', time: '06:00' },
  'session-developper-relation-entreprise-decembre-2026': { iso: '2026-12-08', time: '06:00' },
  'session-renforcer-pratiques-recrutement-decembre-2026': { iso: '2026-12-10', time: '06:00' },
  'session-recruter-insertion-entreprises-decembre-2026': { iso: '2026-12-15', time: '06:00' },
  'conditions-inscription-formation-cip-lormont': { iso: '2026-12-17', time: '06:00' },
  'session-renforcer-partenariat-entreprises-decembre-2026': { iso: '2026-12-22', time: '06:00' },
  'pedagogie-au-plus-pres-du-reel-formation-cip': { iso: '2026-12-24', time: '06:00' },
  'session-essentiels-numerique-janvier-2027': { iso: '2026-12-29', time: '06:00' },
  'session-ia-accompagnement-janvier-2027': { iso: '2026-12-31', time: '06:00' },
  'formation-courte-intra-ou-inter-equipe': { iso: '2027-01-05', time: '06:00' },
  'financer-formation-courte-opco-employeur': { iso: '2027-01-07', time: '06:00' },
  'formations-courtes-missions-locales-siae': { iso: '2027-01-12', time: '06:00' },
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

/** Date de publication planifiée, ou null si l’article n’a pas de calendrier. */
export function getBlogPublishIso(slug) {
  return resolveSchedule(slug)?.iso || null
}
