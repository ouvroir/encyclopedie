---
title: Rencontre avec LINCS pour Leaf writer
description: cr de la rencontre du 27 mars
author: ouvroir
date: 2023-03-27
draft: true
tags:
    - cr


---

# Rencontre avec LINCS pour Leaf writer

Introductions
- Susan Brown
- Diane Jakacki
- Luciano Grizzera, PhD candidate in Media Studies at Concordia
- Mihaela Ilovan
- Emmanuel Château-Dutier
- William  Diakité
- Lena Krause

meeting notes: https://docs.google.com/document/d/1bHS4HRLMbLfDNf78-B3DC0moQzHwBJx-zmMG0BQh9Kw/edit

Workflow
- contributors
- questions importation
- copy editing

Cas au-delà de l’édition critique.
Ses bases dans une encyclopédie en réalité avec le [Projet Orlando](https://www.artsrn.ualberta.ca/orlando/). CWRC créé plus généralement pour héberger toute sorte de contenus. Mihaela très engagée dans ce projet. Veut servir des born digital scholarship autant que possible. Donc conçu de la manière la plus flexible

import/export
Voulu voir comment pouvait aplanir manière d’importer des documents dans l’outil. Plusieurs scénarios de transformation. Essaye de créer une API pour faciliter le travail. Actuellement le fait dans Oxygen. Serait bien de permettre à plus de gens de pouvoir utiliser ce genre d’outils sans abonnement.
Premier widget, mois prochains. Cherche à identifier les cas d’usages. Type de format qui devraient être accommodés. Ou le cas où une XSLT qui pourrait être custumisé.

Personnalisation
Schemas

TEI
Luciano, veut fournir input MsWord.
Metopes 
TEI Stylesheets redoing it avec version 3. Mais encore trop loin. Espérait pouvoir utiliser certains de leurs outils mais sans doute allés plus vite qu’eux.

Cherche à pouvoir avoir différentes entrées. Aussi Markdown mais pas sûr du niveau.

Personnalisation
Actuellement intégration des images deux aspects. D’un côté mention url image. Possibilité feuilletage.
Possible display images dans l’éditeur si bien référencées dans le schéma.
Embedding videos et audios. Pour le moment pas encore là. Mais transformation qui nous autorisera transformer XML vers HTML à ce niveau références dans le documents pourraient être transformés.

Question des formulaires.

Luciano 2019 sur le projet. Aidé à revamper l’interface et à moderniser le code. Mais pas encore travaillé sur le media panel. Mais sans doute une idée intéressante d’avoir des multimédias attachés au document.

Un environnement édition où peut déposer vidéo qui serait rendu dans un autre environnement. Une structure à 
Structurer les liens, etc.


Luciano
Quand veut ajouter plus de contenu. Besoin de fournir un formulaire. LEAF-Writer assez pertinent pour ajouter un schéma. Utilise les tags depuis le schémas, et propose tous les attributs. Possible de proposer autocomplétion. 

Attributes, for rendering, etc.

Quels sont les changements en cours dans l’interface? 

Il y a actuellement un mapping qui fait correspondre le schéma à des boutons. Pour travailler sur des modèles différents, il faut travailler avec un autre modèle de mapping. Pas facile à utiliser mais si veut faire ça. Peut travailler sur un new mapping.

Pourrait être intéressant pour le projet de pouvoir proposer un bouton dans le menu en ruban qui permette à des projets d’ajouter des attributs nouveaux, etc. Sans doute d’intérêt pour de multiples groupes.

Surtout quand une manière de faire canonique de faire ça 

Pas un expert XML. Utilisé un outil de validation écrit par autre projet DH qui était un validateur XML rédigé en JavaScript. Fonctionne en parallèle du Browser pour ne pas bloquer. A travaillé sur la documentation et attribut. Chaque fois qu’ouvre charge le document et parse le document et valide à chaque changement du document. Quand ajoute un tag, en cliquant sur le ruban ou menu contextuel. Alors tous les éléments dans les contextes.

Complètement conformant à la spécification.

Utilisent des Schémas prédéfis compatibles, contrôle sur les 
Si ce n'est pas un schéma pré-existant, il faut cliquer sur "ajouter un schema".
[Oui mais ça ne fonctionne pas]

Métadonnées.

Lookups : API pour nos contenus
- images: IIIF
- métadonnées des images : common API
- Zotero

API pour métadonnées. Zotero pour biblio.
Zotero integration ? Utilisation du Lookup pour Zotero ?
Pb Zotero lookup selon que soit ouvert ou pas. 

Implique de déclarer projet pour pouvoir faire le lookup dans collections.
Pense actuellement à la manière de penser à des extensions pour lookup. Mais quand fait ça pour Geonames, alors besoin fournir un user.

faire une sorte d'API (avec common) pour permettre les lookups pour la structure de l'encyclopédie, les tags CIECO etc?

Zotpress possibilité

William, question de la manière dont les données sont parsées et si connaît struture alors simple pour nous de faire ça.

Luciano ne voit pas trop comment améliorer la documentation. The extension lookup actuellement dans ma tête. Pas un très long fichier. Mais garder à l’esprit que fonctionnalité qui pourrait changer dans le temps.

Pas besoin de mapper tout le schéma. Diane travaillé sur trois projets différents où travaille sur attributs multiples sur différents élements. Possible d’optimiser l’affichage dans LEAF-Writer.

Possible si dans le schéma d’avoir vocabulaire normalisé par exemple.

Si un schéma liste déroulante sera présent.
De même web annotation.

Question annotation.

Comment ils voient l'idée que William contribue du code? ça marcherait comment, est-ce qu'on arrive à fournir des briques suffisamment génériques pour que ça serve pour d'autres? 
C'est intéressant comme défi mais ça complique le travail pour nous non? De penser une solution générique alors qu'on a un cas très particulier. Oui oui en effet, mais il y a manière de mitiger. On peut avoir un fork pour notre usage et des dévs qui sont des contributions.





Suivi 

Est-ce que les entités sont dans un fichier externe ou dans le XML? 
Formulaire pour les entités RDF ou pour celles XML aussi? 

Travailler sur quelques use case
- décrire les opérations, ex: ajouter une référence bibliographique
- schéma
- pas s'occuper des entrées (doc vers xml-tei) ni vers les sorties (xml-tei vers html)

Prévoir un working session avec Diane (et autre? Susan sera là si elle est dispo)
Quand on sera prêts → après les examens de William 

Plan:
- Expérimentation pratique: type de contenu → bases du mini-prototype
    - schema
    - contenu type
    - contenu multimedia pour enrichir
- Question de leur environnement de publication? 
- Quelle façon de collaborer/contribuer? 
- publication: TEI-publisher or SynopsX un framework de publication XML en XQuery que 