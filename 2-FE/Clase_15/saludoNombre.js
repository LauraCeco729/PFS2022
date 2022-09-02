"use strick";

let tbxNombre, txtSaludo;
tbxNombre = document.getElementById("tbxNombre");
txtSaludo = document.getElementById("txtSaludo");

tbxNombre.addEventListener("input", mostrarSaludo);

function mostrarSaludo() {
    let nombre = tbxNombre.value;
    txtSaludo.innerHTML = `Bienvenido: ${nombre}!!`;
    console.log(nombre);

}