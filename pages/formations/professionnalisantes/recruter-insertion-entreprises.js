import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
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
  ArrowLeft,
  ArrowRight,
  Phone,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  FileText,
  UserCheck,
  Settings
} from 'lucide-react'

export default function RecruterInsertionEntreprises() {
  const [openSections, setOpenSections] = useState({})
  const [cardsVisible, setCardsVisible] = useState(false)
  const programmeRef = useRef(null)

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !cardsVisible) {
            setCardsVisible(true)
            observer.unobserve(entry.target) // Se désabonne après la première animation
          }
        })
      },
      {
        threshold: 0.3, // Déclenche quand 30% de la section est visible
        rootMargin: '0px 0px -50px 0px' // Offset pour déclencher un peu avant
      }
    )

    if (programmeRef.current) {
      observer.observe(programmeRef.current)
    }

    return () => {
      if (programmeRef.current) {
        observer.unobserve(programmeRef.current)
      }
    }
  }, [cardsVisible])

  const formation = {
    titre: "Recruter en insertion avec les entreprises",
    sousTitre: "De la co-construction à l'accompagnement stratégique RH",
    public: "Professionnels de l'accompagnement, managers de parcours, partenaires emploi",
    objectifs: [
      "Comprendre les logiques de recrutement d'entreprise",
      "Se positionner comme facilitateur entre entreprise et candidat",
      "Adopter une posture adaptée aux besoins des 2 parties"
    ],
    programme: [
      {
        jour: "Jour 1 : Recrutement collaboratif",
        contenu: [
          "Analyse de ses pratiques et définition d'objectifs",
          "Spécificités du recrutement inclusif",
          "Identification des freins et leviers à l'embauche",
          "Construction d'un processus de recrutement adapté"
        ]
      },
      {
        jour: "Jour 2 : Analyse de profils et orientation",
        contenu: [
          "Co-construction d'un parcours d'intégration",
          "Simulation d'entretien tripartite",
          "Élaboration d'un plan d'action transférable"
        ]
      },
      {
        jour: "Jour 3 : Appui aux entretiens & suivi post-embauche",
        contenu: [
          "Étude de cas \"Parcours de recrutement\"",
          "Retour terrain et outils d'évaluation",
          "Bilan final et valorisation des acquis"
        ]
      }
    ],
    details: [
      "Durée : 3 jours (21h)",
      "Prérequis : Aucun",
      "Public : 12 personnes maximum",
      "Méthodes : Alternance théorie/pratique, jeux de rôles, études de cas, simulations d'entretiens"
    ]
  }

  return (
    <>
      <Head>
        <title>Formation Recruter en insertion avec les entreprises | Atipik RH - Lormont Bordeaux</title>
        <meta name="description" content="Formation professionnalisante pour recruter en insertion avec les entreprises : De la co-construction à l'accompagnement stratégique RH. 3 jours, Bordeaux - Lormont." />
        <meta name="keywords" content="formation recrutement insertion, accompagnement RH, entreprises, recrutement inclusif, CIP, Bordeaux, Lormont, Atipik RH" />
        <link rel="canonical" href="https://atipikrh.fr/formations/professionnalisantes/recruter-insertion-entreprises" />
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

          {/* Navigation de retour */}
          <section className="py-6">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Link 
                  href="/formations" 
                  className="inline-flex items-center gap-2 text-[#013F63] hover:text-orange-500 transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour aux formations
                </Link>
              </div>
            </div>
          </section>

          {/* Hero Section */}
          <section className="py-4">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-2xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight tracking-tight">
                  Recruter en insertion avec les <span className="font-brittany text-3xl lg:text-5xl text-orange-500">entreprises</span>
                </h1>
                <p className="text-lg lg:text-xl text-[#013F63] mb-4 font-medium">
                  {formation.sousTitre}
                </p>
              </div>
            </div>
          </section>

          {/* Section Programme de Formation */}
          <section className="py-2">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                {/* Section Contexte - Style carte */}
                <section className="py-4 my-4 mb-12">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#013F63]">
                      <div className="space-y-4 text-[#013F63] text-lg leading-relaxed text-center">
                        <p>
                          Dans un contexte où le recrutement en insertion devient un enjeu stratégique pour les entreprises, développer ses compétences en recrutement inclusif permet de créer des équipes diversifiées et performantes. Cette formation vous donne les clés pour identifier et valoriser les talents issus de l'insertion.
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-center my-6">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                      </div>
                      
                      <div className="text-orange-500 font-bold text-xl leading-relaxed text-center">
                        <p>
                          Un recrutement inclusif, c'est la clé du succès pour des équipes performantes !
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* Titre de section */}
                <div className="text-center mb-8">
                  <h2 className="text-lg lg:text-xl font-bold text-[#013F63] mb-6">
                    LE PROGRAMME DE FORMATION
                  </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
                  
                  {/* Carte bleue à gauche */}
                  <div className="w-full lg:w-96 flex-shrink-0 rounded-xl p-4 text-white" style={{backgroundColor: '#013F63'}}>
                    <div className="space-y-3">
                      
                      <div className="flex items-start gap-2">
                        <GraduationCap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Niveau d'entrée :</p>
                          <p className="text-blue-100 text-xs">Aucun prérequis spécifique</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Target className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Niveau de sortie :</p>
                          <p className="text-blue-100 text-xs">Compétences en recrutement collaboratif et inclusif</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Award className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Modalité de formation :</p>
                          <p className="text-blue-100 text-xs">Attestation de formation</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Durée :</p>
                          <p className="text-blue-100 text-xs">21h</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Horaire :</p>
                          <p className="text-blue-100 text-xs">Du lundi au vendredi, de 9h00 à 12h30 et de 13h30 à 17h00</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Accordéons à droite */}
                  <div className="w-full lg:w-96 flex-shrink-0 space-y-4">
                    
                    {/* OBJECTIFS PÉDAGOGIQUES */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('objectif')}
                        className="w-full p-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <h3 className="text-base font-bold text-[#013F63]">OBJECTIFS PÉDAGOGIQUES</h3>
                        </div>
                        {openSections.objectif ? (
                          <ChevronUp className="w-5 h-5 text-[#013F63]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#013F63]" />
                        )}
                      </button>
                      {openSections.objectif && (
                        <div className="p-4 border-t border-gray-100">
                          <div className="space-y-2">
                            {formation.objectifs.map((objectif, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[#013F63] text-sm">{objectif}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* PUBLIC VISÉ */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('public')}
                        className="w-full p-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <h3 className="text-base font-bold text-[#013F63]">PUBLIC VISÉ</h3>
                        </div>
                        {openSections.public ? (
                          <ChevronUp className="w-5 h-5 text-[#013F63]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#013F63]" />
                        )}
                      </button>
                      {openSections.public && (
                        <div className="p-4 border-t border-gray-100">
                          <p className="text-[#013F63] text-sm">{formation.public}</p>
                        </div>
                      )}
                    </div>

                    {/* PRÉREQUIS */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('prerequis')}
                        className="w-full p-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <h3 className="text-base font-bold text-[#013F63]">PRÉREQUIS</h3>
                        </div>
                        {openSections.prerequis ? (
                          <ChevronUp className="w-5 h-5 text-[#013F63]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#013F63]" />
                        )}
                      </button>
                      {openSections.prerequis && (
                        <div className="p-4 border-t border-gray-100">
                          <p className="text-[#013F63] text-sm">Aucun</p>
                        </div>
                      )}
                    </div>

                    {/* MODALITÉS D'ADMISSION */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('modalites')}
                        className="w-full p-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <h3 className="text-base font-bold text-[#013F63]">MODALITÉS D'ADMISSION</h3>
                        </div>
                        {openSections.modalites ? (
                          <ChevronUp className="w-5 h-5 text-[#013F63]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#013F63]" />
                        )}
                      </button>
                      {openSections.modalites && (
                        <div className="p-4 border-t border-gray-100">
                          <p className="text-[#013F63] text-sm">
                            Nous sommes à votre disposition, par téléphone ou par mail, afin d'analyser et d'évaluer vos besoins.<br/>
                            Dans le cadre de nos actions de formation, un programme est construit et personnalisé est élaboré, en cohérence avec vos objectifs et les spécificités de votre structure.
                          </p>
                        </div>
                      )}
                    </div>

                  </div>
                </div>


              </div>
            </div>
          </section>


          {/* Programme détaillé */}
          <section ref={programmeRef} className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                    Programme <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">détaillé</span>
                  </h2>
                  <p className="text-lg text-[#013F63] leading-relaxed max-w-3xl mx-auto">
                    Un parcours complet sur 3 jours pour maîtriser le recrutement inclusif
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {formation.programme.map((jour, i) => (
                    <div 
                      key={i} 
                      className={`bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col transition-all duration-700 ease-out overflow-hidden ${
                        cardsVisible 
                          ? 'transform translate-y-0 opacity-100' 
                          : 'transform -translate-y-8 opacity-0'
                      }`}
                      style={{
                        transitionDelay: `${i * 200}ms` // Délai progressif pour chaque carte
                      }}
                    >
                      <div className="text-[#013F63] p-6 flex items-center justify-start h-20 bg-blue-100">
                        <h3 className="text-xl font-bold text-left leading-tight">{jour.jour}</h3>
                      </div>
                      <div className="space-y-2 flex-1 p-8 relative">
                        {jour.contenu.map((item, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#013F63] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-[#013F63] leading-relaxed">{item}</span>
                          </div>
                        ))}
                        <div className="absolute bottom-4 right-4">
                          <span className="text-lg font-brittany text-orange-500 font-medium">
                            {i === 2 ? 'Distanciel' : 'Présentiel'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>


          {/* Solutions de financement */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                    Comment <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">financer</span> votre formation ?
                  </h2>
                  <p className="text-lg text-[#013F63] leading-relaxed max-w-2xl mx-auto">
                    Plusieurs solutions s'offrent à vous
                  </p>
                </div>

                {/* Solutions de financement */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  
                  {/* FAF - Indépendants */}
                  <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                      <Image
                        src="/images/financements/logo-faf.jpeg"
                        alt="Logo FAF"
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <h5 className="font-bold text-[#013F63] text-sm mb-2">FAF</h5>
                    <p className="text-xs text-[#013F63]">Indépendants</p>
                  </div>

                  {/* OPCO - Salariés */}
                  <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                      <Image
                        src="/images/financements/logo-opco.webp"
                        alt="Logo OPCO"
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <h5 className="font-bold text-[#013F63] text-sm mb-2">OPCO</h5>
                    <p className="text-xs text-[#013F63]">Salariés</p>
                  </div>
                </div>
                  
                  {/* Autofinancement */}
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

                  <div className="text-center mt-8">
                    <Link href="/financement" className="inline-flex items-center gap-2 px-6 py-3 bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

              </div>
            </div>
          </section>

          {/* Prochaines sessions */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                    Prochaines <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">sessions</span>
                  </h2>
                  <p className="text-lg text-[#013F63] leading-relaxed max-w-2xl mx-auto">
                    Réservez dès maintenant votre place pour cette formation spécialisée
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
                  
                  {/* Session Janvier 2026 */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
                    <div className="bg-orange-100 text-[#013F63] rounded-t-2xl -mx-8 -mt-8 p-4 mb-6">
                      <h3 className="text-2xl font-bold mb-2 text-orange-500">Session d'Hiver</h3>
                      <p className="text-orange-600">Janvier 2026</p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-auto h-8 bg-blue-100 rounded-full flex items-center justify-center px-3">
                          <span className="text-[#013F63] font-bold text-sm">Présentiel</span>
                        </div>
                        <span className="text-[#013F63] font-medium">22 au 23 janvier 2026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-auto h-8 bg-blue-100 rounded-full flex items-center justify-center px-3">
                          <span className="text-[#013F63] font-bold text-sm">Distanciel</span>
                        </div>
                        <span className="text-[#013F63] font-medium">6 février 2026</span>
                      </div>
                    </div>
                  </div>

                  {/* Session Avril 2026 */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
                    <div className="bg-orange-100 text-[#013F63] rounded-t-2xl -mx-8 -mt-8 p-4 mb-6">
                      <h3 className="text-2xl font-bold mb-2 text-orange-500">Session de Printemps</h3>
                      <p className="text-orange-600">Avril 2026</p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-auto h-8 bg-blue-100 rounded-full flex items-center justify-center px-3">
                          <span className="text-[#013F63] font-bold text-sm">Présentiel</span>
                        </div>
                        <span className="text-[#013F63] font-medium">23 au 24 avril 2026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-auto h-8 bg-blue-100 rounded-full flex items-center justify-center px-3">
                          <span className="text-[#013F63] font-bold text-sm">Distanciel</span>
                        </div>
                        <span className="text-[#013F63] font-medium">30 avril 2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Contact */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                
                <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">
                  Intéressé(e) par cette <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">formation ?</span>
                </h2>
                
                <p className="text-xl text-[#013F63] mb-12 max-w-2xl mx-auto">
                  Contactez-nous pour plus d'informations ou pour vous inscrire à cette formation
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                    Demander des informations
                  </Link>
                  <a 
                    href="tel:0783019955"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-lg"
                  >
                    <Phone className="w-5 h-5" />
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

          <Footer />
        </div>

      </div>
    </>
  )
}
