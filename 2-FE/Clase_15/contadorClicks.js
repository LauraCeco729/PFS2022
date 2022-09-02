"use strick";

let btnContador = document.getElementById("btnContador");

let cuentaClicks = 0;

btnContador.addEventListener("click", contar);

function contar() {
    cuentaClicks++;
    console.log(`Clicks realizados: ${cuentaClicks}`);
    alert(`Clicks realizados: ${cuentaClicks}`);
}