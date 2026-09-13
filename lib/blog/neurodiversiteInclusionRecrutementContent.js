/**
 * Corps HTML de l'article blog — Neurodiversité et inclusion au recrutement.
 * Publication cible : 1er octobre 2026.
 */

import { FINANCEMENT_DISCLAIMER, TARIF_SELON_PROFIL_COURT, formatTarifPublic } from '../tarifs/tarifsCopy'

const TARIF_PUBLIC_DIVERSITE = formatTarifPublic(715)

export const neurodiversiteInclusionRecrutementContent = `
        <p>Un candidat compétent peut échouer un entretien pour une raison qui n'a rien à voir avec le poste : un contact visuel irrégulier, une réponse trop factuelle, une difficulté à « vendre » son parcours, une sensibilité au bruit de l'open space. Ces signaux sont souvent lus comme un manque de motivation ou de « fit ». Ils décrivent parfois autre chose : un fonctionnement cognitif différent.</p>
        <p>La <strong>neurodiversité</strong> désigne la variété des fonctionnements cognitifs — autisme, TDAH, troubles dys, haut potentiel, entre autres. Elle n'est pas un diagnostic à poser en entretien. Elle n'oblige personne à se déclarer. Elle invite les recruteurs à cesser de confondre <strong>style de communication</strong> et <strong>compétence</strong>.</p>
        <p>Cet article s'adresse aux PME, aux équipes RH, aux managers recruteurs et aux structures d'insertion. Il prolonge la méthode d'<a href="/blog/recrutement-inclusif-objectiver-criteres"><strong>objectivation des critères</strong></a> : comment recruter des profils neurodivergents sans baisser l'exigence, et sans transformer l'inclusion en slogan.</p>

        <nav class="not-prose my-8 p-6 bg-gray-50 border border-gray-200 rounded-lg" aria-label="Table des matières">
          <p class="font-semibold text-[#013F63] mb-3">Table des matières</p>
          <ol class="list-decimal list-inside space-y-1 text-sm">
            <li><a href="#ce-que-filtre-le-processus" class="text-[#013F63] hover:underline">Ce que le processus de recrutement filtre vraiment</a></li>
            <li><a href="#cadre-legal" class="text-[#013F63] hover:underline">Cadre légal : handicap, non-discrimination, OETH</a></li>
            <li><a href="#pratiques" class="text-[#013F63] hover:underline">Cinq pratiques pour inclure sans improvisation</a></li>
            <li><a href="#formation" class="text-[#013F63] hover:underline">La réponse formation d'ATIPIK RH</a></li>
            <li><a href="#faq" class="text-[#013F63] hover:underline">FAQ</a></li>
          </ol>
        </nav>

        <h2 id="ce-que-filtre-le-processus">Ce que le processus de recrutement filtre vraiment</h2>
        <p>Beaucoup d'entretiens mesurent l'aisance sociale en situation formelle. Or le poste demande souvent autre chose : fiabilité, analyse, concentration, respect d'une procédure, qualité d'un livrable. Quand le critère reste « bonne présentation » ou « excellent relationnel », le recruteur évalue un style. Les profils neurodivergents peuvent alors être écartés alors qu'ils réussiraient dans la fonction.</p>
        <p>Trois filtres reviennent souvent :</p>
        <ul>
          <li><strong>L'annonce.</strong> « Esprit start-up », « aisance orale indispensable », « forte capacité d'adaptation » sans indicateur observable. Ces formulations attirent un type de candidature et en découragent d'autres, sans lien démontré avec le travail à accomplir.</li>
          <li><strong>L'entretien non structuré.</strong> Questions improvisées, humour, regard, débit, « feeling ». Un candidat qui a besoin de questions précises, d'un temps de traitement ou d'exemples concrets passe pour hésitant.</li>
          <li><strong>Le « fit culturel ».</strong> On retient qui ressemble à l'équipe. La similarité n'est pas une compétence. Elle réduit le vivier et fragilise la décision en cas de contestation.</li>
        </ul>
        <p>Inclure la neurodiversité ne consiste pas à « faire une exception ». C'est appliquer la même grille à tout le monde, avec des critères liés au poste. Pour les raccourcis de jugement, voir aussi <a href="/blog/biais-cognitifs-recrutement-methode-bordeaux"><strong>biais cognitifs dans le recrutement</strong></a>.</p>

        <h2 id="cadre-legal">Cadre légal : handicap, non-discrimination, OETH</h2>
        <p>Toute neurodivergence n'est pas un handicap au sens administratif. Quand elle en relève, ou quand la décision d'embauche s'appuie sur l'état de santé ou le handicap, le cadre est clair : l'<a href="https://code.travail.gouv.fr/code-du-travail/l1132-1" rel="noopener noreferrer" target="_blank">article L1132-1 du Code du travail</a> interdit d'écarter une personne d'un recrutement pour ces motifs. La fiche <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F1642" rel="noopener noreferrer" target="_blank">Discrimination au travail</a> de Service-Public rappelle que les informations demandées à un candidat doivent uniquement permettre d'évaluer ses compétences.</p>
        <p>La reconnaissance de la qualité de travailleur handicapé (RQTH) n'a pas à être exigée en entretien. Sa transmission à l'employeur reste un choix de la personne. Elle peut ouvrir des aménagements et, le cas échéant, permettre à l'entreprise de déclarer un bénéficiaire de l'<a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F23149" rel="noopener noreferrer" target="_blank">obligation d'emploi des travailleurs handicapés (OETH)</a>. Les entreprises d'au moins 20 salariés sont concernées par un taux d'emploi de 6 %. L'<a href="https://www.agefiph.fr/" rel="noopener noreferrer" target="_blank">Agefiph</a> accompagne l'emploi des personnes en situation de handicap dans le secteur privé.</p>
        <p>Ce cadre ne se substitue pas à une méthode de recrutement. Un quota mal outillé produit des embauches fragiles. Une grille de compétences produit des décisions défendables, y compris pour des profils qui ne se déclarent pas. Pour la check-list juridique du process, voir <a href="/blog/recrutement-sans-discrimination-points-controle"><strong>Recrutement sans discrimination : 7 points de contrôle</strong></a>.</p>

        <h2 id="pratiques">Cinq pratiques pour inclure sans improvisation</h2>
        <p>Ces leviers ne demandent pas de poser un diagnostic. Ils améliorent la qualité de tous les recrutements.</p>

        <h3>1. Écrire ce que le poste exige, pas le candidat rêvé</h3>
        <p>Listez les livrables des 90 premiers jours. Traduisez chaque compétence en comportement observable. « Autonome » devient « priorise trois tâches et alerte en cas de blocage ». « Bon relationnel » devient « reformule une demande interne et propose une prochaine étape ».</p>

        <h3>2. Envoyer la trame d'entretien à l'avance</h3>
        <p>Les questions principales, le déroulé et la durée. Cette transparence aide les personnes qui ont besoin de préparer. Elle n'avantage pas : elle égalise. Tous les candidats comparables reçoivent la même information.</p>

        <h3>3. Proposer un format adapté, sans le réserver à un diagnostic</h3>
        <p>Entretien dans un bureau calme, possibilité de répondre par écrit à une mise en situation, temps supplémentaire raisonnable, pause. Présentez ces options à tous, pas seulement à qui « a l'air » d'en avoir besoin. L'aménagement raisonnable, lorsqu'un handicap est identifié, s'inscrit dans ce même principe : permettre d'évaluer la compétence, pas la performance en open space.</p>

        <h3>4. Évaluer sur des preuves, pas sur le regard ou le small talk</h3>
        <p>Une grille commune, les mêmes questions, des notes factuelles. Le contact visuel, le sourire ou la « énergie » ne sont des critères que s'ils sont indispensables au poste — ce qui est rare. La décision se discute ensuite à partir des scores, pas du ressenti du dernier entretien.</p>

        <h3>5. Préparer l'intégration dès le recrutement</h3>
        <p>Consignes écrites, tutorat, objectifs à 30 / 60 / 90 jours, environnement de travail lisible. Un profil neurodivergent réussit plus souvent quand le cadre est clair. C'est aussi le cas de beaucoup de collaborateurs. L'inclusion se joue après la signature, pas seulement dans l'offre d'emploi.</p>

        <h2 id="formation">La réponse formation d'ATIPIK RH</h2>
        <p>ATIPIK RH, organisme certifié Qualiopi à Lormont (Bordeaux Métropole), forme les recruteurs à objectiver leurs pratiques. La formation <a href="/formations/professionnalisantes/renforcer-pratique-recrutement-diversite"><strong>Renforcer ses pratiques de recrutement, de la diversité à la performance RH</strong></a> distingue inclusion, diversité et non-discrimination, puis construit une charte et un plan d'action transférable.</p>
        <ul>
          <li><strong>Durée :</strong> 11 heures, mixed learning</li>
          <li><strong>Groupe :</strong> 4 à 12 participants</li>
          <li><strong>Lieu :</strong> 8 rue du Courant, 33310 Lormont</li>
          <li><strong>Tarif public :</strong> ${TARIF_PUBLIC_DIVERSITE} par stagiaire</li>
          <li>${TARIF_SELON_PROFIL_COURT}</li>
        </ul>
        <p>${FINANCEMENT_DISCLAIMER}</p>
        <p>Pour le cadre légal de la non-discrimination à l'embauche, la formation complémentaire <a href="/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif">Prévenir les discriminations dans le recrutement</a> outille les critères interdits, les biais et la traçabilité.</p>

        <h2>Vous voulez recruter sur les compétences, pas sur le feeling ?</h2>
        <p>Formez vos équipes à une méthode inclusive, structurée et applicable dès le prochain recrutement.</p>
        <p><a href="/formations/professionnalisantes/renforcer-pratique-recrutement-diversite"><strong>Découvrir le programme</strong></a> — <a href="/contact?sujet=Demande%20formation%20—%20Renforcer%20ses%20pratiques%20de%20recrutement"><strong>Demander une étude personnalisée</strong></a></p>

        <h2 id="faq">FAQ</h2>
        <h3>Faut-il demander à un candidat s'il est autiste ou TDAH ?</h3>
        <p>Non. Les questions doivent rester liées aux compétences et aux exigences du poste. Un candidat n'a pas à révéler un diagnostic. S'il choisit d'évoquer un handicap ou un besoin d'aménagement, vous pouvez convenir d'adaptations pour évaluer équitablement sa capacité à tenir le poste.</p>
        <h3>Neurodiversité et RQTH : est-ce la même chose ?</h3>
        <p>Non. La neurodiversité décrit une variété de fonctionnements cognitifs. La RQTH est une reconnaissance administrative, volontaire, qui peut ouvrir des droits (aménagements, aides, déclaration OETH). Une personne neurodivergente peut n'avoir aucune reconnaissance. Le recrutement inclusif ne dépend pas de cette déclaration.</p>
        <h3>Recruter des profils neurodivergents, est-ce baisser le niveau d'exigence ?</h3>
        <p>Non. C'est rendre l'exigence lisible. On évalue les compétences indispensables au poste avec la même grille. On cesse d'utiliser des filtres implicites (aisance orale, regard, « fit ») qui ne prédisent pas la performance. L'inclusion n'est pas un assouplissement des standards.</p>
        <h3>Quelle formation ATIPIK RH pour outiller ces pratiques ?</h3>
        <p>La formation « Renforcer ses pratiques de recrutement, de la diversité à la performance RH » dure 11 heures en mixed learning, à Lormont. Tarif public : ${TARIF_PUBLIC_DIVERSITE} par stagiaire. ${TARIF_SELON_PROFIL_COURT}</p>
`;

export const neurodiversiteInclusionRecrutementFaqItems = [
  {
    question: "Faut-il demander à un candidat s'il est autiste ou TDAH ?",
    answer:
      "Non. Les questions doivent rester liées aux compétences et aux exigences du poste. Un candidat n'a pas à révéler un diagnostic. S'il choisit d'évoquer un handicap ou un besoin d'aménagement, vous pouvez convenir d'adaptations pour évaluer équitablement sa capacité à tenir le poste.",
  },
  {
    question: 'Neurodiversité et RQTH : est-ce la même chose ?',
    answer:
      "Non. La neurodiversité décrit une variété de fonctionnements cognitifs. La RQTH est une reconnaissance administrative, volontaire, qui peut ouvrir des droits (aménagements, aides, déclaration OETH). Une personne neurodivergente peut n'avoir aucune reconnaissance. Le recrutement inclusif ne dépend pas de cette déclaration.",
  },
  {
    question: 'Recruter des profils neurodivergents, est-ce baisser le niveau d’exigence ?',
    answer:
      "Non. C'est rendre l'exigence lisible. On évalue les compétences indispensables au poste avec la même grille. On cesse d'utiliser des filtres implicites (aisance orale, regard, « fit ») qui ne prédisent pas la performance.",
  },
  {
    question: 'Quelle formation ATIPIK RH pour outiller ces pratiques ?',
    answer: `La formation « Renforcer ses pratiques de recrutement, de la diversité à la performance RH » dure 11 heures en mixed learning, à Lormont. Tarif public : ${TARIF_PUBLIC_DIVERSITE} par stagiaire. ${TARIF_SELON_PROFIL_COURT} ${FINANCEMENT_DISCLAIMER}`,
  },
]

export const neurodiversiteInclusionRecrutementInternalLinks = [
  {
    label: 'Formation Renforcer ses pratiques de recrutement',
    href: '/formations/professionnalisantes/renforcer-pratique-recrutement-diversite',
    type: 'formation',
  },
  {
    label: 'Formation Prévenir les discriminations dans le recrutement',
    href: '/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif',
    type: 'formation',
  },
  {
    label: 'Recrutement inclusif : objectiver les critères',
    href: '/blog/recrutement-inclusif-objectiver-criteres',
    type: 'article',
  },
  {
    label: 'Recrutement sans discrimination : 7 points de contrôle',
    href: '/blog/recrutement-sans-discrimination-points-controle',
    type: 'article',
  },
  {
    label: 'Biais cognitifs dans le recrutement',
    href: '/blog/biais-cognitifs-recrutement-methode-bordeaux',
    type: 'article',
  },
  {
    label: 'Page contact',
    href: '/contact?sujet=Demande%20formation%20—%20Renforcer%20ses%20pratiques%20de%20recrutement',
    type: 'contact',
  },
]

export const neurodiversiteInclusionRecrutementSecondaryKeywords = [
  'recrutement neurodiversité',
  'inclusion professionnelle',
  'autisme recrutement',
  'TDAH travail',
  'RQTH recrutement',
  'aménagement raisonnable entretien',
  'recrutement inclusif PME',
]
