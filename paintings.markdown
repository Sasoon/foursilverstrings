---
layout: page
title: Paintings
permalink: /paintings/
---


{% for painting in site.paintings %}
 {% include painting.html %}
{% endfor %}