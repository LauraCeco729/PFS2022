"use strick";

let cuentaClicks = 0;
let cajaClick = 1;

btnSumar.addEventListener("click", sumar);
btnRestar.addEventListener("click", restar);
txtCantidad = document.getElementById("txtCantidad");
tbxNum.addEventListener("input", refrescarValor);

function sumar() {
    cuentaClicks += cajaClick;
    console.log(`Sumo clicks: ${cuentaClicks}`);
    mostrar();
}

function restar() {
    cuentaClicks -= cajaClick;
    console.log(`Resto clicks: ${cuentaClicks}`);
    mostrar();
}

function mostrar() {
    txtCantidad.innerHTML = `La cantidad es: ${cuentaClicks}`;
    console.log(`La cantidad es: ${cuentaClicks}`);
}

function refrescarValor() {
    let valor = parseInt(tbxNum.value);
    cajaClick = valor;
}