// Utilitaire pour gérer Google Analytics avec respect du consentement RGPD

// Même ID à coller dans Digiforma (Ma Marque → Catalogue en ligne). Pas de préfixe UA-.
const GA_MEASUREMENT_ID = 'G-0T6JYZBLQN'

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
    
    // Définir la fonction gtag avant le chargement du script
    window.gtag = function() {
      window.dataLayer.push(arguments)
    }
    
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
