
console.log("Autor: Liam Díaz Armas");

function saludo() {
    alert("¡Bienvenido a mi página de anime!");
}

function mostrarHora() {
    document.getElementById("hora").innerHTML = Date();
}

function validarFormulario() {
    let nombre = document.querySelector("input[name='nombre']");

    if (nombre && nombre.value === "") {
        alert("El nombre es obligatorio");
        return false;
    }

    return true;
}