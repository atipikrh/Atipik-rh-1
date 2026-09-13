import Link from 'next/link'
import { ENTITY_LEAD, getCitationByPage } from '../lib/seo/citations'

/**
 * Bloc de définition citables (assistants IA) — toujours dans le HTML initial.
 * @param {{ pageId: string, className?: string }} props
 */
export default function EntityCitationBlock({ pageId, className = '' }) {
  const citation = getCitationByPage(pageId)
  if (!citation) return null

  return (
    <aside
      className={`max-w-4xl mx-auto mb-8 rounded-2xl border-2 border-[#013F63]/15 bg-white/90 p-6 shadow-md text-left ${className}`.trim()}
      aria-label="Présentation de l’organisme et du service"
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-[#013F63]/70 mb-4">
        En bref
      </p>
      {citation.includeLead ? (
        <p className="text-[#013F63] leading-relaxed mb-3">{ENTITY_LEAD}</p>
      ) : null}
      <p className="text-[#013F63] leading-relaxed mb-4">{citation.definition}</p>
      <dl className="space-y-2 text-sm text-[#013F63]">
        {citation.facts.map((fact) => (
          <div key={fact.label}>
            <dt className="font-bold inline">{fact.label} : </dt>
            <dd className="inline font-light">{fact.value}</dd>
          </div>
        ))}
      </dl>
      {citation.sources.length > 0 ? (
        <ul className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {citation.sources.map((source) => {
            const isExternal = source.href.startsWith('http')
            const isPdf = source.href.endsWith('.pdf')
            if (isExternal) {
              return (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#013F63]/80 hover:text-orange-500 underline-offset-2 hover:underline"
                  >
                    {source.label}
                  </a>
                </li>
              )
            }
            return (
              <li key={source.href}>
                <Link
                  href={source.href}
                  className="font-semibold text-[#013F63]/80 hover:text-orange-500 underline-offset-2 hover:underline"
                  target={isPdf ? '_blank' : undefined}
                  rel={isPdf ? 'noopener noreferrer' : undefined}
                >
                  {source.label}
                </Link>
              </li>
            )
          })}
        </ul>
      ) : null}
    </aside>
  )
}
