/**
 * Corps HTML — Formation CIP Bordeaux, session mars 2027.
 * URL conservée : /blog/formation-cip-bordeaux-session-septembre-2026
 */

import { FINANCEMENT_DISCLAIMER, TARIF_SELON_PROFIL_COURT, formatTarifPublic } from '../tarifs/tarifsCopy.js'

const TARIF = formatTarifPublic(9100)

export const formationCipBordeauxSessionSeptembre2026Content = `
        <p>Vous envisagez une reconversion dans l'accompagnement vers l'emploi ? Vous souhaitez exercer un métier utile, au contact des personnes et des entreprises, tout en obtenant une certification reconnue ? La prochaine session de la formation <strong>Conseiller en Insertion Professionnelle</strong> d'ATIPIK RH se déroulera à Lormont, au sein de Bordeaux Métropole, du <strong>22 mars au 22 octobre 2027</strong>.</p>
        <p>Les candidatures sont ouvertes depuis le 3 octobre 2026. Le site officiel annonce un groupe limité à <strong>14 places</strong> pour cette session. Le nombre exact de places encore disponibles doit être confirmé directement auprès d'ATIPIK RH : nous n'annonçons pas de « dernières places » sans ce contrôle.</p>
        <p>Cette formation prépare au titre professionnel Conseiller en Insertion Professionnelle, enregistré au RNCP sous le numéro <strong>37274</strong>, au niveau 5. Le parcours s'adresse notamment aux personnes en reconversion, aux demandeurs d'emploi et aux professionnels qui souhaitent évoluer vers l'insertion, l'emploi et l'accompagnement des parcours.</p>

        <nav class="not-prose my-8 p-6 bg-gray-50 border border-gray-200 rounded-lg" aria-label="Table des matières">
          <p class="font-semibold text-[#013F63] mb-3">Sommaire</p>
          <ol class="list-decimal list-inside space-y-1 text-sm">
            <li><a href="#pourquoi" class="text-[#013F63] hover:underline">Pourquoi devenir conseiller en insertion professionnelle ?</a></li>
            <li><a href="#certification" class="text-[#013F63] hover:underline">Quelle certification prépare la formation CIP ?</a></li>
            <li><a href="#apprendre" class="text-[#013F63] hover:underline">Que va-t-on apprendre pendant le parcours ?</a></li>
            <li><a href="#pedagogie" class="text-[#013F63] hover:underline">La pédagogie ATIPIK RH : « Au plus près du réel »</a></li>
            <li><a href="#public" class="text-[#013F63] hover:underline">À qui s'adresse la formation ?</a></li>
            <li><a href="#conditions" class="text-[#013F63] hover:underline">Quelles sont les conditions d'entrée ?</a></li>
            <li><a href="#financement" class="text-[#013F63] hover:underline">Comment financer sa formation CIP ?</a></li>
            <li><a href="#session" class="text-[#013F63] hover:underline">Les informations pratiques de la session mars 2027</a></li>
            <li><a href="#candidater" class="text-[#013F63] hover:underline">Comment candidater ?</a></li>
            <li><a href="#faq" class="text-[#013F63] hover:underline">Questions fréquentes</a></li>
          </ol>
        </nav>

        <h2 id="pourquoi">Pourquoi devenir conseiller en insertion professionnelle ?</h2>
        <p>Le conseiller en insertion professionnelle accompagne des personnes qui cherchent un emploi, une formation, une orientation ou une nouvelle dynamique professionnelle. Son rôle ne se limite pas à transmettre des offres : il aide à comprendre une situation, à identifier les compétences, à lever certains freins et à construire un parcours réaliste.</p>
        <p>Au quotidien, le CIP peut accueillir une personne, conduire un entretien, analyser une demande, préparer un atelier collectif, mobiliser un partenaire, contacter une entreprise ou suivre l'intégration d'un salarié. Le métier combine écoute, analyse, pédagogie, organisation et capacité à travailler en réseau.</p>
        <p>Cette profession peut convenir à des profils issus des ressources humaines, du social, de l'éducation, du commerce, de la santé ou de l'administration. Elle attire également des personnes en reconversion. À Bordeaux Métropole et en Gironde, les débouchés se trouvent notamment dans les missions locales, les structures de l'IAE, les associations, France Travail et ses opérateurs, Cap Emploi, les collectivités, les maisons de l'emploi, les organismes de formation ou le secteur social et médico-social.</p>
        <p>Pour une vue d'ensemble du métier, voir aussi <a href="/blog/formation-cip-bordeaux-conseiller-insertion-professionnelle">Devenir conseiller en insertion professionnelle à Bordeaux</a>.</p>

        <h2 id="certification">Quelle certification prépare la formation CIP ?</h2>
        <p>La formation prépare au titre professionnel Conseiller en Insertion Professionnelle, enregistré au <strong>RNCP37274</strong>. Il s'agit d'un titre de niveau 5, correspondant au niveau Bac+2, délivré par le ministère du Travail.</p>
        <div class="overflow-x-auto my-6 not-prose">
          <table class="min-w-full border border-gray-200 text-sm text-left">
            <thead><tr class="bg-[#013F63] text-white"><th class="px-4 py-3">Élément</th><th class="px-4 py-3">Information actualisée</th></tr></thead>
            <tbody>
              <tr><td class="px-4 py-3 border">Certification</td><td class="px-4 py-3 border">Conseiller en Insertion Professionnelle</td></tr>
              <tr class="bg-gray-50"><td class="px-4 py-3 border">Code RNCP</td><td class="px-4 py-3 border"><a href="https://www.francecompetences.fr/recherche/rncp/37274/" target="_blank" rel="noopener noreferrer">RNCP37274</a></td></tr>
              <tr><td class="px-4 py-3 border">Niveau</td><td class="px-4 py-3 border">Niveau 5</td></tr>
              <tr class="bg-gray-50"><td class="px-4 py-3 border">Durée globale</td><td class="px-4 py-3 border">948 heures</td></tr>
              <tr><td class="px-4 py-3 border">Répartition</td><td class="px-4 py-3 border">563 heures en centre et 385 heures de stage</td></tr>
              <tr class="bg-gray-50"><td class="px-4 py-3 border">Session</td><td class="px-4 py-3 border">Du 22 mars au 22 octobre 2027</td></tr>
              <tr><td class="px-4 py-3 border">Lieu</td><td class="px-4 py-3 border">8 rue du Courant, 33310 Lormont</td></tr>
              <tr class="bg-gray-50"><td class="px-4 py-3 border">Modalité</td><td class="px-4 py-3 border">Présentiel selon la fiche formation</td></tr>
              <tr><td class="px-4 py-3 border">Groupe</td><td class="px-4 py-3 border">Entre 8 et 15 personnes ; 14 places annoncées pour la session</td></tr>
              <tr class="bg-gray-50"><td class="px-4 py-3 border">Tarif public</td><td class="px-4 py-3 border">${TARIF}</td></tr>
            </tbody>
          </table>
        </div>
        <p>${TARIF_SELON_PROFIL_COURT}</p>

        <h2 id="apprendre">Que va-t-on apprendre pendant le parcours ?</h2>
        <h3>CCP1 — Accueillir, analyser et poser les bases d'un diagnostic partagé</h3>
        <p>Le premier bloc concerne l'accueil et l'analyse de la demande. Le futur professionnel apprend à écouter, reformuler, recueillir les informations utiles et poser les bases d'un diagnostic partagé avec la personne accompagnée, en tenant compte du parcours, des compétences, des contraintes et des éventuels freins à l'emploi.</p>
        <h3>CCP2 — Accompagner les parcours d'insertion sociale et professionnelle</h3>
        <p>Le deuxième bloc porte sur l'accompagnement dans la durée : contractualisation, projet professionnel, ateliers thématiques, recherche d'emploi, entretien, métiers, formation, mobilité, inclusion numérique ou relation avec les employeurs.</p>
        <h3>CCP3 — Développer une offre de services auprès des employeurs</h3>
        <p>Le troisième bloc est consacré à la relation entreprise : prospecter, comprendre les besoins de recrutement, apporter un appui technique et faciliter l'intégration ou le maintien du salarié.</p>

        <h2 id="pedagogie">La pédagogie ATIPIK RH : « Au plus près du réel »</h2>
        <p>ATIPIK RH présente sa formation comme une formation-action. La méthode s'appuie notamment sur une équipe issue du terrain, des mises en situation, des outils issus du théâtre pour la posture, des projets collaboratifs, des rencontres professionnelles, une période de stage de 385 heures, et des thématiques actuelles : handicap, risques psychosociaux, inclusion numérique et droit des étrangers.</p>
        <p>Le format en groupe restreint favorise les échanges et l'accompagnement individualisé, au centre ATIPIK RH à Lormont, rive droite de Bordeaux Métropole.</p>

        <h2 id="public">À qui s'adresse la formation CIP ?</h2>
        <ul>
          <li>les personnes en reconversion professionnelle ;</li>
          <li>les demandeurs d'emploi qui souhaitent se qualifier dans l'accompagnement vers l'emploi ;</li>
          <li>les salariés qui envisagent une transition professionnelle ;</li>
          <li>les professionnels du social, des RH, de l'éducation ou de l'accompagnement ;</li>
          <li>les personnes déjà actives dans une structure d'insertion et qui souhaitent obtenir une certification.</li>
        </ul>
        <p>La formation demande aussi une capacité d'écoute, des qualités rédactionnelles, de l'organisation et l'envie de travailler avec des publics et des partenaires différents.</p>

        <h2 id="conditions">Quelles sont les conditions d'entrée ?</h2>
        <p>La page <a href="/formations/cip/conditions-inscription">conditions d'inscription</a> indique deux points principaux : un projet validé par au moins deux enquêtes métiers et/ou une immersion professionnelle, et des connaissances rédactionnelles. La sélection comprend l'étude du dossier, un entretien de motivation et un test d'évaluation des connaissances rédactionnelles.</p>
        <p>La <a href="/s-inscrire?formation=CIP">réunion d'information</a> permet de comprendre le métier, le contenu, les débouchés et les financements avant de déposer sa candidature. Les modalités d'accessibilité pour les personnes en situation de handicap peuvent être étudiées avec l'équipe et la référente handicap.</p>

        <h2 id="financement">Comment financer sa formation CIP ?</h2>
        <p>Le tarif public affiché sur la fiche officielle est de <strong>${TARIF}</strong>. Le tarif applicable peut dépendre du profil et du dispositif mobilisé. Selon la situation, plusieurs pistes peuvent être étudiées : CPF, AIF (sous réserve de l'accord de France Travail), Transition Pro, employeur ou plan de développement des compétences, OPCO, paiement échelonné pour un financement personnel selon les modalités du centre.</p>
        <p>${TARIF_SELON_PROFIL_COURT}</p>
        <p>${FINANCEMENT_DISCLAIMER}</p>
        <p>Un financement ne doit jamais être présenté comme automatique. Voir aussi la page <a href="/financement">financement</a>.</p>

        <h2 id="session">Les informations pratiques de la session mars 2027</h2>
        <ul>
          <li>du 22 mars au 22 octobre 2027 ;</li>
          <li>8 rue du Courant, 33310 Lormont ;</li>
          <li>du lundi au vendredi, de 9h00 à 12h30 et de 13h30 à 17h00 ;</li>
          <li>groupe de 8 à 15 personnes selon la fiche ; 14 places annoncées pour cette session ;</li>
          <li>candidatures ouvertes depuis le 3 octobre 2026.</li>
        </ul>
        <p>Pour connaître le nombre exact de places encore disponibles, contactez ATIPIK RH.</p>

        <h2 id="candidater">Comment candidater ?</h2>
        <p>Le parcours peut commencer par une réunion d'information. Les dates affichées sur la page d'inscription au 20 novembre 2026 sont : jeudi 26 novembre 2026 (12h30-14h30, distanciel) ; samedi 5 décembre 2026 (10h30-12h30, présentiel) ; jeudi 17 décembre 2026 (12h30-14h30, distanciel) ; samedi 9 janvier 2027 (10h30-12h30, présentiel). Les dates pouvant évoluer, vérifiez le formulaire au moment de l'inscription.</p>
        <ol>
          <li>consulter la <a href="/formations/cip">fiche formation CIP</a> ;</li>
          <li>s'inscrire à une <a href="/s-inscrire?formation=CIP">réunion d'information CIP</a> ;</li>
          <li>télécharger le dossier de candidature depuis la fiche CIP ;</li>
          <li>préparer CV, lettre de motivation et enquêtes métiers ou justificatifs d'immersion ;</li>
          <li>échanger avec l'équipe au <a href="tel:+33783019955">07 83 01 99 55</a> ou <a href="mailto:contact@atipikrh.com">contact@atipikrh.com</a>.</li>
        </ol>

        <h2 id="faq">Questions fréquentes</h2>
        <h3>La formation CIP est-elle proposée près de Bordeaux ?</h3>
        <p>Oui. Elle se déroule à Lormont, au 8 rue du Courant, dans Bordeaux Métropole.</p>
        <h3>Quel est le niveau obtenu ?</h3>
        <p>Le titre professionnel Conseiller en Insertion Professionnelle, niveau 5, code RNCP37274.</p>
        <h3>Combien coûte la formation ?</h3>
        <p>Le tarif public affiché est de ${TARIF}. Le tarif selon le profil et le financement doit être étudié avec ATIPIK RH.</p>
        <h3>Combien de places sont prévues ?</h3>
        <p>Le site annonce 14 places pour la session du 22 mars au 22 octobre 2027. Le nombre de places encore disponibles doit être confirmé par le centre.</p>
        <h3>Faut-il un diplôme précis pour candidater ?</h3>
        <p>La page des conditions d'entrée met en avant un projet validé par deux enquêtes métiers et/ou une immersion, ainsi que des connaissances rédactionnelles. La candidature est étudiée sur dossier, entretien et test rédactionnel.</p>

        <h2>Conclusion</h2>
        <p>La formation CIP d'ATIPIK RH s'adresse aux personnes qui souhaitent se professionnaliser dans l'accompagnement vers l'emploi et la relation avec les entreprises. Les candidatures sont ouvertes. Avant de s'engager, participez à une réunion d'information, vérifiez l'adéquation du projet et étudiez les financements avec l'équipe.</p>
        <p><a href="/formations/cip"><strong>Consulter la fiche CIP</strong></a> — <a href="/s-inscrire?formation=CIP"><strong>Inscription à la réunion d'information</strong></a> — <a href="/contact?sujet=formation-cip"><strong>Contacter ATIPIK RH</strong></a></p>
`

export const formationCipBordeauxSessionSeptembre2026FaqItems = [
  {
    question: 'La formation CIP est-elle proposée près de Bordeaux ?',
    answer:
      'Oui. Elle se déroule à Lormont, au 8 rue du Courant, dans Bordeaux Métropole.',
  },
  {
    question: 'Quel est le niveau obtenu ?',
    answer:
      'La formation prépare au titre professionnel Conseiller en Insertion Professionnelle, de niveau 5, enregistré sous le code RNCP37274.',
  },
  {
    question: 'Combien coûte la formation ?',
    answer: `Le tarif public affiché est de ${TARIF}. ${TARIF_SELON_PROFIL_COURT} ${FINANCEMENT_DISCLAIMER}`,
  },
  {
    question: 'Combien de places sont prévues ?',
    answer:
      'Le site annonce 14 places pour la session du 22 mars au 22 octobre 2027. Ce chiffre correspond à la capacité annoncée ; le nombre de places encore disponibles doit être confirmé par le centre.',
  },
  {
    question: 'Faut-il un diplôme précis pour candidater ?',
    answer:
      'La page officielle des conditions d\'entrée met en avant un projet validé par deux enquêtes métiers et/ou une immersion, ainsi que des connaissances rédactionnelles. La candidature est étudiée sur dossier, entretien et test rédactionnel.',
  },
]

export const formationCipBordeauxSessionSeptembre2026InternalLinks = [
  { label: 'Fiche formation CIP', href: '/formations/cip', type: 'formation' },
  { label: "Conditions d'inscription CIP", href: '/formations/cip/conditions-inscription', type: 'formation' },
  { label: 'Financement de la formation', href: '/financement', type: 'financement' },
  { label: "Réunion d'information", href: '/s-inscrire?formation=CIP', type: 'contact' },
  { label: 'Contact ATIPIK RH', href: '/contact?sujet=formation-cip', type: 'contact' },
  {
    label: 'Devenir conseiller en insertion professionnelle à Bordeaux',
    href: '/blog/formation-cip-bordeaux-conseiller-insertion-professionnelle',
    type: 'article',
  },
]

export const formationCipBordeauxSessionSeptembre2026Conversion = {
  promise: 'Candidatures ouvertes pour la session CIP du 22 mars 2027 à Lormont.',
  ctaLabel: 'Contacter ATIPIK RH',
  formationHref: '/formations/cip',
  formationLabel: 'Fiche formation CIP',
  contactHref: '/contact?sujet=formation-cip',
  reunionHref: '/s-inscrire?formation=CIP',
  relatedHref: '/formations/cip/conditions-inscription',
  relatedLabel: "Conditions d'inscription",
  message:
    'Je souhaite des informations sur la session CIP du 22 mars 2027 à Lormont. Échange sans engagement.',
  reassurance: 'Échange sans engagement. Nous étudions votre besoin et revenons vers vous.',
  reunionLabel: "Réunion d'information",
}

export const formationCipBordeauxSessionSeptembre2026SecondaryKeywords = [
  'formation CIP Bordeaux',
  'formation CIP Lormont',
  'session CIP mars 2027',
  'conseiller insertion professionnelle Bordeaux',
  'RNCP37274',
  'candidatures formation CIP',
  'réunion information CIP',
]
