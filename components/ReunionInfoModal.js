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

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
    }, 200)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Overlay sobre */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] transition-opacity duration-200 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      {/* Modal compacte et épurée */}
      <div 
        className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 transition-all duration-200 ${
          isClosing ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full border border-gray-200">
          {/* Bouton fermer discret */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Contenu */}
          <div className="p-6">
            {/* Titre */}
            <h3 className="text-xl font-semibold text-[#013F63] mb-1 pr-8">
              Réunion d'information collective
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Gratuite et sans engagement
            </p>

            {/* Introduction */}
            <p className="text-sm text-gray-700 mb-5 leading-relaxed">
              Ces réunions sont animées par <span className="font-semibold text-[#013F63]">Vanessa, notre directrice</span>, qui vous présentera :
            </p>
            
            {/* Liste épurée */}
            <ul className="space-y-2.5 mb-6 text-sm text-gray-700">
              <li className="flex items-start gap-2.5">
                <span className="text-[#FE6400] mt-1.5">•</span>
                <span>Notre équipe pédagogique</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FE6400] mt-1.5">•</span>
                <span>Le contenu détaillé de la formation</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FE6400] mt-1.5">•</span>
                <span>Notre approche pédagogique au plus près du réel : avec des projets collaboratifs</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FE6400] mt-1.5">•</span>
                <span>Les débouchés professionnels</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FE6400] mt-1.5">•</span>
                <span>Les différentes possibilités de financement</span>
              </li>
            </ul>

            {/* Bouton CTA sobre */}
            <Link
              href="/s-inscrire"
              onClick={handleClose}
              className="block w-full bg-[#013F63] hover:bg-[#012a4a] text-white font-medium py-3 px-5 rounded-lg transition-colors duration-200 text-center text-sm flex items-center justify-center gap-2 group"
            >
              <span>S'inscrire à une réunion</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Footer discret */}
            <p className="text-xs text-gray-400 text-center mt-4">
              Durée : 2h • Organisées régulièrement
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

