// Utilitaire pour gérer Google Analytics avec respect du consentement RGPD

import { ensureGtag } from './gtm'

// Même ID à coller dans Digiforma (Ma Marque → Catalogue en ligne). Pas de préfixe UA-.
const GA_MEASUREMENT_ID = 'G-0T6JYZBLQN'

export const updateGoogleConsent = (analytics, marketing) => {
  if (typeof window === 'undefined') return

  ensureGtag()
  window.gtag('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: marketing ? 'granted' : 'denied',
    ad_user_data: marketing ? 'granted' : 'denied',
    ad_personalization: marketing ? 'granted' : 'denied',
  })
}

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
const UTM_STORAGE_KEY = 'atipikUtm'
const LEAD_TX_KEY = 'atipikLeadTx'

function clipUtm(value) {
  return String(value).slice(0, 80)
}

/** Mémorise les UTM de la visite pour les joindre au lead, même après un changement de page. */
export function rememberUtm(query) {
  if (typeof window === 'undefined' || !query) return
  const stored = readStoredUtm()
  let changed = false
  for (const key of UTM_KEYS) {
    const raw = query[key]
    if (raw == null || raw === '') continue
    stored[key] = clipUtm(Array.isArray(raw) ? raw[0] : raw)
    changed = true
  }
  if (!changed) return
  try {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(stored))
  } catch {
    // Navigation privée : le lead part sans UTM.
  }
}

function readStoredUtm() {
  if (typeof window === 'undefined') return {}
  try {
    const parsed = JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY) || '{}')
    const out = {}
    for (const key of UTM_KEYS) {
      if (typeof parsed[key] === 'string' && parsed[key]) out[key] = clipUtm(parsed[key])
    }
    return out
  } catch {
    return {}
  }
}

/** Un identifiant par visite : Google Ads ne compte qu’une conversion par clic. */
function leadTransactionId() {
  try {
    const existing = sessionStorage.getItem(LEAD_TX_KEY)
    if (existing) return existing
    const id = `lead-${Date.now()}`
    sessionStorage.setItem(LEAD_TX_KEY, id)
    return id
  } catch {
    return undefined
  }
}

// Vérifier si le consentement analytique a été donné
export const isConsentGiven = () => {
  if (typeof window === 'undefined') return false
  
  try {
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) return false
    
    const consent = JSON.parse(cookieConsent)
    return consent.analytics === true
  } catch (error) {
    console.error('[Analytics] Erreur lors de la vérification du consentement:', error)
    return false
  }
}

// Charger dynamiquement les scripts Google Analytics
const loadGAScripts = () => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window not available'))
      return
    }
    
    // Vérifier si les scripts sont déjà chargés
    if (document.querySelector(`script[src*="gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
      resolve(true)
      return
    }
    
    // Initialiser le dataLayer avant de charger les scripts
    window.dataLayer = window.dataLayer || []
    ensureGtag()
    
    // Charger le script de configuration d'abord
    const scriptConfig = document.createElement('script')
    scriptConfig.id = 'ga-script-config'
    scriptConfig.innerHTML = `
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
      });
    `
    document.head.appendChild(scriptConfig)
    
    // Charger le script gtag.js
    const scriptLoader = document.createElement('script')
    scriptLoader.async = true
    scriptLoader.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    scriptLoader.id = 'ga-script-loader'
    
    scriptLoader.onload = () => {
      console.log('[Analytics] Scripts Google Analytics chargés avec succès')
      resolve(true)
    }
    
    scriptLoader.onerror = () => {
      console.error('[Analytics] Erreur lors du chargement des scripts Google Analytics')
      reject(new Error('Failed to load GA scripts'))
    }
    
    document.head.appendChild(scriptLoader)
  })
}

// Initialiser Google Analytics
export const initGA = async () => {
  if (typeof window === 'undefined') return false
  
  // Vérifier le consentement avant d'initialiser
  if (!isConsentGiven()) {
    console.log('[Analytics] Consentement non donné, GA non initialisé')
    return false
  }
  
  // Vérifier si GA est déjà initialisé
  if (window.gtag && typeof window.gtag === 'function' && window.dataLayer) {
    const isConfigured = window.dataLayer.some(item => 
      Array.isArray(item) && item[0] === 'config' && item[1] === GA_MEASUREMENT_ID
    )
    if (isConfigured) {
      console.log('[Analytics] Google Analytics déjà initialisé')
      return true
    }
  }
  
  try {
    // Charger les scripts si nécessaire
    await loadGAScripts()
    console.log('[Analytics] Google Analytics initialisé avec ID:', GA_MEASUREMENT_ID)
    return true
  } catch (error) {
    console.error('[Analytics] Erreur lors de l\'initialisation de Google Analytics:', error)
    return false
  }
}

// Suivre une page vue
export const trackPageView = (url) => {
  if (typeof window === 'undefined') return
  
  if (!isConsentGiven()) {
    console.log('[Analytics] Consentement non donné, page vue non suivie')
    return
  }
  
  if (!window.gtag) {
    console.warn('[Analytics] gtag non disponible, initialisation...')
    initGA()
    return
  }
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    anonymize_ip: true
  })
  
  console.log('[Analytics] Page vue suivie:', url)
}

// Suivre un événement
export const trackEvent = (action, category, label, value) => {
  if (typeof window === 'undefined') return
  
  if (!isConsentGiven()) {
    console.log('[Analytics] Consentement non donné, événement non suivi')
    return
  }
  
  if (!window.gtag) {
    console.warn('[Analytics] gtag non disponible, initialisation...')
    initGA()
    return
  }
  
  const eventParams = {
    event_category: category,
    anonymize_ip: true
  }
  
  if (label) eventParams.event_label = label
  if (value !== undefined) eventParams.value = value
  
  window.gtag('event', action, eventParams)
  
  console.log('[Analytics] Événement suivi:', { action, category, label, value })
}

function isMarketingConsentGiven() {
  if (typeof window === 'undefined') return false
  try {
    const raw = localStorage.getItem('cookieConsent')
    if (!raw) return false
    return JSON.parse(raw).marketing === true
  } catch {
    return false
  }
}

/**
 * Lead de formulaire. Analytics si le consentement analytics est accordé.
 * Conversion Google Ads seulement si le consentement marketing est accordé
 * et si NEXT_PUBLIC_GOOGLE_ADS_ID + NEXT_PUBLIC_GOOGLE_ADS_LABEL sont définis.
 * @param {{ formation?: string, source?: string }} params
 */
export function trackLead({ formation, source } = {}) {
  if (typeof window === 'undefined') return

  const formationName = String(formation || 'non-precise').slice(0, 80)
  const leadSource = String(source || 'site').slice(0, 40)

  const utm = readStoredUtm()

  if (isConsentGiven()) {
    ensureGtag()
    window.gtag('event', 'generate_lead', {
      formation_name: formationName,
      lead_source: leadSource,
      ...utm,
    })
  }

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  const adsLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL
  if (!isMarketingConsentGiven() || !adsId || !adsLabel) return

  ensureGtag()
  const transactionId = leadTransactionId()
  window.gtag('event', 'conversion', {
    send_to: `${adsId}/${adsLabel}`,
    ...(transactionId ? { transaction_id: transactionId } : {}),
  })
}
