#!/usr/bin/env node
/**
 * Contrôle titres, H1 et meta descriptions des pages piliers.
 * Usage : node scripts/audit-seo-pages.mjs [baseUrl]
 */
const BASE = process.argv[2] || process.env.SITE_URL || 'https://www.atipikrh.com'

const PAGES = [
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
  const m = html.match(regex)
  return m?.[1]?.replace(/\s+/g, ' ').trim() || null
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

async function auditPath(path) {
  const url = `${BASE}${path}`
  const res = await fetch(url, { redirect: 'manual' })
  const html = res.status >= 300 && res.status < 400 ? '' : await res.text()
  const title = extract(html, /<title[^>]*>([^<]+)<\/title>/i)
  const meta = extract(html, /<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["']/i)
    || extract(html, /<meta[^>]+content=["']([^"']+)["'][^>]*name=["']description["']/i)
  const canonical = extract(html, /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
    || extract(html, /<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i)
  const h1Raw = extract(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i)
  const h1 = h1Raw ? stripTags(h1Raw) : null
  const h1Count = (html.match(/<h1\b/gi) || []).length
  const robots = extract(html, /<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["']/i)

  return {
    path,
    status: res.status,
    location: res.headers.get('location'),
    title,
    titleLen: title?.length || 0,
    meta,
    metaLen: meta?.length || 0,
    h1,
    h1Count,
    canonical,
    robots,
  }
}

async function main() {
  console.log(`--- Audit titres / H1 / meta — ${BASE} ---\n`)
  const rows = []
  for (const path of PAGES) {
    rows.push(await auditPath(path))
  }

  const titles = new Map()
  const errors = []

  for (const row of rows) {
    const okStatus = row.status === 200
    const titleOk = row.titleLen > 0 && row.titleLen <= 65
    const metaOk = row.metaLen >= 70 && row.metaLen <= 160
    const h1Ok = row.h1Count === 1
    console.log(`${okStatus && titleOk && metaOk && h1Ok ? '✅' : '⚠️'} ${row.path}`)
    console.log(`   HTTP ${row.status}${row.location ? ` → ${row.location}` : ''}`)
    console.log(`   title (${row.titleLen}) ${row.title || '—'}`)
    console.log(`   H1 x${row.h1Count} ${row.h1 || '—'}`)
    console.log(`   meta (${row.metaLen}) ${row.meta || '—'}`)
    console.log(`   canonical ${row.canonical || '—'}`)
    if (row.robots) console.log(`   robots ${row.robots}`)

    if (!okStatus) errors.push(`${row.path} HTTP ${row.status}`)
    if (row.status === 200 && row.h1Count !== 1) errors.push(`${row.path} H1 count=${row.h1Count}`)
    if (row.title) {
      const list = titles.get(row.title) || []
      list.push(row.path)
      titles.set(row.title, list)
    }
  }

  for (const [title, paths] of titles) {
    if (paths.length > 1) errors.push(`Titre dupliqué « ${title} » : ${paths.join(', ')}`)
  }

  if (errors.length) {
    console.error('\nÉcarts :')
    errors.forEach((e) => console.error(`  - ${e}`))
    process.exitCode = 1
    return
  }
  console.log('\n✅ Audit pages OK')
}

main().catch((err) => {
  console.error('❌', err.message || err)
  process.exit(1)
})
