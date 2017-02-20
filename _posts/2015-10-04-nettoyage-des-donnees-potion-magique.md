---
layout: post
title:   Section 3. La potion magique
date:   2015-10-04
author : Tactical Tech
categories: Fondamentaux
description: "« Trois » n’est pas un nombre. « Un million » non plus. Du moins, pas quand ils sont tapés en forme de texte dans une cellule de feuille de calcul. N’oubliez jamais que votre feuille de calcul est un outil simplet qui impose que vous soyez précis, structuré et cohérent."
---

# Section 3: La potion magique

## Introduction

![http://farm9.staticflickr.com/8075/8408290470_cf9905fb04_d.jpg](http://farm9.staticflickr.com/8075/8408290470_cf9905fb04_d.jpg)

[Source de l’image](http://www.wpclipart.com/fictional_characters/witches/witches_with_cauldron.jpg) (avec adaptations) [dans le domaine public](http://www.wpclipart.com/terms.html).

« Trois » n’est pas un nombre. « Un million » non plus. Du moins, pas quand ils sont tapés en forme de texte dans une cellule de feuille de calcul. « 3 » ou « 1 000 000 » sont par contre des nombres. N’oubliez jamais que votre feuille de calcul est un outil particulièrement simplet qui impose que vous soyez précis, structuré et cohérent. Si vous ne l’êtes pas et que vos données ne le sont pas, votre feuille de calcul va devenir incompréhensible et vous jeter de mauvais sorts. Voici quelques exemples qui montrent comment vous et votre feuille de calcul peuvent voir les choses différemment :

![http://farm9.staticflickr.com/8514/8408290492_c3cd31ba41_o_d.png](http://farm9.staticflickr.com/8514/8408290492_c3cd31ba41_o_d.png)

(Si les sorcières de Macbeth selon Shakespeare (voir acte IV, scènes 14-15) avaient une feuille de calcul, cela ressemblerait à l’image ci-haut).

Avec les feuilles de calcul, il existe trois formes de données de base. Ou, en d’autres termes, trois façons dont vous pouvez entrer des données dans une cellule de feuille de calcul:

  * Sous forme de **nombre** : « 100 ».
  * Sous forme de **texte** : « cent ».
  * Sous forme de **formule** : = SOMME (99+1), ce qui crée une valeur calculée.

Pour éviter de créer un mélange explosif digne d’une sorcière dans votre feuille de calcul, suivez les deux règles basiques suivantes :

  * Soyez cohérent et **ne mélangez pas les données** dans les colonnes
  * Faîtes en sorte que le tableur reconnaisse **le type de données** dans chaque colonne

Si vous passez outre ces règles de base, votre feuille de calcul aura du mal à réaliser toutes les actions utiles et intéressantes que vous auriez pu réaliser à la base, comme additionner, soustraire, calculer, trier, filtrer, etc. Après avoir réalisé les tâches de cette section, vous aurez appris à:

  * Comprendre les différents types de données qui peuvent être utilisés dans une feuille de calcul
  * Trier les données pour découvrir les erreurs potentielles
  * Standardiser la saisie des données et utiliser des formules pour détecter les erreurs

## Un peu de travail

Pour réaliser aussi bien les actions rapide et longue ci-dessous, vous aurez besoin de :

  * un tableur du type Excel ou Calc de Libre Office
  * une copie du jeu de données du cours, qui est le jeu de GRAIN sur “[l’accaparement des terres](http://datahub.io/dataset/grain-landgrab-data/resource/af57b7b2-f4e7-4942-88d3-83912865d116)”

### Une action rapide (15 minutes)

Téléchargez une copie du jeu de données GRAIN sur l’accaparement des terres sur votre ordinateur. Ouvrez la feuille de calcul et réalisez les actions suivantes :

  1. **D’après vous, quels sont les types de données auxquels correspondent chaque colonne ?** Découvrez le type de données auquel le tableur pense par un simple clic droit sur ​​l’en-tête des colonnes, puis sélectionnez « Format de cellule » et regardez l’onglet « Nombres ». Que voyez-vous? Essayez de choisir d’autres options dans les listes Catégorie et Format et regardez ce qu’il advient des données.
  2. **Là où il y a des chiffres dans les colonnes, vous pouvez les additionner et voir ce qu’il se passe**. Utilisez votre bon sens : la somme a l’air trop grande ou trop petite ? S’est-il produit une erreur ? Cela peut vous indiquer qu’il y a quelque chose qui ne va pas avec les données.
  3. **Là où il y a du texte ou des chiffres, essayez le tri dans l’ordre croissant, et regardez ce qu’il se passe**. Est-ce que ça s’est passé comme vous vouliez ?
  4. **Utilisez l’Auto-Filtre pour afficher les valeurs distinctes dans une colonne, de sorte à ce que vous puissiez voir quel type de données est dans la colonne**. Est-ce que quelque chose se démarque, vous paraît étrange, voire incohérent ? Pouvez-vous voir le mélange de différents types de données?

Après avoir explorer les données de ces quatre manières différentes, quelle est votre impression sur la facilité avec laquelle les données peuvent être analysées en utilisant un tableur ? Comment pourriez-vous améliorer les données?

Utilisez la zone de discussion pour nous faire savoir ce que vous en pensez.

### Une action plus longue (1 heure)

En vous appuyant sur le livre des recettes (section nettoyage des données), parcourez [le problème 4: Corriger les nombres qui ne sont pas des nombres](http://schoolofdata.org/handbook/recipes/cleaning-data-with-spreadsheets/#problem-4-fixing-numbers-that-arent-numbers) sur le jeu de données de GRAIN. Cet exercice explique pas-à-pas comment des données sur la taille des investissements dans les différentes transactions foncières ont été enregistrées dans le jeu de données correspondant. Il explique aussi comment vous pouvez détecter et résoudre les problèmes en utilisant des formules, et comment vous pouvez utiliser des fonctionnalités telles que les tableaux croisés dynamiques pour vérifier que vos solutions fonctionnent. Il vous donnera une idée de la façon de combiner différentes fonctions et fonctionnalités des tableurs.

## Lectures complémentaires

  * Voici une série détaillée de [fonctionnalités propres](http://office.microsoft.com/en-us/excel-help/available-number-formats-HP001173902.aspx) aux tableurs (Excel, Calc de LibreOffice, Google spreadsheet…)
  * Ces fonctionnalités de base des tableurs sont utiles pour explorer et tester les données :
    * [Ajout d’une colonne de chiffres](http://multimedia.journalism.berkeley.edu/tutorials/spreadsheets/adding-numbers-using-sum-formula/)
    * [Tri des données](http://multimedia.journalism.berkeley.edu/tutorials/spreadsheets/sorting-results/)
    * [Auto- filtre](http://office.microsoft.com/en-us/excel-help/filter-data-in-a-range-or-table-HP010073941.aspx)
    * Les fondamentaux [dans les filtres et classements des données](http://schoolofdata.org/handbook/courses/sort-and-filter/)
  * Beaucoup de personnes sont confrontées à des problèmes de type de données lorsqu’ils commencent à utiliser des formes de chiffres spécifiques, telles que les numéros SIREN, numéro de sécurité sociale ou numéro national d’identité, numéros de téléphone, informations de localisation, latitude et longitude… Sachez que les feuilles de calcul peuvent créer des « formats de nombre personnalisés ». Voici un peu de lecture à leur sujet :
    * Un exemple simple de TechRepublic sur comment [gérer les problèmes ](http://www.techrepublic.com/blog/msoffice/use-a-custom-format-in-excel-to-display-easier-to-read-millions/7544)de formats numériques personnalisés
    * Une note détaillée sur comment fonctionnent l[es formats numériques personnalisés](http://www.ozgrid.com/Excel/CustomFormats.htm), par OzGrid.
    * Une introduction sur [les formats numériques personnalisés](http://simoncpage.co.uk/blog/2008/09/excel-custom-and-conditional-number-formatting/) dans Excel, par Simon Page.

## Reposez-vous et réfléchissez

Cela a été un exercice délicat. Comment cela s’est-il passé pour vous? Est-il facile d’utiliser une feuille de calcul pour vous aider à trouver et corriger les erreurs existantes ?

La longue tâche était assez difficile aussi. Avez-vous tenu le coup ?

Utilisez la zone de discussion pour partager vos retours sur cette section.

Si vous êtes désireux de plus d’informations, dirigez-vous vers la quatrième section de ce cours, intitulée « La mauvaise valise ».

### Note

Ce cours a été conçu pour le projet École des données par [Tactical Technology Collective](http://tacticaltech.org/). Tactical Tech est une ONG internationale travaillant sur le lien entre la défense des droits, l’information et la technologie.  

Article d’origine : [Section 3: your data is a witch’s brew](http://schoolofdata.org/handbook/courses/data-cleaning-witchs-brew/)
