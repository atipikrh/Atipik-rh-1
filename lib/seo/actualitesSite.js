/**
 * Actualités affichées sur l'accueil.
 * Uniquement des faits déjà publiés sur le site (sessions, réunions, articles en ligne).
 */

import { isBlogArticleLive } from '../blog/publicationSchedule.js'
import { DATES_CIP, DATES_FPA, getUpcomingReunions } from '../reunions/dates.js'
import { articlesCaOctobreListing } from './campagnesCaOctobre2026.js'

const CANDIDATURES_CIP = {
  id: 'cip-mars-2027',
  iso: '2026-10-03',
  dateLabel: '3 octobre 2026',
  title: 'Candidatures ouvertes pour la session CIP de mars 2027',
  text: 'Du 22 mars au 22 octobre 2027 à Lormont. 14 places.',
  href: '/formations/cip',
}

function reunionItem(reunion, formation) {
  return {
    id: `${formation}-${reunion.date}`,
    iso: reunion.date,
    dateLabel: reunion.jour,
    title: `Réunion d'information ${formation}`,
    text: `${reunion.heure}, en ${reunion.modalite}, au centre de Lormont.`,
    href: `/s-inscrire?formation=${formation}`,
  }
}

function latestLiveArticle(now) {
  return articlesCaOctobreListing
    .filter((article) => isBlogArticleLive(article, now))
    .sort((a, b) => b.isoDate.localeCompare(a.isoDate))[0]
}

function articleItem(article) {
  const text = article.excerpt.length > 160 ? `${article.excerpt.slice(0, 157).trimEnd()}…` : article.excerpt
  return {
    id: article.slug,
    iso: article.isoDate,
    dateLabel: article.date,
    title: article.title,
    text,
    href: `/blog/${article.slug}`,
  }
}

function parisIso(now) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now)
}

/** Prochaines dates d'abord, puis les annonces déjà ouvertes. */
export function getActualitesSite(now = new Date()) {
  const today = parisIso(now)
  const cip = getUpcomingReunions(DATES_CIP, 1)[0]
  const fpa = getUpcomingReunions(DATES_FPA, 1)[0]
  const article = latestLiveArticle(now)

  const items = [CANDIDATURES_CIP]
  if (cip) items.push(reunionItem(cip, 'CIP'))
  if (fpa) items.push(reunionItem(fpa, 'FPA'))
  if (article) items.push(articleItem(article))

  const upcoming = items.filter((item) => item.iso >= today).sort((a, b) => a.iso.localeCompare(b.iso))
  const opened = items.filter((item) => item.iso < today).sort((a, b) => b.iso.localeCompare(a.iso))
  return [...upcoming, ...opened].slice(0, 4)
}
