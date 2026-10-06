/**
 * Article du 20 octobre 2026 — recruter par les compétences.
 */

import { FINANCEMENT_DISCLAIMER, TARIF_SELON_PROFIL_COURT, formatTarifPublic } from '../tarifs/tarifsCopy.js'
import { articleCaBySlug } from '../seo/campagnesCaOctobre2026.js'
import { maillageCaHtml } from './maillageCaHtml.js'
import { encartFormationHtml } from './encartFormationHtml.js'

const meta = articleCaBySlug('recruter-par-les-competences-securiser-embauches')
const TARIF_INSERTION = formatTarifPublic(1365)
const TARIF_PRATIQUES = formatTarifPublic(715)

export const recruterParCompetencesSecuriserContent = `
        <p><strong>Recruter par les compétences</strong>, c'est cesser de deviner si une personne « fera l'affaire ». On part du travail à faire, on observe des preuves, on prépare la prise de poste. La méthode sert les entreprises comme les structures d'insertion.</p>
        <p>Le contexte de pénurie est déjà traité dans <a href="${meta.relatedHref}">${meta.relatedLabel}</a>. Ici, le propos est opératoire : les gestes, dans l'ordre, puis l'offre de formation pour une équipe entière.</p>

        <nav class="not-prose my-8 p-6 bg-gray-50 border border-gray-200 rounded-lg" aria-label="Table des matières">
          <p class="font-semibold text-[#013F63] mb-3">Table des matières</p>
          <ol class="list-decimal list-inside space-y-1 text-sm">
            <li><a href="#etapes" class="text-[#013F63] hover:underline">La méthode, étape par étape</a></li>
            <li><a href="#offre" class="text-[#013F63] hover:underline">Deux modules, un parcours d'équipe</a></li>
            <li><a href="#formation" class="text-[#013F63] hover:underline">Le module à mettre en avant</a></li>
            <li><a href="#faq" class="text-[#013F63] hover:underline">FAQ</a></li>
          </ol>
        </nav>

        <h2 id="etapes">La méthode, étape par étape</h2>
        <ol>
          <li><strong>Partir des tâches réelles du poste.</strong> Ce qui sera fait dans les 90 premiers jours, pas le titre de la fiche.</li>
          <li><strong>Distinguer l'indispensable de l'acquérable.</strong> Ce qui doit être là le jour 1, et ce qui s'apprend avec un tuteur.</li>
          <li><strong>Créer des critères observables.</strong> Un verbe, une situation, un résultat visible.</li>
          <li><strong>Proposer une mise en situation.</strong> Courte, liée au poste, identique pour les candidats comparables.</li>
          <li><strong>Utiliser une grille d'entretien.</strong> Les mêmes questions, des notes factuelles, une décision discutée sur les scores.</li>
          <li><strong>Préparer l'intégration.</strong> Accueil, consignes, objectifs à 30 jours.</li>
          <li><strong>Suivre les premiers mois.</strong> Un point structuré vaut mieux qu'une impression de couloir.</li>
        </ol>

        <h2 id="offre">Deux modules, un parcours d'équipe</h2>
        <p>Deux formations courtes se complètent.</p>
        <ul>
          <li><a href="${meta.formationHref}"><strong>Recruter en insertion avec les entreprises</strong></a> — processus, intégration, entretiens tripartites. 21 heures. Tarif public : ${TARIF_INSERTION} par stagiaire.</li>
          <li><a href="/formations/professionnalisantes/renforcer-pratique-recrutement-diversite"><strong>Renforcer ses pratiques de recrutement</strong></a> — inclusion, charte, plan d'action. 11 heures. Tarif public : ${TARIF_PRATIQUES} par stagiaire.</li>
        </ul>
        <p>Vous souhaitez aligner plusieurs recruteurs ou managers sur une même méthode ? ATIPIK RH étudie un format intra adapté à votre organisation. Le tarif intra n'est pas le tarif inter : il se construit après diagnostic.</p>
        <p>${TARIF_SELON_PROFIL_COURT} ${FINANCEMENT_DISCLAIMER}</p>

        ${encartFormationHtml({
          titre: 'Recruter en insertion avec les entreprises',
          href: meta.formationHref,
          lignes: [
            '<strong>Contenu :</strong> processus de recrutement, intégration, entretiens tripartites.',
            '<strong>Durée :</strong> 21 heures en mixed learning.',
            `<strong>Tarif public inter :</strong> ${TARIF_INSERTION} par stagiaire.`,
          ],
          disclaimer: FINANCEMENT_DISCLAIMER,
          tarifProfil: TARIF_SELON_PROFIL_COURT,
        })}

        <h2 id="faq">FAQ</h2>
        <h3>Peut-on former toute l'équipe d'un coup ?</h3>
        <p>Oui, en intra. Le programme part des situations de votre organisation. Le devis précise la durée et le nombre de participants.</p>
        <h3>Quel module choisir si on ne peut en financer qu'un ?</h3>
        <p>Si le besoin est le recrutement de candidats en insertion et l'intégration, commencez par Recruter en insertion avec les entreprises (${TARIF_INSERTION}). Si le besoin est d'harmoniser les pratiques et la diversité, commencez par Renforcer ses pratiques (${TARIF_PRATIQUES}).</p>
        <h3>La grille remplace-t-elle le jugement du manager ?</h3>
        <p>Elle le rend comparable. Le manager décide toujours. Il décide à partir de faits notés, pas d'une impression isolée.</p>

        ${maillageCaHtml(meta)}
`

export const recruterParCompetencesSecuriserFaqItems = [
  {
    question: 'Peut-on former toute l\'équipe d\'un coup ?',
    answer:
      'Oui, en intra. Le programme part des situations de votre organisation. Le devis précise la durée et le nombre de participants.',
  },
  {
    question: 'Quel module choisir si on ne peut en financer qu\'un ?',
    answer: `Si le besoin est le recrutement de candidats en insertion, commencez par Recruter en insertion avec les entreprises (${TARIF_INSERTION}). Si le besoin est d'harmoniser les pratiques, commencez par Renforcer ses pratiques de recrutement (${TARIF_PRATIQUES}). ${FINANCEMENT_DISCLAIMER}`,
  },
  {
    question: 'La grille remplace-t-elle le jugement du manager ?',
    answer:
      'Elle le rend comparable. Le manager décide toujours, à partir de faits notés.',
  },
]
