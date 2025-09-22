import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

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
  Settings,
  Building,
  Globe,
  Briefcase,
  Heart,
  Star
} from 'lucide-react'

export default function TestFormationCIP() {
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
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
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
    titre: "Conseiller en Insertion Professionnelle",
    sousTitre: "Formation certifiante niveau 5 - Titre professionnel RNCP",
    public: "Professionnels de l'insertion, travailleurs sociaux, demandeurs d'emploi souhaitant se reconvertir",
    objectifs: [
      "Accueillir et analyser la demande des personnes",
      "Accompagner les parcours d'insertion sociale et professionnelle",
      "Mettre en œuvre une offre de services auprès des employeurs",
      "Développer une posture professionnelle orientée coopération"
    ],
    programme: [
      {
        jour: "Module 1 : Accueil et diagnostic",
        contenu: [
          "Informer sur les ressources d'insertion",
          "Analyser la demande et poser un diagnostic partagé",
          "Exercer une veille pour adapter son activité",
          "Travailler en équipe et en réseau partenarial"
        ]
      },
      {
        jour: "Module 2 : Accompagnement des parcours",
        contenu: [
          "Contractualiser et suivre un parcours d'insertion",
          "Accompagner l'élaboration de projets professionnels",
          "Concevoir et animer des ateliers thématiques",
          "Analyser sa pratique professionnelle"
        ]
      },
      {
        jour: "Module 3 : Relation entreprise",
        contenu: [
          "Déployer des actions de prospection employeurs",
          "Apporter un appui technique en recrutement",
          "Faciliter l'intégration et le maintien en emploi",
          "Inscrire ses actes dans une démarche inclusive"
        ]
      }
    ],
    details: [
      "Durée : 1102 heures (8 mois)",
      "Prérequis : Connaissances rédactionnelles",
      "Public : 10-15 personnes maximum",
      "Méthodes : Alternance théorie/pratique, mises en situation, projets collaboratifs"
    ]
  }

  return (
    <>
      <Head>
        <title>TEST - Formation CIP - Conseiller en Insertion Professionnelle | Atipik RH</title>
        <meta name="description" content="Page de test pour la formation certifiante Conseiller en Insertion Professionnelle (CIP) niveau 5. Titre professionnel RNCP, financement CPF possible. Durée 1102h dont 385h en entreprise." />
        <meta name="keywords" content="test formation CIP, conseiller insertion professionnelle, formation certifiante, CPF, Bordeaux, Lormont" />
        <link rel="canonical" href="https://atipikrh.fr/formations/test-cip" />
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
          <section className="py-6">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-2xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight tracking-tight">
                  <span className="font-brittany text-3xl lg:text-5xl text-orange-500">Conseiller en Insertion Professionnelle</span>
                </h1>
                <p className="text-lg lg:text-xl text-[#013F63] mb-4 font-medium">
                  {formation.sousTitre}
                </p>
              </div>
            </div>
          </section>

          {/* Trait de séparation */}
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <hr className="border-t-2" style={{borderColor: '#FAC898'}} />
            </div>
          </div>

          {/* Section Programme de Formation */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
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
                          <p className="text-blue-100 text-xs">Connaissances rédactionnelles</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Target className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Niveau de sortie :</p>
                          <p className="text-blue-100 text-xs">Niveau 5 - Équivalent Bac+2</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Award className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Certification :</p>
                          <p className="text-blue-100 text-xs">Titre professionnel RNCP37274</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Durée :</p>
                          <p className="text-blue-100 text-xs">1102 heures (8 mois)</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Modalité :</p>
                          <p className="text-blue-100 text-xs">693h en centre + 385h en entreprise</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Accordéons à droite */}
                  <div className="w-full lg:w-96 flex-shrink-0 space-y-4">
                    
                    {/* OBJECTIF */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('objectif')}
                        className="w-full p-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <h3 className="text-base font-bold text-[#013F63]">OBJECTIF</h3>
                        </div>
                        {openSections.objectif ? (
                          <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
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
                          <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
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
                          <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                      {openSections.prerequis && (
                        <div className="p-4 border-t border-gray-100">
                          <p className="text-[#013F63] text-sm">Connaissances rédactionnelles</p>
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
                          <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                      {openSections.modalites && (
                        <div className="p-4 border-t border-gray-100">
                          <div className="space-y-2 text-[#013F63] text-sm">
                            <p>• Entretien de positionnement</p>
                            <p>• Analyse du projet professionnel</p>
                            <p>• Validation de la motivation</p>
                            <p>• Inscription sur dossier</p>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Bouton Prendre rendez-vous */}
                <div className="text-center mt-12">
                  <Link 
                    href="/contact" 
                    className="inline-flex px-6 py-3 rounded-full text-white font-semibold shadow-lg transition text-base hover:scale-105" 
                    style={{backgroundColor: '#FF822E', '&:hover': {backgroundColor: '#E6741A'}}}
                  >
                    Prendre rendez-vous
                  </Link>
                </div>

              </div>
            </div>
          </section>

          {/* Section Contexte - Bandeau coloré */}
          <section className="py-16 my-16 text-white" style={{backgroundColor: '#013F63'}}>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">

                <h2 className="text-xl lg:text-2xl font-bold mb-4">LE CONTEXTE</h2>
                <p className="text-sm lg:text-base leading-relaxed opacity-95">
                  Dans un contexte économique en mutation, l'accompagnement vers l'emploi nécessite des professionnels 
                  qualifiés capables d'analyser les besoins individuels, d'identifier les freins à l'insertion et 
                  de construire des parcours personnalisés vers l'emploi durable. La formation CIP répond à ce défi 
                  en formant des experts de l'insertion professionnelle.
                </p>
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
                    Un parcours complet sur 3 modules pour maîtriser l'accompagnement vers l'emploi
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {formation.programme.map((module, i) => (
                    <div 
                      key={i} 
                      className={`bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col transition-all duration-700 ease-out overflow-hidden ${
                        cardsVisible 
                          ? 'transform translate-y-0 opacity-100' 
                          : 'transform -translate-y-8 opacity-0'
                      }`}
                      style={{
                        transitionDelay: `${i * 200}ms`
                      }}
                    >
                      <div className="text-white p-6 flex items-center justify-start h-20" style={{backgroundColor: '#013F63'}}>
                        <h3 className="text-xl font-bold text-left leading-tight">{module.jour}</h3>
                      </div>
                      <div className="space-y-4 flex-1 p-8 relative">
                        {module.contenu.map((item, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-[#013F63] leading-relaxed">{item}</span>
                          </div>
                        ))}
                        <div className="absolute bottom-4 right-4">
                          <span className="text-lg font-brittany text-orange-500 font-medium">
                            Module {i + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Informations clés */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                    Informations <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">clés</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Tout ce que vous devez savoir sur cette formation certifiante
                  </p>
                </div>

                {/* Grille d'informations */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  
                  {/* Durée */}
                  <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-[#013F63]" />
                    </div>
                    <div className="text-lg font-bold text-[#013F63] mb-1">1102h</div>
                    <p className="text-gray-600 text-sm">8 mois<br/>(693h centre + 385h entreprise)</p>
                  </div>
                  
                  {/* Participants */}
                  <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-100">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="text-lg font-bold text-[#013F63] mb-1">10-15</div>
                    <p className="text-gray-600 text-sm">personnes maximum</p>
                  </div>

                  {/* Certification */}
                  <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-[#013F63]" />
                    </div>
                    <div className="text-lg font-bold text-[#013F63] mb-1">Niveau 5</div>
                    <p className="text-gray-600 text-sm">Équivalent Bac+2</p>
                  </div>

                  {/* Lieu */}
                  <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-100">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="text-lg font-bold text-[#013F63] mb-1">Lormont</div>
                    <p className="text-gray-600 text-sm">8 rue du Courant</p>
                  </div>
                </div>

                {/* Informations complémentaires */}
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    
                    {/* Méthodes */}
                    <div className="text-center">
                      <h3 className="text-base font-bold text-[#013F63] mb-3">Méthodes pédagogiques</h3>
                      <div className="space-y-1.5 text-[#013F63] flex flex-col items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs">Alternance théorie/pratique</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs">Mises en situation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs">Projets collaboratifs</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs">Interventions théâtre</span>
                        </div>
                      </div>
                    </div>

                    {/* Lieu */}
                    <div className="text-center">
                      <h3 className="text-base font-bold text-[#013F63] mb-3">Lieu de formation</h3>
                      <div className="space-y-1 text-[#013F63]">
                        <p className="font-medium text-xs">Atipik RH</p>
                        <p className="text-xs">8 Rue du Courant</p>
                        <p className="text-xs">33310 Lormont</p>
                        <div className="flex items-center justify-center gap-1 mt-2">
                          <CheckCircle className="w-2.5 h-2.5 text-orange-500" />
                          <span className="text-xs text-orange-500 font-medium">Parking à disposition</span>
                        </div>
                      </div>
                    </div>

                    {/* Modalités */}
                    <div className="text-center">
                      <h3 className="text-base font-bold text-[#013F63] mb-3">Modalités</h3>
                      <div className="space-y-1.5 text-[#013F63] flex flex-col items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs">Horaires : 9h-17h</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs">Lundi au vendredi</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs">Supports fournis</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs">Suivi personnalisé</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Solutions de financement */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">

                {/* Solutions de financement */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-[#013F63] mb-2">
                      Comment financer votre formation ?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Plusieurs solutions s'offrent à vous
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                    {/* CPF */}
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-shadow duration-300">
                      <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center p-2">
                        <Image
                          src="/images/financements/cpf.jpg"
                          alt="Logo CPF"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="font-semibold text-[#013F63] text-sm mb-1">CPF</h4>
                      <p className="text-xs text-gray-600">Demandeurs d'emploi et Salariés</p>
                    </div>
                    
                    {/* CPF de Transition Professionnelle */}
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-shadow duration-300">
                      <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center p-2">
                        <Image
                          src="/images/financements/logo entreprise.jpg"
                          alt="Logo Transitions Pro"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="font-semibold text-[#013F63] text-sm mb-1">CPF de Transition Professionnelle</h4>
                      <p className="text-xs text-gray-600">Salariés</p>
                    </div>
                    
                    {/* Dispositif démissionnaire */}
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-shadow duration-300">
                      <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center p-2">
                        <Image
                          src="/images/financements/logo entreprise.jpg"
                          alt="Logo Transitions Pro"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="font-semibold text-[#013F63] text-sm mb-1">Dispositif démissionnaire</h4>
                      <p className="text-xs text-gray-600">Salariés démissionnaires</p>
                    </div>
                    
                    {/* CSP */}
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-shadow duration-300">
                      <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center p-2">
                        <Image
                          src="/images/financements/logo entreprise.jpg"
                          alt="Logo CSP"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="font-semibold text-[#013F63] text-sm mb-1">CSP</h4>
                      <p className="text-xs text-gray-600">Salariés en licenciement économique</p>
                    </div>
                    
                    {/* Plan de développement des compétences */}
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-shadow duration-300">
                      <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center p-2">
                        <Image
                          src="/images/financements/logo entreprise.jpg"
                          alt="Logo Plan entreprise"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="font-semibold text-[#013F63] text-sm mb-1">Plan de développement des compétences</h4>
                      <p className="text-xs text-gray-600">Salariés</p>
                    </div>
                    
                    {/* Aides Agefiph */}
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-shadow duration-300">
                      <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center p-2">
                        <Image
                          src="/images/financements/logo-opco.webp"
                          alt="Logo Agefiph"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="font-semibold text-[#013F63] text-sm mb-1">Aides Agefiph</h4>
                      <p className="text-xs text-gray-600">Personnes en situation de handicap</p>
                    </div>
                    
                    {/* AIF France Travail */}
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-shadow duration-300">
                      <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center p-2">
                        <Image
                          src="/images/financements/Logo_Pole_Emploi.png"
                          alt="Logo France Travail"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="font-semibold text-[#013F63] text-sm mb-1">AIF France Travail</h4>
                      <p className="text-xs text-gray-600">Demandeurs d'emploi</p>
                    </div>
                    
                    {/* FAF */}
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-shadow duration-300">
                      <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center p-2">
                        <Image
                          src="/images/financements/logo-opco.webp"
                          alt="Logo FAF"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="font-semibold text-[#013F63] text-sm mb-1">FAF</h4>
                      <p className="text-xs text-gray-600">Travailleurs indépendants</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Link href="/financement" className="inline-flex items-center gap-2 px-6 py-3 bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
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
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Réservez dès maintenant votre place pour cette formation très demandée
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  
                  {/* Session Septembre 2025 */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col">
                    <div className="h-24 text-white p-6 flex items-center justify-between" style={{backgroundColor: '#FF822E'}}>
                      <div>
                        <h3 className="text-xl font-bold mb-1">Session d'Automne</h3>
                        <p className="text-white/70 text-sm">Septembre 2025</p>
                      </div>
                      <div className="bg-white/20 rounded-full p-3">
                        <Calendar className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="p-6 flex-1">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-auto h-8 bg-blue-100 rounded-full flex items-center justify-center px-3">
                            <span className="text-[#013F63] font-bold text-sm">Présentiel</span>
                          </div>
                          <div>
                            <p className="font-semibold text-[#013F63]">2 septembre au 15 décembre 2025</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-auto h-8 bg-orange-100 rounded-full flex items-center justify-center px-3">
                            <span className="text-[#013F63] font-bold text-sm">Stage</span>
                          </div>
                          <div>
                            <p className="font-semibold text-[#013F63]">Janvier à mars 2026</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Session Janvier 2026 */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col">
                    <div className="h-24 text-white p-6 flex items-center justify-between" style={{backgroundColor: '#FF822E'}}>
                      <div>
                        <h3 className="text-xl font-bold mb-1">Session d'Hiver</h3>
                        <p className="text-white/70 text-sm">Janvier 2026</p>
                      </div>
                      <div className="bg-white/20 rounded-full p-3">
                        <Calendar className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="p-6 flex-1">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-auto h-8 bg-blue-100 rounded-full flex items-center justify-center px-3">
                            <span className="text-[#013F63] font-bold text-sm">Présentiel</span>
                          </div>
                          <div>
                            <p className="font-semibold text-[#013F63]">6 janvier au 20 avril 2026</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-auto h-8 bg-orange-100 rounded-full flex items-center justify-center px-3">
                            <span className="text-[#013F63] font-bold text-sm">Stage</span>
                          </div>
                          <div>
                            <p className="font-semibold text-[#013F63]">Mai à juillet 2026</p>
                          </div>
                        </div>
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
                
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
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

        </div>



        <Footer />
      </div>
    </>
  )
}
