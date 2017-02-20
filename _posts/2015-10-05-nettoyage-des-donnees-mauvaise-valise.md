---
layout: post
title:   Section 4. Vous avez pris la mauvaise valise (encore une fois) ?
date:   2015-10-04
author : Tactical Tech
categories: Fondamentaux
description: "Tout ce que nous attendons de nos feuilles de calcul c’est que chaque donnée dans chaque cellule soit organisée et soigneusement emballée. Dans cette section, vous analyserez des données pour repérer leurs problèmes de structuration. Comme ça, vous ne reproduirez pas les mêmes erreurs quand vous serez chez vous sur vos propres données."
---

# Section 4: Vous avez pris la mauvaise valise (encore une fois) ?

## Introduction

Tout ce que notre tableau exige de nous est que chaque cellule de données soit comme une mallette d’argent prête à être déposée par un banquier dans un paradis fiscal.

![http://farm9.staticflickr.com/8071/8413876946_529bb56d80_z_d.jpg](http://farm9.staticflickr.com/8071/8413876946_529bb56d80_z_d.jpg)

Image de [Hair in the Gate](http://hairinthegate-ajuk.blogspot.co.uk/2012/06/suitcase-full-of-money.html). Licence non spécifiée

Il contient un seul type d’objet, parfaitement rangé, et de manière prévisible en unités standards. Et peut-être même qu’il sent bon. Le tableau est heureux dans cette situation et peut-être nous récompensera-t-il en comptant, triant, livrant des graphes, etc. Cependant ce que nous donnons souvent à notre tableau ressemble plus à un choix enfantin de choses essentielles à emmener à la plage.

![http://farm9.staticflickr.com/8372/8412778391_56424a2a10_o_d.jpg](http://farm9.staticflickr.com/8372/8412778391_56424a2a10_o_d.jpg)

Image de [Science Education Resource Centre](http://serc.carleton.edu/details/images/26933.html). Licence CC-NC-SA 3.0.

Mais notre tableau nous punira de ce genre de bazar : beaucoup d’objets, avec des caractéristiques différentes, tous mélangés dans le même espace étroit. Que peut-on faire pour organiser ce bazar ?

A la fin de cette section, vous aurez :

  * analysé les données pour mettre en évidence les problèmes de structure
  * changé la structure des données afin de rendre le tableau plus utile
  * des idées sur ce qu’il faut éviter dans votre propre travail avec les données

## Un peu de travail

Pour faire à la fois les tâches rapide et longue ci-dessous, vous aurez besoin de :

  * un tableur comme Excel ou Libre Office
  * une copie du jeu de données du cours : les données de GRAIN sur “[l’accaparement de terre](http://datahub.io/dataset/grain-landgrab-data/resource/af57b7b2-f4e7-4942-88d3-83912865d116)”

### Une tâche rapide (15 minutes)

Téléchargez cette [feuille de calcul](http://datahub.io/dataset/data-structures) et suivez les étapes qui suivent. Cette section utilise des fonctionnalités des feuilles de calcul pour lesquelles de l’aide peut être trouvée plus loin, dans les lectures complémentaires. Mais essayez d’abord !

Pour commencer, appliquez un AutoFiltre aux données. Continuez de revenir sur l’Autofiltre pour voir comment les données changent à chaque étape.

Pour illustrer ce problème, disons que vous collectez les données des participants aux réunions dans votre entreprise, pour vérifier l’activité de vos collègues. (On espère que votre organisation n’a pas atteint un tel niveau de confiance !) La manière la plus intuitive de faire serait de faire comme dans cette feuille de calcul :

![http://farm9.staticflickr.com/8352/8413876968_4c80101fd5_o_d.png](http://farm9.staticflickr.com/8352/8413876968_4c80101fd5_o_d.png)

**Mais les feuilles de calcul ne sont pas intuitives**. Vous ne pouvez pas utiliser ces données pour produire un simple rapport de participation avec des outils pratiques comme AutoFiltre ou un tableau croisé dynamique. La raison : le tableur voit le texte dans chaque cellule comme un paquet de données, comme si une seule personne “Allan, Rastus, Carl, Tito” avait participé au rendez-vous de lundi. Pour utiliser plus facilement les données que vous avez en face de vous, la situation idéale est d’avoir **une seule information du même type dans une cellule**.

Alors, séparons les données, d’abord dans différentes colonnes. Cela peut être fait automatiquement en utilisant la fonctionnalité de conversion de « Texte à Colonnes ». Sélectionnez les données dans la colonne B, et cliquez sur Données –> Texte à colonnes. Sélectionnez la virgule comme « séparateur ». Vous obtiendrez quelque chose comme ceci (vous devez donner un nom aux colonnes vous-même) :

![http://farm9.staticflickr.com/8331/8413876976_7cf07b0fbb_o_d.png](http://farm9.staticflickr.com/8331/8413876976_7cf07b0fbb_o_d.png)

(Après avoir fait cela, vous allez avoir des espaces blancs (invisibles). Révisez ce problème dans l’exercice précédent « [L’Homme Invisible](https://ecoledesdonnees.org/handbook/cours/nettoyage-des-donnees-homme-invisible/)« …)

Eclatez le paquet de données entre différentes colonnes améliore les chances d’analyser les données, mais pas tant que ça. Si votre équipe est plus grande, cette feuille de calcul peut devenir difficile à utiliser. Pourquoi ne pas prendre les données et les mettre sous une forme verticale ? On appelle cela « transposer ». Vous pouvez faire cela manuellement ou essayer automatiquement en utilisant la fonctionnalité « Collage spécial » :

![http://farm9.staticflickr.com/8213/8412778355_1dfb32daef_o_d.png](http://farm9.staticflickr.com/8213/8412778355_1dfb32daef_o_d.png)

C’est bien mieux comme ça ! Pour donner du sens aux données, nous avons du ajouter de la mise en forme, mais désormais des données manquent dans la colonne du jour de la réunion. C’est une très mauvaise idée (pour savoir pourquoi, regardez la section 1 : « [Noix et chewing gum](https://ecoledesdonnees.org/handbook/cours/nettoyage-des-donnees-noix-et-gum/)« ). Il nous faudra ajouter des données dans la colonne A comme ici :

![http://farm9.staticflickr.com/8351/8412778335_22c13b66d6_o_d.png](http://farm9.staticflickr.com/8351/8412778335_22c13b66d6_o_d.png)

Cette approche permet de trier, filtrer et créer un tableau croisé dynamique. Essayez-le ! Vous pouvez maintenant facilement produire des reports de participation aux réunions.

### Une tâche longue (30 minutes – 2 heures)

Dans le chapitre relatif au nettoyage des données dans le livre des recettes, parcourez le Problème 5 : « [problèmes de structure – des données à des places inappropriées](http://schoolofdata.org/handbook/recipes/cleaning-data-with-spreadsheets/#problem-5-structural-problems-data-in-inconvenient-places)” utilisant le jeu de données de GRAIN. C’est un exercice plus détaillé qui se penche sur ce que des investisseurs fonciers ont dit de l’utilisation qu’ils feraient de ces terres. Il montre comment le problème est catégorisé et fait remonter les difficultés à enregistrer les multiples usages de terres dans un tableau. Il vous montre comment utiliser le filtrage pour surmonter les difficultés liées à des données mal structurées.

Si vous vous sentez très courageux, essayez aussi le Problème 6 : « [des babanes aux bananes » ou comment traiter les incohérences dans les données](http://schoolofdata.org/handbook/recipes/cleaning-data-with-spreadsheets/#problem-6-from-banabas-to-bananas-dealing-with-inconsistencies-in-data)”. C’est un exercice avancé qui vous mènera à travers le processus d’éclatement, de correction et de reconstitution d’un jeu de données volontairement erroné, pour vous permettre d’en tirer de la valeur. Il fait appel à une série de fonctionnalités de tableur incluant des colonnes au format texte, des expressions régulières, des tableaux croisés dynamiques, la mise en forme conditionnelle, la validation et la concaténation de données. C’est un chemin escarpé, mais à la fin, vous verrez les données différemment.

## Lectures complémentaires

  * Dans le court exercice, nous avons utilisé les fonctions suivantes :
    * La fonction **« texte à colonnes »**, qui est extrêmement utile pour le traitement de la question de la « mauvaise valise ». Voici un [tutoriel](http://office.microsoft.com/en-gb/excel-help/split-names-by-using-the-convert-text-to-columns-wizard-HA010342911.aspx) pour utiliser cette fonction dans Excel, [un autre pour Open Office](http://www.oooninja.com/2008/01/text-columns-calc-convert-openoffice.html) (et Libre Office). Il se peut que vous soyez contrarié par le fait que Google Spreadsheet n’a pas à proprement parler de fonction « texte à colonnes » ! Cependant, la [fonction « SPLIT »](http://support.google.com/drive/bin/answer.py?hl=en&answer=155358) fait la même chose, comme décrit dans [ce tutoriel](http://googledocstips.com/2011/03/11/how-to-split-the-contents-of-a-cell/).
    * La fonctionnalité « **transposer**« , qui échange les lignes et les colonnes, est parfaitement décrite pour Excel dans le [tutoriel de Tech Republic](http://www.techrepublic.com/blog/msoffice/transpose-excel-data-from-rows-to-columns-or-vice-versa/630), et pour [Open Office par Solveig Haugland](http://openoffice.blogs.com/openoffice/2007/02/very_cool_featu.html) sur son « Open Office Training Blog » (blog d’entraînement à Open Office)
  * Le Guide de la Data et du Design du Tactical Technology Collective comporte un court chapitre nommé « Growing out of Spreadsheets », qui traite principalement du problème de la « mauvaise valise ». Il se penche sur les difficultés de l’utilisation de feuilles de calcul lorsque vous avez [des données qui décrivent des relations dynamiques et complexes.](http://drawingbynumbers.org/data-design-basics/note-2-data-basics#anchor-4).

## Reposez-vous et réfléchissez

Qu’est-ce que le problème de la « mauvaise valise » nous révèle des enregistrements de données dans les tableurs ?

### Note

Ce cours a été conçu pour le projet École des données par [Tactical Technology Collective](http://tacticaltech.org/). Tactical Tech est une ONG internationale travaillant sur le lien entre la défense des droits, l’information et la technologie.  

Article d’origine : [Section 4: Did you bring the wrong suitcase (again)?](http://schoolofdata.org/handbook/courses/data-cleaning-wrong-suitcase/)
