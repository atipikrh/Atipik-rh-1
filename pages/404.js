import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page non trouvée | Atipik RH</title>
        <meta
          name="description"
          content="La page demandée n'existe pas ou a été déplacée. Retournez à l'accueil Atipik RH."
        />
        <meta key="robots" name="robots" content="noindex, follow" />
      </Head>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <Header isFixed={true} />
        <div className="h-20" />

        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="text-center max-w-lg">
            <p className="text-6xl font-bold text-[#013F63] mb-4">404</p>
            <h1 className="text-2xl font-bold text-[#013F63] mb-4">Page non trouvée</h1>
            <p className="text-[#013F63]/80 mb-8">
              La page que vous recherchez n&apos;existe pas ou a été déplacée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-[#013F63] text-white font-semibold rounded-lg hover:bg-[#012a4a] transition-colors"
              >
                Retour à l&apos;accueil
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border-2 border-[#013F63] text-[#013F63] font-semibold rounded-lg hover:bg-[#013F63] hover:text-white transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
