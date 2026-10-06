/**
 * Article du 8 octobre 2026 — 7 erreurs du recrutement inclusif.
 */

import { FINANCEMENT_DISCLAIMER, TARIF_SELON_PROFIL_COURT, formatTarifPublic } from '../tarifs/tarifsCopy.js'
import { articleCaBySlug } from '../seo/campagnesCaOctobre2026.js'
import { maillageCaHtml } from './maillageCaHtml.js'
import { encartFormationHtml } from './encartFormationHtml.js'

const meta = articleCaBySlug('recrutement-inclusif-7-erreurs-perdre-candidats')
const TARIF = formatTarifPublic(990)

export const recrutementInclusifSeptErreursContent = `
        <p>Le <strong>recrutement inclusif</strong> échoue souvent avant toute mauvaise intention. Une équipe convaincue d'être « ouverte » peut quand même écarter des candidats solides, parce que le processus récompense le feeling plutôt que la compétence.</p>
        <p>Cet article liste sept erreurs de terrain. Il ne reprend pas le cadre juridique déjà traité dans <a href="${meta.relatedHref}">${meta.relatedLabel}</a>. L'objectif est de voir ce qui fait perdre des personnes, puis de passer à une pratique transférable.</p>

        <nav class="not-prose my-8 p-6 bg-gray-50 border border-gray-200 rounded-lg" aria-label="Table des matières">
          <p class="font-semibold text-[#013F63] mb-3">Table des matières</p>
          <ol class="list-decimal list-inside space-y-1 text-sm">
            <li><a href="#erreurs" class="text-[#013F63] hover:underline">Les sept erreurs</a></li>
            <li><a href="#formation" class="text-[#013F63] hover:underline">Passer des principes aux pratiques</a></li>
            <li><a href="#faq" class="text-[#013F63] hover:underline">FAQ</a></li>
          </ol>
        </nav>

        <h2 id="erreurs">Les sept erreurs</h2>
        <h3>1. Chercher un profil idéal au lieu de compétences précises</h3>
        <p>Le profil idéal cumule des qualités vagues. Personne ne les coche toutes. L'équipe retient alors celui qui « correspond », c'est-à-dire celui qui rassure.</p>
        <h3>2. Utiliser des critères flous</h3>
        <p>« Bonne présentation » ou « personnalité dynamique » ne décrivent pas un livrable. Ils ouvrent la porte aux stéréotypes.</p>
        <h3>3. Poser des questions différentes selon les candidats</h3>
        <p>Sans trame commune, on ne compare plus des réponses. On compare des conversations.</p>
        <h3>4. Décider principalement au ressenti</h3>
        <p>Le ressenti arrive vite. Il doit être confronté à une grille, pas l'inverse.</p>
        <h3>5. Négliger l'accessibilité du processus</h3>
        <p>Lieu, horaire, support, délai de réponse : un processus peu lisible élimine avant l'entretien.</p>
        <h3>6. Ne pas expliquer les critères de sélection</h3>
        <p>Les candidats et les prescripteurs ne peuvent pas préparer ce qu'ils ne connaissent pas. L'entreprise non plus ne peut pas justifier sa décision.</p>
        <h3>7. Oublier l'intégration après l'embauche</h3>
        <p>Une embauche inclusive qui s'arrête à la signature reproduit l'échec au moment de la prise de poste.</p>
        <p>La bonne intention ne suffit pas. Une formation permet de transformer ces principes en gestes que l'équipe répète au prochain recrutement.</p>

        ${encartFormationHtml({
          titre: 'Prévenir les discriminations dans le recrutement',
          href: meta.formationHref,
          lignes: [
            '<strong>Contenu :</strong> biais cognitifs, stéréotypes, recrutement par les compétences, annonces non discriminantes, adaptation du parcours candidat.',
            '<strong>Durée :</strong> 11 heures (7 h en présentiel, 4 h en distanciel synchrone).',
            '<strong>Repère :</strong> c\'est le module indiqué comme formation obligatoire sur la fiche.',
            `<strong>Tarif public inter :</strong> ${TARIF} par stagiaire.`,
          ],
          disclaimer: FINANCEMENT_DISCLAIMER,
          tarifProfil: TARIF_SELON_PROFIL_COURT,
        })}

        <h2 id="faq">FAQ</h2>
        <h3>Cet article remplace-t-il une check-list juridique ?</h3>
        <p>Non. Les points de contrôle légaux sont dans l'article complémentaire. Ici, il s'agit des erreurs qui font perdre des candidats avant même un contentieux.</p>
        <h3>Quelle formation demander pour une équipe ?</h3>
        <p>Prévenir les discriminations dans le recrutement, 11 heures, tarif public ${TARIF} par stagiaire. Le format intra se chiffre après échange.</p>
        <h3>Faut-il déjà avoir une charte diversité ?</h3>
        <p>Non. La formation part des pratiques réelles : annonces, questions, décision, intégration.</p>

        ${maillageCaHtml(meta)}
`

export const recrutementInclusifSeptErreursFaqItems = [
  {
    question: 'Cet article remplace-t-il une check-list juridique ?',
    answer:
      'Non. Les points de contrôle légaux sont traités dans un article dédié. Celui-ci porte sur les erreurs qui font perdre des candidats.',
  },
  {
    question: 'Quelle formation demander pour une équipe ?',
    answer: `Prévenir les discriminations dans le recrutement, 11 heures, tarif public ${TARIF} par stagiaire. Le format intra se chiffre après échange. ${TARIF_SELON_PROFIL_COURT} ${FINANCEMENT_DISCLAIMER}`,
  },
  {
    question: 'Faut-il déjà avoir une charte diversité ?',
    answer: 'Non. La formation part des pratiques réelles : annonces, questions, décision, intégration.',
  },
]
