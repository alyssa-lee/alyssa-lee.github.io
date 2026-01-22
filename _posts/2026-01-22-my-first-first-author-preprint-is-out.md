---
layout: post
title: My very first first-author preprint is out!
date: 2026-01-22
description: "\"Zero-shot ecological annotation of microbial genomes with myLLannotator accelerates scientific discovery\" by Alyssa Lu Lee, Arya Sharma, and Rohan Maddamsetti, bioRxiv, 2026 (preprint). doi: https://doi.org/10.64898/2026.01.18.700140"
tags: phd biology
categories: blog
---

I'm very excited to share that my very first first-author preprint is out! It is called "**Zero-shot ecological annotation of microbial genomes with myLLannotator accelerates scientific discovery**" by Alyssa Lu Lee, Arya Sharma, and [Rohan Maddamsetti](https://maddamsetti.science/), bioRxiv, 2026 (preprint). You can see it at [bioRxiv](https://www.biorxiv.org/content/10.64898/2026.01.18.700140v1).

I wrote a python package called [myLLannotator](https://pypi.org/project/myllannotator/), a user-friendly tool for automated annotation of metadata with open-source large language models. 

The idea came up quite naturally in a conversation with my professor, while we were discussing some of his previous work. As part of it, he had to go through a very large number of microbial samples from an online genome database and label each one based on where it came from (for example, "Humans", "Animals", or "Food"). Unfortunately, the metadata was often missing or inconsistent. For example, some samples would list the host as "Homo sapiens", while others might leave it blank and write "human sputum" in an entirely different field. This is frustrating when you have to annotate thousands of samples. Then, if you wanted to add another category, like whether the microbial sample is a pathogen or not, you would have to go through and annotate thousands of samples *again*. Most researchers do not want to do this. They would prefer to spend their time thinking of cool new ideas.

Fortunately, large language models are great at this type of task. We tried automating the same annotation task from his original paper, and it worked great! We wanted to create a tool that was fast, easy to use, and open-source to make LLM annotation more accessible to all kinds of researchers, even those without much coding experience or access to powerful computers. That's why we built myLLannotator around a very small LLM, llama3.2-3B, which runs fairly fast on a laptop. (Although you can absolutely hook it up to more powerful LLMs if you want to!) Despite the model's small size, it was able to replicate the paper's results and even make a new discovery. We are excited to share myLLannotator with the research community, and we hope that it will help researchers analyze large public databases without having to label everything by hand.

Our python package can be installed from [PyPI](https://pypi.org/project/myllannotator/) and the source code is available at [Github repo](https://github.com/alyssa-lee/myLLannotator) (open-source!). Programming enthusiasts are encouraged to poke around in the code and adapt it for their own needs.


**Aside: thoughts on the research and writing process**: This was relatively quick and simple as far as research papers go. (Some take years and years...) I definitely have ambitions to work on larger-scale projects and train fancy machine learning models of my own, but this is a win! It's straightforward and concretely useful. This is also my first time writing a paper and navigating the publication process (with a lot of help from my professor, of course). I'm delighted to be doing science.

[back to blog](../../)

&nbsp;
&nbsp;
&nbsp;

***