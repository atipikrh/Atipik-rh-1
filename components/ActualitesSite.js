import Link from 'next/link'
import Head from 'next/head'
import { getActualitesSite } from '../lib/seo/actualitesSite'
import { BASE_URL } from '../lib/seo/site'

function actualitesJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Actualités Atipik RH',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.title,
      url: `${BASE_URL}${item.href}`,
    })),
  }
}

export default function ActualitesSite() {
  const items = getActualitesSite()
  if (!items.length) return null

  return (
    <section className="py-16 bg-white/70" aria-labelledby="actualites-atipik">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(actualitesJsonLd(items)) }}
        />
      </Head>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="actualites-atipik" className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4">
              Actualités
            </h2>
            <p className="text-lg text-[#013F63] max-w-2xl mx-auto">
              Sessions, réunions et articles publiés sur le site, à Lormont (Aquitaine).
            </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="block h-full rounded-xl border border-muted-blue-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <time dateTime={item.iso} className="text-sm font-semibold text-accent-500">
                    {item.dateLabel}
                  </time>
                  <h3 className="mt-2 text-xl font-bold text-[#013F63]">{item.title}</h3>
                  <p className="mt-3 text-[#013F63] leading-relaxed">{item.text}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-center mt-8">
            <Link href="/blog" className="font-semibold text-[#013F63] underline-offset-2 hover:underline">
              Toutes les actualités
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
