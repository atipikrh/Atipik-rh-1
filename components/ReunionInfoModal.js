import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, ArrowRight, Sparkles } from 'lucide-react'

export default function ReunionInfoModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Démarrer l'animation après un court délai
      setTimeout(() => setIsAnimating(true), 50)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
      setIsAnimating(false)
    }, 400)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Overlay avec effet de fondu élégant */}
      <div 
        className={`fixed inset-0 bg-[#013F63]/20 backdrop-blur-[2px] z-[9999] transition-opacity duration-500 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      {/* Modal avec animation sophistiquée */}
      <div 
        className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none ${
          isClosing ? 'pointer-events-none' : 'pointer-events-auto'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          className={`
            relative bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden
            ${isClosing 
              ? 'opacity-0 scale-95 translate-y-8 transition-all duration-300 ease-in' 
              : isAnimating 
                ? 'animate-modal-enter' 
                : 'opacity-0'
            }
          `}
        >
          {/* Ligne décorative en haut - style féminin */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFDEC1] via-[#FE6400] to-[#FFDEC1]"></div>
          
          {/* Forme décorative subtile en arrière-plan */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#FFDEC1]/30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#FE6400]/10 rounded-full blur-xl"></div>

          {/* Contenu */}
          <div className="relative p-6">
            {/* Bouton fermer élégant */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-[#013F63] hover:bg-[#FFDEC1]/30 rounded-full transition-all duration-300 hover:rotate-90"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* En-tête avec police brand */}
            <div className="text-center mb-5 pt-2">
              <h3 className="font-brand text-3xl text-[#013F63] mb-2 leading-tight">
                Découvrez
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#FE6400] to-transparent mx-auto mb-3"></div>
              <p className="text-sm text-gray-600 font-medium">
                Réunion d'information collective
              </p>
              <p className="text-xs text-[#FE6400] mt-1">
                Gratuite • Sans engagement
              </p>
            </div>

            {/* Introduction avec style raffiné */}
            <div className="mb-5">
              <p className="text-sm text-gray-700 leading-relaxed text-center">
                Animée par <span className="font-semibold text-[#013F63]">Vanessa</span>, notre directrice
              </p>
            </div>
            
            {/* Liste avec style féminin et élégant */}
            <div className="space-y-2.5 mb-6">
              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400] group-hover:scale-125 transition-transform duration-200"></div>
                </div>
                <span className="text-sm text-gray-700 leading-relaxed">Notre équipe pédagogique</span>
              </div>
              
              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400] group-hover:scale-125 transition-transform duration-200"></div>
                </div>
                <span className="text-sm text-gray-700 leading-relaxed">Le contenu détaillé de la formation</span>
              </div>
              
              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400] group-hover:scale-125 transition-transform duration-200"></div>
                </div>
                <span className="text-sm text-gray-700 leading-relaxed">Notre approche pédagogique au plus près du réel : avec des projets collaboratifs</span>
              </div>
              
              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400] group-hover:scale-125 transition-transform duration-200"></div>
                </div>
                <span className="text-sm text-gray-700 leading-relaxed">Les débouchés professionnels</span>
              </div>
              
              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400] group-hover:scale-125 transition-transform duration-200"></div>
                </div>
                <span className="text-sm text-gray-700 leading-relaxed">Les différentes possibilités de financement</span>
              </div>
            </div>

            {/* Bouton CTA élégant avec style féminin */}
            <Link
              href="/s-inscrire"
              onClick={handleClose}
              className="group relative block w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#013F63] to-[#012a4a] hover:from-[#012a4a] hover:to-[#013F63] text-white font-medium py-3.5 px-5 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] text-center text-sm"
            >
              {/* Effet de brillance subtil */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                <span>S'inscrire à une réunion</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            {/* Footer discret et élégant */}
            <p className="text-xs text-gray-400 text-center mt-4 flex items-center justify-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#9AB4BF]"></span>
              <span>Durée : 2h • Organisées régulièrement</span>
              <span className="w-1 h-1 rounded-full bg-[#9AB4BF]"></span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
