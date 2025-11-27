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
      // Ouvrir le rabat puis faire sortir la lettre
      setTimeout(() => {
        setFlapOpen(true)
        setTimeout(() => setLetterOut(true), 400)
      }, 300)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setLetterOut(false)
    setFlapOpen(false)
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
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] transition-opacity duration-500 ${
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
        <div className="relative w-full max-w-sm">
          {/* Enveloppe orange - visible dès le début */}
          <div 
            className={`
              relative mx-auto
              ${isClosing ? 'opacity-0 scale-90 transition-all duration-400' : 'animate-envelope-enter'}
            `}
            style={{ 
              width: '340px',
              height: '200px',
            }}
          >
            {/* Corps de l'enveloppe (fond) - couleur unie orange */}
            <div 
              className="absolute bottom-0 left-0 right-0 bg-[#FE6400] rounded-lg shadow-2xl"
              style={{ 
                height: '160px',
                borderRadius: '0.5rem 0.5rem 0 0',
                boxShadow: '0 20px 60px rgba(254, 100, 0, 0.3)'
              }}
            >
              {/* Timbre décoratif */}
              <div className="absolute top-3 right-3 w-10 h-10 bg-white rounded border-2 border-white flex items-center justify-center shadow-sm">
                <span className="font-brittany text-[#FE6400] text-xs font-bold">RH</span>
              </div>
            </div>

            {/* Rabat de l'enveloppe qui s'ouvre */}
            <div 
              className="absolute top-0 left-0 right-0 bg-[#FE6400] rounded-t-lg origin-top transition-all duration-700 ease-out"
              style={{ 
                height: flapOpen ? '0px' : '140px',
                clipPath: flapOpen 
                  ? 'polygon(0% 0%, 100% 0%, 50% 0%)' 
                  : 'polygon(0% 0%, 100% 0%, 50% 100%, 0% 0%)',
                transform: flapOpen ? 'rotateX(180deg) translateY(-10px)' : 'rotateX(0deg)',
                transformStyle: 'preserve-3d',
                boxShadow: flapOpen ? 'none' : '0 4px 20px rgba(0,0,0,0.2)',
                zIndex: flapOpen ? 0 : 3
              }}
            />
          </div>

          {/* Lettre qui sort de l'enveloppe - animation motion design */}
          <div 
            className={`
              absolute left-1/2 bg-white rounded-lg shadow-2xl border border-gray-200
              ${letterOut 
                ? 'animate-letter-out' 
                : 'translate-x-[-50%] translate-y-[160px] opacity-0 scale-0.95'
              }
              ${isClosing ? 'translate-x-[-50%] translate-y-[160px] opacity-0 scale-0.95 transition-all duration-400' : ''}
            `}
            style={{
              width: '320px',
              minHeight: '450px',
              top: letterOut ? '-80px' : '120px',
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

            {/* Lignes de papier réalistes */}
            <div className="absolute top-20 left-6 right-6 bottom-6 pointer-events-none opacity-30">
              <div className="absolute top-0 left-0 right-0 h-px bg-gray-300"></div>
              <div className="absolute top-8 left-0 right-0 h-px bg-gray-300"></div>
              <div className="absolute top-16 left-0 right-0 h-px bg-gray-300"></div>
              <div className="absolute top-24 left-0 right-0 h-px bg-gray-300"></div>
              <div className="absolute top-32 left-0 right-0 h-px bg-gray-300"></div>
            </div>

            {/* Contenu de la lettre */}
            <div className="p-6 pt-8 relative z-10">
              {/* En-tête avec police Brittany */}
              <div className="text-center mb-6">
                <h3 className="font-brittany text-4xl text-[#013F63] mb-3 leading-tight">
                  Invitation
                </h3>
                <div className="w-24 h-px bg-[#FE6400] mx-auto mb-3"></div>
                <p className="text-sm text-gray-600 font-medium font-sans">
                  Réunion d'information collective
                </p>
                <p className="text-xs text-[#FE6400] mt-2 font-medium font-sans">
                  Gratuite • Sans engagement
                </p>
              </div>

              {/* Introduction avec Montserrat */}
              <div className="mb-6">
                <p className="text-sm text-gray-700 leading-relaxed text-center font-sans">
                  Chère future participante, cher futur participant,
                </p>
                <p className="text-sm text-gray-700 leading-relaxed text-center mt-3 font-sans">
                  <span className="font-semibold text-[#013F63]">Vanessa</span>, notre directrice, vous invite à découvrir notre formation lors d'une réunion où elle vous présentera :
                </p>
              </div>
              
              {/* Liste avec Montserrat */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#FE6400]"></div>
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed font-sans">Notre équipe pédagogique</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#FE6400]"></div>
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed font-sans">Le contenu détaillé de la formation</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#FE6400]"></div>
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed font-sans">Notre approche pédagogique au plus près du réel : avec des projets collaboratifs</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#FE6400]"></div>
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed font-sans">Les débouchés professionnels</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#FE6400]"></div>
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed font-sans">Les différentes possibilités de financement</span>
                </div>
              </div>

              {/* Bouton CTA - couleur unie */}
              <Link
                href="/s-inscrire"
                onClick={handleClose}
                className="group relative block w-full overflow-hidden rounded-lg bg-[#013F63] hover:bg-[#012a4a] text-white font-medium py-3.5 px-5 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.01] text-center text-sm font-sans"
              >
                <span className="relative flex items-center justify-center gap-2">
                  <span>Répondre à l'invitation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>

              {/* Footer */}
              <p className="text-xs text-gray-400 text-center mt-4 font-sans">
                Durée : 2h • Organisées régulièrement
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
