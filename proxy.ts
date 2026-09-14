import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/** Paramètres WordPress legacy à retirer. */
const LEGACY_QUERY_PARAMS = ['page_id', 'mailpoet_page', 's', 'trk']

/** PDFs wp-content migrés vers de nouvelles destinations. */
const WP_CONTENT_REDIRECTS: Record<string, string> = {
  '/wp-content/uploads/2021/03/Cadre-legal-du-Bilan-de-competences.pdf':
    '/documents/Cadre-legal-du-Bilan-de-competences.pdf',
  '/wp-content/uploads/2022/02/Programme-de-formation-VAE-ATIPIK-RH.pdf': '/vae',
}

function hostnameWithoutPort(host: string) {
  return host.split(':')[0].toLowerCase()
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  let changed = false

  // Canonique www (vercel.json couvre aussi l’apex, y compris /documents hors matcher).
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? ''
  if (hostnameWithoutPort(host) === 'atipikrh.com') {
    url.hostname = 'www.atipikrh.com'
    changed = true
  }

  const pathname = url.pathname
  const specificRedirect = WP_CONTENT_REDIRECTS[pathname]
  if (specificRedirect) {
    return NextResponse.redirect(new URL(specificRedirect, request.url), 301)
  }

  if (pathname.startsWith('/wp-content/')) {
    return NextResponse.redirect(new URL('/', request.url), 301)
  }

  if (pathname.length > 1 && pathname.endsWith('/')) {
    url.pathname = pathname.replace(/\/+$/, '')
    changed = true
  }

  const hasLegacyParam = LEGACY_QUERY_PARAMS.some((p) => url.searchParams.has(p))
  if (hasLegacyParam) {
    LEGACY_QUERY_PARAMS.forEach((p) => url.searchParams.delete(p))
    changed = true
  }

  if (changed) {
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|images|documents|fonts).*)'],
}
