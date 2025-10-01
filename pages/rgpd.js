import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Shield, FileText, User, Lock, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function RGPD() {
  return (
    <>
      <Head>
        <title>Politique de Confidentialité - RGPD | Atipik RH</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles conformément au RGPD - Atipik RH, centre de formation à Lormont." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://atipikrh.fr/rgpd" />
      </Head>

      <div className="min-h-screen bg-white">
        
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-20"></div>

        {/* Hero Section */}
        <section className="relative py-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#013F63] rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                Politique de Confidentialité
              </h1>
              <p className="text-lg text-gray-600">
                Protection des données personnelles et respect du RGPD
              </p>
            </div>
          </div>
        </section>

        {/* Contenu principal */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <div className="bg-blue-50 rounded-3xl p-8 mb-12 border border-blue-100">
                <div className="flex items-start gap-4">
                  <FileText className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-[#013F63] mb-4">
                      Engagement RGPD
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Dans le cadre de ses activités, la société <strong>ATIPIK RH</strong>, dont le siège social est situé au 
                      <strong> 8 Rue du Courant, 33310 Lormont</strong>, est amenée à traiter des données personnelles vous concernant.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Nous nous engageons à ce que la collecte et le traitement de vos données soient conformes au 
                      <strong> Règlement Général sur la Protection des Données (RGPD – UE 2016/679)</strong> et à la loi française.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contenu détaillé */}
              <div className="prose prose-lg max-w-none space-y-12">
                
                {/* 1. Données collectées */}
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">1. Données collectées</h2>
                  <p className="text-gray-700 mb-4">
                    Sur notre site <strong>www.atipikrh.com</strong>, deux types de données peuvent être collectées :
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#013F63] mb-3">a) Les données transmises directement</h3>
                  <p className="text-gray-700 mb-3">Ce sont les données que vous nous communiquez via :</p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li>nos formulaires de contact,</li>
                    <li>nos formulaires de prise de rendez-vous ou d'inscription,</li>
                    <li>ou en nous contactant par e-mail.</li>
                  </ul>
                  <p className="text-gray-700 mb-6">
                    Les champs obligatoires sont : <strong>prénom et nom, entreprise ou organisation</strong> (le cas échéant) 
                    et <strong>adresse e-mail</strong>. D'autres données peuvent être demandées selon le contexte (numéro de téléphone, message, etc.).
                  </p>

                  <h3 className="text-xl font-semibold text-[#013F63] mb-3">b) Les données collectées automatiquement (cookies et web analytics)</h3>
                  <p className="text-gray-700 mb-3">
                    Lors de votre navigation, et après votre consentement, nous utilisons des cookies pour collecter des informations de type :
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li>Adresse IP (anonymisée)</li>
                    <li>Type de navigateur et version</li>
                    <li>Pages consultées et durée</li>
                    <li>Origine de la visite (référent)</li>
                  </ul>
                  <p className="text-gray-700">
                    Ces données sont recueillies via <strong>Google Analytics</strong> et ne permettent pas de vous identifier personnellement.
                  </p>
                </div>

                {/* 2. Finalités */}
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">2. Finalités du traitement</h2>
                  <p className="text-gray-700 mb-4">Vos données sont traitées uniquement pour les finalités suivantes :</p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Vous recontacter suite à une demande via formulaire ou email</li>
                    <li>Répondre à vos questions ou vous proposer une offre personnalisée</li>
                    <li>Mesurer l'audience du site et améliorer l'expérience utilisateur</li>
                    <li>Respecter nos obligations légales en matière de conservation</li>
                  </ul>
                </div>

                {/* 3. Base légale */}
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">3. Base légale</h2>
                  <p className="text-gray-700 mb-3">La collecte de vos données repose :</p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Sur votre <strong>consentement explicite</strong> (formulaire, cookies)</li>
                    <li>Ou sur l'<strong>intérêt légitime d'ATIPIK RH</strong> pour améliorer ses services et répondre à vos demandes</li>
                  </ul>
                </div>

                {/* 4. Durée de conservation */}
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">4. Durée de conservation</h2>
                  <p className="text-gray-700 mb-3">Les données personnelles collectées sont conservées :</p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li><strong>3 ans maximum</strong> à compter du dernier contact actif</li>
                    <li><strong>13 mois maximum</strong> pour les cookies et données de navigation (selon la réglementation CNIL)</li>
                  </ul>
                </div>

                {/* 5. Partage des données */}
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">5. Partage des données</h2>
                  <p className="text-gray-700 mb-3">
                    <strong>ATIPIK RH est seul destinataire de vos données.</strong>
                  </p>
                  <p className="text-gray-700">
                    Aucune donnée personnelle n'est vendue, cédée ou communiquée à des tiers sans votre accord, sauf obligation légale.
                  </p>
                </div>

                {/* 6. Cookies */}
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">6. Cookies utilisés</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 mb-4">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-[#013F63]">Cookie</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-[#013F63]">Finalité</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-[#013F63]">Durée</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">Google Analytics (_ga, _gid…)</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">Mesure d'audience anonyme</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">13 mois</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">CookieConsent</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">Mémorise votre choix en matière de cookies</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">6 mois à 1 an</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-700">
                    ➡️ Vous pouvez modifier ou retirer votre consentement à tout moment via le gestionnaire de cookies.
                  </p>
                </div>

                {/* 7. Vos droits */}
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">7. Vos droits</h2>
                  <p className="text-gray-700 mb-4">
                    Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li>Droit d'accès à vos données</li>
                    <li>Droit de rectification</li>
                    <li>Droit à l'effacement (droit à l'oubli)</li>
                    <li>Droit à la limitation du traitement</li>
                    <li>Droit d'opposition</li>
                    <li>Droit à la portabilité de vos données</li>
                    <li>Droit de retirer votre consentement à tout moment</li>
                  </ul>
                  
                  <div className="bg-blue-50 rounded-lg p-6 mb-4">
                    <h3 className="text-lg font-semibold text-[#013F63] mb-3">Pour exercer vos droits :</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">
                          <strong>Email :</strong> contact@atipikrh.com ou vanessa@atipikrh.com
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-blue-600" />
                                                 <span className="text-gray-700">
                           <strong>Adresse :</strong> ATIPIK RH – 8 Rue du Courant, 33310 Lormont
                         </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-4 italic">
                      Une réponse vous sera apportée sous 30 jours.
                    </p>
                  </div>
                </div>

                {/* 8. Responsable du traitement */}
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">8. Responsable du traitement</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#013F63] mb-4">ATIPIK RH</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>SIRET :</strong> 84890745700024</p>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-gray-600" />
                        <span>07 83 01 99 55</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-600" />
                        <span>contact@atipikrh.com</span>
                      </div>
                      <p className="pt-2"><strong>Responsable du traitement :</strong> Vanessa NOAH EWODO</p>
                    </div>
                  </div>
                </div>

                {/* 9. Réclamation CNIL */}
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">9. Réclamation auprès de la CNIL</h2>
                  <p className="text-gray-700">
                    Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la 
                    <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1 ml-1">
                      CNIL <ExternalLink className="w-4 h-4" />
                    </a>.
                  </p>
                </div>

              </div>


            </div>
          </div>
        </section>

        <Footer />

      </div>
    </>
  )
} 