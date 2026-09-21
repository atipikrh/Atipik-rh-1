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
  [
    '/blog/comment-reduire-couts-recrutement-30-pourcent-formation-rh',
    '/blog/reduire-couts-recrutement-formation-rh',
  ],
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
  const values = [...html.matchAll(/<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["']/gi)].map(
    (m) => m[1]
  )
  return values.find((v) => /noindex/i.test(v)) || values[0] || null
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

  console.log('\n--- Contact query : 200, noindex, canonique /contact ---')
  const contactQueryPaths = [
    '/contact?utm_source=site',
    '/contact?sujet=formation-cip',
  ]
  for (const path of contactQueryPaths) {
    const res = await fetch(`${BASE}${path}`, { redirect: 'manual' })
    const html = res.status === 200 || res.status === 304 ? await res.text() : ''
    const robots = extractRobots(html) || ''
    const xRobots = (res.headers.get('x-robots-tag') || '').toLowerCase()
    const canonical = extractCanonical(html)
    const noRedirect = res.status === 200 || res.status === 304
    const hasNoindex = robots.includes('noindex') || xRobots.includes('noindex')
    const canonOk = canonical === `${CANONICAL_BASE}/contact`
    const ok = noRedirect && hasNoindex && canonOk
    console.log(
      `${ok ? '✅' : '❌'} ${path}: HTTP ${res.status} robots=${robots || xRobots || '—'} canonical=${canonical || 'absent'}`
    )
    if (!noRedirect) errors.push(`${path} ne doit pas rediriger (reçu ${res.status})`)
    if (noRedirect && !hasNoindex) errors.push(`${path}: noindex manquant`)
    if (noRedirect && !canonOk) errors.push(`${path}: canonique ${canonical}`)
  }

  console.log('\n--- Anciens sujets contact GSC (301) ---')
  const gscContactRedirects = [
    {
      path: `/contact?sujet=${encodeURIComponent('Demande formation — CIP')}`,
      expectedSujet: 'formation-cip',
    },
    {
      path: `/contact?sujet=${encodeURIComponent('Demande formation — FPA')}&utm_source=site&utm_medium=formation_page&utm_campaign=formation_fpa`,
      expectedSujet: 'formation-fpa',
      expectedUtm: 'utm_source=site',
    },
    {
      path: `/contact?sujet=${encodeURIComponent('Demande formation — Recruter en insertion avec les entreprises : méthodes et outils')}`,
      expectedSujet: 'formation-courte',
    },
    {
      path: `/contact?sujet=${encodeURIComponent('Demande formation — Renforcer le partenariat avec les entreprises')}`,
      expectedSujet: 'formation-courte',
    },
    {
      path: `/contact?sujet=${encodeURIComponent('Demande formation — Prévenir les discriminations dans le recrutement')}`,
      expectedSujet: 'formation-courte',
    },
    {
      path: `/contact?sujet=${encodeURIComponent('Demande formation — Renforcer ses pratiques de recrutement')}`,
      expectedSujet: 'formation-courte',
    },
  ]
  for (const check of gscContactRedirects) {
    const res = await fetch(`${BASE}${check.path}`, { redirect: 'manual' })
    const loc = res.headers.get('location') || ''
    const locParams = loc.includes('?') ? new URLSearchParams(loc.split('?')[1]) : new URLSearchParams()
    const redirected =
      res.status === 301 || res.status === 308 || (res.status >= 300 && res.status < 400)
    const sujetOk = locParams.get('sujet') === check.expectedSujet
    const utmPreserved = !check.expectedUtm || loc.includes(check.expectedUtm)
    const ok = redirected && sujetOk && utmPreserved
    console.log(`${ok ? '✅' : '❌'} ${check.expectedSujet}: HTTP ${res.status} ${loc || '(pas de Location)'}`)
    if (!ok) errors.push(`GSC contact ${check.expectedSujet}: attendu 301 sujet=${check.expectedSujet}`)
  }

  const gscFollow = await fetch(`${BASE}/contact?sujet=${encodeURIComponent('Demande formation — CIP')}`)
  const gscHtml = await gscFollow.text()
  const gscCanonical = extractCanonical(gscHtml)
  const gscCanonOk = gscFollow.ok && gscCanonical === `${CANONICAL_BASE}/contact`
  console.log(`${gscCanonOk ? '✅' : '❌'} Après 301 CIP, canonique ${gscCanonical || 'absent'}`)
  if (!gscCanonOk) errors.push(`Canonique contact après GSC CIP: ${gscCanonical}`)

  console.log('\n--- Apex + slash (1 saut) ---')
  let baseHost = ''
  try {
    baseHost = new URL(BASE).hostname
  } catch {
    baseHost = ''
  }
  if (baseHost === 'www.atipikrh.com' || baseHost === 'atipikrh.com') {
    const apexBlog = await fetch('https://atipikrh.com/blog/', { redirect: 'manual' })
    const loc = apexBlog.headers.get('location') || ''
    const hopOk =
      (apexBlog.status === 301 || apexBlog.status === 308) && loc === 'https://www.atipikrh.com/blog'
    console.log(
      `${hopOk ? '✅' : '❌'} https://atipikrh.com/blog/ → ${apexBlog.status} ${loc || '(pas de Location)'}`
    )
    if (!hopOk) {
      errors.push(
        `Apex /blog/ doit rediriger en 1 saut vers https://www.atipikrh.com/blog (reçu ${apexBlog.status} ${loc})`
      )
    }
  } else {
    console.log(`⏭️  Apex /blog/ ignoré (base ${baseHost || BASE})`)
  }

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
