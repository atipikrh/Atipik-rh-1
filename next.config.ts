import type { NextConfig } from 'next'
import { assertEnvForBuild } from './lib/env'

assertEnvForBuild()

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },

  async redirects() {
    return [
      // Anciens sitemaps WordPress / Yoast → sitemap Next.js
      {
        source: '/sitemap_index.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/sitemap-index.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/wp-sitemap.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/wp-sitemap-:slug.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/2025/09/Plaquette-location-de-salles.pdf',
        destination: '/location-salles-lormont',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/2021/03/Cadre-legal-du-Bilan-de-competences.pdf',
        destination: '/documents/Cadre-legal-du-Bilan-de-competences.pdf',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/2022/02/Programme-de-formation-VAE-ATIPIK-RH.pdf',
        destination: '/vae',
        permanent: true,
      },
      {
        source: '/vae/cpf',
        destination: '/financement',
        permanent: true,
      },
      {
        source: '/vae/dossier',
        destination: '/vae',
        permanent: true,
      },
      {
        source: '/formations/courtes',
        destination: '/formations/courtes-professionnalisantes',
        permanent: true,
      },
      {
        source: '/formations/courtes/:path*',
        destination: '/formations/courtes-professionnalisantes',
        permanent: true,
      },
      {
        source: '/formations/certifiantes',
        destination: '/formations',
        permanent: true,
      },
      {
        source: '/formations/certifiantes/cip',
        destination: '/formations/cip',
        permanent: true,
      },
      {
        source: '/formations/certifiantes/fpa',
        destination: '/formations/fpa',
        permanent: true,
      },
      {
        source: '/formations/certifiantes/formateur-professionnel-adultes',
        destination: '/formations/fpa',
        permanent: true,
      },
      {
        source: '/formations/certifiantes/cpf',
        destination: '/financement',
        permanent: true,
      },
      {
        source: '/formations/certifiantes/programme',
        destination: '/formations',
        permanent: true,
      },
      {
        source: '/equipe/martine-beaudon',
        destination: '/equipe/martine-baudon',
        permanent: true,
      },
      {
        source: '/formations/professionnalisantes/prevenir-discriminations-recrutement',
        destination: '/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif',
        permanent: true,
      },
      {
        source: '/bilan-de-competences/cpf',
        destination: '/financement',
        permanent: true,
      },
      {
        source: '/bilan-de-competences/prix',
        destination: '/bilan-de-competences',
        permanent: true,
      },
      {
        source: '/bilan-de-competences/en-ligne',
        destination: '/bilan-de-competences',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/documents/dossier-candidature/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, follow',
          },
        ],
      },
    ]
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    localPatterns: [
      {
        pathname: '/images/**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  compress: true,
  productionBrowserSourceMaps: false,
}

export default nextConfig
