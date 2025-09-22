import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  Users, 
  Wifi, 
  Coffee, 
  Car, 
  Monitor, 
  CheckCircle,
  Calendar,
  Building,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Euro,
  Phone,
  Mail
} from 'lucide-react'

export default function SalleDetail() {
  const router = useRouter()
  const { id } = router.query
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  // Données des salles (même structure que la landing page)
  const sallesData = {
    'grande-salle-formation': {
      nom: 'Nouvelle donne',
      capacite: '20 personnes',
      surface: '30m²',
      images: [
        '/images/salles/grande-salle-1.jpg',
        '/images/salles/grande-salle-2.jpg',
        '/images/salles/grande-salle-3.jpg'
      ],
      demiJournee: 170,
      journee: 250,
      weekend: 265,
      description: 'Notre plus grande salle, spacieuse et lumineuse, parfaitement adaptée pour vos formations, séminaires et conférences. Avec ses 30m² et sa capacité d\'accueil de 20 personnes, elle offre un environnement professionnel optimal pour tous vos événements.',
      equipements: [
        'Vidéoprojecteur HD 1080p',
        'Tables modulables',
        'Climatisation réversible',
        'Prises électriques multiples',
        'Connexion HDMI/USB',
        'Wi-Fi haut débit',
        'Thé et café'
      ],
      amenagements: [
        'Configuration théâtre (20 personnes)',
        'Configuration U (16 personnes)',
        'Configuration îlots (16 personnes)',
        'Configuration cocktail (20 personnes max)'
      ],
    },
    'salle-reunion-moyenne': {
      nom: 'Mission possible',
      capacite: '15 personnes',
      surface: '25m²',
      images: [
        '/images/salles/salle-moyenne-1.jpg',
        '/images/salles/salle-moyenne-2.jpg',
        '/images/salles/salle-moyenne-3.jpg'
      ],
      demiJournee: 120,
      journee: 195,
      weekend: 210,
      description: 'Salle polyvalente idéale pour réunions d\'équipe, ateliers collaboratifs et sessions de brainstorming. Son aménagement flexible et ses équipements modernes favorisent l\'interaction et la créativité.',
      equipements: [
        'Vidéoprojecteur HD 1080p',
        'Tables modulables',
        'Prises électriques multiples',
        'Wi-Fi haut débit',
        'Thé et café'
      ],
      amenagements: [
        'Table de réunion ovale (15 personnes)',
        'Espaces détente',
        'Coin présentation',
        'Configuration workshop'
      ],
    },
    'petite-salle-reunion': {
      nom: 'La passerelle',
      capacite: '10 personnes',
      surface: '20m²',
      images: [
        '/images/salles/petite-salle-1.jpg',
        '/images/salles/petite-salle-2.jpg',
        '/images/salles/petite-salle-3.jpg'
      ],
      demiJournee: 80,
      journee: 130,
      weekend: 145,
      description: 'Espace chaleureux et feutré, parfait pour réunions restreintes, entretiens confidentiels et sessions de coaching. L\'ambiance cosy favorise les échanges privilégiés et la concentration.',
      equipements: [
        'Vidéoprojecteur HD 1080p',
        'Tables modulables',
        'Prises électriques multiples',
        'Wi-Fi haut débit',
        'Thé et café'
      ],
      amenagements: [
        'Configuration ronde (10 personnes)',
        'Espace cocooning',
        'Coin café privé',
        'Setup entretien'
      ],
    },
    'bureau-individuel-1': {
      nom: 'Leboncoin à idée',
      capacite: '1 personne',
      surface: '7m²',
      images: [
        '/images/salles/bureau-individuel-1.jpg'
      ],
      demiJournee: 40,
      journee: 70,
      weekend: 85,
      description: 'Bureau individuel parfaitement équipé pour le travail en autonomie. Espace calme et fonctionnel avec tout le nécessaire pour une productivité optimale.',
      equipements: [
        'Bureau meublé (table, chaise, rangement)',
        'Wi-Fi haut débit',
        'Accès imprimante',
        'Thé et café',
        'Parking privé gratuit',
        'Éclairage optimal',
        'Prises électriques multiples'
      ],
      amenagements: [
        'Espace de travail individuel',
        'Configuration bureau',
        'Coin détente'
      ],
    },
    'bureau-individuel-2': {
      nom: 'La tour de contrôle',
      capacite: '1 personne',
      surface: '8m²',
      images: [
        '/images/salles/bureau-individuel-2.jpg'
      ],
      demiJournee: 40,
      journee: 70,
      weekend: 85,
      description: 'Bureau individuel spacieux avec vue dégagée. Parfait pour les sessions de travail intensif, la préparation de formations ou les entretiens individuels.',
      equipements: [
        'Bureau meublé (table, chaise, rangement)',
        'Wi-Fi haut débit',
        'Accès imprimante',
        'Thé et café',
        'Parking privé gratuit',
        'Éclairage optimal',
        'Prises électriques multiples'
      ],
      amenagements: [
        'Espace de travail individuel',
        'Configuration bureau',
        'Coin détente'
      ],
    }
  }

  const salle = sallesData[id]

  if (!salle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#013F63] mb-4">Salle non trouvée</h1>
          <Link href="/location-salles-lormont" className="text-[#013F63] hover:text-orange-500">
            Retour aux salles disponibles
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % salle.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + salle.images.length) % salle.images.length)
  }

  const openModal = (imageIndex) => {
    setModalImageIndex(imageIndex)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % salle.images.length)
  }

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + salle.images.length) % salle.images.length)
  }

  return (
    <>
      <Head>
        <title>{salle.nom} - Location Salle Formation Lormont | Atipik RH</title>
        <meta name="description" content={`Louez ${salle.nom} à Lormont. ${salle.capacite}, ${salle.surface}. À partir de ${salle.demiJournee}€. Équipée, parking gratuit.`} />
      </Head>

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Background animé */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
        
        <div className="relative z-10">
          <Header isFixed={true} />

          {/* Spacer for fixed header */}
          <div className="h-20"></div>

          {/* Section principale */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">

                {/* En-tête avec retour */}
                <div className="flex items-center gap-4 mb-8">
                  <Link 
                    href="/location-salles-lormont"
                    className="inline-flex items-center px-4 py-2 text-[#013F63] hover:text-orange-500 transition-colors duration-300"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour aux salles
                  </Link>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  
                  {/* Galerie photos */}
                  <div>
                    <div className="relative h-80 bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden mb-4 cursor-pointer border border-gray-200" onClick={() => openModal(currentImageIndex)}>
                      {/* Image principale */}
                      <Image
                        src={salle.images[currentImageIndex]}
                        alt={`${salle.nom} - Photo ${currentImageIndex + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {salle.images.length}
                      </div>
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-white/80 rounded-full p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <Monitor className="w-6 h-6 text-[#013F63]" />
                        </div>
                      </div>

                      {/* Boutons navigation */}
                      {salle.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              prevImage()
                            }}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#013F63] p-2 rounded-full shadow-lg transition-all duration-300 z-10"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              nextImage()
                            }}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#013F63] p-2 rounded-full shadow-lg transition-all duration-300 z-10"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Miniatures */}
                    <div className="grid grid-cols-4 gap-2">
                      {salle.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative h-20 bg-white/60 backdrop-blur-sm rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'border-[#013F63] ring-2 ring-[#013F63]/20' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`${salle.nom} - Miniature ${index + 1}`}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Informations de la salle */}
                  <div>
                    <div className="mb-4">
                      <h1 className="text-3xl lg:text-4xl font-bold text-[#013F63]">
                        {salle.nom}
                      </h1>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-5 h-5 text-[#013F63]" />
                          <span className="font-semibold text-[#013F63]">Capacité</span>
                        </div>
                        <p className="text-lg font-bold text-[#013F63]">{salle.capacite}</p>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="w-5 h-5 text-[#013F63]" />
                          <span className="font-semibold text-[#013F63]">Surface</span>
                        </div>
                        <p className="text-lg font-bold text-[#013F63]">{salle.surface}</p>
                      </div>
                    </div>

                    <p className="text-[#013F63] leading-relaxed mb-6">
                      {salle.description}
                    </p>

                    {/* Tarifs */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 mb-6">
                      <h3 className="text-xl font-bold text-[#013F63] mb-4 flex items-center gap-2">
                        <Euro className="w-5 h-5" />
                        Tarifs
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200">
                          <span className="text-[#013F63] font-medium">Demi-journée (4h)</span>
                          <span className="font-bold text-[#013F63] text-xl">{salle.demiJournee}€</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200">
                          <span className="text-[#013F63] font-medium">Journée complète (8h)</span>
                          <span className="font-bold text-orange-500 text-xl">{salle.journee}€</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200">
                          <span className="text-[#013F63] font-medium">Samedi / Dimanche / Jours fériés</span>
                          <span className="font-bold text-[#013F63] text-xl">{salle.weekend}€</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#013F63] mt-3">
                        * Tous équipements inclus • Parking gratuit • Café/thé offerts
                      </p>
                    </div>

                    {/* Boutons de réservation */}
                    <div className="space-y-4">
                      <a 
                        href={`tel:0783019955?subject=Réservation ${salle.nom}`}
                        className="block w-full text-center px-6 py-4 bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <Phone className="w-5 h-5 inline mr-2" />
                        Réserver par téléphone - 07 83 01 99 55
                      </a>
                      <Link 
                        href="/contact"
                        className="block w-full text-center px-6 py-4 border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold rounded-lg transition-all duration-300"
                      >
                        <Mail className="w-5 h-5 inline mr-2" />
                        Demander un devis personnalisé
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Équipements détaillés */}
                <div className="mt-16">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-8 text-center">
                    Équipements & <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">Aménagements</span>
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    
                    {/* Équipements */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
                      <h3 className="text-xl font-bold text-[#013F63] mb-4 flex items-center gap-2">
                        <Monitor className="w-5 h-5" />
                        Équipements inclus
                      </h3>
                      <div className="space-y-2">
                        {salle.equipements.map((equip, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                            <span className="text-[#013F63] text-sm">{equip}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Aménagements possibles */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
                      <h3 className="text-xl font-bold text-[#013F63] mb-4 flex items-center gap-2">
                        <Building className="w-5 h-5" />
                        Aménagements possibles
                      </h3>
                      <div className="space-y-2">
                        {salle.amenagements.map((amenagement, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-[#013F63] flex-shrink-0" />
                            <span className="text-[#013F63] text-sm">{amenagement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>




              </div>
            </div>
          </section>

          {/* Accessibilité */}
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
                      <h3 className="text-lg font-bold mb-2">Espaces accessibles</h3>
                    </div>

                    {/* Section droite - Contact et informations */}
                    <div className="lg:col-span-2 p-6 flex flex-col justify-center">
                      <div className="mb-4">
                        <p className="text-[#013F63] leading-relaxed mb-4">
                          <strong>Accessibilité :</strong> Toutes nos salles sont accessibles aux personnes en situation de handicap. 
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

        {/* Modal pour agrandir les photos */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
              {/* Image agrandie */}
              <div className="relative h-[70vh] bg-white rounded-xl overflow-hidden">
                <Image
                  src={salle.images[modalImageIndex]}
                  alt={`${salle.nom} - Photo ${modalImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
                
                {/* Bouton fermer */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-[#013F63] w-10 h-10 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  ✕
                </button>

                {/* Navigation dans le modal (seulement si plusieurs images) */}
                {salle.images.length > 1 && (
                  <>
                    <button
                      onClick={prevModalImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#013F63] p-3 rounded-full shadow-lg transition-all duration-300"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextModalImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#013F63] p-3 rounded-full shadow-lg transition-all duration-300"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Indicateur de position */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                  {modalImageIndex + 1} / {salle.images.length}
                </div>
              </div>

              {/* Miniatures en bas du modal (seulement si plusieurs images) */}
              {salle.images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {salle.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setModalImageIndex(index)}
                      className={`relative h-16 w-24 bg-white/60 backdrop-blur-sm rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === modalImageIndex 
                          ? 'border-white ring-2 ring-white/50' 
                          : 'border-gray-400 hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Miniature ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  )
}
