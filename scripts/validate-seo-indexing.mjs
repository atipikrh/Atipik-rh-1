#!/usr/bin/env node
/**
 * Validation SEO indexation — canoniques, redirections, 404, sitemap.
 * Usage : node scripts/validate-seo-indexing.mjs [baseUrl]
 */
const BASE = process.argv[2] || process.env.SITE_URL || 'https://www.atipikrh.com'
const CANONICAL_BASE = process.env.SITE_URL || 'https://www.atipikrh.com'

const REDIRECT_CHECKS = [
  ['/bilan-de-competences/cpf', '/financement'],
  ['/vae/cpf', '/financement'],
  ['/formations/certifiantes', '/formations'],
  ['/formations/certifiantes/cip', '/formations/cip'],
  ['/equipe/martine-beaudon', '/equipe/martine-baudon'],
  ['/sitemap_index.xml', '/sitemap.xml'],
  ['/?page_id=3328', '/'],
  ['/mentions-legales/', '/mentions-legales'],
]

const CANONICAL_CHECKS = [
  { path: '/', expected: `${CANONICAL_BASE}/` },
  { path: '/financement', expected: `${CANONICAL_BASE}/financement` },
  { path: '/blog/formation-cip-bordeaux-conseiller-insertion-professionnelle', expected: `${CANONICAL_BASE}/blog/formation-cip-bordeaux-conseiller-insertion-professionnelle` },
  {
    path: '/blog/formation-conseiller-insertion-professionnelle-lormont',
    expected: `${CANONICAL_BASE}/blog/formation-cip-bordeaux-conseiller-insertion-professionnelle`,
    label: 'Article CIP Lormont → canonique Bordeaux',
  },
  { path: '/location-salles/grande-salle-formation', expected: `${CANONICAL_BASE}/location-salles/grande-salle-formation` },
]

const SITEMAP_MUST_INCLUDE = [
  '/location-salles/grande-salle-formation',
  '/location-salles/salle-reunion-moyenne',
  '/blog/formation-cip-bordeaux-conseiller-insertion-professionnelle',
]

const SITEMAP_MUST_EXCLUDE = [
  '/equipe/martine-beaudon',
  '/bilan-de-competences/cpf',
  '/blog/formation-conseiller-insertion-professionnelle-lormont',
  '/blog/comment-reduire-couts-recrutement-30-pourcent-formation-rh',
  '/formation-metiers-accompagnement-social',
]

function extractCanonical(html) {
  const m = html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
    || html.match(/<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i)
  return m?.[1] || null
}

function extractRobots(html) {
  const m = html.match(/<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["']/i)
  return m?.[1] || null
}

async function checkRedirect(fromPath, expectedLocationPart) {
  const url = `${BASE}${fromPath}`
  const res = await fetch(url, { redirect: 'manual' })
  const loc = res.headers.get('location') || ''
  const normalizedLoc = loc.replace(/\/$/, '')
  const normalizedExpected = expectedLocationPart.replace(/\/$/, '')
  const ok =
    (res.status === 301 || res.status === 308 || (res.status >= 300 && res.status < 400)) &&
    (normalizedLoc.endsWith(normalizedExpected) || normalizedLoc === `${CANONICAL_BASE}${normalizedExpected}`)
  return { ok, status: res.status, location: loc, url }
}

async function main() {
  console.log(`--- Validation SEO indexation — ${BASE} ---\n`)
  const errors = []

  // Sitemap
  const sitemapRes = await fetch(`${BASE}/sitemap.xml`)
  const sitemapText = await sitemapRes.text()
  const urlCount = (sitemapText.match(/<loc>/g) || []).length
  console.log(`${sitemapRes.ok ? '✅' : '❌'} Sitemap: ${urlCount} URLs`)
  if (!sitemapRes.ok) errors.push('Sitemap inaccessible')

  for (const path of SITEMAP_MUST_INCLUDE) {
    const found = sitemapText.includes(`${CANONICAL_BASE}${path}`)
    console.log(`${found ? '✅' : '❌'} Sitemap contient ${path}`)
    if (!found) errors.push(`Sitemap manque ${path}`)
  }
  for (const path of SITEMAP_MUST_EXCLUDE) {
    const found = sitemapText.includes(`${CANONICAL_BASE}${path}`)
    console.log(`${!found ? '✅' : '❌'} Sitemap exclut ${path}`)
    if (found) errors.push(`Sitemap ne doit pas contenir ${path}`)
  }

  // Redirections
  console.log('\n--- Redirections ---')
  for (const [from, to] of REDIRECT_CHECKS) {
    const r = await checkRedirect(from, to)
    console.log(`${r.ok ? '✅' : '❌'} ${from} → ${r.status} ${r.location || '(pas de Location)'}`)
    if (!r.ok) errors.push(`Redirect ${from} → ${to} incorrect`)
  }

  console.log('\n--- UTM conservés (pas de 301, canonique HTML) ---')
  const utmPath = '/contact?utm_source=google&utm_medium=cpc'
  const utmRes = await fetch(`${BASE}${utmPath}`, { redirect: 'manual' })
  const utmOk = utmRes.status === 200 || utmRes.status === 304
  console.log(`${utmOk ? '✅' : '❌'} ${utmPath}: HTTP ${utmRes.status} (pas de redirection)`)
  if (!utmOk) errors.push(`UTM contact ne doit plus rediriger (reçu ${utmRes.status})`)

  // Canoniques
  console.log('\n--- Balises canoniques ---')
  for (const check of CANONICAL_CHECKS) {
    const res = await fetch(`${BASE}${check.path}`)
    const html = await res.text()
    const canonical = extractCanonical(html)
    const ok = res.ok && canonical === check.expected
    const label = check.label || check.path
    console.log(`${ok ? '✅' : '❌'} ${label}: ${canonical || 'absent'}`)
    if (!ok) errors.push(`Canonique ${check.path}: attendu ${check.expected}, reçu ${canonical}`)
  }

  // 404 réels (pas de soft 404)
  console.log('\n--- Pages 404 ---')
  const notFoundChecks = [
    '/location-salles/salle-inexistante',
    '/page-qui-nexiste-pas-test-seo',
    '/formation-metiers-accompagnement-social',
  ]
  for (const path of notFoundChecks) {
    const res = await fetch(`${BASE}${path}`)
    const html = await res.text()
    const robots = extractRobots(html)
    const hasNoindex = robots?.includes('noindex')
    const ok = res.status === 404
    console.log(`${ok ? '✅' : '❌'} ${path}: HTTP ${res.status}${hasNoindex ? ' + noindex' : ''}`)
    if (!ok) errors.push(`${path} doit retourner HTTP 404 (reçu ${res.status})`)
    if (ok && !hasNoindex) errors.push(`${path}: meta robots noindex manquant`)
  }

  console.log('\n--- Pages indexables (pas de noindex, viewport, canonique unique) ---')
  const indexable = [
    { path: '/', expected: `${CANONICAL_BASE}/` },
    { path: '/formations/cip', expected: `${CANONICAL_BASE}/formations/cip` },
  ]
  for (const check of indexable) {
    const res = await fetch(`${BASE}${check.path}`)
    const html = await res.text()
    const canonical = extractCanonical(html)
    const robots = extractRobots(html)
    const viewport = /width\s*=\s*device-width/i.test(html)
    const noindex = robots?.includes('noindex')
    const ok = res.ok && !noindex && viewport && canonical === check.expected
    console.log(`${ok ? '✅' : '❌'} ${check.path}: robots=${robots || '—'} viewport=${viewport} canonical=${canonical || 'absent'}`)
    if (noindex) errors.push(`${check.path} ne doit pas avoir noindex`)
    if (!viewport) errors.push(`${check.path}: viewport mobile manquant`)
    if (canonical !== check.expected) errors.push(`${check.path}: canonique ${canonical}`)
  }

  // Robots.txt
  console.log('\n--- robots.txt ---')
  const robotsRes = await fetch(`${BASE}/robots.txt`)
  const robotsText = await robotsRes.text()
  const hasSitemap = robotsText.includes('sitemap.xml')
  const blocksApi = robotsText.includes('Disallow: /api/')
  console.log(`${robotsRes.ok && hasSitemap ? '✅' : '❌'} robots.txt + sitemap`)
  console.log(`${blocksApi ? '✅' : '❌'} /api/ bloqué`)
  if (!hasSitemap) errors.push('robots.txt sans sitemap')

  if (errors.length) {
    console.log('\n❌ Échecs:')
    errors.forEach((e) => console.log(`  - ${e}`))
    process.exit(1)
  }
  console.log('\n✅ Validation SEO indexation OK')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
