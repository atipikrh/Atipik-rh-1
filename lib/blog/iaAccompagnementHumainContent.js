/**
 * Article du 27 octobre 2026 — IA et accompagnement.
 */

import { FINANCEMENT_DISCLAIMER, TARIF_SELON_PROFIL_COURT, formatTarifPublic } from '../tarifs/tarifsCopy.js'
import { articleCaBySlug } from '../seo/campagnesCaOctobre2026.js'
import { maillageCaHtml } from './maillageCaHtml.js'
import { encartFormationHtml } from './encartFormationHtml.js'

const meta = articleCaBySlug('ia-accompagnement-usages-sans-perdre-humain')
const TARIF = formatTarifPublic(1090)

export const iaAccompagnementHumainContent = `
        <p>L'<strong>intelligence artificielle dans l'accompagnement</strong> fait gagner du temps sur la préparation. Elle ne mène pas l'entretien, elle n'entend pas ce qui n'est pas dit, et elle ne porte pas la responsabilité de la décision. Le professionnel reste celui qui écoute, qui choisit et qui répond de ce qu'il transmet.</p>
        <p>Les dix usages concrets pour les CIP et le cadre éthique sont déjà publiés : <a href="/blog/10-usages-ia-cip-accompagnement">10 usages concrets de l'IA pour les CIP</a> et <a href="${meta.relatedHref}">${meta.relatedLabel}</a>. Cet article resserre le geste professionnel : quoi déléguer à l'outil, quoi garder.</p>

        <nav class="not-prose my-8 p-6 bg-gray-50 border border-gray-200 rounded-lg" aria-label="Table des matières">
          <p class="font-semibold text-[#013F63] mb-3">Table des matières</p>
          <ol class="list-decimal list-inside space-y-1 text-sm">
            <li><a href="#usages" class="text-[#013F63] hover:underline">Des usages, avec une limite</a></li>
            <li><a href="#formation" class="text-[#013F63] hover:underline">La formation et la prochaine session</a></li>
            <li><a href="#faq" class="text-[#013F63] hover:underline">FAQ</a></li>
          </ol>
        </nav>

        <h2 id="usages">Des usages, avec une limite</h2>
        <ul>
          <li><strong>Préparer un entretien</strong> — trame, questions, points de vigilance. L'écoute reste en direct.</li>
          <li><strong>Reformuler un document</strong> — le professionnel relit et signe le sens, pas l'outil.</li>
          <li><strong>Créer un support pédagogique</strong> — à condition de vérifier les faits et le niveau de langue.</li>
          <li><strong>Préparer une séance collective</strong> — déroulé et variantes, puis animation humaine.</li>
          <li><strong>Personnaliser un parcours</strong> — des pistes, pas une prescription automatique.</li>
          <li><strong>Vérifier les limites d'un outil</strong> — ce qu'il invente, ce qu'il ignore, ce qu'il ne doit pas recevoir.</li>
          <li><strong>Protéger la confidentialité</strong> — aucune donnée identifiante de personne accompagnée dans un service non maîtrisé.</li>
          <li><strong>Garder le jugement professionnel</strong> — l'IA propose, la personne décide.</li>
        </ul>
        <p>L'IA peut aider les professionnels à gagner du temps. Elle ne remplace ni l'écoute, ni la relation, ni la responsabilité du professionnel.</p>

        ${encartFormationHtml({
          titre: 'L\'intelligence artificielle au service de l\'accompagnement',
          href: meta.formationHref,
          lignes: [
            '<strong>Objectif :</strong> intégrer l\'IA dans la pratique, de façon responsable et utile.',
            '<strong>Durée :</strong> 14 heures en présentiel, sur deux journées.',
            `<strong>Tarif public inter :</strong> ${TARIF} par stagiaire.`,
            '<strong>Session en cours au 27 octobre :</strong> 26 et 27 octobre 2026.',
            '<strong>Prochaine session :</strong> 9 et 10 novembre 2026.',
            '<strong>Public :</strong> professionnels de l\'insertion, organismes de formation, travailleurs sociaux, RH.',
          ],
          disclaimer: FINANCEMENT_DISCLAIMER,
          tarifProfil: TARIF_SELON_PROFIL_COURT,
        })}

        <h2 id="faq">FAQ</h2>
        <h3>Peut-on coller le dossier d'une personne dans un outil d'IA ?</h3>
        <p>Non, sauf cadre explicitement validé par votre organisme pour la confidentialité. La formation apprend à travailler avec des cas anonymisés et à fixer cette limite avant l'usage.</p>
        <h3>Quelle session viser en lisant cet article ?</h3>
        <p>La session des 26 et 27 octobre 2026 a lieu au moment de la parution. La suivante est les 9 et 10 novembre 2026. Tarif public : ${TARIF} par stagiaire, 14 heures. L'intra se devis sur étude.</p>
        <h3>Faut-il avoir suivi les essentiels du numérique ?</h3>
        <p>Ce n'est pas un prérequis administratif. C'est une base utile si l'équipe n'a pas encore de règles communes sur les fichiers et les données.</p>

        ${maillageCaHtml(meta)}
`

export const iaAccompagnementHumainFaqItems = [
  {
    question: 'Peut-on coller le dossier d\'une personne dans un outil d\'IA ?',
    answer:
      'Non, sauf cadre explicitement validé par votre organisme. La formation apprend à anonymiser les cas et à fixer cette limite avant l\'usage.',
  },
  {
    question: 'Quelle session viser en lisant cet article ?',
    answer: `La session des 26 et 27 octobre 2026 a lieu au moment de la parution. La suivante est les 9 et 10 novembre 2026. Tarif public : ${TARIF} par stagiaire, 14 heures. L'intra se chiffre sur étude. ${TARIF_SELON_PROFIL_COURT} ${FINANCEMENT_DISCLAIMER}`,
  },
  {
    question: 'Faut-il avoir suivi les essentiels du numérique ?',
    answer:
      'Ce n\'est pas un prérequis administratif. C\'est une base utile si l\'équipe n\'a pas encore de règles communes sur les fichiers et les données.',
  },
]
