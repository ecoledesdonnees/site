---
layout: post
title:   Nettoyer, explorer, cartographier. L’atelier cinéma de l’Ecole des données
date:   2015-04-12
author : Cédric Lombion	
categories: blogpost
description: "Le samedi 7 mars l’Ecole des données, en partenariat avec Silicon Banlieue, a organisé un nouvel atelier gratuit, cette fois-ci autour des données du cinéma."
---

# Nettoyer, explorer, cartographier : l’atelier cinéma de l’Ecole des données

Dimanche 12 avril 2015 par [Cédric Lombion](http://www.pratiques-collaboratives.net/_Cedric-Lombion_.html)

[![Atelier cinema à Silicon Banlieue](http://www.pratiques-collaboratives.net/local/cache-vignettes/L591xH394/atelier-cinefe49-b311b.jpg)](http://fr.okfn.org/files/2015/04/atelier-cinema.jpg)

Le samedi 7 mars l’Ecole des données, en partenariat avec [Silicon Banlieue](http://fr.okfn.org/feed/www.siliconbanlieue.fr/), a organisé un nouvel atelier gratuit, cette fois-ci autour des données du cinéma. Après une introduction décrivant les grandes étapes du traitement des données, trois situations ont été abordées : le nettoyage des données textuelles, l’exploration et l’analyse des données, et enfin la visualisation géographique avec des outils gratuits en ligne.  
  


[![Les grandes étapes d’une expédition de donnée (cliquez pour voir en grand)](http://www.pratiques-collaboratives.net/local/cache-vignettes/L591xH273/Expedition-ddfa1-e4b45.png)](http://fr.okfn.org/files/2015/04/Expe%CC%81dition-de-donne%CC%81es.png)

Les grandes étapes d’une expédition de donnée (cliquez pour voir en grand)

**1. Les données**

Les données utilisées ont été gracieusement fournies par la mission Images et Cinéma du Conseil général du Val d’Oise. Elles consistaient en un fichier de 1174 lignes représentant tous les tournages filmés sur le territoire du Val d’Oise depuis 1901. Elles ont été nettoyées avant l’atelier afin de les rendre plus facilement utilisables.

**2. Le nettoyage des données textuelles**

Le fichier étant essentiellement composés de texte (titres, noms, commentaires…), c’était l’occasion d’utiliser [OpenRefine](http://openrefine.org/), un outil gratuit de nettoyage de jeux de données, particulièrement adapté aux données textuelles.

Le logiciel a fait grande impression sur les participants : bien que très puissant, il reste facile à utiliser pour les tâches les plus simples.

A ne pas oublier :

  * Sur Mac, le système d’exploitation risque de considérer le fichier d’installation de OpenRefine comme corrompu. Il suffit d’aller de changer temporairement le réglage suivant : Préférences Système -> Sécurité et confidentialité -> Général -> autoriser les applications téléchargées de n’importe où.
  * Comme lors de l’ouverture d’un fichier .csv sur Excel/Libre Office, il faut choisir le format UTF-8 sur la page d’accueil d’OpenRefine, à côté de « Character Encoding ».
  * Si OpenRefine est ouvert mais qu’aucune fenêtre ne s’ouvre, il suffit d’ouvrir un nouvel onglet du navigateur à l’adresse http://127.0.0.1:3333/

**3. L’exploration et l’analyse de données**

L’exploration consiste à poser des questions précises et pertinentes auxquelles le jeu de donnée pourrait répondre. Cette étape permet de cadrer la phase d’analyse, qui consiste à utiliser des outils mathématique et statistiques pour extraire des réponses des données. Elle permet aussi de poser la question des données supplémentaires qu’il faudrait récupérer pour mieux contextualiser le jeu de données.

Quelques exemples de questions posées par les participants :

  * Combien de différentes nationalités parmi les réalisateurs ?
  * Quelle répartition des films dans le temps ?
  * Quel genre de film est le plus représenté ?
  * Quels sont les lieux les plus attractifs pour les équipes de tournages ?
  * Certains des films tournés ont-ils été nominés ou primés aux Oscar ?

Certaines questions ont permis de voir la limite des données : la précision géographique est limitée au niveau ville, et le genre des films n’est pas présent dans le jeu de données.

Cependant les questions comme celles du genre et des Oscar, qui nécessitent la récupération de données additionnelles, sont possibles avec l’utilisation de l’outil [RechercheV](https://support.office.com/fr-fr/article/RECHERCHEV-RECHERCHEV-fonction-0bbc8083-26fe-4963-8ab8-93a18ad188a1) (Vlookup en anglais) dans Excel ou LibreOffice. Pour détailler l’usage de cette fonction, un tutoriel sera publié sur [le site de l’Ecole des données](http://ecoledesdonnnees.org/)

**4. La visualisation**

Quelques outils gratuits de visualisation ont été présentés, et en particulier [CartoDB](http://cartodb.com/), un outil en ligne permettant de faire très rapidement des cartes personnalisables. CartoDB a la possibilité de géocoder les nom de ville ou adresses présentes dans votre fichier, ce qui évite d’avoir à chercher les coordonnées soi-même. D’autres outils comme [Umap](https://umap.openstreetmap.fr/) our [Mapbox](https://www.mapbox.com/) permettent d’arriver à des résultats similaires.

[![ Carte du nombre de film présents tournés dans le Val d’Oise, par ville. https://clombion.cartodb.com/viz/e1885d00-d3a6-11e4-b5a2-0e018d66dc29/public_map](http://www.pratiques-collaboratives.net/local/cache-vignettes/L591xH283/cartodb_edcifa14-0abed.png)](http://fr.okfn.org/files/2015/04/cartodb_edcinema.png)

Carte du nombre de film présents tournés dans le Val d’Oise, par ville. [https://clombion.cartodb.com/viz/e1885d00-d3a6-11e4-b5a2-0e018d66dc29/public_map](https://clombion.cartodb.com/viz/e1885d00-d3a6-11e4-b5a2-0e018d66dc29/public_map)
