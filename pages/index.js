import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Dates des réunions (synchronisées avec s-inscrire.js)
  const datesFPA = [
    { date: '2025-09-25', jour: 'Jeudi 25 Septembre 2025', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2025-10-11', jour: 'Samedi 11 Octobre 2025', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2025-10-23', jour: 'Jeudi 23 Octobre 2025', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2025-11-06', jour: 'Jeudi 6 Novembre 2025', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2025-11-22', jour: 'Samedi 22 Novembre 2025', heure: '10h30 - 12h30', modalite: 'présentiel' }
  ]

  const datesCIP = [
    { date: '2025-09-08', jour: 'Lundi 8 Septembre 2025', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2025-09-27', jour: 'Samedi 27 Septembre 2025', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2025-10-09', jour: 'Jeudi 9 Octobre 2025', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2025-10-25', jour: 'Samedi 25 Octobre 2025', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2025-11-08', jour: 'Samedi 8 Novembre 2025', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2025-11-20', jour: 'Jeudi 20 Novembre 2025', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2025-12-06', jour: 'Samedi 6 Décembre 2025', heure: '10h00 - 12h00', modalite: 'présentiel' }
  ]

  // Fonction pour obtenir les prochaines dates (filtrées automatiquement)
  const getProchainesDates = (dates) => {
    const aujourdhui = new Date()
    aujourdhui.setHours(0, 0, 0, 0)
    
    return dates.filter(reunion => {
      const dateReunion = new Date(reunion.date)
      return dateReunion >= aujourdhui
    }).slice(0, 3) // Prendre les 3 premières dates futures
  }

  // Fonction pour convertir le mois en nombre
  const getMonthNumber = (monthName) => {
    const months = {
      'Janvier': '01', 'Février': '02', 'Mars': '03', 'Avril': '04',
      'Mai': '05', 'Juin': '06', 'Juillet': '07', 'Août': '08',
      'Septembre': '09', 'Octobre': '10', 'Novembre': '11', 'Décembre': '12'
    }
    return months[monthName] || monthName
  }

  // Fonction pour formater la date avec mois en chiffres
  const formatDateForDisplay = (jour) => {
    const parts = jour.split(' ')
    const jourSemaine = parts[0]
    const jourNum = parts[1]
    const mois = getMonthNumber(parts[2])
    const annee = parts[3].slice(-2) // Prendre les 2 derniers chiffres de l'année
    return `${jourSemaine} ${jourNum}/${mois}/${annee}`
  }

  // Obtenir les prochaines dates pour chaque formation
  const prochainesDatesCIP = getProchainesDates(datesCIP)
  const prochainesDatesFPA = getProchainesDates(datesFPA)

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
      title: "Réunions d'information collective CIP & FPA",
      subtitle: "",
      description: "Découvrez nos formations CIP et FPA lors d'un temps d'échange animé par Vanessa, notre directrice.",
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
        <section className="relative h-[360px] lg:h-[430px] overflow-hidden rounded-lg mx-4 lg:mx-8 mt-24 shadow-2xl">
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
                    <div className="text-white space-y-3 max-w-xl">
                      <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
                        {slide.title}
                      </h1>
                      {slide.subtitle && slide.subtitle.trim() !== "" && (
                        <p className="text-base lg:text-lg font-semibold opacity-95">
                          {slide.subtitle}
                        </p>
                      )}
                      <p className="text-sm lg:text-base opacity-90 leading-relaxed">
                        {slide.description}
                      </p>
                      {slide.isReunion && (
                        <ul className="space-y-1.5 text-sm lg:text-sm opacity-90 list-none pl-0">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Notre équipe pédagogique</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Le contenu détaillé des formations CIP et FPA</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Notre approche pédagogique au plus près du réel</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Les débouchés professionnels</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Les possibilités de financement</span>
                          </li>
                        </ul>
                      )}
                      {!slide.isQuiz && !slide.isReunion && (
                        <a
                          href={slide.buttonLink}
                          className={`inline-flex items-center px-8 py-4 bg-white font-bold rounded-lg transition-all duration-300 shadow-xl text-base lg:text-lg mt-6 transform hover:scale-105 ${
                            slide.isReunion
                              ? 'text-orange-500 hover:bg-orange-50' 
                              : slide.id === 4
                              ? 'text-[#013F63] hover:bg-blue-50' 
                              : 'text-orange-500 hover:bg-orange-50'
                          }`}
                        >
                          {slide.buttonText}
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
                      ) : slide.isReunion ? (
                        /* Fenêtre pour les réunions d'information collective */
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-gray-800 max-w-sm shadow-xl">
                          <div className="text-center mb-4">
                            <h3 className="text-xl font-bold mb-1 text-[#013F63]">Voir les prochaines dates de réunions</h3>
                            <p className="text-xs text-gray-600 mt-1">
                              Gratuite • Sans engagement
                            </p>
                          </div>
                          <Link
                            href="/s-inscrire"
                            className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg text-base"
                          >
                            Voir les dates
                          </Link>
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
                Nos <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Accompagnements</span>
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
        
        {/* Cookie Banner */}
        <CookieBanner />
      </div>
    </>
  )
} 