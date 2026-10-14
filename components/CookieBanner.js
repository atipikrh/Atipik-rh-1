import { useState, useEffect } from 'react'
import { X, Settings, Check } from 'lucide-react'
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
    <div
      className="fixed inset-x-0 bottom-0 z-[9998] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      role="dialog"
      aria-label="Gestion des cookies"
    >
      <div className="relative mx-auto max-w-3xl bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-[45vh] overflow-y-auto">
        {!showSettings ? (
          <div className="p-4 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm text-neutral-900 leading-snug">
                Des cookies mesurent l’audience et le contenu. Vous choisissez ce que vous acceptez.{' '}
                <a href="/mentions-legales" className="text-[#013F63] underline underline-offset-2">
                  Confidentialité
                </a>
              </p>
              <button
                type="button"
                onClick={rejectAll}
                aria-label="Fermer et refuser les cookies"
                className="shrink-0 min-h-11 min-w-11 -mt-1 -mr-1 inline-flex items-center justify-center hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-neutral-900" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={acceptAll}
                className="min-h-11 bg-[#013F63] hover:bg-[#012a4a] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" aria-hidden="true" />
                Accepter tout
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="min-h-11 border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Settings className="w-4 h-4" aria-hidden="true" />
                Personnaliser
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="min-h-11 border border-muted-blue-200 text-neutral-900 hover:bg-neutral-100 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                Refuser tout
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#013F63]">Paramètres des cookies</h3>
              
              {/* Cookies nécessaires */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3 p-4 bg-neutral-100 rounded-lg">
                  <div className="min-w-0">
                    <h4 className="font-semibold text-[#013F63]">Cookies nécessaires</h4>
                    <p className="text-sm text-neutral-900">Essentiels au fonctionnement du site</p>
                  </div>
                  <div className="shrink-0 w-12 h-6 bg-[#013F63] rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Cookies analytiques */}
                <div className="flex items-center justify-between gap-3 p-4 border border-muted-blue-200 rounded-lg">
                  <div className="min-w-0">
                    <h4 className="font-semibold text-[#013F63]">Cookies analytiques</h4>
                    <p className="text-sm text-neutral-900">Nous aident à comprendre l'utilisation du site</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleCookie('analytics')}
                    aria-pressed={cookies.analytics}
                    aria-label="Cookies analytiques"
                    className={`shrink-0 min-h-11 min-w-11 w-12 rounded-full flex items-center transition-colors ${
                      cookies.analytics ? 'bg-[#013F63] justify-end' : 'bg-muted-blue-200 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </button>
                </div>

                {/* Cookies marketing */}
                <div className="flex items-center justify-between gap-3 p-4 border border-muted-blue-200 rounded-lg">
                  <div className="min-w-0">
                    <h4 className="font-semibold text-[#013F63]">Cookies marketing</h4>
                    <p className="text-sm text-neutral-900">Pour personnaliser les publicités et le contenu</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleCookie('marketing')}
                    aria-pressed={cookies.marketing}
                    aria-label="Cookies marketing"
                    className={`shrink-0 min-h-11 min-w-11 w-12 rounded-full flex items-center transition-colors ${
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
              <p className="text-xs text-neutral-900">
                <a href="/mentions-legales" className="text-[#013F63] underline underline-offset-2">
                  Politique de confidentialité
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
