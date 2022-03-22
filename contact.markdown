---
layout: page
title: Contact
permalink: /contact/
order: 4
---

<form class="contact" name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
  <p>
    <input type="text" name="name" placeholder="Name"/>
  </p>
  <p>
    <input type="text" name="email" placeholder="Email"/>
  </p>
  <p>
    <textarea name="message" placeholder="Message"></textarea>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p class="submit-wrapper">
    <button type="submit">Send</button>
  </p>
</form>