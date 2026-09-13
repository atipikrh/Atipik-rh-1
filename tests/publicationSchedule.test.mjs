import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  isBlogArticleLive,
  isScheduledBlogSlugLive,
  parisCalendarIso,
} from '../lib/blog/publicationSchedule.js'

describe('parisCalendarIso', () => {
  it('renvoie la date calendaire à Paris', () => {
    assert.equal(parisCalendarIso(new Date('2026-09-14T22:30:00Z')), '2026-09-15')
  })
})

describe('isBlogArticleLive', () => {
  it('laisse passer un article sans date planifiée', () => {
    assert.equal(isBlogArticleLive({ slug: 'ancien-article' }, new Date('2026-09-13T10:00:00Z')), true)
  })

  it('masque un article avant le jour J', () => {
    const article = {
      slug: 'recrutement-sans-discrimination-points-controle',
      isoDate: '2026-09-15',
    }
    assert.equal(isBlogArticleLive(article, new Date('2026-09-14T21:59:00Z')), false)
  })

  it('publie un article le jour J (heure de Paris)', () => {
    const article = {
      slug: 'recrutement-sans-discrimination-points-controle',
      isoDate: '2026-09-15',
    }
    assert.equal(isBlogArticleLive(article, new Date('2026-09-15T05:00:00Z')), true)
  })
})

describe('isScheduledBlogSlugLive', () => {
  it('filtre le sitemap avant la date ISO', () => {
    assert.equal(
      isScheduledBlogSlugLive('formation-cip-ou-fpa-quelle-certification-choisir', new Date('2026-09-28T12:00:00Z')),
      false
    )
    assert.equal(
      isScheduledBlogSlugLive('formation-cip-ou-fpa-quelle-certification-choisir', new Date('2026-09-29T05:00:00Z')),
      true
    )
  })
})
