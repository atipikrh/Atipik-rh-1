import type { MetadataRoute } from 'next'
import { BASE_URL } from '../lib/seo/site'
import { getIndexableRegistry } from '../lib/seo/page-registry'

export const runtime = 'nodejs'
/** Régénération horaire : les articles planifiés entrent sans recalcul à chaque visite. */
export const revalidate = 3600

function toLastModified(isoDate?: string): Date | undefined {
  if (!isoDate) return undefined
  const parsed = new Date(`${isoDate}T00:00:00.000Z`)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed
}

export default function sitemap(): MetadataRoute.Sitemap {
  try {
    const registry = getIndexableRegistry()
    return registry.map((item) => {
      const lastModified = toLastModified(item.lastModified)
      return {
        url: `${BASE_URL}${item.path}`,
        ...(lastModified ? { lastModified } : {}),
        changeFrequency: item.changeFrequency,
        priority: item.priority,
      }
    })
  } catch (error) {
    console.error('[sitemap] échec de génération :', error)
    return [
      {
        url: `${BASE_URL}/`,
        changeFrequency: 'weekly',
        priority: 1,
      },
    ]
  }
}
