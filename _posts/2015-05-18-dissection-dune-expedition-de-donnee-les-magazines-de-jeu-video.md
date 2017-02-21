---
layout: post
title:   Dissection d’une expédition de donnée. Les magazines de jeu vidéo
date:   2015-05-18
author : Cédric Lombion
categories: Blog Post
description: "Cet article est à la fois un tutoriel et une démonstration du processus que je suis pour réaliser une « expédition de donnée » seul, où en tant que participant durant un événement de l’École des données. Chaque étape va être détaillée : Trouver, Récupérer, Vérifier, Nettoyer, Explorer, Analyser, Visualiser, Publier.

En fonction de vos données, de votre source ou de vos outils, l’ordre dans lequel vous passerez ces étapes sera différent. Mais le processus est globalement le même."
---

## Dissection d’une expédition de donnée : les magazines de jeu vidéo

Le 18 mai 2015 dans [HowTo](https://ecoledesdonnees.org/category/howto/)

### Introduction

Cet article est à la fois un tutoriel et une démonstration du processus que je suis pour réaliser une « expédition de donnée » seul, où en tant que participant durant un événement de l’École des données. Chaque étape va être détaillée : Trouver, Récupérer, Vérifier, Nettoyer, Explorer, Analyser, Visualiser, Publier.

En fonction de vos données, de votre source ou de vos outils, l’ordre dans lequel vous passerez ces étapes sera différent. Mais le processus est globalement le même.

### TROUVER

Une expédition de données peut partir d’une question (i.e. quel est le niveau de pollution de l’air des capitales européennes ?) ou d’un jeu de données que vous voulez explorer. Dans le cas qui nous intéresse, j’avais une question : les marché des magazines de jeux vidéos a-t-il décliné ces dernières années ? Cela fait plusieurs semaine que j’étudie l’industrie du jeu vidéo et c’est une des nombreuses questions auxquelles j’ai cherché des réponses.

Evidemment, il y a d’autres questions intéressantes à explorer, mais il vaut mieux commencer avec une seule question et étendre le champ de recherche par la suite.

Après quelques recherches, la page Wikipedia anglophone s’est avérée être la source la plus complète sur les magazines de jeux vidéos. On y trouve même des informations contextuelles qui seront utiles plus tard (le contexte est essentiel dans l’analyse de données).

![image alt text](http://ecoledesdonnees.org/files/2015/05/image_0.png)

[https://en.wikipedia.org/wiki/List_of_video_game_magazines](https://en.wikipedia.org/wiki/List_of_video_game_magazines)

### RECUPERER

Les données Wikipedia sont sous forme de tableau. Parfait ! Les scraper est aussi simple que d’utiliser la fonction importHTML dans Google Spreadsheet. Je pourrais copier/coller le tableau, mais ça devient peu pratique lorsque le tableau est très long et le résultat serait mal formatté. LibreOffice et Excel ont des fonctionnalités d’import similaires, bien que moins intuitives.

importHTML requière 3 variables : le lien vers la page, le format des données (tableau ou liste) et le range du tableau (ou de la liste) dans la page. Si aucun rang n’est indiqué, la fonction récupérera le premier tableau qu’elle trouve.

![image alt text](http://ecoledesdonnees.org/files/2015/02/janv.-31-2015-2343.gif)

Une fois que j’ai récupéré le tableau, je fais deux choses pour travailler plus rapidement :

  * je change la police et la taille des cellules au minimum, pour voir plus d’éléments à la fois,
  * je copie l’ensemble et je fais : Edition->Collage spécial->Coller uniquement les valeurs. De cette façon, le tableau n’est plus lié à importHTML, et je peux le modifier à souhait.

### VERIFIER

Ces données vont-elles répondre complèyement à ma question ? J’ai bien les données de base (nom, date de création, date de dépôt de bilan), mais est-ce que tous les magazines y sont ? Une vérification du côté de la [page wikipedia francophone](https://fr.wikipedia.org/wiki/Liste_de_magazines_de_jeux_vid%C3%A9o) sur les magazines de jeux vidéos montre que beaucoup de magazines français manquent à l’appel. La plupart des magazines présents sont des Etats-Unis ou de Grande Bretagne, et sans aucun doute uniquement les plus connus. Je devrai donc prendre cela en compte pour la suite.

### NETTOYER

Travailler directement sur vos données brutes n’est jamais une bonne idée. Une bonne habitude est de travailler sur une copie ou de façon non-destructive – ainsi, si vous faites une erreur et que vous n’êtes pas certain de vous, vous pourrez retourner en arrière et comparer votre fichier à l’original.

Puisque je ne veux garder que les magazines de Grande Bretagne et des Etats Unis, je vais :

  * Renommer la feuille de calcul originale « Raw Data » (c’est à dire « Données brutes »)
  * Faire une copie de cette feuille et l’appeler « Clean Data » (c’est à dire « Données nettoyées »)

  * Trier par ordre alphabétique la feuille « Clean Data » selon la colonne « Country»

  * Supprimer toutes les lignes correspondant aux pays autres que la Grande Bretagne et les Etats-Unis.

![image alt text](http://ecoledesdonnees.org/files/2015/02/fe%CC%81vr.-01-2015-1327.gif)![image alt text](http://ecoledesdonnees.org/files/2015/02/ordering-data.gif)

Astuce : pour éviter de faire bouger les en-têtes de colonnes quand vous triez vos données, aller à Affichage->Figer une ligne.

D’autres ajustements mineurs doivent être réalisés, mais ils sont assez légers pour que j’ai pas recours à une outil spécialisé comme [Open Refine](http://openrefine.org/) :

  * Scinder les lignes où deux pays sont listés (i.e. PC Gamer devient PC Gamer UK et PC Gamer US)
  * Supprimer la colonne « ref », qui n’ajoute aucune information

  * Supprimer une ligne où la date de création est manquante.

### EXPLORER

J’appelle « exploration » l’étape à laquelle je pense aux différentes réponses que mon jeu de données nettoyé peut donner à ma question initiale. Votre narration sera beaucoup plus riche si vous attaquez la question de plusieurs angles.

Il y a plusieurs choses que je pourrais chercher dans les données :

  * des particularités intéressantes
  * des changements au cours du temps

  * des expériences personnelles

  * des interactions surprenantes

  * des comparaisons qui permettent de contextualiser

Que puis-je donc faire ? Je peux :

  * afficher le nombre de magazines en existence chaque année, ce qui me permettra de savoir si il y a eu un déclin ou non (changements au cours du temps)
  * regarder le nombre de magazines créés par année, pour savoir si le marché est toujours dynamique (changements au cours du temps)

Dans le cadre de ce tutoriel, je vais me concentrer sur la seconde question, c’est à dire le nombre de magazines créés par année. Un autre tutoriel sera dédié à la première, car elle demande une approche plus complexe en raison du format des données.

A ce stade, j’ai plein d’autres idées en tête : Est-ce que je peux déteminer l’année ayant produit le plus de magazines (particularités intéressantes) ? Est-ce que la comparaison avec les données sur les sites de jeu vidéo serait intéressante (comparaisons qui permettent de contextualiser) ? Quels magazines ont la plus grand longévité (particularité intéressante) ? Toutes ces questions valent le coup d’être explorées, mais elle ne le seront pas dans le cadre de ce tutoriel. Il vaut mieux à ce stade les noter afin de les revisiter plus tard : traiter les questions une à une permet d’éviter les erreurs.

### ANALYSE

Il s’agit ici d’appliquer les techniques d’analyse de données à mon jeu de données et d’explorer les visualisations possibles.

La façon la plus rapide de répondre à la question « combien de magazines ont été créés chaque année ? » est d’utiliser un tableau croisé dynamique.

  1. Sélectionnez la portion des données qui répondent à la question (les colonnes « name » et « founded »)
  2. Aller à Données -> Tableau croisé dynamique

  3. Dans la feuille de calcul créée, sélectionnez le champ « Founded » dans le menu déroulant de Lignes. Les années de création (founded) sont ordonnées et groupées, ce qui nous permet de compter le nombre de magazines pour chaque année, en commençant par la plus éloignée.

  4. Je sélectionne ensuite le champ « Name » dans le menu déroulant de Valeurs. Le tableau croisé dynamique s’attend à des nombres par défaut (il essaye de réaliser une addition), donc rien ne s’affiche. Il faut sélectionner COUNTA, qui est la formule qui va compter le nombre d’éléments.

![image alt text](http://ecoledesdonnees.org/files/2015/02/fe%CC%81vr.-01-2015-1208.gif)

Ces données peuvent être visualisées avec un graphique de en barres.

![image alt text](http://ecoledesdonnees.org/files/2015/05/image_5.png)

_source: https://en.wikipedia.org/wiki/List_of_video_game_magazines_

La ligne de tendance semble indiquer une déclin dans la dynamique du marché, mais il est difficile de déceler la tendance avec les barres seules. Si on groupe les années par demi-décades, la tendance est plus claire :

![image alt text](http://ecoledesdonnees.org/files/2015/02/fe%CC%81vr.-01-2015-1249.gif)

Notre nouveau graphique en barre ressemble donc à ça :

![image alt text](http://ecoledesdonnees.org/files/2015/05/image_7.png)

_https://en.wikipedia.org/wiki/List_of_video_game_magazines_

Le nombre de magazines créée chaque 5 ans décroit beaucoup dans le années aux alentour de 2000. La baisse dramatique des années 1986-1990 est certainement une conséquence du [krash du jeu vidéo de 1983](https://fr.wikipedia.org/wiki/Krach_du_jeu_vid%C3%A9o_de_1983).

Contrairement à ce que l’on aurait pu supposer, le marché est toujours dynamique, avec un magazine créé chaque année les 5 dernières années. L’histoire que l’on va pouvoir raconter n’en sera que plus nuancée et intéressante.

### VISUALISER

Dans le cadre de ce tutoriel, les graphiques créées durant l’étape d’analyse suffisent à ma narration. Mais dans l’hypothèse où mes résultats auraient requis une visualisation plus complexe, voire interactive, pour être communiqués, ce travail aurait été traité au sein de l’étape « visualiser ».

### PUBLIER

Où et comment publier est une question essentielle que vous devrez vous poser au moins une fois. Peut-être que vous faites partie d’une organisation qui a son site web et la question ne se pose pas. Mais si ce n’est pas le cas, et que vous n’avez pas encore de site web, la réponse peut-être plus longue à trouver. WordPress est un mastodonte qui en fait peut-être trop pour vos besoins. Tumblr est une possibilité, si vous êtes prêt à modifier le code à la main. Pour ceux qui baignent dans le milieu de la programmation, une combinaison de [Github Pages](https://pages.github.com/) et de Jekyll peut-être une bonne idée. Si vous avez besoin d’une base de données légère, jetez un oeil à [tabletop.js](http://www.builtbybalance.com/tabletop), qui permet d’utiliser une Google spreadsheet comme une base de donnée basique.  


### Conclusion

Toute expédition de donnée, quelque soit sa taille ou sa complexité, peut être gérée avec ce processus. En suivant les étapes listées ci-dessus, vous vous évitez de nombreux maux de tête et problèmes potentiels. Bien souvent vous aurez à récupérer et analyser des données supplémentaire pour contextualiser les données initiales, mais il s’agit alors simplement de répéter les différentes étapes autant de fois que nécessaire.
