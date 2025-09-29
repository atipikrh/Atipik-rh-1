import Head from 'next/head'
import Link from 'next/link'
import Header from './Header'
import CookieBanner from './CookieBanner'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Layout({ children, title, description, canonical }) {
  return (
    <>
      <Head>
        <title>{title || "Atipik RH - Formation, Bilan de compétences & VAE à Lormont"}</title>
        <meta name="description" content={description || "Centre de formation à Lormont (33) : bilan de compétences, VAE, formations certifiantes CPF. Accompagnement personnalisé pour votre évolution professionnelle."} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header isFixed={true} />
        
        {/* Spacer for fixed header */}
        <div className="h-20"></div>

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-primary-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-brand mb-4">Atipik RH</h3>
                <p className="text-gray-300 mb-4">
                  Votre partenaire formation et évolution professionnelle à Lormont.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Lormont, Gironde (33)</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  
                  <span className="text-sm">05 XX XX XX XX</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">contact@atipikrh.com</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/company/atipik-rh33/posts/?feedView=all" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.facebook.com/AtipikRH" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/atipikrh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C23.988 5.367 18.637.001 12.017.001zM15.156 7.987c.03 0 .058.013.09.013 1.732 0 3.128 1.396 3.128 3.129 0 1.732-1.396 3.128-3.128 3.128-1.732 0-3.128-1.396-3.128-3.128 0-.035.012-.065.013-.099H9.9v4.465c0 .479.413.894.882.894h5.684c.469 0 .882-.415.882-.894V7.987h-2.192zM12.017 9.255c1.519 0 2.746 1.227 2.746 2.746s-1.227 2.746-2.746 2.746-2.746-1.227-2.746-2.746 1.227-2.746 2.746-2.746zM15.156 5.467c.955 0 1.735.78 1.735 1.735s-.78 1.735-1.735 1.735-1.735-.78-1.735-1.735.78-1.735 1.735-1.735z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Nos services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/bilan-de-competences" className="hover:text-white transition-colors">Bilan de compétences</Link></li>
                  <li><Link href="/bilan-de-competences/cpf" className="hover:text-white transition-colors">Bilan CPF</Link></li>
                  <li><Link href="/vae" className="hover:text-white transition-colors">VAE</Link></li>
                  <li><Link href="/formations" className="hover:text-white transition-colors">Formations</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Formations</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/formations/certifiantes" className="hover:text-white transition-colors">Formations certifiantes</Link></li>
                  <li><Link href="/formations/courtes-professionnalisantes" className="hover:text-white transition-colors">Formations courtes professionnalisantes</Link></li>
                  <li><Link href="/formations/certifiantes/cpf" className="hover:text-white transition-colors">Financement CPF</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Informations</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link></li>
                  <li><Link href="/politique-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-500 mt-12 pt-8 text-center text-gray-300">
              <p>&copy; 2025 Atipik RH. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
        
        {/* Cookie Banner */}
        <CookieBanner />
      </div>
    </>
  )
} 