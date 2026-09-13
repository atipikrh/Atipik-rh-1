/**
 * Corps HTML de l'article blog — CIP ou FPA : quelle certification choisir.
 * Publication cible : 29 septembre 2026.
 */

import { FINANCEMENT_DISCLAIMER, TARIF_SELON_PROFIL_COMPLET, formatTarifPublic } from '../tarifs/tarifsCopy'

const TARIF_PUBLIC_CIP = formatTarifPublic(9100)
const TARIF_PUBLIC_FPA = formatTarifPublic(8950)

export const formationCipOuFpaQuelleCertificationChoisirContent = `
        <p>CIP et FPA sont deux métiers de l'accompagnement, mais ils ne répondent pas au même besoin. Le <strong>CIP</strong> accompagne principalement les personnes vers l'emploi et travaille avec les entreprises. Le <strong>FPA</strong> conçoit, anime et évalue des actions de formation pour adultes.</p>
        <p>Le bon choix dépend moins du niveau d'études que du type d'impact professionnel recherché. Cet article compare les deux parcours pour aider les professionnels de l'insertion, les formateurs, les responsables de structure et les personnes en reconversion à choisir la <strong>formation CIP ou FPA</strong> adaptée.</p>

        <nav class="not-prose my-8 p-6 bg-gray-50 border border-gray-200 rounded-lg" aria-label="Table des matières">
          <p class="font-semibold text-[#013F63] mb-3">Table des matières</p>
          <ol class="list-decimal list-inside space-y-1 text-sm">
            <li><a href="#tableau-comparatif" class="text-[#013F63] hover:underline">CIP ou FPA : le comparatif</a></li>
            <li><a href="#parcours-cip" class="text-[#013F63] hover:underline">Le parcours CIP chez ATIPIK RH</a></li>
            <li><a href="#parcours-fpa" class="text-[#013F63] hover:underline">Le parcours FPA chez ATIPIK RH</a></li>
            <li><a href="#pedagogie-au-plus-pres-du-reel" class="text-[#013F63] hover:underline">Pourquoi la pédagogie « Au plus près du réel » fait la différence</a></li>
            <li><a href="#tarifs-financement" class="text-[#013F63] hover:underline">Tarifs et financement</a></li>
            <li><a href="#faq" class="text-[#013F63] hover:underline">Questions fréquentes</a></li>
          </ol>
        </nav>

        <h2 id="tableau-comparatif">CIP ou FPA : le comparatif</h2>
        <p>Les deux titres professionnels sont de <strong>niveau 5</strong>. Ils se distinguent par la mission, le public accompagné et le rapport aux entreprises. Le tableau ci-dessous pose les critères de décision.</p>

        <div class="overflow-x-auto my-6 not-prose">
          <table class="min-w-full border border-gray-200 text-sm text-left">
            <thead>
              <tr class="bg-[#013F63] text-white">
                <th class="px-4 py-3 border border-gray-200 font-semibold">Question</th>
                <th class="px-4 py-3 border border-gray-200 font-semibold">Parcours CIP</th>
                <th class="px-4 py-3 border border-gray-200 font-semibold">Parcours FPA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-3 border border-gray-200 font-medium">Mission principale</td>
                <td class="px-4 py-3 border border-gray-200">Accompagner vers l'emploi</td>
                <td class="px-4 py-3 border border-gray-200">Concevoir et animer des formations</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 border border-gray-200 font-medium">Publics</td>
                <td class="px-4 py-3 border border-gray-200">Demandeurs d'emploi, salariés, personnes en reconversion</td>
                <td class="px-4 py-3 border border-gray-200">Adultes en formation, salariés, personnes en insertion</td>
              </tr>
              <tr>
                <td class="px-4 py-3 border border-gray-200 font-medium">Relation entreprise</td>
                <td class="px-4 py-3 border border-gray-200">Forte, notamment dans le CCP3</td>
                <td class="px-4 py-3 border border-gray-200">Présente dans les besoins de formation et les partenariats</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 border border-gray-200 font-medium">Certification</td>
                <td class="px-4 py-3 border border-gray-200">Titre professionnel niveau 5, <a href="https://www.francecompetences.fr/recherche/rncp/37274/" target="_blank" rel="noopener noreferrer" class="text-[#013F63] underline">RNCP37274</a></td>
                <td class="px-4 py-3 border border-gray-200">Titre professionnel niveau 5, <a href="https://www.francecompetences.fr/recherche/rncp/37275/" target="_blank" rel="noopener noreferrer" class="text-[#013F63] underline">RNCP37275</a></td>
              </tr>
              <tr>
                <td class="px-4 py-3 border border-gray-200 font-medium">Débouchés</td>
                <td class="px-4 py-3 border border-gray-200">CIP, conseiller emploi-formation, chargé de relation entreprise</td>
                <td class="px-4 py-3 border border-gray-200">Formateur, concepteur pédagogique, coordinateur, responsable formation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>En synthèse : choisissez le <strong>conseiller en insertion professionnelle</strong> si votre impact cible est l'accès à l'emploi et le lien avec les employeurs. Choisissez le <strong>formateur professionnel d'adultes</strong> si votre impact cible est la conception, l'animation et l'évaluation de formations.</p>

        <h2 id="parcours-cip">Le parcours CIP chez ATIPIK RH</h2>
        <p>La <a href="/formations/cip"><strong>formation CIP Bordeaux</strong></a> proposée par ATIPIK RH se déroule à <strong>Lormont</strong>, en présentiel, sur <strong>huit mois</strong> et <strong>948 heures</strong>. La prochaine session est prévue du <strong>21 septembre 2026 au 23 avril 2027</strong>.</p>
        <p>Le conseiller en insertion professionnelle accueille, diagnostique et accompagne des parcours vers l'emploi. Le troisième bloc (CCP3) développe une offre de services auprès des employeurs : prospection, recrutement inclusif, appui à l'intégration.</p>
        <p>Pour le détail du titre, des blocs de compétences et des modalités de candidature, consultez l'article <a href="/blog/formation-cip-bordeaux-session-septembre-2026"><strong>Formation CIP Bordeaux, session septembre 2026</strong></a> et la page <a href="/blog/formation-cip-bordeaux-conseiller-insertion-professionnelle"><strong>Devenir conseiller en insertion professionnelle à Bordeaux</strong></a>.</p>

        <h2 id="parcours-fpa">Le parcours FPA chez ATIPIK RH</h2>
        <p>La <a href="/formations/fpa"><strong>formation FPA Bordeaux</strong></a> prépare aux quatre blocs de compétences : concevoir, animer et évaluer, accompagner les apprenants, puis inscrire sa pratique dans une démarche qualité et de responsabilité sociale. Le parcours est annoncé sur <strong>sept mois</strong> et <strong>934 heures</strong>, avec une prochaine session en <strong>avril 2027</strong>.</p>
        <p>Le formateur professionnel d'adultes conçoit des séquences, anime des groupes, évalue les acquis et accompagne les apprenants. La relation entreprise existe, mais elle passe surtout par l'analyse des besoins de formation et les partenariats pédagogiques.</p>
        <p>Pour le programme, les débouchés et le financement, lisez aussi <a href="/blog/formation-fpa-bordeaux-formateur-professionnel-adultes"><strong>Devenir formateur professionnel d'adultes à Bordeaux</strong></a>.</p>

        <h2 id="pedagogie-au-plus-pres-du-reel">Pourquoi la pédagogie « Au plus près du réel » fait la différence</h2>
        <p>Chez ATIPIK RH, les parcours CIP et FPA partagent la même pédagogie : <strong>Au plus près du réel</strong>. L'objectif n'est pas d'empiler des apports magistraux, mais d'entraîner les gestes professionnels dès la formation.</p>
        <ul>
          <li><strong>Mises en situation</strong> : entretiens, animations, analyses de pratiques, au plus près des situations de terrain.</li>
          <li><strong>Projets collaboratifs</strong> : travail en équipe sur des cas issus des structures de l'emploi, de l'insertion et de la formation du territoire.</li>
          <li><strong>Interventions de professionnels</strong> : rencontres régulières avec des acteurs du secteur pour construire un réseau dès le parcours.</li>
          <li><strong>Petits groupes</strong> : un suivi individualisé, des échanges de pratiques et une progression lisible pour chaque stagiaire.</li>
          <li><strong>Ancrage territorial à Lormont</strong> : centre situé 8 rue du Courant, 33310 Lormont, sur la rive droite de Bordeaux Métropole.</li>
        </ul>
        <p>Cette différenciation est commune aux deux certifications. Le choix du titre reste un choix de métier, pas un choix de niveau.</p>

        <h2 id="tarifs-financement">Tarifs et financement</h2>
        <ul>
          <li><strong>Tarif public CIP :</strong> ${TARIF_PUBLIC_CIP}.</li>
          <li><strong>Tarif public FPA :</strong> ${TARIF_PUBLIC_FPA}.</li>
        </ul>
        <p>${TARIF_SELON_PROFIL_COMPLET}</p>
        <p><em>${FINANCEMENT_DISCLAIMER}</em></p>
        <p>Les deux titres peuvent être financés selon le profil. Le détail des dispositifs est présenté sur la page <a href="/financement"><strong>Financement</strong></a>.</p>

        <h2>Vous hésitez entre CIP et FPA ?</h2>
        <p>Participez à une <strong>réunion d'information ATIPIK RH</strong> pour comparer les parcours, les débouchés et les modalités d'admission. L'équipe vous aide à relier votre projet — reconversion, montée en compétences ou professionnalisation d'équipe — à la certification la plus cohérente.</p>

        <div style="margin: 2rem 0; text-align: center;">
          <a href="/s-inscrire" style="display: inline-block; padding: 14px 28px; background-color: #013F63; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.05rem;">
            Participer à une réunion d'information
          </a>
        </div>
        <p class="text-center text-sm">Vous pouvez aussi <a href="/contact">contacter ATIPIK RH</a> pour une étude personnalisée.</p>

        <h2 id="faq">Questions fréquentes</h2>

        <h3>Quelle différence entre un CIP et un FPA ?</h3>
        <p>Le CIP accompagne des personnes vers l'emploi et développe une relation forte avec les entreprises. Le FPA conçoit, anime et évalue des actions de formation pour adultes. Les deux métiers relèvent de l'accompagnement, mais pas du même besoin : insertion professionnelle d'un côté, ingénierie et animation pédagogique de l'autre.</p>

        <h3>Peut-on suivre les deux parcours ?</h3>
        <p>Oui, les deux titres sont complémentaires. Ils se suivent en général l'un après l'autre : ATIPIK RH ne propose pas un double cursus simultané. Un professionnel déjà certifié peut viser le second titre selon son projet. Si vous justifiez d'une expérience significative, une <a href="/vae">VAE</a> peut aussi être étudiée. La réunion d'information permet d'arbitrer l'ordre, le calendrier et le financement.</p>

        <h3>Quels sont les débouchés après une formation CIP ou FPA ?</h3>
        <p>Après un CIP : conseiller en insertion professionnelle, conseiller emploi-formation, chargé de relation entreprise, dans des structures d'insertion, France Travail, missions locales, IAE, collectivités. Après un FPA : formateur, concepteur pédagogique, coordinateur ou responsable formation, en organisme de formation, en entreprise ou en structure d'insertion.</p>

        <h3>Comment financer une formation CIP ou FPA à Lormont ?</h3>
        <p>Selon votre situation, CPF, AIF France Travail, Transition Pro, OPCO ou plan de développement des compétences de l'employeur. ${FINANCEMENT_DISCLAIMER}</p>

        <h3>Où se déroulent les formations CIP et FPA chez ATIPIK RH ?</h3>
        <p>Les deux formations se déroulent au centre ATIPIK RH, 8 rue du Courant, 33310 Lormont, sur la rive droite de Bordeaux Métropole, en présentiel. Les modalités précises de chaque session sont présentées en réunion d'information et sur les fiches <a href="/formations/cip">CIP</a> et <a href="/formations/fpa">FPA</a>.</p>
`;

export const formationCipOuFpaQuelleCertificationChoisirFaqItems = [
  {
    question: 'Quelle différence entre un CIP et un FPA ?',
    answer:
      "Le CIP accompagne des personnes vers l'emploi et développe une relation forte avec les entreprises. Le FPA conçoit, anime et évalue des actions de formation pour adultes. Les deux métiers relèvent de l'accompagnement, mais pas du même besoin : insertion professionnelle d'un côté, ingénierie et animation pédagogique de l'autre.",
  },
  {
    question: 'Peut-on suivre les deux parcours ?',
    answer:
      "Oui, les deux titres sont complémentaires. Ils se suivent en général l'un après l'autre : ATIPIK RH ne propose pas un double cursus simultané. Un professionnel déjà certifié peut viser le second titre selon son projet. Si vous justifiez d'une expérience significative, une VAE peut aussi être étudiée. La réunion d'information permet d'arbitrer l'ordre, le calendrier et le financement.",
  },
  {
    question: 'Quels sont les débouchés après une formation CIP ou FPA ?',
    answer:
      "Après un CIP : conseiller en insertion professionnelle, conseiller emploi-formation, chargé de relation entreprise. Après un FPA : formateur, concepteur pédagogique, coordinateur ou responsable formation.",
  },
  {
    question: 'Comment financer une formation CIP ou FPA à Lormont ?',
    answer: `Selon votre situation, CPF, AIF France Travail, Transition Pro, OPCO ou plan de développement des compétences de l'employeur. ${FINANCEMENT_DISCLAIMER}`,
  },
  {
    question: 'Où se déroulent les formations CIP et FPA chez ATIPIK RH ?',
    answer:
      "Les deux formations se déroulent au centre ATIPIK RH, 8 rue du Courant, 33310 Lormont, sur la rive droite de Bordeaux Métropole, en présentiel. Les modalités précises de chaque session sont présentées en réunion d'information.",
  },
]

export const formationCipOuFpaQuelleCertificationChoisirInternalLinks = [
  { label: 'Formation CIP', href: '/formations/cip', type: 'formation' },
  { label: 'Formation FPA', href: '/formations/fpa', type: 'formation' },
  { label: "Réunion d'information", href: '/s-inscrire', type: 'contact' },
  { label: 'Financement', href: '/financement', type: 'financement' },
  { label: 'Page contact', href: '/contact', type: 'contact' },
  {
    label: 'Formation CIP Bordeaux, session septembre 2026',
    href: '/blog/formation-cip-bordeaux-session-septembre-2026',
    type: 'article',
  },
  {
    label: 'Devenir conseiller en insertion professionnelle à Bordeaux',
    href: '/blog/formation-cip-bordeaux-conseiller-insertion-professionnelle',
    type: 'article',
  },
  {
    label: 'Devenir formateur professionnel d’adultes à Bordeaux',
    href: '/blog/formation-fpa-bordeaux-formateur-professionnel-adultes',
    type: 'article',
  },
]

export const formationCipOuFpaQuelleCertificationChoisirSecondaryKeywords = [
  'formation CIP Bordeaux',
  'formation FPA Bordeaux',
  'conseiller en insertion professionnelle',
  'formateur professionnel d’adultes',
  'certification niveau 5',
]
