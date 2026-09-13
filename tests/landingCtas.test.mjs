import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  getCertifianteContactHref,
  getCertifianteRappelHref,
  getCertifianteReunionHref,
  getCertifianteGeoByBrief,
  PDF_CIP_PROGRAMME,
  PDF_CIP_CANDIDATURE,
  PDF_FPA_PROGRAMME,
  PDF_FPA_CANDIDATURE,
} from '../lib/seo/certifiantesConfig.js'
import {
  getFormationContactHref,
  getCourteRappelHref,
  getCourteHubContactHref,
  CONTACT_SUJET_COURTE,
} from '../lib/seo/professionnalisantesConfig.js'

describe('CTA landings certifiantes', () => {
  it('préremplit le select contact (formation-cip / formation-fpa)', () => {
    assert.match(getCertifianteContactHref('formation-cip'), /sujet=formation-cip/)
    assert.match(getCertifianteContactHref('formation-fpa'), /sujet=formation-fpa/)
    assert.match(getCertifianteContactHref('formation-ccp1'), /sujet=formation-cip/)
    assert.match(getCertifianteContactHref('formation-fpa-ccp1'), /sujet=formation-fpa/)
  })

  it('préremplit le rappel et la réunion', () => {
    const rappel = getCertifianteRappelHref('formation-cip')
    assert.match(rappel, /sujet=formation-cip/)
    assert.match(decodeURIComponent(rappel), /Je souhaite être rappelé/)
    assert.equal(getCertifianteReunionHref('formation-cip'), '/s-inscrire?formation=CIP')
    assert.equal(getCertifianteReunionHref('formation-fpa'), '/s-inscrire?formation=FPA')
    assert.equal(getCertifianteReunionHref('formation-ccp2'), '/s-inscrire?formation=CIP')
    assert.equal(getCertifianteReunionHref('formation-fpa-ccp3'), '/s-inscrire?formation=FPA')
  })

  it('expose les PDF programme et candidature (famille CIP / FPA)', () => {
    assert.equal(
      getCertifianteGeoByBrief('formation-cip').landing.pdfProgramme,
      PDF_CIP_PROGRAMME
    )
    assert.equal(
      getCertifianteGeoByBrief('formation-ccp3').landing.pdfCandidature,
      PDF_CIP_CANDIDATURE
    )
    assert.equal(
      getCertifianteGeoByBrief('formation-fpa').landing.pdfProgramme,
      PDF_FPA_PROGRAMME
    )
    assert.equal(
      getCertifianteGeoByBrief('formation-fpa-ccp4').landing.pdfCandidature,
      PDF_FPA_CANDIDATURE
    )
  })
})

describe('CTA landings formations courtes', () => {
  it('utilise le sujet formation-courte, pas un PDF CIP', () => {
    const contact = getFormationContactHref('developper-relation-entreprise')
    const rappel = getCourteRappelHref('developper-relation-entreprise')
    const hub = getCourteHubContactHref()
    assert.match(contact, new RegExp(`sujet=${CONTACT_SUJET_COURTE}`))
    assert.match(rappel, new RegExp(`sujet=${CONTACT_SUJET_COURTE}`))
    assert.match(hub, new RegExp(`sujet=${CONTACT_SUJET_COURTE}`))
    assert.doesNotMatch(contact, /plaquette-fpa|Formation-CIP|dossier-candidature/)
    assert.match(decodeURIComponent(rappel), /Je souhaite être rappelé/)
  })
})
