/**
 * Sérialisation du sitemap, hors convention metadata de Next.
 * Next appelle resolveRouteData après le retour de app/sitemap.ts :
 * une exception à ce moment-là, ou à l’import du module, répond HTTP 500
 * alors que le try/catch interne ne s’exécute pas.
 */

const DEFAULT_BASE_URL = 'https://www.atipikrh.com'

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function lastModIso(isoDate) {
  if (!isoDate) return undefined
  const parsed = new Date(`${isoDate}T00:00:00.000Z`)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString()
}

export function buildSitemapXml(entries, baseUrl = DEFAULT_BASE_URL) {
  const origin = String(baseUrl).replace(/\/$/, '')
  const urls = (Array.isArray(entries) ? entries : [])
    .filter((item) => item && typeof item.path === 'string' && item.path.startsWith('/'))
    .map((item) => {
      const loc = escapeXml(`${origin}${item.path}`)
      const lastModified = lastModIso(item.lastModified)
      const lines = ['<url>', `<loc>${loc}</loc>`]
      if (lastModified) lines.push(`<lastmod>${lastModified}</lastmod>`)
      if (item.changeFrequency) lines.push(`<changefreq>${escapeXml(item.changeFrequency)}</changefreq>`)
      if (typeof item.priority === 'number' && item.priority >= 0 && item.priority <= 1) {
        lines.push(`<priority>${item.priority}</priority>`)
      }
      lines.push('</url>')
      return lines.join('\n')
    })

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls.join('\n'),
    '</urlset>',
    '',
  ].join('\n')
}

export function fallbackSitemapXml(baseUrl = DEFAULT_BASE_URL) {
  return buildSitemapXml(
    [{ path: '/', changeFrequency: 'weekly', priority: 1 }],
    baseUrl
  )
}
