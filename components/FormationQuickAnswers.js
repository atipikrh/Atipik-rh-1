import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getCertifianteGeoByBrief } from '../lib/seo/certifiantesConfig'
import {
  getProfessionnelleConfigBySlug,
  PROFESSIONNALISANTE_PRICE_SUFFIX,
} from '../lib/seo/professionnalisantesConfig'
import { TELEPHONE_DISPLAY, TELEPHONE_E164 } from '../lib/seo/site'
import { formatTarifPublicDisplay } from '../lib/tarifs/tarifsCopy'

/**
 * @param {string} timeRequired
 */
function libelleDuree(timeRequired) {
  const m = /^PT(\d+)H$/i.exec(timeRequired || '')
  if (!m) return 'Durée indiquée sur la fiche'
  const h = parseInt(m[1], 10)
  if (h === 11) return '11 h (mixed learning)'
  if (h === 14) return '14 h (présentiel)'
  if (h === 21) return '21 h (mixed learning)'
  return `${h} h`
}

/**
 * 12 réponses immédiates sous le H1 (certifiantes) ou variante courte.
 * @param {{ briefId?: string, variant?: 'certifiante' | 'courte' | 'hub', slug?: string }} props
 */
export default function FormationQuickAnswers({
  briefId,
  variant = 'certifiante',
  slug,
}) {
  const items = buildItems({ briefId, variant, slug })
  if (!items.length) return null

  const geo = briefId ? getCertifianteGeoByBrief(briefId) : null

  return (
    <aside
      className="max-w-5xl mx-auto mt-4 mb-3 rounded-2xl border-2 border-[#013F63]/15 bg-white/95 p-4 md:p-5 shadow-md"
      aria-label="Réponses immédiates sur la formation"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-[#013F63]/70 mb-3">
        12 réponses immédiates
      </p>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[#013F63]">
        {items.map(({ question, answer, href, external }) => (
          <div key={question} className="text-xs md:text-sm leading-snug">
            <dt className="font-bold inline">{question} </dt>
            <dd className="inline font-light">
              {href ? (
                external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-orange-500 hover:underline"
                  >
                    {answer}
                  </a>
                ) : (
                  <Link href={href} className="font-medium text-orange-500 hover:underline">
                    {answer}
                  </Link>
                )
              ) : (
                answer
              )}
            </dd>
          </div>
        ))}
      </dl>
      {geo?.rafaelCap?.ficheUrl ? (
        <a
          href={geo.rafaelCap.ficheUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#013F63]/80 hover:text-orange-500"
        >
          {geo.rafaelCap.label}
          <ArrowRight className="w-3 h-3" aria-hidden />
        </a>
      ) : null}
    </aside>
  )
}

/**
 * @param {{ briefId?: string, variant?: string, slug?: string }} args
 */
function buildItems({ briefId, variant, slug }) {
  if (variant === 'hub') {
    return [
      { question: 'Quelle formation ?', answer: '7 formations courtes professionnalisantes (11 h à 21 h).' },
      { question: 'Pour quel public ?', answer: "Acteurs de l'accompagnement, de l'insertion et du recrutement." },
      { question: 'Quels prérequis ?', answer: 'Aucun diplôme requis — formation continue professionnelle.' },
      { question: 'Quelle durée ?', answer: '11 h, 14 h ou 21 h selon la fiche.' },
      { question: 'Où ?', answer: 'Atipik RH — 8 rue du Courant, 33310 Lormont.' },
      { question: 'Quel programme ?', answer: 'Voir le catalogue ci-dessous.', href: '#catalogue' },
      { question: 'Quelle certification ?', answer: 'Attestation de formation (hors titre RNCP).' },
      { question: 'Quels débouchés ?', answer: 'Montée en compétences dans votre métier actuel.' },
      { question: 'Quel tarif public ?', answer: 'Indiqué sur chaque fiche (inter-entreprises).' },
      { question: 'Quelles dates ?', answer: 'Sessions inter et intra sur demande.' },
      { question: 'Comment candidater ?', answer: 'Contactez-nous — pas de dossier CIP/FPA.' },
      {
        question: 'Comment nous joindre ?',
        answer: `${TELEPHONE_DISPLAY} ou formulaire contact.`,
        href: `tel:${TELEPHONE_E164}`,
        external: true,
      },
    ]
  }

  if (variant === 'courte') {
    const c = getProfessionnelleConfigBySlug(slug)
    if (!c) return []
    const display = formatTarifPublicDisplay(c.price, { suffix: PROFESSIONNALISANTE_PRICE_SUFFIX })
    return [
      { question: 'Quelle formation ?', answer: c.titreAffichage },
      { question: 'Pour quel public ?', answer: "Professionnels de l'accompagnement, de l'insertion et du recrutement." },
      { question: 'Quels prérequis ?', answer: 'Aucun diplôme requis — formation continue professionnelle.' },
      { question: 'Quelle durée ?', answer: libelleDuree(c.timeRequired) },
      { question: 'Où ?', answer: 'Atipik RH — 8 rue du Courant, 33310 Lormont.' },
      { question: 'Quel programme ?', answer: 'Voir le programme détaillé.', href: '#programme' },
      { question: 'Quelle certification ?', answer: 'Attestation de formation (hors titre RNCP).' },
      { question: 'Quels débouchés ?', answer: 'Montée en compétences dans votre pratique professionnelle.' },
      {
        question: 'Quel tarif public ?',
        answer: `${display.amount} € TTC ${display.suffix}`.trim(),
        href: '#tarifs',
      },
      { question: 'Quelles dates ?', answer: 'Sessions inter-entreprises et intra sur demande.' },
      { question: 'Comment candidater ?', answer: 'Contactez-nous — pas de dossier titre CIP/FPA.' },
      {
        question: 'Comment nous joindre ?',
        answer: `${TELEPHONE_DISPLAY} ou formulaire contact.`,
        href: `tel:${TELEPHONE_E164}`,
        external: true,
      },
    ]
  }

  const geo = getCertifianteGeoByBrief(briefId)
  if (!geo?.landing) return []
  const { landing } = geo

  return [
    { question: 'Quelle formation ?', answer: geo.quoi },
    { question: 'Pour quel public ?', answer: landing.public },
    { question: 'Quels prérequis ?', answer: landing.prerequis.join(' · ') },
    { question: 'Quelle durée ?', answer: geo.duree },
    { question: 'Où ?', answer: geo.ou },
    { question: 'Quel programme ?', answer: 'Voir le programme détaillé.', href: '#programme' },
    { question: 'Quelle certification ?', answer: landing.certification },
    { question: 'Quels débouchés ?', answer: landing.debouches },
    { question: 'Quel tarif public ?', answer: landing.tarifPublic, href: '#tarifs' },
    { question: 'Quelles dates ?', answer: landing.sessions, href: '#dates' },
    {
      question: 'Comment candidater ?',
      answer: 'Dossier PDF + réunion d’information.',
      href: landing.pdfCandidature,
      external: true,
    },
    {
      question: 'Comment nous joindre ?',
      answer: `${TELEPHONE_DISPLAY} ou formulaire contact.`,
      href: `tel:${TELEPHONE_E164}`,
      external: true,
    },
  ]
}
