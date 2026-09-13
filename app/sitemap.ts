import type { MetadataRoute } from 'next'
import { BASE_URL } from '../lib/seo/site'
import { getIndexableRegistry } from '../lib/seo/page-registry'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function toLastModified(isoDate?: string): Date {
  if (!isoDate) return new Date()
  const parsed = new Date(`${isoDate}T00:00:00.000Z`)
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed
}

export default function sitemap(): MetadataRoute.Sitemap {
  try {
    const registry = getIndexableRegistry()
    return registry.map((item) => ({
      url: `${BASE_URL}${item.path}`,
      lastModified: toLastModified(item.lastModified),
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    }))
  } catch (error) {
    console.error('[sitemap] échec de génération :', error)
    return [
      {
        url: `${BASE_URL}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
    ]
  }
}
