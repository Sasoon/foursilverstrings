---
layout: page
title: Paintings
permalink: /paintings/
order: 2
---


{% for painting in site.paintings %}
 {% include painting.html %}
{% endfor %}