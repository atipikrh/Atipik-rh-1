import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import ServicePageSeoHead from './ServicePageSeoHead'
import FormationFaqSection from './FormationFaqSection'
import { getBriefById } from '../lib/seo/content-briefs'
import { getIntentFacts } from '../lib/seo/intentLandings'

function FactList({ facts }) {
  return (
    <dl className="grid sm:grid-cols-2 gap-4">
      {facts.map((fact) => (
        <div key={fact.label} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
          <dt className="text-sm font-semibold text-orange-500">{fact.label}</dt>
          <dd className="mt-1 text-[#013F63]">{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}

/**
 * Page courte : tarif, lien vers le pilier, FAQ. Le brief porte le titre et les liens.
 * @param {{ briefId: string }} props
 */
export default function IntentLanding({ briefId }) {
  const brief = getBriefById(briefId)
  if (!brief) return null

  const cta = brief.internalLinks.find((link) => link.anchorIntent === 'conversion')
  const pillar = brief.internalLinks.find((link) => link.anchorIntent === 'pilier')

  return (
    <>
      <ServicePageSeoHead briefId={briefId} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <Header isFixed={true} />
        <div className="h-20" />
        <main className="container mx-auto px-4 py-10 max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">{brief.h1}</h1>
          <p className="text-lg text-[#013F63] mb-8">{brief.metaDescription}</p>
          <FactList facts={getIntentFacts(briefId)} />
          <div className="mt-8 flex flex-wrap gap-3">
            {cta ? (
              <Link href={cta.href} className="inline-flex px-5 py-3 rounded-full bg-[#FE6400] text-white font-semibold">
                {cta.label}
              </Link>
            ) : null}
            {pillar ? (
              <Link href={pillar.href} className="inline-flex px-5 py-3 rounded-full border-2 border-[#013F63] text-[#013F63] font-semibold">
                {pillar.label}
              </Link>
            ) : null}
          </div>
        </main>
        <FormationFaqSection briefId={briefId} />
        <Footer />
      </div>
    </>
  )
}
