---
title: Softwares
layout: page
permalink: /en/softwares/
lang: en
---

<section>

{{"
# AbSolute

AbSolute is a constraint solver based on abstract domains. The source code is available on [GitHub](https://github.com/mpelleau/AbSolute).

The first draft of this solver has been published:
- Marie Pelleau, Antoine Miné, Charlotte Truchet, Frédéric Benhamou, Constraint Solver based on Abstract Domains, _14th International Conference on Verification, Model Checking, and Abstract Interpretation_ (VMCAI), Rome, Italie, 2013 [[Article](http://webusers.i3s.unice.fr/~mpelleau/ressources/publi/vmcai-2013.pdf)] [[Bibtex](http://webusers.i3s.unice.fr/~mpelleau/ressources/biblio/pelleau-VMCAI13.bib)]

This solver can solve continous problems, discrete problems, but also mixed problems (containing both discrete and continuous variables). The following picture shows the obtained solutions for the same problem depending on the variable types. The first disc has 2 continuous variables, the second 1 discrete and 1 continuous variable, the last one, 2 discrete variables.

![absoluteb](/~mpelleau/img/absolute_1.png)


AbSolute uses [Apron](http://apron.cri.ensmp.fr/library/), an Ocaml library for abstract domains, one can thus solve problems using abstract domains other than intervals. The following picture shows solutions obtained for a problem corresponding to the intersection of two discs, using intervals (classic solver) on one side, and with octagons on the other side.

![absolutes](/~mpelleau/img/absolute_2.png)


Finally, abstract domains can also correspond to a product of abstract domains. The following picture compares solutions obtained with the intervals to the ones obtained to the product of intervals and polyhedra.

![absolutes](/~mpelleau/img/absolute_3.png)
" | markdownify}}
</section>
