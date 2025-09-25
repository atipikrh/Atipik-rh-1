import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function CoralineAbadie() {
  const [showChildPhoto, setShowChildPhoto] = useState(false);
  return (
    <>
      <Head>
        <title>Coraline ABADIE | Formatrice par le théâtre et l'impro - Atipik RH</title>
        <meta name="description" content="Découvrez le profil de Coraline ABADIE, Formatrice par le théâtre et l'impro chez Atipik RH. Son parcours, ses compétences et son accompagnement personnalisé." />
        <meta name="keywords" content="Coraline ABADIE, formatrice Atipik RH, formation professionnelle, Lormont" />
        <link rel="canonical" href="https://atipikrh.fr/equipe/coraline-abadie" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <Header isFixed={true} />
        
        {/* Spacer for fixed header */}
        <div className="h-20"></div>

        {/* Page complète en un seul écran */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Navigation compacte */}
              <div className="mb-6">
                <Link href="/notre-equipe" className="inline-flex items-center text-[#013F63] hover:text-[#013F63] transition-colors group">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Retour à l'équipe
                </Link>
              </div>

              {/* Header compact avec photo et nom */}
              <div className="grid lg:grid-cols-12 gap-8 items-center mb-8">
                
                {/* Photo avec arrière-plan interchangeable */}
                <div className="lg:col-span-4">
                  <div className="relative group">
                    {/* Arrière-plan - Photo opposée à celle affichée */}
                    <div className="absolute inset-0 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-300 overflow-hidden">
                      {showChildPhoto ? (
                        <Image
                          src="/images/equipe/coraline.jpeg"
                          alt="Coraline ABADIE"
                          width={350}
                          height={400}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        <Image
                          src="/images/equipe/coraline-enfant.jpeg"
                          alt="Coraline ABADIE enfant"
                          width={350}
                          height={400}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      )}
                    </div>
                    {/* Photo principale cliquable */}
                    <div 
                      className="relative z-10 w-full h-72 cursor-pointer"
                      onClick={() => setShowChildPhoto(!showChildPhoto)}
                    >
                      <Image
                        src={showChildPhoto ? "/images/equipe/coraline-enfant.jpeg" : "/images/equipe/coraline.jpeg"}
                        alt={showChildPhoto ? "Coraline ABADIE enfant" : "Coraline ABADIE"}
                        width={350}
                        height={400}
                        className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Content à droite */}
                <div className="lg:col-span-8 space-y-4">
                  <h1 className="text-3xl lg:text-4xl font-bold text-[#013F63] leading-tight">
                    <span className="font-brittany text-3xl lg:text-4xl">Coraline</span> <span className="font-semibold">ABADIE</span>
                  </h1>
                  <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    Formatrice par le théâtre et l'impro
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#013F63]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Photo par @l.r.shoot</span>
                  </div>
                </div>
              </div>

              {/* 6 cartes en grille 2x3 */}
              <div className="grid lg:grid-cols-3 gap-6">
                
                {/* Ton parcours professionnel */}
                <div className="group">
                  <div className="p-5 h-full">
                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-[#013F63] mb-2">
                        Ton parcours professionnel
                      </h2>
                      <div className="w-8 h-0.5 bg-[#013F63] rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[#013F63] text-sm leading-relaxed">
                        Commerciale 15 ans, reconversion titre de CIP et création de mon activité indépendante.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ce que t'apportes à ATIPIK RH */}
                <div className="group">
                  <div className="p-5 h-full">
                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-[#013F63] mb-2">
                        Ce que t'apportes à ATIPIK RH
                      </h2>
                      <div className="w-8 h-0.5 bg-[#013F63] rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[#013F63] text-sm leading-relaxed">
                        Atipik RH me permet de transmettre les techniques que j'utilise dans la formation à des professionnels. Mon souhait est que chacun ose utiliser le jeu ou les outils qu'il aime et maîtrise pour l'appliquer à son métier. Atipik m'apporte cette faisabilité avec confiance et professionnalisme 😊
                      </p>
                    </div>
                  </div>
                </div>

                {/* Une anecdote sur toi */}
                <div className="group">
                  <div className="p-5 h-full">
                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-[#013F63] mb-2">
                        Une anecdote sur toi
                      </h2>
                      <div className="w-8 h-0.5 bg-[#013F63] rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[#013F63] text-sm leading-relaxed">
                        Mon faire-part de naissance 😊 Comme une prédiction...
                      </p>
                      <div className="mt-3">
                        <Image
                          src="/images/equipe/faire-part-coraline.jpg"
                          alt="Faire-part de naissance de Coraline"
                          width={200}
                          height={150}
                          className="rounded-lg shadow-md object-cover w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ton métier d'enfance */}
                <div className="group">
                  <div className="p-5 h-full">
                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-[#013F63] mb-2">
                        Ton métier d'enfance
                      </h2>
                      <div className="w-8 h-0.5 bg-[#013F63] rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[#013F63] text-sm leading-relaxed">
                        Photographe
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ton super-pouvoir au travail */}
                <div className="group">
                  <div className="p-5 h-full">
                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-[#013F63] mb-2">
                        Ton super-pouvoir au travail
                      </h2>
                      <div className="w-8 h-0.5 bg-[#013F63] rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[#013F63] text-sm leading-relaxed">
                        Être dans l'instant
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ta devise */}
                <div className="group">
                  <div className="p-5 h-full">
                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-[#013F63] mb-2">
                        Ta devise
                      </h2>
                      <div className="w-8 h-0.5 bg-[#013F63] rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[#013F63] text-sm leading-relaxed font-medium italic">
                        "I believe I can fly"
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
} 