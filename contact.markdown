---
layout: page
title: Contact
permalink: /contact/
order: 4
---

<form class="contact text-center" name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
  <p>
    <input class="p-4 bg-accent-grey rounded-md w-full" type="text" name="name" placeholder="Name"/>
  </p>
  <p>
    <input class="p-4 bg-accent-grey rounded-md w-full" type="text" name="email" placeholder="Email"/>
  </p>
  <p>
    <textarea rows="10" class="p-4 bg-accent-grey rounded-md w-full" name="message" placeholder="Message"></textarea>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p class="submit-wrapper">
    <button class="p-4 w-full text-center font-bold bg-accent-yellow text-accent-black inline-block rounded-md hover:brightness-110 ease-in-out duration-200" type="submit">Send</button>
  </p>
</form>
