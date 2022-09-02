"use strict";

let fecha = document.getElementById('fecha');
let select = document.getElementById('cb1');
let nombre = document.getElementById('txtApellido');
let asistencia = document.getElementById('asistencia');
let btnAsistencia = document.getElementById('btnAsistencia');
let btnDelete = document.getElementById('btnDelete');


btnAsistencia.addEventListener('click', () => {
    let fila;
    let celdaNombre, celdaFecha, celdaMateria;
    let txt;
    console.log('Click Asistencia');
    if (nombre.value != '') {
        txt = document.createElement('h7')
        fila = document.createElement('tr');
        fila.align = "center";
        //Nombre
        celdaNombre = document.createElement('td');
        txt = document.createElement('h7')
        txt.innerHTML = nombre.value;
        celdaNombre.align = "left"
        celdaNombre.appendChild(txt);
        fila.appendChild(celdaNombre);
        //Materia
        celdaMateria = document.createElement('td');
        txt = document.createElement('h7');
        txt.innerHTML = select.options[select.selectedIndex].text; //Sacado de internet

        celdaMateria.appendChild(txt);
        fila.appendChild(celdaMateria);
        //Fecha
        celdaFecha = document.createElement('td');
        txt = document.createElement('h7')
        txt.innerHTML = fecha.value;
        celdaFecha.appendChild(txt);
        fila.appendChild(celdaFecha);
        if (select.options[select.selectedIndex].value == "mat1")
            fila.style.backgroundColor = "red";
        else if (select.options[select.selectedIndex].value == "mat2")
            fila.style.backgroundColor = "green";
        else
            fila.style.backgroundColor = "yellow";
            asistencia.appendChild(fila);
    }
    else
    alert('Nombre y Apellido vacio');

});

btnDelete.addEventListener('click', () => {
    console.log('Click Eliminar')
    clearTableBody();
});
//Sacado de internet
function clearTableBody() {
    $('#myTableId tbody').empty();
}


