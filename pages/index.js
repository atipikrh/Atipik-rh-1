import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import ServicePageSeoHead from '../components/ServicePageSeoHead'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import EntityCitationBlock from '../components/EntityCitationBlock'
import FormationFaqSection from '../components/FormationFaqSection'
import { DATES_CIP, DATES_FPA, getUpcomingReunions } from '../lib/reunions/dates.js'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const prochainesDatesCIP = getUpcomingReunions(DATES_CIP, 3)
  const prochainesDatesFPA = getUpcomingReunions(DATES_FPA, 3)

  // Données du carousel - annonces et réunions informatives
  const slides = [
    {
      id: 5,
      title: "Session septembre 2026 : les informations pratiques",
      subtitle: "La prochaine session CIP chez Atipik RH est en cours d'ouverture. Les places sont limitées.",
      description: "14 places disponibles — les candidatures sont ouvertes dès maintenant.",
      buttonText: "Découvrir les facilités",
      buttonLink: "/s-inscrire",
      image: "/images/hero/reunion-info-2.jpeg",
      isPaiement: true
    },
    {
      id: 1,
      title: "Un Bilan de Compétences est-il fait pour vous ?",
      subtitle: "Découvrez-le en 3 minutes",
      description: "Questionnements sur votre avenir professionnel ? Envie de changement mais vous ne savez pas par où commencer ? Notre quiz personnalisé vous aide à déterminer si un bilan de compétences peut répondre à vos besoins.",
      buttonText: "Faire le test",
      buttonLink: "/bilan-de-competences/quiz",
      image: "/images/hero/reunion-info.jpg",
      isQuiz: true
    },
    {
      id: 2,
      title: "Réunions d'information collective",
      subtitle: "CIP & FPA",
      description: "Vous envisagez une formation CIP ou FPA ? Découvrez concrètement les parcours, le contenu des formations et obtenez toutes les réponses à vos questions. Notre équipe vous présente l'approche pédagogique, les débouchés professionnels et les possibilités de financement.",
      buttonText: "",
      buttonLink: "",
      image: "/images/hero/reunion-info-2.jpeg",
      isReunion: true
    },
    {
      id: 4,
      title: "Découvrez nos salles en location",
      subtitle: "Espaces modernes à Lormont",
      description: "Louez nos salles équipées pour vos formations, réunions et séminaires. 5 espaces disponibles allant du bureau individuel jusqu'aux salles d'une capacité de 20 personnes.",
      buttonText: "Voir nos salles",
      buttonLink: "/location-salles-lormont",
      image: "/images/hero/reunion-info-2.jpeg"
    },
    
  ]

  // Auto-défilement du carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000) // Change toutes les 8 secondes

    return () => clearInterval(timer)
  }, [slides.length, currentSlide]) // Reset le timer quand currentSlide change

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const getMobileDescription = (slide) => {
    const mobileDescriptionsBySlideId = {
      1: "Faites le point sur votre avenir professionnel avec notre quiz guidé en 3 minutes.",
      2: "Découvrez le parcours CIP/FPA, les débouchés et les financements lors de nos réunions d'information.",
      4: "Louez nos espaces modernes à Lormont pour vos formations, réunions et séminaires.",
      5: "14 places disponibles — les candidatures sont ouvertes dès maintenant."
    }

    const shortText = mobileDescriptionsBySlideId[slide.id]
    if (shortText) return shortText

    const maxLength = 120
    if (!slide.description || slide.description.length <= maxLength) return slide.description
    return `${slide.description.slice(0, maxLength).trimEnd()}...`
  }

  const getMobileSubtitle = (slide) => {
    const mobileSubtitlesBySlideId = {
      5: "Session CIP septembre 2026 — places limitées.",
    }

    return mobileSubtitlesBySlideId[slide.id] || slide.subtitle
  }

  return (
    <>
      <ServicePageSeoHead briefId="accueil" />

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-neutral-100 via-white to-muted-blue-200">
        {/* Background animé global */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-muted-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-muted-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse animation-delay-3000"></div>
        
        <div className="relative z-10">
          <Header isFixed={true} />
        
        {/* Bandeau déroulant (Carousel) - Style compact */}
        <section className="relative min-h-[540px] sm:min-h-[500px] md:min-h-[480px] lg:h-[430px] overflow-hidden rounded-lg mx-2 max-[375px]:mx-1.5 sm:mx-4 lg:mx-8 mt-24 shadow-2xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : 
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              {/* Image de fond */}
              <div className="absolute inset-0">
                <Image 
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: '60% center' }}
                  priority={index === 0}
                />
                {/* Overlay teal foncé pour la bannière réunions */}
                {slide.isReunion && (
                  <div className="absolute inset-0 bg-[#013F63]/90"></div>
                )}
                {/* Overlay teal foncé pour la bannière facilités de paiement */}
                {slide.isPaiement && (
                  <div className="absolute inset-0 bg-[#013F63]/90"></div>
                )}
                {/* Overlay gradient diagonal orange/peach pour la bannière salles */}
                {slide.id === 4 && (
                  <div className="absolute inset-0" style={{
                    background: 'linear-gradient(to bottom right, #f97316 0%, #f97316 50%, #fed7aa 50%, #fed7aa 100%)'
                  }}></div>
                )}
              </div>

              {/* Contenu - Layout horizontal */}
              <div className="relative h-full flex items-center max-lg:items-start max-lg:py-4 sm:max-lg:py-6">
                <div className="container mx-auto px-3 max-[375px]:px-2.5 sm:px-6 lg:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-8 items-center">
                    {/* Texte à gauche */}
                    <div className="text-white space-y-1.5 max-[375px]:space-y-1 sm:space-y-3 max-w-xl">
                      {slide.isReunion ? (
                        <p className="text-xl max-[375px]:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">
                          Réunions d'information collective
                        </p>
                      ) : slide.isPaiement ? (
                        <p className="text-xl max-[375px]:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">
                          {slide.title}
                        </p>
                      ) : (
                        <p className="text-xl max-[375px]:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                          {slide.title}
                        </p>
                      )}
                      {slide.isReunion ? (
                        <p className="text-sm max-[375px]:text-xs sm:text-base lg:text-lg font-semibold text-white opacity-95">
                          CIP &amp; FPA
                        </p>
                      ) : slide.isPaiement ? (
                        <p className="text-sm max-[375px]:text-xs sm:text-base lg:text-lg font-semibold text-white opacity-95 leading-snug">
                          <span className="md:hidden">{getMobileSubtitle(slide)}</span>
                          <span className="hidden md:inline">{slide.subtitle}</span>
                        </p>
                      ) : (
                        slide.subtitle && slide.subtitle.trim() !== "" && (
                          <p className="text-sm max-[375px]:text-xs sm:text-base lg:text-lg font-semibold opacity-95">
                            {slide.subtitle}
                          </p>
                        )
                      )}
                      <p className={`text-xs max-[375px]:text-[11px] sm:text-sm lg:text-base opacity-90 leading-relaxed whitespace-pre-line ${slide.isPaiement ? 'hidden lg:block' : ''}`}>
                        <span className="sm:hidden">{getMobileDescription(slide)}</span>
                        <span className="hidden sm:inline">{slide.description}</span>
                      </p>
                      {!slide.isQuiz && !slide.isReunion && !slide.isPaiement && (
                        <a
                          href={slide.buttonLink}
                          className={`inline-flex items-center px-4 max-[375px]:px-3 sm:px-8 py-2.5 max-[375px]:py-2 sm:py-4 bg-white font-bold rounded-lg transition-all duration-300 shadow-xl text-sm max-[375px]:text-xs sm:text-base lg:text-lg mt-3 sm:mt-6 transform hover:scale-105 ${
                            slide.isReunion
                              ? 'text-accent-500 hover:bg-accent-300' 
                              : slide.id === 4
                              ? 'text-[#013F63] hover:bg-muted-blue-200' 
                              : 'text-accent-500 hover:bg-accent-300'
                          }`}
                        >
                          {slide.buttonText}
                        </a>
                      )}
                    </div>

                    {/* Fenêtre d'information mobile */}
                    <div className="lg:hidden">
                      {slide.isQuiz ? (
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 max-[375px]:p-2.5 sm:p-4 border border-white/20 text-neutral-900 shadow-xl max-w-xs w-full sm:w-auto">
                          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500" />
                            <span className="text-xl max-[375px]:text-lg sm:text-2xl font-brittany text-accent-500">3 min</span>
                          </div>
                          <Link
                            href="/bilan-de-competences/quiz"
                            className="w-full inline-flex items-center justify-center px-4 py-2 max-[375px]:py-1.5 sm:py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:from-accent-600 hover:to-accent-600 transition-all duration-300 text-xs sm:text-sm"
                          >
                            Commencer le quiz
                          </Link>
                        </div>
                      ) : slide.isReunion ? (
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 max-[375px]:p-2.5 sm:p-4 border border-accent-300 text-neutral-900 shadow-xl max-w-xs w-full sm:w-auto">
                          <h3 className="text-sm sm:text-base font-bold mb-1.5 sm:mb-2 text-[#013F63] leading-snug">
                            <span className="font-brittany text-lg sm:text-xl text-accent-500 block mb-1">
                              Ces réunions
                            </span>
                            sont organisées en présentiel ou en distanciel.
                          </h3>
                          <p className="text-[10px] sm:text-[11px] text-neutral-900 mb-2.5 sm:mb-3">
                            Gratuite • Sans engagement • Places limitées
                          </p>
                          {prochainesDatesCIP[0] ? (
                            <p className="text-[10px] sm:text-xs text-[#013F63] mb-2.5">
                              Prochaine CIP : {prochainesDatesCIP[0].jour}
                            </p>
                          ) : null}
                          <Link
                            href="/s-inscrire"
                            className="w-full inline-flex items-center justify-center px-4 py-2 max-[375px]:py-1.5 sm:py-2.5 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg transition-all duration-300 text-xs sm:text-sm"
                          >
                            Voir les prochaines dates
                          </Link>
                        </div>
                      ) : slide.isPaiement ? (
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 max-[375px]:p-2.5 sm:p-4 border border-white/20 text-neutral-900 shadow-xl max-w-xs w-full sm:w-auto">
                          {slide.id === 5 && (
                            <p className="text-[11px] sm:text-xs text-[#013F63] font-bold leading-relaxed mb-2.5 sm:mb-3">
                              Vous avez des questions ? Participez à notre réunion d'info !
                            </p>
                          )}
                          <Link
                            href="/s-inscrire"
                            className="w-full inline-flex items-center justify-center px-4 py-2 max-[375px]:py-1.5 sm:py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:from-accent-600 hover:to-accent-600 transition-all duration-300 text-xs sm:text-sm"
                          >
                            accédez ici
                          </Link>
                        </div>
                      ) : null}
                    </div>
                    
                    {/* Fenêtre d'information à droite */}
                    <div className="hidden lg:flex justify-end items-center">
                      {slide.isQuiz ? (
                        /* Élément carré simple pour le quiz */
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-neutral-900 max-w-sm shadow-xl">
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-6">
                              <Clock className="w-6 h-6 text-accent-500" />
                              <span className="text-4xl font-brittany text-accent-500">3 min</span>
                            </div>
                            <Link
                              href="/bilan-de-competences/quiz"
                              className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:from-accent-600 hover:to-accent-600 transition-all duration-300 shadow-lg"
                            >
                              Commencer le quiz
                            </Link>
                          </div>
                        </div>
                      ) : slide.isReunion ? (
                        /* Fenêtre pour les réunions d'information collective */
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-accent-300 text-neutral-900 max-w-sm shadow-xl">
                          <div className="text-center mb-4">
                            <h3 className="text-lg lg:text-xl font-bold mb-1 text-[#013F63] leading-snug">
                              <span className="font-brittany text-2xl lg:text-3xl text-accent-500 block mb-1">
                                Ces réunions
                              </span>
                              sont organisées régulièrement, en présentiel ou en distanciel.
                            </h3>
                            <p className="text-xs text-neutral-900 mt-1">
                              Gratuite • Sans engagement • Places limitées
                            </p>
                            {(prochainesDatesCIP.length > 0 || prochainesDatesFPA.length > 0) && (
                              <ul className="mt-3 text-left text-xs text-[#013F63] space-y-1">
                                {prochainesDatesCIP[0] ? (
                                  <li>CIP : {prochainesDatesCIP[0].jour} ({prochainesDatesCIP[0].modalite})</li>
                                ) : null}
                                {prochainesDatesFPA[0] ? (
                                  <li>FPA : {prochainesDatesFPA[0].jour} ({prochainesDatesFPA[0].modalite})</li>
                                ) : null}
                              </ul>
                            )}
                          </div>
                          <Link
                            href="/s-inscrire"
                            className="w-full inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg text-base"
                          >
                            Voir les prochaines dates
                          </Link>
                        </div>
                      ) : slide.isPaiement ? (
                        /* Fenêtre style quiz pour les slides paiement */
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-neutral-900 max-w-sm shadow-xl">
                          <div className="text-center">
                            {slide.id === 5 ? (
                              <p className="text-sm text-[#013F63] font-bold leading-relaxed mb-4">
                                Vous avez des questions ? Participez à notre réunion d'info !
                              </p>
                            ) : (
                              <div className="flex items-center justify-center gap-2 mb-6">
                                <Clock className="w-6 h-6 text-accent-500" />
                                <span className="text-4xl font-brittany text-accent-500">Incrivez-vous</span>
                              </div>
                            )}
                            <Link
                              href="/s-inscrire"
                              className="inline-flex mx-auto w-full max-w-full items-center justify-center px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold hover:from-accent-600 hover:to-accent-600 transition-all duration-300 shadow-lg rounded-2xl"
                            >
                              accédez ici
                            </Link>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Boutons de navigation - Plus discrets */}
          <button
            onClick={prevSlide}
            className="absolute left-2 max-[375px]:left-1.5 sm:left-3 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-1.5 max-[375px]:p-1 sm:p-2 rounded-full hover:bg-black/50 transition-colors duration-300 z-10"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 max-[375px]:right-1.5 sm:right-3 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-1.5 max-[375px]:p-1 sm:p-2 rounded-full hover:bg-black/50 transition-colors duration-300 z-10"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicateurs de slides - Style moderne */}
          <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white ring-2 ring-white/70' : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        </section>

        <section className="pt-12 pb-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl lg:text-4xl font-bold text-[#013F63] text-center mb-6 leading-tight">
              Atipik RH — organisme de formation à Lormont
            </h1>
            <EntityCitationBlock pageId="accueil" />
          </div>
        </section>

        {/* Section des trois formations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4">
                Nos <span className="text-accent-500 font-brittany text-4xl lg:text-5xl">Accompagnements</span>
              </h2>
              <p className="text-lg text-[#013F63] max-w-2xl mx-auto">
                Découvrez nos trois domaines d'expertise pour votre développement professionnel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Carte Formations */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-muted-blue-200 flex flex-col h-full">
                <div className="relative h-48">
                  <Image 
                    src="/images/hero/formations.jpg"
                    alt="Formations"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Formations</h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[#013F63] leading-relaxed flex-1 mb-6">
                    Développez vos compétences avec nos formations certifiantes adaptées aux besoins du marché du travail.
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-accent-500 font-medium">Finançable CPF</span>
                    </div>
                    <Link
                      href="/formations"
                      className="inline-flex items-center w-full justify-center px-4 py-3 bg-[#013F63] text-white font-semibold rounded-lg hover:bg-[#012a4a] transition-colors duration-300"
                    >
                      Voir nos formations
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Carte Bilan de Compétences */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-muted-blue-200 flex flex-col h-full">
                <div className="relative h-48">
                  <Image 
                    src="/images/hero/bilan-competences.jpg" 
                    alt="Bilan de compétences"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Bilan de Compétences</h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[#013F63] leading-relaxed flex-1 mb-6">
                    Faites le point sur vos compétences, vos motivations et définissez votre projet professionnel avec un accompagnement personnalisé.
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-accent-500 font-medium">Finançable CPF</span>
                    </div>
                    <Link
                      href="/bilan-de-competences"
                      className="inline-flex items-center w-full justify-center px-4 py-3 bg-[#013F63] text-white font-semibold rounded-lg hover:bg-[#012a4a] transition-colors duration-300"
                    >
                      En savoir plus
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Carte VAE */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-muted-blue-200 flex flex-col h-full">
                <div className="relative h-48">
                  <Image 
                    src="/images/hero/vae.jpg"
                    alt="VAE"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">VAE</h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[#013F63] leading-relaxed flex-1 mb-6">
                    Transformez votre expérience professionnelle en diplôme officiel reconnu par l'État.
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-accent-500 font-medium">Finançable CPF</span>
                    </div>
                    <Link
                      href="/vae"
                      className="inline-flex items-center w-full justify-center px-4 py-3 bg-[#013F63] text-white font-semibold rounded-lg hover:bg-[#012a4a] transition-colors duration-300"
                    >
                      Découvrir la VAE
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

          </div>

        <FormationFaqSection briefId="accueil" />
        <Footer />
        
        {/* Cookie Banner */}
        <CookieBanner />
      </div>
    </>
  )
} 