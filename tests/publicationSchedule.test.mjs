import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  getBlogPublishIso,
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
  it('expose la date de publication pour le sitemap', () => {
    assert.equal(getBlogPublishIso('neurodiversite-inclusion-recrutement'), '2026-10-01')
    assert.equal(getBlogPublishIso('article-sans-calendrier'), null)
  })

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

  it('publie l’article VAE expérience le 24 septembre 2026', () => {
    assert.equal(
      isScheduledBlogSlugLive('experience-professionnelle-non-reconnue-vae', new Date('2026-09-23T21:59:00Z')),
      false
    )
    assert.equal(
      isScheduledBlogSlugLive('experience-professionnelle-non-reconnue-vae', new Date('2026-09-24T05:00:00Z')),
      true
    )
  })

  it('publie le parcours insertion le 7 octobre 2026 à 8 h, pas avant', () => {
    const slug = 'recruter-en-insertion-parcours-entreprise-candidat'
    const article = { slug, isoDate: '2026-10-07' }
    assert.equal(isScheduledBlogSlugLive(slug, new Date('2026-10-06T21:59:00Z')), false)
    assert.equal(isBlogArticleLive(article, new Date('2026-10-07T05:59:00Z')), false)
    assert.equal(isScheduledBlogSlugLive(slug, new Date('2026-10-07T05:59:00Z')), false)
    assert.equal(isBlogArticleLive(article, new Date('2026-10-07T06:00:00Z')), true)
    assert.equal(isScheduledBlogSlugLive(slug, new Date('2026-10-07T06:00:00Z')), true)
  })

  it('publie l’article intra le 29 octobre 2026 à 8 h (heure d’hiver)', () => {
    const slug = 'quelle-formation-courte-choisir-equipe'
    assert.equal(isScheduledBlogSlugLive(slug, new Date('2026-10-29T06:59:00Z')), false)
    assert.equal(isScheduledBlogSlugLive(slug, new Date('2026-10-29T07:00:00Z')), true)
  })

  it('garde masqués les articles du parcours jusqu’à leur jour J', () => {
    const beforeParisMidnight = new Date('2026-09-14T21:59:00Z')
    assert.equal(isScheduledBlogSlugLive('recrutement-sans-discrimination-points-controle', beforeParisMidnight), false)
    assert.equal(isScheduledBlogSlugLive('recrutement-inclusif-objectiver-criteres', new Date('2026-09-16T21:59:00Z')), false)
    assert.equal(isScheduledBlogSlugLive('salarie-demotive-bilan-de-competences', new Date('2026-09-21T21:59:00Z')), false)
    assert.equal(isScheduledBlogSlugLive('formation-cip-ou-fpa-quelle-certification-choisir', new Date('2026-09-28T21:59:00Z')), false)
    assert.equal(isScheduledBlogSlugLive('neurodiversite-inclusion-recrutement', new Date('2026-09-30T21:59:00Z')), false)
    assert.equal(isScheduledBlogSlugLive('neurodiversite-inclusion-recrutement', new Date('2026-10-01T05:00:00Z')), true)
  })
})
