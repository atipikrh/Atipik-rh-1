import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
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
} from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import FormationProfessionnelleSeoHead from '../../../components/FormationProfessionnelleSeoHead'
import FormationTarifSection from '../../../components/FormationTarifSection'
import FormationQuickAnswers from '../../../components/FormationQuickAnswers'
import FormationLandingCtas from '../../../components/FormationLandingCtas'
import {
  getFormationContactHref,
  getProfessionnelleConfigBySlug,
  PROFESSIONNALISANTE_PRICE_SUFFIX,
} from '../../../lib/seo/professionnalisantesConfig'

const SEO_SLUG = 'recruter-insertion-entreprises'
const seoFormation = getProfessionnelleConfigBySlug(SEO_SLUG)

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

    const programmeNode = programmeRef.current
    if (programmeNode) {
      observer.observe(programmeNode)
    }

    return () => {
      if (programmeNode) {
        observer.unobserve(programmeNode)
      }
    }
  }, [cardsVisible])

  const formation = {
    titre: seoFormation?.titreAffichage ?? "Recruter en insertion avec les entreprises",
    sousTitre: "De la co-construction à l'accompagnement stratégique RH",
    presentation: {
      texte: "Dans un contexte où le recrutement en insertion devient un enjeu stratégique pour les entreprises, développer ses compétences en recrutement inclusif permet de créer des équipes diversifiées et performantes. Cette formation vous donne les clés pour identifier et valoriser les talents issus de l'insertion.",
      slogan: "Un recrutement inclusif, c'est la clé du succès pour des équipes performantes !"
    },
    public: "Professionnels de l'accompagnement socio-professionels , Conseiller.e en Insertion Professionnelle expérimenté.e et/ou ayant suivi modules 1 et 2",
    prerequis: "Justifier d'une première expérience professionnelle en lien avec l'accompagnement de publics , la relation entreprise, le recrutement ou l'intégration professionnelle.",
    objectifs: [
      "Comprendre les logiques de recrutement d'entreprise",
      "Se positionner comme facilitateur entre entreprise et candidat",
      "Adopter une posture adaptée aux besoins des 2 parties"
    ],
    resultatsAttendus: {
      introduction: "À l'issue de la formation, le stagiaire est en capacité de",
      puces: [
        "comprendre les besoins RH des employeurs et les contraintes de terrain pour accompagner ses bénéficiaires et créer des partenariats avec les entreprises",
        "co-construire et accompagner l'employeur avec un process de recrutement adapté au contexte de l'insertion professionnelle."
      ]
    },
    informationsCles: {
      dureeTotale: "21 heures",
      modalite: "Mixed learning",
      horaires: "Du lundi au vendredi, de 9h00 à 12h30 et de 13h30 à 17h00",
      lieu: "8 rue du Courant, 33310 Lormont",
      tailleGroupe: "4 à 12 participants",
      niveauSortie: "Attestation de formation"
    },
    deroulement: "21h en mixed learning dont :\n14h présentiel sur 2 journées consécutives .\n7h en distanciel synchrone.",
    lePlusProgramme: "À l'issue de la formation, le/la stagiaire bénéficie d'invitations exclusives aux événements organisés par Collectif Professionnel de l'Insertion et des RH : Les rencontres Atipik de la Richesse Humaine",
    methodesPedagogiques: [
      "Alternance d'apports théoriques, d'ateliers pratiques, d'études de cas et de jeux de rôle",
      "Travail sur des supports réels (annonces, CV, grilles d'entretien)",
      "Journée de retour d'expérience en distanciel pour consolider les acquis"
    ],
    programme: [
      {
        jour: "Jour 1",
        contenu: [
          "Auto diagnostic des pratiques de la relation employeur",
          "Tour d'horizon des recrutements en insertion",
          "Identifier et faire évoluer les freins et leviers à l'embauche",
          "Construction d'un process de recrutement adapté basé sur les compétences et aptitudes"
        ],
        modalite: "Présentiel"
      },
      {
        jour: "Jour 2",
        contenu: [
          "Co-construction d'un parcours d'intégration",
          "Simulation d'entretien tripartite",
          "Élaboration d'un plan d'action transférable"
        ],
        modalite: "Présentiel"
      },
      {
        jour: "Jour 3",
        contenu: [
          "Étude de cas \"Parcours de recrutement\"",
          "Retour terrain et outils d'évaluation",
          "Bilan final et valorisation des acquis"
        ],
        modalite: "Distanciel synchrone"
      }
    ],
    modalitesAdmission: "Nous sommes à votre disposition, par téléphone ou par mail, afin d'analyser et d'évaluer vos besoins. Dans le cadre de nos actions de formation INTRA, un programme est construit, personnalisé et élaboré, en cohérence avec vos objectifs et les spécificités de votre structure."
  }

  return (
    <>
      <FormationProfessionnelleSeoHead slug={SEO_SLUG} />

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Background animé global */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-muted-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-muted-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
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
                  className="inline-flex items-center gap-2 text-[#013F63] hover:text-accent-500 transition-colors font-medium"
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
                  {seoFormation?.titreAffichage}
                </h1>
                <p className="text-lg lg:text-xl text-[#013F63] mb-4 font-medium">
                  {formation.sousTitre}
                </p>
              </div>
              <FormationQuickAnswers variant="courte" slug={SEO_SLUG} />
              <FormationLandingCtas variant="courte" slug={SEO_SLUG} />
            </div>
          </section>

          {/* Section Programme de Formation */}
          <section className="py-2">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                {/* Section Présentation du module - Style carte */}
                <section className="py-4 my-4 mb-12">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#013F63]">
                      <div className="text-[#013F63] text-lg leading-relaxed text-center">
                        <p className="mb-3">
                          {formation.presentation.texte}
                        </p>
                        <div className="w-20 h-0.5 bg-gradient-to-r from-orange-300 to-orange-500 mb-3 mx-auto"></div>
                        <p className="text-accent-500 font-bold">
                          {formation.presentation.slogan}
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

                {/* Le+ de ce programme */}
                <div className="max-w-4xl mx-auto mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-muted-blue-200">
                    <p className="font-bold text-accent-500 mb-3 text-center">Le+ de ce programme</p>
                    <p className="text-[#013F63]">
                      À l'issue de la formation, vous bénéficiez d'invitations exclusives aux événements organisés par le Collectif Professionnel de l'Insertion et des RH : Les Rencontres Atipik de la Richesse Humaine
                    </p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
                  
                  {/* Carte bleue à gauche */}
                  <div className="w-full lg:w-96 flex-shrink-0 rounded-xl p-4 text-white" style={{backgroundColor: '#013F63'}}>
                    <div className="space-y-3">
                      
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Durée totale :</p>
                          <p className="text-neutral-100 text-xs">{formation.informationsCles.dureeTotale}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Award className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Modalité :</p>
                          <p className="text-neutral-100 text-xs">{formation.informationsCles.modalite}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Horaires :</p>
                          <p className="text-neutral-100 text-xs">{formation.informationsCles.horaires}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Lieu :</p>
                          <p className="text-neutral-100 text-xs">{formation.informationsCles.lieu}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Taille du groupe :</p>
                          <p className="text-neutral-100 text-xs">{formation.informationsCles.tailleGroupe}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Target className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Niveau de sortie :</p>
                          <p className="text-neutral-100 text-xs">{formation.informationsCles.niveauSortie}</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Accordéons à droite */}
                  <div className="w-full lg:w-96 flex-shrink-0 space-y-4">
                    
                    {/* PRÉREQUIS */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('prerequis')}
                        className="w-full p-4 text-left flex items-center justify-between bg-neutral-100 hover:bg-muted-blue-200 transition-colors"
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
                        <div className="p-4 border-t border-muted-blue-200">
                          <p className="text-[#013F63] text-sm">{formation.prerequis}</p>
                        </div>
                      )}
                    </div>

                    {/* PUBLIC VISÉ */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('public')}
                        className="w-full p-4 text-left flex items-center justify-between bg-neutral-100 hover:bg-muted-blue-200 transition-colors"
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
                        <div className="p-4 border-t border-muted-blue-200">
                          <p className="text-[#013F63] text-sm">{formation.public}</p>
                        </div>
                      )}
                    </div>

                    {/* MODALITÉS ET DÉLAIS D'ACCÈS */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('modalites')}
                        className="w-full p-4 text-left flex items-center justify-between bg-neutral-100 hover:bg-muted-blue-200 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <h3 className="text-base font-bold text-[#013F63]">MODALITÉS ET DÉLAIS D'ACCÈS</h3>
                        </div>
                        {openSections.modalites ? (
                          <ChevronUp className="w-5 h-5 text-[#013F63]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#013F63]" />
                        )}
                      </button>
                      {openSections.modalites && (
                        <div className="p-6 border-t border-muted-blue-200">
                          {/* Timeline verticale pour les étapes */}
                          <div className="relative pl-6">
                            {/* Ligne verticale */}
                            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200">
                              <div className="w-full h-full bg-accent-500 timeline-scroll-line"></div>
                            </div>
                            
                            {/* Étapes */}
                            <div className="space-y-10 relative">
                              
                              {/* Étape 1 : Rendez-vous initial */}
                              <div className="flex items-start gap-5">
                                <div className="relative z-10 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 -ml-6 shadow-sm">
                                  <span className="text-white text-base font-bold">1</span>
                                </div>
                                <div className="flex-grow">
                                  <h4 className="text-accent-500 font-bold text-base mb-4 uppercase tracking-tight">
                                    Rendez-vous
                                  </h4>
                                  <p className="text-[#013F63] text-sm leading-relaxed mb-4">
                                    Nous sommes à votre disposition, par téléphone ou par mail, afin d'analyser et d'évaluer vos besoins.
                                  </p>
                                  <p className="text-[#013F63] text-sm leading-relaxed mb-4">
                                    Dans le cadre de nos actions de <strong>formation INTRA</strong>, un programme est construit, personnalisé et élaboré, en cohérence avec vos objectifs et les spécificités de votre structure.
                                  </p>
                                  <Link
                                    href={getFormationContactHref(SEO_SLUG)}
                                    className="inline-flex items-center px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-md transition-colors text-sm"
                                  >
                                    Prendre rendez-vous
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                  </Link>
                                </div>
                              </div>

                              {/* Étape 2 : Financement et délais d'accès */}
                              <div className="flex items-start gap-5">
                                <div className="relative z-10 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 -ml-6 shadow-sm">
                                  <span className="text-white text-base font-bold">2</span>
                                </div>
                                <div className="flex-grow">
                                  <h4 className="text-accent-500 font-bold text-base mb-4 uppercase tracking-tight">
                                    Financement et délais d'accès
                                  </h4>
                                  <p className="text-[#013F63] text-sm leading-relaxed mb-4">
                                    Selon le type de financement choisi, il y aura certaines durées d'accès à prendre en compte.
                                  </p>
                                  <div className="grid gap-3 mt-4">
                                    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-400">
                                      <div className="flex items-start gap-3">
                                        <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 mt-0.5 border border-muted-blue-200 p-1.5">
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
                                          <p className="text-[#013F63] text-sm leading-relaxed">Délai de traitement du dossier d'environ 2 mois.</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#013F63]">
                                      <div className="flex items-start gap-3">
                                        <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 mt-0.5 border border-muted-blue-200 p-1.5">
                                          <Image 
                                            src="/images/financements/logo entreprise.jpg" 
                                            alt="Employeur" 
                                            width={40} 
                                            height={40}
                                            className="object-contain rounded"
                                          />
                                        </div>
                                        <div className="flex-1">
                                          <p className="font-semibold text-[#013F63] mb-1">Via l'employeur ou fonds personnels</p>
                                          <p className="text-[#013F63] text-sm leading-relaxed">Démarrage possible dès la signature du devis.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* MÉTHODES PÉDAGOGIQUES */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('methodes')}
                        className="w-full p-4 text-left flex items-center justify-between bg-neutral-100 hover:bg-muted-blue-200 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <h3 className="text-base font-bold text-[#013F63]">MÉTHODES PÉDAGOGIQUES</h3>
                        </div>
                        {openSections.methodes ? (
                          <ChevronUp className="w-5 h-5 text-[#013F63]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#013F63]" />
                        )}
                      </button>
                      {openSections.methodes && (
                        <div className="p-4 border-t border-muted-blue-200">
                          <div className="space-y-2">
                            {formation.methodesPedagogiques.map((methode, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[#013F63] text-sm">{methode}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* DÉROULEMENT DE LA FORMATION */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('deroulement')}
                        className="w-full p-4 text-left flex items-center justify-between bg-neutral-100 hover:bg-muted-blue-200 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <h3 className="text-base font-bold text-[#013F63]">DÉROULEMENT DE LA FORMATION</h3>
                        </div>
                        {openSections.deroulement ? (
                          <ChevronUp className="w-5 h-5 text-[#013F63]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#013F63]" />
                        )}
                      </button>
                      {openSections.deroulement && (
                        <div className="p-4 border-t border-muted-blue-200">
                          <p className="text-[#013F63] text-sm whitespace-pre-line">{formation.deroulement}</p>
                        </div>
                      )}
                    </div>

                    {/* OBJECTIFS PÉDAGOGIQUES */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('objectif')}
                        className="w-full p-4 text-left flex items-center justify-between bg-neutral-100 hover:bg-muted-blue-200 transition-colors"
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
                        <div className="p-4 border-t border-muted-blue-200">
                          <div className="space-y-2">
                            {formation.objectifs.map((objectif, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[#013F63] text-sm">{objectif}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* RÉSULTATS ATTENDUS */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('resultats')}
                        className="w-full p-4 text-left flex items-center justify-between bg-neutral-100 hover:bg-muted-blue-200 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <h3 className="text-base font-bold text-[#013F63]">RÉSULTATS ATTENDUS</h3>
                        </div>
                        {openSections.resultats ? (
                          <ChevronUp className="w-5 h-5 text-[#013F63]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#013F63]" />
                        )}
                      </button>
                      {openSections.resultats && (
                        <div className="p-4 border-t border-muted-blue-200">
                          <div className="text-[#013F63] text-sm text-justify space-y-3">
                            <p>{formation.resultatsAttendus.introduction}</p>
                            <ul className="space-y-2 ml-4">
                              {formation.resultatsAttendus.puces.map((puce, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                                  <span>{puce}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* MODALITÉS D'ÉVALUATION */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('evaluation')}
                        className="w-full p-4 text-left flex items-center justify-between bg-neutral-100 hover:bg-muted-blue-200 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <h3 className="text-base font-bold text-[#013F63]">MODALITÉS D'ÉVALUATION</h3>
                        </div>
                        {openSections.evaluation ? (
                          <ChevronUp className="w-5 h-5 text-[#013F63]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#013F63]" />
                        )}
                      </button>
                      {openSections.evaluation && (
                        <div className="p-4 border-t border-muted-blue-200">
                          <div className="text-[#013F63] text-sm leading-relaxed space-y-2">
                            <p>
                              L'évaluation des acquis est réalisée :
                            </p>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                              <span>par un auto-positionnement en amont</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                              <span>en aval de la formation, par des mises en situation et études de cas en lien avec les pratiques de recrutement.</span>
                            </div>
                            <p>
                              <strong>Une évaluation à chaud</strong> permet de mesurer la sastifaction des participants et l'attente des objectifs pédagogiques.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>


              </div>
            </div>
          </section>


          {/* Programme détaillé */}
          <section id="programme" ref={programmeRef} className="py-16 scroll-mt-24">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                    Programme <span className="text-accent-500 font-brittany text-5xl lg:text-6xl">détaillé</span>
                  </h2>
                  <p className="text-lg text-[#013F63] leading-relaxed max-w-3xl mx-auto">
                    Un parcours complet sur 3 jours pour maîtriser le recrutement inclusif
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {formation.programme.map((jour, i) => (
                    <div 
                      key={i} 
                      className={`bg-white rounded-2xl shadow-lg border border-muted-blue-200 flex flex-col transition-all duration-700 ease-out overflow-hidden ${
                        cardsVisible 
                          ? 'transform translate-y-0 opacity-100' 
                          : 'transform -translate-y-8 opacity-0'
                      }`}
                      style={{
                        transitionDelay: `${i * 200}ms`
                      }}
                    >
                      <div className="text-[#013F63] p-6 flex items-center justify-start h-20 bg-muted-blue-200">
                        <h3 className="text-xl font-bold text-left leading-tight">{jour.jour}</h3>
                      </div>
                      <div className="space-y-2 flex-1 p-8 relative">
                        {jour.contenu.map((item, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#013F63] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-[#013F63] leading-relaxed text-sm">{item}</span>
                          </div>
                        ))}
                        <div className="absolute bottom-4 right-4">
                          <span className="text-sm font-brittany text-accent-500 font-medium">
                            {jour.modalite}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>


          <FormationTarifSection
            publicPrice={seoFormation.price}
            priceSuffix={PROFESSIONNALISANTE_PRICE_SUFFIX}
            variant="professionnalisante"
            contactHref={getFormationContactHref(SEO_SLUG)}
          />

          {/* Solutions de financement */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                    Comment <span className="text-accent-500 font-brittany text-4xl lg:text-5xl">financer</span> votre formation ?
                  </h2>
                  <p className="text-lg text-[#013F63] leading-relaxed max-w-2xl mx-auto">
                    Plusieurs solutions s'offrent à vous
                  </p>
                </div>

                {/* Solutions de financement */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  
                  {/* FAF - Indépendants */}
                  <div className="text-center p-6 bg-white rounded-xl border border-muted-blue-200 hover:shadow-lg transition-shadow duration-300">
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
                  <div className="text-center p-6 bg-white rounded-xl border border-muted-blue-200 hover:shadow-lg transition-shadow duration-300">
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
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-muted-blue-200 text-center">
                      <h4 className="text-2xl font-bold text-[#013F63] mb-6">
                        <span className="text-accent-500 font-brittany text-3xl">Investissez</span> en vous-même
                      </h4>
                      <p className="text-base text-[#013F63] font-medium leading-relaxed">
                        Paiement en <span className="text-6xl font-light text-accent-500 font-brittany leading-none mx-4">x3</span> sans frais grâce à notre partenaire financier.
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
                    Prochaines <span className="text-accent-500 font-brittany text-4xl lg:text-5xl">sessions</span>
                  </h2>
                  <p className="text-lg text-[#013F63] leading-relaxed max-w-2xl mx-auto">
                    Réservez dès maintenant votre place pour cette formation spécialisée
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
                  
                  {/* Session septembre 2026 */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-muted-blue-200 text-center">
                    <div className="bg-accent-300 text-[#013F63] rounded-t-2xl -mx-8 -mt-8 p-4 mb-6">
                      <h3 className="text-2xl font-bold mb-2 text-accent-500">Session septembre 2026</h3>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-auto h-8 bg-muted-blue-200 rounded-full flex items-center justify-center px-3">
                          <span className="text-[#013F63] font-bold text-sm">Présentiel</span>
                        </div>
                        <span className="text-[#013F63] font-medium">14 et 15 septembre 2026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-auto h-8 bg-muted-blue-200 rounded-full flex items-center justify-center px-3">
                          <span className="text-[#013F63] font-bold text-sm">Distanciel</span>
                        </div>
                        <span className="text-[#013F63] font-medium">21 septembre 2026</span>
                      </div>
                    </div>
                  </div>

                  {/* Session de décembre 2026 */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-muted-blue-200 text-center">
                    <div className="bg-accent-300 text-[#013F63] rounded-t-2xl -mx-8 -mt-8 p-4 mb-6">
                      <h3 className="text-2xl font-bold mb-2 text-accent-500">Session de décembre 2026</h3>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-auto h-8 bg-muted-blue-200 rounded-full flex items-center justify-center px-3">
                          <span className="text-[#013F63] font-bold text-sm">Présentiel</span>
                        </div>
                        <span className="text-[#013F63] font-medium">07 et 08 décembre 2026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-auto h-8 bg-muted-blue-200 rounded-full flex items-center justify-center px-3">
                          <span className="text-[#013F63] font-bold text-sm">Distanciel</span>
                        </div>
                        <span className="text-[#013F63] font-medium">14 décembre 2026</span>
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
                  Intéressé(e) par cette <span className="text-accent-500 font-brittany text-4xl lg:text-5xl">formation ?</span>
                </h2>
                
                <p className="text-xl text-[#013F63] mb-12 max-w-2xl mx-auto">
                  Contactez-nous pour plus d'informations ou pour vous inscrire à cette formation
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={getFormationContactHref(SEO_SLUG)} className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
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
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl shadow-lg border border-muted-blue-200 overflow-hidden">
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
                              className="text-accent-500 hover:text-accent-600 transition-colors text-sm font-medium"
                            >
                              contact@atipikrh.com
                            </a>
                            <a 
                              href="tel:0783019955" 
                              className="text-accent-500 hover:text-accent-600 transition-colors text-sm font-medium"
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
