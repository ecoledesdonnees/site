---
layout: post
title:   Section 1. Noix et chewing gum
date:   2015-07-26
author : Tactical Tech
categories: Fondamentaux
description: "Dans cette section, vous obtiendrez des techniques pratiques pour mettre en forme vos données, des conseils pour présenter vos feuilles de calcul et des idées pour savoir comment montrer vos données brutes aux autres de sorte qu’ils vous aiment à la fin !"
---

# Section 1: Noix et chewing gum

## Introduction

Certaines choses ne s’accordent pas. Par exemple, un chiot en peluche et une lampe-torche, ou des noisettes et du chewing-gum :

![http://farm9.staticflickr.com/8516/8401143241_924a729397_n_d.jpg](http://farm9.staticflickr.com/8516/8401143241_924a729397_n_d.jpg)

Novelty lamp, Albania, 2011. Photo: Tom Longley. Oui, l’abat-jour est monté sur la tête du chiot. License : certains droits réservés CC-BY-SA.

![http://farm9.staticflickr.com/8237/8402232902_ec862773eb_n_d.jpg](http://farm9.staticflickr.com/8237/8402232902_ec862773eb_n_d.jpg)

‘Noix et Chewing-gum’. D’après la série The Simpsons, série 5, épisode 14 : Lisa vs. Malibu Stacy, 1994. Voir la vidéo : [http://vimeo.com/9372862](http://vimeo.com/9372862) Copyright: FOX. Reproduced under Fair Use.

Dans les feuilles de calcul, la mise en forme et les données ne se marient pas bien. Voici les conséquences de la mise en forme d’une feuille de calcul :

![http://farm9.staticflickr.com/8503/8401143543_a8a9b1bb41_c_d.jpg](http://farm9.staticflickr.com/8503/8401143543_a8a9b1bb41_c_d.jpg)

Vous avez déjà probablement reçu quelque chose d’aussi moche que l’image ci-dessus. Les créateurs de feuilles de calcul passent beaucoup de temps à mettre en forme les données à leur convenance. Ils changent la dimension du texte, la couleur des cellules, ajoutent des bordures et des lignes pour souligner ce qui les intéresse. Néanmoins, celles-ci ne vous sont pas nécessairement utiles en tant que destinataire des données et peuvent en perturber votre usage.

À la fin de cette section, vous aurez :

  * une connaissance pratique de la mise en forme et des fonctionnalités de présentation des feuilles de calcul.
  * les compétences pour transformer les données des autres, et faire de la lampe-chiot quelque chose de moins distrayant.
  * des idées sur comment présenter vos données brutes à d’autres afin qu’ils vous aiment !

## Un peu de travail

Pour faire à la fois les tâches rapide et longue ci-dessous vous aurez besoin :

  * d’un tableur, comme Excel ou Libre Office.
  * d’une copie du jeu de données du cours, les données GRAIN (Genetic Resources Action International) sur l’accaparement de terres (disponible [ici](http://datahub.io/dataset/grain-landgrab-data/resource/af57b7b2-f4e7-4942-88d3-83912865d116)).

### Une tâche rapide (15-30 minutes)

Prêt à mettre le bazar ? Essayons et pénetrons l’esprit des gens qui fabriquent des feuilles de calcul aussi laides que des lampes-chiots.

Dans son excellent ouvrage « The Art of Spreadsheets » (L’art des feuilles de calcul), John Raffensperger énumère [37 manières de cacher les données d’une feuille de calcul](http://john.raffensperger.org/ArtOfTheSpreadsheet/Chapter09_ShowAllTheInformation.html). Voici 10 d’entre elles :

  * Ne partagez pas le fichier. C’est la façon la plus commune de cacher l’information, et la plus efficace
  * Cachez la feuille. Vous avez besoin d’au moins deux feuilles, puis : Format, Feuille, Masquer
  * Cachez la ligne : Format, Ligne, Masquer
  * Cachez la colonne : Format, Colonne, Masquer
  * Cachez la cellule et protéger la feuille : Format, Cellule, Protéger la cellule, Masquer, et ensuite Outils, Protection. Cela montre le résultat mais cache la formule : =if(1, “Paix !”, “Attaquez à l’aube.”)
  * Rétrécissez excessivement la largeur de la colonne : Format, Colonne, Largeur, 0.
  * Pour les formules susceptibles d’être égales à 0, utilisez Outils, Options, Vue, et décochez la case Valeurs nulles. Par exemple : =IF(1, 0, “Attaquez à l’aube.”).
  * Utilisez une formule qui retourne une valeur vide : =IF(1, “ ”, “Attaquez à l’aube.”).
  * Créez une formule compliquée qui affiche l’information, mais formatez la comme du texte (avec Format, Cellule, Nombre, Texte, ou bien commencez la cellule par une apostrophe), de sorte que la formule s’affiche plutôt que le résultat.
  * Utilisez la police Wingdings : Format, Cellule, Police, Wingdings. Cela affiche des caractères inintelligibles.

Utilisez la liste de John Raffensperger comme source d’inspiration, votre tâche est de mettre le foutoir le plus possible dans les données de GRAIN. Des notes seront attribuées pour :

  * rendre la présentation juste assez mauvaise pour que quelqu’un utilisant les données puisse penser qu’il peut quand même les utiliser !
  * l’usage d’effets de couleur et de police agressant réellement l’oeil
  * l’ingéniosité à cacher des fragments de données à la vue normale

Quand vous avez terminé de mettre le désordre, réfléchissez à la manière dont vous reviendriez en arrière et persuaderiez les autres de ne pas traiter leurs données de cette manière.

### Une tâche plus longue (30-60 minutes)

Partir du Problème 1 du Livre de Recettes (section Nettoyage des Données) : [affichez les données en utilisant simplement les données de GRAIN.](http://schoolofdata.org/handbook/recipes/cleaning-data-with-spreadsheets/#problem-1-showing-the-data-plainly). Cela montre comment supprimer rapidement la mise en forme. C’est la première partie d’une « recette » plus longue sur le nettoyage des données.

## Lectures complémentaires

  1. La documentation pour les tableurs les plus courants met en valeur les différentes manières de modifier la façon dont une feuille de calcul présente les données. Selon le tableur que vous utilisez, visitez ces sites pour vous rafraîchir la mémoire : [Libre office – Mise en forme](https://help.libreoffice.org/Calc/Format), [Excel – Style des cellules](http://office.microsoft.com/en-us/excel-help/apply-create-or-remove-a-cell-style-HP001216732.aspx), [Googles Docs – Style des cellules](http://support.google.com/drive/bin/answer.py?hl=en&answer=46973)
  2. « The Art of Spreadsheets » (l’art des feuilles de calcul), par John Raffensperger, énumère une liste de [37 façons de cacher l’information dans les feuilles de calcul](http://john.raffensperger.org/ArtOfTheSpreadsheet/Chapter09_ShowAllTheInformation.html).
  3. La légende des feuilles de calcul Chandoo explore les moyens de s’assurer que [vos feuilles de calculs plairont à votre patron](http://chandoo.org/wp/2009/11/03/make-better-excel-sheets/).
  4. L’option nucléaire : comment supprimer toute la mise en forme d’une feuille de calcul ([Libre Office](https://help.libreoffice.org/Common/Undoing_Direct_Formatting_for_a_Document#Removing_all_Direct_Formatting_in_a_LibreOffice_Calc_Spreadsheet))

## Reposez-vous et réfléchissez

Bien, vous devez être épuisé, faisons une petite pause et voyons ce que nous avons fait. Voici quelques questions pour démarrer :

  1. Quels sont les moments où le formatage est utile ?
  2. Quels sont les inconvénients à supprimer la mise en forme d’une feuille de calcul ?
  3. Comment devrions-nous afficher les données dans les outils que nous utilisons quotidiennement ?

Si vous le souhaitez, discutez-en dans les commentaires.

Et maintenant précipitez-vous sur le prochain chapitre de ce cours, L’homme invisible est dans votre tableur, brouillant vos données.

### Note 

Ce cours a été conçu pour le projet École des données par [Tactical Technology Collective](http://tacticaltech.org/). Tactical Tech est une ONG internationale travaillant sur le lien entre la défense des droits, l’information et la technologie.  

Article d’origine : [Section 1: Nuts and chewing gum](http://schoolofdata.org/handbook/courses/data-cleaning-nuts-and-gum/)
