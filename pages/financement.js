import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ChevronDown, Users, CreditCard, FileText, UserCheck } from 'lucide-react'

const cardGridWrapperClass = 'overflow-x-auto lg:overflow-visible -mx-4 sm:mx-0 px-4 py-8 snap-x snap-mandatory lg:snap-none'
const cardGridInnerClass = (count) =>
  `flex lg:grid gap-4 md:gap-6 w-max lg:w-full pl-4 pr-4 lg:pl-0 lg:pr-0 ${
    count === 1 ? 'lg:grid-cols-1 lg:max-w-md lg:mx-auto' : 'lg:grid-cols-2 xl:grid-cols-3'
  }`
const cardItemClass = 'flex-shrink-0 w-[85vw] max-w-80 sm:w-72 md:w-80 lg:w-auto snap-center'
const cardBoxClass = 'bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col min-h-[500px] md:min-h-[550px] h-full'
const cardHeaderClass = 'flex items-center gap-3 md:gap-4 mb-4 md:mb-6 min-h-16 md:min-h-20'
const cardLogoWrapperClass = 'w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0 p-2'
const cardLogoClass = 'object-contain w-6 h-6 md:w-12 md:h-12'
const cardTitleClass = 'text-sm md:text-lg font-bold text-[#013F63] leading-tight'
const cardDetailsClass = 'space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow'
const cardDetailTextClass = 'text-[#013F63] text-xs md:text-sm'
const cardButtonClass = (style) =>
  `block w-full text-center px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition mt-auto text-sm md:text-base ${
    style === 'primary'
      ? 'bg-[#013F63] hover:bg-[#012a4a] text-white'
      : 'border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white'
  }`

function FinancementCard({ card }) {
  const ButtonTag = card.external ? 'a' : Link
  const buttonProps = card.external
    ? { href: card.buttonLink, target: '_blank', rel: 'noopener noreferrer' }
    : { href: card.buttonLink }

  return (
    <div className={cardItemClass}>
      <div className={cardBoxClass}>
        <div className={cardHeaderClass}>
          <div className={cardLogoWrapperClass}>
            <Image
              src={card.logoSrc}
              alt={card.logoAlt}
              width={48}
              height={48}
              className={cardLogoClass}
            />
          </div>
          <div className="flex-1 text-center">
            <h3 className={cardTitleClass}>{card.title}</h3>
            {card.subtitle && (
              <p className="text-xs text-gray-600 italic mt-1">{card.subtitle}</p>
            )}
          </div>
        </div>
        <div className={cardDetailsClass}>
          {card.details.map((detail, detailIndex) => (
            <p key={detailIndex} className={cardDetailTextClass}>
              <strong>{detail.label} :</strong> {detail.value}
            </p>
          ))}
        </div>
        <ButtonTag {...buttonProps} className={cardButtonClass(card.buttonStyle)}>
          {card.buttonText}
        </ButtonTag>
      </div>
    </div>
  )
}

function FinancementCardGrid({ cards }) {
  return (
    <div className={cardGridWrapperClass}>
      <div className={cardGridInnerClass(cards.length)}>
        {cards.map((card, index) => (
          <FinancementCard key={index} card={card} />
        ))}
      </div>
    </div>
  )
}

export default function Financement() {
  const [activeTab, setActiveTab] = useState('salaries');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const financementAnswer = (
    <div className="space-y-4">
      <div>
        <p className="font-bold mb-2">Quelles solutions de financement sont proposées ?</p>
        <p>ATIPIK RH propose, via un partenaire financier, des solutions de paiement échelonné pouvant aller jusqu'à 9 mensualités, afin de faciliter l'accès à ses accompagnements et formations.</p>
      </div>
      <div>
        <p className="font-bold mb-2">Ces solutions sont-elles accessibles à tous ?</p>
        <p>Les facilités de paiement sont proposées sous réserve d'acceptation par notre partenaire financier. Les conditions d'éligibilité sont précisées lors de l'échange avec notre équipe.</p>
      </div>
      <div>
        <p className="font-bold mb-2">Y a-t-il des frais supplémentaires ?</p>
        <p>Les conditions financières (frais éventuels, échéancier) sont communiquées de manière claire et transparente avant tout engagement.</p>
      </div>
      <div>
        <p className="font-bold mb-2">Quand le financement est-il mis en place ?</p>
        <p>La solution de financement est étudiée avant la contractualisation, afin de garantir une information complète au bénéficiaire, conformément aux exigences Qualiopi.</p>
      </div>
      <div>
        <p className="font-bold mb-2">Puis-je cumuler cette solution avec un autre financement ? <span className="text-orange-500">Oui !</span></p>
        <p>Selon votre situation, ces facilités de paiement peuvent être complémentaires à d'autres dispositifs ( Par exemple : CPF + AIF pour les demandeurs d'emploi, CPF + plan de formation pour les salariés, ou CPF + FAF pour les indépendants.).</p>
      </div>
    </div>
  );

  const faqData = [
    {
      question: "Mon employeur sera-t-il informé si j'utilise mon CPF ?",
      answer: "Non, l'utilisation de votre CPF est strictement confidentielle. Votre employeur n'a aucune visibilité sur vos démarches de formation."
    },
    {
      question: "Comment obtenir l'AIF de France Travail ?",
      answer: "Présentez votre projet de formation à votre conseiller France Travail. La formation doit être cohérente avec votre projet professionnel. Aucune prise en charge n'est garantie sans étude du dossier. Nous vous aidons à le préparer."
    },
    {
      question: "Comment connaître mon organisme de financement en étant indépendant ?",
      answer: "Cela dépend de votre activité : FIFPL (professions libérales), AGEFICE (commerçants), FAFCEA (artisans). Nous vous aidons à identifier le bon organisme."
    },
    {
      question: "Financer votre accompagnement",
      answer: financementAnswer
    }
  ];
  const salariesCards = [
    {
      logoSrc: "/images/financements/logo-projet-transition-pro.png",
      logoAlt: "Icône La Période de Reconversion - reconversion professionnelle",
      title: "La Période de Reconversion",
      details: [
        { label: "Contexte", value: "la Période de Reconversion remplace Pro-A et TransCo et permet de changer de métier tout en restant dans son entreprise." },
        { label: "Financement", value: "ouverte à tout salarié, quels que soient sa situation professionnelle antérieure, son âge et son niveau de qualification" },
        { label: "Conditions", value: "Salarié en CDI depuis au moins 2 ans" },
        { label: "Avantage", value: "nouveau dispositif loi n°2025-989 du 24 octobre 2025 entré en vigueur le 1er février 2026." }
      ],
      buttonText: "En savoir plus La Période de Reconversion",
      buttonStyle: "primary",
      buttonLink: "https://nouvelle-aquitaine.dreets.gouv.fr/La-periode-de-reconversion",
      external: true
    },
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
      logoSrc: "/images/financements/logo-agefiph.png",
      logoAlt: "Logo AGEFIPH",
      title: "AGEFIPH",
      subtitle: "En complément d'autres financements",
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
      logoSrc: "/images/financements/logo-opco.webp",
      logoAlt: "Logo OPCO",
      title: "OPCO",
      details: [
        { label: "Financement", value: "Prise en charge partielle ou totale" },
        { label: "Conditions", value: "Formation en lien avec l'activité" },
        { label: "Démarches", value: "Convention de formation" },
        { label: "Avantage", value: "Développement des compétences" }
      ],
      buttonText: "Étudier cette option",
      buttonStyle: "secondary",
      buttonLink: "/contact",
      external: false
    },
    {
      logoSrc: "/images/financements/Logo-Financement-Personnel.webp",
      logoAlt: "Logo Financement Personnel",
      title: "Auto-financement",
      details: [
        { label: "Facilités", value: "Paiement en 3x, 6x ou 9x avec notre partenaire financier" },
        { label: "Réduction", value: "Tarifs préférentiels possibles" },
        { label: "Rapidité", value: "Démarrage immédiat" },
        { label: "ROI", value: "Investissement dans votre avenir professionnel" }
      ],
      buttonText: "Étudier cette option",
      buttonStyle: "secondary",
      buttonLink: "/contact",
      external: false
    }
  ];

  const demandeursEmploiCards = [
    {
      logoSrc: "/images/financements/Bloc_Marque_RF_France_Travail_CMJN_Horizontal_Coul_Positif.jpg",
      logoAlt: "Logo France Travail",
      title: "AIF (Aide Individuelle à la Formation)",
      details: [
        { label: "Financement", value: "Complément possible du CPF, sous réserve d'étude et de validation du dossier" },
        { label: "Conditions", value: "Formation en lien avec projet professionnel" },
        { label: "Démarches", value: "Via votre conseiller France Travail" },
        { label: "Délai", value: "15-30 jours après validation" }
      ],
      buttonText: "En savoir plus sur l'AIF",
      buttonStyle: "primary",
      buttonLink: "https://www.francetravail.fr/candidat/en-formation/mes-aides-financieres/laide-individuelle-a-la-formatio.html",
      external: true
    },
    {
      logoSrc: "/images/financements/cpf.jpg",
      logoAlt: "Logo CPF",
      title: "CPF",
      details: [
        { label: "Vos droits", value: "Conservés pendant le chômage" },
        { label: "Utilisation", value: "Libre et immédiate" },
        { label: "Complément", value: "Peut être complété par l'AIF, selon le projet et les règles en vigueur" },
        { label: "Avantage", value: "Démarches 100% en ligne" }
      ],
      buttonText: "Consulter mon CPF",
      buttonStyle: "primary",
      buttonLink: "https://www.moncompteformation.gouv.fr",
      external: true
    },
    {
      logoSrc: "/images/financements/logo-agefiph.png",
      logoAlt: "Logo AGEFIPH",
      title: "AGEFIPH",
      subtitle: "En complément d'autres financements",
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
      logoSrc: "/images/financements/Logo-Financement-Personnel.webp",
      logoAlt: "Logo Financement Personnel",
      title: "Auto-financement",
      details: [
        { label: "Facilités", value: "Paiement en 3x, 6x ou 9x avec notre partenaire financier" },
        { label: "Réduction", value: "Tarifs préférentiels possibles" },
        { label: "Rapidité", value: "Démarrage immédiat" },
        { label: "ROI", value: "Investissement pour retour à l'emploi" }
      ],
      buttonText: "Étudier cette option",
      buttonStyle: "secondary",
      buttonLink: "/contact",
      external: false
    }
  ];

  const independantsCards = [
    {
      logoSrc: "/images/financements/logo-faf.jpeg",
      logoAlt: "Logo FAF",
      title: "FAF (Fonds d'Assurance Formation)",
      details: [
        { label: "FIFPL", value: "Professions libérales" },
        { label: "AGEFICE", value: "Commerçants et dirigeants" },
        { label: "FAFCEA", value: "Artisans" },
        { label: "Conditions", value: "Être à jour des cotisations" }
      ],
      buttonText: "Identifier mon FAF",
      buttonStyle: "primary",
      buttonLink: "https://entreprendre.service-public.fr/vosdroits/F31148",
      external: true
    },
    {
      logoSrc: "/images/financements/cpf.jpg",
      logoAlt: "Logo CPF",
      title: "CPF",
      details: [
        { label: "Alimentation", value: "500€/an si vous cotisez" },
        { label: "Utilisation", value: "Libre choix des formations" },
        { label: "Cumul", value: "Possible avec financement FAF" },
        { label: "Démarches", value: "100% en ligne" }
      ],
      buttonText: "Vérifier mes droits CPF",
      buttonStyle: "primary",
      buttonLink: "https://www.moncompteformation.gouv.fr",
      external: true
    },
    {
      logoSrc: "/images/financements/logo-agefiph.png",
      logoAlt: "Logo AGEFIPH",
      title: "AGEFIPH",
      subtitle: "En complément d'autres financements",
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
      logoSrc: "/images/financements/Logo-Financement-Personnel.webp",
      logoAlt: "Logo Financement Personnel",
      title: "Auto-financement",
      details: [
        { label: "Déduction fiscale", value: "Charge déductible de votre activité" },
        { label: "Facilités", value: "Paiement en 3x, 6x ou 9x avec notre partenaire financier" },
        { label: "ROI", value: "Développement de votre activité" },
        { label: "Flexibilité", value: "Démarrage immédiat" }
      ],
      buttonText: "Étudier cette option",
      buttonStyle: "secondary",
      buttonLink: "/contact",
      external: false
    }
  ];

  const employeursCards = [
    {
      logoSrc: "/images/financements/logo-opco.webp",
      logoAlt: "Logo OPCO",
      title: "OPCO",
      details: [
        { label: "Financement", value: "Prise en charge partielle ou totale" },
        { label: "Conditions", value: "Formation en lien avec l'activité" },
        { label: "Démarches", value: "Convention de formation" },
        { label: "Avantage", value: "Développement des compétences" }
      ],
      buttonText: "Étudier cette option",
      buttonStyle: "secondary",
      buttonLink: "/contact",
      external: false
    }
  ];


  return (
    <>
      <Head>
        <title>Financement formations CPF, VAE, bilan de compétences | Atipik RH</title>
        <meta name="description" content="Solutions de financement selon votre statut : CPF, AIF France Travail pour les formations, employeur, OPCO. Accompagnement VAE : vérification préalable obligatoire." />
        <meta name="keywords" content="financement formation CPF, Mon Compte Formation, AIF formation demandeur d'emploi, financement bilan compétences, financement accompagnement VAE" />
        <link rel="canonical" href="https://www.atipikrh.com/financement" />
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
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight tracking-tight">
                Solutions de <span className="text-orange-500 font-brittany text-3xl sm:text-4xl lg:text-5xl">financement</span><br/>
                selon votre <span className="text-orange-500 font-brittany text-3xl sm:text-4xl lg:text-5xl">statut</span>
              </h1>
              <p className="text-base sm:text-lg text-[#013F63] leading-relaxed font-light mb-6 px-2 sm:px-0">
                Chaque situation professionnelle offre des possibilités de financement spécifiques<br className="hidden lg:block"/>
                <span className="text-orange-500 font-bold">Découvrez celles qui vous correspondent</span>
              </p>
            </div>
          </div>
        </section>

          {/* Section principale avec onglets */}
          <section className="pt-8 pb-16 lg:pt-12 lg:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Onglets de navigation avec nouveau design */}
              <div className="mb-6 lg:mb-8">
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center bg-white p-2 rounded-2xl shadow-lg border border-gray-200 gap-1 w-full sm:w-auto">
                    <button 
                      onClick={() => setActiveTab('salaries')}
                      className={`px-3 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold transition-all duration-300 text-sm lg:text-base w-full sm:w-auto ${
                        activeTab === 'salaries' 
                          ? 'bg-[#013F63] text-white shadow-lg sm:transform sm:scale-105' 
                          : 'text-gray-600 hover:text-[#013F63] hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1 lg:gap-2">
                        <Users className="w-4 h-4 lg:w-5 lg:h-5" />
                        <span className="inline text-xs sm:text-sm lg:text-base">Salariés</span>
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => setActiveTab('demandeurs-emploi')}
                      className={`px-3 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold transition-all duration-300 text-sm lg:text-base w-full sm:w-auto ${
                        activeTab === 'demandeurs-emploi' 
                          ? 'bg-[#013F63] text-white shadow-lg sm:transform sm:scale-105' 
                          : 'text-gray-600 hover:text-[#013F63] hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1 lg:gap-2">
                        <CreditCard className="w-4 h-4 lg:w-5 lg:h-5" />
                        <span className="inline text-xs sm:text-sm lg:text-base">Demandeurs d'emploi</span>
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => setActiveTab('independants')}
                      className={`px-3 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold transition-all duration-300 text-sm lg:text-base w-full sm:w-auto ${
                        activeTab === 'independants' 
                          ? 'bg-[#013F63] text-white shadow-lg sm:transform sm:scale-105' 
                          : 'text-gray-600 hover:text-[#013F63] hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1 lg:gap-2">
                        <FileText className="w-4 h-4 lg:w-5 lg:h-5" />
                        <span className="inline text-xs sm:text-sm lg:text-base">
                          <span className="sm:hidden">Indépendants</span>
                          <span className="hidden sm:inline">Travailleurs indépendants</span>
                        </span>
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => setActiveTab('employeurs')}
                      className={`px-3 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold transition-all duration-300 text-sm lg:text-base w-full sm:w-auto ${
                        activeTab === 'employeurs' 
                          ? 'bg-[#013F63] text-white shadow-lg sm:transform sm:scale-105' 
                          : 'text-gray-600 hover:text-[#013F63] hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1 lg:gap-2">
                        <UserCheck className="w-4 h-4 lg:w-5 lg:h-5" />
                        <span className="inline text-xs sm:text-sm lg:text-base">Employeurs</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Contenu conditionnel basé sur l'onglet actif */}
              {activeTab === 'salaries' && <FinancementCardGrid cards={salariesCards} />}

              {activeTab === 'demandeurs-emploi' && <FinancementCardGrid cards={demandeursEmploiCards} />}

              {activeTab === 'independants' && <FinancementCardGrid cards={independantsCards} />}

              {activeTab === 'employeurs' && <FinancementCardGrid cards={employeursCards} />}
            </div>
          </div>
        </section>

          {/* Note financement VAE — formulation prudente, hors promesse France Travail */}
          <section className="pt-0 pb-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#013F63] mb-3 text-center">
                    Financer un accompagnement <span className="text-orange-500 font-brittany text-2xl sm:text-3xl">VAE</span>
                  </h2>
                  <p className="text-sm sm:text-base text-[#013F63] leading-relaxed text-center">
                    CPF, congé VAE, financement de droit commun ou abondement éventuel, selon le profil, la certification et les règles en vigueur. Vérification préalable obligatoire.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section Autofinancement - Investissez en vous-même */}
          <section className="pt-4 pb-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                
                {/* Autofinancement */}
                <div className="mt-0">
                  <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center">
                    <h4 className="text-xl sm:text-2xl font-bold text-[#013F63] mb-4 sm:mb-6">
                      <span className="text-orange-500 font-brittany text-2xl sm:text-3xl">Investissez</span> en vous-même
                    </h4>
                    <p className="text-sm sm:text-base text-[#013F63] font-medium leading-relaxed flex flex-wrap items-center justify-center gap-x-1 gap-y-2">
                      Paiement en <span className="text-2xl sm:text-4xl font-light text-orange-500 font-brittany leading-none">x3</span>, <span className="text-2xl sm:text-4xl font-light text-orange-500 font-brittany leading-none">x6</span> ou <span className="text-2xl sm:text-4xl font-light text-orange-500 font-brittany leading-none">x9</span> sans frais grâce à notre partenaire financier.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ rapide */}
          <section className="pt-12 pb-16 lg:pt-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              <div className="text-center mb-10 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#013F63] mb-3">
                  Questions <span className="text-orange-500 font-brittany text-3xl sm:text-4xl lg:text-5xl">fréquentes</span>
                </h2>
              </div>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100">
                      <button
                        className="w-full p-4 sm:p-6 text-left flex justify-between items-start sm:items-center gap-3"
                        onClick={() => toggleFaq(index)}
                      >
                        <span className="font-semibold text-base sm:text-lg text-[#013F63]">
                          {faq.question}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transition-transform flex-shrink-0 mt-0.5 sm:mt-0 ${
                            openFaq === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openFaq === index && (
                        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                          <div className="text-sm sm:text-base text-[#013F63] leading-relaxed">
                            {faq.answer}
                          </div>
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
          <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#013F63] mb-3">
                Besoin d'aide pour votre <span className="text-orange-500 font-brittany text-3xl sm:text-4xl lg:text-5xl">financement</span> ?
              </h2>
              <p className="text-base sm:text-lg text-[#013F63] mb-8 leading-relaxed px-2 sm:px-0">
                Notre équipe vous accompagne dans vos démarches de financement.<br className="hidden sm:block"/>
                Contactez-nous pour étudier ensemble la solution la plus adaptée à votre situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition text-base sm:text-lg sm:hover:scale-105 sm:transform"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Nous contacter
                </Link>
                <a 
                  href="tel:0783019955"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-base sm:text-lg sm:hover:scale-105 sm:transform"
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
                    <div className="lg:col-span-2 p-4 sm:p-6 flex flex-col justify-center">
                      <div className="mb-4">
                        <p className="text-sm sm:text-base text-[#013F63] leading-relaxed mb-4">
                          <strong>Accessibilité Handicap :</strong> Nous mettons tout en œuvre pour rendre nos formations accessibles au plus grand nombre. 
                          Contactez-nous pour étudier ensemble les modalités d'accès adaptées à votre situation.
                        </p>
                      </div>

                      {/* Contact responsable */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
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
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1">
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