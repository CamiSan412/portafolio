document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');
    const enviarBtn = document.getElementById('enviarBtn');

    const nombreError = document.getElementById('nombreError');
    const emailError = document.getElementById('emailError');
    const asuntoError = document.getElementById('asuntoError');
    const mensajeError = document.getElementById('mensajeError');

    function validateForm() {
        let isValid = true;

        if (nombre.value.trim() === '' || nombre.value.length > 50) {
            nombreError.textContent = 'El nombre no debe estar vacío y debe contener máximo 50 caracteres.';
            nombreError.style.display = 'block';
            isValid = false;
        } else {
            nombreError.style.display = 'none';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '' || !emailPattern.test(email.value)) {
            emailError.textContent = 'Debe ingresar un correo electrónico válido.';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        if (asunto.value.trim() === '' || asunto.value.length > 50) {
            asuntoError.textContent = 'El asunto no debe estar vacío y debe contener máximo 50 caracteres.';
            asuntoError.style.display = 'block';
            isValid = false;
        } else {
            asuntoError.style.display = 'none';
        }

        if (mensaje.value.trim() === '' || mensaje.value.length > 300) {
            mensajeError.textContent = 'El mensaje no debe estar vacío y debe contener máximo 300 caracteres.';
            mensajeError.style.display = 'block';
            isValid = false;
        } else {
            mensajeError.style.display = 'none';
        }

        enviarBtn.disabled = !isValid;
        return isValid;
    }

    form.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault(); // Evita el envío del formulario si no es válido
        } else {
            event.preventDefault(); // Evita el envío del formulario para manejarlo con fetch
            const formData = new FormData(form);

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => alert('Formulario enviado exitosamente'))
            .catch((error) => alert('Error al enviar el formulario'));
        }
    });
});
