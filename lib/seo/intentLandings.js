/**
 * Faits affichés sur les pages satellites. Les tarifs viennent des sources déjà publiées.
 */

import { CERTIFIANTES_GEO_BY_BRIEF } from './certifiantesConfig.js'
import { FORMATION_PRO_LIST } from './professionnalisantesConfig.js'

const cip = CERTIFIANTES_GEO_BY_BRIEF['formation-cip']
const fpa = CERTIFIANTES_GEO_BY_BRIEF['formation-fpa']

/** Tarifs VAE affichés dans pages/vae.js (formules CIP et FPA). */
const VAE_CIP = '2 750 € TTC'
const VAE_FPA = '2 650 € TTC'
const VAE_DUREE = 'Jusqu’à 30 heures de face à face'

const courtePrices = FORMATION_PRO_LIST.map((item) => Number(item.price)).filter((n) => n > 0)
const courteMin = Math.min(...courtePrices)
const courteMax = Math.max(...courtePrices)

function prerequis(landing) {
  return (landing?.prerequis || []).join(' · ')
}

export const INTENT_FACTS = {
  'cip-financement': [
    { label: 'Tarif public', value: cip.landing.tarifPublic },
    { label: 'Durée', value: cip.duree },
    { label: 'Session', value: cip.landing.sessions },
    { label: 'Financeurs possibles', value: cip.financement },
  ],
  'cip-conditions': [
    { label: 'Prérequis', value: prerequis(cip.landing) },
    { label: 'Lieu', value: cip.ou },
    { label: 'Session', value: cip.landing.sessions },
    { label: 'Certification', value: cip.landing.certification },
  ],
  'fpa-financement': [
    { label: 'Tarif public', value: fpa.landing.tarifPublic },
    { label: 'Durée', value: fpa.duree },
    { label: 'Session', value: fpa.landing.sessions },
    { label: 'Financeurs possibles', value: fpa.financement },
  ],
  'fpa-conditions': [
    { label: 'Prérequis', value: prerequis(fpa.landing) },
    { label: 'Lieu', value: fpa.ou },
    { label: 'Session', value: fpa.landing.sessions },
    { label: 'Certification', value: fpa.landing.certification },
  ],
  'vae-titre-cip': [
    { label: 'Titre visé', value: 'Conseiller en insertion professionnelle (CIP), niveau 5' },
    { label: 'Tarif public', value: VAE_CIP },
    { label: 'Durée', value: VAE_DUREE },
    { label: 'Parcours', value: 'De l’inscription sur France VAE jusqu’à l’entretien post-jury' },
  ],
  'vae-titre-fpa': [
    { label: 'Titre visé', value: 'Formateur professionnel d’adultes (FPA), niveau 5' },
    { label: 'Tarif public', value: VAE_FPA },
    { label: 'Durée', value: VAE_DUREE },
    { label: 'Parcours', value: 'De l’inscription sur France VAE jusqu’à l’entretien post-jury' },
  ],
  'courtes-financement': [
    { label: 'Tarif inter', value: `${courteMin} € à ${courteMax} € TTC / stagiaire` },
    { label: 'Durée', value: '11 h, 14 h ou 21 h selon le module' },
    { label: 'Financeurs', value: 'OPCO ou plan de développement des compétences' },
    { label: 'Formats', value: 'Session inter à Lormont, ou intra sur devis' },
  ],
}

export function getIntentFacts(briefId) {
  return INTENT_FACTS[briefId] || []
}
