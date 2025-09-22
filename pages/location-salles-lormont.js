import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { 
  Users, 
  Wifi, 
  Coffee, 
  Car, 
  Monitor, 
  CheckCircle,
  Star,
  Calendar,
  Building,
  ArrowRight,
  MapPin,
  Euro
} from 'lucide-react'

export default function LocationEspacesBordeaux() {
  const sallesFormation = [
    {
      id: 'grande-salle-formation',
      nom: 'Nouvelle donne',
      capacite: '20 personnes',
      surface: '30m²',
      images: [
        '/images/salles/grande-salle-1.jpg',
        '/images/salles/grande-salle-2.jpg',
        '/images/salles/grande-salle-3.jpg'
      ],
      imageMain: '/images/salles/grande-salle-1.jpg',
      demiJournee: 170,
      journee: 250,
      weekend: 265,
      description: 'Salle spacieuse et lumineuse, idéale pour vos formations, séminaires et conférences',
      equipements: [
        'Vidéoprojecteur HD 1080p',
        'Tables modulables',
        'Climatisation réversible',
        'Prises électriques multiples',
        'Wi-Fi haut débit',
        'Thé et café'
      ],
      amenagements: ['Configuration théâtre', 'Configuration U', 'Configuration îlots', 'Configuration cocktail (20 personnes max)'],
      note: 4.9,
      avis: 23
    },
    {
      id: 'salle-reunion-moyenne',
      nom: 'Mission possible',
      capacite: '15 personnes',
      surface: '25m²',
      images: [
        '/images/salles/salle-moyenne-1.jpg',
        '/images/salles/salle-moyenne-2.jpg',
        '/images/salles/salle-moyenne-3.jpg'
      ],
      imageMain: '/images/salles/salle-moyenne-1.jpg',
      demiJournee: 120,
      journee: 195,
      weekend: 210,
      description: 'Parfaite pour réunions d\'équipe, ateliers collaboratifs et sessions de brainstorming',
      equipements: [
        'Vidéoprojecteur HD 1080p',
        'Tables modulables',
        'Prises électriques multiples',
        'Wi-Fi haut débit',
        'Thé et café'
      ],
      amenagements: ['Table de réunion ovale', 'Espaces détente', 'Coin présentation'],
      note: 4.8,
      avis: 18
    },
    {
      id: 'petite-salle-reunion',
      nom: 'La passerelle',
      capacite: '10 personnes',
      surface: '20m²',
      images: [
        '/images/salles/petite-salle-1.jpg',
        '/images/salles/petite-salle-2.jpg',
        '/images/salles/petite-salle-3.jpg'
      ],
      imageMain: '/images/salles/petite-salle-1.jpg',
      demiJournee: 80,
      journee: 130,
      weekend: 145,
      description: 'Ambiance feutrée et chaleureuse pour réunions restreintes et entretiens confidentiels',
      equipements: [
        'Vidéoprojecteur HD 1080p',
        'Tables modulables',
        'Prises électriques multiples',
        'Wi-Fi haut débit',
        'Thé et café'
      ],
      amenagements: ['Configuration ronde', 'Espace cocooning', 'Coin café privé'],
      note: 4.7,
      avis: 15
    },
    {
      id: 'bureau-individuel-1',
      nom: 'Leboncoin à idée',
      capacite: '1 personne',
      surface: '7m²',
      images: [
        '/images/salles/bureau-individuel-1.jpg'
      ],
      imageMain: '/images/salles/bureau-individuel-1.jpg',
      demiJournee: 40,
      journee: 70,
      weekend: 85,
      description: 'Bureau meublé (table, chaise, rangement) parfait pour le travail individuel',
      equipements: [
        'Bureau meublé (table, chaise, rangement)',
        'Wi-Fi haut débit',
        'Accès imprimante',
        'Thé et café',
        'Parking privé gratuit'
      ],
      amenagements: ['Espace de travail individuel'],
      note: 4.8,
      avis: 12
    },
    {
      id: 'bureau-individuel-2',
      nom: 'La tour de contrôle',
      capacite: '1 personne',
      surface: '8m²',
      images: [
        '/images/salles/bureau-individuel-2.jpg'
      ],
      imageMain: '/images/salles/bureau-individuel-2.jpg',
      demiJournee: 40,
      journee: 70,
      weekend: 85,
      description: 'Bureau meublé (table, chaise, rangement) parfait pour le travail individuel',
      equipements: [
        'Bureau meublé (table, chaise, rangement)',
        'Wi-Fi haut débit',
        'Accès imprimante',
        'Thé et café',
        'Parking privé gratuit'
      ],
      amenagements: ['Espace de travail individuel'],
      note: 4.8,
      avis: 12
    }
  ]

  return (
    <>
      <Head>
        <title>Location Salles de Formation à Lormont | Atipik RH</title>
        <meta name="description" content="Louez nos salles de formation modernes à Lormont. 3 espaces équipés de 10 à 20 personnes. Parking gratuit, Wi-Fi, tout inclus. Réservation immédiate." />
        <meta name="keywords" content="location salle formation Lormont, salle réunion Bordeaux, espace formation équipé, location salle Gironde" />
        <link rel="canonical" href="https://atipikrh.fr/location-salles-lormont" />
      </Head>

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Background animé global */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        
        <div className="relative z-10">
          <Header isFixed={true} />

          {/* Spacer for fixed header */}
          <div className="h-20"></div>



          {/* Section Nos Salles */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                    Nos <span className="text-orange-500 font-brittany font-normal text-4xl lg:text-5xl">Espaces</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Choisissez la salle qui correspond parfaitement à vos besoins
                  </p>
                </div>

                {/* Défilement horizontal des salles */}
                <div className="overflow-x-auto px-4 py-8">
                  <div className="flex gap-6 w-max pl-4 pr-4">
                    {sallesFormation.map((salle, index) => (
                      <Link 
                        key={salle.id} 
                        href={`/location-salles/${salle.id}`}
                        className="group flex-shrink-0 w-96"
                      >
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer h-full flex flex-col">
                        
                        {/* Image de la salle */}
                        <div className="relative h-64 flex-shrink-0">
                          <Image
                            src={salle.imageMain}
                            alt={salle.nom}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                            {salle.capacite}
                          </div>
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                            {salle.surface}
                          </div>
                          

                          
                          {/* Overlay hover */}
                          <div className="absolute inset-0 bg-[#013F63]/0 group-hover:bg-[#013F63]/10 transition-all duration-300"></div>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="text-xl font-bold text-[#013F63] mb-2 group-hover:text-orange-500 transition-colors duration-300">
                            {salle.nom}
                          </h3>
                          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                            {salle.description}
                          </p>
                          
                          {/* Tarifs en aperçu */}
                          <div className="flex justify-between items-center mb-4 p-3 bg-gray-50 rounded-lg">
                            <span className="text-sm text-gray-700">À partir de</span>
                            <span className="font-bold text-[#013F63] text-lg">{salle.demiJournee}€</span>
                          </div>

                          {/* Équipements clés */}
                          <div className="space-y-1 mb-4 flex-1">
                            {salle.equipements.slice(0, 3).map((equip, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                                <CheckCircle className="w-3 h-3 text-orange-500" />
                                {equip}
                              </div>
                            ))}
                            {salle.equipements.length > 3 && (
                              <div className="text-xs text-gray-500 font-medium">
                                + {salle.equipements.length - 3} autres équipements
                              </div>
                            )}
                          </div>

                          {/* Call to action */}
                          <div className="flex items-center justify-between mt-auto">
                            <span className="text-sm text-gray-600">Voir les détails</span>
                            <ArrowRight className="w-5 h-5 text-[#013F63] group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                </div>
              </div>
            </div>
          </section>


          {/* Section Avantages */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                    Pourquoi choisir <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">nos salles</span> ?
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Des espaces modernes et équipés pour la réussite de vos événements professionnels
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Monitor className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-[#013F63] mb-2">100% Équipées</h3>
                    <p className="text-sm text-[#013F63]">Vidéoprojecteur, Wi-Fi, paperboard inclus</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-[#013F63] mb-2">Parking à disposition</h3>
                    <p className="text-sm text-[#013F63]">Places privées sécurisées sur site</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Coffee className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-[#013F63] mb-2">Café Inclus</h3>
                    <p className="text-sm text-[#013F63]">Thé, café</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-[#013F63] mb-2">Bien Située</h3>
                    <p className="text-sm text-[#013F63]">5 min de Bordeaux, accès tramway</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Contact Réservation */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                
                <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                  Prêt(e) à réserver votre <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">espace</span> ?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
                  Réservation simple et rapide • Disponibilités en temps réel
                </p>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <div className="grid md:grid-cols-2 gap-8">
                    
                    {/* Contact téléphone */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-[#013F63] mb-3">Réservation immédiate</h3>
                      <p className="text-gray-600 mb-4">Appelez-nous pour une réservation instantanée</p>
                      <a 
                        href="tel:0783019955" 
                        className="inline-flex items-center px-6 py-3 bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold rounded-lg transition-all duration-300"
                      >
                        07 83 01 99 55
                      </a>
                    </div>

                    {/* Contact email */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Euro className="w-8 h-8 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-[#013F63] mb-3">Demande de devis</h3>
                      <p className="text-gray-600 mb-4">Pour réservations récurrentes ou groupées</p>
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center px-6 py-3 border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold rounded-lg transition-all duration-300"
                      >
                        Demander un devis
                      </Link>
                    </div>
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
                      <h3 className="text-lg font-bold mb-2">Espaces accessibles</h3>
                    </div>

                    {/* Section droite - Contact et informations */}
                    <div className="lg:col-span-2 p-6 flex flex-col justify-center">
                      <div className="mb-4">
                        <p className="text-[#013F63] leading-relaxed mb-4">
                          <strong>Accessibilité Handicap :</strong> Nos espaces sont accessibles aux personnes en situation de handicap. 
                          Contactez-nous pour étudier ensemble les modalités d'accès qui conviennent le mieux à votre situation.
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