//let <identificador> :  tipo [] = new Array (<maxl>);

import * as rls from 'readline-sync';

let num: number[] = new Array(7);

num[0] = 20;
num[1] = 14;
num[2] = 8;
num[3] = 0;
num[4] = 5;
num[5] = 19;
num[6] = 24;

let indice: number = rls.questionInt("Ingrese un numero de posicion que este entre 0 y 6: ");
if (indice >= 0 && indice <= 6)
    console.log("El valor del arreglo es", num[indice]);
else
    console.log("Error. No ingreso un numero de posicion correcto");
