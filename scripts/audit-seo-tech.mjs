#!/usr/bin/env node
/**
 * Audit technique SEO : indexation, noindex, canoniques, viewport, liens cassés, CWV.
 * Usage : node scripts/audit-seo-tech.mjs [baseUrl]
 */
import { BLOG_CANONICAL_OVERRIDES } from '../lib/blog/canonicalOverrides.js'
import { BLOG_PUBLISH_ISO_BY_SLUG, isScheduledBlogSlugLive } from '../lib/blog/publicationSchedule.js'

const BASE = (process.argv[2] || process.env.SITE_URL || 'https://www.atipikrh.com').replace(/\/$/, '')
const CANONICAL_BASE = 'https://www.atipikrh.com'
const CONCURRENCY = 8

const PLANNED_PATHS = [
  '/formation-metiers-accompagnement-social',
  '/accompagnement-femmes-eloignees-emploi',
  '/formation-insertion-quartier-prioritaire-bordeaux',
  '/accompagnement-retour-emploi-lormont',
]

const INDEXABLE_SAMPLE = [
  '/',
  '/formations/cip',
  '/formations/fpa',
  '/bilan-de-competences',
  '/vae',
  '/blog',
]

const CWV_SAMPLE = ['/', '/formations/cip', '/bilan-de-competences']

function toBaseUrl(url) {
  try {
    const parsed = new URL(url)
    return `${BASE}${parsed.pathname}${parsed.search}`
  } catch {
    return url
  }
}

function extractAll(html, regex) {
  const out = []
  const re = new RegExp(regex, 'gi')
  let m
  while ((m = re.exec(html))) out.push(m[1])
  return out
}

function extractCanonicals(html) {
  return [
    ...extractAll(html, /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/),
    ...extractAll(html, /<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/),
  ]
}

function extractRobots(html) {
  return [
    ...extractAll(html, /<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["']/),
    ...extractAll(html, /<meta[^>]+content=["']([^"']+)["'][^>]*name=["']robots["']/),
  ]
}

function hasViewport(html) {
  return /<meta[^>]+name=["']viewport["'][^>]*content=["'][^"']*width\s*=\s*device-width/i.test(html)
    || /<meta[^>]+content=["'][^"']*width\s*=\s*device-width[^"']*["'][^>]*name=["']viewport["']/i.test(html)
}

function normalizePath(href, pageUrl) {
  if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
    return null
  }
  if (href.startsWith('#')) return null
  try {
    const resolved = new URL(href, pageUrl)
    const host = resolved.hostname
    const isLocalOrigin = host === new URL(BASE).hostname
    const isSite = host === 'www.atipikrh.com' || host === 'atipikrh.com' || isLocalOrigin
    if (!isSite) return null
    if (resolved.pathname.startsWith('/_next/')) return null
    return `${BASE}${resolved.pathname}`
  } catch {
    return null
  }
}

async function mapPool(items, limit, mapper) {
  const results = []
  let i = 0
  async function worker() {
    while (i < items.length) {
      const idx = i++
      results[idx] = await mapper(items[idx], idx)
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker))
  return results
}

async function fetchPage(pathOrUrl) {
  const url = pathOrUrl.startsWith('http') ? pathOrUrl : `${BASE}${pathOrUrl}`
  const res = await fetch(url, {
    redirect: 'follow',
    headers: { 'User-Agent': 'AtipikRH-SEO-Audit/1.0' },
  })
  const html = await res.text()
  return { url, status: res.status, html, finalUrl: res.url }
}

async function checkStatus(url) {
  const res = await fetch(url, {
    redirect: 'follow',
    headers: { 'User-Agent': 'AtipikRH-SEO-Audit/1.0' },
  })
  return { url, status: res.status, finalUrl: res.url }
}

async function psiMobile(path) {
  const url = encodeURIComponent(`${CANONICAL_BASE}${path}`)
  const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&strategy=mobile&category=performance&category=seo&category=accessibility`
  const res = await fetch(api)
  if (!res.ok) {
    return { path, error: `PSI HTTP ${res.status}` }
  }
  const data = await res.json()
  const lhr = data.lighthouseResult
  const audits = lhr?.audits || {}
  const cats = lhr?.categories || {}
  const field = data.loadingExperience?.metrics || data.originLoadingExperience?.metrics || {}
  const crux = data.originLoadingExperience?.metrics || {}
  return {
    path,
    perf: cats.performance?.score != null ? Math.round(cats.performance.score * 100) : null,
    seo: cats.seo?.score != null ? Math.round(cats.seo.score * 100) : null,
    a11y: cats.accessibility?.score != null ? Math.round(cats.accessibility.score * 100) : null,
    lcp: audits['largest-contentful-paint']?.displayValue || null,
    cls: audits['cumulative-layout-shift']?.displayValue || null,
    inp: audits['interaction-to-next-paint']?.displayValue || audits['experimental-interaction-to-next-paint']?.displayValue || null,
    tbt: audits['total-blocking-time']?.displayValue || null,
    viewport: audits.viewport?.score,
    crawlable: audits['is-crawlable']?.score,
    robotsTxt: audits['robots-txt']?.score,
    cruxLcp: crux.LARGEST_CONTENTFUL_PAINT_MS?.category || field.LARGEST_CONTENTFUL_PAINT_MS?.category || null,
    cruxCls: crux.CUMULATIVE_LAYOUT_SHIFT_SCORE?.category || null,
    cruxInp: crux.INTERACTION_TO_NEXT_PAINT?.category || null,
  }
}

async function main() {
  const errors = []
  const warnings = []
  console.log(`--- Audit technique SEO — ${BASE} ---\n`)

  const sitemapRes = await fetch(`${BASE}/sitemap.xml`)
  const sitemapText = await sitemapRes.text()
  const sitemapUrls = [...sitemapText.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  console.log(`Sitemap : ${sitemapRes.status} — ${sitemapUrls.length} URLs`)
  if (!sitemapRes.ok) errors.push('Sitemap inaccessible')

  console.log('\n--- Pages exclues (hors sitemap, attendues) ---')
  const excluded = [
    ...Object.keys(BLOG_CANONICAL_OVERRIDES).map((slug) => `/blog/${slug}`),
    ...PLANNED_PATHS,
    ...Object.keys(BLOG_PUBLISH_ISO_BY_SLUG)
      .filter((slug) => !isScheduledBlogSlugLive(slug))
      .map((slug) => `/blog/${slug}`),
    '/equipe/martine-beaudon',
    '/bilan-de-competences/cpf',
  ]
  const uniqueExcluded = [...new Set(excluded)]
  for (const path of uniqueExcluded) {
    const inSitemap = sitemapUrls.some((u) => u.endsWith(path) || u.includes(path))
    const page = await fetchPage(path)
    const robots = extractRobots(page.html)
    const canonicals = extractCanonicals(page.html)
    const noindex = robots.some((r) => /noindex/i.test(r))
    const isPlannedOrUnpublished =
      PLANNED_PATHS.includes(path) ||
      (path.startsWith('/blog/') && !isScheduledBlogSlugLive(path.replace('/blog/', '')))
    const okExcludedFromSitemap = !inSitemap
    console.log(
      `${okExcludedFromSitemap ? '✅' : '❌'} ${path} sitemap=${inSitemap ? 'oui' : 'non'} HTTP ${page.status} robots=${robots.join(' | ') || '—'} canonical=${canonicals[0] || '—'}`
    )
    if (inSitemap) errors.push(`${path} ne doit pas être dans le sitemap`)
    if (isPlannedOrUnpublished && page.status !== 404) {
      errors.push(`${path} doit être en 404 (reçu ${page.status})`)
    }
    if (page.status === 404 && !noindex) {
      errors.push(`${path} 404 sans noindex`)
    }
    const overrideTarget = path.startsWith('/blog/')
      ? BLOG_CANONICAL_OVERRIDES[path.replace('/blog/', '')]
      : null
    if (overrideTarget) {
      const expected = `${CANONICAL_BASE}${overrideTarget}`
      if (page.status === 200 && canonicals[0] !== expected) {
        errors.push(`${path} canonique attendu ${expected}, reçu ${canonicals[0]}`)
      }
      if (noindex) warnings.push(`${path} : noindex + canonique (Google ignore souvent le canonique)`)
    }
  }

  console.log('\n--- noindex / viewport / canoniques (échantillon indexable) ---')
  for (const path of INDEXABLE_SAMPLE) {
    const page = await fetchPage(path)
    const robots = extractRobots(page.html)
    const canonicals = [...new Set(extractCanonicals(page.html))]
    const noindex = robots.some((r) => /noindex/i.test(r))
    const expected = path === '/' ? `${CANONICAL_BASE}/` : `${CANONICAL_BASE}${path}`
    const viewport = hasViewport(page.html)
    const ok =
      page.status === 200 &&
      !noindex &&
      viewport &&
      canonicals.length === 1 &&
      canonicals[0] === expected
    console.log(
      `${ok ? '✅' : '❌'} ${path} HTTP ${page.status} viewport=${viewport} robots=${robots.join(' | ') || '—'} canonical=${canonicals.join(' | ') || 'absent'}`
    )
    if (page.status !== 200) errors.push(`${path} HTTP ${page.status}`)
    if (noindex) errors.push(`${path} ne doit pas avoir noindex`)
    if (!viewport) errors.push(`${path} viewport mobile manquant`)
    if (!canonicals.length) errors.push(`${path} canonique manquant`)
    if (canonicals.length > 1) errors.push(`${path} canoniques multiples : ${canonicals.join(', ')}`)
    if (canonicals[0] && canonicals[0] !== expected) errors.push(`${path} canonique ${canonicals[0]} ≠ ${expected}`)
  }

  console.log('\n--- Liens internes cassés (crawl sitemap) ---')
  const pagesToCrawl = sitemapUrls.length
    ? sitemapUrls.map(toBaseUrl)
    : INDEXABLE_SAMPLE.map((p) => `${BASE}${p}`)
  const crawled = await mapPool(pagesToCrawl, CONCURRENCY, async (url) => {
    const page = await fetchPage(url)
    const hrefs = extractAll(page.html, /<a[^>]+href=["']([^"']+)["']/)
    const internal = [...new Set(hrefs.map((h) => normalizePath(h, page.finalUrl || url)).filter(Boolean))]
    return { url, status: page.status, internal, viewport: hasViewport(page.html), canonicals: extractCanonicals(page.html), robots: extractRobots(page.html) }
  })

  const missingCanonical = crawled.filter((p) => p.status === 200 && p.canonicals.length === 0)
  const multiCanonical = crawled.filter((p) => p.canonicals.length > 1)
  const missingViewport = crawled.filter((p) => p.status === 200 && !p.viewport)
  const indexedNoindex = crawled.filter((p) => p.status === 200 && p.robots.some((r) => /noindex/i.test(r)))

  if (missingCanonical.length) {
    missingCanonical.forEach((p) => errors.push(`Canonique manquant : ${p.url}`))
    console.log(`❌ ${missingCanonical.length} pages sitemap sans canonique`)
  } else {
    console.log('✅ Toutes les pages sitemap ont une balise canonique')
  }
  if (multiCanonical.length) {
    multiCanonical.forEach((p) => warnings.push(`Canoniques multiples : ${p.url}`))
    console.log(`⚠️ ${multiCanonical.length} pages avec plusieurs canoniques`)
  }
  if (missingViewport.length) {
    missingViewport.forEach((p) => errors.push(`Viewport manquant : ${p.url}`))
    console.log(`❌ ${missingViewport.length} pages sans viewport mobile`)
  } else {
    console.log('✅ Viewport mobile présent sur les pages sitemap')
  }
  if (indexedNoindex.length) {
    indexedNoindex.forEach((p) => warnings.push(`noindex dans le sitemap : ${p.url}`))
    console.log(`⚠️ ${indexedNoindex.length} URL sitemap avec noindex`)
  } else {
    console.log('✅ Aucun noindex sur les URLs du sitemap')
  }

  const toCheck = [...new Set(crawled.flatMap((p) => p.internal))]
  const statuses = await mapPool(toCheck, CONCURRENCY, checkStatus)
  const broken = statuses.filter((s) => s.status >= 400)
  const brokenByUrl = new Map()
  for (const page of crawled) {
    for (const href of page.internal) {
      const st = statuses.find((s) => s.url === href)
      if (st && st.status >= 400) {
        if (!brokenByUrl.has(href)) brokenByUrl.set(href, [])
        brokenByUrl.get(href).push(page.url)
      }
    }
  }
  if (broken.length) {
    console.log(`❌ ${broken.length} liens internes en erreur :`)
    for (const [href, sources] of brokenByUrl) {
      const st = statuses.find((s) => s.url === href)
      console.log(`   ${st.status} ${href}`)
      console.log(`      depuis ${sources.slice(0, 3).join(', ')}${sources.length > 3 ? ` (+${sources.length - 3})` : ''}`)
      errors.push(`Lien cassé ${st.status} ${href}`)
    }
  } else {
    console.log(`✅ ${toCheck.length} liens internes contrôlés, aucun 4xx/5xx`)
  }

  if (!BASE.includes('localhost')) {
    console.log('\n--- PageSpeed Insights mobile (labo) + CrUX origine ---')
    const psiRows = []
    for (const path of CWV_SAMPLE) {
      try {
        const row = await psiMobile(path)
        psiRows.push(row)
        if (row.error) {
          console.log(`⚠️ ${path} ${row.error}`)
          warnings.push(row.error)
          continue
        }
        console.log(
          `  ${path} perf=${row.perf} SEO=${row.seo} a11y=${row.a11y} LCP=${row.lcp} CLS=${row.cls} TBT=${row.tbt} viewport=${row.viewport === 1 ? 'ok' : 'ko'}`
        )
        if (row.cruxLcp || row.cruxInp || row.cruxCls) {
          console.log(`    CrUX origine LCP=${row.cruxLcp || '—'} INP=${row.cruxInp || '—'} CLS=${row.cruxCls || '—'}`)
        }
        if (row.viewport !== 1) errors.push(`${path} Lighthouse viewport échoué`)
        if (row.perf != null && row.perf < 50) warnings.push(`${path} perf labo ${row.perf}`)
      } catch (err) {
        warnings.push(`PSI ${path}: ${err.message}`)
        console.log(`⚠️ PSI ${path}: ${err.message}`)
      }
    }
  } else {
    console.log('\n--- PSI ignoré en local (utiliser la production) ---')
  }

  if (warnings.length) {
    console.log('\nAlertes :')
    warnings.forEach((w) => console.log(`  - ${w}`))
  }
  if (errors.length) {
    console.log('\n❌ Échecs :')
    errors.forEach((e) => console.log(`  - ${e}`))
    process.exit(1)
  }
  console.log('\n✅ Audit technique SEO OK')
}

main().catch((err) => {
  console.error('❌', err)
  process.exit(1)
})
