function verMas(id){

const elemento=document.getElementById(id);

if(elemento.style.display==="block"){
elemento.style.display="none";
}else{
elemento.style.display="block";
}

}

document.getElementById("formulario").addEventListener("submit",function(e){

e.preventDefault();

const nombre=document.getElementById("nombre").value;
const edad=document.getElementById("edad").value;
const contacto=document.getElementById("contacto").value;
const resultado=document.getElementById("resultado");

if(nombre===""){
resultado.textContent="El nombre es obligatorio";
return;
}

if(edad<=12){
resultado.textContent="La edad debe ser mayor a 12";
return;
}

if(!/^\d{10}$/.test(contacto)){
resultado.textContent="El contacto debe tener 10 dígitos";
return;
}

resultado.textContent="Inscripción realizada correctamente";

});