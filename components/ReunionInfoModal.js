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
    }, 400)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Modal en bas à gauche - forme arc de cercle */}
      <div 
        className={`fixed bottom-6 left-6 z-[10000] max-w-sm w-full ${
          isClosing ? 'pointer-events-none' : 'pointer-events-auto'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          className={`
            relative bg-white shadow-2xl overflow-hidden
            transform transition-all duration-500 ease-out
            ${isClosing 
              ? 'opacity-0 translate-y-full scale-95' 
              : 'opacity-100 translate-y-0 scale-100'
            }
          `}
          style={{
            borderRadius: '24px 24px 24px 8px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.05)'
          }}
        >
          {/* Bouton fermer */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 p-1.5 bg-white/90 hover:bg-white text-gray-500 hover:text-[#013F63] rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 z-10"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Contenu */}
          <div className="p-6">
            {/* En-tête avec police Brittany */}
            <div className="text-center mb-5">
              <h3 className="font-brittany text-2xl text-[#013F63] mb-2 leading-tight whitespace-nowrap">
                Découvrez notre formation
              </h3>
              <div className="w-20 h-1 bg-[#FE6400] mx-auto mb-2 rounded-full"></div>
              <p className="text-xs text-gray-600 font-medium font-sans">
                Réunion d'information collective
              </p>
              <p className="text-xs text-[#FE6400] mt-1 font-medium font-sans">
                Gratuite • Sans engagement
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-4">
              <p className="text-xs text-gray-700 leading-relaxed text-center font-sans">
                <span className="font-semibold text-[#013F63]">Vanessa</span>, notre directrice, vous présente :
              </p>
            </div>
            
            {/* Liste compacte */}
            <div className="space-y-2 mb-5">
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400]"></div>
                </div>
                <span className="text-xs text-gray-700 leading-relaxed font-sans">Notre équipe pédagogique</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400]"></div>
                </div>
                <span className="text-xs text-gray-700 leading-relaxed font-sans">Le contenu détaillé de la formation</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400]"></div>
                </div>
                <span className="text-xs text-gray-700 leading-relaxed font-sans">Notre approche pédagogique au plus près du réel</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400]"></div>
                </div>
                <span className="text-xs text-gray-700 leading-relaxed font-sans">Les débouchés professionnels</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400]"></div>
                </div>
                <span className="text-xs text-gray-700 leading-relaxed font-sans">Les possibilités de financement</span>
              </div>
            </div>

            {/* Bouton CTA */}
            <Link
              href="/s-inscrire"
              onClick={handleClose}
              className="group relative block w-full overflow-hidden rounded-xl bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold py-3 px-5 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] text-center text-xs font-sans"
            >
              <span className="relative flex items-center justify-center gap-2">
                <span>S'inscrire à une réunion</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            {/* Footer */}
            <p className="text-xs text-gray-400 text-center mt-3 font-sans">
              Durée : 2h
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
