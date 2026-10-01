import { useEffect } from 'react'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

/**
 * CTA fixe mobile — réunion d’information.
 * @param {{ href?: string, label?: string }} props
 */
export default function FormationStickyCta({
  href = '/s-inscrire',
  label = "Participer à une réunion d'information",
}) {
  useEffect(() => {
    document.body.classList.add('has-sticky-cta')
    return () => document.body.classList.remove('has-sticky-cta')
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9990] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white/95 border-t border-gray-200 shadow-lg md:hidden">
      <Link
        href={href}
        className="flex items-center justify-center gap-2 w-full py-3 px-3 rounded-full bg-[#013F63] text-white font-semibold text-sm leading-tight text-center hover:bg-[#012a4a] transition-colors"
      >
        <Calendar className="w-4 h-4" />
        {label}
      </Link>
    </div>
  )
}
