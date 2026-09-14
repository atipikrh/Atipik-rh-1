import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { buildContactHref, buildReunionHref } from '../lib/seo/landingHrefs.js'
import {
  getFormationContactHref,
  getCourteRappelHref,
  getCourteHubContactHref,
  CONTACT_SUJET_COURTE,
} from '../lib/seo/professionnalisantesConfig.js'

describe('CTA landings certifiantes (hrefs)', () => {
  it('préremplit le select contact (formation-cip / formation-fpa)', () => {
    const cip = buildContactHref({
      sujetContact: 'formation-cip',
      contactCampaign: 'formation_cip',
    })
    const fpa = buildContactHref({
      sujetContact: 'formation-fpa',
      contactCampaign: 'formation_fpa',
    })
    assert.match(cip, /sujet=formation-cip/)
    assert.match(fpa, /sujet=formation-fpa/)
    assert.doesNotMatch(cip, /Demande\+formation/)
    assert.doesNotMatch(cip, /utm_/)
    assert.doesNotMatch(fpa, /utm_/)
  })

  it('préremplit le rappel et la réunion', () => {
    const rappel = buildContactHref({
      sujetContact: 'formation-cip',
      contactCampaign: 'formation_cip',
      message: 'Je souhaite être rappelé au sujet de la formation CIP.',
    })
    const params = new URLSearchParams(rappel.split('?')[1])
    assert.equal(params.get('sujet'), 'formation-cip')
    assert.match(params.get('message') || '', /Je souhaite être rappelé/)
    assert.equal(buildReunionHref('CIP'), '/s-inscrire?formation=CIP')
    assert.equal(buildReunionHref('FPA'), '/s-inscrire?formation=FPA')
    assert.equal(buildReunionHref(''), '/s-inscrire')
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
    assert.doesNotMatch(contact, /utm_/)
    assert.doesNotMatch(rappel, /utm_/)
    assert.doesNotMatch(hub, /utm_/)
    const rappelParams = new URLSearchParams(rappel.split('?')[1])
    assert.match(rappelParams.get('message') || '', /Je souhaite être rappelé/)
    const contactParams = new URLSearchParams(contact.split('?')[1])
    assert.equal(contactParams.get('sujet'), CONTACT_SUJET_COURTE)
    assert.match(contactParams.get('message') || '', /Développer la relation entreprise/)
  })
})
