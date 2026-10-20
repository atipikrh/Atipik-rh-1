import Link from 'next/link'
import {
  COMPANY_LINKEDIN,
  REVIEW_DATE,
  formatFrenchDate,
  getAuthorProfile,
  toIsoDate,
} from '../lib/seo/brandMeasures'

/**
 * Ligne de publication sous le H1.
 * Le H2 de marque et les points clés ne s’affichent que si la page n’a pas déjà
 * une section extractible (FAQ, En bref, étapes) ni un H2 qui cite la marque.
 * @param {{
 *   authorName?: string,
 *   published?: string,
 *   updated?: string,
 *   keyPoints?: (string | { text: string, href: string })[],
 *   showLeadH2?: boolean,
 *   className?: string,
 * }} props
 */
export default function BrandSignals({
  authorName = 'Atipik RH',
  published,
  updated,
  keyPoints,
  showLeadH2 = true,
  className = '',
}) {
  const author = getAuthorProfile(authorName)
  const publishedIso = toIsoDate(published)
  const updatedIso = toIsoDate(updated) || publishedIso || REVIEW_DATE
  const points = (keyPoints || []).filter((point) => {
    if (!point) return false
    if (typeof point === 'string') return point.trim().length > 0
    return Boolean(point.text && point.href)
  })
  const bylineOnly = !showLeadH2 && points.length === 0

  return (
    <section
      className={`${bylineOnly ? 'my-3 text-center' : 'max-w-4xl mx-auto my-6 text-left'} ${className}`.trim()}
      aria-label="Informations de publication"
    >
      {showLeadH2 ? (
        <h2 className="text-xl lg:text-2xl font-bold text-[#013F63] mb-3">
          Ce qu’il faut retenir chez Atipik RH
        </h2>
      ) : null}
      <p className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#013F63]/80 ${bylineOnly ? 'justify-center' : ''}`.trim()}>
        <span>
          Par{' '}
          <Link href={author.href} className="font-semibold underline underline-offset-2 hover:text-orange-500">
            {author.name}
          </Link>
        </span>
        <a
          href={COMPANY_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2 hover:text-orange-500"
        >
          LinkedIn Atipik RH
        </a>
        {publishedIso ? (
          <time dateTime={publishedIso}>Publié le {formatFrenchDate(publishedIso)}</time>
        ) : null}
        <time dateTime={updatedIso}>Mis à jour le {formatFrenchDate(updatedIso)}</time>
      </p>
      {points.length > 0 ? (
        <div className="mt-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#013F63]/70 mb-2">Points clés</p>
          <ul className="list-disc pl-5 space-y-1 text-[#013F63]">
            {points.map((point) => {
              if (typeof point === 'string') return <li key={point}>{point}</li>
              return (
                <li key={point.href}>
                  <Link href={point.href} className="font-semibold underline underline-offset-2 hover:text-orange-500">
                    {point.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </section>
  )
}
