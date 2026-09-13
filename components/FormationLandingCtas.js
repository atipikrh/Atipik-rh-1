import Link from 'next/link'
import { Calendar, FileText, UserPlus, Phone, CheckCircle } from 'lucide-react'
import {
  getCertifianteGeoByBrief,
  getCertifianteRappelHref,
  getCertifianteReunionHref,
} from '../lib/seo/certifiantesConfig'
import {
  getCourteRappelHref,
  getCourteHubContactHref,
  getFormationContactHref,
} from '../lib/seo/professionnalisantesConfig'

const BTN_BASE =
  'inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-center transition-colors leading-tight min-h-[44px]'

/**
 * CTA visibles dès le hero.
 * Certifiantes : 5 boutons. Courtes / hub : 3 boutons (pas de dossier CIP/FPA).
 * @param {{ briefId?: string, variant?: 'certifiante' | 'courte' | 'hub', slug?: string }} props
 */
export default function FormationLandingCtas({
  briefId,
  variant = 'certifiante',
  slug,
}) {
  const actions = buildActions({ briefId, variant, slug })
  if (!actions.length) return null

  const reunionFirst = actions[0]?.id === 'reunion'

  return (
    <nav
      className="max-w-5xl mx-auto mb-4"
      aria-label="Actions pour cette formation"
    >
      <ul
        className={
          variant === 'certifiante'
            ? 'grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-2'
            : 'grid grid-cols-1 sm:grid-cols-3 gap-2'
        }
      >
        {actions.map((action, index) => (
          <li
            key={action.id}
            className={
              reunionFirst && index === 0
                ? 'col-span-2 md:col-span-1 lg:flex-1 lg:min-w-[200px]'
                : 'lg:flex-1 lg:min-w-[160px]'
            }
          >
            <CtaButton action={action} primary={index === 0} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

/**
 * @param {{ action: { href: string, label: string, icon: import('lucide-react').LucideIcon, external?: boolean }, primary: boolean }} props
 */
function CtaButton({ action, primary }) {
  const Icon = action.icon
  const className = primary
    ? `${BTN_BASE} w-full bg-orange-500 hover:bg-orange-600 text-white shadow-md`
    : `${BTN_BASE} w-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white bg-white`

  const content = (
    <>
      <Icon className="w-4 h-4 shrink-0" aria-hidden />
      {action.label}
    </>
  )

  if (action.external) {
    return (
      <a href={action.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link href={action.href} className={className}>
      {content}
    </Link>
  )
}

/**
 * @param {{ briefId?: string, variant?: string, slug?: string }} args
 */
function buildActions({ briefId, variant, slug }) {
  if (variant === 'hub') {
    return [
      { id: 'programme', label: 'Voir le catalogue', href: '#catalogue', icon: FileText },
      { id: 'rappel', label: 'Être rappelé', href: getCourteRappelHref(), icon: Phone },
      { id: 'contact', label: 'Nous contacter', href: getCourteHubContactHref(), icon: UserPlus },
    ]
  }

  if (variant === 'courte') {
    return [
      { id: 'programme', label: 'Demander le programme', href: '#programme', icon: FileText },
      { id: 'rappel', label: 'Être rappelé', href: getCourteRappelHref(slug), icon: Phone },
      {
        id: 'contact',
        label: 'Nous contacter',
        href: getFormationContactHref(slug),
        icon: UserPlus,
      },
    ]
  }

  const geo = getCertifianteGeoByBrief(briefId)
  if (!geo?.landing) return []

  return [
    {
      id: 'reunion',
      label: "Participer à une réunion d'information",
      href: getCertifianteReunionHref(briefId),
      icon: Calendar,
    },
    {
      id: 'programme',
      label: 'Demander le programme',
      href: geo.landing.pdfProgramme,
      icon: FileText,
      external: true,
    },
    {
      id: 'candidater',
      label: 'Candidater',
      href: geo.landing.pdfCandidature,
      icon: UserPlus,
      external: true,
    },
    {
      id: 'rappel',
      label: 'Être rappelé',
      href: getCertifianteRappelHref(briefId),
      icon: Phone,
    },
    {
      id: 'adequation',
      label: "Vérifier l'adéquation de mon projet",
      href: '#adequation',
      icon: CheckCircle,
    },
  ]
}
