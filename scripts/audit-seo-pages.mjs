#!/usr/bin/env node
/**
 * Contrôle titres, H1, meta et signaux de marque.
 * Usage : npx tsx scripts/audit-seo-pages.mjs [baseUrl]
 */
import { getIndexableRegistry } from '../lib/seo/page-registry.ts'

const BASE = process.argv[2] || process.env.SITE_URL || 'https://www.atipikrh.com'

const SAMPLE = [
  '/',
  '/formations/cip',
  '/formations/fpa',
  '/formations/courtes-professionnalisantes',
  '/bilan-de-competences',
  '/vae',
  '/blog/formation-cip-bordeaux-conseiller-insertion-professionnelle',
  '/blog/formation-conseiller-insertion-professionnelle-lormont',
  '/blog/reduire-couts-recrutement-formation-rh',
  '/blog/comment-reduire-couts-recrutement-30-pourcent-formation-rh',
  '/blog/recrutement-sans-discrimination',
]

function extract(html, regex) {
  const match = html.match(regex)
  return match?.[1]?.replace(/\s+/g, ' ').trim() || null
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

function mainHtml(html) {
  const main = html.match(/<main\b[\s\S]*?<\/main>/i)
  return main ? main[0] : html
}

function headingSkips(html) {
  const skips = []
  let last = 0
  for (const match of html.matchAll(/<h([1-6])\b/gi)) {
    const level = Number(match[1])
    if (last && level > last + 1) skips.push(`h${last}->h${level}`)
    last = level
  }
  return skips
}

function brandIssues(html) {
  const issues = []
  const scope = mainHtml(html)
  const h1Raw = extract(scope, /<h1[^>]*>([\s\S]*?)<\/h1>/i)
  const h1 = h1Raw ? stripTags(h1Raw) : ''
  const h1Count = (scope.match(/<h1\b/gi) || []).length
  if (!h1) issues.push('H1 absent')
  else if (h1Count !== 1) issues.push(`H1 x${h1Count}`)
  if (h1 && !/atipik\s*rh/i.test(h1)) issues.push('H1 sans marque')

  const skips = headingSkips(scope)
  const warningParts = []
  if (skips.length) warningParts.push(`saut de titre ${skips.join(', ')}`)
  if (!/<time\b/i.test(scope)) issues.push('date absente')
  if (!/href="[^"]*\/(?:equipe\/|notre-equipe)/i.test(html)) issues.push('lien auteur absent')

  const citable = /il faut retenir|points cl[eé]s|en bref|questions fr[eé]quentes|r[eé]ponses imm[eé]diates|<ol\b|<h2\b[^>]*>[^<]*(?:faq|[eé]tapes)/i.test(scope)
  if (!citable) issues.push('section citable absente')

  const text = stripTags(scope)
  const mentions = text.match(/atipik\s*rh/gi) || []
  const words = text.split(/\s+/).filter(Boolean).length
  if (mentions.length === 0) issues.push('marque absente')
  const ceiling = Math.max(12, Math.ceil(words / 80))
  if (mentions.length > ceiling) warningParts.push(`mentions élevées (${mentions.length}/${words} mots)`)
  const warning = warningParts.length ? warningParts.join(' ; ') : null
  return { issues, warning, h1 }
}

async function auditPath(pathname) {
  const url = `${BASE}${pathname}`
  const res = await fetch(url, { redirect: 'manual' })
  const html = res.status >= 300 && res.status < 400 ? '' : await res.text()
  const title = extract(html, /<title[^>]*>([^<]+)<\/title>/i)
  const meta = extract(html, /<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["']/i)
    || extract(html, /<meta[^>]+content=["']([^"']+)["'][^>]*name=["']description["']/i)
  const canonical = extract(html, /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
    || extract(html, /<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i)
  const h1Count = (html.match(/<h1\b/gi) || []).length
  const robots = extract(html, /<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["']/i)
  const brand = res.status === 200 ? brandIssues(html) : { issues: [], warning: null, h1: null }

  return {
    path: pathname,
    status: res.status,
    location: res.headers.get('location'),
    title,
    titleLen: title?.length || 0,
    meta,
    metaLen: meta?.length || 0,
    h1: brand.h1,
    h1Count,
    canonical,
    robots,
    brandIssues: brand.issues,
    brandWarning: brand.warning,
  }
}

async function mapPool(items, limit, fn) {
  const out = new Array(items.length)
  let cursor = 0
  async function worker() {
    while (cursor < items.length) {
      const index = cursor
      cursor += 1
      out[index] = await fn(items[index])
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()))
  return out
}

async function main() {
  const paths = [...new Set(getIndexableRegistry().map((entry) => entry.path))]
  console.log(`--- Audit titres / marque — ${paths.length} URL — ${BASE} ---\n`)
  const rows = await mapPool(paths, 6, auditPath)
  const sample = new Set(SAMPLE)
  const titles = new Map()
  const errors = []

  for (const row of rows) {
    const sampleRow = sample.has(row.path)
    const titleOk = !sampleRow || (row.titleLen > 0 && row.titleLen <= 65)
    const metaOk = !sampleRow || (row.metaLen >= 70 && row.metaLen <= 160)
    const ok = row.status === 200 && titleOk && metaOk && row.brandIssues.length === 0
    console.log(`${ok ? '✅' : '⚠️'} ${row.path}`)
    if (sampleRow) {
      console.log(`   HTTP ${row.status}${row.location ? ` → ${row.location}` : ''}`)
      console.log(`   title (${row.titleLen}) ${row.title || '—'}`)
      console.log(`   H1 ${row.h1 || '—'}`)
      console.log(`   meta (${row.metaLen}) ${row.meta || '—'}`)
    }
    if (row.brandIssues.length) console.log(`   marque : ${row.brandIssues.join(' ; ')}`)
    if (row.brandWarning) console.log(`   attention : ${row.brandWarning}`)

    if (row.status !== 200) errors.push(`${row.path} HTTP ${row.status}`)
    if (sampleRow && row.status === 200 && (row.titleLen === 0 || row.titleLen > 65)) {
      errors.push(`${row.path} title ${row.titleLen}`)
    }
    if (sampleRow && row.status === 200 && (row.metaLen < 70 || row.metaLen > 160)) {
      errors.push(`${row.path} meta ${row.metaLen}`)
    }
    for (const issue of row.brandIssues) errors.push(`${row.path} ${issue}`)
    if (row.title && sampleRow) {
      const list = titles.get(row.title) || []
      list.push(row.path)
      titles.set(row.title, list)
    }
  }

  for (const [title, titlePaths] of titles) {
    if (titlePaths.length > 1) errors.push(`Titre dupliqué « ${title} » : ${titlePaths.join(', ')}`)
  }

  if (errors.length) {
    console.error(`\nÉcarts (${errors.length}) :`)
    errors.forEach((entry) => console.error(`  - ${entry}`))
    process.exitCode = 1
    return
  }
  console.log('\n✅ Audit pages OK')
}

main().catch((err) => {
  console.error('❌', err.message || err)
  process.exit(1)
})
