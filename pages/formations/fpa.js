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
  const statsRef = useRef(null)
  const franceStatsRef = useRef(null)

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
      titre: "Concevoir et préparer",
      sousTitre: "C.C.P 1",
      contenu: [
        "Analyse des besoins de formation",
        "Conception de séquences pédagogiques", 
        "Élaboration d'outils d'évaluation"
      ]
    },
    {
      id: 2,
      titre: "Animer et évaluer",
      sousTitre: "C.C.P 2",
      contenu: [
        "Animation de séances de formation",
        "Adaptation aux publics",
        "Évaluation des apprentissages"
      ]
    },
    {
      id: 3,
      titre: "Accompagner et orienter",
      sousTitre: "C.C.P 3",
      contenu: [
        "Accompagnement individuel",
        "Conseil en évolution professionnelle",
        "Orientation et parcours"
      ]
    },
    {
      id: 4,
      titre: "Accompagner les apprenants en formation",
      sousTitre: "C.C.P 4",
      contenu: [
        "Accompagner les apprenants dans leur parcours de formation",
        "Accueillir un apprenant en formation et co-construire son parcours",
        "Tutorer les apprenants à distance",
        "Accompagner le développement professionnel des apprenants"
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
                  <div className="space-y-4 text-[#013F63] italic text-lg leading-relaxed text-center">
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
                        <p className="text-blue-100 text-xs">Niveau terminal et/ou expérience professionnelle</p>
                    </div>
                </div>

                    <div className="flex items-start gap-2">
                      <Target className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-0.5 text-sm">Niveau de sortie :</p>
                        <p className="text-blue-100 text-xs">Niveau 5 - titre <a href="https://www.francecompetences.fr/recherche/rncp/37275/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline transition-colors">RNCP37275</a></p>
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
                        <p className="text-blue-100 text-xs">Entre 8 et 12 personnes</p>
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
                      <div className="p-3 border-t border-gray-100">
                        <div className="space-y-2 text-[#013F63] text-sm">
                          <p>• Une lettre motivant votre projet professionnel</p>
                          <p>• Des enquêtes métiers réalisées auprès de professionnels en poste (au minimum 2)<br/>et/ou une journée d'immersion en entreprise</p>
                          <p>• Envoie du dossier de candidature</p>
                          <p>• Un entretien de motivation</p>
                          <p>• Une évaluation des connaissances rédactionnelles</p>
                          <p className="mt-3 italic">Il est fortement recommandé de participer à une réunion d'information collective.</p>
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
                  
                  {/* Tarif Demandeurs emploi */}
                  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-center">
                    <div className="bg-orange-100 text-[#013F63] rounded-t-2xl -mx-6 -mt-6 p-4 mb-4">
                      <h3 className="text-2xl font-bold mb-2 text-orange-500">Demandeurs emploi</h3>
                      <p className="text-orange-600">Financement spécialisé</p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-orange-500 mb-2">6 500<span className="text-2xl">€</span></div>
                      <p className="text-sm text-[#013F63]">TTC</p>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors"
                    >
                      En savoir plus
                    </Link>
                  </div>

                  {/* Tarif Transition Pro */}
                  <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-center">
                    <div className="bg-blue-100 text-[#013F63] rounded-t-2xl -mx-6 -mt-6 p-4 mb-4">
                      <h3 className="text-2xl font-bold mb-2 text-blue-600">Transition Pro</h3>
                      <p className="text-blue-600">Salariés en reconversion</p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-blue-600 mb-2">8 950<span className="text-2xl">€</span></div>
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
                    
                    {/* Cartes de financement */}
                    <div className="grid md:grid-cols-3 gap-6 px-12">
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

                <div className="text-center mt-8">
                  <Link href="/financement" className="inline-flex items-center gap-2 px-6 py-3 bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                    En savoir plus sur les financements
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
                      const newIndex = currentStatIndex > 0 ? currentStatIndex - 1 : Math.max(0, stats.length - 3);
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
                      const newIndex = currentStatIndex < stats.length - 3 ? currentStatIndex + 1 : 0;
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
                      style={{ transform: `translateX(-${currentStatIndex * 33.333}%)` }}
                    >
                      {stats.map((stat, index) => (
                        <div key={index} className="w-1/3 flex-shrink-0 px-3">
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
                    Statistiques officielles nationales pour la formation FPA (données 2021)
                  </p>
                </div>

                {/* Statistiques France Compétences - Carousel */}
                <div className="relative">
                  {/* Flèche gauche */}
                  <button
                    onClick={() => {
                      const newIndex = currentFranceStatIndex > 0 ? currentFranceStatIndex - 1 : Math.max(0, franceCompetencesStats.length - 3);
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
                      const newIndex = currentFranceStatIndex < franceCompetencesStats.length - 3 ? currentFranceStatIndex + 1 : 0;
                      setCurrentFranceStatIndex(newIndex);
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
                    {Array.from({ length: Math.max(1, franceCompetencesStats.length - 2) }).map((_, index) => (
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
                          <strong>Accessibilité Handicap :</strong> Nos formations sont accessibles aux personnes en situation de handicap. 
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