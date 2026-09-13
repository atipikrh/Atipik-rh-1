/**
 * Filtre les liens internes vers des articles blog pas encore publiés.
 */
import { isScheduledBlogSlugLive } from './publicationSchedule.js'

export function getBlogSlugFromHref(href) {
  if (!href || typeof href !== 'string') return null
  const path = href.split('?')[0].split('#')[0]
  const match = path.match(/^\/blog\/([a-z0-9-]+)\/?$/i)
  return match?.[1] || null
}

export function isInternalHrefLive(href, now = new Date()) {
  const slug = getBlogSlugFromHref(href)
  if (!slug) return true
  return isScheduledBlogSlugLive(slug, now)
}

export function filterLiveInternalLinks(links, now = new Date()) {
  return (links || []).filter((item) => isInternalHrefLive(item.href, now))
}

/** Remplace un lien vers un article non live par son contenu (évite un 404). */
export function rewriteUnpublishedBlogAnchors(html, now = new Date()) {
  if (!html || typeof html !== 'string') return html
  return html.replace(
    /<a\b([^>]*?)href=(["'])([^"']+)\2([^>]*)>([\s\S]*?)<\/a>/gi,
    (full, _pre, _quote, href, _post, inner) => {
      if (isInternalHrefLive(href, now)) return full
      return inner
    }
  )
}
