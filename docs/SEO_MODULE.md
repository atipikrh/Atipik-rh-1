# Module SEO ATIPIK RH

Module centralisé dans `lib/seo/` pour mots-clés, intentions SERP, briefs éditoriaux, prompts IA et JSON-LD.

## Utilisation avec Cursor / IA

Avant de générer une page ou un article :

1. Identifier le **brief** (`formation-cip`, `bilan-competences-local`, `reconversion-bordeaux`, etc.).
2. S’appuyer sur le contexte exporté :

```ts
import { getSeoContextForAI } from '../lib/seo'

const ctx = getSeoContextForAI('formation-cip')
// ctx.prompts.page, ctx.prompts.meta, ctx.brief, ctx.schemaExample
```

3. Respecter [`cursor_seo_rules_vfinal.md`](../cursor_seo_rules_vfinal.md) (v3, sans vidéo).
4. **Revue humaine** obligatoire avant publication.

## Requêtes prospects

```ts
import { getSeoRecommendationFromProspectQuery } from '../lib/seo'

getSeoRecommendationFromProspectQuery('je veux devenir conseiller insertion')
// → mapping + contexte du brief formation-cip
```

## Fichiers principaux

| Fichier | Rôle |
|---------|------|
| `keywords.ts` | 10 clusters + `expandLongTail()` |
| `serp-intent.ts` | Snapshots SERP manuels + `mapProspectQuery()` |
| `content-briefs.ts` | 15 briefs (titres, meta, FAQ, maillage) |
| `prompts.ts` | Builders de prompts IA |
| `schema.ts` | JSON-LD + validation Zod |
| `page-registry.ts` | URLs indexables pour le sitemap |
| `certifiantesConfig.js` | Durées / GEO / liens contact UTM (CIP, FPA, CCP3) |
| `rafaelCapCip.ts` | Textes fiche CIP Rafael Cap / CMaFormation NA — voir [RAFAEL_CAP_FICHE_CIP.md](./RAFAEL_CAP_FICHE_CIP.md) |

Voir aussi [SEO_MDX_LEGACY.md](./SEO_MDX_LEGACY.md) pour les fichiers MDX non servis.

## Catalogue Digiforma

Le mini-site [atipikrh.catalogueformpro.com](https://atipikrh.catalogueformpro.com/) n’est pas le site vitrine. Config GA4 / canonique : [DIGIFORMA_CATALOGUE.md](./DIGIFORMA_CATALOGUE.md). Contrôle : `npm run check:digiforma`.

## Sitemap & robots

- Dynamiques : `app/sitemap.ts`, `app/robots.ts`
- URL : `https://www.atipikrh.com/sitemap.xml`

## Pages à créer (backlog)

Briefs prêts, pages React non publiées :

- `/reconversion-professionnelle-bordeaux`
- `/organisme-formation-insertion-professionnelle`
- `/formation-metiers-accompagnement-social`
- `/accompagnement-femmes-eloignees-emploi`
- `/formation-insertion-quartier-prioritaire-bordeaux`
- `/accompagnement-retour-emploi-lormont`

## Tests

```bash
npm run schema-test
npm run build
```

Puis vérifier `/sitemap.xml` et `/robots.txt` en local ou sur Vercel.

## Post-déploiement (automatisé)

```bash
npm run seo:post-deploy
```

Ce script :

1. Vérifie que `https://www.atipikrh.com/sitemap.xml` et `/robots.txt` répondent en 200
2. Envoie un **ping** du sitemap à Google et Bing (notification d’exploration, pas équivalent GSC)
3. Affiche le lien Search Console pour la soumission manuelle du sitemap (seule étape nécessitant votre compte Google)

Variable optionnelle : `SITE_URL=https://www.atipikrh.com`

### Veille SERP

Après analyse concurrentielle, mettre à jour `lib/seo/serp-intent.ts` (concurrents, PAA, `analyzedAt`). Dernière veille automatisée : mai 2026.

## Checklist QA manuelle

- [ ] Titres et meta uniques (pas de doublon entre briefs et pages live)
- [ ] Rich Results Test sur un échantillon JSON-LD (`getSeoContextForAI().schemaExample`)
- [ ] Lighthouse SEO sur une page existante (non régressée)
- [ ] Search Console : soumettre le nouveau sitemap après déploiement
- [ ] Enrichir les snapshots SERP dans `serp-intent.ts` après veille concurrentielle

## Exemples de mots-clés longue traîne

- `formation CIP Bordeaux financement CPF`
- `bilan de compétences Lormont prise de RDV`
- `reconversion professionnelle Bordeaux après 40 ans`
- `formation insertion quartier prioritaire Bordeaux`
- `formation FPA Nouvelle-Aquitaine`

Voir `getKeywordClusters()` et `expandLongTail('formation-cip-bordeaux')` pour la liste complète.
