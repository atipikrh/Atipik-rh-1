import { useState } from 'react'
import Link from 'next/link'
import { FileText, X, Users, ChevronRight } from 'lucide-react'

export default function ReunionInfoPopup() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-[9998]">
      <div className="bg-white border-2 border-orange-500 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out overflow-hidden w-80">
        {/* Header compact sur une ligne */}
        <div className="bg-orange-500 text-white p-3 flex items-center justify-between">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 hover:bg-orange-600 rounded px-2 py-1 transition-colors flex-1"
          >
            <FileText className="w-5 h-5" />
            <span className="font-semibold text-sm whitespace-nowrap">Réunions d'information collective</span>
          </button>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-orange-600 rounded transition-colors"
              title={isExpanded ? "Réduire" : "Agrandir"}
            >
              <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
            </button>
            {/* Bouton X visible seulement quand étendu */}
            {isExpanded && (
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 hover:bg-orange-600 rounded transition-colors"
                title="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Contenu du popup - visible seulement si étendu */}
        {isExpanded && (
          <div className="p-4">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-[#013F63] mb-2">
                Réunions d'information collective
              </h3>
              <p className="text-[#013F63] text-sm leading-relaxed mb-4">
                Découvrez nos formations FPA et CIP lors de nos réunions d'information gratuites
              </p>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-[#013F63]">Formation FPA</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-[#013F63]">Formation CIP</span>
              </div>
            </div>

            <Link 
              href="/s-inscrire"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <span>S'inscrire</span>
            </Link>

            <p className="text-xs text-gray-500 text-center mt-3">
              Réunions gratuites • Sans engagement
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
