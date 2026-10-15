import { Phone } from 'lucide-react'
import { TELEPHONE_DISPLAY, TELEPHONE_E164 } from '../lib/seo/site'

/**
 * Appel direct, utilisable au doigt. Remonté au-dessus du CTA formation fixe.
 */
export default function FloatingPhoneButton() {
  return (
    <a
      href={`tel:${TELEPHONE_E164}`}
      data-phone-button
      aria-label={`Appeler Atipik RH au ${TELEPHONE_DISPLAY}`}
      className="floating-phone fixed z-[9995] right-4 inline-flex items-center justify-center gap-2 h-14 min-w-14 px-4 rounded-full bg-accent-700 text-white shadow-lg border-2 border-accent-700 hover:bg-accent-800 transition-colors"
    >
      <Phone className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
      <span className="text-sm font-semibold whitespace-nowrap">Appeler</span>
    </a>
  )
}
