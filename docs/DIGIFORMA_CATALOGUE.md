# Catalogue Digiforma — Analytics et URL canonique

Valeurs à renseigner dans **Digiforma → Configuration → Ma Marque → Catalogue en ligne**.

Catalogue public : [https://atipikrh.catalogueformpro.com/](https://atipikrh.catalogueformpro.com/)

## Valeurs correctes

| Champ | Valeur | État live (10 sept. 2026) |
|---|---|---|
| Google Analytics ID | `G-0T6JYZBLQN` | En place sur le catalogue |
| URL canonique | *(vide)* | **À vider** — Digiforma publie encore `https://www.atipikrh.com/` |

| Champ | Valeur | Pourquoi |
|---|---|---|
| Google Analytics ID | `G-0T6JYZBLQN` | ID de mesure GA4 du site ([`lib/analytics.js`](../lib/analytics.js)). Universal Analytics (`UA-…`) ne collecte plus depuis juillet 2023. |
| URL canonique | *(vide)* | Pas de proxy inverse. Le catalogue reste sur `catalogueformpro.com`. |

Ne pas coller `ATIPIK RH UA-223055534-1` : « ATIPIK RH » est le nom de la propriété, pas l’ID. Digiforma injecte alors un `gtag` invalide.

Ne pas coller `https://www.atipikrh.com` : Digiforma préfixe chaque page du catalogue (`/2/action-de-formation` devient `https://www.atipikrh.com/2/action-de-formation`, URL inexistante sur le site).

Ne pas coller `GTM-T45Z2XRQ` : ce champ attend un ID Analytics (`G-` ou `UA-`), pas un conteneur Tag Manager.

## Quand remplir l’URL canonique

Uniquement après mise en place d’un **proxy inverse** (ex. `https://formations.atipikrh.com` qui sert `atipikrh.catalogueformpro.com`). Dans ce cas, coller l’URL **exacte du catalogue proxifié**, pas la page d’accueil du site.

Doc Digiforma : [intégrer le catalogue sur un domaine personnalisé](https://help.digiforma.com/fr/articles/4318995-comment-integrer-le-catalogue-en-ligne-sur-un-domaine-personnalise).

## Contrôle

Après enregistrement dans Digiforma :

```bash
npm run check:digiforma
```

Dans GA4 (`G-0T6JYZBLQN`) : **Rapports → Temps réel**, ouvrir une page du catalogue et vérifier qu’une visite apparaît.
