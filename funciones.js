// Función para mostrar u ocultar información
function verMas(id) {
    const elemento = document.getElementById(id);

    console.log("Botón Ver más presionado");

    if (elemento.style.display === "block") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "block";
    }
}

// Validación del formulario
document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const celular = document.getElementById("celular").value;
    const mensaje = document.getElementById("mensaje").value;
    const resultado = document.getElementById("resultado");

    console.log("Intentando enviar formulario...");

    if (nombre === "") {
        resultado.textContent = "El nombre es obligatorio";
        console.log("Validación fallida: nombre vacío");
        return;
    }

    if (!/^\d{10}$/.test(celular)) {
        resultado.textContent = "El celular debe tener exactamente 10 dígitos";
        console.log("Validación fallida: celular incorrecto");
        return;
    }

    if (mensaje.length < 10) {
        resultado.textContent = "El mensaje debe tener mínimo 10 caracteres";
        console.log("Validación fallida: mensaje corto");
        return;
    }

    resultado.textContent = "Formulario enviado correctamente";
    console.log("Validación exitosa");
});