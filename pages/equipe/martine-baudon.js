import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, User } from 'lucide-react';
import { useState } from 'react';

export default function MartineBeaudon() {
  const [showChildPhoto, setShowChildPhoto] = useState(false);
  return (
    <>
      <Head>
        <title>Martine BAUDON | Formatrice - Atipik RH</title>
        <meta name="description" content="Découvrez le profil de Martine BAUDON, Formatrice chez Atipik RH. Son parcours, ses compétences et son accompagnement personnalisé." />
        <meta name="keywords" content="Martine BAUDON, formatrice Atipik RH, formation professionnelle, Lormont" />
        <link rel="canonical" href="https://atipikrh.fr/equipe/martine-baudon" />
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
                          src="/images/equipe/Martine.jpeg"
                          alt="Martine BAUDON"
                          width={350}
                          height={400}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                          <User className="w-32 h-32 text-white" />
                        </div>
                      )}
                    </div>
                    {/* Photo principale cliquable */}
                    <div 
                      className="relative z-10 w-full h-72 cursor-pointer"
                      onClick={() => setShowChildPhoto(!showChildPhoto)}
                    >
                      {showChildPhoto ? (
                        <div className="w-full h-full rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                          <User className="w-32 h-32 text-white" />
                        </div>
                      ) : (
                        <Image
                          src="/images/equipe/Martine.jpeg"
                          alt="Martine BAUDON"
                          width={350}
                          height={400}
                          className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Content à droite */}
                <div className="lg:col-span-8 space-y-4">
                  <h1 className="text-3xl lg:text-4xl font-bold text-[#013F63] leading-tight">
                    <span className="font-brittany text-3xl lg:text-4xl">Martine</span> <span className="font-semibold">BAUDON</span>
                  </h1>
                  <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    Formatrice
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
                        Titre de FPA " Formateur Professionnel Adultes " - Mars 2023 - Formatrice Projet Voltaire, orthographe et expression -
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
                        Une ouverture , une écoute, oser, l'envie de bien faire et de donner le meilleur à mes apprenants, pour eux et pour Atipik.
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
                        Je suis rêveuse, j'ose et je pense qu'il y a du bon en chacun de nous : "Me retrouver toute seule dans un bus de nuit pour faire le trajet Londres Bornemouth " - Manger seule dans un pub à Bornemouth et me faire offrir une bière par un inconnu en écoutant de la musique Celtique, puis partager sourires et bavardages sans ambiguité et dans une bonne ambiance".
                      </p>
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
                        Pilote d'avion
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
                        Le relationnel, la curiosité, l'adaptabilité tout en étant professionnelle - Le sourire
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
                        "Un homme qui rêve est un homme qui vit". Antoine de Saint Exupéry - "Tout le monde peut apprendre et grandir, je dois en faire le pari". Philippe Meirieu
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
