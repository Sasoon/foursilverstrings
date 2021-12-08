---
layout: page
title: Contact
permalink: /contact/
order: 4
---

<form class="contact" name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
  <p>
    <label><span>Name:</span> <input type="text" name="name" /></label>   
  </p>
  <p>
    <label><span>Email:</span> <input type="email" name="email" /></label>
  </p>
  <p>
    <label><span>Message:</span> <textarea name="message"></textarea></label>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p class="submit-wrapper">
    <button type="submit">Send</button>
  </p>
</form>