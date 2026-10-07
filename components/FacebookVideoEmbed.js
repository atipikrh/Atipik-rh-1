import { useEffect, useState } from 'react'
import Link from 'next/link'
import { facebookVideoEmbedUrl } from '../lib/seo/visiteCentreVideo'

function hasMarketingConsent() {
  try {
    const raw = localStorage.getItem('cookieConsent')
    if (!raw) return false
    return JSON.parse(raw).marketing === true
  } catch {
    return false
  }
}

function PeopleLinks({ people }) {
  return people.map((person, index) => {
    const separator =
      index === 0 ? '' : index === people.length - 1 ? ' et ' : ', '
    return (
      <span key={person.href}>
        {separator}
        <Link href={person.href} className="text-[#013F63] underline underline-offset-2">
          {person.name}
        </Link>
      </span>
    )
  })
}

/**
 * Lecteur Facebook après consentement marketing.
 * Le titre, le texte et le lien restent dans le HTML sans cookies.
 */
export default function FacebookVideoEmbed({ video }) {
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    const sync = () => setAllowed(hasMarketingConsent())
    sync()
    window.addEventListener('cookieConsentChanged', sync)
    return () => window.removeEventListener('cookieConsentChanged', sync)
  }, [])

  return (
    <section className="mb-10 rounded-2xl border border-muted-blue-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-[#013F63] mb-3">{video.title}</h2>
      <p className="text-[#013F63] leading-relaxed mb-3">
        {video.credit} a filmé une visite du centre Atipik RH, au 8 rue du Courant, 33310 Lormont.
        La vidéo montre le lieu avec <PeopleLinks people={video.people} />.
      </p>
      {allowed ? (
        <iframe
          src={facebookVideoEmbedUrl(video.watchUrl)}
          title={video.title}
          className="w-full aspect-video rounded-xl border-0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <p className="text-sm text-gray-600">
          Le lecteur s’affiche après acceptation des cookies marketing.{' '}
          <a
            href={video.watchUrl}
            className="text-[#013F63] font-semibold underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir la vidéo sur Facebook
          </a>
        </p>
      )}
    </section>
  )
}
