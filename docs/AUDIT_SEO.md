# Audit SEO Atipik RH — 13 septembre 2026

Contrôle production + correctifs code. Déploiement Vercel requis pour que le sitemap et les métas live suivent le dépôt.

## Synthèse

| Zone | Statut | Action restante |
| --- | --- | --- |
| Sitemap production | Bloquant (HTTP 500 au moment de l’audit) | Déployer `app/sitemap.ts` + registry |
| robots.txt | OK | — |
| Search Console API | Auth OK — 67 URLs avec impressions | `seo:gsc-sync` seulement après sitemap 200 |
| Doublons blog | Canoniques + exclusion sitemap | Vérifier impressions GSC après déploiement |
| Titres / H1 / meta piliers | Alignés sur les briefs | Contrôle live après déploiement |
| Rafael CIP | Sessions locales à jour (2 sessions) | Recoller textes + modalités dans le back-office |
| Fiche FPA Rafael | Absente | Création organisme |
| Google Business Profile | NAP / schema corrigés dans le code | Checklist dashboard propriétaire |

## 1. Search Console

Audit API du 13/09/2026 (`npm run seo:gsc-audit`, OAuth local OK).

- Sitemap déclaré : `https://www.atipikrh.com/sitemap.xml` — 0 erreur GSC, dernier téléchargement **07/09/2026**. Le fetch live du 13/09 renvoie pourtant **HTTP 500** : Google a une copie ancienne ; il faut réparer puis resoumettre (`seo:gsc-sync` **après** 200).
- **Ne pas** lancer `seo:gsc-sync` tant que le sitemap est en 500.

Top pages (16 semaines, extraits) :

| URL | Impr. | Clics | CTR |
| --- | --- | --- | --- |
| `https://www.atipikrh.com/` | 1880 | 222 | 11,8 % |
| `http://www.atipikrh.com/` | 2556 | 109 | 4,3 % |
| `/formations/cip` | 1793 | 29 | 1,6 % |
| `/bilan-de-competences` | 2796 | 12 | 0,4 % |
| `/formations` | 629 | 8 | 1,3 % |
| `/formations/fpa` | 364 | 6 | 1,6 % |
| `/vae` | 670 | 1 | 0,1 % |
| `/blog/recruter-par-les-competences-penurie-talents` | 219 | 2 | 0,9 % |
| `/blog/formation-cip-bordeaux-conseiller-insertion-professionnelle` | 172 | 0 | 0 % |
| `/blog/recrutement-sans-discrimination` | 130 | 2 | 1,5 % |

HTTP home : redirection **308** vers HTTPS déjà en place (`curl -I`). Impressions HTTP = reliquat GSC. Apex `atipikrh.com` → www via [`vercel.json`](../vercel.json).

Doublons CIP Lormont et « coûts 30 % » : **absents** du top 50 (pas de 301 immédiat).

PDFs (`plaquette-CIP`, dossier candidature, Qualiopi) reçoivent quelques impressions — hors HTML.

Scripts : `seo:gsc-sync`, `seo:gsc-oauth-setup`, `seo:gsc-audit`. Dépendance `google-auth-library`.

Checklist UI : [Sitemaps GSC](https://search.google.com/search-console/sitemaps?resource_id=sc-domain%3Aatipikrh.com)

## 2. Sitemap et robots.txt

**robots.txt production** (200) :

- `Allow: /`
- `Disallow` : `/api/`, `/_next/`, `/admin/`, `/wp-content/`, query `page_id`, `mailpoet_page`, `s`, `trk`
- `Sitemap: https://www.atipikrh.com/sitemap.xml`

**sitemap.xml production** : HTTP 500 au 13/09/2026 (WebFetch). Cause probable : génération App Router + imports JS sans extension / runtime. Correctifs :

- `runtime = 'nodejs'`, `dynamic = 'force-dynamic'`
- imports `.js` explicites
- try/catch (fallback homepage si erreur)
- exclusion des URLs non canoniques

Commandes après déploiement : `npm run check:seo:prod`.

## 3. Inventaire des pages à indexer

Source : `getIndexableRegistry()` (hors articles planifiés non live, hors doublons canoniques).

Groupes :

- Accueil, blog, contact, s-inscrire, équipe, légales
- Formations : hub, CIP, FPA, CCP CIP 1–3, CCP FPA 1–4, 7 fiches professionnalisantes, hub courtes
- Services : bilan, quiz bilan, VAE, financement, reconversion Bordeaux, OF insertion, location salles + 5 fiches
- Blog : slugs `BLOG_SLUGS` live **sauf** les 2 canoniques secondaires

Hors sitemap (volontaire) :

- `/blog/formation-conseiller-insertion-professionnelle-lormont`
- `/blog/comment-reduire-couts-recrutement-30-pourcent-formation-rh`
- `PLANNED_PATHS` (pages briefées non publiées)

GSC (impressions, pas un crawl Coverage) confirme les piliers CIP, FPA, bilan, VAE, hub formations, reconversion, fiches professionnalisantes et plusieurs articles. L’article CIP Bordeaux a des impressions sans clic (172 / 0) — titre/meta à surveiller après déploiement.

## 4. Articles en doublon

| Cluster | Pilier | Secondaire | Traitement |
| --- | --- | --- | --- |
| CIP | `formation-cip-bordeaux-conseiller-insertion-professionnelle` | `…-lormont` | Canonical + hors sitemap |
| Coûts recrutement | `reduire-couts-recrutement-formation-rh` | `comment-reduire-couts-…-30-pourcent-…` | Canonical + hors sitemap |
| Discrimination | `recrutement-sans-discrimination` (méthode 4 étapes) | 7 points, cadre légal, obligation formation, 25 critères | Conservés, titres/meta différenciés |
| Compétences | `recrutement-competences-methode-complete-rh-2026` | `recruter-par-les-competences-penurie-talents` | Meta pénurie vs méthode 5 étapes |
| Bilan / VAE | Intentions distinctes (étapes, signes, financement, comparatif) | — | Conservés |

Source : [`lib/blog/canonicalOverrides.js`](../lib/blog/canonicalOverrides.js).

Pas de 301 (URLs encore accessibles). Si GSC montre encore des impressions sur les secondaires : envisager 301.

## 5. Titres, H1, meta — piliers

| Page | Title (brief) | H1 visible |
| --- | --- | --- |
| `/formations/cip` | Formation CIP Bordeaux & Lormont \| Titre niveau 5 \| Atipik RH | Formation CIP à Lormont — Conseiller en Insertion Professionnelle |
| `/formations/fpa` | Formation FPA Nouvelle-Aquitaine \| Atipik RH Lormont | Formation FPA — Formateur Professionnel d'Adultes |
| `/bilan-de-competences` | Bilan de compétences Lormont & Bordeaux \| Atipik RH | Bilan de compétences à Lormont, proche de Bordeaux |
| `/vae` | VAE à Lormont & Bordeaux \| Atipik RH (`ServicePageSeoHead`) | VAE — Valoriser son expérience professionnelle |
| `/formations/courtes-professionnalisantes` | Formations courtes professionnalisantes \| Atipik RH | Formations courtes professionnalisantes en insertion |

Contrôle live : `npm run seo:audit-pages`.

## 6. Pages CIP, FPA, VAE, courtes, bilan

- CIP : 200, lien Rafael Cap, FAQ, GEO, JSON-LD Course/FAQ via brief.
- FPA : 200, stats internes « À venir » (normal si 1re session), **pas de fiche Rafael**.
- CCP CIP/FPA : briefs + `ServicePageSeoHead`.
- Courtes : hub + 7 slugs `PROFESSIONNALISANTES_SLUGS`.
- Bilan : brief `bilan-competences-local`. Quiz indexable.
- VAE : brief `vae` (plus de title hardcodé).
- Redirections déjà en place : `/vae/cpf`, `/bilan-de-competences/cpf`, anciennes URLs WordPress formations.

## 7. Rafael / Cap Métiers

Fiche CIP live : [CMaFormation 202208149548](https://www.cmaformation-na.fr/formations/view/202208149548)

Sessions live = code (fév. 2026 Carif `00620710`, sept. 2026 `00671150`). Session sept. 2025 retirée du code.

Écarts back-office à recoller (`npm run seo:rafael-cip`) :

- « Le + » : typo live « rivière droite » → texte source `lePlus`
- Modalités live « Sans objet » → `modalitesEnseignement`
- Emails sessions (administratif vs contact) : harmoniser `contact@atipikrh.com`

Fiche **FPA** : à créer côté organisme, puis brancher `rafaelCap` dans `certifiantesConfig.js`.

## 8. Google Business Profile

Corrigé dans le code (après déploiement) :

- Téléphone E.164 `+33783019955` (plus le placeholder `+33500000000`)
- Email, horaires `Mo-Fr 09:00-18:00` / `Sa 09:00-12:00`
- `sameAs` : LinkedIn / Facebook / Instagram `atipik-rh33` + URL Maps recherche Lormont

Checklist **compte propriétaire** (hors code) :

- [ ] Fiche revendiquée, catégorie « Organisme de formation » (ou équivalent)
- [ ] Adresse 8 Rue du Courant, 33310 Lormont
- [ ] Téléphone 07 83 01 99 55
- [ ] Site `https://www.atipikrh.com`
- [ ] Horaires identiques (samedi sur RDV)
- [ ] Photos, description CIP/FPA/bilan/VAE, UTM `utm_source=google&utm_medium=organic&utm_campaign=gbp`
- [ ] Réponses aux avis ; URL Place à coller dans `SOCIAL_URLS.googleMaps` dès qu’elle est stable (CID)

Une fiche Bottin.fr (note ~4,9) agrège probablement Google ; la page Maps officielle n’est pas apparue clairement dans la recherche web de l’audit.

## Commandes

```bash
npm run schema-test
npm run test
npm run seo:audit-pages
npm run check:seo:prod
npm run seo:gsc-oauth-setup   # une fois
npm run seo:gsc-audit
npm run seo:gsc-sync
npm run seo:rafael-cip
npm run seo:post-deploy
```

## Hors code (humain)

1. Déployer ce commit.
2. Vérifier `https://www.atipikrh.com/sitemap.xml` → 200, ≥ 60 URL.
3. Auth GSC + resoumission sitemap.
4. Dashboard GBP.
5. Mise à jour fiche Rafael CIP + création FPA.
