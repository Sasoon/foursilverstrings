---
layout: page
title: Paintings
permalink: /paintings/
order: 2
---

<!-- Generates painting listing page  -->
{% for painting in site.paintings %}
 {% include painting.html %}
{% endfor %}