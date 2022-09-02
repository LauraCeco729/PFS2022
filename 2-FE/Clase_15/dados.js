"use strick";

let dado1 = new Array(1000);
let dado2 =  new Array(1000);
let resultadoDados = new Array(1000);
let cantidadSietes = 0;

btnLanzar.addEventListener("click", generarTiro);

function mostrar() {
    txtCantidad.innerHTML = `La cantidad de veces que salio 7 es: ${cantidadSietes}`;
    console.log(`La cantidad de veces que salio 7 es: ${cantidadSietes}`);
}

function generarTiro(){
    for(let i = 0; i < 999 ; i++){
        dado1[i] = Math.floor(Math.random() * 6) + 1;
        dado2[i] = Math.floor(Math.random() * 6) + 1;
        resultadoDados[i] = dado1[i] + dado2[i];
    }
    cantidadSietes = encontrarSietes(resultadoDados);
    mostrar();
}

function encontrarSietes(resultadoDados){
    let numero = 0;
    for(let i = 0; i< 999;i++){
        if(resultadoDados[i] == 7){
            numero++;
        }
    }
    return numero;
}