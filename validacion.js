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

  if (errors.length > 0) {
    alert('Errores:\n' + errors.join('\n'));
  } else {
    alert(`Gracias por su contacto, ${name}. En breve le estaré respondiendo.`);
    this.reset();
  }
});
