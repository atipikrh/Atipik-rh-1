import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FormationQuickAnswers from '../../components/FormationQuickAnswers'
import FormationLandingCtas from '../../components/FormationLandingCtas'
import {
  BASE_URL,
  FORMATION_PRO_LIST,
  buildFormationProHubKeywords,
  buildJsonLdFormationProHub,
} from '../../lib/seo/professionnalisantesConfig'
import { TARIF_INTRA_TEXTE, TARIF_INTER_LABEL } from '../../lib/tarifs/tarifsCopy'
import {
  MapPin,
  Euro,
  Clock,
  Award,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

/** Libellé durée à partir de schema.org timeRequired (ex. PT21H). */
function libelleDureeDepuisTimeRequired(timeRequired) {
  const m = /^PT(\d+)H$/i.exec(timeRequired || '')
  if (!m) return ''
  const h = parseInt(m[1], 10)
  if (h === 11) return '11 heures (mixed learning)'
  if (h === 14) return '14 heures (présentiel)'
  if (h === 21) return '21 heures (mixed learning)'
  return `${h} heures`
}

function formatPrixStagiaire(priceStr) {
  const n = parseInt(String(priceStr), 10)
  if (Number.isNaN(n)) return String(priceStr)
  return `${n.toLocaleString('fr-FR')}\u00a0€`
}

export default function FormationsCourtesProfessionnalisantes() {
  const [openFormations, setOpenFormations] = useState({})

  const toggleFormation = (formationId) => {
    setOpenFormations((prev) => ({
      ...prev,
      [formationId]: !prev[formationId],
    }))
  }

  const formations = FORMATION_PRO_LIST.map((c, idx) => ({
    id: idx + 1,
    slug: c.slug,
    path: c.path,
    titre: c.titreAffichage,
    sousTitre: c.sousTitreCarte,
    description: c.description,
    dureeLabel: libelleDureeDepuisTimeRequired(c.timeRequired),
    tarifLabel: formatPrixStagiaire(c.price),
  }))

  const metaDescription =
    "Formations courtes professionnalisantes à Lormont (Bordeaux) : relation entreprise, insertion, recrutement, numérique, IA et prévention des discriminations. Durées 11 h à 21 h ; tarifs sur chaque fiche. Qualiopi."
  const metaTitle = 'Formations courtes professionnalisantes | Atipik RH'
  const twitterTitle = 'Formations courtes professionnalisantes | Atipik RH'
  const canonicalUrl = `${BASE_URL}/formations/courtes-professionnalisantes`
  const hubKeywords = buildFormationProHubKeywords()
  const jsonLdHub = buildJsonLdFormationProHub({
    title: metaTitle,
    description: metaDescription,
  })

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={hubKeywords} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Atipik RH" />
        <meta property="og:locale" content="fr_FR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={metaDescription} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdHub),
          }}
        />
      </Head>

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse animation-delay-3000"></div>

        <div className="relative z-10">
          <Header isFixed={true} />

          <div className="h-20"></div>

          <section className="pt-4 pb-6">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-3xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight tracking-tight">
                  Formations courtes
                  <br />
                  <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">professionnalisantes</span>
                  <br />
                  <span className="text-2xl lg:text-3xl font-semibold">en insertion</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
                  Des formations ancrées dans les <strong>réalités professionnelles</strong>
                  <br className="hidden lg:block" />
                  <span className="text-orange-500 font-medium">pour les acteurs de l&apos;accompagnement et de l&apos;insertion</span>
                </p>
                <p className="mt-6 text-sm text-[#013F63]">
                  Montée en compétences pour les professionnels — découvrir la formation certifiante{' '}
                  <Link href="/formations/cip" className="font-semibold text-orange-500 hover:underline">
                    CIP
                  </Link>
                  {', '}
                  <Link href="/formations/fpa" className="font-semibold text-orange-500 hover:underline">
                    FPA
                  </Link>
                </p>
              </div>
              <FormationQuickAnswers variant="hub" />
              <FormationLandingCtas variant="hub" />
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63]">
                      Le <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Contexte</span>
                    </h2>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Dans un contexte de mutation du marché du travail, les acteurs de l&apos;accompagnement social et professionnel
                      ainsi que les entreprises de secteurs en tension doivent adapter leurs pratiques pour favoriser
                      l&apos;employabilité, la coopération interprofessionnelle et la sécurisation des parcours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-1">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-orange-500">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-800 font-semibold text-lg">Structurer la relation employeur</p>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-orange-500">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-800 font-semibold text-lg">Valoriser les compétences</p>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-orange-500">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-800 font-semibold text-lg">Améliorer la posture professionnelle</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:order-2">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63]">
                      Notre <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Objectif</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 scroll-mt-24" id="catalogue">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                    Nos <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">7 formations</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Chaque formation peut être suivie indépendamment. Le détail du programme figure sur la fiche dédiée.
                  </p>
                </div>

                <div className="space-y-4 max-w-4xl mx-auto">
                  {formations.map((formation) => {
                    const isOpen = openFormations[formation.id]
                    const gradientFrom = 'from-[#013F63]'
                    const gradientTo = 'to-[#012a4a]'

                    return (
                      <div key={formation.slug} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                        <button
                          type="button"
                          onClick={() => toggleFormation(formation.id)}
                          className={`w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white p-4 flex items-center justify-between hover:opacity-90 transition-opacity`}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm">{formation.id}</span>
                            </div>
                            <div className="text-left">
                              <h3 className="text-base lg:text-lg font-bold">{formation.titre}</h3>
                              <p className="text-white/90 text-sm">{formation.sousTitre}</p>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            {isOpen ? <ChevronUp className="w-6 h-6 text-white" /> : <ChevronDown className="w-6 h-6 text-white" />}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="p-6 border-t border-gray-200 animate-in slide-in-from-top-4 duration-300">
                            <p className="text-gray-700 text-sm leading-relaxed mb-4">{formation.description}</p>
                            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6 text-sm text-gray-600">
                              <span className="inline-flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#013F63] flex-shrink-0" />
                                <span>
                                  <strong className="text-[#013F63]">Durée :</strong> {formation.dureeLabel}
                                </span>
                              </span>
                              <span className="inline-flex items-center gap-2">
                                <Euro className="w-4 h-4 text-[#013F63] flex-shrink-0" />
                                <span>
                                  <strong className="text-[#013F63]">{TARIF_INTER_LABEL} :</strong> {formation.tarifLabel} TTC / stagiaire
                                </span>
                              </span>
                            </div>
                            <Link
                              href={formation.path}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white text-sm font-semibold transition-colors"
                            >
                              Voir le programme détaillé
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4">
                    Informations <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Pratiques</span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <Euro className="w-12 h-12 text-[#013F63] mx-auto mb-4" />
                    <h3 className="font-bold text-gray-800 mb-2">Tarifs</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {TARIF_INTER_LABEL} : de {formatPrixStagiaire('715')} à {formatPrixStagiaire('1365')} TTC / stagiaire selon la formation.
                      Détail sur chaque fiche programme.
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mt-2">
                      {TARIF_INTRA_TEXTE}
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-800 mb-2">Lieu</h3>
                    <p className="text-sm text-gray-600">
                      Atipik RH
                      <br />
                      8 Rue du Courant
                      <br />
                      33310 Lormont
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <Clock className="w-12 h-12 text-[#013F63] mx-auto mb-4" />
                    <h3 className="font-bold text-gray-800 mb-2">Durées</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      11 h ou 21 h selon l&apos;action ; présentiel et distanciel (mixed learning selon le programme).
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-800 mb-2">Certification</h3>
                    <p className="text-sm text-gray-600">
                      Attestation de formation
                      <br />
                      Qualiopi
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">
                  Intéressé(e) par nos formations{' '}
                  <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">professionnalisantes ?</span>
                </h2>

                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                  Contactez-nous pour plus d&apos;informations ou pour vous inscrire à nos formations courtes
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105"
                  >
                    Demander des informations
                  </Link>
                  <a
                    href="tel:0783019955"
                    className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-lg"
                  >
                    07 83 01 99 55
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                  <div className="flex flex-col justify-center items-center text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <Image
                        src="/images/certifications/formation-handicap.png"
                        alt="Formation & Handicap"
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[#013F63]">Formation accessible</h3>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="mb-4">
                      <p className="text-[#013F63] leading-relaxed mb-4">
                        <strong>Accessibilité Handicap :</strong> Nous mettons tout en œuvre pour rendre nos formations accessibles au plus grand nombre.
                        Contactez-nous pour étudier ensemble les modalités d&apos;accès adaptées à votre situation.
                      </p>
                    </div>

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
                          <a href="tel:0783019955" className="text-orange-500 hover:text-orange-600 transition-colors text-sm font-medium">
                            07 83 01 99 55
                          </a>
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
