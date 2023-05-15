---
Since: 2021-11-04
Authors: emchateau
---

## Chaînes éditoriales

Voir le [Rapport de recherche sur les forges de publication](https://ecrinum.gitpages.huma-num.fr/publishing-workflow-report-preprint/) rédigé dans le cadre du Partenariat *Des nouveaux usages des collections dans les musées d’art*.


## Chaînes XML

## MÉTOPES Méthodes et outils pour l’édition structurée

http://www.metopes.fr

> Le projet MÉTOPES – Méthodes et outils pour l’édition structurée – vise à mettre au point, à développer et diffuser, librement dans la sphère publique, par des actions de formation auprès des éditeurs publics et des revues labellisées CNRS un ensemble d’outils et de méthodes leur permettant d’organiser leur production et leur diffusion papier et numérique sur le modèle du Single Source Publishing.
>
> Ce projet, principalement orienté vers la production des contenus, est fortement articulé, par le biais de la prise en compte de la norme ONIX et de ses exploitations, aux travaux et développements menés parallèlement par [OpenEdition](http://cleo.openedition.org/) (USR 2004 du CNRS, Marseille). L’ensemble des deux dispositifs permet de développer conjointement un réservoir de contenus normés (XML-TEI), à haute valeur éditoriale ajoutée (évalués, éditorialisés, structurés…), et un système de catalogage et d’exposition (diffusion) ouvrant vers la possibilité du déploiement d’un catalogue commun (ONIX) des éditeurs publics associés (métadonnées et contenus). Après avoir constitué la partie recherche développement de l’infrastructure nationale de recherche NUMEDIF, le projet est devenu en 2018 infrastructure de recherche à part entière (Université de Caen Normandie - CNRS) sous le nom d’IR METOPES. Celle-ci fonctionne en synergie avec les trois autres infrastructures nationales dédiées à l’IST : OpenEdition, Collex-Persée et HAL.

https://www.unicaen.fr/recherche/mrsh/document_numerique/projets/metopes

## Scenarii

https://scenari.software

> Des solutions logicielles pour créer et structurer vos contenus, publier et diffuser vos documents

## OpenEdition

https://lodel.hypotheses.org

> **Lodel est un logiciel d’édition électronique simple d’utilisation et adaptable à des usages particuliers**, développé par [OpenEdition](http://cleo.openedition.org/)depuis 2000 et distribué sous licence GPL 2.
> Il appartient à la famille des gestionnaires de contenus (en anglais, *Content management system*, CMS) et s’est **spécialisé dans l’édition de textes longs et complexes dans un environnement éditorial très structuré**.

Lodel est un CMS destinée à l’édition savante. Il est développé en PHP et utilise une conversion de documents XML TEI pour la publication des articles. Un modèle de document ([Word](https://github.com/OpenEdition/lodel/wiki/Modèle-de-document-pour-Microsoft-Word) ou [OO](https://github.com/OpenEdition/lodel/wiki/Modèle-de-document-pour-LibreOffice)) permet de styler les documents issus de traitements de texte en accord avec le modèle éditorial fourni avec Lodel. 

### Lodel

https://github.com/OpenEdition/lodel

CMS dédié à l’édition numérique de contenus variés

Statut 2022 :

- version 1.0.X : Maintenance corrective minimale.
- version 2.0.0 : En cours de développement à l’aide du framework Symfony. Implémentation des fonctionnalités requises pour le déploiement de la plateforme Books, ainsi que les modules associés (parseur XML-TEI, portage du générateur de PDF et d’ePub 3...).

La version 2 est annoncée pour l’automne 2023. Celle-ci reposera sur l’utilisation des outils développés dans le cadre de Métopes.

### OTX (github)

https://github.com/OpenEdition/OTX

Convertisseur de documents (doc, docx, odt, XML) en XML-TEI, format central repris en entrée dans le système d’information.

Statut 2021 : Maintenance corrective. Une nouvelle version, baptisée Circé, a été initiée en collaboration avec l’ infrastructure de recherche Métopes et le CERTIC (Centre de ressources technologiques pour les TIC - Université de Caen Normandie). Elle vise notamment à la convergence des spécifications TEI utilisées par OpenEdition et Métopes.

### TEI OpenEdition Schema

https://github.com/OpenEdition/tei.openedition

https://github.com/OpenEdition/tei.openedition

## Érudit

https://www.erudit.org

Schéma https://www.erudit.org/xsd/article/2.0.0/doc/schemas/eruditid_xsd/schema-summary.html

## PLOS et JATS

https://plos.org


## Chaînes basées sur Markdown

Rapport sur les chaînes

#### Quire

https://quire.getty.edu/

- licence propriétaire du getty
- Quire is in a limited beta and not yet released as open-source software. 
- utilisation gratuite sur inscription
  - In order to output your Quire publication as a PDF you will need to use  Prince XML, which requires purchasing a license for commercial or  non-watermarked use. [Learn more about Prince’s pricing plan.](https://www.princexml.com/purchase/).
- pas sur linux? Quire is compatible with macOS and Windows. Currently, support is better for macOS
- Content Compatibility
  - Quire is optimized for book-like projects. Especially those that rely on  visual illustrations and/or scholarly apparatus like citations,  bibliographies, and footnoting.
  - For those looking to  publish more non-textual, image-intensive presentations, like an online  exhibition or a fully illustrated children’s book or graphic novel,  Quire may not be the right fit.
  - Using Quire for journal publishing is also an option, though not yet fully developed.
- Quire is centered around the static site generator, [Hugo](https://github.com/gohugoio/hugo). Quire’s command-line interface is written in JavaScript and requires [Node.js LTS](https://nodejs.org/en/) to run.
- [IIIF](https://quire.getty.edu/documentation/zooming-images/) implémenté

#### Manifold

https://manifoldapp.org/

- libre et open-source (GPL 3.0)
- localization à venir en v7 (Actuelle v6)
- les contenus "multimédias" semblent être à part du texte
- les URLs ne sont pas beaux
  - [exemple](http://read.upcolorado.com/read/the-greater-chaco-landscape-f2cad13b-68f1-4d50-bc01-9f755e62eed4/section/d0fda15f-d7bc-409e-ac0d-95f005fd48f9)
  - [exemple](https://cuny.manifoldapp.org/read/ed9faf39-62de-475b-8a5f-62380de235ca/section/7f71ed17-f519-4bb8-a10f-2bf13f035f3b) 

### Observations

- Les deux options sont structurées de façon très "carrée", lecture linéaire selon une table des matières, passage d'un chapitre à l'autre.

### Questions, à creuser

- quand on ajoute des contenus mutlimédias, où est-ce qu'ils sont/doivent être hébergés? 

## Peritext

https://peritext.github.io

> Peritext vise à équiper des pratiques d’écriture et d'édition savante sensibles et polymorphiques. Il articule des expérimentations situées avec des outils réutilisables pour questionner le rôle de la matérialité dans les pratiques de publication de la recherche universitaire. Ce document présente les différentes composantes du projet.

#### Ovide

https://peritext.github.io/ovide/

> Ovide est un logiciel expérimental d'écriture et d'édition. Il permet de travailler avec des images, vidéos, visualisations, références bibliographiques et autres entrées de glossaire avancées, et de produire une multitude d'éditions imprimées et web à partir d'un même corpus d'écrits.

### Fonio

https://fonio.medialab.sciences-po.fr/demo

> Fonio is a collaborative scholarly software allowing to build high quality static websites for teaching and research. It allows to make arguments through complex hypertextual structures, and to harness the richness of an enquiry's work by featuring bibliographic references, images, tables, videos, and interactive elements.

### Péritext (2013-2019)

Peritext est un projet expérimental, à code ouvert et en license libre initié par Robin de Mourat dans le contexte d’une recherche doctorale en arts & design

### Editoria.pub

https://editoria.pub

### PubPub

https://www.pubpub.org

> The open-source, community-led, end-to-end publishing platform for knowledge communities.

## CMS orientés publication

### Scalar

https://scalar.me

> Scalar is a free, [open source](http://github.com/anvc/scalar) authoring and publishing platform that’s designed to make it easy for authors to write long-form, born-digital scholarship online. Scalar enables users to assemble [media](http://scalar.me/anvc/features/media-support/) from multiple [sources](http://scalar.me/anvc/features/archive-partners/) and juxtapose them with their own writing in a variety of ways, with minimal technical expertise required.
