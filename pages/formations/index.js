import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  Clock, 
  Users, 
  Award, 
  ArrowRight,
  UserCheck
} from 'lucide-react'

export default function FormationsIndex() {
  return (
    <>
      <Head>
        <title>Formations professionnelles à Bordeaux - Certifiantes & Professionnalisantes | Atipik RH</title>
        <meta name="description" content="Formations certifiantes (CIP, FPA) et formations courtes professionnalisantes à Bordeaux. Toutes nos formations sont éligibles au CPF. Centre de formation à Lormont." />
        <meta name="keywords" content="formations Bordeaux, CIP, FPA, formations courtes professionnalisantes, CPF, Lormont, formation professionnelle" />
        <link rel="canonical" href="https://atipikrh.fr/formations" />
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



          {/* Formations Certifiantes */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                {/* Titre Section Certifiantes */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4">
                    Formations <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Certifiantes</span>
                  </h2>
                  <p className="text-lg text-[#013F63] max-w-2xl mx-auto">
                    Obtenez une certification reconnue par l'État et développez votre expertise professionnelle
                  </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 justify-center">
                  
                  {/* Formation CIP */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-[#013F63] mb-6">
                        CONSEILLER EN INSERTION PROFESSIONNELLE
                      </h3>
                      
                      <div className="space-y-3 mb-8 text-sm text-[#013F63]">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>8 mois</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>10-15 personnes</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>Niveau 5 (Bac+2)</span>
                        </div>
                      </div>
                      
                      <Link href="/formations/cip" className="block w-full text-center px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition group">
                        Découvrir
                        <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Formation FPA */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-[#013F63] mb-6">
                        FORMATEUR PROFESSIONNEL D'ADULTES
                      </h3>
                      
                      <div className="space-y-3 mb-8 text-sm text-[#013F63]">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>7 mois</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>8-12 personnes</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>Niveau 5 (Bac+2)</span>
                        </div>
                      </div>
                      
                      <Link href="/formations/fpa" className="block w-full text-center px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition group">
                        Découvrir
                        <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Ancre pour les formations professionnalisantes */}
          <div id="formations-professionnalisantes" className="relative -top-24"></div>

          {/* Professionnalisation du CIP */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                {/* Titre Section Professionnalisation */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4">
                    Formations courtes <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Professionnalisantes</span>
                  </h2>
                  <p className="text-lg text-[#013F63] max-w-2xl mx-auto">
                    Plus de compétences, plus d'impact pour l'emploi
                  </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 justify-center">
                  
                  {/* Formation 1 - Développer la relation entreprise */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
                    <div className="text-center flex-1 flex flex-col">
                      <div className="h-24 flex flex-col justify-center mb-6">
                        <h3 className="text-lg font-bold text-[#013F63] mb-2 leading-tight">
                          DÉVELOPPER LA RELATION ENTREPRISE
                        </h3>
                        <p className="text-base text-[#013F63] font-medium">
                          De l'accompagnement à la relation entreprise
                        </p>
                      </div>
                      
                      <div className="space-y-3 mb-8 text-sm text-[#013F63] flex-1">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>3 jours</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>10-12 personnes</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>Attestation de formation</span>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <Link href="/formations/professionnalisantes/developper-relation-entreprise" className="block w-full text-center px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition group">
                          Découvrir
                          <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Formation 2 - Renforcer la relation avec l'entreprise */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
                    <div className="text-center flex-1 flex flex-col">
                      <div className="h-24 flex flex-col justify-center mb-6">
                        <h3 className="text-lg font-bold text-[#013F63] mb-2 leading-tight">
                          RENFORCER LA RELATION AVEC L'ENTREPRISE
                        </h3>
                        <p className="text-base text-[#013F63] font-medium">
                          De la prospection à la valorisation de votre offre
                        </p>
                      </div>
                      
                      <div className="space-y-3 mb-8 text-sm text-[#013F63] flex-1">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>3 jours</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>10-12 personnes</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>Attestation de formation</span>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <Link href="/formations/professionnalisantes/renforcer-relation-entreprise" className="block w-full text-center px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition group">
                          Découvrir
                          <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Formation 3 - Recruter en insertion avec les entreprises */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
                    <div className="text-center flex-1 flex flex-col">
                      <div className="h-24 flex flex-col justify-center mb-6">
                        <h3 className="text-lg font-bold text-[#013F63] mb-2 leading-tight">
                          RECRUTER EN INSERTION AVEC LES ENTREPRISES
                        </h3>
                        <p className="text-base text-[#013F63] font-medium">
                          De la co-construction à l'accompagnement stratégique RH
                        </p>
                      </div>
                      
                      <div className="space-y-3 mb-8 text-sm text-[#013F63] flex-1">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>3 jours</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>10-12 personnes</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>Attestation de formation</span>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <Link href="/formations/professionnalisantes/recruter-insertion-entreprises" className="block w-full text-center px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition group">
                          Découvrir
                          <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Formation 4 - Renforcer sa pratique des recrutement inclusif */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
                    <div className="text-center flex-1 flex flex-col">
                      <div className="h-24 flex flex-col justify-center mb-6">
                        <h3 className="text-lg font-bold text-[#013F63] mb-2 leading-tight">
                          RENFORCER SA PRATIQUE DU RECRUTEMENT INCLUSIF
                        </h3>
                        <p className="text-base text-[#013F63] font-medium">
                          De la diversité à la performance RH
                        </p>
                      </div>
                      
                      <div className="space-y-3 mb-8 text-sm text-[#013F63] flex-1">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>3 jours</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>10-12 personnes</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>Attestation de formation</span>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <Link href="/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif" className="block w-full text-center px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition group">
                          Découvrir
                          <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
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