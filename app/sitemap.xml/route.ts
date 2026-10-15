import { NextResponse } from 'next/server'

import { buildSitemapXml, fallbackSitemapXml } from '../../lib/seo/sitemapXml'

export const runtime = 'nodejs'
/** Les articles planifiés entrent dans l’inventaire sans nouveau build. */
export const revalidate = 3600

const XML_HEADERS = {
  'Content-Type': 'application/xml; charset=utf-8',
  'Cache-Control': 'public, max-age=0, must-revalidate',
}

/**
 * Route explicite, à la place de app/sitemap.ts.
 * La convention metadata importe le module au chargement puis sérialise
 * le tableau hors de notre try/catch : un échec d’import ou de résolution
 * répondait 500, pendant que le CDN gardait parfois l’ancien XML.
 * Ici l’import dynamique et la sérialisation sont dans le même try :
 * en cas d’échec, on renvoie au minimum la page d’accueil, en 200.
 */
export async function GET() {
  try {
    const { getIndexableRegistry } = await import('../../lib/seo/page-registry')
    const xml = buildSitemapXml(getIndexableRegistry())
    return new NextResponse(xml, { headers: XML_HEADERS })
  } catch (error) {
    console.error('[sitemap] échec de génération :', error)
    return new NextResponse(fallbackSitemapXml(), {
      status: 200,
      headers: XML_HEADERS,
    })
  }
}
