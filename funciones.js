document.addEventListener("DOMContentLoaded", function() {

    // --- VALIDACIÓN DE INSCRIPCIÓN (TU LÓGICA ORIGINAL) ---
    const formulario = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");

    if (formulario) {
        formulario.addEventListener("submit", function(e) {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const edad = document.getElementById("edad").value;
            const contacto = document.getElementById("contacto").value;

            // Validar campos vacíos
            if (nombre === "" || edad === "" || contacto === "") {
                resultado.textContent = "Por favor complete todos los campos";
                resultado.style.color = "red";
                return;
            }

            // Validar mayoría de edad
            if (parseInt(edad) < 18) {
                resultado.textContent = "Debes ser mayor de edad para inscribirte";
                resultado.style.color = "red";
                return;
            }

            // Validar número de teléfono (10 dígitos)
            if (!contacto.match(/^[0-9]{10}$/)) {
                resultado.textContent = "El contacto debe ser un número de 10 dígitos";
                resultado.style.color = "red";
                return;
            }

            // Si todo está bien
            resultado.textContent = "Inscripción enviada correctamente";
            resultado.style.color = "lightgreen";
            formulario.reset();
        });
    }
});