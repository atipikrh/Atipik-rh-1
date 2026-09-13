#!/usr/bin/env node
/**
 * Synchronise les sitemaps dans Google Search Console (API Webmasters v3).
 *
 * Usage : npm run seo:gsc-sync
 */
import {
  GSC_SITE_URL,
  createGscAuth,
  gscApiRequest,
  printGscSetupHelp,
} from './gsc-auth.mjs'

const SITE_URL = GSC_SITE_URL
const BASE = process.env.SITE_URL || 'https://www.atipikrh.com'
const SITEMAP_TO_SUBMIT = `${BASE}/sitemap.xml`

/** Sitemaps à retirer de GSC (legacy WordPress + entrée en erreur à nettoyer). */
const SITEMAPS_TO_DELETE = [
  `${BASE}/sitemap.xml`,
  'https://atipikrh.com/sitemap_index.xml',
  `${BASE}/sitemap_index.xml`,
  'https://atipikrh.com/sitemap.xml',
]

function encodeFeedPath(feedUrl) {
  return encodeURIComponent(feedUrl)
}

async function apiRequest(auth, method, path) {
  return gscApiRequest(auth, method, path)
}

async function listSitemaps(auth) {
  const site = encodeURIComponent(SITE_URL)
  const { ok, status, body } = await apiRequest(auth, 'GET', `/sites/${site}/sitemaps`)
  if (!ok) throw new Error(`Liste sitemaps échouée (${status}): ${JSON.stringify(body)}`)
  return body.sitemap || []
}

async function deleteSitemap(auth, feedUrl) {
  const site = encodeURIComponent(SITE_URL)
  const feed = encodeFeedPath(feedUrl)
  const { ok, status, body } = await apiRequest(
    auth,
    'DELETE',
    `/sites/${site}/sitemaps/${feed}`
  )
  if (ok || status === 404) return { feedUrl, status, deleted: ok }
  return { feedUrl, status, deleted: false, error: body }
}

async function submitSitemap(auth, feedUrl) {
  const site = encodeURIComponent(SITE_URL)
  const feed = encodeFeedPath(feedUrl)
  const { ok, status, body } = await apiRequest(
    auth,
    'PUT',
    `/sites/${site}/sitemaps/${feed}`
  )
  if (!ok) throw new Error(`Soumission échouée (${status}): ${JSON.stringify(body)}`)
  return { feedUrl, status }
}

function printPermissionHelp(errMessage) {
  const is403 = /403|permission|forbidden/i.test(errMessage)
  const isEmailBug = /sufficient permission/i.test(errMessage)

  if (is403 && isEmailBug) {
    console.error(`
⚠️  Le compte de service est valide dans Google Cloud, mais Search Console refuse l’accès.

Si l’ajout de l’email dans GSC affiche « adresse introuvable », c’est un bug Google connu
(synchronisation IAM ↔ Search Console pour les comptes de service créés récemment).
Voir : https://support.google.com/webmasters/thread/431407723

Contournement immédiat (compte Google personnel propriétaire de GSC) :
  1. Créer un client OAuth « Application de bureau » (voir docs/GSC_API_SETUP.md)
  2. npm run seo:gsc-oauth-setup
  3. npm run seo:gsc-sync

Soumission manuelle : https://search.google.com/search-console/sitemaps?resource_id=sc-domain%3Aatipikrh.com
`)
    return
  }

  console.error(`
❌ Authentification Search Console manquante.

Option A — OAuth (recommandé si « adresse introuvable ») : npm run seo:gsc-oauth-setup
Option B — Compte de service : secrets/gsc-service-account.json + invité dans GSC

Guide : docs/GSC_API_SETUP.md
`)
}

async function main() {
  const auth = await createGscAuth()
  if (!auth) {
    printGscSetupHelp()
    process.exit(1)
  }

  console.log('--- GSC sync sitemaps ---')
  console.log(`Propriété : ${SITE_URL}`)
  console.log(`Soumission cible : ${SITEMAP_TO_SUBMIT}\n`)

  let existing
  try {
    existing = await listSitemaps(auth)
  } catch (e) {
    printPermissionHelp(e.message || String(e))
    throw e
  }
  console.log(`Sitemaps actuels dans GSC (${existing.length}) :`)
  for (const s of existing) {
    console.log(`  - ${s.path} (${s.lastSubmitted || '—'})`)
  }
  console.log()

  const toDelete = new Set(SITEMAPS_TO_DELETE)
  for (const s of existing) {
    if (s.path?.includes('sitemap_index')) toDelete.add(s.path)
  }

  for (const feedUrl of toDelete) {
    const r = await deleteSitemap(auth, feedUrl)
    const icon = r.deleted ? '✅' : r.status === 404 ? 'ℹ️' : '❌'
    console.log(`${icon} Suppression ${feedUrl} → HTTP ${r.status}`)
    if (r.error) console.log('   ', JSON.stringify(r.error))
  }

  console.log()
  const submitted = await submitSitemap(auth, SITEMAP_TO_SUBMIT)
  console.log(`✅ Soumis : ${submitted.feedUrl} (HTTP ${submitted.status})`)

  const after = await listSitemaps(auth)
  const found = after.find((s) => s.path === SITEMAP_TO_SUBMIT || s.path?.includes('sitemap.xml'))
  console.log('\nÉtat final :')
  if (found) {
    console.log(`  ${found.path}`)
    console.log(`  Dernière soumission : ${found.lastSubmitted || '—'}`)
    console.log(`  Dernier téléchargement : ${found.lastDownloaded || 'en attente'}`)
  }

  console.log('\n✅ GSC sync terminé')
}

main().catch((err) => {
  console.error('❌', err.message || err)
  process.exit(1)
})
