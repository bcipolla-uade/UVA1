document.addEventListener('DOMContentLoaded', () => {
    // Manejo del tema oscuro/claro
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);

    document.querySelectorAll('.dropdown-item[data-theme]').forEach(item => {
        item.addEventListener('click', () => {
            const theme = item.getAttribute('data-theme');
            setTheme(theme);
        });
    });

    function setTheme(theme) {
        const body = document.body;
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        const themeIcon = document.querySelector('#darkModeToggle img');
        
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            header.classList.add('dark-mode');
            footer.classList.add('dark-mode');
            if (themeIcon) themeIcon.src = 'img/moon-stars-fill.svg';
        } else {
            body.classList.remove('dark-mode');
            header.classList.remove('dark-mode');
            footer.classList.remove('dark-mode');
            if (themeIcon) themeIcon.src = 'img/sun-fill.svg';
        }
        localStorage.setItem('theme', theme);
    }

    // Validación del formulario
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
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
            if (msgDiv) {
                if (errors.length > 0) {
                    msgDiv.innerHTML = '<div class="alert alert-danger">' + errors.join('<br>') + '</div>';
                } else {
                    msgDiv.innerHTML = `<div class="alert alert-success">Gracias por su contacto, <b>${name}</b>.<br>En breve le estaré respondiendo.</div>`;
                    this.reset();
                }
            }
        });
    }
});
