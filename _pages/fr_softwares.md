---
title: Logiciels
layout: page
permalink: /fr/softwares/
lang: fr
---

<section>

{{"
# AbSolute

AbSolute est un solveur de contraintes basé sur les domaines abstraits. Le code source peut être trouvé sur [GitHub](https://github.com/mpelleau/AbSolute).

Le prototype développé avant ce solver a fait l'objet d'une publication :
- Marie Pelleau, Antoine Miné, Charlotte Truchet, Frédéric Benhamou, Constraint Solver based on Abstract Domains, _14th International Conference on Verification, Model Checking, and Abstract Interpretation_ (VMCAI), Rome, Italie, 2013 [[Article](http://webusers.i3s.unice.fr/~mpelleau/ressources/publi/vmcai-2013.pdf)] [[Bibtex](http://webusers.i3s.unice.fr/~mpelleau/ressources/biblio/pelleau-VMCAI13.bib)]

Ce solveur peut résoudre des problèmes continus, des problèmes discrets mais aussi des problèmes mixtes (contenant des variables entières et réelles). L'image suivante montre les solutions obtenues pour un même problème dépendant du type des variables. Le premier disque a 2 variables réelles, le deuxième 1 variable entière et 1 variable réelle, et le dernier 2 variables entières.

![absoluteb](/~mpelleau/img/absolute_1.png)


AbSolute utilise [Apron](http://apron.cri.ensmp.fr/library/), une librairie Ocaml de domaines abstraits, on peut donc résoudre un problème utilisant des domaines abstraits autre que les intervalles. L'image suivante montre les solutions obtenues pour un problème correspondant à l'intersection de 2 disques, avec les intervalles (résolution usuelle) et avec les octogones.

![absolutes](/~mpelleau/img/absolute_2.png)


Finalement, les domaines abstraits peuvent aussi correspondre à un produit de domaines abstraits. L'image suivante compare les solutions obtenues avec les intervalles à celles obtenues avec le domaine abstrait du produit des intervalles et polyèdres.
![absolutes](/~mpelleau/img/absolute_3.png)
" | markdownify}}
</section>

