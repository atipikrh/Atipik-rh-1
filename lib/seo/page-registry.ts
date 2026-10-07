import { isBlogSlugInSitemap } from '../blog/canonicalOverrides.js'
import { getBlogPublishIso, isScheduledBlogSlugLive } from '../blog/publicationSchedule.js'
import { PROFESSIONNALISANTES_SLUGS } from './professionnalisantesConfig.js'
import { SLUGS_CA_OCTOBRE_2026 } from './campagnesCaOctobre2026.js'
import type { RegistryEntry } from './types'

/** Slugs blog indexables (alignés sur pages/blog/[slug].js). */
export const BLOG_SLUGS = [
  ...SLUGS_CA_OCTOBRE_2026,
  'neurodiversite-inclusion-recrutement',
  'experience-professionnelle-non-reconnue-vae',
  'formation-cip-ou-fpa-quelle-certification-choisir',
  'recrutement-inclusif-objectiver-criteres',
  'salarie-demotive-bilan-de-competences',
  'recrutement-sans-discrimination-points-controle',
  '10-usages-ia-cip-accompagnement',
  'formation-ia-ethique-professionnels-accompagnement',
  'formation-ia-accompagnement-professionnels-bordeaux-2026',
  'formation-essentiels-numerique-professionnels-accompagnement-bordeaux-2026',
  'formation-cip-bordeaux-session-septembre-2026',
  'reconversion-professionnelle-juin-2026-financement-cpf',
  'obligation-formation-non-discrimination-recrutement-entreprise',
  'recruter-par-les-competences-penurie-talents',
  'formation-fpa-bordeaux-formateur-professionnel-adultes',
  'bilan-de-competences-lormont-bordeaux',
  'formation-cip-bordeaux-conseiller-insertion-professionnelle',
  'biais-cognitifs-recrutement-methode-bordeaux',
  'discrimination-embauche-obligations-legales-risques-solutions-entreprises',
  'reduire-couts-recrutement-formation-rh',
  'comment-reduire-couts-recrutement-30-pourcent-formation-rh',
  'recrutement-sans-discrimination',
  'comment-ameliorer-pratiques-recrutement-rh-2026',
  'prevenir-discriminations-recrutement-methodes-obligations-outils-rh',
  'recrutement-competences-methode-complete-rh-2026',
  '5-signes-temps-faire-bilan-competences',
  'pourquoi-externaliser-bilan-competences-lormont-cabinet-specialise',
  'location-salle-formation-lormont-proche-bordeaux',
  'financer-reconversion-professionnelle-2026-cpf-aides-regionales',
  'vae-ou-bilan-competences-que-choisir-selon-parcours',
  'valoriser-competences-cv-parcours-atypique',
  'bilan-competences-cadres-plus-40-ans-reconversion',
  'devenir-formateur-adultes-sans-etudes-longues-reconversion',
  'financer-bilan-competences-2026-cpf-france-travail-employeur',
  'portefeuille-competences-insertion-reconversion-employabilite',
  'vae-valoriser-experience-obtenir-diplome',
  'bilan-competences-lormont-5-etapes-reconversion',
  'soft-skills-competences-difference',
  'preparer-entretien-embauche-conseils-experts',
  'financer-bilan-vae-formation-atipik-rh',
  'reconversion-professionnelle-comment-reussir-changement-carriere',
  'atipik-rh-espace-emploi-projets-partenariat-mem-wejob-lormont',
  'difficultes-recrutement-pratiques-marche',
  'formation-conseiller-insertion-professionnelle-lormont',
  'centre-formation-lormont-rive-droite-bordeaux',
] as const

/** Fiches salles indexables (alignées sur pages/location-salles/[id].js). */
export const LOCATION_SALLES_IDS = [
  'grande-salle-formation',
  'salle-reunion-moyenne',
  'petite-salle-reunion',
  'bureau-individuel-1',
  'bureau-individuel-2',
] as const

const TEAM_SLUGS = [
  'vanessa-noah-ewodo',
  'brunilda-rafael',
  'stephanie-breton',
  'nathalie-biotti',
  'mouna-mniai',
  'mathilde-bastian',
  'martine-baudon',
  'corinne-bienvenu',
  'coraline-abadie',
  'cecile-bernat',
  'anne-lise-coatrine',
  'windy-telga',
] as const

function entry(
  path: string,
  section: RegistryEntry['section'],
  priority: number,
  changeFrequency: RegistryEntry['changeFrequency'],
  lastModified?: string
): RegistryEntry {
  return { path, section, priority, changeFrequency, lastModified }
}

/** Chemins briefés mais pas encore publiés — exclus du sitemap. */
export const PLANNED_PATHS = [
  '/formation-metiers-accompagnement-social',
  '/accompagnement-femmes-eloignees-emploi',
  '/formation-insertion-quartier-prioritaire-bordeaux',
  '/accompagnement-retour-emploi-lormont',
] as const

export function getIndexableRegistry(): RegistryEntry[] {
  const entries: RegistryEntry[] = [
    entry('/', 'home', 1.0, 'weekly'),
    entry('/blog', 'blog', 0.9, 'weekly'),
    entry('/formations', 'formations', 0.9, 'monthly'),
    entry('/formations/cip', 'formations', 0.9, 'monthly'),
    entry('/formations/cip/financement', 'formations', 0.8, 'monthly'),
    entry('/formations/cip/conditions-inscription', 'formations', 0.8, 'monthly'),
    entry('/formations/fpa', 'formations', 0.9, 'monthly'),
    entry('/formations/fpa/financement', 'formations', 0.8, 'monthly'),
    entry('/formations/fpa/conditions-inscription', 'formations', 0.8, 'monthly'),
    entry('/formations/fpa/ccp1', 'formations', 0.85, 'monthly'),
    entry('/formations/fpa/ccp2', 'formations', 0.85, 'monthly'),
    entry('/formations/fpa/ccp3', 'formations', 0.85, 'monthly'),
    entry('/formations/fpa/ccp4', 'formations', 0.85, 'monthly'),
    entry('/formations/ccp1', 'formations', 0.85, 'monthly'),
    entry('/formations/ccp2', 'formations', 0.85, 'monthly'),
    entry('/formations/ccp3', 'formations', 0.85, 'monthly'),
    entry('/formations/courtes-professionnalisantes', 'formations', 0.85, 'monthly', '2026-05-13'),
    entry('/formations/courtes-professionnalisantes/financement', 'formations', 0.75, 'monthly'),
    entry('/bilan-de-competences', 'services', 0.9, 'monthly'),
    entry('/bilan-de-competences/quiz', 'services', 0.7, 'monthly'),
    entry('/vae', 'services', 0.8, 'monthly'),
    entry('/vae/titre-cip', 'services', 0.75, 'monthly'),
    entry('/vae/titre-fpa', 'services', 0.75, 'monthly'),
    entry('/financement', 'services', 0.8, 'monthly'),
    entry('/reconversion-professionnelle-bordeaux', 'services', 0.85, 'monthly'),
    entry('/organisme-formation-insertion-professionnelle', 'formations', 0.85, 'monthly'),
    entry('/certification', 'other', 0.6, 'yearly'),
    entry('/contact', 'other', 0.8, 'monthly'),
    entry('/s-inscrire', 'other', 0.85, 'weekly'),
    entry('/notre-equipe', 'equipe', 0.7, 'monthly'),
    entry('/notre-histoire', 'other', 0.6, 'yearly'),
    entry('/partenariat', 'other', 0.6, 'yearly'),
    entry('/location-salles-lormont', 'services', 0.75, 'monthly'),
    entry('/mentions-legales', 'legal', 0.3, 'yearly'),
    entry('/politique-confidentialite', 'legal', 0.3, 'yearly'),
    entry('/cgv', 'legal', 0.3, 'yearly'),
    entry('/rgpd', 'legal', 0.3, 'yearly'),
  ]

  for (const slug of PROFESSIONNALISANTES_SLUGS) {
    entries.push(
      entry(
        `/formations/professionnalisantes/${slug}`,
        'formations',
        0.8,
        'monthly',
        '2026-05-13'
      )
    )
  }

  for (const slug of BLOG_SLUGS) {
    if (!isScheduledBlogSlugLive(slug)) continue
    if (!isBlogSlugInSitemap(slug)) continue
    entries.push(entry(`/blog/${slug}`, 'blog', 0.8, 'monthly', getBlogPublishIso(slug) || undefined))
  }

  for (const slug of TEAM_SLUGS) {
    entries.push(entry(`/equipe/${slug}`, 'equipe', 0.6, 'yearly'))
  }

  for (const id of LOCATION_SALLES_IDS) {
    entries.push(entry(`/location-salles/${id}`, 'services', 0.7, 'monthly'))
  }

  const planned = new Set<string>(PLANNED_PATHS)
  const seen = new Set<string>()
  return entries.filter((item) => {
    if (planned.has(item.path) || item.path.includes('?') || seen.has(item.path)) return false
    seen.add(item.path)
    return true
  })
}
