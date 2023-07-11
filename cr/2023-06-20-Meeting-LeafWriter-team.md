---
title: Leaf writer technical meeting
description: Rencontre avec l'équipe de leaf-writer
author: ouvroir
date: 2023-06-20
draft: true
tags:
    - cr
    
---

# LEAF-writer meeting

Participants: 
- Susan
- Diane
- Luciano
- Emmanuel
- Lena
- William

Team is in the process to launch LEAF platform at Gratz (DH 2023)

What are the difficulties we face with Leaf in the context of the encyclopedia?

- Travail avec TEI mais pas dans un context 
- chaîne de publication numérique
- volonté d'utiliser un schéma custom (TEI Journal)
- Emmanuel: using relaxNG schema but couldn't make it work with LW

Luciano sees 3 problems:
- last changes created a bug when using outside (using NPM package). Should be in good shape next week
- how to use leaf writer in a different environment: commons or own instance? 
- schema and document : Luciano needs to check the schema.

All of Diane's projects in LW have custom TEI schemas and work.
Maybe it's only an issue of the external linking of the schema
How do you link the schema ? Diane's are on github and she adds an absolute link to the raw file.

```xml
<xml><xml-schema src="raw github file.rng"></xml-schema>

</xml>
```
check rng files and CSS in: https://github.com/BucknellDSC/suzette/tree/master/out
- simple CSS and TEI style for the document
- create a ticket in gitlab with link to schema and document if it doesn't work

click on add schema: point to the schema and style sheet, giving it a name and a mapping
schema name  is on the bottom

- Use LW commons 
- Custom interface for the Encyclopedia
    - connect to external API for images → visual feedback
    - metadata of the images: API 
- Leaf as publication production environement (not what we are looking for)

Use LEAF for production of the XML file
We automate the HTML production with github, using java environment to make the transformation

How can we provide an environment for the editors of the encyclopedia to work on XML files

Can we setup a lookup in LW which has authentification? Luciano says it's not ready to add custum lookups

insert an image: figure element with graphic content and mime type 
interface requires a visual modal window where we can look through another service and choose the image
deal with the metadata of the image

If people want to insert an image from another source: desirable extension for LW as it makes it more user friendly
It would be possible to genericize this need to accomodate us while still flexible enough for us. First discuss how it gets done.

How they want to deal with modularity and extension.

Difficulty raised by Luciano: button with standardised tags, but also a gallery view that draws from the provider (API) a list of images that correspond to the search.

IIIF web service for the images.

Using GUI components 
- we would change the backend 

we define the provider
component that deals with the back and forth 

Create a shared document to clarify expectations
- équivalent du cahier des charges
- repartir le travail
- rencontres de suivi avec Luciano au besoin

## Categorisation of the Encyclopedia
How to define the place of the document inside the encyclopedia? how to work and link multiple files? 
- hyperlinking between documents (cross referencing)
- keywords, indexing the content 

autocompletion for both these processes
check that the link works

### define a target environment
autocompletion for the links, show it differently instead of just hard coding a link

Could we emmbed the keywords in the schema? 

Allow lookups of attributes that are bigger than the schema 

Enable a vocabulary lookup: fixed vocabulary, like a lookup but our material instead of viaf or else. Picking from a list.

Subject headings visually shown with the CSS.

Can we publish the keywords as vocabulary: small quantity, but they wouldn't require to be published as a vocabulary. 

TEI file that describes a structure or vocabulary

Would users be able to generate new keywords? 
Not crucial: we would be able to do it by hand, but definitly need to link to it.

Susan: interesting to have an interface to interact with keywords, suggestions for these keywords
<!--est-ce qu'on peut gérer les mot-clefs depuis common et avoir une sortie structurée dans l'API, SKOS ou autre plus simple?-->

Environment that would work for our usecase? Schema is the most important, then indexing and keywords


## cross referencing
editing article by article in LW, but we need to have some metadata that situates the article within the encyclopedia

folksonomy to index the contents

stiching the articles together to see the larger context? Not quite, inject new functionnalities in LW, dialog box for linking (cross-referencing). JS function that goes through the repo of the encyclpedia. Dialog box shows all the documents and folders. These are the documents you can link too. 

Luciano says that what we are describing are similar functionnalities with drupal or wordpress. LW is less than that. 

Red link: add link to nothing and then create the page.

Are we storing the documents in a Github-style repo? 
Are the URLs of the documents known and are they in the same repository ?
Lookup to the repository and select a document 
- UI to navigate and search the hierarchy of the encyclopedia
- similar to the zotero integration in Word

user custom toolbar when you authenticate?
hooks into LW? 

Code base is a mix between react and jquery

## authentication

using LW commons or create our own instance? 
- it might be too much to have to create our own instance, with a different backend (Diane did it at bucknell)
- having our own authentication system

Having an environment that would be integrated with github. Why would be redo it if it is already done? Because it has been done in a general way. 

So we would need our own instance. When you install it, you can suppress or change some buttons.
Configurable options but would stil be linked to the codebase.

## suivi détaillé

- What would it take for LW and for Ouvroir teams to integrate these functionnalities?
- When that fits into the workload and calendars of both teams

There are a few things we can start working on, inserting an image. 
We can start on that and that can help define the collaboration.

low-boil:
- schema
- images
- basic lookup

After DH, scope out some of the more complicated things 

### question 
Way in which we want touse the keywords? 

