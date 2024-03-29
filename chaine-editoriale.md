---
Since: 2023-05-15
Authors: emchateau
Status: Draft

---

## Chaîne éditoriale de l’Encyclopédie *Des nouveaux usages des collections dans les musées d’art*

Version 0.3 (Brouillon)

La publication en ligne de l’Encylopédie *Des nouveaux usages des collections dans les musées d’art* est une publication savante dont le modèle éditorial doit répondre aux meilleurs standards internationaux en matière de référencement de la publication et de pérennisation des contenus. La publication des entrées donne donne lieu à une éditorialisation et des enrichissements par des compléments numériques conçus en lien avec les auteurs et les autrices qui nécessitent une gestion particulière des métadonnées pour les contenus multimédias, les données structurées et des liens. Afin d’y parvenir, la publication repose sur l’utilisation de techniques d’édition structurée bien établies qui sont destinées à faciliter la maintenance et le traitement automatique des contenus.

La chaîne éditoriale de l’Encyclopédie sera basée sur l’utilisation de la [Text Encoding Initiative](http://www.tei-c.org), un standard XML à l’échelle internationale pour l’édition scientifique qui servira de format pivot. Ces développements seront réalisés par l’Ouvoir d’histoire de l’art et de muséologies numériques sous la direction d’Emmanuel Château-Dutier, spécialiste des technologies XML.

1. la définition d’un modèle documentaire exprimé dans le langage ODD pour la création de schémas RelaxNG et la création d’un modèle éditorial complexe pour traiter les divers contenus multimédias (structures hypertextuelles, chronologies, listes, vidéos, illustrations)
2. la personnalisation des [XSL TEI Stylesheets](http://www.tei-c.org/tools/stylesheets/)
   pour la conversion des manuscrits des auteurs dans ce modèle éditorial
3. le déploiement de plusieurs outils pour assister le travail d’édition tels que LEAF-Writer.
4. des transformations XSLT ou des développements réalisés en XQuery pour générer les pages HTML de la publication

## Descriptif sommaire de l’Encyclopédie

La publication de l’Encyclopédie numérique des nouveaux usages des collections des musées d’art est le projet fédérateur du Partenariat CIÉCO. Soucieux de ne pas redoubler le *Dictionnaire encyclopédique de muséologie* (Desvallées et Mairesse 2011), cette encyclopédie comporte moins de définitions de termes (le Dictionnaire en offre 500) mais davantage d’articles encyclopédiques qui sont structurés en chapitres qui font écho au travail conduit en ateliers au cours du projet. Ces rubriques déroulent les étapes de vie d’une œuvre au sein de la collection. Chaque article est rédigé en collaboration par un chercheur/collaborateur et un conservateur des musées partenaires ou des institutions collaboratrices afin de traiter les entrées selon une double perspective institutionnelle.

Projet au long cours dont la publication présentera à terme plus d’une cinquantaine d’entrées, la réalisation de cette encyclopédie est fondée sur un processus éditorial innovant de révision par les pairs et une éditorialisation riche. La création de chaque nouvelle entrée fait ainsi l’objet d’une publication immédiate ouverte aux commentaires pendant un délai de six mois, au terme duquel les auteurs pourront réviser leur publication en intégrant les suggestions issues de la communauté. Les contributions collectées au cours de ce processus viendront rejoindre le corpus de l’Encyclopédie pour témoigner des dissensus ou des consensus que les textes ont pu susciter. Les étudiants qui sont impliqués dans le projet seront particulièrement mobilisés sur un travail éditorial approfondi destiné à rendre compte de la pluralité des voix sur les nouveaux usages des collections. Chacune des rubriques de l’Encyclopédie donne ainsi lieu à de nombreux enrichissements par un riche choix d’illustrations, l’ajout de listes de cas, la création de chronologies, et la production d’interviews des différents acteurs du domaine. Elles font par ailleurs l’objet de catégorisations complexes qui permettent de multiplier les points d’accès et les circulation transversales à travers les rubriques et les entrées.

Tout en privilégiant une conception auctoriale de l’Encyclopédie par rapport au modèle des encyclopédies collaboratives de type wiki, l’Encyclopédie propose une évolution notable du modèle encyclopédique traditionnellement fondé sur la stabilisation des savoirs. En effet, il s’agit de pouvoir rendre compte de manière polyphonique d’usages orthodoxes et non orthodoxes des collections dans un processus éditorial dynamique qui tire pleinement parti des possibilités offertes par le médium numérique.

L’Encyclopédie numérique est une encyclopédie qui repose sur une navigation hypertextuelle riche et l’utilisation d’un modèle taxinomique. Un soin particulier est accordé au design d’interface pour la lisibilité et l’accessibilité mais surtout pour valoriser la richesse des croisements entre les contenus et son caractère dynamique. Ces développements sont conduits de manière incrémentielle en deux phases successives. La seconde phase permettra de réaliser les ajustements éventuellement nécessaires identifiés à partir de la première vague de publication et d’enrichir l’écriture hypertextuelle proposée ainsi que les fonctionnalités offertes aux utilisateurs.

## Modèle documentaire

### Modèle documentaire

Le modèle éditorial de l’Encyclopédie repose sur l’utilisation de la [Text Encoding Initiative (TEI)](http://www.tei-c.org), un standard de fait pour l’édition et le partage de textes structurés qui s’est imposé à l’échelle internationale comme standard de fait dans le domaine académique. La TEI offre un modèle générique du texte personnalisable et un cadre de travail pour la production et l’exploitation de documents structurés qui repose en grande partie sur les technologies XML et le balisage descriptif des unités textuelles.

Le domaine de l’édition numérique a privilégié des modèles d’édition structurée fondée sur un balisage descriptif qui présente l’avantage d’assurer une meilleure distinction entre le contenu et la forme (et donc de séparer les traitements). Cette distinction garantit une meilleure maintenance du texte encodé et une meilleure portabilité des artefacts numériques. Les technologies XML autorisent l’utilisation de puissants outils informatiques pour automatiser les traitements des documents notamment pour gérer de multiples formats de sortie à partir d’un fichier pivot (*single source publishing*). Les technologies de balisage structuré offrent aussi une grande expressivité pour prendre documenter les contenus et les exposer dans d’autres formats de métadonnées standardisés. À cet égard, des grammaires de documents, ou schémas, permettent d’assurer le contrôle de la consistance de la production des fichiers. Enfin, XML est un bon candidat pour la pérennisation à long terme des documents (lutte contre l’obsolescence technique, documentation, validation).

Pour tirer parti de cet environnement technique, le projet développe un modèle documentaire. La TEI propose des mécanismes d’extension et de personnalisation qui peuvent être exprimés sous la forme de modèles de document au format ODD. Il s’agit de fichiers TEI qui permettent de documenter des éditions et de générer des schémas XML pour le contrôle et la validation des fichiers. Le modèle documentaire mis au point pour l’Encyclopédie Des nouveaux usages des collections dans les musées d’art sera adapté à la structure encyclopédique de l’encyclopédie (classification des entrées, liens hypertextuels, etc.) et s’inspirera des meilleures pratiques en vigueur dans le domaine de la publication savante (cf. [Standards](./standards.md)).

Le modèle cible les fonctionnalités suivantes :

- structuration des parties et sous-parties des articles et des contenus textuels
- prise en charge des illustrations et des contenus multimédias
- gestion des notes
- contrôle des références bibliographiques
- contrôle des métadonnées
- enregistrement des identifiants
- alignement avec des standards cibles pour l’exposition des métadonnées
- indexation et classification des articles
- contrôles orthotypographiques

### Standards de métadonnées

Le modèle documentaire de l’Encyclopédie doit permettre un signalement approprié des articles. Afin de pouvoir alimenter un entrepôt OAI-PMH, les métadonnées des articles sont alignées avec Dublin Core et Dublin Core qualifié. Les contenus sont signalés dans des formats de métadonnées lisibles par la machine. Un travail particulier est accordé aux métadonnées sur les contenus multimédias en utilisant des modèles appropriés (images, vidéos). De même, un soin particulier est accordé à l’archivage des liens externes. La publication en ligne cherche à répondre aux meilleures pratiques en matière de référencement de la publication avec l’utilisation d’identifiants pérennes pour les articles, les auteurs et les autrices (DOI, ORCID), l’exposition des métadonnées, et une démarche active de signalement des contenus.

cf. le [document dédié aux standards pertinents](./standards.md)

#### Identifiants uniques

Les ressources de la plateforme sont identifiées par des identifiants uniques qui répondent à un schème d’identification. Ces identifiants sont signalés dans les sources des articles. L’Encyclopédie *Des nouveaux usages des collections dans les musées d’art* utilise des [Digital Object Identifier (DOI)](https://www.doi.org), un standard ISO  pour l’identification de documents ([ISO 26324](https://www.iso.org/fr/standard/43506.html)).

@todo préciser la granularité

@todo faire des démarches pour l’acquisition d’un ISSN ou d’un ISBN

#### Identifiants pérennes

Chaque ressources dispose d’un identifiant pérenne ou persistant (PID) qui répondent à un schème d’identification. Celui-ci est maintenu dans tout le cycle de vie des documents et est également signalé dans les sources des articles.

Comme les contenus sont susceptibles de modifications et de corrections, ceux-ci font l’objet d’un versionnage et disposent de leur propre identifiant.

- le schème d’identification est décrit par une expression régulière pour pouvoir être validé automatiquement
- le système garantit la pérennité des identifiants dans le temps

#### Métadonnées lisibles par la machine

La TEI répond bien à l’exigence de métadonnées lisible par les machine. Cependant, afin d’améliorer le signalement des ressources de l’Encyclopédie, les contenus sont présentés dans d’autres formats de métadonnées pertinents pour le domaine de l’édition ou de l’histoire de l’art.

#### Interopérabilité

Afin de garantir l’interopérabilité, les ressources disposent de plusieurs représentations.

- toutes les ressources donnent lieu à une description en Dublin Core et en Dublin Core qualifié
- les articles décrits avec l’ontologie SPAR
- les ressources sont signalées avec [Schema.org](https://schema.org) pour le référencement

#### Les métadonées utilisent des schémas pertinents pour le domaine

TEI et SPAR sont des ontologies dédiées au domaine de l’édition et très largement utilisées. Les œuvres d’art seront décrites avec des modèles de métadonnées du secteur culturel. 

@todo utiliser LinkedArt

#### Les métadonnées font explicitement références aux identifiants

Dans tous leurs formats, les métadonnées font explicitement référence aux identifiants.

- un modèle de métadonnées spécialisé est utilisé pour les œuvres d’art
- un travail spécifique est mené sur la citabilité (@todo préciser)

#### Les métadonnées utilisent des vocabulaires qui répondent aux principes FAIR

L’indexation et le référencement des ressources utilise les vocabulaires structurés suivants :

- [GeoNames](https://www.geonames.org) pour les lieux géographiques
- [Art and Architecture Thesaurus (AAT)](https://www.getty.edu/research/tools/vocabularies/aat/) pour les termes artistiques et techniques
- [Union List of Artist Names](https://www.getty.edu/research/tools/vocabularies/ulan/) pour les noms d’artistes
- [WikiData](https://www.wikidata.org) pour les références générales

@todo veut-on créer des identifiants pour les œuvres ?

## Conversion de documents bureautiques vers le modèle documentaire

Compte tenu du grand nombre d’intervenants dans la rédaction des articles, il n’apparaît pas raisonnable d’imposer un environnement d’écriture spécifique. Les auteurs et les autrices rédigent leurs contenus avec le logiciel de traitement de texte auquel ils sont habitués (MsWord ou LibreOffice).

Cependant, afin de réduire le travail du secrétariat éditorial, on demande aux auteurs de gérer leurs références bibliographiques avec [Zotero](https://www.google.com/) et d’intégrer les références bibliographiques sous la forme de liens dynamiques en utilisant le plugin Zotero dans leur logiciel de traitement de texte.

Afin de faciliter la récupération des contenus, un modèle de document de traitement de texte est communiqué aux auteurs avec les consignes éditoriales. Celui-ci comprend des niveaux de titres et des champs de métadonnées pour permettre leur récupération automatique lors de l’éditorialisation.

## Outils d’édition et d’éditorialisation

### LEAF-Writer

[LEAF-Writer](https://leaf-writer.leaf-vre.org) est un éditeur web XML de type WYSIWYG compatible avec des personnalisations de la TEI. Cet outil peut faire l’objet de personnalisation pour être adapté aux besoins particuliers du modèle éditorial.

LEAF-Writer offre par défaut une interface commode pour travailler sur des documents TEI pour traiter les métadonnées des articles et la restructuration du texte en utilisant un schémas. Le logiciel permet de marquer les citations, d’insérer des notes, des références bibliographiques ou de marquer des entrées d’index.

Les personnalisations qui pourraient être réalisées pour améliorer sa maniabilité dans le cadre du projet porteraient de manière prioritaire :

- sur l’insertion des articles dans le système de catégories de l’encyclopédie
- un interfaçage avec les outils de gestions de contenus du projet pour l’illustration et l’insertion de contenus multimédias
- une personnalisation des fonctionnalités d’indexation
- une amélioration des formulaires de saisie

### *Common*

*Common* est une base de données destinée à rassembler, décrire avec des métadonnées appropriées toutes les sources mobilisées et les contenus documentaires produits dans le cadre du partenariat (redéploiements de collections (axe 1), archives citoyennes (axe 2), dépouillement des dossiers d’acquisition et des politiques institutionnelles (axe 3 et 4), et de rassembler les sources visuelles et audiovisuelles pour la préparation de l’Encyclopédie). Il s’agit d’un système de gestion documentaire multi-utilisateurs qui permet l’archivage, le signalement et le partage de la documentation à travers des interfaces faciles d’emploi et qui sert de plateforme de travail collaborative pour tous les chercheurs et les auxiliaires de recherche engagés dans le projet.

La base de données sera produite par un prestataire externe dans le cadre du travail du laboratoire associé au Partenariat. Ses fonctionnalités sont destinées à la description des ressources culturelles avec des métadonnées métiers (Dublin Core qualifié, BIBO, LIDO, BIO-CRM, etc.) et permet l’utilisation de vocabulaires structurés au format SKOS. Omeka-S permet d’alimenter un entrepôt OAI-PMH à destination des moteurs de recherche spécialisés en sciences humaines ainsi qu’une interface programmable (API REST) pour connecter les ressources avec l’Encyclopédie.

Voir le [répertoire de travail de l’Ouvroir d’histoire de l’art et de muséologie numériques](https://github.com/ouvroir/common/)

### Bibliothèque JavaScript pour la présentation des contenus visuels

Le partenariat explore notamment les possibilités muséographiques offertes par la publication sur le web pour documenter des accrochages de collections, la biographie de certains objets (axe 1) et la documentation d’œuvres performatives qui exploitent leurs archives (axe 3). Quant à l’Encyclopédie numérique elle fera largement appel à une riche illustration que nous souhaitons déployer de manière interactive. Faute de bibliothèque de code informatique générique libre et open source destinée à la présentation de contenus patrimoniaux, la création d’expositions en ligne fait le plus souvent l’objet de développements spécifiques et ponctuels. Partant du travail de la recension et de la typologie des pratiques sur les nouveaux usages des collections réalisés par la cellule numérique (axe 4), nous nous proposons de développer un outil destiné à pouvoir déployer facilement des écritures numériques à partir d’une documentation muséale et visuelle. Celui-ci sera mobilisé pour les expérimentations de publications de contenus spécifiques prévues dans l’axe 1,l’axe 2 et 3 ainsi que pour l’illustration de l’Encyclopédie multimédia.

Cette application prend la forme d’une bibliothèque de code informatique libre et open source développée en ECMAScript6 (“vanilla” JavaScript) afin de faciliter sa maintenance et sa pérennité. Ce noyau logiciel est destiné à faciliter la production d’exposition numériques et l’exploitation des collections sur le web en définissant des modèles responsive design pour la création de ressources ou de galeries, avec une diversité d’interactions utilisateurs spécifiques à la présentation savante de la documentation visuelle sur le web (comparaison d’images, feuilletage, zoom, légendes structurées et accès aux métadonnées). Son périmètre fonctionnel intègre une compatibilité avec les différents protocoles du cadre international d’interopérabilité sur les images IIIF ([https://iiif.io](https://iiif.io/)). Lorsque c’est possible, les développements s’appuient sur l’intégration de composants JavaScript libres et open source disponibles (OpenSeedragon [https://openseadragon.github.io](https://openseadragon.github.io/), Mirador, etc.).

Voir le [répertoire de travail de l’Ouvroir d’histoire de l’art et de muséologie numériques](https://github.com/ouvroir/reframe/)

## Transformations pour la publication

Génération d’un site statique avec des XSLT

Voir le [prototype](./prototype/)

## Référencement et signalement des contenus

L’Encyclopédie Des nouveaux usages des collections dans les musées d’art doit répondre aux meilleurs standards en matirèe de référencement et de signalement des contenus sur le web. Afin d’y parvenir, le projet privilégie le respect d’un certain nombre de standards de référence dans le domaine de l’édition numérique.

cf. le [document Standard](./standards.md)

### Plusieurs actions sont mises en œuvres

- Le respect de bonnes pratiques métier (formats, choix des standards, etc.)
- Des actions de signalement actif dans l’écosystème d’édition numérique académique
- La création d’un entrepôt OAI-PMH avec la distribution des métadonnées au format Dublin Core, Dublin Core qualifié, TEI et un standard adapté pour l’édition scientifique
- Les pages web du site sont signalées dans plusieurs formats de métadonnées pour l’importation automatique des références dans les principaux logiciels de gestion de références bibliographiques et le référencement par les moteurs de recherche

#### Entrepôt OAI-PMH

Pour permettre la découvrabilité des ressources et leur moissonnage, la plateforme alimente un entrepôt OAI-PMH. Cet entrepôt permet notamment le moissonnage par le moteur de recherche francophone en sciences humaines et sociales [Isidore](https://isidore.science).

Ce protocole est libre et ouvert. Il permet l’accès aux ressources sans autorisation préalable.

#### Mise à disposition selon une licence explicite

La mise à disposition des métadonnées est faite en utilisant une licence explicite. Comme il n’y a pas de droit d’auteur sur les métadonnées et afin de faciliter le signalement des ressources, celles-ci sont considérées comme relevant du domaine public. Pour ce faire, on utilise la licence [Creative Commons Zero 4.0 (CC-0)](https://creativecommons.org/choose/zero/).

#### Accès aux versions

Les contenus sont susceptibles de corrections et de modifications au cours de la vie du projet. L’application doit donner accès aux différentes versions des contenus.

### Grille des critères QUERO

Ces critères s’inspirent en grande partie d’un état de l’art international et ont fait l’objet d’une mise en correspondance avec les systèmes d’information internationaux qualifiants, Latindex et [DOAJ](https://doaj.org/apply/transparency/), les préconisations du PLAN S en Europe et des critères d’exemplarité du CoSO relatifs aux contenus éditoriaux, dans le contexte de la science ouverte.

Scopus et / ou le Web of Science ?

Ces deux bases de données bibliographiques commerciales sont des références dans l'univers scientifique, même si leur fonctionnement économique et leur philosophie vont à l'encontre de la Science Ouverte. D'un point de vue de la diffusion, de l’accessibilité et du rayonnement de notre contenu elles restent néanmoins un passeport scientifique qui garantie la qualité à l'échelle internationale. Mais il n’est pas évident que nous puissions y avoir accès.

Sur quelles bases de données, catalogues bibliographiques et autres ressources en ligne, souhaiteriez-vous que votre revue apparaîsse ?

Wikipédia est un outil très utile pour le référencement. Si ce n'est pas déjà le cas, souhaiteriez-vous qu'une page y soit créée pour votre revue ?

DOAJ [https://doaj.org](https://doaj.org/)

### Référencements (cibles)

- [ ] site de la revue
- [ ] Sudoc (France)
- [ ] Catalogue BCI (Québec)
- [ ] Woldcat
- [ ] EZB Elektronische Zeitschriftenbibliothek
- [ ] Isidore
- [ ] HAL
- [ ] Bnf (Catalogue général)
- [ ] BAnQ
- [ ] Mir@bel
- [ ] DOAJ
- [ ] LATINDEX
- [ ] ISSN
- [ ] Road (par l’ISSN)
- [ ] BASE Bielefeld
- [ ] JournalTocs
- [ ] Miar
- [ ] OpenAIRE
- [ ] Sherpa Romeo
- [ ] Où publier CIRAD
- [ ] Dimensions
- [ ] SCOPUS [pas nécessaire]
- [ ] ESCI Emerging citation Index [pas nécessaire]
- [ ] EbscoHost [pas nécessaire]
- [ ] ERIH Plus [pas nécessaire]
- [ ] BACON de l’ABES (via OEJ pour HN)
- [ ] Google scholar
- [ ] Wikipedia
- [ ] Réseaux sociaux
- [ ] Internet Archive

- choix des mots-cles
- respect des RGPD
- utilisation de langages documentaires nationaux ou internationaux ont un intérêt d'un point de vue du référencement des articles
- téléchargement des articles en format JATS ou TEI
- Dépôt de marque ?

## Pérennisation

Les choix technologiques réalisés pour la chaîne éditoriale de l’Encyclopédie *Des nouveaux usages des collections dans les musées d’art* ont été formulés afin d’offrir le meilleur profil de pérennisation des contenus.

- Utilisation de fichiers pivots en XML encodé en UTF-8 
  XML est un bon candidat pour la pérennisation à long terme des documents électroniques comme il s’agit de fichiers textes et d’un standard ouvert. Il n’y a pas de dépendances logicielles pour leur utilisation. Les fichiers peuvent être associés à une grammaire de documents (schémas) pour la validation et faire l’objet de transformations automatisées en masse.
- Emploi de la Text Encoding Initiative (TEI)
  La TEI constitue un standard de fait bien établi dans la communauté scientifique internationale pour la conservation des éditions numériques. De nombreux outils ont été développés par la communauté académique pour la conversion et la conversion des documents.
- Spécification formelle d’une personnalisation de la Text Encoding Initiative (TEI) documentée avec ODD
  Les modèles de document du projet sont spécifiés et documentés dans le langage ODD proposé par la TEI pour sa personnalisation. Outre une documentation fine du modèle, cette spécification formelle de document permet de générer des schémas de document pour la validation des fichiers et d’organiser la conversion automatique des documents en vue de leur migration.
- Utilisation d’un schéma pour la validation des contenus
  Les fichiers pivots XML du projet peuvent être validés par des schémas pour garantir leur consistance et leur bonne conservation.

Le modèle retenu pour l’édition est celui du Single-Source publishing

## Application de publication en ligne

### Principes de conception du client web

Adopter une approche minimaliste, durable et économe en ressources

- Privilégier une solution basée sur des contenus statiques lorsque ceux-ci ne sont pas appelés à changer
- Utiliser l’infrastructure du web pour tirer partie de cette structuration : utilisation de cache proxy, etc.
- Éviter autant que possible les dépendances technologiques (dettes technologiques) et l’utilisation de code inutile qui alourdit l’affichage des pages

Accessibilité, lisibilité, mise en avant du texte et sorties multisupports

- Accessibilité et lisibilité, mise en avant du texte et de l’hypertexte
- Développement responsive en privilégiant la mise en page pour la lecture pour tablette (horizontale, verticale). *Progressive enhancing* pour les téléphones intelligents.
- Formats détachables par unités éditoriales avec des sorties multiples qui s’appuient sur la chaîne éditoriale (html, epub, pdf)

#### Pistes techniques à explorer pour le client

Éviter les frameworks autant que possible et se concentrer sur l’usage des nouvelles fonctionnalités disponibles dans JavaScript et CSS supportées par les navigateurs.

- Vanilla JavaScript
- Web Components
- ES6 Modules: JavaScript ES6 can support import modules, which are also supported by browsers.
- Module CDNs: JavaScript modules can now be downloaded from third-party content delivery networks (CDNs).
- Custom HTML elements: Developers can now create custom HTML tags, via[ Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).
- Variables CSS
- CSS Grid et Flex
- Pas de SPA mais transformations XSLT ou XQuery (recopier fonctionnalités des sites statiques en XSLT = gain de stabilité, rapidité build, standard donc moins de dépendance).
- Transitional app
- Streaming render
- Partial hydration, Island. Besoin arbre pour le faire en JS

### Moteur de recherche plein-texte

- Utilisation de BaseX
- Utilisation d’ElasticSearch, Solr, ou Lunr

## Questions réponses sur le scénario éditorial

Le document suivant présente un ensemble de questions / réponses sur le scénario éditorial

https://docs.google.com/document/d/1jzev0mSlcpvRUfq2Z6834h9K6zQjtMxU2ErHfL-HbZ4/edit?usp=sharing

## Références

## Références sites statistiques

- Greenwood, Tom. 2021. « Sustainable Web Design, An Excerpt ». *A List Apart* (blog). 5 août 2021.[ https://alistapart.com/article/sustainable-web-design-excerpt/](https://alistapart.com/article/sustainable-web-design-excerpt/).
- Balkan, Aral. 2020. « What Is the Small Web? » *Aral Balkan* (blog). 7 août 2020.[ https://ar.al/2020/08/07/what-is-the-small-web/](https://ar.al/2020/08/07/what-is-the-small-web/).
- Theou, Aline. s. d. « Blog statique, minimalisme et simplicité ? » Consulté le 25 décembre 2020.[ https://www.24joursdeweb.fr/2020/blog-statique-minimalisme-et-simplicite/](https://www.24joursdeweb.fr/2020/blog-statique-minimalisme-et-simplicite/).
- Sciences po Low tech

## Choix technologiques

### Transitional app

**Rich Harris** [**https://jamstackconf.com/talk/c17544108e71/transitional-apps/**](https://jamstackconf.com/talk/c17544108e71/transitional-apps/)

### Headless or not headless ?

Sites statiques JAM stack

MacManus, Richard. 2020a. « Strapi’s Headless CMS and Lessons Learned from Docker ». *The New Stack*. 3 août.[ https://thenewstack.io/strapi-headless-cms-and-lessons-learned-from-docker/](https://thenewstack.io/strapi-headless-cms-and-lessons-learned-from-docker/).

———. 2020b. « WordPress Co-Founder Matt Mullenweg Is Not a Fan of JAMstack ». *The New Stack*. 31 août.[ https://thenewstack.io/wordpress-co-founder-matt-mullenweg-is-not-a-fan-of-jamstack/](https://thenewstack.io/wordpress-co-founder-matt-mullenweg-is-not-a-fan-of-jamstack/).

———. 2021. « Why Decoupled Architectures Now Make Sense for WordPress ». *The New Stack*. 13 septembre.[ https://thenewstack.io/why-decoupled-architectures-now-make-sense-for-wordpress/](https://thenewstack.io/why-decoupled-architectures-now-make-sense-for-wordpress/).

———. s. d. « Delivering Modern Website Experiences: The Journey to a Content Mesh ». *Gatsby*. Consulté le 8 octobre 2021.[ https://www.gatsbyjs.com/blog/2018-10-04-journey-to-the-content-mesh/?utm_source=thenewstack&utm_medium=website&utm_campaign=platform](https://www.gatsbyjs.com/blog/2018-10-04-journey-to-the-content-mesh/?utm_source=thenewstack&utm_medium=website&utm_campaign=platform).

« Strapi : comprendre ce qu’est un headless CMS Open Source ». s. d. *Notion, Home des Sherpas*. Consulté le 3 octobre 2021.[ https://www.notion.so](https://www.notion.so/).

### Back to basics

Berners-Lee, Tim. 2006. « The Rule of Least Power ». TAG Finding. W3C. Consulté le 8 octobre 2021.[ https://www.w3.org/2001/tag/doc/leastPower?utm_source=thenewstack&utm_medium=website&utm_campaign=platform](https://www.w3.org/2001/tag/doc/leastPower?utm_source=thenewstack&utm_medium=website&utm_campaign=platform).

Kehoe, Daniel. 2020. « The Stackless Way ». 6 novembre.[ https://tutorials.yax.com/articles/the-yax-way/index.html](https://tutorials.yax.com/articles/the-yax-way/index.html).

MacManus, Richard. 2021. « Web Frameworks: Why You Don’t Always Need Them ». *The New Stack*. 15 février.[ https://thenewstack.io/case-against-web-frameworks/](https://thenewstack.io/case-against-web-frameworks/).

Meyer, Eric. 2021. « Ancestors and Descendants – Eric’s Archived Thoughts ». *Meyerweb.com*. 3 juin.[ https://meyerweb.com/eric/thoughts/2021/06/02/ancestors-and-descendants/](https://meyerweb.com/eric/thoughts/2021/06/02/ancestors-and-descendants/).

Patterson, Matt E. 2021. « The Future of Web Software Is HTML-over-WebSockets ». *A List Apart*. 25 février.[ https://alistapart.com/article/the-future-of-web-software-is-html-over-websockets/](https://alistapart.com/article/the-future-of-web-software-is-html-over-websockets/).

### Webcomponents ?

« Introduction - webcomponents.org ». s. d. Consulté le 8 octobre 2021. Consulté le 8 octobre 2021.[ https://www.webcomponents.org/introduction?utm_source=thenewstack&utm_medium=website&utm_campaign=platform](https://www.webcomponents.org/introduction?utm_source=thenewstack&utm_medium=website&utm_campaign=platform).

MacManus, Richard. 2021. « How Web Components Are Used at GitHub and Salesforce ». *The New Stack*. 22 février.[ https://thenewstack.io/how-web-components-are-used-at-github-and-salesforce/](https://thenewstack.io/how-web-components-are-used-at-github-and-salesforce/).

### Hydration

Question du templating, enrichissement des pages.

« Hydration (Web Development) ». 2021. In *Wikipedia*.[ https://en.wikipedia.org/w/index.php?title=Hydration_(web_development)&oldid=1028530042](https://en.wikipedia.org/w/index.php?title=Hydration_(web_development)&oldid=1028530042).

« Rendering on the Web ». s. d. Google Developers. Consulté le 21 août 2021.[ https://developers.google.com/web/updates/2019/02/rendering-on-the-web?hl=fr](https://developers.google.com/web/updates/2019/02/rendering-on-the-web?hl=fr).

## Évaluation de projets numériques

- Guidelines for the Evaluation of Digital Scholarship in Art and Architectural History. College Art Association and the Society of Architectural Historians, janvier 2016. http://www.collegeart.org/news/2016/02/23/the-college-art-association-and-the-society-of-architectural-historians-release-guidelines-for-the-evaluation-of-digital-scholarship-in-art-and-architectural-history/
- Evaluating DH Scholarship: Guidelines – CSDH / SCHN, http://csdh-schn.org/evaluationpolicy/
- The San Francisco Declaration on Research Assessment (DORA), [http://www.ascb.org/dora/	](http://www.ascb.org/dora/)
- Criteria for Reviewing Scholarly Digital Editions, version 1.1, http://www.i-d-e.de/publikationen/weitereschriften/criteria-version-1-1/
- How to Evaluate Digital Scholarship Journal of Digital Humanities"How to Evaluate Digital Scholarship Journal of Digital Humanities". Journal of Digital Humanities, 1, no 4 (2012). http://journalofdigitalhumanities.org/1-4/how-to-evaluate-digital-scholarship-by-todd-presner
- Guidelines for the Evaluation of Digital Scholarship Across Disciplines. Joint Provost-Academic Senate University Research Committee, https://academicsenate.usc.edu/files/2015/08/Final-Report-on-Digital-Scholarship-Evaluation-Guidelines.pdf
- Evaluating Digital Scholarship - Digital Scholarship Workshops - LibGuides at Claremont Colleges Library, http://libguides.libraries.claremont.edu/digitalscholarship/evaluation
- Evaluating Digital Scholarship | sponsored by the MLA Committee on Information Technology, https://evaluatingdigitalscholarship.mla.hcommons.org/
