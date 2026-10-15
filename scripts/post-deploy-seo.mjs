#!/usr/bin/env node
/**
 * Post-déploiement SEO — sans authentification Google Search Console.
 * - Vérifie sitemap.xml et robots.txt en production
 * - Notifie Google et Bing (ping sitemap)
 * - Affiche l’URL directe Search Console pour soumission manuelle (seule étape nécessitant un compte Google)
 */
const SITE = process.env.SITE_URL || 'https://www.atipikrh.com'
const SITEMAP_URL = `${SITE}/sitemap.xml`
const ROBOTS_URL = `${SITE}/robots.txt`

const GSC_SITEMAP_SUBMIT =
  'https://search.google.com/search-console/sitemaps?resource_id=sc-domain%3Aatipikrh.com'

async function fetchStatus(url, label) {
  const res = await fetch(url, { redirect: 'follow' })
  const ok = res.ok
  const text = ok ? await res.text() : ''
  console.log(`${ok ? '✅' : '❌'} ${label}: ${res.status} ${url}`)
  if (!ok) return { ok: false, text: '' }
  return { ok: true, text }
}

/** Les endpoints /ping?sitemap= sont dépréciés (404 Google, 410 Bing) — informatif uniquement. */
async function pingDeprecated(endpoint, name) {
  try {
    const res = await fetch(endpoint, { method: 'GET' })
    if (res.ok) {
      console.log(`✅ Ping ${name}: HTTP ${res.status}`)
      return true
    }
    console.log(
      `ℹ️ Ping ${name} non disponible (HTTP ${res.status}) — utiliser Search Console / Bing Webmaster.`
    )
    return false
  } catch (err) {
    console.log(`ℹ️ Ping ${name} ignoré: ${err.message}`)
    return false
  }
}

function countSitemapUrls(xml) {
  const matches = xml.match(/<loc>/g)
  return matches ? matches.length : 0
}

async function main() {
  console.log('--- Post-déploiement SEO ATIPIK RH ---\n')

  const sitemap = await fetchStatus(SITEMAP_URL, 'Sitemap')
  const robots = await fetchStatus(ROBOTS_URL, 'Robots')

  const EXPECTED_MIN_URLS = 60

  if (sitemap.ok) {
    const count = countSitemapUrls(sitemap.text)
    console.log(`   → ${count} URL(s) dans le sitemap`)
    if (count < EXPECTED_MIN_URLS) {
      console.warn(
        `⚠️ Attendu ≥${EXPECTED_MIN_URLS} URLs après déploiement du module SEO (app/sitemap.xml/route.ts).`
      )
      console.warn('   → Déployer la branche contenant lib/seo/page-registry.ts puis relancer ce script.\n')
    } else {
      console.log(`   → Registre OK (module SEO dynamique)\n`)
    }
  }

  if (robots.ok && !robots.text.includes('sitemap')) {
    console.warn('⚠️ robots.txt ne mentionne pas explicitement Sitemap: (Next.js peut l’injecter via metadata)')
  }

  const encoded = encodeURIComponent(SITEMAP_URL)
  await pingDeprecated(`https://www.google.com/ping?sitemap=${encoded}`, 'Google')
  await pingDeprecated(`https://www.bing.com/ping?sitemap=${encoded}`, 'Bing')

  const hasGscCreds =
    process.env.GSC_SERVICE_ACCOUNT_JSON ||
    process.env.GSC_SERVICE_ACCOUNT_JSON_PATH

  console.log('\n--- Google Search Console ---')
  if (hasGscCreds) {
    try {
      const { spawnSync } = await import('node:child_process')
      const { dirname, join } = await import('node:path')
      const { fileURLToPath } = await import('node:url')
      const root = join(dirname(fileURLToPath(import.meta.url)), '..')
      const gsc = spawnSync(process.execPath, [join(root, 'scripts/gsc-sync-sitemaps.mjs')], {
        stdio: 'inherit',
        cwd: root,
        env: process.env,
      })
      if (gsc.status !== 0) {
        console.warn('⚠️ seo:gsc-sync a échoué — voir docs/GSC_API_SETUP.md')
      }
    } catch (e) {
      console.warn('ℹ️ seo:gsc-sync non exécuté:', e.message)
    }
  } else {
    console.log(
      'Soumission automatique : configurer un compte de service (docs/GSC_API_SETUP.md) puis npm run seo:gsc-sync'
    )
    console.log('Manuel :', GSC_SITEMAP_SUBMIT)
    console.log('Sitemap :', SITEMAP_URL)
  }
  console.log('\n--- Validation JSON-LD (CIP, FPA, bilan) ---')
  try {
    const { spawnSync } = await import('node:child_process')
    const { dirname, join } = await import('node:path')
    const { fileURLToPath } = await import('node:url')
    const root = join(dirname(fileURLToPath(import.meta.url)), '..')
    const child = spawnSync(
      process.execPath,
      [join(root, 'scripts/validate-rich-results.mjs'), SITE],
      { stdio: 'inherit', cwd: root }
    )
    if (child.status !== 0) {
      console.warn('⚠️ validate-rich-results a signalé des écarts (voir ci-dessus).')
    }
  } catch (e) {
    console.warn('ℹ️ validate-rich-results non exécuté:', e.message)
  }

  console.log('\n--- Prochaine veille SERP ---')
  console.log('Enrichir lib/seo/serp-intent.ts (champ analyzedAt) après analyse concurrentielle.\n')

  if (!sitemap.ok || !robots.ok) {
    process.exit(1)
  }
}

main()
