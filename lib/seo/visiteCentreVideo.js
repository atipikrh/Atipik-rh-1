/**
 * Visite du centre filmée par La Cité's Compagnie.
 * Une seule page canonique : l'article blog sur le centre de Lormont.
 * Pas de date de mise en ligne Facebook vérifiable : ne pas inventer uploadDate.
 */

export const VISITE_CENTRE_ARTICLE_PATH =
  '/blog/centre-formation-lormont-rive-droite-bordeaux'

export const VISITE_CENTRE_VIDEO = {
  watchUrl: 'https://www.facebook.com/watch/?v=809260151552397',
  title: 'Visite du centre Atipik RH à Lormont',
  description:
    "La Cité's Compagnie a filmé une visite du centre Atipik RH, au 8 rue du Courant, 33310 Lormont. La vidéo montre le lieu avec Coraline Abadie, Vanessa Noah et Mouna Mniai.",
  credit: "La Cité's Compagnie",
  thumbnailPath: '/images/hero/formations.jpg',
  articlePath: VISITE_CENTRE_ARTICLE_PATH,
  people: [
    { name: 'Coraline Abadie', href: '/equipe/coraline-abadie' },
    { name: 'Vanessa Noah', href: '/equipe/vanessa-noah-ewodo' },
    { name: 'Mouna Mniai', href: '/equipe/mouna-mniai' },
  ],
}

export function facebookVideoEmbedUrl(watchUrl) {
  const params = new URLSearchParams({
    href: watchUrl,
    show_text: 'false',
    width: '560',
  })
  return `https://www.facebook.com/plugins/video.php?${params.toString()}`
}
