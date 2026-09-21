import Link from 'next/link'
import ServicePageSeoHead from '../../components/ServicePageSeoHead'
import FormationFaqSection from '../../components/FormationFaqSection'
import EntityCitationBlock from '../../components/EntityCitationBlock'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FORMATION_PRO_LIST } from '../../lib/seo/professionnalisantesConfig'
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
      <ServicePageSeoHead briefId="formations-hub" />

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

          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4">
                  Formations professionnelles à{' '}
                  <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Bordeaux</span>{' '}
                  et Lormont
                </h1>
                <p className="text-lg text-[#013F63] max-w-2xl mx-auto mb-8">
                  Titres certifiants CIP, FPA, modules CCP (CIP et FPA) et formations courtes professionnalisantes — centre Qualiopi à Lormont.
                </p>
                <EntityCitationBlock pageId="formations-hub" />
              </div>
            </div>
          </section>

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
                          <span>948 h</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>8-15 personnes</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>Niveau 5 (Bac+2)</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <Link href="/formations/cip" className="text-center px-4 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition group text-sm">
                          Formation complète CIP
                          <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <div className="grid grid-cols-3 gap-2">
                          <Link href="/formations/ccp1" className="text-center px-2 py-2.5 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-xs">
                            CCP1
                          </Link>
                          <Link href="/formations/ccp2" className="text-center px-2 py-2.5 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-xs">
                            CCP2
                          </Link>
                          <Link href="/formations/ccp3" className="text-center px-2 py-2.5 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-xs">
                            CCP3
                          </Link>
                        </div>
                      </div>
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
                          <span>8-15 personnes</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>Niveau 5 (Bac+2)</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <Link href="/formations/fpa" className="text-center px-4 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition group text-sm">
                          Formation complète FPA
                          <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <div className="grid grid-cols-4 gap-2">
                          <Link href="/formations/fpa/ccp1" className="text-center px-2 py-2.5 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-xs">
                            CCP1
                          </Link>
                          <Link href="/formations/fpa/ccp2" className="text-center px-2 py-2.5 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-xs">
                            CCP2
                          </Link>
                          <Link href="/formations/fpa/ccp3" className="text-center px-2 py-2.5 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-xs">
                            CCP3
                          </Link>
                          <Link href="/formations/fpa/ccp4" className="text-center px-2 py-2.5 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-xs">
                            CCP4
                          </Link>
                        </div>
                      </div>
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
                  
                  {/* Titre de section - Professionels de l'insertion */}
                  <div className="lg:col-span-2 mb-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#013F63] text-center mb-4">
                      <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Professionnels</span> de l'insertion
                    </h3>
                  </div>

                  {/* Formations 1 à 3 — config centralisée */}
                  {FORMATION_PRO_LIST.slice(0, 3).map((f) => (
                    <div key={f.slug} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
                      <div className="text-center flex-1 flex flex-col">
                        <div className="h-24 flex flex-col justify-center mb-6">
                          <h3 className="text-lg font-bold text-[#013F63] mb-2 leading-tight">
                            {f.titreCarte}
                          </h3>
                          <p className="text-base text-[#013F63] font-medium">
                            {f.sousTitreCarte}
                          </p>
                        </div>

                        <div className="space-y-3 mb-8 text-sm text-[#013F63] flex-1">
                          <div className="flex items-center justify-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>21 heures</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>4 à 12 personnes par session</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Award className="w-4 h-4" />
                            <span>Attestation de formation</span>
                          </div>
                        </div>

                        <div className="mt-auto">
                          <Link href={f.path} className="block w-full text-center px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition group">
                            Découvrir
                            <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Titre de section - Professionels des RH et du recrutement */}
                  <div className="lg:col-span-2 mt-8 mb-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#013F63] text-center mb-4">
                      <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Professionnels</span> des RH et du recrutement
                    </h3>
                  </div>

                  {FORMATION_PRO_LIST.slice(3, 4).map((f) => (
                    <div key={f.slug} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
                      <div className="text-center flex-1 flex flex-col">
                        <div className="h-32 flex flex-col justify-center mb-6">
                          <h3 className="text-lg font-bold text-[#013F63] mb-2 leading-tight">
                            {f.titreCarte}
                          </h3>
                          {f.carteBadge && (
                            <p className="text-base text-orange-500 font-medium">
                              {f.carteBadge}
                            </p>
                          )}
                          <p className="text-base text-[#013F63] font-medium">
                            {f.sousTitreCarte}
                          </p>
                        </div>

                        <div className="space-y-3 mb-8 text-sm text-[#013F63] flex-1">
                          <div className="flex items-center justify-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>11 heures</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>4 à 12 personnes par session</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Award className="w-4 h-4" />
                            <span>Attestation de formation</span>
                          </div>
                        </div>

                        <div className="mt-auto">
                          <Link href={f.path} className="block w-full text-center px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition group">
                            Découvrir
                            <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}

                  {FORMATION_PRO_LIST.slice(4, 5).map((f) => (
                    <div key={f.slug} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
                      <div className="text-center flex-1 flex flex-col">
                        <div className="h-24 flex flex-col justify-center mb-6">
                          <h3 className="text-lg font-bold text-[#013F63] mb-2 leading-tight">
                            {f.titreCarte}
                          </h3>
                          <p className="text-base text-[#013F63] font-medium">
                            {f.sousTitreCarte}
                          </p>
                        </div>

                        <div className="space-y-3 mb-8 text-sm text-[#013F63] flex-1">
                          <div className="flex items-center justify-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>11 heures</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>4 à 12 personnes par session</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Award className="w-4 h-4" />
                            <span>Attestation de formation</span>
                          </div>
                        </div>

                        <div className="mt-auto">
                          <Link href={f.path} className="block w-full text-center px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition group">
                            Découvrir
                            <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Titre de section - Transformation numérique */}
                  <div className="lg:col-span-2 mt-8 mb-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#013F63] text-center mb-4">
                      <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Transformation</span>{' '}
                      numérique des pratiques professionnelles
                    </h3>
                  </div>

                  {FORMATION_PRO_LIST.slice(5, 7).map((f) => (
                    <div key={f.slug} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
                      <div className="text-center flex-1 flex flex-col">
                        <div className="h-24 flex flex-col justify-center mb-6">
                          <h3 className="text-lg font-bold text-[#013F63] mb-2 leading-tight">
                            {f.titreCarte}
                          </h3>
                          <p className="text-base text-[#013F63] font-medium">
                            {f.sousTitreCarte}
                          </p>
                        </div>

                        <div className="space-y-3 mb-8 text-sm text-[#013F63] flex-1">
                          <div className="flex items-center justify-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>14 heures</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>4 à 12 personnes par session</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Award className="w-4 h-4" />
                            <span>Attestation de formation</span>
                          </div>
                        </div>

                        <div className="mt-auto">
                          <Link href={f.path} className="block w-full text-center px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition group">
                            Découvrir
                            <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
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

          <section className="py-8">
            <div className="container mx-auto px-4 max-w-3xl text-center">
              <p className="text-[#013F63] text-sm">
                <Link href="/reconversion-professionnelle-bordeaux" className="font-semibold text-orange-500 hover:underline">
                  Reconversion professionnelle à Bordeaux
                </Link>
                {' · '}
                <Link href="/organisme-formation-insertion-professionnelle" className="font-semibold text-orange-500 hover:underline">
                  Organisme de formation insertion
                </Link>
              </p>
            </div>
          </section>

          <FormationFaqSection briefId="formations-hub" />
          <Footer />
        </div>

      </div>
    </>
  )
} 