/**
 * Article du 13 octobre 2026 — relation entreprise et partenariat.
 */

import { FINANCEMENT_DISCLAIMER, TARIF_SELON_PROFIL_COURT, formatTarifPublic } from '../tarifs/tarifsCopy.js'
import { articleCaBySlug } from '../seo/campagnesCaOctobre2026.js'
import { maillageCaHtml } from './maillageCaHtml.js'
import { encartFormationHtml } from './encartFormationHtml.js'

const meta = articleCaBySlug('relation-entreprise-insertion-partenariat-durable')
const TARIF = formatTarifPublic(1365)

export const relationEntreprisePartenariatContent = `
        <p>La <strong>relation entreprise en insertion</strong> reste souvent une suite de coups de fil. Le conseiller connaît des employeurs. Il ne sait pas toujours ce qu'ils recrutent vraiment, ni comment représenter un candidat par ses compétences. Le contact existe. Le partenariat, non.</p>
        <p>Moins de contacts dispersés, davantage d'accords lisibles : c'est ce qui sécurise les parcours et ouvre des postes répétables, pas seulement une mise en relation isolée.</p>

        <nav class="not-prose my-8 p-6 bg-gray-50 border border-gray-200 rounded-lg" aria-label="Table des matières">
          <p class="font-semibold text-[#013F63] mb-3">Table des matières</p>
          <ol class="list-decimal list-inside space-y-1 text-sm">
            <li><a href="#cinq-etapes" class="text-[#013F63] hover:underline">Cinq étapes</a></li>
            <li><a href="#formation" class="text-[#013F63] hover:underline">Deux modules complémentaires</a></li>
            <li><a href="#faq" class="text-[#013F63] hover:underline">FAQ</a></li>
          </ol>
        </nav>

        <h2 id="cinq-etapes">Cinq étapes</h2>
        <ol>
          <li><strong>Comprendre les besoins réels de l'entreprise.</strong> Tâches, contraintes d'équipe, ce qui a déjà fait échouer une embauche.</li>
          <li><strong>Présenter les candidats à partir de leurs compétences.</strong> Pas un CV relu à voix haute : des preuves reliées au poste.</li>
          <li><strong>Construire un langage commun.</strong> Le professionnel de l'insertion et l'employeur nomment la même chose quand ils disent « autonome » ou « disponible ».</li>
          <li><strong>Formaliser les engagements.</strong> Qui accueille, qui suit, à quelle échéance, avec quel retour.</li>
          <li><strong>Suivre l'intégration et entretenir la relation.</strong> Le partenariat se joue après la première embauche.</li>
        </ol>
        <p>La relation entreprise n'est pas une mission secondaire. Elle devient un outil de sécurisation des parcours quand elle est menée avec une méthode. Pour le versant recrutement déjà en tension, voir <a href="${meta.relatedHref}">${meta.relatedLabel}</a>.</p>

        <h2 id="modules">Deux modules complémentaires</h2>
        <p>ATIPIK RH propose deux formations courtes de 21 heures, chacune à ${TARIF} par stagiaire en tarif public inter. Le déroulé type est de trois jours : deux jours en présentiel et un jour en distanciel.</p>
        <ul>
          <li><a href="/formations/professionnalisantes/developper-relation-entreprise"><strong>Développer la relation entreprise en insertion professionnelle</strong></a> — de l'accompagnement à la relation employeur.</li>
          <li><a href="${meta.formationHref}"><strong>Renforcer le partenariat avec les entreprises</strong></a> — de la prospection à la valorisation de l'offre.</li>
        </ul>
        <p>${TARIF_SELON_PROFIL_COURT}</p>
        <p>${FINANCEMENT_DISCLAIMER}</p>
        <p>Le tarif intra est étudié pour l'équipe. Disponibilité des sessions inter : se rapprocher du centre pour le calendrier en cours.</p>

        ${encartFormationHtml({
          titre: 'Renforcer le partenariat avec les entreprises',
          href: meta.formationHref,
          lignes: [
            '<strong>Durée :</strong> 21 heures.',
            '<strong>Format :</strong> 2 jours en présentiel et 1 jour en distanciel.',
            `<strong>Tarif public inter :</strong> ${TARIF} par stagiaire.`,
            '<strong>Public :</strong> conseillers en insertion, chargés de relations entreprises, missions locales, associations, SIAE.',
          ],
          disclaimer: FINANCEMENT_DISCLAIMER,
          tarifProfil: TARIF_SELON_PROFIL_COURT,
        })}

        <h2 id="faq">FAQ</h2>
        <h3>Faut-il suivre les deux modules ?</h3>
        <p>Pas forcément. Développer la relation entreprise pose la posture et la prospection. Renforcer le partenariat structure l'offre et la coopération dans la durée. Un échange permet de choisir, ou de composer un parcours de deux modules.</p>
        <h3>Quel est le tarif ?</h3>
        <p>Chaque module est affiché ${TARIF} TTC par stagiaire en inter. L'intra est sur devis.</p>
        <h3>La relation entreprise concerne-t-elle seulement les SIAE ?</h3>
        <p>Non. Missions locales, associations et toute structure qui présente des personnes à des employeurs y gagnent une méthode commune.</p>

        ${maillageCaHtml(meta)}
`

export const relationEntreprisePartenariatFaqItems = [
  {
    question: 'Faut-il suivre les deux modules ?',
    answer:
      'Pas forcément. L\'un développe la relation entreprise, l\'autre renforce le partenariat. Un échange permet de choisir ou de composer les deux.',
  },
  {
    question: 'Quel est le tarif ?',
    answer: `Chaque module est affiché ${TARIF} TTC par stagiaire en inter, pour 21 heures. L'intra est sur devis. ${TARIF_SELON_PROFIL_COURT} ${FINANCEMENT_DISCLAIMER}`,
  },
  {
    question: 'La relation entreprise concerne-t-elle seulement les SIAE ?',
    answer:
      'Non. Missions locales, associations et toute structure qui présente des personnes à des employeurs y gagnent une méthode commune.',
  },
]
