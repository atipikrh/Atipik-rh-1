import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CheckCircle } from 'lucide-react'

export default function Partenariat() {
  return (
    <>
      <Head>
        <title>Partenariat | ATIPIK RH - Réseau d'entreprises engagées</title>
        <meta name="description" content="Découvrez nos partenariats : Les Entreprises s'Engagent et Club d'Entreprise Bassens. Un réseau d'entreprises dynamique et inclusif." />
        <meta name="keywords" content="partenariat ATIPIK RH, les entreprises engagent, club entreprise bassens, réseau entreprises" />
        <link rel="canonical" href="https://atipikrh.fr/partenariat" />
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
          <section className="relative py-12 overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 pt-4 pb-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-2xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight tracking-tight">
                  Nos <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Partenariats</span>
                </h1>
                <p className="text-lg text-[#013F63] leading-relaxed font-light">
                  Un écosystème d'entreprises engagées<br className="hidden lg:block"/>
                  <span className="text-orange-500 font-medium">pour votre réussite professionnelle</span>
                </p>
              </div>
            </div>
          </section>

          {/* Nos entreprises s'engagent */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight">
                      Les Entreprises <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">s'Engagent</span>
                    </h2>
                    <p className="text-lg text-[#013F63] leading-relaxed font-light mb-6">
                      ATIPIK RH est fier d'être adhérent de l'organisme "Les Entreprises s'Engagent", 
                      un réseau qui promeut l'engagement des entreprises en faveur de l'emploi et de la formation.
                    </p>
                    <div className="space-y-4 text-[#013F63]">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Réseau d'entreprises engagées</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Soutien aux formations qualifiantes</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Accompagnement personnalisé</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Développement des compétences</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="rounded-2xl p-12 shadow-lg">
                      <Image
                        src="/images/certifications/les-entreprises-engagent.png"
                        alt="Logo Les Entreprises s'Engagent"
                        width={300}
                        height={200}
                        className="object-contain w-full h-40 mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Club d'entreprise Bassens */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="text-center">
                    <div className="rounded-2xl p-12 shadow-lg">
                      <Image
                        src="/images/certifications/Club entreprise de bassens.jpg"
                        alt="Logo Club d'Entreprise Bassens"
                        width={300}
                        height={200}
                        className="object-contain w-full h-40 mx-auto"
                      />
                    </div>
                  </div>

                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight">
                      Club d'entreprise <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Bassens</span>
                    </h2>
                    <p className="text-lg text-[#013F63] leading-relaxed font-light mb-6">
                      ATIPIK RH est fier de faire partie du Club d'Entreprise de Bassens, 
                      un réseau dynamique qui favorise les échanges et les collaborations 
                      entre les entreprises locales.
                    </p>
                    <div className="space-y-4 text-[#013F63]">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Réseau d'entrepreneurs engagés</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Développement économique local</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Partenariats et collaborations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partenariat avec les acteurs de la compétence */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-4 leading-tight">
                      Les <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">Acteurs de la Compétence</span>
                    </h3>
                    <p className="text-lg text-[#013F63] leading-relaxed font-light mb-6">
                      Nos partenariats avec les acteurs de la compétence nous permettent 
                      d'offrir des formations de qualité, certifiantes et adaptées aux 
                      besoins du marché du travail.
                    </p>
                    <div className="space-y-4 text-[#013F63]">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Certifications professionnelles reconnues</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Formations adaptées aux besoins du marché</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Accompagnement vers l'emploi</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Réseau d'entreprises partenaires</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="rounded-2xl p-12 shadow-lg">
                      <Image
                        src="/images/certifications/les-acteurs-de-la-competence.png"
                        alt="Logo Les Acteurs de la Compétence"
                        width={300}
                        height={200}
                        className="object-contain w-full h-40 mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Avantages des partenariats */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight">
                    Pourquoi ces <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">partenariats ?</span>
                  </h2>
                  <p className="text-lg text-[#013F63] leading-relaxed font-light max-w-3xl mx-auto">
                    Des opportunités concrètes pour votre développement professionnel
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                  
                  {/* Réseau */}
                  <div className="text-center group flex flex-col justify-center pt-8">
                    <h3 className="text-xl font-bold text-[#013F63] mb-4">Réseau étendu</h3>
                    <p className="text-[#013F63] leading-relaxed">
                      Accès à un large réseau d'entreprises locales
                    </p>
                  </div>

                  {/* Opportunités */}
                  <div className="text-center group flex flex-col justify-center pt-8">
                    <h3 className="text-xl font-bold text-[#013F63] mb-4">Opportunités d'emploi</h3>
                    <p className="text-[#013F63] leading-relaxed">
                      Connexions directes avec les employeurs du territoire
                    </p>
                  </div>

                  {/* Innovation */}
                  <div className="text-center group flex flex-col justify-center pt-8">
                    <h3 className="text-xl font-bold text-[#013F63] mb-4">Innovation</h3>
                    <p className="text-[#013F63] leading-relaxed">
                      Méthodes de formation adaptées aux besoins du marché
                    </p>
                  </div>

                  {/* Engagement */}
                  <div className="text-center group flex flex-col justify-center pt-8">
                    <h3 className="text-xl font-bold text-[#013F63] mb-4">Engagement social</h3>
                    <p className="text-[#013F63] leading-relaxed">
                      Participation active au développement économique local
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                
                <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight">
                  Rejoignez notre <span className="text-orange-500 font-brittany text-4xl lg:text-5xl whitespace-nowrap">écosystème ?</span>
                </h2>
                
                <p className="text-lg text-[#013F63] leading-relaxed font-light mb-8 max-w-2xl mx-auto">
                  Profitez de notre réseau d'entreprises partenaires pour développer votre carrière
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-base hover:scale-105">
                    Nous contacter
                  </Link>
                  <Link href="/formations" className="inline-flex px-6 py-3 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-base">
                    Voir nos formations
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
