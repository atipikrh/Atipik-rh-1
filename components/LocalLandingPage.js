import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import ServicePageSeoHead from './ServicePageSeoHead'
import FormationFaqSection from './FormationFaqSection'
import EntityCitationBlock from './EntityCitationBlock'
import { getBriefById } from '../lib/seo/content-briefs'
import { isInternalHrefLive } from '../lib/blog/liveInternalLinks.js'
import { ArrowRight, CheckCircle } from 'lucide-react'

/**
 * Page pilier SEO locale à partir d’un brief.
 * @param {{ briefId: string, children?: import('react').ReactNode }} props
 */
export default function LocalLandingPage({ briefId, children }) {
  const brief = getBriefById(briefId)
  if (!brief) return null

  return (
    <>
      <ServicePageSeoHead briefId={briefId} />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <Header isFixed={true} />
        <div className="h-20" />

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6 leading-tight">
              {brief.h1}
            </h1>
            <p className="text-lg text-[#013F63]/90 leading-relaxed mb-8">{brief.metaDescription}</p>
            {brief.eeatSignals?.length > 0 && (
              <ul className="text-left max-w-2xl mx-auto space-y-2 mb-8">
                {brief.eeatSignals.map((signal) => (
                  <li key={signal} className="flex gap-2 text-sm text-[#013F63]">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            )}
            <EntityCitationBlock pageId={briefId} className="mb-8" />
            {children}
            {brief.internalLinks?.length > 0 && (
              <nav
                className="flex flex-wrap justify-center gap-3 mt-8"
                aria-label="Liens utiles"
              >
                {brief.internalLinks
                  .filter((link) => isInternalHrefLive(link.href))
                  .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full border-2 border-[#013F63] text-[#013F63] text-sm font-semibold hover:bg-[#013F63] hover:text-white transition-colors"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                ))}
              </nav>
            )}
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex px-8 py-3 rounded-full bg-[#013F63] text-white font-semibold hover:bg-[#012a4a] transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>

        <FormationFaqSection briefId={briefId} />
        <Footer />
      </div>
    </>
  )
}
