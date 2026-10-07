/**
 * Corrections à coller dans Rafael. Les tarifs viennent du site, pas des fiches erronées.
 * Aucune de ces actions n’est liée sur le site tant que la page publique ne correspond pas.
 * Les dates reprises sont celles de professionnalisantesConfig.js.
 */

import { MENTION_FRAIS_CERTIFICATION_INCLUS } from '../tarifs/tarifsCopy.js'

export const FRAIS_VAE = MENTION_FRAIS_CERTIFICATION_INCLUS

export const ADRESSE_RAFAEL = '8 rue du Courant, 33310 Lormont'

/** Action FPA à publier. Pas d’URL tant que CMaFormation répond « non publiée ». */
export const FPA_A_PUBLIER = {
  reference: '202609425794',
  ficheUrl: '',
  lienSite: false,
  tarif: '8 950 € TTC',
  duree: '934 heures',
  modalites: 'Présentiel',
  session: 'Date en cours de finalisation. Ne pas saisir de date de début ni de fin.',
  nePasReprendre: '202507335325',
}

const COMMUN = {
  lienSite: false,
  adresse: ADRESSE_RAFAEL,
}

export const RAFAEL_ACTIONS = [
  {
    ...COMMUN,
    reference: '202609425810',
    garder: true,
    offre: 'VAE FPA',
    titre: 'Accompagnement VAE — Formateur professionnel d’adultes — RNCP 37275 — Niveau 5',
    tarif: '2 650 € TTC',
    prerequis: 'Expérience en lien avec le titre FPA (formateur d’adultes, RNCP 37275).',
    consigne: 'Retirer le texte qui cite un autre titre professionnel. Corriger la faute « etde ».',
    fraisJury: FRAIS_VAE,
    modalites: 'Présentiel à Lormont ou distanciel',
  },
  {
    ...COMMUN,
    reference: '202607396707',
    garder: false,
    offre: 'VAE FPA',
    motif: 'Doublon de 202609425810. Clôturer cette action.',
  },
  {
    ...COMMUN,
    reference: '202607396706',
    garder: true,
    offre: 'VAE CIP',
    titre: 'Accompagnement VAE — Conseiller en insertion professionnelle — RNCP 37274 — Niveau 5',
    tarif: '2 750 € TTC',
    fraisJury: FRAIS_VAE,
    modalites: 'Présentiel à Lormont ou distanciel',
    sessions: 'Ne garder qu’une session d’entrée. Clôturer la session qui chevauche l’autre.',
  },
  {
    ...COMMUN,
    reference: '202609425852',
    garder: true,
    offre: 'Essentiels du numérique',
    tarif: '970 € TTC',
    duree: '14 heures',
    modalites: 'Présentiel',
    retirer: 'Épreuves orales. Plage du 28/09/2026 au 30/11/2027.',
    sessions: [
      '12 et 13 octobre 2026',
      '28 et 29 octobre 2026',
      '03 et 04 décembre 2026',
      '25 et 26 janvier 2027',
      '07 et 08 février 2027',
    ],
  },
  {
    ...COMMUN,
    reference: '202607396704',
    garder: false,
    offre: 'Essentiels du numérique',
    motif: 'Sessions terminées. Remplacée par 202609425852 une fois les dates du site collées.',
  },
  {
    ...COMMUN,
    reference: '202607396705',
    garder: true,
    offre: 'IA et accompagnement',
    tarif: '1 090 € TTC',
    duree: '14 heures',
    modalites: 'Présentiel',
    retirer: 'Fenêtre 21/09/2026 au 29/09/2026, déjà close.',
    sessions: [
      '26 et 27 octobre 2026',
      '09 et 10 novembre 2026',
      '21 et 22 janvier 2027',
      '28 et 29 janvier 2027',
      '15 et 16 février 2027',
    ],
  },
  {
    ...COMMUN,
    reference: '202508335385',
    garder: true,
    offre: 'Partenariat entreprises',
    titre: 'Renforcer le partenariat avec les entreprises : de la prospection à la valorisation de votre offre',
    tarif: '1 365 € TTC',
    duree: '21 heures',
    modalites: 'Présentiel',
    retirer: 'Corriger l’orthographe du titre. Adresse : 8 rue du Courant. Retirer la plage de plusieurs années.',
  },
  {
    ...COMMUN,
    reference: '202508335387',
    garder: true,
    offre: 'Recruter en insertion',
    titre: 'Recruter en insertion avec les entreprises : méthodes et outils',
    tarif: '1 365 € TTC',
    duree: '21 heures',
    modalites: 'Présentiel',
    retirer: 'Plage jusqu’au 31/12/2028 sans dates de session réelles.',
  },
  {
    ...COMMUN,
    reference: '202508335386',
    garder: false,
    offre: 'Recruter en insertion',
    motif: 'Session close le 25/05/2026. Doublon de 202508335387.',
  },
  {
    ...COMMUN,
    reference: '202606396350',
    garder: true,
    offre: 'Prévenir les discriminations',
    tarif: '990 € TTC',
    duree: '11 heures',
    modalites: 'Mixte',
    retirer: 'Ne pas inventer de dates au-delà de celles déjà tenues.',
  },
]

export function actionsAGarder() {
  return RAFAEL_ACTIONS.filter((action) => action.garder)
}

export function actionsACloturer() {
  return RAFAEL_ACTIONS.filter((action) => !action.garder)
}
