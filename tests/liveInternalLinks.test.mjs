import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  getBlogSlugFromHref,
  isInternalHrefLive,
  filterLiveInternalLinks,
  rewriteUnpublishedBlogAnchors,
} from '../lib/blog/liveInternalLinks.js'

const beforePublish = new Date('2026-09-13T12:00:00.000Z')
const afterPublish = new Date('2026-09-16T12:00:00.000Z')

describe('liveInternalLinks', () => {
  it('extrait le slug d’un href blog', () => {
    assert.equal(
      getBlogSlugFromHref('/blog/recrutement-sans-discrimination-points-controle'),
      'recrutement-sans-discrimination-points-controle'
    )
    assert.equal(getBlogSlugFromHref('/formations/cip'), null)
    assert.equal(getBlogSlugFromHref('/contact?sujet=test'), null)
  })

  it('masque un article planifié avant sa date de mise en ligne', () => {
    const href = '/blog/recrutement-sans-discrimination-points-controle'
    assert.equal(isInternalHrefLive(href, beforePublish), false)
    assert.equal(isInternalHrefLive(href, afterPublish), true)
    assert.equal(isInternalHrefLive('/formations/cip', beforePublish), true)
  })

  it('filtre les liens internes non live', () => {
    const links = [
      { label: 'CIP', href: '/formations/cip' },
      { label: 'Points de contrôle', href: '/blog/recrutement-sans-discrimination-points-controle' },
    ]
    const live = filterLiveInternalLinks(links, beforePublish)
    assert.equal(live.length, 1)
    assert.equal(live[0].href, '/formations/cip')
  })

  it('retire l’ancre HTML d’un article non publié', () => {
    const html =
      '<p>Voir <a href="/blog/recrutement-sans-discrimination-points-controle"><strong>7 points</strong></a> et <a href="/formations/cip">CIP</a>.</p>'
    const rewritten = rewriteUnpublishedBlogAnchors(html, beforePublish)
    assert.equal(
      rewritten,
      '<p>Voir <strong>7 points</strong> et <a href="/formations/cip">CIP</a>.</p>'
    )
  })
})
