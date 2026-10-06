/**
 * Liens de maillage minimum en fin de corps HTML.
 * @param {object} article
 */
export function maillageCaHtml(article) {
  return `
        <h2 id="suite">Pour aller plus loin</h2>
        <ul>
          <li><a href="${article.formationHref}"><strong>${article.formationLabel}</strong></a></li>
          <li><a href="${article.contactHref}"><strong>${article.ctaLabel}</strong></a></li>
          <li><a href="${article.reunionHref}">Réunion d'information</a></li>
          <li><a href="${article.relatedHref}">${article.relatedLabel}</a></li>
        </ul>
        <p><a href="#devis-equipe"><strong>${article.ctaLabel}</strong></a></p>
        <p>${article.reassurance}</p>`
}
