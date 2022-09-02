'uso estricto';

//Genere una cadena con los números del 1 al 100 (usando ciclos), y agreguelos mediante Javascript 
//al cuerpo de la página al presionar un botón.

let boton = document.getElementById("btnCadena");
let cadenaGeneradaTexto = document.getElementById("cadenaGenerada");

boton.addEventListener('click', () => {
    let texto = document.createElement('h4');
    texto.innerHTML = generarCadena();
    cadenaGeneradaTexto.appendChild(texto);

});

function generarCadena() {
    let cadena = new String();

    for (i = 1; i <= 100; i++) {
        cadena = cadena + i
        if (i < 100)
            cadena += ", ";
        else
            cadena += "."
    }
    return cadena;
}