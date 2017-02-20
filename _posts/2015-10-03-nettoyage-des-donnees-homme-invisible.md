---
layout: post
title:   Section 2. L’Homme Invisible est dans votre tableur
date:   2015-10-03
author : Tactical Tech
categories: Fondamentaux
description: "Dans cette section, vous apprendrez comment des caractères que vous ne voyez même pas peuvent avoir des effets désastreux sur l’analyse de vos données. Vous saurez faire la chasse aux espaces blancs et autres caractères non imprimables comme les retours à la ligne, les espaces et les tabulations. Une fois que vous les aurez éliminés, vous pourrez continuer votre analyse en paix."
---

# Section 2: l’Homme Invisible est dans votre tableur, jouant avec vos données

## Introduction

Il y a quelque chose d’effrayant dans votre feuille de calcul, et ce n’est pas sympathique.

![http://farm9.staticflickr.com/8092/8402327514_10a8f622fd_n_d.jpg](http://farm9.staticflickr.com/8092/8402327514_10a8f622fd_n_d.jpg)

Illustration 1: Le poster du film de l’Homme invisible, 1933. Source de l’image. Reproduit sous licence [Fair Use].

“Même la Lune est effrayée par moi”, hurle l’Homme invisible, connu sous le nom de Dr Griffen, un génie devenu fou après une expérimentation sur lui-même! Si vous avez le temps, regardez [la bande-annonce du film de 1933](http://www.youtube.com/watch?v=pb3n0g2NenI). Des choses effrayantes commencent à arriver aux gens dans une petite ville: de mystérieuses traces de pas dans la neige, des objets de maison qui semblent voler dans les airs, des gens qui sont poussés dans les escaliers (et depuis les collines !). Et dans notre cas, des changements impromptus dans votre feuille de calcul.

Nous ne pouvons pas voir l’Homme invisible lui-même (évidemment, sinon il ne serait pas invisible). Mais nous arrivons à trouver des traces de son travail dans notre feuille de calcul, comme nous pouvons voir ses empreintes dans la neige :

![http://farm9.staticflickr.com/8086/8402327534_fb1e33e0a7_o_d.png](http://farm9.staticflickr.com/8086/8402327534_fb1e33e0a7_o_d.png)

Vous pouvez clairement voir une erreur qu’il a insérée, mais d’autres l’identifieront plus difficilement à l’oeil nu:

  * Des espaces en trop à la fin des insertions
  * Des tabulations insérées à la fin des lignes
  * Des retours à la ligne et des ‘retours chariot’, que vous insérez en appuyant sur Entrée (ou Ctrl-Entrée).

Ces élements sont appelés des caractères non-imprimables, et ne sont pas affichés tout le temps dans les feuilles de calcul. Mais vous sentirez toujours leur sinistre présence qui gêne beaucoup l’analyse des données. C’est parce que les feuilles de calcul traitent ces types de caractères comme de véritables données. En ignorant la colonne d’étiquette, dans les données ci-dessus, vous pouvez voir quatre termes qui sont essentiellement les mêmes. La feuille de calcul, cependant, voit quatre morceaux de données différents et distincts. Si vous essayiez de compter le nombre de fois que “Your Data” est mentionné, une feuille de calcul vous montrerait seulement une seule entrée.

Dans le film, la police déploie un piège pour attraper l’Homme invisible. Nous pouvons faire la même chose dans nos feuilles de calcul. A la fin de la section, vous aurez :

  * quelques connaissances sur les caractères non-imprimables qui sont source d’erreurs dans les données
  * essayé différentes fonctions et caractéristiques de votre tableur capable de les enlever

## Un peu de travail

Pour faire les tâches rapide et plus longue ci-dessous, vous aurez besoin :

  1. d’un outil de manipulation de feuilles de calcul, comme Excel ou Libre Office.
  2. d’une copie de [la feuille de calcul exemple](http://datahub.io/dataset/theinvisibleman) pour cette section.
  3. d’une copie du jeu de données du cours, celui de GRAIN sur “[l’accaparement des terres](http://datahub.io/dataset/grain-landgrab-data)”.

### Une tâche rapide (15 minutes)

  * Téléchargez et ouvrez [la feuille de calcul exemple](http://datahub.io/dataset/theinvisibleman) sur votre ordinateur. Dans la colonne A, on trouve les données présentées dans l’image ci-dessus, avec différent types de caractères non-imprimables. Dans les colonnes B à E on trouve quatres méthodes simples pour enlever les caractères non-imprimables de vos données: >md.png COPYING Config.plist CopyAsMarkdown-demo.mp4 README.md _Signature.plist html2md.sh html2text.py la fonction TRIM (dans la colonne B) >md.png COPYING Config.plist CopyAsMarkdown-demo.mp4 README.md _Signature.plist html2md.sh html2text.py la fonction CLEAN (dans la colonne C) >md.png COPYING Config.plist CopyAsMarkdown-demo.mp4 README.md _Signature.plist html2md.sh html2text.py les fonctions TRIM et CLEAN …. ensemble (dans la colonne D) >md.png COPYING Config.plist CopyAsMarkdown-demo.mp4 README.md _Signature.plist html2md.sh html2text.py la fonction “Collage Spécial” (dans la colonne E)
  * Appliquez un “AutoFiltre” sur la donnée (Données → Filtre → AutoFiltre). Cliquez sur les petites flèches descendantes dans l’en-tête des colonnes et une liste de sélection va apparaître en se déroulant, affichant le nombre d’entrées distinctes dans chaque colonne. Si vous cliquez sur l’autofiltre pour chacune des colonnes A jusqu’à E, vous pouvez voir l’effet des différentes méthodes pour enlever les caractères non-imprimables.
  * Double-cliquez sur les cellules pour voir les formules et comment les fonctions marchent en pratique. Il y a plus d’informations sur chacune d’elles dans la partie ‘Etudes’ ci-dessous.
  * Maintenant, essayez par vous-même. Créez ou trouvez une colonne de données uniques par vous-même. Appliquez ces quatre méthodes dans le même format que notre jeu de données dans votre feuille de calcul.

Utilisez les commentaires ci-dessous pour partager votre travail et des observations sur cette tâche.

### Une tâche plus longue (30-60 minutes)

Depuis le livre des recettes sur le Nettoyage des données, parcourez le problème 2 : [« Espaces-blancs et nouvelles lignes » – des données qui ne devraient pas être présentes](http://schoolofdata.org/handbook/recipes/cleaning-data-with-spreadsheets/#problem-2-whitespace-and-new-lines-data-that-shouldnt-be-there) en utilisant le jeu de données GRAIN. Ce cours rentre plus dans les détails des fonctions CLEAN et TRIM.

## Lectures complémentaires

  * Regardez cette vidéo YouTube très utile intitulée « [Excel is Fun](http://www.youtube.com/watch?v=o-dBCS2wgO4&feature=plcp) » à propos de l’utilisation de CLEAN et TRIM.
  * Lisez la page d’aide de Microsoft, étonnamment très utile, sur la suppression des espaces en trop et les caractères non-imprimables, [ici](http://office.microsoft.com/en-us/excel-help/top-ten-ways-to-clean-your-data-HA010221840.aspx#BMremoving_spaces_and_nonprinting_chara). La majorité des instructions fonctionnera dans LibreOffice et les feuilles de calcul Google, même si il y a quelques différences. Jetez un oeil sur la documentation des fonctions: TRIM (Excel, [Libre Office](https://help.libreoffice.org/Calc/Text_Functions#TRIM), Google Docs) et CLEAN (Excel, [Libre Office](https://help.libreoffice.org/Calc/Text_Functions#CLEAN), Google Docs).
  * Lisez les fonctionnalités de la documentation: Collage Spécial (Excel, [Libre Office](https://help.libreoffice.org/Common/Paste_Special), Google Docs), Auto-filtre (Excel, [Libre Office](https://help.libreoffice.org/Calc/Applying_AutoFilter), Google Docs)
  * Pour les chasseurs d’Homme invisible, vous pouvez en lire plus sur l’usage des expressions régulières dans LibreOffice, [ici](http://www.oooninja.com/2007/12/example-regular-expressions-for-writer.html). Nous couvrons aussi ceci dans la tâche plus longue ci-dessus, mais ce n’est pas vraiment simple et direct.

## Reposez-vous et réfléchissez

L’Homme invisible peut apparaître à n’importe quel moment, c’est pourquoi, nous devons être vigilant.

  * Comment cet espace blanc a été introduit dans notre donnée ?
  * Pouvez-vous penser à d’autres manières d’aborder le problème ?

Partagez vos idées dans les commentaires.

Maintenant, passons à la troisième section dans ce cours sur le nettoyage des données : Vos données sont une potion magique !

### Note
Ce cours a été conçu pour le projet École des données par [Tactical Technology Collective](http://tacticaltech.org/). Tactical Tech est une ONG internationale travaillant sur le lien entre la défense des droits, l’information et la technologie.  

Article d’origine : [Section 2: the Invisible Man is in your spreadsheet, messing with your data](http://schoolofdata.org/handbook/courses/data-cleaning-invisible-man-in-spreadsheets/)



