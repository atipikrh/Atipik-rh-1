import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics'

const SITE_URL = 'https://www.atipikrh.com'
const DEFAULT_TITLE = 'Atipik RH - Formation, Bilan de compétences & VAE à Lormont'
const DEFAULT_DESCRIPTION =
  "Centre de formation à Lormont (33) : bilan de compétences, VAE, formations certifiantes CPF. Accompagnement personnalisé pour votre évolution professionnelle."

export default function App({ Component, pageProps }) {
  const router = useRouter()
  // Initialiser Google Analytics avec gestion du consentement
  useGoogleAnalytics()
  const canonicalUrl = `${SITE_URL}${router.asPath.split('?')[0]}`

  useEffect(() => {
    if (typeof window === 'undefined') return
    const q = router.query || {}
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
    const payload = {
      event: 'page_context',
      page_path: router.asPath.split('?')[0],
    }
    let hasUtm = false
    utmKeys.forEach((k) => {
      const v = q[k]
      if (v == null) return
      hasUtm = true
      payload[k] = Array.isArray(v) ? v[0] : v
    })
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(payload)
    if (hasUtm) {
      window.dataLayer.push({ event: 'page_utm_context', ...payload })
    }
  }, [router.asPath, router.query])

  return (
    <>
      <Head>
        <title>{DEFAULT_TITLE}</title>
        <meta name="description" content={DEFAULT_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta property="og:site_name" content="Atipik RH" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={DEFAULT_TITLE} />
        <meta property="og:description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={DEFAULT_TITLE} />
        <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
      </Head>
      
      {/* Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        id="gtm-script"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T45Z2XRQ');`
        }}
      />
      
      {/* Google Analytics - Les scripts seront chargés dynamiquement après consentement via lib/analytics.js */}

      <Component {...pageProps} />
      <SpeedInsights />
    </>
  )
} // Force deployment Thu Oct 23 12:40:44 CEST 2025
// Test reconnexion Vercel Thu Oct 23 12:47:00 CEST 2025
