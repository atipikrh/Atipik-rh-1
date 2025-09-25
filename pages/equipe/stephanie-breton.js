import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function StephanieBreton() {
  const [showChildPhoto, setShowChildPhoto] = useState(false);
  return (
    <>
      <Head>
        <title>Stéphanie BRETON | Formatrice - Atipik RH</title>
        <meta name="description" content="Découvrez le profil de Stéphanie BRETON, Formatrice chez Atipik RH. Son parcours, ses compétences et son accompagnement personnalisé." />
        <meta name="keywords" content="Stéphanie BRETON, formatrice Atipik RH, formation professionnelle, Lormont" />
        <link rel="canonical" href="https://atipikrh.fr/equipe/stephanie-breton" />
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
                          src="/images/equipe/stephanie.jpeg"
                          alt="Stéphanie BRETON"
                          width={350}
                          height={400}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        <Image
                          src="/images/equipe/stephanie-enfant.jpg"
                          alt="Stéphanie BRETON enfant"
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
                        src={showChildPhoto ? "/images/equipe/stephanie-enfant.jpg" : "/images/equipe/stephanie.jpeg"}
                        alt={showChildPhoto ? "Stéphanie BRETON enfant" : "Stéphanie BRETON"}
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
                    <span className="font-brittany text-3xl lg:text-4xl">Stéphanie</span> <span className="font-semibold">BRETON</span>
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
                        Après la validation d'un Master 2 en Psychologie, me voilà partie pour 3 ans à enchaîner saisons, jobs alimentaires et expérience richissime en bénévolat en Amérique du Sud. Le retour à la réalité est un peu piquant et j'enchaîne de nouveau les jobs alimentaires, dans la douleur parfois, parce que dans ma représentation à ce moment-là, ne pas travailler, c'est s'exposer à trop de risques. Par chance, je croise sur mon chemin une super conseillère à l'ANPE (oui oui c'était bien ce nom là à l'époque) qui m'invite à prendre le temps de réfléchir à mon avenir professionnel. 3 mois plus tard, grâce à un accompagnement intensif en groupe, me voilà propulsée dans le secteur de l'insertion professionnelle. J'y reste près de 15 années, toutes plus riches les unes que les autres, au sein de la même association, avec une grande variété de missions auprès d'un public très divers. Puis l'envie d'être indépendante pointe le bout de son nez. C'est dans ce cadre que je rencontre Vanessa et que l'envie de partager mon expérience prend vie ! En parallèle de mes interventions chez ATIPIK RH, je suis installée en tant que psychologue en libéral.
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
                        Mon joie de partager et de travailler en équipe avec collègues et stagiaires
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
                        Un jour de formation sur la première session de CIP avec ATIPIK RH me prend l'envie d'amener un gâteau à partager avec les stagiaires. Je prends donc le temps, la veille de mon intervention, de préparer un gâteau au yaourt (que je fais depuis ma plus tendre enfance) dont je double les doses pour que nous puissions tous en avoir un part. Sauf que c'est le flop... erreur de dosage de levure probablement, le gâteau toujours réussi ne l'est pas cette fois ! Les premières bouchées avalées, les réflexions (je l'accorde, toutes plus drôles les unes que les autres) fusent ! Fou rire général dans la salle, les stagiaires s'en donnent à cœur joie pour se moquer de mes talents de pâtissière et imaginer à quoi se gâteau pourrait servir : à reboucher un mur, à remplacer une brique etc. Quelle bande d'ingrats ! Le gâteau sera quand même terminé à ce qu'on me dit, par la pauvre famille de Vanessa qui en héritera !!
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
                        Maîtresse d'école
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
                        Mon énergie !
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
                        "Tomber ce n'est pas grave, ce qui compte, même si c'est dur et que ça prend parfois du temps, c'est de se relever"
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