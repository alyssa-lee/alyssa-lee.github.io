---
layout: post
title: "Preprint out! HaloMPNN: salt-tolerant enzyme design"
date: 2026-08-04
description: "\"HaloMPNN: retraining ProteinMPNN on halophilic proteomes for salt-tolerant enzyme design\" by Alyssa Lu Lee, Austin Seamann, Gwendolyn Chung, Clairie Zhao, Rohan Maddamsetti, Sagar Khare, bioRxiv, 2026 (preprint). doi: https://doi.org/10.64898/2026.08.02.742362"
tags: phd biology
categories: blog
---

Check out my latest [preprint](https://doi.org/10.64898/2026.08.02.742362)!

"**HaloMPNN: retraining ProteinMPNN on halophilic proteomes for salt-tolerant enzyme design**" by Alyssa Lu Lee, Austin Seamann, Gwendolyn Chung, Clairie Zhao, Rohan Maddamsetti, Sagar Khare, bioRxiv, 2026 (preprint). doi: https://doi.org/10.64898/2026.08.02.742362

I also presented a poster at [RosettaCon](https://rosettacommons.org/events/src/), and it's available [here](https://github.com/alyssa-lee/HaloMPNN_figures/blob/c19232bc6dc4a22edb8a7f600b97d6f67c92491f/additional_figures/poster/HaloMPNN_poster_RosettaCon_Aug2026.pdf). You can find and use HaloMPNN (the model weights) at our [GitHub](https://github.com/alyssa-lee/HaloMPNN_figures).

Our goal is to redesign proteins to increase their salt tolerance. Enzymes that function at extremely high salt concentrations may be useful for seaweed degradation, turning the problematic *Sargassum* seaweed bloom in the Atlantic into a sustainable biomanufacturing resource (see the [Sargassum BioRefinery project](https://sabreproject.org)).

To design proteins that can resist high salt, we took inspiration from life at the extremes. Extreme halophilic ("salt-loving") organisms must make proteins that function at high salt (both inside and outside the cytoplasm). Halophilic proteins tend to have certain properties, including a negatively charged surface and reduced hydrophobicity, that enable them to tolerate high salt concentrations.

ProteinMPNN is computational model that predicts the *sequence* of a protein based on its three-dimensional *structure*. It's often used to generate alternative sequences for an existing protein to try to improve its properties. We hypothesized that training ProteinMPNN on salt-tolerant proteins would create a model capable of designing proteins with salt-tolerant properties.

Our model, HaloMPNN, redesigns protein sequences to shift their properties towards those of natural halophilic proteins. Preliminary computational results look promising! If you're curious, check out our preprint for more details.

Our next step is to actually make these proteins and test them to see if they work at high salt concentrations! I'll defer to our wet-lab collaborators on this one, since I'm no good with a pipette. I'm excited to see how it turns out.


![sargassum seaweed stranded on beach](../../../assets/img/2026-08-04/AdobeStock_217958328.jpeg){: style="max-width:400px"}

*Sargassum* seaweed, stranded on a beach.


[back to blog](../../)

&nbsp;
&nbsp;
&nbsp;

***