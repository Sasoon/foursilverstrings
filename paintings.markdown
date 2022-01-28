---
layout: page
title: Paintings
permalink: /paintings
order: 2
---

<!-- Generates painting listing page  -->
<div class="painting-listing-container">
  {% for painting in site.paintings %}
    {% include paintings.html %}
  {% endfor %}
</div>

