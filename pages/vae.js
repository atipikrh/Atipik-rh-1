import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { 
  Users, 
  Target, 
  Calendar, 
  MapPin, 
  Euro, 
  Clock, 
  CheckCircle, 
  Mail,
  Award,
  BookOpen,
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  UserCheck,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function VAE() {
  const [openEtapes, setOpenEtapes] = useState({})
  const [currentFinancementIndex, setCurrentFinancementIndex] = useState(0)
  const [openNiveaux, setOpenNiveaux] = useState({})

  // Données des financements VAE
  const financements = [
    {
      id: 'cpf',
      logo: '/images/financements/cpf.jpg',
      titre: 'Compte Personnel de Formation (CPF)',
      description: 'Pour tous les actifs',
      logoWidth: 60,
      logoHeight: 60
    },
    {
      id: 'plan',
      logo: '/images/financements/logo entreprise.jpg',
      titre: 'Plan de développement des compétences',
      description: 'Entreprise',
      logoWidth: 60,
      logoHeight: 60
    },
    {
      id: 'opco',
      logo: '/images/financements/logo-opco.webp',
      titre: 'OPCO',
      description: 'Salariés',
      logoWidth: 60,
      logoHeight: 60
    },
    {
      id: 'franceTravail',
      logo: '/images/financements/Bloc_Marque_RF_France_Travail_CMJN_Horizontal_Coul_Positif.jpg',
      titre: 'France Travail',
      description: 'Demandeurs d\'emploi',
      logoWidth: 60,
      logoHeight: 40
    },
    {
      id: 'congeVae',
      logo: null,
      titre: 'Congé VAE',
      description: 'Salariés',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      text: 'Congé\nVAE'
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
  const [currentStatIndex, setCurrentStatIndex] = useState(0)
  const [animatedStats, setAnimatedStats] = useState({})
  const [hasAnimatedStats, setHasAnimatedStats] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const statsRef = useRef(null)
  const accordeonsRef = useRef(null)
  const carteBleueRef = useRef(null)

  const toggleEtape = (etapeId) => {
    setOpenEtapes(prev => ({
      ...prev,
      [etapeId]: !prev[etapeId]
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

  // Synchroniser la hauteur de la carte bleue avec les accordéons fermés
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

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isClient])

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
          statistiques.forEach((stat, index) => {
            setTimeout(() => {
              if (stat.valeur === "98%") {
                animateCounter(0, 98, 2000, (current) => {
                  setAnimatedStats(prev => ({
                    ...prev,
                    [index]: `${current}%`
                  }))
                })
              } else if (stat.valeur === "95%") {
                animateCounter(0, 95, 2000, (current) => {
                  setAnimatedStats(prev => ({
                    ...prev,
                    [index]: `${current}%`
                  }))
                })
              } else if (stat.valeur === "100%") {
                animateCounter(0, 100, 2000, (current) => {
                  setAnimatedStats(prev => ({
                    ...prev,
                    [index]: `${current}%`
                  }))
                })
              } else {
                const numericValue = parseInt(stat.valeur.replace(/[^\d]/g, ''))
                if (!isNaN(numericValue)) {
                  animateCounter(0, numericValue, 2000, (current) => {
                    setAnimatedStats(prev => ({
                      ...prev,
                      [index]: stat.valeur.includes('%') ? `${current}%` : current.toString()
                    }))
                  })
                } else {
                  setAnimatedStats(prev => ({
                    ...prev,
                    [index]: stat.valeur
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

  const toggleNiveau = (domaineId, niveau) => {
    const key = `${domaineId}-${niveau}`
    setOpenNiveaux(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const nextStat = () => {
    const maxIndex = isClient && isMobile 
      ? statistiques.length - 1 
      : Math.max(0, statistiques.length - 3);
    setCurrentStatIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevStat = () => {
    setCurrentStatIndex((prev) => Math.max(prev - 1, 0))
  }

  const statistiques = [
    {
      id: 1,
      valeur: "2",
      description: "Nombre de VAE réalisées"
    },
    {
      id: 2,
      valeur: "100%",
      description: "Taux de présentation à l'entretien"
    },
    {
      id: 3,
      valeur: "2",
      description: "Validation partielle ou totale"
    },
    {
      id: 4,
      valeur: "100%",
      description: "Taux de satisfaction"
    },
    {
      id: 5,
      valeur: "À venir",
      description: "Taux d'insertion globale à 6 mois"
    },
    {
      id: 6,
      valeur: "À venir",
      description: "Taux d'insertion dans le métier visé à 6 mois"
    },
    {
      id: 7,
      valeur: "À venir",
      description: "Taux d'insertion dans le métier visé à 2 ans"
    }
  ]

  const etapesAccompagnement = [
    {
      id: 1,
      titre: "Accueil et contractualisation",
      sousTitre: "Définir votre projet VAE",
      duree: "Étape préliminaire",
      objectifs: [
        "Faire le point avec le candidat sur ses attentes, sa compréhension de la démarche VAE",
        "Présenter la procédure de validation de la certification visée",
        "Faire une présentation commentée du référentiel professionnel de la certification visée",
        "Contractualiser le travail coopératif avec le candidat dans une convention ou contrat d'accompagnement",
        "Concevoir un rétroplanning jusqu'à l'envoi du dossier finalisé aux certificateurs"
      ],
      contenu: [
        "Analyse des motivations et du projet professionnel",
        "Présentation détaillée du processus VAE",
        "Étude du référentiel de certification",
        "Définition du planning personnalisé"
      ]
    },
    {
      id: 2,
      titre: "Élaboration du dossier de faisabilité",
      sousTitre: "Identifier vos compétences acquises",
      duree: "Phase d'analyse",
      objectifs: [
        "Explorer les expériences du candidat (exploration du CV)",
        "Croiser les expériences du candidat avec le référentiel de la certification visée et lui fournir un avis sur ce diagnostic",
        "Le dossier de faisabilité est transmis au certificateur afin d'évaluer la pertinence du projet et de statuer sur la recevabilité de la demande de VAE"
      ],
      contenu: [
        "Analyse approfondie du parcours professionnel",
        "Cartographie des compétences acquises",
        "Mise en correspondance avec le référentiel",
        "Sélection des expériences les plus pertinentes"
      ]
    },
    {
      id: 3,
      titre: "Élaboration du dossier de validation",
      sousTitre: "Construire votre dossier professionnel",
      duree: "Phase de rédaction intensive",
      objectifs: [
        "Explicitation d'une première expérience décrite par le candidat pour rédiger la trame de la première activité",
        "Co-lecture de l'activité rédigée / conseils et annotations de l'accompagnateur (relecture des travaux en intersession par l'accompagnateur)",
        "Explications des autres activités significatives retenues (description, analyse)",
        "Co-lecture de l'activité rédigée / conseils et annotations de l'accompagnateur (relecture des travaux en intersession par l'accompagnateur)"
      ],
      contenu: [
        "Rédaction guidée des activités professionnelles",
        "Analyse des situations de travail",
        "Description détaillée des compétences mises en œuvre",
        "Relecture et amélioration du dossier"
      ],
      note: "Tout au long de l'accompagnement, la validation des travaux et la vérification de l'adéquation du récit décrit au référentiel de la certification visée sont réalisées"
    },
    {
      id: 4,
      titre: "Préparation à l'entretien devant le jury",
      sousTitre: "Se préparer à la soutenance",
      duree: "Phase de préparation finale",
      objectifs: [
        "Aider à la construction d'un argumentaire",
        "Simuler sa présentation devant le jury"
      ],
      contenu: [
        "Construction de l'argumentaire de soutenance",
        "Simulation d'entretien avec mise en situation",
        "Préparation aux questions du jury",
        "Techniques de présentation et gestion du stress"
      ]
    },
    {
      id: 5,
      titre: "Entretien post jury",
      sousTitre: "Accompagnement après la décision",
      duree: "Suivi personnalisé",
      objectifs: [
        "Aider à la compréhension du Procès-Verbal ou relevé de décisions et définition du parcours post-jury en cas de validation partielle ou de non-validation (identification d'autres expériences professionnelles ou modules de formation)"
      ],
      contenu: [
        "Analyse des résultats du jury",
        "Définition des actions complémentaires si nécessaire",
        "Orientation vers la formation ou l'expérience manquante",
        "Accompagnement à la formalisation du projet"
      ]
    }
  ]

  const domainesCertification = [
    {
      id: 1,
      titre: "Personnel paramédical",
        niveau4: [
          { code: "35830", nom: "Diplôme d'État Aide-soignant (DEAS)" },
          { code: "35832", nom: "Diplôme d'État Auxiliaire de puériculture (DEAP)" }
        ]
    },
    {
      id: 2,
      titre: "Action sociale",
        niveau3: [
          { code: "37424", nom: "Maître de maison en secteur social et médico-social" },
          { code: "36360", nom: "CQP Surveillant de nuit en secteur social, médico-social et sanitaire" },
          { code: "37722", nom: "TP Agent de médiation, information, services" },
          { code: "36004", nom: "DE Accompagnant éducatif et social" },
          { code: "38565", nom: "CAP Accompagnant éducatif petite enfance" },
          { code: "39387", nom: "Auxiliaire de vie" },
        { code: "37568", nom: "C5 Aide à domicile" },
          { code: "37715", nom: "TP Assistant de vie aux familles – ADVF" }
        ],
        niveau4: [
          { code: "36241", nom: "TP Médiateur social accès aux droits et services" },
          { code: "37231", nom: "Bac Pro Accompagnement, soins et services à la personne" },
          { code: "36788", nom: "Bac Pro Services aux personnes et territoires – SAPAT" },
          { code: "39099", nom: "Moniteur d'atelier en milieu de travail protégé" },
          { code: "39643", nom: "DE Moniteur éducateur" },
          { code: "39794", nom: "TP Encadrant technique d'insertion" },
          { code: "37511", nom: "Animateur en gérontologie" },
          { code: "39680", nom: "Diplôme d'État Technicien de l'intervention sociale et familiale – DETISF" }
        ],
        niveau5: [
          { code: "40695", nom: "TP Médiateur numérique" },
        { code: "40695", nom: "BTS Économie sociale familiale" }
        ]
    },
    {
      id: 3,
      titre: "Ingénierie formation pédagogie",
        niveau4: [
          { code: "39794", nom: "TP Encadrant technique d'insertion" }
        ],
        niveau5: [
          { code: "37274", nom: "TP Conseiller en insertion professionnelle – CIP" },
          { code: "37275", nom: "TP Formateur professionnel d'adultes" },
          { code: "40695", nom: "TP Médiateur numérique" }
        ]
    }
  ]

  return (
    <>
      <Head>
        <title>VAE - Validation des Acquis de l'Expérience | Atipik RH</title>
        <meta name="description" content="Accompagnement VAE personnalisé pour valoriser votre expérience professionnelle et obtenir une certification reconnue." />
        <meta name="keywords" content="VAE, validation acquis expérience, certification professionnelle, accompagnement VAE, Bordeaux" />
      </Head>

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
        {/* Background animé global */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse animation-delay-3000"></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-4000"></div>

        <div className="relative z-10">
          <Header isFixed={true} />
          
          {/* Spacer for fixed header */}
          <div className="h-20"></div>

          {/* Hero Section */}
        <section className="pt-20 pb-12">
            <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-2xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight tracking-tight text-center">
                Accompagnement <span className="font-brittany text-3xl lg:text-5xl text-orange-500">VAE</span>
                </h1>
              <p className="text-lg text-[#013F63] leading-relaxed font-light max-w-3xl mx-auto">
                Valorisez votre expérience professionnelle et obtenez une certification reconnue
                </p>
              </div>
          </div>
        </section>

        {/* Section Contexte - Style carte */}
        <section className="py-2">
            <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#013F63]">
                <div className="space-y-4 text-[#013F63] text-lg leading-relaxed text-center">
                  <p>
                    Dans un contexte de valorisation de l'expérience professionnelle et de reconnaissance des compétences, la VAE (Validation des Acquis de l'Expérience) représente une opportunité unique pour transformer votre parcours en certification officielle. Un accompagnement structuré maximise vos chances de réussite et vous guide dans cette démarche administrative et personnelle complexe.
                  </p>
                </div>
                
                <div className="flex items-center justify-center my-6">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                </div>
                
                <div className="text-orange-500 font-bold text-xl leading-relaxed text-center">
                  <p>
                    La VAE constitue un outil de valorisation de l'expérience, qui transforme votre parcours en certification officielle !
                  </p>
                </div>
              </div>
              </div>
            </div>
          </section>

        {/* Section Programme de Formation */}
        <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
              
              {/* Titre de section */}
              <div className="text-center mb-8">
                <h2 className="text-lg lg:text-xl font-bold text-[#013F63] mb-6">
                  LE PROGRAMME D'ACCOMPAGNEMENT
                  </h2>
                </div>

              <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
                
                {/* Carte bleue à gauche */}
                <div ref={carteBleueRef} className="w-full lg:w-96 flex-shrink-0 rounded-xl p-6 text-white flex flex-col" style={{backgroundColor: '#013F63'}}>
                  <div className="space-y-3 flex-grow flex flex-col justify-between">
                    
                    <div className="flex items-start gap-2">
                      <UserCheck className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-0.5 text-base">Niveau d'entrée :</p>
                        <p className="text-blue-100 text-sm">Aucun diplôme requis</p>
                    </div>
                </div>

                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="font-semibold mb-0.5 text-base">Lieu :</p>
                        <p className="text-blue-100 text-sm">8 Rue du Courant, 33310 Lormont</p>
                      </div>
                  </div>
                  
                    <div className="flex items-start gap-2">
                      <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                        <p className="font-semibold mb-0.5 text-base">Durée :</p>
                        <div className="text-blue-100 text-sm space-y-1.5">
                          <p>
                            <span className="font-semibold text-white">30 heures au total</span>
                          </p>
                          <p className="text-blue-200/90 text-xs pt-0.5">
                            (hors dossier de faisabilité et acte formatif type SST ou AFGSU)
                          </p>
                          <p>
                            Réparties sur <span className="font-semibold text-white">6 à 18 mois</span>
                          </p>
                          <p className="text-blue-200/90 text-xs pt-0.5">
                            De l'inscription sur la plateforme France VAE jusqu'à l'entretien post jury
                          </p>
                        </div>
                    </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="font-semibold mb-0.5 text-base">Modalité :</p>
                        <p className="text-blue-100 text-sm">Présentiel</p>
                  </div>
                      </div>
                    </div>
                  </div>
                  
                {/* Accordéons à droite */}
                <div ref={accordeonsRef} className="w-full lg:w-96 flex-shrink-0 space-y-4">
                  
                  {/* PUBLIC VISÉ */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                      onClick={() => toggleEtape('public')}
                      className="w-full p-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">PUBLIC VISÉ</h3>
                          </div>
                      {openEtapes['public'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                          ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                          )}
                      </button>
                    {openEtapes['public'] && (
                      <div className="p-4 border-t border-gray-100">
                        <p className="text-[#013F63] text-sm leading-relaxed">
                          Notre accompagnement VAE s'adresse à toute personne souhaitant faire reconnaître son expérience par un diplôme, un titre ou un certificat de qualification professionnelle : salariés du secteur privé, demandeurs d'emploi, travailleurs indépendants, bénévoles, volontaires et proches aidants.
                        </p>
                              </div>
                            )}
            </div>

                  {/* PRÉREQUIS */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleEtape('prerequis')}
                      className="w-full p-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">PRÉREQUIS</h3>
                              </div>
                      {openEtapes['prerequis'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openEtapes['prerequis'] && (
                      <div className="p-4 border-t border-gray-100">
                        <p className="text-[#013F63] text-sm leading-relaxed mb-2">
                          Justifier d'au moins une expérience significative (salariée, non salariée, bénévole, volontaire ou extra-professionnelle) en lien direct avec la certification visée.
                        </p>
                        <p className="text-[#013F63] text-sm leading-relaxed">
                          La VAE est accessible sans exigence de durée minimale d'expérience.
                        </p>
                              </div>
                            )}
                          </div>

                  {/* MODALITÉS ET DÉLAIS D'ACCÈS */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleEtape('modalites')}
                      className="w-full p-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">MODALITÉS ET DÉLAIS D'ACCÈS</h3>
                              </div>
                      {openEtapes['modalites'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openEtapes['modalites'] && (
                      <div className="p-6 border-t border-gray-100 bg-gradient-to-br from-blue-50/50 to-orange-50/30">
                        <div className="space-y-5">
                          <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-[#013F63]">
                            <p className="text-[#013F63] text-sm leading-relaxed font-medium">
                              Un premier entretien d'accueil et d'analyse de la demande.
                            </p>
                          </div>
                          <p className="text-[#013F63] text-sm leading-relaxed font-medium">
                            Selon le type de financement choisi, il y aura certaines durées d'accès à prendre en compte.
                          </p>
                          <div className="grid gap-3 mt-5">
                            <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-500">
                              <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200 p-1.5">
                                  <Image 
                                    src="/images/financements/cpf.jpg" 
                                    alt="CPF" 
                                    width={40} 
                                    height={40}
                                    className="object-contain rounded"
                                  />
                                </div>
                                <div className="flex-1">
                                  <p className="font-semibold text-[#013F63] mb-1">Via le CPF</p>
                                  <p className="text-[#013F63] text-sm leading-relaxed">Pensez à la période de rétractation de 11 jours calendaires.</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-400">
                              <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200 p-1.5">
                                  <Image 
                                    src="/images/financements/logo-opco.webp" 
                                    alt="OPCO" 
                                    width={40} 
                                    height={40}
                                    className="object-contain rounded"
                                  />
                                </div>
                                <div className="flex-1">
                                  <p className="font-semibold text-[#013F63] mb-1">Via l'OPCO</p>
                                  <p className="text-[#013F63] text-sm leading-relaxed">Il faut prévoir un délai de traitement du dossier d'environ 2 mois.</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#013F63]">
                              <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200 p-1.5">
                                  <Image 
                                    src="/images/financements/logo entreprise.jpg" 
                                    alt="Employeur" 
                                    width={40} 
                                    height={40}
                                    className="object-contain rounded"
                                  />
                                </div>
                                <div className="flex-1">
                                  <p className="font-semibold text-[#013F63] mb-1">Via l'employeur ou sur fonds personnels</p>
                                  <p className="text-[#013F63] text-sm leading-relaxed">Le démarrage est possible dès la signature du devis.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      )}
                    </div>

                  {/* OBJECTIFS */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleEtape('objectifs')}
                      className="w-full p-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">OBJECTIFS</h3>
                      </div>
                      {openEtapes['objectifs'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openEtapes['objectifs'] && (
                      <div className="p-4 border-t border-gray-100">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3 p-3 border-l-2 border-[#013F63] bg-blue-50/30 rounded-r-lg">
                            <div className="w-5 h-5 rounded-full bg-[#013F63] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs font-bold">1</span>
                            </div>
                            <p className="text-sm text-[#013F63] leading-relaxed">
                              Apporter une aide méthodologique pour rédiger tout ou partie des livrables de preuves du diplôme visé.
                            </p>
                          </div>
                          <div className="flex items-start gap-3 p-3 border-l-2 border-orange-500 bg-orange-50/30 rounded-r-lg">
                            <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs font-bold">2</span>
                            </div>
                            <p className="text-sm text-[#013F63] leading-relaxed">
                              Préparer l'oral devant le jury pour valider le diplôme dans la spécialité visée.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* MÉTHODES PÉDAGOGIQUES */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleEtape('methodes')}
                      className="w-full p-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">MÉTHODES PÉDAGOGIQUES</h3>
                      </div>
                      {openEtapes['methodes'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openEtapes['methodes'] && (
                      <div className="p-4 border-t border-gray-100">
                        <div className="space-y-3">
                          {/* Entretiens individuels */}
                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#013F63] to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                            <div className="relative bg-white rounded-xl p-4 border-2 border-transparent group-hover:border-orange-200 transition-all duration-300">
                              <div className="flex items-start gap-3">
                                <div className="relative">
                                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#013F63] via-[#013F63] to-[#012a4a] flex items-center justify-center shadow-md transform group-hover:rotate-3 group-hover:scale-105 transition-all duration-300">
                                    <Users className="w-6 h-6 text-white" />
                                  </div>
                                  <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></div>
                                </div>
                                <div className="flex-1 pt-0.5">
                                  <h4 className="font-bold text-base text-[#013F63] mb-2 group-hover:text-orange-600 transition-colors">
                                    Entretiens individuels
                                  </h4>
                                  <div className="h-0.5 w-10 bg-gradient-to-r from-[#013F63] to-orange-500 rounded-full mb-2"></div>
                                  <p className="text-[#013F63] text-xs leading-relaxed">
                                    Questions d'explicitation pour vous aider à détailler et clarifier vos pensées, émotions et expériences en répondant à des questions ouvertes
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Groupe des dossiers - Regroupés visuellement */}
                          <div className="relative border-l-4 border-orange-400 pl-4 space-y-3">
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-[#013F63] to-orange-400 opacity-30"></div>
                            
                            {/* Dossier de faisabilité */}
                            <div className="relative group">
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-[#013F63] rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                              <div className="relative bg-white rounded-xl p-4 border-2 border-transparent group-hover:border-[#013F63]/30 transition-all duration-300">
                                <div className="flex items-start gap-3">
                                  <div className="relative">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600 flex items-center justify-center shadow-md transform group-hover:-rotate-3 group-hover:scale-105 transition-all duration-300">
                                      <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#013F63] rounded-full border-2 border-white"></div>
                                  </div>
                                  <div className="flex-1 pt-0.5">
                                    <h4 className="font-bold text-base text-[#013F63] mb-2 group-hover:text-orange-600 transition-colors">
                                      Dossier de faisabilité
                                    </h4>
                                    <div className="h-0.5 w-10 bg-gradient-to-r from-orange-500 to-[#013F63] rounded-full mb-2"></div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Dossier de validation */}
                            <div className="relative group">
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#013F63] to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                              <div className="relative bg-white rounded-xl p-4 border-2 border-transparent group-hover:border-orange-200 transition-all duration-300">
                                <div className="flex items-start gap-3">
                                  <div className="relative">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#013F63] via-[#013F63] to-[#012a4a] flex items-center justify-center shadow-md transform group-hover:rotate-3 group-hover:scale-105 transition-all duration-300">
                                      <BookOpen className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></div>
                                  </div>
                                  <div className="flex-1 pt-0.5">
                                    <h4 className="font-bold text-base text-[#013F63] mb-2 group-hover:text-orange-600 transition-colors">
                                      Dossier de validation
                                    </h4>
                                    <div className="h-0.5 w-10 bg-gradient-to-r from-[#013F63] to-orange-500 rounded-full mb-2"></div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Référentiel de certification */}
                            <div className="relative group">
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-[#013F63] rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                              <div className="relative bg-white rounded-xl p-4 border-2 border-transparent group-hover:border-[#013F63]/30 transition-all duration-300">
                                <div className="flex items-start gap-3">
                                  <div className="relative">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600 flex items-center justify-center shadow-md transform group-hover:-rotate-3 group-hover:scale-105 transition-all duration-300">
                                      <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#013F63] rounded-full border-2 border-white"></div>
                                  </div>
                                  <div className="flex-1 pt-0.5">
                                    <h4 className="font-bold text-base text-[#013F63] mb-2 group-hover:text-orange-600 transition-colors">
                                      Référentiel de certification
                                    </h4>
                                    <div className="h-0.5 w-10 bg-gradient-to-r from-orange-500 to-[#013F63] rounded-full mb-2"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Travail personnel */}
                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#013F63] to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                            <div className="relative bg-white rounded-xl p-4 border-2 border-transparent group-hover:border-orange-200 transition-all duration-300">
                              <div className="flex items-start gap-3">
                                <div className="relative">
                                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#013F63] via-[#013F63] to-[#012a4a] flex items-center justify-center shadow-md transform group-hover:rotate-3 group-hover:scale-105 transition-all duration-300">
                                    <UserCheck className="w-6 h-6 text-white" />
                                  </div>
                                  <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></div>
                                </div>
                                <div className="flex-1 pt-0.5">
                                  <h4 className="font-bold text-base text-[#013F63] mb-2 group-hover:text-orange-600 transition-colors">
                                    Travail personnel du candidat
                                  </h4>
                                  <div className="h-0.5 w-10 bg-gradient-to-r from-[#013F63] to-orange-500 rounded-full mb-2"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* MODALITÉS DE SUIVI */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleEtape('suivi')}
                      className="w-full p-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">MODALITÉS DE SUIVI</h3>
                      </div>
                      {openEtapes['suivi'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openEtapes['suivi'] && (
                      <div className="p-4 border-t border-gray-100">
                        <div className="space-y-4">
                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#013F63] to-orange-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
                            <div className="relative bg-gradient-to-br from-blue-50/30 via-white to-orange-50/30 rounded-xl p-5 border-l-4 border-orange-500">
                              <div className="flex items-start gap-4">
                                <div className="relative flex-shrink-0">
                                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                                    <CheckCircle className="w-6 h-6 text-white" />
                                  </div>
                                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#013F63] rounded-full border-2 border-white flex items-center justify-center">
                                    <Clock className="w-3 h-3 text-white" />
                                  </div>
                                </div>
                                <div className="flex-1 pt-1">
                                  <p className="text-[#013F63] text-sm leading-relaxed font-medium">
                                    Tout au long de l'accompagnement, l'architecte accompagnateur VAE transmet à chaque séance des activités validées et/ou à suivre par le candidat.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-[#013F63] rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
                            <div className="relative bg-gradient-to-br from-blue-50/30 via-white to-orange-50/30 rounded-xl p-5 border-l-4 border-[#013F63]">
                              <div className="flex items-center gap-4">
                                <div className="relative flex-shrink-0">
                                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#013F63] to-[#012a4a] flex items-center justify-center shadow-lg">
                                    <Users className="w-6 h-6 text-white" />
                                  </div>
                                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                                    <CheckCircle className="w-3 h-3 text-white" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <p className="text-[#013F63] text-sm leading-relaxed font-medium">
                                    Entretien post jury
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* MODALITÉ DE VALIDATION */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleEtape('validation')}
                      className="w-full p-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">MODALITÉ DE VALIDATION</h3>
                      </div>
                      {openEtapes['validation'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openEtapes['validation'] && (
                      <div className="p-4 border-t border-gray-100">
                        <p className="text-sm leading-relaxed text-[#013F63] mb-4">
                          Dans le cadre d'une démarche de Validation des Acquis de l'Expérience (VAE), l'obtention du titre, diplôme ou de la certification visée dépend de la validation des blocs de compétences qui la composent. À l'issue de votre passage devant le jury, trois décisions sont possibles :
                        </p>
                        <div className="space-y-3">
                          {/* Validation totale */}
                          <div className="flex items-start gap-3 p-3 border-l-2 border-[#013F63] bg-blue-50/30 rounded-r-lg">
                            <div className="w-5 h-5 rounded-full bg-[#013F63] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs">✓</span>
                            </div>
                            <div>
                              <h5 className="font-bold text-[#013F63] mb-1 text-sm">Validation totale</h5>
                              <p className="text-xs text-[#013F63] leading-relaxed">
                                Vous obtenez la certification complète lorsque l'ensemble des blocs de compétences est validé par le jury.
                              </p>
                            </div>
                          </div>

                          {/* Validation partielle */}
                          <div className="flex items-start gap-3 p-3 border-l-2 border-orange-500 bg-orange-50/30 rounded-r-lg">
                            <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs">!</span>
                            </div>
                            <div>
                              <h5 className="font-bold text-[#013F63] mb-1 text-sm">Validation partielle</h5>
                              <p className="text-xs text-[#013F63] leading-relaxed mb-2">
                                Le jury peut valider seulement certains blocs de compétences.
                              </p>
                              <p className="text-xs text-[#013F63] leading-relaxed mb-2">
                                Les blocs validés sont acquis définitivement.
                              </p>
                              <p className="text-xs text-[#013F63] leading-relaxed">
                                Vous pourrez compléter votre parcours ultérieurement : par une nouvelle expérience, un accompagnement ou une action de formation ciblée ; afin de représenter uniquement les blocs manquants pour obtenir la certification complète.
                              </p>
                            </div>
                          </div>

                          {/* Non-validation */}
                          <div className="flex items-start gap-3 p-3 border-l-2 border-[#013F63] bg-blue-50/30 rounded-r-lg">
                            <div className="w-5 h-5 rounded-full bg-[#013F63] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs">×</span>
                            </div>
                            <div>
                              <h5 className="font-bold text-[#013F63] mb-1 text-sm">Non-validation</h5>
                              <p className="text-xs text-[#013F63] leading-relaxed">
                                Si aucun bloc de compétences n'est validé, la VAE n'est pas accordée.
                              </p>
                              <p className="text-xs text-[#013F63] leading-relaxed mt-1">
                                Vous devrez alors renforcer votre expérience ou suivre des actions complémentaires avant de pouvoir présenter une nouvelle demande de VAE.
                              </p>
                            </div>
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

        {/* Section Certifications proposées */}
        <section className="py-16">
            <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4">
                  Les certifications que nous <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">proposons</span>
                  </h2>
                <p className="text-lg text-[#013F63] leading-relaxed font-light max-w-3xl mx-auto">
                  Nous proposons un accompagnement uniquement cette sélection de certifications :
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {domainesCertification.map((domaine, index) => (
                  <div key={domaine.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    
                    {/* Header du domaine */}
                    <div className="bg-blue-100 text-[#013F63] p-4 text-center">
                      <h3 className="text-lg font-bold">{domaine.titre}</h3>
                    </div>

                    <div className="p-4">
                      
                      {/* Niveau 3 */}
                      {domaine.niveau3 && domaine.niveau3.length > 0 && (
                        <div className="mb-4">
                          <button
                            onClick={() => toggleNiveau(domaine.id, 'niveau3')}
                            className="w-full bg-orange-50 rounded-lg p-2 mb-2 hover:bg-orange-100 transition-colors flex items-center justify-between"
                          >
                            <h4 className="text-xs font-bold text-orange-600 uppercase tracking-wide">
                              Niveau 3 (CAP & BEP)
                            </h4>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-orange-600 font-medium">
                                {domaine.niveau3.length} certification{domaine.niveau3.length > 1 ? 's' : ''}
                              </span>
                              {openNiveaux[`${domaine.id}-niveau3`] ? (
                                <ChevronUp className="w-4 h-4 text-orange-600" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-orange-600" />
                              )}
                            </div>
                          </button>
                          {openNiveaux[`${domaine.id}-niveau3`] && (
                            <div className="space-y-1">
                              {domaine.niveau3.map((cert, i) => (
                                <div key={i} className="flex items-start gap-2 p-1 rounded hover:bg-gray-50 transition-colors">
                                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                  <div>
                                    <span className="text-[#013F63] font-semibold text-xs block">{cert.code}</span>
                                    <span className="text-[#013F63] text-xs">{cert.nom}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Niveau 4 */}
                      {domaine.niveau4 && domaine.niveau4.length > 0 && (
                        <div className="mb-4">
                          <button
                            onClick={() => toggleNiveau(domaine.id, 'niveau4')}
                            className="w-full bg-blue-50 rounded-lg p-2 mb-2 hover:bg-blue-100 transition-colors flex items-center justify-between"
                          >
                            <h4 className="text-xs font-bold text-[#013F63] uppercase tracking-wide">
                              Niveau 4 (BAC / BAC PRO)
                            </h4>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-[#013F63] font-medium">
                                {domaine.niveau4.length} certification{domaine.niveau4.length > 1 ? 's' : ''}
                              </span>
                              {openNiveaux[`${domaine.id}-niveau4`] ? (
                                <ChevronUp className="w-4 h-4 text-[#013F63]" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-[#013F63]" />
                              )}
                            </div>
                          </button>
                          {openNiveaux[`${domaine.id}-niveau4`] && (
                            <div className="space-y-1">
                              {domaine.niveau4.map((cert, i) => (
                                <div key={i} className="flex items-start gap-2 p-1 rounded hover:bg-gray-50 transition-colors">
                                  <div className="w-1.5 h-1.5 bg-[#013F63] rounded-full mt-1.5 flex-shrink-0"></div>
                                  <div>
                                    <span className="text-[#013F63] font-semibold text-xs block">{cert.code}</span>
                                    <span className="text-[#013F63] text-xs">{cert.nom}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Niveau 5 */}
                      {domaine.niveau5 && domaine.niveau5.length > 0 && (
                        <div>
                          <button
                            onClick={() => toggleNiveau(domaine.id, 'niveau5')}
                            className="w-full bg-[#013F63] text-white rounded-lg p-2 mb-2 hover:bg-[#012a4a] transition-colors flex items-center justify-between"
                          >
                            <h4 className="text-xs font-bold uppercase tracking-wide">
                              Niveau 5 (BTS, DUT, Titre Pro...)
                            </h4>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-medium">
                                {domaine.niveau5.length} certification{domaine.niveau5.length > 1 ? 's' : ''}
                              </span>
                              {openNiveaux[`${domaine.id}-niveau5`] ? (
                                <ChevronUp className="w-4 h-4 text-white" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-white" />
                              )}
                            </div>
                          </button>
                          {openNiveaux[`${domaine.id}-niveau5`] && (
                            <div className="space-y-1">
                              {domaine.niveau5.map((cert, i) => (
                                <div key={i} className="flex items-start gap-2 p-1 rounded hover:bg-gray-50 transition-colors">
                                  <div className="w-1.5 h-1.5 bg-[#013F63] rounded-full mt-1.5 flex-shrink-0"></div>
                                  <div>
                                    <span className="text-[#013F63] font-semibold text-xs block">{cert.code}</span>
                                    <span className="text-[#013F63] text-xs">{cert.nom}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Footer avec compteur */}
                    <div className="bg-gray-50 px-4 py-2 border-t border-gray-100 mt-auto">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#013F63]">
                          {(domaine.niveau3?.length || 0) + (domaine.niveau4?.length || 0) + (domaine.niveau5?.length || 0)} certifications
                        </span>
                        <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-[#013F63]">{index + 1}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to action */}
              <div className="text-center mt-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                  <h3 className="text-xl font-bold text-[#013F63] mb-4">
                    Votre certification n'apparaît pas dans cette liste ?
                  </h3>
                  <p className="text-[#013F63] mb-6">
                    Contactez-nous pour étudier ensemble la faisabilité de votre projet VAE.<br/>
                    Nous vous orientons vers les solutions les plus adaptées.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold rounded-full transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Nous contacter
                    </Link>
                    <a
                      href="https://vae.gouv.fr/espace-candidat/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold rounded-full transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Rechercher sur France VAE
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        {/* Section Étapes de l'accompagnement */}
        <section className="py-16" id="etapes">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                  Les étapes de notre <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">accompagnement</span>
                </h2>
                <p className="text-lg text-[#013F63] leading-relaxed font-light max-w-3xl mx-auto">
                  Un parcours structuré en 5 étapes pour maximiser vos chances de réussite
                </p>
              </div>

              <div className="space-y-4 max-w-4xl mx-auto">
                {etapesAccompagnement.map((etape, index) => {
                  const isOpen = openEtapes[etape.id]
                  const gradientFrom = "from-[#013F63]"
                  const gradientTo = "to-[#012a4a]"
                  
                  return (
                    <div key={etape.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                      
                      {/* En-tête cliquable */}
                    <button
                        onClick={() => toggleEtape(etape.id)}
                        className={`w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white p-4 flex items-center justify-between hover:opacity-90 transition-opacity`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{etape.id}</span>
                          </div>
                          <div className="text-left">
                            <h3 className="text-base lg:text-lg font-bold">{etape.titre}</h3>
                            <p className="text-white/90 text-sm">{etape.sousTitre}</p>
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
                          
                          {/* Objectifs */}
                          <div className="mb-6">
                            <div className="space-y-2">
                              {etape.objectifs.map((objectif, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm">
                                  <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-[#013F63]">{objectif}</span>
                  </div>
                ))}
                            </div>
                          </div>



                          {/* Note spéciale */}
                          {etape.note && etape.id !== 3 && (
                            <div className="border-t border-gray-100 pt-4">
                              <h4 className="text-sm font-bold text-[#013F63] mb-3 flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Information importante
                              </h4>
                              <div className="flex items-center gap-2 text-sm text-[#013F63]">
                                <CheckCircle className="w-3 h-3 text-orange-500 flex-shrink-0" />
                                {etape.note}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
              </div>
            </div>
          </section>

        {/* Section Nos 2 formules */}
        <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4">
                  Nos <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">2 formules</span>
                  </h2>
                </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                  
                  {/* Niveau 3 et 4 */}
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-center">
                  <div className="bg-orange-100 text-[#013F63] rounded-t-2xl -mx-6 -mt-6 p-4 mb-4">
                    <h3 className="text-2xl font-bold mb-2 text-orange-500">Niveau 3 et 4</h3>
                    <p className="text-orange-600">CAP - BEP - BAC - TITRE PROFESSIONNEL</p>
                    </div>
                    
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-orange-500 mb-2">2 300<span className="text-2xl">€</span></div>
                    <p className="text-sm text-[#013F63]">(sans frais d'acte formatif, frais de certificateur et frais de jurys)</p>
                        </div>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-[#013F63]" />
                    <span className="text-[#013F63] font-medium">Jusqu'à 30 heures de face à face</span>
                      </div>
                      
                        <Link
                          href="/contact"
                    className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors"
                        >
                          Parlons-en
                        </Link>
                  </div>

                  {/* Niveau 5 */}
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-center">
                  <div className="bg-blue-100 text-[#013F63] rounded-t-2xl -mx-6 -mt-6 p-4 mb-4">
                    <h3 className="text-2xl font-bold mb-2 text-blue-600">Niveau 5</h3>
                    <p className="text-blue-600">BTS - DEUST - BUT - TITRE PROFESSIONNEL</p>
                    </div>
                    
                                    <div className="mb-4">
                    <div className="text-4xl font-bold text-blue-600 mb-2">1 900<span className="text-2xl">€</span></div>
                    <p className="text-sm text-[#013F63]">(sans frais d'acte formatif, frais de certificateur et frais de jurys)</p>
                        </div>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-[#013F63]" />
                    <span className="text-[#013F63] font-medium">Jusqu'à 24 heures de face à face</span>
                      </div>
                      
                        <Link
                          href="/contact"
                    className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors"
                        >
                          Parlons-en
                        </Link>
                    </div>
                  </div>
              
              {/* Note importante sur les frais DAVA */}
              <div className="mt-8 max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-6 shadow-lg border-l-4 border-[#013F63]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#013F63] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xl font-bold">!</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#013F63] text-sm leading-relaxed font-medium">
                        <span className="font-semibold text-orange-600">Conformément à la réglementation,</span> pour les diplômes relevant de l'Éducation nationale, un forfait de <span className="font-bold text-[#013F63]">250 €</span> est demandé par le DAVA pour l'étude de la recevabilité et l'instruction du dossier jusqu'au jury VAE.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </section>

          {/* Section Solutions de financement */}
          <section className="pt-4 pb-8">
            <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                Comment <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">financer</span> votre accompagnement VAE ?
              </h2>
              <p className="text-lg text-[#013F63] leading-relaxed font-light max-w-3xl mx-auto">
                Plusieurs solutions s'offrent à vous
              </p>
            </div>

            {/* Section Solutions de financement - Style CIP */}
            <div className="mb-8">

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

            {/* Autofinancement - Section Investissez en vous-même */}
            <div className="mt-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <h4 className="text-2xl font-bold text-[#013F63] mb-6">
                  <span className="text-orange-500 font-brittany text-3xl">Investissez</span> en vous-même
                </h4>
                <p className="text-base text-[#013F63] font-medium leading-relaxed">
                  Paiement en <span className="text-6xl font-light text-orange-500 font-brittany leading-none mx-4">x3</span> sans frais grâce à notre partenaire financier.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8 mb-8">
              <a 
                href="https://pro.cap-metiers.fr/info_juridique/vae-quels-financements-en-nouvelle-aquitaine-2/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                En savoir plus sur les financements
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
            </div>
          </section>

        {/* Section Données Atipik RH */}
        <section ref={statsRef} className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight">
                  Données <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">ATIPIK RH</span>
                </h2>
                <p className="text-lg text-[#013F63] leading-relaxed font-light max-w-3xl mx-auto">
                  Les chiffres de nos accompagnements VAE témoignent de notre engagement qualité
                </p>
              </div>

              {/* Statistiques - Carousel */}
              <div className="relative">
                {/* Flèche gauche */}
                <button
                  onClick={prevStat}
                  className="absolute left-0 -translate-x-8 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  style={{ top: 'calc(50% - 40px)' }}
                >
                  <ChevronLeft className="w-6 h-6 text-[#013F63]" />
                </button>

                {/* Flèche droite */}
                <button
                  onClick={nextStat}
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
                    {statistiques.map((stat) => (
                      <div key={stat.id} className="w-full md:w-1/3 flex-shrink-0 px-3">
                        <div className="bg-white rounded-2xl p-4 text-center shadow-lg border border-gray-100 h-28 flex flex-col justify-center">
                          <div className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-2">
                            {animatedStats[statistiques.findIndex(s => s.id === stat.id)] || '0'}
                          </div>
                          <p className="text-[#013F63] text-xs lg:text-sm font-medium">
                            {stat.description}
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
                      ? statistiques.length 
                      : Math.max(1, statistiques.length - 2) 
                  }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStatIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentStatIndex ? 'bg-[#013F63]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>


              {/* Note explicative */}
              <div className="text-center mt-8">
                <p className="text-[#013F63] text-sm">
                  * Statistiques basées sur nos premières cohortes d'accompagnement VAE. 
                  Les données d'insertion seront disponibles prochainement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              
              <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                Intéressé(e) par un accompagnement <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">VAE ?</span>
              </h2>
              
              <p className="text-lg text-[#013F63] leading-relaxed font-light max-w-3xl mx-auto mb-8">
                Parlons ensemble de votre projet de validation des acquis de l'expérience
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                  Nous contacter
                </Link>
                <a href="tel:0783019955" className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-lg">
                  07 83 01 99 55
                </a>
                </div>
              </div>
            </div>
          </section>

          {/* Cadre légal */}
          <section className="py-4">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                
                {/* Contenu principal - Version compacte */}
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl shadow-md border border-gray-100 p-4">
                  <div className="text-center">
                    <p className="text-[#013F63] text-sm leading-relaxed">
                      <strong>Cadre légal</strong> : La Validation des Acquis de l'Expérience (VAE) est régie par les dispositions du Code du travail et du Code de l'éducation. 
                      <a 
                        href="https://travail-emploi.gouv.fr/la-validation-des-acquis-de-lexperience-vae" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 transition-colors font-medium underline ml-1"
                      >
                        Consulter le cadre légal complet
                      </a>
                    </p>
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

          <Footer />

          {/* Information sur l'entretien gratuit - Bouton fixe */}
          <div className="fixed bottom-6 left-6 z-50">
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-[#013F63] text-white font-medium px-4 py-3 rounded-full transition-all duration-300 text-xs shadow-xl hover:shadow-2xl leading-tight text-center">
                <div>Premier entretien</div>
                <div>gratuit & sans engagement</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
