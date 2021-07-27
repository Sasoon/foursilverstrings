---
layout: page
title: Custom order
permalink: /custom/
exclude: true
---

<form name="custom-order" method="POST" data-netlify="true" data-netlify-recaptcha="true">
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
  <p>
    <button type="submit">Send</button>
  </p>
</form>