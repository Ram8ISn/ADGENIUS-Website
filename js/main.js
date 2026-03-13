const form = document.getElementById('contactForm');

if (form) {

 form.addEventListener('submit', function(e) {

  e.preventDefault();

  const msg = document.getElementById('msg');

  msg.textContent = "Message sent successfully!";
  msg.style.fontWeight = "bold";

  setTimeout(function(){
   msg.textContent = "";
  }, 4000);

  form.reset();

 });

}