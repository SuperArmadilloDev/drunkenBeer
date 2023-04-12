# PunkApiFrontTest

## Recueil des Besoins:

### 1<sup>e</sup> partie

- Application en React & Typescript
- Kendo UI for react
- Filtre toggle pour les bières >8% ABV
- Ajout de lib / fonctionalitées utiles
- Affichage de donnée server side paging
- Les données doivent être affichées dans une grille
- Les données sont [ici](https://www.punkapi.com/)

### 2<sup>e</sup> partie

Faire une fonction TS ou JS:
- Un tableau de membre de club
- Un membre possède:
  - linkId | Si != null --> Un enfant (pas facturé) Sinon --> est un parent
- Détection de référence circulaire (ex: A -> B -> A)
