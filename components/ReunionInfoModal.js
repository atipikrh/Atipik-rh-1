import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, ArrowRight } from 'lucide-react'

export default function ReunionInfoModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [letterOut, setLetterOut] = useState(false)
  const [flapOpen, setFlapOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Ouvrir le rabat puis faire sortir la lettre - animations plus longues
      setTimeout(() => {
        setFlapOpen(true)
        setTimeout(() => setLetterOut(true), 800) // Plus de délai pour voir l'ouverture
      }, 400)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setLetterOut(false)
    setFlapOpen(false)
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
    }, 900)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] transition-opacity duration-700 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      {/* Container principal */}
      <div 
        className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 ${
          isClosing ? 'pointer-events-none' : 'pointer-events-auto'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-w-2xl">
          {/* Enveloppe orange - visible dès le début, format large et réaliste */}
          <div 
            className={`
              relative mx-auto
              ${isClosing ? 'animate-envelope-close' : 'animate-envelope-enter'}
            `}
            style={{ 
              width: '100%',
              maxWidth: '600px',
              height: '240px',
            }}
          >
            {/* Corps de l'enveloppe (fond) - couleur unie orange avec effet papier */}
            <div 
              className="absolute bottom-0 left-0 right-0 bg-[#FE6400] shadow-2xl"
              style={{ 
                height: '200px',
                borderRadius: '0',
                boxShadow: '0 8px 32px rgba(254, 100, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                border: '1px solid rgba(254, 100, 0, 0.8)',
                borderBottom: 'none'
              }}
            >
              {/* Ligne de pliage au centre */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-px bg-black/10"
                style={{ bottom: '0px' }}
              />
            </div>

            {/* Rabat de l'enveloppe qui s'ouvre - design réaliste */}
            <div 
              className="absolute top-0 left-0 right-0 bg-[#FE6400] origin-top transition-all duration-1200 ease-out"
              style={{ 
                height: isClosing ? '180px' : (flapOpen ? '0px' : '180px'),
                clipPath: isClosing 
                  ? 'polygon(0% 0%, 100% 0%, 50% 100%, 0% 0%)'
                  : (flapOpen 
                    ? 'polygon(0% 0%, 100% 0%, 50% 0%)' 
                    : 'polygon(0% 0%, 100% 0%, 50% 100%, 0% 0%)'),
                transform: isClosing 
                  ? 'rotateX(0deg) translateY(0px)' 
                  : (flapOpen ? 'rotateX(180deg) translateY(-15px)' : 'rotateX(0deg)'),
                transformStyle: 'preserve-3d',
                boxShadow: isClosing 
                  ? '0 2px 8px rgba(0,0,0,0.15), inset 0 -1px 0 rgba(0,0,0,0.1)' 
                  : (flapOpen 
                    ? 'none' 
                    : '0 2px 8px rgba(0,0,0,0.15), inset 0 -1px 0 rgba(0,0,0,0.1)'),
                zIndex: flapOpen ? 0 : 3,
                border: '1px solid rgba(254, 100, 0, 0.8)',
                borderBottom: 'none'
              }}
            />
          </div>

          {/* Lettre qui sort de l'enveloppe - effet feuille de papier réaliste */}
          <div 
            className={`
              absolute left-1/2 bg-white shadow-2xl
              ${isClosing 
                ? 'animate-letter-close' 
                : (letterOut 
                  ? 'animate-letter-out' 
                  : 'translate-x-[-50%] translate-y-[120px] opacity-0 scale-0.88')
              }
            `}
            style={{
              width: 'calc(100% - 2rem)',
              maxWidth: '580px',
              minHeight: '380px',
              top: letterOut ? '-50px' : '140px',
              zIndex: letterOut ? 10 : 1,
              borderRadius: '0',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)',
              border: '1px solid rgba(0,0,0,0.08)',
              background: 'linear-gradient(to bottom, #ffffff 0%, #fafafa 100%)'
            }}
          >
            {/* Bouton fermer - plus visible */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 p-2 bg-white/90 hover:bg-white text-gray-600 hover:text-[#013F63] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-50 border border-gray-200"
              aria-label="Fermer"
              style={{ zIndex: 9999 }}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lignes de papier réalistes avec effet feuille */}
            <div className="absolute top-16 left-6 right-6 bottom-6 pointer-events-none">
              {/* Lignes horizontales */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gray-200/60"></div>
              <div className="absolute top-6 left-0 right-0 h-px bg-gray-200/60"></div>
              <div className="absolute top-12 left-0 right-0 h-px bg-gray-200/60"></div>
              <div className="absolute top-18 left-0 right-0 h-px bg-gray-200/60"></div>
              <div className="absolute top-24 left-0 right-0 h-px bg-gray-200/60"></div>
              {/* Marge gauche */}
              <div className="absolute top-0 bottom-0 left-0 w-px bg-red-200/40"></div>
              {/* Ombres subtiles pour effet relief */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50/20 pointer-events-none"></div>
            </div>

            {/* Contenu de la lettre - format compact */}
            <div className="p-5 pt-6 relative z-0">
              {/* En-tête avec police Brittany */}
              <div className="text-center mb-4">
                <h3 className="font-brittany text-3xl text-[#013F63] mb-2 leading-tight">
                  Invitation
                </h3>
                <div className="w-20 h-px bg-[#FE6400] mx-auto mb-2"></div>
                <p className="text-xs text-gray-600 font-medium font-sans">
                  Réunion d'information collective
                </p>
                <p className="text-xs text-[#FE6400] mt-1 font-medium font-sans">
                  Gratuite • Sans engagement
                </p>
              </div>

              {/* Introduction avec Montserrat - plus compact */}
              <div className="mb-4">
                <p className="text-xs text-gray-700 leading-relaxed text-center font-sans">
                  <span className="font-semibold text-[#013F63]">Vanessa</span>, notre directrice, vous invite à découvrir notre formation lors d'une réunion où elle vous présentera :
                </p>
              </div>
              
              {/* Liste avec Montserrat - en 2 colonnes sur grand écran */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400]"></div>
                  </div>
                  <span className="text-xs text-gray-700 leading-relaxed font-sans">Notre équipe pédagogique</span>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400]"></div>
                  </div>
                  <span className="text-xs text-gray-700 leading-relaxed font-sans">Le contenu détaillé de la formation</span>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400]"></div>
                  </div>
                  <span className="text-xs text-gray-700 leading-relaxed font-sans">Notre approche pédagogique au plus près du réel</span>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400]"></div>
                  </div>
                  <span className="text-xs text-gray-700 leading-relaxed font-sans">Les débouchés professionnels</span>
                </div>
                
                <div className="flex items-start gap-2 md:col-span-2">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400]"></div>
                  </div>
                  <span className="text-xs text-gray-700 leading-relaxed font-sans">Les différentes possibilités de financement</span>
                </div>
              </div>

              {/* Bouton CTA - couleur unie */}
              <Link
                href="/s-inscrire"
                onClick={handleClose}
                className="group relative block w-full overflow-hidden rounded-lg bg-[#013F63] hover:bg-[#012a4a] text-white font-medium py-3 px-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.01] text-center text-sm font-sans"
              >
                <span className="relative flex items-center justify-center gap-2">
                  <span>S'inscrire à une réunion</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>

              {/* Footer */}
              <p className="text-xs text-gray-400 text-center mt-3 font-sans">
                Durée : 2h • Organisées régulièrement
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
