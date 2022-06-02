---
layout: page
title: Paintings
permalink: /paintings
order: 2
---

<!-- Generates painting listing page  -->
<div class="painting-listing-container md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:grid">
  {% for painting in site.paintings %}
    {% include paintings.html %}
  {% endfor %}
</div>
