/**
 * Article du 7 octobre 2026 — recrutement en insertion.
 */

import { FINANCEMENT_DISCLAIMER, TARIF_SELON_PROFIL_COURT, formatTarifPublic } from '../tarifs/tarifsCopy.js'
import { articleCaBySlug } from '../seo/campagnesCaOctobre2026.js'
import { maillageCaHtml } from './maillageCaHtml.js'
import { encartFormationHtml } from './encartFormationHtml.js'

const meta = articleCaBySlug('recruter-en-insertion-parcours-entreprise-candidat')
const TARIF = formatTarifPublic(1365)

export const recruterEnInsertionParcoursContent = `
        <p>Les difficultés de <strong>recrutement en insertion</strong> ne viennent pas toujours du manque de candidats. Un besoin mal posé, une annonce trop générale ou un entretien qui n'observe pas les compétences produisent des embauches fragiles, puis des ruptures dans les premières semaines.</p>
        <p>Un parcours qui tient réunit trois parties : l'entreprise, le candidat et le prescripteur. Chacun doit pouvoir dire ce qui est attendu, ce qui sera accompagné, et comment on saura que la prise de poste avance.</p>

        <nav class="not-prose my-8 p-6 bg-gray-50 border border-gray-200 rounded-lg" aria-label="Table des matières">
          <p class="font-semibold text-[#013F63] mb-3">Table des matières</p>
          <ol class="list-decimal list-inside space-y-1 text-sm">
            <li><a href="#ou-ca-casse" class="text-[#013F63] hover:underline">Où le parcours casse</a></li>
            <li><a href="#methode" class="text-[#013F63] hover:underline">Ce que l'entreprise et le candidat doivent voir</a></li>
            <li><a href="#formation" class="text-[#013F63] hover:underline">La formation ATIPIK RH</a></li>
            <li><a href="#faq" class="text-[#013F63] hover:underline">FAQ</a></li>
          </ol>
        </nav>

        <h2 id="ou-ca-casse">Où le parcours casse</h2>
        <p>Cinq points reviennent dans les recrutements qui ne tiennent pas.</p>
        <ul>
          <li><strong>Un besoin mal défini.</strong> Le poste est décrit par un intitulé, pas par les tâches des 90 premiers jours.</li>
          <li><strong>Une annonce trop générale.</strong> Elle attire des candidatures incomparables et décourage celles qui auraient les compétences utiles.</li>
          <li><strong>Un entretien qui n'observe pas.</strong> On discute du parcours, on ne met pas la personne en situation de montrer ce que le poste demande.</li>
          <li><strong>Une intégration trop courte.</strong> Le premier jour est prévu. Les semaines suivantes ne le sont pas.</li>
          <li><strong>Une coordination faible.</strong> L'entreprise, le candidat et le prescripteur n'ont pas le même langage ni les mêmes points de suivi.</li>
        </ul>
        <p>Objectiver les critères aide déjà. L'article <a href="${meta.relatedHref}">${meta.relatedLabel}</a> détaille cette étape. Ici, l'enjeu est le parcours complet, de la définition du besoin au suivi en poste.</p>

        <h2 id="methode">Ce que l'entreprise et le candidat doivent voir</h2>
        <p>Le recrutement par les compétences consiste à traduire le travail réel en critères observables. « Autonome » devient « signale un blocage avant la fin de la journée ». « Motivé » ne reste un critère que s'il correspond à un comportement du poste.</p>
        <p>L'entretien tripartite sert ensuite à aligner les trois parties : ce que l'entreprise attend, ce que le candidat peut faire dès maintenant, ce que le prescripteur accompagnera. L'intégration se prépare dans la même conversation : tuteur, objectifs à 30 jours, point de suivi.</p>
        <p>Vous souhaitez sécuriser vos recrutements en insertion ? ATIPIK RH peut étudier votre besoin et proposer une formation adaptée à vos équipes.</p>

        ${encartFormationHtml({
          titre: 'Recruter en insertion avec les entreprises',
          href: meta.formationHref,
          lignes: [
            '<strong>Contenu :</strong> processus de recrutement, recrutement par les compétences, parcours d\'intégration, entretiens tripartites, évaluation du parcours.',
            '<strong>Durée :</strong> 21 heures en mixed learning (14 h en présentiel sur deux journées, 7 h en distanciel synchrone), soit un parcours sur trois jours.',
            '<strong>Lieu :</strong> 8 rue du Courant, 33310 Lormont.',
            `<strong>Tarif public inter :</strong> ${TARIF} par stagiaire.`,
          ],
          disclaimer: FINANCEMENT_DISCLAIMER,
          tarifProfil: TARIF_SELON_PROFIL_COURT,
        })}

        <h2 id="faq">FAQ</h2>
        <h3>La formation dure-t-elle trois jours ou 21 heures ?</h3>
        <p>Les deux se correspondent. La fiche indique 21 heures : 14 heures en présentiel sur deux journées consécutives et 7 heures en distanciel synchrone. C'est le parcours en trois temps annoncé sur la page formation.</p>
        <h3>Le tarif intra est-il le même que le tarif inter ?</h3>
        <p>Non. Le tarif public inter est de ${TARIF} par stagiaire. Le tarif intra est établi après étude du contexte de votre équipe.</p>
        <h3>À qui s'adresse ce module ?</h3>
        <p>Aux entreprises, structures d'insertion, responsables RH et chargés de relation entreprise qui recrutent ou présentent des candidats en insertion.</p>

        ${maillageCaHtml(meta)}
`

export const recruterEnInsertionParcoursFaqItems = [
  {
    question: 'La formation dure-t-elle trois jours ou 21 heures ?',
    answer:
      'Les deux se correspondent. La fiche indique 21 heures : 14 heures en présentiel sur deux journées consécutives et 7 heures en distanciel synchrone.',
  },
  {
    question: 'Le tarif intra est-il le même que le tarif inter ?',
    answer: `Non. Le tarif public inter est de ${TARIF} par stagiaire. Le tarif intra est établi après étude du contexte de votre équipe. ${TARIF_SELON_PROFIL_COURT} ${FINANCEMENT_DISCLAIMER}`,
  },
  {
    question: 'À qui s\'adresse ce module ?',
    answer:
      'Aux entreprises, structures d\'insertion, responsables RH et chargés de relation entreprise qui recrutent ou présentent des candidats en insertion.',
  },
]
