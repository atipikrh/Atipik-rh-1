import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Données du carousel - annonces et réunions informatives
  const slides = [
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
      title: "Réunions d'Information CIP",
      subtitle: "Conseiller en Insertion Professionnelle",
      description: "Participez à nos réunions d'information pour découvrir la formation CIP (Conseiller en Insertion Professionnelle).",
      buttonText: "Voir les dates",
      buttonLink: "#reunions",
      image: "/images/hero/reunion-info.jpg"
    },
    {
      id: 3,
      title: "Réunions d'Information FPA",
      subtitle: "Formateur Professionnel d'Adultes",
      description: "Découvrez la formation FPA (Formateur Professionnel d'Adultes) lors de nos réunions d'information dédiées.",
      buttonText: "Voir les dates",
      buttonLink: "#reunions",
      image: "/images/hero/reunion-info.jpg"
    },
    {
      id: 4,
      title: "Découvrez nos salles en location",
      subtitle: "Espaces modernes à Lormont",
      description: "Louez nos salles équipées pour vos formations, réunions et séminaires. 5 espaces disponibles allant du bureau individuel jusqu'aux salles d'une capacité de 20 personnes.",
      buttonText: "Voir nos salles",
      buttonLink: "/location-salles-lormont",
      image: "/images/hero/reunion-info.jpg"
    }
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

  return (
    <>
      <Head>
        <title>Atipik RH - Formation, Bilan de compétences & VAE à Lormont</title>
        <meta name="description" content="Centre de formation à Lormont (33) : bilan de compétences, VAE, formations certifiantes CPF. Accompagnement personnalisé pour votre évolution professionnelle." />
        <meta name="keywords" content="Atipik RH, formation Lormont, bilan de compétences, VAE, CPF, Gironde" />
        <link rel="canonical" href="https://atipikrh.fr/" />
      </Head>

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Background animé global */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse animation-delay-3000"></div>
        
        <div className="relative z-10">
          <Header isFixed={true} />
        
        {/* Bandeau déroulant (Carousel) - Style compact */}
        <section className="relative h-[280px] lg:h-[320px] overflow-hidden rounded-lg mx-4 lg:mx-8 mt-24 shadow-2xl">
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
              </div>

              {/* Contenu - Layout horizontal */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-6 lg:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Texte à gauche */}
                    <div className="text-white space-y-4">
                      <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-base lg:text-lg opacity-90 leading-relaxed">
                        {slide.description}
                      </p>
                      {!slide.isQuiz && (
                        <a
                          href={slide.id === 2 || slide.id === 3 ? '/s-inscrire' : slide.buttonLink}
                          className="inline-flex items-center px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg text-sm lg:text-base mt-4"
                        >
                          {slide.id === 2 || slide.id === 3 ? "S'inscrire" : slide.buttonText}
                        </a>
                      )}
                    </div>
                    
                    {/* Fenêtre d'information à droite */}
                    <div className="hidden lg:flex justify-end items-center">
                      {slide.isQuiz ? (
                        /* Élément carré simple pour le quiz */
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-gray-800 max-w-sm shadow-xl">
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-6">
                              <Clock className="w-6 h-6 text-orange-500" />
                              <span className="text-4xl font-brittany text-orange-500">3 min</span>
                            </div>
                            <Link
                              href="/bilan-de-competences/quiz"
                              className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
                            >
                              Commencer le quiz
                            </Link>
                          </div>
                        </div>
                      ) : slide.id === 2 ? (
                        /* Fenêtre pour les réunions CIP */
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-gray-800 max-w-sm">
                          <h3 className="text-lg font-bold mb-3 text-orange-500">Prochaines dates CIP</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-[#013F63]">Samedi 27/09</span>
                              <span className="font-medium text-[#013F63]">10h30</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#013F63]">Jeudi 09/10</span>
                              <span className="font-medium text-[#013F63]">12h30</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#013F63]">Samedi 25/10</span>
                              <span className="font-medium text-[#013F63]">10h30</span>
                            </div>
                          </div>
                          <div className="mt-4 text-xs text-[#013F63]">
                            Atipik RH - Lormont
                          </div>
                        </div>
                      ) : slide.id === 3 ? (
                        /* Fenêtre pour les réunions FPA */
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-gray-800 max-w-sm">
                          <h3 className="text-lg font-bold mb-3 text-orange-500">Prochaines dates FPA</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-[#013F63]">Mardi 01/10</span>
                              <span className="font-medium text-[#013F63]">14h00</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#013F63]">Vendredi 18/10</span>
                              <span className="font-medium text-[#013F63]">09h30</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#013F63]">Mardi 29/10</span>
                              <span className="font-medium text-[#013F63]">14h00</span>
                            </div>
                          </div>
                          <div className="mt-4 text-xs text-[#013F63]">
                            Atipik RH - Lormont
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
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/50 transition-colors duration-300 z-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/50 transition-colors duration-300 z-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicateurs de slides - Style moderne */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-6' : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Section des trois formations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4">
                Nos <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Services</span>
              </h2>
              <p className="text-lg text-[#013F63] max-w-2xl mx-auto">
                Découvrez nos trois domaines d'expertise pour votre développement professionnel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Carte Formations */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                <div className="relative h-48">
                  <Image 
                    src="/images/hero/formations.jpg"
                    alt="Formations"
                    fill
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
                      <span className="text-sm text-orange-500 font-medium">Finançable CPF</span>
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
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                <div className="relative h-48">
                  <Image 
                    src="/images/hero/bilan-competences.jpg" 
                    alt="Bilan de compétences"
                    fill
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
                      <span className="text-sm text-orange-500 font-medium">Finançable CPF</span>
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
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                <div className="relative h-48">
                  <Image 
                    src="/images/hero/vae.jpg"
                    alt="VAE"
                    fill
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
                      <span className="text-sm text-orange-500 font-medium">Finançable CPF</span>
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

        <Footer />
      </div>
    </>
  )
} 