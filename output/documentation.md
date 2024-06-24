# Balisage HTML de l’Encyclopédie

## Chemins

```
- index.html
- acquisition/
	- index.html
	- article01.html
	- article02.html
- documentation/
	- ...
- index
	- persons.html
	- places.html
	- ...
- listes
	- chapitres.html
	- ...
	
- about
	
```



## Structure générale des contenus

```html
<header><!-- en-tête et navigation --></header>
<main>
	<article><!-- entrée --></article>
  <aside><!-- méta --></aside>
	<section><!-- parcours --></section>
	<section><!-- parcours --></section>
  <!-- ... -->
</main>
<footer><!-- Pied de page --></footer>
```

## Accueil

### Structure de la page d’accueil

```html
<body>
  <header>
  	<hgroup class="hero">
      <!-- ... -->
    </hgroup>
	  <nav><!-- ... --></nav>
	</header>
	<main>
  	<section class="edito"><!-- ... --></section>
    <section class="focus-news"><!-- ... --></section>
	  <section class="focus-addons"><!-- ... --></section>
  	<section class="pathways-chapters"><!-- ... --></section>
    <section class="pathways-themes"><!-- ... --></section>
    <section class="news"><!-- ... --></section>
	</main>
</body>
```

### Hero menu

```html
<hgroup class="hero">
  <h1>NUCMA</h1>
  <img src="images/cieco.svg" alt="logo du groupe de recherche CIÉCO">
  <h1>Encyclopédie des nouveaux usages des collections dans les musées d’art</h1>
</hgroup>
```

### Autres éléments

- voir Composants > En-tête et navigation
- voir Composants > Edito
- voir Composants > Focus
- voir Composants > Parcours et rebonds
- voir Composants > Parcours thématiques
- voir Composants > Actualités
- voir Composants > Pied de page

## Entrées (*article.entry*)

### Contenu principal

```html
<article class="entry">
  <header>
	  <p class="chapter"><!-- titre chapitre --></p>
	  <h1><!-- titre --></h1>
  	<h1 class="subheading"><!-- sous-titre --></h1>
	  <p class="doi"><a href="https://doi.org/10.1075/prag.21.4.01bre">10.1075/prag.21.4.01bre</a></p>
  	<ul class="versions">
    	<li><a href="https://www.nucma.ca/article01/v1">V1 – <time datetime="2024-05-20">20 mai 2024</time></a></li>
	    <li><a href="https://www.nucma.ca/article01/v0">V0 – <time datetime="2023-02-01">1<sup>er</sup> février 2023</time></a></li>
  	</ul>
	  <ul class="authors">
  	  <li>
  	    <span class="name">Julie Bawin</span>
    	  <span class="occupation">Professeure, Université de Liège</span>
      	<span class="orcid"><a href="https://orcid.org/0009-0003-9693-7665">0009-0003-9693-7665</a></span>
      </li>
	    <li>
	      <span class="name">Ève-Lyne Beaudy</span>
  	    <span class="occupation">Conservatrice, Musée national des beaux-arts du Québec</span>
    	  <span class="orcid"><a href="https://orcid.org/0009-0003-5973-042X">0009-0003-5973-042X</a></span>
      </li>
    	<li>
      	<span class="name">Mélanie Boucher</span>
	      <span class="occupation">Professeure, Université du Québec en Outaouais</span>
      	<span class="orcid"><a href="https://orcid.org/0000-0003-4092-4569">0000-0003-4092-4569</a></span>
      </li>
    </ul>
	</header>
  <div class="introduction"><!-- sous-titre --></div>
  <div><!-- ... --></div>
  <div><!-- ... --></div>
  <section class="meta"><!-- contributeurs --></section>
  <section class="bibliography"><!-- bibliographie --></section>
</article>
<aside><!-- @todo --></aside>
```

@quest numérotation chapitres + @quest Numérotation en chiffre romains dans `class='chapter'`. Il me semble que Feed a prévu une variante typographique pour les chiffres romains, je propose d’encoder les chiffres romains en UTF-8

@quest subheading ? ou rubric

@quest groupement des métadonnées hgroup ou header : j’ai privilégié header qui dispose d’attributs ARIA

@quest listes méta, classes ?

@quest aside et sous-navigation | aside et nav

@quest sélecteur de version : par défaut l’url de l’article donne accès à la dernière version `https://www.nucma.ca/article01/`. Toutes les versions sont servies de manière explicite au sous-chemin /v2 /v1 (`https://www.nucma.ca/article01/v1`, `https://www.nucma.ca/article01/v2`, etc.). Il faudra peut être ajouter un attribut en JavaScript pour la version courante

### Références bibliographiques (*.bibliography*)

Au survol, prévisualisation de la référence, au clic consultation de la référence dans la bibliographie en bas de page. Depuis la référence dans la bibliographie, on doit pouvoir revenir au point de lecture. Attention il peut y avoir plusieurs appels de la même référence dans le texte.

```html
... plus simplement encore, « consigne », « notation » ou « instruction ». Ce à quoi s’ajoute un certain nombre de déclinaisons terminologiques relatives à la « reconstitution », telles que proposées par la Tate Modern de Londres <span class="biblio"><a href="#curtis2007">(Curtis, 2007)</a></span> : « copie », « édition », « substitut »
... ailleurs Curtis évoque le problème de nouveau <span class="biblio"><a class="bib" href="#curtis2007">(2007)</a></span>.
```

```html
<section class="bibliography">
  <h1>Bibliographie</h1>
  <div id="benichou2010">
    <p>Bénichou, Anne, éd. 2010. <em class="title">Ouvrir le document : enjeux et pratiques de la documentation dans les arts visuels contemporains.</em> Perceptions. Dijon: les Presses du réel.</p>
  </div>
  <div id="biserna2022">
    <p>Biserna, Elena. 2022. <em class="title">Walking from Scores: An Anthology of Text and Graphic Scores to Be Used While Walking.</em> Ohcetecho, vol. 9. Dijon : les Presses du réel.</p>
  </div>
</section>
```

@quest le lien vers la référence doit-il nécessairement figurer dans un span ?

@quest pour l’interaction, a-t-on besoin d’un `id` sur la référence pour le renvoi ?

### Notes d’auteur (*.notes*)

```html
... plus simplement encore, « consigne », « notation » ou « instruction ». Ce à quoi s’ajoute un certain nombre de déclinaisons terminologiques relatives à la « reconstitution », telles que proposées par la Tate Modern de Londres <span class="note"><a class="note" id="refN001" href="n001">1</a></span> : « copie », « édition », « substitut »... ailleurs Curtis évoque le problème de nouveau.
```

```html
<section class="notes">
  <h1>Notes</h1>
  <div id="n001">
    <a href="refN001">1</a>
    <p>Texe de la note</p>
    <p>Suite du texte de la note</p>
  </div>
  <div id="n002"><!-- ... --></div>
  <div id="n003"><!-- ... --></div>
  <!-- ... -->
</section>
```

@quest le retour de ref n’est peut être pas nécessaire

@quest afficher les notes en bas de page ?

### Figures

```html
<figure>
  <img src="images/chart.jpg">
  <figcaption>
  	<p><!-- légende --></p>
    <p><!-- techniques, lieu de conservation --></p>
  </figcaption>
</figure>
```

@quest quid numérotation

@quest classes pour distinguer les parties de la légende ?

@rmq possible utilisation d’une visionneuse IIIF à discuter

### Autres éléments

- voir Composants > En-tête et navigation
- voir Composants > Inserts de compléments
- voir Composants > Parcours chapitre (entrées)
- voir Composants > Parcours thématiques
- voir Composants > Autres chapitres
- voir Composants > Pied de page

## Introduction générale (*article.preface*)

### Structure globale

```html
<article class="preface">
<!-- ... -->
</article>
<section><!-- ... --></section>
```

@todo chapitres

@titraille

## Préface (*article.introduction*)

### Structure globale

```html
<article class="introduction">
<!-- ... -->
</article>
<section><!-- ... --></section>
```

@todo parcourir le chapitre

@titraille

## Chronologie (*article.chronology*)

### Structure globale

On suit la structure habituelle pour regrouper les contenus de la page.

```html
<article class="chronology">
  <!-- ... -->
</article>
<section><!-- ... --></section>
```

@todo titraille

@historique lecture

## multimedia (*article.multimedia*)

### Structure globale

On suit la structure habituelle pour regrouper les contenus de la page.

```html
<article class="multimédia">
  <!-- ... -->
</article>
<section><!-- ... --></section>
```

@todo titraille + images

@todo historique lecture

### Types de contenu à styler

- div.text
- div.image-large
- div.image-parallels
- div.image-comment
- div.image-aside
- div.image-galery
- div.blockquote
- div.video

### Événements

La chronologie liste des séries d’événements.

```html
<div data-type="event" data-year="">
  <header>
	  <p class="date">xxx</p>
  	<h2>Titre</h2>
	  <h2 class="subheading">sous-titre</h2>
  </header>
  <div>
    <figure></figure>
    <p></p>
    <p></p>
  </div>
  <ul class="tags">
    <li data-tag="">tag 1</li>
    <li data-tag="">tag 2</li>
  </ul>
</div>
<div data-type="event" data-year="">
  <p class="date">xxx</p>
  <!-- ... -->
</div>
<div data-type="ref-event">
  <!-- ... -->
</div>
```

@rmq Pour un affichage par défaut, cela semble la solution la plus naturelle. Les alternatives consisteraient à utiliser un tableau ou une dl avec des sous éléments complexes.

@rmq On propose d’utiliser des data-type pour simplifier la distinction entre éléments de référence et événement ou récupérer le millésime.

@quest Est-ce que grouper les éléments du header ne pose pas de difficultés pour le stylage ? Pour répartir le contenu plus facilement dans un flex ou autre, on peut également au besoin utiliser trois div au lieu de header, div, ul

## À propos (*article.about*)

```html
<article class="about">
  <section class="edito"><!-- --></section>
  <section class="team">
    <h2>Équipe de rédaction</h2>
    <div></div>
    <div></div>
  </section>
  <section class="partners">
    <h2>Équipe de rédaction</h2>
    <p>lorem ipsum...</p>
    <svg/><svg/><svg/>
  </section>
  <section class="support"></section>
  <section class="credits"></section>
</article>
```

@quest svg ?

## Index (*article.index*)

```html
<article class="index">
  <h1>Index...</h1>
  <section>
    <h2>Index des personnes</h2>
    <div>
      <h3>A</h3>
      <div>
        <h4></h4>
        <p>Professeur...</p>
        <p><a href="id">0003-000320-232</a></p>
        <ul>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
      </div>
    </div>
  </section>
  <div>
    <h2
  </div>
</article>
```

@quest même page ? ou rechargement ? Alors quid du titre

## Index (*article.list*)

```html
<article class="list-persons">
</article>
```

@quest même page ? ou rechargement ? Alors quid du titre

## Composants

### Actualités (*.news*)

```html
<section class="news">
  <h1>Actualités</h1>
  <div>
    <h2>Actualisation</h2>
    <p><!-- texte --></p>
    <p><!-- texte --></p>
    <span class="date"><!-- date --></span>
    <a class="link" href=""><!-- --></a>
    <a class="link" href=""><!-- --></a>
  </div>
  <div>
    <!-- ... -->
  </div>
</section>
```

@quest span ?

@quest date

### Édito page accueil (*.edito*)

```html
<section class="edito">
  <div>
    <p>L’<em class="title">Encyclopédie des nouveaux usages des collections muséales</em> NUCMA se compose de six chapitres correspondant aux tranches de vie d’une œuvre d’art au sein des collections <span><a href="aquisition">Acquisition</a></span>, <span><a href="documentation">Documentation et restauration</a></span>, <span><a href="mediation">Médiation</a></span>, <span><a href="circulation">Circulation</a></span>, <span><a href="alienation">Restitution et aliénation.</a></span></p>
    <p>NUCMA est le projet qui fédère les quatre axes du Partenariat <em class="title">Des nouveaux usages des collections dans les musées d’art</em> : <span><a href="exposee">La collection exposée</a></span>, <span><a href="engagee">La collection engagée</a></span>,  <span><a href="elargie">La collection élargie</a></span> et la <span><a href="partagée">La collection partagée</a></span>. Elle mobilise l’expertise de tous ses participant·es chercheur·euses, professionnel·les des musées, étudiant·es, autour d’initiatives curatoriales, citoyennes, artistiques et numériques permettant la valorisation des pratiques innovantes des partenaires et l’insertion de celles-ci au sein d’un contexte plus large de pratiques muséales comparables à l’international.</p>
    <span class="link-button"><a href="xxxx">À propos</a></span>
  </div>
  <!-- à propos -->
</section>
```

@quest comment traiter la numérotation des chapitres et les puces

@quest comment traiter les bouton +Lire À propos ?

### En-tête et navigation (*header*)

```html
<header>
  <h1>NUMCA</h1>
    <nav>
      <ol>
        <li><a href="introduction">Introduction</a></li>
        <li><a href="chapitre/acquisition">Acquisition</a></li>
        <li><a href="chapitre/documentation">Documentation &amp; restauration</a></li>
        <!-- 
        <li><a href="chapitre/mise-a-vue">Mise à vue</a></li>
        <li><a href="chapitre/mediation">Médiation</a></li>
        <li><a href="chapitre/circulation">Circulation</a></li>
        <li><a href="chapitre/alienation">Restitutions et aliénations</a></li>
        -->
      </ol>
      <ul>
        <li><a href="listes">Listes</a></li>
        <li><a href="index">Index</a></li>
        <li><a href="bibliographie">Bibliographie</a></li>
        <li><a href="a-propos">À propos</a></li>
      </ul>
      <input type="search" title="Recherche"/>
    </nav>
  </header>
```

### Focus (*.focus*)

```html
<section class="focus">
  <h1>Focus – Nouvelles publications</h1>
  <div>
    <header>
      <p class="chapter">&#x2160;.3</p>
      <h2>Coacquisition</h2>
      <h2 class="subheading">Les collections en copropriété</h2>
    </header>
    <span class="button-only"><a href="xxxx">lire</a></span>
    <span class="link-chapter"><a href="acquisition">Acquisition</a></span>
    <span class="link-themes"><a href="partagee">La collection partagée</a></span>
  </div>
  <div>
    <header>
      <p class="chapter">&#x2160;.4</p>
      <h2>Coacquisition</h2>
      <h2 class="subheading">Les collections en copropriété</h2>
    </header>
    <span class="button-only"><a href="xxxx">lire</a></span>
    <span class="link-chapter"><a href="documentation">Documentation et restauration</a></span>
    <span class="link-themes"><a href="elargie">La collection élargie</a>
  </div>
</section>
```

@quest Numérotation en chiffre romains dans `class='chapter'`. Il me semble que Feed a prévu une variante typographique pour les chiffres romains, je propose d’encoder les chiffres romains en UTF-8. Idem dans les entrées

### Navigation des chapitres (*nav.chapter*)

```html
<nav class="chapter">
  <p class="number">Chapitre I</p>
  <h1>Acquisition</h1>
  <div>
    <h2>Entrées</h2>
    <li>
      <h3>Preface</h3>
      <p>Anne Bénichou</p>
      <p>Josée Drouin-Brisebois</p>
      <p>Richard Gagnier</p>
    </li>
    <li></li>
  </div>
  <div>
    <h2>Compléments</h2>
    <li></li>
    <li></li>
  </div>
  <button type="button" class="close"/>
</nav>
```

@quest où placer cette navigation dans la structure du site

@quest quid numérotation (ne peut pas être ol car pas num continus)

### Pied de page (*footer*)

```html
<footer>
  <section>
    <h1>Contact</h1>
    <p>L’Encyclopédie des nouveaux usages des collections est une publication collective conçue dans le cadre de la recherche partenariale Des nouveaux usages des collections dans les musées d’art soutenue par le <a href="https://www.sshrc-crsh.gc.ca">Conseil de recherche en sciences humaines (CRSH)</a> du Canada.</p>
    <p>Courriel : <a href="mailto:coordination@cieco.co">coordination@cieco.co</a>
    <img src="images/cieco.svg" alt="logo du groupe de recherche CIÉCO">
    <p>L’<em class="title">Encyclopédie des nouveaux usages des collections</em> est une publication du groupe de recherche <a href="https://www.cieco.co">CIÉCO</a></p>
  </section>
  <section>
    <h1>Explorer</h1>
    <ol>
      <li>Introduction</li>
      <li>Aquisition</li>
      <li>Documentation et restauration</li>
      <li>Mise à vue</li>
      <li>Médiation</li>
      <li>Circulation</li>
      <li>Restitutions et aliénations</li>
    </ol>
  </section>
  <section>
    <h1>Annexes</h1>
    <ul>
      <li>Listes</li>
      <li>Index</li>
      <li>Bibliographie</li>
      <li>À propos</li>
    </ul>
  </section>
  <section>
    <h1>Suivez-nous</h1>
    <ul>
      <li><a href="">LinkedIn</a></li>
      <li><a href="">Twitter/X</a></li>
      <li><a href="">Facebook</a></li>
    </ul>
  </section>
</footer>
```

@quest niveaux de titres

@quest classes ?

### Parcourir Chapitres (*.home-chapters*)

```html
<section class="home-chapters">
  <h1>Parcourir - Chapitres</h1>
  <div>
    <p>Chapitre I</p>
    <h1>Acquisition</h1>
    <span class="button-only"><a href="xxxx">lire</a></span>
  </div>
  <div>
    <p>Chapitre II</p>
    <h1>Documentation<br/> Restauration</h1>
    <span class="button-only"><a href="xxxx">lire</a></span>
  </div>
  <!-- ... jusqu’à 7 -->
</section>
```



### Parcours thématiques (*.pathways-themes*)

```html
<section class="pathways-themes">
  <h1>Parcours – Thématique</h1>
  <ul>
    <li><a href="themes/communaute">communauté</a></li>
    <li><a href="themes/engagement">engagement</a></li>
    <li><a href="themes/numérique">numérique</a></li>
    <li><a href="themes/écologie">écologie</a></li>
    <!-- ... -->
  </ul>
</section>
```

### Parcours et rebonds

```html
<section class="pathways-chapters">
  <h1>Parcours – Chapitre</h1>
  <!-- ... -->
</section>
<section class="pathways-themes">
  <h1>Parcours – Thématique</h1>
  <ul>
    <li><a href="themes/communaute">communauté</a></li>
    <li><a href="themes/engagement">engagement</a></li>
    <li><a href="themes/numérique">numérique</a></li>
    <li><a href="themes/écologie">écologie</a></li>
    <!-- ... -->
  </ul>
</section>
<section class="pathways-plan">
  <h1>Rappel des chapitres</h1>
  <!-- ... -->
</section>
```

@quest comment distinguer parties de titre dans « Parcours – Chapitre » ?

@quest faut-il redémarrer la numérotation à 1 dans les sections ?

### Parcours chapitre (entrées) 

```html
```

Parcours chapitre (entrées)
