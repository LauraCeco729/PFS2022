let butacas = document.querySelector(".butacas");
let formulario = document.querySelector('#formularioCompras');
let seleccionador = document.querySelector('.seleccionador');
let reservar = document.querySelector('#btn')
let filaHtml = document.querySelector('#tbxFila');
let columnaHtml = document.querySelector('#tbxColumna')
let matriz = new Array(20);
let asientos = ['Izquierda', 'Medio', 'Derecha'];


for (let i = 0; i < matriz.length; i++) {
    matriz[i] = asientos;
}

/*for (let filas = 0; filas < matriz.length; filas++) {
    for (let columnas = 0; columnas < 3; columnas++) {
        console.log(matriz[filas][columnas])
    }
}
*/
reservar.addEventListener('click', () => {
    let filaValor = filaHtml.value
    let columnaValor = columnaHtml.value
    let slot = document.getElementById(filaValor + '-' + columnaValor)
    slot.id = 'parrafoRojo'
    slot.innerHTML = 'X'
})

crearTd()
for (let filas = 0; filas < matriz.length; filas++) {
    console.log("Fila: ", (filas + 1));
    let texto = "";
    for (let columnas = 0; columnas < 3; columnas++) {
        texto += matriz[filas][columnas] + " ";

    }
    crear(filas + 1);
    console.log(texto);
}
function crearTd() {
    let td = document.createElement('td');
    td.innerHTML = 'Asientos';
    td.classList = 'asientos';
    seleccionador.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = 'Ventanilla Izquierda';
    td.classList = 'asientos';
    seleccionador.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = 'Centro';
    td.classList = 'asientos';
    seleccionador.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = 'Ventanilla Derecha';
    seleccionador.appendChild(td);
    td.classList = 'asientos';
}

function crear(num) {
    let tr = document.createElement('tr');
    let tdFila = document.createElement('td');
    if(num < 10) {
        tdFila.innerHTML = `Fila 0${num}`;
    }
    else {
        tdFila.innerHTML = `Fila ${num}`;
    }
    let p_1 = document.createElement('p');
    let p_2 = document.createElement('p');
    let p_3 = document.createElement('p');
    p_1.innerHTML = '0';
    p_2.innerHTML = '0';
    p_3.innerHTML = '0';
    p_1.id = `${num}-1`
    p_2.id = `${num}-2`
    p_3.id = `${num}-3`
    tr.appendChild(tdFila);
    tr.appendChild(p_1);
    tr.appendChild(p_2);
    tr.appendChild(p_3);
    tr.classList = 'asientos';
    formulario.appendChild(tr);
}

