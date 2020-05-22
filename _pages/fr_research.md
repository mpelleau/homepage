---
title: Recherche
layout: page
permalink: /fr/research/
lang: fr
---

<section>

{{"
# Thèmes de recherche

- Programmation par contraintes
- Interprétation Abstraite
- Apprentissage
" | markdownify}}
</section>

<section class="highlight">

{{"
# Thèse de doctorat : Domaines abstraits en Programmation par contraintes

La thèse que j’ai réalisée entre octobre 2009 et novembre 2012 s’intitule Domaines abstraits en programmation par contraintes et a été dirigée par Frédéric Benhamou, Pascal van Hentenryck et Charlotte Truchet. J’y étudie les liens entre deux domaines de recherche différents, à savoir la programmation par contraintes (PPC) et l’interprétation abstraite (IntAbs). La PPC permet de formaliser et résoudre des problèmes fortement combinatoires, dont le temps de calcul évolue en pratique exponentiellement. Les méthodes développées aujourd’hui résolvent efficacement de nombreux problèmes industriels de grande taille dans des solveurs génériques. Cependant, les solveurs restent dédiés à un seul type de variables : réelles ou entières, et résoudre des problèmes mixtes discrets-continus suppose des transformations ad hoc.

Dans un autre domaine, l'IntAbs permet de prouver des propriétés sur des programmes, en étudiant une abstraction de leur sémantique concrète, constituée des traces des variables au cours d’une exécution. Plusieurs représentations de ces abstractions, appelées domaines abstraits, ont été proposées. Traitées de façon générique dans les analyseurs, elles peuvent mélanger les types entiers, réels et booléens, ou encore représenter des relations entre variables.

En partant du constat qu’en PPC et en IntAbs, des sur-approximations d’un ensemble désiré sont calculées, la notion de domaines abstraits en IntAbs a été redéfinie en PPC afin de construire une méthode de résolution traitant indifféremment les entiers et les réels. Cette généralisation permet d’intégrer à la PPC des domaines relationnels, comme les octogones déjà utilisés en IntAbs. En exploitant l’information spécifique aux octogones pour guider la recherche de solutions, de bonnes performances on été obtenues sur les problèmes continus.

Dans un deuxième temps, une méthode générique de résolution de contraintes a été définie avec des outils d’IntAbs, afin d’intégrer les domaines abstraits existants. Le prototype, [AbSolute](fr/softwares), peut ainsi résoudre des problèmes mixtes et utiliser les domaines relationnels implémentés.
    
" | markdownify}}
</section>

<section>

{{"
# Post-doctorat à l'Université de Montréal
    
Lors du stage postdoctoral que j'ai effectué entre septembre 2013 et septembre 2015 à l'Université de Montréal, sous la supervision de Louis-Martin Rousseau et Pierre L'Écuyer, j'ai utilisé la PPC pour modéliser et résoudre le problème de confection des horaires des agents dans les centres d'appels et ainsi proposer des solutions à deux entreprises, Hydro-Québec et Aheeva.

Hydro-Québec (HQ) utilise pour la gestion de ses centre d'appels un logiciel commercial, cependant celui-ci ne permet pas de répondre à certaines demandes des gestionnaires. Les limitations soulevées par les gestionnaires étaient les suivantes, il n'y avait pas de durée minimum pour chaque activité, ainsi les employés pouvaient changer d'activité à chaque période de 15 minutes, ce qui n'est pas efficace. De plus, les activités sont toutes traitées de la même façon, hors certaines activités sont en pratique prioritaires par rapport à d'autres. Finalement, lorsqu'un agent est affecté à une activité téléphonique, celui-ci est affecté à tous les types d'appels pour lequel il est compétent, et non pas à un sous-ensemble d'appels. En PPC il est possible d'utiliser des langages formels pour résoudre des problèmes d'ordonnancement complexes. Nous avons donc utilisé la PPC afin de modéliser et résoudre le problème de confection d'horaires, pour un jour donné, pour les centres d'appels d'HQ. 

Dans le cadre du projet avec Aheeva, nous avons intégrer et combiner des résultats de travaux de recherche aux outils logiciels pour la gestion des centres d'appels, créés par cette entreprise. Le produit final peut à partir de données d'un centre d'appels détecter les jours dits spéciaux (noël, jour de l'an, lundi de pâques, ...) et prévoir les arrivées d'appels pour la semaine suivante pour un type d'appel. À partir du volume d'appels prévu, le nombre d'employés nécessaires est déterminé et les horaires sont confectionnés. Dans ce projet, des techniques de PPC, combinées à un simulateur de centres d'appels ont été utilisées pour la confection des horaires. La simulation de modèles statistiques permet d'estimer certaines métriques, tel que le temps de réponse moyen des appels. Ces métriques sont prises en compte en ajoutant des contraintes redondantes au modèle de confection des horaires.
" | markdownify}}
</section>