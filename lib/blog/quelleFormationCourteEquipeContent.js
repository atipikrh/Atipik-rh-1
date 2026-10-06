/**
 * Article du 29 octobre 2026 — choisir une formation courte pour une équipe.
 */

import { FINANCEMENT_DISCLAIMER, TARIF_SELON_PROFIL_COURT, formatTarifPublic } from '../tarifs/tarifsCopy.js'
import { articleCaBySlug } from '../seo/campagnesCaOctobre2026.js'
import { maillageCaHtml } from './maillageCaHtml.js'

const meta = articleCaBySlug('quelle-formation-courte-choisir-equipe')
const TARIF_BAS = formatTarifPublic(715)
const TARIF_HAUT = formatTarifPublic(1365)

export const quelleFormationCourteEquipeContent = `
        <p>Une <strong>formation courte pour une équipe</strong> répond à un besoin précis, sans attendre un parcours long. Le bon module n'est pas le plus connu. C'est celui qui colle à la situation : employeurs à relancer, recrutements fragiles, outils éparpillés, IA à encadrer.</p>
        <p>ATIPIK RH, organisme certifié Qualiopi à Lormont, regroupe sept thématiques. Les durées vont de 11 à 21 heures. Les tarifs publics inter vont de ${TARIF_BAS} à ${TARIF_HAUT} par stagiaire. L'intra se chiffre toujours sur étude.</p>

        <nav class="not-prose my-8 p-6 bg-gray-50 border border-gray-200 rounded-lg" aria-label="Table des matières">
          <p class="font-semibold text-[#013F63] mb-3">Table des matières</p>
          <ol class="list-decimal list-inside space-y-1 text-sm">
            <li><a href="#tableau" class="text-[#013F63] hover:underline">Quel besoin, quelle formation</a></li>
            <li><a href="#au-dela" class="text-[#013F63] hover:underline">Au-delà d'un module isolé</a></li>
            <li><a href="#faq" class="text-[#013F63] hover:underline">FAQ</a></li>
          </ol>
        </nav>

        <h2 id="tableau">Quel besoin, quelle formation</h2>
        <div class="not-prose overflow-x-auto my-6">
          <table class="w-full text-sm border border-gray-200">
            <thead class="bg-gray-50 text-[#013F63]">
              <tr>
                <th class="text-left p-3 border-b">Besoin de l'équipe</th>
                <th class="text-left p-3 border-b">Formation à étudier</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border-b">Développer les liens avec les employeurs</td>
                <td class="p-3 border-b"><a href="/formations/professionnalisantes/developper-relation-entreprise">Développer la relation entreprise</a></td>
              </tr>
              <tr>
                <td class="p-3 border-b">Structurer les partenariats</td>
                <td class="p-3 border-b"><a href="/formations/professionnalisantes/renforcer-relation-entreprise">Renforcer le partenariat avec les entreprises</a></td>
              </tr>
              <tr>
                <td class="p-3 border-b">Mieux recruter des candidats en insertion</td>
                <td class="p-3 border-b"><a href="/formations/professionnalisantes/recruter-insertion-entreprises">Recruter en insertion avec les entreprises</a></td>
              </tr>
              <tr>
                <td class="p-3 border-b">Prévenir les discriminations</td>
                <td class="p-3 border-b"><a href="/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif">Prévenir les discriminations dans le recrutement</a></td>
              </tr>
              <tr>
                <td class="p-3 border-b">Harmoniser les pratiques RH</td>
                <td class="p-3 border-b"><a href="/formations/professionnalisantes/renforcer-pratique-recrutement-diversite">Renforcer ses pratiques de recrutement</a></td>
              </tr>
              <tr>
                <td class="p-3 border-b">Mieux utiliser les outils numériques</td>
                <td class="p-3 border-b"><a href="/formations/professionnalisantes/essentiels-du-numerique">Les essentiels du numérique</a></td>
              </tr>
              <tr>
                <td class="p-3">Découvrir les usages responsables de l'IA</td>
                <td class="p-3"><a href="/formations/professionnalisantes/intelligence-artificielle-accompagnement">L'IA au service de l'accompagnement</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Pour situer ces modules dans une démarche déjà engagée sur les entretiens, lire aussi <a href="${meta.relatedHref}">${meta.relatedLabel}</a>.</p>

        <h2 id="au-dela">Au-delà d'un module isolé</h2>
        <p>Le rendez-vous ne sert pas à vendre une fiche au hasard. Il peut aboutir à :</p>
        <ul>
          <li>un diagnostic des besoins de l'équipe ;</li>
          <li>un parcours de deux modules ;</li>
          <li>une session intra ;</li>
          <li>une adaptation aux situations que l'équipe rencontre vraiment ;</li>
          <li>un plan d'action après la formation.</li>
        </ul>
        <p>Les tarifs intra restent sur étude personnalisée. ${TARIF_SELON_PROFIL_COURT}</p>
        <p>${FINANCEMENT_DISCLAIMER}</p>
        <p>Vous ne savez pas quelle formation correspond au besoin de votre équipe ? Échangez avec ATIPIK RH pour identifier le format le plus pertinent. Le catalogue complet est sur la page <a href="${meta.formationHref}"><strong>${meta.formationLabel}</strong></a>.</p>

        <h2 id="faq">FAQ</h2>
        <h3>Quelle fourchette de prix pour l'inter ?</h3>
        <p>De ${TARIF_BAS} à ${TARIF_HAUT} TTC par stagiaire selon le module, pour des durées de 11, 14 ou 21 heures.</p>
        <h3>Peut-on mixer deux sujets ?</h3>
        <p>Oui. Un parcours de deux modules se construit après l'étude de besoin, par exemple relation entreprise puis recrutement en insertion.</p>
        <h3>Le devis intra est-il immédiat ?</h3>
        <p>Il suit l'échange : effectif, lieu, objectifs, contraintes de calendrier. Aucun tarif intra n'est affiché à l'avance.</p>

        ${maillageCaHtml(meta)}
`

export const quelleFormationCourteEquipeFaqItems = [
  {
    question: 'Quelle fourchette de prix pour l\'inter ?',
    answer: `De ${TARIF_BAS} à ${TARIF_HAUT} TTC par stagiaire selon le module, pour des durées de 11, 14 ou 21 heures. ${FINANCEMENT_DISCLAIMER}`,
  },
  {
    question: 'Peut-on mixer deux sujets ?',
    answer:
      'Oui. Un parcours de deux modules se construit après l\'étude de besoin, par exemple relation entreprise puis recrutement en insertion.',
  },
  {
    question: 'Le devis intra est-il immédiat ?',
    answer:
      'Il suit l\'échange : effectif, lieu, objectifs, contraintes de calendrier. Aucun tarif intra n\'est affiché à l\'avance.',
  },
]
