import { z } from 'zod'
import {
  ADDRESS,
  BASE_URL,
  GEO,
  GEO_ZONES,
  OPENING_HOURS,
  ORGANIZATION,
  buildPostalAddressJsonLd,
} from './site'
import type { FaqItem, SchemaType } from './types'
import { getBriefById } from './content-briefs'

const postalAddressSchema = z.object({
  '@type': z.literal('PostalAddress'),
  streetAddress: z.string().min(1),
  addressLocality: z.string().min(1),
  postalCode: z.string().min(1),
  addressRegion: z.string().min(1),
  addressCountry: z.string().min(1),
})

const localBusinessSchema = z.object({
  '@context': z.literal('https://schema.org'),
  '@type': z.literal('LocalBusiness'),
  '@id': z.string().url(),
  name: z.string().min(1),
  url: z.string().url(),
  telephone: z.string().min(8),
  email: z.string().email(),
  address: postalAddressSchema,
  geo: z.object({
    '@type': z.literal('GeoCoordinates'),
    latitude: z.number(),
    longitude: z.number(),
  }),
  openingHours: z.array(z.string().min(1)).min(1),
  sameAs: z.array(z.string().url()).min(1),
})

const faqPageSchema = z.object({
  '@context': z.literal('https://schema.org'),
  '@type': z.literal('FAQPage'),
  mainEntity: z
    .array(
      z.object({
        '@type': z.literal('Question'),
        name: z.string().min(1),
        acceptedAnswer: z.object({
          '@type': z.literal('Answer'),
          text: z.string().min(1),
        }),
      })
    )
    .min(1),
})

const courseSchema = z.object({
  '@context': z.literal('https://schema.org'),
  '@type': z.literal('Course'),
  name: z.string().min(1),
  description: z.string().min(1),
  provider: z.object({
    '@type': z.literal('Organization'),
    name: z.string().min(1),
    url: z.string().url(),
  }),
  url: z.string().url(),
})

/** JSON-LD LocalBusiness — source unique pour _document.js et les briefs. */
export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': ORGANIZATION.id,
    name: ORGANIZATION.name,
    url: ORGANIZATION.url,
    telephone: ORGANIZATION.telephone,
    email: ORGANIZATION.email,
    taxID: ORGANIZATION.taxID,
    address: buildPostalAddressJsonLd(),
    geo: GEO,
    openingHours: [...OPENING_HOURS],
    sameAs: [...ORGANIZATION.sameAs],
    areaServed: GEO_ZONES.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Qualiopi',
      name: 'Certification Qualiopi — actions de formation, bilan de compétences, VAE',
    },
  }
}

export function buildFaqJsonLd(faq: FaqItem[]) {
  if (!faq.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function buildBreadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  }
}

export function buildCourseJsonLdFromBrief(briefId: string) {
  const brief = getBriefById(briefId)
  if (!brief) return null
  const path = brief.existingPagePath ?? brief.recommendedSlug
  const url = path.startsWith('http') ? path : `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: brief.h1,
    description: brief.metaDescription,
    provider: {
      '@type': 'Organization',
      name: ORGANIZATION.name,
      url: ORGANIZATION.url,
      telephone: ORGANIZATION.telephone,
      address: buildPostalAddressJsonLd(),
      geo: GEO,
    },
    educationalLevel: 'Formation certifiante',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: ADDRESS.addressRegion,
    },
    url,
  }
}

export function buildArticleJsonLd(params: {
  headline: string
  description: string
  path: string
  datePublished: string
  authorName: string
}) {
  const canonical = `${BASE_URL}${params.path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.headline,
    description: params.description,
    author: { '@type': 'Person', name: params.authorName },
    publisher: {
      '@type': 'Organization',
      name: ORGANIZATION.name,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/logos/atipik-logo.png`,
      },
    },
    datePublished: params.datePublished,
    dateModified: params.datePublished,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }
}

/** Schémas recommandés pour un brief (tableau si plusieurs types). */
export function buildRecommendedSchema(briefId: string): Record<string, unknown> | Record<string, unknown>[] {
  const brief = getBriefById(briefId)
  if (!brief) return buildOrganizationJsonLd()

  const parts: Record<string, unknown>[] = []
  for (const type of brief.schemaTypes) {
    if (type === 'LocalBusiness') parts.push(buildOrganizationJsonLd())
    if (type === 'Course') {
      const course = buildCourseJsonLdFromBrief(briefId)
      if (course) parts.push(course)
    }
    if (type === 'FAQPage') {
      const faq = buildFaqJsonLd(brief.faq)
      if (faq) parts.push(faq)
    }
    if (type === 'BreadcrumbList') {
      parts.push(
        buildBreadcrumbJsonLd([
          { name: 'Accueil', path: '/' },
          { name: brief.h1, path: brief.existingPagePath ?? brief.recommendedSlug },
        ])
      )
    }
  }
  if (parts.length === 1) return parts[0]
  return parts
}

export interface SchemaValidationResult {
  ok: boolean
  errors: string[]
}

/** Validation Zod pour CI / npm run schema-test */
export function validateSeoSchemas(): SchemaValidationResult {
  const errors: string[] = []

  const orgResult = localBusinessSchema.safeParse(buildOrganizationJsonLd())
  if (!orgResult.success) {
    errors.push(`LocalBusiness: ${orgResult.error.message}`)
  }

  const sampleFaq: FaqItem[] = [
    {
      question: 'Où se situe Atipik RH ?',
      answer: '8 Rue du Courant, 33310 Lormont, proche Bordeaux.',
    },
  ]
  const faqLd = buildFaqJsonLd(sampleFaq)
  if (faqLd) {
    const faqResult = faqPageSchema.safeParse(faqLd)
    if (!faqResult.success) errors.push(`FAQPage: ${faqResult.error.message}`)
  }

  const courseLd = buildCourseJsonLdFromBrief('formation-cip')
  if (courseLd) {
    const courseResult = courseSchema.safeParse(courseLd)
    if (!courseResult.success) errors.push(`Course: ${courseResult.error.message}`)
  }

  return { ok: errors.length === 0, errors }
}

export function schemaTypeLabel(type: SchemaType): string {
  return type
}
