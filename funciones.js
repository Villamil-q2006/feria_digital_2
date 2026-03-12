document.addEventListener("DOMContentLoaded", function(){

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

if(formulario){

formulario.addEventListener("submit", function(e){

e.preventDefault();

const nombre = document.getElementById("nombre").value;
const edad = document.getElementById("edad").value;
const contacto = document.getElementById("contacto").value;

if(nombre === "" || edad === "" || contacto === ""){
resultado.textContent = "Por favor complete todos los campos";
resultado.style.color = "red";
return;
}

resultado.textContent = "Inscripción enviada correctamente";
resultado.style.color = "lightgreen";

formulario.reset();

});

}

});