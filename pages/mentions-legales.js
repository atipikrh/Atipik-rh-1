import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Scale, FileText, User, Lock, ExternalLink, Building2 } from 'lucide-react'

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions Légales | Atipik RH</title>
        <meta name="description" content="Mentions légales du site Atipik RH - Informations légales, conditions d'utilisation et propriété intellectuelle." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://atipikrh.fr/mentions-legales" />
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
                  <Scale className="w-6 h-6 text-white" />
                </div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                Mentions Légales
              </h1>
              <p className="text-lg text-gray-600">
                Informations légales et conditions d'utilisation du site
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
                      Informations légales
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, 
                      il est précisé aux utilisateurs du site <strong>www.atipikrh.com</strong> l'identité des différents intervenants 
                      dans le cadre de sa réalisation et de son suivi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contenu détaillé */}
              <div className="prose prose-lg max-w-none space-y-12">
                
                                 {/* 1. Présentation du site */}
                 <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">1. Présentation du site</h2>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-[#013F63] mb-4 flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      Identité de l'entreprise
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Propriétaire :</strong> ATIPIK RH – SARL ATIPIK RH au Capital de 2000 €</p>
                      <p><strong>RCS :</strong> Bordeaux N°84890745700024</p>
                      <p><strong>Adresse :</strong> 8 Rue du Courant, 33310 LORMONT</p>
                      <p><strong>Créateur :</strong> Léo SIMON</p>
                      <p><strong>Responsable publication :</strong> Vanessa NOAH EWODO – vanessa@atipikrh.com</p>
                      <p><strong>Webmaster :</strong> Vanessa NOAH EWODO – vanessa@atipikrh.com</p>
                      <p><strong>Hébergeur :</strong> 02 SWITCH – 224 BD GUSTAVE FLAUBERT 63000 CLERMONT-FERRAND</p>
                    </div>
                    
                  </div>
                </div>

                                 {/* 2. Conditions générales */}
                 <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">2. Conditions générales d'utilisation du site et des services proposés</h2>
                  <p className="text-gray-700 mb-4">
                    L'utilisation du site <strong>www.atipikrh.com</strong> implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. 
                    Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site 
                    <strong> www.atipikrh.com</strong> sont donc invités à les consulter de manière régulière.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois 
                    décidée par <strong>ATIPIK RH</strong>, qui s'efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l'intervention.
                  </p>
                  <p className="text-gray-700">
                    Le site <strong>www.atipikrh.com</strong> est mis à jour régulièrement par <strong>Vanessa NOAH EWODO</strong>. 
                    De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s'imposent néanmoins à l'utilisateur qui est invité 
                    à s'y référer le plus souvent possible afin d'en prendre connaissance.
                  </p>
                </div>

                                 {/* 3. Description des services */}
                 <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">3. Description des services fournis</h2>
                  <p className="text-gray-700 mb-4">
                    Le site <strong>www.atipikrh.com</strong> a pour objet de fournir une information concernant l'ensemble des activités de la société.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>ATIPIK RH</strong> s'efforce de fournir sur le site <strong>www.atipikrh.com</strong> des informations aussi précises que possible. 
                    Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait 
                    ou du fait des tiers partenaires qui lui fournissent ces informations.
                  </p>
                  <p className="text-gray-700">
                    Tous les informations indiquées sur le site <strong>www.atipikrh.com</strong> sont données à titre indicatif, et sont susceptibles d'évoluer. 
                    Par ailleurs, les renseignements figurant sur le site <strong>www.atipikrh.com</strong> ne sont pas exhaustifs. 
                    Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
                  </p>
                </div>

                                 {/* 4. Limitations techniques */}
                 <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">4. Limitations contractuelles sur les données techniques</h2>
                  <p className="text-gray-700 mb-4">
                    Le site utilise la technologie <strong>JavaScript</strong>.
                  </p>
                  <p className="text-gray-700">
                    Le site Internet ne pourra être tenu responsable de dommages matériels liés à l'utilisation du site. De plus, l'utilisateur du site s'engage 
                    à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
                  </p>
                </div>

                                 {/* 5. Propriété intellectuelle */}
                 <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">5. Propriété intellectuelle et contrefaçons</h2>
                  <p className="text-gray-700 mb-4">
                    <strong>ATIPIK RH</strong> est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments 
                    accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou 
                    le procédé utilisé, est interdite, sauf autorisation écrite préalable de : <strong>ATIPIK RH</strong>.
                  </p>
                  <p className="text-gray-700">
                    Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon 
                    et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                  </p>
                </div>

                                 {/* 6. Limitations de responsabilité */}
                 <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">6. Limitations de responsabilité</h2>
                  <p className="text-gray-700 mb-4">
                    <strong>ATIPIK RH</strong> ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, 
                    lors de l'accès au site <strong>www.atipikrh.com</strong>, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications 
                    indiquées au point 4, soit de l'apparition d'un bug ou d'une incompatibilité.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>ATIPIK RH</strong> ne pourra également être tenue responsable des dommages indirects (tels par exemple qu'une perte de marché ou 
                    perte d'une chance) consécutifs à l'utilisation du site <strong>www.atipikrh.com</strong>.
                  </p>
                  <p className="text-gray-700">
                    Des espaces interactifs (possibilité de poser des questions dans l'espace contact) sont à la disposition des utilisateurs. 
                    <strong> ATIPIK RH</strong> se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui 
                    contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. 
                    Le cas échéant, <strong>ATIPIK RH</strong> se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l'utilisateur, 
                    notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).
                  </p>
                </div>

                                 {/* 7. Gestion des données personnelles */}
                 <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">7. Gestion des données personnelles</h2>
                  <p className="text-gray-700 mb-4">
                    En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, 
                    l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
                  </p>
                  <p className="text-gray-700 mb-4">
                    A l'occasion de l'utilisation du site <strong>www.atipikrh.com</strong>, peuvent êtres recueillies : l'URL des liens par l'intermédiaire 
                    desquels l'utilisateur a accédé au site <strong>www.atipikrh.com</strong>, le fournisseur d'accès de l'utilisateur, 
                    l'adresse de protocole Internet (IP) de l'utilisateur.
                  </p>
                  <p className="text-gray-700 mb-4">
                    En tout état de cause <strong>ATIPIK RH</strong> ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin 
                    de certains services proposés par le site <strong>www.atipikrh.com</strong>. L'utilisateur fournit ces informations en toute connaissance de cause, 
                    notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site <strong>www.atipikrh.com</strong> 
                    l'obligation ou non de fournir ces informations.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, 
                    tout utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux données personnelles le concernant, en effectuant sa demande écrite 
                    et signée, accompagnée d'une copie du titre d'identité avec signature du titulaire de la pièce, en précisant l'adresse à laquelle la réponse doit être envoyée.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Aucune information personnelle de l'utilisateur du site <strong>www.atipikrh.com</strong> n'est publiée à l'insu de l'utilisateur, 
                    échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de <strong>ATIPIK RH</strong> 
                    et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation 
                    de conservation et de modification des données vis à vis de l'utilisateur du site <strong>www.atipikrh.com</strong>.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Le site n'est pas déclaré à la CNIL car il ne recueille pas d'informations personnelles.
                  </p>
                  <p className="text-gray-700">
                    Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 
                    relative à la protection juridique des bases de données.
                  </p>
                </div>

                                 {/* 8. Liens hypertextes et cookies */}
                 <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">8. Liens hypertextes et cookies</h2>
                  <p className="text-gray-700 mb-4">
                    Le site <strong>www.atipikrh.com</strong> contient un certain nombre de liens hypertextes vers d'autres sites, mis en place avec l'autorisation de 
                    <strong> ATIPIK RH</strong>. Cependant, <strong>ATIPIK RH</strong> n'a pas la possibilité de vérifier le contenu des sites ainsi visités, 
                    et n'assumera en conséquence aucune responsabilité de ce fait.
                  </p>
                  <p className="text-gray-700 mb-4">
                    La navigation sur le site <strong>www.atipikrh.com</strong> est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur. 
                    Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre des informations relatives à la 
                    navigation d'un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, 
                    et ont également vocation à permettre diverses mesures de fréquentation.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certains services. L'utilisateur peut toutefois configurer 
                    son ordinateur de la manière suivante, pour refuser l'installation des cookies :
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#013F63] mb-4">Configuration des navigateurs</h3>
                    <div className="space-y-4 text-gray-700">
                      <p><strong>Internet Explorer :</strong> onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. 
                      Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.</p>
                      
                      <p><strong>Firefox :</strong> en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l'onglet Options. 
                      Cliquer sur l'onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser les paramètres personnalisés pour l'historique. 
                      Enfin décochez-la pour désactiver les cookies.</p>
                      
                      <p><strong>Safari :</strong> Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). 
                      Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section « Confidentialité », cliquez sur Paramètres de contenu. 
                      Dans la section « Cookies », vous pouvez bloquer les cookies.</p>
                      
                      <p><strong>Chrome :</strong> Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). 
                      Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section « Confidentialité », cliquez sur préférences. 
                      Dans l'onglet « Confidentialité », vous pouvez bloquer les cookies.</p>
                    </div>
                  </div>
                </div>

                                 {/* 9. Droit applicable */}
                 <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">9. Droit applicable et attribution de juridiction</h2>
                  <p className="text-gray-700">
                    Tout litige en relation avec l'utilisation du site <strong>www.atipikrh.com</strong> est soumis au droit français. 
                    Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                  </p>
                </div>

                                 {/* 10. Lois concernées */}
                 <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">10. Les principales lois concernées</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.</li>
                    <li>Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</li>
                  </ul>
                </div>

                                 {/* 11. Lexique */}
                 <div>
                  <h2 className="text-2xl font-bold text-[#013F63] mb-6">11. Lexique</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-[#013F63] mb-2">Utilisateur :</h3>
                      <p className="text-gray-700">Internaute se connectant, utilisant le site susnommé.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-[#013F63] mb-2">Informations personnelles :</h3>
                      <p className="text-gray-700">
                        « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques 
                        auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
                      </p>
                    </div>
                  </div>
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