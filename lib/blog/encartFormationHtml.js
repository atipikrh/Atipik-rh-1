/**
 * Encart tarif / durée aligné sur le catalogue.
 */
export function encartFormationHtml({ titre, href, lignes, disclaimer, tarifProfil }) {
  const items = lignes.map((ligne) => `<li>${ligne}</li>`).join('')
  return `
        <h2 id="formation">${titre}</h2>
        <ul>
          ${items}
        </ul>
        <p>${tarifProfil}</p>
        <p>${disclaimer}</p>
        <p>Le tarif intra reste sur étude personnalisée. <a href="${href}"><strong>Voir la fiche ${titre}</strong></a></p>`
}
