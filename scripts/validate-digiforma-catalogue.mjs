#!/usr/bin/env node
/**
 * Contrôle public du catalogue Digiforma (GA4 + canonique).
 * Usage : node scripts/validate-digiforma-catalogue.mjs
 */
import { pathToFileURL } from 'node:url'

export const CATALOGUE_URL =
  process.env.DIGIFORMA_CATALOGUE_URL || 'https://atipikrh.catalogueformpro.com'
export const EXPECTED_GA_ID = process.env.GA_MEASUREMENT_ID || 'G-0T6JYZBLQN'
export const FORBIDDEN_CANONICAL_HOSTS = new Set(['www.atipikrh.com', 'atipikrh.com'])

const PAGES = ['/', '/2/action-de-formation']

export function extractCanonical(html) {
  const m =
    html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
    || html.match(/<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i)
  return m?.[1]?.trim() || null
}

export function extractGtagId(html) {
  const config = html.match(/gtag\(\s*['"]config['"]\s*,\s*['"]([^'"]+)['"]/i)
  if (config) return config[1].trim()
  const src = html.match(/googletagmanager\.com\/gtag\/js\?id=([^"'>]+)/i)
  return src?.[1]?.trim() || null
}

export function isForbiddenCanonical(href) {
  if (!href) return false
  try {
    const host = new URL(href).hostname.toLowerCase()
    return FORBIDDEN_CANONICAL_HOSTS.has(host)
  } catch {
    return true
  }
}

async function fetchHtml(path) {
  const url = `${CATALOGUE_URL}${path}`
  const res = await fetch(url, {
    redirect: 'follow',
    headers: { 'user-agent': 'AtipikRH-DigiformaCheck/1.0' },
  })
  const html = await res.text()
  return { url, ok: res.ok, status: res.status, html }
}

async function main() {
  const errors = []

  for (const path of PAGES) {
    const { url, ok, status, html } = await fetchHtml(path)
    if (!ok) {
      errors.push(`${url} : HTTP ${status}`)
      console.log(`❌ ${url} : HTTP ${status}`)
      continue
    }

    const gaId = extractGtagId(html)
    const gaOk = gaId === EXPECTED_GA_ID
    console.log(`${gaOk ? '✅' : '❌'} GA ${url} : ${gaId || 'absent'}`)
    if (!gaOk) {
      errors.push(
        `GA ${path} : attendu ${EXPECTED_GA_ID}, reçu ${gaId || 'absent'}`
      )
    }

    const canonical = extractCanonical(html)
    const canonicalOk = !isForbiddenCanonical(canonical)
    console.log(
      `${canonicalOk ? '✅' : '❌'} Canonique ${url} : ${canonical || 'absent (ok)'}`
    )
    if (!canonicalOk) {
      errors.push(
        `URL canonique ${path} : ${canonical} pointe vers le site vitrine. Laisser le champ vide dans Digiforma.`
      )
    }
  }

  if (errors.length) {
    console.error('\nÉchec — à corriger dans Digiforma → Ma Marque → Catalogue en ligne :')
    console.error(`  Google Analytics ID : ${EXPECTED_GA_ID}`)
    console.error('  URL canonique : (vide)')
    console.error('Détails :')
    errors.forEach((e) => console.error(`  - ${e}`))
    process.exitCode = 1
    return
  }

  console.log('\nCatalogue Digiforma : GA4 et canonique OK.')
}

const isDirectRun = import.meta.url === pathToFileURL(process.argv[1]).href
if (isDirectRun) {
  main().catch((err) => {
    console.error(err)
    process.exit(1)
  })
}
