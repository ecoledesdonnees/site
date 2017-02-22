---
layout: cours
title:   Réaliser un inventaire des données
date:   2017-02-22
author : Pierre Chrzanowski
categories: fondamentaux
description: "Apprendre à réaliser et maintenir un inventaire des données"
tags: [données, introduction]
---

# Pourquoi ce guide ?

À l’ère du numérique, savoir quelles données sont collectées, stockées, traitées, distribuées est un devenu enjeu majeur pour toute organisation. Ceci est d’autant plus vrai depuis l'avènement des concepts de plateformes et données ouvertes qui obligent les organisations, et en particulier les services publics, à repenser leurs infrastructures de données. Désormais, la donnée n’est plus seulement utile à celui qui la collecte, elle se partage. 

L’objectif de l’inventaire des données est de fournir à tout acteur interne, mais également externe à une organisation, une liste la plus fidèle possible des sources et jeux de données. Ce guide a donc été conçu pour fournir un outil méthodologique simple et pratique à utiliser pour réaliser un inventaire.

# À qui s'adresse ce guide ?

Ce guide s’adresse en premier lieu aux acteurs de la donnée (Directeur des systèmes d’information, Responsable des statistiques, Administrateur des données, Responsable open data, Contrôleur des données, etc.) qui souhaitent pouvoir mieux planifier leurs activités et travailler ensemble. Il s’adresse également à toute personne qui souhaite pouvoir identifier et qualifier les données qui lui seront utiles pour son projet, sa mission. Un inventaire doit également permettre aux utilisateurs des données d’identifier et utiliser plus facilement les données mises à disposition. Il sera particulièrement utile dans le cadre d’un programme de données ouvertes. Ce document s’adresse enfin à tout type d’organisation, de l’administration publique disposant de plusieurs départements, à la petite association de quelques personnes, en passant par les différents types d’entreprises. Il pourra être adapté selon la complexité de celle-ci. 

# Les étapes d’un inventaire de données

Un inventaire des données est un processus continu et itératif qui dépend des priorités et du contexte de l’organisation. Un inventaire des données est très rarement exhaustif dans les grandes organisations, et ne doit dans tous les cas pas viser à l’être. Par ailleurs, l’inventaire ne sera utile que si il est utilisé. C’est pourquoi il devrait faire partie des ressources mises à disposition au sein de l’organisation et être conçu pour être utile au plus grand nombre. **Lorsque l’organisation est engagée dans une démarche de données ouvertes, l’inventaire a vocation à être ouvert. **Enfin, il est bien évident qu’un inventaire est une opération qui peut se révéler fastidieuse. Un inventaire des données devrait avoir parmis ses principaux objectifs l’automatisation de l’inventaire, via notamment la démocratisation de l’usage des métadonnées et des catalogues (portails) de données.

**Les étapes d’un inventaire des données peuvent se résumer ainsi :**

<table>
  <tr>
    <td>Étape #1 - Identifier et définir les rôles et responsabilités</td>
    <td>Des plus en plus les organisations se dote d’un Chief Data Officer (Responsable des Données) dont l’une des missions est de tenir un inventaire des données. Dans tous les cas, les responsables de l’inventaire des données devront avoir une bonne connaissance des différents champs sémantiques de la donnée mais également un bon relationnel. Un inventaire des données étant avant tout un processus collaboratif, qui sera généralement réalisé avec des points focaux ou coordonnateurs au sein des organisations et départements ayant une bonne connaissances à la fois des données existantes dans leur périmètre, mais également de leurs gestionnaires.</td>
  </tr>
  <tr>
    <td>Étape #2 - Définir les priorités et le périmètre de l’inventaire</td>
    <td>Le périmètre est généralement celui des données produites par l’organisation mais peut s’étendre au delà. Dans le cas d’un programme de données ouvertes national, on pourra déterminer le périmètre en fonction des organismes publics et de leur statut (administrations publiques centrales, locales, entreprises fournissant un service public, associations, organismes de recherche, etc.) et en indiquant la réglementation en terme de données ouvertes pour chacune de ces organisations. Les priorités de l’inventaire doivent aider à cibler les premières sources de données à recenser et démarrer l’inventaire. Sauf restriction spécifique telle que le secret défense, tous les jeux de données, incluant les jeux de données contenant des données personnelles, devraient faire partie de l’inventaire. Il peut être également très utile d’identifier les données non collectées mais qui devraient l’être, selon la loi par exemple, ou bien parce que fortement demandées par les utilisateurs.</td>
  </tr>
  <tr>
    <td>Étape #3 - Définir le contenu de l’inventaire</td>
    <td>Définir les informations qui seront collectées sur les données lors de l’inventaire. Voir section dédiée ci-dessous pour plus de précision.</td>
  </tr>
  <tr>
    <td>Étape #4 - Démarrer l’inventaire</td>
    <td>Démarrer l’inventaire en partant de sources d’information existantes. Il peut s’agir d’anciens inventaires ou documents stratégiques, par exemple sur la planification des systèmes d’information. Les documents financiers peuvent également être une bonne source d’information.</td>
  </tr>
  <tr>
    <td>Étape #5 - Identifier les sources et jeux de données</td>
    <td>Identifier les sources et jeux de données grâce à la collaboration des points focaux et responsables des systèmes d’information. L’inventaire pourra se faire via des réunions en face à face. Les questionnaires en ligne ou envoyés par email sont à proscrire, le taux de retour est bien souvent très faible et le nombre de données identifiées bien moindre que lors d’un échange interactif. Les réunions de groupe sous forme d’atelier de travail avec plusieurs départements sont également un très bon moyen pour accélérer la procédure, rendre l’activité plus inclusive et collaborative et identifier plus de données. Elles sont à privilégier (voir également la section Aide méthodologiques pour l’Identification des données). Dans tous les cas cette étape et la suivante devrait être réalisée de manière agile et itérative. N’attendez pas d’avoir rencontré tous vos interlocuteurs pour diffuser une première version de l’inventaire. </td>
  </tr>
  <tr>
    <td>Étape #6 - Diffuser l’inventaire et recueillir les avis des utilisateurs</td>
    <td>Une fois la première version de l’inventaire constitué, diffuser le résultat et, dans le cas d’un programme de données ouvertes, publier le jeu de données résultant en ligne, après une procédure d’anonymisation si besoin, et demander au public son avis.</td>
  </tr>
  <tr>
    <td>Étape #7 - Mettre à jour l’inventaire</td>
    <td>Itérer les étapes #5 et #6</td>
  </tr>
</table>


# Le contenu d’un inventaire de données

Voici les informations que l’on pourra utiliser pour réaliser un inventaire de données.

**Producteur**

Nom de l’équipe, du département, de l’administration, de l’agence, de l’entreprise ou de l’association qui est responsable de la production, de la gestion et de la diffusion des données. Il est utile ici de s’appuyer sur une liste de référence, comme un organigramme dans une entreprise, ou bien la liste des organismes publics d’un pays, afin d’assurer que les producteurs seront toujours écrits avec la même orthographe.

**Nom du jeu de données**

Nom précis et signifiant du jeu de données. Un jeu de données correspond généralement à une ou plusieurs extractions (table, vue) d’une base de données ou tout autre ensemble de données. On distingue le jeu de données et les différentes ressources ou distributions du jeu de données que l’on pourra utiliser. Ces ressources permettent de proposer le jeu de données dans différents formats (xls, csv, json), différentes vues (budget par programme, budget par mission ), ou de proposer différents sous ensemble de données (budget général et budgets spéciaux). Les ressources pourront être listés dans la description. (NOTE:  Il est important de noter ici qu'il n'existe pas une définition unique du jeu de données. Ainsi le modèle DCAT du W3C, qui vise à standardiser les catalogues de données, définit le jeu de données comme une collection de données, publiées ou organisées par un seul agent, et disponibles pour accès ou téléchargement en un ou plusieurs formats. Dans cette définition, le jeu de données ne peut être constitué de différents contenus ou ressources, seulement de différentes distributions (différents formats ou web service par exemple). Cette définition diffère de celle utilisé par le portail open source CKAN qui utilise le concept de ressources qui  peuvent être différents contenus du jeu de données.)

**Description**

Description du contenu du jeu de données, facilement compréhensible par tous.

**Catégorie**

La ou les catégories du jeu de données qui permettront de le trouver plus facilement. Les catégories peuvent êtres listes fermées comme les fonctions de l’État par exemple (NOTE:  Voir http://unstats.un.org/unsd/cr/registry/regcst.asp?Cl=4), ou bien des listes ouvertes, comme les mots clés.

**Source de données**

Nom et description de la source de données. La source de données est le système d’information, généralement une base de données, qui permet de collecter et gérer les données dont sont extraits les jeu de données. On indique également le type de technologie et de logiciel utilisés ainsi que la location physique des serveurs, notamment si ceux-ci sont hébergés et gérés hors de l’organisation, voire à l’étranger.

**Distribution(s)**

Formats numériques disponibles pour le jeu de données.** **Indiquer également si les données sont accessibles via une API (interface de programmation applicative) ou via un service web. Il s’agit ici de savoir si les données peuvent être directement interrogées et utilisés par un autre programme informatique. La plupart des portail des données ouvertes permettent désormais d’interroger les métadonnées, le catalogue des jeux de données. Ce n’est pas ce qui nous intéresse ici.

**Date de mise à jour**

Date de la dernière mise à jour du jeu de données ou de la source de données à la date de l’inventaire.

**Fréquence de mise à jour**

Fréquence de mise à jour du jeu de données ou de la source de données telle que définie par le producteur de données.

**Date de l’inventaire (timestamp)**

Date à laquelle le jeu de données a été renseigné ou mis à jour dans l’inventaire.

**Couverture géographique**

Couverture géographique du jeu de données (monde, région, pays, département, commune, etc.).

**Granularité**

Niveau de granularité ou de désagrégation du jeu de données. Ce peut être le village, la commune, l’arrondissement, l’école, le centre de santé, le service public, etc.

**Disponible en ligne (lien de téléchargement)**

Si le jeu de données est déjà disponible en ligne, indiquez le ou les liens de téléchargement.

**Droit d'utilisation**

Termes d’utilisation ou licence d’utilisation accompagnant le jeu de données.

**Redevance**

Dans le cas ou l’accès ou l’utilisation du jeu de données sont payants, indiquez le modèle tarifaire ou le cas échéant le coût constaté.

**Données personnelles**

Indiquez si le jeu de données contient des données personnelles au sens de la loi, et si oui, quel type de données personnelles. Vous pouvez également indiquer si le jeu de données a subi une procédure d’anonymisation.

**Classification**

Si elle existe, indiquez la classification du jeu de données. Ce champs est généralement utilisé pour indiquer si la donnée contient des informations sensibles ou protégées au regard de la loi.

**Documentation (lien url)**

Lien vers la documentation accompagnant le jeu de données. La documentation aide à comprendre et utiliser le jeu de données et peut fournir des informations sur la méthode de collecte, le contenu, la qualité, le dictionnaire de données, les standards ou codes (codelist) utilisés, etc.

**Priorité**

Indication sur le niveau de priorité en terme d’ouverture (mise à disposition en données ouvertes). Ce niveau de priorité donne une indication sur l’importance du jeu de données en fonction de critères qui peuvent être exogènes (standards internationaux comme l’Open Data Barometer) mais aussi fonction du contexte local (priorités politiques, demande des utilisateurs, etc.).

**Point(s) de contact**

Nom, email (éventuellement numéro de téléphone) d’un ou plusieurs points de contact ayant un droit d’accès direct au jeu de données. Il s’agit généralement de la personne en charge de la source de données, qui peut être différente de la personne disposant de l’autorité pour les diffuser.

# Aide pour l’identification des données

Les compétences des interlocuteurs vis à vis des données sont parfois très inégales. Les différents services ont souvent "le nez dans le guidon" de leur activité et peinent parfois à correctement vous renseigner sur les données qu’ils possèdent ou non. Votre interlocuteur n’a probablement pas la même représentation mentale des données que vous, il faut vous aider mutuellement. Ce que vous vous jugez légitimement être une donnée intéressante, il pourra l’omettre plus ou moins consciemment, persuadé que cela ne vous intéresse pas. Une bonne pratique consiste à **lister un peu systématiquement tous les types de données** que votre interlocuteur pourrait posséder. Nous avons identifié les types suivants : agendas, annuaires, budgets, catalogues, listes, comptes, cartes (souvent des données), effectifs, emprises, éphémérides, flux, historiques, index, indices, statistiques, prix, recensements, relevés (relevés manuels, relevés périodiques, relevés automatiques, capteurs, etc.), référentiels, répertoires, subventions, tableaux, tableaux de bord, etc. Après avoir écouté ses premiers retours, n’hésitez pas à balayer cette liste avec votre interlocuteur, pour vérifier que vous ne passez pas à côté de choses importantes.

# Références

Ce document est librement adapté du[ guide pour un inventaire de données de la ville de San Francisco](https://datasf.org/resources/) et s’inspire également [du guide du Royaume Uni pour développer une infrastructure informationnelle nationale](https://data.gov.uk/sites/default/files/130713%20Guidance%20on%20NII%20v4_10.pdf). 

