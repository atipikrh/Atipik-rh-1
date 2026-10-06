/**
 * Article du 22 octobre 2026 — essentiels du numérique.
 */

import { FINANCEMENT_DISCLAIMER, TARIF_SELON_PROFIL_COURT, formatTarifPublic } from '../tarifs/tarifsCopy.js'
import { articleCaBySlug } from '../seo/campagnesCaOctobre2026.js'
import { maillageCaHtml } from './maillageCaHtml.js'
import { encartFormationHtml } from './encartFormationHtml.js'

const meta = articleCaBySlug('essentiels-numerique-professionnels-accompagnement')
const TARIF = formatTarifPublic(970)

export const essentielsNumeriqueAccompagnementContent = `
        <p>Les professionnels de l'accompagnement jonglent avec les fichiers, les mails, les visios et les tableaux de suivi. Chacun a ses raccourcis. L'équipe, elle, perd du temps à retrouver l'information et prend des risques sur les données des personnes accompagnées.</p>
        <p>Une <strong>formation numérique pour l'accompagnement</strong> ne vise pas à ajouter un outil de plus. Elle vise une méthode commune : où ranger, comment échanger, comment préparer un rendez-vous à distance, quoi ne pas confier à un service en ligne. Les dates de rentrée sont rappelées dans <a href="${meta.relatedHref}">${meta.relatedLabel}</a>. Ici, il s'agit de la méthode.</p>

        <nav class="not-prose my-8 p-6 bg-gray-50 border border-gray-200 rounded-lg" aria-label="Table des matières">
          <p class="font-semibold text-[#013F63] mb-3">Table des matières</p>
          <ol class="list-decimal list-inside space-y-1 text-sm">
            <li><a href="#sujets" class="text-[#013F63] hover:underline">Ce que l'équipe gagne à partager</a></li>
            <li><a href="#formation" class="text-[#013F63] hover:underline">Programme, durée, prochaine session</a></li>
            <li><a href="#faq" class="text-[#013F63] hover:underline">FAQ</a></li>
          </ol>
        </nav>

        <h2 id="sujets">Ce que l'équipe gagne à partager</h2>
        <ul>
          <li><strong>Organiser documents et ressources</strong> pour que le dossier ne dépende pas d'une seule personne.</li>
          <li><strong>Fluidifier les échanges</strong> avec les bénéficiaires, sans multiplier les canaux.</li>
          <li><strong>Préparer les rendez-vous à distance</strong> : lien, durée, ce qui doit rester à l'oral.</li>
          <li><strong>Utiliser des outils collaboratifs</strong> avec une règle d'usage, pas une collection d'applications.</li>
          <li><strong>Rendre les supports lisibles</strong> pour la personne accompagnée.</li>
          <li><strong>Protéger les données confidentielles</strong> : ce qui se stocke, ce qui ne se colle pas dans un outil grand public.</li>
          <li><strong>Éviter la surcharge</strong> : moins de notifications, des rituels d'équipe plus courts.</li>
        </ul>
        <p>Votre équipe utilise déjà de nombreux outils et manque de méthode ? Une formation courte harmonise les pratiques sans immobiliser les professionnels plusieurs semaines.</p>

        ${encartFormationHtml({
          titre: 'Les essentiels du numérique',
          href: meta.formationHref,
          lignes: [
            '<strong>Durée :</strong> 14 heures en présentiel, sur deux journées.',
            '<strong>Lieu :</strong> 8 rue du Courant, 33310 Lormont.',
            `<strong>Tarif public inter :</strong> ${TARIF} par stagiaire.`,
            '<strong>Prochaine session :</strong> 28 et 29 octobre 2026.',
            '<strong>Public :</strong> professionnels de l\'insertion, travailleurs sociaux, conseillers, associations, organismes de formation.',
          ],
          disclaimer: FINANCEMENT_DISCLAIMER,
          tarifProfil: TARIF_SELON_PROFIL_COURT,
        })}

        <h2 id="faq">FAQ</h2>
        <h3>Faut-il être à l'aise avec l'informatique ?</h3>
        <p>Non. Le module part des usages déjà en place dans l'accompagnement et les rend plus sûrs et plus lisibles pour l'équipe.</p>
        <h3>Quelle est la prochaine session ?</h3>
        <p>28 et 29 octobre 2026, 14 heures, tarif public ${TARIF} par stagiaire. Une session intra reste possible sur étude.</p>
        <h3>Ce module prépare-t-il à l'usage de l'IA ?</h3>
        <p>Il sécurise d'abord l'environnement de travail. L'IA fait l'objet d'une formation distincte, une fois les bases numériques partagées.</p>

        ${maillageCaHtml(meta)}
`

export const essentielsNumeriqueAccompagnementFaqItems = [
  {
    question: 'Faut-il être à l\'aise avec l\'informatique ?',
    answer:
      'Non. Le module part des usages déjà en place dans l\'accompagnement et les rend plus sûrs et plus lisibles pour l\'équipe.',
  },
  {
    question: 'Quelle est la prochaine session ?',
    answer: `28 et 29 octobre 2026, 14 heures en présentiel, tarif public ${TARIF} par stagiaire. Une session intra reste possible sur étude. ${TARIF_SELON_PROFIL_COURT} ${FINANCEMENT_DISCLAIMER}`,
  },
  {
    question: 'Ce module prépare-t-il à l\'usage de l\'IA ?',
    answer:
      'Il sécurise d\'abord l\'environnement de travail. L\'IA fait l\'objet d\'une formation distincte.',
  },
]
