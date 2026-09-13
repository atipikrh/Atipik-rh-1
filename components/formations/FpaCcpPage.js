import Link from 'next/link'
import { CheckCircle, Clock, Phone, Users } from 'lucide-react'
import ServicePageSeoHead from '../ServicePageSeoHead'
import FormationQuickAnswers from '../FormationQuickAnswers'
import FormationLandingCtas from '../FormationLandingCtas'
import FormationAdequation from '../FormationAdequation'
import FormationFaqSection from '../FormationFaqSection'
import FormationStickyCta from '../FormationStickyCta'
import FormationTarifSection from '../FormationTarifSection'
import Header from '../Header'
import Footer from '../Footer'
import { getCertifianteContactHref, getCertifianteReunionHref } from '../../lib/seo/certifiantesConfig'
import { FPA_CCP_MODULES, getFpaCcpModule } from '../../lib/formations/fpaCcpModules'

const RNCP_FPA_URL = 'https://www.francecompetences.fr/recherche/rncp/37275/'

/**
 * Liens croisés vers le parcours FPA complet et les autres blocs CCP.
 * @param {{ currentId: number }} props
 */
function FpaCcpCrossLinks({ currentId }) {
  const autresModules = FPA_CCP_MODULES.filter((m) => m.id !== currentId)

  return (
    <p className="mt-4 text-center text-sm text-[#013F63]/80 max-w-2xl mx-auto">
      Vous visez le titre FPA complet ?{' '}
      <Link href="/formations/fpa" className="font-semibold text-orange-500 hover:underline">
        Voir le parcours FPA (7 mois, 934 h)
      </Link>
      {autresModules.map((m) => (
        <span key={m.id}>
          {' · '}
          <Link href={m.path} className="font-semibold text-orange-500 hover:underline">
            {m.labelCourt}
          </Link>
        </span>
      ))}
    </p>
  )
}

/**
 * Page réutilisable pour un bloc CCP du titre FPA (RNCP37275).
 * @param {{ moduleId: 1 | 2 | 3 | 4 }} props
 */
export default function FpaCcpPage({ moduleId }) {
  const module = getFpaCcpModule(moduleId)

  if (!module) {
    return null
  }

  const contactHref = getCertifianteContactHref(module.briefId)
  const reunionHref = getCertifianteReunionHref(module.briefId)

  return (
    <>
      <ServicePageSeoHead briefId={module.briefId} />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 relative overflow-hidden">
        {/* Arrière-plan animé */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-muted-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-muted-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000" />

        <div className="relative z-10">
          <Header isFixed />

          <div className="h-20" />

          {/* Hero */}
          <section className="pt-4 pb-4">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-2xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight tracking-tight">
                  Formateur Professionnel d&apos;Adultes —{' '}
                  <span className="text-accent-500 font-brittany text-4xl lg:text-5xl">
                    {module.heroAccent} (C.C.P {module.id})
                  </span>
                </h1>
                <p className="text-lg text-[#013F63] leading-relaxed font-light">
                  {module.accroche}
                </p>
              </div>
              <FormationQuickAnswers briefId={module.briefId} />
              <FormationLandingCtas briefId={module.briefId} />
              <FpaCcpCrossLinks currentId={module.id} />
            </div>
          </section>

          {/* Carte contexte */}
          <section className="py-2 my-2">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#013F63]">
                  <div className="space-y-4 text-[#013F63] text-lg leading-relaxed text-center">
                    {module.contexte.map((paragraphe) => (
                      <p key={paragraphe.slice(0, 40)}>{paragraphe}</p>
                    ))}
                  </div>

                  <div className="flex items-center justify-center my-6">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
                  </div>

                  <div className="text-accent-500 font-bold text-xl leading-relaxed text-center">
                    <p>{module.ctaCapitalisation}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Durée du module */}
          <section className="py-6">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="w-14 h-14 rounded-full bg-[#013F63]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-[#013F63]" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-1">
                      Durée du {module.labelCourt} FPA
                    </p>
                    <p className="text-xl font-bold text-[#013F63]">
                      {module.heuresTotal}&nbsp;h
                    </p>
                    <p className="text-sm text-[#013F63]/80 mt-1">
                      {module.heuresCentre}&nbsp;h en centre + {module.heuresStage}&nbsp;h de stage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Compétences certifiantes */}
          <section id="programme" className="py-8 scroll-mt-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-3 leading-tight">
                    Les{' '}
                    <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">
                      compétences
                    </span>{' '}
                    du {module.labelCourt}
                  </h2>
                  <p className="text-lg text-[#013F63] leading-relaxed font-light">
                    {module.titreOfficiel} — bloc{' '}
                    <a
                      href={RNCP_FPA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-orange-500 hover:underline"
                    >
                      {module.codeRncp}
                    </a>{' '}
                    du titre FPA niveau 5 (RNCP37275)
                  </p>
                </div>

                <div className="space-y-3">
                  {module.competences.map((competence) => (
                    <div
                      key={competence}
                      className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-md border border-gray-200"
                    >
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-[#013F63] text-sm leading-relaxed">{competence}</span>
                    </div>
                  ))}
                </div>

                <p className="text-center mt-8 text-sm text-gray-500 italic">
                  Source :{' '}
                  <a
                    href={RNCP_FPA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#013F63] hover:text-orange-500 underline transition-colors"
                  >
                    France Compétences — RNCP37275
                  </a>
                </p>
              </div>
            </div>
          </section>

          <FormationTarifSection
            publicPrice={module.tarifTtc}
            variant="certifiante"
            contactHref={contactHref}
          />

          <FormationAdequation briefId={module.briefId} />

          {/* CTA candidature */}
          <section id="dates" className="pt-2 pb-8 scroll-mt-24">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 shadow-lg border-2 border-gray-300">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#013F63] mb-4">
                      Prêt à{' '}
                      <span className="text-orange-500 font-brittany text-3xl">candidater</span> ?
                    </h3>
                    <p className="text-[#013F63] leading-relaxed mb-6 max-w-2xl mx-auto">
                      Participez à une réunion d&apos;information pour découvrir le {module.labelCourt}{' '}
                      FPA et échanger sur votre projet de devenir formateur d&apos;adultes.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href={reunionHref}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold rounded-full transition-colors text-lg hover:scale-105 transform"
                      >
                        <Users className="w-5 h-5" />
                        S&apos;inscrire à une réunion
                      </Link>
                      <Link
                        href={contactHref}
                        className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold rounded-full transition-colors text-lg"
                      >
                        <Phone className="w-5 h-5" />
                        Nous contacter
                      </Link>
                    </div>

                    <p className="mt-6 text-sm text-[#013F63]/80">
                      Vous souhaitez valider l&apos;ensemble du titre ?{' '}
                      <Link
                        href="/formations/fpa"
                        className="font-semibold text-orange-500 hover:underline"
                      >
                        Découvrir le parcours FPA complet (7 mois, 934 h)
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <FormationFaqSection briefId={module.briefId} />
        <FormationStickyCta href={reunionHref} label="Participer à une réunion d'information" />

        <Footer />
      </div>
    </>
  )
}
