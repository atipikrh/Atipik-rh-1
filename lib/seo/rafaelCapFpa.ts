/**
 * Textes à coller dans Rafael Cap / CMaFormation pour la fiche FPA.
 * Pas d’URL publique : la fiche n’est pas encore en ligne.
 * Pas de date de session : le calendrier est en cours de finalisation.
 */

export const RAFAEL_CAP_FPA_MOTS_CLES = [
  'formation FPA Bordeaux',
  'formation FPA Lormont',
  'formateur professionnel adultes',
  'devenir formateur adultes',
  'titre FPA niveau 5',
  'RNCP 37275',
  'formation formateur Gironde',
  'CPF formateur adultes',
  'France Travail formation FPA',
  'reconversion formateur',
  'ingénierie de formation',
  'animation formation adultes',
  'évaluation des acquis',
  'accompagnement apprenants',
  'qualité formation Qualiopi',
  'Nouvelle-Aquitaine formation FPA',
  'Bordeaux Métropole formateur',
  'organisme formation Lormont',
  'ATIPIK RH formation FPA',
] as const

export const FPA_SESSION_LIBELLE =
  'Prochaine session : date en cours de finalisation. Candidatures ouvertes depuis septembre 2026. Ne pas saisir de date de début ni de fin tant que le calendrier n’est pas arrêté.'

export const RAFAEL_CAP_FPA = {
  /** Action back-office. La page publique n’existe pas encore : ne pas lier. */
  reference: '202609425794',
  ficheUrl: '',
  organismeSiteUrl:
    'https://www.atipikrh.com/formations/fpa?utm_source=cmaformation&utm_medium=referral&utm_campaign=formation_fpa',

  titre:
    'Titre professionnel FPA — Formateur professionnel d’adultes | Lormont (Bordeaux) | Niveau 5 RNCP 37275 — CPF',
  titreCourt: 'Formation FPA Lormont — Formateur professionnel d’adultes — Titre niveau 5',

  lePlus:
    'Parcours au plus près du réel : 934 heures à Lormont, avec mises en situation, stage en organisme et accompagnement jusqu’au jury. Tarif public 8 950 € TTC.',

  resume: `ATIPIK RH prépare le titre professionnel Formateur professionnel d’adultes (FPA) à Lormont (33310), rive droite de Bordeaux Métropole (Gironde, Nouvelle-Aquitaine). Niveau 5, RNCP 37275. Durée : 934 heures (616 h en centre, 315 h en entreprise, 3 h de certification). Tarif public : 8 950 € TTC.

Quatre blocs capitalisables : concevoir et préparer une formation, animer et évaluer les acquis, accompagner les apprenants, inscrire sa pratique dans une démarche qualité et de responsabilité. Organisme certifié Qualiopi.

Financement selon profil : CPF, employeur, France Travail. La date de la prochaine session est en cours de finalisation. Les candidatures sont ouvertes depuis septembre 2026. Réunion d’information recommandée.`,

  objectifs: `À l’issue du parcours, le ou la certifié·e peut exercer le métier de formateur·rice professionnel·le d’adultes (RNCP 37275) :

CCP 1 — Concevoir et préparer une formation
• Analyser le besoin et le public.
• Construire un parcours et des scénarios pédagogiques.

CCP 2 — Animer une formation et évaluer les acquis
• Animer un groupe d’adultes.
• Mesurer les acquis.

CCP 3 — Accompagner les apprenants
• Accueillir, suivre et soutenir le développement professionnel.

CCP 4 — Qualité, réglementation et responsabilité
• Inscrire sa pratique dans le cadre de la formation professionnelle et une démarche qualité.`,

  public: `• Personnes en reconversion vers le métier de formateur d’adultes.
• Professionnels déjà experts d’un métier, qui veulent transmettre.
• Salariés d’organismes, d’entreprises, d’associations ou d’institutions.
• Demandeurs d’emploi dont le projet est validé (France Travail, selon profil).`,

  prerequis: `• Une expertise technique dans un domaine.
• Un projet validé par au moins deux enquêtes métiers ou une immersion.
• Une connaissance des outils informatiques et des techniques rédactionnelles.
• Admission : dossier, entretien, réunion d’information recommandée.`,

  competencesVisees: `• Ingénierie de formation pour adultes.
• Animation de groupe et évaluation des acquis.
• Accompagnement des apprenants.
• Cadre qualité, réglementation et responsabilité du formateur.
• Outils numériques utiles à la formation.`,

  debouches: `Métier : formateur·rice professionnel·le d’adultes.

Structures : organismes de formation, entreprises, associations, institutions, en Gironde, Bordeaux Métropole et Nouvelle-Aquitaine.

Poursuite chez ATIPIK RH : modules CCP, VAE du titre FPA, bilan de compétences.`,

  motsCles: RAFAEL_CAP_FPA_MOTS_CLES.join(', '),

  modalitesEnseignement:
    'Présentiel — 8 rue du Courant, 33310 Lormont. 934 h : 616 h en centre, 315 h en entreprise, 3 h de certification. Tarif public 8 950 € TTC.',

  conditionsAdmissionIntro:
    'Expertise métier, projet validé par deux enquêtes ou une immersion, aisance informatique et rédactionnelle. Réunion d’information recommandée avant le dossier.',

  conditionsAdmissionDetail: `PRÉ-REQUIS : expertise technique dans un domaine ; outils informatiques et techniques rédactionnelles.

CONDITIONS D’ADMISSION : projet validé par au minimum deux enquêtes métiers et/ou une immersion ; dossier de candidature ; entretien. Participation recommandée à une réunion d’information.

La date de la prochaine session n’est pas à saisir : elle est en cours de finalisation.`,

  session: {
    statut: 'date-en-cours',
    libelle: FPA_SESSION_LIBELLE,
    adresse: '8 rue du Courant, 33310 Lormont',
    candidatures: 'Ouvertes depuis septembre 2026',
  },

  facts: {
    duree: '934 heures',
    heuresCentre: 616,
    heuresEntreprise: 315,
    heuresCertification: 3,
    rncp: '37275',
    niveau: 5,
    tarifPublic: '8 950 € TTC',
    lieu: '8 rue du Courant, 33310 Lormont',
  },
} as const
