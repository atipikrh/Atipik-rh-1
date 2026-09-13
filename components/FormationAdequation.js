import Link from 'next/link'
import { CheckCircle, Calendar } from 'lucide-react'
import { getCertifianteGeoByBrief, getCertifianteReunionHref } from '../lib/seo/certifiantesConfig'

/**
 * Checklist prérequis + CTA réunion (ancre #adequation).
 * @param {{ briefId: string }} props
 */
export default function FormationAdequation({ briefId }) {
  const geo = getCertifianteGeoByBrief(briefId)
  if (!geo?.landing?.prerequis?.length) return null

  return (
    <section id="adequation" className="py-10 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-[#013F63]/15">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-3 leading-tight">
            Vérifier l&apos;adéquation de{' '}
            <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">mon projet</span>
          </h2>
          <p className="text-[#013F63] text-sm md:text-base mb-5 leading-relaxed">
            Cette formation vous correspond si vous validez les points suivants. Si oui, inscrivez-vous
            à une réunion d&apos;information pour confirmer votre projet avec l&apos;équipe pédagogique.
          </p>
          <ul className="space-y-3 mb-6">
            {geo.landing.prerequis.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#013F63] text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href={getCertifianteReunionHref(briefId)}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors"
          >
            <Calendar className="w-5 h-5" aria-hidden />
            Si oui → participer à une réunion d&apos;information
          </Link>
        </div>
      </div>
    </section>
  )
}
