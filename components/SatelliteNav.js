import Link from 'next/link'

/**
 * Liens vers les pages satellites, depuis le pilier.
 * @param {{ links: { href: string, label: string }[] }} props
 */
export default function SatelliteNav({ links }) {
  if (!links?.length) return null

  return (
    <nav aria-label="Pages liées" className="max-w-5xl mx-auto mt-4 mb-2">
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="font-semibold text-[#013F63] underline hover:text-[#FE6400]">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
