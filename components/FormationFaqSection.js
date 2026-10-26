import { ChevronDown } from 'lucide-react'
import { getBriefById } from '../lib/seo/content-briefs'

/**
 * FAQ visible et crawlable (réponses toujours dans le HTML, alignées sur le JSON-LD).
 * `extraItems` complète le brief sans dupliquer une question déjà présente.
 * @param {{ briefId: string, title?: string, extraItems?: { question: string, answer: string }[] }} props
 */
export default function FormationFaqSection({ briefId, title = 'Questions fréquentes', extraItems = [] }) {
  const brief = getBriefById(briefId)
  const briefFaq = brief?.faq ?? []
  const seen = new Set(briefFaq.map((item) => item.question))
  const faq = [
    ...briefFaq,
    ...extraItems.filter((item) => item?.question && !seen.has(item.question)),
  ]

  if (!faq.length) return null

  return (
    <section className="py-12 bg-white/60" aria-labelledby={`faq-${briefId}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 id={`faq-${briefId}`} className="text-2xl font-bold text-[#013F63] text-center mb-8">
            {title}
          </h2>
          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-left text-[#013F63] font-semibold hover:bg-gray-50 transition-colors [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <ChevronDown className="w-5 h-5 shrink-0 text-orange-500 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-4 pb-4 text-[#013F63]/90 text-sm leading-relaxed border-t border-gray-50">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
