import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import { Shield, Eye, Lock, Database, Settings } from 'lucide-react'

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Head>
        <title>Politique de Confidentialité | Atipik RH</title>
        <meta name="description" content="Politique de confidentialité d'Atipik RH - Comment nous collectons, utilisons et protégeons vos données personnelles." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://atipikrh.fr/politique-confidentialite" />
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
                Protection et utilisation de vos données personnelles
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
                  <Eye className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-[#013F63] mb-4">
                      Notre engagement
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Chez Atipik RH, nous nous engageons à protéger votre vie privée et à traiter vos données personnelles 
                      avec le plus grand respect. Cette politique explique comment nous collectons, utilisons et protégeons 
                      vos informations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contenu détaillé */}
              <div className="prose prose-lg max-w-none space-y-12">
                
                {/* 1. Collecte des données */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">1. Données que nous collectons</h2>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-[#013F63] mb-4 flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      Informations personnelles
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Nom et prénom :</strong> Pour l'identification et la communication</li>
                      <li><strong>Adresse e-mail :</strong> Pour les communications et notifications</li>
                      <li><strong>Numéro de téléphone :</strong> Pour le contact direct si nécessaire</li>
                      <li><strong>Adresse postale :</strong> Pour l'envoi de documents si requis</li>
                      <li><strong>Informations professionnelles :</strong> Pour l'adaptation de nos services</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#013F63] mb-4 flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      Données techniques
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Adresse IP :</strong> Pour la sécurité et l'analyse du trafic</li>
                      <li><strong>Cookies :</strong> Pour améliorer votre expérience utilisateur</li>
                      <li><strong>Données de navigation :</strong> Pages visitées, durée de visite</li>
                      <li><strong>Informations sur le navigateur :</strong> Type et version pour l'optimisation</li>
                    </ul>
                  </div>
                </div>

                {/* 2. Utilisation des données */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">2. Comment nous utilisons vos données</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Nous utilisons vos données personnelles uniquement dans les cas suivants :
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fournir et améliorer nos services de formation et d'accompagnement</li>
                      <li>Communiquer avec vous concernant nos services</li>
                      <li>Traiter vos demandes et inscriptions</li>
                      <li>Respecter nos obligations légales et réglementaires</li>
                      <li>Améliorer notre site web et nos services</li>
                      <li>Analyser l'utilisation de notre site (avec votre consentement)</li>
                    </ul>
                  </div>
                </div>

                {/* 3. Cookies */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">3. Gestion des cookies</h2>
                  <div className="bg-orange-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-[#013F63] mb-4">Types de cookies utilisés</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[#013F63]">Cookies nécessaires</h4>
                        <p className="text-sm text-gray-600">Essentiels au fonctionnement du site, ne peuvent pas être désactivés.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#013F63]">Cookies analytiques</h4>
                        <p className="text-sm text-gray-600">Nous aident à comprendre comment vous utilisez notre site pour l'améliorer.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#013F63]">Cookies marketing</h4>
                        <p className="text-sm text-gray-600">Utilisés pour personnaliser le contenu et les publicités.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau qui apparaît 
                    lors de votre première visite ou en cliquant sur le lien en bas de page.
                  </p>
                </div>

                {/* 4. Partage des données */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">4. Partage de vos données</h2>
                  <p className="text-gray-700 mb-4">
                    Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, 
                    sauf dans les cas suivants :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Avec votre consentement explicite</li>
                    <li>Pour respecter une obligation légale</li>
                    <li>Avec nos prestataires de services (sous contrat de confidentialité)</li>
                    <li>En cas de fusion, acquisition ou vente d'actifs</li>
                  </ul>
                </div>

                {/* 5. Sécurité */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">5. Sécurité de vos données</h2>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#013F63] mb-4 flex items-center gap-2">
                      <Lock className="w-5 h-5" />
                      Mesures de protection
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Chiffrement des données sensibles</li>
                      <li>Accès restreint aux données personnelles</li>
                      <li>Formation du personnel à la protection des données</li>
                      <li>Surveillance continue de la sécurité</li>
                      <li>Sauvegardes régulières et sécurisées</li>
                    </ul>
                  </div>
                </div>

                {/* 6. Vos droits */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">6. Vos droits</h2>
                  <p className="text-gray-700 mb-4">
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données</li>
                    <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                    <li><strong>Droit d'effacement :</strong> Demander la suppression de vos données</li>
                    <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                    <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                    <li><strong>Droit de limitation :</strong> Limiter le traitement de vos données</li>
                  </ul>
                </div>

                {/* 7. Contact */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">7. Contact et réclamations</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits :
                    </p>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>E-mail :</strong> vanessa@atipikrh.com</p>
                      <p><strong>Adresse :</strong> 8 Rue du Courant, 33310 Lormont</p>
                      <p><strong>Téléphone :</strong> 05 XX XX XX XX</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Vous avez également le droit d'introduire une réclamation auprès de la CNIL 
                      (Commission Nationale de l'Informatique et des Libertés) si vous estimez que 
                      vos droits ne sont pas respectés.
                    </p>
                  </div>
                </div>

                {/* 8. Modifications */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">8. Modifications de cette politique</h2>
                  <p className="text-gray-700">
                    Cette politique de confidentialité peut être mise à jour périodiquement. 
                    Nous vous informerons de tout changement significatif par e-mail ou via notre site web. 
                    La date de dernière mise à jour est indiquée en bas de cette page.
                  </p>
                </div>

              </div>

              {/* Footer de la politique */}
              <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
                <p className="text-sm">
                  Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>

            </div>
          </div>
        </section>

        <Footer />
        
        {/* Cookie Banner */}
        <CookieBanner />
      </div>
    </>
  )
}
