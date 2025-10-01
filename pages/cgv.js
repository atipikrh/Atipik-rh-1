import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ShoppingCart, FileText, User, Lock, Building2 } from 'lucide-react'

export default function CGV() {
  return (
    <>
      <Head>
        <title>Conditions Générales de Vente | Atipik RH</title>
        <meta name="description" content="Conditions générales de vente des formations professionnelles proposées par Atipik RH - Modalités d'inscription, tarifs et conditions d'annulation." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://atipikrh.fr/cgv" />
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
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                Conditions Générales de Vente
              </h1>
              <p className="text-lg text-gray-600">
                Modalités d'inscription et conditions applicables à nos formations
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
                      Conditions applicables
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Les présentes conditions générales de vente s'appliquent aux prestations de formation professionnelle proposées par la société 
                      <strong> ATIPIK RH</strong>, enregistrée sous le SIRET n° <strong>84890745700024</strong>, dont le siège social est situé au 
                      <strong> 8 Rue du Courant, 33310 Lormont</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contenu détaillé */}
              <div className="prose prose-lg max-w-none space-y-12">
                
                {/* 1. Objet */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">1. Objet</h2>
                  <p className="text-gray-700 mb-4">
                    <strong>ATIPIK RH</strong> conçoit, propose et dispense des formations professionnelles certifiantes ou professionnalisantes, 
                    notamment dans les domaines de l'accompagnement, de la pédagogie pour adultes et du développement de carrière 
                    (ex. : FPA, CIP, bilans de compétences, VAE).
                  </p>
                  <p className="text-gray-700">
                    Les présentes CGV ont pour objet de définir les conditions applicables à la vente de ces prestations, hors ligne, 
                    à travers des conventions ou devis signés entre les parties.
                  </p>
                </div>

                {/* 2. Modalités d'inscription */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">2. Modalités d'inscription</h2>
                  <p className="text-gray-700 mb-4">
                    L'inscription à une formation ou à un accompagnement proposé par <strong>ATIPIK RH</strong> nécessite :
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li>L'acceptation d'un devis ou d'une convention de formation,</li>
                    <li>L'envoi du formulaire d'inscription complété, ou d'un accord écrit,</li>
                    <li>Et, si applicable, la transmission d'un accord de financement (CPF, France Travail, OPCO…).</li>
                  </ul>
                  <p className="text-gray-700">
                    Les inscriptions sont validées dans la limite des places disponibles.
                  </p>
                </div>

                {/* 3. Tarifs */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">3. Tarifs</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Les tarifs sont exprimés en euros, net de TVA (<strong>ATIPIK RH</strong> n'est pas assujettie à la TVA sur les actions de formation professionnelle).</li>
                    <li>Le prix inclut l'ensemble des prestations pédagogiques prévues (formation, suivi, documents éventuels).</li>
                    <li>Le coût de chaque formation est précisé sur le devis transmis au bénéficiaire ou à l'organisme financeur.</li>
                  </ul>
                </div>

                {/* 4. Modalités de paiement */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">4. Modalités de paiement</h2>
                  <p className="text-gray-700 mb-4">Sauf accord particulier, le paiement s'effectue :</p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li>Par virement bancaire,</li>
                    <li>Selon les modalités précisées dans le devis ou la convention (échelonnement possible).</li>
                  </ul>
                  <p className="text-gray-700">
                    Pour les personnes finançant elles-mêmes leur formation, un acompte peut être demandé à la signature, 
                    et le solde sera exigé selon un échéancier défini ensemble.
                  </p>
                </div>

                {/* 5. Conditions d'annulation */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">5. Conditions d'annulation</h2>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-[#013F63] mb-4">Par le client :</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li><strong>Annulation plus de 7 jours ouvrés</strong> avant le début de la formation : aucun frais.</li>
                      <li><strong>Annulation moins de 7 jours ouvrés</strong> avant ou absence non justifiée : 30 % du montant total restera dû, 
                      sauf cas de force majeure (maladie, empêchement professionnel avéré, etc.).</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#013F63] mb-4">Par ATIPIK RH :</h3>
                    <p className="text-gray-700">
                      En cas d'effectif insuffisant ou de force majeure, <strong>ATIPIK RH</strong> se réserve le droit de reporter ou d'annuler une session, 
                      avec remboursement intégral des sommes perçues ou report à une date ultérieure, selon le souhait du bénéficiaire.
                    </p>
                  </div>
                </div>

                {/* 6. Délai de rétractation */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">6. Délai de rétractation</h2>
                  <p className="text-gray-700 mb-4">
                    Pour les personnes physiques finançant leur formation à titre individuel, un délai de rétractation de <strong>14 jours calendaires</strong> 
                    s'applique à compter de la signature de la convention, conformément aux articles L221-18 et suivants du Code de la consommation.
                  </p>
                  <p className="text-gray-700">
                    Ce droit peut être levé en cas d'accord express du client pour commencer la formation avant la fin du délai légal.
                  </p>
                </div>

                {/* 7. Responsabilités */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">7. Responsabilités</h2>
                  <p className="text-gray-700 mb-4">
                    <strong>ATIPIK RH</strong> s'engage à mettre en œuvre tous les moyens pédagogiques et humains pour garantir la qualité des prestations. 
                    La réussite de l'action dépend néanmoins de l'engagement du bénéficiaire.
                  </p>
                  <p className="text-gray-700">
                    <strong>ATIPIK RH</strong> ne saurait être tenue pour responsable d'un échec à l'examen ou d'un résultat non atteint.
                  </p>
                </div>

                {/* 8. Données personnelles */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">8. Données personnelles</h2>
                  <p className="text-gray-700 mb-4">
                    Les données personnelles recueillies dans le cadre de la relation commerciale sont utilisées uniquement pour assurer 
                    la gestion administrative, pédagogique et financière des formations.
                  </p>
                  <p className="text-gray-700">
                    Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition sur vos données. 
                    Plus d'informations sur notre <Link href="/rgpd" className="text-blue-600 hover:text-blue-800 underline">Politique de confidentialité</Link>.
                  </p>
                </div>

                {/* 9. Propriété intellectuelle */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">9. Propriété intellectuelle</h2>
                  <p className="text-gray-700">
                    Les supports remis pendant les formations sont la propriété exclusive d'<strong>ATIPIK RH</strong> et ne peuvent être reproduits, 
                    partagés ou diffusés sans autorisation écrite préalable.
                  </p>
                </div>

                {/* 10. Litiges */}
                <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">10. Litiges</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Tout litige relatif à l'exécution d'une convention sera, dans un premier temps, réglé à l'amiable.</li>
                    <li>À défaut, les tribunaux compétents de <strong>Bordeaux</strong> seront seuls compétents.</li>
                  </ul>
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