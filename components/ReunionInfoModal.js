import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Calendar, Users, BookOpen, Lightbulb, Briefcase, CreditCard, ArrowRight, Sparkles } from 'lucide-react'

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
      {/* Overlay avec effet de flou amélioré */}
      <div 
        className={`fixed inset-0 bg-gradient-to-br from-[#013F63]/30 via-black/40 to-[#FE6400]/30 backdrop-blur-md z-[9999] transition-opacity duration-500 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      {/* Modal avec design amélioré */}
      <div 
        className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 transition-all duration-500 ${
          isClosing ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden transform transition-all border border-gray-100">
          {/* Bandeau décoratif en haut */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#013F63] via-[#FE6400] to-[#013F63]"></div>
          
          {/* Effets de lumière animés */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#FE6400]/20 to-[#013F63]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-[#013F63]/20 to-[#FE6400]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Contenu */}
          <div className="relative p-8 md:p-10">
            {/* Bouton fermer amélioré */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded-full transition-all duration-200 hover:rotate-90"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* En-tête avec icône animée */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative mb-4">
                {/* Cercle animé externe */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#013F63] to-[#FE6400] rounded-full blur-xl opacity-30 animate-pulse"></div>
                {/* Cercle animé moyen */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FE6400] to-[#FFBC82] rounded-full blur-lg opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                {/* Icône principale */}
                <div className="relative bg-gradient-to-br from-[#013F63] via-[#012a4a] to-[#FE6400] p-5 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#013F63] to-[#FE6400] bg-clip-text text-transparent text-center mb-2">
                Découvrez notre formation
              </h3>
              <p className="text-gray-500 text-center text-sm">
                Réunion d'information collective gratuite
              </p>
            </div>

            {/* Section Vanessa */}
            <div className="bg-gradient-to-br from-blue-50 via-orange-50/30 to-blue-50 rounded-2xl p-6 mb-6 border border-blue-100/50">
              <p className="text-gray-700 text-center mb-4 leading-relaxed">
                Ces réunions sont animées par <span className="font-semibold text-[#013F63]">Vanessa, notre directrice</span>, qui vous présentera :
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#013F63] to-[#012a4a] rounded-lg flex items-center justify-center shadow-md">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">Notre équipe pédagogique</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#FE6400] to-[#FFBC82] rounded-lg flex items-center justify-center shadow-md">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">Le contenu détaillé de la formation</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#013F63] to-[#9AB4BF] rounded-lg flex items-center justify-center shadow-md">
                      <Lightbulb className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">Notre approche pédagogique au plus près du réel : avec des projets collaboratifs</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#FE6400] to-[#EAA93D] rounded-lg flex items-center justify-center shadow-md">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">Les débouchés professionnels</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#013F63] to-[#012a4a] rounded-lg flex items-center justify-center shadow-md">
                      <CreditCard className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">Les différentes possibilités de financement</span>
                </div>
              </div>
            </div>

            {/* Bouton CTA amélioré */}
            <Link
              href="/s-inscrire"
              onClick={handleClose}
              className="group relative block w-full overflow-hidden rounded-2xl"
            >
              {/* Fond avec dégradé animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#013F63] via-[#012a4a] to-[#013F63] bg-[length:200%_100%] group-hover:bg-[length:100%_100%] transition-all duration-500"></div>
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Contenu du bouton */}
              <div className="relative flex items-center justify-center gap-3 py-4 px-6 text-white font-semibold">
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-lg">S'inscrire à une réunion</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>

            {/* Texte informatif amélioré */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Réunions organisées régulièrement • Durée : 2h • Gratuit et sans engagement</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

