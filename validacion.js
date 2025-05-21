document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let errors = [];

  if (!name) errors.push('Ingrese su nombre.');
  if (!emailRegex.test(email)) errors.push('Ingrese un correo válido.');
  if (!subject) errors.push('Ingrese el asunto.');
  if (!message) errors.push('Ingrese un mensaje.');

  const msgDiv = document.getElementById('form-msg');
  if (errors.length > 0) {
    msgDiv.innerHTML = '<div class="alert alert-danger">' + errors.join('<br>') + '</div>';
  } else {
    msgDiv.innerHTML = `<div class="alert alert-success">Gracias por su contacto, <b>${name}</b>.<br>En breve le estaré respondiendo.</div>`;
    this.reset();
  }
});
