/**
 * Corps des 15 articles CIP / formations courtes (nov. 2026 – janv. 2027).
 */

import { FINANCEMENT_DISCLAIMER, TARIF_SELON_PROFIL_COURT, TARIF_INTRA_TEXTE, formatTarifPublic } from '../tarifs/tarifsCopy.js'
import { ARTICLES_CIP_COURTES_NOV } from '../seo/articlesCipCourtesNov2026.js'
import { DATES_CIP, getUpcomingReunions } from '../reunions/dates.js'

const T715 = formatTarifPublic(715)
const T970 = formatTarifPublic(970)
const T990 = formatTarifPublic(990)
const T1090 = formatTarifPublic(1090)
const T1365 = formatTarifPublic(1365)
const T9100 = formatTarifPublic(9100)

function bySlug(slug) {
  return ARTICLES_CIP_COURTES_NOV.find((a) => a.slug === slug)
}

function suite(slug) {
  const a = bySlug(slug)
  const reunionLabel = a.slug.includes('cip') ? 'Réunion d\'information' : 'Catalogue des formations courtes'
  return `
        <h2 id="suite">Pour aller plus loin</h2>
        <ul>
          <li><a href="${a.formationHref}"><strong>${a.formationLabel}</strong></a></li>
          <li><a href="${a.contactHref}"><strong>${a.ctaLabel}</strong></a></li>
          <li><a href="${a.reunionHref}">${reunionLabel}</a></li>
          <li><a href="${a.relatedHref}">${a.relatedLabel}</a></li>
        </ul>
        <p>${FINANCEMENT_DISCLAIMER}</p>`
}

function datesReunionsCipTexte() {
  return getUpcomingReunions(DATES_CIP, 8)
    .map((d) => `${d.jour}, ${d.heure}, ${d.modalite}`)
    .join(' ; ')
}

function toc(items) {
  const lis = items.map((t, i) => `<li><a href="#s${i + 1}" class="text-[#013F63] hover:underline">${t}</a></li>`).join('')
  return `<nav class="not-prose my-8 p-6 bg-gray-50 border border-gray-200 rounded-lg" aria-label="Table des matières"><p class="font-semibold text-[#013F63] mb-3">Sommaire</p><ol class="list-decimal list-inside space-y-1 text-sm">${lis}</ol></nav>`
}

export const CONTENTS_NOV = {
  'formations-courtes-professionnalisantes-bordeaux-lormont': `
        <p>Vous accompagnez des personnes vers l'emploi ? Vous travaillez dans l'insertion, les ressources humaines ou le recrutement ? Vous souhaitez renforcer une pratique précise sans vous engager immédiatement dans une formation longue ?</p>
        <p>Les <strong>formations courtes professionnalisantes</strong> d'ATIPIK RH répondent à ces besoins. Proposées à Lormont, elles durent de 11 à 21 heures. Le catalogue comprend 7 formations indépendantes, en inter ou en intra. Le tarif public inter va de ${T715} à ${T1365} par stagiaire. Les tarifs intra sont étudiés sur demande (${TARIF_INTRA_TEXTE}).</p>
        ${toc(['Pourquoi une formation courte', 'Les 7 formations', 'Quelle formation selon le besoin', 'Publics', 'Modalités et financement', 'Prochaines dates', 'FAQ'])}
        <h2 id="s1">Pourquoi choisir une formation courte ?</h2>
        <p>Une formation courte traite un besoin opérationnel : harmoniser une équipe, prendre un nouveau poste, faire évoluer une méthode. Chez ATIPIK RH, elles privilégient les cas pratiques et un plan d'action transférable. Elles peuvent aider à contacter les entreprises, sécuriser un recrutement en insertion, prévenir les discriminations, recruter sur les compétences, organiser les outils numériques ou utiliser l'IA sans abandonner le jugement professionnel.</p>
        <h2 id="s2">Les 7 formations courtes d'ATIPIK RH</h2>
        <h3>1. Développer la relation entreprise en insertion professionnelle</h3>
        <p>21 heures (deux jours en présentiel, un jour en distanciel). Prérequis : expérience dans l'accompagnement social et/ou l'insertion. Tarif public inter : ${T1365} par stagiaire. <a href="/formations/professionnalisantes/developper-relation-entreprise">Fiche</a>.</p>
        <h3>2. Renforcer le partenariat avec les entreprises</h3>
        <p>21 heures, même format. Aucun prérequis spécifique indiqué sur la fiche. Tarif : ${T1365}. <a href="/formations/professionnalisantes/renforcer-relation-entreprise">Fiche</a>.</p>
        <h3>3. Recruter en insertion avec les entreprises</h3>
        <p>21 heures. Autodiagnostic, processus fondé sur les compétences, parcours d'intégration, entretien tripartite. Tarif : ${T1365}. <a href="/formations/professionnalisantes/recruter-insertion-entreprises">Fiche</a>.</p>
        <h3>4. Prévenir les discriminations dans le recrutement</h3>
        <p>Présentée comme formation obligatoire pour les personnes qui recrutent. 11 heures, mixed learning. Tarif : ${T990}. <a href="/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif">Fiche</a>.</p>
        <h3>5. Renforcer ses pratiques de recrutement</h3>
        <p>11 heures, 4 à 12 participants. Recruter sur ce que la personne sait faire. Tarif : ${T715}. <a href="/formations/professionnalisantes/renforcer-pratique-recrutement-diversite">Fiche</a>.</p>
        <h3>6. Les essentiels du numérique</h3>
        <p>14 heures en présentiel à Lormont. Tarif : ${T970}. <a href="/formations/professionnalisantes/essentiels-du-numerique">Fiche</a>.</p>
        <h3>7. L'intelligence artificielle au service de l'accompagnement</h3>
        <p>14 heures en présentiel. Usages et limites, prompts, confidentialité. Tarif : ${T1090}. <a href="/formations/professionnalisantes/intelligence-artificielle-accompagnement">Fiche</a>.</p>
        <h2 id="s3">Quelle formation choisir selon votre besoin ?</h2>
        <div class="not-prose overflow-x-auto my-6"><table class="w-full text-sm border border-gray-200">
          <thead class="bg-gray-50 text-[#013F63]"><tr><th class="p-3 text-left">Besoin</th><th class="p-3 text-left">Formation</th><th class="p-3 text-left">Durée</th><th class="p-3 text-left">Tarif inter</th></tr></thead>
          <tbody>
            <tr><td class="p-3 border-b">Contacter les entreprises</td><td class="p-3 border-b">Développer la relation entreprise</td><td class="p-3 border-b">21 h</td><td class="p-3 border-b">${T1365}</td></tr>
            <tr><td class="p-3 border-b">Structurer les partenariats</td><td class="p-3 border-b">Renforcer le partenariat</td><td class="p-3 border-b">21 h</td><td class="p-3 border-b">${T1365}</td></tr>
            <tr><td class="p-3 border-b">Recrutement en insertion</td><td class="p-3 border-b">Recruter en insertion</td><td class="p-3 border-b">21 h</td><td class="p-3 border-b">${T1365}</td></tr>
            <tr><td class="p-3 border-b">Non-discrimination</td><td class="p-3 border-b">Prévenir les discriminations</td><td class="p-3 border-b">11 h</td><td class="p-3 border-b">${T990}</td></tr>
            <tr><td class="p-3 border-b">Recruter sur les compétences</td><td class="p-3 border-b">Renforcer ses pratiques</td><td class="p-3 border-b">11 h</td><td class="p-3 border-b">${T715}</td></tr>
            <tr><td class="p-3 border-b">Outils du quotidien</td><td class="p-3 border-b">Essentiels du numérique</td><td class="p-3 border-b">14 h</td><td class="p-3 border-b">${T970}</td></tr>
            <tr><td class="p-3">IA dans l'accompagnement</td><td class="p-3">IA au service de l'accompagnement</td><td class="p-3">14 h</td><td class="p-3">${T1090}</td></tr>
          </tbody>
        </table></div>
        <p>Pour un choix déjà cadré côté équipe, voir aussi <a href="/blog/quelle-formation-courte-choisir-equipe">Quelle formation courte choisir pour son équipe</a>.</p>
        <h2 id="s4">Pour qui ?</h2>
        <p>Professionnels de l'insertion (CIP, missions locales, SIAE, associations) et professionnels RH ou managers qui recrutent. Les modules numérique et IA concernent aussi les accompagnants qui veulent des règles d'usage communes.</p>
        <h2 id="s5">Modalités, lieu et financement</h2>
        <p>Centre ATIPIK RH, 8 rue du Courant, 33310 Lormont. Groupes souvent de 4 à 12 participants. ${TARIF_SELON_PROFIL_COURT}</p>
        <h2 id="s6">Les prochaines dates affichées</h2>
        <p>Les dates peuvent évoluer. Au 20 novembre 2026, les fiches indiquent notamment : relation entreprise et partenariat, 7 et 8 décembre en présentiel puis 14 décembre à distance ; recruter en insertion, mêmes dates ; prévenir les discriminations, 3 décembre en présentiel et 10 décembre à distance ; renforcer les pratiques, session de décembre les 3 et 10 ; essentiels du numérique, 25-26 janvier et 7-8 février 2027 ; IA, 21-22 janvier, 28-29 janvier et 15-16 février 2027.</p>
        <h2 id="s7">FAQ</h2>
        <h3>Combien de temps durent les formations courtes ?</h3><p>De 11 à 21 heures selon le module.</p>
        <h3>Où se déroulent-elles ?</h3><p>Au 8 rue du Courant à Lormont. Certains modules associent présentiel et distanciel.</p>
        <h3>Donnent-elles un diplôme ?</h3><p>Une attestation de formation. Elles ne remplacent pas un titre certifiant comme le CIP ou le FPA.</p>
        <h3>Peut-on inscrire une équipe ?</h3><p>Oui, en intra, sur devis.</p>
        <h3>Quel est le prix ?</h3><p>De ${T715} à ${T1365} TTC par stagiaire en inter.</p>
        ${suite('formations-courtes-professionnalisantes-bordeaux-lormont')}
`,

  'reunion-information-formation-cip-lormont': `
        <p>Avant de déposer un dossier pour la <strong>formation CIP</strong>, une réunion d'information permet de vérifier le métier, le rythme (948 heures), le stage et les financements. Elle est gratuite et sans engagement.</p>
        ${toc(['À quoi sert la réunion', 'Prochaines dates', 'Présentiel ou distanciel', 'Après la réunion', 'FAQ'])}
        <h2 id="s1">À quoi sert la réunion</h2>
        <p>Vous y voyez le titre RNCP37274, la pédagogie « au plus près du réel », les conditions d'entrée (enquêtes métiers, test rédactionnel) et la session du 22 mars au 22 octobre 2027 à Lormont.</p>
        <h2 id="s2">Prochaines dates</h2>
        <p>Source : calendrier des réunions CIP (page d'inscription). Prochaines dates : ${datesReunionsCipTexte()}. Vérifiez le formulaire le jour de l'inscription.</p>
        <h2 id="s3">Présentiel ou distanciel</h2>
        <p>Le présentiel se tient au 8 rue du Courant, 33310 Lormont. Le distanciel permet de poser les mêmes questions sans se déplacer.</p>
        <h2 id="s4">Après la réunion</h2>
        <p>Consultez la <a href="/formations/cip">fiche CIP</a>, les <a href="/formations/cip/conditions-inscription">conditions d'inscription</a>, téléchargez le dossier, puis échangez au 07 83 01 99 55. Détail de la session : <a href="/blog/formation-cip-bordeaux-session-septembre-2026">session mars 2027</a>.</p>
        <h2 id="s5">FAQ</h2>
        <h3>La réunion engage-t-elle à s'inscrire ?</h3><p>Non.</p>
        <h3>Faut-il déjà avoir financé la formation ?</h3><p>Non. Le financement s'étudie ensuite, dossier par dossier.</p>
        ${suite('reunion-information-formation-cip-lormont')}
`,

  'financer-formation-cip-bordeaux-2027': `
        <p>Le tarif public de la formation CIP à Lormont est de <strong>${T9100}</strong> pour 948 heures (titre RNCP37274, session du 22 mars au 22 octobre 2027). ${TARIF_SELON_PROFIL_COURT}</p>
        ${toc(['Tarif public', 'CPF', 'AIF', 'Transition Pro et employeur', 'Ce qui n\'est pas automatique', 'FAQ'])}
        <h2 id="s1">Tarif public</h2>
        <p>Le montant affiché sur la fiche est ${T9100}. Il ne préjuge pas du reste à charge après un financeur.</p>
        <h2 id="s2">CPF</h2>
        <p>Le titre certifiant peut être étudié via le Compte personnel de formation, selon l'éligibilité et le solde. Les règles du CPF évoluent : un échange avec le centre évite une inscription trop tôt ou trop tard.</p>
        <h2 id="s3">AIF</h2>
        <p>Pour les demandeurs d'emploi, l'Aide individuelle à la formation dépend de l'accord de France Travail. ATIPIK RH peut aider au montage, pas décider à la place du financeur.</p>
        <h2 id="s4">Transition Pro et employeur</h2>
        <p>Certains salariés mobilisent Transitions Pro ou le plan de développement des compétences. Les indépendants se rapprochent de leur FAF.</p>
        <h2 id="s5">Ce qui n'est pas automatique</h2>
        <p>${FINANCEMENT_DISCLAIMER}</p>
        <p>Page <a href="/financement">financement</a> et <a href="/blog/formation-cip-bordeaux-session-septembre-2026">session mars 2027</a>.</p>
        <h2 id="s6">FAQ</h2>
        <h3>Le CPF couvre-t-il 9 100 € ?</h3><p>Pas nécessairement. Cela dépend des droits et des abondements possibles.</p>
        <h3>Un paiement échelonné existe-t-il ?</h3><p>Des modalités de paiement personnel peuvent être étudiées avec le centre.</p>
        ${suite('financer-formation-cip-bordeaux-2027')}
`,

  'session-prevenir-discriminations-recrutement-decembre-2026': `
        <p>La formation <a href="/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif">Prévenir les discriminations dans le recrutement</a> est indiquée comme formation obligatoire pour les personnes qui recrutent. Durée : 11 heures. Tarif public inter : ${T990} par stagiaire.</p>
        ${toc(['Session de décembre', 'Ce que couvre le module', 'Public', 'Intra', 'FAQ'])}
        <h2 id="s1">Session de décembre</h2>
        <p>La fiche affiche une session de décembre : <strong>3 décembre 2026</strong> en présentiel, puis <strong>10 décembre 2026</strong> le matin à distance. Une session de novembre (5 novembre et 26 novembre) peut déjà être close selon la date de lecture : confirmez auprès du centre.</p>
        <h2 id="s2">Ce que couvre le module</h2>
        <p>Cadre légal, biais, langage des annonces, critères liés au poste. Pour les erreurs de terrain, l'article <a href="/blog/recrutement-inclusif-7-erreurs-perdre-candidats">7 erreurs qui font perdre de bons candidats</a> reste le complément, sans le recopier ici.</p>
        <h2 id="s3">Public</h2>
        <p>Recruteurs, RH, managers, structures qui embauchent. Groupe souvent de 4 à 12.</p>
        <h2 id="s4">Intra</h2>
        <p>${TARIF_INTRA_TEXTE}</p>
        <h2 id="s5">FAQ</h2>
        <h3>Est-ce le module à 715 € ?</h3><p>Non. Le module obligatoire de non-discrimination est à ${T990}. Renforcer ses pratiques de recrutement est un autre module (${T715}).</p>
        ${suite('session-prevenir-discriminations-recrutement-decembre-2026')}
`,

  'session-developper-relation-entreprise-decembre-2026': `
        <p>La formation <a href="/formations/professionnalisantes/developper-relation-entreprise">Développer la relation entreprise en insertion professionnelle</a> dure 21 heures. Tarif public inter : ${T1365} par stagiaire.</p>
        ${toc(['Dates de décembre', 'Objectif', 'Prérequis', 'FAQ'])}
        <h2 id="s1">Dates de décembre</h2>
        <p>Session affichée : <strong>7 et 8 décembre 2026</strong> en présentiel, <strong>14 décembre 2026</strong> à distance, à Lormont.</p>
        <h2 id="s2">Objectif</h2>
        <p>Contacter les entreprises pour proposer des candidats, décoder les attentes employeurs, prospecter. La méthode de partenariat dans la durée est traitée dans <a href="/blog/relation-entreprise-insertion-partenariat-durable">l'article partenariat</a>.</p>
        <h2 id="s3">Prérequis</h2>
        <p>Expérience dans l'accompagnement social et/ou l'insertion professionnelle, selon la fiche.</p>
        <h2 id="s4">FAQ</h2>
        <h3>Peut-on l'enchaîner avec « renforcer le partenariat » ?</h3><p>Oui, après étude de besoin. Les deux modules partagent souvent le même calendrier de décembre.</p>
        ${suite('session-developper-relation-entreprise-decembre-2026')}
`,

  'session-renforcer-pratiques-recrutement-decembre-2026': `
        <p><a href="/formations/professionnalisantes/renforcer-pratique-recrutement-diversite">Renforcer ses pratiques de recrutement</a> : 11 heures, mixed learning, tarif public ${T715} par stagiaire. Ce n'est pas le module obligatoire de non-discrimination.</p>
        ${toc(['Calendrier', 'Contenu utile à une équipe', 'Lien avec l\'obligation', 'FAQ'])}
        <h2 id="s1">Calendrier</h2>
        <p>Session de décembre sur la fiche : <strong>3 décembre 2026</strong> en présentiel, <strong>10 décembre 2026</strong> le matin à distance. La session de novembre (19 et 26 novembre) peut être passée.</p>
        <h2 id="s2">Contenu utile à une équipe</h2>
        <p>Autodiagnostic, distinction inclusion / diversité / non-discrimination, charte et plan d'action. Complément : <a href="/blog/former-recruteurs-diversite-plan-action">obligation, méthode et plan d'action</a>.</p>
        <h2 id="s3">Lien avec l'obligation</h2>
        <p>Les deux modules de 11 heures peuvent se suivre en intra.</p>
        <h2 id="s4">FAQ</h2>
        <h3>Combien de participants ?</h3><p>Entre 4 et 12 selon la fiche.</p>
        ${suite('session-renforcer-pratiques-recrutement-decembre-2026')}
`,

  'session-recruter-insertion-entreprises-decembre-2026': `
        <p><a href="/formations/professionnalisantes/recruter-insertion-entreprises">Recruter en insertion avec les entreprises</a> : 21 heures, tarif public ${T1365} par stagiaire.</p>
        ${toc(['Session décembre', 'Pour qui', 'Complément de lecture', 'FAQ'])}
        <h2 id="s1">Session décembre</h2>
        <p>La fiche affiche : <strong>7 et 8 décembre 2026</strong> en présentiel, <strong>14 décembre 2026</strong> en distanciel. Contrairement à une lecture partielle du catalogue, le calendrier existe : confirmez simplement les places restantes auprès du centre.</p>
        <h2 id="s2">Pour qui</h2>
        <p>Équipes qui recrutent et professionnels qui présentent des candidats en insertion.</p>
        <h2 id="s3">Complément de lecture</h2>
        <p>La construction du parcours (besoin, tripartite, intégration) est dans <a href="/blog/recruter-en-insertion-parcours-entreprise-candidat">Recruter en insertion : un parcours qui fonctionne</a>.</p>
        <h2 id="s4">FAQ</h2>
        <h3>L'intra est-il chiffré en ligne ?</h3><p>Non. ${TARIF_INTRA_TEXTE}</p>
        ${suite('session-recruter-insertion-entreprises-decembre-2026')}
`,

  'conditions-inscription-formation-cip-lormont': `
        <p>La formation CIP n'exige pas un diplôme unique à l'entrée. Elle exige un projet étayé et des connaissances rédactionnelles. La page <a href="/formations/cip/conditions-inscription">conditions d'inscription</a> le précise.</p>
        ${toc(['Les deux points d\'entrée', 'Dossier, entretien, test', 'Accessibilité', 'FAQ'])}
        <h2 id="s1">Les deux points d'entrée</h2>
        <p>Un projet validé par au moins deux enquêtes métiers et/ou une immersion professionnelle ; des connaissances rédactionnelles. Sans cela, le dossier reste fragile.</p>
        <h2 id="s2">Dossier, entretien, test</h2>
        <p>Étude du dossier, entretien de motivation, test rédactionnel. Le dossier se télécharge depuis la <a href="/formations/cip">fiche CIP</a>. Session visée : 22 mars – 22 octobre 2027, 14 places annoncées.</p>
        <h2 id="s3">Accessibilité</h2>
        <p>Les aménagements pour les personnes en situation de handicap s'étudient avec l'équipe et la référente handicap.</p>
        <h2 id="s4">FAQ</h2>
        <h3>Faut-il un Bac+2 pour entrer ?</h3><p>Le titre visé est de niveau 5. L'entrée se joue sur le projet et les tests, pas sur un unique diplôme.</p>
        <h3>Quand a lieu la prochaine réunion ?</h3><p>Voir <a href="/s-inscrire?formation=CIP">s-inscrire</a> — notamment le 17 décembre 2026 en distanciel et le 9 janvier 2027 en présentiel.</p>
        ${suite('conditions-inscription-formation-cip-lormont')}
`,

  'session-renforcer-partenariat-entreprises-decembre-2026': `
        <p><a href="/formations/professionnalisantes/renforcer-relation-entreprise">Renforcer le partenariat avec les entreprises</a> : 21 heures, ${T1365} par stagiaire en tarif public inter.</p>
        ${toc(['Dates', 'Écart avec « développer »', 'FAQ'])}
        <h2 id="s1">Dates</h2>
        <p>Même calendrier de décembre que le module « développer » : <strong>7 et 8 décembre 2026</strong> en présentiel, <strong>14 décembre</strong> à distance.</p>
        <h2 id="s2">Écart avec « développer »</h2>
        <p>Ici : clarifier l'offre, argumentaire, trames d'appel. « Développer » pose plutôt le premier contact et la proposition de candidats. Les deux se complètent.</p>
        <h2 id="s3">FAQ</h2>
        <h3>Y a-t-il un prérequis ?</h3><p>Aucun prérequis spécifique n'est indiqué sur la fiche officielle.</p>
        ${suite('session-renforcer-partenariat-entreprises-decembre-2026')}
`,

  'pedagogie-au-plus-pres-du-reel-formation-cip': `
        <p>La formation CIP d'ATIPIK RH se présente comme une <strong>formation-action</strong>. L'objectif n'est pas seulement de comprendre les CCP du RNCP37274 : c'est de les exercer avant le titre.</p>
        ${toc(['Ce que « au plus près du réel » veut dire', 'Le stage de 385 heures', 'Le groupe', 'FAQ'])}
        <h2 id="s1">Ce que « au plus près du réel » veut dire</h2>
        <p>Formateurs issus du terrain, mises en situation, outils théâtre pour la posture, projets collaboratifs, rencontres professionnelles, thématiques handicap, RPS, inclusion numérique, droit des étrangers.</p>
        <p><img src="/images/blog/pedagogie-cip-groupe-lormont.jpg" alt="Groupe de stagiaires CIP au centre ATIPIK RH de Lormont" width="800" height="500" /></p>
        <h2 id="s2">Le stage de 385 heures</h2>
        <p>Sur 948 heures, 563 se tiennent en centre et 385 en stage. Le stage ancre le diagnostic, l'accompagnement et la relation employeur.</p>
        <h2 id="s3">Le groupe</h2>
        <p>8 à 15 personnes selon la fiche ; 14 places annoncées pour la session du 22 mars 2027. Lieu : 8 rue du Courant, Lormont.</p>
        <h2 id="s4">FAQ</h2>
        <h3>Est-ce du e-learning ?</h3><p>La fiche indique un présentiel au centre, avec le stage en structure.</p>
        ${suite('pedagogie-au-plus-pres-du-reel-formation-cip')}
`,

  'session-essentiels-numerique-janvier-2027': `
        <p><a href="/formations/professionnalisantes/essentiels-du-numerique">Les essentiels du numérique</a> : 14 heures en présentiel, tarif public ${T970} par stagiaire.</p>
        ${toc(['Sessions à venir', 'Public', 'Complément', 'FAQ'])}
        <h2 id="s1">Sessions à venir</h2>
        <p>Après les sessions de 2026, le calendrier affiché vise le <strong>25 et 26 janvier 2027</strong> puis le <strong>7 et 8 février 2027</strong>. La session des 3 et 4 décembre 2026 peut être close selon la date de lecture.</p>
        <h2 id="s2">Public</h2>
        <p>Professionnels de l'accompagnement qui veulent une méthode commune sur fichiers, mails, visio et données.</p>
        <h2 id="s3">Complément</h2>
        <p>La méthode (surcharge, confidentialité) : <a href="/blog/essentiels-numerique-professionnels-accompagnement">Les essentiels du numérique pour l'accompagnement</a>.</p>
        <h2 id="s4">FAQ</h2>
        <h3>Faut-il l'avoir suivi avant l'IA ?</h3><p>Ce n'est pas un prérequis administratif. C'est une base utile.</p>
        ${suite('session-essentiels-numerique-janvier-2027')}
`,

  'session-ia-accompagnement-janvier-2027': `
        <p><a href="/formations/professionnalisantes/intelligence-artificielle-accompagnement">L'IA au service de l'accompagnement</a> : 14 heures en présentiel, tarif public ${T1090} par stagiaire.</p>
        ${toc(['Dates 2027', 'Positionnement', 'FAQ'])}
        <h2 id="s1">Dates 2027</h2>
        <p>Sessions affichées : <strong>21 et 22 janvier</strong>, <strong>28 et 29 janvier</strong>, <strong>15 et 16 février 2027</strong>.</p>
        <h2 id="s2">Positionnement</h2>
        <p>Gagner du temps sans remplacer l'écoute. Les usages détaillés restent dans <a href="/blog/ia-accompagnement-usages-sans-perdre-humain">IA et accompagnement sans perdre l'humain</a>.</p>
        <h2 id="s3">FAQ</h2>
        <h3>Peut-on coller un dossier nominatif dans un outil grand public ?</h3><p>Non, hors cadre validé par l'organisme.</p>
        ${suite('session-ia-accompagnement-janvier-2027')}
`,

  'formation-courte-intra-ou-inter-equipe': `
        <p>Inter : vous rejoignez un groupe, tarif public par stagiaire (${T715} à ${T1365}). Intra : l'équipe se forme sur ses situations, tarif sur étude.</p>
        ${toc(['Quand choisir l\'inter', 'Quand choisir l\'intra', 'Ce que le devis doit préciser', 'FAQ'])}
        <h2 id="s1">Quand choisir l'inter</h2>
        <p>Un ou deux professionnels, besoin d'un calendrier déjà publié, envie de croiser d'autres structures.</p>
        <h2 id="s2">Quand choisir l'intra</h2>
        <p>Même méthode pour toute l'équipe, confidentialité des cas, dates imposées par l'activité.</p>
        <h2 id="s3">Ce que le devis doit préciser</h2>
        <p>Effectif, lieu, module ou parcours de deux modules, contraintes de calendrier. ${TARIF_INTRA_TEXTE}</p>
        <p>Catalogue : <a href="/formations/courtes-professionnalisantes">formations courtes</a>. Aide au choix : <a href="/blog/quelle-formation-courte-choisir-equipe">quelle formation courte pour l'équipe</a>.</p>
        <h2 id="s4">FAQ</h2>
        <h3>Peut-on mixer deux modules en intra ?</h3><p>Oui, après diagnostic.</p>
        ${suite('formation-courte-intra-ou-inter-equipe')}
`,

  'financer-formation-courte-opco-employeur': `
        <p>Une formation courte ATIPIK RH se situe, en inter, entre ${T715} et ${T1365} TTC par stagiaire. Le financeur n'est jamais acquis d'avance.</p>
        ${toc(['Employeur et OPCO', 'Indépendants', 'Autofinancement', 'FAQ'])}
        <h2 id="s1">Employeur et OPCO</h2>
        <p>Plan de développement des compétences, prise en charge OPCO selon la branche et les critères en vigueur. Les fiches numérique mentionnent notamment OPCO, plan interne et autofinancement.</p>
        <h2 id="s2">Indépendants</h2>
        <p>Fonds d'assurance formation (FAF) selon le statut.</p>
        <h2 id="s3">Autofinancement</h2>
        <p>Possible. Les modalités se discutent avec le centre. ${FINANCEMENT_DISCLAIMER}</p>
        <h2 id="s4">FAQ</h2>
        <h3>Le CPF finance-t-il les modules courts non certifiants ?</h3><p>Ces formations courtes donnent une attestation, pas un titre long. Le financement CPF n'est pas à présenter comme la voie par défaut : demandez une étude.</p>
        ${suite('financer-formation-courte-opco-employeur')}
`,

  'formations-courtes-missions-locales-siae': `
        <p>Les équipes de missions locales, SIAE et associations d'insertion ont souvent le même besoin : moins de contacts dispersés, des candidatures présentées par compétences, un partenariat lisible avec les employeurs.</p>
        ${toc(['Trois modules de 21 heures', 'Recrutement inclusif en complément', 'Intra structure', 'FAQ'])}
        <h2 id="s1">Trois modules de 21 heures</h2>
        <ul>
          <li><a href="/formations/professionnalisantes/developper-relation-entreprise">Développer la relation entreprise</a> — ${T1365}</li>
          <li><a href="/formations/professionnalisantes/renforcer-relation-entreprise">Renforcer le partenariat</a> — ${T1365}</li>
          <li><a href="/formations/professionnalisantes/recruter-insertion-entreprises">Recruter en insertion</a> — ${T1365}</li>
        </ul>
        <p>Vue d'ensemble : <a href="/blog/formations-courtes-professionnalisantes-bordeaux-lormont">les 7 formations courtes</a>.</p>
        <h2 id="s2">Recrutement inclusif en complément</h2>
        <p>Si l'équipe participe à des recrutements, le module de 11 heures sur les discriminations (${T990}) sécurise le cadre.</p>
        <h2 id="s3">Intra structure</h2>
        <p>Un format intra aligne conseillers et chargés de relation entreprise. ${TARIF_INTRA_TEXTE}</p>
        <h2 id="s4">FAQ</h2>
        <h3>Le CIP long remplace-t-il ces modules ?</h3><p>Non. Le titre CIP forme au métier. Les modules courts outillent une équipe déjà en poste.</p>
        ${suite('formations-courtes-missions-locales-siae')}
`,
}

const FAQ_NOV = {
  'formations-courtes-professionnalisantes-bordeaux-lormont': [
    { question: 'Combien de temps durent les formations courtes ?', answer: 'De 11 à 21 heures selon le module.' },
    { question: 'Quel est le prix d\'une formation courte ?', answer: `Le tarif inter va de ${T715} à ${T1365} TTC par stagiaire. L'intra est sur étude. ${FINANCEMENT_DISCLAIMER}` },
    { question: 'Les formations donnent-elles un diplôme ?', answer: 'Elles donnent une attestation. Elles ne remplacent pas un titre certifiant comme le CIP ou le FPA.' },
  ],
  'reunion-information-formation-cip-lormont': [
    { question: 'La réunion d\'information CIP est-elle payante ?', answer: 'Non. Elle est sans engagement.' },
    { question: 'Quelles sont les prochaines dates ?', answer: 'Au 20 novembre 2026 : 26 novembre (distanciel), 5 décembre (présentiel), 17 décembre (distanciel), 9 janvier 2027 (présentiel). Vérifiez le formulaire d\'inscription.' },
  ],
  'financer-formation-cip-bordeaux-2027': [
    { question: 'Quel est le tarif public du CIP ?', answer: `${T9100}. ${TARIF_SELON_PROFIL_COURT} ${FINANCEMENT_DISCLAIMER}` },
    { question: 'Le financement est-il automatique ?', answer: 'Non. CPF, AIF, Transition Pro ou OPCO dépendent des règles du financeur et du dossier.' },
  ],
  'session-prevenir-discriminations-recrutement-decembre-2026': [
    { question: 'Quand a lieu la session de décembre ?', answer: '3 décembre 2026 en présentiel et 10 décembre 2026 à distance, selon la fiche.' },
    { question: 'Quel est le tarif ?', answer: `${T990} TTC par stagiaire en inter, 11 heures. ${FINANCEMENT_DISCLAIMER}` },
  ],
  'session-developper-relation-entreprise-decembre-2026': [
    { question: 'Quelles sont les dates ?', answer: '7 et 8 décembre 2026 en présentiel, 14 décembre 2026 à distance.' },
    { question: 'Quel tarif ?', answer: `${T1365} TTC par stagiaire pour 21 heures.` },
  ],
  'session-renforcer-pratiques-recrutement-decembre-2026': [
    { question: 'Dates de la session de décembre ?', answer: '3 décembre 2026 en présentiel et 10 décembre 2026 à distance.' },
    { question: 'Tarif ?', answer: `${T715} TTC par stagiaire, 11 heures.` },
  ],
  'session-recruter-insertion-entreprises-decembre-2026': [
    { question: 'Y a-t-il un calendrier en décembre ?', answer: 'Oui : 7 et 8 décembre 2026 en présentiel, 14 décembre 2026 en distanciel.' },
    { question: 'Tarif ?', answer: `${T1365} TTC par stagiaire, 21 heures.` },
  ],
  'conditions-inscription-formation-cip-lormont': [
    { question: 'Faut-il un diplôme précis ?', answer: 'Non comme unique filtre. Projet validé par enquêtes métiers et/ou immersion, plus test rédactionnel.' },
    { question: 'Où trouver le dossier ?', answer: 'Sur la fiche formation CIP.' },
  ],
  'session-renforcer-partenariat-entreprises-decembre-2026': [
    { question: 'Dates ?', answer: '7 et 8 décembre 2026 en présentiel, 14 décembre à distance.' },
    { question: 'Tarif ?', answer: `${T1365} TTC par stagiaire, 21 heures.` },
  ],
  'pedagogie-au-plus-pres-du-reel-formation-cip': [
    { question: 'Combien d\'heures de stage ?', answer: '385 heures de stage, pour 563 heures en centre, soit 948 heures au total.' },
    { question: 'Où se déroule la formation ?', answer: 'Au 8 rue du Courant, 33310 Lormont, en présentiel.' },
  ],
  'session-essentiels-numerique-janvier-2027': [
    { question: 'Prochaines sessions ?', answer: '25 et 26 janvier 2027, puis 7 et 8 février 2027.' },
    { question: 'Tarif ?', answer: `${T970} TTC par stagiaire, 14 heures.` },
  ],
  'session-ia-accompagnement-janvier-2027': [
    { question: 'Prochaines sessions ?', answer: '21-22 janvier, 28-29 janvier et 15-16 février 2027.' },
    { question: 'Tarif ?', answer: `${T1090} TTC par stagiaire, 14 heures.` },
  ],
  'formation-courte-intra-ou-inter-equipe': [
    { question: 'L\'intra a-t-il un tarif public ?', answer: TARIF_INTRA_TEXTE },
    { question: 'Fourchette inter ?', answer: `De ${T715} à ${T1365} TTC par stagiaire.` },
  ],
  'financer-formation-courte-opco-employeur': [
    { question: 'Peut-on financer via l\'OPCO ?', answer: `Selon le statut et les règles du financeur. ${FINANCEMENT_DISCLAIMER}` },
    { question: 'Fourchette de prix ?', answer: `De ${T715} à ${T1365} TTC par stagiaire en inter.` },
  ],
  'formations-courtes-missions-locales-siae': [
    { question: 'Quels modules viser en insertion ?', answer: 'Relation entreprise, partenariat et recruter en insertion (21 h, 1 365 € TTC chacun en inter).' },
    { question: 'Peut-on former toute l\'équipe ?', answer: 'Oui, en intra, après étude de besoin.' },
  ],
}

export function faqNov(slug) {
  return FAQ_NOV[slug] || []
}
