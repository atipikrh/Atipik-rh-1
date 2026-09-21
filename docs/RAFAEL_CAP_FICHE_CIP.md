# Fiche CIP — Rafael Cap / CMaFormation Nouvelle-Aquitaine

Référence fiche : **202208149548**  
URL publique : https://www.cmaformation-na.fr/formations/view/202208149548  
Source technique : [`lib/seo/rafaelCapCip.ts`](../lib/seo/rafaelCapCip.ts)

## Export CLI (copier-coller)

```bash
npm run seo:rafael-cip              # tous les blocs
npm run seo:rafael-cip -- --list    # champs disponibles
npm run seo:rafael-cip -- --copy resume
npm run seo:rafael-cip -- --field public
```

## Checklist publication back-office

- [ ] **Titre** → `titre` ou `titreCourt`
- [ ] **Le + de cette formation** → `lePlus`
- [ ] **Description / résumé** → `resume`
- [ ] **Objectif** → `objectifs`
- [ ] **Public** → `public` (ou intégrer au résumé / conditions selon formulaire)
- [ ] **Prérequis** → `prerequis` + `conditionsAdmissionDetail`
- [ ] **Compétences visées** → `competencesVisees` (ou programme si champ dédié)
- [ ] **Débouchés** → `debouches`
- [ ] **Modalités d'enseignement** → `modalitesEnseignement` (remplacer « Sans objet »)
- [ ] **Conditions d'admission** → `conditionsAdmissionIntro` puis `conditionsAdmissionDetail`
- [ ] **Mots-clés** → `motsCles` (30 termes — voir `RAFAEL_CAP_CIP_MOTS_CLES`)
- [ ] **Lien site organisme** → `organismeSiteUrl` (UTM `cmaformation`)
- [ ] **Sessions** → tableau ci-dessous

## Ciblage SEO prescripteurs

Requêtes visées : insertion professionnelle, accompagnement emploi, CIP, reconversion professionnelle, médiation emploi, accompagnement socioprofessionnel, France Travail, Mission Locale, Cap Emploi.

## Sessions CARIF (synchronisation)

| CARIF     | Dates (fiche au 13/09/2026) | Libellé recommandé |
|-----------|-------------------------------|--------------------|
| 00620710  | 09/02/2026 → 23/10/2026       | Rentrée fév. 2026 — Lormont, éligible CPF |
| 00671150  | 22/03/2027 → 22/10/2027       | Rentrée mars 2027 — Lormont, éligible CPF |

Adresse commune : **8 rue du Courant, 33310 Lormont**. Logo CPF sur chaque session.

Après modification d’une session dans Rafael, mettre à jour `sessions` dans `lib/seo/rafaelCapCip.ts`.

## Correspondance champs

| Champ Rafael (indicatif) | Propriété `RAFAEL_CAP_CIP` |
|--------------------------|----------------------------|
| Titre | `titre` / `titreCourt` |
| Le + | `lePlus` |
| Description / résumé | `resume` |
| Objectif | `objectifs` |
| Public | `public` |
| Prérequis | `prerequis` |
| Compétences visées | `competencesVisees` |
| Débouchés | `debouches` |
| Modalités d'enseignement | `modalitesEnseignement` |
| Conditions d'admission | `conditionsAdmissionIntro` + `conditionsAdmissionDetail` |
| Mots-clés | `motsCles` |

## Validation des faits

| Élément | Valeur |
|---------|--------|
| Durée | 948 h (563 h centre, 385 h stage) |
| RNCP | 37274, niveau 5 |
| Financements | CPF, AIF, transition pro, OPCO — pas de tarifs inventés |

## Lien site Atipik (UTM prescripteur)

`https://www.atipikrh.com/formations/cip?utm_source=cmaformation&utm_medium=referral&utm_campaign=formation_cip`

## Fiche FPA (à créer)

Aucune fiche CMaFormation / Rafael Cap Métiers n’a été trouvée pour le titre FPA ATIPIK RH (contrôle public du 13/09/2026). Action organisme : créer la fiche, puis ajouter `rafaelCap` dans `lib/seo/certifiantesConfig.js` (brief `formation-fpa`) comme pour le CIP.
