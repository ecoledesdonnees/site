---
layout: post
title:   Astuce. Copier tous les éléments d’une liste de plusieurs pages
date:   2015-05-08
author : Jérémie Poiroux
categories: blogpost
description: "Une technique très simple, mais qui peut toujours dépanner ! Sur le web, on tombe souvent sur des sites avec des listes comprenant plusieurs pages. Plus agréables pour naviguer, elles facilitent également le chargement. Mais quand il s’agit de “scraper” leur contenu, c’est plus embêtant."
---

## Astuce: copier tous les éléments d’une liste de plusieurs pages

_Une technique très simple, mais qui peut toujours dépanner !_

### Ces listes de plusieurs pages

Sur le web, on tombe souvent sur des sites avec des listes comprenant plusieurs pages. Plus agréables pour naviguer, elles facilitent également le chargement. Mais quand il s’agit de “scraper” leur contenu, c’est plus embêtant.

Prenons le site d’[Allflicks US](http://www.allflicks.net/). Par défaut, il affiche la liste des 7 365 métrages sur 295 pages (au 7 mai 2015) à raison de 25 métrages par page. Bon courage pour le copier/coller.

[![Allflicks.net](http://ecoledesdonnees.org/files/2015/05/Image-1-1024x577.png)](http://france-schoolofdata.scoda.okfn.org/files/2015/05/Image-1.png)

Allflicks.net

### Attention

Cette astuce ne fonctionne que pour les listes qui proposent un menu pour choisir le nombre d’éléments à afficher et des boutons pour naviguer.

À l’inverse, cette méthode est très efficace pour des listes de taille moyenne qui affichent peu d’éléments par page sur un grand nombre de pages. Sur mes deux ordinateurs (Mac et Linux), j’ai réussi à afficher au maximum 20 000 éléments sur une seule page. Lors de ma tentative d’en afficher 40 000, ils ont planté.

Je vous propose toutefois une parade à la fin du tutoriel.

### “Inspecter l’élément”

Je vous le dis tout de suite, cette méthode n’est pas très propre.

L’idée est donc d’avoir les 7 365 métrages affichés sur une seule page. Pour cela, à l’aide du clic droit, on va inspecter l’élément (sur Chrome. Sur Firefox, c’est Examiner par exemple) “100” qui sert initialement à afficher 100 éléments par page.

[![Inspecter l'élément](http://ecoledesdonnees.org/files/2015/05/Image-2-300x169.png)](http://france-schoolofdata.scoda.okfn.org/files/2015/05/Image-2.png)

Inspecter l’élément

Une fois que vous avez cliqué sur la flèche déroulante (située à gauche), vous devriez voir ceci :

[![Code source ](https://ecoledesdonnees.org/files/2015/05/Image-1.png)

Code source initial

Une seule chose nous intéresse : value=”100” qu’il faut remplacer par value=”7365” en double-cliquant dessus. Si ça vous amuse, vous pouvez aussi changer le texte du bouton en modifiant le deuxième 100 écrit en noir juste à côté.

Ce que l’on voit ensuite :

[![Code source modifié](http://ecoledesdonnees.org/files/2015/05/Image-4.png)](http://ecoledesdonnees.org/files/2015/05/Image-4.png)

Code source modifié

**Il ne reste plus qu’à cliquer sur ce nouveau bouton !**

/!\ Il ne faut pas être placé sur ce bouton avant la manipulation.

/!\ Cela va prendre un peu de temps.

### Copier/coller

Lorsque vous avez toute la liste, il ne vous reste plus qu’à la copier/coller dans votre tableur préféré (là encore, cela va prendre un peu de temps).

[![Tous les résultats sont affichés](http://ecoledesdonnees.org/files/2015/05/Image-5.png)](http://ecoledesdonnees.org/files/2015/05/Image-5.png)

Tous les résultats sont affichés

### Note

Pour des très grandes listes, on peut réduire le nombre d’éléments affichés d’un coup car les boutons suivant/précédent fonctionnent même après la manipulation. Il vous suffit (en général, ça marche) de modifier, ici : value= »1000″ par exemple, pour avoir huit pages.

