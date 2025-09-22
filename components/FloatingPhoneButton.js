import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'

export default function FloatingPhoneButton() {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Fermer le numéro si on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showPhoneNumber && !event.target.closest('[data-phone-button]')) {
        setShowPhoneNumber(false)
      }
    }

    if (showPhoneNumber) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [showPhoneNumber])

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div className="relative">
        {/* Bouton flottant avec animation */}
        <button 
          data-phone-button
          onClick={() => setShowPhoneNumber(!showPhoneNumber)}
          onMouseEnter={() => !showPhoneNumber && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            ${showPhoneNumber 
              ? 'bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50' 
              : 'bg-orange-500 hover:bg-orange-600 text-white border-2 border-orange-500'
            }
            rounded-full shadow-lg hover:shadow-xl 
            transition-all duration-300 ease-out overflow-hidden flex items-center
            h-14 min-w-14`}
          style={{
            width: showPhoneNumber ? 'auto' : (isHovered ? 'auto' : '56px'),
            paddingLeft: showPhoneNumber ? '16px' : (isHovered ? '16px' : '0'),
            paddingRight: showPhoneNumber ? '16px' : (isHovered ? '24px' : '0'),
            justifyContent: showPhoneNumber ? 'flex-start' : (isHovered ? 'flex-start' : 'center'),
            gap: showPhoneNumber ? '12px' : (isHovered ? '12px' : '0')
          }}
        >
          <Phone className={`w-6 h-6 flex-shrink-0 ${showPhoneNumber ? 'text-orange-500' : 'text-white'}`} />
          
          {/* Texte qui apparaît au survol ou numéro de téléphone */}
          <span 
            className="whitespace-nowrap text-sm font-medium transition-all duration-300 ease-out"
            style={{
              opacity: showPhoneNumber ? 1 : (isHovered ? 1 : 0),
              maxWidth: showPhoneNumber ? '150px' : (isHovered ? '280px' : '0px'),
              overflow: 'hidden'
            }}
          >
            {showPhoneNumber ? (
              <a 
                href="tel:0783019955" 
                className="text-orange-500 hover:text-orange-600 transition-colors"
              >
                07 83 01 99 55
              </a>
            ) : (
              'Découvrir le numéro de téléphone'
            )}
          </span>
        </button>
      </div>
    </div>
  )
}
