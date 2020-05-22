---
title: Research
layout: page
permalink: /en/research/
lang: en
---

<section>

{{"
# Research Interests

- Constraint Programming
- Abstract Interpretation
- Learning
" | markdownify}}
</section>

<section class="highlight">

{{"
# Ph.D. thesis: Abstract Domains in Constraint Programming


From October 2009 to November 2012, I was a Ph.D. student. My thesis' title is Abstract Domains in Constraint Programming and my supervisors were Frédéric Benhamou, Pascal van Hentenryck and Charlotte Truchet. I studied the links between two different research areas, namely Constraint Programming (CP) and Abstract Interpretation (AI). CP aims at formalizing and solving hard combinatorial problems, with a computation time increasing in practice exponentially. The methods are today efficient enough to solve large industrial problems, in a generic framework. However, solvers are dedicated to a single variable type: integer or real. Solving mixed discrete-continuous problems relies on ad hoc transformations.

In another field, AI offers tools to prove program properties by studying an abstraction of their concrete semantics, that is, the set of possible values of the variables during an execution. Various representations for these abstractions have been proposed. They are called abstract domains. Addressed generically by analyzers, abstract domains can mix any type of variables, and event represent relations between variables.

Based on the observation that in CP and AI, over-approximations of a desired set are computed, the notion of abstract domains in AI was defined in CP so as to design a solving method dealing with both integer and real variables. This generalization allows relational abstract domains to be defined in CP, such as the octagons already used in AI. Guiding the search by the octagonal relations, good results were obtained on a continuous benchmark.

In a second part, a generic solving method is defined using AI techniques, in order to include existing abstract domains. Le prototype, [Absolute](/en/softwares), is able to solve mixed problems and use relational domains.
" | markdownify}}
</section>

<section>

{{"
# Post-doctoral research at the Université de Montréal

From September 2013 to September 2015, I was a post-doctoral fellow at the Université de Montréal, under the supervision of Louis-Martin Rousseau and Pierre L'Écuyer. I used CP to model and solve the problem of scheduling agents in call centers, and thus other software solutions to two compagnies, Hydro-Québec and Aheeva.

Hydro-Québec (HQ) uses a commercial scheduling software to manage their call centers, however the software does not meet some of the critical aspects of the management of HQ's call centers. The limitations were the following, there is no minimum duration for each activity, hence agents could change activity every 15 minutes period, which is not efficient. Moreover, activities are all dealt the same way, yet some activities have priority over other in practice. Finally, once an agent is assigned to a phone activity, they are assigned to all the phone activities for which they are competent, and not a subset of phone activities. In CP it is possible to model and solve the scheduling problem, for a given day, for HQ's call centers.

As part of the project with Aheeva, we integrate and combine results from research to their software tools for managing call centers, created by the company. The final product can, given datas from call centers, detect special days (Christmas, New Year, Easter Monday, ...) and forecast calls arrival for the following week for a call type. Given an expected volume of calls, the number of employees needed is determined and schedule is designed. In this project, CP techniques combined with a call centers simulator have been used to compute the schedules. The simulation of statistical models allows one to estimate some metrics, such as average answer time. These metrics are taken into account by adding redundant constraints to the scheduling model.
" | markdownify}}
</section>
