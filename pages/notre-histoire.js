import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Calendar, Users, Award, MapPin, Star, ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function NotreHistoire() {
  const sectionsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = sectionsRef.current.indexOf(entry.target)
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in-up')
              entry.target.classList.remove('animate-fade-out-down')
            }, sectionIndex * 200) // Délai de 200ms entre chaque section
          } else {
            // Quand la section sort de la vue, on la fait disparaître
            entry.target.classList.remove('animate-fade-in-up')
            entry.target.classList.add('animate-fade-out-down')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const etapesHistoire = [
    {
      annee: "Mars 2019",
      titre: "Création d'Atipik RH",
      sousTitre: "L'aventure commence",
      icone: "Star",
      couleur: "text-orange-600",
      bgCouleur: "bg-orange-200",
      description: "C'est le grand jour ! Dans un élan de passion et de détermination, Atipik RH voit officiellement le jour. Une équipe de professionnels expérimentés décide de révolutionner l'accompagnement professionnel à Bordeaux. Le rêve devient réalité avec une mission claire : créer un organisme de formation différent, plus humain, plus proche des vraies attentes du terrain.",
      highlight: "Le pari audacieux de l'accompagnement sur-mesure"
    },
    {
      annee: "Avril 2021",
      titre: "Obtention de Qualiopi",
      sousTitre: "La qualité reconnue officiellement",
      icone: "Star",
      couleur: "text-orange-500",
      bgCouleur: "bg-orange-100",
      description: "Moment de fierté intense ! Atipik RH décroche la certification Qualiopi, gage de qualité et de professionnalisme reconnu par l'État. Cette étape majeure valide l'approche innovante de l'organisme et confirme que l'excellence n'est pas un accident, mais le résultat d'un travail rigoureux et passionné.",
      highlight: "Quand l'innovation rencontre l'excellence reconnue"
    },
    {
      annee: "Juillet 2022",
      titre: "Agrément formation CIP",
      sousTitre: "Une expertise qui se concrétise",
      icone: "Award",
      couleur: "text-sky-400",
      bgCouleur: "bg-sky-100",
      description: "Nouvelle victoire ! Atipik RH obtient l'agrément pour dispenser la formation CIP (Conseiller en Insertion Professionnelle). Cette reconnaissance spécialisée ouvre de nouveaux horizons et confirme l'expertise de l'équipe dans l'accompagnement vers l'emploi. Un pas de plus vers la diversification de l'offre.",
      highlight: "L'expertise insertion qui prend forme"
    },
    {
      annee: "Septembre 2023",
      titre: "1ère session CIP réussie",
      sousTitre: "De la théorie à la pratique",
      icone: "Users",
      couleur: "text-sky-500",
      bgCouleur: "bg-sky-100",
      description: "Le grand test ! La première promotion de conseillers en insertion professionnelle voit le jour avec un succès retentissant. Les apprenants brillent, les entreprises sont conquises, et Atipik RH prouve que sa méthode pédagogique innovante fonctionne à merveille. Une fierté immense pour toute l'équipe !",
      highlight: "Quand la première fois est un succès total"
    },
    {
      annee: "Mars 2024",
      titre: "Démarche Handiaccueillante",
      sousTitre: "L'inclusion au cœur des valeurs",
      icone: "MapPin",
      couleur: "text-blue-600",
      bgCouleur: "bg-blue-200",
      description: "Atipik RH franchit un nouveau cap en s'engageant dans une démarche Handiaccueillante. Parce que l'accompagnement professionnel doit être accessible à tous, l'organisme adapte ses pratiques et renforce son expertise pour accueillir les personnes en situation de handicap avec bienveillance et professionnalisme.",
      highlight: "L'accessibilité comme valeur fondamentale"
    },
    {
      annee: "2026",
      titre: "Nouveaux horizons FPA",
      sousTitre: "L'avenir se dessine déjà",
      icone: "Calendar",
      couleur: "text-[#013F63]",
      bgCouleur: "bg-blue-200",
      description: "L'aventure continue ! Début 2026, Atipik RH lancera ses premières sessions FPA (Formation Professionnelle d'Adultes) et ses formations courtes professionnalisantes. De nouveaux défis passionnants qui promettent d'enrichir encore l'offre et de toucher un public toujours plus large. L'innovation n'a pas de limites !",
      highlight: "L'innovation continue, l'ambition grandit"
    }
  ]

  return (
    <>
      <Head>
        <title>Notre Histoire - Test | Atipik RH - L'aventure d'un organisme pas comme les autres</title>
        <meta name="description" content="Découvrez l'histoire d'Atipik RH : de 2018 à aujourd'hui, le parcours d'une équipe passionnée qui révolutionne l'accompagnement professionnel en Nouvelle-Aquitaine." />
        <meta name="keywords" content="histoire Atipik RH, création organisme formation, Bordeaux, équipe, évolution, chronologie" />
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
                  Notre <span className="text-orange-500 font-brittany font-black">Histoire</span>
                </h1>
                <p className="text-lg lg:text-xl text-[#013F63] leading-relaxed font-light">
                  L'aventure d'une équipe passionnée<br className="hidden lg:block"/>
                  <span className="text-orange-500 font-medium">qui révolutionne l'accompagnement professionnel</span>
                </p>
              </div>
            </div>
          </section>

          {/* Mars 2019 - Création d'Atipik RH */}
          <section className="py-20 opacity-0 translate-y-8 transition-all duration-700" ref={el => sectionsRef.current[0] = el}>
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-left lg:pl-12">
                    <div className="text-center lg:text-left mb-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-6">
                        Création d'<span className="text-orange-500 font-brittany text-3xl lg:text-4xl">Atipik RH</span>
                      </h2>
                    </div>
                    
                    <p className="text-lg text-[#013F63] leading-relaxed mb-8">
                      C'est le grand jour ! Vanessa crée Atipik RH dans un élan de passion et de détermination. 
                      Au commencement, elle se concentre uniquement sur les bilans de compétences, mais déjà avec une vision claire : 
                      créer un centre de formation aux valeurs familiales, inclusif et proche de ses stagiaires. 
                      L'accompagnement humain et personnalisé est au cœur de cette belle aventure qui commence.
                    </p>

                  </div>
                  
                  <div className="text-center">
                    <div className="text-[8rem] lg:text-[16rem] font-bold text-orange-500 opacity-40 font-brittany">
                      2019
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Avril 2021 - Obtention de Qualiopi */}
          <section className="py-20 opacity-0 translate-y-8 transition-all duration-700" ref={el => sectionsRef.current[1] = el}>
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center order-2 lg:order-1">
                    <div className="text-[8rem] lg:text-[16rem] font-bold text-orange-500 opacity-40 font-brittany">
                      2021
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-left order-1 lg:order-2">
                    <div className="text-center lg:text-left mb-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-6">
                        Obtention de <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">Qualiopi</span>
                      </h2>
                    </div>
                    
                    <p className="text-lg text-[#013F63] leading-relaxed mb-8">
                      Moment de fierté intense ! Atipik RH décroche la certification Qualiopi, gage de qualité et de professionnalisme 
                      reconnu par l'État. Cette étape majeure valide l'approche innovante de l'organisme.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Juillet 2022 - Agrément formation CIP */}
          <section className="py-20 opacity-0 translate-y-8 transition-all duration-700" ref={el => sectionsRef.current[2] = el}>
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-left lg:pl-12">
                    <div className="text-center lg:text-left mb-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-6">
                        Agrément formation <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">CIP</span>
                      </h2>
                    </div>
                    
                    <p className="text-lg text-[#013F63] leading-relaxed mb-8">
                      Nouvelle victoire ! Atipik RH obtient l'agrément pour dispenser la formation CIP (Conseiller en Insertion Professionnelle). 
                      Cette reconnaissance spécialisée ouvre de nouveaux horizons et confirme l'expertise de l'équipe.
                    </p>

                  </div>
                  
                  <div className="text-center">
                    <div className="text-[8rem] lg:text-[16rem] font-bold text-sky-400 opacity-40 font-brittany">
                      2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Septembre 2023 - 1ère session CIP réussie */}
          <section className="py-20 opacity-0 translate-y-8 transition-all duration-700" ref={el => sectionsRef.current[3] = el}>
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center order-2 lg:order-1">
                    <div className="text-[8rem] lg:text-[16rem] font-bold text-sky-500 opacity-40 font-brittany">
                      2023
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-left order-1 lg:order-2">
                    <div className="text-center lg:text-left mb-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-6">
                        1ère session <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">CIP réussie</span>
                      </h2>
                    </div>
                    
                    <p className="text-lg text-[#013F63] leading-relaxed mb-8">
                      Le grand test ! La première promotion de conseillers en insertion professionnelle voit le jour avec un succès retentissant. 
                      Les apprenants brillent, les entreprises sont conquises, et Atipik RH prouve que sa méthode pédagogique innovante fonctionne.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mars 2024 - Démarche Handiaccueillante */}
          <section className="py-20 opacity-0 translate-y-8 transition-all duration-700" ref={el => sectionsRef.current[4] = el}>
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-left lg:pl-12">
                    <div className="text-center lg:text-left mb-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-6">
                        Démarche <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">Handiaccueillante</span>
                      </h2>
                    </div>
                    
                    <p className="text-lg text-[#013F63] leading-relaxed mb-8">
                      Atipik RH franchit un nouveau cap en s'engageant dans une démarche Handiaccueillante. Parce que l'accompagnement 
                      professionnel doit être accessible à tous, l'organisme adapte ses pratiques et renforce son expertise.
                    </p>

                  </div>
                  
                  <div className="text-center">
                    <div className="text-[8rem] lg:text-[16rem] font-bold text-blue-600 opacity-40 font-brittany">
                      2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2026 - Nouveaux horizons FPA */}
          <section className="py-20 opacity-0 translate-y-8 transition-all duration-700" ref={el => sectionsRef.current[5] = el}>
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center order-2 lg:order-1">
                    <div className="text-[8rem] lg:text-[16rem] font-bold text-blue-900 opacity-40 font-brittany">
                      2026
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-left order-1 lg:order-2">
                    <div className="text-center lg:text-left mb-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-6">
                        Nouveaux horizons <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">FPA</span>
                      </h2>
                    </div>
                    
                    <p className="text-lg text-[#013F63] leading-relaxed mb-8">
                      L'aventure continue ! Début 2026, Atipik RH lancera ses premières sessions FPA (Formation Professionnelle d'Adultes) 
                      et ses formations courtes professionnalisantes. De nouveaux défis passionnants qui promettent d'enrichir encore l'offre.
                    </p>

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


          {/* Section CTA */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-12 shadow-lg border border-gray-100">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight">
                    Et la suite ? <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Écrivons-la ensemble !</span>
                  </h2>
                  
                  <p className="text-lg text-[#013F63] leading-relaxed font-light mb-8">
                    Notre histoire continue et vous en êtes les acteurs principaux. 
                    Chaque personne accompagnée, chaque projet réalisé, chaque sourire retrouvé 
                    enrichit notre belle aventure humaine.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/notre-equipe" className="inline-flex items-center gap-3 px-8 py-4 bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                      Rencontrer l'équipe
                      <Users className="w-5 h-5" />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold rounded-lg transition-all duration-300">
                      Rejoindre l'aventure
                      <ArrowRight className="w-5 h-5" />
                    </Link>
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
