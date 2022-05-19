import * as rls from 'readline-sync';

//Declaración de variables//
let nro, max : number;
//Ingreso de variables//
max = Number.NEGATIVE_INFINITY;
do {
    nro = rls.questionInt("Ingrese numero ('0' para salir): ");
    if ((nro > max) && (nro !=0)) {
        max = nro;
    }
}
while (nro != 0);
console.log('El numero maximo fue: ', max);

