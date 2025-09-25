import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function VanessaNoahEwodo() {
  const [showChildPhoto, setShowChildPhoto] = useState(false);
  return (
    <>
      <Head>
        <title>Vanessa NOAH EWODO | Directrice - Atipik RH</title>
        <meta name="description" content="Découvrez le profil de Vanessa NOAH EWODO, Directrice d'Atipik RH. Son parcours, ses compétences et son accompagnement personnalisé." />
        <meta name="keywords" content="Vanessa NOAH EWODO, directrice Atipik RH, formation professionnelle, Lormont" />
        <link rel="canonical" href="https://atipikrh.fr/equipe/vanessa-noah-ewodo" />
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
                          src="/images/equipe/Vanessa.jpeg"
                          alt="Vanessa NOAH EWODO"
                          width={350}
                          height={400}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        <Image
                          src="/images/equipe/vanessa-enfant.png"
                          alt="Vanessa NOAH EWODO enfant"
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
                        src={showChildPhoto ? "/images/equipe/vanessa-enfant.png" : "/images/equipe/Vanessa.jpeg"}
                        alt={showChildPhoto ? "Vanessa NOAH EWODO enfant" : "Vanessa NOAH EWODO"}
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
                    <span className="font-brittany text-4xl lg:text-5xl">Vanessa</span> <span className="font-semibold">NOAH EWODO</span>
                  </h1>
                  <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    Directrice
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
                        Vanessa Noah Ewodo est diplômée en psychologie, en formation pour adultes et en ressources humaines. Ces compétences pluridisciplinaires forment une solide base pour son rôle dans l'accompagnement professionnel.
                      </p>
                      <p className="text-[#013F63] text-sm leading-relaxed">
                        Elle débute sa carrière dans le secteur associatif, où elle accompagne notamment des publics migrants sur des questions d'alphabétisation et d'accès au droit. Cette expérience lui permet de développer une expertise en accompagnement polyvalent et interculturel.
                      </p>
                      <p className="text-[#013F63] text-sm leading-relaxed">
                        Avant de créer sa structure, elle cumule les rôles :
                      </p>
                      <ul className="text-[#013F63] text-sm leading-relaxed list-disc list-inside space-y-1">
                        <li>Conjointe associée dans une entreprise de menuiserie.</li>
                        <li>Fondatrice d'une start-up dans l'économie sociale et solidaire dédiée aux diasporas africaines.<br/>Ces activités lui offrent des compétences en gestion de projet, stratégie commerciale et recrutement.</li>
                      </ul>
                      <p className="text-[#013F63] text-sm leading-relaxed">
                        Elle intègre ensuite un cabinet conseil en RH où elle intervient comme consultante en évolution de carrière, menant des bilans de compétences auprès de publics issus de secteurs variés.
                      </p>
                      <p className="text-[#013F63] text-sm leading-relaxed">
                        Forte de ce parcours, Vanessa Noah Ewodo fonde ATIPIK RH, un organisme de formation et d'accompagnement spécialisé dans :
                      </p>
                      <ul className="text-[#013F63] text-sm leading-relaxed list-disc list-inside space-y-1">
                        <li>Les bilans de compétences</li>
                        <li>La validation des acquis de l'expérience (VAE)</li>
                        <li>La formation de futurs conseillers en insertion professionnelle et formateurs pour adultes.</li>
                        <li>Et la professionnalisation des acteurs de l'accompagnement social dans leur connaissance de l'entreprise</li>
                      </ul>
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
                        ATIPIK RH est le moyen pour moi d'avoir un impact positif et durable sur mon territoire.
                      </p>
                      <p className="text-[#013F63] text-sm leading-relaxed">
                        Chaque projet est une opportunité de créer des parcours professionnels épanouissants, en partenariat avec des acteurs qui partagent mes valeurs : inclusion, solidarité et innovation sociale.
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
                        Quand j'ai créé ATIPIK RH, je n'avais pas de plan figé, pas de financement garanti, pas de certitudes. Ce que j'avais, c'était :
                      </p>
                      <p className="text-[#013F63] text-sm leading-relaxed">
                        – <strong>mon expérience</strong>,<br/>
                        – <strong>mon réseau de terrain</strong>,<br/>
                        – <strong>mes convictions profondes</strong> sur l'insertion, l'inclusion et l'humain.
                      </p>
                      <p className="text-[#013F63] text-sm leading-relaxed">
                        Et surtout, <strong>j'avais envie d'agir, ici et maintenant, avec ce que j'avais sous la main</strong>.
                      </p>
                      <p className="text-[#013F63] text-sm leading-relaxed">
                        C'est exactement le principe de <strong>l'effectuation</strong> : on ne part pas d'un objectif théorique, mais <strong>de soi, de ses ressources actuelles</strong>, et on avance <strong>par expérimentations, par partenariats, par apprentissages</strong>.
                      </p>
                      <p className="text-[#013F63] text-sm leading-relaxed">
                        Ce n'est pas une trajectoire linéaire, mais une trajectoire vivante.
                      </p>
                      <p className="text-[#013F63] text-sm leading-relaxed">
                        Aujourd'hui, ATIPIK RH existe parce qu'à chaque étape, j'ai fait avec ce que j'avais, et surtout <strong>avec ceux et celles qui étaient là, prêts à construire avec moi</strong>.
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
                        Une mémoire d'exception
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
                        "Impose ta chance, serre ton bonheur et va vers ton risque. À te regarder, ils s'habitueront." <br/>De René Char
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