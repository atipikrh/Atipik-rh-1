/**
 * Articles blog d'octobre 2026 (corps + fiche complète).
 * La liste du blog n'importe que les cartes, via campagnesCaOctobre2026.js.
 */

import {
  ARTICLES_CA_OCTOBRE,
  toConversion,
  toInternalLinks,
  toListing,
} from '../seo/campagnesCaOctobre2026.js'
import {
  recruterEnInsertionParcoursContent,
  recruterEnInsertionParcoursFaqItems,
} from './recruterEnInsertionParcoursContent.js'
import {
  recrutementInclusifSeptErreursContent,
  recrutementInclusifSeptErreursFaqItems,
} from './recrutementInclusifSeptErreursContent.js'
import {
  relationEntreprisePartenariatContent,
  relationEntreprisePartenariatFaqItems,
} from './relationEntreprisePartenariatContent.js'
import {
  formerRecruteursDiversiteContent,
  formerRecruteursDiversiteFaqItems,
} from './formerRecruteursDiversiteContent.js'
import {
  recruterParCompetencesSecuriserContent,
  recruterParCompetencesSecuriserFaqItems,
} from './recruterParCompetencesSecuriserContent.js'
import {
  essentielsNumeriqueAccompagnementContent,
  essentielsNumeriqueAccompagnementFaqItems,
} from './essentielsNumeriqueAccompagnementContent.js'
import {
  iaAccompagnementHumainContent,
  iaAccompagnementHumainFaqItems,
} from './iaAccompagnementHumainContent.js'
import {
  quelleFormationCourteEquipeContent,
  quelleFormationCourteEquipeFaqItems,
} from './quelleFormationCourteEquipeContent.js'

const CORPS_PAR_SLUG = {
  'recruter-en-insertion-parcours-entreprise-candidat': {
    content: recruterEnInsertionParcoursContent,
    faqItems: recruterEnInsertionParcoursFaqItems,
  },
  'recrutement-inclusif-7-erreurs-perdre-candidats': {
    content: recrutementInclusifSeptErreursContent,
    faqItems: recrutementInclusifSeptErreursFaqItems,
  },
  'relation-entreprise-insertion-partenariat-durable': {
    content: relationEntreprisePartenariatContent,
    faqItems: relationEntreprisePartenariatFaqItems,
  },
  'former-recruteurs-diversite-plan-action': {
    content: formerRecruteursDiversiteContent,
    faqItems: formerRecruteursDiversiteFaqItems,
  },
  'recruter-par-les-competences-securiser-embauches': {
    content: recruterParCompetencesSecuriserContent,
    faqItems: recruterParCompetencesSecuriserFaqItems,
  },
  'essentiels-numerique-professionnels-accompagnement': {
    content: essentielsNumeriqueAccompagnementContent,
    faqItems: essentielsNumeriqueAccompagnementFaqItems,
  },
  'ia-accompagnement-usages-sans-perdre-humain': {
    content: iaAccompagnementHumainContent,
    faqItems: iaAccompagnementHumainFaqItems,
  },
  'quelle-formation-courte-choisir-equipe': {
    content: quelleFormationCourteEquipeContent,
    faqItems: quelleFormationCourteEquipeFaqItems,
  },
}

export const articlesCaOctobre2026 = ARTICLES_CA_OCTOBRE.map((article) => {
  const corps = CORPS_PAR_SLUG[article.slug]
  return {
    ...toListing(article),
    faqItems: corps.faqItems,
    internalLinks: toInternalLinks(article),
    content: corps.content,
    conversion: toConversion(article),
  }
})
