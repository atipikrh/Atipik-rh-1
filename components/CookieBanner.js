import { useState, useEffect } from 'react'
import { X, Cookie, Settings, Check } from 'lucide-react'
import { initGA, trackPageView, updateGoogleConsent } from '../lib/analytics'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [cookies, setCookies] = useState({
    necessary: true, // Toujours activé
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setShowBanner(true)
      return
    }

    try {
      const consent = JSON.parse(cookieConsent)
      updateGoogleConsent(consent.analytics === true, consent.marketing === true)
      if (consent.analytics === true) {
        initGA()
      }
    } catch (error) {
      console.error('[CookieBanner] Erreur lors de la lecture du consentement:', error)
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const allCookies = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    setCookies(allCookies)
    localStorage.setItem('cookieConsent', JSON.stringify(allCookies))
    
    updateGoogleConsent(true, true)
    initGA()
    // Suivre la page actuelle
    setTimeout(() => {
      trackPageView(window.location.pathname)
    }, 100)
    
    // Déclencher un événement personnalisé pour notifier les autres composants
    window.dispatchEvent(new Event('cookieConsentChanged'))
    
    setShowBanner(false)
  }

  const acceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookies))
    
    updateGoogleConsent(cookies.analytics === true, cookies.marketing === true)
    if (cookies.analytics === true) {
      initGA()
      // Suivre la page actuelle
      setTimeout(() => {
        trackPageView(window.location.pathname)
      }, 100)
    }
    
    // Déclencher un événement personnalisé pour notifier les autres composants
    window.dispatchEvent(new Event('cookieConsentChanged'))
    
    setShowBanner(false)
    setShowSettings(false)
  }

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    setCookies(onlyNecessary)
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary))
    updateGoogleConsent(false, false)
    window.dispatchEvent(new Event('cookieConsentChanged'))
    setShowBanner(false)
  }

  const toggleCookie = (type) => {
    if (type === 'necessary') return // Ne peut pas être désactivé
    setCookies(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!showBanner) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center p-4 sm:items-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={rejectAll}></div>
      
      {/* Banner */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent-300 rounded-full flex items-center justify-center">
              <Cookie className="w-5 h-5 text-accent-600" />
            </div>
            <h2 className="text-xl font-bold text-[#013F63]">Gestion des cookies</h2>
          </div>
          <button
            onClick={rejectAll}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-neutral-900" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!showSettings ? (
            // Vue principale
            <div className="space-y-4">
              <p className="text-neutral-900 leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
                analyser le trafic et personnaliser le contenu. Vous pouvez choisir quels 
                cookies accepter.
              </p>
              
              <div className="bg-muted-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-[#013F63] mb-2">Cookies nécessaires</h3>
                <p className="text-sm text-neutral-900">
                  Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-[#013F63] hover:bg-[#012a4a] text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Accepter tout
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Personnaliser
                </button>
                <button
                  onClick={rejectAll}
                  className="flex-1 border border-muted-blue-200 text-neutral-900 hover:bg-neutral-100 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Refuser tout
                </button>
              </div>
            </div>
          ) : (
            // Vue des paramètres
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[#013F63]">Paramètres des cookies</h3>
              
              {/* Cookies nécessaires */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-neutral-100 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-[#013F63]">Cookies nécessaires</h4>
                    <p className="text-sm text-neutral-900">Essentiels au fonctionnement du site</p>
                  </div>
                  <div className="w-12 h-6 bg-[#013F63] rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Cookies analytiques */}
                <div className="flex items-center justify-between p-4 border border-muted-blue-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-[#013F63]">Cookies analytiques</h4>
                    <p className="text-sm text-neutral-900">Nous aident à comprendre l'utilisation du site</p>
                  </div>
                  <button
                    onClick={() => toggleCookie('analytics')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      cookies.analytics ? 'bg-[#013F63] justify-end' : 'bg-muted-blue-200 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </button>
                </div>

                {/* Cookies marketing */}
                <div className="flex items-center justify-between p-4 border border-muted-blue-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-[#013F63]">Cookies marketing</h4>
                    <p className="text-sm text-neutral-900">Pour personnaliser les publicités et le contenu</p>
                  </div>
                  <button
                    onClick={() => toggleCookie('marketing')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      cookies.marketing ? 'bg-[#013F63] justify-end' : 'bg-muted-blue-200 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptSelected}
                  className="flex-1 bg-[#013F63] hover:bg-[#012a4a] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Enregistrer mes choix
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 border border-muted-blue-200 text-neutral-900 hover:bg-neutral-100 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Retour
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-neutral-100 rounded-b-2xl">
          <p className="text-xs text-neutral-900 text-center">
            En continuant à utiliser ce site, vous acceptez notre{' '}
            <a href="/mentions-legales" className="text-[#013F63] hover:underline">
              politique de confidentialité
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
