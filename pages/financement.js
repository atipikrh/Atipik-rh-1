import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ArrowRight, ChevronDown, Users, CreditCard, FileText, UserCheck } from 'lucide-react'

export default function Financement() {
  const [activeTab, setActiveTab] = useState('salaries');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Mon employeur sera-t-il informé si j'utilise mon CPF ?",
      answer: "Non, l'utilisation de votre CPF est strictement confidentielle. Votre employeur n'a aucune visibilité sur vos démarches de formation."
    },
    {
      question: "Comment obtenir l'AIF de Pôle Emploi ?",
      answer: "Présentez votre projet de formation à votre conseiller Pôle Emploi. La formation doit être cohérente avec votre projet professionnel. Nous vous aidons à préparer le dossier."
    },
    {
      question: "Comment connaître mon organisme de financement ?",
      answer: "Cela dépend de votre activité : FIFPL (professions libérales), AGEFICE (commerçants), FAFCEA (artisans). Nous vous aidons à identifier le bon organisme."
    },
    {
      question: "Puis-je cumuler plusieurs financements ?",
      answer: "Oui ! Par exemple : CPF + AIF pour les demandeurs d'emploi, CPF + plan de formation pour les salariés, ou CPF + FAF pour les indépendants."
    }
  ];
  const salariesCards = [
    {
      logoSrc: "/images/financements/cpf.jpg",
      logoAlt: "Logo CPF - Compte Personnel de Formation",
      title: "CPF (Compte Personnel de Formation)",
      details: [
        { label: "Montant", value: "500€/an (800€ si moins qualifié), plafond 5000€" },
        { label: "Avantages", value: "Utilisation libre et confidentielle" },
        { label: "Démarches", value: "100% en ligne sur MonCompteFormation" },
        { label: "Délai", value: "11 jours maximum" }
      ],
      buttonText: "Vérifier mes droits CPF",
      buttonStyle: "primary",
      buttonLink: "https://www.moncompteformation.gouv.fr",
      external: true
    },
    {
      logoSrc: "/images/financements/logo entreprise.jpg",
      logoAlt: "Logo Plan de développement des compétences",
      title: "Plan de développement des compétences",
      details: [
        { label: "Financement", value: "100% pris en charge par l'employeur" },
        { label: "Avantages", value: "Formation sur temps de travail possible" },
        { label: "Conditions", value: "Accord de l'employeur nécessaire" },
        { label: "Délai", value: "Variable selon l'entreprise" }
      ],
      buttonText: "Étudier cette option",
      buttonStyle: "secondary",
      buttonLink: "/contact",
      external: false
    },
    {
      logoSrc: "/images/financements/Bloc_Marque_RF_France_Travail_CMJN_Horizontal_Coul_Positif.jpg",
      logoAlt: "Logo France Travail - CSP - Contrat de Sécurisation Professionnelle",
      title: "CSP (Contrat de Sécurisation Professionnelle)",
      details: [
        { label: "Contexte", value: "Licenciement économique envisagé" },
        { label: "Financement", value: "Prise en charge totale par France Travail" },
        { label: "Accompagnement", value: "Reclassement accéléré personnalisé" },
        { label: "Indemnisation", value: "Allocation de sécurisation professionnelle" }
      ],
      buttonText: "En savoir plus sur le CSP",
      buttonStyle: "primary",
      buttonLink: "https://www.service-public.fr/particuliers/vosdroits/F13819",
      external: true
    },
    {
      logoSrc: "/images/financements/Logo-Financement-Personnel.webp",
      logoAlt: "Logo Autres financements",
      title: "Autres financements",
      details: [
        { label: "Financement personnel", value: "Paiement en 3x, 6x ou 9x avec notre partenaire financier" },
        { label: "Abondement CPF", value: "Complément personnel ou employeur" },
        { label: "Co-financement", value: "CPF + plan de formation" },
        { label: "Avantage", value: "Démarrage immédiat" }
      ],
      buttonText: "Étudier cette option",
      buttonStyle: "secondary",
      buttonLink: "/contact",
      external: false
    },
    {
      logoSrc: "/images/financements/logo-agefiph.png",
      logoAlt: "Logo AGEFIPH",
      title: "AGEFIPH",
      details: [
        { label: "Public", value: "Personnes en situation de handicap" },
        { label: "Financement", value: "Prise en charge totale ou partielle" },
        { label: "Conditions", value: "Reconnaissance de handicap RQTH" },
        { label: "Démarches", value: "Dossier à constituer avec justificatifs" }
      ],
      buttonText: "En savoir plus AGEFIPH",
      buttonStyle: "primary",
      buttonLink: "https://www.agefiph.fr/aides-financieres/aide-ladaptation-des-situations-de-formation",
      external: true
    },
    {
      logoSrc: "/images/financements/Bloc_Marque_RF_France_Travail_CMJN_Horizontal_Coul_Positif.jpg",
      logoAlt: "Logo Transition Pro",
      title: "Transition Pro",
      details: [
        { label: "Contexte", value: "Projet de reconversion professionnelle" },
        { label: "Financement", value: "Prise en charge totale par France Travail" },
        { label: "Conditions", value: "Salarié en CDI depuis au moins 2 ans" },
        { label: "Avantage", value: "Maintien du salaire pendant la formation" }
      ],
      buttonText: "En savoir plus Transition Pro",
      buttonStyle: "primary",
      buttonLink: "https://www.francetravail.fr/candidat/en-formation/transition-pro",
      external: true
    }
  ];


  return (
    <>
      <Head>
        <title>Financement formations CPF, VAE, bilan de compétences | Atipik RH</title>
        <meta name="description" content="Découvrez toutes les solutions de financement pour vos formations à Bordeaux : CPF, Pôle Emploi, employeur selon votre statut professionnel." />
        <meta name="keywords" content="financement formation CPF, Mon Compte Formation, financement bilan compétences, financement VAE, Pôle Emploi AIF" />
        <link rel="canonical" href="https://atipikrh.fr/financement" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background animé global */}
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        
        <div className="relative z-10">
          <Header isFixed={true} />

          {/* Spacer for fixed header */}
          <div className="h-20"></div>

          {/* Hero Section */}
          <section className="relative py-8">            
            <div className="container mx-auto px-4 pt-4 pb-4">
            
            {/* Titre principal */}
            <div className="text-center mb-3 max-w-5xl mx-auto">
              <h1 className="text-2xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight tracking-tight">
                Solutions de <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">financement</span><br/>
                selon votre <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">statut</span>
              </h1>
              <p className="text-lg text-[#013F63] leading-relaxed font-light mb-6">
                Chaque situation professionnelle offre des possibilités de financement spécifiques<br className="hidden lg:block"/>
                <span className="text-orange-500 font-bold">Découvrez celles qui vous correspondent</span>
              </p>
            </div>
          </div>
        </section>

          {/* Section principale avec onglets */}
          <section className="pt-12 pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Onglets de navigation avec nouveau design */}
              <div className="mb-8">
                <div className="flex justify-center">
                  <div className="flex flex-wrap justify-center bg-white p-2 rounded-2xl shadow-lg border border-gray-200 gap-1">
                    <button 
                      onClick={() => setActiveTab('salaries')}
                      className={`px-3 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold transition-all duration-300 text-sm lg:text-base ${
                        activeTab === 'salaries' 
                          ? 'bg-[#013F63] text-white shadow-lg transform scale-105' 
                          : 'text-gray-600 hover:text-[#013F63] hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-1 lg:gap-2">
                        <Users className="w-4 h-4 lg:w-5 lg:h-5" />
                        <span className={activeTab === 'salaries' ? 'inline' : 'hidden sm:inline'}>Salariés</span>
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => setActiveTab('demandeurs-emploi')}
                      className={`px-3 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold transition-all duration-300 text-sm lg:text-base ${
                        activeTab === 'demandeurs-emploi' 
                          ? 'bg-[#013F63] text-white shadow-lg transform scale-105' 
                          : 'text-gray-600 hover:text-[#013F63] hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-1 lg:gap-2">
                        <CreditCard className="w-4 h-4 lg:w-5 lg:h-5" />
                        <span className={activeTab === 'demandeurs-emploi' ? 'inline' : 'hidden sm:inline'}>Demandeurs d'emploi</span>
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => setActiveTab('independants')}
                      className={`px-3 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold transition-all duration-300 text-sm lg:text-base ${
                        activeTab === 'independants' 
                          ? 'bg-[#013F63] text-white shadow-lg transform scale-105' 
                          : 'text-gray-600 hover:text-[#013F63] hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-1 lg:gap-2">
                        <FileText className="w-4 h-4 lg:w-5 lg:h-5" />
                        <span className={activeTab === 'independants' ? 'inline' : 'hidden sm:inline'}>Travailleurs indépendants</span>
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => setActiveTab('employeurs')}
                      className={`px-3 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold transition-all duration-300 text-sm lg:text-base ${
                        activeTab === 'employeurs' 
                          ? 'bg-[#013F63] text-white shadow-lg transform scale-105' 
                          : 'text-gray-600 hover:text-[#013F63] hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-1 lg:gap-2">
                        <UserCheck className="w-4 h-4 lg:w-5 lg:h-5" />
                        <span className={activeTab === 'employeurs' ? 'inline' : 'hidden sm:inline'}>Employeurs</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Contenu conditionnel basé sur l'onglet actif */}
              {activeTab === 'salaries' && (
                <>
                  {/* Options de financement pour salariés avec défilement horizontal */}
                  <div className="overflow-x-auto px-4 py-8">
                    <div className="flex gap-4 md:gap-6 w-max pl-4 pr-4">
                      {salariesCards.map((card, index) => {
                        return (
                          <div key={index} className="flex-shrink-0 w-80">
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[550px]">
                              <div className="flex items-center gap-4 mb-6 h-20">
                                <div className="w-16 h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 p-2">
                                  <Image
                                    src={card.logoSrc}
                                    alt={card.logoAlt}
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                  />
                                </div>
                                <h3 className="text-sm md:text-lg font-bold text-[#013F63] leading-tight flex-1 text-center">{card.title}</h3>
                              </div>
                              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                                {card.details.map((detail, detailIndex) => (
                                  <p key={detailIndex} className="text-[#013F63] text-sm">
                                    <strong>{detail.label} :</strong> {detail.value}
                                  </p>
                                ))}
                              </div>
                              {card.external ? (
                                <a 
                                  href={card.buttonLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className={`block w-full text-center px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition mt-auto text-sm md:text-base ${
                                    card.buttonStyle === 'primary' 
                                      ? 'bg-[#013F63] hover:bg-[#012a4a] text-white' 
                                      : 'border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white'
                                  }`}
                                >
                                  {card.buttonText}
                                </a>
                              ) : (
                                <Link 
                                  href={card.buttonLink} 
                                  className={`block w-full text-center px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition mt-auto text-sm md:text-base ${
                                    card.buttonStyle === 'primary' 
                                      ? 'bg-[#013F63] hover:bg-[#012a4a] text-white' 
                                      : 'border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white'
                                  }`}
                                >
                                  {card.buttonText}
                                </Link>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'demandeurs-emploi' && (
                <>
                  {/* Options de financement pour demandeurs d'emploi avec défilement horizontal */}
                  <div className="overflow-x-auto px-4 py-8">
                    <div className="flex gap-4 md:gap-6 w-max pl-4 pr-4">
                    
                    {/* AIF */}
                    <div className="flex-shrink-0 w-72 md:w-80">
                      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[500px] md:h-[550px]">
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 h-16 md:h-20">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 p-2">
                          <Image
                            src="/images/financements/Bloc_Marque_RF_France_Travail_CMJN_Horizontal_Coul_Positif.jpg"
                            alt="Logo France Travail"
                            width={48}
                            height={48}
                            className="object-contain w-6 h-6 md:w-12 md:h-12"
                          />
                        </div>
                        <h3 className="text-sm md:text-lg font-bold text-[#013F63] leading-tight flex-1 text-center">AIF (Aide Individuelle à la Formation)</h3>
                      </div>
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Financement :</strong> Complète le CPF ou finance totalement</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Conditions :</strong> Formation en lien avec projet professionnel</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Démarches :</strong> Via votre conseiller Pôle Emploi</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Délai :</strong> 15-30 jours après validation</p>
                      </div>
                      <a href="https://www.francetravail.fr/candidat/en-formation/mes-aides-financieres/laide-individuelle-a-la-formatio.html" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition mt-auto">
                        En savoir plus sur l'AIF
                      </a>
                      </div>
                    </div>

                    {/* CPF */}
                    <div className="flex-shrink-0 w-72 md:w-80">
                      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[500px] md:h-[550px]">
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 h-16 md:h-20">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 p-2">
                          <Image
                            src="/images/financements/cpf.jpg"
                            alt="Logo CPF"
                            width={48}
                            height={48}
                            className="object-contain w-6 h-6 md:w-12 md:h-12"
                          />
                        </div>
                        <h3 className="text-sm md:text-lg font-bold text-[#013F63] leading-tight flex-1 text-center">CPF</h3>
                      </div>
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Vos droits :</strong> Conservés pendant le chômage</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Utilisation :</strong> Libre et immédiate</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Complément :</strong> Souvent complété par l'AIF</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Avantage :</strong> Démarches 100% en ligne</p>
                      </div>
                      <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition mt-auto">
                        Consulter mon CPF
                      </a>
                      </div>
                    </div>

                    {/* Auto-financement */}
                    <div className="flex-shrink-0 w-72 md:w-80">
                      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[500px] md:h-[550px]">
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 h-16 md:h-20">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 p-2">
                          <Image
                            src="/images/financements/Logo-Financement-Personnel.webp"
                            alt="Logo Financement Personnel"
                            width={48}
                            height={48}
                            className="object-contain w-6 h-6 md:w-12 md:h-12"
                          />
                        </div>
                        <h3 className="text-sm md:text-lg font-bold text-[#013F63] leading-tight flex-1 text-center">Auto-financement</h3>
                      </div>
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Facilités :</strong> Paiement en 3x, 6x ou 9x avec notre partenaire financier</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Réduction :</strong> Tarifs préférentiels possibles</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Rapidité :</strong> Démarrage immédiat</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>ROI :</strong> Investissement pour retour à l'emploi</p>
                      </div>
                      <Link href="/contact" className="block w-full text-center px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition mt-auto">
                        Étudier cette option
                      </Link>
                      </div>
                    </div>

                    {/* AGEFIPH */}
                    <div className="flex-shrink-0 w-72 md:w-80">
                      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[500px] md:h-[550px]">
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 h-16 md:h-20">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 p-2">
                          <Image
                            src="/images/financements/logo-agefiph.png"
                            alt="Logo AGEFIPH"
                            width={48}
                            height={48}
                            className="object-contain w-6 h-6 md:w-12 md:h-12"
                          />
                        </div>
                        <h3 className="text-sm md:text-lg font-bold text-[#013F63] leading-tight flex-1 text-center">AGEFIPH</h3>
                      </div>
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Public :</strong> Personnes en situation de handicap</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Financement :</strong> Prise en charge totale ou partielle</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Conditions :</strong> Reconnaissance de handicap RQTH</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Démarches :</strong> Dossier à constituer avec justificatifs</p>
                      </div>
                      <a href="https://www.agefiph.fr/aides-financieres/aide-ladaptation-des-situations-de-formation" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition mt-auto">
                        En savoir plus AGEFIPH
                      </a>
                      </div>
                    </div>


                    {/* FSE */}
                    <div className="flex-shrink-0 w-72 md:w-80">
                      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[500px] md:h-[550px]">
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 h-16 md:h-20">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 p-2">
                          <Image
                            src="/images/financements/logo-fse.png"
                            alt="Logo FSE - Fonds Social Européen"
                            width={48}
                            height={48}
                            className="object-contain w-6 h-6 md:w-12 md:h-12"
                          />
                        </div>
                        <h3 className="text-sm md:text-lg font-bold text-[#013F63] leading-tight flex-1 text-center">FSE (Fonds Social Européen)</h3>
                      </div>
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Financement :</strong> Cofinancement européen des formations</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Public :</strong> Demandeurs d'emploi peu qualifiés</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Objectif :</strong> Insertion professionnelle et montée en compétences</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Démarches :</strong> Via organismes de formation partenaires</p>
                      </div>
                      <Link href="/contact" className="block w-full text-center px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition mt-auto">
                        Étudier cette option
                      </Link>
                      </div>
                    </div>
                  </div>
                  </div>
                </>
              )}

              {activeTab === 'independants' && (
                <>
                  {/* Options de financement pour indépendants avec défilement horizontal */}
                  <div className="overflow-x-auto px-4 py-8">
                    <div className="flex gap-4 md:gap-6 w-max pl-4 pr-4">
                    
                    {/* FAF */}
                    <div className="flex-shrink-0 w-72 md:w-80">
                      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[500px] md:h-[550px]">
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 h-16 md:h-20">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 p-2">
                          <Image
                            src="/images/financements/logo-faf.jpeg"
                            alt="Logo FAF"
                            width={48}
                            height={48}
                            className="object-contain w-6 h-6 md:w-12 md:h-12"
                          />
                        </div>
                        <h3 className="text-sm md:text-lg font-bold text-[#013F63] leading-tight flex-1 text-center">FAF (Fonds d'Assurance Formation)</h3>
                      </div>
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>FIFPL :</strong> Professions libérales</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>AGEFICE :</strong> Commerçants et dirigeants</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>FAFCEA :</strong> Artisans</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Conditions :</strong> Être à jour des cotisations</p>
                      </div>
                      <a href="https://entreprendre.service-public.fr/vosdroits/F31148" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition mt-auto">
                        Identifier mon FAF
                      </a>
                      </div>
                    </div>

                    {/* CPF */}
                    <div className="flex-shrink-0 w-72 md:w-80">
                      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[500px] md:h-[550px]">
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 h-16 md:h-20">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 p-2">
                          <Image
                            src="/images/financements/cpf.jpg"
                            alt="Logo CPF"
                            width={48}
                            height={48}
                            className="object-contain w-6 h-6 md:w-12 md:h-12"
                          />
                        </div>
                        <h3 className="text-sm md:text-lg font-bold text-[#013F63] leading-tight flex-1 text-center">CPF</h3>
                      </div>
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Alimentation :</strong> 500€/an si vous cotisez</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Utilisation :</strong> Libre choix des formations</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Cumul :</strong> Possible avec financement FAF</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Démarches :</strong> 100% en ligne</p>
                      </div>
                      <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition mt-auto">
                        Vérifier mes droits CPF
                      </a>
                      </div>
                    </div>

                    {/* Auto-financement */}
                    <div className="flex-shrink-0 w-72 md:w-80">
                      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[500px] md:h-[550px]">
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 h-16 md:h-20">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 p-2">
                          <Image
                            src="/images/financements/Logo-Financement-Personnel.webp"
                            alt="Logo Financement Personnel"
                            width={48}
                            height={48}
                            className="object-contain w-6 h-6 md:w-12 md:h-12"
                          />
                        </div>
                        <h3 className="text-sm md:text-lg font-bold text-[#013F63] leading-tight flex-1 text-center">Auto-financement</h3>
                      </div>
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Déduction fiscale :</strong> Charge déductible de votre activité</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Facilités :</strong> Paiement en 3x, 6x ou 9x avec notre partenaire financier</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>ROI :</strong> Développement de votre activité</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Flexibilité :</strong> Démarrage immédiat</p>
                      </div>
                      <Link href="/contact" className="block w-full text-center px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition mt-auto">
                        Étudier cette option
                      </Link>
                      </div>
                    </div>

                    {/* AGEFIPH */}
                    <div className="flex-shrink-0 w-72 md:w-80">
                      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[500px] md:h-[550px]">
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 h-16 md:h-20">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 p-2">
                          <Image
                            src="/images/financements/logo-agefiph.png"
                            alt="Logo AGEFIPH"
                            width={48}
                            height={48}
                            className="object-contain w-6 h-6 md:w-12 md:h-12"
                          />
                        </div>
                        <h3 className="text-sm md:text-lg font-bold text-[#013F63] leading-tight flex-1 text-center">AGEFIPH</h3>
                      </div>
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Public :</strong> Personnes en situation de handicap</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Financement :</strong> Prise en charge totale ou partielle</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Conditions :</strong> Reconnaissance de handicap RQTH</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Démarches :</strong> Dossier à constituer avec justificatifs</p>
                      </div>
                      <a href="https://www.agefiph.fr/aides-financieres/aide-ladaptation-des-situations-de-formation" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition mt-auto">
                        En savoir plus AGEFIPH
                      </a>
                      </div>
                    </div>
                  </div>
                  </div>
                </>
              )}

              {activeTab === 'employeurs' && (
                <>
                  {/* Options de financement pour employeurs avec défilement horizontal */}
                  <div className="overflow-x-auto px-4 py-8">
                    <div className="flex gap-4 md:gap-6 w-max pl-4 pr-4">
                    
                    {/* OPCO */}
                    <div className="flex-shrink-0 w-72 md:w-80">
                      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[500px] md:h-[550px]">
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 h-16 md:h-20">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 p-2">
                          <Image
                            src="/images/financements/logo-opco.webp"
                            alt="Logo OPCO"
                            width={48}
                            height={48}
                            className="object-contain w-6 h-6 md:w-12 md:h-12"
                          />
                        </div>
                        <h3 className="text-sm md:text-lg font-bold text-[#013F63] leading-tight flex-1 text-center">OPCO</h3>
                      </div>
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Financement :</strong> Prise en charge partielle ou totale</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Conditions :</strong> Formation en lien avec l'activité</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Démarches :</strong> Convention de formation</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Avantage :</strong> Développement des compétences</p>
                      </div>
                      <Link href="/contact" className="block w-full text-center px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition mt-auto">
                        Étudier cette option
                      </Link>
                      </div>
                    </div>

                    {/* Plan de développement des compétences */}
                    <div className="flex-shrink-0 w-72 md:w-80">
                      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[500px] md:h-[550px]">
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 h-16 md:h-20">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 p-2">
                          <Image
                            src="/images/financements/logo entreprise.jpg"
                            alt="Logo Plan de développement des compétences"
                            width={48}
                            height={48}
                            className="object-contain w-6 h-6 md:w-12 md:h-12"
                          />
                        </div>
                        <h3 className="text-sm md:text-lg font-bold text-[#013F63] leading-tight flex-1 text-center">Plan de développement des compétences</h3>
                      </div>
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Financement :</strong> 100% pris en charge par l'employeur</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Avantages :</strong> Formation sur temps de travail</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Conditions :</strong> Intégration dans le plan annuel</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Bénéfice :</strong> Montée en compétences des équipes</p>
                      </div>
                      <Link href="/contact" className="block w-full text-center px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition mt-auto">
                        Étudier cette option
                      </Link>
                      </div>
                    </div>

                    {/* FNE-Formation */}
                    <div className="flex-shrink-0 w-72 md:w-80">
                      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[500px] md:h-[550px]">
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 h-16 md:h-20">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 p-2">
                          <Image
                            src="/images/financements/Bloc_Marque_RF_France_Travail_CMJN_Horizontal_Coul_Positif.jpg"
                            alt="Logo FNE-Formation"
                            width={48}
                            height={48}
                            className="object-contain w-6 h-6 md:w-12 md:h-12"
                          />
                        </div>
                        <h3 className="text-sm md:text-lg font-bold text-[#013F63] leading-tight flex-1 text-center">FNE-Formation</h3>
                      </div>
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Contexte :</strong> Difficultés économiques temporaires</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Financement :</strong> Prise en charge par France Travail</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Objectif :</strong> Maintenir l'emploi et les compétences</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Conditions :</strong> Accord de branche ou d'entreprise</p>
                      </div>
                      <a href="https://www.francetravail.fr/employeur/recruter-et-former/former-ses-salaries/fne-formation" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition mt-auto">
                        En savoir plus FNE-Formation
                      </a>
                      </div>
                    </div>

                    {/* Pro-A */}
                    <div className="flex-shrink-0 w-72 md:w-80">
                      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[500px] md:h-[550px]">
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 h-16 md:h-20">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 p-2">
                          <Image
                            src="/images/financements/Bloc_Marque_RF_France_Travail_CMJN_Horizontal_Coul_Positif.jpg"
                            alt="Logo Pro-A"
                            width={48}
                            height={48}
                            className="object-contain w-6 h-6 md:w-12 md:h-12"
                          />
                        </div>
                        <h3 className="text-sm md:text-lg font-bold text-[#013F63] leading-tight flex-1 text-center">Pro-A</h3>
                      </div>
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Principe :</strong> Formation pendant l'activité partielle</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Financement :</strong> Prise en charge par France Travail</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Durée :</strong> Jusqu'à 2 ans maximum</p>
                        <p className="text-[#013F63] text-xs md:text-sm"><strong>Avantage :</strong> Maintien des compétences</p>
                      </div>
                      <a href="https://www.francetravail.fr/employeur/recruter-et-former/former-ses-salaries/pro-a" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition mt-auto">
                        En savoir plus Pro-A
                      </a>
                      </div>
                    </div>
                  </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

          {/* Section Autofinancement - Investissez en vous-même */}
          <section className="pt-4 pb-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                
                {/* Autofinancement */}
                <div className="mt-0">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                    <h4 className="text-2xl font-bold text-[#013F63] mb-6">
                      <span className="text-orange-500 font-brittany text-3xl">Investissez</span> en vous-même
                    </h4>
                    <p className="text-base text-[#013F63] font-medium leading-relaxed">
                      Paiement en <span className="text-4xl font-light text-orange-500 font-brittany leading-none mx-2">x3</span>, <span className="text-4xl font-light text-orange-500 font-brittany leading-none mx-2">x6</span> ou <span className="text-4xl font-light text-orange-500 font-brittany leading-none mx-2">x9</span> sans frais grâce à notre partenaire financier.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ rapide */}
          <section className="pt-16 pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-3">
                  Questions <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">fréquentes</span>
                </h2>
              </div>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100">
                      <button
                        className="w-full p-6 text-left flex justify-between items-center"
                        onClick={() => toggleFaq(index)}
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
                      {openFaq === index && (
                        <div className="px-6 pb-6">
                          <p className="text-[#013F63] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

          {/* Section Contact Financement */}
          <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-3">
                Besoin d'aide pour votre <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">financement</span> ?
              </h2>
              <p className="text-lg text-[#013F63] mb-8 leading-relaxed">
                Notre équipe vous accompagne dans vos démarches de financement.<br/>
                Contactez-nous pour étudier ensemble la solution la plus adaptée à votre situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition text-lg hover:scale-105 transform"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Nous contacter
                </Link>
                <a 
                  href="tel:0783019955"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-lg hover:scale-105 transform"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
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
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  )
} 