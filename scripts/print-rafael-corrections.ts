/**
 * Affiche les corrections Rafael à coller. Aucun lien n’est ajouté au site.
 * Usage : npm run seo:rafael-corrections
 */
import { RAFAEL_CAP_FPA } from '../lib/seo/rafaelCapFpa'
import {
  FPA_A_PUBLIER,
  actionsACloturer,
  actionsAGarder,
} from '../lib/seo/rafaelAlignement.js'

function bloc(titre: string, lignes: string[]): void {
  console.log(`\n${titre}`)
  for (const ligne of lignes) console.log(`  ${ligne}`)
}

function main(): void {
  bloc('Fiche FPA à publier — ne pas lier tant que la page publique est absente', [
    `Action ${FPA_A_PUBLIER.reference}`,
    `Tarif ${FPA_A_PUBLIER.tarif} — ${FPA_A_PUBLIER.duree} — ${FPA_A_PUBLIER.modalites}`,
    FPA_A_PUBLIER.session,
    `Ne pas reprendre l’action ${FPA_A_PUBLIER.nePasReprendre} (6 500 € HT).`,
    `URL site : vide (référence dépôt : ${RAFAEL_CAP_FPA.reference}).`,
  ])

  console.log('\nActions à garder, textes à coller')
  for (const action of actionsAGarder()) {
    const lignes = [`${action.offre}`]
    if ('titre' in action && action.titre) lignes.push(`Titre : ${action.titre}`)
    if ('tarif' in action && action.tarif) lignes.push(`Tarif : ${action.tarif}`)
    if ('duree' in action && action.duree) lignes.push(`Durée : ${action.duree}`)
    if ('modalites' in action && action.modalites) lignes.push(`Modalités : ${action.modalites}`)
    if ('prerequis' in action && action.prerequis) lignes.push(`Prérequis : ${action.prerequis}`)
    if ('consigne' in action && action.consigne) lignes.push(`Consigne : ${action.consigne}`)
    if ('fraisJury' in action && action.fraisJury) lignes.push(`Frais : ${action.fraisJury}`)
    if ('retirer' in action && action.retirer) lignes.push(`Retirer : ${action.retirer}`)
    if ('sessions' in action && action.sessions) {
      const dates = Array.isArray(action.sessions) ? action.sessions.join(' ; ') : action.sessions
      lignes.push(`Sessions : ${dates}`)
    }
    bloc(action.reference, lignes)
  }

  console.log('\nActions à clôturer')
  for (const action of actionsACloturer()) {
    bloc(action.reference, [`${action.offre}`, 'motif' in action && action.motif ? action.motif : ''])
  }
}

main()
