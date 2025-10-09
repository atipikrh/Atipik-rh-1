
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { 
  Award, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Star,
  ChevronDown,
  ChevronUp,
  MapPin,
  Heart,
  Lightbulb,
  UserCheck,
  Target,
  Users,
  BookOpen
} from 'lucide-react';

export default function BilanCompetences() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openModules, setOpenModules] = useState({});

  const toggleModule = (moduleId) => {
    setOpenModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }))
  }




  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Est-ce que mon employeur sera au courant ?",
      answer: "Non, absolument pas ! Votre démarche de bilan de compétences est strictement confidentielle. Si vous utilisez votre CPF, votre employeur n'est pas informé. Même si vous réalisez votre bilan sur votre temps de travail, vous n'êtes pas obligé de révéler les résultats. La confidentialité est garantie par la loi."
    },
    {
      question: "Puis-je faire mon bilan en ligne ?",
      answer: "Oui ! Nous proposons des bilans 100% à distance via visioconférence. L'efficacité est la même qu'en présentiel, avec plus de flexibilité. Idéal si vous habitez loin de Bordeaux ou avez des contraintes horaires."
    },
    {
      question: "Quelle est la différence avec un coaching ?",
      answer: "Le bilan de compétences suit une méthodologie structurée et réglementée. Il comprend des tests validés scientifiquement et aboutit à un projet professionnel concret. Le coaching est plus libre dans sa forme et ses objectifs."
    },
    {
      question: "À quelle fréquence puis-je faire un bilan ?",
      answer: "Il n'y a pas de limite légale, mais nous recommandons d'attendre au moins 5 ans entre deux bilans pour que la démarche garde tout son sens. Vos droits CPF se rechargent chaque année jusqu'à un plafond."
    }
  ];

  return (
    <>
      <Header isFixed={true} />
      
      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      {/* Background uniforme pour toute la page */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Éléments décoratifs en arrière-plan pour toute la page */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-3000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse animation-delay-4000"></div>

        <div className="relative z-10">
        
        {/* Section titre + quiz */}
        <section className="pt-8 pb-4">
        
        <div className="relative z-10 container mx-auto px-4 pb-8">
          
          {/* Titre principal */}
          <div className="text-center mb-8 max-w-5xl mx-auto">
            <h1 className="text-2xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight tracking-tight">
              Bilan de <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">compétences</span>
            </h1>
            <p className="text-lg text-[#013F63] leading-relaxed font-light mb-8">
              Révélez votre potentiel et construisez votre avenir professionnel<br className="hidden lg:block"/>
              <span className="text-orange-500 font-medium">avec un accompagnement personnalisé</span>
            </p>
          </div>
          
          {/* Texte de contexte - Présentation originale */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative">
              {/* Éléments décoratifs en arrière-plan */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-200 rounded-full opacity-60"></div>
              
              {/* Contenu principal */}
              <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl p-8 shadow-lg border-2 border-[#013F63] relative z-10">
                <div className="space-y-4 text-center">
                  <p className="text-lg text-[#013F63] leading-relaxed">
                    À l'heure où les carrières linéaires n'existent plus ou de moins en moins...
                  </p>
                  <p className="text-lg text-[#013F63] leading-relaxed">
                    À l'heure où la digitalisation amène la disparition et la transformation des métiers,
                  </p>
                  <p className="text-lg text-[#013F63] leading-relaxed">
                    À l'heure où les questions de qualité de vie au travail, d'équilibre Vie professionnelle / Vie personnelle sont plus que jamais d'actualité.
                  </p>
                  
                  {/* Ligne de séparation décorative */}
                  <div className="flex items-center justify-center my-6">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                  </div>
                  
                  <p className="text-xl text-[#013F63] font-bold leading-relaxed">
                    <span className="text-orange-500">Le bilan de compétences constitue un outil de gestion de carrière,</span><br/>
                    <span className="text-[#013F63]">qui renforce votre employabilité !</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                        <p className="font-semibold mb-0.5 text-sm">Code Certifinfo :</p>
                        <p className="text-blue-100 text-xs">n°93559</p>
              </div>
            </div>

                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-0.5 text-sm">Durée :</p>
                        <p className="text-blue-100 text-xs">20 - 24 heures</p>
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
                        <p className="font-semibold mb-0.5 text-sm">Modalité :</p>
                        <p className="text-blue-100 text-xs">Individuelle et confidentielle</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-0.5 text-sm">Sélection :</p>
                        <p className="text-blue-100 text-xs">Entretien préalable</p>
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

                  {/* Conditions d'accès */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <button
                      className="w-full py-3.5 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
                      onClick={() => toggleModule('conditions')}
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">CONDITIONS D'ACCÈS</h3>
                              </div>
                      {openModules['conditions'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openModules['conditions'] && (
                      <div className="p-3 border-t border-gray-100">
                        <div className="space-y-2 text-[#013F63] text-sm">
                          <p><strong>Réglementaires :</strong> Le bilan de compétences est une démarche volontaire et individuelle</p>
                          <p><strong>Prérequis pédagogiques :</strong> Aucun</p>
                          <p><strong>Type de parcours :</strong> Individualisé</p>
                          <p><strong>Parcours personnalisable :</strong> Oui</p>
                          <p className="mt-2 text-orange-500 font-medium">L'ensemble des séances est réalisé de manière confidentielle et individuelle.</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Programme */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <button
                      className="w-full py-3.5 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
                      onClick={() => toggleModule('programme')}
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">PROGRAMME</h3>
                      </div>
                      {openModules['programme'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openModules['programme'] && (
                      <div className="p-3 border-t border-gray-100">
                        <div className="space-y-3 text-[#013F63] text-sm">
                          <div>
                            <p className="font-semibold text-[#013F63] mb-2">PHASE PRÉLIMINAIRE :</p>
                            <p>• Analyser le contexte de la démarche personnelle de l'individu, les objectifs et les résultats attendus concernant le bilan de compétences</p>
                            <p>• Explorer son parcours scolaire, extra-professionnel, et professionnel</p>
                            <p>• Comprendre ses choix d'orientation de vie personnels et professionnels</p>
                          </div>
                          <div>
                            <p className="font-semibold text-[#013F63] mb-2">PHASE D'INVESTIGATION :</p>
                            <p>• D'avoir une meilleure connaissance de soi, d'identifier ses atouts et ses axes d'améliorations</p>
                            <p>• Prendre de la hauteur sur l'ensemble de ses expériences en élaborant son portefeuille de compétences</p>
                            <p>• Identifier ses compétences transversales et transférables</p>
                            <p>• Comprendre ses motivations, ses besoins et ses valeurs au travail</p>
                            <p>• Élaborer ses hypothèses de projets professionnels</p>
                            <p>• Valider les pistes professionnelles en vérifiant l'adéquation Individu/projet & projet/Marché</p>
                            <p>• Déterminer les étapes et les différentes actions menant à la réalisation effective du projet</p>
                          </div>
                          <div>
                            <p className="font-semibold text-[#013F63] mb-2">PHASE DE CONCLUSION :</p>
                            <p>• Finaliser le document de synthèse et corédiger la conclusion et les apports du bilan de compétences</p>
                            <p>• <strong>QUESTIONNAIRE TRANSMIS À 6 MOIS POUR SUIVI</strong></p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Résultats attendus */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <button
                      className="w-full py-3.5 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
                      onClick={() => toggleModule('resultats')}
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">RÉSULTATS ATTENDUS</h3>
                      </div>
                      {openModules['resultats'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openModules['resultats'] && (
                      <div className="p-3 border-t border-gray-100">
                        <div className="space-y-3 text-[#013F63] text-sm">
                          <p>1. Acquérir une meilleure connaissance de soi (traits de personnalité, compétences, valeurs, centres intérêts,...)</p>
                          <p>2. Élargir sa connaissance des outils de gestion de carrière et des dispositifs d'accompagnements et d'aides financières à l'emploi</p>
                          <p>3. Mieux appréhender le marché de l'emploi</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Suite de parcours possible */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <button
                      className="w-full py-3.5 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-xl"
                      onClick={() => toggleModule('suite')}
                    >
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold text-[#013F63]">SUITE DE PARCOURS POSSIBLE</h3>
                      </div>
                      {openModules['suite'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                    {openModules['suite'] && (
                      <div className="p-3 border-t border-gray-100">
                        <div className="space-y-3 text-[#013F63] text-sm">
                          <p>• Questionnaire de suivi à 6 mois</p>
                        </div>
                      </div>
                    )}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Espacement entre les sections */}
          <div className="py-8"></div>
          
          {/* Section Quiz d'éligibilité - Version simple */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl">
              
              {/* Partie gauche - Questions en cartes */}
              <div className="bg-neutral-100 p-12">
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-orange-500 hover:shadow-md transition-shadow duration-200">
                    <span className="text-[#013F63] font-medium">Vous vous sentez perdu(e) professionnellement ?</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-orange-500 hover:shadow-md transition-shadow duration-200">
                    <span className="text-[#013F63] font-medium">Votre travail manque de sens à vos yeux ?</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-orange-500 hover:shadow-md transition-shadow duration-200">
                    <span className="text-[#013F63] font-medium">Vous ne vous sentez pas (plus) à votre place ?</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-orange-500 hover:shadow-md transition-shadow duration-200">
                    <span className="text-[#013F63] font-medium">Le métier vous pose question ou l'entreprise au sein de laquelle vous évoluez ne correspond plus à vos valeurs...</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-orange-500 hover:shadow-md transition-shadow duration-200">
                    <span className="text-[#013F63] font-medium">Vous avez l'impression de ne pas/plus avoir de compétences.</span>
                  </div>
                </div>
              </div>
              
              {/* Partie droite - Appel à l'action vers le quiz */}
              <div className="bg-blue-200 text-[#013F63] p-12 flex items-center">
                <div className="w-full text-center">
                  <p className="text-2xl mb-4 text-[#013F63] italic font-semibold">
                    Une situation vous interpelle ?
                  </p>
                  <p className="text-xl mb-8 text-[#013F63] font-medium">
                    Découvrez en 2 minutes si le bilan de compétences peut vous aider
                  </p>
                  <Link href="/bilan-de-competences/quiz" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#013F63] hover:bg-gray-50 font-semibold rounded-lg transition-all duration-300 border-2 border-white/20 hover:border-white shadow-md hover:shadow-xl text-lg transform hover:scale-105 hover:-translate-y-1 group">
                    Démarrer le quiz
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>






        </div>
      </section>

      {/* À l'issue de votre bilan de compétences */}
      <section className="pt-6 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="max-w-3xl mx-auto">
                
                <div className="text-center mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-2 leading-tight">
                    À l'issue de votre <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">bilan de compétences</span>
                  </h2>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg text-[#013F63] mb-4 text-center font-medium">
                    Vous serez capable de :
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#013F63] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-[#013F63] leading-relaxed">
                        <strong>Identifier vos projets réalisables</strong> en fonction de vos compétences et vos motivations réalistes en fonction du marché de l'emploi
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#013F63] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-[#013F63] leading-relaxed">
                        <strong>Repérer vos atouts</strong> et vos axes de développement personnel
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#013F63] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-[#013F63] leading-relaxed">
                        <strong>Recenser les savoir-faire et savoir-être</strong> que vous souhaitez mobiliser et développer pour votre nouveau projet professionnel
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#013F63] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-base text-[#013F63] leading-relaxed">
                        <strong>Déterminer les différentes actions concrètes</strong> qui vous mèneront à l'atteinte de vos objectifs professionnels
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Nos 2 formules */}
        <section className="pt-8 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-2">
                Nos <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">2 formules</span>
              </h2>
              <p className="text-lg text-[#013F63] leading-relaxed font-light max-w-2xl mx-auto">
                Deux approches adaptées à vos besoins et votre situation
              </p>
            </div>

            {/* Grille des formules */}
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              
              {/* Formule Essentiel */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="bg-orange-100 p-6 text-center">
                  <h3 className="text-2xl font-bold text-orange-500">Essentiel</h3>
                </div>
                
                {/* Contenu de la carte */}
                <div className="p-6">
                  
                  {/* Prix en haut */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-orange-500 mb-2">1 900<span className="text-2xl">€</span></div>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-4">
                    <p className="text-[#013F63] text-center leading-relaxed text-sm">
                      Vous avez des idées de projets professionnels mais vous ne savez pas vers quelle piste vous tourner ?
                    </p>
                    <p className="text-[#013F63] font-bold text-center mt-2 text-sm">
                      Alors cette formule d'accompagnement est faite pour vous !
                    </p>
                  </div>
                  
                  {/* Détails */}
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#013F63] text-sm">
                        <strong>20 heures</strong> d'accompagnement dont <strong>16 heures</strong> de face à face ou en visioconférence
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#013F63] text-sm">Remise du document de synthèse</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#013F63] text-sm">Suivi à 6 mois</span>
                    </div>
                  </div>
                  
                  {/* Bouton */}
                  <div className="text-center">
                    <a href="https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/84890745700024_BCESSENTIELPRESENTIEL/84890745700024_BCESSENTIELDISTANCIEL" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors">
                      Je choisis cette formule
                    </a>
                  </div>
                </div>
              </div>

              {/* Formule Horizon */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="bg-blue-100 p-6 text-center">
                  <h3 className="text-2xl font-bold text-blue-600">Horizon</h3>
                </div>
                
                {/* Contenu de la carte */}
                <div className="p-6">
                  
                  {/* Prix en haut */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">2 250<span className="text-2xl">€</span></div>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-4">
                    <p className="text-[#013F63] text-center leading-relaxed text-sm">
                      Vous ressentez le besoin et la nécessité de faire un état des lieux approfondi pour préparer votre transition et évolution professionnelle ?
                    </p>
                    <p className="text-[#013F63] font-bold text-center mt-2 text-sm">
                      Alors cette formule d'accompagnement est faite pour vous !
                    </p>
                  </div>
                  
                  {/* Détails */}
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#013F63] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#013F63] text-sm">
                        <strong>24 heures</strong> d'accompagnement dont <strong>20 heures</strong> de face à face ou en visioconférence
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#013F63] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#013F63] text-sm">Remise du document de synthèse</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#013F63] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#013F63] text-sm">Suivi à 6 mois</span>
                    </div>
                  </div>
                  
                  {/* Bouton */}
                  <div className="text-center">
                    <a href="https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/84890745700024_BCPANORAMAPRESENTIEL/84890745700024_BCPANORAMAPRESENTIEL" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors">
                      Je choisis cette formule
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Information sur l'entretien gratuit */}
            <div className="text-center mb-8">
              <Link href="/contact">
                <p className="text-xl text-[#013F63] font-medium inline-flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer">
                  💡 Le premier entretien est gratuit et sans engagement
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </p>
              </Link>
            </div>

            {/* Espacement entre les formules et le financement */}
            <div className="mb-16"></div>

            {/* Solutions de financement */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                Comment <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">financer</span> votre bilan ?
              </h2>
              <p className="text-lg text-[#013F63] leading-relaxed font-light max-w-2xl mx-auto">
                Plusieurs solutions s'offrent à vous
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              
              {/* Financements pour les salariés */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 w-full">
                <h4 className="text-lg font-bold text-[#013F63] mb-4 text-center">Pour les salariés</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-white rounded-xl border border-blue-200 hover:shadow-md transition-shadow duration-300 flex flex-col h-40 w-full">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                      <Image
                        src="/images/financements/cpf.jpg"
                        alt="Logo CPF"
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>
                    <h5 className="font-semibold text-[#013F63] text-sm mb-1 h-12 flex items-center justify-center text-center leading-tight">CPF</h5>
                  </div>
                  
                  <div className="text-center p-6 bg-white rounded-xl border border-blue-200 hover:shadow-md transition-shadow duration-300 flex flex-col h-40 w-full">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                      <Image
                        src="/images/financements/Logo-Financement-Personnel.webp"
                        alt="Logo Autofinancement"
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>
                    <h5 className="font-semibold text-[#013F63] text-sm mb-1 h-12 flex items-center justify-center text-center leading-tight">Financement personnel</h5>
                  </div>
                </div>
              </div>
              
              {/* Financements pour les employeurs */}
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 w-full">
                <h4 className="text-lg font-bold text-[#013F63] mb-4 text-center">Pour les employeurs</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-white rounded-xl border border-orange-200 hover:shadow-md transition-shadow duration-300 flex flex-col h-40 w-full">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                      <Image
                        src="/images/financements/logo entreprise.jpg"
                        alt="Logo Plan de développement des compétences"
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>
                    <h5 className="font-semibold text-[#013F63] text-sm mb-1 h-12 flex items-center justify-center text-center leading-tight">Plan de développement des compétences</h5>
                  </div>
                  
                  <div className="text-center p-6 bg-white rounded-xl border border-orange-200 hover:shadow-md transition-shadow duration-300 flex flex-col h-40 w-full">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                      <Image
                        src="/images/financements/logo-opco.webp"
                        alt="Logo OPCO"
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>
                    <h5 className="font-semibold text-[#013F63] text-sm mb-1 h-12 flex items-center justify-center text-center leading-tight">OPCO</h5>
                  </div>
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
            
            <div className="text-center mb-8 mt-8">
              <Link href="/financement" className="inline-flex items-center gap-2 px-6 py-3 bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                En savoir plus sur les financements
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>





      {/* Témoignages */}
        <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight">
                Découvrez <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">les témoignages</span> de ceux qui ont franchi le pas
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative group h-full">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-orange-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#013F63] mb-4 italic text-sm leading-relaxed flex-grow">
                    "Excellent accompagnement en bilan de compétences. Vanessa est une 
                    personne très humaine et à l'écoute. Ma reconversion est en cours grâce à 
                    ses conseils et sa connaissance des différents dispositifs possibles. 
                    Je recommande ses services et y reviendrai moi-même au besoin."
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      A
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-[#013F63] text-sm">Anissa Bouderbal</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group h-full">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-orange-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#013F63] mb-4 italic text-sm leading-relaxed flex-grow">
                    "J'ai fait un bilan de compétences avec Vanessa, je suis très satisfaite de ce 
                    bilan qui m'a énormément aidé. Vanessa est à l'écoute et disponible, elle sait 
                    valoriser les parcours et les personnes et guider sans rien imposer. Je 
                    recommande les yeux fermés."
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      A
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-[#013F63] text-sm">Anastasia Roch</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group h-full">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-orange-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#013F63] mb-4 italic text-sm leading-relaxed flex-grow">
                    "Une superbe expérience, un bilan de compétences réalisé avec beaucoup de 
                    patience et d'empathie de la part de Vanessa. Elle m'a aidé à ouvrir les yeux 
                    sur mes compétence, mes axes d'amélioration, à trouver le métier idéal et qui 
                    me correspond pour ma reconversion. Je recommande ce cabinet à 200%"
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      M
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-[#013F63] text-sm">Mathilde Mahé</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
        <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight">
              Questions <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">fréquentes</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFaq(index);
                    }}
                  >
                    <span className="font-semibold text-lg text-[#013F63] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-6 h-6 text-gray-600 transition-transform flex-shrink-0 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <p className="text-[#013F63] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

          {/* Cadre réglementaire */}
          <section className="py-4">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                
                {/* Contenu principal - Version compacte */}
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl shadow-md border border-gray-100 p-4">
                  <div className="text-center">
                    <p className="text-[#013F63] text-sm leading-relaxed">
                      <strong>Cadre réglementaire :</strong> Le bilan de compétences est encadré par le Code du travail. 
                      <a 
                        href="/documents/Cadre-legal-du-Bilan-de-competences.pdf" 
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

        </div>
      </div>

      

      <Footer />
    </>
  );
} 