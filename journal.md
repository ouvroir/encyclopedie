# Encyclopédie numérique

---
## Des chaînes de publication multisupport (16 mars 2022)
Rapport sur les générateurs de site statiques

@quest titre

### Présentation

#### Cadre global
- Recension et critique des outils: 20 aine d’outils, sélection 3 ou 4 outils 
- analyse des cas d'usage
- exemples d'utilisation dans le champ de la publication
- produire un rapport billingue multisupport
#### Avancées et propositions
- Spectre de recherche: aller plus loin que les besoins du CIÉCO, générateurs de sites statiques, cas d'usage de convertisseurs de documents, systèmes de gestion de contenu déconnecté headlessCMS
- Grille d'analyse: structure de fiches créées pour les *forges* (contexte, historique, usages, langages de programmation, formats d'entrée et de sortie, contraintes d'usage, exemples, interfaçage)
- critères de sélection: forges/bibliothèques/générateurs documentés, communauté active, cas d'usage divers, relative souplesse d'usage, interconnexion avec d'autres outils
- arborescence retenue: rapport, forges (fabriques/solutions), formats, contraintes, technologies, usages
- plan du rapport
    - introduction et contextualisation
    - état de l'art
    - containtes d'usages et techniques
    - fiches de forges retenues
    - fiches des exemples d'usage détaillés
    - fiches des contraintes détaillées
    - regard critique sur les forges et les sélections
    - (optionnel) mise en situation dans le contexte de publciation scientifique en SH
#### Questions à aborder
usages
- vitrine
- blog
- webapps et objets numériques complexes

Quel cadre pour le professus de validation et de publication du rapport? Quel dispositif mettre en place pour quelque chose comme une validation par les pairs?
- validation externe? permet d'identifier des manques
- bénéficier du réseau universitaire sans aller jusq'au peer reviewing? ne pas rendre trop long (délais)


### Discussion

Partis de la question du format car enjeu de la pérennité. Arborescence proposée.

Cadre pour travailler qui peut accueillir ce genre de choses.
Idée de revenir plus bas niveau en regardant les outils analysés. Manyfold, Quire, etc.

Finalement très peu de cas d’usages. Recensement des forges pourra être très court pour extraire des cas d’utilisation. Peut-être aller regarder des usages détournés d’outils comme Hugo et Astro pour pouvoir traiter des formats plus riches.

Avoir une proposition plus large que CIECO.
Convertisseurs de documents.



### éditeurs
- Forestry https://forestry.io/docs/editing/markdown-editor/
- QAnon


Milieu qui tourne en rond avec des impératifs technologiques plutôt que des pb d’usages.

## 3 novembre 2021

### Qu'est-ce qu'une encyclopédie numérique?

Jérome Vogel: sémioticien



### Produit

volonté générale: projet innovant, moderne

#### Do's

- faire référence + autorité
- plurivoque: rendre compte de la diversité des points de vue (chercheur·se vs muséologue, allochtone vs autochtone)
  - contenus écrits/savant + contenus multimédia (sonore, video, ...)
- chapitres thématiques
  - structurée en entrée 
  - rubricage (catégories, sous-catégories: architecture de l'information)
  - systèmes de renvois internes/externes (gérer les deux types, statuts/rôles différents)
  - points d'accès: recherche, index, table des matières
- méthode de travail: vie de l'objet (Acquisition, ...)
- [Berger, *Ways of Seeing*](https://www.ways-of-seeing.com/ch5):  travailler sur l'illustration de manière forte
  - galeries, contenus visuels
  - chronologies 
  - ... 

- automatiser les règles / besoins sur l'ensemble de la publication
- *open pair-reviewing* : processus public, fait partie de l'article
- accessibilité
- pérennité sur du long terme --> requiert une bonne documentation
- distribution sous multiples formes 

#### Don'ts 

- ne se caractérise pas par un aspect collaboratif (=/= wikipédia)
- pas nécessairement en ordre alphabétique

#### Questions

- comment valider des liens (maintenance des contenus externes, citer, archiver...)



### Besoins

Requiert: 

- template html + design (financé par CIECO en an3 et an 5)
- place des illustrations requiert visionneuse (module dont fait partie *reframe*)
- système modulaire avec des "briques" qu'on peut remplacer (importation, édition, etc.)



### Flux

Comment on réceptionne les articles, comment on les structure, comment on les éditorialise? 



**Option 1**: Pur TEI 

- interface pour gérer l'import + l'enrichissement
- xform : éditer les documents en TEI dans l'interface du web

**Option 2**: Format pivot purement sur le web avec exports en TEI

- Interface web dans laquelle verser les articles + trouver une façon de structurer les contenus en arrière
- saxonJS: compatible avec xform, gère côté serveur + côté client, environnement en Node.JS
- cocko (san Francisco): chaînes éditoriales en html pour la publication d'articles scientifiques

**Option 3**: Enrichir les documents pour aller vers un contenu structuré

- contenus "Word" des auteurs
- ajout de contenus dynamiques (auxiliaires) avec appui de la part des étudiant·e·s





