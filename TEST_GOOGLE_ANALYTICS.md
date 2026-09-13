# Guide de test Google Analytics

## URL du site
- Production : `https://atipikrh.fr` ou `https://www.atpikrh.com`
- Vercel : Vérifiez dans votre dashboard Vercel pour l'URL de déploiement

## ID Google Analytics
- **ID de mesure** : `G-0T6JYZBLQN`
- **ID de flux** : `3348763659`

## Catalogue Digiforma

Dans **Ma Marque → Catalogue en ligne** :

- Google Analytics ID : `G-0T6JYZBLQN` (jamais `UA-223055534-1` ni le nom « ATIPIK RH »)
- URL canonique : **vide** (aucun proxy inverse)

Contrôle : `npm run check:digiforma` — détail dans [`docs/DIGIFORMA_CATALOGUE.md`](docs/DIGIFORMA_CATALOGUE.md).

---

## Test 1 : Vérification sans consentement

### Étapes :
1. Ouvrez le site dans un navigateur en **mode navigation privée** (ou supprimez les cookies)
2. Ouvrez la console développeur (F12)
3. Vérifiez que la bannière de cookies s'affiche

### Vérifications dans la console :
```javascript
// Vérifier que gtag n'existe PAS encore
console.log(typeof window.gtag) // Doit retourner "undefined"

// Vérifier que dataLayer existe mais est vide ou ne contient pas d'événements GA
console.log(window.dataLayer) // Peut contenir GTM mais pas d'événements GA

// Vérifier que les scripts GA ne sont pas chargés
console.log(document.querySelector('script[src*="gtag/js"]')) // Doit retourner null ou le script non exécuté
```

### ✅ Résultat attendu :
- Bannière de cookies visible
- `window.gtag` est `undefined`
- Aucun appel réseau vers `google-analytics.com` ou `googletagmanager.com/gtag`

---

## Test 2 : Test avec consentement analytique

### Étapes :
1. Sur la page d'accueil, cliquez sur **"Accepter tout"** dans la bannière de cookies
2. Attendez 1-2 secondes
3. Vérifiez dans la console

### Vérifications dans la console :
```javascript
// Vérifier que gtag existe maintenant
console.log(typeof window.gtag) // Doit retourner "function"

// Vérifier que dataLayer contient des événements
console.log(window.dataLayer) // Doit contenir des événements avec 'config' et 'G-0T6JYZBLQN'

// Vérifier la configuration GA
console.log(window.dataLayer.filter(e => e[0] === 'config')) // Doit contenir la config avec anonymize_ip: true
```

### Vérifications dans l'onglet Network :
1. Ouvrez l'onglet **Network** dans les DevTools
2. Filtrez par `gtag` ou `google-analytics`
3. Vous devriez voir des requêtes vers :
   - `https://www.googletagmanager.com/gtag/js?id=G-0T6JYZBLQN`
   - `https://www.google-analytics.com/g/collect?...`

### ✅ Résultat attendu :
- `window.gtag` est une fonction
- Les scripts GA sont chargés
- Des requêtes réseau vers Google Analytics sont visibles
- `dataLayer` contient la configuration avec `anonymize_ip: true`

---

## Test 3 : Test du tracking des pages

### Étapes :
1. Après avoir accepté les cookies, naviguez vers différentes pages :
   - `/formations`
   - `/bilan-de-competences`
   - `/contact`
   - `/vae`

### Vérifications dans la console :
```javascript
// Surveiller les événements dans dataLayer
window.dataLayer.push = (function(original) {
  return function() {
    console.log('[GA Event]', arguments[0]);
    return original.apply(this, arguments);
  };
})(window.dataLayer.push);

// Ou simplement surveiller dataLayer
setInterval(() => {
  console.log('DataLayer length:', window.dataLayer.length);
  console.log('Last events:', window.dataLayer.slice(-3));
}, 2000);
```

### Vérifications dans l'onglet Network :
- À chaque changement de page, vous devriez voir une nouvelle requête vers `google-analytics.com/g/collect`
- Les paramètres `ep.page_location` doivent changer avec chaque page

### ✅ Résultat attendu :
- Un événement `config` est envoyé à chaque changement de page
- L'URL de la page (`page_path`) est correctement trackée
- Les requêtes réseau montrent les pages visitées

---

## Test 4 : Vérification dans Google Analytics Real-Time

### Étapes :
1. Connectez-vous à [Google Analytics](https://analytics.google.com)
2. Sélectionnez la propriété avec l'ID `G-0T6JYZBLQN`
3. Allez dans **Rapports** → **Temps réel**
4. Ouvrez le site dans un autre onglet et naviguez

### Vérifications dans GA Real-Time :
- **Utilisateurs actifs** : Doit afficher au moins 1 utilisateur
- **Pages vues par minute** : Doit augmenter lors de la navigation
- **Pages les plus consultées** : Doit lister les pages visitées
- **Événements en temps réel** : Peut afficher des événements si configurés

### ✅ Résultat attendu :
- Les pages visitées apparaissent dans Real-Time dans les 30 secondes
- L'URL de la page correspond à celle visitée
- Le nombre d'utilisateurs actifs augmente

---

## Test 5 : Vérification du consentement RGPD

### Test de refus des cookies :
1. Supprimez les cookies et rechargez la page
2. Cliquez sur **"Refuser tout"**
3. Vérifiez que GA ne se charge pas :
```javascript
console.log(typeof window.gtag) // Doit retourner "undefined"
console.log(localStorage.getItem('cookieConsent')) // Doit contenir {"analytics":false}
```

### Test de changement de consentement :
1. Après avoir refusé, cliquez sur les paramètres de cookies
2. Activez uniquement les cookies analytiques
3. Cliquez sur "Enregistrer mes choix"
4. Vérifiez que GA se charge maintenant :
```javascript
setTimeout(() => {
  console.log(typeof window.gtag) // Doit retourner "function" après 1-2 secondes
}, 2000);
```

---

## Checklist finale

- [ ] GA ne se charge pas sans consentement
- [ ] GA se charge après acceptation du consentement analytique
- [ ] Les pages sont trackées lors de la navigation
- [ ] Les événements apparaissent dans Google Analytics Real-Time
- [ ] L'anonymisation IP est activée (`anonymize_ip: true`)
- [ ] Le consentement peut être modifié dynamiquement
- [ ] GTM continue de fonctionner en parallèle

---

## Dépannage

### GA ne se charge pas après acceptation :
1. Vérifiez la console pour les erreurs JavaScript
2. Vérifiez que `localStorage.getItem('cookieConsent')` contient `{"analytics":true}`
3. Vérifiez que les scripts gtag.js sont présents dans le HTML

### Les pages ne sont pas trackées :
1. Vérifiez que le hook `useGoogleAnalytics` est bien appelé dans `_app.js`
2. Vérifiez que `router.events` est bien configuré
3. Vérifiez les erreurs dans la console

### Les données n'apparaissent pas dans GA Real-Time :
1. Attendez 30-60 secondes (délai de traitement)
2. Vérifiez que vous êtes connecté au bon compte GA
3. Vérifiez que l'ID de mesure `G-0T6JYZBLQN` est correct
4. Vérifiez les filtres dans GA (peut exclure votre IP)

---

## Commandes utiles pour le débogage

```javascript
// Vérifier le consentement
JSON.parse(localStorage.getItem('cookieConsent'))

// Vérifier si GA est initialisé
window.gtag && typeof window.gtag === 'function'

// Voir tous les événements dans dataLayer
window.dataLayer.filter(e => e[0] === 'event' || e[0] === 'config')

// Forcer l'initialisation de GA (pour test)
import { initGA } from './lib/analytics'
initGA()

// Tester le tracking d'une page
import { trackPageView } from './lib/analytics'
trackPageView('/test-page')

// Tester un événement
import { trackEvent } from './lib/analytics'
trackEvent('click', 'button', 'test-button', 1)
```
