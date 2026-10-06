/**
 * Article du 15 octobre 2026 — diversité, obligation et plan d'action.
 */

import { FINANCEMENT_DISCLAIMER, TARIF_SELON_PROFIL_COURT, formatTarifPublic } from '../tarifs/tarifsCopy.js'
import { articleCaBySlug } from '../seo/campagnesCaOctobre2026.js'
import { maillageCaHtml } from './maillageCaHtml.js'
import { encartFormationHtml } from './encartFormationHtml.js'

const meta = articleCaBySlug('former-recruteurs-diversite-plan-action')
const TARIF_METHODE = formatTarifPublic(715)
const TARIF_OBLIGATION = formatTarifPublic(990)

export const formerRecruteursDiversiteContent = `
        <p>Former ses recruteurs à la diversité répond à deux questions distinctes. La première est juridique : sécuriser les pratiques au regard de la non-discrimination. La seconde est opérationnelle : faire travailler l'équipe avec les mêmes critères, les mêmes annonces et un plan d'action qu'on peut suivre.</p>
        <p>Les mélanger produit de la confusion. L'obligation ne se coche pas avec une charte affichée. La méthode ne se résume pas à un rappel du Code du travail. Le cadre légal est développé dans <a href="${meta.relatedHref}">${meta.relatedLabel}</a>.</p>

        <nav class="not-prose my-8 p-6 bg-gray-50 border border-gray-200 rounded-lg" aria-label="Table des matières">
          <p class="font-semibold text-[#013F63] mb-3">Table des matières</p>
          <ol class="list-decimal list-inside space-y-1 text-sm">
            <li><a href="#deux-modules" class="text-[#013F63] hover:underline">Obligation et méthode</a></li>
            <li><a href="#promesse" class="text-[#013F63] hover:underline">Ce qu'une équipe en retire</a></li>
            <li><a href="#formation" class="text-[#013F63] hover:underline">Le module plan d'action</a></li>
            <li><a href="#faq" class="text-[#013F63] hover:underline">FAQ</a></li>
          </ol>
        </nav>

        <h2 id="deux-modules">Obligation et méthode</h2>
        <p>La formation <a href="/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif"><strong>Prévenir les discriminations dans le recrutement</strong></a> est celle que la fiche présente comme formation obligatoire. Elle dure 11 heures. Tarif public : ${TARIF_OBLIGATION} par stagiaire. Elle traite le cadre, les biais et la traçabilité de la décision.</p>
        <p>La formation <a href="${meta.formationHref}"><strong>Renforcer ses pratiques de recrutement</strong></a> prend le relais côté équipe : inclusion, diversité, charte de bonnes pratiques et plan d'action transférable. Elle ne remplace pas le module obligatoire. Elle le rend utilisable au quotidien. Durée : 11 heures. Tarif public : ${TARIF_METHODE} par stagiaire.</p>

        <h2 id="promesse">Ce qu'une équipe en retire</h2>
        <ul>
          <li>harmoniser les pratiques entre recruteurs et managers ;</li>
          <li>objectiver les critères liés au poste ;</li>
          <li>réduire les biais de décision ;</li>
          <li>améliorer les annonces ;</li>
          <li>sécuriser les entretiens avec une trame commune ;</li>
          <li>construire un plan d'action mesurable.</li>
        </ul>
        <p>Vous souhaitez faire évoluer les pratiques de recrutement de votre équipe ? Un échange avec ATIPIK RH permet d'étudier un format inter ou intra.</p>

        ${encartFormationHtml({
          titre: 'Renforcer ses pratiques de recrutement',
          href: meta.formationHref,
          lignes: [
            '<strong>Contenu :</strong> autodiagnostic, inclusion, insertion, diversité, charte de bonnes pratiques, plan d\'action.',
            '<strong>Durée :</strong> 11 heures en mixed learning.',
            `<strong>Tarif public inter :</strong> ${TARIF_METHODE} par stagiaire.`,
            '<strong>Public :</strong> entreprises, RH, managers, recruteurs, responsables de structures.',
          ],
          disclaimer: FINANCEMENT_DISCLAIMER,
          tarifProfil: TARIF_SELON_PROFIL_COURT,
        })}

        <h2 id="faq">FAQ</h2>
        <h3>Le module à 715 € est-il la formation obligatoire ?</h3>
        <p>Non. L'obligation de non-discrimination correspond au module Prévenir les discriminations dans le recrutement (${TARIF_OBLIGATION}, 11 heures). Renforcer ses pratiques de recrutement (${TARIF_METHODE}) sert la méthode, la charte et le plan d'action.</p>
        <h3>Peut-on enchaîner les deux ?</h3>
        <p>Oui. Beaucoup d'équipes commencent par le cadre obligatoire, puis construisent le plan d'action. Le devis intra peut regrouper les deux temps.</p>
        <h3>Que mesure-t-on après la formation ?</h3>
        <p>Des critères écrits, une trame d'entretien partagée, des annonces revues et un plan daté. Pas une déclaration d'intention.</p>

        ${maillageCaHtml(meta)}
`

export const formerRecruteursDiversiteFaqItems = [
  {
    question: 'Le module à 715 € est-il la formation obligatoire ?',
    answer: `Non. L'obligation de non-discrimination correspond au module Prévenir les discriminations dans le recrutement (${TARIF_OBLIGATION}, 11 heures). Renforcer ses pratiques de recrutement (${TARIF_METHODE}) sert la méthode, la charte et le plan d'action.`,
  },
  {
    question: 'Peut-on enchaîner les deux ?',
    answer:
      'Oui. Beaucoup d\'équipes commencent par le cadre obligatoire, puis construisent le plan d\'action. Le devis intra peut regrouper les deux temps.',
  },
  {
    question: 'Que mesure-t-on après la formation ?',
    answer:
      'Des critères écrits, une trame d\'entretien partagée, des annonces revues et un plan daté.',
  },
]
