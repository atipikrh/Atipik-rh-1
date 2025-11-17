import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { 
  Award, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Star,
  ChevronDown,
  MapPin,
  Heart,
  Lightbulb,
  UserCheck,
  Users,
  BookOpen,
  Target,
  Phone,
  Mail,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  GraduationCap
} from 'lucide-react'
import Image from 'next/image'

export default function FormationFPA() {
  const [openFaq, setOpenFaq] = useState(null)
  const [openModules, setOpenModules] = useState({})
  const [openSections, setOpenSections] = useState({})
  const [isVisible, setIsVisible] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({})
  const [animatedFranceStats, setAnimatedFranceStats] = useState({})
  const [hasAnimatedStats, setHasAnimatedStats] = useState(false)
  const [hasAnimatedFranceStats, setHasAnimatedFranceStats] = useState(false)
  const [currentStatIndex, setCurrentStatIndex] = useState(0)
  const [currentFranceStatIndex, setCurrentFranceStatIndex] = useState(0)
  const [currentDocIndex, setCurrentDocIndex] = useState(0)
  const [currentFinancementIndex, setCurrentFinancementIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const statsRef = useRef(null)
  const franceStatsRef = useRef(null)
  const accordeonsRef = useRef(null)
  const carteBleueRef = useRef(null)
  const timelineRef = useRef(null)
  const circle3Ref = useRef(null)
  const [timelineHeight, setTimelineHeight] = useState('calc(100% - 72px)')

  // Données des financements
  const financements = [
    {
      id: 'aif',
      logo: '/images/financements/Bloc_Marque_RF_France_Travail_CMJN_Horizontal_Coul_Positif.jpg',
      titre: 'Aide Individuelle à la Formation (AIF)',
      description: 'Demandeurs d\'emploi',
      logoWidth: 60,
      logoHeight: 40
    },
    {
      id: 'cpf',
      logo: '/images/financements/cpf.jpg',
      titre: 'Compte Personnel de Formation (CPF)',
      description: 'Pour tous les actifs',
      logoWidth: 60,
      logoHeight: 60
    },
    {
      id: 'transitionPro',
      logo: '/images/financements/logo-transition-pro.png',
      titre: 'Transition Professionnelle',
      description: 'Salariés en reconversion',
      logoWidth: 60,
      logoHeight: 60
    },
    {
      id: 'csp',
      logo: '/images/financements/logo-csp.jpeg',
      titre: 'Contrat de Sécurisation Professionnelle',
      description: 'Salariés en licenciement économique',
      logoWidth: 60,
      logoHeight: 60
    },
    {
      id: 'opco',
      logo: '/images/financements/logo-opco.webp',
      titre: 'OPCO',
      description: 'Financement employeur',
      logoWidth: 60,
      logoHeight: 60
    },
    {
      id: 'plan',
      logo: null,
      titre: 'Plan de développement de compétences',
      description: 'Salariés',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      text: 'Plan de\ndéveloppement'
    },
    {
      id: 'faf',
      logo: '/images/financements/Logo-FAFCEA.jpg',
      titre: 'FAF',
      description: 'Indépendants',
      logoWidth: 60,
      logoHeight: 60
    }
  ]

  const nextFinancement = () => {
    setCurrentFinancementIndex((prev) => (prev + 1) % financements.length)
  }

  const prevFinancement = () => {
    setCurrentFinancementIndex((prev) => (prev - 1 + financements.length) % financements.length)
  }

  const getVisibleFinancements = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (currentFinancementIndex + i) % financements.length
      result.push(financements[index])
    }
    return result
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleModule = (moduleId) => {
    setOpenModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }))
  }

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  // Détecter la taille d'écran après l'hydratation pour éviter les erreurs SSR
  useEffect(() => {
    setIsClient(true)
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Synchroniser la hauteur de la carte bleue avec les accordéons fermés (structure identique à CIP)
  useEffect(() => {
    const updateHeight = () => {
      if (accordeonsRef.current && carteBleueRef.current) {
        // Calculer la hauteur uniquement des boutons fermés (sans le contenu déroulé)
        let totalHeight = 0
        const accordeons = accordeonsRef.current.querySelectorAll('div.bg-white.rounded-xl')
        
        accordeons.forEach((accordeon) => {
          const button = accordeon.querySelector('button')
          if (button) {
            totalHeight += button.offsetHeight
          }
        })
        
        // Ajouter les espaces entre les accordéons (space-y-4 = 16px)
        const spaces = (accordeons.length - 1) * 16
        totalHeight += spaces
        
        carteBleueRef.current.style.height = `${totalHeight}px`
      }
    }

    // Mettre à jour au montage
    if (isClient) {
      setTimeout(updateHeight, 100)
    }
    
    // Observer les changements de taille de la fenêtre
    const handleResize = () => {
      setTimeout(updateHeight, 100)
    }
    window.addEventListener('resize', handleResize)

    // Observer les changements de taille des accordéons
    let resizeObserver = null
    if (isClient && accordeonsRef.current) {
      resizeObserver = new ResizeObserver(() => {
        setTimeout(updateHeight, 50)
      })
      
      const accordeons = accordeonsRef.current.querySelectorAll('div.bg-white.rounded-xl')
      accordeons.forEach((accordeon) => {
        const button = accordeon.querySelector('button')
        if (button) {
          resizeObserver.observe(button)
        }
      })
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
    }
  }, [isClient])

  // Calculer la hauteur de la ligne de la timeline jusqu'au centre du cercle 3
  useEffect(() => {
    const updateTimelineHeight = () => {
      if (timelineRef.current && circle3Ref.current) {
        // Calculer la position du cercle 3 par rapport au conteneur timeline
        const timelineRect = timelineRef.current.getBoundingClientRect()
        const circle3Rect = circle3Ref.current.getBoundingClientRect()
        
        // Position du centre du cercle 3 par rapport au top du conteneur timeline
        const circle3CenterY = circle3Rect.top + (circle3Rect.height / 2) - timelineRect.top
        const timelineHeight = timelineRect.height
        
        // Distance depuis le bas du conteneur jusqu'au centre du cercle 3
        const distanceFromBottom = timelineHeight - circle3CenterY
        
        // Le top de la ligne est à 24px (top-6)
        const lineHeight = circle3CenterY - 24
        
        if (lineHeight > 0 && distanceFromBottom > 0) {
          setTimelineHeight(`${lineHeight}px`)
        }
      }
    }

    if (isClient) {
      setTimeout(updateTimelineHeight, 300)
    }
    
    const handleResize = () => {
      setTimeout(updateTimelineHeight, 300)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isClient, openModules])

  // Fonction pour animer les compteurs
  const animateCounter = (start, end, duration, callback) => {
    const startTime = performance.now()
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const current = Math.floor(start + (end - start) * progress)
      callback(current)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }

  // Observer pour les statistiques Atipik RH
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedStats) {
          setIsVisible(true)
          setHasAnimatedStats(true)
          
          // Animer les statistiques Atipik RH
          stats.forEach((stat, index) => {
            setTimeout(() => {
              if (stat.value === "À venir") {
                setAnimatedStats(prev => ({
                  ...prev,
                  [index]: "À venir"
                }))
              }
            }, index * 200)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [hasAnimatedStats])

  // Observer pour les statistiques France Compétences
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedFranceStats) {
          setHasAnimatedFranceStats(true)
          
          // Animer les statistiques France Compétences
          franceCompetencesStats.forEach((stat, index) => {
            setTimeout(() => {
              const numericValue = parseInt(stat.value.replace(/[^\d]/g, ''))
              if (!isNaN(numericValue)) {
                animateCounter(0, numericValue, 2000, (current) => {
                  setAnimatedFranceStats(prev => ({
                    ...prev,
                    [index]: stat.value.includes('%') ? `${current}%` : current.toString()
                  }))
                })
              } else {
                setAnimatedFranceStats(prev => ({
                  ...prev,
                  [index]: stat.value
                }))
              }
            }, index * 200)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (franceStatsRef.current) {
      observer.observe(franceStatsRef.current)
    }

    return () => {
      if (franceStatsRef.current) {
        observer.unobserve(franceStatsRef.current)
      }
    }
  }, [hasAnimatedFranceStats])

  const modules = [
    {
      id: 1,
      titre: "Concevoir et préparer la formation",
      sousTitre: "C.C.P 1",
      contenu: [
        "Élaborer la progression pédagogique d'une formation multimodale à partir d'une demande",
        "Concevoir un scénario pédagogique et d'accompagnement en intégrant la multimodalité",
        "Concevoir des activités d'apprentissage et d'évaluation en intégrant la multimodalité"
      ]
    },
    {
      id: 2,
      titre: "Animer une formation et évaluer les acquis des apprenants",
      sousTitre: "C.C.P 2",
      contenu: [
        "Animer une formation et faciliter les apprentissages selon différentes modalités",
        "Évaluer les acquis de formation des apprenants",
        "Remédier aux difficultés individuelles d'apprentissage"
      ]
    },
    {
      id: 3,
      titre: "Accompagner les apprenants en formation",
      sousTitre: "C.C.P 3",
      contenu: [
        "Accompagner les apprenants dans leur parcours de formation",
        "Accueillir un apprenant en formation et co-construire son parcours",
        "Tutorer les apprenants à distance",
        "Accompagner le développement professionnel des apprenants"
      ]
    },
    {
      id: 4,
      titre: "Inscrire sa pratique professionnelle dans une démarche de qualité et de responsabilité sociale des entreprises",
      sousTitre: "C.C.P 4",
      contenu: [
        "Respecter et faire respecter la règlementation en vigueur en formation et dans sa spécialité",
        "Réaliser une veille pour maintenir son expertise de formateur et de professionnel dans sa spécialité",
        "Analyser ses pratiques professionnelles"
      ]
    }
  ]

  const stats = [
    { label: "Nombre de stagiaires formés", value: "À venir" },
    { label: "Taux de satisfaction", value: "À venir" },
    { label: "Taux de présentation au titre préparé", value: "À venir" },
    { label: "Taux d'obtention du titre", value: "À venir" },
    { label: "Taux d'insertion dans le métier visé à 6 mois", value: "À venir" },
    { label: "Taux d'insertion globale à 6 mois", value: "À venir" }
  ]

  const franceCompetencesStats = [
    { label: "Nombre de certifiés", value: "2516" },
    { label: "Nombre de certifiés à la suite d'un parcours VAE", value: "133" },
    { label: "Taux d'insertion global à 6 mois", value: "78%" },
    { label: "Taux d'insertion dans le métier visé à 6 mois", value: "68%" },
    { label: "Taux d'insertion dans le métier visé à 2 ans", value: "56%" }
  ]

  return (
    <>
      <Head>
        <title>Formation FPA - Formateur Professionnel d'Adultes | Atipik RH</title>
        <meta name="description" content="Formation Formateur Professionnel d'Adultes (FPA) à Bordeaux. Devenez formateur certifié avec notre accompagnement expert. Financement CPF possible." />
        <meta name="keywords" content="formation FPA, formateur professionnel adultes, certification formateur, formation professionnelle, CPF" />
        <link rel="canonical" href="https://atipikrh.fr/formations/fpa" />
      </Head>

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Background animé global */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse animation-delay-3000"></div>
        
        <div className="relative z-10">
          <Header isFixed={true} />

          {/* Spacer for fixed header */}
          <div className="h-20"></div>

          {/* Hero Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              
              {/* Titre principal */}
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-2xl lg:text-4xl font-bold text-[#013F63] mb-6 leading-tight tracking-tight">
                  Formation<br/>
                  <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Formateur Professionnel d'Adultes</span>
                </h1>
                <p className="text-lg lg:text-xl text-[#013F63] leading-relaxed font-light">
                  Devenez <strong>formateur certifié</strong> et accompagnez la montée en compétences
                </p>
              </div>
            </div>
          </section>

          {/* Section Contexte - Style carte */}
          <section className="py-2 my-2">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">

                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#013F63]">
                  <div className="space-y-4 text-[#013F63] text-lg leading-relaxed text-center">
                    <p>
                      Dans un contexte de transformation digitale et d'évolution des compétences, le besoin en formateurs qualifiés ne cesse de croître. Les entreprises et organismes de formation recherchent des professionnels capables de concevoir et d'animer des formations adaptées aux enjeux actuels du marché du travail et aux nouvelles modalités d'apprentissage.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center my-6">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                  </div>
                  
                  <div className="text-orange-500 font-bold text-xl leading-relaxed text-center">
                    <p>
                      Devenez un formateur expert avec une certification reconnue et développez vos compétences pédagogiques !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Programme de Formation */}
          <section className="pt-12 pb-8">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
              
              {/* Titre de section */}
              <div className="text-center mb-8">
                <h2 className="text-lg lg:text-xl font-bold text-[#013F63] mb-6">
                  LE PROGRAMME DE FORMATION
                  </h2>
                </div>

              <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
                
                {/* Carte bleue à gauche */}
                <div ref={carteBleueRef} className="w-full lg:w-96 flex-shrink-0 rounded-xl p-6 text-white flex flex-col" style={{backgroundColor: '#013F63'}}>
                  <div className="space-y-3 flex-grow flex flex-col justify-between">
                    
                    <div className="flex items-start gap-2">
                      <Target className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-0.5 text-base">Niveau de sortie :</p>
                        <p className="text-blue-100 text-sm">Niveau 5 - titre <a href="https://www.francecompetences.fr/recherche/rncp/37275/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline transition-colors">RNCP37275</a></p>
                    </div>
                </div>

                    <div className="flex items-start gap-2">
                      <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-0.5 text-base">Horaire :</p>
                        <p className="text-blue-100 text-sm">Du lundi au vendredi, de 9h00 à 12h30 et de 13h30 à 17h00</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-0.5 text-base">Lieu :</p>
                        <p className="text-blue-100 text-sm">8 rue du Courant, 33310 Lormont</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Users className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-0.5 text-base">Taille du groupe :</p>
                        <p className="text-blue-100 text-sm">Entre 6 et 12 personnes</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <BookOpen className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-0.5 text-base">Modalité :</p>
                        <p className="text-blue-100 text-sm">En présentiel</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accordéons à droite */}
                <div ref={accordeonsRef} className="w-full lg:w-96 flex-shrink-0 space-y-4">
                  
                  {/* Prérequis */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <button
                      className="w-full py-3.5 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
                      onClick={() => toggleModule('prerequis')}
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">PRÉREQUIS</h3>
                      </div>
                      {openModules['prerequis'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openModules['prerequis'] && (
                      <div className="p-3 border-t border-gray-100">
                        <ul className="text-[#013F63] text-sm leading-relaxed space-y-2 list-disc list-inside">
                          <li>Une expertise technique dans un domaine spécifique est essentielle</li>
                          <li>Un projet de formation validé par au minimum deux enquêtes métiers et/ou une immersion</li>
                          <li>Une connaissance des outils informatiques et des techniques rédactionnelles</li>
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {/* Public visé */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <button
                      className="w-full py-3.5 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
                      onClick={() => toggleModule('public')}
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">PUBLIC VISÉ</h3>
                          </div>
                      {openModules['public'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openModules['public'] && (
                      <div className="p-3 border-t border-gray-100">
                        <p className="text-[#013F63] text-sm leading-relaxed">
                          Cette formation s'adresse aux personnes souhaitant exercer le métier de formateur professionnel d'adultes dans différents contextes : organismes de formation, entreprises, associations, institutions publiques.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Modalités d'admission */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <button
                      className="w-full py-3.5 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
                      onClick={() => toggleModule('modalites')}
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">MODALITÉS D'ADMISSION</h3>
                              </div>
                      {openModules['modalites'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openModules['modalites'] && (
                      <div className="p-8 border-t border-gray-100 bg-white">
                        <h3 className="text-xl font-bold text-[#013F63] mb-10 text-center font-brittany">
                          Les étapes du processus de sélection :
                        </h3>
                        
                        {/* Timeline verticale */}
                        <div ref={timelineRef} className="relative pl-6">
                          {/* Conteneur pour limiter la hauteur de la ligne */}
                          <div 
                            className="absolute left-6 top-6 w-0.5 overflow-hidden"
                            style={{height: timelineHeight, maxHeight: timelineHeight}}
                          >
                            {/* Ligne orange verticale avec effet de défilement - s'arrête au centre du cercle 3 */}
                            <div className="w-full h-full bg-gray-200"></div>
                            <div className="w-full h-full bg-orange-500 timeline-scroll-line"></div>
                          </div>
                          
                          {/* Étapes */}
                          <div className="space-y-10 relative">
                            
                            {/* Étape 1 */}
                            <div className="flex items-start gap-5">
                              <div className="relative z-10 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 -ml-6 shadow-sm">
                                <span className="text-white text-base font-bold">1</span>
                              </div>
                              <div className="flex-grow pt-0.5">
                                <h4 className="text-orange-500 font-bold text-base mb-4 uppercase tracking-tight">
                                  Dossier de candidature
                                </h4>
                                <ul className="text-[#013F63] text-sm space-y-1.5 mb-4 leading-relaxed">
                                  <li>• Formulaire de candidature</li>
                                  <li>• Curriculum Vitae</li>
                                  <li>• Lettre de motivation</li>
                                  <li>• 2 enquêtes métier</li>
                                  <li>• ET/OU 1 journée d'immersion professionnelle</li>
                                </ul>
                                <a
                                  href="/documents/dossier-candidature/dossier-candidature-FPA.pdf"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors text-xs mb-4"
                                >
                                  Télécharger le dossier de candidature
                                </a>
                                <p className="text-orange-500 text-sm leading-relaxed">
                                  La sélection des candidats s'effectue après l'étude du dossier d'inscription et l'émission d'un premier avis favorable.
                                </p>
                              </div>
                            </div>

                            {/* Étape 2 */}
                            <div className="flex items-center gap-5">
                              <div className="relative z-10 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 -ml-6 shadow-sm">
                                <span className="text-white text-base font-bold">2</span>
                              </div>
                              <div className="flex-grow">
                                <h4 className="text-orange-500 font-bold text-base mb-0 uppercase tracking-tight">
                                  Un entretien de motivation
                                </h4>
                              </div>
                            </div>

                            {/* Étape 3 */}
                            <div className="flex items-center gap-5">
                              <div ref={circle3Ref} className="relative z-10 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 -ml-6 shadow-sm">
                                <span className="text-white text-base font-bold">3</span>
                              </div>
                              <div className="flex-grow">
                                <h4 className="text-orange-500 font-bold text-base mb-0 uppercase tracking-tight">
                                  Un test d'évaluation des connaissances rédactionnelles
                                </h4>
                              </div>
                            </div>

                          </div>
                        </div>
                        
                        <p className="mt-10 text-[#013F63] text-xs font-bold leading-relaxed text-center">
                          Le processus de sélection sera identique pour tous les candidats, quel que soit le mode de financement choisi.
                        </p>
                        
                        <div className="mt-8 text-center">
                          <p className="text-orange-500 font-bold text-sm mb-3">
                            Il est fortement recommandé de participer à une réunion d'information collective.
                          </p>
                          <Link href="/s-inscrire">
                            <button className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors text-xs">
                              S'inscrire à une réunion d'information
                            </button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Méthodes pédagogiques */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <button
                      className="w-full py-3.5 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
                      onClick={() => toggleModule('methodes')}
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">MÉTHODES PÉDAGOGIQUES</h3>
                      </div>
                      {openModules['methodes'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openModules['methodes'] && (
                      <div className="p-3 border-t border-gray-100">
                        <div className="space-y-3 text-[#013F63] text-sm">
                          <p className="font-semibold text-[#013F63]">UNE FORMATION BASÉE SUR LA PRATIQUE PÉDAGOGIQUE</p>
                          <p>• Alternance entre apports théoriques et mises en situation pratiques</p>
                          <p>• Ateliers de conception pédagogique et d'animation</p>
                          <p>• Analyse de pratiques et retours d'expérience</p>
                          <p>• Utilisation d'outils numériques et de ressources pédagogiques innovantes</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Déroulement de la formation */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <button
                      className="w-full py-3.5 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
                      onClick={() => toggleModule('deroulement')}
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">DÉROULEMENT DE LA FORMATION</h3>
                      </div>
                      {openModules['deroulement'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openModules['deroulement'] && (
                      <div className="p-3 border-t border-gray-100">
                        <div className="space-y-3 text-[#013F63] text-sm">
                          <p>• <strong>Formation en cours de définition</strong></p>
                          <p>Les modalités précises de durée et de répartition seront communiquées prochainement.</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Modalité d'évaluation */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <button
                      className="w-full py-3.5 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
                      onClick={() => toggleModule('evaluation')}
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">MODALITÉ D'ÉVALUATION</h3>
                      </div>
                      {openModules['evaluation'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openModules['evaluation'] && (
                      <div className="p-3 border-t border-gray-100">
                        <div className="space-y-3 text-[#013F63] text-sm">
                          <p>Des évaluations formatives sont réalisées tout au long de la formation. Pour obtenir votre titre professionnel de Formateur professionnel d'adultes, vous devrez réaliser 4 épreuves. Elles ont pour but de prouver au jury que vous avez acquis les compétences nécessaires pour devenir formateur.</p>
                          <p className="font-semibold">La durée totale de l'épreuve est de 3h :</p>
                          <div className="ml-4 space-y-1">
                            <p>• 55 minutes de mise en situation professionnelle</p>
                            <p>• 20 minutes d'entretien technique</p>
                            <p>• 1h35 de questionnement à partir de productions : présentation orale par le candidat et questionnement par le jury. Le questionnement est organisé en 4 parties correspondant aux quatre activités types.</p>
                            <p>• 10 minutes d'entretien final</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Méthodologie d'intervention */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                {/* Titre de section */}
                <div className="text-center mb-4">
                  <h2 className="text-lg lg:text-xl font-bold text-[#013F63] mb-3">
                    <span className="text-orange-500 font-brittany text-xl lg:text-2xl">Une méthodologie</span> D'INTERVENTION AU PLUS PRÈS DU RÉEL
                  </h2>
                </div>

                {/* Carrousel horizontal style financement */}
                <div className="overflow-x-auto px-4 py-8">
                  <div className="flex gap-4 md:gap-6 w-max pl-4 pr-4">
                    
                    {/* Carte 1: Équipe de formateurs */}
                    <div className="flex-shrink-0 w-72">
                      <a href="/notre-equipe" className="block">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-[240px] overflow-hidden cursor-pointer">
                        {/* Section titre avec fond bleu clair */}
                        <div className="bg-blue-100 px-6 py-4 h-16 flex items-center justify-center">
                          <h3 className="text-base font-bold text-[#013F63] leading-tight text-center">ÉQUIPE DE FORMATEURS</h3>
                        </div>
                        {/* Section contenu avec fond blanc */}
                        <div className="bg-white px-6 py-1 flex-grow flex items-center">
                          <p className="text-[#013F63] text-sm leading-relaxed">
                            Une équipe de formateurs issue du terrain du milieu de la formation et de la transmission, avec une expertise reconnue dans l'accompagnement professionnel et l'insertion.
                          </p>
                        </div>
                        </div>
                      </a>
                    </div>

                    {/* Carte 2: Intervenants théâtre */}
                    <div className="flex-shrink-0 w-72">
                      <a href="/notre-equipe" className="block">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-[240px] overflow-hidden cursor-pointer">
                        {/* Section titre avec fond bleu clair */}
                        <div className="bg-blue-100 px-6 py-4 h-16 flex items-center justify-center">
                          <h3 className="text-base font-bold text-[#013F63] leading-tight text-center">INTERVENANTS THÉÂTRE</h3>
                        </div>
                        {/* Section contenu avec fond blanc */}
                        <div className="bg-white px-6 py-1 flex-grow flex items-center">
                          <p className="text-[#013F63] text-sm leading-relaxed">
                            Des intervenants théâtre spécialisés dans l'insertion professionnelle et dans le handicap pour des mises en situation innovantes.
                          </p>
                        </div>
                        </div>
                      </a>
                    </div>

                    {/* Carte 3: Projets collaboratifs */}
                    <div className="flex-shrink-0 w-72">
                      <a href="/blog" className="block">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-[240px] overflow-hidden cursor-pointer">
                        {/* Section titre avec fond bleu clair */}
                        <div className="bg-blue-100 px-6 py-4 h-16 flex items-center justify-center">
                          <h3 className="text-base font-bold text-[#013F63] leading-tight text-center">PROJETS COLLABORATIFS</h3>
                        </div>
                        {/* Section contenu avec fond blanc */}
                        <div className="bg-white px-6 py-1 flex-grow flex items-center">
                          <p className="text-[#013F63] text-sm leading-relaxed">
                            Des projets collaboratifs et des mises en situation auprès des publics accompagnés par les structures de l'emploi et de l'insertion du territoire.
                          </p>
                        </div>
                        </div>
                      </a>
                    </div>

                    {/* Carte 4: Rencontres professionnelles */}
                    <div className="flex-shrink-0 w-72">
                      <a href="/blog" className="block">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-[240px] overflow-hidden cursor-pointer">
                        {/* Section titre avec fond bleu clair */}
                        <div className="bg-blue-100 px-6 py-4 h-16 flex items-center justify-center">
                          <h3 className="text-base font-bold text-[#013F63] leading-tight text-center">RENCONTRES PROFESSIONNELLES</h3>
                        </div>
                        {/* Section contenu avec fond blanc */}
                        <div className="bg-white px-6 py-1 flex-grow flex items-center">
                          <p className="text-[#013F63] text-sm leading-relaxed">
                            Des rencontres avec des professionnels du secteur pour enrichir la formation et créer un réseau professionnel.
                          </p>
                        </div>
                        </div>
                      </a>
                    </div>

                    {/* Carte 5: Thématiques actuelles */}
                    <div className="flex-shrink-0 w-72">
                      <a href="/blog" className="block">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-[240px] overflow-hidden cursor-pointer">
                        {/* Section titre avec fond bleu clair */}
                        <div className="bg-blue-100 px-6 py-4 h-16 flex items-center justify-center">
                          <h3 className="text-base font-bold text-[#013F63] leading-tight text-center">THÉMATIQUES ACTUELLES</h3>
                        </div>
                        {/* Section contenu avec fond blanc */}
                        <div className="bg-white px-6 py-1 flex-grow flex items-center">
                          <p className="text-[#013F63] text-sm leading-relaxed">
                            Des thématiques adaptées aux enjeux actuels de la profession : Risques psychosociaux, handicap, le droit des étrangers, inclusion numérique...
                          </p>
                        </div>
                        </div>
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Les 3 Modules FPA */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight">
                    Les <span className="text-[#013F63]">4</span> <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">C.C.P</span>
                  </h2>
                  <p className="text-lg text-[#013F63] leading-relaxed font-light max-w-3xl mx-auto">
                    Un parcours complet pour maîtriser tous les aspects du métier de formateur
                  </p>
                </div>

                <div className="space-y-4 max-w-4xl mx-auto">
                  {modules.map((module, index) => {
                    const isOpen = openModules[module.id]
                    const gradientFrom = "from-[#013F63]"
                    const gradientTo = "to-[#012a4a]"
                    
                    return (
                      <div key={module.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                        
                        {/* En-tête cliquable */}
                        <button
                          onClick={() => toggleModule(module.id)}
                          className={`w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white p-4 flex items-center justify-between hover:opacity-90 transition-opacity`}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm">{module.id}</span>
                            </div>
                            <div className="text-left">
                              <h3 className="text-base lg:text-lg font-bold">{module.titre}</h3>
                              <p className="text-white/90 text-sm">{module.sousTitre}</p>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-6 h-6 text-white" />
                            ) : (
                              <ChevronDown className="w-6 h-6 text-white" />
                            )}
                          </div>
                        </button>

                        {/* Contenu déroulant */}
                        {isOpen && (
                          <div className="p-6 border-t border-gray-200 animate-in slide-in-from-top-4 duration-300">
                            
                            {/* Contenu du module */}
                            <div className="mb-6">
                              <h4 className="text-sm font-bold text-[#013F63] mb-3 flex items-center gap-2">
                                <Target className="w-4 h-4" />
                                Compétences développées
                              </h4>
                              <div className="grid md:grid-cols-2 gap-2">
                                {module.contenu.map((item, i) => (
                                  <div key={i} className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-[#013F63]">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Bouton Plaquette Informative */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center">
                  <a 
                    href="/documents/plaquettes/plaquette-fpa.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-white border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                  >
                    <svg className="w-5 h-5 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Télécharger la plaquette informative
                  </a>
                  <p className="text-sm text-gray-500 mt-2">
                    Format PDF - Toutes les informations détaillées sur la formation FPA
                  </p>
                </div>

                {/* Bouton Dossier de Candidature */}
                <div className="text-center mt-6">
                  <a 
                    href="/documents/dossier-candidature/dossier-candidature-FPA.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-orange-500 border-2 border-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                  >
                    <svg className="w-5 h-5 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Télécharger le dossier de candidature
                  </a>
                  <p className="text-sm text-gray-500 mt-2">
                    Format PDF - Dossier de candidature pour la formation FPA
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Suite du parcours et débouchés */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                    Vos <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">opportunités</span> professionnelles
                  </h2>
                  <p className="text-lg text-[#013F63] leading-relaxed font-light max-w-3xl mx-auto">
                    Découvrez les secteurs et métiers accessibles après votre certification FPA
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:items-stretch">
                  
                  {/* Secteurs d'activités - Accordéons cliquables */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl blur opacity-20"></div>
                    <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-blue-100 h-full flex flex-col">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-[#013F63]">Secteurs d'activités</h3>
                      </div>
                      
                      <div className="space-y-3 flex-grow">
                        
                        {/* Organismes de formation */}
                        <div className="bg-blue-50 rounded-lg border border-blue-200 overflow-hidden">
                          <button
                            onClick={() => toggleSection('organismes-formation')}
                            className="w-full p-3 text-left flex items-center justify-between hover:bg-blue-100 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              <span className="text-[#013F63] font-medium text-sm">Organismes de formation</span>
                            </div>
                            {openSections['organismes-formation'] ? (
                              <ChevronUp className="w-4 h-4 text-blue-600" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-blue-600" />
                            )}
                          </button>
                          {openSections['organismes-formation'] && (
                            <div className="px-3 pb-3 border-t border-blue-200 bg-white">
                              <p className="text-xs text-[#013F63] leading-relaxed mt-2">
                                Centres de formation professionnelle, organismes de formation continue, centres de formation d'apprentis (CFA), organismes de formation à distance, centres de formation spécialisés par secteur d'activité
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Entreprises */}
                        <div className="bg-blue-50 rounded-lg border border-blue-200 overflow-hidden">
                          <button
                            onClick={() => toggleSection('entreprises')}
                            className="w-full p-3 text-left flex items-center justify-between hover:bg-blue-100 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              <span className="text-[#013F63] font-medium text-sm">Entreprises</span>
                            </div>
                            {openSections['entreprises'] ? (
                              <ChevronUp className="w-4 h-4 text-blue-600" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-blue-600" />
                            )}
                          </button>
                          {openSections['entreprises'] && (
                            <div className="px-3 pb-3 border-t border-blue-200 bg-white">
                              <p className="text-xs text-[#013F63] leading-relaxed mt-2">
                                Services formation internes, départements RH, cabinets de conseil en formation, entreprises de tous secteurs ayant des besoins en formation de leurs salariés
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Secteur public */}
                        <div className="bg-blue-50 rounded-lg border border-blue-200 overflow-hidden">
                          <button
                            onClick={() => toggleSection('secteur-public')}
                            className="w-full p-3 text-left flex items-center justify-between hover:bg-blue-100 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              <span className="text-[#013F63] font-medium text-sm">Secteur public</span>
                            </div>
                            {openSections['secteur-public'] ? (
                              <ChevronUp className="w-4 h-4 text-blue-600" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-blue-600" />
                            )}
                          </button>
                          {openSections['secteur-public'] && (
                            <div className="px-3 pb-3 border-t border-blue-200 bg-white">
                              <p className="text-xs text-[#013F63] leading-relaxed mt-2">
                                Collectivités territoriales, administrations publiques, établissements publics, services de formation des agents publics, centres de formation de la fonction publique
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Associations et ONG */}
                        <div className="bg-blue-50 rounded-lg border border-blue-200 overflow-hidden">
                          <button
                            onClick={() => toggleSection('associations')}
                            className="w-full p-3 text-left flex items-center justify-between hover:bg-blue-100 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              <span className="text-[#013F63] font-medium text-sm">Associations et ONG</span>
                            </div>
                            {openSections['associations'] ? (
                              <ChevronUp className="w-4 h-4 text-blue-600" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-blue-600" />
                            )}
                          </button>
                          {openSections['associations'] && (
                            <div className="px-3 pb-3 border-t border-blue-200 bg-white">
                              <p className="text-xs text-[#013F63] leading-relaxed mt-2">
                                Associations de formation, organisations non gouvernementales, structures d'insertion, associations d'éducation populaire, centres sociaux
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Emplois accessibles - Design moderne */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl blur opacity-20"></div>
                    <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-orange-100 h-full flex flex-col">
                      <div className="text-center mb-4">
                        <h3 className="text-2xl font-bold text-[#013F63]">Métiers accessibles</h3>
                      </div>
                      
                      <div className="space-y-4 flex-grow">
                        {/* 6 premiers métiers toujours visibles */}
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-[#013F63] font-medium text-sm">formateur professionnel d'adultes</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-[#013F63] font-medium text-sm">concepteur de formation</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-[#013F63] font-medium text-sm">animateur de formation</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-[#013F63] font-medium text-sm">coordinateur pédagogique</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-[#013F63] font-medium text-sm">responsable formation</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-[#013F63] font-medium text-sm">consultant en formation</span>
                        </div>
                        
                        {/* Métiers supplémentaires avec état déroulé */}
                        {openSections['metiers'] && (
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                              <span className="text-[#013F63] font-medium text-sm">ingénieur pédagogique</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                              <span className="text-[#013F63] font-medium text-sm">formateur digital</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                              <span className="text-[#013F63] font-medium text-sm">expert en e-learning</span>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="text-center mt-auto pt-4">
                        <button
                          onClick={() => toggleSection('metiers')}
                          className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 text-xs font-medium transition-colors group"
                        >
                          {openSections['metiers'] ? (
                            <>
                              <ChevronUp className="w-3 h-3 group-hover:transform group-hover:-translate-y-0.5 transition-transform" />
                              Voir moins
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-3 h-3 group-hover:transform group-hover:translate-y-0.5 transition-transform" />
                              + 3 autres métiers
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Source */}
                <div className="text-center mt-12">
                  <p className="text-gray-500 text-sm italic">
                    Source : France Compétences
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section Tarifs */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                    <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Tarifs</span>
                  </h2>
                </div>


                {/* Section Tarifs */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  
                  {/* Tarif */}
                  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-center">
                    <div className="bg-orange-100 text-[#013F63] rounded-t-2xl -mx-6 -mt-6 p-4 mb-4 h-20 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-orange-500">Tarif</h3>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-orange-500 mb-2">8 950<span className="text-2xl">€</span></div>
                      <p className="text-sm text-[#013F63]">TTC</p>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors"
                    >
                      En savoir plus
                    </Link>
                  </div>

                  {/* Tarif demandeur d'emploi */}
                  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-center">
                    <div className="bg-blue-100 text-[#013F63] rounded-t-2xl -mx-6 -mt-6 p-4 mb-4 h-20 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-blue-600">Tarif demandeur d'emploi</h3>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-blue-600 mb-2">6 500<span className="text-2xl">€</span></div>
                      <p className="text-sm text-[#013F63]">TTC</p>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors"
                    >
                      En savoir plus
                    </Link>
                  </div>
                </div>


              </div>
            </div>
          </section>

          {/* Section Financement */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">

                {/* Section Solutions de financement */}
                <div className="mb-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-4 leading-tight">
                      Comment <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">financer</span> votre formation FPA ?
                    </h3>
                  </div>

                  <div className="relative">
                    
                    {/* Cartes de financement - Responsive */}
                    <div className="overflow-hidden pb-4">
                      {/* Version Mobile - Une carte à la fois */}
                      <div 
                        className="flex transition-transform duration-300 ease-in-out md:hidden"
                        style={{ transform: `translateX(-${currentFinancementIndex * 100}%)` }}
                      >
                        {financements.map((financement) => (
                          <div key={financement.id} className="w-full flex-shrink-0 px-2">
                            <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-lg h-48 flex flex-col justify-center">
                          <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                            {financement.logo ? (
                              <Image
                                src={financement.logo}
                                alt={`Logo ${financement.titre}`}
                                width={financement.logoWidth}
                                height={financement.logoHeight}
                                className="object-contain"
                              />
                            ) : (
                              <div className={`${financement.bgColor} rounded-lg p-2 w-full h-full flex items-center justify-center`}>
                                <span className={`${financement.textColor} font-bold text-xs text-center leading-tight`}>
                                  {financement.text.split('\n').map((line, i) => (
                                    <div key={i}>{line}</div>
                                  ))}
                                </span>
                              </div>
                            )}
                          </div>
                          <h5 className="font-bold text-[#013F63] text-sm mb-2 flex-grow">{financement.titre}</h5>
                          <p className="text-xs text-[#013F63]">{financement.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Version Desktop - Trois cartes à la fois */}
                      <div className="hidden md:grid md:grid-cols-3 gap-6 px-12">
                        {getVisibleFinancements().map((financement) => (
                          <div key={financement.id} className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                            <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                              {financement.logo ? (
                                <Image
                                  src={financement.logo}
                                  alt={`Logo ${financement.titre}`}
                                  width={financement.logoWidth}
                                  height={financement.logoHeight}
                                  className="object-contain"
                                />
                              ) : (
                                <div className={`${financement.bgColor} rounded-lg p-2 w-full h-full flex items-center justify-center`}>
                                  <span className={`${financement.textColor} font-bold text-xs text-center leading-tight`}>
                                    {financement.text.split('\n').map((line, i) => (
                                      <div key={i}>{line}</div>
                                    ))}
                                  </span>
                                </div>
                              )}
                            </div>
                            <h5 className="font-bold text-[#013F63] text-sm mb-2 flex-grow">{financement.titre}</h5>
                            <p className="text-xs text-[#013F63]">{financement.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Flèches de navigation */}
                    <button
                      onClick={prevFinancement}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#013F63]" />
                    </button>
                    
                    <button
                      onClick={nextFinancement}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5 text-[#013F63]" />
                    </button>

                    {/* Indicateurs de pagination */}
                    <div className="flex justify-center mt-6 space-x-1">
                      {financements.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentFinancementIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentFinancementIndex ? 'bg-orange-500' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Autofinancement */}
                <div className="mt-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                    <h4 className="text-2xl font-bold text-[#013F63] mb-6">
                      <span className="text-orange-500 font-brittany text-3xl">Investissez</span> en vous-même
                    </h4>
                    <p className="text-base text-[#013F63] font-medium leading-relaxed">
                      Paiement en <span className="text-4xl font-light text-orange-500 font-brittany leading-none mx-2">x3</span>, <span className="text-4xl font-light text-orange-500 font-brittany leading-none mx-2">x6</span> ou <span className="text-4xl font-light text-orange-500 font-brittany leading-none mx-2">x9</span> sans frais grâce à notre partenaire financier.
                    </p>
                  </div>
                </div>

                <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/financement" className="inline-flex items-center gap-2 px-6 py-3 bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                    En savoir plus sur les financements
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a 
                    href="https://www.moncompteformation.gouv.fr/espace-prive/html/#/droits" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#013F63] text-[#013F63] hover:text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 border-2 border-[#013F63]"
                  >
                    J'utilise mon CPF
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          </section>

          {/* Section Prochaine session et Réunions d'information */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">

                <div className="max-w-md mx-auto mb-12">
                  {/* Session FPA 2026 */}
                  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-center">
                    <div className="bg-orange-100 text-[#013F63] rounded-t-2xl -mx-6 -mt-6 p-4 mb-4">
                      <h3 className="text-2xl font-bold mb-2 text-orange-500">Prochaine session</h3>
                      <p className="text-orange-600">Du 13 avril au 19 novembre 2026</p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-lg font-bold text-[#013F63]">Ouverture des candidatures</p>
                      <p className="text-2xl font-bold text-orange-500 mt-2">13 septembre 2025</p>
                    </div>
                  </div>
                </div>

                {/* Réunions d'information */}
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 shadow-lg border-2 border-gray-300">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#013F63] mb-4">
                      Réunions d'information <span className="text-orange-500 font-brittany text-3xl">collectives</span>
                    </h3>
                    <p className="text-[#013F63] leading-relaxed mb-6 max-w-2xl mx-auto">
                      Participez à une réunion d'information pour découvrir la formation et poser toutes vos questions.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href="/s-inscrire"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold rounded-full transition-colors text-lg hover:scale-105 transform"
                      >
                        <Users className="w-5 h-5" />
                        S'inscrire à une réunion
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold rounded-full transition-colors text-lg"
                      >
                        <Phone className="w-5 h-5" />
                        Nous contacter
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Statistiques Atipik RH */}
          <section ref={statsRef} className="py-16 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight">
                    Nos <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Résultats</span>
                  </h2>
                  <p className="text-lg text-[#013F63] leading-relaxed font-light max-w-3xl mx-auto">
                    Les performances d'Atipik RH en formation FPA
                  </p>
                </div>

                {/* Statistiques - Carousel */}
                <div className="relative">
                  {/* Flèche gauche */}
                  <button
                    onClick={() => {
                      const maxIndex = isClient && isMobile 
                        ? stats.length - 1 
                        : Math.max(0, stats.length - 3);
                      const newIndex = currentStatIndex > 0 ? currentStatIndex - 1 : maxIndex;
                      setCurrentStatIndex(newIndex);
                    }}
                    className="absolute left-0 -translate-x-8 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                    style={{ top: 'calc(50% - 40px)' }}
                  >
                    <ChevronLeft className="w-6 h-6 text-[#013F63]" />
                  </button>

                  {/* Flèche droite */}
                  <button
                    onClick={() => {
                      const maxIndex = isClient && isMobile 
                        ? stats.length - 1 
                        : stats.length - 3;
                      const newIndex = currentStatIndex < maxIndex ? currentStatIndex + 1 : 0;
                      setCurrentStatIndex(newIndex);
                    }}
                    className="absolute right-0 translate-x-8 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                    style={{ top: 'calc(50% - 40px)' }}
                  >
                    <ChevronRight className="w-6 h-6 text-[#013F63]" />
                  </button>

                  {/* Conteneur du carousel */}
                  <div className="overflow-hidden pb-4">
                    <div 
                      className="flex transition-transform duration-300 ease-in-out"
                      style={{ transform: `translateX(-${currentStatIndex * (isClient && isMobile ? 100 : 33.333)}%)` }}
                    >
                      {stats.map((stat, index) => (
                        <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-3">
                          <div className="bg-white rounded-2xl p-4 text-center shadow-lg border border-gray-100 h-28 flex flex-col justify-center">
                            <div className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-2">
                        {animatedStats[index] || 'À venir'}
                      </div>
                            <p className="text-[#013F63] text-xs lg:text-sm font-medium">
                        {stat.label}
                      </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Indicateurs de position */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ 
                      length: isClient && isMobile 
                        ? stats.length 
                        : Math.max(1, stats.length - 2) 
                    }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStatIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentStatIndex === index ? 'bg-orange-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Section Données France Compétences */}
          <section ref={franceStatsRef} className="pt-8 pb-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight">
                    Données <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">France Compétences</span>
                  </h2>
                  <p className="text-lg text-[#013F63] leading-relaxed font-light max-w-3xl mx-auto">
                    Statistiques officielles nationales pour la formation FPA (données 2021)
                  </p>
                </div>

                {/* Statistiques France Compétences - Carousel */}
                <div className="relative">
                  {/* Flèche gauche */}
                  <button
                    onClick={() => {
                      const maxIndex = isClient && isMobile 
                        ? franceCompetencesStats.length - 1 
                        : Math.max(0, franceCompetencesStats.length - 3);
                      const newIndex = currentFranceStatIndex > 0 ? currentFranceStatIndex - 1 : maxIndex;
                      setCurrentFranceStatIndex(newIndex);
                    }}
                    className="absolute left-0 -translate-x-8 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                    style={{ top: 'calc(50% - 40px)' }}
                  >
                    <ChevronLeft className="w-6 h-6 text-[#013F63]" />
                  </button>

                  {/* Flèche droite */}
                  <button
                    onClick={() => {
                      const maxIndex = isClient && isMobile 
                        ? franceCompetencesStats.length - 1 
                        : franceCompetencesStats.length - 3;
                      const newIndex = currentFranceStatIndex < maxIndex ? currentFranceStatIndex + 1 : 0;
                      setCurrentFranceStatIndex(newIndex);
                    }}
                    className="absolute right-0 translate-x-8 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                    style={{ top: 'calc(50% - 40px)' }}
                  >
                    <ChevronRight className="w-6 h-6 text-[#013F63]" />
                  </button>

                  {/* Conteneur du carousel - Responsive */}
                  <div className="overflow-hidden pb-4">
                    <div 
                      className="flex transition-transform duration-300 ease-in-out md:hidden"
                      style={{ transform: `translateX(-${currentFranceStatIndex * 100}%)` }}
                    >
                      {franceCompetencesStats.map((stat, index) => (
                        <div key={index} className="w-full flex-shrink-0 px-2">
                          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 h-32 flex flex-col justify-center">
                            <div className="text-3xl font-bold text-[#013F63] mb-2">
                              {animatedFranceStats[index] || '0'}
                            </div>
                            <p className="text-[#013F63] text-sm font-medium">
                              {stat.label}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Version Desktop - Trois cartes à la fois */}
                    <div 
                      className="hidden md:flex transition-transform duration-300 ease-in-out"
                      style={{ transform: `translateX(-${currentFranceStatIndex * 33.333}%)` }}
                    >
                      {franceCompetencesStats.map((stat, index) => (
                        <div key={index} className="w-1/3 flex-shrink-0 px-3">
                          <div className="bg-white rounded-2xl p-4 text-center shadow-lg border border-gray-100 h-28 flex flex-col justify-center">
                            <div className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-2">
                        {animatedFranceStats[index] || '0'}
                      </div>
                            <p className="text-[#013F63] text-xs lg:text-sm font-medium">
                        {stat.label}
                      </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Indicateurs de position */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ 
                      length: isClient && isMobile 
                        ? franceCompetencesStats.length 
                        : Math.max(1, franceCompetencesStats.length - 2) 
                    }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentFranceStatIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentFranceStatIndex === index ? 'bg-orange-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Source */}
                <div className="text-center mt-8">
                  <p className="text-gray-500 text-sm">
                    Source : <a href="https://www.francecompetences.fr/recherche/rncp/37275/" target="_blank" rel="noopener noreferrer" className="text-[#013F63] hover:text-orange-500 underline transition-colors duration-300">France Compétences - RNCP37275</a>
                  </p>
                </div>

              </div>
            </div>
          </section>


          {/* Section Contact */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                
                <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">
                  Prêt(e) à devenir <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">formateur ?</span>
                </h2>
                
                <p className="text-xl text-[#013F63] mb-12 max-w-2xl mx-auto">
                  Rejoignez notre prochaine promotion et devenez expert de la formation professionnelle
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                    Candidater maintenant
                  </Link>
                  <a 
                    href="tel:0783019955"
                    className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-lg"
                  >
                    07 83 01 99 55
                  </a>
                </div>

              </div>
            </div>
          </section>

          {/* Accessibilité Handicap */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                
                {/* Contenu principal */}
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="grid lg:grid-cols-3 gap-0">
                    
                    {/* Section gauche - Logo */}
                    <div className="bg-[#013F63] text-white p-6 flex flex-col justify-center items-center text-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <Image 
                          src="/images/certifications/formation-handicap.png" 
                          alt="Formation & Handicap" 
                          width={50} 
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-bold mb-2">Formation accessible</h3>
                    </div>

                    {/* Section droite - Contact et informations */}
                    <div className="lg:col-span-2 p-6 flex flex-col justify-center">
                      <div className="mb-4">
                        <p className="text-[#013F63] leading-relaxed mb-4">
                          <strong>Accessibilité Handicap :</strong> Nous mettons tout en œuvre pour rendre nos formations accessibles au plus grand nombre. 
                          Contactez-nous pour étudier ensemble les modalités d'accès adaptées à votre situation.
                        </p>
                      </div>

                      {/* Contact responsable */}
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden">
                          <Image 
                            src="/images/equipe/Vanessa.jpeg" 
                            alt="Vanessa Noah-Ewodo" 
                            width={40} 
                            height={40}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-[#013F63] text-sm">Vanessa NOAH EWODO - Fondatrice et Directrice</p>
                          <div className="flex items-center gap-4 mt-1">
                            <a 
                              href="mailto:contact@atipikrh.com" 
                              className="text-orange-500 hover:text-orange-600 transition-colors text-sm font-medium"
                            >
                              contact@atipikrh.com
                            </a>
                            <a 
                              href="tel:0783019955" 
                              className="text-orange-500 hover:text-orange-600 transition-colors text-sm font-medium"
                            >
                              07 83 01 99 55
                            </a>
                          </div>
                        </div>
                      </div>

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