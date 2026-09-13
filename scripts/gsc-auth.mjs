/**
 * Auth Google Search Console partagée (OAuth ou compte de service).
 */
import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { GoogleAuth, OAuth2Client } from 'google-auth-library'

export const GSC_SITE_URL = process.env.GSC_SITE_URL || 'sc-domain:atipikrh.com'
export const WEBMASTERS_SCOPE = 'https://www.googleapis.com/auth/webmasters'

const OAUTH_TOKEN_PATH = resolve(process.cwd(), 'secrets/gsc-oauth-token.json')
const SERVICE_ACCOUNT_DEFAULT = resolve(process.cwd(), 'secrets/gsc-service-account.json')

function loadOAuthTokenFile() {
  if (!existsSync(OAUTH_TOKEN_PATH)) return null
  return JSON.parse(readFileSync(OAUTH_TOKEN_PATH, 'utf8'))
}

function loadServiceAccount() {
  if (process.env.GSC_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.GSC_SERVICE_ACCOUNT_JSON)
  }
  const pathEnv = process.env.GSC_SERVICE_ACCOUNT_JSON_PATH
  if (pathEnv) {
    const p = resolve(pathEnv)
    if (!existsSync(p)) throw new Error(`Fichier introuvable : ${p}`)
    return JSON.parse(readFileSync(p, 'utf8'))
  }
  if (existsSync(SERVICE_ACCOUNT_DEFAULT)) {
    return JSON.parse(readFileSync(SERVICE_ACCOUNT_DEFAULT, 'utf8'))
  }
  return null
}

/** @returns {Promise<import('google-auth-library').GoogleAuth | OAuth2Client | null>} */
export async function createGscAuth() {
  const preferOAuth = process.env.GSC_AUTH === 'oauth'
  const preferServiceAccount = process.env.GSC_AUTH === 'service_account'
  const oauthData = loadOAuthTokenFile()
  const serviceAccount = loadServiceAccount()

  if ((preferOAuth || (!preferServiceAccount && oauthData)) && oauthData?.refresh_token) {
    const oauth2 = new OAuth2Client(
      oauthData.client_id,
      oauthData.client_secret,
      'http://localhost:4321/oauth2callback'
    )
    oauth2.setCredentials({ refresh_token: oauthData.refresh_token })
    console.log('Auth : compte Google (OAuth) — propriétaire Search Console\n')
    return oauth2
  }

  if (serviceAccount) {
    console.log(`Auth : compte de service ${serviceAccount.client_email}\n`)
    return new GoogleAuth({
      credentials: serviceAccount,
      scopes: [WEBMASTERS_SCOPE],
    })
  }

  return null
}

export async function getGscBearerToken(auth) {
  if (auth instanceof OAuth2Client) {
    const t = await auth.getAccessToken()
    return t.token
  }
  const client = await auth.getClient()
  const t = await client.getAccessToken()
  return t.token
}

export async function gscApiRequest(auth, method, path, body) {
  const token = await getGscBearerToken(auth)
  if (!token) throw new Error('Impossible d’obtenir un token OAuth')

  const url = `https://www.googleapis.com/webmasters/v3${path}`
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  const text = await res.text()
  let parsed = null
  try {
    parsed = text ? JSON.parse(text) : null
  } catch {
    parsed = text
  }

  return { ok: res.ok, status: res.status, body: parsed }
}

export function printGscSetupHelp() {
  console.error(`
❌ Aucune authentification GSC configurée.

Option A (recommandée si compte de service « introuvable » dans GSC) :
  npm run seo:gsc-oauth-setup   → secrets/gsc-oauth-token.json

Option B — Compte de service :
  secrets/gsc-service-account.json + utilisateur « Complet » dans Search Console

Guide : docs/GSC_API_SETUP.md
Checklist manuelle : https://search.google.com/search-console/sitemaps?resource_id=sc-domain%3Aatipikrh.com
`)
}
