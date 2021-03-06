---
layout: cours
title:   5 - Des données aux diagrammes, une introduction aux diagrammes
date:   2017-02-08
author : Pierre Chrzanowski	
categories: cours
description: "La visualisation de données est une compétence importante et si elle est mise en oeuvre correctement elle apporte une grande plus-value. Dans ce tutoriel nous avons comme missions de comprendre quel type de graphique est le plus approprié pour présenter vos données."
tags: [fondamentaux,données, introduction]
---

## Introduction

Le tutoriel précédent n'était fait que de texte et de tableaux, rajoutons un peu d'éclat au monde de la donnée : la Data Visualisation. Faire de la visualisation de données ne se réduit pas à rendre joli ce que vous avez trouvé. C'est souvent un moyen pour donner de la perspicacité votre donnée.
Il est plus facile de comprendre des informations traitées sous une forme de graphique que sous forme de chiffres et de tableaux. Regardez l'exemple ci dessous : combien de temps faut il pour voir la tendance dans le tableau et maintenant dans le graphique. 

![](http://farm9.staticflickr.com/8305/7982104847_5a4be76fc7_o_d.png)
![](http://farm9.staticflickr.com/8458/7982109326_463cede881_o_d.png)

La visualisation de données est une compétence importante et si elle est mise en oeuvre correctement elle apporte une grande plus-value. En revanche, si elle est mal utilisée, vous allez égarer les lecteurs et les envoyer vers des idées erronées. 
Souvenez vous : de grands pouvoirs sont accompagnés de grandes responsabilités. 

### Dans ce tutoriel nous avons deux missions :

Comprendre quel type de graphique est le plus approprié pour présenter vos données.
Apprendre la procédure de base afin d'insérer des graphiques dans une feuille de calcul Google.

Pour ce tutoriel vous allez avoir besoin de paramétrer le partage de votre feuille de calcul sur "Public sur le web".
Sinon certaines choses dont nous allons traiter ne fonctionneront pas. Pour passer en mode "Public sur le web", allez dans les paramètres de votre feuille en cliquant sur le bouton bleu "partager" en haut à droite. 

Dans le cas où vous n'auriez pas été jusqu'a la fin du module précédent, vous trouverez la feuille de calcul utilisée dans cet exemple ici.

## Comment présenter sa donnée ?

Nous avons un grand nombre de données quantitatives dans notre exemple. La question que l'on doit se poser est : est ce qu'on compare une donnée au cours du temps, de multiples données entre elles ou souhaitons nous savoir comment deux variables interagissent entre elles.  En fonction des réponses nous choisirons différents formats de présentation.

Pour présenter d'importants jeux de données de différentes natures : l'histogramme.
Un histogramme est l'une des formes graphiques les plus répandues pour présenter une importante quantité de données.
Il est assez facile à créer et à comprendre. Il s'agit d'une bonne méthode pour comparer des données de différentes catégories. Exemple, les plus dix plus importantes dépenses publiques de santé et à la onzième colonne votre pays. Un graphique de ce type ressemblerait à ça : 

![](http://farm9.staticflickr.com/8300/7893055570_a291658647_o_d.jpg)

Lire un graphique par colonne est assez simple : nous avons en général quelques valeurs, ordonnées en catégories sur l'axe des abscisses et des ordonnées dans l'exemple utilisé ici.
Puis nous avons les valeurs exprimées sur l'axe des abscisses (barre horizontale) ou des ordonnées (barre verticale). La taille de la barre représente la valeur.

Aussi simple que cela puisse être, voici quelques règles à garder à l'esprit :

**Ne surchargez pas vos histogrammes.** 
Bien que vous puissiez utiliser différentes couleurs ou cumuler deux catégories, quand il y a trop de catégories cela devient confus.
Nommez systématiquement vos axes. Quelque soit la personne qui regarde votre graphique, elle doit toujours savoir quelles sont les valeurs qu'elle regarde. 
Commencez vos échelles de valeur par 0. La plus part des outils de feuille de calcul vont automatiquement ajuster leur échelle de valeur : ne les laissez pas faire et réinitialisez cela à 0. Cela montre le contraste sur une échelle appropriée. Nous vous montrerons pourquoi c'est important dans le prochain module.

--

## Pas à pas: Créer un histogramme des 10 premiers pays.
Créons on histogramme depuis notre jeu de données.
Ce n'est pas vraiment une bonne pratique d'avoir trop de colonnes différentes : le diagramme devient très difficile à lire.
Nous allons donc nous limiter aux 10 pays ayant les plus fortes dépenses de santé.
C'est un choix arbitraire et vous pouvez très bien regarder l'ensemble des pays.
Ce faisant, vous pourriez découvrir des choses cachées dans les données.

1. Pour ce faire, filtrer le jeu de données de la Banque Mondiale sur une seule année (ex: 2009).
2. Trier le jeu de données filtré sur la colonne “Health care expenditure total per person (US$)” qui est 
   l'une des colonnes créée lors de l'exercice précédent.
   N'oubliez pas de sélectionner toute la feuille de calcul et pas seulement la colonne que vous triez.
3. Sélectionnez les 10 premiers pays (les 11 premières lignes en incluant la ligne d'entête) et copiez les dans une autre feuille de calcul. (Pour cela, appuyez sur CTRL + C pour copier puis insérez une nouvelle feuille de calcul et appuyez sur CTRL + V dans celle-ci pour coller)
4. Du fait de la façon dont fonctionne Google Docs, nous devons maintenant associer les colonnes
   qui nous intéressent pour la suite avec les noms de pays (colonne A)
5. Cliquez sur le libellé gris pour le sélectionner.
   Relâchez le bouton de la souris puis cliquez et glissez le jusqu'à ce qu'il soit positionné.
   Votre colonne A doit maintenant être "Country Names", la colonne B "Healthcare expenditure per person total US$".
   Votre feuille de calcul devrait ressembler à ceci:
   ![Feuille de calcul à l'étape 5](http://farm9.staticflickr.com/8314/7982157782_0384c5c2d5_o_d.jpg)
6. Maintenant, sélectionnez les deux premières colonnes et ouvrez le graphique... depuis le menu insérer.

   ![](http://farm9.staticflickr.com/8189/8079297402_11385187fe_o_d.png)
7. L'un des graphiques proposé devrait être un histogramme

   ![](http://farm9.staticflickr.com/8189/8079306740_de45bdca7c_o_d.png)
8. Cliquez dessus et vous verrez un aperçu. Avez-vous remarqué l'intervalle de l'axe y ?

   ![](http://farm9.staticflickr.com/8297/7982162404_1a5c6502ef_o_d.png)

9. Il commence à 4000 et donne l'impression que la Belgique dépense seulement une fraction de ce que le Luxembourg dépense dans la santé. Changeons cela !

10. Ouvrez l'onglet Personnaliser et faites défiler vers le bas jusqu'à "Axe".
    Maintenant sélectionnez "Gauche Vertical” depuis le menu déroulant.
    ![](http://farm9.staticflickr.com/8333/8079355505_d06c8ced0f_o_d.png)

11. Voyez-vous les champs min et max ? Entrez juste 0 dans le champs min et l'intervalle débutera à 0.
    De cette façon le contraste entre les pays semble plus réaliste.
    ![](http://farm9.staticflickr.com/8310/7982158841_6e728dd3eb_o_d.png)

12. Amusez-vous à personnaliser les réglages. Essayez de supprimer ou repositionner la légende, changer la couleur des barres...

13. Lorsque vous avez terminé, cliquez sur Insérer et votre graphique apparaîtra.

14. Si vous cliquez sur le graphique vous pouvez le déplacer.
    Avez-vous remarqué le triangle en haut à droite ? C'est le menu des options.
    Sélectionnez Editer le diagramme pour changer ses réglages.
    Pouvez-vous le transformer en diagramme en bâton ?

### Exercice : Créez un histogramme avec d'autres données de la Banque Mondiale.

Vous savez maintenant comment créer un histogramme -- sentez vous libre d'expérimenter avec d'autres types de graphiques en utilisant les recettes du Manuel pour vous guider. Les sections suivantes vous enseigneront quand sélectionner un type spécifique de graphique et à quelles données il est adapté. Nous traiterons des graphiques les plus communs : les courbes, les cartes choroplèthes (cartes thématiques colorées) et les diagrammes de dispersion. Pour chacun de ceux-là, vous pouvez trouver une recette pratique correspondante dans le manuel.

Présenter des données de catégories dans le temps -- les courbes
parfois vous n'avez pas seulement des catégories comme des pays, mais vous avez aussi des valeurs dans le temps. C'est là que les courbes sont assez pratiques. Un graphique en courbes ressemble à cela :

![](http://farm9.staticflickr.com/8461/7893223088_a24d3c1c59_o_d.jpg)

Sur l'axe des y nous avons toujours nos valeurs et sur l'axe des x nous avons la mesure du temps. Ce graphique fonctionne bien si tous les intervalles de temps sont égaux (bien sûr les courbes ne sont pas réservées aux séries temporelles). Pour mémoire, il est important, quand nous comparons plusieurs catégories, de démarrer votre axe des y à 0. Il est possible de ne pas partir de 0 mais seulement quand il n'y a qu'une seule courbe -- et toujours en mentionnant clairement les valeurs minimales et maximales.

### Exercice : comparez le Luxembourg aux autres pays les plus dépensiers -- créez un graphique en courbes avec les différents pays sur un seul graphique.

Représenter des données géographiques -- cartographier
Dans notre cas nous n'avons pas seulement des données numériques mais aussi des données numériques reliées à des lieux géographiques. Vite une carte ! Quand vous avez un grand nombre de pays ou de régions, représenter des données sur une carte est pertinent. Si vous avez des pays ou des régions vous créez une carte choroplèthe. Ce type particulier de carte représente à l'aide de couleurs des valeurs données pour une région spécifique. Voici un exemple de carte choroplèthe à partir de nos données :

![](http://farm9.staticflickr.com/8466/8079925578_6ee66193ff_b_d.jpg)

La carte représente les dépenses de santé rapportées au PIB. Elle nous permet de découvrir des aspects intéressants de notre jeu de données. Exemple : rapporté au PIB, l'Europe de l'ouest dépense plus que l'Europe de l'est en matière de santé, et le Liberia dépense plus que tout autre pays d'Afrique.

### A savoir lorsque vous utilisez une cartes choroplèthes :

Une limite des cartes choroplèthes est qu'elles donnent plus de visibilité aux pays de grande taille, pénalisant ainsi les petits pays.
Par ailleurs, faites attention à l'échelle de couleur. L'échelle standard rouge-verte n'est pas très adaptée pour tout un tas de raisons comme la difficulté à être vue par les daltoniens (vous pouvez en savoir plus à travers l'article de Gregor Aisch cité dans les références bibliographiques ci-dessous). Des dégradés monochromes sont souvent plus faciles à lire. Enfin, si votre plage de valeurs devient trop grande alors il devient difficile de différencier les valeurs proches.

Exercice : essayez un autre jeu de données sur une carte choroplèthe. Comment cela fonctionne-t-il ?

Rechercher l'interaction entre les variables -- les diagrammes de dispersion
Que se passe-t-il si nous ne sommes pas intéressés seulement par une variable mais par l'interdépendance de variables entre elles ? Et bien dans ce cas nous avons les diagrammes de dispersion -- utiles pour regarder les interactions entre deux variables.

![](http://farm9.staticflickr.com/8481/8229057265_cb3e48f1b6_o_d.png)

Regardez le diagramme de dispersion suivant : nous avons une valeur numérique sur l'axe de X et une autre sur l'axe des Y. Les points matérialisent une donnée. Ce graphique a aussi certaines limites : les points se superposent et s'il y en a beaucoup vous ne voyez pas vraiment où ils sont. Cela pourrait être résolu en ajoutant de la transparence ou en affichant seulement une certaine plage. Néanmoins une tendance émerge : au-delà d'une certaine espérance de vie, les coûts de santé augmentent soudainement et fortement. Avez-vous également noté les trois points en bas à gauche ? Intéressantes aberrations -- nous les verrons dans un module ultérieur.

Exercice : faites un diagramme de dispersion comparant d'autres données dans le jeu utilisé. Est-ce que cela fonctionne ? Des points étonnants, des problèmes, d'intéressantes découvertes ?

### Résumé

Dans ce tutoriel nous avons couvert les bases de la visualisation de données. Nous avons vu des graphiques simples et les avons créé. Dans le tutoriel suivant nous allons discuter de certains pièges à éviter lors de la manipulation et l'interprétation des données.

### Référence bibliographiques
"Graphiques de courbes efficaces" (“Doing the Line Charts Right”) par Gregor Aisch [NDT : en anglais].
Toujours par Gregor Aisch : Dites adieu aux échelles de couleur rouge-vert (Say Goodbye to Red-Green Color Scales) [NDT : en anglais].
