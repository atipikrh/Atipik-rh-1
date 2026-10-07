/**
 * Affiche les blocs de la fiche FPA Rafael Cap, prêts à coller.
 * Usage : npm run seo:rafael-fpa
 *         npm run seo:rafael-fpa -- --list
 *         npm run seo:rafael-fpa -- --field resume
 */
import { execSync } from 'node:child_process'
import { platform } from 'node:os'
import { RAFAEL_CAP_FPA } from '../lib/seo/rafaelCapFpa'

const SEP = '\n' + '─'.repeat(72) + '\n'

const FIELDS: Record<string, { label: string; body: string }> = {
  meta: {
    label: 'Métadonnées',
    body: [
      'Référence : à créer (pas encore de numéro de fiche)',
      'Fiche publique : pas encore en ligne',
      `Site organisme (UTM) : ${RAFAEL_CAP_FPA.organismeSiteUrl}`,
    ].join('\n'),
  },
  titre: { label: 'Titre (long)', body: RAFAEL_CAP_FPA.titre },
  titreCourt: { label: 'Titre (court)', body: RAFAEL_CAP_FPA.titreCourt },
  lePlus: { label: 'Le + de cette formation', body: RAFAEL_CAP_FPA.lePlus },
  resume: { label: 'Description / résumé', body: RAFAEL_CAP_FPA.resume },
  objectifs: { label: 'Objectif', body: RAFAEL_CAP_FPA.objectifs },
  public: { label: 'Public visé', body: RAFAEL_CAP_FPA.public },
  prerequis: { label: 'Prérequis', body: RAFAEL_CAP_FPA.prerequis },
  competences: { label: 'Compétences visées', body: RAFAEL_CAP_FPA.competencesVisees },
  debouches: { label: 'Débouchés professionnels', body: RAFAEL_CAP_FPA.debouches },
  motsCles: { label: 'Mots-clés', body: RAFAEL_CAP_FPA.motsCles },
  modalites: { label: "Modalités d'enseignement", body: RAFAEL_CAP_FPA.modalitesEnseignement },
  conditions: {
    label: "Conditions d'admission",
    body: `${RAFAEL_CAP_FPA.conditionsAdmissionIntro}\n\n${RAFAEL_CAP_FPA.conditionsAdmissionDetail}`,
  },
  session: {
    label: 'Session',
    body: `${RAFAEL_CAP_FPA.session.libelle}\n${RAFAEL_CAP_FPA.session.adresse}\n${RAFAEL_CAP_FPA.session.candidatures}`,
  },
}

function printBlock(key: string): void {
  const field = FIELDS[key]
  if (!field) return
  process.stdout.write(`${SEP}[${key}] ${field.label}\n\n${field.body}\n`)
}

function copyToClipboard(text: string): void {
  const plat = platform()
  try {
    if (plat === 'win32') {
      const b64 = Buffer.from(text, 'utf8').toString('base64')
      execSync(
        `powershell -NoProfile -Command "[System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String('${b64}')) | Set-Clipboard"`,
        { stdio: 'pipe' }
      )
    } else if (plat === 'darwin') {
      execSync('pbcopy', { input: text, stdio: ['pipe', 'ignore', 'inherit'] })
    } else {
      execSync('xclip -selection clipboard', { input: text, stdio: ['pipe', 'ignore', 'inherit'] })
    }
  } catch {
    console.error('Copie presse-papiers impossible.')
  }
}

function main(): void {
  const argv = process.argv.slice(2)
  if (argv.includes('--list')) {
    for (const [key, field] of Object.entries(FIELDS)) {
      console.log(`${key.padEnd(14)} ${field.label}`)
    }
    return
  }

  const fieldFlag = argv.indexOf('--field')
  const copyFlag = argv.indexOf('--copy')
  const key = fieldFlag >= 0 ? argv[fieldFlag + 1] : copyFlag >= 0 ? argv[copyFlag + 1] : ''

  if (key) {
    if (!FIELDS[key]) {
      console.error(`Champ inconnu : ${key}. Utilisez --list.`)
      process.exit(1)
    }
    if (copyFlag >= 0) copyToClipboard(FIELDS[key].body)
    printBlock(key)
    return
  }

  console.log(
    'Fiche Rafael Cap FPA — à créer dans CMaFormation.\n' +
      'Aucune date de session : le calendrier est en cours de finalisation.\n' +
      'Copie : npm run seo:rafael-fpa -- --copy resume\n'
  )
  for (const name of Object.keys(FIELDS)) printBlock(name)
}

main()
