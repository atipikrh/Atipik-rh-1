import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { DATES_CIP, DATES_FPA, getUpcomingReunions } from '../lib/reunions/dates.js'

describe('getUpcomingReunions', () => {
  it('suit le calendrier de Paris, pas le jour UTC', () => {
    // 10 oct 22:30 UTC = 11 oct 00:30 à Paris : le 10 octobre est déjà passé.
    const now = new Date('2026-10-10T22:30:00Z')
    const upcoming = getUpcomingReunions(DATES_CIP, 1, now)
    assert.equal(upcoming[0].date, '2026-10-27')
  })

  it('garde la réunion du jour à Paris, même si UTC est encore la veille', () => {
    // 26 oct 22:30 UTC = 27 oct 00:30 à Paris.
    const now = new Date('2026-10-26T22:30:00Z')
    const upcoming = getUpcomingReunions(DATES_CIP, 1, now)
    assert.equal(upcoming[0].date, '2026-10-27')
  })

  it('aligne CIP et FPA sur la journée du 15 octobre 2026', () => {
    const now = new Date('2026-10-15T07:48:00Z')
    assert.equal(getUpcomingReunions(DATES_CIP, 1, now)[0].date, '2026-10-27')
    assert.equal(getUpcomingReunions(DATES_FPA, 1, now)[0].date, '2026-10-24')
  })
})
