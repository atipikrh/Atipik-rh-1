#!/usr/bin/env node
/**
 * Audit lecture seule Google Search Console.
 * Usage : npm run seo:gsc-audit
 */
import {
  GSC_SITE_URL,
  createGscAuth,
  gscApiRequest,
  printGscSetupHelp,
} from './gsc-auth.mjs'

function isoDate(d) {
  return d.toISOString().slice(0, 10)
}

async function main() {
  const auth = await createGscAuth()
  if (!auth) {
    printGscSetupHelp()
    process.exit(1)
  }

  const site = encodeURIComponent(GSC_SITE_URL)
  console.log('--- GSC audit (lecture) ---')
  console.log(`Propriété : ${GSC_SITE_URL}\n`)

  const sitemaps = await gscApiRequest(auth, 'GET', `/sites/${site}/sitemaps`)
  if (!sitemaps.ok) {
    throw new Error(`Liste sitemaps échouée (${sitemaps.status}): ${JSON.stringify(sitemaps.body)}`)
  }

  const list = sitemaps.body?.sitemap || []
  console.log(`Sitemaps (${list.length}) :`)
  for (const s of list) {
    console.log(`  - ${s.path}`)
    console.log(`    soumis : ${s.lastSubmitted || '—'} | téléchargé : ${s.lastDownloaded || 'en attente'}`)
    if (s.errors) console.log(`    erreurs : ${s.errors}`)
    if (s.warnings) console.log(`    alertes : ${s.warnings}`)
  }

  const end = new Date()
  const start = new Date()
  start.setUTCDate(start.getUTCDate() - 112)

  const analytics = await gscApiRequest(auth, 'POST', `/sites/${site}/searchAnalytics/query`, {
    startDate: isoDate(start),
    endDate: isoDate(end),
    dimensions: ['page'],
    rowLimit: 250,
  })

  if (!analytics.ok) {
    console.warn(`\n⚠️ Search Analytics indisponible (${analytics.status})`)
    console.warn(JSON.stringify(analytics.body))
    return
  }

  const rows = analytics.body?.rows || []
  console.log(`\nPages avec impressions (16 semaines, top ${rows.length}) :`)
  for (const row of rows.slice(0, 50)) {
    const url = row.keys?.[0] || '—'
    const clicks = row.clicks ?? 0
    const impressions = row.impressions ?? 0
    const ctr = row.ctr != null ? `${(row.ctr * 100).toFixed(1)}%` : '—'
    console.log(`  ${impressions} impr. | ${clicks} clics | CTR ${ctr} | ${url}`)
  }
}

main().catch((err) => {
  console.error('❌', err.message || err)
  process.exit(1)
})
