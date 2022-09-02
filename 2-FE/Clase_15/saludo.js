let  boton;
boton = document.getElementById("btnSaludar");

let contador = 0;
boton.addEventListener("click", hacerSaludo);

function hacerSaludo() {
    contador++;
    console.log (`Holaaaaa ${contador}`);
    console.log ('Hola', contador);
    alert (`Hola mundo ${contador}`);
}
