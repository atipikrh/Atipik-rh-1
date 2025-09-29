import { useState, useEffect } from 'react'
import { X, Cookie, Settings, Check } from 'lucide-react'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [cookies, setCookies] = useState({
    necessary: true, // Toujours activé
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
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
    setShowBanner(false)
  }

  const acceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookies))
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
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <Cookie className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="text-xl font-bold text-[#013F63]">Gestion des cookies</h2>
          </div>
          <button
            onClick={rejectAll}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!showSettings ? (
            // Vue principale
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
                analyser le trafic et personnaliser le contenu. Vous pouvez choisir quels 
                cookies accepter.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-[#013F63] mb-2">Cookies nécessaires</h3>
                <p className="text-sm text-gray-600">
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
                  className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors"
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
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-[#013F63]">Cookies nécessaires</h4>
                    <p className="text-sm text-gray-600">Essentiels au fonctionnement du site</p>
                  </div>
                  <div className="w-12 h-6 bg-[#013F63] rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Cookies analytiques */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-[#013F63]">Cookies analytiques</h4>
                    <p className="text-sm text-gray-600">Nous aident à comprendre l'utilisation du site</p>
                  </div>
                  <button
                    onClick={() => toggleCookie('analytics')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      cookies.analytics ? 'bg-[#013F63] justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </button>
                </div>

                {/* Cookies marketing */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-[#013F63]">Cookies marketing</h4>
                    <p className="text-sm text-gray-600">Pour personnaliser les publicités et le contenu</p>
                  </div>
                  <button
                    onClick={() => toggleCookie('marketing')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      cookies.marketing ? 'bg-[#013F63] justify-end' : 'bg-gray-300 justify-start'
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
                  className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Retour
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 rounded-b-2xl">
          <p className="text-xs text-gray-500 text-center">
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
