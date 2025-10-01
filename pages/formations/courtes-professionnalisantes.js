import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
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
  ChevronDown,
  ChevronUp
} from 'lucide-react'

export default function FormationsCourtesProfessionnalisantes() {
  const [openFormations, setOpenFormations] = useState({})

  const toggleFormation = (formationId) => {
    setOpenFormations(prev => ({
      ...prev,
      [formationId]: !prev[formationId]
    }))
  }

  const formations = [
    {
      id: 1,
      titre: "Développer la relation entreprise",
      sousTitre: "de l'accompagnement à la relation entreprise",
      public: "Professionnels sans expérience en relation entreprises (CIP débutants, travailleurs sociaux…)",
      objectifs: [
        "Comprendre le fonctionnement des entreprises",
        "Identifier les besoins du tissu économique local", 
        "Construire une posture orientée coopération",
        "Initier et valoriser une relation entreprise efficace"
      ],
      programme: [
        {
          jour: "Jour 1 : Comprendre l'entreprise",
          contenu: [
            "Cartographie des dynamiques économiques locales",
            "Analyse des représentations de l'entreprise", 
            "Décodage des attentes employeurs"
          ]
        },
        {
          jour: "Jour 2 : Construire la relation",
          contenu: [
            "Outils et méthodes de prospection",
            "Techniques de négociation adaptées", 
            "Construction d'un plan d'action personnalisé"
          ]
        },
        {
          jour: "Jour 3 (à distance) : Coopérer durablement",
          contenu: [
            "Enjeux de la relation tripartite",
            "Techniques de médiation",
            "Posture de coopération dans la durée"
          ]
        }
      ],
      details: [
        "Durée : 3 jours (21h)",
        "Prérequis : Aucun",
        "Public : 10 personnes maximum",
        "Méthodes : Alternance théorie/pratique, jeux de rôles, études de cas"
      ]
    },
    {
      id: 2,
      titre: "Renforcer la relation avec l'entreprise", 
      sousTitre: "de la prospection à la valorisation de votre offre",
      public: "Professionnels souhaitant développer une approche inclusive du recrutement",
      objectifs: [
        "Maîtriser les enjeux de l'inclusion en entreprise",
        "Développer des pratiques de recrutement non discriminantes",
        "Accompagner les entreprises dans leur démarche inclusive",
        "Créer des outils de sensibilisation adaptés"
      ],
      programme: [
        {
          jour: "Jour 1 : Les bases de l'inclusion RH",
          contenu: [
            "Définitions et enjeux de la diversité",
            "Identification des biais cognitifs",
            "Étude de cas et auto-analyse des pratiques"
          ]
        },
        {
          jour: "Jour 2 : Recruter sans discriminer",
          contenu: [
            "Recruter sur les compétences",
            "Simulations d'entretiens",
            "Rédaction d'offres inclusives",
            "Élaboration d'un plan d'action individuel"
          ]
        },
        {
          jour: "Jour 3 (à distance) : Mise en situation et ajustements d'outils",
          contenu: [
            "Retours d'expérience et partages de pratiques",
            "Diagnostic collectif d'un processus de recrutement",
            "Évaluation et engagements"
          ]
        }
      ],
      details: [
        "Durée : 3 jours (21h)",
        "Prérequis : Expérience en accompagnement",
        "Public : 10 personnes maximum", 
        "Méthodes : Études de cas, ateliers pratiques, mise en situation"
      ]
    },
    {
      id: 3,
      titre: "Recruter en insertion avec les entreprises",
      sousTitre: "de la co-construction à l'accompagnement stratégique RH",
      public: "Professionnels de l'accompagnement, conseillers emploi, formateurs",
      objectifs: [
        "Identifier les compétences transférables",
        "Utiliser des outils de valorisation innovants", 
        "Accompagner la verbalisation des compétences",
        "Construire des parcours de transition professionnelle"
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
          jour: "Jour 3 (à distance) : Appui aux entretiens & suivi post-embauche",
          contenu: [
            "Étude de cas \"Parcours de recrutement\"",
            "Retour terrain et outils d'évaluation",
            "Bilan final et valorisation des acquis"
          ]
        }
      ],
      details: [
        "Durée : 3 jours (21h)", 
        "Prérequis : Expérience en accompagnement",
        "Public : 12 personnes maximum",
        "Méthodes : Ateliers pratiques, autodiagnostic, études de cas"
      ]
    },
    {
      id: 4,
      titre: "Renforcer sa pratique des recrutement inclusif",
      sousTitre: "de la diversité à la performance RH",
      public: "Tous professionnels de l'accompagnement social et professionnel",
      objectifs: [
        "Développer une posture professionnelle adaptée",
        "Maîtriser les techniques d'entretien", 
        "Gérer les situations difficiles",
        "Prévenir l'épuisement professionnel"
      ],
      programme: [
        {
          jour: "Jour 1 : Structurer l'offre",
          contenu: [
            "Clarifier missions, publics et services",
            "Construire une offre lisible",
            "Benchmark d'offres existantes"
          ]
        },
        {
          jour: "Jour 2 : Organiser la prospection",
          contenu: [
            "Identifier les cibles prioritaires",
            "Créer outils (trame d'appel, mails, fiches)",
            "Jeux de rôle de prise de contact"
          ]
        },
        {
          jour: "Jour 3 (à distance) : Valoriser son action",
          contenu: [
            "Argumenter l'impact RH / social",
            "Construire un discours partenariat",
            "Simulations d'entretiens avec entreprises"
          ]
        }
      ],
      details: [
        "Durée : 3 jours (21h)",
        "Prérequis : Exercer dans l'accompagnement",
        "Public : 10 personnes maximum",
        "Méthodes : Analyse de pratiques, jeux de rôles, supervision"
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>Formations Courtes Professionnalisantes | Atipik RH - Lormont Bordeaux</title>
        <meta name="description" content="Formations courtes professionnalisantes pour structures d'accompagnement, acteurs insertion et entreprises. Relation entreprise, recrutement inclusif - 1150€" />
        <meta name="keywords" content="formation courte, professionnalisante, relation entreprise, recrutement inclusif, insertion professionnelle, Bordeaux, Lormont" />
        <link rel="canonical" href="https://atipikrh.fr/formations/courtes-professionnalisantes" />
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
                <h1 className="text-3xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight tracking-tight">
                  Formations Courtes<br/>
                  <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Professionnalisantes</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
                  Des formations ancrées dans les <strong>réalités professionnelles</strong><br className="hidden lg:block"/>
                  <span className="text-orange-500 font-medium">pour les acteurs de l'accompagnement et de l'insertion</span>
                </p>
              </div>
            </div>
          </section>

          {/* Le Contexte */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Titre à gauche */}
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63]">
                      Le <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Contexte</span>
                    </h2>
                  </div>
                  
                                  {/* Contenu à droite */}
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Dans un contexte de mutation du marché du travail, les acteurs de l'accompagnement social et professionnel 
                    ainsi que les entreprises de secteurs en tension doivent adapter leurs pratiques pour favoriser 
                    l'employabilité, la coopération interprofessionnelle et la sécurisation des parcours.
                  </p>
                </div>
                </div>
              </div>
            </div>
          </section>

          {/* Notre Objectif */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  
                                  {/* Contenu à gauche */}
                <div className="lg:order-1">
                  <div className="space-y-6">
                      <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-orange-500">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-800 font-semibold text-lg">Structurer la relation employeur</p>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-orange-500">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-800 font-semibold text-lg">Valoriser les compétences</p>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-orange-500">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-800 font-semibold text-lg">Améliorer la posture professionnelle</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Titre à droite */}
                  <div className="lg:order-2">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63]">
                      Notre <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Objectif</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Nos 4 Formations */}
          <section className="py-16" id="formations">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                    Nos <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">4 formations</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Chaque formation peut être suivie indépendamment
                  </p>
                </div>

                <div className="space-y-4 max-w-4xl mx-auto">
                  {formations.map((formation, index) => {
                    const isOpen = openFormations[formation.id]
                    const gradientFrom = "from-[#013F63]"
                    const gradientTo = "to-[#012a4a]"
                    
                    return (
                      <div key={formation.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                        
                        {/* En-tête cliquable */}
                        <button
                          onClick={() => toggleFormation(formation.id)}
                          className={`w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white p-4 flex items-center justify-between hover:opacity-90 transition-opacity`}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm">{formation.id}</span>
                            </div>
                            <div className="text-left">
                              <h3 className="text-base lg:text-lg font-bold">{formation.titre}</h3>
                              <p className="text-white/90 text-sm">{formation.sousTitre}</p>
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
                            
                            {/* Public cible */}
                            <div className="mb-6">
                              <h4 className="text-sm font-bold text-[#013F63] mb-2 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Public concerné
                              </h4>
                              <p className="text-gray-600 text-sm">{formation.public}</p>
                            </div>

                            {/* Objectifs */}
                            <div className="mb-6">
                              <h4 className="text-sm font-bold text-[#013F63] mb-3 flex items-center gap-2">
                                <Target className="w-4 h-4" />
                                Objectifs pédagogiques
                              </h4>
                              <div className="grid md:grid-cols-2 gap-2">
                                {formation.objectifs.map((objectif, i) => (
                                  <div key={i} className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">{objectif}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Programme */}
                            <div className="mb-6">
                              <h4 className="text-sm font-bold text-[#013F63] mb-3 flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Programme détaillé
                              </h4>
                              <div className="space-y-3">
                                {formation.programme.map((jour, i) => (
                                  <div key={i} className="bg-gray-50 p-3 rounded-lg">
                                    <h5 className="font-semibold text-[#013F63] text-sm mb-2">{jour.jour}</h5>
                                    <ul className="space-y-1">
                                      {jour.contenu.map((item, j) => (
                                        <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Informations pratiques */}
                            <div className="border-t border-gray-100 pt-4">
                              <h4 className="text-sm font-bold text-[#013F63] mb-3 flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Informations pratiques
                              </h4>
                              <div className="grid md:grid-cols-2 gap-2">
                                {formation.details.map((detail, i) => (
                                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle className="w-3 h-3 text-orange-500 flex-shrink-0" />
                                    {detail}
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

          {/* Informations pratiques */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4">
                    Informations <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Pratiques</span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  {/* Tarif */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <Euro className="w-12 h-12 text-[#013F63] mx-auto mb-4" />
                    <h3 className="font-bold text-gray-800 mb-2">Tarif</h3>
                    <p className="text-2xl font-bold text-[#013F63] mb-1">1150€</p>
                    <p className="text-sm text-gray-600">par formation (3 jours)</p>
                  </div>

                  {/* Lieu */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-800 mb-2">Lieu</h3>
                    <p className="text-sm text-gray-600">Atipik RH<br/>8 Rue du Courant<br/>33310 Lormont</p>
                  </div>

                  {/* Durée */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <Clock className="w-12 h-12 text-[#013F63] mx-auto mb-4" />
                    <h3 className="font-bold text-gray-800 mb-2">Durée</h3>
                    <p className="text-2xl font-bold text-[#013F63] mb-1">21h</p>
                    <p className="text-sm text-gray-600">3 jours<br/>2 présentiel + 1 distanciel</p>
                  </div>

                  {/* Certification */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-800 mb-2">Certification</h3>
                    <p className="text-sm text-gray-600">Attestation de formation<br/>Qualiopi</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Contact */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                
                <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">
                  Intéressé(e) par nos formations <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">professionnalisantes ?</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                  Contactez-nous pour plus d'informations ou pour vous inscrire à nos formations courtes
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                    Demander des informations
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
                
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                  
                  {/* Section gauche - Logo */}
                  <div className="flex flex-col justify-center items-center text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <Image 
                        src="/images/certifications/formation-handicap.png" 
                        alt="Formation & Handicap" 
                        width={50} 
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[#013F63]">Formation accessible</h3>
                  </div>

                  {/* Section droite - Contact et informations */}
                  <div className="lg:col-span-2">
                    <div className="mb-4">
                      <p className="text-[#013F63] leading-relaxed mb-4">
                        Nous mettons tout en œuvre pour rendre nos formations accessibles au plus grand nombre.
                      </p>
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
          </section>

          <Footer />
        </div>

      </div>
    </>
  )
} 