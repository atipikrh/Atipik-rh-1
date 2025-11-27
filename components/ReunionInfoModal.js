import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Calendar, Sparkles, ArrowRight } from 'lucide-react'

export default function ReunionInfoModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Afficher le popup après 2 secondes
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
    }, 300)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Overlay avec effet de flou */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div 
        className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 transition-all duration-300 ${
          isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all">
          {/* Dégradé de fond subtil */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#013F63]/5 via-white to-[#FE6400]/5"></div>
          
          {/* Contenu */}
          <div className="relative p-8">
            {/* Bouton fermer */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icône décorative */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#013F63] to-[#FE6400] rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-[#013F63] to-[#FE6400] p-4 rounded-full">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Titre */}
            <h3 className="text-2xl font-bold text-[#013F63] text-center mb-3">
              Découvrez notre formation
            </h3>

            {/* Sous-titre */}
            <p className="text-gray-600 text-center mb-6 leading-relaxed">
              Participez à une de nos <span className="font-semibold text-[#013F63]">réunions d'information collective</span> pour découvrir en détail notre formation et poser toutes vos questions.
            </p>

            {/* Points clés */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#FE6400] to-[#FFBC82] rounded-full flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-gray-700">Réunion gratuite et sans engagement</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#013F63] to-[#9AB4BF] rounded-full flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-gray-700">Présentation détaillée du programme</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#FE6400] to-[#FFBC82] rounded-full flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-gray-700">Échanges avec nos formateurs</span>
              </div>
            </div>

            {/* Bouton CTA */}
            <Link
              href="/s-inscrire"
              onClick={handleClose}
              className="block w-full bg-gradient-to-r from-[#013F63] to-[#012a4a] hover:from-[#012a4a] hover:to-[#013F63] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              <span>S'inscrire à une réunion</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Texte informatif */}
            <p className="text-xs text-gray-500 text-center mt-4">
              Réunions organisées régulièrement • Durée : 2h
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

