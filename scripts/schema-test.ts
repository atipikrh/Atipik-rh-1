/**
 * Validation JSON-LD et smoke tests du module SEO.
 * Exécution : npm run schema-test
 */
import { validateSeoSchemas } from '../lib/seo/schema'
import { getBriefIds, getBriefById } from '../lib/seo/content-briefs'
import { mapProspectQuery } from '../lib/seo/serp-intent'
import { expandLongTail, getKeywordClusters } from '../lib/seo/keywords'
import { BLOG_SLUGS, getIndexableRegistry, PLANNED_PATHS } from '../lib/seo/page-registry'
import { isBlogSlugInSitemap } from '../lib/blog/canonicalOverrides.js'
import { getBlogPublishIso, isScheduledBlogSlugLive } from '../lib/blog/publicationSchedule.js'
import { getCertifianteGeoByBrief } from '../lib/seo/certifiantesConfig.js'
import { RAFAEL_CAP_FPA } from '../lib/seo/rafaelCapFpa'
import { ORGANIZATION, SIRET } from '../lib/seo/site'
import { ENTITY_CITATION, getCitationByPage } from '../lib/seo/citations'

const PROSPECT_SAMPLES = [
  'je veux devenir conseiller insertion',
  'formation pour travailler dans l accompagnement',
  'changer de metier a Bordeaux',
  'bilan competence Lormont',
  'formation FPA Nouvelle-Aquitaine',
  'retour a l emploi',
]

function main() {
  const errors: string[] = []

  const schema = validateSeoSchemas()
  if (!schema.ok) errors.push(...schema.errors)

  const briefIds = getBriefIds()
  if (briefIds.length < 14) {
    errors.push(`Attendu ≥14 briefs, trouvé ${briefIds.length}`)
  }

  for (const id of briefIds) {
    const b = getBriefById(id)
    if (!b) continue
    if (b.metaTitle.length > 65) {
      errors.push(`metaTitle trop long (${id}): ${b.metaTitle.length} car.`)
    }
    if (b.metaDescription.length > 160) {
      errors.push(`metaDescription trop long (${id}): ${b.metaDescription.length} car.`)
    }
  }

  let unmapped = 0
  for (const q of PROSPECT_SAMPLES) {
    if (!mapProspectQuery(q)) unmapped++
  }
  if (unmapped > 0) {
    errors.push(`${unmapped} requêtes prospect sans mapping sur l’échantillon`)
  }

  const clusters = getKeywordClusters()
  if (clusters.length < 10) {
    errors.push(`Attendu 10 clusters, trouvé ${clusters.length}`)
  }

  const expanded = expandLongTail('formation-cip-bordeaux', { max: 5 })
  if (expanded.length < 3) {
    errors.push('expandLongTail a retourné trop peu de variantes')
  }

  const registry = getIndexableRegistry()
  if (registry.length < 60) {
    errors.push(`Registre sitemap trop court: ${registry.length} URLs`)
  }

  const registryPaths = new Set(registry.map((e) => e.path))
  if (registryPaths.size !== registry.length) {
    errors.push('Chemins sitemap en double')
  }

  const excludedFromSitemap = [
    '/blog/formation-conseiller-insertion-professionnelle-lormont',
    '/blog/comment-reduire-couts-recrutement-30-pourcent-formation-rh',
    ...PLANNED_PATHS,
  ]
  for (const path of excludedFromSitemap) {
    if (registryPaths.has(path)) {
      errors.push(`URL exclue encore dans le sitemap: ${path}`)
    }
  }

  if (registry.find((item) => item.path === '/')?.lastModified) {
    errors.push('L’accueil ne doit pas avoir de lastmod du jour')
  }
  if (registry.find((item) => item.path === '/formations/courtes-professionnalisantes')?.lastModified !== '2026-05-13') {
    errors.push('Les formations courtes doivent garder la date 2026-05-13')
  }

  const todayParis = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris' }).format(new Date())
  for (const item of registry) {
    if (!item.lastModified) continue
    const isBlog = item.path.startsWith('/blog/')
    const isCourteFiche =
      item.path === '/formations/courtes-professionnalisantes' ||
      item.path.startsWith('/formations/professionnalisantes/')
    if (isBlog) {
      const slug = item.path.slice('/blog/'.length)
      if (item.lastModified !== getBlogPublishIso(slug)) {
        errors.push(`lastmod blog incorrecte: ${item.path}`)
      }
    } else if (!isCourteFiche || item.lastModified !== '2026-05-13') {
      errors.push(`lastmod inattendue: ${item.path} (${item.lastModified})`)
    }
    if (item.lastModified === todayParis) {
      const slug = isBlog ? item.path.slice('/blog/'.length) : ''
      if (getBlogPublishIso(slug) !== todayParis) {
        errors.push(`lastmod du jour hors publication: ${item.path}`)
      }
    }
  }

  for (const slug of BLOG_SLUGS) {
    const path = `/blog/${slug}`
    const expected = isScheduledBlogSlugLive(slug) && isBlogSlugInSitemap(slug)
    if (expected !== registryPaths.has(path)) {
      errors.push(`Présence sitemap inattendue pour ${path}`)
    }
  }

  for (const required of [
    '/formations/cip/financement',
    '/formations/cip/conditions-inscription',
    '/formations/fpa/financement',
    '/formations/fpa/conditions-inscription',
    '/vae/titre-cip',
    '/vae/titre-fpa',
    '/formations/courtes-professionnalisantes/financement',
  ]) {
    if (!registryPaths.has(required)) errors.push(`Page satellite absente du sitemap: ${required}`)
  }

  if (!ORGANIZATION.telephone.startsWith('+33') || ORGANIZATION.telephone.includes('000000')) {
    errors.push(`Téléphone NAP invalide: ${ORGANIZATION.telephone}`)
  }
  if (getCertifianteGeoByBrief('formation-fpa')?.rafaelCap) {
    errors.push('Ne pas lier Rafael sur la page FPA tant que l’action n’est pas publiée')
  }
  if (RAFAEL_CAP_FPA.ficheUrl) {
    errors.push('La fiche FPA Rafael ne doit pas être liée tant que la page publique est absente')
  }
  if (RAFAEL_CAP_FPA.reference !== '202609425794') {
    errors.push('La référence FPA Rafael doit rester l’action 202609425794')
  }
  if (RAFAEL_CAP_FPA.resume.includes('6 500')) {
    errors.push('La fiche FPA Rafael ne doit pas reprendre 6 500 €')
  }
  if (!RAFAEL_CAP_FPA.session.libelle.includes('en cours')) {
    errors.push('La session FPA Rafael doit indiquer que la date est en cours')
  }
  if (RAFAEL_CAP_FPA.resume.includes('avril 2027')) {
    errors.push('La fiche FPA Rafael ne doit pas figer avril 2027')
  }
  if (!ORGANIZATION.sameAs.some((url) => url.includes('0xd552ffe682f1bfd'))) {
    errors.push('sameAs doit pointer vers la fiche Google ATIPIK RH')
  }
  if (!ORGANIZATION.sameAs.some((url) => url.includes('atipik-rh33'))) {
    errors.push('sameAs LinkedIn/Facebook doit utiliser atipik-rh33')
  }
  if (ORGANIZATION.taxID !== SIRET) {
    errors.push(`taxID organisation attendu ${SIRET}`)
  }
  if (!ENTITY_CITATION.includes('Qualiopi') || !ENTITY_CITATION.includes('Lormont')) {
    errors.push('ENTITY_CITATION doit citer Qualiopi et Lormont')
  }
  const accueilCitation = getCitationByPage('accueil')
  if (!accueilCitation?.definition) {
    errors.push('Citation accueil manquante')
  }
  if (!getBriefById('accueil')) {
    errors.push('Brief accueil manquant')
  }

  if (errors.length) {
    console.error('❌ schema-test ÉCHEC\n')
    errors.forEach((e) => console.error(`  - ${e}`))
    process.exit(1)
  }

  console.log('✅ schema-test OK')
  console.log(`   ${briefIds.length} briefs | ${clusters.length} clusters | ${registry.length} URLs sitemap`)
}

main()
