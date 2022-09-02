'uso estricto';

let asientosTabla = document.getElementById('asientos');
let colAsiento = document.getElementById('textEdit2');
let filAsiento = document.getElementById('textEdit1');
let btnComprar = document.getElementById('btn');
var asientos = new Array(60).fill(0);

btnComprar.addEventListener('click', () => {
    let col = parseInt(colAsiento.value);
    let fil = parseInt(filAsiento.value);
    if (col >= 1 && col <= 3) {
        col--;
        if (fil >= 1 && fil <= 20) {
            fil--;
            let total = col + fil;
            //console.log(`Total: ${total} - ${asientos[total]}`);
            if (asientos[total] == 1)
                alert("Asiento ya reservado");
            else {
                alert('Su compra fue exitosa');
                asientos[total] = 1;
                clearTableBody();
                generateTable();
            }
        }
        else
            alert('La fila tienen que estar entre 1 y 20');
    }
    else
        alert('La columna tienen que estar entre 1 y 3');

})

function onStartUp() {
    generarRandomAsientos();                                //Generar Asientos ocupados Ramdom
    generateTable();                                        //Generar la Tabla dinamicamente
}

function generateTable() {
    for (let i = 0; i < 20; i++) {                          //Generar las filas [1..20]
        fila = document.createElement('tr');                //Creo la fila dinamicamente
        fila.align = "center";                              //Alineo el contenido de la fila al centro
        fila.innerHTML = i + 1;                             //Poner número de fila
        for (let j = 0; j < 3; j++) {                       //Generar las columnas [1..3]
            celda = document.createElement('td');           //Genero la celda
            celda.align = "center";                         //Alineo el contenido de la celda al centro
            tilde = document.createElement('input');        //Creo un input 
            tilde.type = "checkbox";                        //Que sea un checkbox 
            tilde.checked = asientos[j + i];                //Que no tenga tilde 
            if (tilde.checked) {
                tilde.disabled = 'true';
            }
            label = document.createElement('h7');
            label.innerHTML = `F${j + 1}-C${i + 1} `;       //que tenga el nombre del asiento (fila columna)
            celda.appendChild(tilde);                       //Adjuntar elcheckbox a la celda
            celda.appendChild(label);
            fila.appendChild(celda);                        //Adjuntar la celda a la fila
        }
        asientosTabla.appendChild(fila);                    //Adjuntar la fila al tBody
    }
}

function generarRandomAsientos() {
    for (let i = 0; i < asientos.length; i++) {
        let aleatorio = Math.random();
        if (aleatorio > 0.5) {
            asientos[i] = 1;
        }
        else {
            asientos[i] = 0;
        }
    }
    console.log(asientos);
}

function clearTableBody(){
    $('#myTableId tbody').empty();
}