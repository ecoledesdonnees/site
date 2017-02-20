---
layout: post
title:   Une brève introduction au nettoyage des données. Plan du cours.
date:   2015-07-26
author : Tactical Tech
categories: Fondamentaux
description: "Ce cours de l’Ecole des Données est une brève introduction au nettoyage des données pour réduire les erreurs. Il a été conçu par Tactical Technology Collective et offre un aperçu clair des erreurs qu’on peut trouver dans les feuilles de calcul, tout en donnant les méthodes pour les corriger (si nécessaire). Si vous voulez savoir pourquoi il est important de nettoyer des données et apprendre comment le faire, ce cours est pour vous."
---

# Plan du cours : Une brève introduction au nettoyage des données

Ce cours a été conçu pour le projet École des données par [Tactical Technology Collective](http://tacticaltech.org/). Tactical Tech est une ONG internationale travaillant sur le lien entre la défense des droits, l’information et la technologie.

Il est difficile de s’enthousiasmer pour des données, mais essayons ! Prenez une minute pour regarder l’image ci-dessous. Formidable, un ours jaune qui sourit… quel spectacle ! Il ne manque plus qu’un feu d’artifice.

![http://farm9.staticflickr.com/8219/8412778423_2b06c83e7b_o_d.jpg](http://farm9.staticflickr.com/8219/8412778423_2b06c83e7b_o_d.jpg)

Image source: China Daily / Reuters, 17 Janvier 2006. Droits réservés.

Maintenant imaginez votre déception si votre tentative de créer le plus grand gâteau glacé du monde échouait à cause d’une **erreur dans votre feuille de calcul** due à un simple espace dans la colonne intitulée « quantité de glace ». Ce ne serait pas agréable ? (Heureusement, ça n’est pas arrivé et personne n’a probablement été licencié. Et tout le monde est satisfait de la réalisation d’[un gâteau glacé de 8 tonnes](http://thelargest.net/ice-cream-cake)).

Les erreurs dans les données sont tellement courantes qu’il existe même une organisation internationale, le European Spreadsheet Risks Interest Group (ESRIG), qui se donne pour mission de formuler des recommandations pour minimiser le nombre d’erreurs dans la manipulation d’un tableur. L’ESRIG repère les histoires les plus édifiantes (« horror stories ») [où des erreurs dans les feuilles de calcul ont eu des conséquences réelles](http://www.eusprig.org/horror-stories.htm), telles que des milliards de revenus manquants du pétrole, des dizaines de milliers de tickets aux jeux olympiques vendus en trop, et des salaires versés exorbitants à cause de l’insertion accidentelle de zéros. Certaines erreurs sont délibérées et « criminelles ». D’autres sont dues à la complexité de la manipulation des données. D’autres encore sont dues à la manière dont les feuilles de calcul se comportent.

Ce cours de l’Ecole des Données est une brève introduction pour **réduire le nombre d’erreurs en nettoyant des données**. Cela implique de :

  * Détecter et retirer les données non pertinentes
  * Mettre en forme correctement les données
  * Repérer les incohérences dans les données
  * Structurer les données

## Pré-requis

**Une brève introduction au nettoyage des données** s’appuie sur le cours des [_Fondamentaux des données_](http://ecoledesdonnees.org/handbook/cours/) de l’Ecole des Données.

Pour réaliser ce cours, **vous aurez besoin de **:

  * Un tableur, du type Excel (que vous devrez acheter) ou Calc de LibreOffice (téléchargeable gratuitement en ligne) installé sur votre ordinateur.
  * Nous partons du principe que vous avez les compétences suivantes : connaissances basiques de gestion des feuilles de calcul, créer un fichier, insérer des données, copier, coller, créer des formules simples. Si vous avez besoin de cours de rattrapage sur ces aspects, la Knight Digital Media Centre a [d’excellents tutoriels en ligne](http://multimedia.journalism.berkeley.edu/tutorials/spreadsheets/).
  * Une copie du jeu de données de GRAIN sur « [l’accaparement des terres](http://datahub.io/dataset/grain-landgrab-data)« . Nous utilisons ce jeu de données parce qu’il est à la fois intéressant et qu’il est parlant en termes de recherche et agrégation de données pour résoudre un problème. Ce jeu procure également une variété d’excellents problèmes que nous pouvons travailler à résoudre. Enfin, nous utiliserons ce jeu de données comme base du cours à venir sur l’analyse des données.

## Contenu du cours

Le contenu du cours est composé de la façon suivante :

  * Le cours en ligne, qui est en fait la page que vous êtes en train de lire.
  * Section 1: [« Noix et chewing gum »](https://ecoledesdonnees.org/handbook/cours/nettoyage-des-donnees-noix-et-gum/) aborde la façon dont les données sont présentées dans un tableau et comment une mauvaise présentation peut engendrer des erreurs.
  * Section 2: [« L’homme invisible »](https://ecoledesdonnees.org/handbook/cours/nettoyage-des-donnees-homme-invisible/) aborde la question des blancs, espaces et caractères spéciaux et la façon dont ils altèrent les possibilités d’usage des données.
  * Section 3: [« La potion magique »](https://ecoledesdonnees.org/handbook/cours/nettoyage-des-donnees-potion-magique/) aborde la question de la consistance des données et les manières de déterminer les bonnes unités et les bons formats de données.
  * Section 4: [« La mauvaise valise »](https://ecoledesdonnees.org/handbook/cours/nettoyage-des-donnees-mauvaise-valise/) aborde la question du stockage et structuration des données.
  * En complément de ces sections, [une recette pas-à-pas](https://ecoledesdonnees.org/handbook/recipes/cleaning-data-with-spreadsheets/) est mise à disposition pour nettoyer les données. Il s’agit d’un manuel d’une variété de ressources que nous abordons par section. Nous partons d’un ensemble de données « impropres » pour avancer à travers les différentes étapes vers leur transformation en données « propres ».

Chaque section de cours contient :

  * Une **introduction** au problème : nous avons tenté d’expliquer les problèmes de la manière la plus facile possible.
  * Un **bref exercice** d’une quinzaine de minutes pour vous familiariser avec la question. Nous vous proposerons généralement de faire quelque chose et de poster votre travail dans l’espace de discussion.
  * Un **exercice plus long** de nettoyage des données. Certaines tâches peuvent prendre jusqu’à une heure.
  * Une **liste de références et de ressources**. Nous avons inclus aussi bien des essais, que des manuels de logiciels ou même des blogs.
  * Une **question** sur le contenu du cours à laquelle vous pouvez répondre dans l’espace de discussion. N’hésitez pas à commenter chaque section et donner vos retours.

## Comment suivre ce cours

Nous vous suggérons :

  * Parcourez les sections 1à 4 et effectuez le premier exercice, puis le refaire avec l’exercice plus long.
  * Ne souffrez pas en silence ! Nous sommes là pour vous aider.

Prêt à vous lancer ?

Très bien, présentez vous dans l’espace de discussion et commencez avec la section 1.

  
