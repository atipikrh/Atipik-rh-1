import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FORMATION_PRO_LIST } from '../lib/seo/professionnalisantesConfig'

export default function Header({ isFixed = false, isHomePage = false }) {
  const [isFormationsOpen, setIsFormationsOpen] = useState(false)
  const [isCIPSubMenuOpen, setIsCIPSubMenuOpen] = useState(false)
  const [isFPASubMenuOpen, setIsFPASubMenuOpen] = useState(false)
  const [isCourtesSubMenuOpen, setIsCourtesSubMenuOpen] = useState(false)
  const [isQuiSommesNousOpen, setIsQuiSommesNousOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // États pour le menu mobile
  const [isMobileFormationsOpen, setIsMobileFormationsOpen] = useState(false)
  const [isMobileCIPOpen, setIsMobileCIPOpen] = useState(false)
  const [isMobileFPAOpen, setIsMobileFPAOpen] = useState(false)
  const [isMobileCourtesOpen, setIsMobileCourtesOpen] = useState(false)
  const [isMobileQuiSommesNousOpen, setIsMobileQuiSommesNousOpen] = useState(false)
  
  useEffect(() => {
    if (!isHomePage) return
    
    const handleScroll = () => {
      const header = document.getElementById('main-header')
      if (!header) return
      
      const scrollPosition = window.scrollY
      
      if (scrollPosition > window.innerHeight * 0.1) {
        header.style.transform = 'translateY(0)'
        header.style.opacity = '1'
      } else {
        header.style.transform = 'translateY(-100%)'
        header.style.opacity = '0'
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isHomePage])

  // Fermer le menu mobile quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const headerClasses = isFixed 
    ? "fixed top-0 left-0 right-0 z-[9998] bg-white/95 backdrop-blur-md border-b border-muted-blue-200/50 transition-all duration-500"
    : isHomePage 
    ? "fixed top-0 left-0 right-0 z-[9998] bg-white/95 backdrop-blur-md border-b border-muted-blue-200/50 transform -translate-y-full opacity-0 transition-all duration-500"
    : "bg-neutral-100/80 backdrop-blur-sm"

  return (
    <header id={isHomePage ? "main-header" : undefined} className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          {isHomePage ? (
            <div className="flex items-center">
              <Image 
                src="/images/logos/atipik-logo.png" 
                alt="Atipik RH"
                width={150}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </div>
          ) : (
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logos/atipik-logo.png" 
                alt="Atipik RH"
                width={150}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>
          )}

          {/* Navigation centrale */}
          <div className="hidden lg:flex items-center space-x-8 mt-1">
            {/* Menu déroulant Formations */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsFormationsOpen(true)}
              onMouseLeave={() => setIsFormationsOpen(false)}
            >
              <Link href="/formations" className="text-[#013F63] hover:text-[#012a4a] font-medium text-base transition-colors flex items-center">
                Formations
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Menu déroulant */}
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-muted-blue-200 transition-all duration-200 z-[9999] ${
                isFormationsOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <div className="py-2">
                  {/* Formation CIP avec sous-menu à droite */}
                  <div 
                    className="relative group/cip"
                    onMouseEnter={() => setIsCIPSubMenuOpen(true)}
                    onMouseLeave={() => setIsCIPSubMenuOpen(false)}
                  >
                    <Link 
                      href="/formations"
                      className="block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors"
                    >
                      <div className="font-medium flex items-center justify-between">
                        Formation CIP
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="text-xs text-accent-500">Conseiller en Insertion Professionnelle</div>
                    </Link>
                    
                    {/* Sous-menu à droite */}
                    <div className={`absolute left-full top-0 ml-2 w-56 bg-white rounded-lg shadow-lg border border-muted-blue-200 transition-all duration-200 z-[10000] ${
                      isCIPSubMenuOpen ? 'opacity-100 visible transform translate-x-0' : 'opacity-0 invisible transform -translate-x-2'
                    }`}>
                      <div className="py-2">
                        <Link 
                          href="/formations/cip" 
                          className="block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors font-medium"
                        >
                          Formation complète
                        </Link>
                        <Link 
                          href="/formations/ccp1" 
                          className="block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors border-t border-muted-blue-200 font-medium"
                        >
                          CCP1
                        </Link>
                        <Link 
                          href="/formations/ccp2" 
                          className="block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors border-t border-muted-blue-200 font-medium"
                        >
                          CCP2
                        </Link>
                        <Link 
                          href="/formations/ccp3" 
                          className="block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors border-t border-muted-blue-200 font-medium"
                        >
                          CCP3
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Formation FPA avec sous-menu à droite */}
                  <div 
                    className="relative group/fpa border-t border-muted-blue-200"
                    onMouseEnter={() => setIsFPASubMenuOpen(true)}
                    onMouseLeave={() => setIsFPASubMenuOpen(false)}
                  >
                    <Link 
                      href="/formations"
                      className="block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors"
                    >
                      <div className="font-medium flex items-center justify-between">
                        Formation FPA
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="text-xs text-accent-500">Formateur Professionnel d'Adultes</div>
                    </Link>
                    
                    {/* Sous-menu à droite */}
                    <div className={`absolute left-full top-0 ml-2 w-56 bg-white rounded-lg shadow-lg border border-muted-blue-200 transition-all duration-200 z-[10000] ${
                      isFPASubMenuOpen ? 'opacity-100 visible transform translate-x-0' : 'opacity-0 invisible transform -translate-x-2'
                    }`}>
                      <div className="py-2">
                        <Link 
                          href="/formations/fpa" 
                          className="block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors font-medium"
                        >
                          Formation complète
                        </Link>
                        <Link 
                          href="/formations/fpa/ccp1" 
                          className="block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors border-t border-muted-blue-200 font-medium"
                        >
                          CCP1
                        </Link>
                        <Link 
                          href="/formations/fpa/ccp2" 
                          className="block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors border-t border-muted-blue-200 font-medium"
                        >
                          CCP2
                        </Link>
                        <Link 
                          href="/formations/fpa/ccp3" 
                          className="block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors border-t border-muted-blue-200 font-medium"
                        >
                          CCP3
                        </Link>
                        <Link 
                          href="/formations/fpa/ccp4" 
                          className="block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors border-t border-muted-blue-200 font-medium"
                        >
                          CCP4
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Formations courtes professionnalisantes avec sous-menu à droite */}
                  <div 
                    className="relative group/courtes border-t border-muted-blue-200"
                    onMouseEnter={() => setIsCourtesSubMenuOpen(true)}
                    onMouseLeave={() => setIsCourtesSubMenuOpen(false)}
                  >
                    <Link 
                      href="/formations#formations-professionnalisantes"
                      className="block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors"
                    >
                      <div className="font-medium flex items-center justify-between">
                        Formations courtes professionnalisantes
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="text-xs text-accent-500">Montée en compétences rapide</div>
                    </Link>
                    
                    {/* Sous-menu à droite */}
                    <div className={`absolute left-full top-0 ml-2 w-72 bg-white rounded-lg shadow-lg border border-muted-blue-200 transition-all duration-200 z-[10000] ${
                      isCourtesSubMenuOpen ? 'opacity-100 visible transform translate-x-0' : 'opacity-0 invisible transform -translate-x-2'
                    }`}>
                      <div className="py-2">
                        {FORMATION_PRO_LIST.map((f, idx) => (
                          <Link
                            key={f.slug}
                            href={f.path}
                            className={`block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors font-medium ${
                              idx > 0 ? 'border-t border-muted-blue-200' : ''
                            }`}
                          >
                            {f.titreMenu}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/bilan-de-competences" className="text-[#013F63] hover:text-[#012a4a] font-medium text-base transition-colors">
              Bilan de compétences
            </Link>
            <Link href="/vae" className="text-[#013F63] hover:text-[#012a4a] font-medium text-base transition-colors">
              VAE
            </Link>
            
            {/* Menu déroulant Qui sommes-nous */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsQuiSommesNousOpen(true)}
              onMouseLeave={() => setIsQuiSommesNousOpen(false)}
            >
              <button className="text-[#013F63] hover:text-[#012a4a] font-medium text-base transition-colors flex items-center">
                Qui sommes-nous
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Menu déroulant */}
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-muted-blue-200 transition-all duration-200 z-[9999] ${
                isQuiSommesNousOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <div className="py-2">
                  <Link 
                    href="/notre-histoire" 
                    className="block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors"
                  >
                    <div className="font-medium">Notre histoire</div>
                    <div className="text-xs text-accent-500">Depuis 2019, une aventure humaine</div>
                  </Link>
                  <Link 
                    href="/notre-equipe" 
                    className="block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors border-t border-muted-blue-200"
                  >
                    <div className="font-medium">Notre équipe</div>
                    <div className="text-xs text-accent-500">Les spécialistes qui vous accompagnent</div>
                  </Link>
                  <Link 
                    href="/certification" 
                    className="block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors border-t border-muted-blue-200"
                  >
                    <div className="font-medium">Certification</div>
                    <div className="text-xs text-accent-500">Qualité et accessibilité</div>
                  </Link>
                  <Link 
                    href="/partenariat" 
                    className="block px-4 py-3 text-sm text-[#013F63] hover:bg-muted-blue-200 hover:text-[#012a4a] transition-colors border-t border-muted-blue-200"
                  >
                    <div className="font-medium">Partenariat</div>
                    <div className="text-xs text-accent-500">Réseau d'entreprises engagées</div>
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/financement" className="text-[#013F63] hover:text-[#012a4a] font-medium text-base transition-colors">
              Financement
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="bg-[#013F63] hover:bg-[#012a4a] text-white px-6 py-2.5 rounded-full text-base font-medium transition-all duration-200 hover:scale-105">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden min-h-12 min-w-12 p-3 inline-flex items-center justify-center mobile-menu-container"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6 text-[#013F63]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-[#013F63]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-nav" className="lg:hidden mobile-menu-container z-[9999] relative">
            <div className="bg-white border-t border-muted-blue-200 shadow-lg">
              <div className="px-4 py-6 space-y-4">
                {/* Formations */}
                <div>
                  <button 
                    className="text-[#013F63] font-medium text-base mb-3 flex items-center justify-between w-full"
                    onClick={() => setIsMobileFormationsOpen(!isMobileFormationsOpen)}
                  >
                    Formations
                    <svg 
                      className={`w-4 h-4 transition-transform ${isMobileFormationsOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMobileFormationsOpen && (
                    <div className="space-y-2 ml-4">
                      <div>
                        <button
                          className="text-sm text-[#013F63] hover:text-[#012a4a] font-medium py-2 flex items-center justify-between w-full"
                          onClick={() => setIsMobileCIPOpen(!isMobileCIPOpen)}
                        >
                          Formation CIP
                          <svg 
                            className={`w-3 h-3 transition-transform ${isMobileCIPOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isMobileCIPOpen && (
                          <div className="ml-4 space-y-1">
                            <Link 
                              href="/formations/cip" 
                              className="block text-xs text-[#013F63] hover:text-[#012a4a] py-1"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Formation complète
                            </Link>
                            <Link 
                              href="/formations/ccp1" 
                              className="block text-xs text-[#013F63] hover:text-[#012a4a] py-1"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              CCP1
                            </Link>
                            <Link 
                              href="/formations/ccp2" 
                              className="block text-xs text-[#013F63] hover:text-[#012a4a] py-1"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              CCP2
                            </Link>
                            <Link 
                              href="/formations/ccp3" 
                              className="block text-xs text-[#013F63] hover:text-[#012a4a] py-1"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              CCP3
                            </Link>
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <button
                          className="text-sm text-[#013F63] hover:text-[#012a4a] font-medium py-2 flex items-center justify-between w-full"
                          onClick={() => setIsMobileFPAOpen(!isMobileFPAOpen)}
                        >
                          Formation FPA
                          <svg 
                            className={`w-3 h-3 transition-transform ${isMobileFPAOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isMobileFPAOpen && (
                          <div className="ml-4 space-y-1">
                            <Link 
                              href="/formations/fpa" 
                              className="block text-xs text-[#013F63] hover:text-[#012a4a] py-1"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Formation complète
                            </Link>
                            <Link 
                              href="/formations/fpa/ccp1" 
                              className="block text-xs text-[#013F63] hover:text-[#012a4a] py-1"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              CCP1
                            </Link>
                            <Link 
                              href="/formations/fpa/ccp2" 
                              className="block text-xs text-[#013F63] hover:text-[#012a4a] py-1"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              CCP2
                            </Link>
                            <Link 
                              href="/formations/fpa/ccp3" 
                              className="block text-xs text-[#013F63] hover:text-[#012a4a] py-1"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              CCP3
                            </Link>
                            <Link 
                              href="/formations/fpa/ccp4" 
                              className="block text-xs text-[#013F63] hover:text-[#012a4a] py-1"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              CCP4
                            </Link>
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <button
                          className="text-sm text-[#013F63] hover:text-[#012a4a] font-medium py-2 flex items-center justify-between w-full"
                          onClick={() => setIsMobileCourtesOpen(!isMobileCourtesOpen)}
                        >
                          Formations courtes professionnalisantes
                          <svg 
                            className={`w-3 h-3 transition-transform ${isMobileCourtesOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isMobileCourtesOpen && (
                          <div className="ml-4 space-y-1">
                            {FORMATION_PRO_LIST.map((f) => (
                              <Link
                                key={f.slug}
                                href={f.path}
                                className="block text-xs text-[#013F63] hover:text-[#012a4a] py-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {f.titreMenu}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bilan de compétences */}
                <Link 
                  href="/bilan-de-competences" 
                  className="block text-[#013F63] hover:text-[#012a4a] font-medium text-base py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Bilan de compétences
                </Link>

                {/* VAE */}
                <Link 
                  href="/vae" 
                  className="block text-[#013F63] hover:text-[#012a4a] font-medium text-base py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  VAE
                </Link>

                {/* Qui sommes-nous */}
                <div>
                  <button 
                    className="text-[#013F63] font-medium text-base mb-3 flex items-center justify-between w-full"
                    onClick={() => setIsMobileQuiSommesNousOpen(!isMobileQuiSommesNousOpen)}
                  >
                    Qui sommes-nous
                    <svg 
                      className={`w-4 h-4 transition-transform ${isMobileQuiSommesNousOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMobileQuiSommesNousOpen && (
                    <div className="space-y-2 ml-4">
                      <Link 
                        href="/notre-histoire" 
                        className="block text-sm text-[#013F63] hover:text-[#012a4a] py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Notre histoire
                      </Link>
                      <Link 
                        href="/notre-equipe" 
                        className="block text-sm text-[#013F63] hover:text-[#012a4a] py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Notre équipe
                      </Link>
                      <Link 
                        href="/certification" 
                        className="block text-sm text-[#013F63] hover:text-[#012a4a] py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Certification
                      </Link>
                      <Link 
                        href="/partenariat" 
                        className="block text-sm text-[#013F63] hover:text-[#012a4a] py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Partenariat
                      </Link>
                    </div>
                  )}
                </div>

                {/* Financement */}
                <Link 
                  href="/financement" 
                  className="block text-[#013F63] hover:text-[#012a4a] font-medium text-base py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Financement
                </Link>

                {/* Contact */}
                <Link 
                  href="/contact" 
                  className="block bg-[#013F63] hover:bg-[#012a4a] text-white px-6 py-3 rounded-full text-base font-medium text-center transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}