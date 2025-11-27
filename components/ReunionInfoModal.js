import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, ArrowRight } from 'lucide-react'

export default function ReunionInfoModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [letterOut, setLetterOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      // La lettre sort après un court délai
      setTimeout(() => setLetterOut(true), 300)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setLetterOut(false)
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
    }, 600)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] transition-opacity duration-500 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      
      {/* Container de l'enveloppe */}
      <div 
        className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 ${
          isClosing ? 'pointer-events-none' : 'pointer-events-auto'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-w-sm">
          {/* Enveloppe orange - Container */}
          <div 
            className={`
              relative mx-auto transition-all duration-700
              ${isClosing ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}
            `}
            style={{ 
              width: '320px',
              height: '220px',
            }}
          >
            {/* Corps de l'enveloppe (fond) */}
            <div 
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-[#FE6400] to-[#EAA93D] rounded-lg shadow-2xl"
              style={{ 
                height: '180px',
                borderRadius: '0.5rem 0.5rem 0 0'
              }}
            >
              {/* Timbre décoratif */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/25 rounded border-2 border-white/50 flex items-center justify-center shadow-md">
                <div className="font-brand text-white text-xs font-bold">RH</div>
              </div>
            </div>

            {/* Rabat de l'enveloppe qui s'ouvre */}
            <div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#FE6400] to-[#FFBC82] rounded-t-lg origin-top transition-all duration-1000 ease-out"
              style={{ 
                height: letterOut ? '0px' : '150px',
                clipPath: letterOut 
                  ? 'polygon(0% 0%, 100% 0%, 50% 0%)' 
                  : 'polygon(0% 0%, 100% 0%, 50% 100%, 0% 0%)',
                transform: letterOut ? 'rotateX(180deg) translateY(-20px)' : 'rotateX(0deg) translateY(0px)',
                transformStyle: 'preserve-3d',
                boxShadow: letterOut ? 'none' : '0 4px 12px rgba(0,0,0,0.15)',
                zIndex: letterOut ? 0 : 2
              }}
            />
          </div>

          {/* Lettre qui sort de l'enveloppe */}
          <div 
            className={`
              absolute left-1/2 bg-white rounded-lg shadow-2xl border border-gray-100
              ${letterOut 
                ? 'animate-letter-out' 
                : 'translate-x-[-50%] translate-y-[180px] opacity-0 scale-95'
              }
              ${isClosing ? 'translate-x-[-50%] translate-y-[180px] opacity-0 scale-95 transition-all duration-400' : ''}
            `}
            style={{
              width: '300px',
              minHeight: '420px',
              top: letterOut ? '-100px' : '120px',
            }}
          >
            {/* Bouton fermer */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-[#013F63] hover:bg-[#FFDEC1]/30 rounded-full transition-all duration-300 z-10"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Lignes de papier sur la lettre */}
            <div className="absolute top-16 left-0 right-0 h-full pointer-events-none">
              <div className="h-full border-t border-dashed border-gray-200" style={{ borderSpacing: '20px' }}></div>
              <div className="absolute top-20 left-0 right-0 h-px bg-gray-200/50"></div>
              <div className="absolute top-32 left-0 right-0 h-px bg-gray-200/50"></div>
              <div className="absolute top-44 left-0 right-0 h-px bg-gray-200/50"></div>
              <div className="absolute top-56 left-0 right-0 h-px bg-gray-200/50"></div>
            </div>

            {/* Contenu de la lettre */}
            <div className="p-6 pt-8 relative z-10">
              {/* En-tête avec police brand */}
              <div className="text-center mb-5">
                <h3 className="font-brand text-3xl text-[#013F63] mb-2 leading-tight">
                  Invitation
                </h3>
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#FE6400] to-transparent mx-auto mb-3"></div>
                <p className="text-sm text-gray-600 font-medium">
                  Réunion d'information collective
                </p>
                <p className="text-xs text-[#FE6400] mt-1 font-medium">
                  Gratuite • Sans engagement
                </p>
              </div>

              {/* Introduction */}
              <div className="mb-5">
                <p className="text-sm text-gray-700 leading-relaxed text-center">
                  Chère future participante, cher futur participant,
                </p>
                <p className="text-sm text-gray-700 leading-relaxed text-center mt-2">
                  <span className="font-semibold text-[#013F63]">Vanessa</span>, notre directrice, vous invite à découvrir notre formation lors d'une réunion où elle vous présentera :
                </p>
              </div>
              
              {/* Liste élégante */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400]"></div>
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">Notre équipe pédagogique</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400]"></div>
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">Le contenu détaillé de la formation</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400]"></div>
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">Notre approche pédagogique au plus près du réel : avec des projets collaboratifs</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400]"></div>
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">Les débouchés professionnels</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FE6400]"></div>
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">Les différentes possibilités de financement</span>
                </div>
              </div>

              {/* Bouton CTA */}
              <Link
                href="/s-inscrire"
                onClick={handleClose}
                className="group relative block w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#013F63] to-[#012a4a] hover:from-[#012a4a] hover:to-[#013F63] text-white font-medium py-3.5 px-5 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] text-center text-sm"
              >
                <span className="relative flex items-center justify-center gap-2">
                  <span>Répondre à l'invitation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>

              {/* Footer */}
              <p className="text-xs text-gray-400 text-center mt-4">
                Durée : 2h • Organisées régulièrement
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
