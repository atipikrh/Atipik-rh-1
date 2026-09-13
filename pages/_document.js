import { Html, Head, Main, NextScript } from 'next/document'
import { buildOrganizationJsonLd } from '../lib/seo/schema'
import { GTM_CONSENT_SCRIPT, GTM_ID, GTM_LOADER_SCRIPT } from '../lib/gtm'

export default function Document() {
  const schemaData = buildOrganizationJsonLd()

  return (
    <Html lang="fr">
      <Head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script dangerouslySetInnerHTML={{ __html: GTM_CONSENT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: GTM_LOADER_SCRIPT }} />

        {/* Preconnect pour optimiser le chargement des fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Préchargement de la police Brittany */}
        <link rel="preload" href="/Fonts/BrittanySignature.ttf" as="font" type="font/ttf" crossOrigin="" />
        
        {/* Meta tags génériques */}
        <meta charSet="utf-8" />
        <meta name="author" content="Atipik RH" />
        
        {/* Favicon Atipik RH */}
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logos/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logos/favicon.png" />
        <link rel="shortcut icon" href="/images/logos/favicon.png" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#013F63" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
