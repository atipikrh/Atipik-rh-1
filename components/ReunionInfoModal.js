import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, ArrowRight } from 'lucide-react'

export default function ReunionInfoModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
    }, 300)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div 
        className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 ${
          isClosing ? 'pointer-events-none' : 'pointer-events-auto'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          className={`
            relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden
            transform transition-all duration-300
            ${isClosing ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}
          `}
        >
          {/* Bouton fermer */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white text-gray-500 hover:text-[#013F63] rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 z-10"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Contenu */}
          <div className="p-8">
            {/* En-tête avec police Brittany */}
            <div className="text-center mb-6">
              <h3 className="font-brittany text-4xl text-[#013F63] mb-3 leading-tight">
                Découvrez notre formation
              </h3>
              <div className="w-24 h-1 bg-[#FE6400] mx-auto mb-3 rounded-full"></div>
              <p className="text-sm text-gray-600 font-medium font-sans">
                Réunion d'information collective
              </p>
              <p className="text-xs text-[#FE6400] mt-2 font-medium font-sans">
                Gratuite • Sans engagement
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-6">
              <p className="text-sm text-gray-700 leading-relaxed text-center font-sans">
                <span className="font-semibold text-[#013F63]">Vanessa</span>, notre directrice, vous invite à découvrir notre formation lors d'une réunion où elle vous présentera :
              </p>
            </div>
            
            {/* Liste */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#FE6400]"></div>
                </div>
                <span className="text-sm text-gray-700 leading-relaxed font-sans">Notre équipe pédagogique</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#FE6400]"></div>
                </div>
                <span className="text-sm text-gray-700 leading-relaxed font-sans">Le contenu détaillé de la formation</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#FE6400]"></div>
                </div>
                <span className="text-sm text-gray-700 leading-relaxed font-sans">Notre approche pédagogique au plus près du réel : avec des projets collaboratifs</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#FE6400]"></div>
                </div>
                <span className="text-sm text-gray-700 leading-relaxed font-sans">Les débouchés professionnels</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#FE6400]"></div>
                </div>
                <span className="text-sm text-gray-700 leading-relaxed font-sans">Les différentes possibilités de financement</span>
              </div>
            </div>

            {/* Bouton CTA */}
            <Link
              href="/s-inscrire"
              onClick={handleClose}
              className="group relative block w-full overflow-hidden rounded-2xl bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold py-4 px-6 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] text-center text-sm font-sans"
            >
              <span className="relative flex items-center justify-center gap-2">
                <span>S'inscrire à une réunion</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            {/* Footer */}
            <p className="text-xs text-gray-400 text-center mt-5 font-sans">
              Durée : 2h • Organisées régulièrement
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
