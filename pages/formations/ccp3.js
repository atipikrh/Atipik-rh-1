import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { Clock, Users, MapPin, Calendar, GraduationCap, CheckCircle, ArrowRight, CreditCard, BookOpen, Target, Award, Phone, Mail, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, UserCheck } from 'lucide-react'
import Image from 'next/image'

export default function FormationCCP3() {
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
      logo: '/images/financements/logo-faf.jpeg',
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
  const statsRef = useRef(null)
  const franceStatsRef = useRef(null)

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
              if (stat.value === "9,7/10") {
                // Cas spécial pour le taux de satisfaction
                animateCounter(0, 97, 2000, (current) => {
                  setAnimatedStats(prev => ({
                    ...prev,
                    [index]: `${(current / 10).toFixed(1)}/10`
                  }))
                })
              } else {
                const numericValue = parseInt(stat.value.replace(/[^\d]/g, ''))
                if (!isNaN(numericValue)) {
                  animateCounter(0, numericValue, 2000, (current) => {
                    setAnimatedStats(prev => ({
                      ...prev,
                      [index]: stat.value.includes('%') ? `${current}%` : current.toString()
                    }))
                  })
                } else {
                  setAnimatedStats(prev => ({
                    ...prev,
                    [index]: stat.value
                  }))
                }
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
      titre: "Accueillir pour analyser la demande des personnes et poser les bases d'un diagnostic",
      sousTitre: "C.C.P 1",
      contenu: [
        "Informer une personne ou un groupe sur les ressources en matière d'insertion et services dématérialisés",
        "Analyser la demande de la personne et poser les bases d'un diagnostic partagé",
        "Exercer une veille pour adapter son activité au public et au contexte",
        "Travailler en équipe et en réseau, dans un cadre partenarial pour optimiser la réponse aux besoins des personnes accueillies",
        "Réaliser le traitement administratif et les écrits professionnels liés à l'activité dans un environnement numérique"
      ]
    },
    {
      id: 2,
      titre: "Accompagner les personnes dans leur parcours d'insertion sociale et professionnelle",
      sousTitre: "C.C.P 2",
      contenu: [
        "Contractualiser et suivre une personne dans son parcours d'insertion professionnelle",
        "Accompagner une personne à l'élaboration de son projet professionnel",
        "Accompagner la réalisation d'un projet professionnel",
        "Concevoir des ateliers thématiques favorisant l'insertion professionnelle des publics",
        "Préparer et animer des ateliers thématiques favorisant l'insertion",
        "Analyser sa pratique professionnelle"
      ]
    },
    {
      id: 3,
      titre: "Mettre en œuvre une offre de services auprès des employeurs pour favoriser l'insertion professionnelle",
      sousTitre: "C.C.P 3",
      contenu: [
        "Déployer une démarche de projet, des actions de prospection avec les employeurs du territoire pour favoriser l'insertion professionnelle",
        "Apporter un appui technique aux employeurs en matière de recrutement",
        "Faciliter l'intégration et le maintien du salarié dans son environnement professionnel",
        "Inscrire ses actes professionnels dans une démarche inclusive et de développement durable"
      ]
    }
  ]

  const stats = [
    { label: "Nombre de stagiaires formés", value: "19" },
    { label: "Taux de satisfaction", value: "9,7/10" },
    { label: "Taux de présentation au titre préparé", value: "100%" },
    { label: "Taux d'obtention du titre", value: "95%" },
    { label: "Taux d'insertion dans le métier visé à 6 mois", value: "67%" },
    { label: "Taux d'insertion globale à 6 mois", value: "78%" }
  ]

  const franceCompetencesStats = [
    { label: "Nombre de certifiés", value: "2303" },
    { label: "Nombre de certifiés à la suite d'un parcours VAE", value: "39" },
    { label: "Taux d'insertion global à 6 mois", value: "88%" },
    { label: "Taux d'insertion dans le métier visé à 6 mois", value: "72%" },
    { label: "Taux d'insertion dans le métier visé à 2 ans", value: "85%" }
  ]

  const documentationItems = [
    {
      title: "Livres",
      icon: "BookOpen",
      items: [
        "La recherche d'emploi, BD de Joris Chamblain",
        "Le travail de conseiller en insertion professionnelle, Léa Lima et Christophe Trombert, ESF législative",
        "Le monde des CIP - conseiller en insertion professionnelle, Catherine Mancel"
      ]
    },
    {
      title: "MOOC",
      icon: "GraduationCap", 
      items: [
        "Découvrez le métier de conseiller en évolution professionnelle, My Mooc"
      ]
    },
    {
      title: "Podcast",
      icon: "Podcast",
      items: [
        "CIP – Conseiller en Insertion professionnelle, Podcastics"
      ]
    },
    {
      title: "Documentaires",
      icon: "Play",
      items: [
        "Ecoles de la « Nouvelle chance », un espoir pour la jeunesse méditerranéenne, Les Hauts Parleurs",
        "Projets d.insertion, David Desramé",
        "Compétences comportementales : quels profils s.épanouissent dans le métier de CIP ? - Webinar Monkey tie"
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>Formation CCP3 - Conseiller en Insertion Professionnelle (C.C.P 3) | Atipik RH</title>
        <meta name="description" content="Formation certifiante CCP3 - Conseiller en Insertion Professionnelle niveau 5. Titre professionnel RNCP, financement CPF possible. Durée 1186h dont 385h en entreprise." />
        <meta name="keywords" content="formation CCP3, conseiller insertion professionnelle, formation certifiante, CPF, Bordeaux, Lormont" />
        <link rel="canonical" href="https://atipikrh.fr/formations/ccp3" />
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
          <section className="pt-20 pb-8">
            <div className="container mx-auto px-4">
              
              {/* Titre principal */}
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-2xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight tracking-tight">
                  Conseiller en <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Insertion Professionnelle (C.C.P 3)</span>
                </h1>
                <p className="text-lg text-[#013F63] leading-relaxed font-light">
                  Devenez expert de l'<strong>accompagnement vers l'emploi</strong>
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
                      Dans un contexte économique en mutation, le conseiller en insertion professionnelle accompagne à la fois les personnes dans la levée des freins, la construction de parcours vers un emploie durable et il soutient également les entreprises dans leurs besoins de recrutement et de fidélisation des talents.<br/><br/>Le CIP est avant tout un métier de lien, de contact et de territoire.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center my-6">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                  </div>
                  
                  <div className="text-orange-500 font-bold text-xl leading-relaxed text-center">
                    <p>
                      Devenez un expert de l'accompagnement vers l'emploi avec une certification reconnue !
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

              <div className={`flex flex-col lg:flex-row gap-8 justify-center ${
                Object.values(openModules).some(isOpen => isOpen) 
                  ? 'items-start' 
                  : 'items-start lg:items-center'
              }`}>
                
                {/* Carte bleue à gauche */}
                <div className="w-full lg:w-96 flex-shrink-0 rounded-xl p-6 text-white min-h-[320px] flex flex-col justify-center" style={{backgroundColor: '#013F63'}}>
                  <div className="space-y-2">
                    
                    <div className="flex items-start gap-2">
                      <UserCheck className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-0.5 text-sm">Niveau d'entrée :</p>
                        <p className="text-blue-100 text-xs">Sans niveau spécifique</p>
                    </div>
                </div>

                    <div className="flex items-start gap-2">
                      <Target className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-0.5 text-sm">Prérequis pédagogiques :</p>
                        <p className="text-blue-100 text-xs">Avoir de l'expérience professionnelle dans l'accompagnement social</p>
              </div>
            </div>

                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-0.5 text-sm">Durée :</p>
                        <p className="text-blue-100 text-xs">371 heures</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-0.5 text-sm">Horaire :</p>
                        <p className="text-blue-100 text-xs">Du lundi au vendredi, de 9h00 à 12h30 et de 13h30 à 17h00</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-0.5 text-sm">Lieu :</p>
                        <p className="text-blue-100 text-xs">8 rue du Courant, 33310 Lormont</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-0.5 text-sm">Taille du groupe :</p>
                        <p className="text-blue-100 text-xs">Entre 10 et 15 personnes</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-0.5 text-sm">Modalité :</p>
                        <p className="text-blue-100 text-xs">En présentiel</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accordéons à droite */}
                <div className="w-full lg:w-96 flex-shrink-0 space-y-4">
                  
                  {/* Objectifs pédagogiques */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <button
                      className="w-full py-3.5 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
                      onClick={() => toggleModule('objectifs')}
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">OBJECTIFS PÉDAGOGIQUES</h3>
                      </div>
                      {openModules['objectifs'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openModules['objectifs'] && (
                      <div className="p-3 border-t border-gray-100">
                        <div className="space-y-3 text-[#013F63] text-sm leading-relaxed">
                          <p>Ce parcours de formation « CCP3 » repose sur le concept de formation-action. Il comprend des projets collaboratifs avec des missions concrètes auprès de structures d'insertion partenaires du territoire de la Rive droite de Bordeaux. Il met les stagiaires en situation de CIP au profit des publics accompagnés par les partenaires.</p>
                          
                          <p><strong>C.C.P 3 - METTRE EN OEUVRE UNE OFFRE DE SERVICES AUPRES DES EMPLOYEURS POUR FAVORISER L'INSERTION PROFESSIONNELLE</strong> composé des compétences suivantes :</p>
                          
                          <p>• Déployer des actions de prospection dans le cadre d'un projet avec les employeurs du territoire pour favoriser l'insertion professionnelle</p>
                          <p>• Apporter un appui technique aux employeurs en matière de recrutement</p>
                          <p>• Faciliter l'intégration et le maintien du salarié dans son environnement professionnel</p>
                          <p>• Inscrire ses actes professionnels dans une démarche de développement durable et inclusive</p>
                        </div>
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
                        <div className="space-y-2 text-[#013F63] text-sm">
                          <p>• Demandeur d'emploi</p>
                          <p>• Jeune de moins de 26 ans</p>
                          <p>• Personne handicapée</p>
                          <p>• Salarié(e)</p>
                          <p>• Actif(ve) non salarié(e)</p>
                        </div>
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
                      <div className="p-3 border-t border-gray-100">
                        <div className="space-y-2 text-[#013F63] text-sm leading-relaxed">
                          <p>Admission sur dossier et sur entretien. Le candidat après avoir soumis son dossier de candidature est reçu par notre chargée de formation pour procéder à un entretien de motivation et vérifier que la formation correspond bien à ses objectifs de développement professionnel.</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Contenu de la formation */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <button
                      className="w-full py-3.5 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
                      onClick={() => toggleModule('methodes')}
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">CONTENU DE LA FORMATION</h3>
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
                          <p><strong>Prospecter les employeurs et développer des modes de collaboration sur un territoire :</strong></p>
                          <p>• Déployer des actions de prospection dans le cadre d'un projet avec les employeurs du territoire pour favoriser l'insertion professionnelle</p>
                          <p>• Apporter un appui technique aux employeurs en matière de recrutement</p>
                          <p>• Faciliter l'intégration et le maintien du salarié dans son environnement professionnel</p>
                          <p>• Inscrire ses actes professionnels dans une démarche inclusive et de développement durable</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Méthodes pédagogiques */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <button
                      className="w-full py-3.5 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
                      onClick={() => toggleModule('deroulement')}
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">MÉTHODES PÉDAGOGIQUES</h3>
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
                          <p>Bloc de compétences basé sur une pédagogie active, en lien avec le territoire. Il intègre un projet collaboratif avec employeurs, structures d'insertion et bénéficiaires, favorisant l'ancrage terrain et la mise en situation concrète.</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Suite de parcours possible */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <button
                      className="w-full py-3.5 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
                      onClick={() => toggleModule('evaluation')}
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">SUITE DE PARCOURS POSSIBLE</h3>
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
                          <p>• Chargé(e) de relations entreprises</p>
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

          {/* Le Module CCP3 */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight">
                    Le <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">programme</span> du CCP 3
                  </h2>
                  <p className="text-lg text-[#013F63] leading-relaxed font-light max-w-3xl mx-auto">
                    Formation certifiante pour devenir Conseiller en Insertion Professionnelle
                  </p>
                </div>

                <div className="space-y-4 max-w-4xl mx-auto">
                  {/* CCP3 - Prospecter les employeurs */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                        <button
                      onClick={() => toggleModule('ccp3_prospection')}
                      className="w-full bg-gradient-to-r from-[#013F63] to-[#012a4a] text-white p-4 flex items-center justify-between hover:opacity-90 transition-opacity"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">1</span>
                            </div>
                            <div className="text-left">
                          <h3 className="text-base lg:text-lg font-bold">Prospecter les employeurs et développer des modes de collaboration sur un territoire</h3>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                        {openModules['ccp3_prospection'] ? (
                              <ChevronUp className="w-6 h-6 text-white" />
                            ) : (
                              <ChevronDown className="w-6 h-6 text-white" />
                            )}
                          </div>
                        </button>
                    {openModules['ccp3_prospection'] && (
                      <div className="p-6 border-t border-gray-200 animate-in slide-in-from-top-4 duration-300">
                        <div className="grid md:grid-cols-2 gap-2">
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Les techniques de prospection</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Établir un plan de prospection</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Les techniques de négociation</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Construire un argumentaire de négociation téléphonique</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CCP3 - Méthodologie de projet */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => toggleModule('ccp3_projet')}
                      className="w-full bg-gradient-to-r from-[#013F63] to-[#012a4a] text-white p-4 flex items-center justify-between hover:opacity-90 transition-opacity"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <div className="text-left">
                          <h3 className="text-base lg:text-lg font-bold">La méthodologie de projet</h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {openModules['ccp3_projet'] ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </button>
                    {openModules['ccp3_projet'] && (
                          <div className="p-6 border-t border-gray-200 animate-in slide-in-from-top-4 duration-300">
                        <div className="grid md:grid-cols-2 gap-2">
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Formaliser un projet</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Élaborer un cahier des charges</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Intégrer les concepts du développement durable au projet</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Élaborer un plan d'action et un prévisionnel</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Évaluer et rendre compte</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CCP3 - Appui technique aux employeurs */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => toggleModule('ccp3_recrutement')}
                      className="w-full bg-gradient-to-r from-[#013F63] to-[#012a4a] text-white p-4 flex items-center justify-between hover:opacity-90 transition-opacity"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div className="text-left">
                          <h3 className="text-base lg:text-lg font-bold">Apporter un appui technique aux employeurs en matière de recrutement</h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {openModules['ccp3_recrutement'] ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </button>
                    {openModules['ccp3_recrutement'] && (
                      <div className="p-6 border-t border-gray-200 animate-in slide-in-from-top-4 duration-300">
                              <div className="grid md:grid-cols-2 gap-2">
                          <div className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Analyser les besoins</span>
                                  </div>
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Connaître les procédures de recrutement</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Proposer les différentes aides financières relatives à l'emploi et à la formation</span>
                          </div>
                        </div>
                      </div>
                    )}
                              </div>
                              
                  {/* CCP3 - Faciliter l'intégration */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => toggleModule('ccp3_integration')}
                      className="w-full bg-gradient-to-r from-[#013F63] to-[#012a4a] text-white p-4 flex items-center justify-between hover:opacity-90 transition-opacity"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">4</span>
                                </div>
                        <div className="text-left">
                          <h3 className="text-base lg:text-lg font-bold">Faciliter l'intégration du salarié dans son nouvel environnement professionnel</h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {openModules['ccp3_integration'] ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </button>
                    {openModules['ccp3_integration'] && (
                      <div className="p-6 border-t border-gray-200 animate-in slide-in-from-top-4 duration-300">
                        <div className="grid md:grid-cols-2 gap-2">
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Connaître le cadre légal de l'intégration en entreprise</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Adapter sa communication aux différents interlocuteurs</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Mettre en place un accompagnement efficace</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Utiliser les techniques de remédiation</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Réaliser un bilan professionnel</span>
                          </div>
                            </div>
                          </div>
                        )}
                      </div>
                </div>

                {/* Bouton Plaquette Informative */}
                <div className="text-center mt-12">
                  <a 
                    href="/documents/plaquettes/formation-cip-plaquette.pdf" 
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
                    Format PDF - Toutes les informations détaillées sur la formation CIP
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
                    Découvrez les secteurs et métiers accessibles après votre certification CIP
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
                        
                        {/* Secteur public */}
                        <div className="bg-blue-50 rounded-lg border border-blue-200 overflow-hidden">
                          <button
                            onClick={() => toggleSection('secteur-public')}
                            className="w-full p-3 text-left flex items-center justify-between hover:bg-blue-100 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              <span className="text-[#013F63] font-medium text-sm">Secteur public & service public</span>
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
                                Pôle emploi, collectivités locales ou territoriales, Maisons de l'emploi, plans locaux pour l'insertion et l'emploi, Missions Locales, Cap Emploi, centres d'information sur les droits des femmes et des familles...
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Économie sociale et solidaire */}
                        <div className="bg-blue-50 rounded-lg border border-blue-200 overflow-hidden">
                          <button
                            onClick={() => toggleSection('secteur-ess')}
                            className="w-full p-3 text-left flex items-center justify-between hover:bg-blue-100 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              <span className="text-[#013F63] font-medium text-sm">Économie sociale et solidaire</span>
                            </div>
                            {openSections['secteur-ess'] ? (
                              <ChevronUp className="w-4 h-4 text-blue-600" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-blue-600" />
                            )}
                          </button>
                          {openSections['secteur-ess'] && (
                            <div className="px-3 pb-3 border-t border-blue-200 bg-white">
                              <p className="text-xs text-[#013F63] leading-relaxed mt-2">
                                Structures d'insertion par l'activité économique (associations intermédiaires, ateliers et chantiers d'insertion, entreprises d'insertion, entreprises de travail temporaire d'insertion, régies de quartiers), groupement d'employeurs par l'insertion et la qualification, associations à finalité d'insertion sociale et professionnelle
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Secteur privé */}
                        <div className="bg-blue-50 rounded-lg border border-blue-200 overflow-hidden">
                          <button
                            onClick={() => toggleSection('secteur-prive')}
                            className="w-full p-3 text-left flex items-center justify-between hover:bg-blue-100 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              <span className="text-[#013F63] font-medium text-sm">Secteur privé</span>
                            </div>
                            {openSections['secteur-prive'] ? (
                              <ChevronUp className="w-4 h-4 text-blue-600" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-blue-600" />
                            )}
                          </button>
                          {openSections['secteur-prive'] && (
                            <div className="px-3 pb-3 border-t border-blue-200 bg-white">
                              <p className="text-xs text-[#013F63] leading-relaxed mt-2">
                                Entreprises de travail temporaire, organismes de formation, cabinets en ressources humaines
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Social & médico-social */}
                        <div className="bg-blue-50 rounded-lg border border-blue-200 overflow-hidden">
                          <button
                            onClick={() => toggleSection('secteur-social')}
                            className="w-full p-3 text-left flex items-center justify-between hover:bg-blue-100 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              <span className="text-[#013F63] font-medium text-sm">Social & médico-social</span>
                            </div>
                            {openSections['secteur-social'] ? (
                              <ChevronUp className="w-4 h-4 text-blue-600" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-blue-600" />
                            )}
                          </button>
                          {openSections['secteur-social'] && (
                            <div className="px-3 pb-3 border-t border-blue-200 bg-white">
                              <p className="text-xs text-[#013F63] leading-relaxed mt-2">
                                Centres d'Hébergement et de Réinsertion Sociale, résidences à caractère social, Centres d'Accueil de Demandeurs d'Asile, Établissements et services d'aide par le travail, Entreprises Adaptées
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
                          <span className="text-[#013F63] font-medium text-sm">conseiller en insertion professionnelle</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-[#013F63] font-medium text-sm">conseiller en insertion sociale et professionnelle</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-[#013F63] font-medium text-sm">conseiller en évolution professionnelle</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-[#013F63] font-medium text-sm">conseiller emploi formation</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-[#013F63] font-medium text-sm">conseiller à l'emploi</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-[#013F63] font-medium text-sm">chargé relation entreprise</span>
                        </div>
                        
                        {/* Métiers supplémentaires avec état déroulé */}
                        {openSections['metiers'] && (
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                              <span className="text-[#013F63] font-medium text-sm">chargé d'accompagnement social et professionnel</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                              <span className="text-[#013F63] font-medium text-sm">chargé de projet d'insertion professionnelle</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                              <span className="text-[#013F63] font-medium text-sm">accompagnateur socioprofessionnel</span>
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

          {/* Section Tarif et Financement */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
<span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Tarifs</span>
                  </h2>
                </div>

                {/* Section Tarifs */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  
                  {/* Financement Transition pro */}
                  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-center">
                    <div className="bg-orange-100 text-[#013F63] rounded-t-2xl -mx-6 -mt-6 p-4 mb-4 h-20 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-orange-500">Financement Transition pro</h3>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-orange-500 mb-2">10 500<span className="text-2xl">€</span></div>
                      <p className="text-sm text-[#013F63]">TTC</p>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors"
                    >
                      En savoir plus
                    </Link>
                  </div>

                  {/* Autres financements */}
                  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-center">
                    <div className="bg-blue-100 text-[#013F63] rounded-t-2xl -mx-6 -mt-6 p-4 mb-4 h-20 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-blue-600">Autres financements</h3>
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

                {/* Section Solutions de financement */}
                <div className="mb-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-4 leading-tight">
                      Comment <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">financer</span> votre formation CIP ?
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
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  >
                    J'utilise mon CPF
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          </section>

          {/* Prochaines sessions */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">

                <div className="max-w-md mx-auto mb-12">
                  {/* Session CIP 2026 */}
                  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-center">
                    <div className="bg-orange-100 text-[#013F63] rounded-t-2xl -mx-6 -mt-6 p-4 mb-4">
                      <h3 className="text-2xl font-bold mb-2 text-orange-500">Prochaine session</h3>
                      <p className="text-orange-600">Du 9 février au 23 octobre 2026</p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-lg font-bold text-[#013F63]">Ouverture des candidatures</p>
                      <p className="text-2xl font-bold text-orange-500 mt-2">30 juin 2025</p>
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
                    Les performances d'Atipik RH en formation CIP
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
                        {animatedStats[index] || '0'}
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
                    {Array.from({ length: Math.max(1, stats.length - 2) }).map((_, index) => (
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
                    Statistiques officielles nationales pour la formation CIP (données 2021)
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
                    Source : <a href="https://www.francecompetences.fr/recherche/rncp/37274/" target="_blank" rel="noopener noreferrer" className="text-[#013F63] hover:text-orange-500 underline transition-colors duration-300">France Compétences - RNCP37274</a>
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Section Se documenter - Carousel */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                    Se <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">documenter</span>
                  </h2>
                  <p className="text-lg text-[#013F63] leading-relaxed font-light max-w-3xl mx-auto">
                    Voici quelques références pour vous permettre d'en découvrir plus sur le métier de CIP
                  </p>
                </div>

                {/* Documentation - Carousel */}
                <div className="relative">
                  {/* Flèche gauche */}
                  <button
                    onClick={() => {
                      const newIndex = currentDocIndex > 0 ? currentDocIndex - 1 : Math.max(0, documentationItems.length - 2);
                      setCurrentDocIndex(newIndex);
                    }}
                    className="absolute left-0 -translate-x-8 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                    style={{ top: 'calc(50% - 40px)' }}
                  >
                    <ChevronLeft className="w-6 h-6 text-[#013F63]" />
                  </button>

                  {/* Flèche droite */}
                  <button
                    onClick={() => {
                      const newIndex = currentDocIndex < documentationItems.length - 2 ? currentDocIndex + 1 : 0;
                      setCurrentDocIndex(newIndex);
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
                      style={{ transform: `translateX(-${currentDocIndex * (isClient && isMobile ? 100 : 50)}%)` }}
                    >
                      {documentationItems.map((doc, index) => (
                        <div key={index} className="w-full md:w-1/2 flex-shrink-0 px-3">
                          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                            <div className="flex items-center gap-3 mb-6">
                              <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-blue-100' : 'bg-orange-100'} rounded-full flex items-center justify-center`}>
                                {doc.icon === 'BookOpen' && <BookOpen className="w-6 h-6 text-[#013F63]" />}
                                {doc.icon === 'GraduationCap' && <GraduationCap className={`w-6 h-6 ${index % 2 === 0 ? 'text-[#013F63]' : 'text-orange-600'}`} />}
                                {doc.icon === 'Podcast' && (
                                  <svg className="w-6 h-6 text-[#013F63]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
                                    <path d="M12 6a6 6 0 0 0-6 6 1 1 0 0 0 2 0 4 4 0 0 1 8 0v4.83a3 3 0 1 0 2 0V12a6 6 0 0 0-6-6z"/>
                                  </svg>
                                )}
                                {doc.icon === 'Play' && (
                                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                  </svg>
                                )}
                              </div>
                              <h3 className="text-xl font-bold text-[#013F63]">{doc.title} :</h3>
                            </div>
                            
                            <div className="space-y-4">
                              {doc.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex items-start gap-3">
                                  <div className="w-1.5 h-1.5 bg-[#013F63] rounded-full mt-2 flex-shrink-0"></div>
                                  <div className="text-[#013F63] text-sm leading-relaxed">
                                    {item.includes("Webinar Monkey tie") ? (
                                      <>
                                        {item.replace(" - Webinar Monkey tie", "")}{" - "}
                                        <a 
                                          href="https://webikeo.fr/webinar/competences-comportementales-quels-profils-s-epanouissent-dans-le-metier-de-conseiller-en-insertion-professionnelle"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-orange-500 hover:text-orange-600 underline transition-colors"
                                        >
                                          Webinar Monkey tie
                                        </a>
                                      </>
                                    ) : (
                                      item
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Indicateurs de position */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: Math.max(1, documentationItems.length - 1) }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentDocIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentDocIndex === index ? 'bg-orange-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
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