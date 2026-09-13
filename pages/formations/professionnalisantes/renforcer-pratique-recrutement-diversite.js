import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import GuideLeadCapture from '../../../components/GuideLeadCapture'
import FormationProfessionnelleSeoHead from '../../../components/FormationProfessionnelleSeoHead'
import FormationTarifSection from '../../../components/FormationTarifSection'
import FormationQuickAnswers from '../../../components/FormationQuickAnswers'
import FormationLandingCtas from '../../../components/FormationLandingCtas'
import {
  getFormationContactHref,
  getProfessionnelleConfigBySlug,
  PROFESSIONNALISANTE_PRICE_SUFFIX,
} from '../../../lib/seo/professionnalisantesConfig'
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

const SEO_SLUG = 'renforcer-pratique-recrutement-diversite'
const seoFormation = getProfessionnelleConfigBySlug(SEO_SLUG)

export default function RenforcerPratiqueRecrutementDiversite() {
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
    titre: seoFormation?.titreAffichage ?? "Renforcer ses pratiques de recrutement sur les compétences : de la diversité à la performance RH",
    sousTitre: "Formation courte – Professionnalisation des pratiques RH",
    presentation: "Dans un contexte où les enjeux de recrutement, d'attractivité et de fidélisation des talents deviennent stratégiques, structurer des recrutements fondés sur les compétences permet de sécuriser les décisions, d'élargir les viviers et de renforcer durablement la performance RH. Cette formation vous donne les clés pour déployer une démarche de recrutement inclusive, outillée et orientée résultats, au service de votre stratégie RH et de votre marque employeur.",
    public: "Pour les professionnel·les des RH, recruteurs et managers d'entreprises amenés à recruter",
    objectifs: [
      "Comprendre et maîtriser les fondamentaux du recrutement inclusif",
      "Objectiver et fiabiliser le processus de recrutement",
      "Déployer une démarche RH durable et partenariale"
    ],
    prerequis: [
      "Avoir une première expérience du recrutement",
      "Être amené à recruter de façon ponctuelle ou permanente"
    ],
    duree: "11 heures en mixed learning",
    dureeDetails: [
      "7h présentiel sur 1 journée - J1",
      "4h en distanciel synchrone - J3 à J+7 ou J+15"
    ],
    modalite: "Mixed learning (présentiel + distanciel synchrone et asynchrone)",
    lieu: "8 rue du Courant, 33310 Lormont",
    horaires: "Du lundi au vendredi : 9h00–12h30 / 13h30–17h00",
    effectif: "4 à 12 participants",
    niveauSortie: "Attestation de formation",
    typeAction: "Action de professionnalisation – Formation continue",
    methodesPedagogiques: [
      "Alternance d'apports théoriques, d'ateliers pratiques, d'études de cas et de jeux de rôle",
      "Travail sur des supports réels (annonces, CV, grilles d'entretien)",
      "Journée de retour d'expérience en distanciel pour consolider les acquis"
    ],
    modalitesAdmission: "Nous sommes à votre disposition, par téléphone ou par mail, afin d'analyser et d'évaluer vos besoins. Dans le cadre de nos actions de formation INTRA, un programme est construit, personnalisé et élaboré, en cohérence avec vos objectifs et les spécificités de votre structure.",
    resultatsAttendus: {
      introduction: "À l'issue de la formation, le/la stagiaire est en capacité de",
      puces: [
        "Adapter une politque de recrutement inclusive"
      ]
    },
    financement: [
      "OPCO",
      "Fonds d'Assurance Formation (FAF)",
      "Financement personnel"
    ],
    programme: [
      {
        jour: "Jour 1",
        contenu: [
          "Auto diagnostic des pratiques de recrutement",
          "Distinction entre inclusion, insertion, non discrimination, diversité",
          "Usage d'un langage commun",
          "Le recrutement inclusif : pourquoi et comment?"
        ],
        modalite: "Présentiel"
      },
      {
        jour: "Jour 2",
        contenu: [
          "La pratique des partenariats",
          "Co Construction d'une Charte des bonnes pratiques",
          "Élaboration d'un plan d'action transférable"
        ],
        modalite: "Distanciel synchrone",
        note: "Organisé à J+7 ou J+15"
      }
    ]
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
          <GuideLeadCapture />

          {/* Navigation de retour */}
          <section className="py-6">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Link 
                  href="/formations/courtes-professionnalisantes" 
                  className="inline-flex items-center gap-2 text-[#013F63] hover:text-accent-500 transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour aux formations
                </Link>
              </div>
            </div>
          </section>

          {/* Hero Section */}
          <section className="relative py-12 lg:py-16 bg-gradient-to-r from-blue-50 via-blue-50/50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-2xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight tracking-tight">
                  {seoFormation?.titreAffichage}
                </h1>
                
                <p className="text-lg lg:text-xl text-[#013F63] font-normal leading-relaxed">
                  {seoFormation?.sousTitreCarte}
                </p>
                <p className="mt-4 text-sm text-[#013F63]/80 max-w-2xl mx-auto">
                  Obligation légale de formation anti-discrimination :{' '}
                  <Link href="/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif" className="font-semibold text-orange-500 hover:underline">
                    Prévenir les discriminations dans le recrutement
                  </Link>
                  {' '}(11 h, formation obligatoire).
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
                
                {/* Section Présentation - Style carte */}
                <section className="py-4 my-4 mb-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#013F63]">
                      <div className="text-[#013F63] text-lg leading-relaxed text-center">
                        <p className="mb-3">
                          {formation.presentation}
                        </p>
                        <div className="w-20 h-0.5 bg-gradient-to-r from-orange-300 to-orange-500 mb-3 mx-auto"></div>
                        <p className="text-accent-500 font-bold">
                          Un recrutement fondé sur les compétences et l'inclusion, c'est la clé d'une performance RH durable et d'une marque employeur RSE forte.
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
                  
                  {/* Carte bleue à gauche - Informations clés */}
                  <div className="w-full lg:w-96 flex-shrink-0 rounded-xl p-4 text-white" style={{backgroundColor: '#013F63'}}>
                    <div className="mb-4">
                      <h3 className="text-lg font-bold mb-3">Informations clés</h3>
                    </div>
                    <div className="space-y-3">
                      
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Durée totale :</p>
                          <p className="text-neutral-100 text-xs">{formation.duree}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Modalité :</p>
                          <p className="text-neutral-100 text-xs">{formation.modalite}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Horaires :</p>
                          <p className="text-neutral-100 text-xs">{formation.horaires}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Lieu :</p>
                          <p className="text-neutral-100 text-xs">{formation.lieu}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Taille du groupe :</p>
                          <p className="text-neutral-100 text-xs">{formation.effectif}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Target className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-0.5 text-sm">Niveau de sortie :</p>
                          <p className="text-neutral-100 text-xs">{formation.niveauSortie}</p>
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
                          <ul className="space-y-2">
                            {formation.prerequis.map((prerequis, i) => (
                              <li key={i} className="flex items-start gap-3 text-[#013F63] text-sm">
                                <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                                {prerequis}
                              </li>
                            ))}
                          </ul>
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

                    {/* MODALITÉS D'ADMISSION */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection('modalites')}
                        className="w-full p-4 text-left flex items-center justify-between bg-neutral-100 hover:bg-muted-blue-200 transition-colors"
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
                        <div className="p-4 border-t border-muted-blue-200">
                          <p className="text-[#013F63] text-sm">
                            {formation.modalitesAdmission.split('Dans le cadre de nos actions de formation INTRA').map((part, i) => 
                              i === 0 ? (
                                <span key={i}>{part}</span>
                              ) : (
                                <span key={i}>
                                  <br />
                                  <br />
                                  Dans le cadre de nos actions de <strong>formation INTRA</strong>{part}
                                </span>
                              )
                            )}
                          </p>
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
                          <p className="text-[#013F63] text-sm mb-2">11h en mixed learning dont :</p>
                          <ul className="space-y-1 text-[#013F63] text-sm">
                            <li>7h présentiel sur 1 journée - J1</li>
                            <li>4h en distanciel synchrone - J3 à J+7 ou J+15</li>
                          </ul>
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
                          <div className="text-[#013F63] text-sm space-y-3">
                            <p className="text-justify">{formation.resultatsAttendus.introduction}</p>
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
                          <div className="text-[#013F63] text-sm space-y-3">
                            <p>L'évaluation des acquis est réalisée :</p>
                            <div className="space-y-2">
                              <div className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                                <span>par un auto-positionnement en amont</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                                <span>en aval de la formation, par des mises en situation et études de cas en lien avec les pratiques de recrutement.</span>
                              </div>
                            </div>
                            <p className="mt-3">
                              Une évaluation à chaud permet de mesurer la satisfaction des participants et l'attente des objectifs pédagogiques.
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
                </div>

                <div className="grid md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
                  {formation.programme.map((phase, i) => (
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
                      <div className="text-[#013F63] p-6 flex items-center justify-start min-h-20 bg-muted-blue-200">
                        <h3 className="text-xl font-bold text-left leading-tight">{phase.jour || phase.phase}</h3>
                      </div>
                      <div className="space-y-2 flex-1 p-8 relative">
                        {phase.contenu.map((item, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#013F63] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-[#013F63] leading-relaxed text-sm">{item}</span>
                          </div>
                        ))}
                        {phase.note && (
                          <div className="mt-4 pt-4 border-t border-muted-blue-200">
                            <p className="text-xs text-[#013F63] italic">{phase.note}</p>
                          </div>
                        )}
                        <div className="absolute bottom-4 right-4">
                          <span className="text-sm font-brittany text-accent-500 font-medium">
                            {phase.modalite}
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
                        className="object-contain w-[60px] h-[60px]"
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
                        className="object-contain w-[60px] h-[60px]"
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

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  
                  {/* Session septembre 2026 */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-muted-blue-200 text-center">
                    <div className="bg-accent-300 text-[#013F63] rounded-t-2xl -mx-8 -mt-8 p-4 mb-6">
                      <h3 className="text-2xl font-bold mb-2 text-accent-500">Session de septembre</h3>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-auto h-8 bg-muted-blue-200 rounded-full flex items-center justify-center px-3">
                          <span className="text-[#013F63] font-bold text-sm">Présentiel</span>
                        </div>
                        <span className="text-[#013F63] font-medium">18 septembre 2026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-auto h-8 bg-muted-blue-200 rounded-full flex items-center justify-center px-3">
                          <span className="text-[#013F63] font-bold text-sm">Distanciel</span>
                        </div>
                        <span className="text-[#013F63] font-medium">25 septembre 2026 matin</span>
                      </div>
                    </div>
                  </div>

                  {/* Session décembre 2026 */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-muted-blue-200 text-center">
                    <div className="bg-accent-300 text-[#013F63] rounded-t-2xl -mx-8 -mt-8 p-4 mb-6">
                      <h3 className="text-2xl font-bold mb-2 text-accent-500">Session de décembre</h3>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-auto h-8 bg-muted-blue-200 rounded-full flex items-center justify-center px-3">
                          <span className="text-[#013F63] font-bold text-sm">Présentiel</span>
                        </div>
                        <span className="text-[#013F63] font-medium">3 décembre 2026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-auto h-8 bg-muted-blue-200 rounded-full flex items-center justify-center px-3">
                          <span className="text-[#013F63] font-bold text-sm">Distanciel</span>
                        </div>
                        <span className="text-[#013F63] font-medium">10 décembre 2026 matin</span>
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
                          className="object-contain w-[50px] h-[50px]"
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

