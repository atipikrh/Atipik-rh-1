import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Instagram } from 'lucide-react'
import { INSTAGRAM_PROFILE_URL } from '../../lib/blog/instagramArticles'

export default function InstagramArticles({ articles }) {
  if (!articles?.length) return null

  return (
    <section className="pb-4 bg-white" aria-labelledby="articles-instagram">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h2 id="articles-instagram" className="text-3xl font-bold text-[#013F63]">
                Publications Instagram
              </h2>
              <p className="mt-2 text-[#013F63]">
                Les actualités du compte{' '}
                <a
                  href={INSTAGRAM_PROFILE_URL}
                  className="font-semibold underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @atipikrh33
                </a>
                , reprises en articles.
              </p>
            </div>
            <a
              href={INSTAGRAM_PROFILE_URL}
              className="inline-flex items-center gap-2 text-[#013F63] font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
              Voir le profil
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.slug} className="group h-full">
                <Link href={`/blog/${article.slug}`} className="block h-full">
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-orange-100">
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <Image
                        src={article.image}
                        alt={article.imageAlt || article.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#013F63] text-white px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1">
                          <Instagram className="w-3 h-3" aria-hidden="true" />
                          Instagram
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-sm text-gray-500 mb-3">{article.date}</p>
                      <h3 className="text-xl font-bold text-[#013F63] mb-3 leading-tight line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed flex-grow line-clamp-3">{article.excerpt}</p>
                      <span className="inline-flex items-center gap-1 text-orange-500 font-medium text-sm mt-4">
                        Lire l’article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
