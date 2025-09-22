import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-white pt-8 pb-4 relative z-50" style={{backgroundColor: '#013F63'}}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          
          {/* Logo et description */}
          <div className="md:col-span-2">
            <Image 
              src="/images/logos/atipik-logo.png" 
              alt="Atipik RH" 
              width={150} 
              height={50}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre centre de formation à Lormont. 
              Bilan de compétences, VAE et formations certifiantes.
            </p>
            <div className="flex items-center gap-6">
              {/* Réseaux sociaux */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/atipik-rh33/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/atipikrh33/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/atipikrh33?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.034 0C8.789 0 8.367.014 7.115.073c-1.245.057-2.094.252-2.836.541C3.522.896 2.932 1.24 2.378 1.794c-.555.555-.899 1.144-1.18 1.901-.289.742-.484 1.591-.541 2.836C.598 8.367.584 8.789.584 12.034s.014 3.667.073 4.919c.057 1.245.252 2.094.541 2.836.281.757.625 1.346 1.18 1.901.555.555 1.144.899 1.901 1.18.742.289 1.591.484 2.836.541 1.252.059 1.674.073 4.919.073s3.667-.014 4.919-.073c1.245-.057 2.094-.252 2.836-.541a5.295 5.295 0 001.901-1.18c.555-.555.899-1.144 1.18-1.901.289-.742.484-1.591.541-2.836.059-1.252.073-1.674.073-4.919s-.014-3.667-.073-4.919c-.057-1.245-.252-2.094-.541-2.836a5.295 5.295 0 00-1.18-1.901c-.555-.555-1.144-.899-1.901-1.18-.742-.289-1.591-.484-2.836-.541C15.701.014 15.279 0 12.034 0zM12.034 2.162c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.413.56.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.56-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.413a3.81 3.81 0 01-1.382-.896 3.81 3.81 0 01-.896-1.381c-.164-.422-.36-1.057-.413-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.413-2.227.217-.56.477-.96.896-1.382a3.81 3.81 0 011.381-.896c.422-.164 1.057-.36 2.227-.413 1.266-.058 1.646-.07 4.85-.07zm0 3.678a6.194 6.194 0 100 12.388 6.194 6.194 0 000-12.388zm0 10.226a4.032 4.032 0 110-8.064 4.032 4.032 0 010 8.064zm7.896-10.47a1.446 1.446 0 11-2.893 0 1.446 1.446 0 012.893 0z"/>
                  </svg>
                </a>
              </div>
              
              {/* Ligne de séparation */}
              <div className="w-px h-8 bg-gray-500"></div>
              
              {/* Logos certifications */}
              <div className="flex space-x-4 items-center">
                <Image 
                  src="/images/certifications/qualiopi.png" 
                  alt="Certification Qualiopi - Atipik RH" 
                  width={80} 
                  height={80}
                  className="object-contain"
                />
                <Image 
                  src="/images/certifications/formation-handicap.png" 
                  alt="Formation Handicap - Atipik RH" 
                  width={50} 
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/vae" className="hover:text-white transition-colors cursor-pointer">
                  VAE
                </a>
              </li>
              <li>
                <a href="/bilan-de-competences" className="hover:text-white transition-colors cursor-pointer">
                  Bilan de compétences
                </a>
              </li>
              <li>
                <a href="/formations" className="hover:text-white transition-colors cursor-pointer">
                  Formations
                </a>
              </li>
              <li>
                <a href="/financement" className="hover:text-white transition-colors cursor-pointer">
                  Financement
                </a>
              </li>
              <li>
                <a href="/location-salles-lormont" className="hover:text-white transition-colors cursor-pointer">
                  Location de salle
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors cursor-pointer">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+33783019955" className="hover:text-white transition-colors">
                  07 83 01 99 55
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:contact@atipikrh.fr" className="hover:text-white transition-colors">
                  contact@atipikrh.fr
                </a>
              </p>
              <p>8 Rue du Courant, 33310 Lormont</p>
              <div className="mt-3 pt-2 border-t border-gray-700">
                <p className="text-sm font-medium">Horaires :</p>
                <p className="text-sm">Lun-Ven : 9h-18h</p>
                <p className="text-sm">Sam : sur rendez-vous</p>
              </div>
            </div>
          </div>
          
        </div>
        

        
        {/* Copyright condensé */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-center">
          <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-gray-400">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <span>•</span>
            <Link href="/cgv" className="hover:text-white transition-colors">
              CGV
            </Link>
            <span>•</span>
            <Link href="/rgpd" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <span>•</span>
            <span>&copy; 2025 Atipik RH. Tous droits réservés.</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 