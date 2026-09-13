/**
 * Validation JSON-LD et smoke tests du module SEO.
 * Exécution : npm run schema-test
 */
import { validateSeoSchemas } from '../lib/seo/schema'
import { getBriefIds, getBriefById } from '../lib/seo/content-briefs'
import { mapProspectQuery } from '../lib/seo/serp-intent'
import { expandLongTail, getKeywordClusters } from '../lib/seo/keywords'
import { getIndexableRegistry } from '../lib/seo/page-registry'
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
  if (registry.length < 40) {
    errors.push(`Registre sitemap trop court: ${registry.length} URLs`)
  }

  const registryPaths = new Set(registry.map((e) => e.path))
  const excludedFromSitemap = [
    '/blog/formation-conseiller-insertion-professionnelle-lormont',
    '/blog/comment-reduire-couts-recrutement-30-pourcent-formation-rh',
  ]
  for (const path of excludedFromSitemap) {
    if (registryPaths.has(path)) {
      errors.push(`URL non canonique encore dans le sitemap: ${path}`)
    }
  }

  if (!ORGANIZATION.telephone.startsWith('+33') || ORGANIZATION.telephone.includes('000000')) {
    errors.push(`Téléphone NAP invalide: ${ORGANIZATION.telephone}`)
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
