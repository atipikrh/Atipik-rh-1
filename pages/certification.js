import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CheckCircle } from 'lucide-react'

export default function Certification() {
  return (
    <>
      <Head>
        <title>Certification | Atipik RH - Qualité et Accessibilité</title>
        <meta name="description" content="Découvrez nos certifications : Qualiopi et Formation & Handicap. Une formation inclusive et de qualité reconnue par l'État." />
        <meta name="keywords" content="certification Atipik RH, Qualiopi, Formation Handicap, inclusion, organisme formation agréé" />
        <link rel="canonical" href="https://atipikrh.fr/certification" />
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

          {/* Introduction */}
          <section className="relative py-6 overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 pt-4 pb-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight tracking-tight">
                  Nos <span className="text-orange-500 font-brittany font-black">Certifications</span>
                </h1>
                <p className="text-lg lg:text-xl text-[#013F63] leading-relaxed font-light">
                  La qualité et la reconnaissance officielle<br className="hidden lg:block"/>
                  <span className="text-orange-500 font-medium">au service de votre formation</span>
                </p>
              </div>
            </div>
          </section>

          {/* Formation & Handicap */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className="text-center lg:text-left mb-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-6">
                        Handi<span className="text-orange-500 font-brittany text-3xl lg:text-4xl">accueillant</span>
                      </h2>
                    </div>
                    
                    <p className="text-lg text-[#013F63] leading-relaxed mb-8">
                      Notre engagement pour l'accessibilité va au-delà des obligations légales. Nous mettons tout en œuvre 
                      pour adapter nos formations aux personnes en situation de handicap.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-[#013F63]">Formations adaptées aux besoins spécifiques</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-[#013F63]">Accompagnement personnalisé</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-[#013F63]">Locaux et méthodes accessibles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-full h-48 flex items-center justify-center">
                      <Image 
                        src="/images/certifications/formation-handicap.png" 
                        alt="Logo Formation & Handicap"
                        width={220}
                        height={220}
                        className="object-contain w-full h-full max-w-[220px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-start">
                  <a
                    href="/images/certifications/Atipikrh-fiche-complete-accessibilite.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Consultez notre charte accessibilité
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Certification Qualiopi */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="text-center order-2 lg:order-1">
                    <div className="w-full h-52 flex items-center justify-center">
                      <a 
                        href="/documents/certifications/certificat-qualiopi.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative block hover:scale-105 transition-transform duration-300 cursor-pointer group"
                        title="Voir le certificat Qualiopi (PDF)"
                      >
                        <Image 
                          src="/images/certifications/qualiopi.png" 
                          alt="Logo Qualiopi - Cliquez pour voir le certificat"
                          width={250}
                          height={250}
                          className="object-contain w-full h-full max-w-[250px] hover:opacity-90 transition-opacity"
                        />
                        {/* Tooltip au survol */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
                          Voir le certificat
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                        </div>
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center">
                      <ul className="text-[#013F63] text-sm space-y-2 text-left">
                        <li>- ACTIONS DE FORMATIONS</li>
                        <li>- BILAN DE COMPÉTENCES</li>
                        <li>- ACTIONS PERMETTANT DE VALIDER LES ACQUIS D'EXPERIENCE</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-left order-1 lg:order-2">
                    <div className="text-center lg:text-left mb-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-6">
                        Certification <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">qualité</span>
                      </h2>
                    </div>
                    
                    <p className="text-lg text-[#013F63] leading-relaxed mb-8">
                      La certification Qualiopi atteste de la qualité de nos processus de formation selon un référentiel national unique. 
                      Elle garantit notre engagement dans l'amélioration continue de nos services et notre conformité aux exigences 
                      les plus strictes en matière de formation professionnelle.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-[#013F63]">Gage de qualité reconnu par l'État</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-[#013F63]">Processus d'amélioration continue</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-[#013F63]">Suivi et évaluation des formations</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-[#013F63]">Satisfaction des apprenants contrôlée</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ligne de séparation */}
          <div className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <hr className="border-t-2 border-gray-300" />
              </div>
            </div>
          </div>

          {/* Avantages des certifications */}
          <section className="py-6">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-2">
                    Pourquoi ces <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">certifications ?</span>
                  </h2>
                  <p className="text-base text-[#013F63] leading-relaxed max-w-3xl mx-auto">
                    Des garanties concrètes pour votre parcours de formation
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                  
                  {/* Qualité */}
                  <div className="text-center group flex flex-col justify-center pt-4">
                    <h3 className="text-xl font-bold text-[#013F63] mb-4">Qualité garantie</h3>
                    <p className="text-[#013F63] leading-relaxed">
                      Des standards contrôlés et audités régulièrement
                    </p>
                  </div>

                  {/* Financement */}
                  <div className="text-center group flex flex-col justify-center pt-4">
                    <h3 className="text-xl font-bold text-[#013F63] mb-4">Financements possibles</h3>
                    <p className="text-[#013F63] leading-relaxed">
                      Mobilisation de vos droits CPF, OPCO et autres dispositifs
                    </p>
                  </div>

                  {/* Reconnaissance */}
                  <div className="text-center group flex flex-col justify-center pt-4">
                    <h3 className="text-xl font-bold text-[#013F63] mb-4">Reconnaissance officielle</h3>
                    <p className="text-[#013F63] leading-relaxed">
                      Des certifications reconnues par les employeurs et l'État
                    </p>
                  </div>

                  {/* Accessibilité */}
                  <div className="text-center group flex flex-col justify-center pt-4">
                    <h3 className="text-xl font-bold text-[#013F63] mb-4">Accessibilité</h3>
                    <p className="text-[#013F63] leading-relaxed">
                      Formations ouvertes à tous, avec adaptations si nécessaire
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-base hover:scale-105">
                    Démarrer ma formation
                  </Link>
                  <Link href="/financement" className="inline-flex px-6 py-3 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-base">
                    Voir les financements
                  </Link>
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
