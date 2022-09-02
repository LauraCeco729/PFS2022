'uso estricto';
let tarea = document.getElementById('txtTarea');
let boton = document.getElementById('btnTarea');
let tareas = document.getElementById('tareas');

botón.addEventListener('clic', () => {
    let fila, celda, tilde;
    if (tarea.valor != '') {
        fila = documento.createElement('tr');
        celda = documento.createElement('td');
        celda.innerHTML = tarea.value;
        fila.appendChild(celda);
        tilde = documento.createElement('entrada');
        tilde.tipo = "casilla de verificación";
        tilde.valor = falso;
        fila.appendChild(tilde);
        tareas.appendChild(fila);
    }
});